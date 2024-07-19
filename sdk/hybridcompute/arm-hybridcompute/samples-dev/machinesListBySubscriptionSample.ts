/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridComputeManagementClient } from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all the hybrid machines in the specified subscription. Use the nextLink property in the response to get the next page of hybrid machines.
 *
 * @summary Lists all the hybrid machines in the specified subscription. Use the nextLink property in the response to get the next page of hybrid machines.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2024-03-31-preview/examples/machine/Machines_ListBySubscription.json
 */
async function listMachinesByResourceGroup() {
  const subscriptionId =
    process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.machines.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listMachinesByResourceGroup();
}

main().catch(console.error);
