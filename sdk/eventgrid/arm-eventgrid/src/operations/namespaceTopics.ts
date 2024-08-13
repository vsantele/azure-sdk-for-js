/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { NamespaceTopics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClient } from "../eventGridManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  NamespaceTopic,
  NamespaceTopicsListByNamespaceNextOptionalParams,
  NamespaceTopicsListByNamespaceOptionalParams,
  NamespaceTopicsListByNamespaceResponse,
  NamespaceTopicsGetOptionalParams,
  NamespaceTopicsGetResponse,
  NamespaceTopicsCreateOrUpdateOptionalParams,
  NamespaceTopicsCreateOrUpdateResponse,
  NamespaceTopicsDeleteOptionalParams,
  NamespaceTopicUpdateParameters,
  NamespaceTopicsUpdateOptionalParams,
  NamespaceTopicsUpdateResponse,
  NamespaceTopicsListSharedAccessKeysOptionalParams,
  NamespaceTopicsListSharedAccessKeysResponse,
  TopicRegenerateKeyRequest,
  NamespaceTopicsRegenerateKeyOptionalParams,
  NamespaceTopicsRegenerateKeyResponse,
  NamespaceTopicsListByNamespaceNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing NamespaceTopics operations. */
export class NamespaceTopicsImpl implements NamespaceTopics {
  private readonly client: EventGridManagementClient;

  /**
   * Initialize a new instance of the class NamespaceTopics class.
   * @param client Reference to the service client
   */
  constructor(client: EventGridManagementClient) {
    this.client = client;
  }

