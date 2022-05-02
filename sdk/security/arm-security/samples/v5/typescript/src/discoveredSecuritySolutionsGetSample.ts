/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a specific discovered Security Solution.
 *
 * @summary Gets a specific discovered Security Solution.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/stable/2020-01-01/examples/DiscoveredSecuritySolutions/GetDiscoveredSecuritySolutionResourceGroupLocation_example.json
 */
async function getDiscoveredSecuritySolutionFromASecurityDataLocation() {
  const subscriptionId = "20ff7fc3-e762-44dd-bd96-b71116dcdc23";
  const resourceGroupName = "myRg2";
  const ascLocation = "centralus";
  const discoveredSecuritySolutionName = "paloalto7";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.discoveredSecuritySolutions.get(
    resourceGroupName,
    ascLocation,
    discoveredSecuritySolutionName
  );
  console.log(result);
}

getDiscoveredSecuritySolutionFromASecurityDataLocation().catch(console.error);
