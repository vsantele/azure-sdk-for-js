/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Get a Big Data pool.
 *
 * @summary Get a Big Data pool.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/GetBigDataPool.json
 */
async function getABigDataPool() {
  const subscriptionId = "01234567-89ab-4def-0123-456789abcdef";
  const resourceGroupName = "ExampleResourceGroup";
  const workspaceName = "ExampleWorkspace";
  const bigDataPoolName = "ExamplePool";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.bigDataPools.get(resourceGroupName, workspaceName, bigDataPoolName);
  console.log(result);
}

getABigDataPool().catch(console.error);
