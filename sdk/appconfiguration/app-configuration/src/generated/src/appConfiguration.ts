/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreHttpCompat from "@azure/core-http-compat";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest,
} from "@azure/core-rest-pipeline";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "./lroImpl";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  ApiVersion20231101,
  AppConfigurationOptionalParams,
  GetKeysOptionalParams,
  GetKeysResponse,
  CheckKeysOptionalParams,
  CheckKeysResponse,
  GetKeyValuesOptionalParams,
  GetKeyValuesResponse,
  CheckKeyValuesOptionalParams,
  CheckKeyValuesResponse,
  GetKeyValueOptionalParams,
  GetKeyValueResponse,
  PutKeyValueOptionalParams,
  PutKeyValueResponse,
  DeleteKeyValueOptionalParams,
  DeleteKeyValueResponse,
  CheckKeyValueOptionalParams,
  CheckKeyValueResponse,
  GetSnapshotsOptionalParams,
  GetSnapshotsResponse,
  CheckSnapshotsOptionalParams,
  CheckSnapshotsResponse,
  GetSnapshotOptionalParams,
  GetSnapshotResponse,
  ConfigurationSnapshot,
  CreateSnapshotOptionalParams,
  CreateSnapshotResponse,
  SnapshotUpdateParameters,
  UpdateSnapshotOptionalParams,
  UpdateSnapshotResponse,
  CheckSnapshotOptionalParams,
  CheckSnapshotResponse,
  GetLabelsOptionalParams,
  GetLabelsResponse,
  CheckLabelsOptionalParams,
  CheckLabelsResponse,
  PutLockOptionalParams,
  PutLockResponse,
  DeleteLockOptionalParams,
  DeleteLockResponse,
  GetRevisionsOptionalParams,
  GetRevisionsResponse,
  CheckRevisionsOptionalParams,
  CheckRevisionsResponse,
  GetOperationDetailsOptionalParams,
  GetOperationDetailsResponse,
  GetKeysNextOptionalParams,
  GetKeysNextResponse,
  GetKeyValuesNextOptionalParams,
  GetKeyValuesNextResponse,
  GetSnapshotsNextOptionalParams,
  GetSnapshotsNextResponse,
  GetLabelsNextOptionalParams,
  GetLabelsNextResponse,
  GetRevisionsNextOptionalParams,
  GetRevisionsNextResponse,
} from "./models";

/** @internal */
export class AppConfiguration extends coreHttpCompat.ExtendedServiceClient {
  endpoint: string;
  syncToken?: string;
  apiVersion: ApiVersion20231101;

