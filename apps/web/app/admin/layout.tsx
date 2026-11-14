import type { Metadata } from "next";
import { count, eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { NOINDEX } from "@/lib/seo";
import { AdminNav } from "@/components/admin/admin-nav";
import { adminOnly } from "@/components/admin/guard";

export const metadata: Metadata = { title: { default: "Admin", template: "Admin: %s | Ingot UI" }, robots: { ...NOINDEX, follow: false } };
export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }: LayoutProps<"/admin">) {
  await adminOnly();
  const db = await getDb();
  const [open] = await db.select({ n: count() }).from(schema.ticket).where(eq(schema.ticket.status, "open"));
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:gap-8">
      <aside className="lg:sticky lg:top-5 lg:w-[184px] lg:shrink-0 lg:self-start">
        <AdminNav openTickets={open?.n ?? 0} />
      </aside>
      <div className="min-w-0 flex-1 max-w-[1120px]">{children}</div>
    </div>
  );
}
