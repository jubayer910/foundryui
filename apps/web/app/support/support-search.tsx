"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/registry/components/icons";
import { AnswerText } from "@/lib/support/answer-text";

export type Answer = { slug: string; question: string; answer: string; category: string; score: number };

/** Instant answers from the knowledge base (GET /api/support/answers). */
export function SupportSearch() {
  const [q, setQ] = useState("");
  const [answers, setAnswers] = useState<Answer[] | null>(null);
  const [loading, setLoading] = useState(false);
  const seq = useRef(0);

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  function onChange(value: string) {
    setQ(value);
    if (timer.current) clearTimeout(timer.current);
    const query = value.trim();
    const n = ++seq.current;
    if (query.length < 3) {
      setAnswers(null);
      setLoading(false);
      return;
    }
    setLoading(true);
    timer.current = setTimeout(async () => {
      try {
        const r = await fetch("/api/support/answers?q=" + encodeURIComponent(query));
        const j = (await r.json()) as { answers: Answer[] };
        if (n === seq.current) setAnswers(j.answers ?? []);
      } catch {
        if (n === seq.current) setAnswers([]);
      } finally {
        if (n === seq.current) setLoading(false);
      }
    }, 180);
  }

  return (
    <div className="mt-3">
      <form role="search" onSubmit={(e) => e.preventDefault()} className="relative">
        <label htmlFor="support-q" className="sr-only">Search the answers</label>
        <Icon name="search" size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-mute" />
        <input
          id="support-q"
          type="search"
          value={q}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Try “refund” or “connect Cursor”"
          autoComplete="off"
          aria-controls="support-results"
          className="h-10 w-full rounded-[8px] bg-chip pl-9 pr-3 text-[14px] outline-none transition-[background-color,box-shadow] placeholder:text-mute focus:bg-white focus:shadow-[inset_0_0_0_1.5px_var(--color-ink)]"
        />
      </form>
      <div id="support-results" aria-live="polite" className="empty:hidden">
        {answers && answers.length > 0 && (
          <ul className="mt-3 flex flex-col gap-2">
            {answers.map((a) => (
              <li key={a.slug} className="rounded-[8px] bg-tile p-3.5">
                <p className="text-[11px] text-mute">{a.category}</p>
                <p className="mt-0.5 text-[13px] font-medium">{a.question}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-2">
                  <AnswerText text={a.answer} />
                </p>
              </li>
            ))}
          </ul>
        )}
        {answers && answers.length === 0 && !loading && (
          <p className="mt-3 rounded-[8px] bg-tile p-3.5 text-[13px] text-mute">
            No saved answer matches that yet.{" "}
            <a href="#contact" className="font-medium text-ink underline underline-offset-2">Send us a message</a> and a person will reply.
          </p>
        )}
      </div>
    </div>
  );
}
