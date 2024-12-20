/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  ClusterResource,
  CassandraClustersListBySubscriptionOptionalParams,
  CassandraClustersListByResourceGroupOptionalParams,
  CommandPublicResource,
  CassandraClustersListCommandOptionalParams,
  BackupResource,
  CassandraClustersListBackupsOptionalParams,
  CassandraClustersGetOptionalParams,
  CassandraClustersGetResponse,
  CassandraClustersDeleteOptionalParams,
  CassandraClustersCreateUpdateOptionalParams,
  CassandraClustersCreateUpdateResponse,
  CassandraClustersUpdateOptionalParams,
  CassandraClustersUpdateResponse,
  CommandPostBody,
  CassandraClustersInvokeCommandOptionalParams,
  CassandraClustersInvokeCommandResponse,
  CommandAsyncPostBody,
  CassandraClustersInvokeCommandAsyncOptionalParams,
  CassandraClustersInvokeCommandAsyncResponse,
  CassandraClustersGetCommandAsyncOptionalParams,
  CassandraClustersGetCommandAsyncResponse,
  CassandraClustersGetBackupOptionalParams,
  CassandraClustersGetBackupResponse,
  CassandraClustersDeallocateOptionalParams,
  CassandraClustersStartOptionalParams,
  CassandraClustersStatusOptionalParams,
  CassandraClustersStatusResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CassandraClusters. */
export interface CassandraClusters {
  /**
   * List all managed Cassandra clusters in this subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: CassandraClustersListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<ClusterResource>;
  /**
   * List all managed Cassandra clusters in this resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: CassandraClustersListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ClusterResource>;
  /**
   * List all commands currently running on ring info
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  listCommand(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraClustersListCommandOptionalParams,
  ): PagedAsyncIterableIterator<CommandPublicResource>;
  /**
   * List the backups of this cluster that are available to restore.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  listBackups(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraClustersListBackupsOptionalParams,
  ): PagedAsyncIterableIterator<BackupResource>;
  /**
   * Get the properties of a managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraClustersGetOptionalParams,
  ): Promise<CassandraClustersGetResponse>;
  /**
   * Deletes a managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraClustersDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deletes a managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraClustersDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Create or update a managed Cassandra cluster. When updating, you must specify all writable
   * properties. To update only some properties, use PATCH.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body The properties specifying the desired state of the managed Cassandra cluster.
   * @param options The options parameters.
   */
  beginCreateUpdate(
    resourceGroupName: string,
    clusterName: string,
    body: ClusterResource,
    options?: CassandraClustersCreateUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CassandraClustersCreateUpdateResponse>,
      CassandraClustersCreateUpdateResponse
    >
  >;
  /**
   * Create or update a managed Cassandra cluster. When updating, you must specify all writable
   * properties. To update only some properties, use PATCH.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body The properties specifying the desired state of the managed Cassandra cluster.
   * @param options The options parameters.
   */
  beginCreateUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    body: ClusterResource,
    options?: CassandraClustersCreateUpdateOptionalParams,
  ): Promise<CassandraClustersCreateUpdateResponse>;
  /**
   * Updates some of the properties of a managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body Parameters to provide for specifying the managed Cassandra cluster.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    clusterName: string,
    body: ClusterResource,
    options?: CassandraClustersUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CassandraClustersUpdateResponse>,
      CassandraClustersUpdateResponse
    >
  >;
  /**
   * Updates some of the properties of a managed Cassandra cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body Parameters to provide for specifying the managed Cassandra cluster.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    body: ClusterResource,
    options?: CassandraClustersUpdateOptionalParams,
  ): Promise<CassandraClustersUpdateResponse>;
  /**
   * Invoke a command like nodetool for cassandra maintenance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body Specification which command to run where
   * @param options The options parameters.
   */
  beginInvokeCommand(
    resourceGroupName: string,
    clusterName: string,
    body: CommandPostBody,
    options?: CassandraClustersInvokeCommandOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CassandraClustersInvokeCommandResponse>,
      CassandraClustersInvokeCommandResponse
    >
  >;
  /**
   * Invoke a command like nodetool for cassandra maintenance
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body Specification which command to run where
   * @param options The options parameters.
   */
  beginInvokeCommandAndWait(
    resourceGroupName: string,
    clusterName: string,
    body: CommandPostBody,
    options?: CassandraClustersInvokeCommandOptionalParams,
  ): Promise<CassandraClustersInvokeCommandResponse>;
  /**
   * Invoke a command like nodetool for cassandra maintenance asynchronously
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body Specification which command to run where
   * @param options The options parameters.
   */
  beginInvokeCommandAsync(
    resourceGroupName: string,
    clusterName: string,
    body: CommandAsyncPostBody,
    options?: CassandraClustersInvokeCommandAsyncOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<CassandraClustersInvokeCommandAsyncResponse>,
      CassandraClustersInvokeCommandAsyncResponse
    >
  >;
  /**
   * Invoke a command like nodetool for cassandra maintenance asynchronously
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param body Specification which command to run where
   * @param options The options parameters.
   */
  beginInvokeCommandAsyncAndWait(
    resourceGroupName: string,
    clusterName: string,
    body: CommandAsyncPostBody,
    options?: CassandraClustersInvokeCommandAsyncOptionalParams,
  ): Promise<CassandraClustersInvokeCommandAsyncResponse>;
  /**
   * Get details about a specified command that was run asynchronously.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param commandId Managed Cassandra cluster command id.
   * @param options The options parameters.
   */
  getCommandAsync(
    resourceGroupName: string,
    clusterName: string,
    commandId: string,
    options?: CassandraClustersGetCommandAsyncOptionalParams,
  ): Promise<CassandraClustersGetCommandAsyncResponse>;
  /**
   * Get the properties of an individual backup of this cluster that is available to restore.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param backupId Id of a restorable backup of a Cassandra cluster.
   * @param options The options parameters.
   */
  getBackup(
    resourceGroupName: string,
    clusterName: string,
    backupId: string,
    options?: CassandraClustersGetBackupOptionalParams,
  ): Promise<CassandraClustersGetBackupResponse>;
  /**
   * Deallocate the Managed Cassandra Cluster and Associated Data Centers. Deallocation will deallocate
   * the host virtual machine of this cluster, and reserved the data disk. This won't do anything on an
   * already deallocated cluster. Use Start to restart the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  beginDeallocate(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraClustersDeallocateOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Deallocate the Managed Cassandra Cluster and Associated Data Centers. Deallocation will deallocate
   * the host virtual machine of this cluster, and reserved the data disk. This won't do anything on an
   * already deallocated cluster. Use Start to restart the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  beginDeallocateAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraClustersDeallocateOptionalParams,
  ): Promise<void>;
  /**
   * Start the Managed Cassandra Cluster and Associated Data Centers. Start will start the host virtual
   * machine of this cluster with reserved data disk. This won't do anything on an already running
   * cluster. Use Deallocate to deallocate the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  beginStart(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraClustersStartOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Start the Managed Cassandra Cluster and Associated Data Centers. Start will start the host virtual
   * machine of this cluster with reserved data disk. This won't do anything on an already running
   * cluster. Use Deallocate to deallocate the cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  beginStartAndWait(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraClustersStartOptionalParams,
  ): Promise<void>;
  /**
   * Gets the CPU, memory, and disk usage statistics for each Cassandra node in a cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName Managed Cassandra cluster name.
   * @param options The options parameters.
   */
  status(
    resourceGroupName: string,
    clusterName: string,
    options?: CassandraClustersStatusOptionalParams,
  ): Promise<CassandraClustersStatusResponse>;
}