  /**
   * List all the namespace topics under a namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param options The options parameters.
   */
  public listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespaceTopicsListByNamespaceOptionalParams,
  ): PagedAsyncIterableIterator<NamespaceTopic> {
    const iter = this.listByNamespacePagingAll(
      resourceGroupName,
      namespaceName,
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
        return this.listByNamespacePagingPage(
          resourceGroupName,
          namespaceName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByNamespacePagingPage(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespaceTopicsListByNamespaceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<NamespaceTopic[]> {
    let result: NamespaceTopicsListByNamespaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByNamespace(
        resourceGroupName,
        namespaceName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByNamespaceNext(
        resourceGroupName,
        namespaceName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByNamespacePagingAll(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespaceTopicsListByNamespaceOptionalParams,
  ): AsyncIterableIterator<NamespaceTopic> {
    for await (const page of this.listByNamespacePagingPage(
      resourceGroupName,
      namespaceName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Get properties of a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicsGetOptionalParams,
  ): Promise<NamespaceTopicsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, topicName, options },
      getOperationSpec,
    );
  }

  /**
   * Asynchronously creates a new namespace topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param namespaceTopicInfo Namespace topic information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    namespaceTopicInfo: NamespaceTopic,
    options?: NamespaceTopicsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NamespaceTopicsCreateOrUpdateResponse>,
      NamespaceTopicsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<NamespaceTopicsCreateOrUpdateResponse> => {
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
        namespaceName,
        topicName,
        namespaceTopicInfo,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      NamespaceTopicsCreateOrUpdateResponse,
      OperationState<NamespaceTopicsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Asynchronously creates a new namespace topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param namespaceTopicInfo Namespace topic information.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    namespaceTopicInfo: NamespaceTopic,
    options?: NamespaceTopicsCreateOrUpdateOptionalParams,
  ): Promise<NamespaceTopicsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      namespaceName,
      topicName,
      namespaceTopicInfo,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Delete existing namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the topic.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicsDeleteOptionalParams,
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
      args: { resourceGroupName, namespaceName, topicName, options },
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
   * Delete existing namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the topic.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      namespaceName,
      topicName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Asynchronously updates a namespace topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param namespaceTopicUpdateParameters Namespace topic update information.
   * @param options The options parameters.
   */
  async beginUpdate(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    namespaceTopicUpdateParameters: NamespaceTopicUpdateParameters,
    options?: NamespaceTopicsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NamespaceTopicsUpdateResponse>,
      NamespaceTopicsUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<NamespaceTopicsUpdateResponse> => {
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
        namespaceName,
        topicName,
        namespaceTopicUpdateParameters,
        options,
      },
      spec: updateOperationSpec,
    });
    const poller = await createHttpPoller<
      NamespaceTopicsUpdateResponse,
      OperationState<NamespaceTopicsUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Asynchronously updates a namespace topic with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the namespace topic.
   * @param namespaceTopicUpdateParameters Namespace topic update information.
   * @param options The options parameters.
   */
  async beginUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    namespaceTopicUpdateParameters: NamespaceTopicUpdateParameters,
    options?: NamespaceTopicsUpdateOptionalParams,
  ): Promise<NamespaceTopicsUpdateResponse> {
    const poller = await this.beginUpdate(
      resourceGroupName,
      namespaceName,
      topicName,
      namespaceTopicUpdateParameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * List all the namespace topics under a namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param options The options parameters.
   */
  private _listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: NamespaceTopicsListByNamespaceOptionalParams,
  ): Promise<NamespaceTopicsListByNamespaceResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, options },
      listByNamespaceOperationSpec,
    );
  }

  /**
   * List the two keys used to publish to a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the topic.
   * @param options The options parameters.
   */
  listSharedAccessKeys(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    options?: NamespaceTopicsListSharedAccessKeysOptionalParams,
  ): Promise<NamespaceTopicsListSharedAccessKeysResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, topicName, options },
      listSharedAccessKeysOperationSpec,
    );
  }

  /**
   * Regenerate a shared access key for a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the topic.
   * @param regenerateKeyRequest Request body to regenerate key.
   * @param options The options parameters.
   */
  async beginRegenerateKey(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    regenerateKeyRequest: TopicRegenerateKeyRequest,
    options?: NamespaceTopicsRegenerateKeyOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<NamespaceTopicsRegenerateKeyResponse>,
      NamespaceTopicsRegenerateKeyResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<NamespaceTopicsRegenerateKeyResponse> => {
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
        namespaceName,
        topicName,
        regenerateKeyRequest,
        options,
      },
      spec: regenerateKeyOperationSpec,
    });
    const poller = await createHttpPoller<
      NamespaceTopicsRegenerateKeyResponse,
      OperationState<NamespaceTopicsRegenerateKeyResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Regenerate a shared access key for a namespace topic.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param topicName Name of the topic.
   * @param regenerateKeyRequest Request body to regenerate key.
   * @param options The options parameters.
   */
  async beginRegenerateKeyAndWait(
    resourceGroupName: string,
    namespaceName: string,
    topicName: string,
    regenerateKeyRequest: TopicRegenerateKeyRequest,
    options?: NamespaceTopicsRegenerateKeyOptionalParams,
  ): Promise<NamespaceTopicsRegenerateKeyResponse> {
    const poller = await this.beginRegenerateKey(
      resourceGroupName,
      namespaceName,
      topicName,
      regenerateKeyRequest,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListByNamespaceNext
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param nextLink The nextLink from the previous successful call to the ListByNamespace method.
   * @param options The options parameters.
   */
  private _listByNamespaceNext(
    resourceGroupName: string,
    namespaceName: string,
    nextLink: string,
    options?: NamespaceTopicsListByNamespaceNextOptionalParams,
  ): Promise<NamespaceTopicsListByNamespaceNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, namespaceName, nextLink, options },
      listByNamespaceNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NamespaceTopic,
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
    Parameters.namespaceName,
    Parameters.topicName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.NamespaceTopic,
    },
    201: {
      bodyMapper: Mappers.NamespaceTopic,
    },
    202: {
      bodyMapper: Mappers.NamespaceTopic,
    },
    204: {
      bodyMapper: Mappers.NamespaceTopic,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.namespaceTopicInfo,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.topicName1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}",
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
    Parameters.namespaceName,
    Parameters.topicName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.NamespaceTopic,
    },
    201: {
      bodyMapper: Mappers.NamespaceTopic,
    },
    202: {
      bodyMapper: Mappers.NamespaceTopic,
    },
    204: {
      bodyMapper: Mappers.NamespaceTopic,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.namespaceTopicUpdateParameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.topicName1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByNamespaceOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NamespaceTopicsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listSharedAccessKeysOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/listKeys",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TopicSharedAccessKeys,
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
    Parameters.namespaceName,
    Parameters.topicName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const regenerateKeyOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/namespaces/{namespaceName}/topics/{topicName}/regenerateKey",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.TopicSharedAccessKeys,
    },
    201: {
      bodyMapper: Mappers.TopicSharedAccessKeys,
    },
    202: {
      bodyMapper: Mappers.TopicSharedAccessKeys,
    },
    204: {
      bodyMapper: Mappers.TopicSharedAccessKeys,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.regenerateKeyRequest2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.topicName1,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByNamespaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.NamespaceTopicsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
