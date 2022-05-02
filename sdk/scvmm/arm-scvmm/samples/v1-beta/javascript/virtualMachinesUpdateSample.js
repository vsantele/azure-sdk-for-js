/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { Scvmm } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Updates the VirtualMachines resource.
 *
 * @summary Updates the VirtualMachines resource.
 * x-ms-original-file: specification/scvmm/resource-manager/Microsoft.ScVmm/preview/2020-06-05-preview/examples/UpdateVirtualMachine.json
 */
async function updateVirtualMachine() {
  const subscriptionId = "fd3c3665-1729-4b7b-9a38-238e83b0f98b";
  const resourceGroupName = "testrg";
  const virtualMachineName = "DemoVM";
  const body = {
    properties: {
      hardwareProfile: { cpuCount: 4, memoryMB: 4096 },
      networkProfile: {
        networkInterfaces: [
          {
            name: "test",
            ipv4AddressType: "Dynamic",
            ipv6AddressType: "Dynamic",
            macAddressType: "Static",
          },
        ],
      },
      storageProfile: { disks: [{ name: "test", diskSizeGB: 10 }] },
    },
    tags: { tag1: "value1", tag2: "value2" },
  };
  const credential = new DefaultAzureCredential();
  const client = new Scvmm(credential, subscriptionId);
  const result = await client.virtualMachines.beginUpdateAndWait(
    resourceGroupName,
    virtualMachineName,
    body
  );
  console.log(result);
}

updateVirtualMachine().catch(console.error);
