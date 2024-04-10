// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Recorder, isPlaybackMode } from "@azure-tools/test-recorder";
import { assert } from "chai";
import { createBatchClient, createRecorder } from "./utils/recordedClient";
import { Context } from "mocha";
import {
  BatchClient,
  isUnexpected,
  CreatePoolParameters,
  CreateNodeUserParameters,
  ReplaceNodeUserParameters,
  UploadBatchServiceLogsContent,
  UploadNodeLogsParameters,
} from "../../src";
import { fakeTestPasswordPlaceholder1 } from "./utils/fakeTestSecrets";
import { fail } from "assert";
import { getResourceName, LONG_TEST_TIMEOUT, waitForNotNull } from "./utils/helpers";

const BASIC_POOL = getResourceName("Pool-Basic");
const BASIC_POOL_NUM_VMS = 4;
const TEST_USER = "JSSDKTestUser";

describe("Compute node operations", async () => {
  let recorder: Recorder;
  let batchClient: BatchClient;
  let computeNodes: string[];

  /**
   * Provision helper resources needed for testing jobs
   */
  before(async function () {
    if (!isPlaybackMode()) {
      batchClient = createBatchClient("AAD");

      const poolParams: CreatePoolParameters = {
        body: {
          id: BASIC_POOL,
          vmSize: "Standard_D1_v2",
          cloudServiceConfiguration: { osFamily: "4" },
          targetDedicatedNodes: BASIC_POOL_NUM_VMS,
          // Ensures there's a compute node file we can reference later
          startTask: { commandLine: "cmd /c echo hello > hello.txt" },
          // Sets up pool user we can reference later
          userAccounts: [
            {
              name: "nonAdminUser",
              // Recorder sanitizer options will replace password with fakeTestPasswordPlaceholder1
              password: isPlaybackMode() ? fakeTestPasswordPlaceholder1 : "user_1account_password2",
              elevationLevel: "nonadmin",
            },
          ],
        },
        contentType: "application/json; odata=minimalmetadata",
      };

      const poolPostResult = await batchClient.path("/pools").post(poolParams);
      if (isUnexpected(poolPostResult)) {
        fail(`Received unexpected status code from creating pool: ${poolPostResult.status}
              Unable to provision resource needed for Job Testing.
              Response Body: ${poolPostResult.body.message}`);
      }
    }
  });

  /**
   * Unprovision helper resources after all tests ran
   */
  after(async function () {
    if (!isPlaybackMode()) {
      batchClient = createBatchClient("AAD");

      const poolDeleteResponse = await batchClient.path("/pools/{poolId}", BASIC_POOL).delete();
      if (isUnexpected(poolDeleteResponse)) {
        fail(`Received unexpected status code from deleting pool: ${poolDeleteResponse.status}.Pool Resource Leaked.
            Respose Body: ${poolDeleteResponse.body.message}`);
      }
    }
  });

  before(async function (this: Context) {
    recorder = await createRecorder(this);
    batchClient = createBatchClient("AAD", recorder);
  });

  after(async function () {
    await recorder.stop();
  });

  it("should list compute nodes successfully", async () => {
    const poolId = recorder.variable("BASIC_POOL", BASIC_POOL);

    const getListNodesResult = async () => {
      const res = await batchClient.path("/pools/{poolId}/nodes", poolId).get();
      if (isUnexpected(res)) {
        fail(`Received unexpected status code from getting pool: ${res.status}
              Response Body: ${res.body.message}`);
      }
      if (
        (res.body.value?.length ?? 0) > 0 &&
        res.body.value!.filter((node) =>
          ["starting", "waitingforstarttask", "creating"].includes(node.state!)
        ).length === 0
      ) {
        return res;
      }
      return null;
    };

    const listNodesResult = await waitForNotNull(getListNodesResult);
    const nodeList = listNodesResult.body.value!;
    computeNodes = nodeList.map(function (x) {
      return x.id!;
    });
    assert.equal(nodeList[0].state, "idle");
    assert.equal(nodeList[0].schedulingState, "enabled");
    assert.isTrue(nodeList[0].isDedicated);
    assert.equal(listNodesResult.body.value?.length, BASIC_POOL_NUM_VMS);
  }).timeout(LONG_TEST_TIMEOUT);

  it("should get a compute node reference", async () => {
    const getNodeResult = await batchClient
      .path(
        "/pools/{poolId}/nodes/{nodeId}",
        recorder.variable("BASIC_POOL", BASIC_POOL),
        computeNodes[0]
      )
      .get();
    if (isUnexpected(getNodeResult)) {
      fail(`Received unexpected status code from getting compute node: ${getNodeResult.status}
              Response Body: ${getNodeResult.body.message}`);
    }

    assert.equal(getNodeResult.status, "200");
    assert.equal(getNodeResult.body.id, computeNodes[0]);
    assert.equal(getNodeResult.body.state, "idle");
    assert.equal(getNodeResult.body.schedulingState, "enabled");
  });

  it("should add a user to a compute node successfully", async () => {
    const addUserOptions: CreateNodeUserParameters = {
      body: {
        name: TEST_USER,
        isAdmin: false,
        password: isPlaybackMode() ? fakeTestPasswordPlaceholder1 : "user_1account_password2",
      },
      contentType: "application/json; odata=minimalmetadata",
    };

    const addUserResult = await batchClient
      .path(
        "/pools/{poolId}/nodes/{nodeId}/users",
        recorder.variable("BASIC_POOL", BASIC_POOL),
        computeNodes[0]
      )
      .post(addUserOptions);
    assert.equal(addUserResult.status, "201");
  });

  it("should update a compute node user successfully", async () => {
    const updateUserOptions: ReplaceNodeUserParameters = {
      body: {
        password: isPlaybackMode() ? fakeTestPasswordPlaceholder1 : "user_1account_password2",
      },
      contentType: "application/json; odata=minimalmetadata",
    };

    const updateUserResult = await batchClient
      .path(
        "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
        recorder.variable("BASIC_POOL", BASIC_POOL),
        computeNodes[0],
        TEST_USER
      )
      .put(updateUserOptions);
    assert.equal(updateUserResult.status, "200");
  });

  it("should get a remote desktop file successfully", async () => {
    const getRDPFileResult = await batchClient
      .path(
        "/pools/{poolId}/nodes/{nodeId}/rdp",
        recorder.variable("BASIC_POOL", BASIC_POOL),
        computeNodes[0]
      )
      .get();
    if (isUnexpected(getRDPFileResult)) {
      fail(`Received unexpected status code from getting compute node RDP file: ${getRDPFileResult.status}
              Response Body: ${getRDPFileResult.body.message}`);
    }

    assert.isDefined(getRDPFileResult.body);
  });

  it("should delete a compute node user successfully", async () => {
    const updateUserResult = await batchClient
      .path(
        "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
        recorder.variable("BASIC_POOL", BASIC_POOL),
        computeNodes[0],
        TEST_USER
      )
      .delete();
    assert.equal(updateUserResult.status, "200");
  });

  it("should disable scheduling on a compute node successfully", async () => {
    const disableSchedulingResult = await batchClient
      .path(
        "/pools/{poolId}/nodes/{nodeId}/disablescheduling",
        recorder.variable("BASIC_POOL", BASIC_POOL),
        computeNodes[1]
      )
      .post({ contentType: "application/json; odata=minimalmetadata" });
    assert.equal(disableSchedulingResult.status, "200");
  });

  it("should enable scheduling on a compute node successfully", async () => {
    const enableSchedulingResult = await batchClient
      .path(
        "/pools/{poolId}/nodes/{nodeId}/enablescheduling",
        recorder.variable("BASIC_POOL", BASIC_POOL),
        computeNodes[1]
      )
      .post({ contentType: "application/json; odata=minimalmetadata" });
    assert.equal(enableSchedulingResult.status, "200");
  });

  it("should reboot a compute node successfully", async () => {
    const rebootNodeResult = await batchClient
      .path(
        "/pools/{poolId}/nodes/{nodeId}/reboot",
        recorder.variable("BASIC_POOL", BASIC_POOL),
        computeNodes[0]
      )
      .post({ contentType: "application/json; odata=minimalmetadata" });
    assert.equal(rebootNodeResult.status, "202");
  });

  it("should reimage a compute node successfully", async () => {
    const reimageNodeResult = await batchClient
      .path(
        "/pools/{poolId}/nodes/{nodeId}/reboot",
        recorder.variable("BASIC_POOL", BASIC_POOL),
        computeNodes[1]
      )
      .post({ contentType: "application/json; odata=minimalmetadata" });
    assert.equal(reimageNodeResult.status, "202");
  });

  it("should upload pool node logs at paas pool", async () => {
    const container = "https://teststorage.blob.core.windows.net/fakecontainer";
    const config: UploadBatchServiceLogsContent = {
      containerUrl: container,
      startTime: new Date("2018-02-25T00:00:00.000Z"),
    };

    const uploadLogBody: UploadNodeLogsParameters = {
      body: config,
      contentType: "application/json; odata=minimalmetadata",
    };

    const uploadLogResult = await batchClient
      .path(
        "/pools/{poolId}/nodes/{nodeId}/uploadbatchservicelogs",
        recorder.variable("BASIC_POOL", BASIC_POOL),
        computeNodes[2]
      )
      .post(uploadLogBody);
    if (isUnexpected(uploadLogResult)) {
      fail(`Received unexpected status code from uploading log to compute node: ${uploadLogResult.status}
            Response Body: ${uploadLogResult.body.message}`);
    }

    assert.isAtLeast(uploadLogResult.body.numberOfFilesUploaded, 1);
  });
});
