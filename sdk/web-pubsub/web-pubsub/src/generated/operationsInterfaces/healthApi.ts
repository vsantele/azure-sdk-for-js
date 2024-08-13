/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { HealthApiGetServiceStatusOptionalParams } from "../models";

/** Interface representing a HealthApi. */
export interface HealthApi {
  /**
   * Get service health status.
   * @param options The options parameters.
   */
  getServiceStatus(
    options?: HealthApiGetServiceStatusOptionalParams,
  ): Promise<void>;
}
