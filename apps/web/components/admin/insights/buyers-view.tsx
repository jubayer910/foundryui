"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Buyer, CheckoutRow, Evidence } from "@/lib/analytics/buyers";
import { AIcon } from "../admin-icons";
import { Info } from "../reports/info";
import { RankCard, Seg, Tiles, fmt, sourceName } from "./parts";

const PROVIDER: Record<string, string> = { lemonsqueezy: "Lemon Squeezy", contra: "Contra", appsumo: "AppSumo" };
const EVIDENCE: Record<Evidence, { label: string; tone: string; info: string }> = {
  tracked: { label: "Tracked", tone: "bg-[#e7f4ec] text-[#17663a]", info: "From the visitor's source cookies, saved on the account at sign-up and checkout." },
  ref: { label: "Ref link", tone: "bg-chip text-ink", info: "The ?ref= link the account signed up through." },
  channel: { label: "Channel", tone: "bg-chip text-ink", info: "Known from how they paid: an AppSumo code, or a Contra sale paid before they had an account." },
  unknown: { label: "Unknown", tone: "bg-tile text-mute", info: "Bought before source tracking started, without a ref link." },
};
const day = (ms: number | null) => (ms ? new Date(ms).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }) : "–");
const usd = (c: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: c % 100 ? 2 : 0 }).format(c / 100);
const label = (s: string) => sourceName(s);

