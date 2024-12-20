/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  SuppressionContract,
  SuppressionsListOptionalParams,
  SuppressionsGetOptionalParams,
  SuppressionsGetResponse,
  SuppressionsCreateOptionalParams,
  SuppressionsCreateResponse,
  SuppressionsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Suppressions. */
export interface Suppressions {
  /**
   * Retrieves the list of snoozed or dismissed suppressions for a subscription. The snoozed or dismissed
   * attribute of a recommendation is referred to as a suppression.
   * @param options The options parameters.
   */
  list(options?: SuppressionsListOptionalParams): PagedAsyncIterableIterator<SuppressionContract>;
  /**
   * Obtains the details of a suppression.
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to which
   *                    the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param options The options parameters.
   */
  get(
    resourceUri: string,
    recommendationId: string,
    name: string,
    options?: SuppressionsGetOptionalParams,
  ): Promise<SuppressionsGetResponse>;
  /**
   * Enables the snoozed or dismissed attribute of a recommendation. The snoozed or dismissed attribute
   * is referred to as a suppression. Use this API to create or update the snoozed or dismissed status of
   * a recommendation.
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to which
   *                    the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param suppressionContract The snoozed or dismissed attribute; for example, the snooze duration.
   * @param options The options parameters.
   */
  create(
    resourceUri: string,
    recommendationId: string,
    name: string,
    suppressionContract: SuppressionContract,
    options?: SuppressionsCreateOptionalParams,
  ): Promise<SuppressionsCreateResponse>;
  /**
   * Enables the activation of a snoozed or dismissed recommendation. The snoozed or dismissed attribute
   * of a recommendation is referred to as a suppression.
   * @param resourceUri The fully qualified Azure Resource Manager identifier of the resource to which
   *                    the recommendation applies.
   * @param recommendationId The recommendation ID.
   * @param name The name of the suppression.
   * @param options The options parameters.
   */
  delete(
    resourceUri: string,
    recommendationId: string,
    name: string,
    options?: SuppressionsDeleteOptionalParams,
  ): Promise<void>;
}
