/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  DigitalTwinsListRelationshipsOptionalParams,
  IncomingRelationship,
  DigitalTwinsListIncomingRelationshipsOptionalParams,
  DigitalTwinsGetByIdOptionalParams,
  DigitalTwinsGetByIdResponse,
  DigitalTwinsAddOptionalParams,
  DigitalTwinsAddResponse,
  DigitalTwinsDeleteOptionalParams,
  DigitalTwinsUpdateOptionalParams,
  DigitalTwinsUpdateResponse,
  DigitalTwinsGetRelationshipByIdOptionalParams,
  DigitalTwinsGetRelationshipByIdResponse,
  DigitalTwinsAddRelationshipOptionalParams,
  DigitalTwinsAddRelationshipResponse,
  DigitalTwinsDeleteRelationshipOptionalParams,
  DigitalTwinsUpdateRelationshipOptionalParams,
  DigitalTwinsUpdateRelationshipResponse,
  DigitalTwinsSendTelemetryOptionalParams,
  DigitalTwinsSendComponentTelemetryOptionalParams,
  DigitalTwinsGetComponentOptionalParams,
  DigitalTwinsGetComponentResponse,
  DigitalTwinsUpdateComponentOptionalParams,
  DigitalTwinsUpdateComponentResponse
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DigitalTwins. */
export interface DigitalTwins {
  /**
   * Retrieves the relationships from a digital twin.
   * Status codes:
   * * 200 OK
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id is invalid.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param options The options parameters.
   */
  listRelationships(
    id: string,
    options?: DigitalTwinsListRelationshipsOptionalParams
  ): PagedAsyncIterableIterator<Record<string, unknown>>;
  /**
   * Retrieves all incoming relationship for a digital twin.
   * Status codes:
   * * 200 OK
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id is invalid.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param options The options parameters.
   */
  listIncomingRelationships(
    id: string,
    options?: DigitalTwinsListIncomingRelationshipsOptionalParams
  ): PagedAsyncIterableIterator<IncomingRelationship>;
  /**
   * Retrieves a digital twin.
   * Status codes:
   * * 200 OK
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id is invalid.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param options The options parameters.
   */
  getById(
    id: string,
    options?: DigitalTwinsGetByIdOptionalParams
  ): Promise<DigitalTwinsGetByIdResponse>;
  /**
   * Adds or replaces a digital twin.
   * Status codes:
   * * 200 OK
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id or payload is invalid.
   *   * ModelDecommissioned - The model for the digital twin is decommissioned.
   *   * TwinLimitReached - The maximum number of digital twins allowed has been reached.
   *   * ValidationFailed - The digital twin payload is not valid.
   * * 412 Precondition Failed
   *   * PreconditionFailed - The precondition check (If-Match or If-None-Match) failed.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param twin The digital twin instance being added. If provided, the $dtId property is ignored.
   * @param options The options parameters.
   */
  add(
    id: string,
    twin: Record<string, unknown>,
    options?: DigitalTwinsAddOptionalParams
  ): Promise<DigitalTwinsAddResponse>;
  /**
   * Deletes a digital twin. All relationships referencing the digital twin must already be deleted.
   * Status codes:
   * * 204 No Content
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id is invalid.
   *   * RelationshipsNotDeleted - The digital twin contains relationships.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   * * 412 Precondition Failed
   *   * PreconditionFailed - The precondition check (If-Match or If-None-Match) failed.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param options The options parameters.
   */
  delete(id: string, options?: DigitalTwinsDeleteOptionalParams): Promise<void>;
  /**
   * Updates a digital twin.
   * Status codes:
   * * 204 No Content
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id or payload is invalid.
   *   * JsonPatchInvalid - The JSON Patch provided is invalid.
   *   * ValidationFailed - Applying the patch results in an invalid digital twin.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   * * 412 Precondition Failed
   *   * PreconditionFailed - The precondition check (If-Match or If-None-Match) failed.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param patchDocument An update specification described by JSON Patch. Updates to property values and
   *                      $model elements may happen in the same request. Operations are limited to add, replace and remove.
   * @param options The options parameters.
   */
  update(
    id: string,
    patchDocument: Record<string, unknown>[],
    options?: DigitalTwinsUpdateOptionalParams
  ): Promise<DigitalTwinsUpdateResponse>;
  /**
   * Retrieves a relationship between two digital twins.
   * Status codes:
   * * 200 OK
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id or relationship id is invalid.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   *   * RelationshipNotFound - The relationship was not found.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param relationshipId The id of the relationship. The id is unique within the digital twin and case
   *                       sensitive.
   * @param options The options parameters.
   */
  getRelationshipById(
    id: string,
    relationshipId: string,
    options?: DigitalTwinsGetRelationshipByIdOptionalParams
  ): Promise<DigitalTwinsGetRelationshipByIdResponse>;
  /**
   * Adds a relationship between two digital twins.
   * Status codes:
   * * 200 OK
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id, relationship id, or payload is invalid.
   *   * InvalidRelationship - The relationship is invalid.
   *   * OperationNotAllowed - The relationship cannot connect to the same digital twin.
   *   * ValidationFailed - The relationship content is invalid.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   *   * TargetTwinNotFound - The digital twin target of the relationship was not found.
   * * 412 Precondition Failed
   *   * PreconditionFailed - The precondition check (If-Match or If-None-Match) failed.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param relationshipId The id of the relationship. The id is unique within the digital twin and case
   *                       sensitive.
   * @param relationship The data for the relationship.
   * @param options The options parameters.
   */
  addRelationship(
    id: string,
    relationshipId: string,
    relationship: Record<string, unknown>,
    options?: DigitalTwinsAddRelationshipOptionalParams
  ): Promise<DigitalTwinsAddRelationshipResponse>;
  /**
   * Deletes a relationship between two digital twins.
   * Status codes:
   * * 204 No Content
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id or relationship id is invalid.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   *   * RelationshipNotFound - The relationship was not found.
   * * 412 Precondition Failed
   *   * PreconditionFailed - The precondition check (If-Match or If-None-Match) failed.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param relationshipId The id of the relationship. The id is unique within the digital twin and case
   *                       sensitive.
   * @param options The options parameters.
   */
  deleteRelationship(
    id: string,
    relationshipId: string,
    options?: DigitalTwinsDeleteRelationshipOptionalParams
  ): Promise<void>;
  /**
   * Updates the properties on a relationship between two digital twins.
   * Status codes:
   * * 204 No Content
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id or relationship id is invalid.
   *   * InvalidRelationship - The relationship is invalid.
   *   * JsonPatchInvalid - The JSON Patch provided is invalid.
   *   * ValidationFailed - The relationship content is invalid.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   *   * RelationshipNotFound - The relationship was not found.
   * * 409 Conflict
   *   * RelationshipAlreadyExists - The relationship already exists.
   * * 412 Precondition Failed
   *   * PreconditionFailed - The precondition check (If-Match or If-None-Match) failed.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param relationshipId The id of the relationship. The id is unique within the digital twin and case
   *                       sensitive.
   * @param patchDocument JSON Patch description of the update to the relationship properties.
   * @param options The options parameters.
   */
  updateRelationship(
    id: string,
    relationshipId: string,
    patchDocument: Record<string, unknown>[],
    options?: DigitalTwinsUpdateRelationshipOptionalParams
  ): Promise<DigitalTwinsUpdateRelationshipResponse>;
  /**
   * Sends telemetry on behalf of a digital twin.
   * Status codes:
   * * 204 No Content
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id or message id is invalid.
   *   * ValidationFailed - The telemetry content is invalid.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param messageId A unique message identifier (in the scope of the digital twin id) that is commonly
   *                  used for de-duplicating messages.
   * @param telemetry The telemetry measurements to send from the digital twin.
   * @param options The options parameters.
   */
  sendTelemetry(
    id: string,
    messageId: string,
    telemetry: Record<string, unknown>,
    options?: DigitalTwinsSendTelemetryOptionalParams
  ): Promise<void>;
  /**
   * Sends telemetry on behalf of a component in a digital twin.
   * Status codes:
   * * 204 No Content
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id, message id, or component path is invalid.
   *   * ValidationFailed - The telemetry content is invalid.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   *   * ComponentNotFound - The component path was not found.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param componentPath The name of the DTDL component.
   * @param messageId A unique message identifier (in the scope of the digital twin id) that is commonly
   *                  used for de-duplicating messages.
   * @param telemetry The telemetry measurements to send from the digital twin's component.
   * @param options The options parameters.
   */
  sendComponentTelemetry(
    id: string,
    componentPath: string,
    messageId: string,
    telemetry: Record<string, unknown>,
    options?: DigitalTwinsSendComponentTelemetryOptionalParams
  ): Promise<void>;
  /**
   * Retrieves a component from a digital twin.
   * Status codes:
   * * 200 OK
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id or component path is invalid.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   *   * ComponentNotFound - The component path was not found.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param componentPath The name of the DTDL component.
   * @param options The options parameters.
   */
  getComponent(
    id: string,
    componentPath: string,
    options?: DigitalTwinsGetComponentOptionalParams
  ): Promise<DigitalTwinsGetComponentResponse>;
  /**
   * Updates a component on a digital twin.
   * Status codes:
   * * 204 No Content
   * * 400 Bad Request
   *   * InvalidArgument - The digital twin id, component path, or payload is invalid.
   *   * JsonPatchInvalid - The JSON Patch provided is invalid.
   *   * ValidationFailed - Applying the patch results in an invalid digital twin.
   * * 404 Not Found
   *   * DigitalTwinNotFound - The digital twin was not found.
   * * 412 Precondition Failed
   *   * PreconditionFailed - The precondition check (If-Match or If-None-Match) failed.
   * @param id The id of the digital twin. The id is unique within the service and case sensitive.
   * @param componentPath The name of the DTDL component.
   * @param patchDocument An update specification described by JSON Patch. Updates to property values and
   *                      $model elements may happen in the same request. Operations are limited to add, replace and remove.
   * @param options The options parameters.
   */
  updateComponent(
    id: string,
    componentPath: string,
    patchDocument: Record<string, unknown>[],
    options?: DigitalTwinsUpdateComponentOptionalParams
  ): Promise<DigitalTwinsUpdateComponentResponse>;
}
