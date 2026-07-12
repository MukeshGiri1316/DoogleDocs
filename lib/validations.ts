import { z } from "zod";

// ─── Payload Safety ──────────────────────────────────────────────────────
/**
 * Limits the depth and size of arbitrary JSON payloads to prevent
 * denial-of-service via deeply nested or excessively large objects.
 */

const MAX_PAYLOAD_SIZE = 65_536; // 64KB per individual operation payload
const MAX_REQUEST_SIZE = 1_048_576; // 1MB total request body

/**
 * Validates that a JSON value doesn't exceed a max depth.
 * Prevents stack overflow from deeply nested malicious payloads.
 */
function checkJsonDepth(value: unknown, maxDepth: number, current = 0): boolean {
  if (current > maxDepth) return false;
  if (value === null || typeof value !== "object") return true;
  if (Array.isArray(value)) {
    return value.every((item) => checkJsonDepth(item, maxDepth, current + 1));
  }
  return Object.values(value as Record<string, unknown>).every((v) =>
    checkJsonDepth(v, maxDepth, current + 1)
  );
}

/** Zod refinement: limits JSON depth to 10 levels */
const safeJsonPayload = z
  .any()
  .refine(
    (val) => {
      const serialized = JSON.stringify(val);
      return serialized !== undefined && serialized.length <= MAX_PAYLOAD_SIZE;
    },
    { message: `Payload must be less than ${MAX_PAYLOAD_SIZE} bytes` }
  )
  .refine((val) => checkJsonDepth(val, 10), {
    message: "Payload nesting exceeds maximum depth of 10",
  });

// ─── Auth Schemas ────────────────────────────────────────────────────────

export const RegisterSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .trim(),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
    .trim()
    .toLowerCase(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(128, "Password must be less than 128 characters")
    .regex(/[a-zA-Z]/, "Password must contain at least one letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
});

export const LoginSchema = z.object({
  email: z.string().email().trim().toLowerCase(),
  password: z.string().min(1, "Password is required"),
});

// ─── Document Schemas ────────────────────────────────────────────────────

export const DocumentCreateSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be less than 255 characters")
    .trim(),
  content: safeJsonPayload.optional().default({}),
});

export const DocumentUpdateSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(255, "Title must be less than 255 characters")
    .trim()
    .optional(),
});

// ─── Member Schemas ──────────────────────────────────────────────────────

export const AddMemberSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .trim()
    .toLowerCase(),
  role: z.enum(["EDITOR", "VIEWER"], {
    error: "Role must be EDITOR or VIEWER",
  }),
});

export const RemoveMemberSchema = z.object({
  userId: z.string().uuid("Invalid user ID"),
});

// ─── Sync Schemas ────────────────────────────────────────────────────────

const OperationSchema = z.object({
  type: z.enum(["insert", "delete", "update"], {
    error: "Operation type must be insert, delete, or update",
  }),
  payload: safeJsonPayload,
  clientId: z
    .string()
    .min(1, "Client ID is required")
    .max(255, "Client ID too long"),
  sequence: z
    .number()
    .int("Sequence must be an integer")
    .min(0, "Sequence must be non-negative"),
});

export const SyncPushSchema = z.object({
  documentId: z.string().uuid("Invalid document ID"),
  operations: z
    .array(OperationSchema)
    .min(1, "At least one operation is required")
    .max(100, "Maximum 100 operations per request"),
});

export const SyncPullSchema = z.object({
  documentId: z.string().uuid("Invalid document ID"),
  lastSyncedVersion: z
    .number()
    .int("Version must be an integer")
    .min(0, "Version must be non-negative"),
  limit: z
    .number()
    .int()
    .min(1)
    .max(500)
    .optional()
    .default(500),
});

// ─── Version Schemas ─────────────────────────────────────────────────────

export const VersionCreateSchema = z.object({
  documentId: z.string().uuid("Invalid document ID"),
  name: z
    .string()
    .max(255, "Version name must be less than 255 characters")
    .trim()
    .optional(),
});

// ─── Helpers ─────────────────────────────────────────────────────────────

/**
 * Validates the total request body size to prevent OOM attacks.
 * Call this before parsing JSON for sync endpoints.
 */
export function validateRequestSize(contentLength: string | null): void {
  if (contentLength && parseInt(contentLength, 10) > MAX_REQUEST_SIZE) {
    throw new Error(
      `Request body exceeds maximum size of ${MAX_REQUEST_SIZE} bytes`
    );
  }
}

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
export type DocumentCreateInput = z.infer<typeof DocumentCreateSchema>;
export type DocumentUpdateInput = z.infer<typeof DocumentUpdateSchema>;
export type AddMemberInput = z.infer<typeof AddMemberSchema>;
export type SyncPushInput = z.infer<typeof SyncPushSchema>;
export type SyncPullInput = z.infer<typeof SyncPullSchema>;
export type VersionCreateInput = z.infer<typeof VersionCreateSchema>;
