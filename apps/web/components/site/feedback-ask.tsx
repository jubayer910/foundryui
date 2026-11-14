"use client";
import { useEffect, useId, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { read } from "@/lib/local-library";
import { Icon } from "@/registry/components/icons";

/* Client pieces of the founder onboarding on /account. The server part (real state from D1) is onboarding-checklist.tsx. */

const field = "field-input w-full rounded-[8px] bg-chip px-3 text-[13px] transition-[background-color,box-shadow] placeholder:text-mute";

async function post(url: string, body: unknown) {
  const r = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
  const j = (await r.json().catch(() => ({}))) as { error?: string; message?: string };
  return { ok: r.ok, status: r.status, ...j };
}

/**
 * Copies what this browser already knows into the account, once: the system picked on /welcome
 * (localStorage fu_system) and items saved in the library (fu_saved). Then re-renders the checklist from D1.
 */
export function LibrarySync({ systems }: { systems: string[] }) {
  const router = useRouter();
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    let system: string | null = null;
    try {
      system = localStorage.getItem("fu_system");
    } catch {}
    const saved = read("saved").slice(0, 50);
    const body = { ...(system && systems.includes(system) ? { system } : {}), ...(saved.length ? { saved } : {}) };
    if (!Object.keys(body).length) return;
    post("/api/feedback/profile", body).then((r) => r.ok && router.refresh());
  }, [router, systems]);
  return null;
}

/* ---------------- "What are you building?" ---------------- */

export function SegmentSurvey({ options }: { options: { id: string; label: string }[] }) {
  const [pick, setPick] = useState<string | null>(null);
  const [other, setOther] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done" | "gone" | "error">("idle");
  const name = useId();
  if (state === "gone") return null;
  if (state === "done")
    return (
      <div role="status" className="card mt-3 flex items-center gap-3 p-4 text-[13px]">
        <Icon name="check" size={16} className="shrink-0" />
        <span>Thanks. We’ll use this to point you at the screens and tips that fit.</span>
      </div>
    );

  const save = async () => {
    if (!pick) return;
    setState("busy");
    const r = await post("/api/feedback/profile", { segment: pick, ...(pick === "other" && other.trim() ? { segmentOther: other } : {}) });
    setState(r.ok ? "done" : "error");
  };
  const skip = async () => {
    setState("gone");
    await post("/api/feedback/profile", { dismiss: "survey" });
  };

  return (
    <form
      className="card mt-3 p-4"
      onSubmit={(e) => {
        e.preventDefault();
        save();
      }}
    >
      <fieldset>
        <legend className="text-[13px] font-medium">What are you building?</legend>
        <p className="mt-0.5 text-[13px] text-mute">One question, so we can show you the parts that fit. You can skip it.</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {options.map((o) => (
            <label key={o.id} data-on={pick === o.id} className="pill cursor-pointer has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink">
              <input type="radio" name={name} value={o.id} checked={pick === o.id} onChange={() => setPick(o.id)} className="sr-only" />
              {o.label}
            </label>
          ))}
        </div>
        {pick === "other" && (
          <label className="mt-3 block max-w-sm">
            <span className="sr-only">What are you building? (optional)</span>
            <input value={other} onChange={(e) => setOther(e.target.value)} maxLength={80} placeholder="In a few words (optional)" className={field + " h-9"} />
          </label>
        )}
      </fieldset>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button type="submit" className="btn-ink disabled:opacity-50" disabled={!pick || state === "busy"}>
          {state === "busy" ? "Saving…" : "Save answer"}
        </button>
        <button type="button" onClick={skip} className="btn-line">
          Skip
        </button>
        {state === "error" && (
          <span role="alert" className="text-[13px] text-mute">
            Could not save. Try again in a moment.
          </span>
        )}
      </div>
    </form>
  );
}

/* ---------------- NPS + quote, with explicit consent ---------------- */

