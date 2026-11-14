import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, JsonLd, breadcrumbLd } from "@/lib/seo";
import { PageHead } from "@/components/site/page-head";
import { IlloTile } from "@/components/site/illo";
import { entries } from "@/lib/library";
import { CHANGE_TYPES, RELEASES, showDate, versionId, type ChangeType } from "@/lib/changelog";
import { LogIcon } from "./icons";

const meta = pageMeta({
  title: "Changelog: every Ingot UI release",
  description: "Every Ingot UI release, newest first: new components, design systems, MCP tools, fixes and site updates, with version numbers, dates and an RSS feed.",
  path: "/changelog",
});

export const metadata: Metadata = {
  ...meta,
  alternates: { ...meta.alternates, types: { "application/rss+xml": [{ url: "/changelog/rss.xml", title: "Ingot UI changelog" }] } },
};

const NAMES = new Map(entries.map((e) => [e.slug, e.name]));

const TYPE_LABEL: Record<ChangeType, string> = { new: "New", improved: "Improved", fixed: "Fixed" };

/* Type filter without client JavaScript: a radio group, and :has() hides what doesn't match.
   Browsers without :has() simply show everything. */
const FILTER_CSS = [
  ".cl-f label:has(input:checked){background:var(--color-ink);color:#fff}",
  ".cl-f label:has(input:focus-visible){outline:2px solid var(--color-ink);outline-offset:2px}",
  ...CHANGE_TYPES.map(
    ({ type: t }) =>
      `.cl:has(#cl-${t}:checked) li[data-type]:not([data-type=${t}]){display:none}` +
      `.cl:has(#cl-${t}:checked) [data-release]:not(:has(li[data-type=${t}])){display:none}`,
  ),
].join("");

export default function ChangelogPage() {
  const latest = RELEASES[0];
  const first = RELEASES[RELEASES.length - 1];
  const count = (t: ChangeType) => RELEASES.reduce((n, r) => n + r.items.filter((i) => i.type === t).length, 0);
  const total = RELEASES.reduce((n, r) => n + r.items.length, 0);

  return (
    <div className="cl max-w-3xl">
      <JsonLd data={breadcrumbLd([["Ingot UI", "/"], ["Changelog", "/changelog"]])} />
      <style>{FILTER_CSS}</style>
      <PageHead title="Changelog" sub="Every release, newest first.">
        <a href="/changelog/rss.xml" className="btn-line" type="application/rss+xml">
          <LogIcon name="rss" /> Subscribe
        </a>
        <Link href="/roadmap" className="btn-line">
          <LogIcon name="road" /> Roadmap
        </Link>
      </PageHead>

      <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-ink-2">
        Latest release: <a href={"#" + versionId(latest.version)} className="font-medium text-ink underline underline-offset-2">v{latest.version}</a> on {showDate(latest.date)}.{" "}
        {RELEASES.length} releases since the first public build on {showDate(first.date)}. Follow along with the <a href="/changelog/rss.xml" className="font-medium text-ink underline underline-offset-2">RSS feed</a>, and{" "}
        <Link href="/roadmap" className="font-medium text-ink underline underline-offset-2">vote on what we build next</Link>.
      </p>

      <fieldset className="cl-f mt-5 flex flex-wrap items-center gap-1.5">
        <legend className="sr-only">Show changes of type</legend>
        {[{ type: "all", label: "All", n: total }, ...CHANGE_TYPES.map((t) => ({ ...t, n: count(t.type) }))].map((t) => (
          <label key={t.type} className="pill cursor-pointer select-none">
            <input type="radio" name="cl-type" id={"cl-" + t.type} value={t.type} defaultChecked={t.type === "all"} className="sr-only" />
            {t.label}
            <span className="tabular-nums opacity-60">{t.n}</span>
          </label>
        ))}
      </fieldset>

      {RELEASES.map((r) => {
        const id = versionId(r.version);
        return (
          <section key={r.version} id={id} data-release aria-labelledby={id + "-t"} className="mt-6 grid scroll-mt-6 gap-2 border-t border-hair pt-5 sm:grid-cols-[160px_1fr] sm:gap-6">
            <div className="flex items-center gap-2 sm:block">
              <a href={"#" + id} className="pill !h-6 font-fu-mono !text-[12px]" aria-label={"Link to version " + r.version}>
                v{r.version}
              </a>
              <p className="text-[13px] text-mute sm:mt-2">
                <time dateTime={r.date}>{showDate(r.date)}</time>
              </p>
              <IlloTile scene={r.scene} label={r.title} className="mt-2 hidden h-[110px] sm:block" />
            </div>
            <div className="min-w-0">
              <h2 id={id + "-t"} className="text-[14px] font-medium">
                {r.title}
              </h2>
              <p className="mt-1 text-[13px] text-ink-2">{r.summary}</p>
              <ul className="mt-3 flex flex-col gap-2 text-[13px] text-mute">
                {r.items.map((it) => {
                  const links = (it.components ?? []).filter((s) => NAMES.has(s));
                  return (
                    <li key={it.text} data-type={it.type} className="flex items-start gap-2">
                      <span className="mt-px inline-flex h-5 w-[84px] shrink-0 items-center gap-1 rounded-full bg-chip px-2 text-[11px] font-medium text-ink">
                        <LogIcon name={it.type} size={12} />
                        {TYPE_LABEL[it.type]}
                      </span>
                      <span className="min-w-0 leading-relaxed">
                        {it.text}
                        {links.length > 0 && (
                          <span className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                            {links.map((s) => (
                              <Link key={s} href={"/components/" + s} className="text-ink underline decoration-hair-2 underline-offset-2 hover:decoration-ink">
                                {NAMES.get(s)}
                              </Link>
                            ))}
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      })}

      <section aria-labelledby="next-t" className="card mt-10 flex flex-wrap items-center gap-3 p-4">
        <div className="w-full min-w-0 sm:w-auto sm:flex-1">
          <h2 id="next-t" className="text-[14px] font-medium">What should we build next?</h2>
          <p className="mt-1 text-[13px] text-mute">Dark mode is first in line. Upvote what you need, or tell us what is missing.</p>
        </div>
        <Link href="/roadmap" className="btn-ink">See the roadmap</Link>
        <Link href="/support" className="btn-line">Suggest something</Link>
      </section>
    </div>
  );
}
