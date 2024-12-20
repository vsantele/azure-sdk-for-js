/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { RoutingRules } from "../operationsInterfaces";
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
  RoutingRule,
  RoutingRulesListNextOptionalParams,
  RoutingRulesListOptionalParams,
  RoutingRulesListResponse,
  RoutingRulesGetOptionalParams,
  RoutingRulesGetResponse,
  RoutingRulesCreateOrUpdateOptionalParams,
  RoutingRulesCreateOrUpdateResponse,
  RoutingRulesDeleteOptionalParams,
  RoutingRulesListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing RoutingRules operations. */
export class RoutingRulesImpl implements RoutingRules {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class RoutingRules class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * List all network manager routing configuration routing rules.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param ruleCollectionName The name of the network manager routing Configuration rule collection.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    options?: RoutingRulesListOptionalParams,
  ): PagedAsyncIterableIterator<RoutingRule> {
    const iter = this.listPagingAll(
      resourceGroupName,
      networkManagerName,
      configurationName,
      ruleCollectionName,
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
          configurationName,
          ruleCollectionName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    options?: RoutingRulesListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<RoutingRule[]> {
    let result: RoutingRulesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        networkManagerName,
        configurationName,
        ruleCollectionName,
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
        networkManagerName,
        configurationName,
        ruleCollectionName,
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
    configurationName: string,
    ruleCollectionName: string,
    options?: RoutingRulesListOptionalParams,
  ): AsyncIterableIterator<RoutingRule> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      networkManagerName,
      configurationName,
      ruleCollectionName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List all network manager routing configuration routing rules.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param ruleCollectionName The name of the network manager routing Configuration rule collection.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    options?: RoutingRulesListOptionalParams,
  ): Promise<RoutingRulesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        configurationName,
        ruleCollectionName,
        options,
      },
      listOperationSpec,
    );
  }

  /**
   * Gets a network manager routing configuration routing rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param ruleCollectionName The name of the network manager routing Configuration rule collection.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    ruleName: string,
    options?: RoutingRulesGetOptionalParams,
  ): Promise<RoutingRulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        configurationName,
        ruleCollectionName,
        ruleName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates an routing rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param ruleCollectionName The name of the network manager routing Configuration rule collection.
   * @param ruleName The name of the rule.
   * @param routingRule The routing rule to create or update
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    ruleName: string,
    routingRule: RoutingRule,
    options?: RoutingRulesCreateOrUpdateOptionalParams,
  ): Promise<RoutingRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        configurationName,
        ruleCollectionName,
        ruleName,
        routingRule,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes a routing rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param ruleCollectionName The name of the network manager routing Configuration rule collection.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    ruleName: string,
    options?: RoutingRulesDeleteOptionalParams,
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
        ruleCollectionName,
        ruleName,
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
   * Deletes a routing rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param ruleCollectionName The name of the network manager routing Configuration rule collection.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    ruleName: string,
    options?: RoutingRulesDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      networkManagerName,
      configurationName,
      ruleCollectionName,
      ruleName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param networkManagerName The name of the network manager.
   * @param configurationName The name of the network manager Routing Configuration.
   * @param ruleCollectionName The name of the network manager routing Configuration rule collection.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    networkManagerName: string,
    configurationName: string,
    ruleCollectionName: string,
    nextLink: string,
    options?: RoutingRulesListNextOptionalParams,
  ): Promise<RoutingRulesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        networkManagerName,
        configurationName,
        ruleCollectionName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/routingConfigurations/{configurationName}/ruleCollections/{ruleCollectionName}/rules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoutingRuleListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.skipToken1,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.networkManagerName2,
    Parameters.configurationName1,
    Parameters.ruleCollectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/routingConfigurations/{configurationName}/ruleCollections/{ruleCollectionName}/rules/{ruleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoutingRule,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.networkManagerName2,
    Parameters.configurationName1,
    Parameters.ruleCollectionName,
    Parameters.ruleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/routingConfigurations/{configurationName}/ruleCollections/{ruleCollectionName}/rules/{ruleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.RoutingRule,
    },
    201: {
      bodyMapper: Mappers.RoutingRule,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.routingRule,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.networkManagerName2,
    Parameters.configurationName1,
    Parameters.ruleCollectionName,
    Parameters.ruleName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/networkManagers/{networkManagerName}/routingConfigurations/{configurationName}/ruleCollections/{ruleCollectionName}/rules/{ruleName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.force],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName1,
    Parameters.networkManagerName2,
    Parameters.configurationName1,
    Parameters.ruleCollectionName,
    Parameters.ruleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RoutingRuleListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.resourceGroupName1,
    Parameters.networkManagerName2,
    Parameters.configurationName1,
    Parameters.ruleCollectionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
