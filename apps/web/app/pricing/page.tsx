import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/registry/components/icons";

export const metadata: Metadata = { title: "Pricing", description: "Free, Pro and Lifetime plans for Foundry UI." };

const PLANS = [
  { name: "Free", price: "$0", per: "forever", cta: "Create free account", href: "/sign-up", featured: false, points: ["Browse and preview everything", "The full Loopo system", "Unlimited copies of free components", "MCP server (50 calls a day)", "Commercial use of free components"] },
  { name: "Pro", price: "$149", per: "per year · or $19 monthly", cta: "Get Pro", href: "/sign-up?plan=pro", featured: true, points: ["All six design systems", "Every component, chart and template", "Copy to Figma + full Figma kits", "Unlimited MCP and CLI", "New components every week"] },
  { name: "Lifetime", price: "$299", per: "one time · launch price $249", cta: "Get Lifetime", href: "/sign-up?plan=lifetime", featured: false, points: ["Everything in Pro, forever", "Future systems included", "Dark mode and landing sections when they ship", "Priority component requests"] },
];

export default function PricingPage() {
  return (
    <div className="max-w-[1400px]">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="page-title">Simple pricing</h1>
        <p className="mt-3 text-sm leading-relaxed text-fu-muted">Start free with the Loopo system. Upgrade when you want every system. Regional pricing applies automatically at checkout.</p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {PLANS.map((p) => (
          <div key={p.name} className={"flex flex-col rounded-[14px] border p-6 " + (p.featured ? "border-fu-ink bg-fu-surface shadow-fu-overlay" : "border-hair bg-fu-surface")}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-fu-ink">{p.name}</p>
              {p.featured && <span className="rounded-full bg-fu-accent-soft px-2 py-0.5 text-[11px] font-medium text-fu-accent-text">Most popular</span>}
            </div>
            <p className="mt-4 text-4xl font-medium tracking-[-0.03em] text-fu-ink">{p.price}</p>
            <p className="mt-1 text-[13px] text-fu-muted">{p.per}</p>
            <ul className="mt-6 flex flex-1 flex-col gap-2.5">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-[13px] text-fu-body">
                  <Icon name="check" size={16} className="mt-0.5 shrink-0 text-fu-positive-text" />
                  {pt}
                </li>
              ))}
            </ul>
            <Link href={p.href} className={"mt-8 flex h-10 items-center justify-center rounded-[10px] text-sm font-medium " + (p.featured ? "text-white bg-ink hover:bg-[#23262c]" : "border border-hair-2 text-fu-ink hover:bg-fu-hover")}>
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-[13px] text-fu-muted">7-day refund on paid plans · Team plan (5 seats, $49/mo) on request · Checkout opens at launch</p>
    </div>
  );
}
