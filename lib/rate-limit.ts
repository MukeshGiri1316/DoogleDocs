/**
 * In-memory sliding window rate limiter.
 *
 * NOTE: This is suitable for single-instance deployments. For multi-instance
 * production, swap to Redis-backed rate limiting (e.g., @upstash/ratelimit).
 */

interface RateLimitEntry {
  timestamps: number[];
}

const store = new Map<string, RateLimitEntry>();

// Cleanup stale entries every 5 minutes to prevent memory leaks
const CLEANUP_INTERVAL = 5 * 60 * 1000;
let lastCleanup = Date.now();

function cleanup(windowMs: number) {
  const now = Date.now();
  if (now - lastCleanup < CLEANUP_INTERVAL) return;
  lastCleanup = now;

  for (const [key, entry] of store.entries()) {
    entry.timestamps = entry.timestamps.filter((t) => now - t < windowMs);
    if (entry.timestamps.length === 0) {
      store.delete(key);
    }
  }
}

export interface RateLimitConfig {
  /** Max requests allowed in the window */
  maxRequests: number;
  /** Window size in milliseconds */
  windowMs: number;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetMs: number;
}

/**
 * Check if a request is within the rate limit.
 *
 * @param key - Unique identifier (e.g., IP address or userId)
 * @param config - Rate limit configuration
 * @returns Whether the request is allowed, plus metadata
 */
export function checkRateLimit(
  key: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  cleanup(config.windowMs);

  let entry = store.get(key);
  if (!entry) {
    entry = { timestamps: [] };
    store.set(key, entry);
  }

  // Remove timestamps outside the window
  entry.timestamps = entry.timestamps.filter(
    (t) => now - t < config.windowMs
  );

  if (entry.timestamps.length >= config.maxRequests) {
    const oldestInWindow = entry.timestamps[0];
    return {
      allowed: false,
      remaining: 0,
      resetMs: oldestInWindow + config.windowMs - now,
    };
  }

  entry.timestamps.push(now);
  return {
    allowed: true,
    remaining: config.maxRequests - entry.timestamps.length,
    resetMs: config.windowMs,
  };
}

/** Default rate limit presets */
export const RATE_LIMITS = {
  /** General API: 60 requests per minute */
  api: { maxRequests: 60, windowMs: 60_000 } as RateLimitConfig,
  /** Sync push: 30 requests per minute (heavier) */
  syncPush: { maxRequests: 30, windowMs: 60_000 } as RateLimitConfig,
  /** Auth endpoints: 10 requests per minute (prevent brute force) */
  auth: { maxRequests: 10, windowMs: 60_000 } as RateLimitConfig,
};
