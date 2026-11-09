import type { Metadata } from "next";
import Link from "next/link";
import { items, systems } from "@/lib/catalog";
import { FIGMA_TOTAL } from "@/lib/figma-library";
import { PageHead } from "@/components/site/page-head";
import { Icon } from "@/registry/components/icons";
import iconStats from "@/lib/icon-stats.json";

export const metadata: Metadata = { title: "Pricing", description: "Start free with the Loopo system. Pro or Lifetime unlocks all six systems, every component and unlimited MCP." };

const free = items.filter((i) => i.tier === "free").length;
const fmt = (n: number) => n.toLocaleString("en-US");

const PLANS = [
  { name: "Free", price: "$0", per: "forever", note: "No card needed", cta: "Create free account", href: "/sign-up", featured: false, points: ["The Loopo system", fmt(free) + " free components in code", "Every icon (" + fmt(iconStats.line) + ")", "MCP server, 50 calls a day", "Commercial use"] },
  { name: "Pro", price: "$149", per: "per year", note: "or $19 a month", cta: "Get Pro", href: "/sign-up?plan=pro", featured: true, points: ["All " + systems.length + " design systems", "Every component in code and Figma (" + fmt(FIGMA_TOTAL) + " in Figma today)", "Full Figma kit per system", "Unlimited MCP and CLI", "New components every week"] },
  { name: "Lifetime", price: "$299", per: "one payment", note: "About two years of Pro, then free forever", cta: "Get Lifetime", href: "/sign-up?plan=lifetime", featured: false, points: ["Everything in Pro, forever", "Future systems included", "Dark mode when it ships", "Priority component requests"] },
];

const TABLE: [string, string, string, string][] = [
  ["Design systems", "Loopo", "All " + systems.length, "All, plus future ones"],
  ["Components in code", fmt(free) + " free", "All", "All"],
  ["Figma library", "Loopo free items", fmt(FIGMA_TOTAL) + "+", fmt(FIGMA_TOTAL) + "+"],
  ["Icons", fmt(iconStats.line), fmt(iconStats.line), fmt(iconStats.line)],
  ["MCP calls", "50 a day", "Unlimited", "Unlimited"],
  ["Copies before you need an account", "5", "Unlimited", "Unlimited"],
  ["Commercial use", "Yes", "Yes", "Yes"],
  ["Dark mode (first update after launch)", "", "Yes", "Yes"],
];

const FAQ = [
  ["Can I try before paying?", "Yes. Browse and preview everything, copy 5 items without an account, then a free account gives unlimited copies of free components and the Loopo system."],
  ["What happens to my code if I stop paying for Pro?", "Everything you already copied stays yours to ship. You just can’t copy new Pro items."],
  ["Is there a refund?", "Yes, 7 days on paid plans, no questions asked."],
  ["Can my team use one plan?", "A team plan with 5 seats is available on request at $49 a month."],
  ["When can I pay?", "Checkout opens at launch. Until then every free feature is open."],
];

export default function PricingPage() {
  return (
    <div className="max-w-[1100px]">
      <PageHead title="Pricing" sub="Start free. Pay once if you want everything." />

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.name} className={"flex flex-col rounded-[8px] p-5 " + (p.featured ? "bg-ink text-white" : "card")}>
            <div className="flex items-center justify-between">
              <p className="text-[13px] font-medium">{p.name}</p>
              {p.featured && <span className="rounded-full bg-white/15 px-2 py-0.5 text-[11px]">Recommended</span>}
            </div>
            <p className="mt-4 flex items-baseline gap-1.5">
              <span className="text-[32px] font-medium tracking-[-0.03em]">{p.price}</span>
              <span className={"text-[13px] " + (p.featured ? "text-white/60" : "text-mute")}>{p.per}</span>
            </p>
            <p className={"text-[12px] " + (p.featured ? "text-white/60" : "text-mute")}>{p.note}</p>
            <ul className="mt-5 flex flex-1 flex-col gap-2">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-[13px]">
                  <Icon name="check" size={15} className="mt-0.5 shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
            <Link href={p.href} className={"mt-6 w-full " + (p.featured ? "btn-line !bg-white" : "btn-ink")}>
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12px] text-mute">7-day refund on paid plans. Checkout opens at launch. Prices in USD; regional pricing applies at checkout.</p>

      <section className="mt-12">
        <h2 className="text-[13px] font-medium">Compare plans</h2>
        <div className="card mt-3 overflow-x-auto">
          <table className="w-full min-w-[560px] text-[13px]">
            <thead>
              <tr className="text-left text-mute">
                <th className="px-4 py-2.5 font-normal" scope="col"><span className="sr-only">Feature</span></th>
                {["Free", "Pro", "Lifetime"].map((h) => (
                  <th key={h} scope="col" className="px-4 py-2.5 font-medium text-ink">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE.map((r) => (
                <tr key={r[0]} className="border-t border-hair">
                  <th scope="row" className="px-4 py-2.5 text-left font-normal text-mute">{r[0]}</th>
                  {r.slice(1).map((c, i) => (
                    <td key={i} className="px-4 py-2.5">{c || <span className="text-faint">Not included</span>}</td>
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
          {FAQ.map(([q, a]) => (
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
