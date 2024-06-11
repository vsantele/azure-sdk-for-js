/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { AlertRuleIncidents } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  Incident,
  AlertRuleIncidentsListByAlertRuleOptionalParams,
  AlertRuleIncidentsListByAlertRuleResponse,
  AlertRuleIncidentsGetOptionalParams,
  AlertRuleIncidentsGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AlertRuleIncidents operations. */
export class AlertRuleIncidentsImpl implements AlertRuleIncidents {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class AlertRuleIncidents class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Gets a list of incidents associated to an alert rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  public listByAlertRule(
    resourceGroupName: string,
    ruleName: string,
    options?: AlertRuleIncidentsListByAlertRuleOptionalParams,
  ): PagedAsyncIterableIterator<Incident> {
    const iter = this.listByAlertRulePagingAll(
      resourceGroupName,
      ruleName,
      options,
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByAlertRulePagingPage(
          resourceGroupName,
          ruleName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByAlertRulePagingPage(
    resourceGroupName: string,
    ruleName: string,
    options?: AlertRuleIncidentsListByAlertRuleOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<Incident[]> {
    let result: AlertRuleIncidentsListByAlertRuleResponse;
    result = await this._listByAlertRule(resourceGroupName, ruleName, options);
    yield result.value || [];
  }

  private async *listByAlertRulePagingAll(
    resourceGroupName: string,
    ruleName: string,
    options?: AlertRuleIncidentsListByAlertRuleOptionalParams,
  ): AsyncIterableIterator<Incident> {
    for await (const page of this.listByAlertRulePagingPage(
      resourceGroupName,
      ruleName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Gets an incident associated to an alert rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param incidentName The name of the incident to retrieve.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    ruleName: string,
    incidentName: string,
    options?: AlertRuleIncidentsGetOptionalParams,
  ): Promise<AlertRuleIncidentsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, incidentName, options },
      getOperationSpec,
    );
  }

  /**
   * Gets a list of incidents associated to an alert rule
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param ruleName The name of the rule.
   * @param options The options parameters.
   */
  private _listByAlertRule(
    resourceGroupName: string,
    ruleName: string,
    options?: AlertRuleIncidentsListByAlertRuleOptionalParams,
  ): Promise<AlertRuleIncidentsListByAlertRuleResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, ruleName, options },
      listByAlertRuleOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}/incidents/{incidentName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Incident,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName,
    Parameters.incidentName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByAlertRuleOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/microsoft.insights/alertrules/{ruleName}/incidents",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IncidentListResult,
    },
  },
  queryParameters: [Parameters.apiVersion4],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ruleName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
