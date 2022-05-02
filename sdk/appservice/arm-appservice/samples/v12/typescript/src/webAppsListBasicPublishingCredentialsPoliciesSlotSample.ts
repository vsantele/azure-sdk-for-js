/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WebSiteManagementClient } from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Description for Returns whether Scm basic auth is allowed and whether Ftp is allowed for a given site.
 *
 * @summary Description for Returns whether Scm basic auth is allowed and whether Ftp is allowed for a given site.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-03-01/examples/ListPublishingCredentialsPoliciesSlot.json
 */
async function listPublishingCredentialsPolicies() {
  const subscriptionId = "3fb8d758-2e2c-42e9-a528-a8acdfe87237";
  const resourceGroupName = "testrg123";
  const name = "testsite";
  const slot = "staging";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.webApps.listBasicPublishingCredentialsPoliciesSlot(
    resourceGroupName,
    name,
    slot
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

listPublishingCredentialsPolicies().catch(console.error);
