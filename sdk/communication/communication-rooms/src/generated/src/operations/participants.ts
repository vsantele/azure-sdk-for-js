/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { tracingClient } from "../tracing.js";
import { Participants } from "../operationsInterfaces/index.js";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers.js";
import * as Parameters from "../models/parameters.js";
import { RoomsRestClient } from "../roomsRestClient.js";
import {
  ParticipantsListOptionalParams,
  ParticipantsListResponse,
  ParticipantsUpdateOptionalParams,
  ParticipantsUpdateResponse,
  ParticipantsListNextOptionalParams,
  ParticipantsListNextResponse
} from "../models/index.js";

/** Class containing Participants operations. */
export class ParticipantsImpl implements Participants {
  private readonly client: RoomsRestClient;

  /**
   * Initialize a new instance of the class Participants class.
   * @param client Reference to the service client
   */
  constructor(client: RoomsRestClient) {
    this.client = client;
  }

  /**
   * Get participants in a room.
   * @param roomId The id of the room to get participants from.
   * @param options The options parameters.
   */
  async list(
    roomId: string,
    options?: ParticipantsListOptionalParams
  ): Promise<ParticipantsListResponse> {
    return tracingClient.withSpan(
      "RoomsRestClient.list",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { roomId, options },
          listOperationSpec
        ) as Promise<ParticipantsListResponse>;
      }
    );
  }

  /**
   * Update participants in a room.
   * @param roomId The id of the room to update the participants in.
   * @param options The options parameters.
   */
  async update(
    roomId: string,
    options?: ParticipantsUpdateOptionalParams
  ): Promise<ParticipantsUpdateResponse> {
    return tracingClient.withSpan(
      "RoomsRestClient.update",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { roomId, options },
          updateOperationSpec
        ) as Promise<ParticipantsUpdateResponse>;
      }
    );
  }

  /**
   * ListNext
   * @param roomId The id of the room to get participants from.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  async listNext(
    roomId: string,
    nextLink: string,
    options?: ParticipantsListNextOptionalParams
  ): Promise<ParticipantsListNextResponse> {
    return tracingClient.withSpan(
      "RoomsRestClient.listNext",
      options ?? {},
      async (options) => {
        return this.client.sendOperationRequest(
          { roomId, nextLink, options },
          listNextOperationSpec
        ) as Promise<ParticipantsListNextResponse>;
      }
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/rooms/{roomId}/participants",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ParticipantsCollection
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      headersMapper: Mappers.ParticipantsListExceptionHeaders
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.roomId],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path: "/rooms/{roomId}/participants",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: {
        type: { name: "Dictionary", value: { type: { name: "any" } } }
      }
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      headersMapper: Mappers.ParticipantsUpdateExceptionHeaders
    }
  },
  requestBody: {
    parameterPath: { participants: ["options", "participants"] },
    mapper: { ...Mappers.UpdateParticipantsRequest, required: true }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.roomId],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ParticipantsCollection
    },
    default: {
      bodyMapper: Mappers.CommunicationErrorResponse,
      headersMapper: Mappers.ParticipantsListNextExceptionHeaders
    }
  },
  urlParameters: [Parameters.endpoint, Parameters.roomId, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
