import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { DocumentCreateSchema } from "@/lib/validations";
import { withErrorHandler } from "@/lib/errors";
import { getSessionUser } from "@/lib/auth-utils";

async function handleGet(): Promise<NextResponse> {
  const user = await getSessionUser();

  const memberships = await prisma.documentMember.findMany({
    where: { userId: user.id },
    include: {
      document: {
        select: {
          id: true,
          title: true,
          serverVersion: true,
          ownerId: true,
          createdAt: true,
          updatedAt: true,
          owner: {
            select: { id: true, name: true, email: true },
          },
          _count: {
            select: { members: true },
          },
        },
      },
    },
    orderBy: {
      document: { updatedAt: "desc" },
    },
  });

  const documents = memberships.map((m) => ({
    ...m.document,
    role: m.role,
    memberCount: m.document._count.members,
  }));

  return NextResponse.json({ documents });
}

/**
 * Create a new document. The creator is automatically assigned the OWNER role.
 * Also creates an initial snapshot (version 0) of the empty document.
 */
async function handlePost(req: Request): Promise<NextResponse> {
  const user = await getSessionUser();
  const body = await req.json();
  const validated = DocumentCreateSchema.parse(body);

  const document = await prisma.$transaction(async (tx) => {
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

export const GET = withErrorHandler(handleGet);
export const POST = withErrorHandler(handlePost);
