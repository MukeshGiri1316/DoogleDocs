import type {
  Document,
  DocumentMember,
  SyncPushPayload,
  SyncPushResponse,
  SyncPullPayload,
  SyncPullResponse,
  Version,
} from "./types";

/**
 * API client for communicating with the backend.
 * All methods return parsed JSON or throw on error.
 */

class ApiClientError extends Error {
  constructor(
    public status: number,
    message: string,
    public code?: string
  ) {
    super(message);
    this.name = "ApiClientError";
  }
}

async function request<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new ApiClientError(
      res.status,
      data?.error?.message || "Request failed",
      data?.error?.code
    );
  }

  return data as T;
}

// ─── Auth ────────────────────────────────────────────────────────────────

export async function register(data: {
  name: string;
  email: string;
  password: string;
}) {
  return request<{ message: string; user: { id: string; email: string } }>(
    "/api/auth/register",
    { method: "POST", body: JSON.stringify(data) }
  );
}

// ─── Documents ───────────────────────────────────────────────────────────

export async function listDocuments() {
  return request<{ documents: Document[] }>("/api/documents");
}

export async function createDocument(data: { title: string }) {
  return request<{ message: string; document: { id: string; title: string } }>(
    "/api/documents",
    { method: "POST", body: JSON.stringify(data) }
  );
}

export async function getDocument(id: string) {
  return request<{ document: Document; role: string }>(
    `/api/documents/${id}`
  );
}

export async function updateDocument(
  id: string,
  data: { title?: string }
) {
  return request<{ document: Document }>(
    `/api/documents/${id}`,
    { method: "PATCH", body: JSON.stringify(data) }
  );
}

export async function deleteDocument(id: string) {
  return request<{ message: string }>(`/api/documents/${id}`, {
    method: "DELETE",
  });
}

// ─── Members ─────────────────────────────────────────────────────────────

export async function listMembers(documentId: string) {
  return request<{ members: DocumentMember[] }>(
    `/api/documents/${documentId}/members`
  );
}

export async function addMember(
  documentId: string,
  data: { email: string; role: "EDITOR" | "VIEWER" }
) {
  return request<{ message: string; member: DocumentMember }>(
    `/api/documents/${documentId}/members`,
    { method: "POST", body: JSON.stringify(data) }
  );
}

export async function removeMember(
  documentId: string,
  userId: string
) {
  return request<{ message: string }>(
    `/api/documents/${documentId}/members`,
    { method: "DELETE", body: JSON.stringify({ userId }) }
  );
}

// ─── Sync ────────────────────────────────────────────────────────────────

export async function syncPush(data: SyncPushPayload) {
  return request<SyncPushResponse>("/api/sync/push", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function syncPull(data: SyncPullPayload) {
  return request<SyncPullResponse>("/api/sync/pull", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// ─── Versions ────────────────────────────────────────────────────────────

export async function createVersion(data: {
  documentId: string;
  name?: string;
}) {
  return request<{ message: string; version: Version }>(
    "/api/versions/create",
    { method: "POST", body: JSON.stringify(data) }
  );
}

export async function listVersions(documentId: string) {
  return request<{ versions: Version[] }>(
    `/api/documents/${documentId}/versions`
  );
}

export async function getVersion(
  documentId: string,
  versionId: string
) {
  return request<{ version: Version }>(
    `/api/documents/${documentId}/versions/${versionId}`
  );
}

export async function restoreVersion(
  documentId: string,
  versionId: string
) {
  return request<{ message: string; version: Version }>(
    `/api/documents/${documentId}/versions/${versionId}/restore`,
    { method: "POST" }
  );
}
