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
  ClaimDevicesRequest,
  AzureSphereManagementClient,
} from "@azure/arm-sphere";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Bulk claims the devices. Use '.unassigned' or '.default' for the device group and product names when bulk claiming devices to a catalog only.
 *
 * @summary Bulk claims the devices. Use '.unassigned' or '.default' for the device group and product names when bulk claiming devices to a catalog only.
 * x-ms-original-file: specification/sphere/resource-manager/Microsoft.AzureSphere/stable/2024-04-01/examples/PostClaimDevices.json
 */
async function deviceGroupsClaimDevices() {
  const subscriptionId =
    process.env["SPHERE_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SPHERE_RESOURCE_GROUP"] || "MyResourceGroup1";
  const catalogName = "MyCatalog1";
  const productName = "MyProduct1";
  const deviceGroupName = "MyDeviceGroup1";
  const claimDevicesRequest: ClaimDevicesRequest = {
    deviceIdentifiers: [
      "00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureSphereManagementClient(credential, subscriptionId);
  const result = await client.deviceGroups.beginClaimDevicesAndWait(
    resourceGroupName,
    catalogName,
    productName,
    deviceGroupName,
    claimDevicesRequest,
  );
  console.log(result);
}

async function main() {
  deviceGroupsClaimDevices();
}

main().catch(console.error);
