/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { GuestConfigurationHcrpAssignments } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GuestConfigurationClient } from "../guestConfigurationClient";
import {
  GuestConfigurationAssignment,
  GuestConfigurationHcrpAssignmentsListOptionalParams,
  GuestConfigurationHcrpAssignmentsListResponse,
  GuestConfigurationHcrpAssignmentsCreateOrUpdateOptionalParams,
  GuestConfigurationHcrpAssignmentsCreateOrUpdateResponse,
  GuestConfigurationHcrpAssignmentsGetOptionalParams,
  GuestConfigurationHcrpAssignmentsGetResponse,
  GuestConfigurationHcrpAssignmentsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing GuestConfigurationHcrpAssignments operations. */
export class GuestConfigurationHcrpAssignmentsImpl
  implements GuestConfigurationHcrpAssignments
{
  private readonly client: GuestConfigurationClient;

  /**
   * Initialize a new instance of the class GuestConfigurationHcrpAssignments class.
   * @param client Reference to the service client
   */
  constructor(client: GuestConfigurationClient) {
    this.client = client;
  }

  /**
   * List all guest configuration assignments for an ARC machine.
   * @param resourceGroupName The resource group name.
   * @param machineName The name of the ARC machine.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    machineName: string,
    options?: GuestConfigurationHcrpAssignmentsListOptionalParams,
  ): PagedAsyncIterableIterator<GuestConfigurationAssignment> {
    const iter = this.listPagingAll(resourceGroupName, machineName, options);
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
          machineName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    machineName: string,
    options?: GuestConfigurationHcrpAssignmentsListOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<GuestConfigurationAssignment[]> {
    let result: GuestConfigurationHcrpAssignmentsListResponse;
    result = await this._list(resourceGroupName, machineName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    machineName: string,
    options?: GuestConfigurationHcrpAssignmentsListOptionalParams,
  ): AsyncIterableIterator<GuestConfigurationAssignment> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      machineName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Creates an association between a ARC machine and guest configuration
   * @param guestConfigurationAssignmentName Name of the guest configuration assignment.
   * @param resourceGroupName The resource group name.
   * @param machineName The name of the ARC machine.
   * @param parameters Parameters supplied to the create or update guest configuration assignment.
   * @param options The options parameters.
   */
  createOrUpdate(
    guestConfigurationAssignmentName: string,
    resourceGroupName: string,
    machineName: string,
    parameters: GuestConfigurationAssignment,
    options?: GuestConfigurationHcrpAssignmentsCreateOrUpdateOptionalParams,
  ): Promise<GuestConfigurationHcrpAssignmentsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        guestConfigurationAssignmentName,
        resourceGroupName,
        machineName,
        parameters,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Get information about a guest configuration assignment
   * @param resourceGroupName The resource group name.
   * @param guestConfigurationAssignmentName The guest configuration assignment name.
   * @param machineName The name of the ARC machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    guestConfigurationAssignmentName: string,
    machineName: string,
    options?: GuestConfigurationHcrpAssignmentsGetOptionalParams,
  ): Promise<GuestConfigurationHcrpAssignmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        guestConfigurationAssignmentName,
        machineName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Delete a guest configuration assignment
   * @param resourceGroupName The resource group name.
   * @param guestConfigurationAssignmentName Name of the guest configuration assignment
   * @param machineName The name of the ARC machine.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    guestConfigurationAssignmentName: string,
    machineName: string,
    options?: GuestConfigurationHcrpAssignmentsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        guestConfigurationAssignmentName,
        machineName,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * List all guest configuration assignments for an ARC machine.
   * @param resourceGroupName The resource group name.
   * @param machineName The name of the ARC machine.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    machineName: string,
    options?: GuestConfigurationHcrpAssignmentsListOptionalParams,
  ): Promise<GuestConfigurationHcrpAssignmentsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, machineName, options },
      listOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.GuestConfigurationAssignment,
    },
    201: {
      bodyMapper: Mappers.GuestConfigurationAssignment,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.parameters,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.guestConfigurationAssignmentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GuestConfigurationAssignment,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.guestConfigurationAssignmentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments/{guestConfigurationAssignmentName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.guestConfigurationAssignmentName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/providers/Microsoft.GuestConfiguration/guestConfigurationAssignments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GuestConfigurationAssignmentList,
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
    Parameters.machineName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
