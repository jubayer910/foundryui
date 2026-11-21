"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { FormError, authInput } from "./auth-card";

/** Email + password sign-in for staff. After sign-in the role is checked; non-staff see a clear message. */
export function LoginForm({ next }: { next: string }) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [denied, setDenied] = useState<string | null>(null);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email") ?? "").trim();
    const password = String(f.get("password") ?? "");
    setErr(null);
    if (!email || !password) return setErr("Enter your email and password.");
    setBusy(true);
    const { error } = await authClient.signIn.email({ email, password });
    if (error) {
      setBusy(false);
      return setErr(error.status === 401 || /invalid/i.test(error.message ?? "") ? "That email and password don't match." : (error.message ?? "Couldn't sign in. Try again."));
    }
    const me = await fetch("/admin/me", { credentials: "include", cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null);
    if (me?.admin) return window.location.assign(next);
    setBusy(false);
    setDenied(email);
  };

  const signOut = async () => {
    await authClient.signOut().catch(() => {});
    setDenied(null);
  };

  if (denied)
    return (
      <div className="flex flex-col gap-3">
        <FormError>This account has no admin access.</FormError>
        <p className="text-[13px] text-mute">
          You are signed in as <span className="text-ink">{denied}</span>. Ask an owner for an invite, or use a staff account.
        </p>
        <button type="button" onClick={signOut} className="btn-line w-full !h-9">
          Use another account
        </button>
      </div>
    );

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-3.5">
      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-medium text-ink-2 md:text-[12px]">Email</span>
        <input name="email" type="email" autoComplete="username" required autoFocus aria-invalid={!!err} className={authInput} placeholder="you@company.com" />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-[13px] font-medium text-ink-2 md:text-[12px]">Password</span>
        <input name="password" type="password" autoComplete="current-password" required aria-invalid={!!err} className={authInput} />
      </label>
      {err && <FormError>{err}</FormError>}
      <button disabled={busy} className="btn-ink mt-1 w-full !h-9 disabled:opacity-60">
        {busy ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
