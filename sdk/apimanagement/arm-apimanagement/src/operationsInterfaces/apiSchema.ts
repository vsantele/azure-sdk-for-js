/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { OperationState, SimplePollerLike } from "@azure/core-lro";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
    ApiSchemaCreateOrUpdateOptionalParams,
    ApiSchemaCreateOrUpdateResponse,
    ApiSchemaDeleteOptionalParams,
    ApiSchemaGetEntityTagOptionalParams,
    ApiSchemaGetEntityTagResponse,
    ApiSchemaGetOptionalParams,
    ApiSchemaGetResponse,
    ApiSchemaListByApiOptionalParams,
    SchemaContract
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiSchema. */
export interface ApiSchema {
    /**
     * Get the schema configuration at the API level.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API revision identifier. Must be unique in the current API Management service instance.
     *              Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param options The options parameters.
     */
    listByApi(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        options?: ApiSchemaListByApiOptionalParams
    ): PagedAsyncIterableIterator<SchemaContract>;
    /**
     * Gets the entity state (Etag) version of the schema specified by its identifier.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API revision identifier. Must be unique in the current API Management service instance.
     *              Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param schemaId Schema id identifier. Must be unique in the current API Management service instance.
     * @param options The options parameters.
     */
    getEntityTag(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        schemaId: string,
        options?: ApiSchemaGetEntityTagOptionalParams
    ): Promise<ApiSchemaGetEntityTagResponse>;
    /**
     * Get the schema configuration at the API level.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API revision identifier. Must be unique in the current API Management service instance.
     *              Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param schemaId Schema id identifier. Must be unique in the current API Management service instance.
     * @param options The options parameters.
     */
    get(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        schemaId: string,
        options?: ApiSchemaGetOptionalParams
    ): Promise<ApiSchemaGetResponse>;
    /**
     * Creates or updates schema configuration for the API.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API revision identifier. Must be unique in the current API Management service instance.
     *              Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param schemaId Schema id identifier. Must be unique in the current API Management service instance.
     * @param parameters The schema contents to apply.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        schemaId: string,
        parameters: SchemaContract,
        options?: ApiSchemaCreateOrUpdateOptionalParams
    ): Promise<
        SimplePollerLike<
            OperationState<ApiSchemaCreateOrUpdateResponse>,
            ApiSchemaCreateOrUpdateResponse
        >
    >;
    /**
     * Creates or updates schema configuration for the API.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API revision identifier. Must be unique in the current API Management service instance.
     *              Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param schemaId Schema id identifier. Must be unique in the current API Management service instance.
     * @param parameters The schema contents to apply.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        schemaId: string,
        parameters: SchemaContract,
        options?: ApiSchemaCreateOrUpdateOptionalParams
    ): Promise<ApiSchemaCreateOrUpdateResponse>;
    /**
     * Deletes the schema configuration at the Api.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API revision identifier. Must be unique in the current API Management service instance.
     *              Non-current revision has ;rev=n as a suffix where n is the revision number.
     * @param schemaId Schema id identifier. Must be unique in the current API Management service instance.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param options The options parameters.
     */
    delete(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        schemaId: string,
        ifMatch: string,
        options?: ApiSchemaDeleteOptionalParams
    ): Promise<void>;
}
