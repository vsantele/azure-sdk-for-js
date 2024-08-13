/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NotificationHubsManagementClient } from "@azure/arm-notificationhubs";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Even though this namespace requires subscription id, resource group and namespace name, it returns a constant payload (for a given namespacE) every time it's called.
That's why we don't send it to the sibling RP, but process it directly in the scale unit that received the request.
 *
 * @summary Even though this namespace requires subscription id, resource group and namespace name, it returns a constant payload (for a given namespacE) every time it's called.
That's why we don't send it to the sibling RP, but process it directly in the scale unit that received the request.
 * x-ms-original-file: specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/preview/2023-10-01-preview/examples/Namespaces/PrivateLinkResourceGet.json
 */
async function privateEndpointConnectionsGetGroupId() {
  const subscriptionId =
    process.env["NOTIFICATIONHUBS_SUBSCRIPTION_ID"] ||
    "29cfa613-cbbc-4512-b1d6-1b3a92c7fa40";
  const resourceGroupName =
    process.env["NOTIFICATIONHUBS_RESOURCE_GROUP"] || "5ktrial";
  const namespaceName = "nh-sdk-ns";
  const subResourceName = "namespace";
  const credential = new DefaultAzureCredential();
  const client = new NotificationHubsManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.privateEndpointConnections.getGroupId(
    resourceGroupName,
    namespaceName,
    subResourceName,
  );
  console.log(result);
}

async function main() {
  privateEndpointConnectionsGetGroupId();
}

main().catch(console.error);
