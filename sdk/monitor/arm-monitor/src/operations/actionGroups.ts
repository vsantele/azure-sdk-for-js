/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { ActionGroups } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MonitorClient } from "../monitorClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ActionGroupResource,
  ActionGroupsListBySubscriptionIdOptionalParams,
  ActionGroupsListBySubscriptionIdResponse,
  ActionGroupsListByResourceGroupOptionalParams,
  ActionGroupsListByResourceGroupResponse,
  ActionGroupsCreateOrUpdateOptionalParams,
  ActionGroupsCreateOrUpdateResponse,
  ActionGroupsGetOptionalParams,
  ActionGroupsGetResponse,
  ActionGroupsDeleteOptionalParams,
  ActionGroupPatchBody,
  ActionGroupsUpdateOptionalParams,
  ActionGroupsUpdateResponse,
  NotificationRequestBody,
  ActionGroupsCreateNotificationsAtActionGroupResourceLevelOptionalParams,
  ActionGroupsCreateNotificationsAtActionGroupResourceLevelResponse,
  ActionGroupsGetTestNotificationsAtActionGroupResourceLevelOptionalParams,
  ActionGroupsGetTestNotificationsAtActionGroupResourceLevelResponse,
  EnableRequest,
  ActionGroupsEnableReceiverOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ActionGroups operations. */
export class ActionGroupsImpl implements ActionGroups {
  private readonly client: MonitorClient;

  /**
   * Initialize a new instance of the class ActionGroups class.
   * @param client Reference to the service client
   */
  constructor(client: MonitorClient) {
    this.client = client;
  }

