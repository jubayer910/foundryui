"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/registry/components/icons";
import { shortAnswer } from "./answer-text";

type Answer = { slug: string; question: string; answer: string; category: string; score: number };
type Msg =
  | { id: number; from: "bot"; text: string; answers?: Answer[]; ask?: boolean }
  | { id: number; from: "user"; text: string };
type NewMsg = { from: "bot"; text: string; answers?: Answer[]; ask?: boolean } | { from: "user"; text: string };
type Step = "ask" | "confirm" | "form" | "sending" | "sent";

const GREETING = "Hi. Ask anything about plans, the licence, installing, MCP or Figma. I’ll find the answer, and if I can’t, a person will reply by email.";
const field =
  "h-9 w-full rounded-[8px] bg-chip px-3 text-[13px] outline-none transition-[background-color,box-shadow] placeholder:text-mute focus:bg-white focus:shadow-[inset_0_0_0_1.5px_var(--color-ink)]";

/** The support widget panel. Loaded lazily by components/site/support-widget.tsx. */
export default function WidgetPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [msgs, setMsgs] = useState<Msg[]>([{ id: 0, from: "bot", text: GREETING }]);
  const [step, setStep] = useState<Step>("ask");
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ticket, setTicket] = useState<string | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);

  const push = (m: NewMsg) => {
    const id = nextId.current++;
    setMsgs((list) => [...list, { ...m, id }]);
  };

  // Focus the input when opened.
  useEffect(() => {
    if (open) requestAnimationFrame(() => (step === "form" ? emailRef.current : input.current)?.focus());
  }, [open, step]);

  // New answers: show the visitor's question at the top. Anything else: scroll to the end.
  useEffect(() => {
    const el = log.current;
    if (!el) return;
    const last = msgs[msgs.length - 1];
    const users = el.querySelectorAll<HTMLElement>("[data-user]");
    const q = last?.from === "bot" && last.answers?.length ? users[users.length - 1] : null;
    el.scrollTop = q ? q.offsetTop - 12 : el.scrollHeight;
  }, [msgs, step]);

  // Esc closes; Tab stays inside the panel while it is open.
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
      return;
    }
    if (e.key !== "Tab" || !root.current) return;
    const items = [...root.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled])")].filter((el) => el.offsetParent !== null);
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  async function ask(e: React.FormEvent) {
    e.preventDefault();
    const text = q.trim();
    if (text.length < 2 || busy) return;
    setQ("");
    push({ from: "user", text });
    setBusy(true);
    let answers: Answer[] = [];
    try {
      const r = await fetch("/api/support/answers?q=" + encodeURIComponent(text));
      answers = ((await r.json()) as { answers: Answer[] }).answers ?? [];
    } catch {}
    setBusy(false);
    if (answers.length) {
      push({ from: "bot", text: answers.length === 1 ? "This should answer it:" : "These should help:", answers, ask: true });
      setStep("confirm");
    } else {
      push({ from: "bot", text: "I couldn’t find a saved answer for that. Leave your email and a person will reply." });
      setStep("form");
    }
  }

  function solved(yes: boolean) {
    push({ from: "user", text: yes ? "Yes, that solved it" : "No, I still need help" });
    if (yes) {
      push({ from: "bot", text: "Glad that helped. Ask another question any time." });
      setStep("ask");
    } else {
      push({ from: "bot", text: "Sorry about that. Leave your email and we’ll pick it up from here." });
      setStep("form");
    }
  }

  function transcript(extra: string) {
    const lines: string[] = [];
    for (const m of msgs) {
      if (m.id === 0) continue;
      if (m.from === "user") lines.push("Visitor: " + m.text);
      else lines.push("Assistant: " + m.text + (m.from === "bot" && m.answers?.length ? " " + m.answers.map((a) => `[${a.question}] /support#${a.slug}`).join(", ") : ""));
    }
    if (extra) lines.push("", "More detail from the visitor:", extra);
    return lines.join("\n");
  }

  async function sendTicket(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const firstQuestion = msgs.find((m) => m.from === "user")?.text ?? "Question from the help widget";
    const message = transcript(String(f.get("detail") ?? "").trim());
    setError(null);
    setStep("sending");
    try {
      const r = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: f.get("email"), name: f.get("name"), subject: firstQuestion.slice(0, 140), message: message.length >= 10 ? message : firstQuestion + " (from the help widget)", website: f.get("website"), source: "widget" }),
      });
      const j = (await r.json().catch(() => ({}))) as { id?: string; message?: string };
      if (!r.ok || !j.id) {
        setError(j.message ?? "Something went wrong. Try again.");
        setStep("form");
        return;
      }
      setTicket(j.id);
      setStep("sent");
    } catch {
      setError("You seem to be offline. Try again, or email support@ingotui.com.");
      setStep("form");
    }
  }

  return (
    <div
      ref={root}
      id="support-widget-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-widget-title"
      onKeyDown={onKeyDown}
      className="fixed bottom-[calc(72px+env(safe-area-inset-bottom))] right-[calc(16px+env(safe-area-inset-right))] z-50 flex max-h-[min(580px,calc(100dvh-96px-env(safe-area-inset-bottom)))] w-[min(360px,calc(100vw-32px))] origin-bottom-right flex-col overflow-hidden rounded-[14px] bg-white shadow-[0_0_0_1px_var(--color-hair-2),0_16px_48px_rgb(0_0_0/0.14)] transition-[opacity,transform] duration-150 ease-out starting:translate-y-1.5 starting:scale-[0.98] starting:opacity-0 motion-reduce:transition-none print:hidden"
    >
      <header className="flex items-center gap-2.5 border-b border-hair px-4 py-3">
        <span className="flex size-7 items-center justify-center rounded-full bg-ink text-white">
          <Icon name="chat" size={15} />
        </span>
        <div className="min-w-0 flex-1">
          <h2 id="support-widget-title" className="text-[13px] font-medium leading-tight">Ingot UI help</h2>
          <p className="text-[11px] text-mute">Instant answers, or a reply within a day</p>
        </div>
        <button type="button" onClick={onClose} aria-label="Close help" className="flex size-7 items-center justify-center rounded-full text-mute hover:bg-tile hover:text-ink">
          <Icon name="x" size={15} />
        </button>
      </header>

      <div ref={log} className="relative flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto px-4 py-3" aria-live="polite">
        {msgs.map((m) =>
          m.from === "user" ? (
            <p key={m.id} data-user="" className="max-w-[85%] self-end rounded-[12px] rounded-br-[4px] bg-ink px-3 py-2 text-[13px] leading-snug text-white">{m.text}</p>
          ) : (
            <div key={m.id} className="flex flex-col gap-2">
              <p className="max-w-[92%] rounded-[12px] rounded-bl-[4px] bg-tile px-3 py-2 text-[13px] leading-snug">{m.text}</p>
              {m.answers?.map((a) => (
                <article key={a.slug} className="rounded-[10px] p-3 shadow-[inset_0_0_0_1px_var(--color-hair-2)]">
                  <h3 className="text-[13px] font-medium leading-snug">{a.question}</h3>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-ink-2">{shortAnswer(a.answer)}</p>
                  <a href={"/support#" + a.slug} className="mt-1.5 inline-flex items-center gap-0.5 text-[12px] font-medium text-ink underline-offset-2 hover:underline">
                    Read more <Icon name="chevron-right" size={13} />
                  </a>
                </article>
              ))}
            </div>
          ),
        )}
        {busy && <p className="self-start rounded-[12px] bg-tile px-3 py-2 text-[13px] text-mute">Looking…</p>}

        {step === "confirm" && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-[12px] text-mute">Did this solve it?</span>
            <button type="button" onClick={() => solved(true)} className="btn-line !h-7 !px-3 !text-[12px]">Yes</button>
            <button type="button" onClick={() => solved(false)} className="btn-line !h-7 !px-3 !text-[12px]">No</button>
          </div>
        )}

        {(step === "form" || step === "sending") && (
          <form onSubmit={sendTicket} className="flex flex-col gap-2.5 rounded-[10px] bg-tile p-3" aria-label="Send to a person">
            <label className="flex flex-col gap-1 text-[12px] font-medium">
              Email
              <input ref={emailRef} name="email" type="email" required autoComplete="email" maxLength={200} className={field + " bg-white"} placeholder="you@company.com" />
            </label>
            <label className="flex flex-col gap-1 text-[12px] font-medium">
              Name <span className="font-normal text-mute">(optional)</span>
              <input name="name" autoComplete="name" maxLength={80} className={field + " bg-white"} placeholder="Your name" />
            </label>
            <label className="flex flex-col gap-1 text-[12px] font-medium">
              Anything to add? <span className="font-normal text-mute">(optional)</span>
              <textarea name="detail" rows={2} maxLength={2000} className={field + " h-auto resize-none bg-white py-2 leading-snug"} placeholder="Page, component or error message" />
            </label>
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <input name="website" tabIndex={-1} autoComplete="off" />
            </div>
            {error && <p role="alert" className="rounded-[8px] bg-[#fdecea] px-2.5 py-1.5 text-[12px] text-[#a3261a]">{error}</p>}
            <p className="text-[11px] text-mute">Our conversation is sent with it, so you don’t have to repeat yourself.</p>
            <button disabled={step === "sending"} className="btn-ink !h-8 w-full disabled:opacity-60">{step === "sending" ? "Sending…" : "Send to a person"}</button>
          </form>
        )}

        {step === "sent" && ticket && (
          <div role="status" className="rounded-[10px] bg-tile p-3">
            <p className="flex items-center gap-1.5 text-[13px] font-medium">
              <Icon name="check" size={15} /> Ticket {ticket}
            </p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-ink-2">We’ll reply to your email, usually within a day.</p>
            <button type="button" onClick={() => setStep("ask")} className="btn-line mt-2.5 !h-7 !px-3 !text-[12px]">Ask something else</button>
          </div>
        )}
      </div>

      {(step === "ask" || step === "confirm") && (
        <form onSubmit={ask} className="flex items-center gap-2 border-t border-hair p-2.5">
          <label htmlFor="support-widget-q" className="sr-only">Your question</label>
          <input
            ref={input}
            id="support-widget-q"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            maxLength={300}
            autoComplete="off"
            placeholder="Ask a question"
            className={field + " flex-1"}
          />
          <button disabled={busy || q.trim().length < 2} className="btn-ink !h-9 shrink-0 disabled:opacity-40">Ask</button>
        </form>
      )}
    </div>
  );
}
