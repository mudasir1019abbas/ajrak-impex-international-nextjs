"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

// Client-side guard. proxy.js already blocks visitors without a session cookie;
// this also handles a cookie whose account no longer exists.
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const wasAuthenticated = useRef(false);

  useEffect(() => {
    if (isAuthenticated) {
      wasAuthenticated.current = true;
    } else if (!loading) {
      // Signed out while on this page -> home. Never signed in -> login, and come back after.
      router.replace(wasAuthenticated.current ? "/" : `/login?from=${encodeURIComponent(pathname)}`);
    }
  }, [loading, isAuthenticated, router, pathname]);

  if (loading || !isAuthenticated) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <span className="h-10 w-10 animate-spin rounded-full border-4 border-maroon-100 border-t-maroon-700" />
      </div>
    );
  }
  return children;
}
