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
  LinkNotificationHubParameters,
  CommunicationServicesLinkNotificationHubOptionalParams,
  CommunicationServiceManagementClient,
} from "@azure/arm-communication";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Links an Azure Notification Hub to this communication service.
 *
 * @summary Links an Azure Notification Hub to this communication service.
 * x-ms-original-file: specification/communication/resource-manager/Microsoft.Communication/stable/2023-04-01/examples/communicationServices/linkNotificationHub.json
 */
async function linkNotificationHub() {
  const subscriptionId =
    process.env["COMMUNICATION_SUBSCRIPTION_ID"] ||
    "11112222-3333-4444-5555-666677778888";
  const resourceGroupName =
    process.env["COMMUNICATION_RESOURCE_GROUP"] || "MyResourceGroup";
  const communicationServiceName = "MyCommunicationResource";
  const linkNotificationHubParameters: LinkNotificationHubParameters = {
    connectionString:
      "Endpoint=sb://MyNamespace.servicebus.windows.net/;SharedAccessKey=abcd1234",
    resourceId:
      "/subscriptions/11112222-3333-4444-5555-666677778888/resourceGroups/MyOtherResourceGroup/providers/Microsoft.NotificationHubs/namespaces/MyNamespace/notificationHubs/MyHub",
  };
  const options: CommunicationServicesLinkNotificationHubOptionalParams = {
    linkNotificationHubParameters,
  };
  const credential = new DefaultAzureCredential();
  const client = new CommunicationServiceManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.communicationServices.linkNotificationHub(
    resourceGroupName,
    communicationServiceName,
    options,
  );
  console.log(result);
}

async function main() {
  linkNotificationHub();
}

main().catch(console.error);
