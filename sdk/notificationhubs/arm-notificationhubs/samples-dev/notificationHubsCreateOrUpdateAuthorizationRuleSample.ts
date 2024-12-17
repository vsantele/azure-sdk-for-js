/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import type { SharedAccessAuthorizationRuleResource } from "@azure/arm-notificationhubs";
import { NotificationHubsManagementClient } from "@azure/arm-notificationhubs";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates/Updates an authorization rule for a NotificationHub
 *
 * @summary Creates/Updates an authorization rule for a NotificationHub
 * x-ms-original-file: specification/notificationhubs/resource-manager/Microsoft.NotificationHubs/preview/2023-10-01-preview/examples/NotificationHubs/AuthorizationRuleCreateOrUpdate.json
 */
async function notificationHubsCreateOrUpdateAuthorizationRule(): Promise<void> {
  const subscriptionId =
    process.env["NOTIFICATIONHUBS_SUBSCRIPTION_ID"] || "29cfa613-cbbc-4512-b1d6-1b3a92c7fa40";
  const resourceGroupName = process.env["NOTIFICATIONHUBS_RESOURCE_GROUP"] || "5ktrial";
  const namespaceName = "nh-sdk-ns";
  const notificationHubName = "nh-sdk-hub";
  const authorizationRuleName = "MyManageSharedAccessKey";
  const parameters: SharedAccessAuthorizationRuleResource = {
    rights: ["Listen", "Send"],
  };
  const credential = new DefaultAzureCredential();
  const client = new NotificationHubsManagementClient(credential, subscriptionId);
  const result = await client.notificationHubs.createOrUpdateAuthorizationRule(
    resourceGroupName,
    namespaceName,
    notificationHubName,
    authorizationRuleName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await notificationHubsCreateOrUpdateAuthorizationRule();
}

main().catch(console.error);
