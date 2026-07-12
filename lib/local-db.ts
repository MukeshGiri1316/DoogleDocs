"use client";

import type { LocalDocument, PendingOperation } from "./types";

/**
 * IndexedDB wrapper for local-first document storage.
 * This is the primary source of truth on the client side.
 *
 * Stores:
 * - documents: Full document state (content, version, dirty flag)
 * - pendingOps: Operations queued for sync to server
 */

const DB_NAME = "doceditor";
const DB_VERSION = 1;
const DOCS_STORE = "documents";
const OPS_STORE = "pendingOps";

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DOCS_STORE)) {
        db.createObjectStore(DOCS_STORE, { keyPath: "id" });
      }
      if (!db.objectStoreNames.contains(OPS_STORE)) {
        const store = db.createObjectStore(OPS_STORE, { keyPath: "id" });
        store.createIndex("documentId", "documentId", { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

// ─── Document Operations ─────────────────────────────────────────────────

export async function getLocalDocument(
  id: string
): Promise<LocalDocument | undefined> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DOCS_STORE, "readonly");
    const store = tx.objectStore(DOCS_STORE);
    const req = store.get(id);
    req.onsuccess = () => resolve(req.result as LocalDocument | undefined);
    req.onerror = () => reject(req.error);
  });
}

export async function saveLocalDocument(doc: LocalDocument): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DOCS_STORE, "readwrite");
    const store = tx.objectStore(DOCS_STORE);
    store.put(doc);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getAllLocalDocuments(): Promise<LocalDocument[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DOCS_STORE, "readonly");
    const store = tx.objectStore(DOCS_STORE);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result as LocalDocument[]);
    req.onerror = () => reject(req.error);
  });
}

export async function deleteLocalDocument(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(DOCS_STORE, "readwrite");
    const store = tx.objectStore(DOCS_STORE);
    store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

// ─── Pending Operations ──────────────────────────────────────────────────

export async function addPendingOperation(
  op: PendingOperation
): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(OPS_STORE, "readwrite");
    const store = tx.objectStore(OPS_STORE);
    store.put(op);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function getPendingOperations(
  documentId: string
): Promise<PendingOperation[]> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(OPS_STORE, "readonly");
    const store = tx.objectStore(OPS_STORE);
    const index = store.index("documentId");
    const req = index.getAll(documentId);
    req.onsuccess = () => resolve(req.result as PendingOperation[]);
    req.onerror = () => reject(req.error);
  });
}

export async function clearPendingOperations(
  documentId: string
): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(OPS_STORE, "readwrite");
    const store = tx.objectStore(OPS_STORE);
    const index = store.index("documentId");
    const req = index.openCursor(documentId);
    req.onsuccess = () => {
      const cursor = req.result;
      if (cursor) {
        cursor.delete();
        cursor.continue();
      }
    };
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function removePendingOperation(id: string): Promise<void> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(OPS_STORE, "readwrite");
    const store = tx.objectStore(OPS_STORE);
    store.delete(id);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