/** Insights > Buyers: which source brought each paying customer, totals per source, and each buyer's path. */
export function BuyersView({ buyers, checkouts, range }: { buyers: Buyer[]; checkouts: CheckoutRow[]; range: string }) {
  const [model, setModel] = useState<"last" | "first">("last");
  const [pick, setPick] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const src = (b: Buyer) => (model === "first" ? b.firstSource : b.lastSource);
  const usdOnly = (list: Buyer[]) => list.filter((b) => b.currency === "USD").reduce((s, b) => s + b.cents, 0);
  const known = buyers.filter((b) => b.evidence !== "unknown").length;
  const days = buyers.filter((b) => b.signedUpAt && b.boughtAt >= b.signedUpAt).map((b) => (b.boughtAt - b.signedUpAt!) / 86_400_000).sort((a, b) => a - b);
  const median = days.length ? days[Math.floor(days.length / 2)] : null;

  const bySource = useMemo(() => {
    const m = new Map<string, { n: number; cents: number }>();
    for (const b of buyers) {
      const k = src(b);
      const x = m.get(k) ?? { n: 0, cents: 0 };
      x.n += 1;
      if (b.currency === "USD") x.cents += b.cents;
      m.set(k, x);
    }
    return [...m].map(([key, v]) => ({ key, label: label(key), cur: v.n, prev: null, aside: undefined, sub: v.cents ? usd(v.cents) : undefined })).sort((a, b) => b.cur - a.cur);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buyers, model]);

  const ckBySource = useMemo(() => {
    const m = new Map<string, number>();
    for (const c of checkouts) m.set(c.source, (m.get(c.source) ?? 0) + c.n);
    return [...m].map(([key, n]) => ({ key, label: label(key), cur: n, prev: null })).sort((a, b) => b.cur - a.cur);
  }, [checkouts]);

  const list = useMemo(() => {
    const f = q.trim().toLowerCase();
    return buyers.filter((b) => (!pick || src(b) === pick) && (!f || b.email.toLowerCase().includes(f) || src(b).toLowerCase().includes(f)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buyers, pick, q, model]);

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <Seg
          label="Period"
          value={range}
          onChange={(v) => (location.search = v === "all" ? "" : `?range=${v}`)}
          options={[
            { id: "all", label: "All time" },
            { id: "90", label: "90 days" },
            { id: "30", label: "30 days" },
            { id: "7", label: "7 days" },
          ]}
        />
        <div className="flex items-center gap-1 md:ml-auto">
          <span className="text-[12px] text-mute">Credit to</span>
          <Seg
            label="Credit buyers to"
            value={model}
            onChange={(v) => {
              setModel(v);
              setPick(null);
            }}
            options={[
              { id: "last", label: "Latest source" },
              { id: "first", label: "First visit" },
            ]}
          />
          <Info label="Credit to" text="Latest source: the most recent visit that came from a link, search or campaign before they signed up or started checkout. First visit: where they came from the very first time." align="right" />
        </div>
      </div>

      <Tiles
        cols="lg:grid-cols-4"
        versus={null}
        tiles={[
          { id: "buyers", label: "Buyers", unit: "count", cur: buyers.length, prev: null, info: "Paying purchases: Lemon Squeezy, Contra and AppSumo. Staff grants and gifts are not buyers." },
          { id: "rev", label: "Revenue (USD)", unit: "usd", cur: usdOnly(buyers), prev: null, info: "Amount paid in USD by these buyers. AppSumo codes count as $0 here." },
          { id: "known", label: "Source known", unit: "pct", cur: buyers.length ? (known / buyers.length) * 100 : null, prev: null, info: "Buyers with a tracked source, a ref link or a known channel. Buyers from before tracking started are mostly unknown." },
          { id: "days", label: "Median days to buy", unit: "count", cur: median, prev: null, info: "Days from creating the account to the purchase, middle value." },
        ]}
      />

      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <RankCard
          title="Buyers by source"
          info="Click a source to see its buyers below. The amount next to each source is its USD revenue."
          versus={null}
          onOpen={(_, key) => setPick((p) => (p === key ? null : key))}
          tabs={[{ id: "src", label: "Sources", unit: "Buyers", rows: bySource, empty: "No buyers in this period." }]}
        />
        <RankCard
          title="Checkouts started by source"
          info="Clicks on a buy button, by the visitor's latest source, signed in or not. Counted from 2026-11-26. Compare with buyers to see which sources convert."
          versus={null}
          tabs={[{ id: "ck", label: "Sources", unit: "Checkouts", rows: ckBySource, empty: "No checkouts recorded yet. They start with the next click on a buy button." }]}
        />
      </div>

      <section className="mt-8">
        <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-2">
          <h2 className="text-[15px] font-medium tracking-[-0.01em]">Every buyer</h2>
          <span className="text-[13px] text-mute">{fmt(list.length)} buyers</span>
          {pick && (
            <button type="button" onClick={() => setPick(null)} className="pill !h-7 !px-2.5 text-[12px]" data-on="true" aria-label={`Clear filter ${label(pick)}`}>
              {label(pick)}
              <AIcon name="x" size={12} />
            </button>
          )}
          <label className="ml-auto flex h-9 w-full items-center gap-2 rounded-[8px] px-2.5 shadow-[inset_0_0_0_1px_var(--color-hair-2)] focus-within:shadow-[inset_0_0_0_1px_var(--color-ink)] md:w-64">
            <AIcon name="search" size={15} className="text-faint" />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search email or source" aria-label="Search buyers" className="min-w-0 flex-1 bg-transparent text-[13px] outline-none max-md:text-[16px]" />
          </label>
        </div>
        <div className="card overflow-hidden">
          {list.length ? (
            <ol className="divide-y divide-hair">
              {list.slice(0, 300).map((b) => (
                <BuyerRow key={b.purchaseId} b={b} source={src(b)} />
              ))}
            </ol>
          ) : (
            <p className="px-4 py-8 text-center text-[13px] text-mute">No buyers match.</p>
          )}
        </div>
        <p className="mt-2 text-[12px] text-faint">Source tracking started on 2026-11-26. Earlier buyers show their ref link or payment channel where known.</p>
      </section>
    </>
  );
}

function BuyerRow({ b, source }: { b: Buyer; source: string }) {
  const ev = EVIDENCE[b.evidence];
  const gap = b.signedUpAt && b.boughtAt >= b.signedUpAt ? Math.round((b.boughtAt - b.signedUpAt) / 86_400_000) : null;
  const steps: { icon: "door-enter" | "user-plus" | "credit-card" | "route"; text: string }[] = [];
  if (b.first) steps.push({ icon: "door-enter", text: `First visit from ${label(b.first.source)}${b.first.campaign ? ` (${b.first.campaign})` : ""}${b.first.landing ? ` to ${b.first.landing}` : ""}${b.first.day ? `, ${day(Date.parse(b.first.day))}` : ""}` });
  if (b.last && b.first && b.last.source !== b.first.source) steps.push({ icon: "route", text: `Came back from ${label(b.last.source)}${b.last.campaign ? ` (${b.last.campaign})` : ""}${b.last.landing ? ` to ${b.last.landing}` : ""}${b.last.day ? `, ${day(Date.parse(b.last.day))}` : ""}` });
  if (b.paidBeforeAccount) steps.push({ icon: "credit-card", text: `Paid on Contra first, ${day(b.boughtAt)}` });
  if (b.signedUpAt) steps.push({ icon: "user-plus", text: `Account created ${day(b.signedUpAt)}${b.ref ? ` through ref link ${b.ref}` : ""}` });
  if (!b.paidBeforeAccount) steps.push({ icon: "credit-card", text: `Bought on ${PROVIDER[b.provider] ?? b.provider}, ${day(b.boughtAt)}${gap !== null ? ` (${gap === 0 ? "same day" : `${gap} day${gap === 1 ? "" : "s"} later`})` : ""}` });
  return (
    <li className="px-4 py-3 text-[13px]">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
        {b.userId ? (
          <Link href={`/admin/users/${b.userId}`} className="min-w-0 truncate font-medium hover:underline max-md:min-h-11 max-md:py-3">
            {b.email}
          </Link>
        ) : (
          <span className="min-w-0 truncate font-medium">{b.email}</span>
        )}
        <span className="text-mute">
          {b.plan === "lifetime" ? "Lifetime" : b.plan === "pro" ? "Pro" : b.plan === "team" ? "Team" : b.plan}
          {b.plan !== "lifetime" && /yearly/i.test(b.variant ?? "") ? ", yearly" : b.plan !== "lifetime" && /monthly/i.test(b.variant ?? "") ? ", monthly" : ""}
        </span>
        <span className="ml-auto flex items-center gap-2">
          <span className={"rounded-full px-2 py-0.5 text-[12px] font-medium " + (b.evidence === "unknown" ? "bg-tile text-mute" : "bg-ink text-white")}>{b.evidence === "unknown" ? "Unknown" : label(source)}</span>
          {b.evidence !== "unknown" && (
            <span className={"rounded-full px-2 py-0.5 text-[12px] " + ev.tone} title={ev.info}>
              {ev.label}
            </span>
          )}
          <span className="w-20 text-right font-medium tabular-nums">{b.currency === "USD" ? usd(b.cents) : `${(b.cents / 100).toFixed(2)} ${b.currency}`}</span>
        </span>
      </div>
      <ol className="mt-2 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[12px] text-mute">
        {steps.map((s, i) => (
          <li key={i} className="inline-flex items-center gap-1.5">
            {i > 0 && <AIcon name="chevron-right" size={12} className="text-faint" />}
            <AIcon name={s.icon} size={13} className="shrink-0" />
            {s.text}
          </li>
        ))}
      </ol>
    </li>
  );
}
