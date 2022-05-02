/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { PeeringManagementClient } from "@azure/arm-peering";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Run looking glass functionality
 *
 * @summary Run looking glass functionality
 * x-ms-original-file: specification/peering/resource-manager/Microsoft.Peering/stable/2021-06-01/examples/LookingGlassInvokeCommand.json
 */
async function callLookingGlassToExecuteACommand() {
  const subscriptionId = "subId";
  const command = "Traceroute";
  const sourceType = "AzureRegion";
  const sourceLocation = "West US";
  const destinationIP = "0.0.0.0";
  const credential = new DefaultAzureCredential();
  const client = new PeeringManagementClient(credential, subscriptionId);
  const result = await client.lookingGlass.invoke(
    command,
    sourceType,
    sourceLocation,
    destinationIP
  );
  console.log(result);
}

callLookingGlassToExecuteACommand().catch(console.error);
