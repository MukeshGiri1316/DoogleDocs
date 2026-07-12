import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withErrorHandler } from "@/lib/errors";
import { getSessionUser, requireDocumentMember } from "@/lib/auth-utils";

export const dynamic = "force-dynamic";

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/documents/[id]/versions
 *
 * Returns a timeline of all named versions for a document,
 * ordered newest first. Each version includes the creator info
 * and the snapshot's operation version number.
 *
 * Requires membership (any role).
 */
async function handleGet(
  _req: Request,
  ctx: RouteParams
): Promise<NextResponse> {
  const { id } = await ctx.params;
  const user = await getSessionUser();
  await requireDocumentMember(id, user.id);

  const versions = await prisma.version.findMany({
    where: { documentId: id },
    orderBy: { createdAt: "desc" },
    include: {
      user: {
        select: { id: true, name: true, email: true },
      },
      snapshot: {
        select: {
          id: true,
          version: true,
          createdAt: true,
        },
      },
    },
  });

  return NextResponse.json({ versions });
}

export const GET = withErrorHandler(
  (req: Request, ctx?: unknown) => handleGet(req, ctx as RouteParams)
);
