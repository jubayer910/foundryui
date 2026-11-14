"use server";
import { desc, like, or, sql } from "drizzle-orm";
import { can, requireStaff } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";

export type SearchHit = { kind: "user" | "order" | "ticket"; title: string; sub: string; href: string };

/**
 * Quick search in the admin top bar: users by name or email, orders by id or email, tickets by reference,
 * id or subject. Only searches the areas the signed-in role can open. At most 5 hits per kind.
 */
export async function quickSearch(query: string): Promise<SearchHit[]> {
  const { role } = await requireStaff();
  const q = String(query ?? "").trim().toLowerCase().slice(0, 100);
  if (q.length < 2) return [];
  const db = await getDb();
  const pat = `%${q.replace(/[%_]/g, (c) => "\\" + c)}%`;
  const esc = sql`escape '\\'`;
  const jobs: Promise<SearchHit[]>[] = [];

  if (can(role, "users")) {
    const U = schema.user;
    jobs.push(
      db
        .select({ id: U.id, name: U.name, email: U.email, plan: U.plan })
        .from(U)
        .where(or(sql`lower(${U.email}) like ${pat} ${esc}`, sql`lower(${U.name}) like ${pat} ${esc}`))
        .orderBy(desc(U.createdAt))
        .limit(5)
        .then((r) => r.map((u) => ({ kind: "user" as const, title: u.name || u.email, sub: `${u.email}, ${u.plan}`, href: `/admin/users/${u.id}` }))),
    );
  }
  if (can(role, "orders")) {
    const P = schema.purchase;
    jobs.push(
      db
        .select({ id: P.id, order: P.providerOrderId, email: P.email, plan: P.plan, status: P.status })
        .from(P)
        .where(or(sql`lower(${P.email}) like ${pat} ${esc}`, sql`lower(${P.id}) like ${pat} ${esc}`, sql`lower(${P.providerOrderId}) like ${pat} ${esc}`))
        .orderBy(desc(P.createdAt))
        .limit(5)
        .then((r) => r.map((p) => ({ kind: "order" as const, title: `Order ${p.order || p.id.slice(0, 8)}`, sub: `${p.email}, ${p.plan}, ${p.status}`, href: `/admin/orders?q=${encodeURIComponent(p.email)}` }))),
    );
  }
  if (can(role, "support")) {
    const T = schema.ticket;
    jobs.push(
      db
        .select({ id: T.id, subject: T.subject, email: T.email, status: T.status })
        .from(T)
        .where(or(like(T.id, `${q.replace(/[%_]/g, "")}%`), sql`lower(${T.subject}) like ${pat} ${esc}`, sql`lower(${T.email}) like ${pat} ${esc}`))
        .orderBy(desc(T.updatedAt))
        .limit(5)
        .then((r) => r.map((t) => ({ kind: "ticket" as const, title: t.subject, sub: `${t.id.slice(0, 8).toUpperCase()}, ${t.email}, ${t.status}`, href: `/admin/support/${t.id}` }))),
    );
  }
  return (await Promise.all(jobs)).flat();
}
