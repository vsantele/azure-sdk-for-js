/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DataTransferJobGetResults,
  DataTransferJobsListByDatabaseAccountOptionalParams,
  CreateJobRequest,
  DataTransferJobsCreateOptionalParams,
  DataTransferJobsCreateResponse,
  DataTransferJobsGetOptionalParams,
  DataTransferJobsGetResponse,
  DataTransferJobsPauseOptionalParams,
  DataTransferJobsPauseResponse,
  DataTransferJobsResumeOptionalParams,
  DataTransferJobsResumeResponse,
  DataTransferJobsCancelOptionalParams,
  DataTransferJobsCancelResponse,
  DataTransferJobsCompleteOptionalParams,
  DataTransferJobsCompleteResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DataTransferJobs. */
export interface DataTransferJobs {
  /**
   * Get a list of Data Transfer jobs.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param options The options parameters.
   */
  listByDatabaseAccount(
    resourceGroupName: string,
    accountName: string,
    options?: DataTransferJobsListByDatabaseAccountOptionalParams,
  ): PagedAsyncIterableIterator<DataTransferJobGetResults>;
  /**
   * Creates a Data Transfer Job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param jobName Name of the Data Transfer Job
   * @param jobCreateParameters Parameters to create Data Transfer Job
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    accountName: string,
    jobName: string,
    jobCreateParameters: CreateJobRequest,
    options?: DataTransferJobsCreateOptionalParams,
  ): Promise<DataTransferJobsCreateResponse>;
  /**
   * Get a Data Transfer Job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param jobName Name of the Data Transfer Job
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    jobName: string,
    options?: DataTransferJobsGetOptionalParams,
  ): Promise<DataTransferJobsGetResponse>;
  /**
   * Pause a Data Transfer Job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param jobName Name of the Data Transfer Job
   * @param options The options parameters.
   */
  pause(
    resourceGroupName: string,
    accountName: string,
    jobName: string,
    options?: DataTransferJobsPauseOptionalParams,
  ): Promise<DataTransferJobsPauseResponse>;
  /**
   * Resumes a Data Transfer Job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param jobName Name of the Data Transfer Job
   * @param options The options parameters.
   */
  resume(
    resourceGroupName: string,
    accountName: string,
    jobName: string,
    options?: DataTransferJobsResumeOptionalParams,
  ): Promise<DataTransferJobsResumeResponse>;
  /**
   * Cancels a Data Transfer Job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param jobName Name of the Data Transfer Job
   * @param options The options parameters.
   */
  cancel(
    resourceGroupName: string,
    accountName: string,
    jobName: string,
    options?: DataTransferJobsCancelOptionalParams,
  ): Promise<DataTransferJobsCancelResponse>;
  /**
   * Completes a Data Transfer Online Job.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param accountName Cosmos DB database account name.
   * @param jobName Name of the Data Transfer Job
   * @param options The options parameters.
   */
  complete(
    resourceGroupName: string,
    accountName: string,
    jobName: string,
    options?: DataTransferJobsCompleteOptionalParams,
  ): Promise<DataTransferJobsCompleteResponse>;
}
