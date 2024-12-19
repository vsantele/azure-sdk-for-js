/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  NamedValueCreateContract,
  ApiManagementClient
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or updates named value.
 *
 * @summary Creates or updates named value.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateNamedValue.json
 */
async function apiManagementCreateNamedValue() {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const namedValueId = "testprop2";
  const parameters: NamedValueCreateContract = {
    displayName: "prop3name",
    secret: false,
    tags: ["foo", "bar"],
    value: "propValue"
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.namedValue.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    namedValueId,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates named value.
 *
 * @summary Creates or updates named value.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateNamedValueWithKeyVault.json
 */
async function apiManagementCreateNamedValueWithKeyVault() {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const namedValueId = "testprop6";
  const parameters: NamedValueCreateContract = {
    displayName: "prop6namekv",
    keyVault: {
      identityClientId: "ceaa6b06-c00f-43ef-99ac-f53d1fe876a0",
      secretIdentifier: "https://contoso.vault.azure.net/secrets/aadSecret"
    },
    secret: true,
    tags: ["foo", "bar"]
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.namedValue.beginCreateOrUpdateAndWait(
    resourceGroupName,
    serviceName,
    namedValueId,
    parameters
  );
  console.log(result);
}

async function main() {
  apiManagementCreateNamedValue();
  apiManagementCreateNamedValueWithKeyVault();
}

main().catch(console.error);
