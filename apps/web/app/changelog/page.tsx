import type { Metadata } from "next";
import { connection } from "next/server";
import { pageMeta } from "@/lib/seo";
import { Icon } from "@/registry/components/icons";
import { PageHead } from "@/components/site/page-head";
import { IlloTile } from "@/components/site/illo";
import { listChangelog, fmtChangelogDate, type ChangelogEntry } from "./entries";

const base = pageMeta({ title: "Changelog: every Ingot UI release", description: "What shipped in Ingot UI, newest first: new design systems, components, MCP tools, plans and site updates. Follow it by RSS or see what comes next on the roadmap.", path: "/changelog", image: "/changelog/opengraph-image" });
export const metadata: Metadata = { ...base, alternates: { canonical: "/changelog", types: { "application/rss+xml": "/changelog/rss.xml" } } };

/** Entries come from D1 (edited at /admin/changelog), rendered per request so changes show without a redeploy. */
export default async function ChangelogPage() {
  await connection();
  let log: ChangelogEntry[] = [];
  let failed = false;
  try {
    log = await listChangelog();
  } catch {
    failed = true;
  }
  return (
    <div className="max-w-3xl">
      <PageHead edit="changelog" title="Changelog" sub="What shipped, newest first.">
        <a href="/changelog/rss.xml" className="pill">RSS</a>
        <a href="/roadmap" className="pill">Roadmap</a>
      </PageHead>
      {(failed || !log.length) && (
        <p className="mt-6 border-t border-hair pt-5 text-[13px] text-mute">{failed ? "The changelog can't be loaded right now. Try again in a minute." : "Nothing here yet."}</p>
      )}
      {log.map((e) => (
        <section key={e.id} className="mt-6 grid gap-2 border-t border-hair pt-5 sm:grid-cols-[160px_1fr] sm:gap-6">
          <div>
            <p className="text-[13px] text-mute">{fmtChangelogDate(e.date)}</p>
            <IlloTile scene={e.scene} label={e.title} className="mt-2 hidden h-[110px] sm:block" />
          </div>
          <div>
          <h2 className="text-[14px] font-medium">{e.title}</h2>
          <ul className="mt-2 flex flex-col gap-1.5 text-[13px] text-mute">
            {e.items.map((b, i) => (
              <li key={i} className="flex items-start gap-2">
                <Icon name="plus" size={14} className="mt-0.5 shrink-0 text-ink" />
                {b}
              </li>
            ))}
          </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
