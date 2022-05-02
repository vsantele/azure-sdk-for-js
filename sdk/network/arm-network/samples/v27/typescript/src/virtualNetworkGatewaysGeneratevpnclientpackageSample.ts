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
  VpnClientParameters,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Generates VPN client package for P2S client of the virtual network gateway in the specified resource group.
 *
 * @summary Generates VPN client package for P2S client of the virtual network gateway in the specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/VirtualNetworkGatewayGenerateVpnClientPackage.json
 */
async function generateVpnClientPackage() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const virtualNetworkGatewayName = "vpngw";
  const parameters: VpnClientParameters = {};
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.virtualNetworkGateways.beginGeneratevpnclientpackageAndWait(
    resourceGroupName,
    virtualNetworkGatewayName,
    parameters
  );
  console.log(result);
}

generateVpnClientPackage().catch(console.error);
