import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { JsonLd, ORG_ID, abs, faqLd, pageMeta } from "@/lib/seo";
import { items, systems } from "@/lib/catalog";
import { FIGMA_TOTAL } from "@/lib/figma-library";
import { dealAudience, dealBadge, dealEndText, dealRule, getPriceBook, teamYearlySaving, usd, yearlySaving, type CheckoutOption, type PriceBook } from "@/lib/plans";
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
  const teamP = pb.monthly ? usd(pb.teamMonthly) + "/mo" : usd(pb.teamYearly) + "/yr";
  return pageMeta({
    title: "Pricing: Free, Pro " + pro + ", Team " + teamP,
    description: "Start free. Pro is " + (pb.monthly ? usd(pb.proMonthly) + " a month" : usd(pb.proYearly) + " a year") + " for one founder, Team is " + (pb.monthly ? usd(pb.teamMonthly) + " a month" : usd(pb.teamYearly) + " a year") + " for " + pb.teamSeats + " people." + life + " All nine systems, React + Figma.",
    path: "/pricing", image: "/pricing/opengraph-image",
  });
}

/** One price as the card shows it, monthly or yearly. */
type Price = { option: CheckoutOption | null; price: string; per: string; note: string; badge?: string; cta: string };
type Card = {
  key: "free" | "pro" | "team";
  scene: string;
  name: string;
  fits: string;
  monthly: Price;
  yearly: Price;
  points: string[];
};

function cards(pb: PriceBook): Card[] {
  const save = yearlySaving(pb);
  const teamSave = teamYearlySaving(pb);
  // Monthly switched off in admin (price 0): each card shows its yearly price only.
  const m = (monthly: Price, yearly: Price) => (pb.monthly ? monthly : yearly);
  const PRO_Y: Price = { option: "proYearly", price: usd(pb.proYearly), per: "a year", note: "1 person. About " + cents(pb.proYearly / 12) + " a month.", badge: save > 0 ? "Save " + save + "%" : undefined, cta: pb.monthly ? "Get Pro yearly" : "Get Pro" };
  const TEAM_Y: Price = {
    option: "teamYearly",
    price: usd(pb.teamYearly),
    per: "a year",
    note: pb.teamSeats + " people. About " + cents(pb.teamYearly / pb.teamSeats) + " per person a year.",
    badge: teamSave > 0 ? "Save " + teamSave + "%" : undefined,
    cta: pb.monthly ? "Get Team yearly" : "Get Team",
  };
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
    {
      key: "team",
      scene: "founders",
      name: "Team",
      fits: "A founding team: you, a co-founder and your first hires.",
      monthly: m({ option: "teamMonthly", price: usd(pb.teamMonthly), per: "a month", note: pb.teamSeats + " people. About " + cents(pb.teamMonthly / pb.teamSeats) + " per person.", cta: "Get Team monthly" }, TEAM_Y),
      yearly: TEAM_Y,
      points: ["Everything in Pro, for " + pb.teamSeats + " people", "One bill, paid by the owner", "Invite by link from your account", "Each person has their own login, API keys and MCP", "Remove someone and the seat frees up at once"],
    },
  ];
}

