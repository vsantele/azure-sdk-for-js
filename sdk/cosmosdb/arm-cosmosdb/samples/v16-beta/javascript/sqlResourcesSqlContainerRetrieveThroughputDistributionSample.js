/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Retrieve throughput distribution for an Azure Cosmos DB SQL container
 *
 * @summary Retrieve throughput distribution for an Azure Cosmos DB SQL container
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-02-15-preview/examples/CosmosDBSqlContainerRetrieveThroughputDistribution.json
 */
async function cosmosDbSqlContainerRetrieveThroughputDistribution() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseName = "databaseName";
  const containerName = "containerName";
  const retrieveThroughputParameters = {
    resource: { physicalPartitionIds: [{ id: "0" }, { id: "1" }] },
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginSqlContainerRetrieveThroughputDistributionAndWait(
    resourceGroupName,
    accountName,
    databaseName,
    containerName,
    retrieveThroughputParameters,
  );
  console.log(result);
}

async function main() {
  cosmosDbSqlContainerRetrieveThroughputDistribution();
}

main().catch(console.error);
