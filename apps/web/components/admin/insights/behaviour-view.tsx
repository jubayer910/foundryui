"use client";
import { useMemo, useState } from "react";
import type { InsightsData } from "@/lib/analytics/insights";
import { show } from "@/lib/reports/format";
import { AIcon } from "../admin-icons";
import { Info } from "../reports/info";
import { Trend } from "../reports/trend";
import { cameFrom, pageStats, wentTo } from "./model";
import { PagePanel } from "./page-panel";
import { Change, Seg, Tiles, fmt, fmtPct, share } from "./parts";

const KIND: Record<string, string> = { button: "Button", link: "Link", out: "Outbound" };

/** Insights > Behaviour: what visitors do on the site, page to page and click by click. */
export function BehaviourView({ d }: { d: InsightsData }) {
  const [stack, setStack] = useState<string[]>([]);
  const open = stack[stack.length - 1] ?? null;
  const push = (p: string) => setStack((s) => [...s, p]);
  const versus = d.cmp?.name ?? null;
  const t = d.totals;
  const scrollAll = d.scroll.reduce((s, x) => s + x.n, 0);
  const scrollDeep = d.scroll.filter((x) => x.b >= 75).reduce((s, x) => s + x.n, 0);
  const outbound = d.clicks.filter((c) => c.kind === "out");

  return (
    <>
      <Tiles
        versus={versus}
        tiles={[
          { id: "clicks", label: "Clicks", unit: "count", cur: t.clicks.cur, prev: t.clicks.prev, info: "Clicks on buttons and links across the site (forms and the account area are left out)." },
          { id: "cpv", label: "Clicks per visit", unit: "ratio", cur: t.bvisits.cur ? t.clicks.cur / t.bvisits.cur : null, prev: t.bvisits.prev ? (t.clicks.prev ?? 0) / t.bvisits.prev : null, info: "Clicks divided by visits since the behaviour counters started." },
          { id: "deeper", label: "Went deeper", unit: "pct", cur: share(t.p2.cur, t.bvisits.cur), prev: t.bvisits.prev ? share(t.p2.prev ?? 0, t.bvisits.prev) : null, info: "Share of visits that opened a second page. The opposite of the bounce rate." },
          { id: "time", label: "Avg. engaged time", unit: "secs", cur: t.bvisits.cur ? t.secs.cur / t.bvisits.cur : null, prev: t.bvisits.prev ? (t.secs.prev ?? 0) / t.bvisits.prev : null, info: "Active time per visit: tab visible and the visitor did something in the last 30 seconds." },
          { id: "read", label: "Read to 75%", unit: "pct", cur: share(scrollDeep, scrollAll), prev: null, info: "Share of measured page views that scrolled at least 75% of the page." },
          { id: "out", label: "Outbound clicks", unit: "count", cur: outbound.reduce((s, c) => s + c.cur, 0), prev: versus ? outbound.reduce((s, c) => s + (c.prev ?? 0), 0) : null, info: "Clicks on links to other sites (GitHub, Figma, X and so on)." },
        ]}
      />

      <div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Trend
          title="Trend"
          metrics={[
            { id: "clicks", label: "Clicks", unit: "count" },
            { id: "bounce", label: "Bounce rate", unit: "pct" },
            { id: "avgTime", label: "Engaged time", unit: "secs" },
          ]}
          rows={d.series}
          selected={d.sel.key}
          compare={d.cmp?.key ?? null}
        />
        <Journey d={d} />
      </div>

      <Explorer d={d} onOpen={push} />
      <Clicks d={d} versus={versus} onOpen={push} />
      <Engagement d={d} onOpen={push} />

      {open && <PagePanel key={open} d={d} path={open} onClose={() => setStack([])} onPage={push} onBack={() => setStack((s) => s.slice(0, -1))} canBack={stack.length > 1} />}
    </>
  );
}

