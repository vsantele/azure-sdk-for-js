/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CertificateOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BatchManagementClient } from "../batchManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  Certificate,
  CertificateListByBatchAccountNextOptionalParams,
  CertificateListByBatchAccountOptionalParams,
  CertificateListByBatchAccountResponse,
  CertificateCreateOrUpdateParameters,
  CertificateCreateOptionalParams,
  CertificateCreateResponse,
  CertificateUpdateOptionalParams,
  CertificateUpdateResponse,
  CertificateDeleteOptionalParams,
  CertificateGetOptionalParams,
  CertificateGetResponse,
  CertificateCancelDeletionOptionalParams,
  CertificateCancelDeletionResponse,
  CertificateListByBatchAccountNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CertificateOperations operations. */
export class CertificateOperationsImpl implements CertificateOperations {
  private readonly client: BatchManagementClient;

  /**
   * Initialize a new instance of the class CertificateOperations class.
   * @param client Reference to the service client
   */
  constructor(client: BatchManagementClient) {
    this.client = client;
  }

  /**
   * Lists all of the certificates in the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  public listByBatchAccount(
    resourceGroupName: string,
    accountName: string,
    options?: CertificateListByBatchAccountOptionalParams
  ): PagedAsyncIterableIterator<Certificate> {
    const iter = this.listByBatchAccountPagingAll(
      resourceGroupName,
      accountName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByBatchAccountPagingPage(
          resourceGroupName,
          accountName,
          options
        );
      }
    };
  }

  private async *listByBatchAccountPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: CertificateListByBatchAccountOptionalParams
  ): AsyncIterableIterator<Certificate[]> {
    let result = await this._listByBatchAccount(
      resourceGroupName,
      accountName,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByBatchAccountNext(
        resourceGroupName,
        accountName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByBatchAccountPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: CertificateListByBatchAccountOptionalParams
  ): AsyncIterableIterator<Certificate> {
    for await (const page of this.listByBatchAccountPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Lists all of the certificates in the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  private _listByBatchAccount(
    resourceGroupName: string,
    accountName: string,
    options?: CertificateListByBatchAccountOptionalParams
  ): Promise<CertificateListByBatchAccountResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listByBatchAccountOperationSpec
    );
  }

  /**
   * Creates a new certificate inside the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   *                        thumbprint separated by a dash, and must match the certificate data in the request. For example
   *                        SHA1-a3d1c5.
   * @param parameters Additional parameters for certificate creation.
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    certificateName: string,
    parameters: CertificateCreateOrUpdateParameters,
    options?: CertificateCreateOptionalParams
  ): Promise<CertificateCreateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, certificateName, parameters, options },
      createOperationSpec
    );
  }

  /**
   * Updates the properties of an existing certificate.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   *                        thumbprint separated by a dash, and must match the certificate data in the request. For example
   *                        SHA1-a3d1c5.
   * @param parameters Certificate entity to update.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    accountName: string,
    certificateName: string,
    parameters: CertificateCreateOrUpdateParameters,
    options?: CertificateUpdateOptionalParams
  ): Promise<CertificateUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, certificateName, parameters, options },
      updateOperationSpec
    );
  }

  /**
   * Deletes the specified certificate.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   *                        thumbprint separated by a dash, and must match the certificate data in the request. For example
   *                        SHA1-a3d1c5.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    accountName: string,
    certificateName: string,
    options?: CertificateDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, accountName, certificateName, options },
      deleteOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      lroResourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified certificate.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   *                        thumbprint separated by a dash, and must match the certificate data in the request. For example
   *                        SHA1-a3d1c5.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    certificateName: string,
    options?: CertificateDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      accountName,
      certificateName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified certificate.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   *                        thumbprint separated by a dash, and must match the certificate data in the request. For example
   *                        SHA1-a3d1c5.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    certificateName: string,
    options?: CertificateGetOptionalParams
  ): Promise<CertificateGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, certificateName, options },
      getOperationSpec
    );
  }

  /**
   * If you try to delete a certificate that is being used by a pool or compute node, the status of the
   * certificate changes to deleteFailed. If you decide that you want to continue using the certificate,
   * you can use this operation to set the status of the certificate back to active. If you intend to
   * delete the certificate, you do not need to run this operation after the deletion failed. You must
   * make sure that the certificate is not being used by any resources, and then you can try again to
   * delete the certificate.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param certificateName The identifier for the certificate. This must be made up of algorithm and
   *                        thumbprint separated by a dash, and must match the certificate data in the request. For example
   *                        SHA1-a3d1c5.
   * @param options The options parameters.
   */
  cancelDeletion(
    resourceGroupName: string,
    accountName: string,
    certificateName: string,
    options?: CertificateCancelDeletionOptionalParams
  ): Promise<CertificateCancelDeletionResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, certificateName, options },
      cancelDeletionOperationSpec
    );
  }

  /**
   * ListByBatchAccountNext
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param nextLink The nextLink from the previous successful call to the ListByBatchAccount method.
   * @param options The options parameters.
   */
  private _listByBatchAccountNext(
    resourceGroupName: string,
    accountName: string,
    nextLink: string,
    options?: CertificateListByBatchAccountNextOptionalParams
  ): Promise<CertificateListByBatchAccountNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, nextLink, options },
      listByBatchAccountNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByBatchAccountOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListCertificatesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxresults,
    Parameters.filter,
    Parameters.select
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate,
      headersMapper: Mappers.CertificateCreateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.certificateName
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate,
      headersMapper: Mappers.CertificateUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.certificateName
  ],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.ifMatch
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate,
      headersMapper: Mappers.CertificateGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const cancelDeletionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/certificates/{certificateName}/cancelDelete",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate,
      headersMapper: Mappers.CertificateCancelDeletionHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.certificateName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByBatchAccountNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListCertificatesResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxresults,
    Parameters.filter,
    Parameters.select
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.accountName1,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
