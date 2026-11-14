"use client";
import { useActionState, useState } from "react";
import { FormError, authInput } from "./auth-card";

type State = { error?: string; field?: "name" | "password" | "confirm" } | null;
type Action = (p: State, f: FormData) => Promise<State>;

const Label = ({ children }: { children: React.ReactNode }) => <span className="text-[12px] font-medium text-ink-2">{children}</span>;

/** New account: name, password, confirm. */
export function AcceptNewForm({ token, email, action }: { token: string; email: string; action: Action }) {
  const [st, run, pending] = useActionState(action, null);
  // Controlled so the name survives a failed submit (React resets uncontrolled fields after a form action).
  const [name, setName] = useState("");
  return (
    <form action={run} noValidate className="flex flex-col gap-3.5">
      <input type="hidden" name="token" value={token} />
      <label className="flex flex-col gap-1.5">
        <Label>Email</Label>
        <input value={email} readOnly autoComplete="username" className={authInput} />
      </label>
      <label className="flex flex-col gap-1.5">
        <Label>Your name</Label>
        <input name="name" value={name} onChange={(e) => setName(e.target.value)} required autoFocus autoComplete="name" maxLength={80} aria-invalid={st?.field === "name"} className={authInput} />
      </label>
      <label className="flex flex-col gap-1.5">
        <Label>Password</Label>
        <input name="password" type="password" required minLength={8} autoComplete="new-password" aria-invalid={st?.field === "password"} aria-describedby="pw-hint" className={authInput} />
        <span id="pw-hint" className="text-[12px] text-faint">
          At least 8 characters.
        </span>
      </label>
      <label className="flex flex-col gap-1.5">
        <Label>Confirm password</Label>
        <input name="confirm" type="password" required minLength={8} autoComplete="new-password" aria-invalid={st?.field === "confirm"} className={authInput} />
      </label>
      {st?.error && <FormError>{st.error}</FormError>}
      <button disabled={pending} className="btn-ink mt-1 w-full !h-9 disabled:opacity-60">
        {pending ? "Creating your account…" : "Create account and open admin"}
      </button>
    </form>
  );
}

/** Existing account: password for the invited email. */
export function AcceptExistingForm({ token, email, action }: { token: string; email: string; action: Action }) {
  const [st, run, pending] = useActionState(action, null);
  return (
    <form action={run} noValidate className="flex flex-col gap-3.5">
      <input type="hidden" name="token" value={token} />
      <label className="flex flex-col gap-1.5">
        <Label>Email</Label>
        <input value={email} readOnly autoComplete="username" className={authInput} />
      </label>
      <label className="flex flex-col gap-1.5">
        <Label>Password</Label>
        <input name="password" type="password" required autoFocus autoComplete="current-password" aria-invalid={st?.field === "password"} className={authInput} />
      </label>
      {st?.error && <FormError>{st.error}</FormError>}
      <button disabled={pending} className="btn-ink mt-1 w-full !h-9 disabled:opacity-60">
        {pending ? "Signing in…" : "Sign in and accept"}
      </button>
    </form>
  );
}

/** Signed in as the invited email already. */
export function AcceptSignedInForm({ token, action }: { token: string; action: Action }) {
  const [st, run, pending] = useActionState(action, null);
  return (
    <form action={run} className="flex flex-col gap-3">
      <input type="hidden" name="token" value={token} />
      {st?.error && <FormError>{st.error}</FormError>}
      <button disabled={pending} className="btn-ink w-full !h-9 disabled:opacity-60">
        {pending ? "Accepting…" : "Accept and open admin"}
      </button>
    </form>
  );
}
