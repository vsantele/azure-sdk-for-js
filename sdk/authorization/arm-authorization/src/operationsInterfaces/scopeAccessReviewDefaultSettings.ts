/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  ScopeAccessReviewDefaultSettingsGetOptionalParams,
  ScopeAccessReviewDefaultSettingsGetResponse,
  AccessReviewScheduleSettings,
  ScopeAccessReviewDefaultSettingsPutOptionalParams,
  ScopeAccessReviewDefaultSettingsPutResponse
} from "../models";

/** Interface representing a ScopeAccessReviewDefaultSettings. */
export interface ScopeAccessReviewDefaultSettings {
  /**
   * Get access review default settings for the subscription
   * @param scope The scope of the resource.
   * @param options The options parameters.
   */
  get(
    scope: string,
    options?: ScopeAccessReviewDefaultSettingsGetOptionalParams
  ): Promise<ScopeAccessReviewDefaultSettingsGetResponse>;
  /**
   * Get access review default settings for the subscription
   * @param scope The scope of the resource.
   * @param properties Access review schedule settings.
   * @param options The options parameters.
   */
  put(
    scope: string,
    properties: AccessReviewScheduleSettings,
    options?: ScopeAccessReviewDefaultSettingsPutOptionalParams
  ): Promise<ScopeAccessReviewDefaultSettingsPutResponse>;
}
