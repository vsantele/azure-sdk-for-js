/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { PagedAsyncIterableIterator } from "@azure/core-paging";
import type { ProviderStatus, ProvidersGetStatusOptionalParams } from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Providers. */
export interface Providers {
  /**
   * Get provider status.
   * @param options The options parameters.
   */
  listStatus(
    options?: ProvidersGetStatusOptionalParams,
  ): PagedAsyncIterableIterator<ProviderStatus>;
}
