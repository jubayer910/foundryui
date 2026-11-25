"use client";
import { useMemo, useState, type ReactNode } from "react";
import type { EdgeData } from "@/lib/analytics/cloudflare";
import type { InsightsData } from "@/lib/analytics/insights";
import { show } from "@/lib/reports/format";
import { AIcon } from "../admin-icons";
import { Info } from "../reports/info";
import { Trend } from "../reports/trend";
import { pageStats, type PageStat } from "./model";
import { PagePanel } from "./page-panel";
import { Change, Heatmap, MiniStats, Panel, PanelList, RankCard, Seg, ShareBar, Spark, Tiles, countryName, deviceIcon, deviceName, flag, fmt, fmtPct, share, sourceName, type RankRow } from "./parts";

type Open = { kind: "page" | "source"; key: string };

/** Insights > Traffic: where visitors come from, where they are, what they use and which pages they read. */
export function TrafficView({ d, edge }: { d: InsightsData; edge: EdgeData }) {
  const [stack, setStack] = useState<Open[]>([]);
  const open = stack[stack.length - 1] ?? null;
  const push = (o: Open) => setStack((s) => [...s, o]);
  const close = () => setStack([]);
  const back = () => setStack((s) => s.slice(0, -1));
  const versus = d.cmp?.name ?? null;
  const t = d.totals;
  const bounce = (p: { cur: number; prev: number | null }, v: { cur: number; prev: number | null }) => ({
    cur: v.cur > 0 ? Math.max(0, 100 - (p.cur / v.cur) * 100) : null,
    prev: v.prev ? Math.max(0, 100 - ((p.prev ?? 0) / v.prev) * 100) : null,
  });
  const b = bounce(t.p2, t.bvisits);
  const rows = (list: { key: string; cur: number; prev: number | null }[], label: (k: string) => string = (k) => k, lead?: (k: string) => ReactNode): RankRow[] =>
    list.map((x) => ({ key: x.key, label: label(x.key), cur: x.cur, prev: x.prev, lead: lead?.(x.key) }));
  const behaviourNote = d.statSince ? `Country, device, campaign, landing page, time and scroll counts start on ${d.statSince}.` : "Country, device, campaign, landing page, time and scroll counts start with the next visit.";

  return (
    <>
      <Tiles
        versus={versus}
        tiles={[
          { id: "visitors", label: "Visitors", unit: "count", cur: t.visitors.cur, prev: t.visitors.prev, info: "Unique cookieless visitors per day, summed over the period. A visitor is a hash of IP and browser that changes every day." },
          { id: "visits", label: "Visits", unit: "count", cur: t.visits.cur, prev: t.visits.prev, info: "Visits (sessions): the first page of a browser tab's visit, counted by source." },
          { id: "views", label: "Page views", unit: "count", cur: t.views.cur, prev: t.views.prev, info: "Every page shown, including moves inside the site. Bots and Do Not Track browsers are left out." },
          { id: "ppv", label: "Pages per visit", unit: "ratio", cur: t.visits.cur ? t.views.cur / t.visits.cur : null, prev: t.visits.prev ? (t.views.prev ?? 0) / t.visits.prev : null, info: "Page views divided by visits." },
          { id: "bounce", label: "Bounce rate", unit: "pct", cur: b.cur, prev: b.prev, invert: true, info: "Share of visits that saw one page only. Lower is better." },
          { id: "time", label: "Avg. engaged time", unit: "secs", cur: t.bvisits.cur ? t.secs.cur / t.bvisits.cur : null, prev: t.bvisits.prev ? (t.secs.prev ?? 0) / t.bvisits.prev : null, info: "Time with the tab visible and the visitor active (scrolling, moving, typing in the last 30 seconds), per visit." },
        ]}
      />
      {(!d.statSince || d.statSince > d.sel.startDay) && (
        <p className="mt-3 flex items-start gap-2 rounded-[8px] bg-tile px-3 py-2 text-[13px] text-mute">
          <AIcon name="info-circle" size={16} className="mt-px shrink-0" />
          {behaviourNote} Bounce rate and engaged time use visits from that day on.
        </p>
      )}

      <div className="mt-3 grid gap-3 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Trend
          title="Trend"
          metrics={[
            { id: "visitors", label: "Visitors", unit: "count" },
            { id: "visits", label: "Visits", unit: "count" },
            { id: "views", label: "Page views", unit: "count" },
            { id: "bounce", label: "Bounce rate", unit: "pct" },
            { id: "avgTime", label: "Engaged time", unit: "secs" },
          ]}
          rows={d.series}
          selected={d.sel.key}
          compare={d.cmp?.key ?? null}
        />
        <Heatmap heat={d.heat} tz={d.tz} />
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <RankCard
          title="Acquisition"
          versus={versus}
          onOpen={(tab, key) => push(tab === "landing" ? { kind: "page", key } : { kind: "source", key })}
          tabs={[
            { id: "source", label: "Sources", rows: rows(d.dims.source, sourceName), empty: "No visits in this period.", info: "Where visits start: utm_source or ref link, else the referring site, else Direct or unknown." },
            { id: "landing", label: "Landing pages", rows: rows(d.dims.landing), empty: "No landing pages recorded yet.", info: "The first page of each visit." },
            { id: "campaign", label: "Campaigns", rows: rows(d.dims.campaign), empty: "No visits with utm_campaign in this period. Add ?utm_campaign=name to links you share.", info: "utm_campaign of the link that started the visit.", openable: false },
            { id: "medium", label: "Mediums", rows: rows(d.dims.medium), empty: "No visits with utm_medium in this period. Add ?utm_medium=email (or social, cpc) to links you share.", info: "utm_medium of the link that started the visit.", openable: false },
          ]}
        />
        <Locations d={d} edge={edge} versus={versus} />
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <Devices d={d} versus={versus} />
        <RankCard
          title="Exit pages"
          versus={versus}
          info="The last page of a visit: where people leave the site."
          onOpen={(_, key) => push({ kind: "page", key })}
          tabs={[{ id: "exit", label: "Pages", unit: "Exits", rows: rows(d.dims.exit), empty: "No exits recorded yet." }]}
        />
      </div>

      <PagesTable d={d} versus={versus} onOpen={(key) => push({ kind: "page", key })} />
      <EdgeSection edge={edge} versus={versus} />

      {open?.kind === "page" && <PagePanel key={open.key} d={d} path={open.key} onClose={close} onPage={(p) => push({ kind: "page", key: p })} onBack={back} canBack={stack.length > 1} />}
      {open?.kind === "source" && open.key && <SourcePanel d={d} source={open.key} onClose={close} onPage={(p) => push({ kind: "page", key: p })} onBack={back} canBack={stack.length > 1} />}
    </>
  );
}

