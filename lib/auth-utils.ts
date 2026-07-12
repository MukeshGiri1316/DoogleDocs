import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { ApiError, ErrorCode } from "@/lib/errors";
import type { Role } from "./generated/prisma";

export interface SessionUser {
  id: string;
  email: string;
  name?: string | null;
}

export async function getSessionUser(): Promise<SessionUser> {
  const session = await auth();

  if (!session?.user?.email) {
    throw new ApiError(ErrorCode.UNAUTHORIZED, "Authentication required");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    select: { id: true, email: true, name: true },
  });

  if (!user) {
    throw new ApiError(ErrorCode.UNAUTHORIZED, "User not found");
  }

  return user as SessionUser;
}

/**
 * @param documentId - The document to check
 * @param userId - The user to check
 * @param requiredRoles - Allowed roles (e.g., ["OWNER", "EDITOR"])
 */
export async function requireDocumentRole(
  documentId: string,
  userId: string,
  requiredRoles: Role[]
) {
  const document = await prisma.document.findUnique({
    where: { id: documentId },
    select: { id: true },
  });

  if (!document) {
    throw new ApiError(ErrorCode.NOT_FOUND, "Document not found");
  }

  const member = await prisma.documentMember.findFirst({
    where: {
      documentId,
      userId,
      role: { in: requiredRoles },
    },
  });

  if (!member) {
    throw new ApiError(
      ErrorCode.FORBIDDEN,
      "You do not have the required permissions for this document"
    );
  }

  return member;
}

export async function requireDocumentMember(
  documentId: string,
  userId: string
) {
  return requireDocumentRole(documentId, userId, [
    "OWNER",
    "EDITOR",
    "VIEWER",
  ]);
}

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return req.headers.get("x-real-ip") || "unknown";
}
