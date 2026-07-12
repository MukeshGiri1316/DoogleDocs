import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Initialize an Edge-compatible auth check for middleware/proxy
const { auth: edgeAuth } = NextAuth(authConfig);

/**
 * Proxy (Next.js 16 convention, replaces middleware)
 *
 * Protects API routes by requiring authentication.
 * Runs in the Edge runtime, so it must not import Node.js APIs or DB adapters.
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

  // Check session using the Edge-compatible auth client
  const session = await edgeAuth();

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
