// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { StorageClient as StorageClientContext } from "./generated/src/index.js";
import { StorageContextClient } from "./StorageContextClient.js";
import type { PipelineLike } from "./Pipeline.js";
import { getCoreClientOptions, getCredentialFromPipeline } from "./Pipeline.js";
import { escapeURLPath, getURLScheme, iEqual, getAccountNameFromUrl } from "./utils/utils.common.js";
import type { AnonymousCredential } from "./credentials/AnonymousCredential.js";
import type { StorageSharedKeyCredential } from "./credentials/StorageSharedKeyCredential.js";
import type { TokenCredential } from "@azure/core-auth";
import type { OperationTracingOptions } from "@azure/core-tracing";

/**
 * An interface for options common to every remote operation.
 */
export interface CommonOptions {
  /**
   * Options to configure spans created when tracing is enabled.
   */
  tracingOptions?: OperationTracingOptions;
}

/**
 * A StorageClient represents a based URL class for {@link BlobServiceClient}, {@link ContainerClient}
 * and etc.
 */
export abstract class StorageClient {
  /**
   * Encoded URL string value.
   */
  public readonly url: string;
  public readonly accountName: string;
  /**
   * Request policy pipeline.
   *
   * @internal
   */
  protected readonly pipeline: PipelineLike;
  /**
   * Such as AnonymousCredential, StorageSharedKeyCredential or any credential from the `@azure/identity` package to authenticate requests to the service. You can also provide an object that implements the TokenCredential interface. If not specified, AnonymousCredential is used.
   */
  public readonly credential: StorageSharedKeyCredential | AnonymousCredential | TokenCredential;
  /**
   * StorageClient is a reference to protocol layer operations entry, which is
   * generated by AutoRest generator.
   */
  protected readonly storageClientContext: StorageClientContext;
  /**
   */
  protected readonly isHttps: boolean;

  /**
   * Creates an instance of StorageClient.
   * @param url - url to resource
   * @param pipeline - request policy pipeline.
   */
  protected constructor(url: string, pipeline: PipelineLike) {
    // URL should be encoded and only once, protocol layer shouldn't encode URL again
    this.url = escapeURLPath(url);
    this.accountName = getAccountNameFromUrl(url);
    this.pipeline = pipeline;
    this.storageClientContext = new StorageContextClient(this.url, getCoreClientOptions(pipeline));

    this.isHttps = iEqual(getURLScheme(this.url) || "", "https");

    this.credential = getCredentialFromPipeline(pipeline);

    // Override protocol layer's default content-type
    const storageClientContext = this.storageClientContext as any;
    storageClientContext.requestContentType = undefined;
  }
}
