"use client";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { ChatResponse, DialogState, Reply } from "./assistant/types";
import { ReplyBody } from "./assistant/ui/cards";
import { Glyph, IngotMark } from "./assistant/ui/glyph";

/**
 * The help assistant panel (lazy-loaded by components/site/support-widget.tsx). Answers come from
 * POST /api/support/chat: our own engine over the docs, the library and live data, no LLM.
 */

type Msg =
  | { id: number; from: "user"; text: string }
  | { id: number; from: "bot"; reply: Reply; vote?: "yes" | "no" }
  | { id: number; from: "ticket"; ticket: string };

type NewMsg = { from: "user"; text: string } | { from: "bot"; reply: Reply } | { from: "ticket"; ticket: string };

type Saved = { v: 2; msgs: Msg[]; state: DialogState | null; form: boolean; prefill?: { email: string; name: string } };

const KEY = "ingot-help:v2";
const STARTERS = ["Find a component", "Set up MCP", "Pricing and Lifetime deal", "Install code", "Payment or activation", "Talk to a human"];
const WELCOME: Reply = {
  text: "Hi. I’m the Ingot UI help assistant. I answer from our docs and library, show you components, icons and live prices, and can pass you to a person any time.",
  chips: STARTERS,
  intent: "welcome",
  confidence: 1,
};
const MIN_TYPING = 380;
const field =
  "h-9 w-full rounded-[8px] bg-white px-3 text-[13px] outline-none transition-[box-shadow] placeholder:text-mute shadow-[inset_0_0_0_1px_var(--color-hair-2)] focus:shadow-[inset_0_0_0_1.5px_var(--color-ink)]";

function load(): Saved | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as Saved;
    return s && s.v === 2 && Array.isArray(s.msgs) ? s : null;
  } catch {
    return null;
  }
}

const fresh = (): Msg[] => [{ id: 0, from: "bot", reply: WELCOME }];

