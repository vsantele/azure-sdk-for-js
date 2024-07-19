/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Datastores } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureVMwareSolutionAPI } from "../azureVMwareSolutionAPI";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  Datastore,
  DatastoresListNextOptionalParams,
  DatastoresListOptionalParams,
  DatastoresListResponse,
  DatastoresGetOptionalParams,
  DatastoresGetResponse,
  DatastoresCreateOrUpdateOptionalParams,
  DatastoresCreateOrUpdateResponse,
  DatastoresDeleteOptionalParams,
  DatastoresListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Datastores operations. */
export class DatastoresImpl implements Datastores {
  private readonly client: AzureVMwareSolutionAPI;

  /**
   * Initialize a new instance of the class Datastores class.
   * @param client Reference to the service client
   */
  constructor(client: AzureVMwareSolutionAPI) {
    this.client = client;
  }

  /**
   * List Datastore resources by Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: DatastoresListOptionalParams,
  ): PagedAsyncIterableIterator<Datastore> {
    const iter = this.listPagingAll(
      resourceGroupName,
      privateCloudName,
      clusterName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listPagingPage(
          resourceGroupName,
          privateCloudName,
          clusterName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: DatastoresListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<Datastore[]> {
    let result: DatastoresListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        privateCloudName,
        clusterName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        privateCloudName,
        clusterName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: DatastoresListOptionalParams,
  ): AsyncIterableIterator<Datastore> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      privateCloudName,
      clusterName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List Datastore resources by Cluster
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    options?: DatastoresListOptionalParams,
  ): Promise<DatastoresListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, clusterName, options },
      listOperationSpec,
    );
  }

  /**
   * Get a Datastore
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param datastoreName Name of the datastore
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    options?: DatastoresGetOptionalParams,
  ): Promise<DatastoresGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        clusterName,
        datastoreName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Create a Datastore
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param datastoreName Name of the datastore
   * @param datastore Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    datastore: Datastore,
    options?: DatastoresCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<DatastoresCreateOrUpdateResponse>,
      DatastoresCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<DatastoresCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        privateCloudName,
        clusterName,
        datastoreName,
        datastore,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      DatastoresCreateOrUpdateResponse,
      OperationState<DatastoresCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Create a Datastore
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param datastoreName Name of the datastore
   * @param datastore Resource create parameters.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    datastore: Datastore,
    options?: DatastoresCreateOrUpdateOptionalParams,
  ): Promise<DatastoresCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      privateCloudName,
      clusterName,
      datastoreName,
      datastore,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete a Datastore
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param datastoreName Name of the datastore
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    options?: DatastoresDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        privateCloudName,
        clusterName,
        datastoreName,
        options,
      },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Delete a Datastore
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param datastoreName Name of the datastore
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    datastoreName: string,
    options?: DatastoresDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      privateCloudName,
      clusterName,
      datastoreName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param clusterName Name of the cluster
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    privateCloudName: string,
    clusterName: string,
    nextLink: string,
    options?: DatastoresListNextOptionalParams,
  ): Promise<DatastoresListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, clusterName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatastoreListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Datastore,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
    Parameters.datastoreName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Datastore,
    },
    201: {
      bodyMapper: Mappers.Datastore,
    },
    202: {
      bodyMapper: Mappers.Datastore,
    },
    204: {
      bodyMapper: Mappers.Datastore,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.datastore,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
    Parameters.datastoreName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
    Parameters.datastoreName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatastoreListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.clusterName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
