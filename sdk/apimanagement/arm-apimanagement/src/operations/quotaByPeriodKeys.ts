/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { ApiManagementClient } from "../apiManagementClient.js";
import {
    QuotaByPeriodKeysGetOptionalParams,
    QuotaByPeriodKeysGetResponse,
    QuotaByPeriodKeysUpdateOptionalParams,
    QuotaByPeriodKeysUpdateResponse,
    QuotaCounterValueUpdateContract
} from "../models/index.js";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { QuotaByPeriodKeys } from "../operationsInterfaces/index.js";

/** Class containing QuotaByPeriodKeys operations. */
export class QuotaByPeriodKeysImpl implements QuotaByPeriodKeys {
    private readonly client: ApiManagementClient;

    /**
     * Initialize a new instance of the class QuotaByPeriodKeys class.
     * @param client Reference to the service client
     */
    constructor(client: ApiManagementClient) {
        this.client = client;
    }

    /**
     * Gets the value of the quota counter associated with the counter-key in the policy for the specific
     * period in service instance.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param quotaCounterKey Quota counter key identifier.This is the result of expression defined in
     *                        counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key="boo" in
     *                        the policy, then it’s accessible by "boo" counter key. But if it’s defined as
     *                        counter-key="@("b"+"a")" then it will be accessible by "ba" key
     * @param quotaPeriodKey Quota period key identifier.
     * @param options The options parameters.
     */
    get(
        resourceGroupName: string,
        serviceName: string,
        quotaCounterKey: string,
        quotaPeriodKey: string,
        options?: QuotaByPeriodKeysGetOptionalParams
    ): Promise<QuotaByPeriodKeysGetResponse> {
        return this.client.sendOperationRequest(
            {
                resourceGroupName,
                serviceName,
                quotaCounterKey,
                quotaPeriodKey,
                options
            },
            getOperationSpec
        );
    }

    /**
     * Updates an existing quota counter value in the specified service instance.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param quotaCounterKey Quota counter key identifier.This is the result of expression defined in
     *                        counter-key attribute of the quota-by-key policy.For Example, if you specify counter-key="boo" in
     *                        the policy, then it’s accessible by "boo" counter key. But if it’s defined as
     *                        counter-key="@("b"+"a")" then it will be accessible by "ba" key
     * @param quotaPeriodKey Quota period key identifier.
     * @param parameters The value of the Quota counter to be applied on the specified period.
     * @param options The options parameters.
     */
    update(
        resourceGroupName: string,
        serviceName: string,
        quotaCounterKey: string,
        quotaPeriodKey: string,
        parameters: QuotaCounterValueUpdateContract,
        options?: QuotaByPeriodKeysUpdateOptionalParams
    ): Promise<QuotaByPeriodKeysUpdateResponse> {
        return this.client.sendOperationRequest(
            {
                resourceGroupName,
                serviceName,
                quotaCounterKey,
                quotaPeriodKey,
                parameters,
                options
            },
            updateOperationSpec
        );
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/quotas/{quotaCounterKey}/periods/{quotaPeriodKey}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.QuotaCounterContract
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.quotaCounterKey,
        Parameters.quotaPeriodKey
    ],
    headerParameters: [Parameters.accept],
    serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
    path:
        "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/quotas/{quotaCounterKey}/periods/{quotaPeriodKey}",
    httpMethod: "PATCH",
    responses: {
        200: {
            bodyMapper: Mappers.QuotaCounterContract
        },
        default: {
            bodyMapper: Mappers.ErrorResponse
        }
    },
    requestBody: Parameters.parameters65,
    queryParameters: [Parameters.apiVersion],
    urlParameters: [
        Parameters.$host,
        Parameters.resourceGroupName,
        Parameters.serviceName,
        Parameters.subscriptionId,
        Parameters.quotaCounterKey,
        Parameters.quotaPeriodKey
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer
};
