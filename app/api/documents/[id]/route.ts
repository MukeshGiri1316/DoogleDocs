import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { DocumentUpdateSchema } from "@/lib/validations";
import { ApiError, ErrorCode, withErrorHandler } from "@/lib/errors";
import {
  getSessionUser,
  requireDocumentMember,
  requireDocumentRole,
} from "@/lib/auth-utils";

export const dynamic = "force-dynamic";

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/documents/[id]
 * Get a single document with its content and metadata.
 * Requires membership (any role).
 */
async function handleGet(
  _req: Request,
  ctx: RouteParams
): Promise<NextResponse> {
  const { id } = await ctx.params;
  const user = await getSessionUser();
  const membership = await requireDocumentMember(id, user.id);

  const document = await prisma.document.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      content: true,
      serverVersion: true,
      ownerId: true,
      createdAt: true,
      updatedAt: true,
      owner: {
        select: { id: true, name: true, email: true },
      },
      members: {
        select: {
          userId: true,
          role: true,
          user: {
            select: { id: true, name: true, email: true },
          },
        },
      },
    },
  });

  return NextResponse.json({
    document,
    role: membership.role,
  });
}

/**
 * PATCH /api/documents/[id]
 * Update document title. Requires OWNER or EDITOR role.
 */
async function handlePatch(
  req: Request,
  ctx: RouteParams
): Promise<NextResponse> {
  const { id } = await ctx.params;
  const user = await getSessionUser();
  await requireDocumentRole(id, user.id, ["OWNER", "EDITOR"]);

  const body = await req.json();
  const validated = DocumentUpdateSchema.parse(body);

  const document = await prisma.document.update({
    where: { id },
    data: { title: validated.title },
    select: {
      id: true,
      title: true,
      updatedAt: true,
    },
  });

  return NextResponse.json({ document });
}

/**
 * DELETE /api/documents/[id]
 * Delete a document. Requires OWNER role.
 * Cascade deletes all members, operations, snapshots, and versions.
 */
async function handleDelete(
  _req: Request,
  ctx: RouteParams
): Promise<NextResponse> {
  const { id } = await ctx.params;
  const user = await getSessionUser();
  await requireDocumentRole(id, user.id, ["OWNER"]);

  await prisma.document.delete({ where: { id } });

  return NextResponse.json({ message: "Document deleted" });
}

export const GET = withErrorHandler(
  (req: Request, ctx?: unknown) => handleGet(req, ctx as RouteParams)
);
export const PATCH = withErrorHandler(
  (req: Request, ctx?: unknown) => handlePatch(req, ctx as RouteParams)
);
export const DELETE = withErrorHandler(
  (req: Request, ctx?: unknown) => handleDelete(req, ctx as RouteParams)
);
