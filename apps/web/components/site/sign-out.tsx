"use client";
import { authClient } from "@/lib/auth-client";

export function SignOut() {
  return (
    <button
      onClick={async () => {
        await authClient.signOut();
        window.location.href = "/";
      }}
      className="btn-line"
    >
      Sign out
    </button>
  );
}
