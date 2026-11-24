import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { JsonLd, ORG_ID, abs, faqLd, pageMeta } from "@/lib/seo";
import { items, systems } from "@/lib/catalog";
import { FIGMA_TOTAL } from "@/lib/figma-library";
import { dealAudience, dealEndText, dealRule, getPriceBook, usd, yearlySaving, type CheckoutOption, type PriceBook } from "@/lib/plans";
import { PageHead } from "@/components/site/page-head";
import { IlloTile } from "@/components/site/illo";
import { Icon } from "@/registry/components/icons";
import iconStats from "@/lib/icon-stats.json";
import { PricingNotice } from "./notice";
import { BillingToggle } from "./billing-toggle";
import { LifetimeCountdown } from "./countdown";
import { ed } from "@/lib/content/edit";

/** Spots left and admin price changes show within a minute. */
// Dynamic on purpose: the static-assets page cache never revalidates, and prices + real deal spots come from D1.
export const dynamic = "force-dynamic";

const free = items.filter((i) => i.tier === "free").length;
const fmt = (n: number) => n.toLocaleString("en-US");
const cents = (n: number) => usd(Math.round(n * 100) / 100);

export async function generateMetadata(): Promise<Metadata> {
  const pb = await getPriceBook();
  const life = pb.lifetime === null ? "" : " Lifetime is " + usd(pb.lifetime) + " once" + (pb.dealActive ? " for " + dealAudience(pb) : "") + ".";
  const pro = pb.monthly ? usd(pb.proMonthly) + "/mo" : usd(pb.proYearly) + "/yr";
  return pageMeta({
    title: "Pricing: Free, Pro " + pro + (pb.lifetime === null ? "" : ", Lifetime " + usd(pb.lifetime) + " once"),
    description: "Start free. Pro is " + (pb.monthly ? usd(pb.proMonthly) + " a month" : usd(pb.proYearly) + " a year") + " for one founder." + life + " Buying for a team? Talk to us. All nine systems, React + Figma.",
    path: "/pricing", image: "/pricing/opengraph-image",
  });
}

/** One price as the card shows it, monthly or yearly. */
type Price = { option: CheckoutOption | null; price: string; per: string; note: string; badge?: string; cta: string };
type Card = {
  key: "free" | "pro";
  scene: string;
  name: string;
  fits: string;
  monthly: Price;
  yearly: Price;
  points: string[];
};

function cards(pb: PriceBook): Card[] {
  const save = yearlySaving(pb);
  // Monthly switched off in admin (price 0): each card shows its yearly price only.
  const m = (monthly: Price, yearly: Price) => (pb.monthly ? monthly : yearly);
  const PRO_Y: Price = { option: "proYearly", price: usd(pb.proYearly), per: "a year", note: "1 person. About " + cents(pb.proYearly / 12) + " a month.", badge: save > 0 ? "Save " + save + "%" : undefined, cta: pb.monthly ? "Get Pro yearly" : "Get Pro" };
  const freeP: Price = { option: null, price: "$0", per: "forever", note: "No card needed", cta: "Create free account" };
  return [
    {
      key: "free",
      scene: "seed",
      name: "Free",
      fits: "Trying the system on a side project before you commit.",
      monthly: freeP,
      yearly: freeP,
      points: ["The Loopo system", fmt(free) + " free components in code", "Every icon (" + fmt(iconStats.line) + ")", "MCP server, 50 calls a day", "Commercial use"],
    },
    {
      key: "pro",
      scene: "six",
      name: "Pro",
      fits: "A solo founder shipping a product without a designer.",
      monthly: m({ option: "proMonthly", price: usd(pb.proMonthly), per: "a month", note: "1 person. Cancel any time.", cta: "Get Pro monthly" }, PRO_Y),
      yearly: PRO_Y,
      points: ["All " + systems.length + " design systems", "Every component in code and Figma (" + fmt(FIGMA_TOTAL) + " in Figma today)", "Full Figma kit per system", "Unlimited MCP and CLI", "New components every week"],
    },
  ];
}

