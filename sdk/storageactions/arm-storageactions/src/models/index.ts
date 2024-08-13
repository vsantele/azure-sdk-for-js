/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface OperationListResult {
  /**
   * List of operations supported by the resource provider
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: Operation[];
  /**
   * URL to get the next set of operation list results (if there are any).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /**
   * The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for ARM/control-plane operations.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /**
   * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly origin?: Origin;
  /**
   * Enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionType?: ActionType;
}

/** Localized display information for this particular operation. */
export interface OperationDisplay {
  /**
   * The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provider?: string;
  /**
   * The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resource?: string;
  /**
   * The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly operation?: string;
  /**
   * The short, localized friendly description of the operation; suitable for tool tips and detailed views.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. (This also follows the OData error response format.). */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * The error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * The error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ErrorDetail[];
  /**
   * The error additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /**
   * The additional info type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The additional info.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly info?: Record<string, unknown>;
}

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentity {
  /**
   * The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). */
  type: ManagedServiceIdentityType;
  /** The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. */
  userAssignedIdentities?: {
    [propertyName: string]: UserAssignedIdentity | null;
  };
}

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /**
   * The principal ID of the assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The client ID of the assigned identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly clientId?: string;
}

/** Properties of the storage task. */
export interface StorageTaskProperties {
  /**
   * Storage task version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly taskVersion?: number;
  /** Storage Task is enabled when set to true and disabled when set to false */
  enabled: boolean;
  /** Text that describes the purpose of the storage task */
  description: string;
  /** The storage task action that is executed */
  action: StorageTaskAction;
  /**
   * Represents the provisioning state of the storage task.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * The creation date and time of the storage task in UTC.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly creationTimeInUtc?: Date;
}

/** The storage task action represents conditional statements and operations to be performed on target objects. */
export interface StorageTaskAction {
  /** The if block of storage task operation */
  if: IfCondition;
  /** The else block of storage task operation */
  else?: ElseCondition;
}

/** The if block of storage task operation */
export interface IfCondition {
  /** The condition predicate which is composed of object properties, eg: blob and container properties. */
  condition: string;
  /** List of operations to execute when the condition predicate satisfies. */
  operations: StorageTaskOperation[];
}

/** Represents an operation to be performed on the object */
export interface StorageTaskOperation {
  /** The operation to be performed on the object. */
  name: StorageTaskOperationName;
  /** Key-value parameters for the operation. */
  parameters?: { [propertyName: string]: string };
  /** Action to be taken when the operation is successful for a object. */
  onSuccess?: "continue";
  /** Action to be taken when the operation fails for a object. */
  onFailure?: "break";
}

/** The else block of storage task operation */
export interface ElseCondition {
  /** List of operations to execute in the else block */
  operations: StorageTaskOperation[];
}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /**
   * Fully qualified resource ID for the resource. E.g. "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Azure Resource Manager metadata containing createdBy and modifiedBy information.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly systemData?: SystemData;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Parameters of the storage task update request */
export interface StorageTaskUpdateParameters {
  /** The identity of the resource. */
  identity?: ManagedServiceIdentity;
  /** Gets or sets a list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key no greater in length than 128 characters and a value no greater in length than 256 characters. */
  tags?: { [propertyName: string]: string };
  /** Properties of the storage task. */
  properties?: StorageTaskProperties;
}

/** The response from the List Storage Tasks operation. */
export interface StorageTasksListResult {
  /**
   * Gets the list of storage tasks and their properties.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: StorageTask[];
  /**
   * Request URL that can be used to query next page of storage tasks. Returned when total number of requested storage tasks exceed maximum page size.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** The response from the List Storage Tasks operation. */
export interface StorageTaskAssignmentsListResult {
  /**
   * Gets the list of storage task assignment Ids.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: StorageTaskAssignment[];
  /**
   * Request URL that can be used to query next page of storage task assignment Ids. Returned when total number of requested storage task assignment Ids exceed maximum page size.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Fetch the Storage task assignment ARM ids. */
export interface StorageTaskAssignment {
  /**
   * ARM Id of the storage task assignments, associated with the storage tasks.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
}

/** Fetch Storage Tasks Run Summary. */
export interface StorageTaskReportSummary {
  /**
   * Gets storage tasks run result summary.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: StorageTaskReportInstance[];
  /**
   * Request URL that can be used to query next page of storage task run results summary. Returned when the number of run instances and summary reports exceed maximum page size.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Storage task execution report for a run instance. */
export interface StorageTaskReportProperties {
  /**
   * Represents the Storage Task Assignment Id associated with the storage task that provided an execution context.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly taskAssignmentId?: string;
  /**
   * Represents the Storage Account Id where the storage task definition was applied and executed.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly storageAccountId?: string;
  /**
   * Start time of the run instance. Filter options such as startTime gt '2023-06-26T20:51:24.4494016Z' and other comparison operators can be used as described for DateTime properties in https://learn.microsoft.com/en-us/rest/api/storageservices/querying-tables-and-entities#supported-comparison-operators
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startTime?: string;
  /**
   * End time of the run instance. Filter options such as startTime gt '2023-06-26T20:51:24.4494016Z' and other comparison operators can be used as described for DateTime properties in https://learn.microsoft.com/en-us/rest/api/storageservices/querying-tables-and-entities#supported-comparison-operators
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly finishTime?: string;
  /**
   * Total number of objects that meet the condition as defined in the storage task assignment execution context. Filter options such as objectsTargetedCount gt 50 and other comparison operators can be used as described for Numerical properties in https://learn.microsoft.com/en-us/rest/api/storageservices/querying-tables-and-entities#supported-comparison-operators
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly objectsTargetedCount?: string;
  /**
   * Total number of objects that meet the storage tasks condition and were operated upon. Filter options such as objectsOperatedOnCount ge 100 and other comparison operators can be used as described for Numerical properties in https://learn.microsoft.com/en-us/rest/api/storageservices/querying-tables-and-entities#supported-comparison-operators
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly objectsOperatedOnCount?: string;
  /**
   * Total number of objects where task operation failed when was attempted. Filter options such as objectFailedCount eq 0 and other comparison operators can be used as described for Numerical properties in https://learn.microsoft.com/en-us/rest/api/storageservices/querying-tables-and-entities#supported-comparison-operators
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly objectFailedCount?: string;
  /**
   * Total number of objects where task operation succeeded when was attempted.Filter options such as objectsSucceededCount gt 150 and other comparison operators can be used as described for Numerical properties in https://learn.microsoft.com/en-us/rest/api/storageservices/querying-tables-and-entities#supported-comparison-operators
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly objectsSucceededCount?: string;
  /**
   * Well known Azure Storage error code that represents the error encountered during execution of the run instance.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runStatusError?: string;
  /**
   * Represents the status of the execution.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runStatusEnum?: RunStatusEnum;
  /**
   * Full path to the verbose report stored in the reporting container as specified in the assignment execution context for the storage account.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly summaryReportPath?: string;
  /**
   * Storage Task Arm Id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly taskId?: string;
  /**
   * Storage Task Version
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly taskVersion?: string;
  /**
   * Represents the overall result of the execution for the run instance
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runResult?: RunResult;
}

/** Storage Task Preview Action. */
export interface StorageTaskPreviewAction {
  /** Properties of the storage task preview. */
  properties: StorageTaskPreviewActionProperties;
}

/** Storage task preview action properties. */
export interface StorageTaskPreviewActionProperties {
  /** Preview action container properties to be tested for a match with the provided condition. */
  container: StorageTaskPreviewContainerProperties;
  /** Preview action container properties to be tested for a match with the provided condition. */
  blobs: StorageTaskPreviewBlobProperties[];
  /** Preview action container properties to be tested for a match with the provided condition. */
  action: StorageTaskPreviewActionCondition;
}

/** Storage task preview container properties */
export interface StorageTaskPreviewContainerProperties {
  /** property for the container name. */
  name?: string;
  /** metadata key value pairs to be tested for a match against the provided condition. */
  metadata?: StorageTaskPreviewKeyValueProperties[];
}

/** Storage task preview object key value pair properties. */
export interface StorageTaskPreviewKeyValueProperties {
  /** Represents the key property of the pair. */
  key?: string;
  /** Represents the value property of the pair. */
  value?: string;
}

/** Storage task preview container properties */
export interface StorageTaskPreviewBlobProperties {
  /** property for the container name. */
  name?: string;
  /** properties key value pairs to be tested for a match against the provided condition. */
  properties?: StorageTaskPreviewKeyValueProperties[];
  /** metadata key value pairs to be tested for a match against the provided condition. */
  metadata?: StorageTaskPreviewKeyValueProperties[];
  /** tags key value pairs to be tested for a match against the provided condition. */
  tags?: StorageTaskPreviewKeyValueProperties[];
  /**
   * Represents the condition block name that matched blob properties.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly matchedBlock?: MatchedBlockName;
}

/** Represents the storage task conditions to be tested for a match with container and blob properties. */
export interface StorageTaskPreviewActionCondition {
  /** The condition to be tested for a match with container and blob properties. */
  if: StorageTaskPreviewActionIfCondition;
  /** Specify whether the else block is present in the condition. */
  elseBlockExists: boolean;
}

/** Represents storage task preview action condition. */
export interface StorageTaskPreviewActionIfCondition {
  /** Storage task condition to bes tested for a match. */
  condition?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: { [propertyName: string]: string };
  /** The geo-location where the resource lives */
  location: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** Represents Storage Task. */
export interface StorageTask extends TrackedResource {
  /** The managed service identity of the resource. */
  identity?: ManagedServiceIdentity;
  /** Properties of the storage task. */
  properties?: StorageTaskProperties;
}

/** Storage Tasks run report instance */
export interface StorageTaskReportInstance extends ProxyResource {
  /** Storage task execution report for a run instance. */
  properties?: StorageTaskReportProperties;
}

/** Defines headers for StorageTasks_create operation. */
export interface StorageTasksCreateHeaders {
  location?: string;
}

/** Defines headers for StorageTasks_delete operation. */
export interface StorageTasksDeleteHeaders {
  location?: string;
}

/** Defines headers for StorageTasks_update operation. */
export interface StorageTasksUpdateHeaders {
  location?: string;
}

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** User */
  User = "user",
  /** System */
  System = "system",
  /** UserSystem */
  UserSystem = "user,system",
}

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal",
}

/**
 * Defines values for ActionType. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Known values of {@link ManagedServiceIdentityType} that the service accepts. */
export enum KnownManagedServiceIdentityType {
  /** None */
  None = "None",
  /** SystemAssigned */
  SystemAssigned = "SystemAssigned",
  /** UserAssigned */
  UserAssigned = "UserAssigned",
  /** SystemAssignedUserAssigned */
  SystemAssignedUserAssigned = "SystemAssigned,UserAssigned",
}

/**
 * Defines values for ManagedServiceIdentityType. \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned,UserAssigned**
 */
export type ManagedServiceIdentityType = string;

/** Known values of {@link StorageTaskOperationName} that the service accepts. */
export enum KnownStorageTaskOperationName {
  /** SetBlobTier */
  SetBlobTier = "SetBlobTier",
  /** SetBlobTags */
  SetBlobTags = "SetBlobTags",
  /** SetBlobImmutabilityPolicy */
  SetBlobImmutabilityPolicy = "SetBlobImmutabilityPolicy",
  /** SetBlobLegalHold */
  SetBlobLegalHold = "SetBlobLegalHold",
  /** SetBlobExpiry */
  SetBlobExpiry = "SetBlobExpiry",
  /** DeleteBlob */
  DeleteBlob = "DeleteBlob",
  /** UndeleteBlob */
  UndeleteBlob = "UndeleteBlob",
}

/**
 * Defines values for StorageTaskOperationName. \
 * {@link KnownStorageTaskOperationName} can be used interchangeably with StorageTaskOperationName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SetBlobTier** \
 * **SetBlobTags** \
 * **SetBlobImmutabilityPolicy** \
 * **SetBlobLegalHold** \
 * **SetBlobExpiry** \
 * **DeleteBlob** \
 * **UndeleteBlob**
 */
export type StorageTaskOperationName = string;

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key",
}

/**
 * Defines values for CreatedByType. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** Known values of {@link RunStatusEnum} that the service accepts. */
export enum KnownRunStatusEnum {
  /** InProgress */
  InProgress = "InProgress",
  /** Finished */
  Finished = "Finished",
}

/**
 * Defines values for RunStatusEnum. \
 * {@link KnownRunStatusEnum} can be used interchangeably with RunStatusEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **InProgress** \
 * **Finished**
 */
export type RunStatusEnum = string;

/** Known values of {@link RunResult} that the service accepts. */
export enum KnownRunResult {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
}

/**
 * Defines values for RunResult. \
 * {@link KnownRunResult} can be used interchangeably with RunResult,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed**
 */
export type RunResult = string;

/** Known values of {@link MatchedBlockName} that the service accepts. */
export enum KnownMatchedBlockName {
  /** If */
  If = "If",
  /** Else */
  Else = "Else",
  /** None */
  None = "None",
}

/**
 * Defines values for MatchedBlockName. \
 * {@link KnownMatchedBlockName} can be used interchangeably with MatchedBlockName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **If** \
 * **Else** \
 * **None**
 */
export type MatchedBlockName = string;
/** Defines values for ProvisioningState. */
export type ProvisioningState =
  | "ValidateSubscriptionQuotaBegin"
  | "ValidateSubscriptionQuotaEnd"
  | "Creating"
  | "Succeeded"
  | "Deleting"
  | "Canceled"
  | "Failed";

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export interface StorageTasksCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type StorageTasksCreateResponse = StorageTask;

/** Optional parameters. */
export interface StorageTasksDeleteOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the delete operation. */
export type StorageTasksDeleteResponse = StorageTasksDeleteHeaders;

/** Optional parameters. */
export interface StorageTasksGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type StorageTasksGetResponse = StorageTask;

/** Optional parameters. */
export interface StorageTasksUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type StorageTasksUpdateResponse = StorageTask;

/** Optional parameters. */
export interface StorageTasksListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type StorageTasksListBySubscriptionResponse = StorageTasksListResult;

/** Optional parameters. */
export interface StorageTasksListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type StorageTasksListByResourceGroupResponse = StorageTasksListResult;

/** Optional parameters. */
export interface StorageTasksPreviewActionsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the previewActions operation. */
export type StorageTasksPreviewActionsResponse = StorageTaskPreviewAction;

/** Optional parameters. */
export interface StorageTasksListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type StorageTasksListBySubscriptionNextResponse = StorageTasksListResult;

/** Optional parameters. */
export interface StorageTasksListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type StorageTasksListByResourceGroupNextResponse =
  StorageTasksListResult;

/** Optional parameters. */
export interface StorageTaskAssignmentListOptionalParams
  extends coreClient.OperationOptions {
  /** Optional, specifies the maximum number of storage task assignment Ids to be included in the list response. */
  maxpagesize?: string;
}

/** Contains response data for the list operation. */
export type StorageTaskAssignmentListResponse =
  StorageTaskAssignmentsListResult;

/** Optional parameters. */
export interface StorageTaskAssignmentListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type StorageTaskAssignmentListNextResponse =
  StorageTaskAssignmentsListResult;

/** Optional parameters. */
export interface StorageTasksReportListOptionalParams
  extends coreClient.OperationOptions {
  /** Optional, specifies the maximum number of storage task assignment Ids to be included in the list response. */
  maxpagesize?: string;
  /** Optional. When specified, it can be used to query using reporting properties. */
  filter?: string;
}

/** Contains response data for the list operation. */
export type StorageTasksReportListResponse = StorageTaskReportSummary;

/** Optional parameters. */
export interface StorageTasksReportListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type StorageTasksReportListNextResponse = StorageTaskReportSummary;

/** Optional parameters. */
export interface StorageActionsManagementClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
