import type { Metadata } from "next";
import Link from "next/link";
import { requireStaff } from "@/lib/admin";
import { Placeholder } from "@/components/admin/shell/placeholder";

export const metadata: Metadata = { title: "Revenue" };

export default async function AdminRevenue() {
  await requireStaff("revenue", "/admin/revenue");
  return (
    <Placeholder
      title="Revenue"
      sub="Earnings from Lemon Squeezy."
      icon="report-money"
      what={["Sync with Lemon Squeezy, on demand and on a schedule", "Gross, refunds, net, MRR and ARR", "Revenue by plan and by day, lifetime deal revenue", "Top countries and a payouts link"]}
    >
      <Link href="/admin/orders" className="btn-line">
        See orders now
      </Link>
    </Placeholder>
  );
}
