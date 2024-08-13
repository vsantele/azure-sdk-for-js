/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ServerThreatProtectionSettingsModel,
  ServerThreatProtectionSettingsListByServerOptionalParams,
  ThreatProtectionName,
  ServerThreatProtectionSettingsGetOptionalParams,
  ServerThreatProtectionSettingsGetResponse,
  ServerThreatProtectionSettingsCreateOrUpdateOptionalParams,
  ServerThreatProtectionSettingsCreateOrUpdateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ServerThreatProtectionSettings. */
export interface ServerThreatProtectionSettings {
  /**
   * Get a list of server's Threat Protection state.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: ServerThreatProtectionSettingsListByServerOptionalParams,
  ): PagedAsyncIterableIterator<ServerThreatProtectionSettingsModel>;
  /**
   * Get a server's Advanced Threat Protection settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param threatProtectionName The name of the Threat Protection state.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    threatProtectionName: ThreatProtectionName,
    options?: ServerThreatProtectionSettingsGetOptionalParams,
  ): Promise<ServerThreatProtectionSettingsGetResponse>;
  /**
   * Creates or updates a server's Advanced Threat Protection settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param threatProtectionName The name of the Threat Protection state.
   * @param parameters The Advanced Threat Protection state for the flexible server.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    serverName: string,
    threatProtectionName: ThreatProtectionName,
    parameters: ServerThreatProtectionSettingsModel,
    options?: ServerThreatProtectionSettingsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServerThreatProtectionSettingsCreateOrUpdateResponse>,
      ServerThreatProtectionSettingsCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a server's Advanced Threat Protection settings.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param threatProtectionName The name of the Threat Protection state.
   * @param parameters The Advanced Threat Protection state for the flexible server.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    serverName: string,
    threatProtectionName: ThreatProtectionName,
    parameters: ServerThreatProtectionSettingsModel,
    options?: ServerThreatProtectionSettingsCreateOrUpdateOptionalParams,
  ): Promise<ServerThreatProtectionSettingsCreateOrUpdateResponse>;
}