  /**
   * Initializes a new instance of the AppConfiguration class.
   * @param endpoint The endpoint of the App Configuration instance to send requests to.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    apiVersion: ApiVersion20231101,
    options?: AppConfigurationOptionalParams,
  ) {
    if (endpoint === undefined) {
      throw new Error("'endpoint' cannot be null");
    }
    if (apiVersion === undefined) {
      throw new Error("'apiVersion' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AppConfigurationOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
    };

    const packageDetails = `azsdk-js-app-configuration/1.7.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint: options.endpoint ?? options.baseUri ?? "{endpoint}",
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.endpoint = endpoint;
    this.apiVersion = apiVersion;
    this.addCustomApiVersionPolicy(apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest,
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      },
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  /**
   * Gets a list of keys.
   * @param options The options parameters.
   */
  getKeys(options?: GetKeysOptionalParams): Promise<GetKeysResponse> {
    return this.sendOperationRequest({ options }, getKeysOperationSpec);
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkKeys(options?: CheckKeysOptionalParams): Promise<CheckKeysResponse> {
    return this.sendOperationRequest({ options }, checkKeysOperationSpec);
  }

  /**
   * Gets a list of key-values.
   * @param options The options parameters.
   */
  getKeyValues(
    options?: GetKeyValuesOptionalParams,
  ): Promise<GetKeyValuesResponse> {
    return this.sendOperationRequest({ options }, getKeyValuesOperationSpec);
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkKeyValues(
    options?: CheckKeyValuesOptionalParams,
  ): Promise<CheckKeyValuesResponse> {
    return this.sendOperationRequest({ options }, checkKeyValuesOperationSpec);
  }

  /**
   * Gets a single key-value.
   * @param key The key of the key-value to retrieve.
   * @param options The options parameters.
   */
  getKeyValue(
    key: string,
    options?: GetKeyValueOptionalParams,
  ): Promise<GetKeyValueResponse> {
    return this.sendOperationRequest(
      { key, options },
      getKeyValueOperationSpec,
    );
  }

  /**
   * Creates a key-value.
   * @param key The key of the key-value to create.
   * @param options The options parameters.
   */
  putKeyValue(
    key: string,
    options?: PutKeyValueOptionalParams,
  ): Promise<PutKeyValueResponse> {
    return this.sendOperationRequest(
      { key, options },
      putKeyValueOperationSpec,
    );
  }

  /**
   * Deletes a key-value.
   * @param key The key of the key-value to delete.
   * @param options The options parameters.
   */
  deleteKeyValue(
    key: string,
    options?: DeleteKeyValueOptionalParams,
  ): Promise<DeleteKeyValueResponse> {
    return this.sendOperationRequest(
      { key, options },
      deleteKeyValueOperationSpec,
    );
  }

  /**
   * Requests the headers and status of the given resource.
   * @param key The key of the key-value to retrieve.
   * @param options The options parameters.
   */
  checkKeyValue(
    key: string,
    options?: CheckKeyValueOptionalParams,
  ): Promise<CheckKeyValueResponse> {
    return this.sendOperationRequest(
      { key, options },
      checkKeyValueOperationSpec,
    );
  }

  /**
   * Gets a list of key-value snapshots.
   * @param options The options parameters.
   */
  getSnapshots(
    options?: GetSnapshotsOptionalParams,
  ): Promise<GetSnapshotsResponse> {
    return this.sendOperationRequest({ options }, getSnapshotsOperationSpec);
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkSnapshots(
    options?: CheckSnapshotsOptionalParams,
  ): Promise<CheckSnapshotsResponse> {
    return this.sendOperationRequest({ options }, checkSnapshotsOperationSpec);
  }

  /**
   * Gets a single key-value snapshot.
   * @param name The name of the key-value snapshot to retrieve.
   * @param options The options parameters.
   */
  getSnapshot(
    name: string,
    options?: GetSnapshotOptionalParams,
  ): Promise<GetSnapshotResponse> {
    return this.sendOperationRequest(
      { name, options },
      getSnapshotOperationSpec,
    );
  }

  /**
   * Creates a key-value snapshot.
   * @param name The name of the key-value snapshot to create.
   * @param entity The key-value snapshot to create.
   * @param options The options parameters.
   */
  async beginCreateSnapshot(
    name: string,
    entity: ConfigurationSnapshot,
    options?: CreateSnapshotOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CreateSnapshotResponse>,
      CreateSnapshotResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<CreateSnapshotResponse> => {
      return this.sendOperationRequest(args, spec);
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
      args: { name, entity, options },
      spec: createSnapshotOperationSpec,
    });
    const poller = await createHttpPoller<
      CreateSnapshotResponse,
      OperationState<CreateSnapshotResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a key-value snapshot.
   * @param name The name of the key-value snapshot to create.
   * @param entity The key-value snapshot to create.
   * @param options The options parameters.
   */
  async beginCreateSnapshotAndWait(
    name: string,
    entity: ConfigurationSnapshot,
    options?: CreateSnapshotOptionalParams,
  ): Promise<CreateSnapshotResponse> {
    const poller = await this.beginCreateSnapshot(name, entity, options);
    return poller.pollUntilDone();
  }

  /**
   * Updates the state of a key-value snapshot.
   * @param name The name of the key-value snapshot to update.
   * @param entity The parameters used to update the snapshot.
   * @param options The options parameters.
   */
  updateSnapshot(
    name: string,
    entity: SnapshotUpdateParameters,
    options?: UpdateSnapshotOptionalParams,
  ): Promise<UpdateSnapshotResponse> {
    return this.sendOperationRequest(
      { name, entity, options },
      updateSnapshotOperationSpec,
    );
  }

  /**
   * Requests the headers and status of the given resource.
   * @param name The name of the key-value snapshot to check.
   * @param options The options parameters.
   */
  checkSnapshot(
    name: string,
    options?: CheckSnapshotOptionalParams,
  ): Promise<CheckSnapshotResponse> {
    return this.sendOperationRequest(
      { name, options },
      checkSnapshotOperationSpec,
    );
  }

  /**
   * Gets a list of labels.
   * @param options The options parameters.
   */
  getLabels(options?: GetLabelsOptionalParams): Promise<GetLabelsResponse> {
    return this.sendOperationRequest({ options }, getLabelsOperationSpec);
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkLabels(
    options?: CheckLabelsOptionalParams,
  ): Promise<CheckLabelsResponse> {
    return this.sendOperationRequest({ options }, checkLabelsOperationSpec);
  }

  /**
   * Locks a key-value.
   * @param key The key of the key-value to lock.
   * @param options The options parameters.
   */
  putLock(
    key: string,
    options?: PutLockOptionalParams,
  ): Promise<PutLockResponse> {
    return this.sendOperationRequest({ key, options }, putLockOperationSpec);
  }

  /**
   * Unlocks a key-value.
   * @param key The key of the key-value to unlock.
   * @param options The options parameters.
   */
  deleteLock(
    key: string,
    options?: DeleteLockOptionalParams,
  ): Promise<DeleteLockResponse> {
    return this.sendOperationRequest({ key, options }, deleteLockOperationSpec);
  }

  /**
   * Gets a list of key-value revisions.
   * @param options The options parameters.
   */
  getRevisions(
    options?: GetRevisionsOptionalParams,
  ): Promise<GetRevisionsResponse> {
    return this.sendOperationRequest({ options }, getRevisionsOperationSpec);
  }

  /**
   * Requests the headers and status of the given resource.
   * @param options The options parameters.
   */
  checkRevisions(
    options?: CheckRevisionsOptionalParams,
  ): Promise<CheckRevisionsResponse> {
    return this.sendOperationRequest({ options }, checkRevisionsOperationSpec);
  }

  /**
   * Gets the state of a long running operation.
   * @param snapshot Snapshot identifier for the long running operation.
   * @param options The options parameters.
   */
  getOperationDetails(
    snapshot: string,
    options?: GetOperationDetailsOptionalParams,
  ): Promise<GetOperationDetailsResponse> {
    return this.sendOperationRequest(
      { snapshot, options },
      getOperationDetailsOperationSpec,
    );
  }

  /**
   * GetKeysNext
   * @param nextLink The nextLink from the previous successful call to the GetKeys method.
   * @param options The options parameters.
   */
  getKeysNext(
    nextLink: string,
    options?: GetKeysNextOptionalParams,
  ): Promise<GetKeysNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getKeysNextOperationSpec,
    );
  }

  /**
   * GetKeyValuesNext
   * @param nextLink The nextLink from the previous successful call to the GetKeyValues method.
   * @param options The options parameters.
   */
  getKeyValuesNext(
    nextLink: string,
    options?: GetKeyValuesNextOptionalParams,
  ): Promise<GetKeyValuesNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getKeyValuesNextOperationSpec,
    );
  }

