import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { JsonLd, ORG_ID, abs, faqLd, pageMeta } from "@/lib/seo";
import { items, systems } from "@/lib/catalog";
import { FIGMA_TOTAL } from "@/lib/figma-library";
import { dealRule, getPriceBook, usd, yearlySaving, type CheckoutOption, type PriceBook } from "@/lib/plans";
import { PageHead } from "@/components/site/page-head";
import { IlloTile } from "@/components/site/illo";
import { Icon } from "@/registry/components/icons";
import iconStats from "@/lib/icon-stats.json";
import { PricingNotice } from "./notice";

/** Spots left and admin price changes show within a minute. */
// Dynamic on purpose: the static-assets page cache never revalidates, and prices + real deal spots come from D1.
export const dynamic = "force-dynamic";

const free = items.filter((i) => i.tier === "free").length;
const fmt = (n: number) => n.toLocaleString("en-US");

export async function generateMetadata(): Promise<Metadata> {
  const pb = await getPriceBook();
  const life = pb.lifetime === null ? "" : pb.dealActive ? ", Lifetime " + usd(pb.lifetime) + " for the first " + pb.deal.total : ", Lifetime " + usd(pb.lifetime);
  return pageMeta({
    title: "Pricing: Free, Pro " + usd(pb.proMonthly) + "/month" + life,
    description:
      "Start free with the Loopo design system. Pro is " + usd(pb.proMonthly) + " a month or " + usd(pb.proYearly) + " a year" + (pb.lifetime === null ? "" : "; Lifetime is " + usd(pb.lifetime) + " once" + (pb.dealActive ? " for the first " + pb.deal.total + " buyers" : "")) + ". All six dashboard systems, every component in React and Figma, unlimited MCP.",
    path: "/pricing",
  });
}

type Card = {
  key: "free" | CheckoutOption;
  scene: string;
  name: string;
  price: string;
  per: string;
  note: string;
  badge?: string;
  featured?: boolean;
  cta: string;
  points: string[];
  closed?: boolean;
};

function cards(pb: PriceBook): Card[] {
  const save = yearlySaving(pb);
  const pro = ["All " + systems.length + " design systems", "Every component in code and Figma (" + fmt(FIGMA_TOTAL) + " in Figma today)", "Full Figma kit per system", "Unlimited MCP and CLI", "New components every week"];
  const lifeClosed = pb.lifetime === null;
  return [
    { key: "free", scene: "seed", name: "Free", price: "$0", per: "forever", note: "No card needed", cta: "Create free account", points: ["The Loopo system", fmt(free) + " free components in code", "Every icon (" + fmt(iconStats.line) + ")", "MCP server, 50 calls a day", "Commercial use"] },
    { key: "proMonthly", scene: "six", name: "Pro monthly", price: usd(pb.proMonthly), per: "a month", note: "Cancel any time", cta: "Get Pro monthly", points: pro },
    {
      key: "proYearly",
      scene: "stack",
      name: "Pro yearly",
      price: usd(pb.proYearly),
      per: "a year",
      note: "About " + usd(Math.round((pb.proYearly / 12) * 100) / 100) + " a month, billed yearly",
      badge: save > 0 ? "Save " + save + "%" : undefined,
      cta: "Get Pro yearly",
      points: ["Everything in Pro monthly", save > 0 ? "One payment a year, " + save + "% less than monthly" : "One payment a year", "Cancel any time; Pro runs to the end of the year"],
    },
    {
      key: "lifetime",
      scene: "ingots",
      name: pb.dealActive ? "Lifetime deal" : "Lifetime",
      price: lifeClosed ? usd(pb.settings.prices.lifetimeAfter) : usd(pb.lifetime!),
      per: "once",
      note: pb.dealActive ? "Launch price for the first " + pb.deal.total + " buyers" : lifeClosed ? "Closed for now" : "One payment, no renewals",
      badge: lifeClosed ? undefined : "Best value",
      featured: true,
      closed: lifeClosed,
      cta: lifeClosed ? "Lifetime is closed" : pb.dealActive ? "Get Lifetime for " + usd(pb.lifetime!) : "Get Lifetime",
      points: ["All " + systems.length + " design systems, forever", "Every future update and every new system", "Every component in code and Figma", "Unlimited MCP and CLI", "Dark mode when it ships"],
    },
  ];
}

