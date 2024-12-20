/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CognitiveServicesManagementClient } from "@azure/arm-cognitiveservices";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Deletes the specified private endpoint connection associated with the Cognitive Services account.
 *
 * @summary Deletes the specified private endpoint connection associated with the Cognitive Services account.
 * x-ms-original-file: specification/cognitiveservices/resource-manager/Microsoft.CognitiveServices/stable/2024-10-01/examples/DeletePrivateEndpointConnection.json
 */
async function deletePrivateEndpointConnection() {
  const subscriptionId =
    process.env["COGNITIVESERVICES_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COGNITIVESERVICES_RESOURCE_GROUP"] || "res6977";
  const accountName = "sto2527";
  const privateEndpointConnectionName = "{privateEndpointConnectionName}";
  const credential = new DefaultAzureCredential();
  const client = new CognitiveServicesManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.privateEndpointConnections.beginDeleteAndWait(
    resourceGroupName,
    accountName,
    privateEndpointConnectionName,
  );
  console.log(result);
}

async function main() {
  deletePrivateEndpointConnection();
}

main().catch(console.error);
