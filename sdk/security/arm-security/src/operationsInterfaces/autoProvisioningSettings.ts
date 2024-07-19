/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AutoProvisioningSetting,
  AutoProvisioningSettingsListOptionalParams,
  AutoProvisioningSettingsGetOptionalParams,
  AutoProvisioningSettingsGetResponse,
  AutoProvisioningSettingsCreateOptionalParams,
  AutoProvisioningSettingsCreateResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AutoProvisioningSettings. */
export interface AutoProvisioningSettings {
  /**
   * Exposes the auto provisioning settings of the subscriptions
   * @param options The options parameters.
   */
  list(
    options?: AutoProvisioningSettingsListOptionalParams,
  ): PagedAsyncIterableIterator<AutoProvisioningSetting>;
  /**
   * Details of a specific setting
   * @param settingName Auto provisioning setting key
   * @param options The options parameters.
   */
  get(
    settingName: string,
    options?: AutoProvisioningSettingsGetOptionalParams,
  ): Promise<AutoProvisioningSettingsGetResponse>;
  /**
   * Details of a specific setting
   * @param settingName Auto provisioning setting key
   * @param setting Auto provisioning setting key
   * @param options The options parameters.
   */
  create(
    settingName: string,
    setting: AutoProvisioningSetting,
    options?: AutoProvisioningSettingsCreateOptionalParams,
  ): Promise<AutoProvisioningSettingsCreateResponse>;
}
