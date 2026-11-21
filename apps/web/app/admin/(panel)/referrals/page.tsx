import type { Metadata } from "next";
import { and, count, eq, inArray, isNotNull, ne, sql, sum } from "drizzle-orm";
import { requireStaff } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { getSettings } from "@/lib/settings";
import { AdminHead, Section, money, num } from "@/components/admin/ui";
import { RefLinkForm, CopyLink } from "@/components/admin/ref-links";
import { removeRefLink } from "./actions";

export const metadata: Metadata = { title: "Referral links" };
export const dynamic = "force-dynamic";

const SITE = "https://ingotui.com";

export default async function AdminReferrals() {
  await requireStaff("analytics", "/admin/referrals");
  const db = await getDb();
  const links = (await getSettings()).refLinks;
  const U = schema.user;
  const P = schema.purchase;
  const R = schema.referrerDaily;

  const [signups, paid, revenue] = await Promise.all([
    db.select({ ref: U.ref, n: count() }).from(U).where(isNotNull(U.ref)).groupBy(U.ref),
    db.select({ ref: U.ref, n: count() }).from(U).where(and(isNotNull(U.ref), ne(U.plan, "free"))).groupBy(U.ref),
    db.select({ ref: U.ref, cents: sum(P.amountCents), orders: count() }).from(P).innerJoin(U, eq(P.userId, U.id)).where(and(isNotNull(U.ref), eq(P.status, "paid"))).groupBy(U.ref),
  ]);
  const names = [...new Set([...links.map((l) => l.name), ...signups.map((s) => s.ref!)])];
  const visits = names.length
    ? await db.select({ ref: R.source, n: sql<number>`sum(${R.views})` }).from(R).where(inArray(R.source, names)).groupBy(R.source)
    : [];
  const get = <T extends { ref: string | null }>(rows: T[], ref: string) => rows.find((r) => r.ref === ref);

  const rows = names.map((name) => {
    const link = links.find((l) => l.name === name);
    const v = Number(get(visits, name)?.n ?? 0);
    const s = get(signups, name)?.n ?? 0;
    const p = get(paid, name)?.n ?? 0;
    const rev = get(revenue, name);
    return { name, link, url: SITE + (link?.to && link.to !== "/" ? link.to : "/") + "?ref=" + name, v, s, p, cents: Number(rev?.cents ?? 0), orders: rev?.orders ?? 0 };
  });
  rows.sort((a, b) => b.cents - a.cents || b.s - a.s || b.v - a.v);

  return (
    <div className="max-w-[1100px]">
      <AdminHead title="Referral links" info="One link per place you share the site. See which one brings visits, sign-ups and sales." />

      <Section title="Make a link" info="Name it after where you post it: x-reply, x-bio, linkedin, newsletter-name, curator-name.">
        <RefLinkForm />
      </Section>

      <Section title="Links" sub="All time" info="Visits are landing visits through the link. A sign-up counts if it happens within 30 days of clicking.">
        {rows.length === 0 ? (
          <p className="text-[13px] text-mute">No links yet. Make the first one above.</p>
        ) : (
          <div className="card overflow-x-auto bg-white">
            <table className="w-full min-w-[640px] text-[13px]">
              <thead>
                <tr className="text-left text-mute">
                  {["Link", "Visits", "Sign-ups", "Paying", "Revenue", ""].map((h, i) => (
                    <th key={i} scope="col" className={"px-3 py-2.5 font-normal" + (i > 0 && i < 5 ? " text-right" : "")}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.name} className="border-t border-hair align-top">
                    <td className="px-3 py-2.5">
                      <p className="font-medium">{r.name}</p>
                      {r.link?.note && <p className="text-[12px] text-mute">{r.link.note}</p>}
                      <CopyLink url={r.url} />
                    </td>
                    <td className="px-3 py-2.5 text-right tabular-nums">{num(r.v)}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums">
                      {num(r.s)}
                      {r.v > 0 && r.s > 0 && <span className="block text-[11.5px] text-faint">{((r.s / r.v) * 100).toFixed(1)}% of visits</span>}
                    </td>
                    <td className="px-3 py-2.5 text-right tabular-nums">{num(r.p)}</td>
                    <td className="px-3 py-2.5 text-right tabular-nums">
                      {money(r.cents)}
                      {r.orders > 0 && <span className="block text-[11.5px] text-faint">{r.orders} {r.orders === 1 ? "order" : "orders"}</span>}
                    </td>
                    <td className="px-3 py-2.5 text-right">
                      {r.link && (
                        <form action={removeRefLink}>
                          <input type="hidden" name="name" value={r.name} />
                          <button className="text-[12px] text-mute underline underline-offset-2 hover:text-ink">Remove</button>
                        </form>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="mt-3 text-[12px] text-mute">Visitors who turn on Do Not Track or Global Privacy Control are not counted. Removing a link keeps the sign-ups it already brought.</p>
      </Section>
    </div>
  );
}
