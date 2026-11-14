"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type State = { name: string } | null | undefined;

/**
 * Account button in the rail. Reads the session in the browser so the shared layout
 * never touches cookies on the server, which keeps public pages static and cacheable.
 */
export function AccountLink() {
  const [user, setUser] = useState<State>(undefined);
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    if (user) fetch("/admin/me", { credentials: "include" }).then((r) => (r.ok ? r.json() : null)).then((d: { admin?: boolean } | null) => setAdmin(!!d?.admin)).catch(() => {});
  }, [user]);
  useEffect(() => {
    fetch("/api/auth/get-session", { credentials: "include" })
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { user?: { name?: string } } | null) => setUser(d?.user ? { name: d.user.name || "?" } : null))
      .catch(() => setUser(null));
  }, []);
  if (user === undefined) return <span className="h-7 w-16" aria-hidden="true" />;
  if (user)
    return (
      <span className="flex items-center gap-1.5">
        {admin && (
          <Link href="/admin" className="pill !h-7 !px-2.5 !text-[12px]">
            Admin
          </Link>
        )}
        <Link href="/account" aria-label="Your account" className="flex size-7 items-center justify-center rounded-full bg-ink text-[12px] font-medium text-white">
          {user.name.slice(0, 1).toUpperCase()}
        </Link>
      </span>
    );
  return (
    <Link href="/sign-in" className="btn-line !h-7 !px-3 !font-normal">
      Log in
    </Link>
  );
}
