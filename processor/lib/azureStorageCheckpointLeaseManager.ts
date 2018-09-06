// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as uuid from "uuid/v4";
import { CheckpointInfo } from "./checkpointInfo";
import { CheckpointManager } from "./checkpointManager";
import { LeaseManager } from "./leaseManager";
import { BaseHostContext } from "./hostContext";
import { AzureBlob } from "./azureBlob";
import { validateType, getStorageError, EPHActionStrings } from "./util/utils";
import { CompleteLease } from "./completeLease";
import { AzureBlobLease, AzureBlobLeaseInfo, LeaseInfo } from "./azureBlobLease";
import { BlobService as StorageBlobService, StorageError } from "azure-storage";
import { LeaseState } from "./blobService";
import * as log from "./log";
import { maximumExecutionTimeInMsForLeaseRenewal, metadatOwnerName } from "./util/constants";
import { BaseLease, BaseLeaseInfo } from "./baseLease";
import { EPHDiagnosticInfo } from "./modelTypes";
const path = require("path-browserify");

enum UploadActivity {
  create = "create",
  acquire = "acquire",
  release = "release",
  update = "update"
}

/**
 * @ignore
 */
export class AzureStorageCheckpointLeaseManager implements CheckpointManager, LeaseManager {
  leaseRenewInterval: number;
  leaseDuration: number;
  private _context: BaseHostContext;
  private _latestCheckpoint = new Map<string, CheckpointInfo>();

  constructor(context: BaseHostContext) {
    this._context = context;
    this.leaseDuration = this._context.leaseDuration;
    this.leaseRenewInterval = this._context.leaseRenewInterval;
  }

  getAzureBlob(partitionId: string): AzureBlob {
    validateType("partitionId", partitionId, true, "string");
    let result = this._context.blobReferenceByPartition[partitionId];
    if (!result) {
      const blobPath = `${this._context.composedBlobPrefix}${partitionId}`;
      result = new AzureBlob(this._context.hostName, this._context.storageConnectionString!,
        this._context.leasecontainerName, blobPath, this._context.blobService);
      this._context.blobReferenceByPartition[partitionId] = result;
    }
    return result;
  }

  async downloadLease(partitionId: string, blob: AzureBlob): Promise<AzureBlobLease> {
    try {
      const text: string = await blob.getContent();
      const jsonLease: LeaseInfo = JSON.parse(text);
      const blobLeaseInfo: AzureBlobLeaseInfo = {
        ...jsonLease,
        blob: blob
      };
      return new AzureBlobLease(blobLeaseInfo);
    } catch (err) {
      const msg = `An error occurred while downloading the lease for blobPath ` +
        `"${this._context.composedBlobPrefix}${partitionId}". It is: \n` +
        `${err ? err.stack : JSON.stringify(err)}`;
      log.error(msg);
      throw new Error(msg);
    }
  }

  async leaseStoreExists(): Promise<boolean> {
    return await this._context.blobService!.doesContainerExist(this._context.leasecontainerName);
  }

  async createLeaseStoreIfNotExists(): Promise<void> {
    await this._context.blobService!.ensureContainerExists(this._context.leasecontainerName);
    return;
  }

  async deleteLeaseStore(): Promise<void> {
    const blobService = this._context.blobService;
    const leasecontainerName = this._context.leasecontainerName;
    try {
      if (blobService) {
        const listResult = await blobService.listBlobsSegmented(leasecontainerName);
        const deleteBlobs: Promise<void>[] = [];
        for (const blob of listResult.entries) {
          deleteBlobs.push(blobService.deleteBlobIfExists(leasecontainerName, blob.name));
        }
        await Promise.all(deleteBlobs);
        await blobService.deleteContainerIfExists(leasecontainerName);
      } else {
        throw new Error("'blobService' is not defined in the 'hostContext', hence cannot " +
          "list all the blobs.");
      }
    } catch (err) {
      const msg = `An error occurred while deleting the lease store '${leasecontainerName}': %O` +
        `${err ? err.stack : JSON.stringify(err)}`;
      log.error("[%s] %s.", this._context.hostName, msg);
      const info: EPHDiagnosticInfo = {
        error: new Error(msg),
        hostName: this._context.hostName,
        partitionId: "N/A",
        action: EPHActionStrings.deletingLeaseStore
      }
      this._context.onEphError(info);
    }
  }