  /**
   * GetSnapshotsNext
   * @param nextLink The nextLink from the previous successful call to the GetSnapshots method.
   * @param options The options parameters.
   */
  getSnapshotsNext(
    nextLink: string,
    options?: GetSnapshotsNextOptionalParams,
  ): Promise<GetSnapshotsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getSnapshotsNextOperationSpec,
    );
  }

  /**
   * GetLabelsNext
   * @param nextLink The nextLink from the previous successful call to the GetLabels method.
   * @param options The options parameters.
   */
  getLabelsNext(
    nextLink: string,
    options?: GetLabelsNextOptionalParams,
  ): Promise<GetLabelsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getLabelsNextOperationSpec,
    );
  }

  /**
   * GetRevisionsNext
   * @param nextLink The nextLink from the previous successful call to the GetRevisions method.
   * @param options The options parameters.
   */
  getRevisionsNext(
    nextLink: string,
    options?: GetRevisionsNextOptionalParams,
  ): Promise<GetRevisionsNextResponse> {
    return this.sendOperationRequest(
      { nextLink, options },
      getRevisionsNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getKeysOperationSpec: coreClient.OperationSpec = {
  path: "/keys",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyListResult,
      headersMapper: Mappers.AppConfigurationGetKeysHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.name, Parameters.apiVersion, Parameters.after],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.accept,
    Parameters.syncToken,
    Parameters.acceptDatetime,
  ],
  serializer,
};
const checkKeysOperationSpec: coreClient.OperationSpec = {
  path: "/keys",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationCheckKeysHeaders,
    },
    default: {},
  },
  queryParameters: [Parameters.name, Parameters.apiVersion, Parameters.after],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer,
};
const getKeyValuesOperationSpec: coreClient.OperationSpec = {
  path: "/kv",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.AppConfigurationGetKeyValuesHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select,
    Parameters.snapshot,
    Parameters.tags,
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  serializer,
};
const checkKeyValuesOperationSpec: coreClient.OperationSpec = {
  path: "/kv",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationCheckKeyValuesHeaders,
    },
    default: {},
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select,
    Parameters.snapshot,
    Parameters.tags,
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  serializer,
};
const getKeyValueOperationSpec: coreClient.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationGetKeyValueHeaders,
    },
    304: {
      headersMapper: Mappers.AppConfigurationGetKeyValueHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.label, Parameters.select],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.accept2,
  ],
  serializer,
};
const putKeyValueOperationSpec: coreClient.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationPutKeyValueHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.entity,
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.accept2,
    Parameters.contentType,
  ],
  mediaType: "json",
  serializer,
};
const deleteKeyValueOperationSpec: coreClient.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationDeleteKeyValueHeaders,
    },
    204: {
      headersMapper: Mappers.AppConfigurationDeleteKeyValueHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.ifMatch,
    Parameters.accept2,
  ],
  serializer,
};
const checkKeyValueOperationSpec: coreClient.OperationSpec = {
  path: "/kv/{key}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationCheckKeyValueHeaders,
    },
    304: {
      headersMapper: Mappers.AppConfigurationCheckKeyValueHeaders,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion, Parameters.label, Parameters.select],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  serializer,
};
const getSnapshotsOperationSpec: coreClient.OperationSpec = {
  path: "/snapshots",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotListResult,
      headersMapper: Mappers.AppConfigurationGetSnapshotsHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [
    Parameters.name,
    Parameters.apiVersion,
    Parameters.after,
    Parameters.select1,
    Parameters.status,
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.accept3],
  serializer,
};
const checkSnapshotsOperationSpec: coreClient.OperationSpec = {
  path: "/snapshots",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationCheckSnapshotsHeaders,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion, Parameters.after],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken],
  serializer,
};
const getSnapshotOperationSpec: coreClient.OperationSpec = {
  path: "/snapshots/{name}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationSnapshot,
      headersMapper: Mappers.AppConfigurationGetSnapshotHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.select1],
  urlParameters: [Parameters.endpoint, Parameters.name1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.accept4,
  ],
  serializer,
};
const createSnapshotOperationSpec: coreClient.OperationSpec = {
  path: "/snapshots/{name}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationSnapshot,
      headersMapper: Mappers.AppConfigurationCreateSnapshotHeaders,
    },
    201: {
      bodyMapper: Mappers.ConfigurationSnapshot,
      headersMapper: Mappers.AppConfigurationCreateSnapshotHeaders,
    },
    202: {
      bodyMapper: Mappers.ConfigurationSnapshot,
      headersMapper: Mappers.AppConfigurationCreateSnapshotHeaders,
    },
    204: {
      bodyMapper: Mappers.ConfigurationSnapshot,
      headersMapper: Mappers.AppConfigurationCreateSnapshotHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.entity1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.name2],
  headerParameters: [
    Parameters.syncToken,
    Parameters.accept4,
    Parameters.contentType1,
  ],
  mediaType: "json",
  serializer,
};
const updateSnapshotOperationSpec: coreClient.OperationSpec = {
  path: "/snapshots/{name}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ConfigurationSnapshot,
      headersMapper: Mappers.AppConfigurationUpdateSnapshotHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  requestBody: Parameters.entity2,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.name1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.accept4,
    Parameters.contentType2,
  ],
  mediaType: "json",
  serializer,
};
const checkSnapshotOperationSpec: coreClient.OperationSpec = {
  path: "/snapshots/{name}",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationCheckSnapshotHeaders,
    },
    default: {},
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.name1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  serializer,
};
const getLabelsOperationSpec: coreClient.OperationSpec = {
  path: "/labels",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LabelListResult,
      headersMapper: Mappers.AppConfigurationGetLabelsHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [
    Parameters.name,
    Parameters.apiVersion,
    Parameters.after,
    Parameters.select2,
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept5,
  ],
  serializer,
};
const checkLabelsOperationSpec: coreClient.OperationSpec = {
  path: "/labels",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationCheckLabelsHeaders,
    },
    default: {},
  },
  queryParameters: [
    Parameters.name,
    Parameters.apiVersion,
    Parameters.after,
    Parameters.select2,
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer,
};
const putLockOperationSpec: coreClient.OperationSpec = {
  path: "/locks/{key}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationPutLockHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.accept2,
  ],
  serializer,
};
const deleteLockOperationSpec: coreClient.OperationSpec = {
  path: "/locks/{key}",
  httpMethod: "DELETE",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValue,
      headersMapper: Mappers.AppConfigurationDeleteLockHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.label],
  urlParameters: [Parameters.endpoint, Parameters.key1],
  headerParameters: [
    Parameters.syncToken,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.accept2,
  ],
  serializer,
};
const getRevisionsOperationSpec: coreClient.OperationSpec = {
  path: "/revisions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.AppConfigurationGetRevisionsHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select,
    Parameters.tags,
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1,
  ],
  serializer,
};
const checkRevisionsOperationSpec: coreClient.OperationSpec = {
  path: "/revisions",
  httpMethod: "HEAD",
  responses: {
    200: {
      headersMapper: Mappers.AppConfigurationCheckRevisionsHeaders,
    },
    default: {},
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.after,
    Parameters.key,
    Parameters.label,
    Parameters.select,
    Parameters.tags,
  ],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.syncToken, Parameters.acceptDatetime],
  serializer,
};
const getOperationDetailsOperationSpec: coreClient.OperationSpec = {
  path: "/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.OperationDetails,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  queryParameters: [Parameters.apiVersion, Parameters.snapshot1],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept6],
  serializer,
};
const getKeysNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyListResult,
      headersMapper: Mappers.AppConfigurationGetKeysNextHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.accept,
    Parameters.syncToken,
    Parameters.acceptDatetime,
  ],
  serializer,
};
const getKeyValuesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.AppConfigurationGetKeyValuesNextHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
  ],
  serializer,
};
const getSnapshotsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SnapshotListResult,
      headersMapper: Mappers.AppConfigurationGetSnapshotsNextHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [Parameters.syncToken, Parameters.accept3],
  serializer,
};
const getLabelsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LabelListResult,
      headersMapper: Mappers.AppConfigurationGetLabelsNextHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept5,
  ],
  serializer,
};
const getRevisionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.KeyValueListResult,
      headersMapper: Mappers.AppConfigurationGetRevisionsNextHeaders,
    },
    default: {
      bodyMapper: Mappers.ErrorModel,
    },
  },
  urlParameters: [Parameters.endpoint, Parameters.nextLink],
  headerParameters: [
    Parameters.syncToken,
    Parameters.acceptDatetime,
    Parameters.accept1,
  ],
  serializer,
};
