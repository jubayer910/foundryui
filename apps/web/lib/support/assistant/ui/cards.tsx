"use client";
import { useState } from "react";
import { AnswerBlocks, AnswerText } from "../../answer-text";
import type { AccountInfo, Card, ComponentHit, IconHit, PricingInfo, Reply, Step, SystemInfo } from "../types";
import { Glyph } from "./glyph";

/** Rich cards of the help assistant. Shared by the widget panel and the /support search. */

const usd = (n: number) => "$" + (Number.isInteger(n) ? n : n.toFixed(2));
const fmt = (n: number) => n.toLocaleString("en-US");
const linkCls = "font-medium text-ink underline underline-offset-2";
const badge = "inline-flex h-[18px] items-center rounded-[5px] px-1.5 text-[10.5px] font-medium leading-none";

/** Accent at low alpha behind a system name (meaningful colour: the system's own accent). */
const tint = (hex: string, a = 0.14) => {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!m) return "var(--color-chip)";
  const n = parseInt(m[1], 16);
  return `rgb(${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255} / ${a})`;
};

export function SystemTag({ name, accent }: { name: string; accent: string }) {
  return (
    <span className={badge + " text-ink"} style={{ background: tint(accent) }}>
      {name}
    </span>
  );
}

function ComponentCard({ c }: { c: ComponentHit }) {
  return (
    <a href={c.url} className="group flex w-[172px] shrink-0 snap-start flex-col overflow-hidden rounded-[10px] bg-white shadow-[inset_0_0_0_1px_var(--color-hair-2)] transition-shadow hover:shadow-[inset_0_0_0_1px_var(--color-ink)] focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-ink)]">
      <span className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-tile p-2">
        {c.thumb ? (
          // eslint-disable-next-line @next/next/no-img-element -- library thumbnails are static webp files
          <img src={c.thumb} alt="" loading="lazy" decoding="async" className="max-h-full max-w-full rounded-[4px] object-contain" />
        ) : (
          <Glyph name={c.kind === "code" ? "install" : "component"} size={22} className="text-faint" />
        )}
      </span>
      <span className="flex flex-1 flex-col gap-1.5 p-2.5">
        <span className="line-clamp-2 text-[12.5px] font-medium leading-snug text-ink">{c.name}</span>
        <span className="flex flex-wrap gap-1">
          <SystemTag name={c.systemName} accent={c.accent} />
          <span className={badge + (c.tier === "free" ? " bg-[#e7f6ec] text-[#14632f]" : " bg-ink text-white")}>{c.tier === "free" ? "Free" : "Pro"}</span>
          <span className={badge + " bg-chip text-ink-2"}>{c.kind === "code" ? "Code" : "Figma"}</span>
        </span>
        <span className="mt-auto inline-flex items-center gap-1 pt-0.5 text-[12px] font-medium text-ink">
          Open <Glyph name="open" size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
        </span>
      </span>
    </a>
  );
}

function ComponentsCard({ card }: { card: Extract<Card, { type: "components" }> }) {
  const from = card.page * 6 + 1; // six per page (engine PAGE)
  return (
    <div className="flex flex-col gap-1.5">
      <div className="-mx-1 flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-1.5 [scrollbar-width:thin]" role="list" aria-label={`Components for ${card.query || "your search"}`}>
        {card.items.map((c) => (
          <div role="listitem" key={c.slug} className="flex">
            <ComponentCard c={c} />
          </div>
        ))}
      </div>
      {card.total > card.items.length && (
        <p className="text-[11px] text-mute">
          Showing {fmt(from)} to {fmt(Math.min(card.total, from + card.items.length - 1))} of {fmt(card.total)}.
        </p>
      )}
    </div>
  );
}

