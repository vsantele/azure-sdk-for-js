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
  ArtifactManifest,
  HybridNetworkManagementClient
} from "@azure/arm-hybridnetwork";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates a artifact manifest.
 *
 * @summary Creates or updates a artifact manifest.
 * x-ms-original-file: specification/hybridnetwork/resource-manager/Microsoft.HybridNetwork/stable/2023-09-01/examples/ArtifactManifestCreate.json
 */
async function createOrUpdateTheArtifactManifestResource() {
  const subscriptionId =
    process.env["HYBRIDNETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["HYBRIDNETWORK_RESOURCE_GROUP"] || "rg";
  const publisherName = "TestPublisher";
  const artifactStoreName = "TestArtifactStore";
  const artifactManifestName = "TestManifest";
  const parameters: ArtifactManifest = {
    location: "eastus",
    properties: {
      artifacts: [
        {
          artifactName: "fed-rbac",
          artifactType: "OCIArtifact",
          artifactVersion: "1.0.0"
        },
        {
          artifactName: "nginx",
          artifactType: "OCIArtifact",
          artifactVersion: "v1"
        }
      ]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new HybridNetworkManagementClient(credential, subscriptionId);
  const result = await client.artifactManifests.beginCreateOrUpdateAndWait(
    resourceGroupName,
    publisherName,
    artifactStoreName,
    artifactManifestName,
    parameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateTheArtifactManifestResource();
}

main().catch(console.error);
