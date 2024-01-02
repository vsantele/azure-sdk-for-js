/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetAppManagementClient } from "@azure/arm-netapp";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete quota rule
 *
 * @summary Delete quota rule
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/preview/2023-05-01-preview/examples/VolumeQuotaRules_Delete.json
 */
async function volumeQuotaRulesDelete() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] ||
    "5275316f-a498-48d6-b324-2cbfdc4311b9";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account-9957";
  const poolName = "pool-5210";
  const volumeName = "volume-6387";
  const volumeQuotaRuleName = "rule-0004";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const result = await client.volumeQuotaRules.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    poolName,
    volumeName,
    volumeQuotaRuleName
  );
  console.log(result);
}

async function main() {
  volumeQuotaRulesDelete();
}

main().catch(console.error);
