/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { TopicTypes } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClient } from "../eventGridManagementClient";
import {
  TopicTypeInfo,
  TopicTypesListOptionalParams,
  TopicTypesListResponse,
  EventType,
  TopicTypesListEventTypesOptionalParams,
  TopicTypesListEventTypesResponse,
  TopicTypesGetOptionalParams,
  TopicTypesGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing TopicTypes operations. */
export class TopicTypesImpl implements TopicTypes {
  private readonly client: EventGridManagementClient;

  /**
   * Initialize a new instance of the class TopicTypes class.
   * @param client Reference to the service client
   */
  constructor(client: EventGridManagementClient) {
    this.client = client;
  }

  /**
   * List all registered topic types.
   * @param options The options parameters.
   */
  public list(
    options?: TopicTypesListOptionalParams,
  ): PagedAsyncIterableIterator<TopicTypeInfo> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: TopicTypesListOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<TopicTypeInfo[]> {
    let result: TopicTypesListResponse;
    result = await this._list(options);
    yield result.value || [];
  }

  private async *listPagingAll(
    options?: TopicTypesListOptionalParams,
  ): AsyncIterableIterator<TopicTypeInfo> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List event types for a topic type.
   * @param topicTypeName Name of the topic type.
   * @param options The options parameters.
   */
  public listEventTypes(
    topicTypeName: string,
    options?: TopicTypesListEventTypesOptionalParams,
  ): PagedAsyncIterableIterator<EventType> {
    const iter = this.listEventTypesPagingAll(topicTypeName, options);
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
        return this.listEventTypesPagingPage(topicTypeName, options, settings);
      },
    };
  }

  private async *listEventTypesPagingPage(
    topicTypeName: string,
    options?: TopicTypesListEventTypesOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<EventType[]> {
    let result: TopicTypesListEventTypesResponse;
    result = await this._listEventTypes(topicTypeName, options);
    yield result.value || [];
  }

  private async *listEventTypesPagingAll(
    topicTypeName: string,
    options?: TopicTypesListEventTypesOptionalParams,
  ): AsyncIterableIterator<EventType> {
    for await (const page of this.listEventTypesPagingPage(
      topicTypeName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List all registered topic types.
   * @param options The options parameters.
   */
  private _list(
    options?: TopicTypesListOptionalParams,
  ): Promise<TopicTypesListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Get information about a topic type.
   * @param topicTypeName Name of the topic type.
   * @param options The options parameters.
   */
  get(
    topicTypeName: string,
    options?: TopicTypesGetOptionalParams,
  ): Promise<TopicTypesGetResponse> {
    return this.client.sendOperationRequest(
      { topicTypeName, options },
      getOperationSpec,
    );
  }

  /**
   * List event types for a topic type.
   * @param topicTypeName Name of the topic type.
   * @param options The options parameters.
   */
  private _listEventTypes(
    topicTypeName: string,
    options?: TopicTypesListEventTypesOptionalParams,
  ): Promise<TopicTypesListEventTypesResponse> {
    return this.client.sendOperationRequest(
      { topicTypeName, options },
      listEventTypesOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.EventGrid/topicTypes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopicTypesListResult,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.EventGrid/topicTypes/{topicTypeName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TopicTypeInfo,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.topicTypeName],
  headerParameters: [Parameters.accept],
  serializer,
};
const listEventTypesOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.EventGrid/topicTypes/{topicTypeName}/eventTypes",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.EventTypesListResult,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.topicTypeName],
  headerParameters: [Parameters.accept],
  serializer,
};
