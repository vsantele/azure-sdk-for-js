/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { LogAnalytics } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CdnManagementClient } from "../cdnManagementClient";
import {
  LogMetric,
  LogMetricsGranularity,
  LogAnalyticsGetLogAnalyticsMetricsOptionalParams,
  LogAnalyticsGetLogAnalyticsMetricsResponse,
  LogRanking,
  LogRankingMetric,
  LogAnalyticsGetLogAnalyticsRankingsOptionalParams,
  LogAnalyticsGetLogAnalyticsRankingsResponse,
  LogAnalyticsGetLogAnalyticsLocationsOptionalParams,
  LogAnalyticsGetLogAnalyticsLocationsResponse,
  LogAnalyticsGetLogAnalyticsResourcesOptionalParams,
  LogAnalyticsGetLogAnalyticsResourcesResponse,
  WafMetric,
  WafGranularity,
  LogAnalyticsGetWafLogAnalyticsMetricsOptionalParams,
  LogAnalyticsGetWafLogAnalyticsMetricsResponse,
  WafRankingType,
  LogAnalyticsGetWafLogAnalyticsRankingsOptionalParams,
  LogAnalyticsGetWafLogAnalyticsRankingsResponse,
} from "../models";

/** Class containing LogAnalytics operations. */
export class LogAnalyticsImpl implements LogAnalytics {
  private readonly client: CdnManagementClient;

  /**
   * Initialize a new instance of the class LogAnalytics class.
   * @param client Reference to the service client
   */
  constructor(client: CdnManagementClient) {
    this.client = client;
  }

  /**
   * Get log report for AFD profile
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group. which is unique within the resource group.
   * @param metrics Array of LogMetric
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param granularity
   * @param customDomains Array of Get11ItemsItem
   * @param protocols Array of Get12ItemsItem
   * @param options The options parameters.
   */
  getLogAnalyticsMetrics(
    resourceGroupName: string,
    profileName: string,
    metrics: LogMetric[],
    dateTimeBegin: Date,
    dateTimeEnd: Date,
    granularity: LogMetricsGranularity,
    customDomains: string[],
    protocols: string[],
    options?: LogAnalyticsGetLogAnalyticsMetricsOptionalParams,
  ): Promise<LogAnalyticsGetLogAnalyticsMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        metrics,
        dateTimeBegin,
        dateTimeEnd,
        granularity,
        customDomains,
        protocols,
        options,
      },
      getLogAnalyticsMetricsOperationSpec,
    );
  }

  /**
   * Get log analytics ranking report for AFD profile
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group. which is unique within the resource group.
   * @param rankings Array of LogRanking
   * @param metrics Array of LogRankingMetric
   * @param maxRanking
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param options The options parameters.
   */
  getLogAnalyticsRankings(
    resourceGroupName: string,
    profileName: string,
    rankings: LogRanking[],
    metrics: LogRankingMetric[],
    maxRanking: number,
    dateTimeBegin: Date,
    dateTimeEnd: Date,
    options?: LogAnalyticsGetLogAnalyticsRankingsOptionalParams,
  ): Promise<LogAnalyticsGetLogAnalyticsRankingsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        rankings,
        metrics,
        maxRanking,
        dateTimeBegin,
        dateTimeEnd,
        options,
      },
      getLogAnalyticsRankingsOperationSpec,
    );
  }

  /**
   * Get all available location names for AFD log analytics report.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group. which is unique within the resource group.
   * @param options The options parameters.
   */
  getLogAnalyticsLocations(
    resourceGroupName: string,
    profileName: string,
    options?: LogAnalyticsGetLogAnalyticsLocationsOptionalParams,
  ): Promise<LogAnalyticsGetLogAnalyticsLocationsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, options },
      getLogAnalyticsLocationsOperationSpec,
    );
  }

  /**
   * Get all endpoints and custom domains available for AFD log report
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group. which is unique within the resource group.
   * @param options The options parameters.
   */
  getLogAnalyticsResources(
    resourceGroupName: string,
    profileName: string,
    options?: LogAnalyticsGetLogAnalyticsResourcesOptionalParams,
  ): Promise<LogAnalyticsGetLogAnalyticsResourcesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, profileName, options },
      getLogAnalyticsResourcesOperationSpec,
    );
  }

  /**
   * Get Waf related log analytics report for AFD profile.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group. which is unique within the resource group.
   * @param metrics Array of WafMetric
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param granularity
   * @param options The options parameters.
   */
  getWafLogAnalyticsMetrics(
    resourceGroupName: string,
    profileName: string,
    metrics: WafMetric[],
    dateTimeBegin: Date,
    dateTimeEnd: Date,
    granularity: WafGranularity,
    options?: LogAnalyticsGetWafLogAnalyticsMetricsOptionalParams,
  ): Promise<LogAnalyticsGetWafLogAnalyticsMetricsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        metrics,
        dateTimeBegin,
        dateTimeEnd,
        granularity,
        options,
      },
      getWafLogAnalyticsMetricsOperationSpec,
    );
  }

  /**
   * Get WAF log analytics charts for AFD profile
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param profileName Name of the Azure Front Door Standard or Azure Front Door Premium profile which
   *                    is unique within the resource group. which is unique within the resource group.
   * @param metrics Array of WafMetric
   * @param dateTimeBegin
   * @param dateTimeEnd
   * @param maxRanking
   * @param rankings Array of WafRankingType
   * @param options The options parameters.
   */
  getWafLogAnalyticsRankings(
    resourceGroupName: string,
    profileName: string,
    metrics: WafMetric[],
    dateTimeBegin: Date,
    dateTimeEnd: Date,
    maxRanking: number,
    rankings: WafRankingType[],
    options?: LogAnalyticsGetWafLogAnalyticsRankingsOptionalParams,
  ): Promise<LogAnalyticsGetWafLogAnalyticsRankingsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        profileName,
        metrics,
        dateTimeBegin,
        dateTimeEnd,
        maxRanking,
        rankings,
        options,
      },
      getWafLogAnalyticsRankingsOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getLogAnalyticsMetricsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getLogAnalyticsMetrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MetricsResponse,
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.metrics,
    Parameters.dateTimeBegin,
    Parameters.dateTimeEnd,
    Parameters.granularity,
    Parameters.groupBy,
    Parameters.continents,
    Parameters.countryOrRegions,
    Parameters.customDomains,
    Parameters.protocols,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getLogAnalyticsRankingsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getLogAnalyticsRankings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.RankingsResponse,
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.dateTimeBegin,
    Parameters.dateTimeEnd,
    Parameters.rankings,
    Parameters.metrics1,
    Parameters.maxRanking,
    Parameters.customDomains1,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getLogAnalyticsLocationsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getLogAnalyticsLocations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ContinentsResponse,
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getLogAnalyticsResourcesOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getLogAnalyticsResources",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourcesResponse,
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getWafLogAnalyticsMetricsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getWafLogAnalyticsMetrics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WafMetricsResponse,
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.dateTimeBegin,
    Parameters.dateTimeEnd,
    Parameters.metrics2,
    Parameters.granularity1,
    Parameters.actions,
    Parameters.groupBy1,
    Parameters.ruleTypes,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getWafLogAnalyticsRankingsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Cdn/profiles/{profileName}/getWafLogAnalyticsRankings",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.WafRankingsResponse,
    },
    default: {
      bodyMapper: Mappers.AfdErrorResponse,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.dateTimeBegin,
    Parameters.dateTimeEnd,
    Parameters.maxRanking,
    Parameters.metrics2,
    Parameters.actions,
    Parameters.ruleTypes,
    Parameters.rankings1,
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.profileName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
