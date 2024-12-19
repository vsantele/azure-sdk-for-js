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
 * This sample demonstrates how to Lists a collection of properties defined within a service instance.
 *
 * @summary Lists a collection of properties defined within a service instance.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementListNotifications.json
 */
async function apiManagementListNotifications() {
    const subscriptionId =
        process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
    const resourceGroupName =
        process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
    const serviceName = "apimService1";
    const credential = new DefaultAzureCredential();
    const client = new ApiManagementClient(credential, subscriptionId);
    const resArray = new Array();
    for await (let item of client.notification.listByService(
        resourceGroupName,
        serviceName
    )) {
        resArray.push(item);
    }
    console.log(resArray);
}

async function main() {
    apiManagementListNotifications();
}

main().catch(console.error);
