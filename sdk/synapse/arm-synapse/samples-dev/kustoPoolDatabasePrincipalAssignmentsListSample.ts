/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SynapseManagementClient } from "@azure/arm-synapse";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Lists all Kusto pool database principalAssignments.
 *
 * @summary Lists all Kusto pool database principalAssignments.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/preview/2021-06-01-preview/examples/KustoPoolDatabasePrincipalAssignmentsList.json
 */
async function kustoPoolDatabasePrincipalAssignmentsList() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const workspaceName = "synapseWorkspaceName";
  const kustoPoolName = "kustoclusterrptest4";
  const databaseName = "Kustodatabase8";
  const resourceGroupName = "kustorptest";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.kustoPoolDatabasePrincipalAssignments.list(
    workspaceName,
    kustoPoolName,
    databaseName,
    resourceGroupName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

kustoPoolDatabasePrincipalAssignmentsList().catch(console.error);
