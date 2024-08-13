/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SimPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MobileNetworkManagementClient } from "../mobileNetworkManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  SimPolicy,
  SimPoliciesListByMobileNetworkNextOptionalParams,
  SimPoliciesListByMobileNetworkOptionalParams,
  SimPoliciesListByMobileNetworkResponse,
  SimPoliciesDeleteOptionalParams,
  SimPoliciesGetOptionalParams,
  SimPoliciesGetResponse,
  SimPoliciesCreateOrUpdateOptionalParams,
  SimPoliciesCreateOrUpdateResponse,
  TagsObject,
  SimPoliciesUpdateTagsOptionalParams,
  SimPoliciesUpdateTagsResponse,
  SimPoliciesListByMobileNetworkNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SimPolicies operations. */
export class SimPoliciesImpl implements SimPolicies {
  private readonly client: MobileNetworkManagementClient;

  /**
   * Initialize a new instance of the class SimPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: MobileNetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all the SIM policies in a mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param options The options parameters.
   */
  public listByMobileNetwork(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SimPoliciesListByMobileNetworkOptionalParams,
  ): PagedAsyncIterableIterator<SimPolicy> {
    const iter = this.listByMobileNetworkPagingAll(
      resourceGroupName,
      mobileNetworkName,
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
        return this.listByMobileNetworkPagingPage(
          resourceGroupName,
          mobileNetworkName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByMobileNetworkPagingPage(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SimPoliciesListByMobileNetworkOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SimPolicy[]> {
    let result: SimPoliciesListByMobileNetworkResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByMobileNetwork(
        resourceGroupName,
        mobileNetworkName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByMobileNetworkNext(
        resourceGroupName,
        mobileNetworkName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByMobileNetworkPagingAll(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SimPoliciesListByMobileNetworkOptionalParams,
  ): AsyncIterableIterator<SimPolicy> {
    for await (const page of this.listByMobileNetworkPagingPage(
      resourceGroupName,
      mobileNetworkName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Deletes the specified SIM policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param simPolicyName The name of the SIM policy.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    mobileNetworkName: string,
    simPolicyName: string,
    options?: SimPoliciesDeleteOptionalParams,
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
      args: { resourceGroupName, mobileNetworkName, simPolicyName, options },
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
   * Deletes the specified SIM policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param simPolicyName The name of the SIM policy.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    simPolicyName: string,
    options?: SimPoliciesDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      mobileNetworkName,
      simPolicyName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about the specified SIM policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param simPolicyName The name of the SIM policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    mobileNetworkName: string,
    simPolicyName: string,
    options?: SimPoliciesGetOptionalParams,
  ): Promise<SimPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mobileNetworkName, simPolicyName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a SIM policy. Must be created in the same location as its parent mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param simPolicyName The name of the SIM policy.
   * @param parameters Parameters supplied to the create or update SIM policy operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    mobileNetworkName: string,
    simPolicyName: string,
    parameters: SimPolicy,
    options?: SimPoliciesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SimPoliciesCreateOrUpdateResponse>,
      SimPoliciesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<SimPoliciesCreateOrUpdateResponse> => {
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
        mobileNetworkName,
        simPolicyName,
        parameters,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      SimPoliciesCreateOrUpdateResponse,
      OperationState<SimPoliciesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates a SIM policy. Must be created in the same location as its parent mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param simPolicyName The name of the SIM policy.
   * @param parameters Parameters supplied to the create or update SIM policy operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    mobileNetworkName: string,
    simPolicyName: string,
    parameters: SimPolicy,
    options?: SimPoliciesCreateOrUpdateOptionalParams,
  ): Promise<SimPoliciesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      mobileNetworkName,
      simPolicyName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates SIM policy tags.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param simPolicyName The name of the SIM policy.
   * @param parameters Parameters supplied to update SIM policy tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    mobileNetworkName: string,
    simPolicyName: string,
    parameters: TagsObject,
    options?: SimPoliciesUpdateTagsOptionalParams,
  ): Promise<SimPoliciesUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        mobileNetworkName,
        simPolicyName,
        parameters,
        options,
      },
      updateTagsOperationSpec,
    );
  }

  /**
   * Gets all the SIM policies in a mobile network.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param options The options parameters.
   */
  private _listByMobileNetwork(
    resourceGroupName: string,
    mobileNetworkName: string,
    options?: SimPoliciesListByMobileNetworkOptionalParams,
  ): Promise<SimPoliciesListByMobileNetworkResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mobileNetworkName, options },
      listByMobileNetworkOperationSpec,
    );
  }

  /**
   * ListByMobileNetworkNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param mobileNetworkName The name of the mobile network.
   * @param nextLink The nextLink from the previous successful call to the ListByMobileNetwork method.
   * @param options The options parameters.
   */
  private _listByMobileNetworkNext(
    resourceGroupName: string,
    mobileNetworkName: string,
    nextLink: string,
    options?: SimPoliciesListByMobileNetworkNextOptionalParams,
  ): Promise<SimPoliciesListByMobileNetworkNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, mobileNetworkName, nextLink, options },
      listByMobileNetworkNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/simPolicies/{simPolicyName}",
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
    Parameters.mobileNetworkName,
    Parameters.simPolicyName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/simPolicies/{simPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SimPolicy,
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
    Parameters.mobileNetworkName,
    Parameters.simPolicyName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/simPolicies/{simPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SimPolicy,
    },
    201: {
      bodyMapper: Mappers.SimPolicy,
    },
    202: {
      bodyMapper: Mappers.SimPolicy,
    },
    204: {
      bodyMapper: Mappers.SimPolicy,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters17,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.mobileNetworkName,
    Parameters.simPolicyName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/simPolicies/{simPolicyName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.SimPolicy,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.mobileNetworkName,
    Parameters.simPolicyName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByMobileNetworkOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.MobileNetwork/mobileNetworks/{mobileNetworkName}/simPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SimPolicyListResult,
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
    Parameters.mobileNetworkName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByMobileNetworkNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SimPolicyListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.mobileNetworkName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
