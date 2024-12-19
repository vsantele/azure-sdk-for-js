/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Retrieves the details of a HubVirtualNetworkConnection.
 *
 * @summary Retrieves the details of a HubVirtualNetworkConnection.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/HubVirtualNetworkConnectionGet.json
 */
async function hubVirtualNetworkConnectionGet() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualHubName = "virtualHub1";
  const connectionName = "connection1";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.hubVirtualNetworkConnections.get(
    resourceGroupName,
    virtualHubName,
    connectionName,
  );
  console.log(result);
}

async function main() {
  hubVirtualNetworkConnectionGet();
}

main().catch(console.error);
