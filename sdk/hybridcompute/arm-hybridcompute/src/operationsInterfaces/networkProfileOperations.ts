/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  NetworkProfileGetOptionalParams,
  NetworkProfileGetResponse,
} from "../models";

/** Interface representing a NetworkProfileOperations. */
export interface NetworkProfileOperations {
  /**
   * The operation to get network information of hybrid machine
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    machineName: string,
    options?: NetworkProfileGetOptionalParams,
  ): Promise<NetworkProfileGetResponse>;
}
