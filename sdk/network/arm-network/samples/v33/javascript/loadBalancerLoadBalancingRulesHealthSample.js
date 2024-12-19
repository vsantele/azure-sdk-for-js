/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get health details of a load balancing rule.
 *
 * @summary Get health details of a load balancing rule.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/LoadBalancerHealth.json
 */
async function queryLoadBalancingRuleHealth() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const groupName = "rg1";
  const loadBalancerName = "lb1";
  const loadBalancingRuleName = "rulelb";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancerLoadBalancingRules.beginHealthAndWait(
    groupName,
    loadBalancerName,
    loadBalancingRuleName,
  );
  console.log(result);
}

async function main() {
  queryLoadBalancingRuleHealth();
}

main().catch(console.error);
