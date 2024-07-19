/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  PreValidateEnableBackupRequest,
  ProtectionIntentValidateOptionalParams,
  ProtectionIntentValidateResponse,
  ProtectionIntentGetOptionalParams,
  ProtectionIntentGetResponse,
  ProtectionIntentResource,
  ProtectionIntentCreateOrUpdateOptionalParams,
  ProtectionIntentCreateOrUpdateResponse,
  ProtectionIntentDeleteOptionalParams,
} from "../models";

/** Interface representing a ProtectionIntentOperations. */
export interface ProtectionIntentOperations {
  /**
   * It will validate followings
   * 1. Vault capacity
   * 2. VM is already protected
   * 3. Any VM related configuration passed in properties.
   * @param azureRegion Azure region to hit Api
   * @param parameters Enable backup validation request on Virtual Machine
   * @param options The options parameters.
   */
  validate(
    azureRegion: string,
    parameters: PreValidateEnableBackupRequest,
    options?: ProtectionIntentValidateOptionalParams,
  ): Promise<ProtectionIntentValidateResponse>;
  /**
   * Provides the details of the protection intent up item. This is an asynchronous operation. To know
   * the status of the operation,
   * call the GetItemOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the backed up item.
   * @param intentObjectName Backed up item name whose details are to be fetched.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    intentObjectName: string,
    options?: ProtectionIntentGetOptionalParams,
  ): Promise<ProtectionIntentGetResponse>;
  /**
   * Create Intent for Enabling backup of an item. This is a synchronous operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the backup item.
   * @param intentObjectName Intent object name.
   * @param parameters resource backed up item
   * @param options The options parameters.
   */
  createOrUpdate(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    intentObjectName: string,
    parameters: ProtectionIntentResource,
    options?: ProtectionIntentCreateOrUpdateOptionalParams,
  ): Promise<ProtectionIntentCreateOrUpdateResponse>;
  /**
   * Used to remove intent from an item
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param fabricName Fabric name associated with the intent.
   * @param intentObjectName Intent to be deleted.
   * @param options The options parameters.
   */
  delete(
    vaultName: string,
    resourceGroupName: string,
    fabricName: string,
    intentObjectName: string,
    options?: ProtectionIntentDeleteOptionalParams,
  ): Promise<void>;
}
