/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a gallery Application Version.
 *
 * @summary Create or update a gallery Application Version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryApplicationVersion_Create.json
 */
async function createOrUpdateASimpleGalleryApplicationVersion() {
  const subscriptionId = process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryApplicationName = "myGalleryApplicationName";
  const galleryApplicationVersionName = "1.0.0";
  const galleryApplicationVersion = {
    location: "West US",
    publishingProfile: {
      customActions: [
        {
          name: "myCustomAction",
          description: "This is the custom action description.",
          parameters: [
            {
              name: "myCustomActionParameter",
              type: "String",
              description: "This is the description of the parameter",
              defaultValue: "default value of parameter.",
              required: false,
            },
          ],
          script: "myCustomActionScript",
        },
      ],
      endOfLifeDate: new Date("2019-07-01T07:00:00Z"),
      manageActions: {
        install:
          'powershell -command "Expand-Archive -Path package.zip -DestinationPath C:\\package"',
        remove: "del C:\\package ",
      },
      replicaCount: 1,
      source: {
        mediaLink:
          "https://mystorageaccount.blob.core.windows.net/mycontainer/package.zip?{sasKey}",
      },
      storageAccountType: "Standard_LRS",
      targetRegions: [
        {
          name: "West US",
          excludeFromLatest: false,
          regionalReplicaCount: 1,
          storageAccountType: "Standard_LRS",
        },
      ],
    },
    safetyProfile: { allowDeletionOfReplicatedLocations: false },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryApplicationVersions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryApplicationName,
    galleryApplicationVersionName,
    galleryApplicationVersion,
  );
  console.log(result);
}

async function main() {
  createOrUpdateASimpleGalleryApplicationVersion();
}

main().catch(console.error);
