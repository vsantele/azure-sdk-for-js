/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Portal } from "@azure/arm-portal";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets the tenant configuration.
 *
 * @summary Gets the tenant configuration.
 * x-ms-original-file: specification/portal/resource-manager/Microsoft.Portal/preview/2020-09-01-preview/examples/TenantConfiguration/GetTenantConfiguration.json
 */
async function getTenantConfiguration() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const configurationName = "default";
  const credential = new DefaultAzureCredential();
  const client = new Portal(credential, subscriptionId);
  const result = await client.tenantConfigurations.get(configurationName);
  console.log(result);
}

getTenantConfiguration().catch(console.error);
