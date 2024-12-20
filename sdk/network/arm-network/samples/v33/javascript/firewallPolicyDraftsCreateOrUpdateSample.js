/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a draft Firewall Policy.
 *
 * @summary Create or update a draft Firewall Policy.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2024-05-01/examples/FirewallPolicyDraftPut.json
 */
async function createOrUpdateFirewallPolicyDraft() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const firewallPolicyName = "firewallPolicy";
  const parameters = {
    dnsSettings: {
      enableProxy: true,
      requireProxyForNetworkRules: false,
      servers: ["30.3.4.5"],
    },
    explicitProxy: {
      enableExplicitProxy: true,
      enablePacFile: true,
      httpPort: 8087,
      httpsPort: 8087,
      pacFile:
        "https://tinawstorage.file.core.windows.net/?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-06-04T07:01:12Z&st=2021-06-03T23:01:12Z&sip=68.65.171.11&spr=https&sig=Plsa0RRVpGbY0IETZZOT6znOHcSro71LLTTbzquYPgs%3D",
      pacFilePort: 8087,
    },
    insights: {
      isEnabled: true,
      logAnalyticsResources: {
        defaultWorkspaceId: {
          id: "/subscriptions/subid/resourcegroups/rg1/providers/microsoft.operationalinsights/workspaces/defaultWorkspace",
        },
        workspaces: [
          {
            region: "westus",
            workspaceId: {
              id: "/subscriptions/subid/resourcegroups/rg1/providers/microsoft.operationalinsights/workspaces/workspace1",
            },
          },
          {
            region: "eastus",
            workspaceId: {
              id: "/subscriptions/subid/resourcegroups/rg1/providers/microsoft.operationalinsights/workspaces/workspace2",
            },
          },
        ],
      },
      retentionDays: 100,
    },
    intrusionDetection: {
      configuration: {
        bypassTrafficSettings: [
          {
            name: "bypassRule1",
            description: "Rule 1",
            destinationAddresses: ["5.6.7.8"],
            destinationPorts: ["*"],
            sourceAddresses: ["1.2.3.4"],
            protocol: "TCP",
          },
        ],
        signatureOverrides: [{ id: "2525004", mode: "Deny" }],
      },
      mode: "Alert",
      profile: "Balanced",
    },
    snat: { privateRanges: ["IANAPrivateRanges"] },
    sql: { allowSqlRedirect: true },
    threatIntelMode: "Alert",
    threatIntelWhitelist: {
      fqdns: ["*.microsoft.com"],
      ipAddresses: ["20.3.4.5"],
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.firewallPolicyDrafts.createOrUpdate(
    resourceGroupName,
    firewallPolicyName,
    parameters,
  );
  console.log(result);
}

async function main() {
  createOrUpdateFirewallPolicyDraft();
}

main().catch(console.error);
