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
  GalleryInVMAccessControlProfileVersion,
  GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileOptionalParams,
  GalleryInVMAccessControlProfileVersionsCreateOrUpdateOptionalParams,
  GalleryInVMAccessControlProfileVersionsCreateOrUpdateResponse,
  GalleryInVMAccessControlProfileVersionUpdate,
  GalleryInVMAccessControlProfileVersionsUpdateOptionalParams,
  GalleryInVMAccessControlProfileVersionsUpdateResponse,
  GalleryInVMAccessControlProfileVersionsGetOptionalParams,
  GalleryInVMAccessControlProfileVersionsGetResponse,
  GalleryInVMAccessControlProfileVersionsDeleteOptionalParams,
  GalleryInVMAccessControlProfileVersionsDeleteResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GalleryInVMAccessControlProfileVersions. */
export interface GalleryInVMAccessControlProfileVersions {
  /**
   * List gallery inVMAccessControlProfile versions in a gallery inVMAccessControlProfile
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the inVMAccessControlProfile
   *                    resides.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile from which the
   *                                     inVMAccessControlProfile versions are to be listed.
   * @param options The options parameters.
   */
  listByGalleryInVMAccessControlProfile(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    options?: GalleryInVMAccessControlProfileVersionsListByGalleryInVMAccessControlProfileOptionalParams,
  ): PagedAsyncIterableIterator<GalleryInVMAccessControlProfileVersion>;
  /**
   * Create or update a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the inVMAccessControlProfile
   *                    resides.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile in which the
   *                                     inVMAccessControlProfile version is to be created.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be created. Needs to follow semantic version name pattern: The allowed characters are digit and
   *                                            period. Digits must be within the range of a 32-bit integer. Format:
   *                                            <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryInVMAccessControlProfileVersion Parameters supplied to the create or update gallery
   *                                               inVMAccessControlProfile version operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    galleryInVMAccessControlProfileVersion: GalleryInVMAccessControlProfileVersion,
    options?: GalleryInVMAccessControlProfileVersionsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GalleryInVMAccessControlProfileVersionsCreateOrUpdateResponse>,
      GalleryInVMAccessControlProfileVersionsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the inVMAccessControlProfile
   *                    resides.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile in which the
   *                                     inVMAccessControlProfile version is to be created.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be created. Needs to follow semantic version name pattern: The allowed characters are digit and
   *                                            period. Digits must be within the range of a 32-bit integer. Format:
   *                                            <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryInVMAccessControlProfileVersion Parameters supplied to the create or update gallery
   *                                               inVMAccessControlProfile version operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    galleryInVMAccessControlProfileVersion: GalleryInVMAccessControlProfileVersion,
    options?: GalleryInVMAccessControlProfileVersionsCreateOrUpdateOptionalParams,
  ): Promise<GalleryInVMAccessControlProfileVersionsCreateOrUpdateResponse>;
  /**
   * Update a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the inVMAccessControlProfile
   *                    resides.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile in which the
   *                                     inVMAccessControlProfile version is to be updated.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be updated. Needs to follow semantic version name pattern: The allowed characters are digit and
   *                                            period. Digits must be within the range of a 32-bit integer. Format:
   *                                            <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryInVMAccessControlProfileVersion Parameters supplied to the update gallery
   *                                               inVMAccessControlProfile version operation.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    galleryInVMAccessControlProfileVersion: GalleryInVMAccessControlProfileVersionUpdate,
    options?: GalleryInVMAccessControlProfileVersionsUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GalleryInVMAccessControlProfileVersionsUpdateResponse>,
      GalleryInVMAccessControlProfileVersionsUpdateResponse
    >
  >;
  /**
   * Update a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the inVMAccessControlProfile
   *                    resides.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile in which the
   *                                     inVMAccessControlProfile version is to be updated.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be updated. Needs to follow semantic version name pattern: The allowed characters are digit and
   *                                            period. Digits must be within the range of a 32-bit integer. Format:
   *                                            <MajorVersion>.<MinorVersion>.<Patch>
   * @param galleryInVMAccessControlProfileVersion Parameters supplied to the update gallery
   *                                               inVMAccessControlProfile version operation.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    galleryInVMAccessControlProfileVersion: GalleryInVMAccessControlProfileVersionUpdate,
    options?: GalleryInVMAccessControlProfileVersionsUpdateOptionalParams,
  ): Promise<GalleryInVMAccessControlProfileVersionsUpdateResponse>;
  /**
   * Retrieves information about a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the inVMAccessControlProfile
   *                    resides.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile in which the
   *                                     inVMAccessControlProfile version resides.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be retrieved.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    options?: GalleryInVMAccessControlProfileVersionsGetOptionalParams,
  ): Promise<GalleryInVMAccessControlProfileVersionsGetResponse>;
  /**
   * Delete a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the inVMAccessControlProfile
   *                    resides.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile in which the
   *                                     inVMAccessControlProfile version resides.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be deleted.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    options?: GalleryInVMAccessControlProfileVersionsDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<GalleryInVMAccessControlProfileVersionsDeleteResponse>,
      GalleryInVMAccessControlProfileVersionsDeleteResponse
    >
  >;
  /**
   * Delete a gallery inVMAccessControlProfile version.
   * @param resourceGroupName The name of the resource group.
   * @param galleryName The name of the Shared Image Gallery in which the inVMAccessControlProfile
   *                    resides.
   * @param inVMAccessControlProfileName The name of the gallery inVMAccessControlProfile in which the
   *                                     inVMAccessControlProfile version resides.
   * @param inVMAccessControlProfileVersionName The name of the gallery inVMAccessControlProfile version
   *                                            to be deleted.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    galleryName: string,
    inVMAccessControlProfileName: string,
    inVMAccessControlProfileVersionName: string,
    options?: GalleryInVMAccessControlProfileVersionsDeleteOptionalParams,
  ): Promise<GalleryInVMAccessControlProfileVersionsDeleteResponse>;
}
