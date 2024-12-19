/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper.js";
import { ApiDefinitions } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { AzureAPICenter } from "../azureAPICenter.js";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl.js";
import {
  ApiDefinition,
  ApiDefinitionsListNextOptionalParams,
  ApiDefinitionsListOptionalParams,
  ApiDefinitionsListResponse,
  ApiDefinitionsGetOptionalParams,
  ApiDefinitionsGetResponse,
  ApiDefinitionsCreateOrUpdateOptionalParams,
  ApiDefinitionsCreateOrUpdateResponse,
  ApiDefinitionsDeleteOptionalParams,
  ApiDefinitionsHeadOptionalParams,
  ApiDefinitionsHeadResponse,
  ApiDefinitionsExportSpecificationOptionalParams,
  ApiDefinitionsExportSpecificationResponse,
  ApiSpecImportRequest,
  ApiDefinitionsImportSpecificationOptionalParams,
  ApiDefinitionsListNextResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ApiDefinitions operations. */
export class ApiDefinitionsImpl implements ApiDefinitions {
  private readonly client: AzureAPICenter;

  /**
   * Initialize a new instance of the class ApiDefinitions class.
   * @param client Reference to the service client
   */
  constructor(client: AzureAPICenter) {
    this.client = client;
  }

  /**
   * Returns a collection of API definitions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    options?: ApiDefinitionsListOptionalParams,
  ): PagedAsyncIterableIterator<ApiDefinition> {
    const iter = this.listPagingAll(
      resourceGroupName,
      serviceName,
      workspaceName,
      apiName,
      versionName,
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
          serviceName,
          workspaceName,
          apiName,
          versionName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    options?: ApiDefinitionsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ApiDefinition[]> {
    let result: ApiDefinitionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        serviceName,
        workspaceName,
        apiName,
        versionName,
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
        serviceName,
        workspaceName,
        apiName,
        versionName,
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
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    options?: ApiDefinitionsListOptionalParams,
  ): AsyncIterableIterator<ApiDefinition> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      serviceName,
      workspaceName,
      apiName,
      versionName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Returns a collection of API definitions.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    options?: ApiDefinitionsListOptionalParams,
  ): Promise<ApiDefinitionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceName,
        apiName,
        versionName,
        options,
      },
      listOperationSpec,
    );
  }

  /**
   * Returns details of the API definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    options?: ApiDefinitionsGetOptionalParams,
  ): Promise<ApiDefinitionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceName,
        apiName,
        versionName,
        definitionName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * Creates new or updates existing API definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param resource Resource create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    resource: ApiDefinition,
    options?: ApiDefinitionsCreateOrUpdateOptionalParams,
  ): Promise<ApiDefinitionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceName,
        apiName,
        versionName,
        definitionName,
        resource,
        options,
      },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Deletes specified API definition.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    options?: ApiDefinitionsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceName,
        apiName,
        versionName,
        definitionName,
        options,
      },
      deleteOperationSpec,
    );
  }

  /**
   * Checks if specified API definition exists.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param options The options parameters.
   */
  head(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    options?: ApiDefinitionsHeadOptionalParams,
  ): Promise<ApiDefinitionsHeadResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceName,
        apiName,
        versionName,
        definitionName,
        options,
      },
      headOperationSpec,
    );
  }

  /**
   * Exports the API specification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param options The options parameters.
   */
  async beginExportSpecification(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    options?: ApiDefinitionsExportSpecificationOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ApiDefinitionsExportSpecificationResponse>,
      ApiDefinitionsExportSpecificationResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ApiDefinitionsExportSpecificationResponse> => {
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
        serviceName,
        workspaceName,
        apiName,
        versionName,
        definitionName,
        options,
      },
      spec: exportSpecificationOperationSpec,
    });
    const poller = await createHttpPoller<
      ApiDefinitionsExportSpecificationResponse,
      OperationState<ApiDefinitionsExportSpecificationResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Exports the API specification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param options The options parameters.
   */
  async beginExportSpecificationAndWait(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    options?: ApiDefinitionsExportSpecificationOptionalParams,
  ): Promise<ApiDefinitionsExportSpecificationResponse> {
    const poller = await this.beginExportSpecification(
      resourceGroupName,
      serviceName,
      workspaceName,
      apiName,
      versionName,
      definitionName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Imports the API specification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  async beginImportSpecification(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    body: ApiSpecImportRequest,
    options?: ApiDefinitionsImportSpecificationOptionalParams,
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
        serviceName,
        workspaceName,
        apiName,
        versionName,
        definitionName,
        body,
        options,
      },
      spec: importSpecificationOperationSpec,
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
   * Imports the API specification.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param definitionName The name of the API definition.
   * @param body The content of the action request
   * @param options The options parameters.
   */
  async beginImportSpecificationAndWait(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    body: ApiSpecImportRequest,
    options?: ApiDefinitionsImportSpecificationOptionalParams,
  ): Promise<void> {
    const poller = await this.beginImportSpecification(
      resourceGroupName,
      serviceName,
      workspaceName,
      apiName,
      versionName,
      definitionName,
      body,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serviceName The name of Azure API Center service.
   * @param workspaceName The name of the workspace.
   * @param apiName The name of the API.
   * @param versionName The name of the API version.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    serviceName: string,
    workspaceName: string,
    apiName: string,
    versionName: string,
    nextLink: string,
    options?: ApiDefinitionsListNextOptionalParams,
  ): Promise<ApiDefinitionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        workspaceName,
        apiName,
        versionName,
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
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiCenter/services/{serviceName}/workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiDefinitionListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.workspaceName,
    Parameters.apiName,
    Parameters.versionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiCenter/services/{serviceName}/workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiDefinition,
      headersMapper: Mappers.ApiDefinitionsGetHeaders,
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
    Parameters.serviceName,
    Parameters.workspaceName,
    Parameters.apiName,
    Parameters.versionName,
    Parameters.definitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiCenter/services/{serviceName}/workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ApiDefinition,
      headersMapper: Mappers.ApiDefinitionsCreateOrUpdateHeaders,
    },
    201: {
      bodyMapper: Mappers.ApiDefinition,
      headersMapper: Mappers.ApiDefinitionsCreateOrUpdateHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.resource6,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.workspaceName,
    Parameters.apiName,
    Parameters.versionName,
    Parameters.definitionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiCenter/services/{serviceName}/workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
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
    Parameters.serviceName,
    Parameters.workspaceName,
    Parameters.apiName,
    Parameters.versionName,
    Parameters.definitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const headOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiCenter/services/{serviceName}/workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}",
  httpMethod: "HEAD",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.workspaceName,
    Parameters.apiName,
    Parameters.versionName,
    Parameters.definitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const exportSpecificationOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiCenter/services/{serviceName}/workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}/exportSpecification",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.ApiSpecExportResult,
    },
    201: {
      bodyMapper: Mappers.ApiSpecExportResult,
    },
    202: {
      bodyMapper: Mappers.ApiSpecExportResult,
    },
    204: {
      bodyMapper: Mappers.ApiSpecExportResult,
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
    Parameters.serviceName,
    Parameters.workspaceName,
    Parameters.apiName,
    Parameters.versionName,
    Parameters.definitionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const importSpecificationOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiCenter/services/{serviceName}/workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}/importSpecification",
  httpMethod: "POST",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.body1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.workspaceName,
    Parameters.apiName,
    Parameters.versionName,
    Parameters.definitionName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApiDefinitionListResult,
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
    Parameters.serviceName,
    Parameters.workspaceName,
    Parameters.apiName,
    Parameters.versionName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