function faq(pb: PriceBook): [string, string][] {
  const save = yearlySaving(pb);
  const others = pb.teamSeats - 1;
  const out: [string, string][] = [
    ["Which plan should I pick?", "Building alone: Pro, or Lifetime if you would rather pay once. Building with a co-founder or first hires: Team, which covers " + pb.teamSeats + " people on one bill. An agency or a larger company: talk to us and we will set up the right seats and terms."],
    ["How does the Team plan work?", "One person, the owner, buys Team and invites up to " + others + " teammates from their account, " + pb.teamSeats + " people in total. Each person signs in with their own account and gets everything in Pro. The owner pays one bill of " + (pb.monthly ? usd(pb.teamMonthly) + " a month or " : "") + usd(pb.teamYearly) + " a year."],
    ["How do I invite my co-founder?", "Open Account, type their email under Team and copy the invite link. Send it however you like. They sign in or create a free account with that email and click Join team. Each link works once, for that email."],
    ["What happens when someone leaves the team?", "Their Pro access ends straight away and the seat is free for someone new. Anything they already copied stays theirs to ship. If the owner cancels Team, members keep access until the end of the paid period."],
    ["I already have Pro or Lifetime. Can I add my team?", "Yes. Buy Team to add seats for your teammates. If you are on Pro, cancel it in your Contra purchases so you don't pay twice; Team already includes you. If you have Lifetime, you keep it, and Team covers the others."],
  ];
  out.push(["What does Lifetime include?", "Everything in Pro for one person: all " + systems.length + " design systems, every component in React and Figma, the Figma kits, unlimited MCP and CLI, and every future update and new system. Forever, for one payment."]);
  if (pb.deal.enabled)
    out.push([
      "How does the launch deal work?",
      "Lifetime costs " + usd(pb.settings.prices.lifetimeDeal) + " for " + dealAudience(pb) + (pb.deal.endsAt ? ", until " + dealEndText(pb.deal.endsAt) : "") + ". " + (pb.deal.showSpots ? "The spots counter on this page counts real paid orders" + (pb.deal.endsAt ? " and the countdown runs to that real end date; it never resets" : "") + ". " : pb.deal.endsAt ? "The countdown runs to that real end date and never resets. Seats are limited, so we may close it earlier once they are filled. " : "Seats are limited, so we may close it once they are filled. ") + dealRule(pb),
    ]);
  out.push(
    pb.monthly ? ["Monthly or yearly?", "Same plan either way. Pro yearly is " + usd(pb.proYearly) + " instead of " + usd(pb.proMonthly * 12) + (save > 0 ? ", " + save + "% less" : "") + "; Team yearly is " + usd(pb.teamYearly) + " instead of " + usd(pb.teamMonthly * 12) + ". Cancel either any time from your account; the plan stays on until the end of the period you paid for."]
      : ["Why yearly and not monthly?", "One payment a year keeps the price low: Pro is " + usd(pb.proYearly) + " a year, about " + cents(pb.proYearly / 12) + " a month, and card fees on small monthly charges would push it up. Cancel any time; the plan stays on until the end of the year you paid for. Would rather pay once? Lifetime covers everything, forever."],
    ["Do you have an agency or enterprise plan?", "Not as a checkout plan yet. If you need more than " + pb.teamSeats + " seats, terms for client work, custom invoices or SSO, write to us from the support page and we will set it up."],
    ["Is there a refund?", "Yes. 7 days on every paid plan, no questions asked. Write to " + pb.settings.support.email + "."],
    ["Can I try before paying?", "Yes. Browse and preview everything, copy 5 items without an account, then a free account gives unlimited copies of free components and the Loopo system."],
    ["What happens to my code if I stop paying?", "Everything you already copied stays yours to ship. You just can’t copy new Pro items."],
    ["Who handles the payment?", "Contra, the payments platform for independents. It takes cards, Google Pay and Cash App Pay and emails your receipt. Pay with the same email you use on ingotui.com, then open Account and click Activate; we switch your plan on, usually within an hour. Prices are in USD."],
  );
  return out;
}

/** Stable key for a question: its first words, so the edit stays on the same question when others are added. */
const faqId = (q: string) => q.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").split("-").slice(0, 6).join("-");

