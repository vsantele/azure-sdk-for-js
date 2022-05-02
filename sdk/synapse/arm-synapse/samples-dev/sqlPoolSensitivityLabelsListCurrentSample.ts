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
 * This sample demonstrates how to Gets SQL pool sensitivity labels.
 *
 * @summary Gets SQL pool sensitivity labels.
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/ListSqlPoolsSensitivityLabelsWithSourceCurrent.json
 */
async function getsTheCurrentSensitivityLabelsOfAGivenSqlAnalyticsPool() {
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = "myRG";
  const workspaceName = "myServer";
  const sqlPoolName = "myDatabase";
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.sqlPoolSensitivityLabels.listCurrent(
    resourceGroupName,
    workspaceName,
    sqlPoolName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

getsTheCurrentSensitivityLabelsOfAGivenSqlAnalyticsPool().catch(console.error);
