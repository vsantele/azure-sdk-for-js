/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
    ApiReleaseContract,
    ApiReleaseCreateOrUpdateOptionalParams,
    ApiReleaseCreateOrUpdateResponse,
    ApiReleaseDeleteOptionalParams,
    ApiReleaseGetEntityTagOptionalParams,
    ApiReleaseGetEntityTagResponse,
    ApiReleaseGetOptionalParams,
    ApiReleaseGetResponse,
    ApiReleaseListByServiceOptionalParams,
    ApiReleaseUpdateOptionalParams,
    ApiReleaseUpdateResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiRelease. */
export interface ApiRelease {
    /**
     * Lists all releases of an API. An API release is created when making an API Revision current.
     * Releases are also used to rollback to previous revisions. Results will be paged and can be
     * constrained by the $top and $skip parameters.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API identifier. Must be unique in the current API Management service instance.
     * @param options The options parameters.
     */
    listByService(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        options?: ApiReleaseListByServiceOptionalParams
    ): PagedAsyncIterableIterator<ApiReleaseContract>;
    /**
     * Returns the etag of an API release.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API identifier. Must be unique in the current API Management service instance.
     * @param releaseId Release identifier within an API. Must be unique in the current API Management
     *                  service instance.
     * @param options The options parameters.
     */
    getEntityTag(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        releaseId: string,
        options?: ApiReleaseGetEntityTagOptionalParams
    ): Promise<ApiReleaseGetEntityTagResponse>;
    /**
     * Returns the details of an API release.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API identifier. Must be unique in the current API Management service instance.
     * @param releaseId Release identifier within an API. Must be unique in the current API Management
     *                  service instance.
     * @param options The options parameters.
     */
    get(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        releaseId: string,
        options?: ApiReleaseGetOptionalParams
    ): Promise<ApiReleaseGetResponse>;
    /**
     * Creates a new Release for the API.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API identifier. Must be unique in the current API Management service instance.
     * @param releaseId Release identifier within an API. Must be unique in the current API Management
     *                  service instance.
     * @param parameters Create parameters.
     * @param options The options parameters.
     */
    createOrUpdate(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        releaseId: string,
        parameters: ApiReleaseContract,
        options?: ApiReleaseCreateOrUpdateOptionalParams
    ): Promise<ApiReleaseCreateOrUpdateResponse>;
    /**
     * Updates the details of the release of the API specified by its identifier.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API identifier. Must be unique in the current API Management service instance.
     * @param releaseId Release identifier within an API. Must be unique in the current API Management
     *                  service instance.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param parameters API Release Update parameters.
     * @param options The options parameters.
     */
    update(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        releaseId: string,
        ifMatch: string,
        parameters: ApiReleaseContract,
        options?: ApiReleaseUpdateOptionalParams
    ): Promise<ApiReleaseUpdateResponse>;
    /**
     * Deletes the specified release in the API.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param apiId API identifier. Must be unique in the current API Management service instance.
     * @param releaseId Release identifier within an API. Must be unique in the current API Management
     *                  service instance.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param options The options parameters.
     */
    delete(
        resourceGroupName: string,
        serviceName: string,
        apiId: string,
        releaseId: string,
        ifMatch: string,
        options?: ApiReleaseDeleteOptionalParams
    ): Promise<void>;
}
