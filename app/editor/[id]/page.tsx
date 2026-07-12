"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import {
  getDocument,
  updateDocument,
  listVersions,
  createVersion,
  restoreVersion,
  getVersion,
  listMembers,
  addMember,
  removeMember,
} from "@/lib/api-client";
import {
  getLocalDocument,
  saveLocalDocument,
} from "@/lib/local-db";
import { recordChange, fullSync } from "@/lib/sync-engine";
import { useOnlineStatus, useDebounce, useSyncInterval } from "@/lib/hooks";
import type { Document, Version, DocumentMember, Role } from "@/lib/types";
import Link from "next/link";

interface EditorPageProps {
  params: Promise<{ id: string }>;
}

export default function EditorPage({ params }: EditorPageProps) {
  const { status } = useSession();
  const router = useRouter();
  const isOnline = useOnlineStatus();
  const [docId, setDocId] = useState<string>("");
  const [document, setDocument] = useState<Document | null>(null);
  const [role, setRole] = useState<Role>("VIEWER");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [showVersions, setShowVersions] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const [versions, setVersions] = useState<Version[]>([]);
  const [members, setMembers] = useState<DocumentMember[]>([]);
  const [versionName, setVersionName] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberRole, setMemberRole] = useState<"EDITOR" | "VIEWER">("EDITOR");
  // Version preview state
  const [previewingVersion, setPreviewingVersion] = useState<Version | null>(null);
  const [previewContent, setPreviewContent] = useState<string | null>(null);
  const [savedContentBeforePreview, setSavedContentBeforePreview] = useState<string | null>(null);
  const [loadingPreview, setLoadingPreview] = useState<string | null>(null);
  const titleDebounced = useDebounce(title, 1000);
  const initialLoad = useRef(true);

  // Resolve params
  useEffect(() => {
    params.then((p) => setDocId(p.id));
  }, [params]);

  // Auth guard
  useEffect(() => {
    if (status === "unauthenticated") router.replace("/login");
  }, [status, router]);

  // Editor setup
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start writing your document...",
      }),
    ],
    editable: role !== "VIEWER",
    content: "",
    editorProps: {
      attributes: {
        class:
          "tiptap outline-none h-screen w-[794px] bg-white text-black p-[80px] mx-auto my-10 shadow-lg border border-gray-400 cursor-text",
      },
    },
    onUpdate: ({ editor }) => {
      if (initialLoad.current) return;
      const html = editor.getHTML();

      if (docId && role !== "VIEWER") {
        recordChange(docId, "update", { html }, html).then(() => {
          setLastSaved(new Date());
        });
      }
    },
  });

  // Load document
  useEffect(() => {
    if (!docId || status !== "authenticated") return;

    async function loadDocument() {
      setLoading(true);
      try {
        // local first
        const localDoc = await getLocalDocument(docId);
        
        if (localDoc?.content) {
          editor?.commands.setContent(localDoc.content);
          setTitle(localDoc.title);
        }

        // Then fetch from server (if online)
        if (isOnline) {
          const data = await getDocument(docId);
          console.log(data.document.serverVersion);
          setDocument(data.document);
          setRole(data.role as Role);
          setTitle(data.document.title);

          // If local is empty or server is newer, use server content
          const serverContent =
            typeof data.document.content === "object" &&
              data.document.content !== null &&
              "html" in (data.document.content as Record<string, unknown>)
              ? (data.document.content as { html: string }).html
              : "";

          if (serverContent) {
            editor?.commands.setContent(serverContent);
          }

          // Save to local DB
          await saveLocalDocument({
            id: docId,
            title: data.document.title,
            content: editor?.getHTML() || "",
            serverVersion: data.document.serverVersion,
            lastModified: Date.now(),
            isDirty: false,
          });

          // Update editor editable state
          if (data?.role !== "VIEWER") {
            editor?.setEditable(true);
          }
          
        }
      } catch {
        // Offline — local data is already loaded
      } finally {
        setLoading(false);
        setTimeout(() => {
          initialLoad.current = false;
        }, 500);
      }
    }

    if (editor) {
      loadDocument();
    }
  }, [docId, status, isOnline, editor]);

  // Auto-save title changes to server
  useEffect(() => {
    if (initialLoad.current || !docId || !isOnline || role === "VIEWER") return;
    updateDocument(docId, { title: titleDebounced }).catch(() => { });
  }, [titleDebounced, docId, isOnline, role]);

  // Periodic sync
  const syncCallback = useCallback(async () => {
    if (!docId || !isOnline) return;
    setSyncing(true);
    try {
      await fullSync(docId);
    } finally {
      setSyncing(false);
    }
  }, [docId, isOnline]);

  useSyncInterval(syncCallback, 15000, isOnline && !!docId && !loading);

  // Load versions
  useEffect(() => {
    if (showVersions && docId && isOnline) {
      listVersions(docId).then((d) => setVersions(d.versions)).catch(() => { });
    }
  }, [showVersions, docId, isOnline]);

  // Load members
  useEffect(() => {
    if (showMembers && docId && isOnline) {
      listMembers(docId).then((d) => setMembers(d.members)).catch(() => { });
    }
  }, [showMembers, docId, isOnline]);

  async function handleCreateVersion() {
    if (!docId) return;
    try {
      await createVersion({
        documentId: docId,
        name: versionName || undefined,
      });
      setVersionName("");
      const d = await listVersions(docId);
      setVersions(d.versions);
    } catch {
      /* handle error */
    }
  }

  /**
   * Preview a saved version: loads its snapshot content into the editor
   * in read-only mode, storing the current content so we can go back.
   */
  async function handlePreviewVersion(version: Version) {
    if (!docId) return;
    setLoadingPreview(version.id);
    try {
      const data = await getVersion(docId, version.id);
      const state = data.version.snapshot?.state as { html?: string } | undefined;
      const html = state?.html || "<p><em>No content in this version</em></p>";

      // Save current editor content before switching
      if (!previewingVersion) {
        setSavedContentBeforePreview(editor?.getHTML() || "");
      }

      setPreviewContent(html);
      setPreviewingVersion(data.version);
      editor?.setEditable(false);
      editor?.commands.setContent(html);
    } catch {
      /* handle error */
    } finally {
      setLoadingPreview(null);
    }
  }

  /**
   * Exit preview mode: restore the current working content and re-enable editing.
   */
  function exitPreview() {
    if (savedContentBeforePreview !== null) {
      editor?.commands.setContent(savedContentBeforePreview);
    }
    if (role !== "VIEWER") {
      editor?.setEditable(true);
    }
    setPreviewingVersion(null);
    setPreviewContent(null);
    setSavedContentBeforePreview(null);
  }

  /**
   * Restore a version: calls the backend restore endpoint, updates the editor
   * content, and exits preview mode.
   */
  async function handleRestoreVersion(versionId: string) {
    if (!docId || !confirm("Restore this version? The current content will be replaced and a new version entry will be created."))
      return;
    try {
      const result = await restoreVersion(docId, versionId);
      const state = result.version.snapshot?.state as { html?: string } | undefined;
      if (state?.html) {
        editor?.commands.setContent(state.html);
        // Save to local DB
        await saveLocalDocument({
          id: docId,
          title,
          content: state.html,
          serverVersion: result.version.snapshot?.version || 0,
          lastModified: Date.now(),
          isDirty: false,
        });
      }
      // Exit preview mode if active
      if (role !== "VIEWER") {
        editor?.setEditable(true);
      }
      setPreviewingVersion(null);
      setPreviewContent(null);
      setSavedContentBeforePreview(null);
      setLastSaved(new Date());
      // Refresh version list
      const d = await listVersions(docId);
      setVersions(d.versions);
    } catch {
      /* handle error */
    }
  }

  async function handleAddMember(e: React.FormEvent) {
    e.preventDefault();
    if (!docId || !memberEmail) return;
    try {
      await addMember(docId, { email: memberEmail, role: memberRole });
      setMemberEmail("");
      const d = await listMembers(docId);
      setMembers(d.members);
    } catch {
      /* handle error */
    }
  }

  async function handleRemoveMember(userId: string) {
    if (!docId || !confirm("Remove this member?")) return;
    try {
      await removeMember(docId, userId);
      const d = await listMembers(docId);
      setMembers(d.members);
    } catch {
      /* handle error */
    }
  }

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          <p className="text-sm text-muted-foreground">Loading document...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col h-screen page-enter">
      {/* Toolbar */}
      <header className="sticky top-0 z-50 glass">
        <div className="flex h-14 items-center justify-between px-4 gap-4">
          {/* Left: back + title */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <Link
              href="/dashboard"
              className="flex-shrink-0 rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              title="Back to documents"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </Link>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={role === "VIEWER"}
              className="min-w-0 flex-1 bg-transparent text-base font-semibold outline-none placeholder:text-muted-foreground disabled:opacity-60 truncate"
              placeholder="Untitled document"
            />
          </div>

          {/* Center: formatting toolbar */}
          {editor && role !== "VIEWER" && (
            <div className="hidden md:flex items-center gap-1 rounded-xl bg-secondary/50 border border-border p-1">
              {[
                { action: () => editor.chain().focus().toggleBold().run(), active: editor.isActive("bold"), icon: "B", label: "Bold", className: "font-bold" },
                { action: () => editor.chain().focus().toggleItalic().run(), active: editor.isActive("italic"), icon: "I", label: "Italic", className: "italic" },
                { action: () => editor.chain().focus().toggleStrike().run(), active: editor.isActive("strike"), icon: "S", label: "Strikethrough", className: "line-through" },
                { action: () => editor.chain().focus().toggleCode().run(), active: editor.isActive("code"), icon: "<>", label: "Code", className: "font-mono text-xs" },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.action}
                  title={btn.label}
                  className={`rounded-lg px-2.5 py-1.5 text-sm transition-colors ${btn.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    } ${btn.className}`}
                >
                  {btn.icon}
                </button>
              ))}

              <div className="mx-1 h-5 w-px bg-border" />

              {[
                { action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), active: editor.isActive("heading", { level: 1 }), label: "H1" },
                { action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: editor.isActive("heading", { level: 2 }), label: "H2" },
                { action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), active: editor.isActive("heading", { level: 3 }), label: "H3" },
              ].map((btn) => (
                <button
                  key={btn.label}
                  onClick={btn.action}
                  title={btn.label}
                  className={`rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${btn.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                >
                  {btn.label}
                </button>
              ))}

              <div className="mx-1 h-5 w-px bg-border" />

              {[
                { action: () => editor.chain().focus().toggleBulletList().run(), active: editor.isActive("bulletList"), label: "•", title: "Bullet List" },
                { action: () => editor.chain().focus().toggleOrderedList().run(), active: editor.isActive("orderedList"), label: "1.", title: "Ordered List" },
                { action: () => editor.chain().focus().toggleBlockquote().run(), active: editor.isActive("blockquote"), label: "❝", title: "Quote" },
              ].map((btn) => (
                <button
                  key={btn.title}
                  onClick={btn.action}
                  title={btn.title}
                  className={`rounded-lg px-2.5 py-1.5 text-sm transition-colors ${btn.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          )}

          {/* Right: status + actions */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* Sync status */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              {syncing ? (
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-3 w-3 animate-spin rounded-full border border-primary/30 border-t-primary" />
                  Syncing
                </span>
              ) : !isOnline ? (
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-warning" style={{ animation: "pulse-dot 2s infinite" }} />
                  Offline
                </span>
              ) : lastSaved ? (
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-success" />
                  Saved
                </span>
              ) : null}
            </div>

            {/* Role badge */}
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${role === "OWNER"
              ? "bg-primary/10 text-primary"
              : role === "EDITOR"
                ? "bg-success/10 text-success"
                : "bg-warning/10 text-warning"
              }`}>
              {role}
            </span>

            {/* Version history toggle */}
            <button
              onClick={() => { setShowVersions(!showVersions); setShowMembers(false); }}
              title="Version History"
              className={`rounded-lg p-2 transition-colors ${showVersions ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </button>

            {/* Members toggle (owner only) */}
            {role === "OWNER" && (
              <button
                onClick={() => { setShowMembers(!showMembers); setShowVersions(false); }}
                title="Manage Members"
                className={`rounded-lg p-2 transition-colors ${showMembers ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Version preview banner */}
      {previewingVersion && (
        <div className="flex items-center justify-between px-4 py-2.5 bg-accent/10 border-b border-accent/20 animate-slide-up">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/20">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-accent-foreground">
                Previewing: <span className="font-semibold">{previewingVersion.name || "Unnamed version"}</span>
              </p>
              <p className="text-xs text-muted-foreground">
                {previewingVersion.user?.name || previewingVersion.user?.email} • {new Date(previewingVersion.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {role !== "VIEWER" && (
              <button
                onClick={() => handleRestoreVersion(previewingVersion.id)}
                className="rounded-lg bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground hover:bg-accent/80 transition-colors"
              >
                Restore This Version
              </button>
            )}
            <button
              onClick={exitPreview}
              className="rounded-lg border border-border px-4 py-1.5 text-xs font-medium hover:bg-secondary transition-colors"
            >
              ← Back to Editing
            </button>
          </div>
        </div>
      )}

      {/* Editor + Side panel */}
      <div className="flex flex-1 overflow-hidden">
        {/* Editor */}
        <div className="flex-1 overflow-auto">
          <div className="mx-auto w-fit py-8">
            <EditorContent editor={editor} />
          </div>
        </div>

        {/* Version History Panel */}
        {showVersions && (
          <aside className="w-80 border-l border-border bg-card overflow-auto animate-slide-in flex-shrink-0">
            <div className="p-5">
              <h2 className="text-sm font-semibold mb-4 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Version History
              </h2>

              {/* Create version */}
              {role !== "VIEWER" && !previewingVersion && (
                <div className="mb-4 space-y-2">
                  <input
                    type="text"
                    value={versionName}
                    onChange={(e) => setVersionName(e.target.value)}
                    placeholder="Version name (optional)"
                    className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                  <button
                    onClick={handleCreateVersion}
                    className="w-full rounded-lg bg-primary/10 border border-primary/20 px-3 py-2 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                  >
                    Save Version
                  </button>
                </div>
              )}

              {/* Version list */}
              <div className="space-y-2">
                {versions.length === 0 ? (
                  <p className="text-sm text-muted-foreground py-4 text-center">
                    No versions yet
                  </p>
                ) : (
                  versions.map((v) => {
                    const isActive = previewingVersion?.id === v.id;
                    const isLoading = loadingPreview === v.id;
                    return (
                      <div
                        key={v.id}
                        className={`rounded-xl border p-3 transition-all ${
                          isActive
                            ? "border-accent bg-accent/5 ring-1 ring-accent/30"
                            : "border-border hover:border-border-hover"
                        }`}
                      >
                        <p className="text-sm font-medium truncate">
                          {v.name || "Unnamed version"}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {v.user.name || v.user.email} •{" "}
                          {new Date(v.createdAt).toLocaleString()}
                        </p>
                        {v.snapshot && (
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Server version: {v.snapshot.version}
                          </p>
                        )}

                        <div className="flex items-center gap-2 mt-2">
                          {/* Preview button */}
                          <button
                            onClick={() => isActive ? exitPreview() : handlePreviewVersion(v)}
                            disabled={!!isLoading}
                            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                              isActive
                                ? "bg-accent text-accent-foreground"
                                : "bg-secondary/80 text-secondary-foreground hover:bg-secondary"
                            } disabled:opacity-50`}
                          >
                            {isLoading ? (
                              <>
                                <span className="h-3 w-3 animate-spin rounded-full border border-current/30 border-t-current" />
                                Loading
                              </>
                            ) : isActive ? (
                              <>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="18" y1="6" x2="6" y2="18" />
                                  <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                                Exit Preview
                              </>
                            ) : (
                              <>
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                                Preview
                              </>
                            )}
                          </button>

                          {/* Restore button */}
                          {role !== "VIEWER" && (
                            <button
                              onClick={() => handleRestoreVersion(v.id)}
                              className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="1 4 1 10 7 10" />
                                <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
                              </svg>
                              Restore
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </aside>
        )}

        {/* Members Panel */}
        {showMembers && (
          <aside className="w-80 border-l border-border bg-card overflow-auto animate-slide-in flex-shrink-0">
            <div className="p-5">
              <h2 className="text-sm font-semibold mb-4 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                </svg>
                Members
              </h2>

              {/* Add member form */}
              <form onSubmit={handleAddMember} className="mb-4 space-y-2">
                <input
                  type="email"
                  value={memberEmail}
                  onChange={(e) => setMemberEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className="w-full rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <div className="flex gap-2">
                  <select
                    value={memberRole}
                    onChange={(e) =>
                      setMemberRole(e.target.value as "EDITOR" | "VIEWER")
                    }
                    className="flex-1 rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                  >
                    <option value="EDITOR">Editor</option>
                    <option value="VIEWER">Viewer</option>
                  </select>
                  <button
                    type="submit"
                    className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary-hover transition-colors"
                  >
                    Add
                  </button>
                </div>
              </form>

              {/* Members list */}
              <div className="space-y-2">
                {members.map((m) => (
                  <div
                    key={m.id}
                    className="flex items-center justify-between rounded-xl border border-border p-3"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium truncate">
                        {m.user.name || m.user.email}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {m.user.email}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${m.role === "OWNER"
                        ? "bg-primary/10 text-primary"
                        : m.role === "EDITOR"
                          ? "bg-success/10 text-success"
                          : "bg-warning/10 text-warning"
                        }`}>
                        {m.role}
                      </span>
                      {m.role !== "OWNER" && (
                        <button
                          onClick={() => handleRemoveMember(m.userId)}
                          className="rounded-lg p-1 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                          title="Remove member"
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        )}
      </div>
    </div>
  );
}