  async getLease(partitionId: string): Promise<AzureBlobLease | undefined> {
    validateType("partitionId", partitionId, true, "string");
    let result: AzureBlobLease | undefined;
    const blob = this.getAzureBlob(partitionId);
    log.checkpointLeaseMgr("[%s] Getting lease for partitionId '%s'.", this._context.hostName,
      partitionId);
    try {
      if (await blob.doesBlobExist()) {
        result = await this.downloadLease(partitionId, blob);
      }
    } catch (err) {
      const msg = `An error occurred while getting lease for partitionId '%s': \n` +
        `${err ? err.stack : JSON.stringify(err)}`;
      log.error("[%s] %s", this._context.hostName, msg);
      throw new Error(msg);
    }
    return result;
  }

  async getAllLeases(): Promise<BaseLease[]> {
    const result: BaseLease[] = [];
    try {
      const leaseBlobs: StorageBlobService.BlobResult[] = await this._listBlobs();
      for (const lbi of leaseBlobs) {
        const name = lbi.name;
        const partitionId = path.basename(name);
        const leaseInfo: BaseLeaseInfo = {
          partitionId: partitionId,
          owner: lbi.metadata![metadatOwnerName]
        };
        const lease = new BaseLease(leaseInfo);
        lease.isOwned = (lbi.lease && lbi.lease.state === LeaseState.leased) || false;
        result.push(lease);
      }
    } catch (err) {
      const info: EPHDiagnosticInfo = {
        error: err,
        action: EPHActionStrings.gettingAllLeases,
        hostName: this._context.hostName,
        partitionId: "N/A"
      }
      this._context.onEphError(info);
    }
    log.checkpointLeaseMgr("[%s] Number of leases: %d", this._context.hostName, result.length);
    return result;
  }

  async createAllLeasesIfNotExists(partitionIds: string[]): Promise<void> {
    try {
      const leaseBlobs = await this._listBlobs();
      if (leaseBlobs.length === partitionIds.length) {
        log.checkpointLeaseMgr("[%s] Number of blobs %d === Number of partitionIds %d. " +
          "Hence no need to create leases.", this._context.hostName, leaseBlobs.length,
          partitionIds.length);
        return;
      } else {
        const createPromises: Promise<CompleteLease>[] = [];
        for (const id of partitionIds) {
          const createPromise: Promise<CompleteLease> = this.createLeaseIfNotExists(id);
          createPromises.push(createPromise);
        }
        await Promise.all(createPromises);
      }
    } catch (err) {
      const info: EPHDiagnosticInfo = {
        error: err,
        action: EPHActionStrings.creatingAllLeases,
        hostName: this._context.hostName,
        partitionId: "N/A"
      }
      this._context.onEphError(info);
    }
  }

  async createLeaseIfNotExists(partitionId: string): Promise<CompleteLease> {
    validateType("partitionId", partitionId, true, "string");
    log.checkpointLeaseMgr("[%s] createLeaseIfNotExists for partitionId '%s'.",
      this._context.hostName, partitionId);
    let returnLease: AzureBlobLease;
    try {
      const blob = this.getAzureBlob(partitionId);
      returnLease = AzureBlobLease.createFromPartitionId(partitionId, blob);
      this._uploadLease(returnLease, UploadActivity.create);
    } catch (error) {
      const statusCode = (error as StorageError).statusCode;
      const code = (error as StorageError).code;
      // https://docs.microsoft.com/en-us/rest/api/storageservices/blob-service-error-codes
      // LeaseIdMissing || BlobAlreadyExists
      if ((statusCode === 412 && code && code.toLowerCase() === "leaseidmissing") ||
        (statusCode === 409 && code && code.toLowerCase() === "blobalreadyexists")) {
        returnLease = <AzureBlobLease>await this.getLease(partitionId);
      } else {
        log.error("[%s] An error occurred while creating lease if it does not exist: %O.",
          this._context.hostName, error);
        throw error;
      }
    }
    return returnLease;
  }

