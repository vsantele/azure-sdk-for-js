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
    ApiManagementClient,
    GroupCreateParameters
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates or Updates a group.
 *
 * @summary Creates or Updates a group.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateGroup.json
 */
async function apiManagementCreateGroup() {
    const subscriptionId =
        process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
    const resourceGroupName =
        process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
    const serviceName = "apimService1";
    const groupId = "tempgroup";
    const parameters: GroupCreateParameters = { displayName: "temp group" };
    const credential = new DefaultAzureCredential();
    const client = new ApiManagementClient(credential, subscriptionId);
    const result = await client.group.createOrUpdate(
        resourceGroupName,
        serviceName,
        groupId,
        parameters
    );
    console.log(result);
}

/**
 * This sample demonstrates how to Creates or Updates a group.
 *
 * @summary Creates or Updates a group.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementCreateGroupExternal.json
 */
async function apiManagementCreateGroupExternal() {
    const subscriptionId =
        process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
    const resourceGroupName =
        process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
    const serviceName = "apimService1";
    const groupId = "aadGroup";
    const parameters: GroupCreateParameters = {
        type: "external",
        description: "new group to test",
        displayName: "NewGroup (samiraad.onmicrosoft.com)",
        externalId:
            "aad://samiraad.onmicrosoft.com/groups/83cf2753-5831-4675-bc0e-2f8dc067c58d"
    };
    const credential = new DefaultAzureCredential();
    const client = new ApiManagementClient(credential, subscriptionId);
    const result = await client.group.createOrUpdate(
        resourceGroupName,
        serviceName,
        groupId,
        parameters
    );
    console.log(result);
}

async function main() {
    apiManagementCreateGroup();
    apiManagementCreateGroupExternal();
}

main().catch(console.error);
