/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ContainerAppsAPIClient } = require("@azure/arm-appcontainers");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Delete a Managed Environment if it does not have any container apps.
 *
 * @summary Delete a Managed Environment if it does not have any container apps.
 * x-ms-original-file: specification/app/resource-manager/Microsoft.App/stable/2024-03-01/examples/ManagedEnvironments_Delete.json
 */
async function deleteEnvironmentByName() {
  const subscriptionId =
    process.env["APPCONTAINERS_SUBSCRIPTION_ID"] || "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = process.env["APPCONTAINERS_RESOURCE_GROUP"] || "examplerg";
  const environmentName = "examplekenv";
  const credential = new DefaultAzureCredential();
  const client = new ContainerAppsAPIClient(credential, subscriptionId);
  const result = await client.managedEnvironments.beginDeleteAndWait(
    resourceGroupName,
    environmentName,
  );
  console.log(result);
}

async function main() {
  deleteEnvironmentByName();
}

main().catch(console.error);
