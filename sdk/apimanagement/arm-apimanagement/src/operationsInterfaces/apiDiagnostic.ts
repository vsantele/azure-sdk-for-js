/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
    ApiDiagnosticCreateOrUpdateOptionalParams,
    ApiDiagnosticCreateOrUpdateResponse,
    ApiDiagnosticDeleteOptionalParams,
    ApiDiagnosticGetEntityTagOptionalParams,
    ApiDiagnosticGetEntityTagResponse,
    ApiDiagnosticGetOptionalParams,
    ApiDiagnosticGetResponse,
    ApiDiagnosticListByServiceOptionalParams,
    ApiDiagnosticUpdateOptionalParams,
    ApiDiagnosticUpdateResponse,
    DiagnosticContract
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiDiagnostic. */
export interface ApiDiagnostic {
    /**
     * Lists all diagnostics of an API.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API identifier. Must be unique in the current API Management service instance.
     * @param options The options parameters.
     */
    listByService(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        options?: ApiDiagnosticListByServiceOptionalParams
    ): PagedAsyncIterableIterator<DiagnosticContract>;
    /**
     * Gets the entity state (Etag) version of the Diagnostic for an API specified by its identifier.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API identifier. Must be unique in the current API Management service instance.
     * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
     *                     instance.
     * @param options The options parameters.
     */
    getEntityTag(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        diagnosticId: string,
        options?: ApiDiagnosticGetEntityTagOptionalParams
    ): Promise<ApiDiagnosticGetEntityTagResponse>;
    /**
     * Gets the details of the Diagnostic for an API specified by its identifier.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API identifier. Must be unique in the current API Management service instance.
     * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
     *                     instance.
     * @param options The options parameters.
     */
    get(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        diagnosticId: string,
        options?: ApiDiagnosticGetOptionalParams
    ): Promise<ApiDiagnosticGetResponse>;
    /**
     * Creates a new Diagnostic for an API or updates an existing one.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API identifier. Must be unique in the current API Management service instance.
     * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
     *                     instance.
     * @param parameters Create parameters.
     * @param options The options parameters.
     */
    createOrUpdate(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        diagnosticId: string,
        parameters: DiagnosticContract,
        options?: ApiDiagnosticCreateOrUpdateOptionalParams
    ): Promise<ApiDiagnosticCreateOrUpdateResponse>;
    /**
     * Updates the details of the Diagnostic for an API specified by its identifier.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API identifier. Must be unique in the current API Management service instance.
     * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
     *                     instance.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param parameters Diagnostic Update parameters.
     * @param options The options parameters.
     */
    update(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        diagnosticId: string,
        ifMatch: string,
        parameters: DiagnosticContract,
        options?: ApiDiagnosticUpdateOptionalParams
    ): Promise<ApiDiagnosticUpdateResponse>;
    /**
     * Deletes the specified Diagnostic from an API.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API identifier. Must be unique in the current API Management service instance.
     * @param diagnosticId Diagnostic identifier. Must be unique in the current API Management service
     *                     instance.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param options The options parameters.
     */
    delete(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        diagnosticId: string,
        ifMatch: string,
        options?: ApiDiagnosticDeleteOptionalParams
    ): Promise<void>;
}