export default function WidgetPanel({ open, onMinimise, onClose }: { open: boolean; onMinimise: () => void; onClose: () => void }) {
  const router = useRouter();
  const [msgs, setMsgs] = useState<Msg[]>(fresh);
  const [state, setState] = useState<DialogState | null>(null);
  const [form, setForm] = useState(false);
  const [prefill, setPrefill] = useState<{ email: string; name: string } | undefined>();
  const [q, setQ] = useState("");
  const [busy, setBusy] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [drag, setDrag] = useState(0);
  const restored = useRef(false);
  const root = useRef<HTMLDivElement>(null);
  const input = useRef<HTMLTextAreaElement>(null);
  const log = useRef<HTMLDivElement>(null);
  const nextId = useRef(1);
  const dragFrom = useRef<number | null>(null);

  // restore this tab's conversation
  useLayoutEffect(() => {
    const s = load();
    if (s) {
      /* eslint-disable react-hooks/set-state-in-effect -- one-time restore from sessionStorage */
      setMsgs(s.msgs.length ? s.msgs : fresh());
      setState(s.state);
      setForm(s.form);
      setPrefill(s.prefill);
      /* eslint-enable react-hooks/set-state-in-effect */
      nextId.current = Math.max(0, ...s.msgs.map((m) => m.id)) + 1;
    }
    restored.current = true;
  }, []);

  useEffect(() => {
    if (!restored.current) return;
    try {
      sessionStorage.setItem(KEY, JSON.stringify({ v: 2, msgs: msgs.slice(-40), state, form, prefill } satisfies Saved));
    } catch {}
  }, [msgs, state, form, prefill]);

  // focus the composer when the panel opens
  useEffect(() => {
    if (open) requestAnimationFrame(() => (form ? root.current?.querySelector<HTMLInputElement>("input[name=email]") : input.current)?.focus());
  }, [open, form]);

  // keep the newest message in view: a long answer scrolls to its start, anything else to the end
  useEffect(() => {
    const el = log.current;
    if (!el) return;
    const all = el.querySelectorAll<HTMLElement>("[data-msg]");
    const last = all[all.length - 1];
    const lastMsg = msgs[msgs.length - 1];
    if (last && lastMsg?.from === "bot" && last.offsetHeight > el.clientHeight * 0.7) el.scrollTop = last.offsetTop - 8;
    else el.scrollTop = el.scrollHeight;
  }, [msgs, busy, form]);

  const push = useCallback((m: NewMsg) => {
    const id = nextId.current++;
    setMsgs((list) => [...list, { ...m, id } as Msg]);
    return id;
  }, []);

  async function ask(text: string) {
    const message = text.trim().slice(0, 500);
    if (!message || busy) return;
    setQ("");
    push({ from: "user", text: message });
    setBusy(true);
    // a short, fixed minimum for the typing line, so instant answers don't flash
    const minWait = new Promise((r) => setTimeout(r, MIN_TYPING));
    const history = msgs
      .filter((m) => m.from !== "ticket")
      .slice(-8)
      .map((m) => (m.from === "user" ? { role: "user" as const, text: m.text } : { role: "assistant" as const, text: (m as Extract<Msg, { from: "bot" }>).reply.text.slice(0, 600) }));
    let res: ChatResponse | null = null;
    try {
      const r = await fetch("/api/support/chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ message, state, history }) });
      res = (await r.json().catch(() => null)) as ChatResponse | null;
    } catch {}
    await minWait;
    setBusy(false);
    if (!res?.reply) {
      push({ from: "bot", reply: { text: "I can’t reach the help service right now. Check your connection and try again, or email support@ingotui.com.", intent: "offline", confidence: 1, chips: ["Talk to a human"] } });
      return;
    }
    setState(res.state);
    push({ from: "bot", reply: res.reply });
    if (res.reply.handoff) {
      setPrefill(res.reply.prefill);
      setForm(true);
    }
  }

  function vote(id: number, v: "yes" | "no") {
    setMsgs((list) => list.map((m) => (m.id === id && m.from === "bot" ? { ...m, vote: v } : m)));
    if (v === "no")
      push({ from: "bot", reply: { text: "Sorry that didn’t help. Ask it another way and I’ll look again, or a person can take it from here.", chips: ["Talk to a human"], intent: "feedback_no", confidence: 1 } });
  }

  function newChat() {
    setMsgs(fresh());
    setState(null);
    setForm(false);
    setError(null);
    nextId.current = 1;
    try {
      sessionStorage.removeItem(KEY);
    } catch {}
    requestAnimationFrame(() => input.current?.focus());
  }

  function transcript(extra: string) {
    const lines: string[] = ["Conversation with the help assistant:"];
    for (const m of msgs) {
      if (m.id === 0) continue;
      if (m.from === "user") lines.push("Visitor: " + m.text);
      else if (m.from === "bot") lines.push("Assistant: " + m.reply.text.replace(/\s+/g, " ").slice(0, 400) + (m.reply.article ? ` [/support#${m.reply.article}]` : ""));
    }
    if (extra) lines.push("", "More detail from the visitor:", extra);
    return lines.join("\n");
  }

  async function sendTicket(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const firstQuestion = msgs.find((m) => m.from === "user" && !/^(talk to a human|yes, talk to a human)$/i.test(m.text)) as Extract<Msg, { from: "user" }> | undefined;
    const subject = (firstQuestion?.text ?? "Question from the help widget").slice(0, 140);
    const detail = String(f.get("detail") ?? "").trim();
    const body = transcript(detail);
    setError(null);
    setSending(true);
    try {
      const r = await fetch("/api/support/tickets", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: f.get("email"), name: f.get("name"), subject, message: body.length >= 10 ? body : subject + " (from the help widget)", website: f.get("website"), source: "widget" }),
      });
      const j = (await r.json().catch(() => ({}))) as { id?: string; message?: string };
      setSending(false);
      if (!r.ok || !j.id) {
        setError(j.message ?? "Something went wrong. Try again.");
        return;
      }
      setForm(false);
      push({ from: "ticket", ticket: j.id });
    } catch {
      setSending(false);
      setError("You seem to be offline. Try again, or email support@ingotui.com.");
    }
  }

  // Esc minimises; Tab stays inside the panel while it is open
  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Escape") {
      e.stopPropagation();
      onMinimise();
      return;
    }
    if (e.key !== "Tab" || !root.current) return;
    const items = [...root.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled]):not([tabindex='-1']), textarea:not([disabled]), summary")].filter((el) => el.offsetParent !== null);
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

  // site links open in the same tab with client navigation, so the conversation stays
  function onClick(e: React.MouseEvent) {
    const a = (e.target as HTMLElement).closest("a");
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const href = a.getAttribute("href") ?? "";
    if (!/^\/(?!\/)/.test(href)) return;
    e.preventDefault();
    router.push(href);
    if (window.matchMedia("(max-width: 639px)").matches) onMinimise();
  }

  // mobile sheet: drag the handle down to minimise
  const onDragStart = (e: React.PointerEvent) => {
    dragFrom.current = e.clientY;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onDragMove = (e: React.PointerEvent) => {
    if (dragFrom.current !== null) setDrag(Math.max(0, e.clientY - dragFrom.current));
  };
  const onDragEnd = () => {
    if (dragFrom.current === null) return;
    dragFrom.current = null;
    if (drag > 110) onMinimise();
    setDrag(0);
  };

  const lastBot = [...msgs].reverse().find((m) => m.from === "bot") as Extract<Msg, { from: "bot" }> | undefined;
  const started = msgs.length > 1;

  return (
    <div
      ref={root}
      id="support-widget-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby="support-widget-title"
      onKeyDown={onKeyDown}
      onClick={onClick}
      style={drag ? { transform: `translateY(${drag}px)`, transition: "none" } : undefined}
      className="fixed inset-x-0 bottom-0 top-[max(8px,env(safe-area-inset-top))] z-[60] flex flex-col overflow-hidden rounded-t-[18px] bg-white shadow-[0_0_0_1px_var(--color-hair-2),0_-8px_40px_rgb(0_0_0/0.16)] transition-[opacity,transform] duration-200 ease-out starting:translate-y-6 starting:opacity-0 motion-reduce:transition-none print:hidden sm:inset-x-auto sm:bottom-[calc(76px+env(safe-area-inset-bottom))] sm:right-[calc(16px+env(safe-area-inset-right))] sm:top-auto sm:h-[min(620px,calc(100dvh-100px))] sm:w-[400px] sm:origin-bottom-right sm:rounded-[16px] sm:shadow-[0_0_0_1px_var(--color-hair-2),0_20px_56px_rgb(0_0_0/0.16)] sm:starting:translate-y-2 sm:starting:scale-[0.98]"
    >
      {/* drag handle (mobile) */}
      <div
        className="flex h-5 shrink-0 cursor-grab touch-none items-center justify-center sm:hidden"
        onPointerDown={onDragStart}
        onPointerMove={onDragMove}
        onPointerUp={onDragEnd}
        onPointerCancel={onDragEnd}
        aria-hidden="true"
      >
        <span className="h-1 w-9 rounded-full bg-chip-2" />
      </div>

      <header className="flex shrink-0 items-center gap-2.5 border-b border-hair px-3.5 pb-2.5 pt-1 sm:pt-3">
        <IngotMark size={30} />
        <div className="min-w-0 flex-1">
          <h2 id="support-widget-title" className="text-[14px] font-medium leading-tight tracking-[-0.01em]">Ingot UI Help</h2>
          <p className="text-[11.5px] leading-snug text-mute">Answers from our docs and library</p>
        </div>
        {started && (
          <button type="button" onClick={newChat} aria-label="New chat" title="New chat" className="flex size-8 items-center justify-center rounded-full text-mute hover:bg-tile hover:text-ink">
            <Glyph name="newChat" size={17} />
          </button>
        )}
        <button type="button" onClick={onMinimise} aria-label="Minimise help" title="Minimise" className="flex size-8 items-center justify-center rounded-full text-mute hover:bg-tile hover:text-ink">
          <Glyph name="minimise" size={17} />
        </button>
        <button
          type="button"
          onClick={() => {
            newChat();
            onClose();
          }}
          aria-label="End chat and close help"
          title="End chat"
          className="flex size-8 items-center justify-center rounded-full text-mute hover:bg-tile hover:text-ink"
        >
          <Glyph name="close" size={17} />
        </button>
      </header>

      <div ref={log} role="log" aria-live="polite" aria-relevant="additions" aria-label="Conversation" className="relative flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto overscroll-contain px-3.5 py-3.5">
        {msgs.map((m) => {
          if (m.from === "user")
            return (
              <p key={m.id} data-msg="" className="max-w-[85%] self-end whitespace-pre-wrap rounded-[14px] rounded-br-[5px] bg-ink px-3 py-2 text-[13px] leading-snug text-white [overflow-wrap:anywhere]">
                {m.text}
              </p>
            );
          if (m.from === "ticket")
            return (
              <div key={m.id} data-msg="" role="status" className="flex items-start gap-2.5 rounded-[12px] bg-tile p-3">
                <Glyph name="ticket" size={18} className="mt-px shrink-0" />
                <div>
                  <p className="text-[13px] font-medium">Sent. Ticket {m.ticket}</p>
                  <p className="mt-0.5 text-[12.5px] leading-relaxed text-ink-2">A person will reply to your email, usually within a day. You can keep asking here meanwhile.</p>
                </div>
              </div>
            );
          const isLast = m === lastBot && !busy;
          return (
            <div key={m.id} data-msg="" className="flex max-w-full flex-col gap-2">
              <ReplyBody reply={m.reply} bubbleClass="max-w-[94%] self-start rounded-[14px] rounded-bl-[5px] bg-tile px-3 py-2 text-[13px] leading-relaxed text-ink" />
              {m.reply.feedback && (
                <div className="flex items-center gap-1 text-[11.5px] text-mute">
                  {m.vote ? (
                    <span>{m.vote === "yes" ? "Thanks for the feedback." : "Noted. Thanks."}</span>
                  ) : (
                    <>
                      <span className="mr-0.5">Helpful?</span>
                      <button type="button" onClick={() => vote(m.id, "yes")} aria-label="Yes, this helped" className="inline-flex h-6 items-center gap-1 rounded-full px-2 hover:bg-tile hover:text-ink">
                        <Glyph name="thumbsUp" size={13} /> Yes
                      </button>
                      <button type="button" onClick={() => vote(m.id, "no")} aria-label="No, this did not help" className="inline-flex h-6 items-center gap-1 rounded-full px-2 hover:bg-tile hover:text-ink">
                        <Glyph name="thumbsDown" size={13} /> No
                      </button>
                    </>
                  )}
                </div>
              )}
              {isLast && !form && !!m.reply.chips?.length && (
                <div className="flex flex-wrap gap-1.5" aria-label="Suggested replies">
                  {m.reply.chips.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => (c === "Rephrase" ? input.current?.focus() : ask(c))}
                      className="inline-flex min-h-8 items-center gap-1.5 rounded-full bg-white px-3 py-1 text-left text-[12.5px] font-medium text-ink shadow-[inset_0_0_0_1px_var(--color-hair-2)] transition-[box-shadow,background-color] hover:bg-wash hover:shadow-[inset_0_0_0_1px_var(--color-ink)] active:scale-[0.98] motion-reduce:transition-none"
                    >
                      {/^(yes, )?talk to a human$/i.test(c) && <Glyph name="human" size={14} />}
                      {c}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {busy && (
          <div className="self-start rounded-[14px] rounded-bl-[5px] bg-tile px-3 py-2" role="status">
            <span className="help-typing text-[12.5px] text-mute">Searching the docs and library</span>
          </div>
        )}

        {form && (
          <form onSubmit={sendTicket} className="relative flex flex-col gap-2.5 rounded-[12px] bg-tile p-3" aria-label="Send to a person">
            <p className="flex items-center gap-1.5 text-[13px] font-medium">
              <Glyph name="human" size={16} /> Send to a person
            </p>
            <label className="flex flex-col gap-1 text-[12px] font-medium">
              Email
              <input name="email" type="email" required autoComplete="email" maxLength={200} defaultValue={prefill?.email ?? ""} className={field} placeholder="you@company.com" />
            </label>
            <label className="flex flex-col gap-1 text-[12px] font-medium">
              <span>
                Name <span className="font-normal text-mute">(optional)</span>
              </span>
              <input name="name" autoComplete="name" maxLength={80} defaultValue={prefill?.name ?? ""} className={field} placeholder="Your name" />
            </label>
            <label className="flex flex-col gap-1 text-[12px] font-medium">
              <span>
                Anything to add? <span className="font-normal text-mute">(optional)</span>
              </span>
              <textarea name="detail" rows={2} maxLength={2000} className={field + " h-auto resize-none py-2 leading-snug"} placeholder="Page, component or error message" />
            </label>
            <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <input name="website" tabIndex={-1} autoComplete="off" />
            </div>
            {error && (
              <p role="alert" className="rounded-[8px] bg-[#fdecea] px-2.5 py-1.5 text-[12px] text-[#a3261a]">
                {error}
              </p>
            )}
            <p className="text-[11px] leading-snug text-mute">This conversation is attached, so you won’t have to repeat yourself.</p>
            <div className="flex gap-2">
              <button disabled={sending} className="btn-ink !h-8 flex-1 disabled:opacity-60">{sending ? "Sending…" : "Send"}</button>
              <button type="button" onClick={() => setForm(false)} className="btn-line !h-8">Cancel</button>
            </div>
          </form>
        )}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(q);
        }}
        className="flex shrink-0 items-end gap-2 border-t border-hair p-2.5 pb-[max(10px,env(safe-area-inset-bottom))]"
      >
        <label htmlFor="support-widget-q" className="sr-only">Your question</label>
        <textarea
          ref={input}
          id="support-widget-q"
          style={{ outline: "none" }}
          value={q}
          rows={1}
          onChange={(e) => setQ(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) {
              e.preventDefault();
              ask(q);
            }
          }}
          maxLength={500}
          autoComplete="off"
          placeholder="Ask about components, MCP, pricing…"
          className="max-h-28 min-h-9 flex-1 resize-none rounded-[10px] bg-chip px-3 py-2 text-[13px] leading-snug outline-none focus-visible:outline-none transition-[background-color,box-shadow] [field-sizing:content] placeholder:text-mute focus:bg-white focus:shadow-[inset_0_0_0_1.5px_var(--color-ink)]"
        />
        <button disabled={busy || !q.trim()} aria-label="Send" className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-opacity disabled:opacity-30">
          <Glyph name="send" size={17} />
        </button>
      </form>
    </div>
  );
}
