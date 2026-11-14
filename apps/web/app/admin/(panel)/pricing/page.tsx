import type { Metadata } from "next";
import { getDeal } from "@/lib/plans";
import { getSettings } from "@/lib/settings";
import { requireStaff } from "@/lib/admin";
import { AdminHead } from "@/components/admin/ui";
import { PricingForm } from "@/components/admin/pricing-form";
import { savePricing } from "./actions";

export const metadata: Metadata = { title: "Pricing & deal" };

export default async function AdminPricing() {
  await requireStaff("pricing", "/admin/pricing");
  const s = await getSettings();
  const deal = await getDeal(s);
  const str = (n: number) => String(n);
  return (
    <div>
      <AdminHead title="Pricing & deal" sub="Prices and the Lifetime launch deal with its spots and end date." />
      <PricingForm
        sold={deal.sold}
        action={savePricing}
        initial={{
          price_proMonthly: str(s.prices.proMonthly),
          price_proYearly: str(s.prices.proYearly),
          price_lifetimeDeal: str(s.prices.lifetimeDeal),
          price_lifetimeAfter: str(s.prices.lifetimeAfter),
          variant_proMonthly: s.variants.proMonthly,
          variant_proYearly: s.variants.proYearly,
          variant_lifetimeDeal: s.variants.lifetimeDeal,
          variant_lifetimeAfter: s.variants.lifetimeAfter,
          deal_enabled: s.deal.enabled,
          spotsTotal: str(s.deal.spotsTotal),
          after: s.deal.after,
          deal_endsAt: s.deal.endsAt || "",
          deal_showSpots: s.deal.showSpots !== false,
          deal_showTimer: s.deal.showTimer !== false,
          ann_enabled: s.announcement.enabled,
          ann_text: s.announcement.text,
          ann_href: s.announcement.href,
        }}
      />
    </div>
  );
}
