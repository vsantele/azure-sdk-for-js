/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { RoutingIntent, NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a RoutingIntent resource if it doesn't exist else updates the existing RoutingIntent.
 *
 * @summary Creates a RoutingIntent resource if it doesn't exist else updates the existing RoutingIntent.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/RoutingIntentPut.json
 */
async function routeTablePut() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const virtualHubName = "virtualHub1";
  const routingIntentName = "Intent1";
  const routingIntentParameters: RoutingIntent = {
    routingPolicies: [
      {
        name: "InternetTraffic",
        destinations: ["Internet"],
        nextHop:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azfw1",
      },
      {
        name: "PrivateTrafficPolicy",
        destinations: ["PrivateTraffic"],
        nextHop:
          "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azfw1",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.routingIntentOperations.beginCreateOrUpdateAndWait(
      resourceGroupName,
      virtualHubName,
      routingIntentName,
      routingIntentParameters,
    );
  console.log(result);
}

async function main() {
  routeTablePut();
}

main().catch(console.error);