export function FeedbackAsk({ defaultName }: { defaultName: string }) {
  const [nps, setNps] = useState<number | null>(null);
  const [quote, setQuote] = useState("");
  const [consent, setConsent] = useState(false);
  const [name, setName] = useState(defaultName);
  const [company, setCompany] = useState("");
  const [state, setState] = useState<"idle" | "busy" | "done" | "gone">("idle");
  const [error, setError] = useState<string | null>(null);
  const group = useId();
  const ids = { quote: useId(), consent: useId(), name: useId(), company: useId(), hint: useId() };

  if (state === "gone") return null;
  if (state === "done")
    return (
      <div role="status" className="card mt-3 flex items-start gap-3 p-4 text-[13px]">
        <Icon name="check" size={16} className="mt-0.5 shrink-0" />
        <p>
          <span className="font-medium">Thank you, this goes straight to the people building Ingot UI.</span>{" "}
          <span className="text-mute">{consent ? "We read every quote before anything appears on ingotui.com." : "It stays private: we won’t show it anywhere."}</span>
        </p>
      </div>
    );

  const send = async () => {
    setError(null);
    if (nps === null) return setError("Pick a score from 0 to 10.");
    if (consent && (!quote.trim() || !name.trim())) return setError("To show your words on ingotui.com, add the quote and your name, or untick the box.");
    setState("busy");
    const r = await post("/api/feedback", { nps, quote: quote || undefined, consent, name: name || undefined, company: company || undefined });
    if (r.ok || r.status === 409) return setState("done");
    setState("idle");
    setError(r.message ?? "Could not send. Try again in a moment.");
  };
  const later = async () => {
    setState("gone");
    await post("/api/feedback/profile", { dismiss: "feedback" });
  };

  return (
    <form
      aria-labelledby={group + "-t"}
      className="card mt-3 p-4"
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
    >
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-tile">
          <Icon name="chat" size={18} />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id={group + "-t"} className="text-[13px] font-medium">
            You’ve been building with Ingot UI. How is it going?
          </h2>
          <p className="text-[13px] text-mute">Two questions. Your answer shapes what we build next.</p>
        </div>
      </div>

      <fieldset className="mt-4">
        <legend className="text-[13px]">How likely are you to recommend Ingot UI to another founder?</legend>
        <div className="mt-2 grid grid-cols-6 gap-1.5 sm:flex sm:flex-wrap">
          {Array.from({ length: 11 }, (_, n) => (
            <label key={n} data-on={nps === n} className="pill cursor-pointer justify-center tabular-nums sm:w-9 sm:px-0 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ink">
              <input type="radio" name={group} value={n} checked={nps === n} onChange={() => setNps(n)} className="sr-only" aria-describedby={ids.hint} />
              {n}
            </label>
          ))}
        </div>
        <p id={ids.hint} className="mt-1.5 flex max-w-[420px] justify-between text-[12px] text-mute">
          <span>0 = not at all likely</span>
          <span>10 = extremely likely</span>
        </p>
      </fieldset>

      <label htmlFor={ids.quote} className="mt-4 block text-[13px]">
        What would you tell another founder about Ingot UI? <span className="text-mute">(optional)</span>
      </label>
      <textarea id={ids.quote} value={quote} onChange={(e) => setQuote(e.target.value)} maxLength={600} rows={3} className={field + " mt-2 resize-y py-2"} placeholder="What it helped you ship, what was hard, what’s missing" />
      <p className="mt-1 text-right text-[12px] text-faint tabular-nums" aria-live="polite">
        {quote.length}/600
      </p>

      <label htmlFor={ids.consent} className="mt-2 flex cursor-pointer items-start gap-2.5 text-[13px]">
        <input id={ids.consent} type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 size-4 shrink-0 accent-ink" />
        <span>
          You may show this quote with my name/company on ingotui.com
          <span className="block text-[12px] text-mute">Leave it unticked and your answer stays private. You can ask us to remove a quote at any time.</span>
        </span>
      </label>

      {consent && (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label htmlFor={ids.name} className="block text-[13px]">
            Name to show
            <input id={ids.name} value={name} onChange={(e) => setName(e.target.value)} maxLength={80} required autoComplete="name" className={field + " mt-1.5 h-9"} />
          </label>
          <label htmlFor={ids.company} className="block text-[13px]">
            Company or product <span className="text-mute">(optional)</span>
            <input id={ids.company} value={company} onChange={(e) => setCompany(e.target.value)} maxLength={80} autoComplete="organization" className={field + " mt-1.5 h-9"} />
          </label>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button type="submit" className="btn-ink disabled:opacity-50" disabled={state === "busy"}>
          {state === "busy" ? "Sending…" : "Send feedback"}
        </button>
        <button type="button" onClick={later} className="btn-line">
          Not now
        </button>
        {error && (
          <span role="alert" className="text-[13px] text-ink">
            {error}
          </span>
        )}
      </div>
    </form>
  );
}
