/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ImageBuilderClient } = require("@azure/arm-imagebuilder");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Update the tags for this Virtual Machine Image Template
 *
 * @summary Update the tags for this Virtual Machine Image Template
 * x-ms-original-file: specification/imagebuilder/resource-manager/Microsoft.VirtualMachineImages/stable/2021-10-01/examples/UpdateImageTemplateToRemoveIdentities.json
 */
async function removeIdentitiesForAnImageTemplate() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const imageTemplateName = "myImageTemplate";
  const parameters = {
    identity: { type: "None" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ImageBuilderClient(credential, subscriptionId);
  const result = await client.virtualMachineImageTemplates.beginUpdateAndWait(
    resourceGroupName,
    imageTemplateName,
    parameters
  );
  console.log(result);
}

removeIdentitiesForAnImageTemplate().catch(console.error);

/**
 * This sample demonstrates how to Update the tags for this Virtual Machine Image Template
 *
 * @summary Update the tags for this Virtual Machine Image Template
 * x-ms-original-file: specification/imagebuilder/resource-manager/Microsoft.VirtualMachineImages/stable/2021-10-01/examples/UpdateImageTemplateTags.json
 */
async function updateTheTagsForAnImageTemplate() {
  const subscriptionId = "{subscription-id}";
  const resourceGroupName = "myResourceGroup";
  const imageTemplateName = "myImageTemplate";
  const parameters = {
    tags: { newTag: "new-value" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ImageBuilderClient(credential, subscriptionId);
  const result = await client.virtualMachineImageTemplates.beginUpdateAndWait(
    resourceGroupName,
    imageTemplateName,
    parameters
  );
  console.log(result);
}

updateTheTagsForAnImageTemplate().catch(console.error);
