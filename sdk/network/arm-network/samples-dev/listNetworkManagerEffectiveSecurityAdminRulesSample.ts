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
  QueryRequestOptions,
  NetworkManagementClient,
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List all effective security admin rules applied on a virtual network.
 *
 * @summary List all effective security admin rules applied on a virtual network.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/NetworkManagerEffectiveSecurityAdminRulesList.json
 */
async function listEffectiveSecurityAdminRules() {
  const subscriptionId =
    process.env["NETWORK_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["NETWORK_RESOURCE_GROUP"] || "myResourceGroup";
  const virtualNetworkName = "testVirtualNetwork";
  const parameters: QueryRequestOptions = { skipToken: "FakeSkipTokenCode" };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.listNetworkManagerEffectiveSecurityAdminRules(
    resourceGroupName,
    virtualNetworkName,
    parameters,
  );
  console.log(result);
}

async function main() {
  listEffectiveSecurityAdminRules();
}

main().catch(console.error);
