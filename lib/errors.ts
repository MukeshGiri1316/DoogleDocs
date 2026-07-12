import { NextResponse } from "next/server";

/**
 * Standardized API error codes
 */
export enum ErrorCode {
  UNAUTHORIZED = "UNAUTHORIZED",
  FORBIDDEN = "FORBIDDEN",
  NOT_FOUND = "NOT_FOUND",
  VALIDATION_ERROR = "VALIDATION_ERROR",
  CONFLICT = "CONFLICT",
  RATE_LIMITED = "RATE_LIMITED",
  PAYLOAD_TOO_LARGE = "PAYLOAD_TOO_LARGE",
  INTERNAL_ERROR = "INTERNAL_ERROR",
}

const STATUS_MAP: Record<ErrorCode, number> = {
  [ErrorCode.UNAUTHORIZED]: 401,
  [ErrorCode.FORBIDDEN]: 403,
  [ErrorCode.NOT_FOUND]: 404,
  [ErrorCode.VALIDATION_ERROR]: 400,
  [ErrorCode.CONFLICT]: 409,
  [ErrorCode.RATE_LIMITED]: 429,
  [ErrorCode.PAYLOAD_TOO_LARGE]: 413,
  [ErrorCode.INTERNAL_ERROR]: 500,
};

/**
 * Custom API error class for consistent error handling across all routes
 */
export class ApiError extends Error {
  public readonly code: ErrorCode;
  public readonly status: number;
  public readonly details?: unknown;

  constructor(code: ErrorCode, message: string, details?: unknown) {
    super(message);
    this.name = "ApiError";
    this.code = code;
    this.status = STATUS_MAP[code];
    this.details = details;
  }

  toResponse(): NextResponse {
    return NextResponse.json(
      {
        error: {
          code: this.code,
          message: this.message,
          ...(this.details ? { details: this.details } : {}),
        },
      },
      { status: this.status }
    );
  }
}

/**
 * Wraps an async route handler with standardized error handling.
 * Catches ApiError instances and Zod validation errors, returning
 * consistent JSON error responses.
 */
export function withErrorHandler(
  handler: (req: Request, ctx?: unknown) => Promise<NextResponse>
) {
  return async (req: Request, ctx?: unknown): Promise<NextResponse> => {
    try {
      return await handler(req, ctx);
    } catch (error) {
      if (error instanceof ApiError) {
        return error.toResponse();
      }

      // Zod validation errors
      if (
        error &&
        typeof error === "object" &&
        "issues" in error &&
        Array.isArray((error as { issues: unknown[] }).issues)
      ) {
        return new ApiError(
          ErrorCode.VALIDATION_ERROR,
          "Validation failed",
          (error as { issues: unknown[] }).issues
        ).toResponse();
      }

      console.error("Unhandled API error:", error);
      return new ApiError(
        ErrorCode.INTERNAL_ERROR,
        "An unexpected error occurred"
      ).toResponse();
    }
  };
}
