/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
    ApiManagementServiceSkusListAvailableServiceSkusOptionalParams,
    ResourceSkuResult
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ApiManagementServiceSkus. */
export interface ApiManagementServiceSkus {
    /**
     * Gets all available SKU for a given API Management service
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param options The options parameters.
     */
    listAvailableServiceSkus(
        resourceGroupName: string,
        serviceName: string,
        options?: ApiManagementServiceSkusListAvailableServiceSkusOptionalParams
    ): PagedAsyncIterableIterator<ResourceSkuResult>;
}
