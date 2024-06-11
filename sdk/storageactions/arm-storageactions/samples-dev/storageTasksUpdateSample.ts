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
  StorageTaskUpdateParameters,
  StorageActionsManagementClient,
} from "@azure/arm-storageactions";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update storage task properties
 *
 * @summary Update storage task properties
 * x-ms-original-file: specification/storageactions/resource-manager/Microsoft.StorageActions/stable/2023-01-01/examples/storageTasksCrud/PatchStorageTask.json
 */
async function patchStorageTask() {
  const subscriptionId =
    process.env["STORAGEACTIONS_SUBSCRIPTION_ID"] ||
    "1f31ba14-ce16-4281-b9b4-3e78da6e1616";
  const resourceGroupName =
    process.env["STORAGEACTIONS_RESOURCE_GROUP"] || "res4228";
  const storageTaskName = "mytask1";
  const parameters: StorageTaskUpdateParameters = {
    properties: {
      description: "My Storage task",
      action: {
        else: {
          operations: [
            { name: "DeleteBlob", onFailure: "break", onSuccess: "continue" },
          ],
        },
        if: {
          condition: "[[equals(AccessTier, 'Cool')]]",
          operations: [
            {
              name: "SetBlobTier",
              onFailure: "break",
              onSuccess: "continue",
              parameters: { tier: "Hot" },
            },
          ],
        },
      },
      enabled: true,
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageActionsManagementClient(credential, subscriptionId);
  const result = await client.storageTasks.beginUpdateAndWait(
    resourceGroupName,
    storageTaskName,
    parameters,
  );
  console.log(result);
}

async function main() {
  patchStorageTask();
}

main().catch(console.error);
