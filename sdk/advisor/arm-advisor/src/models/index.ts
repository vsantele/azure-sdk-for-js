/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** The metadata entity contract. */
export interface MetadataEntity {
  /** The resource Id of the metadata entity. */
  id?: string;
  /** The type of the metadata entity. */
  type?: string;
  /** The name of the metadata entity. */
  name?: string;
  /** The display name. */
  displayName?: string;
  /** The list of keys on which this entity depends on. */
  dependsOn?: string[];
  /** The list of scenarios applicable to this metadata entity. */
  applicableScenarios?: Scenario[];
  /** The list of supported values. */
  supportedValues?: MetadataSupportedValueDetail[];
}

/** The metadata supported value detail. */
export interface MetadataSupportedValueDetail {
  /** The id. */
  id?: string;
  /** The display name. */
  displayName?: string;
}

/** ARM error response body. */
export interface ARMErrorResponseBody {
  /** Gets or sets the string that describes the error in detail and provides debugging information. */
  message?: string;
  /** Gets or sets the string that can be used to programmatically identify the error. */
  code?: string;
}

export interface ArmErrorResponse {
  /** ARM error response body. */
  error?: ARMErrorResponseBody;
}

/** The list of metadata entities */
export interface MetadataEntityListResult {
  /** The list of metadata entities. */
  value?: MetadataEntity[];
  /** The link used to get the next page of metadata. */
  nextLink?: string;
}

/** The list of Advisor configurations. */
export interface ConfigurationListResult {
  /** The list of configurations. */
  value?: ConfigData[];
  /** The link used to get the next page of configurations. */
  nextLink?: string;
}

/** Advisor Digest configuration entity */
export interface DigestConfig {
  /** Name of digest configuration. Value is case-insensitive and must be unique within a subscription. */
  name?: string;
  /** Action group resource id used by digest. */
  actionGroupResourceId?: string;
  /** Frequency that digest will be triggered, in days. Value must be between 7 and 30 days inclusive. */
  frequency?: number;
  /** Categories to send digest for. If categories are not provided, then digest will be sent for all categories. */
  categories?: Category[];
  /** Language for digest content body. Value must be ISO 639-1 code for one of Azure portal supported languages. Otherwise, it will be converted into one. Default value is English (en). */
  language?: string;
  /** State of digest configuration. */
  state?: DigestConfigState;
}

