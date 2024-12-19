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
    ApiManagementServiceCheckNameAvailabilityParameters
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Checks availability and correctness of a name for an API Management service.
 *
 * @summary Checks availability and correctness of a name for an API Management service.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementServiceCheckNameAvailability.json
 */
async function apiManagementServiceCheckNameAvailability() {
    const subscriptionId =
        process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
    const parameters: ApiManagementServiceCheckNameAvailabilityParameters = {
        name: "apimService1"
    };
    const credential = new DefaultAzureCredential();
    const client = new ApiManagementClient(credential, subscriptionId);
    const result = await client.apiManagementService.checkNameAvailability(
        parameters
    );
    console.log(result);
}

async function main() {
    apiManagementServiceCheckNameAvailability();
}

main().catch(console.error);
