/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { BaselinesListOptionalParams, MonitorClient } from "@azure/arm-monitor";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to **Lists the metric baseline values for a resource**.
 *
 * @summary **Lists the metric baseline values for a resource**.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2019-03-01/examples/metricBaselines.json
 */
async function getMetricBaselines() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceUri =
    "subscriptions/b368ca2f-e298-46b7-b0ab-012281956afa/resourceGroups/vms/providers/Microsoft.Compute/virtualMachines/vm1";
  const timespan = "2019-03-12T11:00:00.000Z/2019-03-12T12:00:00.000Z";
  const interval = "PT1H";
  const aggregation = "average";
  const sensitivities = "Low,Medium";
  const options: BaselinesListOptionalParams = {
    timespan,
    interval,
    aggregation,
    sensitivities
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.baselines.list(resourceUri, options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

getMetricBaselines().catch(console.error);
