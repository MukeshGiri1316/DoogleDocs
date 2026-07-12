import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ApiError, ErrorCode, withErrorHandler } from "@/lib/errors";
import { getSessionUser, requireDocumentRole } from "@/lib/auth-utils";

interface RouteParams {
  params: Promise<{ id: string; versionId: string }>;
}

/**
 * POST /api/documents/[id]/versions/[versionId]/restore
 *
 * Restores a document to a previous version's state.
 *
 * IMPORTANT: This does NOT overwrite history or corrupt the state for other
 * collaborators. Instead, it:
 *   1. Reads the snapshot from the target version
 *   2. Sets the document's current content to that snapshot's state
 *   3. Creates a NEW version called "Restored from: <original name>"
 *   4. Creates a new snapshot at the current server version
 *
 * This way, the restore is itself a versioned event — it's always safe
 * and reversible.
 *
 * Requires OWNER or EDITOR role.
 */
async function handlePost(
  _req: Request,
  ctx: RouteParams
): Promise<NextResponse> {
  const { id, versionId } = await ctx.params;
  const user = await getSessionUser();
  await requireDocumentRole(id, user.id, ["OWNER", "EDITOR"]);

  const restoredVersion = await prisma.$transaction(async (tx) => {
    // Get the target version and its snapshot
    const targetVersion = await tx.version.findFirst({
      where: {
        id: versionId,
        documentId: id,
      },
      include: { snapshot: true },
    });

    if (!targetVersion) {
      throw new ApiError(ErrorCode.NOT_FOUND, "Version not found");
    }

    // Get the current document
    const document = await tx.document.findUnique({
      where: { id },
      select: { serverVersion: true },
    });

    if (!document) {
      throw new ApiError(ErrorCode.NOT_FOUND, "Document not found");
    }

    // Restore the document content from the snapshot
    const restoredState = targetVersion.snapshot.state;

    await tx.document.update({
      where: { id },
      data: {
        content: restoredState as object,
        updatedAt: new Date(),
      },
    });

    // Create a new snapshot at the current version representing the restore
    const newSnapshot = await tx.snapshot.create({
      data: {
        documentId: id,
        state: restoredState as object,
        version: document.serverVersion,
      },
    });

    // Create a new version entry to record the restore action
    const restoredName = targetVersion.name
      ? `Restored from: ${targetVersion.name}`
      : `Restored from version ${targetVersion.id.slice(0, 8)}`;

    const newVersion = await tx.version.create({
      data: {
        documentId: id,
        userId: user.id,
        name: restoredName,
        snapshotId: newSnapshot.id,
      },
      include: {
        snapshot: {
          select: { version: true, createdAt: true },
        },
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    return newVersion;
  });

  return NextResponse.json({
    message: "Document restored successfully",
    version: restoredVersion,
  });
}

export const POST = withErrorHandler(
  (req: Request, ctx?: unknown) => handlePost(req, ctx as RouteParams)
);
