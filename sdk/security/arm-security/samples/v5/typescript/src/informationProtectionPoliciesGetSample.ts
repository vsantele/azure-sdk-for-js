/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SecurityCenter } from "@azure/arm-security";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Details of the information protection policy.
 *
 * @summary Details of the information protection policy.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2017-08-01-preview/examples/InformationProtectionPolicies/GetCustomInformationProtectionPolicy_example.json
 */
async function getTheCustomizedInformationProtectionPolicyForAManagementGroup() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const scope =
    "providers/Microsoft.Management/managementGroups/148059f7-faf3-49a6-ba35-85122112291e";
  const informationProtectionPolicyName = "custom";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.informationProtectionPolicies.get(
    scope,
    informationProtectionPolicyName
  );
  console.log(result);
}

getTheCustomizedInformationProtectionPolicyForAManagementGroup().catch(
  console.error
);

/**
 * This sample demonstrates how to Details of the information protection policy.
 *
 * @summary Details of the information protection policy.
 * x-ms-original-file: specification/security/resource-manager/Microsoft.Security/preview/2017-08-01-preview/examples/InformationProtectionPolicies/GetEffectiveInformationProtectionPolicy_example.json
 */
async function getTheEffectiveInformationProtectionPolicyForAManagementGroup() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const scope =
    "providers/Microsoft.Management/managementGroups/148059f7-faf3-49a6-ba35-85122112291e";
  const informationProtectionPolicyName = "effective";
  const credential = new DefaultAzureCredential();
  const client = new SecurityCenter(credential, subscriptionId);
  const result = await client.informationProtectionPolicies.get(
    scope,
    informationProtectionPolicyName
  );
  console.log(result);
}

getTheEffectiveInformationProtectionPolicyForAManagementGroup().catch(
  console.error
);
