// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Database, Databases } from "./client/Database";
import { Offer, Offers } from "./client/Offer";
import { ClientContext } from "./ClientContext";
import { parseConnectionString } from "./common";
import { Constants } from "./common/constants";
import { getUserAgent } from "./common/platform";
import type { CosmosClientOptions } from "./CosmosClientOptions";
import type { ClientConfigDiagnostic } from "./CosmosDiagnostics";
import { determineDiagnosticLevel, getDiagnosticLevelFromEnvironment } from "./diagnostics";
import type { DiagnosticNodeInternal } from "./diagnostics/DiagnosticNodeInternal";
import { DiagnosticNodeType } from "./diagnostics/DiagnosticNodeInternal";
import type { DatabaseAccount } from "./documents";
import { defaultConnectionPolicy } from "./documents";
import { GlobalEndpointManager } from "./globalEndpointManager";
import type { RequestOptions } from "./request";
import { ResourceResponse } from "./request";
import { checkURL } from "./utils/checkURL";
import { getEmptyCosmosDiagnostics, withDiagnostics } from "./utils/diagnostics";

/**
 * Provides a client-side logical representation of the Azure Cosmos DB database account.
 * This client is used to configure and execute requests in the Azure Cosmos DB database service.
 * @example Instantiate a client and create a new database
 * ```typescript
 * const client = new CosmosClient({endpoint: "<URL HERE>", key: "<KEY HERE>"});
 * await client.databases.create({id: "<database name here>"});
 * ```
 * @example Instantiate a client with custom Connection Policy
 * ```typescript
 * const client = new CosmosClient({
 *    endpoint: "<URL HERE>",
 *    key: "<KEY HERE>",
 *    connectionPolicy: {
 *     requestTimeout: 10000,
 *    },
 * });
 * ```
 */
export class CosmosClient {
  /**
   * Used for creating new databases, or querying/reading all databases.
   *
   * Use `.database(id)` to read, replace, or delete a specific, existing database by id.
   *
   * @example Create a new database
   * ```typescript
   * const {resource: databaseDefinition, database} = await client.databases.create({id: "<name here>"});
   * ```
   */
  public readonly databases: Databases;
  /**
   * Used for querying & reading all offers.
   *
   * Use `.offer(id)` to read, or replace existing offers.
   */
  public readonly offers: Offers;
  private clientContext: ClientContext;
  private endpointRefresher: NodeJS.Timeout;
  /**
   * Creates a new {@link CosmosClient} object from a connection string. Your database connection string can be found in the Azure Portal
   */
  constructor(connectionString: string);
  /**
   * Creates a new {@link CosmosClient} object. See {@link CosmosClientOptions} for more details on what options you can use.
   * @param options - bag of options; require at least endpoint and auth to be configured
   */
  constructor(options: CosmosClientOptions);
  constructor(optionsOrConnectionString: string | CosmosClientOptions) {
    if (typeof optionsOrConnectionString === "string") {
      optionsOrConnectionString = parseConnectionString(optionsOrConnectionString);
    } else if (optionsOrConnectionString.connectionString) {
      const { endpoint, key } = parseConnectionString(optionsOrConnectionString.connectionString);
      optionsOrConnectionString.endpoint = endpoint;
      optionsOrConnectionString.key = key;
    }
    if (!optionsOrConnectionString.endpoint) {
      throw new Error("Invalid endpoint specified");
    }
    const endpoint = checkURL(optionsOrConnectionString.endpoint);
    if (!endpoint) {
      throw new Error("Invalid endpoint specified");
    }

    const clientConfig: ClientConfigDiagnostic =
      this.initializeClientConfigDiagnostic(optionsOrConnectionString);

    optionsOrConnectionString.connectionPolicy = Object.assign(
      {},
      defaultConnectionPolicy,
      optionsOrConnectionString.connectionPolicy,
    );

    optionsOrConnectionString.defaultHeaders = optionsOrConnectionString.defaultHeaders || {};
    optionsOrConnectionString.defaultHeaders[Constants.HttpHeaders.CacheControl] = "no-cache";
    optionsOrConnectionString.defaultHeaders[Constants.HttpHeaders.Version] =
      Constants.CurrentVersion;
    if (optionsOrConnectionString.consistencyLevel !== undefined) {
      optionsOrConnectionString.defaultHeaders[Constants.HttpHeaders.ConsistencyLevel] =
        optionsOrConnectionString.consistencyLevel;
    }

    optionsOrConnectionString.defaultHeaders[Constants.HttpHeaders.UserAgent] = getUserAgent(
      optionsOrConnectionString.userAgentSuffix,
    );

    const globalEndpointManager = new GlobalEndpointManager(
      optionsOrConnectionString,
      async (diagnosticNode: DiagnosticNodeInternal, opts: RequestOptions) =>
        this.getDatabaseAccountInternal(diagnosticNode, opts),
    );

    this.clientContext = new ClientContext(
      optionsOrConnectionString,
      globalEndpointManager,
      clientConfig,
      determineDiagnosticLevel(
        optionsOrConnectionString.diagnosticLevel,
        getDiagnosticLevelFromEnvironment(),
      ),
    );
    if (
      optionsOrConnectionString.connectionPolicy?.enableEndpointDiscovery &&
      optionsOrConnectionString.connectionPolicy?.enableBackgroundEndpointRefreshing
    ) {
      this.backgroundRefreshEndpointList(
        globalEndpointManager,
        optionsOrConnectionString.connectionPolicy.endpointRefreshRateInMs ||
          defaultConnectionPolicy.endpointRefreshRateInMs,
      );
    }

    this.databases = new Databases(this, this.clientContext);
    this.offers = new Offers(this, this.clientContext);
  }