/** Visit journey: visits, went to a second page, and the exits. */
function Journey({ d }: { d: InsightsData }) {
  const v = d.totals.bvisits.cur;
  const p2 = d.totals.p2.cur;
  const clicked = d.totals.clicks.cur;
  const steps = [
    { label: "Visits", n: v, hint: "started a visit" },
    { label: "Opened a second page", n: p2, hint: "of visits" },
    { label: "Left after one page", n: Math.max(0, v - p2), hint: "of visits (bounced)" },
  ];
  return (
    <section className="card min-w-0 p-4">
      <div className="flex items-center gap-2">
        <h2 className="text-[15px] font-medium tracking-[-0.01em]">Visit journey</h2>
        <Info label="Visit journey" text="Visits counted since the behaviour counters started. A visit is one browser tab's session on the site." />
      </div>
      <ol className="mt-4 flex flex-col gap-3">
        {steps.map((s, i) => {
          const p = i === 0 ? 100 : (share(s.n, v) ?? 0);
          return (
            <li key={s.label}>
              <div className="flex items-baseline gap-2 text-[13px]">
                <span className="flex-1">{s.label}</span>
                <span className="font-medium tabular-nums">{fmt(s.n)}</span>
                <span className="w-12 text-right text-[12px] text-faint tabular-nums">{i ? fmtPct(p) : ""}</span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-tile" aria-hidden="true">
                <span className={"block h-full rounded-full transition-[width] duration-500 " + (i === 2 ? "bg-black/25" : "bg-ink")} style={{ width: `${v ? p : 0}%` }} />
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-4 text-[13px] text-mute">
        {v ? (
          <>
            On average a visit made <span className="font-medium text-ink tabular-nums">{(clicked / v).toFixed(1)}</span> clicks and stayed <span className="font-medium text-ink tabular-nums">{show("secs", d.totals.secs.cur / v)}</span>.
          </>
        ) : (
          "No visits measured in this period yet."
        )}
      </p>
    </section>
  );
}

/**
 * Navigation explorer: pick a page, see where its visitors came from and where they went next. Click any step
 * to move the focus there; the trail at the top goes back.
 */
function Explorer({ d, onOpen }: { d: InsightsData; onOpen: (p: string) => void }) {
  const top = d.dims.landing[0]?.key ?? d.dims.page[0]?.key ?? "/";
  const [trail, setTrail] = useState<string[]>([top]);
  const focus = trail[trail.length - 1];
  const st = pageStats(d).find((p) => p.path === focus);
  const from = cameFrom(d, focus).slice(0, 7);
  const to = wentTo(d, focus).slice(0, 7);
  const pages = useMemo(() => d.dims.page.slice(0, 60).map((p) => p.key), [d]);
  const go = (p: string) => setTrail((t) => (t.includes(p) ? t.slice(0, t.indexOf(p) + 1) : [...t, p].slice(-6)));
  return (
    <section className="mt-8">
      <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-2">
        <AIcon name="route" size={18} className="text-mute" />
        <h2 className="text-[15px] font-medium tracking-[-0.01em]">Navigation explorer</h2>
        <Info label="Navigation explorer" text="Where visitors of a page came from (the page before, or the source when they entered the site there) and where they went next (or left). Click a page on either side to follow the path." />
        <label className="ml-auto flex h-9 items-center gap-2 rounded-[8px] px-2.5 shadow-[inset_0_0_0_1px_var(--color-hair-2)] max-md:w-full">
          <span className="text-[12px] text-mute">Page</span>
          <select value={focus} onChange={(e) => setTrail([e.target.value])} className="min-w-0 flex-1 bg-transparent text-[13px] outline-none md:max-w-[260px] max-md:text-[16px]">
            {[...new Set([focus, ...pages])].map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div className="card p-4">
        {trail.length > 1 && (
          <nav aria-label="Path so far" className="mb-4 flex flex-wrap items-center gap-1 text-[12px] text-mute">
            {trail.map((p, i) => (
              <span key={p + i} className="inline-flex items-center gap-1">
                {i > 0 && <AIcon name="chevron-right" size={12} className="text-faint" />}
                <button type="button" onClick={() => setTrail(trail.slice(0, i + 1))} className={"rounded-[4px] px-1 hover:bg-tile hover:text-ink " + (i === trail.length - 1 ? "font-medium text-ink" : "")} aria-current={i === trail.length - 1 ? "page" : undefined}>
                  {p}
                </button>
              </span>
            ))}
          </nav>
        )}
        <div className="grid items-start gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)_minmax(0,1fr)] md:gap-5">
          <ExplorerCol title="Came from" rows={from} side="in" go={go} />
          <div className="rounded-[10px] bg-ink p-4 text-white md:mt-6">
            <p className="truncate text-[15px] font-medium" title={focus}>
              {focus}
            </p>
            <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12px] text-white/60">
              <div>
                <dt>Views</dt>
                <dd className="text-[15px] font-medium text-white tabular-nums">{fmt(st?.views ?? 0)}</dd>
              </div>
              <div>
                <dt>Entrances</dt>
                <dd className="text-[15px] font-medium text-white tabular-nums">{fmt(st?.entrances ?? 0)}</dd>
              </div>
              <div>
                <dt>Avg. time</dt>
                <dd className="text-[15px] font-medium text-white tabular-nums">{show("secs", st?.avgTime ?? null)}</dd>
              </div>
              <div>
                <dt>Exit rate</dt>
                <dd className="text-[15px] font-medium text-white tabular-nums">{fmtPct(st?.exitRate ?? null)}</dd>
              </div>
            </dl>
            <button type="button" onClick={() => onOpen(focus)} className="mt-4 inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-full bg-white text-[13px] font-medium text-ink hover:bg-white/90 max-md:h-11">
              Page details
              <AIcon name="arrow-right" size={14} />
            </button>
          </div>
          <ExplorerCol title="Went next" rows={to} side="out" go={go} />
        </div>
      </div>
    </section>
  );
}

function ExplorerCol({ title, rows, side, go }: { title: string; rows: { key: string; label: string; n: number; hint?: string }[]; side: "in" | "out"; go: (p: string) => void }) {
  const total = rows.reduce((s, r) => s + r.n, 0);
  return (
    <div className="min-w-0">
      <p className="mb-2 flex items-center gap-1.5 text-[12px] text-mute">
        <AIcon name={side === "in" ? "door-enter" : "door-exit"} size={14} />
        {title}
      </p>
      {rows.length ? (
        <ol className="flex flex-col gap-1">
          {rows.map((r) => {
            const isPage = r.key.startsWith("p:");
            const pct = share(r.n, total) ?? 0;
            const body = (
              <>
                <span className="absolute inset-y-0 left-0 rounded-[6px] bg-wash" style={{ width: `${Math.max(2, pct)}%` }} aria-hidden="true" />
                <span className="relative min-w-0 flex-1 truncate text-left">{r.label}</span>
                <span className="relative text-[12px] text-mute tabular-nums">{fmtPct(pct)}</span>
              </>
            );
            return (
              <li key={r.key}>
                {isPage ? (
                  <button type="button" onClick={() => go(r.key.slice(2))} className="relative flex min-h-9 w-full items-center gap-2 rounded-[6px] px-2.5 text-[13px] shadow-[inset_0_0_0_1px_var(--color-hair)] hover:shadow-[inset_0_0_0_1px_var(--color-ink)] max-md:min-h-11" title={`${fmt(r.n)} visitors. Explore ${r.label}`}>
                    {body}
                  </button>
                ) : (
                  <div className="relative flex min-h-9 items-center gap-2 rounded-[6px] px-2.5 text-[13px] text-mute max-md:min-h-11" title={`${fmt(r.n)} visitors`}>
                    {body}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      ) : (
        <p className="rounded-[8px] bg-tile px-3 py-3 text-[13px] text-mute">Nothing recorded yet.</p>
      )}
    </div>
  );
}

type ClickRow = InsightsData["clicks"][number];

function Clicks({ d, versus, onOpen }: { d: InsightsData; versus: string | null; onOpen: (p: string) => void }) {
  const [kind, setKind] = useState<"all" | "button" | "link" | "out">("all");
  const [page, setPage] = useState("");
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(20);
  const pages = useMemo(() => [...new Set(d.clicks.map((c) => c.path))].sort(), [d]);
  const list = useMemo(() => {
    const f = q.trim().toLowerCase();
    return d.clicks.filter((c) => (kind === "all" || c.kind === kind) && (!page || c.path === page) && (!f || c.label.toLowerCase().includes(f) || c.target.toLowerCase().includes(f)));
  }, [d, kind, page, q]);
  const total = list.reduce((s, c) => s + c.cur, 0);
  const max = Math.max(1, ...list.map((c) => c.cur));
  const count = (k: ClickRow["kind"] | "all") => d.clicks.filter((c) => k === "all" || c.kind === k).reduce((s, c) => s + c.cur, 0);
  return (
    <section className="mt-8">
      <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-2">
        <AIcon name="pointer" size={18} className="text-mute" />
        <h2 className="text-[15px] font-medium tracking-[-0.01em]">What people click</h2>
        <Info label="What people click" text="Clicks on buttons and links, by the text on them. Nothing typed into forms is recorded, and the account, checkout and admin areas are left out." />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Seg
          label="Click type"
          value={kind}
          onChange={setKind}
          options={[
            { id: "all", label: "All", count: count("all") },
            { id: "button", label: "Buttons", count: count("button") },
            { id: "link", label: "Links", count: count("link") },
            { id: "out", label: "Outbound", count: count("out") },
          ]}
        />
        <div className="flex w-full gap-2 md:ml-auto md:w-auto">
          <label className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-[8px] px-2.5 shadow-[inset_0_0_0_1px_var(--color-hair-2)] md:w-56">
            <AIcon name="filter" size={14} className="text-faint" />
            <select value={page} onChange={(e) => setPage(e.target.value)} aria-label="Page" className="min-w-0 flex-1 bg-transparent text-[13px] outline-none max-md:text-[16px]">
              <option value="">All pages</option>
              {pages.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </label>
          <label className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-[8px] px-2.5 shadow-[inset_0_0_0_1px_var(--color-hair-2)] focus-within:shadow-[inset_0_0_0_1px_var(--color-ink)] md:w-56">
            <AIcon name="search" size={14} className="text-faint" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search clicks" aria-label="Search clicks" className="min-w-0 flex-1 bg-transparent text-[13px] outline-none max-md:text-[16px]" />
          </label>
        </div>
      </div>
      <div className="card mt-3 overflow-hidden">
        {list.length ? (
          <ol className="divide-y divide-hair">
            {list.slice(0, limit).map((c) => (
              <li key={[c.path, c.kind, c.label, c.target].join("|")}>
                <button type="button" onClick={() => onOpen(c.path)} aria-label={`${c.label}, ${KIND[c.kind]} on ${c.path}: ${fmt(c.cur)} clicks. Open page details`} className="relative flex min-h-12 w-full items-center gap-3 px-4 py-2.5 text-left text-[13px] hover:bg-tile">
                <span className="absolute inset-y-0 left-0 bg-wash" style={{ width: `${Math.max(1, (c.cur / max) * 100)}%` }} aria-hidden="true" />
                <AIcon name={c.kind === "out" ? "external-link" : c.kind === "link" ? "link" : "pointer"} size={15} className="relative shrink-0 text-mute" />
                <span className="relative min-w-0 flex-1">
                  <span className="block truncate font-medium">{c.label}</span>
                  <span className="block truncate text-[12px] text-mute">
                    {KIND[c.kind]} on <span className="text-ink">{c.path}</span>
                    {c.target && (
                      <>
                        {" "}
                        to <span className="text-ink">{c.target}</span>
                      </>
                    )}
                  </span>
                </span>
                <span className="relative hidden md:inline">
                  <Change unit="count" cur={c.cur} prev={c.prev} versus={versus} />
                </span>
                <span className="relative font-medium tabular-nums">{fmt(c.cur)}</span>
                <span className="relative w-11 text-right text-[12px] text-faint tabular-nums">{fmtPct(share(c.cur, total))}</span>
                </button>
              </li>
            ))}
          </ol>
        ) : (
          <p className="px-4 py-8 text-center text-[13px] text-mute">{d.clicks.length ? "No click matches these filters." : "No clicks recorded yet. They start with the next visit."}</p>
        )}
      </div>
      {list.length > limit && (
        <button type="button" onClick={() => setLimit((l) => l + 40)} className="btn-line mt-3 max-md:w-full">
          Show more ({fmt(list.length - limit)} left)
        </button>
      )}
    </section>
  );
}

function Engagement({ d, onOpen }: { d: InsightsData; onOpen: (p: string) => void }) {
  const [by, setBy] = useState<"views" | "time" | "read">("views");
  const rows = useMemo(() => {
    const st = pageStats(d).filter((p) => p.measured > 0);
    const key = (p: (typeof st)[number]) => (by === "views" ? p.views : by === "time" ? (p.avgTime ?? 0) : (p.read ?? 0));
    return st.sort((a, b) => key(b) - key(a)).slice(0, 12);
  }, [d, by]);
  const maxT = Math.max(1, ...rows.map((r) => r.avgTime ?? 0));
  const scrollOf = (path: string) => {
    const s = d.scroll.filter((x) => x.path === path);
    const tot = s.reduce((a, x) => a + x.n, 0);
    return [0, 25, 50, 75, 100].map((b) => (tot ? (s.filter((x) => x.b === b).reduce((a, x) => a + x.n, 0) / tot) * 100 : 0));
  };
  const tones = ["bg-black/10", "bg-black/20", "bg-black/35", "bg-black/60", "bg-ink"];
  return (
    <section className="mt-8">
      <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-2">
        <h2 className="text-[15px] font-medium tracking-[-0.01em]">Reading and attention</h2>
        <Info label="Reading and attention" text="Average engaged time and how far down the page people scroll, for the pages with measured views. Darker segments are deeper scrolls." />
        <Seg
          className="md:ml-auto"
          label="Sort by"
          value={by}
          onChange={setBy}
          options={[
            { id: "views", label: "Most viewed" },
            { id: "time", label: "Longest time" },
            { id: "read", label: "Read furthest" },
          ]}
        />
      </div>
      <div className="card overflow-hidden">
        {rows.length ? (
          <ol className="divide-y divide-hair">
            {rows.map((p) => {
              const sc = scrollOf(p.path);
              return (
                <li key={p.path}>
                  <button type="button" onClick={() => onOpen(p.path)} className="grid w-full grid-cols-1 items-center gap-x-4 gap-y-2 px-4 py-3 text-left text-[13px] hover:bg-tile md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)]">
                    <span className="min-w-0">
                      <span className="block truncate font-medium">{p.path}</span>
                      <span className="block text-[12px] text-mute tabular-nums">{fmt(p.views)} views</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-14 shrink-0 text-[12px] text-mute">Time</span>
                      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-tile" aria-hidden="true">
                        <span className="block h-full rounded-full bg-ink" style={{ width: `${((p.avgTime ?? 0) / maxT) * 100}%` }} />
                      </span>
                      <span className="w-16 text-right font-medium tabular-nums">{show("secs", p.avgTime)}</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-14 shrink-0 text-[12px] text-mute">Scroll</span>
                      <span className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-tile" role="img" aria-label={`Scroll depth: ${[0, 25, 50, 75, 100].map((b, i) => `${fmtPct(sc[i])} stopped ${b === 0 ? "before 25%" : b === 100 ? "at the end" : `at ${b}%`}`).join(", ")}`}>
                        {sc.map((w, i) => (
                          <span key={i} className={tones[i]} style={{ width: `${w}%` }} />
                        ))}
                      </span>
                      <span className="w-16 text-right font-medium tabular-nums">{fmtPct(p.read)}</span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        ) : (
          <p className="px-4 py-8 text-center text-[13px] text-mute">No engagement measured yet. It starts with the next visit.</p>
        )}
      </div>
      <p className="mt-2 text-[12px] text-faint">Scroll bar: lightest stopped before 25%, darkest reached the end. The number is the share that read to 75% or further.</p>
    </section>
  );
}
