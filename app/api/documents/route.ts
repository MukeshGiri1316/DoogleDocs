import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/generated/prisma";
import { DocumentCreateSchema } from "@/lib/validations";
import { withErrorHandler } from "@/lib/errors";
import { getSessionUser } from "@/lib/auth-utils";

export const dynamic = "force-dynamic";

/**
 * GET /api/documents
 *
 * Lists all documents the authenticated user owns or is a member of.
 * Returns documents sorted by last update time.
 */
async function listHandler(): Promise<NextResponse> {
  const user = await getSessionUser();

  const documents = await prisma.document.findMany({
    where: {
      OR: [
        { ownerId: user.id },
        { members: { some: { userId: user.id } } },
      ],
    },
    include: {
      owner: { select: { id: true, name: true, email: true } },
      _count: { select: { members: true } },
    },
    orderBy: { updatedAt: "desc" },
  });

  const enriched = documents.map((doc) => {
    const isMember = true; // Already filtered above
    return {
      ...doc,
      memberCount: doc._count.members,
      role: doc.ownerId === user.id ? "OWNER" : "EDITOR",
    };
  });

  return NextResponse.json({ documents: enriched });
}

/**
 * POST /api/documents
 *
 * Creates a new document. The authenticated user becomes the owner
 * and is automatically added as a member with OWNER role.
 */
async function createHandler(req: Request): Promise<NextResponse> {
  const user = await getSessionUser();

  const body = await req.json();
  const validated = DocumentCreateSchema.parse(body);

  const document = await prisma.$transaction(async (tx: Prisma.TransactionClient) => {
    // Create the document
    const doc = await tx.document.create({
      data: {
        title: validated.title,
        content: validated.content ?? {},
        ownerId: user.id,
      },
    });

    // Assign the creator as OWNER
    await tx.documentMember.create({
      data: {
        documentId: doc.id,
        userId: user.id,
        role: "OWNER",
      },
    });

    // Create initial snapshot (version 0)
    await tx.snapshot.create({
      data: {
        documentId: doc.id,
        state: validated.content ?? {},
        version: 0,
      },
    });

    return doc;
  });

  return NextResponse.json(
    {
      message: "Document created",
      document: {
        id: document.id,
        title: document.title,
        createdAt: document.createdAt,
      },
    },
    { status: 201 }
  );
}

export const GET = withErrorHandler(listHandler);
export const POST = withErrorHandler(createHandler);
