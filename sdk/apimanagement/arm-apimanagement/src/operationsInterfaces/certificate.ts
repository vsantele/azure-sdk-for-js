/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
    CertificateContract,
    CertificateCreateOrUpdateOptionalParams,
    CertificateCreateOrUpdateParameters,
    CertificateCreateOrUpdateResponse,
    CertificateDeleteOptionalParams,
    CertificateGetEntityTagOptionalParams,
    CertificateGetEntityTagResponse,
    CertificateGetOptionalParams,
    CertificateGetResponse,
    CertificateListByServiceOptionalParams,
    CertificateRefreshSecretOptionalParams,
    CertificateRefreshSecretResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Certificate. */
export interface Certificate {
    /**
     * Lists a collection of all certificates in the specified service instance.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param options The options parameters.
     */
    listByService(
        resourceGroupName: string,
        serviceName: string,
        options?: CertificateListByServiceOptionalParams
    ): PagedAsyncIterableIterator<CertificateContract>;
    /**
     * Gets the entity state (Etag) version of the certificate specified by its identifier.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param certificateId Identifier of the certificate entity. Must be unique in the current API
     *                      Management service instance.
     * @param options The options parameters.
     */
    getEntityTag(
        resourceGroupName: string,
        serviceName: string,
        certificateId: string,
        options?: CertificateGetEntityTagOptionalParams
    ): Promise<CertificateGetEntityTagResponse>;
    /**
     * Gets the details of the certificate specified by its identifier.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param certificateId Identifier of the certificate entity. Must be unique in the current API
     *                      Management service instance.
     * @param options The options parameters.
     */
    get(
        resourceGroupName: string,
        serviceName: string,
        certificateId: string,
        options?: CertificateGetOptionalParams
    ): Promise<CertificateGetResponse>;
    /**
     * Creates or updates the certificate being used for authentication with the backend.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param certificateId Identifier of the certificate entity. Must be unique in the current API
     *                      Management service instance.
     * @param parameters Create or Update parameters.
     * @param options The options parameters.
     */
    createOrUpdate(
        resourceGroupName: string,
        serviceName: string,
        certificateId: string,
        parameters: CertificateCreateOrUpdateParameters,
        options?: CertificateCreateOrUpdateOptionalParams
    ): Promise<CertificateCreateOrUpdateResponse>;
    /**
     * Deletes specific certificate.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param certificateId Identifier of the certificate entity. Must be unique in the current API
     *                      Management service instance.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param options The options parameters.
     */
    delete(
        resourceGroupName: string,
        serviceName: string,
        certificateId: string,
        ifMatch: string,
        options?: CertificateDeleteOptionalParams
    ): Promise<void>;
    /**
     * From KeyVault, Refresh the certificate being used for authentication with the backend.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param certificateId Identifier of the certificate entity. Must be unique in the current API
     *                      Management service instance.
     * @param options The options parameters.
     */
    refreshSecret(
        resourceGroupName: string,
        serviceName: string,
        certificateId: string,
        options?: CertificateRefreshSecretOptionalParams
    ): Promise<CertificateRefreshSecretResponse>;
}