  /**
   * Get a list of all action groups in a subscription.
   * @param options The options parameters.
   */
  public listBySubscriptionId(
    options?: ActionGroupsListBySubscriptionIdOptionalParams,
  ): PagedAsyncIterableIterator<ActionGroupResource> {
    const iter = this.listBySubscriptionIdPagingAll(options);
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
        return this.listBySubscriptionIdPagingPage(options, settings);
      },
    };
  }

  private async *listBySubscriptionIdPagingPage(
    options?: ActionGroupsListBySubscriptionIdOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<ActionGroupResource[]> {
    let result: ActionGroupsListBySubscriptionIdResponse;
    result = await this._listBySubscriptionId(options);
    yield result.value || [];
  }

  private async *listBySubscriptionIdPagingAll(
    options?: ActionGroupsListBySubscriptionIdOptionalParams,
  ): AsyncIterableIterator<ActionGroupResource> {
    for await (const page of this.listBySubscriptionIdPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get a list of all action groups in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ActionGroupsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ActionGroupResource> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ActionGroupsListByResourceGroupOptionalParams,
    _settings?: PageSettings,
  ): AsyncIterableIterator<ActionGroupResource[]> {
    let result: ActionGroupsListByResourceGroupResponse;
    result = await this._listByResourceGroup(resourceGroupName, options);
    yield result.value || [];
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ActionGroupsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<ActionGroupResource> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * Create a new action group or update an existing one.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param actionGroup The action group to create or use for the update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    actionGroupName: string,
    actionGroup: ActionGroupResource,
    options?: ActionGroupsCreateOrUpdateOptionalParams,
  ): Promise<ActionGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, actionGroupName, actionGroup, options },
      createOrUpdateOperationSpec,
    );
  }

  /**
   * Get an action group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    actionGroupName: string,
    options?: ActionGroupsGetOptionalParams,
  ): Promise<ActionGroupsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, actionGroupName, options },
      getOperationSpec,
    );
  }

  /**
   * Delete an action group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    actionGroupName: string,
    options?: ActionGroupsDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, actionGroupName, options },
      deleteOperationSpec,
    );
  }

  /**
   * Updates an existing action group's tags. To update other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param actionGroupPatch Parameters supplied to the operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    actionGroupName: string,
    actionGroupPatch: ActionGroupPatchBody,
    options?: ActionGroupsUpdateOptionalParams,
  ): Promise<ActionGroupsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, actionGroupName, actionGroupPatch, options },
      updateOperationSpec,
    );
  }

  /**
   * Send test notifications to a set of provided receivers
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param notificationRequest The notification request body which includes the contact details
   * @param options The options parameters.
   */
  async beginCreateNotificationsAtActionGroupResourceLevel(
    resourceGroupName: string,
    actionGroupName: string,
    notificationRequest: NotificationRequestBody,
    options?: ActionGroupsCreateNotificationsAtActionGroupResourceLevelOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ActionGroupsCreateNotificationsAtActionGroupResourceLevelResponse>,
      ActionGroupsCreateNotificationsAtActionGroupResourceLevelResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ActionGroupsCreateNotificationsAtActionGroupResourceLevelResponse> => {
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
        actionGroupName,
        notificationRequest,
        options,
      },
      spec: createNotificationsAtActionGroupResourceLevelOperationSpec,
    });
    const poller = await createHttpPoller<
      ActionGroupsCreateNotificationsAtActionGroupResourceLevelResponse,
      OperationState<ActionGroupsCreateNotificationsAtActionGroupResourceLevelResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Send test notifications to a set of provided receivers
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param notificationRequest The notification request body which includes the contact details
   * @param options The options parameters.
   */
  async beginCreateNotificationsAtActionGroupResourceLevelAndWait(
    resourceGroupName: string,
    actionGroupName: string,
    notificationRequest: NotificationRequestBody,
    options?: ActionGroupsCreateNotificationsAtActionGroupResourceLevelOptionalParams,
  ): Promise<ActionGroupsCreateNotificationsAtActionGroupResourceLevelResponse> {
    const poller =
      await this.beginCreateNotificationsAtActionGroupResourceLevel(
        resourceGroupName,
        actionGroupName,
        notificationRequest,
        options,
      );
    return poller.pollUntilDone();
  }

  /**
   * Get the test notifications by the notification id
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param notificationId The notification id
   * @param options The options parameters.
   */
  getTestNotificationsAtActionGroupResourceLevel(
    resourceGroupName: string,
    actionGroupName: string,
    notificationId: string,
    options?: ActionGroupsGetTestNotificationsAtActionGroupResourceLevelOptionalParams,
  ): Promise<ActionGroupsGetTestNotificationsAtActionGroupResourceLevelResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, actionGroupName, notificationId, options },
      getTestNotificationsAtActionGroupResourceLevelOperationSpec,
    );
  }

  /**
   * Get a list of all action groups in a subscription.
   * @param options The options parameters.
   */
  private _listBySubscriptionId(
    options?: ActionGroupsListBySubscriptionIdOptionalParams,
  ): Promise<ActionGroupsListBySubscriptionIdResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionIdOperationSpec,
    );
  }

  /**
   * Get a list of all action groups in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ActionGroupsListByResourceGroupOptionalParams,
  ): Promise<ActionGroupsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * Enable a receiver in an action group. This changes the receiver's status from Disabled to Enabled.
   * This operation is only supported for Email or SMS receivers.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param actionGroupName The name of the action group.
   * @param enableRequest The receiver to re-enable.
   * @param options The options parameters.
   */
  enableReceiver(
    resourceGroupName: string,
    actionGroupName: string,
    enableRequest: EnableRequest,
    options?: ActionGroupsEnableReceiverOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, actionGroupName, enableRequest, options },
      enableReceiverOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups/{actionGroupName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ActionGroupResource,
    },
    201: {
      bodyMapper: Mappers.ActionGroupResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.actionGroup,
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.actionGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups/{actionGroupName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActionGroupResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.actionGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups/{actionGroupName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.actionGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups/{actionGroupName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ActionGroupResource,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.actionGroupPatch,
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.actionGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const createNotificationsAtActionGroupResourceLevelOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups/{actionGroupName}/createNotifications",
    httpMethod: "POST",
    responses: {
      200: {
        bodyMapper: Mappers.TestNotificationDetailsResponse,
      },
      201: {
        bodyMapper: Mappers.TestNotificationDetailsResponse,
      },
      202: {
        bodyMapper: Mappers.TestNotificationDetailsResponse,
      },
      204: {
        bodyMapper: Mappers.TestNotificationDetailsResponse,
      },
      default: {
        bodyMapper: Mappers.ErrorResponse,
      },
    },
    requestBody: Parameters.notificationRequest,
    queryParameters: [Parameters.apiVersion6],
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.actionGroupName,
    ],
    headerParameters: [Parameters.accept, Parameters.contentType],
    mediaType: "json",
    serializer,
  };
const getTestNotificationsAtActionGroupResourceLevelOperationSpec: coreClient.OperationSpec =
  {
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups/{actionGroupName}/notificationStatus/{notificationId}",
    httpMethod: "GET",
    responses: {
      200: {
        bodyMapper: Mappers.TestNotificationDetailsResponse,
      },
      default: {
        bodyMapper: Mappers.ErrorResponse,
      },
    },
    queryParameters: [Parameters.apiVersion6],
    urlParameters: [
      Parameters.$host,
      Parameters.subscriptionId,
      Parameters.resourceGroupName,
      Parameters.actionGroupName,
      Parameters.notificationId,
    ],
    headerParameters: [Parameters.accept],
    serializer,
  };
const listBySubscriptionIdOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Insights/actionGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActionGroupList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ActionGroupList,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const enableReceiverOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/actionGroups/{actionGroupName}/subscribe",
  httpMethod: "POST",
  responses: {
    200: {},
    409: {
      isError: true,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  requestBody: Parameters.enableRequest,
  queryParameters: [Parameters.apiVersion6],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.actionGroupName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
