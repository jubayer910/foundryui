"use client";
import { authClient } from "@/lib/auth-client";

export function SignOut() {
  return (
    <button
      onClick={async () => {
        await authClient.signOut();
        window.location.href = "/";
      }}
      className="h-9 rounded-full border border-fu-line-strong bg-fu-surface px-4 text-sm font-medium text-fu-ink hover:bg-fu-hover"
    >
      Sign out
    </button>
  );
}
