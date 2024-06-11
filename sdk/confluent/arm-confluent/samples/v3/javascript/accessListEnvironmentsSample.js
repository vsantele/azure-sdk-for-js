/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ConfluentManagementClient } = require("@azure/arm-confluent");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Environment list of an organization
 *
 * @summary Environment list of an organization
 * x-ms-original-file: specification/confluent/resource-manager/Microsoft.Confluent/stable/2024-02-13/examples/Access_EnvironmentList.json
 */
async function accessEnvironmentList() {
  const subscriptionId =
    process.env["CONFLUENT_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["CONFLUENT_RESOURCE_GROUP"] || "myResourceGroup";
  const organizationName = "myOrganization";
  const body = {
    searchFilters: { pageSize: "10", pageToken: "asc4fts4ft" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ConfluentManagementClient(credential, subscriptionId);
  const result = await client.access.listEnvironments(resourceGroupName, organizationName, body);
  console.log(result);
}

async function main() {
  accessEnvironmentList();
}

main().catch(console.error);