function faq(pb: PriceBook): [string, string][] {
  const save = yearlySaving(pb);
  const out: [string, string][] = [
    ["What does Lifetime include?", "Everything: all " + systems.length + " design systems, every component in React and Figma, the Figma kits, unlimited MCP and CLI, and every future update and every new system we release. Forever, for one payment."],
  ];
  if (pb.deal.enabled)
    out.push([
      "How does the launch deal work?",
      "Lifetime costs " + usd(pb.settings.prices.lifetimeDeal) + " for the first " + pb.deal.total + " buyers. The spots counter on this page counts real paid orders. " + dealRule(pb) + " No timers, no fake scarcity.",
    ]);
  out.push(
    ["Monthly or yearly?", "Same Pro plan. Yearly is " + usd(pb.proYearly) + " instead of " + usd(pb.proMonthly * 12) + " for twelve months" + (save > 0 ? ", " + save + "% less" : "") + ". You can cancel either one any time from your account; Pro stays on until the end of the period you paid for."],
    ["Is there a refund?", "Yes. 7 days on every paid plan, no questions asked. Write to " + pb.settings.support.email + "."],
    ["Can I try before paying?", "Yes. Browse and preview everything, copy 5 items without an account, then a free account gives unlimited copies of free components and the Loopo system."],
    ["What happens to my code if I stop paying for Pro?", "Everything you already copied stays yours to ship. You just can’t copy new Pro items."],
    ["Who handles the payment?", "Lemon Squeezy, our merchant of record. It takes cards and PayPal, adds sales tax or VAT where it applies and sends your receipt. Prices are in USD."],
    ["Can my team use one plan?", "Each plan is for one person. For a team, write to " + pb.settings.support.email + " and we will set it up."],
  );
  return out;
}

const TABLE = (pb: PriceBook): [string, string, string, string][] => [
  ["Price", "$0", usd(pb.proMonthly) + " a month or " + usd(pb.proYearly) + " a year", pb.lifetime === null ? "Closed" : usd(pb.lifetime) + " once"],
  ["Design systems", "Loopo", "All " + systems.length, "All " + systems.length + ", plus future ones"],
  ["Components in code", fmt(free) + " free", "All", "All"],
  ["Figma library", "Loopo free items", fmt(FIGMA_TOTAL) + "+", fmt(FIGMA_TOTAL) + "+"],
  ["Icons", fmt(iconStats.line), fmt(iconStats.line), fmt(iconStats.line)],
  ["MCP calls", "50 a day", "Unlimited", "Unlimited"],
  ["Copies before you need an account", "5", "Unlimited", "Unlimited"],
  ["Updates and new systems", "Loopo updates", "While subscribed", "Forever"],
  ["Dark mode (first update after launch)", "", "Yes", "Yes"],
  ["Commercial use", "Yes", "Yes", "Yes"],
];

