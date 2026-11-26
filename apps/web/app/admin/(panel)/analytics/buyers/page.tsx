import type { Metadata } from "next";
import { requireStaff } from "@/lib/admin";
import { loadBuyers } from "@/lib/analytics/buyers";
import { BuyersView } from "@/components/admin/insights/buyers-view";
import { AdminHead } from "@/components/admin/ui";

export const metadata: Metadata = { title: "Buyers, Insights" };
export const dynamic = "force-dynamic";

const RANGES: Record<string, number | null> = { all: null, "90": 90, "30": 30, "7": 7 };

/** Insights > Buyers: the source that brought each paying customer (needs the Revenue permission). */
export default async function BuyersPage({ searchParams }: PageProps<"/admin/analytics/buyers">) {
  await requireStaff("revenue", "/admin/analytics/buyers");
  const raw = (await searchParams).range;
  const range = typeof raw === "string" && raw in RANGES ? raw : "all";
  const days = RANGES[range];
  const { buyers, checkouts } = await loadBuyers(days);
  return (
    <div>
      <AdminHead
        title="Buyers"
        sub={days ? `Last ${days} days` : "All time"}
        info="Where paying customers came from. New accounts keep the source of their first visit and their latest visit from a link, search or campaign (saved at sign-up and at checkout). Older buyers show their ref link or how they paid."
      />
      <BuyersView buyers={buyers} checkouts={checkouts} range={range} />
    </div>
  );
}
