import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { AddMemberSchema, RemoveMemberSchema } from "@/lib/validations";
import { ApiError, ErrorCode, withErrorHandler } from "@/lib/errors";
import {
  getSessionUser,
  requireDocumentMember,
  requireDocumentRole,
} from "@/lib/auth-utils";

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/documents/[id]/members
 * List all members of a document.
 * Requires membership (any role).
 */
async function handleGet(
  _req: Request,
  ctx: RouteParams
): Promise<NextResponse> {
  const { id } = await ctx.params;
  const user = await getSessionUser();
  await requireDocumentMember(id, user.id);

  const members = await prisma.documentMember.findMany({
    where: { documentId: id },
    include: {
      user: {
        select: { id: true, name: true, email: true },
      },
    },
    orderBy: { role: "asc" }, // OWNER first
  });

  return NextResponse.json({ members });
}

/**
 * POST /api/documents/[id]/members
 * Add a member to a document. Requires OWNER role.
 * The target user must already exist in the system.
 */
async function handlePost(
  req: Request,
  ctx: RouteParams
): Promise<NextResponse> {
  const { id } = await ctx.params;
  const user = await getSessionUser();
  await requireDocumentRole(id, user.id, ["OWNER"]);

  const body = await req.json();
  const validated = AddMemberSchema.parse(body);

  // Find the user to add
  const targetUser = await prisma.user.findUnique({
    where: { email: validated.email },
    select: { id: true, email: true, name: true },
  });

  if (!targetUser) {
    throw new ApiError(
      ErrorCode.NOT_FOUND,
      "No user found with that email address"
    );
  }

  // Check if already a member
  const existingMember = await prisma.documentMember.findUnique({
    where: {
      documentId_userId: {
        documentId: id,
        userId: targetUser.id,
      },
    },
  });

  if (existingMember) {
    // Update role instead of failing
    const updated = await prisma.documentMember.update({
      where: { id: existingMember.id },
      data: { role: validated.role },
      include: {
        user: {
          select: { id: true, name: true, email: true },
        },
      },
    });

    return NextResponse.json({
      message: "Member role updated",
      member: updated,
    });
  }

  const member = await prisma.documentMember.create({
    data: {
      documentId: id,
      userId: targetUser.id,
      role: validated.role,
    },
    include: {
      user: {
        select: { id: true, name: true, email: true },
      },
    },
  });

  return NextResponse.json(
    { message: "Member added", member },
    { status: 201 }
  );
}

/**
 * DELETE /api/documents/[id]/members
 * Remove a member from a document. Requires OWNER role.
 * The owner cannot remove themselves.
 */
async function handleDelete(
  req: Request,
  ctx: RouteParams
): Promise<NextResponse> {
  const { id } = await ctx.params;
  const user = await getSessionUser();
  await requireDocumentRole(id, user.id, ["OWNER"]);

  const body = await req.json();
  const validated = RemoveMemberSchema.parse(body);

  // Prevent owner from removing themselves
  if (validated.userId === user.id) {
    throw new ApiError(
      ErrorCode.VALIDATION_ERROR,
      "Cannot remove yourself as the owner. Transfer ownership first."
    );
  }

  // Find the membership
  const member = await prisma.documentMember.findUnique({
    where: {
      documentId_userId: {
        documentId: id,
        userId: validated.userId,
      },
    },
  });

  if (!member) {
    throw new ApiError(ErrorCode.NOT_FOUND, "Member not found");
  }

  await prisma.documentMember.delete({ where: { id: member.id } });

  return NextResponse.json({ message: "Member removed" });
}

export const GET = withErrorHandler(
  (req: Request, ctx?: unknown) => handleGet(req, ctx as RouteParams)
);
export const POST = withErrorHandler(
  (req: Request, ctx?: unknown) => handlePost(req, ctx as RouteParams)
);
export const DELETE = withErrorHandler(
  (req: Request, ctx?: unknown) => handleDelete(req, ctx as RouteParams)
);
