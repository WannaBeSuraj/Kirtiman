// Simple in-memory rate limiter
// For production, use Redis or a dedicated service like Upstash

interface RateLimitStore {
  [key: string]: { count: number; resetTime: number };
}

const store: RateLimitStore = {};

export interface RateLimitConfig {
  interval: number; // Time window in seconds
  maxRequests: number; // Max requests per interval
}

export const DEFAULT_RATE_LIMIT: RateLimitConfig = {
  interval: 60, // 1 minute
  maxRequests: 10, // 10 requests per minute
};

/**
 * Check if a request is within rate limit
 * Returns { success: boolean, remaining: number, resetIn: number }
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = DEFAULT_RATE_LIMIT
): { success: boolean; remaining: number; resetIn: number } {
  const now = Date.now();
  const key = `rl:${identifier}`;
  const entry = store[key];

  // If no entry or reset time has passed, create new entry
  if (!entry || now > entry.resetTime) {
    store[key] = {
      count: 1,
      resetTime: now + config.interval * 1000,
    };
    return {
      success: true,
      remaining: config.maxRequests - 1,
      resetIn: config.interval,
    };
  }

  // Check if limit exceeded
  if (entry.count >= config.maxRequests) {
    const resetIn = Math.ceil((entry.resetTime - now) / 1000);
    return {
      success: false,
      remaining: 0,
      resetIn,
    };
  }

  // Increment count
  entry.count++;
  const resetIn = Math.ceil((entry.resetTime - now) / 1000);

  return {
    success: true,
    remaining: config.maxRequests - entry.count,
    resetIn,
  };
}

/**
 * Get IP address from request
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded ? forwarded.split(',')[0].trim() : request.headers.get('x-real-ip') || 'unknown';
  return ip;
}

/**
 * Clean up old entries (call periodically)
 */
export function cleanupRateLimit(): void {
  const now = Date.now();
  for (const key in store) {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  }
}

// Cleanup every 5 minutes
setInterval(cleanupRateLimit, 5 * 60 * 1000);