function SystemCard({ s }: { s: SystemInfo }) {
  return (
    <div className="overflow-hidden rounded-[10px] bg-white shadow-[inset_0_0_0_1px_var(--color-hair-2)]">
      <div className="h-1.5" style={{ background: s.accent }} />
      <div className="p-3">
        <div className="flex items-center gap-2">
          <p className="text-[14px] font-medium">{s.name}</p>
          <span className={badge + (s.tier === "free" ? " bg-[#e7f6ec] text-[#14632f]" : " bg-ink text-white")}>{s.tier === "free" ? "Free" : "Pro"}</span>
        </div>
        <p className="mt-0.5 text-[12.5px] text-mute">{s.tagline}. Type: {s.font}.</p>
        <dl className="mt-2.5 grid grid-cols-3 gap-1.5 text-center">
          {[
            ["Components", s.components],
            ["With code", s.coded],
            ["Templates", s.templates],
          ].map(([k, v]) => (
            <div key={k as string} className="rounded-[8px] bg-tile px-1 py-1.5">
              <dt className="text-[10.5px] text-mute">{k}</dt>
              <dd className="text-[14px] font-medium tabular-nums">{fmt(v as number)}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-2.5 flex gap-1.5">
          <a href={s.url} className="btn-ink !h-7 !px-3 !text-[12px]">Open {s.name}</a>
          <a href={"/components?s=" + s.slug} className="btn-line !h-7 !px-3 !text-[12px]">Components</a>
        </div>
      </div>
    </div>
  );
}

function SystemsCard({ systems }: { systems: SystemInfo[] }) {
  return (
    <ul className="overflow-hidden rounded-[10px] bg-white shadow-[inset_0_0_0_1px_var(--color-hair-2)]">
      {systems.map((s, i) => (
        <li key={s.slug} className={i ? "border-t border-hair" : ""}>
          <a href={s.url} className="flex items-center gap-2.5 px-3 py-2 hover:bg-wash">
            <span className="h-6 w-1.5 shrink-0 rounded-full" style={{ background: s.accent }} aria-hidden="true" />
            <span className="min-w-0 flex-1">
              <span className="block text-[12.5px] font-medium">{s.name}</span>
              <span className="block truncate text-[11.5px] text-mute">{s.tagline}</span>
            </span>
            <span className="text-[11px] tabular-nums text-mute">{fmt(s.components)}</span>
            <span className={badge + (s.tier === "free" ? " bg-[#e7f6ec] text-[#14632f]" : " bg-chip text-ink-2")}>{s.tier === "free" ? "Free" : "Pro"}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

function PricingCard({ p, focus }: { p: PricingInfo; focus?: string }) {
  const rows: { id: string; name: string; price: string; note: string }[] = [
    { id: "free", name: "Free", price: "$0", note: "Non-commercial: Loopo, free components, stroke icons" },
    { id: "pro", name: "Pro", price: p.monthly ? `${usd(p.proMonthly)}/mo` : `${usd(p.proYearly)}/yr`, note: p.monthly ? `or ${usd(p.proYearly)} a year` : "billed yearly" },
    { id: "team", name: "Team", price: p.monthly ? `${usd(p.teamMonthly)}/mo` : `${usd(p.teamYearly)}/yr`, note: `${p.teamSeats} people${p.monthly ? `, or ${usd(p.teamYearly)} a year` : ""}` },
  ];
  if (p.lifetime !== null) rows.push({ id: "lifetime", name: "Lifetime", price: usd(p.lifetime), note: "once, every future update" });
  const end = p.dealEndsAt ? new Date(p.dealEndsAt).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" }) : null;
  return (
    <div className="overflow-hidden rounded-[10px] bg-white shadow-[inset_0_0_0_1px_var(--color-hair-2)]">
      <ul>
        {rows.map((r, i) => (
          <li key={r.id} className={"flex items-baseline gap-2 px-3 py-2 " + (i ? "border-t border-hair " : "") + (focus === r.id ? "bg-wash" : "")}>
            <span className="w-[62px] shrink-0 text-[12.5px] font-medium">{r.name}</span>
            <span className="min-w-0 flex-1 truncate text-[11.5px] text-mute">{r.note}</span>
            <span className="shrink-0 text-[13px] font-medium tabular-nums">
              {r.id === "lifetime" && p.dealActive && p.lifetimeAfter !== p.lifetime && <s className="mr-1 font-normal text-faint">{usd(p.lifetimeAfter)}</s>}
              {r.price}
            </span>
          </li>
        ))}
      </ul>
      {p.dealActive && (
        <p className="flex flex-wrap items-center gap-x-1.5 border-t border-hair bg-tile px-3 py-2 text-[11.5px] text-ink-2">
          <Glyph name="pricing" size={14} className="shrink-0" />
          <span className="font-medium text-ink">Launch deal on Lifetime</span>
          {p.dealSpotsLeft !== null && <span>{fmt(p.dealSpotsLeft)} spots left</span>}
          {end && <span>until {end} (UTC)</span>}
        </p>
      )}
      <div className="flex gap-1.5 border-t border-hair p-2.5">
        <a href="/pricing" className="btn-ink !h-7 !px-3 !text-[12px]">See plans</a>
        {p.lifetime !== null && <a href="/pricing#lifetime-h" className="btn-line !h-7 !px-3 !text-[12px]">Lifetime</a>}
      </div>
    </div>
  );
}

function CopyCode({ label, code }: { label: string; code: string }) {
  const [done, setDone] = useState(false);
  return (
    <div className="mt-1.5 overflow-hidden rounded-[8px] bg-[#0f0f10] text-white">
      <div className="flex items-center justify-between border-b border-white/10 py-1 pl-2.5 pr-1">
        <span className="font-fu-mono text-[10.5px] text-white/60">{label}</span>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard?.writeText(code).then(() => {
              setDone(true);
              setTimeout(() => setDone(false), 1600);
            }, () => {});
          }}
          className="inline-flex h-6 items-center gap-1 rounded-[6px] px-1.5 text-[11px] text-white/80 hover:bg-white/10 hover:text-white"
          aria-label={done ? "Copied" : "Copy " + label}
        >
          <Glyph name={done ? "check" : "copy"} size={13} />
          {done ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="max-h-[180px] overflow-auto px-2.5 py-2 font-fu-mono text-[11px] leading-relaxed whitespace-pre-wrap [overflow-wrap:anywhere]">{code}</pre>
    </div>
  );
}

function StepsCard({ card }: { card: Extract<Card, { type: "steps" }> }) {
  return (
    <div className="rounded-[10px] bg-white p-3 shadow-[inset_0_0_0_1px_var(--color-hair-2)]">
      <p className="text-[13px] font-medium">{card.title}</p>
      <ol className="mt-2 flex flex-col gap-3">
        {card.steps.map((s: Step, i: number) => (
          <li key={i} className="flex gap-2.5">
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-ink text-[11px] font-medium tabular-nums text-white">{i + 1}</span>
            <div className="min-w-0 flex-1">
              <p className="text-[12.5px] font-medium leading-5">{s.title}</p>
              {s.text && (
                <p className="text-[12.5px] leading-relaxed text-ink-2">
                  <AnswerText text={s.text} linkClass={linkCls} />
                </p>
              )}
              {s.code && <CopyCode label={s.code.label} code={s.code.code} />}
            </div>
          </li>
        ))}
      </ol>
      {card.link && (
        <a href={card.link.href} className="mt-3 inline-flex items-center gap-1 text-[12px] font-medium text-ink underline-offset-2 hover:underline">
          {card.link.label} <Glyph name="open" size={13} />
        </a>
      )}
    </div>
  );
}

function AccountCard({ a }: { a: AccountInfo }) {
  if (!a.signedIn)
    return (
      <div className="flex items-center gap-2.5 rounded-[10px] bg-tile p-3 text-[12.5px] text-ink-2">
        <Glyph name="account" size={18} className="shrink-0" />
        Not signed in on this browser.
      </div>
    );
  const pct = a.mcpLimit ? Math.min(100, Math.round((a.mcpToday / a.mcpLimit) * 100)) : 0;
  return (
    <div className="rounded-[10px] bg-white p-3 shadow-[inset_0_0_0_1px_var(--color-hair-2)]">
      <div className="flex items-center gap-2">
        <Glyph name="account" size={18} className="shrink-0" />
        <p className="min-w-0 flex-1 truncate text-[13px] font-medium">{a.name}</p>
        <span className={badge + (a.paid ? " bg-ink text-white" : " bg-chip text-ink")}>{a.planLabel}</span>
      </div>
      <div className="mt-3">
        <div className="flex justify-between text-[11.5px] text-mute">
          <span>MCP calls today</span>
          <span className="tabular-nums text-ink">{a.mcpLimit === null ? `${fmt(a.mcpToday)} (no limit)` : `${fmt(a.mcpToday)} of ${fmt(a.mcpLimit)}`}</span>
        </div>
        {a.mcpLimit !== null && (
          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-chip" role="meter" aria-valuemin={0} aria-valuemax={a.mcpLimit} aria-valuenow={a.mcpToday} aria-label="MCP calls used today">
            <div className="h-full rounded-full bg-ink" style={{ width: pct + "%" }} />
          </div>
        )}
      </div>
      <dl className="mt-2.5 grid grid-cols-2 gap-1.5 text-[11.5px]">
        <div className="rounded-[8px] bg-tile px-2 py-1.5">
          <dt className="text-mute">Copies and downloads today</dt>
          <dd className="text-[13px] font-medium tabular-nums">{fmt(a.actionsToday)}</dd>
        </div>
        <div className="rounded-[8px] bg-tile px-2 py-1.5">
          <dt className="text-mute">API keys</dt>
          <dd className="text-[13px] font-medium">{a.apiKeys ? `${a.apiKeys} active` : "None yet"}</dd>
        </div>
      </dl>
    </div>
  );
}

function IconsCard({ card }: { card: Extract<Card, { type: "icons" }> }) {
  return (
    <ul className="grid grid-cols-6 gap-1.5" aria-label={`Icons for ${card.query}`}>
      {card.items.map((i: IconHit) => (
        <li key={i.name}>
          <a href={i.url} title={i.name} className="flex aspect-square items-center justify-center rounded-[8px] bg-tile hover:bg-chip-2 focus-visible:shadow-[inset_0_0_0_1.5px_var(--color-ink)]">
            {i.svg ? (
              // eslint-disable-next-line @next/next/no-img-element -- our own SVG from public/icons, as a data URI (never injected as HTML)
              <img src={"data:image/svg+xml;utf8," + encodeURIComponent(i.svg)} width={22} height={22} alt={i.name} />
            ) : (
              <span className="truncate px-0.5 text-[9px] text-mute">{i.name}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** A knowledge-base article under a live result: the question, an excerpt, the full answer on demand. */
function ArticleCard({ card }: { card: Extract<Card, { type: "article" }> }) {
  return (
    <details className="group rounded-[10px] bg-white shadow-[inset_0_0_0_1px_var(--color-hair-2)] open:bg-white">
      <summary className="flex cursor-pointer list-none items-start gap-2 p-3 [&::-webkit-details-marker]:hidden">
        <Glyph name="book" size={15} className="mt-0.5 shrink-0 text-mute" />
        <span className="min-w-0 flex-1">
          <span className="block text-[10.5px] text-mute">Answer from our docs, {card.category}</span>
          <span className="block text-[12.5px] font-medium leading-snug">{card.question}</span>
        </span>
        <span className="shrink-0 text-[11.5px] font-medium text-ink group-open:hidden">Read</span>
      </summary>
      <div className="px-3 pb-3 text-[12.5px] leading-relaxed text-ink-2">
        <AnswerBlocks text={card.answer} linkClass={linkCls} />
        <a href={"/support#" + card.slug} className="mt-2 inline-flex items-center gap-1 text-[12px] font-medium text-ink underline-offset-2 hover:underline">
          Open in Support <Glyph name="open" size={13} />
        </a>
      </div>
    </details>
  );
}

export function CardView({ card }: { card: Card }) {
  switch (card.type) {
    case "components":
      return <ComponentsCard card={card} />;
    case "system":
      return <SystemCard s={card.system} />;
    case "systems":
      return <SystemsCard systems={card.systems} />;
    case "pricing":
      return <PricingCard p={card.pricing} focus={card.focus} />;
    case "steps":
      return <StepsCard card={card} />;
    case "account":
      return <AccountCard a={card.account} />;
    case "icons":
      return <IconsCard card={card} />;
    case "article":
      return <ArticleCard card={card} />;
  }
}

/** Text, cards and action links of one reply. */
export function ReplyBody({ reply, bubbleClass = "" }: { reply: Reply; bubbleClass?: string }) {
  return (
    <>
      <div className={bubbleClass}>
        <AnswerBlocks text={reply.text} linkClass={linkCls} />
      </div>
      {reply.cards?.map((c, i) => <CardView key={i} card={c} />)}
      {!!reply.actions?.length && (
        <div className="flex flex-wrap gap-1.5">
          {reply.actions.map((a) => (
            <a key={a.href + a.label} href={a.href} className="inline-flex h-7 items-center gap-1 rounded-full px-2.5 text-[12px] font-medium text-ink shadow-[inset_0_0_0_1px_var(--color-hair-2)] hover:bg-wash">
              {a.label} <Glyph name="open" size={13} />
            </a>
          ))}
        </div>
      )}
    </>
  );
}
