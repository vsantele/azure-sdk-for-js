/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  GeoBackupPolicy,
  GeoBackupPoliciesListByDatabaseOptionalParams,
  GeoBackupPolicyName,
  GeoBackupPoliciesCreateOrUpdateOptionalParams,
  GeoBackupPoliciesCreateOrUpdateResponse,
  GeoBackupPoliciesGetOptionalParams,
  GeoBackupPoliciesGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GeoBackupPolicies. */
export interface GeoBackupPolicies {
  /**
   * Returns a list of geo backup policies.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: GeoBackupPoliciesListByDatabaseOptionalParams,
  ): PagedAsyncIterableIterator<GeoBackupPolicy>;
  /**
   * Updates a database geo backup policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param geoBackupPolicyName The name of the geo backup policy.
   * @param parameters The required parameters for creating or updating the geo backup policy.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    geoBackupPolicyName: GeoBackupPolicyName,
    parameters: GeoBackupPolicy,
    options?: GeoBackupPoliciesCreateOrUpdateOptionalParams,
  ): Promise<GeoBackupPoliciesCreateOrUpdateResponse>;
  /**
   * Gets a geo backup policy.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param geoBackupPolicyName The name of the geo backup policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    geoBackupPolicyName: GeoBackupPolicyName,
    options?: GeoBackupPoliciesGetOptionalParams,
  ): Promise<GeoBackupPoliciesGetResponse>;
}
