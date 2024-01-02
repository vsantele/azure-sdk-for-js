/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List database tables
 *
 * @summary List database tables
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/DatabaseTableListBySchema.json
 */
async function listDatabaseTables() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "myRG";
  const serverName = "serverName";
  const databaseName = "myDatabase";
  const schemaName = "dbo";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.databaseTables.listBySchema(
    resourceGroupName,
    serverName,
    databaseName,
    schemaName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listDatabaseTables();
}

main().catch(console.error);
