/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MicrosoftDatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to List Datadog marketplace agreements in the subscription.
 *
 * @summary List Datadog marketplace agreements in the subscription.
 * x-ms-original-file: specification/datadog/resource-manager/Microsoft.Datadog/stable/2021-03-01/examples/MarketplaceAgreements_List.json
 */
async function marketplaceAgreementsList() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftDatadogClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.marketplaceAgreements.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

marketplaceAgreementsList().catch(console.error);
