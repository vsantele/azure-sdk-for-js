/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { ApiManagementClient } from "../apiManagementClient.js";
import {
    ContentTypeContract,
    ContentTypeCreateOrUpdateOptionalParams,
    ContentTypeCreateOrUpdateResponse,
    ContentTypeDeleteOptionalParams,
    ContentTypeGetOptionalParams,
    ContentTypeGetResponse,
    ContentTypeListByServiceNextOptionalParams,
    ContentTypeListByServiceNextResponse,
    ContentTypeListByServiceOptionalParams,
    ContentTypeListByServiceResponse
} from "../models/index.js";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { ContentType } from "../operationsInterfaces/index.js";
import { setContinuationToken } from "../pagingHelper.js";

/// <reference lib="esnext.asynciterable" />
/** Class containing ContentType operations. */
export class ContentTypeImpl implements ContentType {
    private readonly client: ApiManagementClient;

    /**
     * Initialize a new instance of the class ContentType class.
     * @param client Reference to the service client
     */
    constructor(client: ApiManagementClient) {
        this.client = client;
    }

    /**
     * Lists the developer portal's content types. Content types describe content items' properties,
     * validation rules, and constraints.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param options The options parameters.
     */
    public listByService(
        resourceGroupName: string,
        serviceName: string,
        options?: ContentTypeListByServiceOptionalParams
    ): PagedAsyncIterableIterator<ContentTypeContract> {
        const iter = this.listByServicePagingAll(
            resourceGroupName,
            serviceName,
            options
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
                return this.listByServicePagingPage(
                    resourceGroupName,
                    serviceName,
                    options,
                    settings
                );
            }
        };
    }

    private async *listByServicePagingPage(
        resourceGroupName: string,
        serviceName: string,
        options?: ContentTypeListByServiceOptionalParams,
        settings?: PageSettings
    ): AsyncIterableIterator<ContentTypeContract[]> {
        let result: ContentTypeListByServiceResponse;
        let continuationToken = settings?.continuationToken;
        if (!continuationToken) {
            result = await this._listByService(
                resourceGroupName,
                serviceName,
                options
            );
            let page = result.value || [];
            continuationToken = result.nextLink;
            setContinuationToken(page, continuationToken);
            yield page;
        }
        while (continuationToken) {
            result = await this._listByServiceNext(
                resourceGroupName,
                serviceName,
                continuationToken,
                options
            );
            continuationToken = result.nextLink;
            let page = result.value || [];
            setContinuationToken(page, continuationToken);
            yield page;
        }
    }

    private async *listByServicePagingAll(
        resourceGroupName: string,
        serviceName: string,
        options?: ContentTypeListByServiceOptionalParams
    ): AsyncIterableIterator<ContentTypeContract> {
        for await (const page of this.listByServicePagingPage(
            resourceGroupName,
            serviceName,
            options
        )) {
            yield* page;
        }
    }

    /**
     * Lists the developer portal's content types. Content types describe content items' properties,
     * validation rules, and constraints.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param options The options parameters.
     */
    private _listByService(
        resourceGroupName: string,
        serviceName: string,
        options?: ContentTypeListByServiceOptionalParams
    ): Promise<ContentTypeListByServiceResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, options },
            listByServiceOperationSpec
        );
    }

    /**
     * Gets the details of the developer portal's content type. Content types describe content items'
     * properties, validation rules, and constraints.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param contentTypeId Content type identifier.
     * @param options The options parameters.
     */
    get(
        resourceGroupName: string,
        serviceName: string,
        contentTypeId: string,
        options?: ContentTypeGetOptionalParams
    ): Promise<ContentTypeGetResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, contentTypeId, options },
            getOperationSpec
        );
    }

    /**
     * Creates or updates the developer portal's content type. Content types describe content items'
     * properties, validation rules, and constraints. Custom content types' identifiers need to start with
     * the `c-` prefix. Built-in content types can't be modified.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param contentTypeId Content type identifier.
     * @param parameters Create or update parameters.
     * @param options The options parameters.
     */
    createOrUpdate(
        resourceGroupName: string,
        serviceName: string,
        contentTypeId: string,
        parameters: ContentTypeContract,
        options?: ContentTypeCreateOrUpdateOptionalParams
    ): Promise<ContentTypeCreateOrUpdateResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, contentTypeId, parameters, options },
            createOrUpdateOperationSpec
        );
    }

    /**
     * Removes the specified developer portal's content type. Content types describe content items'
     * properties, validation rules, and constraints. Built-in content types (with identifiers starting
     * with the `c-` prefix) can't be removed.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param contentTypeId Content type identifier.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param options The options parameters.
     */
    delete(
        resourceGroupName: string,
        serviceName: string,
        contentTypeId: string,
        ifMatch: string,
        options?: ContentTypeDeleteOptionalParams
    ): Promise<void> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, contentTypeId, ifMatch, options },
            deleteOperationSpec
        );
    }

    /**
     * ListByServiceNext
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param nextLink The nextLink from the previous successful call to the ListByService method.
     * @param options The options parameters.
     */
    private _listByServiceNext(
        resourceGroupName: string,
        serviceName: string,
        nextLink: string,
        options?: ContentTypeListByServiceNextOptionalParams
    ): Promise<ContentTypeListByServiceNextResponse> {
        return this.client.sendOperationRequest(
            { resourceGroupName, serviceName, nextLink, options },
            listByServiceNextOperationSpec
        );
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByServiceOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ContentTypeCollection
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const getOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ContentTypeContract,
            headersMapper: Mappers.ContentTypeGetHeaders
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.contentTypeId
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}",
    httpMethod: "PUT",
    responses: {
        200: {
            bodyMapper: Mappers.ContentTypeContract,
            headersMapper: Mappers.ContentTypeCreateOrUpdateHeaders
        },
        201: {
            bodyMapper: Mappers.ContentTypeContract,
            headersMapper: Mappers.ContentTypeCreateOrUpdateHeaders
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    requestBody: Parameters.parameters33,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.contentTypeId
    ],
    headerParameters: [
        Parameters.accept,
        Parameters.contentType,
        Parameters.ifMatch
    ],
    mediaType: "json",
    serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/contentTypes/{contentTypeId}",
    httpMethod: "DELETE",
    responses: {
        200: {},
        204: {},
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.contentTypeId
    ],
    headerParameters: [Parameters.accept, Parameters.ifMatch1],
    serializer
};
const listByServiceNextOperationSpec: coreClient.OperationSpec = {
    path: "{nextLink}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ContentTypeCollection
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.nextLink
    ],
    headerParameters: [Parameters.accept],
    serializer
};
