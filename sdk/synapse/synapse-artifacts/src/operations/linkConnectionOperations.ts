/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { createSpan } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { LinkConnectionOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as coreTracing from "@azure/core-tracing";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ArtifactsClient } from "../artifactsClient";
import {
  LinkConnectionResource,
  LinkConnectionListLinkConnectionsByWorkspaceNextOptionalParams,
  LinkConnectionListLinkConnectionsByWorkspaceOptionalParams,
  LinkConnectionListLinkConnectionsByWorkspaceResponse,
  LinkConnectionCreateOrUpdateLinkConnectionOptionalParams,
  LinkConnectionCreateOrUpdateLinkConnectionResponse,
  LinkConnectionGetLinkConnectionOptionalParams,
  LinkConnectionGetLinkConnectionResponse,
  LinkConnectionDeleteLinkConnectionOptionalParams,
  EditTablesRequest,
  LinkConnectionEditTablesOptionalParams,
  LinkConnectionStartOptionalParams,
  LinkConnectionStopOptionalParams,
  LinkConnectionGetDetailedStatusOptionalParams,
  LinkConnectionGetDetailedStatusResponse,
  LinkConnectionListLinkTablesOptionalParams,
  LinkConnectionListLinkTablesResponse,
  QueryTableStatusRequest,
  LinkConnectionQueryTableStatusOptionalParams,
  LinkConnectionQueryTableStatusResponse,
  UpdateLandingZoneCredential,
  LinkConnectionUpdateLandingZoneCredentialOptionalParams,
  LinkConnectionListLinkConnectionsByWorkspaceNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing LinkConnectionOperations operations. */
export class LinkConnectionOperationsImpl implements LinkConnectionOperations {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class LinkConnectionOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * List link connections
   * @param options The options parameters.
   */
  public listLinkConnectionsByWorkspace(
    options?: LinkConnectionListLinkConnectionsByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<LinkConnectionResource> {
    const iter = this.listLinkConnectionsByWorkspacePagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listLinkConnectionsByWorkspacePagingPage(options);
      }
    };
  }

  private async *listLinkConnectionsByWorkspacePagingPage(
    options?: LinkConnectionListLinkConnectionsByWorkspaceOptionalParams
  ): AsyncIterableIterator<LinkConnectionResource[]> {
    let result = await this._listLinkConnectionsByWorkspace(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listLinkConnectionsByWorkspaceNext(
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listLinkConnectionsByWorkspacePagingAll(
    options?: LinkConnectionListLinkConnectionsByWorkspaceOptionalParams
  ): AsyncIterableIterator<LinkConnectionResource> {
    for await (const page of this.listLinkConnectionsByWorkspacePagingPage(
      options
    )) {
      yield* page;
    }
  }

  /**
   * List link connections
   * @param options The options parameters.
   */
  private async _listLinkConnectionsByWorkspace(
    options?: LinkConnectionListLinkConnectionsByWorkspaceOptionalParams
  ): Promise<LinkConnectionListLinkConnectionsByWorkspaceResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_listLinkConnectionsByWorkspace",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { options },
        listLinkConnectionsByWorkspaceOperationSpec
      );
      return result as LinkConnectionListLinkConnectionsByWorkspaceResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Creates or updates a link connection
   * @param linkConnectionName The link connection name
   * @param linkConnection Link connection resource definition
   * @param options The options parameters.
   */
  async createOrUpdateLinkConnection(
    linkConnectionName: string,
    linkConnection: LinkConnectionResource,
    options?: LinkConnectionCreateOrUpdateLinkConnectionOptionalParams
  ): Promise<LinkConnectionCreateOrUpdateLinkConnectionResponse> {
    const { span } = createSpan(
      "ArtifactsClient-createOrUpdateLinkConnection",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { linkConnectionName, linkConnection, options },
        createOrUpdateLinkConnectionOperationSpec
      );
      return result as LinkConnectionCreateOrUpdateLinkConnectionResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get a link connection
   * @param linkConnectionName The link connection name
   * @param options The options parameters.
   */
  async getLinkConnection(
    linkConnectionName: string,
    options?: LinkConnectionGetLinkConnectionOptionalParams
  ): Promise<LinkConnectionGetLinkConnectionResponse> {
    const { span } = createSpan(
      "ArtifactsClient-getLinkConnection",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { linkConnectionName, options },
        getLinkConnectionOperationSpec
      );
      return result as LinkConnectionGetLinkConnectionResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Delete a link connection
   * @param linkConnectionName The link connection name
   * @param options The options parameters.
   */
  async deleteLinkConnection(
    linkConnectionName: string,
    options?: LinkConnectionDeleteLinkConnectionOptionalParams
  ): Promise<void> {
    const { span } = createSpan(
      "ArtifactsClient-deleteLinkConnection",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { linkConnectionName, options },
        deleteLinkConnectionOperationSpec
      );
      return result as void;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Edit tables for a link connection
   * @param linkConnectionName The link connection name
   * @param editTablesRequest Edit tables request
   * @param options The options parameters.
   */
  async editTables(
    linkConnectionName: string,
    editTablesRequest: EditTablesRequest,
    options?: LinkConnectionEditTablesOptionalParams
  ): Promise<void> {
    const { span } = createSpan("ArtifactsClient-editTables", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { linkConnectionName, editTablesRequest, options },
        editTablesOperationSpec
      );
      return result as void;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Start a link connection
   * @param linkConnectionName The link connection name
   * @param options The options parameters.
   */
  async start(
    linkConnectionName: string,
    options?: LinkConnectionStartOptionalParams
  ): Promise<void> {
    const { span } = createSpan("ArtifactsClient-start", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { linkConnectionName, options },
        startOperationSpec
      );
      return result as void;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Stop a link connection
   * @param linkConnectionName The link connection name
   * @param options The options parameters.
   */
  async stop(
    linkConnectionName: string,
    options?: LinkConnectionStopOptionalParams
  ): Promise<void> {
    const { span } = createSpan("ArtifactsClient-stop", options || {});
    try {
      const result = await this.client.sendOperationRequest(
        { linkConnectionName, options },
        stopOperationSpec
      );
      return result as void;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get the detailed status of a link connection
   * @param linkConnectionName The link connection name
   * @param options The options parameters.
   */
  async getDetailedStatus(
    linkConnectionName: string,
    options?: LinkConnectionGetDetailedStatusOptionalParams
  ): Promise<LinkConnectionGetDetailedStatusResponse> {
    const { span } = createSpan(
      "ArtifactsClient-getDetailedStatus",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { linkConnectionName, options },
        getDetailedStatusOperationSpec
      );
      return result as LinkConnectionGetDetailedStatusResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * List the link tables of a link connection
   * @param linkConnectionName The link connection name
   * @param options The options parameters.
   */
  async listLinkTables(
    linkConnectionName: string,
    options?: LinkConnectionListLinkTablesOptionalParams
  ): Promise<LinkConnectionListLinkTablesResponse> {
    const { span } = createSpan(
      "ArtifactsClient-listLinkTables",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { linkConnectionName, options },
        listLinkTablesOperationSpec
      );
      return result as LinkConnectionListLinkTablesResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Query the link table status of a link connection
   * @param linkConnectionName The link connection name
   * @param queryTableStatusRequest Query table status request
   * @param options The options parameters.
   */
  async queryTableStatus(
    linkConnectionName: string,
    queryTableStatusRequest: QueryTableStatusRequest,
    options?: LinkConnectionQueryTableStatusOptionalParams
  ): Promise<LinkConnectionQueryTableStatusResponse> {
    const { span } = createSpan(
      "ArtifactsClient-queryTableStatus",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { linkConnectionName, queryTableStatusRequest, options },
        queryTableStatusOperationSpec
      );
      return result as LinkConnectionQueryTableStatusResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Update landing zone credential of a link connection
   * @param linkConnectionName The link connection name
   * @param updateLandingZoneCredentialRequest update landing zone credential request
   * @param options The options parameters.
   */
  async updateLandingZoneCredential(
    linkConnectionName: string,
    updateLandingZoneCredentialRequest: UpdateLandingZoneCredential,
    options?: LinkConnectionUpdateLandingZoneCredentialOptionalParams
  ): Promise<void> {
    const { span } = createSpan(
      "ArtifactsClient-updateLandingZoneCredential",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { linkConnectionName, updateLandingZoneCredentialRequest, options },
        updateLandingZoneCredentialOperationSpec
      );
      return result as void;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * ListLinkConnectionsByWorkspaceNext
   * @param nextLink The nextLink from the previous successful call to the ListLinkConnectionsByWorkspace
   *                 method.
   * @param options The options parameters.
   */
  private async _listLinkConnectionsByWorkspaceNext(
    nextLink: string,
    options?: LinkConnectionListLinkConnectionsByWorkspaceNextOptionalParams
  ): Promise<LinkConnectionListLinkConnectionsByWorkspaceNextResponse> {
    const { span } = createSpan(
      "ArtifactsClient-_listLinkConnectionsByWorkspaceNext",
      options || {}
    );
    try {
      const result = await this.client.sendOperationRequest(
        { nextLink, options },
        listLinkConnectionsByWorkspaceNextOperationSpec
      );
      return result as LinkConnectionListLinkConnectionsByWorkspaceNextResponse;
    } catch (error: any) {
      span.setStatus({
        code: coreTracing.SpanStatusCode.UNSET,
        message: error.message
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listLinkConnectionsByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkConnectionListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateLinkConnectionOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LinkConnectionResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.linkConnection,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getLinkConnectionOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkConnectionResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteLinkConnectionOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer
};
const editTablesOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/edittables",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.editTablesRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const startOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/start",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer
};
const stopOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/stop",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer
};
const getDetailedStatusOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/detailedstatus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkConnectionDetailedStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer
};
const listLinkTablesOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/linktables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkTableListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer
};
const queryTableStatusOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/querytablestatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LinkConnectionQueryTableStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.queryTableStatusRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const updateLandingZoneCredentialOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/updateLandingZoneCredential",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.updateLandingZoneCredentialRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listLinkConnectionsByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkConnectionListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
