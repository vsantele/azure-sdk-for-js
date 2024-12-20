/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { RestorableGremlinGraphs } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { CosmosDBManagementClient } from "../cosmosDBManagementClient.js";
import {
  RestorableGremlinGraphGetResult,
  RestorableGremlinGraphsListOptionalParams,
  RestorableGremlinGraphsListResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing RestorableGremlinGraphs operations. */
export class RestorableGremlinGraphsImpl implements RestorableGremlinGraphs {
  private readonly client: CosmosDBManagementClient;

  /**
   * Initialize a new instance of the class RestorableGremlinGraphs class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBManagementClient) {
    this.client = client;
  }

  /**
   * Show the event feed of all mutations done on all the Azure Cosmos DB Gremlin graphs under a specific
   * database. This helps in scenario where container was accidentally deleted. This API requires
   * 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param options The options parameters.
   */
  public list(
    location: string,
    instanceId: string,
    options?: RestorableGremlinGraphsListOptionalParams,
  ): PagedAsyncIterableIterator<RestorableGremlinGraphGetResult> {
    const iter = this.listPagingAll(location, instanceId, options);
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
        return this.listPagingPage(location, instanceId, options, settings);
      },
    };
  }

  private async *listPagingPage(
    location: string,
    instanceId: string,
    options?: RestorableGremlinGraphsListOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<RestorableGremlinGraphGetResult[]> {
    let result: RestorableGremlinGraphsListResponse;
    result = await this._list(location, instanceId, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    location: string,
    instanceId: string,
    options?: RestorableGremlinGraphsListOptionalParams,
  ): AsyncIterableIterator<RestorableGremlinGraphGetResult> {
    for await (const page of this.listPagingPage(
      location,
      instanceId,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Show the event feed of all mutations done on all the Azure Cosmos DB Gremlin graphs under a specific
   * database. This helps in scenario where container was accidentally deleted. This API requires
   * 'Microsoft.DocumentDB/locations/restorableDatabaseAccounts/.../read' permission
   * @param location Cosmos DB region, with spaces between words and each word capitalized.
   * @param instanceId The instanceId GUID of a restorable database account.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    instanceId: string,
    options?: RestorableGremlinGraphsListOptionalParams,
  ): Promise<RestorableGremlinGraphsListResponse> {
    return this.client.sendOperationRequest(
      { location, instanceId, options },
      listOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.DocumentDB/locations/{location}/restorableDatabaseAccounts/{instanceId}/restorableGraphs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RestorableGremlinGraphsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.startTime,
    Parameters.endTime,
    Parameters.restorableGremlinDatabaseRid,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location1,
    Parameters.instanceId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
