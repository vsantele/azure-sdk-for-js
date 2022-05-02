/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to List the two keys used to publish to a partner namespace.
 *
 * @summary List the two keys used to publish to a partner namespace.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2021-10-15-preview/examples/PartnerNamespaces_ListSharedAccessKeys.json
 */
async function partnerNamespacesListSharedAccessKeys() {
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName = "examplerg";
  const partnerNamespaceName = "examplePartnerNamespaceName1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.partnerNamespaces.listSharedAccessKeys(
    resourceGroupName,
    partnerNamespaceName
  );
  console.log(result);
}

partnerNamespacesListSharedAccessKeys().catch(console.error);
