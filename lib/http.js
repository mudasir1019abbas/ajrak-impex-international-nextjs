import "server-only";
import { NextResponse } from "next/server";

export const json = (data, status = 200, headers) => NextResponse.json(data, { status, headers });

export const fail = (message, status = 400, extra = {}) => json({ message, ...extra }, status);

// Parses a JSON body; returns null for a wrong content type or malformed body.
export async function readJson(request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return null;
  try {
    const body = await request.json();
    return body && typeof body === "object" && !Array.isArray(body) ? body : null;
  } catch {
    return null;
  }
}

export function tooMany(retryAfter) {
  return json(
    { message: "Too many attempts. Please wait a few minutes and try again." },
    429,
    { "Retry-After": String(retryAfter) }
  );
}

// Logs the real error on the server, returns a generic message to the client.
export function serverError(err, context) {
  console.error(`[api] ${context} failed:`, err);
  return fail("Something went wrong on our side. Please try again.", 500);
}
