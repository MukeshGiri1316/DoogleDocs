import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { VersionCreateSchema } from "@/lib/validations";
import { ApiError, ErrorCode, withErrorHandler } from "@/lib/errors";
import { getSessionUser, requireDocumentRole } from "@/lib/auth-utils";

/**
 * POST /api/versions/create
 *
 * Creates a named version (snapshot bookmark) of the current document state.
 * This captures the current document content as a snapshot and links it
 * to a named version entry.
 *
 * Requires OWNER or EDITOR role.
 */
async function handler(req: Request): Promise<NextResponse> {
  const user = await getSessionUser();

  const body = await req.json();
  const validated = VersionCreateSchema.parse(body);
  const { documentId, name } = validated;

  // Authorization
  await requireDocumentRole(documentId, user.id, ["OWNER", "EDITOR"]);

  const version = await prisma.$transaction(async (tx) => {
    // Get current document state
    const document = await tx.document.findUnique({
      where: { id: documentId },
      select: { content: true, serverVersion: true },
    });

    if (!document) {
      throw new ApiError(ErrorCode.NOT_FOUND, "Document not found");
    }

    // Create a snapshot of the current state
    const snapshot = await tx.snapshot.create({
      data: {
        documentId,
        state: document.content as object,
        version: document.serverVersion,
      },
    });

    // Create the named version pointing to this snapshot
    const ver = await tx.version.create({
      data: {
        documentId,
        userId: user.id,
        name: name || `Version at ${new Date().toISOString()}`,
        snapshotId: snapshot.id,
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

    return ver;
  });

  return NextResponse.json(
    { message: "Version created", version },
    { status: 201 }
  );
}

export const POST = withErrorHandler(handler);
