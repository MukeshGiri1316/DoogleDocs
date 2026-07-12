import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { ApiError, ErrorCode, withErrorHandler } from "@/lib/errors";
import { getSessionUser, requireDocumentMember } from "@/lib/auth-utils";

export const dynamic = "force-dynamic";

interface RouteParams {
  params: Promise<{ id: string; versionId: string }>;
}

/**
 * GET /api/documents/[id]/versions/[versionId]
 *
 * Fetches a specific version's snapshot — the full document state
 * at the point in time when the version was created.
 * This is the "time travel" read endpoint.
 *
 * Requires membership (any role).
 */
async function handleGet(
  _req: Request,
  ctx: RouteParams
): Promise<NextResponse> {
  const { id, versionId } = await ctx.params;
  const user = await getSessionUser();
  await requireDocumentMember(id, user.id);

  const version = await prisma.version.findFirst({
    where: {
      id: versionId,
      documentId: id, // ensure version belongs to this document
    },
    include: {
      snapshot: true,
      user: {
        select: { id: true, name: true, email: true },
      },
    },
  });

  if (!version) {
    throw new ApiError(ErrorCode.NOT_FOUND, "Version not found");
  }

  return NextResponse.json({
    version: {
      id: version.id,
      name: version.name,
      createdAt: version.createdAt,
      createdBy: version.user,
      snapshot: {
        id: version.snapshot.id,
        state: version.snapshot.state,
        version: version.snapshot.version,
        createdAt: version.snapshot.createdAt,
      },
    },
  });
}

export const GET = withErrorHandler(
  (req: Request, ctx?: unknown) => handleGet(req, ctx as RouteParams)
);