  async deleteLease(lease: AzureBlobLease): Promise<void> {
    try {
      return await (lease).blob.deleteBlobIfExists();
    } catch (err) {
      const msg = `An error occurred while deleting the lease for blobPath ` +
        `"${this._context.composedBlobPrefix}${lease.partitionId}". It is: \n` +
        `${err ? err.stack : JSON.stringify(err)}`;
      log.error("[%s] %s.", this._context.hostName, msg);
      throw new Error(msg);
    }
  }

  async acquireLease(lease: AzureBlobLease): Promise<boolean> {
    let result: boolean = true;
    const newLeaseId: string = uuid();
    try {
      // TODO: We are initializing newToken to empty string.
      let newToken: string = "";
      const blobResult = await lease.blob.getBlobProperties();
      if (blobResult.lease && blobResult.lease.state && blobResult.lease.state === "leased") {
        if (!lease.token) {
          // We reach here in a race condition: when this instance of EventProcessorHost scanned the
          // lease blobs, this partition was unowned (token is empty) but between then and now, another
          // instance of EPH has established a lease (getLeaseState() is LEASED). We normally enforce
          // that we only steal the lease if it is still owned by the instance which owned it when we
          // scanned, but we can't do that when we don't know who owns it. The safest thing to do is just
          // fail the acquisition. If that means that one EPH instance gets more partitions than it should,
          // rebalancing will take care of that quickly enough.
          return false;
        }
        log.checkpointLeaseMgr("[%s] Need to change lease '%s' -> '%s' for partitionId '%s'.",
          this._context.hostName, lease.token, newLeaseId, lease.partitionId);
        const changeLeaseResult = await lease.blob.changeLease(lease.token, newLeaseId);
        newToken = changeLeaseResult.id;
      } else {
        try {
          const options: StorageBlobService.AcquireLeaseRequestOptions = {
            leaseDuration: this.leaseDuration,
            proposedLeaseId: newLeaseId
          };
          const acquireResult = await lease.blob.acquireLease(options);
          newToken = acquireResult.id;
        } catch (err) {
          const statusCode = err && (err as StorageError).statusCode;
          const code = err && (err as StorageError).code;
          if (statusCode === 409 && code && code.toLowerCase() === "leasealreadypresent") {
            // Either some other host grabbed the lease or checkpoint call renewed it.
            return false;
          }
        }
      }
      lease.token = newToken;
      lease.owner = this._context.hostName;
      // Increment epoch each time lease is acquired or stolen by a new host
      lease.incrementEpoch();
      await this._uploadLease(lease, UploadActivity.acquire);
    } catch (err) {
      if (this._wasLeaseLost(lease.partitionId, err)) {
        result = false;
      } else {
        throw err;
      }
    }
    return result;
  }

  async renewLease(lease: AzureBlobLease): Promise<boolean> {
    let result: boolean = false;
    try {
      const options: StorageBlobService.LeaseRequestOptions = {
        timeoutIntervalInMs: this.leaseRenewInterval * 1000,
        maximumExecutionTimeInMs: maximumExecutionTimeInMsForLeaseRenewal
      };
      await lease.blob.renewLease(lease.token, options);
      result = true;
    } catch (err) {
      if (!this._wasLeaseLost(lease.partitionId, err)) {
        throw err;
      }
    }
    return result;
  }

  async releaseLease(lease: AzureBlobLease): Promise<void> {
    try {
      const leaseId: string = lease.token;
      log.checkpointLeaseMgr("[%s] Trying to release lease for partitionId '%s'.",
        this._context.hostName, lease.partitionId);
      const releasedCopy = new AzureBlobLease({ ...lease.getInfo(), blob: lease.blob });
      releasedCopy.owner = "";
      releasedCopy.token = "";
      await this._uploadLease(lease, UploadActivity.release);
      await lease.blob.releaseLease(leaseId);
    } catch (err) {
      if (!this._wasLeaseLost(lease.partitionId, err)) {
        throw err;
      }
    }
    return;
  }

