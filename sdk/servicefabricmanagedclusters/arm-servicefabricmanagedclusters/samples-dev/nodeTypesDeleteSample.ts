/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ServiceFabricManagedClustersManagementClient } from "@azure/arm-servicefabricmanagedclusters";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Delete a Service Fabric node type of a given managed cluster.
 *
 * @summary Delete a Service Fabric node type of a given managed cluster.
 * x-ms-original-file: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/preview/2024-09-01-preview/examples/NodeTypeDeleteOperation_example.json
 */
async function deleteANodeType() {
  const subscriptionId =
    process.env["SERVICEFABRICMANAGEDCLUSTERS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SERVICEFABRICMANAGEDCLUSTERS_RESOURCE_GROUP"] || "resRg";
  const clusterName = "myCluster";
  const nodeTypeName = "BE";
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricManagedClustersManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.nodeTypes.beginDeleteAndWait(
    resourceGroupName,
    clusterName,
    nodeTypeName,
  );
  console.log(result);
}

async function main() {
  deleteANodeType();
}

main().catch(console.error);
