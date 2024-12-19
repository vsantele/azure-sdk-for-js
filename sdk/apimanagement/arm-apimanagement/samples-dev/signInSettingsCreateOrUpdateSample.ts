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
    PortalSigninSettings,
    SignInSettingsCreateOrUpdateOptionalParams
} from "@azure/arm-apimanagement";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or Update Sign-In settings.
 *
 * @summary Create or Update Sign-In settings.
 * x-ms-original-file: specification/apimanagement/resource-manager/Microsoft.ApiManagement/stable/2022-08-01/examples/ApiManagementPortalSettingsPutSignIn.json
 */
async function apiManagementPortalSettingsUpdateSignIn() {
    const subscriptionId =
        process.env["APIMANAGEMENT_SUBSCRIPTION_ID"] || "subid";
    const resourceGroupName =
        process.env["APIMANAGEMENT_RESOURCE_GROUP"] || "rg1";
    const serviceName = "apimService1";
    const ifMatch = "*";
    const parameters: PortalSigninSettings = { enabled: true };
    const options: SignInSettingsCreateOrUpdateOptionalParams = { ifMatch };
    const credential = new DefaultAzureCredential();
    const client = new ApiManagementClient(credential, subscriptionId);
    const result = await client.signInSettings.createOrUpdate(
        resourceGroupName,
        serviceName,
        parameters,
        options
    );
    console.log(result);
}

async function main() {
    apiManagementPortalSettingsUpdateSignIn();
}

main().catch(console.error);
