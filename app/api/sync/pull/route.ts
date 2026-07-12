import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { SyncPullSchema } from "@/lib/validations";
import { withErrorHandler } from "@/lib/errors";
import { getSessionUser, requireDocumentMember } from "@/lib/auth-utils";

/**
 * POST /api/sync/pull
 *
 * Fetches operations that have occurred since the client's last known
 * server version. Used by clients after regaining connectivity to catch
 * up on remote changes.
 *
 * Request body:
 *   - documentId: string (UUID)
 *   - lastSyncedVersion: number (client's last known server version)
 *   - limit?: number (max operations to return, default 500)
 *
 * Response:
 *   - operations: Operation[] (ordered by serverVersion ASC)
 *   - latestServerVersion: number (server's current version)
 *   - hasMore: boolean (true if there are more ops beyond the limit)
 */
async function handler(req: Request): Promise<NextResponse> {
  const user = await getSessionUser();

  const body = await req.json();
  const validated = SyncPullSchema.parse(body);
  const { documentId, lastSyncedVersion, limit } = validated;

  // Permission check: any member can pull
  await requireDocumentMember(documentId, user.id);

  // Get the document's current server version
  const document = await prisma.document.findUnique({
    where: { id: documentId },
    select: { serverVersion: true },
  });

  // Fetch operations newer than the client's version
  const operations = await prisma.operation.findMany({
    where: {
      documentId,
      serverVersion: { gt: lastSyncedVersion },
    },
    orderBy: { serverVersion: "asc" },
    take: limit + 1, // Fetch one extra to determine hasMore
    select: {
      id: true,
      type: true,
      payload: true,
      clientId: true,
      sequence: true,
      serverVersion: true,
      userId: true,
      createdAt: true,
    },
  });

  const hasMore = operations.length > limit;
  const resultOps = hasMore ? operations.slice(0, limit) : operations;

  // Update this user's sync state
  if (resultOps.length > 0) {
    const latestPulledVersion =
      resultOps[resultOps.length - 1].serverVersion;

    await prisma.syncState.upsert({
      where: {
        documentId_userId: {
          documentId,
          userId: user.id,
        },
      },
      update: { lastSyncedVersion: latestPulledVersion },
      create: {
        documentId,
        userId: user.id,
        lastSyncedVersion: latestPulledVersion,
      },
    });
  }

  return NextResponse.json({
    operations: resultOps,
    latestServerVersion: document?.serverVersion ?? 0,
    hasMore,
  });
}

export const POST = withErrorHandler(handler);
