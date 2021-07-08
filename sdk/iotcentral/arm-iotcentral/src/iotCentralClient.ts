/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { IotCentralClientContext } from "./iotCentralClientContext";


class IotCentralClient extends IotCentralClientContext {
  // Operation groups
  apps: operations.Apps;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the IotCentralClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The subscription identifier.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.IotCentralClientOptions) {
    super(credentials, subscriptionId, options);
    this.apps = new operations.Apps(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  IotCentralClient,
  IotCentralClientContext,
  Models as IotCentralModels,
  Mappers as IotCentralMappers
};
export * from "./operations";
