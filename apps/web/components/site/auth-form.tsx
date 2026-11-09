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

  const field = "h-9 w-full rounded-[8px] bg-chip px-3 text-[13px] outline-none transition-[background-color,box-shadow] placeholder:text-mute focus:bg-white focus:shadow-[inset_0_0_0_1.5px_var(--color-ink)]";
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {mode === "sign-up" && (
        <label className="flex flex-col gap-1.5 text-[13px] font-medium">
          Name
          <input name="name" autoComplete="name" className={field} placeholder="Ada Founder" />
        </label>
      )}
      <label className="flex flex-col gap-1.5 text-[13px] font-medium">
        Email
        <input name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
      </label>
      <label className="flex flex-col gap-1.5 text-[13px] font-medium">
        Password
        <input name="password" type="password" required minLength={8} autoComplete={mode === "sign-up" ? "new-password" : "current-password"} className={field} placeholder="At least 8 characters" />
      </label>
      {error && <p role="alert" className="rounded-[8px] bg-[#fdecea] px-3 py-2 text-[13px] text-[#a3261a]">{error}</p>}
      <button disabled={pending} className="btn-ink mt-1 !h-9 w-full disabled:opacity-60">
        {pending ? "Please wait…" : mode === "sign-up" ? "Create free account" : "Log in"}
      </button>
      <p className="text-center text-[13px] text-mute">
        {mode === "sign-up" ? "Already have an account? " : "New here? "}
        <Link href={(mode === "sign-up" ? "/sign-in" : "/sign-up") + "?next=" + encodeURIComponent(next)} className="font-medium text-ink underline underline-offset-2">
          {mode === "sign-up" ? "Log in" : "Create an account"}
        </Link>
      </p>
    </form>
  );
}
