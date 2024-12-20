/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ApiManagementClient } from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Gets the entity state (Etag) version of the GraphQL API resolver policy specified by its identifier.
 *
 * @summary Gets the entity state (Etag) version of the GraphQL API resolver policy specified by its identifier.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementHeadGraphQLApiResolverPolicy.json
 */
async function apiManagementHeadGraphQlApiResolverPolicy() {
    const subscriptionId =
        process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
    const resourceGroupName =
        process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
    const serviceName = "apimService1";
    const apiId = "5600b539c53f5b0062040001";
    const resolverId = "5600b53ac53f5b0062080006";
    const policyId = "policy";
    const credential = new DefaultAzureCredential();
    const client = new ApiManagementClient(credential, subscriptionId);
    const result = await client.graphQLApiResolverPolicy.getEntityTag(
        resourceGroupName,
        serviceName,
        apiId,
        resolverId,
        policyId
    );
    console.log(result);
}

async function main() {
    apiManagementHeadGraphQlApiResolverPolicy();
}

main().catch(console.error);
