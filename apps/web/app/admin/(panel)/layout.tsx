import { Suspense } from "react";
import { count, eq } from "drizzle-orm";
import { getDb, schema } from "@/lib/db";
import { PERMS, can, getStaff } from "@/lib/admin";
import { getSessionUser } from "@/lib/auth";
import { pendingCount } from "@/lib/activation";
import { AdminShell } from "@/components/admin/shell/shell";
import { ToLogin } from "@/components/admin/shell/to-login";

export const dynamic = "force-dynamic";

/**
 * Guarded admin panel. Signed-out and non-staff visitors are sent to /admin/login (the pages below never
 * render for them); staff get the shell with the sections their role can open.
 */
export default async function PanelLayout({ children }: LayoutProps<"/admin">) {
  const staff = await getStaff();
  if (!staff) {
    const signedIn = !!(await getSessionUser().catch(() => null));
    return (
      <Suspense>
        <ToLogin denied={signedIn} />
      </Suspense>
    );
  }
  let openTickets = 0;
  if (can(staff.role, "support")) {
    const db = await getDb();
    const [open] = await db.select({ n: count() }).from(schema.ticket).where(eq(schema.ticket.status, "open"));
    openTickets = open?.n ?? 0;
  }
  const pendingActivations = can(staff.role, "orders") ? await pendingCount() : 0;
  return (
    <AdminShell user={{ name: staff.user.name, email: staff.user.email, role: staff.role }} perms={PERMS[staff.role]} badges={{ openTickets, pendingActivations }}>
      {children}
    </AdminShell>
  );
}