  async updateLease(lease: AzureBlobLease): Promise<boolean> {
    if (lease == undefined) {
      return false;
    }

    if (!lease.token) {
      return false;
    }

    log.checkpointLeaseMgr("[%s] Let us renew the lease to make sure the update with offset '%s'" +
      "and sequence number %d will go through.", this._context.hostName, lease.offset,
      lease.sequenceNumber);
    let result = await this.renewLease(lease);
    if (result) {
      try {
        await this._uploadLease(lease, UploadActivity.update);
      } catch (err) {
        if (this._wasLeaseLost(lease.partitionId, err)) {
          result = false;
        } else {
          throw err;
        }
      }
    }
    // else could not renew lease due to lease loss. Result is already false, so pass it unchanged
    return result;
  }

  async checkpointStoreExists(): Promise<boolean> {
    log.checkpointLeaseMgr("[%s] Checking whether the checkpoint store exists.", this._context.hostName);
    return await this.leaseStoreExists();
  }

  async deleteCheckpointStore(): Promise<void> {
    return this.deleteLeaseStore();
  }

  async createCheckpointStoreIfNotExists(): Promise<void> {
    // This is a no-op since this method will be called only creating the lease store.
    // The lease store and the checkpoint store are the same thing.
    return;
  }

  async createCheckpointIfNotExists(partitionId: string): Promise<CheckpointInfo> {
    validateType("partitionId", partitionId, true, "string");
    log.checkpointLeaseMgr("[%s] Creating checkpoint if not exist for partitionId '%s'.",
      this._context.hostName, partitionId);
    const lease: AzureBlobLease = <AzureBlobLease>await this.createLeaseIfNotExists(partitionId);
    const checkpoint: CheckpointInfo = CheckpointInfo.createFromLease(lease.getInfo());
    return checkpoint;
  }

  async createAllCheckpointsIfNotExists(partitionIds: string[]): Promise<void> {
    validateType("partitionIds", partitionIds, true, "Array");
    // Because we control the caller, we know that this method will only be called after createAllLeasesIfNotExists.
    // In this implementation checkpoints are in the same blobs as leases, so the blobs will already exist if execution reaches here.
    return;
  }

  async getCheckpoint(partitionId: string): Promise<CheckpointInfo | undefined> {
    validateType("partitionId", partitionId, true, "string");
    let result: CheckpointInfo | undefined;
    log.checkpointLeaseMgr("[%s] Getting checkpoint for partitionId '%s'.", this._context.hostName,
      partitionId);
    const lease: AzureBlobLease | undefined = await this.getLease(partitionId);
    if (lease != undefined && lease.offset) {
      result = CheckpointInfo.createFromLease(lease.getInfo());
    }
    return result;
  }

  async updateCheckpoint(lease: AzureBlobLease, checkpoint: CheckpointInfo): Promise<void> {
    log.checkpointLeaseMgr("[%s] Checkpoint at offset '%s' and seqno %d for partitionId '%s'.",
      this._context.hostName, checkpoint.offset, checkpoint.sequenceNumber, checkpoint.partitionId);
    lease.offset = checkpoint.offset;
    lease.sequenceNumber = checkpoint.sequenceNumber;
    try {
      if (await this.updateLease(lease)) {
        return;
      } else {
        const msg = `Lease lost while updating the checkpoint for partitionId ` +
          `'${checkpoint.partitionId}'.Hence could not update it.`;
        log.error("[%s] %s", this._context.hostName, msg);
        throw new Error(msg);
      }
    } catch (err) {
      const info: EPHDiagnosticInfo = {
        action: EPHActionStrings.updatingCheckpoint,
        error: err,
        hostName: this._context.hostName,
        partitionId: checkpoint.partitionId
      };
      this._context.onEphError(info);
    }
  }

