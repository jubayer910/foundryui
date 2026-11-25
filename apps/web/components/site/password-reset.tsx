"use client";
import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const field = "field-input h-9 w-full rounded-[8px] bg-chip px-3 text-[13px] transition-[background-color,box-shadow] placeholder:text-mute max-md:h-11 max-md:text-[16px]";
const errBox = "rounded-[8px] bg-[#fdecea] px-3 py-2 text-[13px] text-[#a3261a]";
const okBox = "rounded-[8px] bg-tile px-3 py-3 text-[13px] text-ink-2";
const signInHref = (next: string) => "/sign-in" + (next && next !== "/" ? "?next=" + encodeURIComponent(next) : "");

/** Step 1: ask for the email. Always the same answer, so the page never tells whether an email has an account. */
export function ForgotForm({ email, next }: { email?: string; next: string }) {
  const [sent, setSent] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const to = String(new FormData(e.currentTarget).get("email") ?? "").trim();
    setPending(true);
    const redirectTo = "/reset-password" + (next && next !== "/" ? "?next=" + encodeURIComponent(next) : "");
    const res = await authClient.requestPasswordReset({ email: to, redirectTo });
    setPending(false);
    if (res.error && res.error.status === 429) return setError("Too many tries. Wait a minute, then try again.");
    if (res.error && res.error.status && res.error.status >= 500) return setError("Something went wrong on our side. Try again in a minute.");
    setSent(to);
  }

  if (sent)
    return (
      <div className="flex flex-col gap-4">
        <p role="status" className={okBox}>
          If <strong className="font-medium text-ink">{sent}</strong> has an Ingot UI account, a link to choose a new password is on its way. It works for one hour. Check spam too.
        </p>
        <button type="button" onClick={() => setSent(null)} className="btn-line !h-9 w-full max-md:!h-11">
          Use another email
        </button>
        <Back next={next} />
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5 text-[13px] font-medium">
        Email
        <input name="email" type="email" required autoComplete="email" defaultValue={email} className={field} placeholder="you@company.com" />
      </label>
      {error && <p role="alert" className={errBox}>{error}</p>}
      <button disabled={pending} className="btn-ink mt-1 !h-9 w-full disabled:opacity-60 max-md:!h-11">
        {pending ? "Sending…" : "Send reset link"}
      </button>
      <Back next={next} />
    </form>
  );
}

/** Step 2: the link from the email lands here with ?token=. */
export function ResetForm({ token, next }: { token: string; next: string }) {
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const f = new FormData(e.currentTarget);
    const pw = String(f.get("password") ?? "");
    if (pw.length < 8) return setError("Use at least 8 characters.");
    if (pw !== String(f.get("confirm") ?? "")) return setError("The two passwords don't match.");
    setPending(true);
    const res = await authClient.resetPassword({ newPassword: pw, token });
    setPending(false);
    if (res.error) {
      const expired = /invalid|expired|token/i.test(res.error.message ?? "") || res.error.status === 400;
      return setError(expired ? "This link has expired or was already used. Ask for a new one." : (res.error.message ?? "Couldn't change the password. Try again."));
    }
    setDone(true);
  }

  if (done)
    return (
      <div className="flex flex-col gap-4">
        <p role="status" className={okBox}>
          Your password is changed. Log in with the new one. Other devices were signed out.
        </p>
        <Link href={signInHref(next)} className="btn-ink !h-9 w-full max-md:!h-11">
          Log in
        </Link>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5 text-[13px] font-medium">
        New password
        <input name="password" type="password" required minLength={8} autoComplete="new-password" className={field} placeholder="At least 8 characters" />
      </label>
      <label className="flex flex-col gap-1.5 text-[13px] font-medium">
        Type it again
        <input name="confirm" type="password" required minLength={8} autoComplete="new-password" className={field} />
      </label>
      {error && (
        <p role="alert" className={errBox}>
          {error}{" "}
          {/expired/.test(error) && (
            <Link href="/forgot-password" className="font-medium underline underline-offset-2">
              Send a new link
            </Link>
          )}
        </p>
      )}
      <button disabled={pending} className="btn-ink mt-1 !h-9 w-full disabled:opacity-60 max-md:!h-11">
        {pending ? "Saving…" : "Save new password"}
      </button>
    </form>
  );
}

function Back({ next }: { next: string }) {
  return (
    <p className="text-center text-[13px] text-mute">
      Remembered it?{" "}
      <Link href={signInHref(next)} className="font-medium text-ink underline underline-offset-2">
        Log in
      </Link>
    </p>
  );
}
