/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const {
  ServiceFabricManagedClustersManagementClient,
} = require("@azure/arm-servicefabricmanagedclusters");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a Service Fabric managed cluster resource with the specified name.
 *
 * @summary Create or update a Service Fabric managed cluster resource with the specified name.
 * x-ms-original-file: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/preview/2024-09-01-preview/examples/ManagedClusterPutOperation_example_max.json
 */
async function putAClusterWithMaximumParameters() {
  const subscriptionId =
    process.env["SERVICEFABRICMANAGEDCLUSTERS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["SERVICEFABRICMANAGEDCLUSTERS_RESOURCE_GROUP"] || "resRg";
  const clusterName = "mycluster";
  const parameters = {
    addonFeatures: ["DnsService", "BackupRestoreService", "ResourceMonitorService"],
    adminPassword: "{vm-password}",
    adminUserName: "vmadmin",
    allocatedOutboundPorts: 0,
    allowRdpAccess: true,
    applicationTypeVersionsCleanupPolicy: { maxUnusedVersionsToKeep: 3 },
    autoGeneratedDomainNameLabelScope: "SubscriptionReuse",
    auxiliarySubnets: [
      {
        name: "testSubnet1",
        enableIpv6: true,
        networkSecurityGroupId:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resRg/providers/Microsoft.Network/networkSecurityGroups/sn1",
        privateEndpointNetworkPolicies: "enabled",
        privateLinkServiceNetworkPolicies: "enabled",
      },
    ],
    clientConnectionPort: 19000,
    clusterCodeVersion: "7.1.168.9494",
    clusterUpgradeMode: "Manual",
    ddosProtectionPlanId:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resRg/providers/Microsoft.Network/ddosProtectionPlans/myDDoSProtectionPlan",
    dnsName: "mycluster",
    enableAutoOSUpgrade: true,
    enableHttpGatewayExclusiveAuthMode: true,
    enableIpv6: true,
    fabricSettings: [
      {
        name: "ManagedIdentityTokenService",
        parameters: [{ name: "IsEnabled", value: "true" }],
      },
    ],
    httpGatewayConnectionPort: 19080,
    httpGatewayTokenAuthConnectionPort: 19081,
    ipTags: [{ ipTagType: "FirstPartyUsage", tag: "SQL" }],
    loadBalancingRules: [
      {
        backendPort: 80,
        frontendPort: 80,
        probePort: 80,
        probeProtocol: "http",
        protocol: "http",
      },
      {
        backendPort: 443,
        frontendPort: 443,
        probePort: 443,
        probeProtocol: "http",
        protocol: "http",
      },
      {
        backendPort: 10000,
        frontendPort: 10000,
        loadDistribution: "Default",
        probePort: 10000,
        probeProtocol: "http",
        protocol: "tcp",
      },
    ],
    location: "eastus",
    networkSecurityRules: [
      {
        name: "TestName",
        description: "Test description",
        access: "allow",
        destinationAddressPrefixes: ["*"],
        destinationPortRanges: ["*"],
        direction: "inbound",
        priority: 1010,
        sourceAddressPrefixes: ["*"],
        sourcePortRanges: ["*"],
        protocol: "tcp",
      },
      {
        name: "AllowARM",
        access: "allow",
        destinationAddressPrefix: "*",
        destinationPortRange: "33500-33699",
        direction: "inbound",
        priority: 2002,
        sourceAddressPrefix: "AzureResourceManager",
        sourcePortRange: "*",
        protocol: "*",
      },
    ],
    publicIPPrefixId:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.Network/publicIPPrefixes/myPublicIPPrefix",
    publicIPv6PrefixId:
      "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.Network/publicIPPrefixes/myPublicIPv6Prefix",
    serviceEndpoints: [{ locations: ["eastus2", "usnorth"], service: "Microsoft.Storage" }],
    sku: { name: "Basic" },
    tags: {},
    upgradeDescription: {
      deltaHealthPolicy: {
        maxPercentDeltaUnhealthyApplications: 40,
        maxPercentDeltaUnhealthyNodes: 20,
        maxPercentUpgradeDomainDeltaUnhealthyNodes: 40,
      },
      forceRestart: false,
      healthPolicy: {
        maxPercentUnhealthyApplications: 30,
        maxPercentUnhealthyNodes: 10,
      },
      monitoringPolicy: {
        healthCheckRetryTimeout: "00:55:00",
        healthCheckStableDuration: "00:45:00",
        healthCheckWaitDuration: "00:05:00",
        upgradeDomainTimeout: "03:00:00",
        upgradeTimeout: "12:00:00",
      },
    },
    useCustomVnet: true,
    zonalResiliency: true,
    zonalUpdateMode: "Fast",
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricManagedClustersManagementClient(credential, subscriptionId);
  const result = await client.managedClusters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    parameters,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Service Fabric managed cluster resource with the specified name.
 *
 * @summary Create or update a Service Fabric managed cluster resource with the specified name.
 * x-ms-original-file: specification/servicefabricmanagedclusters/resource-manager/Microsoft.ServiceFabric/preview/2024-09-01-preview/examples/ManagedClusterPutOperation_example_min.json
 */
async function putAClusterWithMinimumParameters() {
  const subscriptionId =
    process.env["SERVICEFABRICMANAGEDCLUSTERS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["SERVICEFABRICMANAGEDCLUSTERS_RESOURCE_GROUP"] || "resRg";
  const clusterName = "myCluster";
  const parameters = {
    adminPassword: "{vm-password}",
    adminUserName: "vmadmin",
    clusterUpgradeCadence: "Wave1",
    clusterUpgradeMode: "Automatic",
    dnsName: "myCluster",
    fabricSettings: [
      {
        name: "ManagedIdentityTokenService",
        parameters: [{ name: "IsEnabled", value: "true" }],
      },
    ],
    location: "eastus",
    sku: { name: "Basic" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricManagedClustersManagementClient(credential, subscriptionId);
  const result = await client.managedClusters.beginCreateOrUpdateAndWait(
    resourceGroupName,
    clusterName,
    parameters,
  );
  console.log(result);
}

async function main() {
  putAClusterWithMaximumParameters();
  putAClusterWithMinimumParameters();
}

main().catch(console.error);
