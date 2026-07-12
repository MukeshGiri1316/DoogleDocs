"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { listDocuments, createDocument, deleteDocument } from "@/lib/api-client";
import type { Document } from "@/lib/types";
import { useOnlineStatus } from "@/lib/hooks";
import Link from "next/link";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const isOnline = useOnlineStatus();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  const fetchDocuments = useCallback(async () => {
    try {
      const data = await listDocuments();
      setDocuments(data.documents);
    } catch {
      // Offline or error — show cached data
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (status === "authenticated") {
      fetchDocuments();
    }
  }, [status, fetchDocuments]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!newTitle.trim()) return;
    setCreating(true);
    try {
      const data = await createDocument({ title: newTitle.trim() });
      router.push(`/editor/${data.document.id}`);
    } catch {
      // Handle error
    } finally {
      setCreating(false);
    }
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;
    try {
      await deleteDocument(id);
      setDocuments((prev) => prev.filter((d) => d.id !== id));
    } catch {
      // Handle error
    }
  }

  if (status === "loading" || loading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col page-enter">
      {/* Header */}
      <header className="sticky top-0 z-50 glass">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <span className="text-lg font-bold gradient-text">DoogleDocs</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Online status */}
            <div className="flex items-center gap-2 text-sm">
              <div className={`h-2 w-2 rounded-full ${isOnline ? "bg-success" : "bg-warning"}`}
                style={isOnline ? {} : { animation: "pulse-dot 2s infinite" }}
              />
              <span className="text-muted-foreground hidden sm:inline">
                {isOnline ? "Online" : "Offline"}
              </span>
            </div>

            {/* User info */}
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-sm font-medium text-primary">
                {session?.user?.name?.[0]?.toUpperCase() || session?.user?.email?.[0]?.toUpperCase() || "U"}
              </div>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-8">
        {/* Title + Create */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Documents</h1>
            <p className="text-muted-foreground mt-1">
              {documents.length} document{documents.length !== 1 ? "s" : ""}
            </p>
          </div>
          <button
            onClick={() => setShowCreate(true)}
            className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Document
          </button>
        </div>

        {/* Create dialog */}
        {showCreate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={() => setShowCreate(false)}>
            <div
              className="w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold mb-4">Create New Document</h2>
              <form onSubmit={handleCreate} className="space-y-4">
                <input
                  autoFocus
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Document title..."
                  required
                  className="w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={() => setShowCreate(false)}
                    className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={creating}
                    className="rounded-xl bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary-hover disabled:opacity-50"
                  >
                    {creating ? "Creating..." : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Documents grid */}
        {documents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <h3 className="text-lg font-medium">No documents yet</h3>
            <p className="text-muted-foreground mt-1 mb-4">
              Create your first document to get started
            </p>
            <button
              onClick={() => setShowCreate(true)}
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-all"
            >
              Create Document
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc, i) => (
              <div
                key={doc.id}
                className="group relative rounded-2xl border border-border bg-card p-5 transition-all hover:border-border-hover hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <Link href={`/editor/${doc.id}`} className="absolute inset-0 z-10 rounded-2xl" />

                <div className="flex items-start justify-between mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>

                  {/* Delete button (only for owners) */}
                  {doc.role === "OWNER" && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(doc.id, doc.title);
                      }}
                      className="relative z-20 rounded-lg p-1.5 text-muted-foreground opacity-0 transition-all hover:bg-destructive/10 hover:text-destructive group-hover:opacity-100"
                      title="Delete document"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  )}
                </div>

                <h3 className="font-semibold text-base mb-1 truncate group-hover:text-primary transition-colors">
                  {doc.title}
                </h3>

                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
                    doc.role === "OWNER"
                      ? "bg-primary/10 text-primary"
                      : doc.role === "EDITOR"
                      ? "bg-success/10 text-success"
                      : "bg-warning/10 text-warning"
                  }`}>
                    {doc.role}
                  </span>
                  <span>•</span>
                  <span>{new Date(doc.updatedAt).toLocaleDateString()}</span>
                  {doc.memberCount && doc.memberCount > 1 && (
                    <>
                      <span>•</span>
                      <span>{doc.memberCount} members</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
