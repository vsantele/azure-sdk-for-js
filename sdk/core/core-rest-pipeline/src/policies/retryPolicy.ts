// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PipelineRequest, PipelineResponse, SendRequest } from "../interfaces";
import { PipelinePolicy } from "../pipeline";
import { delay } from "../util/helpers";
import { createClientLogger } from "@azure/logger";
import { RetryStrategy } from "../retryStrategies/retryStrategy";
import { RestError } from "../restError";
import { AbortError } from "@azure/abort-controller";
import { AzureLogger } from "@azure/logger";
import { DEFAULT_RETRY_POLICY_COUNT } from "../constants";

const retryPolicyLogger = createClientLogger("core-rest-pipeline retryPolicy");

/**
 * The programmatic identifier of the retryPolicy.
 */
const retryPolicyName = "retryPolicy";

/**
 * Options to the {@link retryPolicy}
 */
export interface RetryPolicyOptions {
  /**
   * Maximum number of retries. If not specified, it will limit to 3 retries.
   */
  maxRetries?: number;
  /**
   * Logger. If it's not provided, a default logger is used.
   */
  logger?: AzureLogger;
}

/**
 * retryPolicy is a generic policy to enable retrying requests when certain conditions are met
 */
export function retryPolicy(
  strategies: RetryStrategy[],
  options: RetryPolicyOptions = { maxRetries: DEFAULT_RETRY_POLICY_COUNT }
): PipelinePolicy {
  const logger = options.logger || retryPolicyLogger;
  return {
    name: retryPolicyName,
    async sendRequest(request: PipelineRequest, next: SendRequest): Promise<PipelineResponse> {
      let response: PipelineResponse | undefined;
      let responseError: RestError | undefined;
      let retryCount = -1;

      // eslint-disable-next-line no-constant-condition
      retryRequest: while (true) {
        retryCount += 1;
        response = undefined;
        responseError = undefined;

        try {
          logger.info(`Retry ${retryCount}: Attempting to send request`, request.requestId);
          response = await next(request);
          logger.info(`Retry ${retryCount}: Received a response from request`, request.requestId);
        } catch (e) {
          logger.error(`Retry ${retryCount}: Received an error from request`, request.requestId);
          responseError = e as RestError;
          if (!e || responseError.name !== "RestError") {
            throw e;
          }
          response = responseError.response;
        }

        if (request.abortSignal?.aborted) {
          logger.error(`Retry ${retryCount}: Request aborted.`);
          const abortError = new AbortError();
          throw abortError;
        }

        if (retryCount >= (options.maxRetries ?? DEFAULT_RETRY_POLICY_COUNT)) {
          logger.info(
            `Retry ${retryCount}: Maximum retries reached. Returning the last received response, or throwing the last received error.`
          );
          if (response !== undefined) {
            return response;
          }
          throw responseError;
        }

        logger.info(`Retry ${retryCount}: Processing ${strategies.length} retry strategies.`);

        strategiesLoop: for (const strategy of strategies) {
          const strategyLogger = strategy.logger || retryPolicyLogger;
          strategyLogger.info(`Retry ${retryCount}: Processing retry strategy ${strategy.name}.`);

          const modifiers = strategy.retry({
            retryCount,
            response,
            responseError,
          });

          if (modifiers.skipStrategy) {
            strategyLogger.info(`Retry ${retryCount}: Skipped.`);
            continue strategiesLoop;
          }

          const { errorToThrow, retryAfterInMs, redirectTo } = modifiers;

          if (errorToThrow) {
            strategyLogger.error(
              `Retry ${retryCount}: Retry strategy ${strategy.name} throws error:`,
              errorToThrow
            );
            throw errorToThrow;
          }

          if (retryAfterInMs) {
            strategyLogger.info(
              `Retry ${retryCount}: Retry strategy ${strategy.name} retries after ${retryAfterInMs}`
            );
            await delay(retryAfterInMs, undefined, { abortSignal: request.abortSignal });
            continue retryRequest;
          }

          if (redirectTo) {
            strategyLogger.info(
              `Retry ${retryCount}: Retry strategy ${strategy.name} redirects to ${redirectTo}`
            );
            request.url = redirectTo;
            continue retryRequest;
          }
        }

        if (response) {
          logger.info(`Returning the last received response.`);
          return response;
        }

        // If all the retries skip and there's no response,
        // we're still in the retry loop, so a new request will be sent
        // until `maxRetries` is reached.
      }
    },
  };
}
