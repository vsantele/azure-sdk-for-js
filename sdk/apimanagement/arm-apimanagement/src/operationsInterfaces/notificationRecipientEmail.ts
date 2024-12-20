/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
    NotificationName,
    NotificationRecipientEmailCheckEntityExistsOptionalParams,
    NotificationRecipientEmailCheckEntityExistsResponse,
    NotificationRecipientEmailCreateOrUpdateOptionalParams,
    NotificationRecipientEmailCreateOrUpdateResponse,
    NotificationRecipientEmailDeleteOptionalParams,
    NotificationRecipientEmailListByNotificationOptionalParams,
    NotificationRecipientEmailListByNotificationResponse
} from "../models/index.js";

/** Interface representing a NotificationRecipientEmail. */
export interface NotificationRecipientEmail {
    /**
     * Gets the list of the Notification Recipient Emails subscribed to a notification.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param notificationName Notification Name Identifier.
     * @param options The options parameters.
     */
    listByNotification(
        resourceGroupName: string,
        serviceName: string,
        notificationName: NotificationName,
        options?: NotificationRecipientEmailListByNotificationOptionalParams
    ): Promise<NotificationRecipientEmailListByNotificationResponse>;
    /**
     * Determine if Notification Recipient Email subscribed to the notification.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param notificationName Notification Name Identifier.
     * @param email Email identifier.
     * @param options The options parameters.
     */
    checkEntityExists(
        resourceGroupName: string,
        serviceName: string,
        notificationName: NotificationName,
        email: string,
        options?: NotificationRecipientEmailCheckEntityExistsOptionalParams
    ): Promise<NotificationRecipientEmailCheckEntityExistsResponse>;
    /**
     * Adds the Email address to the list of Recipients for the Notification.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param notificationName Notification Name Identifier.
     * @param email Email identifier.
     * @param options The options parameters.
     */
    createOrUpdate(
        resourceGroupName: string,
        serviceName: string,
        notificationName: NotificationName,
        email: string,
        options?: NotificationRecipientEmailCreateOrUpdateOptionalParams
    ): Promise<NotificationRecipientEmailCreateOrUpdateResponse>;
    /**
     * Removes the email from the list of Notification.
     * @param resourceGroupName The name of the resource group. The name is case insensitive.
     * @param serviceName The name of the API Management service.
     * @param notificationName Notification Name Identifier.
     * @param email Email identifier.
     * @param options The options parameters.
     */
    delete(
        resourceGroupName: string,
        serviceName: string,
        notificationName: NotificationName,
        email: string,
        options?: NotificationRecipientEmailDeleteOptionalParams
    ): Promise<void>;
}
