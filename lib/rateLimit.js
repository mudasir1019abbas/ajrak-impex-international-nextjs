import "server-only";

// Small fixed-window rate limiter kept in memory.
// Good enough to slow down brute-force and spam on a single server. On serverless
// platforms each instance has its own counters, so for strict limits swap this for
// a shared store (e.g. Upstash Redis) - the call sites will not change.
const buckets = (globalThis.__rateBuckets ??= new Map());

export function rateLimit(request, action, { limit, windowMs }) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  const key = `${action}:${ip}`;
  const now = Date.now();

  if (buckets.size > 5000) {
    for (const [k, v] of buckets) if (v.reset <= now) buckets.delete(k);
  }

  let bucket = buckets.get(key);
  if (!bucket || bucket.reset <= now) {
    bucket = { count: 0, reset: now + windowMs };
    buckets.set(key, bucket);
  }
  bucket.count += 1;
  return { ok: bucket.count <= limit, retryAfter: Math.ceil((bucket.reset - now) / 1000) };
}
