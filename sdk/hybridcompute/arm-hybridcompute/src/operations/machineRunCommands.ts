/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { MachineRunCommands } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HybridComputeManagementClient } from "../hybridComputeManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  MachineRunCommand,
  MachineRunCommandsListNextOptionalParams,
  MachineRunCommandsListOptionalParams,
  MachineRunCommandsListResponse,
  MachineRunCommandsCreateOrUpdateOptionalParams,
  MachineRunCommandsCreateOrUpdateResponse,
  MachineRunCommandsDeleteOptionalParams,
  MachineRunCommandsDeleteResponse,
  MachineRunCommandsGetOptionalParams,
  MachineRunCommandsGetResponse,
  MachineRunCommandsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing MachineRunCommands operations. */
export class MachineRunCommandsImpl implements MachineRunCommands {
  private readonly client: HybridComputeManagementClient;

  /**
   * Initialize a new instance of the class MachineRunCommands class.
   * @param client Reference to the service client
   */
  constructor(client: HybridComputeManagementClient) {
    this.client = client;
  }

  /**
   * The operation to get all the run commands of a non-Azure machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    machineName: string,
    options?: MachineRunCommandsListOptionalParams,
  ): PagedAsyncIterableIterator<MachineRunCommand> {
    const iter = this.listPagingAll(resourceGroupName, machineName, options);
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
          machineName,
          options,
          settings,
        );
      },
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    machineName: string,
    options?: MachineRunCommandsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<MachineRunCommand[]> {
    let result: MachineRunCommandsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, machineName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        machineName,
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
    machineName: string,
    options?: MachineRunCommandsListOptionalParams,
  ): AsyncIterableIterator<MachineRunCommand> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      machineName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * The operation to create or update a run command.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param runCommandName The name of the run command.
   * @param runCommandProperties Parameters supplied to the Create Run Command.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    machineName: string,
    runCommandName: string,
    runCommandProperties: MachineRunCommand,
    options?: MachineRunCommandsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MachineRunCommandsCreateOrUpdateResponse>,
      MachineRunCommandsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<MachineRunCommandsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: {
        resourceGroupName,
        machineName,
        runCommandName,
        runCommandProperties,
        options,
      },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      MachineRunCommandsCreateOrUpdateResponse,
      OperationState<MachineRunCommandsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to create or update a run command.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param runCommandName The name of the run command.
   * @param runCommandProperties Parameters supplied to the Create Run Command.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    machineName: string,
    runCommandName: string,
    runCommandProperties: MachineRunCommand,
    options?: MachineRunCommandsCreateOrUpdateOptionalParams,
  ): Promise<MachineRunCommandsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      machineName,
      runCommandName,
      runCommandProperties,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to delete a run command.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param runCommandName The name of the run command.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    machineName: string,
    runCommandName: string,
    options?: MachineRunCommandsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<MachineRunCommandsDeleteResponse>,
      MachineRunCommandsDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<MachineRunCommandsDeleteResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, machineName, runCommandName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<
      MachineRunCommandsDeleteResponse,
      OperationState<MachineRunCommandsDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * The operation to delete a run command.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param runCommandName The name of the run command.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    machineName: string,
    runCommandName: string,
    options?: MachineRunCommandsDeleteOptionalParams,
  ): Promise<MachineRunCommandsDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      machineName,
      runCommandName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * The operation to get a run command.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param runCommandName The name of the run command.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    machineName: string,
    runCommandName: string,
    options?: MachineRunCommandsGetOptionalParams,
  ): Promise<MachineRunCommandsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, machineName, runCommandName, options },
      getOperationSpec,
    );
  }

  /**
   * The operation to get all the run commands of a non-Azure machine.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    machineName: string,
    options?: MachineRunCommandsListOptionalParams,
  ): Promise<MachineRunCommandsListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, machineName, options },
      listOperationSpec,
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param machineName The name of the hybrid machine.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    machineName: string,
    nextLink: string,
    options?: MachineRunCommandsListNextOptionalParams,
  ): Promise<MachineRunCommandsListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, machineName, nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands/{runCommandName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.MachineRunCommand,
    },
    201: {
      bodyMapper: Mappers.MachineRunCommand,
    },
    202: {
      bodyMapper: Mappers.MachineRunCommand,
    },
    204: {
      bodyMapper: Mappers.MachineRunCommand,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.runCommandProperties,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName1,
    Parameters.runCommandName,
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands/{runCommandName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.MachineRunCommandsDeleteHeaders,
    },
    201: {
      headersMapper: Mappers.MachineRunCommandsDeleteHeaders,
    },
    202: {
      headersMapper: Mappers.MachineRunCommandsDeleteHeaders,
    },
    204: {
      headersMapper: Mappers.MachineRunCommandsDeleteHeaders,
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
    Parameters.machineName1,
    Parameters.runCommandName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands/{runCommandName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineRunCommand,
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
    Parameters.machineName1,
    Parameters.runCommandName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HybridCompute/machines/{machineName}/runCommands",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineRunCommandsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.expand1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.machineName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.MachineRunCommandsListResult,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.machineName1,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
