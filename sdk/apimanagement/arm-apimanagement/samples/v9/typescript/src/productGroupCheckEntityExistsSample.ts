/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Checks that Group entity specified by identifier is associated with the Product entity.
 *
 * @summary Checks that Group entity specified by identifier is associated with the Product entity.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementHeadProductGroup.json
 */
async function apiManagementHeadProductGroup() {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const productId = "5931a75ae4bbd512a88c680b";
  const groupId = "59306a29e4bbd510dc24e5f9";
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.productGroup.checkEntityExists(
    resourceGroupName,
    serviceName,
    productId,
    groupId
  );
  console.log(result);
}

async function main() {
  apiManagementHeadProductGroup();
}

main().catch(console.error);
