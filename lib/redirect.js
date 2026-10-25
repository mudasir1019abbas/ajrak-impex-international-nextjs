// Reads ?from=/some/path (set by proxy.js) and only accepts same-site paths,
// so the login page can never be used as an open redirect.
export function getRedirectTarget(fallback = "/account") {
  if (typeof window === "undefined") return fallback;
  const from = new URLSearchParams(window.location.search).get("from");
  return from && from.startsWith("/") && !from.startsWith("//") ? from : fallback;
}
