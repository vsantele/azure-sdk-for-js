/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  env,
  Recorder,
  RecorderStartOptions,
  delay,
  isPlaybackMode,
} from "@azure-tools/test-recorder";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert } from "chai";
import { Context } from "mocha";
import { HDInsightContainersManagementClient } from "../src/hDInsightContainersManagementClient";


const replaceableVariables: Record<string, string> = {
  AZURE_CLIENT_ID: "azure_client_id",
  AZURE_CLIENT_SECRET: "azure_client_secret",
  AZURE_TENANT_ID: "88888888-8888-8888-8888-888888888888",
  SUBSCRIPTION_ID: "88888888-8888-8888-8888-888888888888"
};

const recorderOptions: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables
};

export const testPollingOptions = {
  updateIntervalInMs: isPlaybackMode() ? 0 : undefined,
};

describe.skip("HDInsightOnAks test", () => {
  let recorder: Recorder;
  let subscriptionId: string;
  let client: HDInsightContainersManagementClient;
  let location: string;
  let resourceGroup: string;
  let resourcename: string;

  beforeEach(async function (this: Context) {
    recorder = new Recorder(this.currentTest);
    await recorder.start(recorderOptions);
    subscriptionId = env.SUBSCRIPTION_ID || '';
    // This is an example of how the environment variables are used
    const credential = createTestCredential();
    client = new HDInsightContainersManagementClient(credential, subscriptionId, recorder.configureClientOptions({}));
    location = "eastus";
    resourceGroup = "myjstest";
    resourcename = "resourcetest";

  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("clusterPools create test", async function () {
    const res = await client.clusterPools.beginCreateOrUpdateAndWait(
      resourceGroup,
      resourcename,
      {
        properties: {
          clusterPoolProfile: { clusterPoolVersion: "1.1" },
          computeProfile: { vmSize: "Standard_F4s_v2" },
        },
        location
      },
      testPollingOptions);
    assert.equal(res.name, resourcename);
  });

  it("clusterPools get test", async function () {
    const res = await client.clusterPools.get(resourceGroup,
      resourcename);
    assert.equal(res.name, resourcename);
  });

  it("clusterPools list test", async function () {
    const resArray = new Array();
    for await (let item of client.clusterPools.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 1);
  });

  it("operation list test", async function () {
    const resArray = new Array();
    for await (let item of client.operations.list()) {
      resArray.push(item);
    }
  });

  it("clusterPools delete test", async function () {
    const resArray = new Array();
    const res = await client.clusterPools.beginDeleteAndWait(resourceGroup, resourcename, testPollingOptions
    )
    for await (let item of client.clusterPools.listByResourceGroup(resourceGroup)) {
      resArray.push(item);
    }
    assert.equal(resArray.length, 0);
  });
})
