import type { Metadata } from "next";
import Link from "next/link";
import { requireStaff } from "@/lib/admin";
import { loadHeard } from "@/lib/analytics/heard";
import { getSystem } from "@/lib/catalog";
import { AdminHead, Empty, Kpi, Section, Table, Tag, num, td, tdNum } from "@/components/admin/ui";

export const metadata: Metadata = { title: "How they heard, Insights" };
export const dynamic = "force-dynamic";

const RANGES: [string, string, number | null][] = [["all", "All time", null], ["90", "90 days", 90], ["30", "30 days", 30], ["7", "7 days", 7]];
const pct = (a: number, b: number) => (!b ? "–" : a && a / b < 0.01 ? "<1%" : Math.round((a / b) * 100) + "%");

/** Insights > How they heard: answers to the optional last onboarding question, per source, with how many pay. */
export default async function HeardPage({ searchParams }: PageProps<"/admin/analytics/heard">) {
  await requireStaff("analytics", "/admin/analytics/heard");
  const raw = (await searchParams).range;
  const range = RANGES.find(([id]) => id === raw) ?? RANGES[0];
  const r = await loadHeard(range[2]);
  const top = r.rows.find((x) => x.n > 0);
  const max = Math.max(1, ...r.rows.map((x) => x.n));
  return (
    <div>
      <AdminHead
        title="How they heard"
        sub={range[1]}
        info="What new accounts say themselves in the last onboarding step (optional): “How did you hear about Ingot UI?”. Next to Buyers, which shows the source tracked automatically from links and campaigns."
      />
      <nav aria-label="Date range" className="mt-4 flex flex-wrap gap-1">
        {RANGES.map(([id, label]) => (
          <Link key={id} href={id === "all" ? "/admin/analytics/heard" : `/admin/analytics/heard?range=${id}`} data-on={id === range[0]} className="pill !h-7 !px-2.5 text-[12px]">
            {label}
          </Link>
        ))}
      </nav>

      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
        <Kpi label="New accounts" value={num(r.signups)} />
        <Kpi label="Answered" value={pct(r.answered, r.asked)} hint={`${num(r.answered)} of ${num(r.asked)} accounts created since the question went live answered it (it is optional).`} />
        <Kpi label="Top source" value={top ? top.label : "–"} hint={top ? `${num(top.n)} answers` : undefined} />
        <Kpi label="Picked a system" value={pct(r.askedPicked, r.asked)} hint={`${num(r.askedPicked)} of ${num(r.asked)} accounts created since the new onboarding chose a system in step 1.`} />
      </div>

      <Section title="Sources" sub="Self-reported, one answer per account" info="Paid = the account is on Pro, Team or Lifetime today.">
        {r.answered ? (
          <Table head={["Source", "Answers", "Share", "Paid", "Paid rate"]} right={[1, 2, 3, 4]}>
            {r.rows.filter((x) => x.n > 0).map((x) => (
              <tr key={x.id}>
                <td className={td}>
                  <span className="block">{x.label}</span>
                  {/* share of answers as a quiet bar under the name */}
                  <span className="mt-1 block h-1 rounded-full bg-chip-2" aria-hidden="true">
                    <span className="block h-1 rounded-full bg-ink" style={{ width: `${(x.n / max) * 100}%` }} />
                  </span>
                </td>
                <td className={tdNum}>{num(x.n)}</td>
                <td className={tdNum}>{pct(x.n, r.answered)}</td>
                <td className={tdNum}>{num(x.paid)}</td>
                <td className={tdNum}>{pct(x.paid, x.n)}</td>
              </tr>
            ))}
          </Table>
        ) : (
          <Empty>No answers yet. They appear here as new accounts finish onboarding.</Empty>
        )}
      </Section>

      <div className="grid gap-x-6 md:grid-cols-2">
        <Section title="Systems picked" sub="Step 1 of onboarding">
          {r.systems.length ? (
            <Table head={["System", "Accounts", "Share"]} right={[1, 2]}>
              {r.systems.map((s) => (
                <tr key={s.slug}>
                  <td className={td}><Link href={`/systems/${s.slug}`} className="hover:underline">{getSystem(s.slug)?.name ?? s.slug}</Link></td>
                  <td className={tdNum}>{num(s.n)}</td>
                  <td className={tdNum}>{pct(s.n, r.pickedSystem)}</td>
                </tr>
              ))}
            </Table>
          ) : (
            <Empty>No systems picked yet.</Empty>
          )}
        </Section>
        <Section title="“Other” answers" sub="Latest 30, in their words">
          {r.others.length ? (
            <ul className="card divide-y divide-hair">
              {r.others.map((o, i) => (
                <li key={i} className="flex items-center gap-3 px-3 py-2 text-[13px]">
                  <span className="min-w-0 flex-1 truncate">{o.text}</span>
                  {o.paid && <Tag tone="good">Paid</Tag>}
                  <span className="shrink-0 text-[12px] tabular-nums text-mute">{o.at ? new Date(o.at).toLocaleDateString("en-US", { month: "short", day: "numeric" }) : ""}</span>
                </li>
              ))}
            </ul>
          ) : (
            <Empty>No “Other” answers yet.</Empty>
          )}
        </Section>
      </div>
    </div>
  );
}