function faq(pb: PriceBook): [string, string][] {
  const save = yearlySaving(pb);
  const out: [string, string][] = [
    ["Which plan should I pick?", "Building alone: Pro, or Lifetime if you would rather pay once. Buying for a team, an agency or a larger company: talk to us, tell us how many people, and we will set up seats and a price for you."],
    ["Do you have a team plan?", "Yes, set up for you. Write to us from the support page with how many people need access and we will send you an offer. Each person gets their own login, API keys and MCP, on one bill."],
  ];
  out.push(["What does Lifetime include?", "Everything in Pro for one person: all " + systems.length + " design systems, every component in React and Figma, the Figma kits, unlimited MCP and CLI, and every future update and new system. Forever, for one payment."]);
  if (pb.deal.enabled)
    out.push([
      "How does the Lifetime deal work?",
      "Lifetime costs " + usd(pb.settings.prices.lifetimeDeal) + " for " + dealAudience(pb) + (pb.deal.endsAt ? ", until " + dealEndText(pb.deal.endsAt) : "") + ". " + (pb.deal.showSpots ? "The spots counter on this page counts real paid orders" + (pb.deal.endsAt ? " and the countdown runs to that real end date; it never resets" : "") + ". " : pb.deal.endsAt ? "The countdown runs to that real end date and never resets. Seats are limited, so we may close it earlier once they are filled. " : "Seats are limited, so we may close it once they are filled. ") + dealRule(pb),
    ]);
  out.push(
    pb.monthly ? ["Monthly or yearly?", "Same plan either way. Pro yearly is " + usd(pb.proYearly) + " instead of " + usd(pb.proMonthly * 12) + (save > 0 ? ", " + save + "% less" : "") + ". Cancel any time from your account; the plan stays on until the end of the period you paid for."]
      : ["Why yearly and not monthly?", "One payment a year keeps the price low: Pro is " + usd(pb.proYearly) + " a year, about " + cents(pb.proYearly / 12) + " a month, and card fees on small monthly charges would push it up. Cancel any time; the plan stays on until the end of the year you paid for. Would rather pay once? Lifetime covers everything, forever."],
    ["Do you have an agency or enterprise plan?", "Not as a checkout plan. If you need seats for a team, terms for client work, custom invoices or SSO, write to us from the support page and we will set it up."],
    ["Is there a refund?", "Yes. 7 days on every paid plan, no questions asked. Write to " + pb.settings.support.email + "."],
    ["Can I try before paying?", "Yes. Browse and preview everything, copy 5 items without an account, then a free account gives unlimited copies of free components and the Loopo system."],
    ["What happens to my code if I stop paying?", "Everything you already copied stays yours to ship. You just can’t copy new Pro items."],
    ["Who handles the payment?", "Contra, the payments platform for independents. It takes cards, Google Pay and Cash App Pay and emails your receipt. Pay with the same email you use on ingotui.com, then open Account and click Activate; we switch your plan on, usually within an hour. Prices are in USD."],
  );
  return out;
}

/** Stable key for a question: its first words, so the edit stays on the same question when others are added. */
const faqId = (q: string) => q.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").split("-").slice(0, 6).join("-");

