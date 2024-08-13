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
  PurgeParameters,
  FrontDoorManagementClient,
} from "@azure/arm-frontdoor";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Removes a content from Front Door.
 *
 * @summary Removes a content from Front Door.
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2021-06-01/examples/FrontdoorPurgeContent.json
 */
async function purgeContentFromFrontDoor() {
  const subscriptionId = process.env["FRONTDOOR_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["FRONTDOOR_RESOURCE_GROUP"] || "rg1";
  const frontDoorName = "frontDoor1";
  const contentFilePaths: PurgeParameters = {
    contentPaths: ["/pictures.aspx", "/pictures/*"],
  };
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.endpoints.beginPurgeContentAndWait(
    resourceGroupName,
    frontDoorName,
    contentFilePaths,
  );
  console.log(result);
}

async function main() {
  purgeContentFromFrontDoor();
}

main().catch(console.error);
