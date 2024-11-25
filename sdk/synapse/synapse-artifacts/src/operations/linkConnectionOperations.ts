/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing.js";
import type { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import type { LinkConnectionOperations } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import type { ArtifactsClient } from "../artifactsClient.js";
import type {
  LinkConnectionResource,
  LinkConnectionListByWorkspaceNextOptionalParams,
  LinkConnectionListByWorkspaceOptionalParams,
  LinkConnectionListByWorkspaceResponse,
  LinkConnectionCreateOrUpdateOptionalParams,
  LinkConnectionCreateOrUpdateResponse,
  LinkConnectionGetOptionalParams,
  LinkConnectionGetResponse,
  LinkConnectionDeleteOptionalParams,
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
  LinkConnectionPauseOptionalParams,
  LinkConnectionResumeOptionalParams,
  LinkConnectionListByWorkspaceNextResponse,
} from "../models/index.js";

// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByWorkspaceOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkConnectionListResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.LinkConnectionResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.linkConnection,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkConnectionResource,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer,
};
const editTablesOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/edittables",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.editTablesRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const startOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/start",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer,
};
const stopOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/stop",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer,
};
const getDetailedStatusOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/detailedstatus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkConnectionDetailedStatus,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer,
};
const listLinkTablesOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/linktables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkTableListResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer,
};
const queryTableStatusOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/querytablestatus",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.LinkConnectionQueryTableStatus,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.queryTableStatusRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateLandingZoneCredentialOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/updateLandingZoneCredential",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.updateLandingZoneCredentialRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const pauseOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/pause",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer,
};
const resumeOperationSpec: coreClient.OperationSpec = {
  path: "/linkconnections/{linkConnectionName}/resume",
  httpMethod: "POST",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.linkConnectionName],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByWorkspaceNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LinkConnectionListResponse,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};

/** Class containing LinkConnectionOperations operations. */
export class LinkConnectionOperationsImpl implements LinkConnectionOperations {
  private readonly client: ArtifactsClient;

  /**
   * Initialize a new instance of the class LinkConnectionOperations class.
   * @param client - Reference to the service client
   */
  constructor(client: ArtifactsClient) {
    this.client = client;
  }

