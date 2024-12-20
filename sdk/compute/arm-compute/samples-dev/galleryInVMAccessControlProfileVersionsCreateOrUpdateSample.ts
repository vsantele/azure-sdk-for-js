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
  GalleryInVMAccessControlProfileVersion,
  ComputeManagementClient,
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update a gallery inVMAccessControlProfile version.
 *
 * @summary Create or update a gallery inVMAccessControlProfile version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryResourceProfileExamples/GalleryInVMAccessControlProfileVersion_Create.json
 */
async function createOrUpdateAGalleryInVMAccessControlProfileVersion() {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const inVMAccessControlProfileName = "myInVMAccessControlProfileName";
  const inVMAccessControlProfileVersionName = "1.0.0";
  const galleryInVMAccessControlProfileVersion: GalleryInVMAccessControlProfileVersion =
    {
      defaultAccess: "Allow",
      excludeFromLatest: false,
      location: "West US",
      mode: "Audit",
      rules: {
        identities: [
          {
            name: "WinPA",
            exePath: "C:\\Windows\\System32\\cscript.exe",
            groupName: "Administrators",
            processName: "cscript",
            userName: "SYSTEM",
          },
        ],
        privileges: [
          {
            name: "GoalState",
            path: "/machine",
            queryParameters: { comp: "goalstate" },
          },
        ],
        roleAssignments: [{ identities: ["WinPA"], role: "Provisioning" }],
        roles: [{ name: "Provisioning", privileges: ["GoalState"] }],
      },
      targetLocations: [{ name: "West US" }, { name: "South Central US" }],
    };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result =
    await client.galleryInVMAccessControlProfileVersions.beginCreateOrUpdateAndWait(
      resourceGroupName,
      galleryName,
      inVMAccessControlProfileName,
      inVMAccessControlProfileVersionName,
      galleryInVMAccessControlProfileVersion,
    );
  console.log(result);
}

async function main() {
  createOrUpdateAGalleryInVMAccessControlProfileVersion();
}

main().catch(console.error);
