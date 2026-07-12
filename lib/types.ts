// ─── User Types ──────────────────────────────────────────────────────────

export interface User {
  id: string;
  email: string;
  name?: string | null;
}

// ─── Document Types ──────────────────────────────────────────────────────

export type Role = "OWNER" | "EDITOR" | "VIEWER";

export interface Document {
  id: string;
  title: string;
  content: Record<string, unknown>;
  serverVersion: number;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
  owner: User;
  role: Role;
  memberCount?: number;
}

export interface DocumentMember {
  id: string;
  userId: string;
  documentId: string;
  role: Role;
  user: User;
}

// ─── Operation Types ─────────────────────────────────────────────────────

export interface Operation {
  id?: string;
  type: "insert" | "delete" | "update";
  payload: Record<string, unknown>;
  clientId: string;
  sequence: number;
  serverVersion?: number;
  userId?: string;
  createdAt?: string;
}

// ─── Version Types ───────────────────────────────────────────────────────

export interface Version {
  id: string;
  name?: string;
  documentId: string;
  createdAt: string;
  user: User;
  snapshot: {
    id: string;
    state: Record<string, unknown>;
    version: number;
    createdAt: string;
  };
}

// ─── Sync Types ──────────────────────────────────────────────────────────

export interface SyncPushPayload {
  documentId: string;
  operations: Omit<Operation, "id" | "serverVersion" | "userId" | "createdAt">[];
}

export interface SyncPullPayload {
  documentId: string;
  lastSyncedVersion: number;
  limit?: number;
}

export interface SyncPushResponse {
  success: boolean;
  appliedCount: number;
  skippedCount: number;
  lastServerVersion: number;
}

export interface SyncPullResponse {
  operations: Operation[];
  latestServerVersion: number;
  hasMore: boolean;
}

// ─── Local DB Types ──────────────────────────────────────────────────────

export interface LocalDocument {
  id: string;
  title: string;
  content: string; // HTML content from editor
  serverVersion: number;
  lastModified: number;
  isDirty: boolean;
}

export interface PendingOperation {
  id: string;
  documentId: string;
  operation: Omit<Operation, "id" | "serverVersion" | "userId" | "createdAt">;
  createdAt: number;
}
