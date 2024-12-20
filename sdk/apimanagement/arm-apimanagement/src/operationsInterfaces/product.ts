/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
    ProductContract,
    ProductCreateOrUpdateOptionalParams,
    ProductCreateOrUpdateResponse,
    ProductDeleteOptionalParams,
    ProductGetEntityTagOptionalParams,
    ProductGetEntityTagResponse,
    ProductGetOptionalParams,
    ProductGetResponse,
    ProductListByServiceOptionalParams,
    ProductListByTagsOptionalParams,
    ProductUpdateOptionalParams,
    ProductUpdateParameters,
    ProductUpdateResponse,
    TagResourceContract
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Product. */
export interface Product {
    /**
     * Lists a collection of products in the specified service instance.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param options The options parameters.
     */
    listByService(
        resourceGroupName: string,
        serviceName: string,
        options?: ProductListByServiceOptionalParams
    ): PagedAsyncIterableIterator<ProductContract>;
    /**
     * Lists a collection of products associated with tags.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param options The options parameters.
     */
    listByTags(
        resourceGroupName: string,
        serviceName: string,
        options?: ProductListByTagsOptionalParams
    ): PagedAsyncIterableIterator<TagResourceContract>;
    /**
     * Gets the entity state (Etag) version of the product specified by its identifier.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param options The options parameters.
     */
    getEntityTag(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        options?: ProductGetEntityTagOptionalParams
    ): Promise<ProductGetEntityTagResponse>;
    /**
     * Gets the details of the product specified by its identifier.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param options The options parameters.
     */
    get(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        options?: ProductGetOptionalParams
    ): Promise<ProductGetResponse>;
    /**
     * Creates or Updates a product.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param parameters Create or update parameters.
     * @param options The options parameters.
     */
    createOrUpdate(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        parameters: ProductContract,
        options?: ProductCreateOrUpdateOptionalParams
    ): Promise<ProductCreateOrUpdateResponse>;
    /**
     * Update existing product details.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param parameters Update parameters.
     * @param options The options parameters.
     */
    update(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        ifMatch: string,
        parameters: ProductUpdateParameters,
        options?: ProductUpdateOptionalParams
    ): Promise<ProductUpdateResponse>;
    /**
     * Delete product.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param productId Product identifier. Must be unique in the current API Management service instance.
     * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
     *                response of the GET request or it should be * for unconditional update.
     * @param options The options parameters.
     */
    delete(
        resourceGroupName: string,
        serviceName: string,
        productId: string,
        ifMatch: string,
        options?: ProductDeleteOptionalParams
    ): Promise<void>;
}
