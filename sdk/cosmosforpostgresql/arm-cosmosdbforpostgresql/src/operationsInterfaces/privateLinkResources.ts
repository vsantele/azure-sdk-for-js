/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  PrivateLinkResource,
  PrivateLinkResourcesListByClusterOptionalParams,
  PrivateLinkResourcesGetOptionalParams,
  PrivateLinkResourcesGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateLinkResources. */
export interface PrivateLinkResources {
  /**
   * Gets the private link resources for cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: PrivateLinkResourcesListByClusterOptionalParams,
  ): PagedAsyncIterableIterator<PrivateLinkResource>;
  /**
   * Gets a private link resource for cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param privateLinkResourceName The name of the private link resource.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    privateLinkResourceName: string,
    options?: PrivateLinkResourcesGetOptionalParams,
  ): Promise<PrivateLinkResourcesGetResponse>;
}
