/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  AssetUpdate,
  DeviceRegistryManagementClient,
} from "@azure/arm-deviceregistry";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update a Asset
 *
 * @summary Update a Asset
 * x-ms-original-file: specification/deviceregistry/resource-manager/Microsoft.DeviceRegistry/preview/2023-11-01-preview/examples/Update_Asset.json
 */
async function patchAnAsset() {
  const subscriptionId =
    process.env["DEVICEREGISTRY_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["DEVICEREGISTRY_RESOURCE_GROUP"] || "myResourceGroup";
  const assetName = "my-asset";
  const properties: AssetUpdate = {
    properties: { displayName: "NewAssetDisplayName", enabled: false },
  };
  const credential = new DefaultAzureCredential();
  const client = new DeviceRegistryManagementClient(credential, subscriptionId);
  const result = await client.assets.beginUpdateAndWait(
    resourceGroupName,
    assetName,
    properties,
  );
  console.log(result);
}

async function main() {
  patchAnAsset();
}

main().catch(console.error);
