import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Proxy (Next.js 16 convention, replaces middleware)
 *
 * Protects API routes by requiring authentication.
 *
 * Public routes (no auth required):
 * - /api/auth/* (NextAuth handles its own auth)
 *
 * All other /api/* routes require a valid session.
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip auth check for NextAuth routes and public pages
  if (
    pathname.startsWith("/api/auth") ||
    !pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // Check session for all other API routes
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json(
      {
        error: {
          code: "UNAUTHORIZED",
          message: "Authentication required",
        },
      },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
