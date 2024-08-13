/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ScriptCmdlets } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { AzureVMwareSolutionAPI } from "../azureVMwareSolutionAPI";
import {
  ScriptCmdlet,
  ScriptCmdletsListNextOptionalParams,
  ScriptCmdletsListOptionalParams,
  ScriptCmdletsListResponse,
  ScriptCmdletsGetOptionalParams,
  ScriptCmdletsGetResponse,
  ScriptCmdletsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ScriptCmdlets operations. */
export class ScriptCmdletsImpl implements ScriptCmdlets {
  private readonly client: AzureVMwareSolutionAPI;

  /**
   * Initialize a new instance of the class ScriptCmdlets class.
   * @param client Reference to the service client
   */
  constructor(client: AzureVMwareSolutionAPI) {
    this.client = client;
  }

  /**
   * List ScriptCmdlet resources by ScriptPackage
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptPackageName Name of the script package.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    options?: ScriptCmdletsListOptionalParams,
  ): PagedAsyncIterableIterator<ScriptCmdlet> {
    const iter = this.listPagingAll(
      resourceGroupName,
      privateCloudName,
      scriptPackageName,
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
        return this.listPagingPage(
          resourceGroupName,
          privateCloudName,
          scriptPackageName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    options?: ScriptCmdletsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ScriptCmdlet[]> {
    let result: ScriptCmdletsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        resourceGroupName,
        privateCloudName,
        scriptPackageName,
        options,
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        privateCloudName,
        scriptPackageName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    options?: ScriptCmdletsListOptionalParams,
  ): AsyncIterableIterator<ScriptCmdlet> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      privateCloudName,
      scriptPackageName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List ScriptCmdlet resources by ScriptPackage
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptPackageName Name of the script package.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    options?: ScriptCmdletsListOptionalParams,
  ): Promise<ScriptCmdletsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, privateCloudName, scriptPackageName, options },
      listOperationSpec,
    );
  }

  /**
   * Get a ScriptCmdlet
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptPackageName Name of the script package.
   * @param scriptCmdletName Name of the script cmdlet.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    scriptCmdletName: string,
    options?: ScriptCmdletsGetOptionalParams,
  ): Promise<ScriptCmdletsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        scriptPackageName,
        scriptCmdletName,
        options,
      },
      getOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptPackageName Name of the script package.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    privateCloudName: string,
    scriptPackageName: string,
    nextLink: string,
    options?: ScriptCmdletsListNextOptionalParams,
  ): Promise<ScriptCmdletsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        scriptPackageName,
        nextLink,
        options,
      },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptCmdletListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.scriptPackageName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets/{scriptCmdletName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptCmdlet,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.scriptPackageName,
    Parameters.scriptCmdletName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptCmdletListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.scriptPackageName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
