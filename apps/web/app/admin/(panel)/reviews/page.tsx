import type { Metadata } from "next";
import Link from "next/link";
import { desc, eq } from "drizzle-orm";
import { requireStaff } from "@/lib/admin";
import { getDb, schema } from "@/lib/db";
import { feedback } from "@/app/api/feedback/store";
import { AdminHead, Empty, Kpi, Section, Tag, num, planLabel } from "@/components/admin/ui";
import { setReviewApproved } from "./actions";

export const metadata: Metadata = { title: "Reviews" };
export const dynamic = "force-dynamic";

const VIEWS = [["all", "All"], ["public", "Want to be shown"], ["live", "Shown on site"], ["private", "Private"]] as const;
type View = (typeof VIEWS)[number][0];
const tone = (n: number) => (n >= 9 ? "good" : n >= 7 ? "plain" : "bad") as "good" | "plain" | "bad";
const kind = (n: number) => (n >= 9 ? "Promoter" : n >= 7 ? "Passive" : "Detractor");

/** Customers > Reviews: every score and note sent from Account → Feedback (and the in-app ask), with approve/hide. */
export default async function ReviewsPage({ searchParams }: PageProps<"/admin/reviews">) {
  await requireStaff("users", "/admin/reviews");
  const raw = (await searchParams).view;
  const view: View = VIEWS.find(([id]) => id === raw)?.[0] ?? "all";
  const db = await getDb();
  const rows = await db
    .select({ id: feedback.id, nps: feedback.nps, quote: feedback.quote, name: feedback.name, company: feedback.company, consent: feedback.consent, approved: feedback.approved, plan: feedback.plan, at: feedback.createdAt, email: schema.user.email, userId: schema.user.id })
    .from(feedback)
    .leftJoin(schema.user, eq(schema.user.id, feedback.userId))
    .orderBy(desc(feedback.createdAt))
    .all()
    .catch(() => []);

  const n = rows.length;
  const promoters = rows.filter((r) => r.nps >= 9).length;
  const detractors = rows.filter((r) => r.nps <= 6).length;
  const nps = n ? Math.round(((promoters - detractors) / n) * 100) : null;
  const avg = n ? (rows.reduce((s, r) => s + r.nps, 0) / n).toFixed(1) : "–";
  const waiting = rows.filter((r) => r.consent && !r.approved).length;
  const shown = rows.filter((r) => view === "all" || (view === "public" ? r.consent && !r.approved : view === "live" ? r.approved : !r.consent));

  return (
    <div>
      <AdminHead
        title="Reviews"
        sub={`${num(n)} answers`}
        info="Scores and notes members send from Account → Feedback. A note appears on ingotui.com only when the member ticked “show my words” and you approve it here. Editing a review sends it back to waiting."
      />
      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
        <Kpi label="NPS" value={nps === null ? "–" : String(nps)} hint="Promoters (9–10) minus detractors (0–6), as a share of all answers. From −100 to 100." />
        <Kpi label="Average score" value={avg} />
        <Kpi label="Waiting for you" value={num(waiting)} hint="Members who want their words shown and are not approved yet." />
        <Kpi label="Shown on site" value={num(rows.filter((r) => r.approved).length)} />
      </div>

      <Section title="All reviews" sub="Newest first">
        <nav aria-label="Filter" className="-mt-1 mb-3 flex flex-wrap gap-1">
          {VIEWS.map(([id, label]) => (
            <Link key={id} href={id === "all" ? "/admin/reviews" : `/admin/reviews?view=${id}`} data-on={id === view} className="pill !h-7 !px-2.5 text-[12px]">
              {label}
            </Link>
          ))}
        </nav>
        {shown.length ? (
          <ul className="flex flex-col gap-2">
            {shown.map((r) => (
              <li key={r.id} className="card p-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[20px] font-medium tabular-nums">{r.nps}</span>
                  <Tag tone={tone(r.nps)}>{kind(r.nps)}</Tag>
                  {r.approved ? <Tag tone="ink">Shown on site</Tag> : r.consent ? <Tag tone="warn">Wants to be shown</Tag> : <Tag>Private</Tag>}
                  <span className="ml-auto text-[12px] text-mute">
                    {r.userId ? <Link href={`/admin/users?view=${r.userId}`} className="hover:underline">{r.email}</Link> : "Deleted account"}
                    {r.plan ? `, ${planLabel(r.plan)}` : ""}, {r.at.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </span>
                </div>
                {r.quote ? <p className="mt-2 text-[13px] leading-relaxed">{r.quote}</p> : <p className="mt-2 text-[13px] text-mute">No note, score only.</p>}
                {r.consent && (
                  <div className="mt-3 flex flex-wrap items-center gap-3 border-t border-hair pt-3">
                    <span className="text-[12px] text-mute">
                      Shown as <span className="text-ink">{r.name || "–"}</span>
                      {r.company ? `, ${r.company}` : ""}
                    </span>
                    <form action={setReviewApproved} className="ml-auto">
                      <input type="hidden" name="id" value={r.id} />
                      <input type="hidden" name="on" value={r.approved ? "0" : "1"} />
                      <button className={r.approved ? "btn-line !h-8" : "btn-ink !h-8"}>{r.approved ? "Hide from site" : "Approve and show"}</button>
                    </form>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <Empty>{n ? "Nothing in this filter." : "No reviews yet. They arrive from Account → Feedback."}</Empty>
        )}
      </Section>
    </div>
  );
}
