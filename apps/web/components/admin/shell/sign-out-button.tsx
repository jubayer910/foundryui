"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

/** Signs out, then reloads `to` (default: this page). */
export function SignOutButton({ label = "Sign out", to, className = "btn-line w-full !h-9" }: { label?: string; to?: string; className?: string }) {
  const [busy, setBusy] = useState(false);
  return (
    <button
      type="button"
      disabled={busy}
      className={className + " disabled:opacity-60"}
      onClick={async () => {
        setBusy(true);
        await authClient.signOut().catch(() => {});
        if (to) window.location.assign(to);
        else window.location.reload();
      }}
    >
      {busy ? "Signing out…" : label}
    </button>
  );
}
