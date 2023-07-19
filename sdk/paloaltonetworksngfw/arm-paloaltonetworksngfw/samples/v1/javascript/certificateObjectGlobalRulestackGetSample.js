/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { PaloAltoNetworksCloudngfw } = require("@azure/arm-paloaltonetworksngfw");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a CertificateObjectGlobalRulestackResource
 *
 * @summary Get a CertificateObjectGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2022-08-29/examples/CertificateObjectGlobalRulestack_Get_MaximumSet_Gen.json
 */
async function certificateObjectGlobalRulestackGetMaximumSetGen() {
  const globalRulestackName = "praval";
  const name = "armid1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.certificateObjectGlobalRulestack.get(globalRulestackName, name);
  console.log(result);
}

/**
 * This sample demonstrates how to Get a CertificateObjectGlobalRulestackResource
 *
 * @summary Get a CertificateObjectGlobalRulestackResource
 * x-ms-original-file: specification/paloaltonetworks/resource-manager/PaloAltoNetworks.Cloudngfw/stable/2022-08-29/examples/CertificateObjectGlobalRulestack_Get_MinimumSet_Gen.json
 */
async function certificateObjectGlobalRulestackGetMinimumSetGen() {
  const globalRulestackName = "praval";
  const name = "armid1";
  const credential = new DefaultAzureCredential();
  const client = new PaloAltoNetworksCloudngfw(credential);
  const result = await client.certificateObjectGlobalRulestack.get(globalRulestackName, name);
  console.log(result);
}

async function main() {
  certificateObjectGlobalRulestackGetMaximumSetGen();
  certificateObjectGlobalRulestackGetMinimumSetGen();
}

main().catch(console.error);
