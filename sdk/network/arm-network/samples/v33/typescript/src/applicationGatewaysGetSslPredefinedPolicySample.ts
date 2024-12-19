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
 * This sample demonstrates how to Gets Ssl predefined policy with the specified policy name.
 *
 * @summary Gets Ssl predefined policy with the specified policy name.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/ApplicationGatewayAvailableSslOptionsPredefinedPolicyGet.json
 */
async function getAvailableSslPredefinedPolicyByName() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const predefinedPolicyName = "AppGwSslPolicy20150501";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.applicationGateways.getSslPredefinedPolicy(
      predefinedPolicyName,
    );
  console.log(result);
}

async function main() {
  getAvailableSslPredefinedPolicyByName();
}

main().catch(console.error);
