import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/generated/prisma";
import { SyncPushSchema, validateRequestSize } from "@/lib/validations";
import { ApiError, ErrorCode, withErrorHandler } from "@/lib/errors";
import {
  getSessionUser,
  requireDocumentRole,
  getClientIp,
} from "@/lib/auth-utils";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rate-limit";

/** Create a snapshot every N operations for efficient time-travel */
const SNAPSHOT_INTERVAL = 50;

/**
 * POST /api/sync/push
 *
 * Receives a batch of operations from a client and applies them to the
 * server's operation log. Handles:
 *
 * 1. Request size validation (prevents OOM)
 * 2. Rate limiting per-user
 * 3. Zod schema validation with payload depth/size limits
 * 4. Role-based auth (OWNER/EDITOR only — Viewers cannot push)
 * 5. Duplicate detection (clientId + sequence)
 * 6. Serializable transaction for server version ordering
 * 7. Auto-snapshot creation every SNAPSHOT_INTERVAL operations
 */
async function handler(req: Request): Promise<NextResponse> {
  // 1. Check request size
  validateRequestSize(req.headers.get("content-length"));

  // 2. Rate limit
  const user = await getSessionUser();
  const ip = getClientIp(req);

  const rateCheck = checkRateLimit(
    `sync-push:${user.id}:${ip}`,
    RATE_LIMITS.syncPush,
  );

  if (!rateCheck.allowed) {
    throw new ApiError(
      ErrorCode.RATE_LIMITED,
      `Rate limit exceeded. Try again in ${Math.ceil(
        rateCheck.resetMs / 1000,
      )}s`,
    );
  }

  // 3. Parse body
  const body = await req.json();
  const validated = SyncPushSchema.parse(body);
  const { documentId, operations } = validated;

  // 4. Authorization
  await requireDocumentRole(documentId, user.id, ["OWNER", "EDITOR"]);

  const MAX_OPS = 100;
  const opsChunk = operations.slice(0, MAX_OPS);

  let shouldSnapshot = false;
  let snapshotVersion = 0;

  const result = await prisma.$transaction(
    async (tx: Prisma.TransactionClient) => {
      // 1. Get document
      const document = await tx.document.findUnique({
        where: { id: documentId },
        select: { serverVersion: true, content: true },
      });

      if (!document) {
        throw new ApiError(ErrorCode.NOT_FOUND, "Document not found");
      }

      let currentVersion = document.serverVersion;

      // 2. Get existing operations (bulk)
      const existingOps = await tx.operation.findMany({
        where: {
          OR: opsChunk.map((op) => ({
            clientId: op.clientId,
            sequence: op.sequence,
          })),
        },
        select: {
          clientId: true,
          sequence: true,
        },
      });

      const existingSet = new Set(
        existingOps.map((op) => `${op.clientId}-${op.sequence}`),
      );

      // 3. Filter new operations
      const newOperations = opsChunk.filter(
        (op) => !existingSet.has(`${op.clientId}-${op.sequence}`),
      );

      // 4. Insert in bulk
      if (newOperations.length > 0) {
        await tx.operation.createMany({
          data: newOperations.map((op, index) => ({
            documentId,
            userId: user.id,
            type: op.type,
            payload: op.payload,
            clientId: op.clientId,
            sequence: op.sequence,
            serverVersion: currentVersion + index + 1,
          })),
        });

        currentVersion += newOperations.length;

        // 5. Update document version
        await tx.document.update({
          where: { id: documentId },
          data: {
            content: operations[operations.length - 1].payload,
            serverVersion: currentVersion,
            updatedAt: new Date(),
          },
        });

        // 6. Snapshot check
        const lastSnapshot = await tx.snapshot.findFirst({
          where: { documentId },
          orderBy: { version: "desc" },
          select: { version: true },
        });

        const lastSnapshotVersion = lastSnapshot?.version ?? 0;

        if (currentVersion - lastSnapshotVersion >= SNAPSHOT_INTERVAL) {
          shouldSnapshot = true;
          snapshotVersion = currentVersion;
        }
      }

      // 7. Sync state
      await tx.syncState.upsert({
        where: {
          documentId_userId: {
            documentId,
            userId: user.id,
          },
        },
        update: { lastSyncedVersion: currentVersion },
        create: {
          documentId,
          userId: user.id,
          lastSyncedVersion: currentVersion,
        },
      });

      return {
        appliedCount: newOperations.length,
        skippedCount: opsChunk.length - newOperations.length,
        lastServerVersion: currentVersion,
      };
    },
    {
      isolationLevel: "Serializable",
      timeout: 20000, // increased but safe now
    },
  );

  // ✅ Snapshot OUTSIDE transaction (CRITICAL)
  if (shouldSnapshot) {
    const doc = await prisma.document.findUnique({
      where: { id: documentId },
      select: { content: true },
    });

    await prisma.snapshot.create({
      data: {
        documentId,
        state: (doc?.content ?? {}) as object,
        version: snapshotVersion,
      },
    });
  }

  return NextResponse.json({
    success: true,
    ...result,
  });
}

export const POST = withErrorHandler(handler);
