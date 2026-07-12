"use client";

import {
  saveLocalDocument,
  getLocalDocument,
  addPendingOperation,
  getPendingOperations,
  clearPendingOperations,
} from "./local-db";
import { syncPush, syncPull } from "./api-client";
import type { LocalDocument, PendingOperation } from "./types";

/**
 * Client-side sync engine.
 *
 * Manages the background synchronization between IndexedDB (local) and the
 * server. When offline, operations queue locally. When online, they push
 * to the server and pull remote changes.
 */

let clientId: string | null = null;
let sequenceCounter = 0;

function getClientId(): string {
  if (clientId) return clientId;
  const stored = typeof window !== "undefined"
    ? localStorage.getItem("doceditor_clientId")
    : null;
  if (stored) {
    clientId = stored;
    return stored;
  }
  clientId = `client_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
  if (typeof window !== "undefined") {
    localStorage.setItem("doceditor_clientId", clientId);
  }
  return clientId;
}

function getNextSequence(): number {
  sequenceCounter++;
  if (typeof window !== "undefined") {
    localStorage.setItem("doceditor_seq", String(sequenceCounter));
  }
  return sequenceCounter;
}

// Initialize sequence counter from localStorage
if (typeof window !== "undefined") {
  const stored = localStorage.getItem("doceditor_seq");
  if (stored) sequenceCounter = parseInt(stored, 10);
}

/**
 * Record a local change as a pending operation.
 * Saves to IndexedDB immediately (zero network dependency).
 */
export async function recordChange(
  documentId: string,
  type: "insert" | "delete" | "update",
  payload: Record<string, unknown>,
  content: string
): Promise<void> {
  const cid = getClientId();
  const seq = getNextSequence();

  // Save pending operation
  const op: PendingOperation = {
    id: `${cid}_${seq}`,
    documentId,
    operation: { type, payload, clientId: cid, sequence: seq },
    createdAt: Date.now(),
  };
  await addPendingOperation(op);

  // Update local document
  const existing = await getLocalDocument(documentId);
  const localDoc: LocalDocument = {
    id: documentId,
    title: existing?.title || "Untitled",
    content,
    serverVersion: existing?.serverVersion || 0,
    lastModified: Date.now(),
    isDirty: true,
  };
  await saveLocalDocument(localDoc);
}

/**
 * Push pending local operations to the server.
 * Returns true if successful, false if offline or failed.
 */
export async function pushChanges(documentId: string): Promise<boolean> {
  try {
    const pending = await getPendingOperations(documentId);
    if (pending.length === 0) return true;

    // Batch operations (max 100 per request per server limit)
    const batches: PendingOperation[][] = [];
    for (let i = 0; i < pending.length; i += 100) {
      batches.push(pending.slice(i, i + 100));
    }

    for (const batch of batches) {
      const result = await syncPush({
        documentId,
        operations: batch.map((p) => p.operation),
      });

      if (result.success) {
        // Update local server version
        const localDoc = await getLocalDocument(documentId);
        if (localDoc) {
          localDoc.serverVersion = result.lastServerVersion;
          localDoc.isDirty = false;
          await saveLocalDocument(localDoc);
        }
      }
    }

    // Clear all pushed operations
    await clearPendingOperations(documentId);
    return true;
  } catch {
    // Silently fail — will retry next sync cycle
    return false;
  }
}

/**
 * Pull remote changes from the server.
 * Returns the operations received, or null if offline.
 */
export async function pullChanges(
  documentId: string
): Promise<{ hasChanges: boolean } | null> {
  try {
    const localDoc = await getLocalDocument(documentId);
    const lastVersion = localDoc?.serverVersion || 0;

    const result = await syncPull({
      documentId,
      lastSyncedVersion: lastVersion,
    });

    if (result.operations.length > 0) {
      // Update local version
      if (localDoc) {
        localDoc.serverVersion = result.latestServerVersion;
        await saveLocalDocument(localDoc);
      }
      return { hasChanges: true };
    }

    return { hasChanges: false };
  } catch {
    return null;
  }
}

/**
 * Full sync cycle: push local changes, then pull remote changes.
 */
export async function fullSync(
  documentId: string
): Promise<{ pushed: boolean; pulled: boolean }> {
  const pushed = await pushChanges(documentId);
  const pullResult = await pullChanges(documentId);
  return {
    pushed,
    pulled: pullResult?.hasChanges || false,
  };
}
