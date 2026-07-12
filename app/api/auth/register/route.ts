import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { RegisterSchema } from "@/lib/validations";
import { ApiError, ErrorCode, withErrorHandler } from "@/lib/errors";
import { checkRateLimit, RATE_LIMITS } from "@/lib/rate-limit";
import { getClientIp } from "@/lib/auth-utils";
import bcrypt from "bcryptjs";

async function handler(req: Request): Promise<NextResponse> {
  // Rate limit registration attempts
  const ip = getClientIp(req);
  const rateCheck = checkRateLimit(`register:${ip}`, RATE_LIMITS.auth);
  if (!rateCheck.allowed) {
    throw new ApiError(
      ErrorCode.RATE_LIMITED,
      "Too many registration attempts. Please try again later."
    );
  }

  const body = await req.json();
  const validated = RegisterSchema.parse(body);

  // Check for existing user
  const existingUser = await prisma.user.findUnique({
    where: { email: validated.email },
  });

  if (existingUser) {
    throw new ApiError(
      ErrorCode.CONFLICT,
      "An account with this email already exists"
    );
  }

  // Hash password with bcrypt (cost factor 12)
  const hashedPassword = await bcrypt.hash(validated.password, 12);

  // Create user
  const user = await prisma.user.create({
    data: {
      email: validated.email,
      name: validated.name,
      password: hashedPassword,
    },
    select: {
      id: true,
      email: true,
      name: true,
      createdAt: true,
    },
  });

  return NextResponse.json(
    {
      message: "Account created successfully",
      user,
    },
    { status: 201 }
  );
}

export const POST = withErrorHandler(handler);
