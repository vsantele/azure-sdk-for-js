// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { MongoClusterManagementClient } from "@azure/arm-mongocluster";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to check if mongo cluster name is available for use.
 *
 * @summary check if mongo cluster name is available for use.
 * x-ms-original-file: 2024-07-01/MongoClusters_NameAvailability.json
 */
async function checksAndConfirmsTheMongoClusterNameIsAvailabilityForUse(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const client = new MongoClusterManagementClient(credential, subscriptionId);
  const result = await client.mongoClusters.checkNameAvailability("westus2", {
    name: "newmongocluster",
    type: "Microsoft.DocumentDB/mongoClusters",
  });
  console.log(result);
}

/**
 * This sample demonstrates how to check if mongo cluster name is available for use.
 *
 * @summary check if mongo cluster name is available for use.
 * x-ms-original-file: 2024-07-01/MongoClusters_NameAvailability_AlreadyExists.json
 */
async function checksAndReturnsThatTheMongoClusterNameIsAlreadyInUse(): void {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const client = new MongoClusterManagementClient(credential, subscriptionId);
  const result = await client.mongoClusters.checkNameAvailability("westus2", {
    name: "existingmongocluster",
    type: "Microsoft.DocumentDB/mongoClusters",
  });
  console.log(result);
}

async function main() {
  checksAndConfirmsTheMongoClusterNameIsAvailabilityForUse();
  checksAndReturnsThatTheMongoClusterNameIsAlreadyInUse();
}

main().catch(console.error);
