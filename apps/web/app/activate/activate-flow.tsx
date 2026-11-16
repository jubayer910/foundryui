"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AIcon } from "@/components/admin/admin-icons";
import type { PublicActivation } from "@/lib/activation";

export type PlanChoice = { option: string; name: string; price: string; sub: string };

const POLL_MS = 20_000;
const POLL_FOR_MS = 15 * 60_000;

const field =
  "h-10 w-full rounded-[8px] bg-chip px-3 text-[14px] outline-none transition-[background-color,box-shadow] placeholder:text-mute focus:bg-white focus:shadow-[inset_0_0_0_1.5px_var(--color-ink)]";

const planName = (p: string) => (p === "lifetime" ? "Lifetime" : p === "team" ? "Team" : "Pro");

/** /activate: the plan form, then a status card that checks for approval every 20 s for 15 minutes. */
export function ActivateFlow({ choices, preset, accountEmail, initial }: { choices: PlanChoice[]; preset: string; accountEmail: string; initial: PublicActivation | null }) {
  const [act, setAct] = useState<PublicActivation | null>(initial);
  const [editing, setEditing] = useState(!initial);
  const [pick, setPick] = useState(choices.some((c) => c.option === preset) ? preset : (choices[0]?.option ?? ""));
  const [payer, setPayer] = useState(initial?.payerEmail ?? accountEmail);
  const [ref, setRef] = useState(initial?.reference ?? "");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setSending(true);
    setError(null);
    try {
      const r = await fetch("/api/activation", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ option: pick, payerEmail: payer, reference: ref, website: f.get("website") }),
      });
      const j = (await r.json().catch(() => ({}))) as { activation?: PublicActivation; message?: string };
      if (!r.ok || !j.activation) {
        setError(j.message ?? "Something went wrong. Try again.");
        return;
      }
      setAct(j.activation);
      setEditing(false);
    } catch {
      setError("You seem to be offline. Try again in a moment.");
    } finally {
      setSending(false);
    }
  }

  if (act && !editing) return <StatusCard key={act.id + act.status} act={act}onUpdate={setAct} onEdit={() => setEditing(true)} />;

  return (
    <form onSubmit={submit} className="mt-6 flex flex-col gap-6">
      <fieldset>
        <legend className="text-[13px] font-medium">Which plan did you buy?</legend>
        <div className="mt-2 grid gap-2">
          {choices.map((c) => (
            <label
              key={c.option}
              className="card flex min-h-[60px] cursor-pointer items-center gap-3 px-4 py-3 transition-shadow has-[:checked]:shadow-[inset_0_0_0_1.5px_var(--color-ink)] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink"
            >
              <input type="radio" name="option" value={c.option} checked={pick === c.option} onChange={() => setPick(c.option)} className="peer sr-only" />
              <span aria-hidden="true" className="flex size-[18px] shrink-0 items-center justify-center rounded-full shadow-[inset_0_0_0_1.5px_var(--color-hair-2)] peer-checked:bg-ink peer-checked:shadow-none">
                <span className="size-[6px] rounded-full bg-white" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[14px] font-medium">{c.name}</span>
                <span className="block text-[12px] text-mute">{c.sub}</span>
              </span>
              <span className="shrink-0 text-[13px] tabular-nums text-ink-2">{c.price}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-1.5 text-[13px] font-medium">
        Email you paid with on Contra
        <input type="email" required autoComplete="email" maxLength={200} value={payer} onChange={(e) => setPayer(e.target.value)} className={field} />
        <span className="text-[12px] font-normal text-mute">We match your payment by this email. It can differ from your account email ({accountEmail}).</span>
      </label>

      <label className="flex flex-col gap-1.5 text-[13px] font-medium">
        <span>
          Contra receipt number <span className="font-normal text-mute">(optional)</span>
        </span>
        <input value={ref} onChange={(e) => setRef(e.target.value)} maxLength={80} autoComplete="off" className={field} placeholder="For example 4F2K-91XQ" />
        <span className="flex items-start gap-1.5 text-[12px] font-normal text-mute">
          <AIcon name="receipt" size={14} className="mt-px shrink-0" />
          It is in the receipt email Contra sent you right after you paid. It helps us find your payment faster.
        </span>
      </label>

      {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {error && (
        <p role="alert" className="rounded-[8px] bg-[#fdecea] px-3 py-2 text-[13px] text-[#a3261a]">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" disabled={sending || !pick} className="btn-ink !h-11 w-full !px-6 disabled:opacity-60 sm:w-auto">
          {sending ? "Sending…" : "Activate my plan"}
        </button>
        {act && (
          <button type="button" onClick={() => setEditing(false)} className="btn-line !h-11 w-full sm:w-auto">
            Cancel
          </button>
        )}
      </div>
      <p className="-mt-3 text-[12px] text-mute">
        Not paid yet? <Link href="/pricing" className="text-ink underline underline-offset-2">See plans and prices</Link>.
      </p>
    </form>
  );
}

function StatusCard({ act, onUpdate, onEdit }: { act: PublicActivation; onUpdate: (a: PublicActivation) => void; onEdit: () => void }) {
  const pending = act.status === "pending";
  const [polling, setPolling] = useState(pending);
  const started = useRef(0);
  const [checkedAt, setCheckedAt] = useState<Date | null>(null);

  const check = useCallback(async () => {
    try {
      const r = await fetch("/api/activation/status", { cache: "no-store" });
      if (!r.ok) return;
      const j = (await r.json()) as { activation: PublicActivation | null };
      setCheckedAt(new Date());
      if (j.activation && j.activation.id === act.id && j.activation.status !== act.status) onUpdate(j.activation);
    } catch {}
  }, [act.id, act.status, onUpdate]);

  // Poll every 20 s while pending, for 15 minutes; coming back to the tab starts a new 15 minutes.
  useEffect(() => {
    if (!pending) return;
    const resume = () => {
      if (document.visibilityState !== "visible") return;
      started.current = Date.now();
      setPolling(true);
      void check();
    };
    window.addEventListener("focus", resume);
    document.addEventListener("visibilitychange", resume);
    return () => {
      window.removeEventListener("focus", resume);
      document.removeEventListener("visibilitychange", resume);
    };
  }, [pending, check]);

  useEffect(() => {
    if (!pending || !polling) return;
    if (!started.current) started.current = Date.now();
    const t = setInterval(() => {
      if (Date.now() - started.current >= POLL_FOR_MS) {
        setPolling(false);
        return;
      }
      if (document.visibilityState === "visible") void check();
    }, POLL_MS);
    return () => clearInterval(t);
  }, [pending, polling, check]);

  const details = (
    <dl className="mt-4 grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-1.5 rounded-[8px] bg-tile px-4 py-3 text-[13px]">
      <dt className="text-mute">Plan</dt>
      <dd className="truncate">{act.product}</dd>
      <dt className="text-mute">Paid as</dt>
      <dd className="truncate">{act.payerEmail}</dd>
      {act.reference && (
        <>
          <dt className="text-mute">Receipt</dt>
          <dd className="truncate">{act.reference}</dd>
        </>
      )}
    </dl>
  );

  if (act.status === "approved")
    return (
      <div className="card mt-6 p-5" role="status" aria-live="polite">
        <span className="flex size-9 items-center justify-center rounded-full bg-ink text-white">
          <AIcon name="check" size={18} />
        </span>
        <h2 className="mt-3 text-[17px] font-medium tracking-[-0.01em]">{planName(act.plan)} is active</h2>
        <p className="mt-1 text-[13px] text-mute">Thanks for buying. Everything in {planName(act.plan)} is unlocked on the site and in the MCP server.</p>
        {details}
        <div className="mt-5 flex flex-wrap gap-2">
          {/* Full load so the whole site picks up the new plan. */}
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="btn-ink !h-11 w-full !px-6 sm:w-auto">
            Browse the library
            <AIcon name="arrow-right" size={15} />
          </a>
          <a href="/account" className="btn-line !h-11 w-full !px-5 sm:w-auto">
            Your account
          </a>
        </div>
      </div>
    );

  if (act.status === "rejected")
    return (
      <div className="card mt-6 p-5" role="status" aria-live="polite">
        <span className="flex size-9 items-center justify-center rounded-full bg-[#fdecea] text-[#a3261a]">
          <AIcon name="alert-circle" size={18} />
        </span>
        <h2 className="mt-3 text-[17px] font-medium tracking-[-0.01em]">We couldn&apos;t match this payment</h2>
        <p className="mt-1 text-[13px] text-mute">{act.reason ? act.reason : "We found no Contra payment for these details."} If you did pay, write to us and we&apos;ll sort it out.</p>
        {details}
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href="/support" className="btn-ink !h-11 w-full !px-6 sm:w-auto">
            <AIcon name="message" size={15} />
            Contact support
          </Link>
          <button type="button" onClick={onEdit} className="btn-line !h-11 w-full !px-5 sm:w-auto">
            Send new details
          </button>
        </div>
      </div>
    );

  return (
    <div className="card mt-6 p-5" role="status" aria-live="polite">
      <span className="flex size-9 items-center justify-center rounded-full bg-tile text-ink">
        <AIcon name="clock-hour-4" size={18} />
      </span>
      <h2 className="mt-3 text-[17px] font-medium tracking-[-0.01em]">We&apos;re confirming your payment</h2>
      <p className="mt-1 text-[13px] text-mute">We usually confirm it within a few hours and email you when it is live. You can leave this page open, it updates by itself.</p>
      {details}
      <p className="mt-3 text-[12px] text-faint" aria-live="off">
        {polling
          ? checkedAt
            ? `Last checked ${checkedAt.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}.`
            : "Checking every 20 seconds."
          : "Paused checking. It starts again when you come back to this tab."}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={onEdit} className="btn-line !h-11 w-full !px-5 sm:w-auto">
          Fix the details
        </button>
        <Link href="/support" className="btn-line !h-11 w-full !px-5 sm:w-auto">
          Contact support
        </Link>
      </div>
    </div>
  );
}