  private initializeClientConfigDiagnostic(
    optionsOrConnectionString: CosmosClientOptions,
  ): ClientConfigDiagnostic {
    return {
      endpoint: optionsOrConnectionString.endpoint,
      resourceTokensConfigured: optionsOrConnectionString.resourceTokens !== undefined,
      tokenProviderConfigured: optionsOrConnectionString.tokenProvider !== undefined,
      aadCredentialsConfigured: optionsOrConnectionString.aadCredentials !== undefined,
      connectionPolicyConfigured: optionsOrConnectionString.connectionPolicy !== undefined,
      consistencyLevel: optionsOrConnectionString.consistencyLevel,
      defaultHeaders: optionsOrConnectionString.defaultHeaders,
      agentConfigured: optionsOrConnectionString.agent !== undefined,
      userAgentSuffix: optionsOrConnectionString.userAgentSuffix,
      diagnosticLevel: optionsOrConnectionString.diagnosticLevel,
      pluginsConfigured: optionsOrConnectionString.plugins !== undefined,
      sDKVersion: Constants.SDKVersion,
    };
  }

  /**
   * Get information about the current {@link DatabaseAccount} (including which regions are supported, etc.)
   */
  public async getDatabaseAccount(
    options?: RequestOptions,
  ): Promise<ResourceResponse<DatabaseAccount>> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      return this.getDatabaseAccountInternal(diagnosticNode, options);
    }, this.clientContext);
  }

  /**
   * @hidden
   */
  public async getDatabaseAccountInternal(
    diagnosticNode: DiagnosticNodeInternal,
    options?: RequestOptions,
  ): Promise<ResourceResponse<DatabaseAccount>> {
    const response = await this.clientContext.getDatabaseAccount(diagnosticNode, options);
    return new ResourceResponse<DatabaseAccount>(
      response.result,
      response.headers,
      response.code,
      getEmptyCosmosDiagnostics(),
      response.substatus,
    );
  }

  /**
   * Gets the currently used write endpoint url. Useful for troubleshooting purposes.
   *
   * The url may contain a region suffix (e.g. "-eastus") if we're using location specific endpoints.
   */
  public async getWriteEndpoint(): Promise<string> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      return this.clientContext.getWriteEndpoint(diagnosticNode);
    }, this.clientContext);
  }

  /**
   * Gets the currently used read endpoint. Useful for troubleshooting purposes.
   *
   * The url may contain a region suffix (e.g. "-eastus") if we're using location specific endpoints.
   */
  public async getReadEndpoint(): Promise<string> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      return this.clientContext.getReadEndpoint(diagnosticNode);
    }, this.clientContext);
  }

  /**
   * Gets the known write endpoints. Useful for troubleshooting purposes.
   *
   * The urls may contain a region suffix (e.g. "-eastus") if we're using location specific endpoints.
   */
  public getWriteEndpoints(): Promise<readonly string[]> {
    return this.clientContext.getWriteEndpoints();
  }

  /**
   * Gets the currently used read endpoint. Useful for troubleshooting purposes.
   *
   * The url may contain a region suffix (e.g. "-eastus") if we're using location specific endpoints.
   */
  public getReadEndpoints(): Promise<readonly string[]> {
    return this.clientContext.getReadEndpoints();
  }

  /**
   * Used for reading, updating, or deleting a existing database by id or accessing containers belonging to that database.
   *
   * This does not make a network call. Use `.read` to get info about the database after getting the {@link Database} object.
   *
   * @param id - The id of the database.
   * @example Create a new container off of an existing database
   * ```typescript
   * const container = client.database("<database id>").containers.create("<container id>");
   * ```
   *
   * @example Delete an existing database
   * ```typescript
   * await client.database("<id here>").delete();
   * ```
   */
  public database(id: string): Database {
    return new Database(this, id, this.clientContext);
  }

  /**
   * Used for reading, or updating a existing offer by id.
   * @param id - The id of the offer.
   */
  public offer(id: string): Offer {
    return new Offer(this, id, this.clientContext);
  }

  /**
   * Clears background endpoint refresher. Use client.dispose() when destroying the CosmosClient within another process.
   */
  public dispose(): void {
    clearTimeout(this.endpointRefresher);
  }

  private async backgroundRefreshEndpointList(
    globalEndpointManager: GlobalEndpointManager,
    refreshRate: number,
  ) {
    this.endpointRefresher = setInterval(() => {
      try {
        return withDiagnostics(
          async (diagnosticNode: DiagnosticNodeInternal) => {
            return globalEndpointManager.refreshEndpointList(diagnosticNode);
          },
          this.clientContext,
          DiagnosticNodeType.BACKGROUND_REFRESH_THREAD,
        );
      } catch (e: any) {
        console.warn("Failed to refresh endpoints", e);
      }
    }, refreshRate);
    if (this.endpointRefresher.unref && typeof this.endpointRefresher.unref === "function") {
      this.endpointRefresher.unref();
    }
  }

  /**
   * Update the SDK user agent.
   * @param userAgentSuffix - A custom string to append to the default SDK user agent.
   */
  public async updateUserAgent(userAgentSuffix: string): Promise<void> {
    this.clientContext.updateUserAgent(userAgentSuffix);
  }
}