  async deleteCheckpoint(partitionId: string): Promise<void> {
    validateType("partitionId", partitionId, true, "string");
    // This is a no-op to avoid deleting leases accidentally.
  }

  private async _listBlobs(): Promise<StorageBlobService.BlobResult[]> {
    const blobService = this._context.blobService;
    if (blobService) {
      const listResult = await blobService.listBlobsSegmented(this._context.leasecontainerName);
      log.checkpointLeaseMgr("[%s] Number of blobs: %d", this._context.hostName,
        listResult.entries.length);
      return listResult.entries;
    } else {
      throw new Error("'blobService' is not defined in the 'hostContext', hence cannot " +
        "list all the blobs.");
    }
  }

  private async _uploadLease(lease: AzureBlobLease, activity: UploadActivity,
    options?: StorageBlobService.CreateBlobRequestOptions): Promise<void> {
    const hostName = this._context.hostName;
    const partitionId = lease.partitionId;
    const blob = lease.blob;
    if (activity !== UploadActivity.create) {
      // It is possible for AzureBlobLease objects in memory to have stale offset/sequence number
      // fields if a checkpoint was written but PartitionManager hasn't done its ten-second sweep
      // which downloads new copies of all the leases. This can happen because we're trying to
      // maintain the fiction that checkpoints and leases are separate -- which they can be in
      // other implementations -- even though they are completely intertwined in this
      // implementation. To prevent writing stale checkpoint data to the store, merge the
      // checkpoint data from the most recently written checkpoint into this write, if needed.
      if (this._latestCheckpoint.has(partitionId)) {
        const cached: CheckpointInfo = this._latestCheckpoint.get(partitionId)!;
        if (cached.sequenceNumber > lease.sequenceNumber || lease.offset == undefined) {
          lease.offset = cached.offset,
            lease.sequenceNumber = cached.sequenceNumber;
          log.checkpointLeaseMgr("[%s] Updating stale offset/seqno with new values %s/%d " +
            "while uploading lease for partitionId '%s'.", hostName, lease.offset,
            lease.sequenceNumber, partitionId);
        } else if (lease.offset != undefined) {
          this._latestCheckpoint.set(partitionId, CheckpointInfo.createFromLease(lease.getInfo()));
        }
      }
      const jsonToUpload = lease.serialize();
      if (!options) {
        options = {
          leaseId: lease.token
        };
      }
      log.checkpointLeaseMgr("[%s] Trying to upload raw JSON for activity '%s': %s", hostName,
        activity, jsonToUpload);
      await (<AzureBlobLease>lease).blob.updateContent(jsonToUpload, options);
      if ((activity === UploadActivity.acquire) || (activity === UploadActivity.release)) {
        let metadata = (await blob.getBlobMetadata()).metadata;
        if (!metadata) metadata = {}
        log.checkpointLeaseMgr("[%s] Found metadata for the blob for partitionId '%s' " +
          "is %O.", hostName, partitionId, metadata);
        switch (activity) {
          case UploadActivity.acquire:
            metadata[metadatOwnerName] = lease.owner;
            break;
          case UploadActivity.release:
            delete metadata[metadatOwnerName];
            break;
          default:
            break;
        }
        log.checkpointLeaseMgr("[%s] The new metadata for the blob for partitionId '%s' " +
          "is: %O", hostName, partitionId, metadata);
        await blob.setBlobMetadata(metadata);
      }
    }
  }

  private _wasLeaseLost(partitionId: string, err: StorageError): boolean {
    let result: boolean = false;
    log.error("[%s] Was lease lost -> partitionId: '%s', err: %O", this._context.hostName,
      partitionId, getStorageError(err));
    const statusCode = err.statusCode;
    const code = err.code;
    // conflict OR precondition failed.
    if (statusCode && statusCode === 409 || statusCode === 412) {
      if (!code || (code &&
        (code.toLowerCase() === "leaselost" ||
          code.toLowerCase() === "leaseidmismatchwithleaseoperation" ||
          code.toLowerCase() === "leaseidmismatchwithbloboperation"))) {
        result = true;
      }
    }
    return result;
  }
}