const TABLE = (pb: PriceBook): [string, string, string, string][] => [
  ["Price", "$0", (pb.monthly ? usd(pb.proMonthly) + " a month or " : "") + usd(pb.proYearly) + " a year", pb.lifetime === null ? "Closed" : usd(pb.lifetime) + " once"],
  ["People", "1", "1", "1"],
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

/** Shown only for the billing period that is switched on. Monthly is the no-JS default. */
const M = "group-data-[billing=yearly]/plans:hidden";
const Y = "hidden group-data-[billing=yearly]/plans:block";

export default async function PricingPage() {
  const pb = await getPriceBook();
  const list = cards(pb);
  const questions = faq(pb);
  const lifeClosed = pb.lifetime === null;
  const unit = (price: number, d: "P1M" | "P1Y") => ({ "@type": "UnitPriceSpecification", price: String(price), priceCurrency: "USD", billingDuration: d, unitText: d === "P1M" ? "month" : "year" });
  const offers = [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD", url: abs("/pricing"), description: "The Loopo system, free components in code, every icon, 50 MCP calls a day." },
    ...(pb.monthly ? [{ "@type": "Offer", name: "Pro monthly", price: String(pb.proMonthly), priceCurrency: "USD", url: abs("/pricing"), description: "One person. All systems, unlimited MCP.", priceSpecification: unit(pb.proMonthly, "P1M") }] : []),
    { "@type": "Offer", name: "Pro yearly", price: String(pb.proYearly), priceCurrency: "USD", url: abs("/pricing"), description: "One person. All systems, unlimited MCP.", priceSpecification: unit(pb.proYearly, "P1Y") },
    ...(lifeClosed
      ? []
      : [{ "@type": "Offer", name: pb.dealActive ? "Lifetime deal" : "Lifetime", price: String(pb.lifetime), priceCurrency: "USD", url: abs("/pricing"), availability: "https://schema.org/LimitedAvailability", description: "One person, one payment. Every system and every future update, forever." + (pb.dealActive ? " Launch price for " + dealAudience(pb) + "." : "") }]),
  ];
  const labels = {
    proMonthly: { name: "Pro monthly", price: usd(pb.proMonthly) + " a month" },
    proYearly: { name: "Pro yearly", price: usd(pb.proYearly) + " a year" },
    teamMonthly: { name: "Team monthly", price: usd(pb.teamMonthly) + " a month" },
    teamYearly: { name: "Team yearly", price: usd(pb.teamYearly) + " a year" },
    lifetime: { name: "Lifetime", price: lifeClosed ? "the launch price" : usd(pb.lifetime!) + " once" },
  };
  const maxSave = yearlySaving(pb);

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
      <PageHead edit="pricing" title="Pricing" sub="Start free, go Pro for one founder, or pay once with Lifetime. Buying for a team? Talk to us." />
      <Suspense fallback={null}>
        <PricingNotice labels={labels} />
      </Suspense>

      <div id="plans" data-billing={pb.monthly ? "monthly" : "yearly"} className="group/plans mt-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {pb.monthly ? <BillingToggle save={maxSave} /> : <p className="text-[13px] text-ink-2">Billed yearly. Cancel any time.</p>}
          <p className="text-[12px] text-mute">Prices in USD. 7-day refund on every paid plan.</p>
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {list.map((c) => (
            <div key={c.key} id={c.key} className="card flex scroll-mt-6 flex-col p-5">
              <IlloTile scene={c.scene} label={c.name + " plan"} className="-mx-2 -mt-2 mb-5 h-[120px]" />
              <div className="flex min-h-[22px] items-center justify-between gap-2">
                <h2 className="text-[13px] font-medium">{c.name}</h2>
                {c.yearly.badge && <span className={"rounded-full bg-chip px-2 py-0.5 text-[11px] font-medium " + (c.monthly === c.yearly ? "" : Y)}>{c.yearly.badge}</span>}
              </div>
              {[c.monthly, c.yearly].map((p, i) => (
                <div key={i} className={c.monthly === c.yearly ? (i ? "hidden" : "") : i ? Y : M}>
                  <p className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-[32px] font-medium tracking-[-0.03em] tabular-nums">{p.price}</span>
                    <span className="text-[13px] text-mute">{p.per}</span>
                  </p>
                  <p className="text-[12px] text-mute">{p.note}</p>
                </div>
              ))}

              <p className="mt-4 rounded-[6px] bg-tile px-3 py-2 text-[12px] leading-snug">
                <span className="font-medium">Fits: </span>
                <span className="text-ink-2">{c.fits}</span>
              </p>

              <ul className="mt-5 flex flex-1 flex-col gap-2">
                {c.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2 text-[13px]">
                    <Icon name="check" size={15} className="mt-0.5 shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
              {c.key === "free" ? (
                <Link href="/sign-up" className="btn-line mt-6 w-full">
                  {c.monthly.cta}
                </Link>
              ) : (
                (c.monthly === c.yearly ? [c.yearly] : [c.monthly, c.yearly]).map((p, i, all) => (
                  <form key={p.option} action="/api/checkout" method="post" className={"mt-6 " + (all.length === 1 ? "" : i ? Y : M)}>
                    <input type="hidden" name="option" value={p.option!} />
                    <button type="submit" className="btn-line w-full">
                      {p.cta}
                    </button>
                  </form>
                ))
              )}
            </div>
          ))}
          <LifetimeCard pb={pb} />
        </div>
      </div>
      <p className="mt-3 text-[12px] text-mute"><Link href="/refund" className="underline underline-offset-2 hover:text-ink">7-day refund</Link> on every paid plan. Prices in USD; tax is added at checkout where it applies. Payments through Contra: after paying, click Activate in your Account. <Link href="/terms" className="underline underline-offset-2 hover:text-ink">Terms</Link></p>

      <section id="team" aria-labelledby="team-h" className="card mt-3 flex scroll-mt-6 flex-wrap items-center gap-4 p-5">
        <IlloTile scene="founders" label="Team plan" className="hidden h-[88px] w-[120px] shrink-0 sm:block" />
        <div className="min-w-[220px] flex-1">
          <h2 id="team-h" className="text-[13px] font-medium" {...ed("pricing.team.h")}>
            Buying for a team?
          </h2>
          <p className="mt-1 text-[13px] text-mute" {...ed("pricing.team.p")}>
            Tell us how many people need access and we will send you an offer. Each person gets their own login, API keys and MCP, on one bill. Agencies and larger companies too: client-work terms, custom invoices or SSO.
          </p>
        </div>
        <Link href="/support?topic=team" className="btn-ink">
          <Icon name="mail" size={15} />
          Talk to us
        </Link>
      </section>
      <p className="mt-3 text-[12px] text-mute">Tax is added at checkout where it applies. Payments through Contra.</p>

      <section className="mt-12" aria-labelledby="compare-h">
        <h2 id="compare-h" className="text-[13px] font-medium" {...ed("pricing.compare.h")}>
          Compare plans
        </h2>
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

      <section className="mt-12" aria-labelledby="faq-h">
        <h2 id="faq-h" className="text-[13px] font-medium" {...ed("pricing.faq.h")}>
          Questions
        </h2>
        <div className="mt-3 border-t border-hair">
          {questions.map(([q, a]) => (
            <details key={q} className="group border-b border-hair">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3 text-[13px] font-medium">
                <span {...ed(`pricing.faq.${faqId(q)}.q`)}>{q}</span>
                <Icon name="plus" size={14} className="shrink-0 text-mute transition-transform group-open:rotate-45 motion-reduce:transition-none" />
              </summary>
              <p className="pb-3 pr-8 text-[13px] leading-snug text-mute" {...ed(`pricing.faq.${faqId(q)}.a`)}>{a}</p>
            </details>
          ))}
        </div>
        <p className="mt-4 text-[13px] text-mute">
          More questions? <Link href="/docs" className="font-medium text-ink underline underline-offset-2">Read the docs</Link> or <Link href="/support" className="font-medium text-ink underline underline-offset-2">ask support</Link>.
        </p>
      </section>
    </div>
  );
}

/** The third plan card: Lifetime, highlighted and recommended, with the deal and the same live countdown as the top bar. */
function LifetimeCard({ pb }: { pb: PriceBook }) {
  const { deal } = pb;
  const closed = pb.lifetime === null;
  const after = usd(pb.settings.prices.lifetimeAfter);
  const running = !closed && pb.dealActive;
  return (
    <div id="lifetime" className="relative flex scroll-mt-6 flex-col rounded-[8px] bg-ink p-5 text-white shadow-[0_0_0_1px_var(--color-ink),0_12px_32px_rgb(0_0_0/0.18)]">
      <IlloTile scene="ingots" label="Lifetime plan" dark className="-mx-2 -mt-2 mb-5 h-[120px]" />
      <div className="flex min-h-[22px] flex-wrap items-center justify-between gap-2">
        <h2 id="lifetime-h" className="text-[13px] font-medium">
          Lifetime
        </h2>
        <div className="flex flex-wrap items-center gap-1.5">
          {running && (
            <span className="rounded-full bg-[#4b55e6] px-2 py-0.5 text-[11px] font-medium" {...ed("pricing.lifetime.deal")}>
              Black Friday deal
            </span>
          )}
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-ink">
            <Icon name="sparkle" size={12} />
            Recommended
          </span>
        </div>
      </div>
      <p className="mt-4 flex items-baseline gap-1.5">
        <span className="text-[32px] font-medium tracking-[-0.03em] tabular-nums">{closed ? after : usd(pb.lifetime!)}</span>
        {running && <span className="text-[15px] text-white/45 tabular-nums line-through">{after}</span>}
        <span className="text-[13px] text-white/60">once</span>
      </p>
      <p className="text-[12px] text-white/60">{closed ? "Closed for now." : "1 person. Pay once, keep it forever."}</p>
      {running && deal.showTimer && deal.endsAt ? <LifetimeCountdown endsAt={deal.endsAt} /> : null}
      {running && deal.showSpots && <p className="mt-2 text-[12px] font-medium tabular-nums">{deal.left.toLocaleString("en-US")} of {deal.total.toLocaleString("en-US")} spots left</p>}

      <p className="mt-4 rounded-[6px] bg-white/10 px-3 py-2 text-[12px] leading-snug">
        <span className="font-medium">Fits: </span>
        <span className="text-white/75">A founder who would rather pay once than every year.</span>
      </p>

      <ul className="mt-5 flex flex-1 flex-col gap-2">
        {["Everything in Pro, forever", "All " + systems.length + " systems, plus every future one", "Every future update, no renewals", "Unlimited MCP and CLI", "Dark mode when it ships"].map((pt) => (
          <li key={pt} className="flex items-start gap-2 text-[13px]">
            <Icon name="check" size={15} className="mt-0.5 shrink-0" />
            {pt}
          </li>
        ))}
      </ul>
      <form action="/api/checkout" method="post" className="mt-6">
        <input type="hidden" name="option" value="lifetime" />
        <button type="submit" disabled={closed} className="btn-line w-full !bg-white !text-ink hover:!bg-white/90 disabled:cursor-not-allowed disabled:opacity-50">
          {closed ? "Lifetime is closed" : running ? "Get Lifetime for " + usd(pb.lifetime!) : "Get Lifetime"}
        </button>
      </form>
      {deal.enabled && <p className="mt-2 text-[11px] leading-snug text-white/55">{dealRule(pb)}</p>}
    </div>
  );
}
