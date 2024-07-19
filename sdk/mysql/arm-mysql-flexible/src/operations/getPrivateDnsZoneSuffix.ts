/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { GetPrivateDnsZoneSuffix } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MySQLManagementFlexibleServerClient } from "../mySQLManagementFlexibleServerClient";
import {
  GetPrivateDnsZoneSuffixExecuteOptionalParams,
  GetPrivateDnsZoneSuffixExecuteResponse,
} from "../models";

/** Class containing GetPrivateDnsZoneSuffix operations. */
export class GetPrivateDnsZoneSuffixImpl implements GetPrivateDnsZoneSuffix {
  private readonly client: MySQLManagementFlexibleServerClient;

  /**
   * Initialize a new instance of the class GetPrivateDnsZoneSuffix class.
   * @param client Reference to the service client
   */
  constructor(client: MySQLManagementFlexibleServerClient) {
    this.client = client;
  }

  /**
   * Get private DNS zone suffix in the cloud.
   * @param options The options parameters.
   */
  execute(
    options?: GetPrivateDnsZoneSuffixExecuteOptionalParams,
  ): Promise<GetPrivateDnsZoneSuffixExecuteResponse> {
    return this.client.sendOperationRequest({ options }, executeOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const executeOperationSpec: coreClient.OperationSpec = {
  path: "/providers/Microsoft.DBforMySQL/getPrivateDnsZoneSuffix",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GetPrivateDnsZoneSuffixResponse,
    },
    default: {
      bodyMapper: Mappers.ErrorResponse,
    },
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer,
};