/** An Azure resource. */
export interface Resource {
  /**
   * The resource ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The type of the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** The list of Advisor recommendations. */
export interface ResourceRecommendationBaseListResult {
  /** The link used to get the next page of recommendations. */
  nextLink?: string;
  /** The list of recommendations. */
  value?: ResourceRecommendationBase[];
}

/** A summary of the recommendation. */
export interface ShortDescription {
  /** The issue or opportunity identified by the recommendation. */
  problem?: string;
  /** The remediation action suggested by the recommendation. */
  solution?: string;
}

/** Recommendation resource metadata */
export interface ResourceMetadata {
  /** Azure resource Id of the assessed resource */
  resourceId?: string;
  /** Source from which recommendation is generated */
  source?: string;
  /** The action to view resource. */
  action?: { [propertyName: string]: Record<string, unknown> };
  /** The singular user friendly name of resource type. eg: virtual machine */
  singular?: string;
  /** The plural user friendly name of resource type. eg: virtual machines */
  plural?: string;
}

/** The list of Advisor operations. */
export interface OperationEntityListResult {
  /** The link used to get the next page of operations. */
  nextLink?: string;
  /** The list of operations. */
  value?: OperationEntity[];
}

/** The operation supported by Advisor. */
export interface OperationEntity {
  /** Operation name: {provider}/{resource}/{operation}. */
  name?: string;
  /** The operation supported by Advisor. */
  display?: OperationDisplayInfo;
}

/** The operation supported by Advisor. */
export interface OperationDisplayInfo {
  /** The description of the operation. */
  description?: string;
  /** The action that users can perform, based on their permission level. */
  operation?: string;
  /** Service provider: Microsoft Advisor. */
  provider?: string;
  /** Resource on which the operation is performed. */
  resource?: string;
}

/** The list of Advisor suppressions. */
export interface SuppressionContractListResult {
  /** The link used to get the next page of suppressions. */
  nextLink?: string;
  /** The list of suppressions. */
  value?: SuppressionContract[];
}

/** The Advisor configuration data structure. */
export interface ConfigData extends Resource {
  /** Exclude the resource from Advisor evaluations. Valid values: False (default) or True. */
  exclude?: boolean;
  /** Minimum percentage threshold for Advisor low CPU utilization evaluation. Valid only for subscriptions. Valid values: 5 (default), 10, 15 or 20. */
  lowCpuThreshold?: CpuThreshold;
  /** Advisor digest configuration. Valid only for subscriptions */
  digests?: DigestConfig[];
}

/** Advisor Recommendation. */
export interface ResourceRecommendationBase extends Resource {
  /** The category of the recommendation. */
  category?: Category;
  /** The business impact of the recommendation. */
  impact?: Impact;
  /** The resource type identified by Advisor. */
  impactedField?: string;
  /** The resource identified by Advisor. */
  impactedValue?: string;
  /** The most recent time that Advisor checked the validity of the recommendation. */
  lastUpdated?: Date;
  /** The recommendation metadata. */
  metadata?: { [propertyName: string]: Record<string, unknown> };
  /** The recommendation-type GUID. */
  recommendationTypeId?: string;
  /** The potential risk of not implementing the recommendation. */
  risk?: Risk;
  /** A summary of the recommendation. */
  shortDescription?: ShortDescription;
  /** The list of snoozed and dismissed rules for the recommendation. */
  suppressionIds?: string[];
  /** Extended properties */
  extendedProperties?: { [propertyName: string]: string };
  /** Metadata of resource that was assessed */
  resourceMetadata?: ResourceMetadata;
  /** The detailed description of recommendation. */
  description?: string;
  /** The label of recommendation. */
  label?: string;
  /** The link to learn more about recommendation and generation logic. */
  learnMoreLink?: string;
  /** The potential benefit of implementing recommendation. */
  potentialBenefits?: string;
  /** The list of recommended actions to implement recommendation. */
  actions?: { [propertyName: string]: Record<string, unknown> }[];
  /** The automated way to apply recommendation. */
  remediation?: { [propertyName: string]: Record<string, unknown> };
  /** The recommendation metadata properties exposed to customer to provide additional information. */
  exposedMetadataProperties?: {
    [propertyName: string]: Record<string, unknown>;
  };
}

/** The details of the snoozed or dismissed rule; for example, the duration, name, and GUID associated with the rule. */
export interface SuppressionContract extends Resource {
  /** The GUID of the suppression. */
  suppressionId?: string;
  /** The duration for which the suppression is valid. */
  ttl?: string;
  /**
   * Gets or sets the expiration time stamp.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly expirationTimeStamp?: Date;
}

/** Defines headers for Recommendations_generate operation. */
export interface RecommendationsGenerateHeaders {
  /** The URL where the status of the asynchronous operation can be checked. */
  location?: string;
  /** The amount of delay to use while the status of the operation is checked. The value is expressed in seconds. */
  retryAfter?: string;
}

/** Known values of {@link Scenario} that the service accepts. */
export enum KnownScenario {
  /** Alerts */
  Alerts = "Alerts",
}

/**
 * Defines values for Scenario. \
 * {@link KnownScenario} can be used interchangeably with Scenario,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Alerts**
 */
export type Scenario = string;

/** Known values of {@link CpuThreshold} that the service accepts. */
export enum KnownCpuThreshold {
  /** Five */
  Five = "5",
  /** Ten */
  Ten = "10",
  /** Fifteen */
  Fifteen = "15",
  /** Twenty */
  Twenty = "20",
}

/**
 * Defines values for CpuThreshold. \
 * {@link KnownCpuThreshold} can be used interchangeably with CpuThreshold,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **5** \
 * **10** \
 * **15** \
 * **20**
 */
export type CpuThreshold = string;

/** Known values of {@link Category} that the service accepts. */
export enum KnownCategory {
  /** HighAvailability */
  HighAvailability = "HighAvailability",
  /** Security */
  Security = "Security",
  /** Performance */
  Performance = "Performance",
  /** Cost */
  Cost = "Cost",
  /** OperationalExcellence */
  OperationalExcellence = "OperationalExcellence",
}

/**
 * Defines values for Category. \
 * {@link KnownCategory} can be used interchangeably with Category,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **HighAvailability** \
 * **Security** \
 * **Performance** \
 * **Cost** \
 * **OperationalExcellence**
 */
export type Category = string;

/** Known values of {@link DigestConfigState} that the service accepts. */
export enum KnownDigestConfigState {
  /** Active */
  Active = "Active",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * Defines values for DigestConfigState. \
 * {@link KnownDigestConfigState} can be used interchangeably with DigestConfigState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Disabled**
 */
export type DigestConfigState = string;

/** Known values of {@link ConfigurationName} that the service accepts. */
export enum KnownConfigurationName {
  /** Default */
  Default = "default",
}

/**
 * Defines values for ConfigurationName. \
 * {@link KnownConfigurationName} can be used interchangeably with ConfigurationName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **default**
 */
export type ConfigurationName = string;

/** Known values of {@link Impact} that the service accepts. */
export enum KnownImpact {
  /** High */
  High = "High",
  /** Medium */
  Medium = "Medium",
  /** Low */
  Low = "Low",
}

/**
 * Defines values for Impact. \
 * {@link KnownImpact} can be used interchangeably with Impact,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **High** \
 * **Medium** \
 * **Low**
 */
export type Impact = string;

/** Known values of {@link Risk} that the service accepts. */
export enum KnownRisk {
  /** Error */
  Error = "Error",
  /** Warning */
  Warning = "Warning",
  /** None */
  None = "None",
}

/**
 * Defines values for Risk. \
 * {@link KnownRisk} can be used interchangeably with Risk,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Error** \
 * **Warning** \
 * **None**
 */
export type Risk = string;

/** Optional parameters. */
export interface RecommendationMetadataGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type RecommendationMetadataGetResponse = MetadataEntity;

/** Optional parameters. */
export interface RecommendationMetadataListOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type RecommendationMetadataListResponse = MetadataEntityListResult;

/** Optional parameters. */
export interface RecommendationMetadataListNextOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type RecommendationMetadataListNextResponse = MetadataEntityListResult;

/** Optional parameters. */
export interface ConfigurationsListBySubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscription operation. */
export type ConfigurationsListBySubscriptionResponse = ConfigurationListResult;

/** Optional parameters. */
export interface ConfigurationsCreateInSubscriptionOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createInSubscription operation. */
export type ConfigurationsCreateInSubscriptionResponse = ConfigData;

/** Optional parameters. */
export interface ConfigurationsListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type ConfigurationsListByResourceGroupResponse = ConfigurationListResult;

/** Optional parameters. */
export interface ConfigurationsCreateInResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createInResourceGroup operation. */
export type ConfigurationsCreateInResourceGroupResponse = ConfigData;

/** Optional parameters. */
export interface ConfigurationsListBySubscriptionNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listBySubscriptionNext operation. */
export type ConfigurationsListBySubscriptionNextResponse = ConfigurationListResult;

/** Optional parameters. */
export interface RecommendationsGenerateOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the generate operation. */
export type RecommendationsGenerateResponse = RecommendationsGenerateHeaders;

/** Optional parameters. */
export interface RecommendationsGetGenerateStatusOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface RecommendationsListOptionalParams extends coreClient.OperationOptions {
  /** The filter to apply to the recommendations.<br>Filter can be applied to properties ['ResourceId', 'ResourceGroup', 'RecommendationTypeGuid', '[Category](#category)'] with operators ['eq', 'and', 'or'].<br>Example:<br>- $filter=Category eq 'Cost' and ResourceGroup eq 'MyResourceGroup' */
  filter?: string;
  /** The number of recommendations per page if a paged version of this API is being used. */
  top?: number;
  /** The page-continuation token to use with a paged version of this API. */
  skipToken?: string;
}

/** Contains response data for the list operation. */
export type RecommendationsListResponse = ResourceRecommendationBaseListResult;

/** Optional parameters. */
export interface RecommendationsGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type RecommendationsGetResponse = ResourceRecommendationBase;

/** Optional parameters. */
export interface RecommendationsListNextOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type RecommendationsListNextResponse = ResourceRecommendationBaseListResult;

/** Optional parameters. */
export interface OperationsListOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationEntityListResult;

/** Optional parameters. */
export interface OperationsListNextOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationEntityListResult;

/** Optional parameters. */
export interface SuppressionsGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type SuppressionsGetResponse = SuppressionContract;

/** Optional parameters. */
export interface SuppressionsCreateOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the create operation. */
export type SuppressionsCreateResponse = SuppressionContract;

/** Optional parameters. */
export interface SuppressionsDeleteOptionalParams extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface SuppressionsListOptionalParams extends coreClient.OperationOptions {
  /** The number of suppressions per page if a paged version of this API is being used. */
  top?: number;
  /** The page-continuation token to use with a paged version of this API. */
  skipToken?: string;
}

/** Contains response data for the list operation. */
export type SuppressionsListResponse = SuppressionContractListResult;

/** Optional parameters. */
export interface SuppressionsListNextOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type SuppressionsListNextResponse = SuppressionContractListResult;

/** Optional parameters. */
export interface AdvisorManagementClientOptionalParams extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
