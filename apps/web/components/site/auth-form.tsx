"use client";
import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export function AuthForm({ mode, next = "/account" }: { mode: "sign-in" | "sign-up"; next?: string }) {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email"));
    const password = String(f.get("password"));
    const res =
      mode === "sign-up"
        ? await authClient.signUp.email({ email, password, name: String(f.get("name") || email.split("@")[0]) })
        : await authClient.signIn.email({ email, password });
    setPending(false);
    if (res.error) {
      setError(res.error.message ?? "Something went wrong. Try again.");
      return;
    }
    window.location.href = next;
  }

  const field = "h-10 w-full rounded-fu-sm border border-hair-2 bg-fu-surface px-3 text-sm text-fu-ink outline-none transition-[border-color,box-shadow] placeholder:text-fu-faint focus:border-fu-accent focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--fu-accent)_14%,transparent)]";
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {mode === "sign-up" && (
        <label className="flex flex-col gap-1.5 text-[13px] font-medium text-fu-ink">
          Name
          <input name="name" autoComplete="name" className={field} placeholder="Ada Founder" />
        </label>
      )}
      <label className="flex flex-col gap-1.5 text-[13px] font-medium text-fu-ink">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
      </label>
      <label className="flex flex-col gap-1.5 text-[13px] font-medium text-fu-ink">
        Password
        <input name="password" type="password" required minLength={8} autoComplete={mode === "sign-up" ? "new-password" : "current-password"} className={field} placeholder="At least 8 characters" />
      </label>
      {error && <p role="alert" className="rounded-fu-sm bg-fu-negative-soft px-3 py-2 text-[13px] text-fu-negative">{error}</p>}
      <button disabled={pending} className="mt-1 flex h-10 items-center justify-center rounded-[10px] text-sm font-medium text-white bg-ink hover:bg-[#23262c] disabled:opacity-60">
        {pending ? "Please wait…" : mode === "sign-up" ? "Create free account" : "Sign in"}
      </button>
      <p className="text-center text-[13px] text-fu-muted">
        {mode === "sign-up" ? "Already have an account? " : "New here? "}
        <Link href={(mode === "sign-up" ? "/sign-in" : "/sign-up") + "?next=" + encodeURIComponent(next)} className="font-medium text-fu-ink underline underline-offset-2">
          {mode === "sign-up" ? "Sign in" : "Create an account"}
        </Link>
      </p>
    </form>
  );
}
