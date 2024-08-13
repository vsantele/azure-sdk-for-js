/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { HealthcareApisManagementClient } = require("@azure/arm-healthcareapis");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Creates or updates a FHIR Service resource with the specified parameters.
 *
 * @summary Creates or updates a FHIR Service resource with the specified parameters.
 * x-ms-original-file: specification/healthcareapis/resource-manager/Microsoft.HealthcareApis/stable/2024-03-31/examples/fhirservices/FhirServices_Create.json
 */
async function createOrUpdateAFhirService() {
  const subscriptionId = process.env["HEALTHCAREAPIS_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HEALTHCAREAPIS_RESOURCE_GROUP"] || "testRG";
  const workspaceName = "workspace1";
  const fhirServiceName = "fhirservice1";
  const fhirservice = {
    acrConfiguration: { loginServers: ["test1.azurecr.io"] },
    authenticationConfiguration: {
      audience: "https://azurehealthcareapis.com",
      authority: "https://login.microsoftonline.com/abfde7b2-df0f-47e6-aabf-2462b07508dc",
      smartIdentityProviders: [
        {
          applications: [
            {
              allowedDataActions: ["Read"],
              audience: "22222222-2222-2222-2222-222222222222",
              clientId: "22222222-2222-2222-2222-222222222222",
            },
          ],
          authority: "https://login.b2clogin.com/11111111-1111-1111-1111-111111111111/v2.0",
        },
      ],
      smartProxyEnabled: true,
    },
    corsConfiguration: {
      allowCredentials: false,
      headers: ["*"],
      maxAge: 1440,
      methods: ["DELETE", "GET", "OPTIONS", "PATCH", "POST", "PUT"],
      origins: ["*"],
    },
    encryption: {
      customerManagedKeyEncryption: {
        keyEncryptionKeyUrl: "https://mykeyvault.vault.azure.net/keys/myEncryptionKey/myKeyVersion",
      },
    },
    exportConfiguration: { storageAccountName: "existingStorageAccount" },
    identity: {
      type: "UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/subid/resourcegroups/testRG/providers/MicrosoftManagedIdentity/userAssignedIdentities/testMi":
          {},
      },
    },
    implementationGuidesConfiguration: { usCoreMissingData: false },
    importConfiguration: {
      enabled: false,
      initialImportMode: false,
      integrationDataStore: "existingStorageAccount",
    },
    kind: "fhir-R4",
    location: "westus",
    tags: {
      additionalProp1: "string",
      additionalProp2: "string",
      additionalProp3: "string",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new HealthcareApisManagementClient(credential, subscriptionId);
  const result = await client.fhirServices.beginCreateOrUpdateAndWait(
    resourceGroupName,
    workspaceName,
    fhirServiceName,
    fhirservice,
  );
  console.log(result);
}

async function main() {
  createOrUpdateAFhirService();
}

main().catch(console.error);
