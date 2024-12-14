// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { OperationOptions, RequestParameters } from "@azure-rest/core-client";
import type { AbortSignalLike } from "@azure/abort-controller";
import type { ThreadRunOutput } from "../customization/outputModels.js";
import type { AgentEventMessageStream } from "./streamingModels.js";
import type { AgentThreadCreationOptions, CreateAndRunThreadOptions, CreateRunOptions, UpdateAgentThreadOptions } from "../customization/models.js";

/**
 * Optional request parameters support passing headers, abort signal, etc.
 */
export type OptionalRequestParameters = Pick<RequestParameters, "headers" | "timeout" | "abortSignal" | "tracingOptions">

/**
 * Request options for list requests.
 */
export interface ListQueryParameters {
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.
   */
  limit?: number;

  /**
   * Sort order by the created_at timestamp of the objects. asc for ascending order and desc for descending order.
   */
  order?: "asc" | "desc";

  /**
   * A cursor for use in pagination. after is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.
   */
  after?: string;

  /**
   * A cursor for use in pagination. before is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.
   */
  before?: string;
}

/**
 * Options for configuring polling behavior.
 */
export interface PollingOptions {
  /**
   * The interval, in milliseconds, to wait between polling attempts. If not specified, a default interval of 1000ms will be used.
   */
  sleepIntervalInMs?: number;

  /**
   * An AbortSignalLike object (as defined by @azure/abort-controller) that can be used to cancel the polling operation.
   */
  abortSignal?: AbortSignalLike;
}

/**
 * Agent run response with support to stream.
 */
export type AgentRunResponse = PromiseLike<ThreadRunOutput> & {
  /**
   * Function to start streaming the agent event messages.
   * @returns A promise that resolves to an AgentEventMessageStream.
   */
  stream: () => Promise<AgentEventMessageStream>;
};

/**
 * Optional parameters for creating and running a thread, excluding the assistantId.
 */
export type CreateRunOptionalParams = Omit<CreateRunOptions & OperationOptions, "assistantId"> & OperationOptions;

/**
 * Optional parameters for creating and running a thread, excluding the assistantId.
 */
export type CreateAndRunThreadOptionalParams = Omit<CreateAndRunThreadOptions, "assistantId"> & OperationOptions;

/**
 * Optional parameters for listing run queries.
 */
export interface ListRunQueryOptionalParams extends ListQueryParameters, OperationOptions { }

/**
 * Optional parameters for getting a run.
 */
export interface GetRunOptionalParams extends OperationOptions { }

/**
 * Optional parameters for canceling a run.
 */
export interface CancelRunOptionalParams extends OperationOptions { }

/**
 * Optional parameters for submitting tool outputs to a run.
 */
export interface SubmitToolOutputsToRunOptionalParams extends OperationOptions {
  /**
   * Whether to stream the tool outputs.
   */
  stream?: boolean;
}

/**
 * Optional parameters for updating a run.
 */
export interface UpdateRunOptionalParams extends OperationOptions {
  /**
   * Metadata to update in the run.
   */
  metadata?: Record<string, string> | null;
}

/**
 * Optional parameters for creating an agent thread.
 */
export interface CreateAgentThreadOptionalParams extends AgentThreadCreationOptions, OperationOptions { }

/**
 * Optional parameters for getting an agent thread.
 */
export interface GetAgentThreadOptionalParams extends OperationOptions { }

/**
 * Optional parameters for updating an agent thread.
 */
export interface UpdateAgentThreadOptionalParams extends UpdateAgentThreadOptions, OperationOptions { }

/**
 * Optional parameters for deleting an agent thread.
 */
export interface DeleteAgentThreadOptionalParams extends OperationOptions { }

/**
 * Converts ListQueryParameters to a record of query parameters.
 * @param options - The list query parameters to convert.
 * @returns A record of query parameters.
 */
export function convertToListQueryParameters(options: ListQueryParameters): Record<string, string> {
  const queryParameters: Record<string, string> = {};
  if (options.limit) {
    queryParameters.limit = options.limit.toString();
  }
  if (options.order) {
    queryParameters.order = options.order;
  }
  if (options.after) {
    queryParameters.after = options.after;
  }
  if (options.before) {
    queryParameters.before = options.before;
  }
  return queryParameters;
}
