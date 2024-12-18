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
  DatabaseAccountCreateUpdateParameters,
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account.
 *
 * @summary Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2024-11-15/examples/CosmosDBDatabaseAccountCreateMax.json
 */
async function cosmosDbDatabaseAccountCreateMax() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const createUpdateParameters: DatabaseAccountCreateUpdateParameters = {
    analyticalStorageConfiguration: { schemaType: "WellDefined" },
    apiProperties: { serverVersion: "3.2" },
    backupPolicy: {
      type: "Periodic",
      periodicModeProperties: {
        backupIntervalInMinutes: 240,
        backupRetentionIntervalInHours: 8,
        backupStorageRedundancy: "Geo",
      },
    },
    capacity: { totalThroughputLimit: 2000 },
    consistencyPolicy: {
      defaultConsistencyLevel: "BoundedStaleness",
      maxIntervalInSeconds: 10,
      maxStalenessPrefix: 200,
    },
    cors: [{ allowedOrigins: "https://test" }],
    createMode: "Default",
    databaseAccountOfferType: "Standard",
    defaultIdentity: "FirstPartyIdentity",
    enableAnalyticalStorage: true,
    enableBurstCapacity: true,
    enableFreeTier: false,
    enablePerRegionPerPartitionAutoscale: true,
    identity: {
      type: "SystemAssigned,UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/fa5fc227A624475eB696Cdd604c735bc/resourceGroups/eu2cgroup/providers/MicrosoftManagedIdentity/userAssignedIdentities/id1":
          {},
      },
    },
    ipRules: [
      { ipAddressOrRange: "23.43.230.120" },
      { ipAddressOrRange: "110.12.240.0/12" },
    ],
    isVirtualNetworkFilterEnabled: true,
    keyVaultKeyUri: "https://myKeyVault.vault.azure.net",
    kind: "MongoDB",
    location: "westus",
    locations: [
      {
        failoverPriority: 0,
        isZoneRedundant: false,
        locationName: "southcentralus",
      },
      { failoverPriority: 1, isZoneRedundant: false, locationName: "eastus" },
    ],
    minimalTlsVersion: "Tls12",
    networkAclBypass: "AzureServices",
    networkAclBypassResourceIds: [
      "/subscriptions/subId/resourcegroups/rgName/providers/Microsoft.Synapse/workspaces/workspaceName",
    ],
    publicNetworkAccess: "Enabled",
    tags: {},
    virtualNetworkRules: [
      {
        id: "/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1",
        ignoreMissingVNetServiceEndpoint: false,
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.beginCreateOrUpdateAndWait(
    resourceGroupName,
    accountName,
    createUpdateParameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account.
 *
 * @summary Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2024-11-15/examples/CosmosDBDatabaseAccountCreateMin.json
 */
async function cosmosDbDatabaseAccountCreateMin() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const createUpdateParameters: DatabaseAccountCreateUpdateParameters = {
    createMode: "Default",
    databaseAccountOfferType: "Standard",
    location: "westus",
    locations: [
      {
        failoverPriority: 0,
        isZoneRedundant: false,
        locationName: "southcentralus",
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.beginCreateOrUpdateAndWait(
    resourceGroupName,
    accountName,
    createUpdateParameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account.
 *
 * @summary Creates or updates an Azure Cosmos DB database account. The "Update" method is preferred when performing updates on an account.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2024-11-15/examples/CosmosDBRestoreDatabaseAccountCreateUpdate.json
 */
async function cosmosDbRestoreDatabaseAccountCreateUpdateJson() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const createUpdateParameters: DatabaseAccountCreateUpdateParameters = {
    apiProperties: { serverVersion: "3.2" },
    backupPolicy: {
      type: "Continuous",
      continuousModeProperties: { tier: "Continuous30Days" },
    },
    consistencyPolicy: {
      defaultConsistencyLevel: "BoundedStaleness",
      maxIntervalInSeconds: 10,
      maxStalenessPrefix: 200,
    },
    createMode: "Restore",
    databaseAccountOfferType: "Standard",
    enableAnalyticalStorage: true,
    enableFreeTier: false,
    keyVaultKeyUri: "https://myKeyVault.vault.azure.net",
    kind: "GlobalDocumentDB",
    location: "westus",
    locations: [
      {
        failoverPriority: 0,
        isZoneRedundant: false,
        locationName: "southcentralus",
      },
    ],
    minimalTlsVersion: "Tls",
    restoreParameters: {
      databasesToRestore: [
        {
          collectionNames: ["collection1", "collection2"],
          databaseName: "db1",
        },
        {
          collectionNames: ["collection3", "collection4"],
          databaseName: "db2",
        },
      ],
      restoreMode: "PointInTime",
      restoreSource:
        "/subscriptions/subid/providers/Microsoft.DocumentDB/locations/westus/restorableDatabaseAccounts/1a97b4bb-f6a0-430e-ade1-638d781830cc",
      restoreTimestampInUtc: new Date("2021-03-11T22:05:09Z"),
      restoreWithTtlDisabled: false,
    },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.databaseAccounts.beginCreateOrUpdateAndWait(
    resourceGroupName,
    accountName,
    createUpdateParameters,
  );
  console.log(result);
}

async function main() {
  cosmosDbDatabaseAccountCreateMax();
  cosmosDbDatabaseAccountCreateMin();
  cosmosDbRestoreDatabaseAccountCreateUpdateJson();
}

main().catch(console.error);
