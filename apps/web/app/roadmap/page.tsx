import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, JsonLd, breadcrumbLd } from "@/lib/seo";
import { PageHead } from "@/components/site/page-head";
import { RELEASES, showDate, versionId } from "@/lib/changelog";
import { LogIcon } from "@/app/changelog/icons";
import { CIcon } from "@/components/site/chrome-icon";
import { COLUMNS, ROADMAP } from "./items";
import { RoadmapVotes, VoteButton } from "./votes";

export const metadata: Metadata = pageMeta({
  title: "Roadmap: what Ingot UI builds next",
  description: "The public Ingot UI roadmap: what we are building now, next and later, with dark mode first in line. Upvote what you need or suggest something new.",
  path: "/roadmap",
});

export default function RoadmapPage() {
  const latest = RELEASES[0];
  return (
    <div className="max-w-[1100px]">
      <JsonLd data={breadcrumbLd([["Ingot UI", "/"], ["Roadmap", "/roadmap"]])} />
      <PageHead edit="roadmap" title="Roadmap" sub="What we are building, in order.">
        <Link href="/changelog" className="btn-line">
          <CIcon name="history" size={14} /> Changelog
        </Link>
        <Link href="/support" className="btn-ink">
          <LogIcon name="message" /> Suggest something
        </Link>
      </PageHead>

      <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-2">
        Ingot UI ships in small, frequent releases. The latest was{" "}
        <Link href={"/changelog#" + versionId(latest.version)} className="font-medium text-ink underline underline-offset-2">
          v{latest.version}
        </Link>{" "}
        on {showDate(latest.date)}, and {RELEASES.length} releases have shipped since {showDate(RELEASES[RELEASES.length - 1].date)}. Upvote the items you need most: votes help us decide what moves up. No account needed.
      </p>

      <RoadmapVotes>
        <div className="mt-6 grid gap-6 lg:grid-cols-3 lg:gap-4">
          {COLUMNS.map((col) => {
            const list = ROADMAP.filter((i) => i.column === col.id);
            return (
              <section key={col.id} aria-labelledby={"col-" + col.id} className="min-w-0">
                <div className="flex items-baseline gap-2 px-1">
                  <h2 id={"col-" + col.id} className="text-[14px] font-medium">
                    {col.title}
                  </h2>
                  <span className="text-[12px] tabular-nums text-faint">{list.length}</span>
                  <p className="ml-auto text-[12px] text-mute">{col.sub}</p>
                </div>
                <ul className="mt-2 flex flex-col gap-2">
                  {list.map((it) => (
                    <li key={it.id} id={it.id} className="card flex items-start gap-3 p-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[13px] font-medium leading-snug">{it.title}</h3>
                        <p className="mt-1 text-[13px] leading-relaxed text-mute">{it.body}</p>
                      </div>
                      <VoteButton id={it.id} title={it.title} />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </RoadmapVotes>

      <section aria-labelledby="missing-t" className="card mt-10 flex flex-wrap items-center gap-3 p-4">
        <div className="w-full min-w-0 sm:w-auto sm:flex-1">
          <h2 id="missing-t" className="text-[14px] font-medium">Not on the list?</h2>
          <p className="mt-1 text-[13px] text-mute">Tell us what your product needs. Requests that many founders share move onto this roadmap.</p>
        </div>
        <Link href="/support" className="btn-ink">Suggest something</Link>
        <Link href="/changelog" className="btn-line">See what shipped</Link>
      </section>
    </div>
  );
}