function SourcePanel({ d, source, onClose, onPage, onBack, canBack }: { d: InsightsData; source: string; onClose: () => void; onPage: (p: string) => void; onBack: () => void; canBack: boolean }) {
  const row = d.dims.source.find((s) => s.key === source);
  const total = d.dims.source.reduce((s, x) => s + x.cur, 0);
  const versus = d.cmp?.name ?? null;
  const lands = d.srcland.filter((s) => s.source === source).map((s) => ({ key: s.path, label: s.path, n: s.n }));
  return (
    <Panel
      title={sourceName(source)}
      sub={`Traffic source, ${d.sel.name}`}
      onClose={onClose}
      actions={
        canBack ? (
          <button type="button" onClick={onBack} className="btn-line !h-8 !px-2.5 max-md:!h-10" aria-label="Back">
            <AIcon name="arrow-left" size={14} />
            <span className="max-md:hidden">Back</span>
          </button>
        ) : null
      }
    >
      <MiniStats
        versus={versus}
        items={[
          { label: "Visits", unit: "count", cur: row?.cur ?? 0, prev: row?.prev ?? null },
          { label: "Share of visits", unit: "pct", cur: share(row?.cur ?? 0, total) },
          { label: "Landing pages", unit: "count", cur: lands.length },
        ]}
      />
      {d.sourceSeries[source] && (
        <section className="mt-6">
          <h3 className="mb-1 text-[13px] font-medium">Visits over time</h3>
          <Spark values={d.sourceSeries[source]} labels={d.series.map((s) => s.name)} />
        </section>
      )}
      <PanelList title="Landing pages from this source" rows={lands.slice(0, 15)} empty="No landing pages recorded for this source yet (they start with the behaviour counters)." onPick={onPage} />
      {source !== "direct" && /\./.test(source) && (
        <a href={`https://${source}`} target="_blank" rel="noreferrer" className="btn-line mt-6 w-full">
          <AIcon name="external-link" size={14} />
          Open {source}
        </a>
      )}
    </Panel>
  );
}

