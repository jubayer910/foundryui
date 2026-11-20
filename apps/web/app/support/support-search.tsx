"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/registry/components/icons";
import type { ChatResponse, Reply } from "@/lib/support/assistant/types";
import { ReplyBody } from "@/lib/support/assistant/ui/cards";

/** Instant answers: the same engine as the help widget (POST /api/support/chat, search mode, nothing logged). */
export function SupportSearch() {
  const [q, setQ] = useState("");
  const [reply, setReply] = useState<Reply | null>(null);
  const [loading, setLoading] = useState(false);
  const seq = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  function run(value: string, delay = 280) {
    setQ(value);
    if (timer.current) clearTimeout(timer.current);
    const query = value.trim();
    const n = ++seq.current;
    if (query.length < 3) {
      setReply(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    timer.current = setTimeout(async () => {
      try {
        const r = await fetch("/api/support/chat", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ message: query, mode: "search" }) });
        const j = (await r.json()) as ChatResponse;
        if (n === seq.current) setReply(j.reply ?? null);
      } catch {
        if (n === seq.current) setReply(null);
      } finally {
        if (n === seq.current) setLoading(false);
      }
    }, delay);
  }

  const empty = reply && (reply.intent === "unknown" || reply.intent === "clarify") && !reply.cards?.length;

  return (
    <div className="mt-3">
      <form role="search" onSubmit={(e) => e.preventDefault()} className="relative">
        <label htmlFor="support-q" className="sr-only">Search the answers</label>
        <Icon name="search" size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-mute" />
        <input
          id="support-q"
          type="search"
          value={q}
          onChange={(e) => run(e.target.value)}
          placeholder="Try “refund”, “connect Cursor” or “kanban board”"
          autoComplete="off"
          aria-controls="support-results"
          className="h-10 w-full rounded-[8px] bg-chip pl-9 pr-3 text-[14px] outline-none transition-[background-color,box-shadow] placeholder:text-mute focus:bg-white focus:shadow-[inset_0_0_0_1.5px_var(--color-ink)]"
        />
      </form>
      <div id="support-results" aria-live="polite" className="empty:hidden">
        {reply && !empty && (
          <div className="mt-3 flex flex-col gap-2 rounded-[8px] bg-tile p-3.5 text-[13px] leading-relaxed">
            <ReplyBody reply={reply} />
            {!!reply.chips?.length && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {reply.chips
                  .filter((c) => !/talk to a human/i.test(c))
                  .map((c) => (
                    <button key={c} type="button" onClick={() => run(c, 0)} className="pill !h-7 !text-[12px]">
                      {c}
                    </button>
                  ))}
              </div>
            )}
          </div>
        )}
        {empty && !loading && (
          <p className="mt-3 rounded-[8px] bg-tile p-3.5 text-[13px] text-mute">
            No saved answer matches that yet.{" "}
            <a href="#contact" className="font-medium text-ink underline underline-offset-2">Send us a message</a> and a person will reply.
          </p>
        )}
      </div>
    </div>
  );
}
