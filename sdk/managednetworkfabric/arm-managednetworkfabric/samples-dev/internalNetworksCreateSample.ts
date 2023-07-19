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
  InternalNetwork,
  AzureNetworkFabricManagementServiceAPI
} from "@azure/arm-managednetworkfabric";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates InternalNetwork PUT method.
 *
 * @summary Creates InternalNetwork PUT method.
 * x-ms-original-file: specification/managednetworkfabric/resource-manager/Microsoft.ManagedNetworkFabric/preview/2023-02-01-preview/examples/InternalNetworks_Create_MaximumSet_Gen.json
 */
async function internalNetworksCreateMaximumSetGen() {
  const subscriptionId =
    process.env["MANAGEDNETWORKFABRIC_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName =
    process.env["MANAGEDNETWORKFABRIC_RESOURCE_GROUP"] || "resourceGroupName";
  const l3IsolationDomainName = "example-l3domain";
  const internalNetworkName = "example-internalnetwork";
  const body: InternalNetwork = {
    bgpConfiguration: {
      allowAS: 1,
      allowASOverride: "Enable",
      bfdConfiguration: {},
      defaultRouteOriginate: "True",
      ipv4ListenRangePrefixes: ["10.1.0.0/25"],
      ipv4NeighborAddress: [{ address: "10.1.0.0" }],
      ipv6ListenRangePrefixes: ["2fff::/66"],
      ipv6NeighborAddress: [{ address: "2fff::" }],
      peerASN: 6
    },
    connectedIPv4Subnets: [{ prefix: "10.0.0.0/24" }],
    connectedIPv6Subnets: [{ prefix: "3FFE:FFFF:0:CD30::a0/29" }],
    exportRoutePolicyId:
      "/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName2",
    importRoutePolicyId:
      "/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName1",
    mtu: 1500,
    staticRouteConfiguration: {
      bfdConfiguration: {},
      ipv4Routes: [{ nextHop: ["10.0.0.1"], prefix: "10.1.0.0/24" }],
      ipv6Routes: [{ nextHop: ["2ffe::1"], prefix: "2fff::/64" }]
    },
    vlanId: 501
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureNetworkFabricManagementServiceAPI(
    credential,
    subscriptionId
  );
  const result = await client.internalNetworks.beginCreateAndWait(
    resourceGroupName,
    l3IsolationDomainName,
    internalNetworkName,
    body
  );
  console.log(result);
}

async function main() {
  internalNetworksCreateMaximumSetGen();
}

main().catch(console.error);
