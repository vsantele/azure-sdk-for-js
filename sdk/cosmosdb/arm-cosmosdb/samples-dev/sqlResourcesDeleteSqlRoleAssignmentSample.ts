/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes an existing Azure Cosmos DB SQL Role Assignment.
 *
 * @summary Deletes an existing Azure Cosmos DB SQL Role Assignment.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2024-05-15/examples/CosmosDBSqlRoleAssignmentDelete.json
 */
async function cosmosDbSqlRoleAssignmentDelete() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const roleAssignmentId = "myRoleAssignmentId";
  const resourceGroupName =
    process.env["COSMOSDB_RESOURCE_GROUP"] || "myResourceGroupName";
  const accountName = "myAccountName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.beginDeleteSqlRoleAssignmentAndWait(
    roleAssignmentId,
    resourceGroupName,
    accountName,
  );
  console.log(result);
}

async function main() {
  cosmosDbSqlRoleAssignmentDelete();
}

main().catch(console.error);