const TABLE = (pb: PriceBook): [string, string, string, string, string][] => [
  ["Price", "$0", (pb.monthly ? usd(pb.proMonthly) + " a month or " : "") + usd(pb.proYearly) + " a year", (pb.monthly ? usd(pb.teamMonthly) + " a month or " : "") + usd(pb.teamYearly) + " a year", pb.lifetime === null ? "Closed" : usd(pb.lifetime) + " once"],
  ["People", "1", "1", "Up to " + pb.teamSeats, "1"],
  ["Design systems", "Loopo", "All " + systems.length, "All " + systems.length, "All " + systems.length + ", plus future ones"],
  ["Components in code", fmt(free) + " free", "All", "All", "All"],
  ["Figma library", "Loopo free items", fmt(FIGMA_TOTAL) + "+", fmt(FIGMA_TOTAL) + "+", fmt(FIGMA_TOTAL) + "+"],
  ["Icons", fmt(iconStats.line), fmt(iconStats.line), fmt(iconStats.line), fmt(iconStats.line)],
  ["MCP calls", "50 a day", "Unlimited", "Unlimited, per person", "Unlimited"],
  ["Invite and remove teammates", "", "", "Yes", ""],
  ["One bill for everyone", "", "", "Yes", ""],
  ["Copies before you need an account", "5", "Unlimited", "Unlimited", "Unlimited"],
  ["Updates and new systems", "Loopo updates", "While subscribed", "While subscribed", "Forever"],
  ["Dark mode (first update after launch)", "", "Yes", "Yes", "Yes"],
  ["Commercial use", "Yes", "Yes", "Yes", "Yes"],
];

/** Shown only for the billing period that is switched on. Monthly is the no-JS default. */
const M = "group-data-[billing=yearly]/plans:hidden";
const Y = "hidden group-data-[billing=yearly]/plans:block";

