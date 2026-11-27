"use client";
import { useState } from "react";

type Prev = { nps: number; quote: string | null; name: string | null; company: string | null; consent: boolean; approved: boolean; at: string } | null;

/**
 * Account → Feedback: an honest score (0–10) and a few words, any time. One answer per member, editable.
 * Nothing is public unless the member ticks "show on ingotui.com" AND the owner approves it in Admin → Reviews.
 */
export function ReviewForm({ prev, defaultName }: { prev: Prev; defaultName: string }) {
  const [editing, setEditing] = useState(!prev);
  const [nps, setNps] = useState<number | null>(prev?.nps ?? null);
  const [quote, setQuote] = useState(prev?.quote ?? "");
  const [consent, setConsent] = useState(prev?.consent ?? false);
  const [name, setName] = useState(prev?.name ?? defaultName);
  const [company, setCompany] = useState(prev?.company ?? "");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [sent, setSent] = useState<Prev>(prev);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    setErr(null);
    if (nps === null) return setErr("Pick a score from 0 to 10.");
    if (consent && (!quote.trim() || !name.trim())) return setErr("To show your words on ingotui.com, add your feedback and your name, or untick the box.");
    setBusy(true);
    const r = await fetch("/api/feedback", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ nps, quote: quote || undefined, consent, name: name || undefined, company: company || undefined }) }).catch(() => null);
    const d = (await r?.json().catch(() => ({}))) as { message?: string } | undefined;
    setBusy(false);
    if (!r?.ok) return setErr(d?.message ?? "Could not send it. Please try again.");
    setSent({ nps, quote: quote || null, name: name || null, company: company || null, consent, approved: false, at: new Date().toISOString() });
    setEditing(false);
  };

  if (!editing && sent)
    return (
      <div className="card p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[13px] font-medium">Thank you, we read every word.</p>
          <span className="rounded-full bg-tile px-2 py-px text-[11px] text-mute">
            {!sent.consent ? "Private" : sent.approved ? "Shown on ingotui.com" : "Waiting for review before it’s shown"}
          </span>
        </div>
        <p className="mt-3 text-[13px] text-mute">Your score</p>
        <p className="text-[22px] font-medium tabular-nums">{sent.nps}<span className="text-[13px] text-mute"> / 10</span></p>
        {sent.quote && <blockquote className="mt-3 border-l-2 border-hair pl-3 text-[13px] leading-relaxed">{sent.quote}</blockquote>}
        <button type="button" onClick={() => setEditing(true)} className="btn-line mt-4">Edit feedback</button>
      </div>
    );

  return (
    <form onSubmit={send} className="card flex flex-col gap-5 p-4 sm:p-5">
      <fieldset>
        <legend className="text-[13px] font-medium">How likely are you to recommend Ingot UI to a friend or colleague?</legend>
        <div className="mt-3 grid grid-cols-11 gap-1" role="radiogroup" aria-label="Score from 0 to 10">
          {Array.from({ length: 11 }, (_, i) => (
            <button
              key={i}
              type="button"
              role="radio"
              aria-checked={nps === i}
              onClick={() => setNps(i)}
              className={"h-9 rounded-[6px] text-[13px] tabular-nums transition-colors " + (nps === i ? "bg-ink text-white" : "bg-chip hover:bg-chip-2")}
            >
              {i}
            </button>
          ))}
        </div>
        <div className="mt-1.5 flex justify-between text-[11px] text-mute">
          <span>Not likely</span>
          <span>Very likely</span>
        </div>
      </fieldset>

      <label className="block">
        <span className="text-[13px] font-medium">What should we know? Be honest.</span>
        <span className="mt-0.5 block text-[12px] text-mute">What works, what is missing, what annoyed you. Short is fine.</span>
        <textarea
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
          maxLength={600}
          rows={4}
          className="mt-2 w-full resize-y rounded-[8px] bg-chip p-3 text-[13px] leading-relaxed outline-none focus:shadow-[0_0_0_2px_var(--color-ink)]"
        />
        <span className="mt-1 block text-right text-[11px] tabular-nums text-mute">{quote.length}/600</span>
      </label>

      <label className="flex items-start gap-2.5 text-[13px]">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 size-4 accent-[var(--color-ink)]" />
        <span>
          You can show my words on ingotui.com as a review
          <span className="block text-[12px] text-mute">Only after we read it. Leave unticked to keep it private.</span>
        </span>
      </label>
      {consent && (
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="block text-[13px]">
            <span className="font-medium">Name shown</span>
            <span className="field-pill mt-1.5 flex h-9 items-center rounded-full bg-chip px-3.5">
              <input value={name} onChange={(e) => setName(e.target.value)} maxLength={80} className="min-w-0 flex-1 bg-transparent outline-none" />
            </span>
          </label>
          <label className="block text-[13px]">
            <span className="font-medium">Company or role (optional)</span>
            <span className="field-pill mt-1.5 flex h-9 items-center rounded-full bg-chip px-3.5">
              <input value={company} onChange={(e) => setCompany(e.target.value)} maxLength={80} placeholder="e.g. Founder, Acme" className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-mute" />
            </span>
          </label>
        </div>
      )}

      {err && <p role="alert" className="text-[13px] text-[#b42318]">{err}</p>}
      <div className="flex items-center gap-3">
        <button type="submit" disabled={busy} className="btn-ink h-9 disabled:opacity-60">{busy ? "Sending…" : sent ? "Save changes" : "Send feedback"}</button>
        {sent && <button type="button" onClick={() => setEditing(false)} className="text-[13px] text-mute hover:text-ink">Cancel</button>}
      </div>
    </form>
  );
}
