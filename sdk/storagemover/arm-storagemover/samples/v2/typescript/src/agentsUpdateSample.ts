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
  AgentUpdateParameters,
  StorageMoverClient,
} from "@azure/arm-storagemover";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an Agent resource.
 *
 * @summary Creates or updates an Agent resource.
 * x-ms-original-file: specification/storagemover/resource-manager/Microsoft.StorageMover/stable/2024-07-01/examples/Agents_Update.json
 */
async function agentsUpdate() {
  const subscriptionId =
    process.env["STORAGEMOVER_SUBSCRIPTION_ID"] ||
    "60bcfc77-6589-4da2-b7fd-f9ec9322cf95";
  const resourceGroupName =
    process.env["STORAGEMOVER_RESOURCE_GROUP"] || "examples-rg";
  const storageMoverName = "examples-storageMoverName";
  const agentName = "examples-agentName";
  const agent: AgentUpdateParameters = {
    description: "Example Agent Description",
    uploadLimitSchedule: {
      weeklyRecurrences: [
        {
          days: ["Monday"],
          endTime: { hour: 18, minute: 30 },
          limitInMbps: 2000,
          startTime: { hour: 9, minute: 0 },
        },
      ],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new StorageMoverClient(credential, subscriptionId);
  const result = await client.agents.update(
    resourceGroupName,
    storageMoverName,
    agentName,
    agent,
  );
  console.log(result);
}

async function main() {
  agentsUpdate();
}

main().catch(console.error);