export default async function PricingPage() {
  const pb = await getPriceBook();
  const list = cards(pb);
  const questions = faq(pb);
  const { deal } = pb;
  const pct = deal.total > 0 ? Math.round((deal.left / deal.total) * 100) : 0;
  const lifeClosed = pb.lifetime === null;
  const unit = (price: number, d: "P1M" | "P1Y") => ({ "@type": "UnitPriceSpecification", price: String(price), priceCurrency: "USD", billingDuration: d, unitText: d === "P1M" ? "month" : "year" });
  const offers = [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD", url: abs("/pricing"), description: "The Loopo system, free components in code, every icon, 50 MCP calls a day." },
    ...(pb.monthly ? [{ "@type": "Offer", name: "Pro monthly", price: String(pb.proMonthly), priceCurrency: "USD", url: abs("/pricing"), description: "One person. All systems, unlimited MCP.", priceSpecification: unit(pb.proMonthly, "P1M") }] : []),
    { "@type": "Offer", name: "Pro yearly", price: String(pb.proYearly), priceCurrency: "USD", url: abs("/pricing"), description: "One person. All systems, unlimited MCP.", priceSpecification: unit(pb.proYearly, "P1Y") },
    ...(pb.monthly ? [{ "@type": "Offer", name: "Team monthly", price: String(pb.teamMonthly), priceCurrency: "USD", url: abs("/pricing"), description: "Everything in Pro for " + pb.teamSeats + " people on one bill.", priceSpecification: unit(pb.teamMonthly, "P1M") }] : []),
    { "@type": "Offer", name: "Team yearly", price: String(pb.teamYearly), priceCurrency: "USD", url: abs("/pricing"), description: "Everything in Pro for " + pb.teamSeats + " people on one bill.", priceSpecification: unit(pb.teamYearly, "P1Y") },
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
  const maxSave = Math.max(yearlySaving(pb), teamYearlySaving(pb));

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
      <PageHead edit="pricing" title="Pricing" sub="Start free. Pro for one founder, Team for up to 5 people, or pay once with Lifetime." />
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
                    <button type="submit" className={(c.key === "team" ? "btn-ink" : "btn-line") + " w-full"}>
                      {p.cta}
                    </button>
                  </form>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-[12px] text-mute"><Link href="/refund" className="underline underline-offset-2 hover:text-ink">7-day refund</Link> on every paid plan. Prices in USD; tax is added at checkout where it applies. Payments through Contra: after paying, click Activate in your Account. <Link href="/terms" className="underline underline-offset-2 hover:text-ink">Terms</Link></p>

      <section id="lifetime" aria-labelledby="lifetime-h" className="mt-3 grid scroll-mt-6 gap-5 rounded-[8px] bg-ink p-5 text-white md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_auto] md:items-center">
        <div className="flex items-center gap-4">
          <IlloTile scene="ingots" label="Lifetime plan" dark className="hidden h-[88px] w-[120px] shrink-0 sm:block" />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h2 id="lifetime-h" className="text-[13px] font-medium">
                {pb.dealActive ? "Lifetime launch deal" : "Lifetime"}
              </h2>
              {!lifeClosed && pb.dealActive && <span className="rounded-full bg-white/15 px-2 py-0.5 text-[11px] font-medium">{dealBadge(pb)}</span>}
            </div>
            <p className="mt-2 flex items-baseline gap-1.5">
              <span className="text-[32px] font-medium tracking-[-0.03em] tabular-nums">{lifeClosed ? usd(pb.settings.prices.lifetimeAfter) : usd(pb.lifetime!)}</span>
              <span className="text-[13px] text-white/60">once</span>
            </p>
            <p className="text-[12px] text-white/60">{lifeClosed ? "Closed for now." : "1 person. Fits a solo founder who would rather pay once."}</p>
          </div>
        </div>
        <div>
          <p className="text-[13px] text-white/80">Everything in Pro for one person, forever: all {systems.length} systems, every future update and new system, unlimited MCP and CLI, dark mode when it ships.</p>
          {deal.enabled && pb.dealActive && deal.showTimer && deal.endsAt ? <LifetimeCountdown endsAt={deal.endsAt} /> : null}
          {deal.enabled && pb.dealActive && deal.showSpots && (
            <div className="mt-3">
              <div className="flex items-baseline justify-between text-[12px]">
                <span className="font-medium tabular-nums">
                  {fmt(deal.left)} of {fmt(deal.total)} left
                </span>
                <span className="text-white/60 tabular-nums">{fmt(deal.sold)} taken</span>
              </div>
              <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/15" role="progressbar" aria-label="Launch deal spots left" aria-valuemin={0} aria-valuemax={deal.total} aria-valuenow={deal.left}>
                <div className="h-full rounded-full bg-white" style={{ width: pct + "%" }} />
              </div>
            </div>
          )}
          {deal.enabled && <p className="mt-2 text-[12px] leading-snug text-white/60">{dealRule(pb)}</p>}
        </div>
        <form action="/api/checkout" method="post">
          <input type="hidden" name="option" value="lifetime" />
          <button type="submit" disabled={lifeClosed} className="btn-line w-full !bg-white hover:!bg-white/90 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto">
            {lifeClosed ? "Lifetime is closed" : pb.dealActive ? "Get Lifetime for " + usd(pb.lifetime!) : "Get Lifetime"}
          </button>
        </form>
      </section>

      <div className="card mt-3 flex flex-wrap items-center gap-4 p-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-tile">
          <Icon name="layers" size={18} />
        </span>
        <div className="min-w-[220px] flex-1">
          <p className="text-[13px] font-medium">Agency or larger company?</p>
          <p className="text-[13px] text-mute">More than {pb.teamSeats} seats, client-work terms, custom invoices or SSO. Tell us what you need and we will set it up.</p>
        </div>
        <Link href="/support" className="btn-line">
          Talk to us
        </Link>
      </div>
      <p className="mt-3 text-[12px] text-mute">Tax is added at checkout where it applies. Payments through Contra.</p>

      <section className="mt-12" aria-labelledby="compare-h">
        <h2 id="compare-h" className="text-[13px] font-medium" {...ed("pricing.compare.h")}>
          Compare plans
        </h2>
        <div className="card mt-3 overflow-x-auto">
          <table className="w-full min-w-[760px] text-[13px]">
            <thead>
              <tr className="text-left text-mute">
                <th className="px-4 py-2.5 font-normal" scope="col">
                  <span className="sr-only">Feature</span>
                </th>
                {["Free", "Pro", "Team", "Lifetime"].map((h) => (
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
