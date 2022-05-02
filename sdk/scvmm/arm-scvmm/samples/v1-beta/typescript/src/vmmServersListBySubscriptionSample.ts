/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Scvmm } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to List of VmmServers in a subscription.
 *
 * @summary List of VmmServers in a subscription.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/preview/2020-06-05-preview/examples/ListVMMServersBySubscription.json
 */
async function listVmmServersBySubscription() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const credential = new DefaultAzureCredential();
  const client = new Scvmm(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.vmmServers.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listVmmServersBySubscription().catch(console.error);
