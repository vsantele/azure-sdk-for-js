// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  AssistantImageFile,
  AssistantMessageText,
  AssistantRole,
  FilePurpose,
  RequiredAction,
  RunError,
  RunStatus,
  ToolDefinition
} from "../../generated/src/models/models.js";


/** Data representing a single evaluation run of an assistant thread. */
export interface AssistantRun {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The ID of the thread associated with this run. */
  threadId: string;
  /** The ID of the assistant associated with the thread this run was performed against. */
  assistantId: string;
  /** The status of the assistant thread run. */
  status: RunStatus;
  /** The details of the action required for the assistant thread run to continue. */
  requiredAction?: RequiredAction;
  /** The last error, if any, encountered by this assistant thread run. */
  lastError?: RunError;
  /** The ID of the model to use. */
  model: string;
  /** The overriden system instructions used for this assistant thread run. */
  instructions: string;
  /** The overriden enabled tools used for this assistant thread run. */
  tools: ToolDefinition[];
  /** A list of attached file IDs, ordered by creation date in ascending order. */
  fileIds: string[];
  /** A set of key/value pairs used to store additional information about the object. */
  metadata: Record<string, string>;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The Unix timestamp, in seconds, representing when this item expires. */
  expiresAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this item was started. */
  startedAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this completed. */
  completedAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this was cancelled. */
  cancelledAt: Date | null;
  /** The Unix timestamp, in seconds, representing when this failed. */
  failedAt: Date | null;
}

/** Information about a file attached to an assistant thread message. */
export interface AssistantMessageFile {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The ID of the message that this file is attached to. */
  messageId: string;
}

/** A single message within an assistant thread. */
export interface AssistantMessage {
  /** The identifier, which can be referenced in API endpoints. */
  id?: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt?: Date;
  /** The ID of the thread that this message belongs to. */
  threadId?: string;
  /** The role associated with the assistant thread message. */
  role: AssistantRole;
  /** The list of content items associated with the assistant thread message. */
  content: AssistantMessageContent[];
  /** If applicable, the ID of the assistant that authored this message. */
  assistantId?: string;
  /** If applicable, the ID of the run associated with the authoring of this message. */
  runId?: string;
  /** A set of key/value pairs used to store additional information about the object. */
  metadata?: Record<string, string>;
}

/** An abstract representation of a single item of thread message content. */
export interface AssistantMessageContent {
  /** the discriminator possible values image_file, text */
  type: string;
  image_file?: AssistantImageFile;
  text?: AssistantMessageText;
  file_ids?: string[];
  metadata?: Record<string, string>;
}

/** An abstract representation of an annotation to text thread message content. */
export interface AssistantMessageTextAnnotation {
  /** the discriminator possible values file_citation, file_path */
  type: string;
  /** The textual content associated with this text annotation item. */
  text: string;
  /** The first text index associated with this text annotation. */
  start_index: number;
  /** The last text index associated with this text annotation. */
  end_index: number;
}

/** The details used to create a new assistant thread. */
export interface AssistantThreadCreationOptions {
  /** The messages to associate with the new thread. */
  messages?: {
    /** The role associated with the assistant thread message. */
    role: AssistantRole;
    /** The list of content items associated with the assistant thread message. */
    content: string;
  }[];
  /** A set of key/value pairs used to store additional information about the object. */
  metadata?: Record<string, string>;
}

/** The response data for a requested list of items. */
export interface ListResponseOf<T> {
  /** The object type, which is always list. */
  object: "list";
  /** The requested list of items. */
  data: T[];
  /** The first ID represented in this list. */
  firstId: string;
  /** The last ID represented in this list. */
  lastId: string;
  /** A value indicating whether there are additional values available not captured in this list. */
  hasMore: boolean;
}

/** The response data from a file list operation. */
export interface FileListResponse {
  /** The files returned for the request. */
  data: InputFile[];
}

/** Represents an assistant that can call the model and use tools. */
export interface InputFile {
  /** The identifier, which can be referenced in API endpoints. */
  id: string;
  /** The size of the file, in bytes. */
  bytes: number;
  /** The name of the file. */
  filename: string;
  /** The Unix timestamp, in seconds, representing when this object was created. */
  createdAt: Date;
  /** The intended purpose of a file. */
  purpose: FilePurpose;
}