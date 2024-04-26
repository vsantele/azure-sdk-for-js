/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HybridComputeManagementClient } from "@azure/arm-hybridcompute";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Returns a Azure Arc PrivateLinkScope's validation details.
 *
 * @summary Returns a Azure Arc PrivateLinkScope's validation details.
 * x-ms-original-file: specification/hybridcompute/resource-manager/Microsoft.HybridCompute/preview/2023-10-03-preview/examples/privateLinkScope/PrivateLinkScopes_GetValidation.json
 */
async function privateLinkScopeGet() {
  const subscriptionId =
    process.env["HYBRIDCOMPUTE_SUBSCRIPTION_ID"] ||
    "86dc51d3-92ed-4d7e-947a-775ea79b4919";
  const location = "wus2";
  const privateLinkScopeId = "f5dc51d3-92ed-4d7e-947a-775ea79b4919";
  const credential = new DefaultAzureCredential();
  const client = new HybridComputeManagementClient(credential, subscriptionId);
  const result = await client.privateLinkScopes.getValidationDetails(
    location,
    privateLinkScopeId,
  );
  console.log(result);
}

async function main() {
  privateLinkScopeGet();
}

main().catch(console.error);
