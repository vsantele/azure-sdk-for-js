// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { MongoClusterManagementClient } from "@azure/arm-mongocluster";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes a mongo cluster firewall rule.
 *
 * @summary deletes a mongo cluster firewall rule.
 * x-ms-original-file: 2024-07-01/MongoClusters_FirewallRuleDelete.json
 */
async function deletesAFirewallRuleOnAMongoClusterResource(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const client = new MongoClusterManagementClient(credential, subscriptionId);
  const result = await client.firewallRules.delete(
    "TestGroup",
    "myMongoCluster",
    "rule1",
  );
  console.log(result);
}

async function main() {
  deletesAFirewallRuleOnAMongoClusterResource();
}

main().catch(console.error);
