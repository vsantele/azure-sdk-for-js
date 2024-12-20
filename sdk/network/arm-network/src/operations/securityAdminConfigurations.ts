/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SecurityAdminConfigurations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  SecurityAdminConfiguration,
  SecurityAdminConfigurationsListNextOptionalParams,
  SecurityAdminConfigurationsListOptionalParams,
  SecurityAdminConfigurationsListResponse,
  SecurityAdminConfigurationsGetOptionalParams,
  SecurityAdminConfigurationsGetResponse,
  SecurityAdminConfigurationsCreateOrUpdateOptionalParams,
  SecurityAdminConfigurationsCreateOrUpdateResponse,
  SecurityAdminConfigurationsDeleteOptionalParams,
  SecurityAdminConfigurationsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SecurityAdminConfigurations operations. */
export class SecurityAdminConfigurationsImpl
  implements SecurityAdminConfigurations
{
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class SecurityAdminConfigurations class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Lists all the network manager security admin configurations in a network manager, in a paginated
   * format.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    networkManagerName: string,
    options?: SecurityAdminConfigurationsListOptionalParams,
  ): PagedAsyncIterableIterator<SecurityAdminConfiguration> {
    const iter = this.listPagingAll(
      resourceGroupName,
      networkManagerName,
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
          networkManagerName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    networkManagerName: string,
    options?: SecurityAdminConfigurationsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<SecurityAdminConfiguration[]> {
    let result: SecurityAdminConfigurationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, networkManagerName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        networkManagerName,
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
    networkManagerName: string,
    options?: SecurityAdminConfigurationsListOptionalParams,
  ): AsyncIterableIterator<SecurityAdminConfiguration> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      networkManagerName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Lists all the network manager security admin configurations in a network manager, in a paginated
   * format.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    networkManagerName: string,
    options?: SecurityAdminConfigurationsListOptionalParams,
  ): Promise<SecurityAdminConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkManagerName, options },
      listOperationSpec,
    );
  }

  /**
   * Retrieves a network manager security admin configuration.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Security Configuration.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    options?: SecurityAdminConfigurationsGetOptionalParams,
  ): Promise<SecurityAdminConfigurationsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkManagerName, configurationName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates a network manager security admin configuration.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Security Configuration.
   * @param securityAdminConfiguration The security admin configuration to create or update
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    securityAdminConfiguration: SecurityAdminConfiguration,
    options?: SecurityAdminConfigurationsCreateOrUpdateOptionalParams,
  ): Promise<SecurityAdminConfigurationsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        configurationName,
        securityAdminConfiguration,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes a network manager security admin configuration.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Security Configuration.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    options?: SecurityAdminConfigurationsDeleteOptionalParams,
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
        networkManagerName,
        configurationName,
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
   * Deletes a network manager security admin configuration.
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Security Configuration.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    options?: SecurityAdminConfigurationsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      networkManagerName,
      configurationName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group.
   * @param networkManagerName The name of the network manager.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    networkManagerName: string,
    nextLink: string,
    options?: SecurityAdminConfigurationsListNextOptionalParams,
  ): Promise<SecurityAdminConfigurationsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, networkManagerName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/securityAdminConfigurations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityAdminConfigurationListResult,
    },
    default: {
      bodyMapper: Mappers.CommonErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.skipToken1,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkManagerName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/securityAdminConfigurations/{configurationName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityAdminConfiguration,
    },
    default: {
      bodyMapper: Mappers.CommonErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkManagerName1,
    Parameters.configurationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/securityAdminConfigurations/{configurationName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityAdminConfiguration,
    },
    201: {
      bodyMapper: Mappers.SecurityAdminConfiguration,
    },
    default: {
      bodyMapper: Mappers.CommonErrorResponse,
    },
  },
  requestBody: Parameters.securityAdminConfiguration,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkManagerName1,
    Parameters.configurationName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/securityAdminConfigurations/{configurationName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CommonErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.networkManagerName1,
    Parameters.configurationName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SecurityAdminConfigurationListResult,
    },
    default: {
      bodyMapper: Mappers.CommonErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.networkManagerName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
