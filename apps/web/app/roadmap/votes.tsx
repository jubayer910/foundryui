"use client";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { LogIcon } from "@/app/changelog/icons";

type State = { counts: Record<string, number>; mine: Set<string>; loaded: boolean; busy: Set<string>; error: string };
type Ctx = State & { toggle: (id: string) => void };

const VotesCtx = createContext<Ctx | null>(null);

/** Loads counts once from /api/roadmap (the page itself is static) and shares them with every vote button. */
export function RoadmapVotes({ children }: { children: ReactNode }) {
  const [s, set] = useState<State>({ counts: {}, mine: new Set(), loaded: false, busy: new Set(), error: "" });

  useEffect(() => {
    let live = true;
    fetch("/api/roadmap", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: { counts: Record<string, number>; mine: string[] }) => live && set((p) => ({ ...p, counts: d.counts, mine: new Set(d.mine), loaded: true })))
      .catch(() => live && set((p) => ({ ...p, loaded: true, error: "Vote counts could not load. Refresh to try again." })));
    return () => {
      live = false;
    };
  }, []);

  const toggle = useCallback(
    async (id: string) => {
      const was = s.mine.has(id);
      const before = s.counts[id] ?? 0;
      // Optimistic: flip now, roll back if the server says no.
      set((p) => {
        const mine = new Set(p.mine);
        if (was) mine.delete(id);
        else mine.add(id);
        return { ...p, mine, busy: new Set(p.busy).add(id), counts: { ...p.counts, [id]: Math.max(0, before + (was ? -1 : 1)) }, error: "" };
      });
      let error = "";
      let count: number | null = null;
      try {
        const r = await fetch("/api/roadmap", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ item: id, vote: !was }) });
        const d = await r.json().catch(() => ({}));
        if (r.ok) count = d.count;
        else error = r.status === 429 ? "Too many votes from your network this hour. Try again later." : "Your vote did not go through. Try again.";
      } catch {
        error = "Your vote did not go through. Check your connection and try again.";
      }
      set((p) => {
        const busy = new Set(p.busy);
        busy.delete(id);
        if (count !== null) return { ...p, busy, counts: { ...p.counts, [id]: count } };
        const mine = new Set(p.mine);
        if (was) mine.add(id);
        else mine.delete(id);
        return { ...p, busy, mine, counts: { ...p.counts, [id]: before }, error };
      });
    },
    [s.mine, s.counts],
  );

  return (
    <VotesCtx.Provider value={{ ...s, toggle }}>
      {children}
      <p role="status" aria-live="polite" className={s.error ? "mt-4 text-[13px] text-ink" : "sr-only"}>
        {s.error}
      </p>
    </VotesCtx.Provider>
  );
}

export function VoteButton({ id, title }: { id: string; title: string }) {
  const c = useContext(VotesCtx);
  if (!c) return null;
  const on = c.mine.has(id);
  const n = c.counts[id] ?? 0;
  return (
    <button
      type="button"
      onClick={() => !c.busy.has(id) && c.toggle(id)}
      disabled={!c.loaded}
      aria-busy={c.busy.has(id)}
      aria-pressed={on}
      aria-label={"Upvote " + title + (c.loaded ? ", " + n + (n === 1 ? " vote" : " votes") : "")}
      className={
        "flex h-12 w-11 shrink-0 flex-col items-center justify-center gap-0.5 rounded-[8px] text-[12px] font-medium tabular-nums transition-colors disabled:cursor-default " +
        (on ? "bg-ink text-white" : "bg-chip text-ink hover:bg-chip-2")
      }
    >
      <LogIcon name="arrow-up" size={14} />
      <span aria-hidden="true">{c.loaded ? n : "–"}</span>
    </button>
  );
}
