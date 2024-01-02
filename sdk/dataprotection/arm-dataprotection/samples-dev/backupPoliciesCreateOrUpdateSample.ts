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
  BaseBackupPolicyResource,
  DataProtectionClient
} from "@azure/arm-dataprotection";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or Updates a backup policy belonging to a backup vault
 *
 * @summary Creates or Updates a backup policy belonging to a backup vault
 * x-ms-original-file: specification/dataprotection/resource-manager/Microsoft.DataProtection/stable/2023-11-01/examples/PolicyCRUD/CreateOrUpdateBackupPolicy.json
 */
async function createOrUpdateBackupPolicy() {
  const subscriptionId =
    process.env["DATAPROTECTION_SUBSCRIPTION_ID"] ||
    "04cf684a-d41f-4550-9f70-7708a3a2283b";
  const resourceGroupName =
    process.env["DATAPROTECTION_RESOURCE_GROUP"] || "000pikumar";
  const vaultName = "PrivatePreviewVault";
  const backupPolicyName = "OSSDBPolicy";
  const parameters: BaseBackupPolicyResource = {
    properties: {
      datasourceTypes: ["OssDB"],
      objectType: "BackupPolicy",
      policyRules: [
        {
          name: "BackupWeekly",
          backupParameters: {
            backupType: "Full",
            objectType: "AzureBackupParams"
          },
          dataStore: {
            dataStoreType: "VaultStore",
            objectType: "DataStoreInfoBase"
          },
          objectType: "AzureBackupRule",
          trigger: {
            objectType: "ScheduleBasedTriggerContext",
            schedule: {
              repeatingTimeIntervals: ["R/2019-11-20T08:00:00-08:00/P1W"]
            },
            taggingCriteria: [
              {
                isDefault: true,
                tagInfo: { tagName: "Default" },
                taggingPriority: 99
              },
              {
                criteria: [
                  {
                    daysOfTheWeek: ["Sunday"],
                    objectType: "ScheduleBasedBackupCriteria",
                    scheduleTimes: [new Date("2019-03-01T13:00:00Z")]
                  }
                ],
                isDefault: false,
                tagInfo: { tagName: "Weekly" },
                taggingPriority: 20
              }
            ]
          }
        },
        {
          name: "Default",
          isDefault: true,
          lifecycles: [
            {
              deleteAfter: {
                duration: "P1W",
                objectType: "AbsoluteDeleteOption"
              },
              sourceDataStore: {
                dataStoreType: "VaultStore",
                objectType: "DataStoreInfoBase"
              }
            }
          ],
          objectType: "AzureRetentionRule"
        },
        {
          name: "Weekly",
          isDefault: false,
          lifecycles: [
            {
              deleteAfter: {
                duration: "P12W",
                objectType: "AbsoluteDeleteOption"
              },
              sourceDataStore: {
                dataStoreType: "VaultStore",
                objectType: "DataStoreInfoBase"
              }
            }
          ],
          objectType: "AzureRetentionRule"
        }
      ]
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new DataProtectionClient(credential, subscriptionId);
  const result = await client.backupPolicies.createOrUpdate(
    resourceGroupName,
    vaultName,
    backupPolicyName,
    parameters
  );
  console.log(result);
}

async function main() {
  createOrUpdateBackupPolicy();
}

main().catch(console.error);