function Locations({ d, edge, versus }: { d: InsightsData; edge: EdgeData; versus: string | null }) {
  const tabs = [
    {
      id: "visits",
      label: "Visits",
      rows: d.dims.country.map((x) => ({ key: x.key, label: countryName(x.key), lead: flag(x.key) || <AIcon name="world" size={14} className="text-faint" />, cur: x.cur, prev: x.prev })),
      empty: "No country data yet. It starts with the next visit.",
      info: "Country of each visit, from Cloudflare's IP geolocation at the edge. The IP itself is never stored.",
    },
    ...(edge.state === "ok"
      ? [
          {
            id: "edge",
            label: "All requests (Cloudflare)",
            unit: "Requests",
            rows: edge.countries.map((x) => ({ key: x.name, label: countryName(x.name), lead: flag(x.name) || <AIcon name="world" size={14} className="text-faint" />, cur: x.requests, prev: null, sub: x.threats ? `${fmt(x.threats)} threats` : undefined })),
            empty: "Cloudflare has no requests for this period.",
            info: "Every request Cloudflare served for ingotui.com, including bots, assets and visitors who block scripts.",
          },
        ]
      : []),
  ];
  return <RankCard title="Locations" versus={versus} tabs={tabs} />;
}

function Devices({ d, versus }: { d: InsightsData; versus: string | null }) {
  const [v, setV] = useState<"browser" | "os">("browser");
  const dev = ["desktop", "mobile", "tablet"].map((k) => ({ key: k, label: deviceName[k], n: d.dims.device.find((x) => x.key === k)?.cur ?? 0 })).filter((x) => x.n);
  const list = d.dims[v];
  const total = list.reduce((s, x) => s + x.cur, 0);
  const max = Math.max(1, ...list.map((x) => x.cur));
  return (
    <section className="card min-w-0 p-4">
      <div className="flex items-center gap-2">
        <h2 className="text-[15px] font-medium tracking-[-0.01em]">Devices</h2>
        <Info label="Devices" text="Device class, browser and operating system of each visit, read from the browser's user agent. Only the class name is stored." />
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["desktop", "mobile", "tablet"].map((k) => {
          const x = d.dims.device.find((y) => y.key === k);
          const all = d.dims.device.reduce((s, y) => s + y.cur, 0);
          return (
            <div key={k} className="rounded-[8px] bg-tile px-3 py-2.5">
              <p className="flex items-center gap-1.5 text-[12px] text-mute">
                <AIcon name={deviceIcon[k]} size={14} />
                {deviceName[k]}
              </p>
              <p className="mt-0.5 text-[17px] font-medium tabular-nums">{fmtPct(share(x?.cur ?? 0, all))}</p>
              <p className="flex flex-wrap items-center gap-x-1.5 text-[12px] text-mute tabular-nums">
                {fmt(x?.cur ?? 0)} visits
                <Change unit="count" cur={x?.cur ?? 0} prev={x?.prev ?? null} versus={versus} />
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-4">
        <ShareBar parts={dev} label="Visits by device" />
      </div>
      <Seg
        className="mt-4"
        label="Software"
        value={v}
        onChange={setV}
        options={[
          { id: "browser", label: "Browsers" },
          { id: "os", label: "Operating systems" },
        ]}
      />
      {list.length ? (
        <ol className="mt-2 flex flex-col gap-0.5 text-[13px]">
          {list.slice(0, 7).map((x) => (
            <li key={x.key} className="relative flex min-h-8 items-center gap-2.5 px-2 max-md:min-h-10">
              <span className="absolute inset-y-0.5 left-0 rounded-[5px] bg-wash" style={{ width: `${Math.max(1.5, (x.cur / max) * 100)}%` }} aria-hidden="true" />
              <span className="relative min-w-0 flex-1 truncate">{x.key}</span>
              <span className="relative hidden md:inline">
                <Change unit="count" cur={x.cur} prev={x.prev} versus={versus} />
              </span>
              <span className="relative font-medium tabular-nums">{fmt(x.cur)}</span>
              <span className="relative w-11 text-right text-[12px] text-faint tabular-nums">{fmtPct(share(x.cur, total))}</span>
            </li>
          ))}
        </ol>
      ) : (
        <p className="py-6 text-center text-[13px] text-mute">No data yet. It starts with the next visit.</p>
      )}
    </section>
  );
}

type SortKey = "views" | "entrances" | "exitRate" | "avgTime" | "read";
const COLS: { id: SortKey; label: string; info: string }[] = [
  { id: "views", label: "Views", info: "Page views in the selected period." },
  { id: "entrances", label: "Entrances", info: "Visits that started on this page." },
  { id: "exitRate", label: "Exit rate", info: "Share of this page's views that were the last page of a visit." },
  { id: "avgTime", label: "Avg. time", info: "Average engaged time per measured view." },
  { id: "read", label: "Read to 75%", info: "Share of measured views that scrolled at least 75% of the page." },
];

function PagesTable({ d, versus, onOpen }: { d: InsightsData; versus: string | null; onOpen: (path: string) => void }) {
  const [sort, setSort] = useState<SortKey>("views");
  const [dir, setDir] = useState<1 | -1>(-1);
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(15);
  const all = useMemo(() => pageStats(d), [d]);
  const list = useMemo(() => {
    const f = q.trim().toLowerCase();
    const hit = f ? all.filter((p) => p.path.toLowerCase().includes(f)) : all;
    const v = (p: PageStat) => (p[sort] ?? -1) as number;
    return [...hit].sort((a, b) => (v(a) - v(b)) * dir || b.views - a.views);
  }, [all, q, sort, dir]);
  const by = (k: SortKey) => {
    if (k === sort) setDir((x) => (x === 1 ? -1 : 1));
    else {
      setSort(k);
      setDir(-1);
    }
  };
  const val = (p: PageStat, k: SortKey) => (k === "views" || k === "entrances" ? fmt(p[k]) : k === "avgTime" ? show("secs", p.avgTime) : fmtPct(p[k]));
  return (
    <section className="mt-8">
      <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-2">
        <h2 className="text-[15px] font-medium tracking-[-0.01em]">Pages</h2>
        <Info label="Pages" text="Every page with views in the period. Sort by any column; open a page to see where its visitors came from, where they went, how far they scrolled and what they clicked." />
        <span className="text-[13px] text-mute">{fmt(list.length)} pages</span>
        <label className="ml-auto flex h-9 w-full items-center gap-2 rounded-[8px] px-2.5 shadow-[inset_0_0_0_1px_var(--color-hair-2)] focus-within:shadow-[inset_0_0_0_1px_var(--color-ink)] md:w-64">
          <AIcon name="search" size={15} className="text-faint" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Filter pages" aria-label="Filter pages" className="min-w-0 flex-1 bg-transparent text-[13px] outline-none max-md:text-[16px]" />
        </label>
      </div>
      <div className="md:hidden">
        <Seg label="Sort pages by" value={sort} onChange={(k) => by(k)} options={COLS.map((c) => ({ id: c.id, label: c.label }))} />
      </div>
      <div className="card mt-2 overflow-hidden md:mt-0">
        <table className="w-full table-fixed border-collapse text-[13px] max-md:hidden">
          <caption className="sr-only">Pages, sorted by {COLS.find((c) => c.id === sort)?.label}</caption>
          <thead>
            <tr className="border-b border-hair text-[12px] text-faint">
              <th scope="col" className="px-4 py-2 text-left font-normal">Page</th>
              {COLS.map((c) => (
                <th key={c.id} scope="col" aria-sort={sort === c.id ? (dir === -1 ? "descending" : "ascending") : "none"} className={"py-2 pr-4 text-right font-normal whitespace-nowrap " + (c.id === "views" ? "w-[150px]" : c.id === "read" ? "w-[124px]" : "w-[104px]")}>
                  <button type="button" onClick={() => by(c.id)} title={c.info} className={"inline-flex items-center gap-1 rounded-[4px] hover:text-ink " + (sort === c.id ? "text-ink" : "")}>
                    {c.label}
                    <AIcon name={sort === c.id ? "chevron-down" : "selector"} size={12} className={sort === c.id && dir === 1 ? "rotate-180" : ""} />
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&>tr:not(:last-child)]:border-b [&>tr]:border-hair">
            {list.slice(0, limit).map((p) => (
              <tr key={p.path} className="group cursor-pointer hover:bg-tile" onClick={() => onOpen(p.path)}>
                <td className="truncate px-4 py-2">
                  <button type="button" onClick={(e) => (e.stopPropagation(), onOpen(p.path))} className="max-w-full truncate text-left font-medium group-hover:underline">
                    {p.path}
                  </button>
                </td>
                {COLS.map((c) => (
                  <td key={c.id} className="py-2 pr-4 text-right whitespace-nowrap tabular-nums">
                    {c.id === "views" ? (
                      <span className="inline-flex items-center justify-end gap-2">
                        <Change unit="count" cur={p.views} prev={p.viewsPrev} versus={versus} />
                        {val(p, c.id)}
                      </span>
                    ) : (
                      <span className={p[c.id] === null ? "text-faint" : ""}>{val(p, c.id)}</span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="divide-y divide-hair md:hidden">
          {list.slice(0, limit).map((p) => (
            <li key={p.path}>
              <button type="button" onClick={() => onOpen(p.path)} className="flex w-full items-center gap-3 px-4 py-3 text-left active:bg-tile">
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-medium">{p.path}</span>
                  <span className="mt-0.5 block text-[13px] text-mute tabular-nums">
                    {fmt(p.views)} views, {show("secs", p.avgTime)} avg., {fmtPct(p.read)} read
                  </span>
                </span>
                <span className="text-[15px] font-medium tabular-nums">{val(p, sort)}</span>
                <AIcon name="chevron-right" size={16} className="text-faint" />
              </button>
            </li>
          ))}
        </ul>
        {!list.length && <p className="px-4 py-8 text-center text-[13px] text-mute">{q ? "No page matches that filter." : "No page views in this period."}</p>}
      </div>
      {list.length > limit && (
        <button type="button" onClick={() => setLimit((l) => l + 30)} className="btn-line mt-3 max-md:w-full">
          Show more pages ({fmt(list.length - limit)} left)
        </button>
      )}
    </section>
  );
}

const fmtBytes = (b: number) => (b >= 1e9 ? (b / 1e9).toFixed(2) + " GB" : b >= 1e6 ? (b / 1e6).toFixed(1) + " MB" : b >= 1e3 ? Math.round(b / 1e3) + " KB" : b + " B");

function EdgeSection({ edge, versus }: { edge: EdgeData; versus: string | null }) {
  return (
    <section className="mt-8">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <AIcon name="cloud" size={18} className="text-mute" />
        <h2 className="text-[15px] font-medium tracking-[-0.01em]">Cloudflare edge</h2>
        <Info label="Cloudflare edge" text="What Cloudflare saw at the edge for ingotui.com: every request, including bots, images and scripts, plus threats it blocked. Counted differently from the site numbers above, so the two never match exactly." />
      </div>
      {edge.state === "off" ? (
        <div className="card p-4 text-[13px]">
          <p className="font-medium">Connect Cloudflare to see edge traffic here</p>
          <p className="mt-1 text-mute">Adds all requests, bandwidth, cache hit rate, blocked threats and countries for every request, straight from Cloudflare. It takes two settings on the web worker:</p>
          <ol className="mt-3 grid gap-2 text-mute">
            <li>
              <span className="text-ink">1.</span> In the Cloudflare dashboard, My Profile, API Tokens, create a token with the permission <span className="text-ink">Zone, Analytics, Read</span> for ingotui.com.
            </li>
            <li>
              <span className="text-ink">2.</span> In apps/web run <code className="rounded bg-tile px-1">npx wrangler secret put CF_API_TOKEN</code> and paste the token.
            </li>
            <li>
              <span className="text-ink">3.</span> Add <code className="rounded bg-tile px-1">CF_ZONE_ID</code> (Overview page of ingotui.com, right column) to the worker variables, then deploy.
            </li>
          </ol>
        </div>
      ) : edge.state === "error" ? (
        <p className="card flex items-start gap-2 p-4 text-[13px] text-mute">
          <AIcon name="alert-circle" size={16} className="mt-px shrink-0" />
          {edge.message}
        </p>
      ) : (
        <>
          <Tiles
            cols="lg:grid-cols-5"
            versus={versus}
            tiles={[
              { id: "req", label: "Requests", unit: "count", cur: edge.cur.requests, prev: edge.prev?.requests ?? null, info: "Every request Cloudflare served: pages, scripts, images, API calls and bots." },
              { id: "uniq", label: "Unique visitors", unit: "count", cur: edge.cur.uniques, prev: edge.prev?.uniques ?? null, info: "Cloudflare's unique IPs per day, summed. Includes bots." },
              { id: "pv", label: "Page views (edge)", unit: "count", cur: edge.cur.pageViews, prev: edge.prev?.pageViews ?? null, info: "HTML responses Cloudflare counted as page views. Includes bots, so it runs above the site's own count." },
              { id: "cache", label: "Cached", unit: "pct", cur: share(edge.cur.cached, edge.cur.requests), prev: edge.prev ? share(edge.prev.cached, edge.prev.requests) : null, info: "Share of requests answered from Cloudflare's cache." },
              { id: "threats", label: "Threats blocked", unit: "count", cur: edge.cur.threats, prev: edge.prev?.threats ?? null, invert: true, info: "Requests Cloudflare blocked or challenged as threats." },
            ]}
          />
          <div className="mt-3 grid gap-3 lg:grid-cols-2">
            <div className="card p-4">
              <p className="text-[13px] text-mute">Bandwidth</p>
              <p className="mt-1 text-[22px] font-medium tabular-nums">{fmtBytes(edge.cur.bytes)}</p>
              <div className="mt-3">
                <Spark values={edge.days.map((x) => x.requests)} labels={edge.days.map((x) => x.day)} />
              </div>
            </div>
            <PanelListCard title="Response status" rows={edge.status.slice(0, 8).map((s) => ({ key: String(s.code), label: `${s.code} ${STATUS[Math.floor(s.code / 100)] ?? ""}`, n: s.requests }))} />
          </div>
        </>
      )}
    </section>
  );
}

const STATUS: Record<number, string> = { 2: "OK", 3: "Redirect", 4: "Client error", 5: "Server error" };

function PanelListCard({ title, rows }: { title: string; rows: { key: string; label: string; n: number }[] }) {
  return (
    <div className="card p-4 [&>section]:mt-0">
      <PanelList title={title} rows={rows} empty="No requests in this period." />
    </div>
  );
}