  /**
   * List link connections
   * @param options - The options parameters.
   */
  public listByWorkspace(
    options?: LinkConnectionListByWorkspaceOptionalParams,
  ): PagedAsyncIterableIterator<LinkConnectionResource> {
    const iter = this.listByWorkspacePagingAll(options);
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
        return this.listByWorkspacePagingPage(options, settings);
      },
    };
  }

  private async *listByWorkspacePagingPage(
    options?: LinkConnectionListByWorkspaceOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<LinkConnectionResource[]> {
    let result: LinkConnectionListByWorkspaceResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByWorkspace(options);
      const page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByWorkspaceNext(continuationToken, options);
      continuationToken = result.nextLink;
      const page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByWorkspacePagingAll(
    options?: LinkConnectionListByWorkspaceOptionalParams,
  ): AsyncIterableIterator<LinkConnectionResource> {
    for await (const page of this.listByWorkspacePagingPage(options)) {
      yield* page;
    }
  }

  /**
   * List link connections
   * @param options - The options parameters.
   */
  private async _listByWorkspace(
    options?: LinkConnectionListByWorkspaceOptionalParams,
  ): Promise<LinkConnectionListByWorkspaceResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient._listByWorkspace",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { updatedOptions },
          listByWorkspaceOperationSpec,
        ) as Promise<LinkConnectionListByWorkspaceResponse>;
      },
    );
  }

  /**
   * Creates or updates a link connection
   * @param linkConnectionName - The link connection name
   * @param linkConnection - Link connection resource definition
   * @param options - The options parameters.
   */
  async createOrUpdate(
    linkConnectionName: string,
    linkConnection: LinkConnectionResource,
    options?: LinkConnectionCreateOrUpdateOptionalParams,
  ): Promise<LinkConnectionCreateOrUpdateResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient.createOrUpdate",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { linkConnectionName, linkConnection, updatedOptions },
          createOrUpdateOperationSpec,
        ) as Promise<LinkConnectionCreateOrUpdateResponse>;
      },
    );
  }

  /**
   * Get a link connection
   * @param linkConnectionName - The link connection name
   * @param options - The options parameters.
   */
  async get(
    linkConnectionName: string,
    options?: LinkConnectionGetOptionalParams,
  ): Promise<LinkConnectionGetResponse> {
    return tracingClient.withSpan("ArtifactsClient.get", options ?? {}, async (updatedOptions) => {
      return this.client.sendOperationRequest(
        { linkConnectionName, updatedOptions },
        getOperationSpec,
      ) as Promise<LinkConnectionGetResponse>;
    });
  }

  /**
   * Delete a link connection
   * @param linkConnectionName - The link connection name
   * @param options - The options parameters.
   */
  async delete(
    linkConnectionName: string,
    options?: LinkConnectionDeleteOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "ArtifactsClient.delete",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { linkConnectionName, updatedOptions },
          deleteOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Edit tables for a link connection
   * @param linkConnectionName - The link connection name
   * @param editTablesRequest - Edit tables request
   * @param options - The options parameters.
   */
  async editTables(
    linkConnectionName: string,
    editTablesRequest: EditTablesRequest,
    options?: LinkConnectionEditTablesOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "ArtifactsClient.editTables",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { linkConnectionName, editTablesRequest, updatedOptions },
          editTablesOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Start a link connection. It may take a few minutes from Starting to Running, monitor the status with
   * LinkConnection_GetDetailedStatus.
   * @param linkConnectionName - The link connection name
   * @param options - The options parameters.
   */
  async start(
    linkConnectionName: string,
    options?: LinkConnectionStartOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "ArtifactsClient.start",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { linkConnectionName, updatedOptions },
          startOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Stop a link connection. It may take a few minutes from Stopping to stopped, monitor the status with
   * LinkConnection_GetDetailedStatus.
   * @param linkConnectionName - The link connection name
   * @param options - The options parameters.
   */
  async stop(
    linkConnectionName: string,
    options?: LinkConnectionStopOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan("ArtifactsClient.stop", options ?? {}, async (updatedOptions) => {
      return this.client.sendOperationRequest(
        { linkConnectionName, updatedOptions },
        stopOperationSpec,
      ) as Promise<void>;
    });
  }

  /**
   * Get the detailed status of a link connection
   * @param linkConnectionName - The link connection name
   * @param options - The options parameters.
   */
  async getDetailedStatus(
    linkConnectionName: string,
    options?: LinkConnectionGetDetailedStatusOptionalParams,
  ): Promise<LinkConnectionGetDetailedStatusResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient.getDetailedStatus",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { linkConnectionName, updatedOptions },
          getDetailedStatusOperationSpec,
        ) as Promise<LinkConnectionGetDetailedStatusResponse>;
      },
    );
  }

  /**
   * List the link tables of a link connection
   * @param linkConnectionName - The link connection name
   * @param options - The options parameters.
   */
  async listLinkTables(
    linkConnectionName: string,
    options?: LinkConnectionListLinkTablesOptionalParams,
  ): Promise<LinkConnectionListLinkTablesResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient.listLinkTables",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { linkConnectionName, updatedOptions },
          listLinkTablesOperationSpec,
        ) as Promise<LinkConnectionListLinkTablesResponse>;
      },
    );
  }

  /**
   * Query the link table status of a link connection
   * @param linkConnectionName - The link connection name
   * @param queryTableStatusRequest - Query table status request
   * @param options - The options parameters.
   */
  async queryTableStatus(
    linkConnectionName: string,
    queryTableStatusRequest: QueryTableStatusRequest,
    options?: LinkConnectionQueryTableStatusOptionalParams,
  ): Promise<LinkConnectionQueryTableStatusResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient.queryTableStatus",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { linkConnectionName, queryTableStatusRequest, updatedOptions },
          queryTableStatusOperationSpec,
        ) as Promise<LinkConnectionQueryTableStatusResponse>;
      },
    );
  }

  /**
   * Update landing zone credential of a link connection
   * @param linkConnectionName - The link connection name
   * @param updateLandingZoneCredentialRequest - update landing zone credential request
   * @param options - The options parameters.
   */
  async updateLandingZoneCredential(
    linkConnectionName: string,
    updateLandingZoneCredentialRequest: UpdateLandingZoneCredential,
    options?: LinkConnectionUpdateLandingZoneCredentialOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "ArtifactsClient.updateLandingZoneCredential",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { linkConnectionName, updateLandingZoneCredentialRequest, updatedOptions },
          updateLandingZoneCredentialOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Pause a link connection. It may take a few minutes from Pausing to Paused, monitor the status with
   * LinkConnection_GetDetailedStatus.
   * @param linkConnectionName - The link connection name
   * @param options - The options parameters.
   */
  async pause(
    linkConnectionName: string,
    options?: LinkConnectionPauseOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "ArtifactsClient.pause",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { linkConnectionName, updatedOptions },
          pauseOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * Resume a link connection. It may take a few minutes from Resuming to Running, monitor the status
   * with LinkConnection_GetDetailedStatus.
   * @param linkConnectionName - The link connection name
   * @param options - The options parameters.
   */
  async resume(
    linkConnectionName: string,
    options?: LinkConnectionResumeOptionalParams,
  ): Promise<void> {
    return tracingClient.withSpan(
      "ArtifactsClient.resume",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { linkConnectionName, updatedOptions },
          resumeOperationSpec,
        ) as Promise<void>;
      },
    );
  }

  /**
   * ListByWorkspaceNext
   * @param nextLink - The nextLink from the previous successful call to the ListByWorkspace method.
   * @param options - The options parameters.
   */
  private async _listByWorkspaceNext(
    nextLink: string,
    options?: LinkConnectionListByWorkspaceNextOptionalParams,
  ): Promise<LinkConnectionListByWorkspaceNextResponse> {
    return tracingClient.withSpan(
      "ArtifactsClient._listByWorkspaceNext",
      options ?? {},
      async (updatedOptions) => {
        return this.client.sendOperationRequest(
          { nextLink, updatedOptions },
          listByWorkspaceNextOperationSpec,
        ) as Promise<LinkConnectionListByWorkspaceNextResponse>;
      },
    );
  }
}