export default async function PricingPage() {
  const pb = await getPriceBook();
  const list = cards(pb);
  const questions = faq(pb);
  const { deal } = pb;
  const pct = deal.total > 0 ? Math.round((deal.left / deal.total) * 100) : 0;
  const offers = [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD", url: abs("/pricing"), description: "The Loopo system, free components in code, every icon, 50 MCP calls a day." },
    { "@type": "Offer", name: "Pro monthly", price: String(pb.proMonthly), priceCurrency: "USD", url: abs("/pricing"), priceSpecification: { "@type": "UnitPriceSpecification", price: String(pb.proMonthly), priceCurrency: "USD", billingDuration: "P1M", unitText: "month" } },
    { "@type": "Offer", name: "Pro yearly", price: String(pb.proYearly), priceCurrency: "USD", url: abs("/pricing"), priceSpecification: { "@type": "UnitPriceSpecification", price: String(pb.proYearly), priceCurrency: "USD", billingDuration: "P1Y", unitText: "year" } },
    ...(pb.lifetime === null
      ? []
      : [{ "@type": "Offer", name: pb.dealActive ? "Lifetime deal" : "Lifetime", price: String(pb.lifetime), priceCurrency: "USD", url: abs("/pricing"), availability: "https://schema.org/LimitedAvailability", description: "One payment. Every system and every future update, forever." + (pb.dealActive ? " Launch price for the first " + deal.total + " buyers." : "") }]),
  ];
  const labels = {
    proMonthly: { name: "Pro monthly", price: usd(pb.proMonthly) + " a month" },
    proYearly: { name: "Pro yearly", price: usd(pb.proYearly) + " a year" },
    lifetime: { name: "Lifetime", price: pb.lifetime === null ? "the launch price" : usd(pb.lifetime) + " once" },
  };

  return (
    <div className="max-w-[1180px]">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Ingot UI",
            applicationCategory: "DeveloperApplication",
            operatingSystem: "Web, macOS, Windows, Linux",
            url: abs("/"),
            description: "Dashboard design systems with React + Tailwind components checked against Figma, Figma kits, icons, a CLI and an MCP server for AI coding agents.",
            publisher: { "@id": ORG_ID },
            offers,
          },
          faqLd(questions.map(([q, a]) => ({ q, a }))),
        ]}
      />
      <PageHead title="Pricing" sub="Start free. Pay monthly, yearly, or once." />
      <Suspense fallback={null}>
        <PricingNotice labels={labels} />
      </Suspense>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {list.map((p) => {
          const dark = !!p.featured;
          const sub = dark ? "text-white/60" : "text-mute";
          return (
            <div key={p.key} className={"flex flex-col rounded-[8px] p-5 " + (dark ? "order-first bg-ink text-white xl:order-none" : "card")}>
              <IlloTile scene={p.scene} label={p.name + " plan"} dark={dark} className="-mx-2 -mt-2 mb-5 h-[120px]" />
              <div className="flex min-h-[22px] items-center justify-between gap-2">
                <p className="text-[13px] font-medium">{p.name}</p>
                {p.badge && <span className={"rounded-full px-2 py-0.5 text-[11px] font-medium " + (dark ? "bg-white/15" : "bg-chip")}>{p.badge}</span>}
              </div>
              <p className="mt-4 flex items-baseline gap-1.5">
                <span className="text-[32px] font-medium tracking-[-0.03em] tabular-nums">{p.price}</span>
                <span className={"text-[13px] " + sub}>{p.per}</span>
              </p>
              <p className={"text-[12px] " + sub}>{p.note}</p>

              {p.key === "lifetime" && deal.enabled && !p.closed && (
                <div className="mt-4">
                  {pb.dealActive ? (
                    <>
                      <div className="flex items-baseline justify-between text-[12px]">
                        <span className="font-medium tabular-nums">
                          {fmt(deal.left)} of {fmt(deal.total)} left
                        </span>
                        <span className="text-white/60 tabular-nums">{fmt(deal.sold)} taken</span>
                      </div>
                      <div
                        className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/15"
                        role="progressbar"
                        aria-label="Launch deal spots left"
                        aria-valuemin={0}
                        aria-valuemax={deal.total}
                        aria-valuenow={deal.left}
                      >
                        <div className="h-full rounded-full bg-white" style={{ width: pct + "%" }} />
                      </div>
                    </>
                  ) : null}
                  <p className="mt-2 text-[12px] leading-snug text-white/60">{dealRule(pb)}</p>
                </div>
              )}
              {p.key === "lifetime" && p.closed && <p className="mt-4 text-[12px] leading-snug text-white/60">{dealRule(pb)}</p>}

              <ul className="mt-5 flex flex-1 flex-col gap-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[13px]">
                    <Icon name="check" size={15} className="mt-0.5 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              {p.key === "free" ? (
                <Link href="/sign-up" className="btn-line mt-6 w-full">
                  {p.cta}
                </Link>
              ) : (
                <form action="/api/checkout" method="post" className="mt-6">
                  <input type="hidden" name="option" value={p.key} />
                  <button type="submit" disabled={p.closed} className={(dark ? "btn-line !bg-white hover:!bg-white/90" : "btn-ink") + " w-full disabled:cursor-not-allowed disabled:opacity-50"}>
                    {p.cta}
                  </button>
                </form>
              )}
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-[12px] text-mute"><Link href="/refund" className="underline underline-offset-2 hover:text-ink">7-day refund</Link> on every paid plan. Prices in USD; sales tax or VAT is added at checkout where it applies. Payments by Lemon Squeezy, our merchant of record. <Link href="/terms" className="underline underline-offset-2 hover:text-ink">Terms</Link></p>

      <section className="mt-12">
        <h2 className="text-[13px] font-medium">Compare plans</h2>
        <div className="card mt-3 overflow-x-auto">
          <table className="w-full min-w-[620px] text-[13px]">
            <thead>
              <tr className="text-left text-mute">
                <th className="px-4 py-2.5 font-normal" scope="col">
                  <span className="sr-only">Feature</span>
                </th>
                {["Free", "Pro", "Lifetime"].map((h) => (
                  <th key={h} scope="col" className="px-4 py-2.5 font-medium text-ink">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE(pb).map((r) => (
                <tr key={r[0]} className="border-t border-hair">
                  <th scope="row" className="px-4 py-2.5 text-left font-normal text-mute">
                    {r[0]}
                  </th>
                  {r.slice(1).map((c, i) => (
                    <td key={i} className="px-4 py-2.5">
                      {c || <span className="text-faint">Not included</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-[13px] font-medium">Questions</h2>
        <div className="mt-3 border-t border-hair">
          {questions.map(([q, a]) => (
            <details key={q} className="group border-b border-hair">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-[13px] font-medium">
                {q}
                <Icon name="plus" size={14} className="shrink-0 text-mute transition-transform group-open:rotate-45" />
              </summary>
              <p className="pb-3 pr-8 text-[13px] leading-snug text-mute">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
