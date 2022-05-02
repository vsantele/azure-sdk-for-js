/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityConnector, SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Updates a security connector
 *
 * @summary Updates a security connector
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2021-07-01-preview/examples/SecurityConnectors/PatchSecurityConnector_example.json
 */
async function updateASecurityConnector() {
  const subscriptionId = "a5caac9c-5c04-49af-b3d0-e204f40345d5";
  const resourceGroupName = "exampleResourceGroup";
  const securityConnectorName = "exampleSecurityConnectorName";
  const securityConnector: SecurityConnector = {
    cloudName: "AWS",
    etag: "etag value (must be supplied for update)",
    hierarchyIdentifier: "exampleHierarchyId",
    location: "Central US",
    offerings: [
      {
        nativeCloudConnection: {
          cloudRoleArn: "arn:aws:iam::00000000:role/ASCMonitor"
        },
        offeringType: "CspmMonitorAws"
      }
    ],
    tags: {}
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.securityConnectors.update(
    resourceGroupName,
    securityConnectorName,
    securityConnector
  );
  console.log(result);
}

updateASecurityConnector().catch(console.error);
