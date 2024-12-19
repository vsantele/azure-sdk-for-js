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
  PortalConfigContract,
  ApiManagementClient
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update the developer portal configuration.
 *
 * @summary Update the developer portal configuration.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementUpdatePortalConfig.json
 */
async function apiManagementUpdatePortalConfig() {
  const subscriptionId =
    process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
  const serviceName = "apimService1";
  const portalConfigId = "default";
  const ifMatch = "*";
  const parameters: PortalConfigContract = {
    cors: { allowedOrigins: ["https://contoso.com"] },
    csp: {
      allowedSources: ["*.contoso.com"],
      mode: "reportOnly",
      reportUri: ["https://report.contoso.com"]
    },
    delegation: {
      delegateRegistration: false,
      delegateSubscription: false,
      delegationUrl: undefined,
      validationKey: undefined
    },
    enableBasicAuth: true,
    signin: { require: false },
    signup: {
      termsOfService: {
        requireConsent: false,
        text: "I agree to the service terms and conditions."
      }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new ApiManagementClient(credential, subscriptionId);
  const result = await client.portalConfig.update(
    resourceGroupName,
    serviceName,
    portalConfigId,
    ifMatch,
    parameters
  );
  console.log(result);
}

async function main() {
  apiManagementUpdatePortalConfig();
}

main().catch(console.error);
