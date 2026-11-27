import Link from "next/link";
import { Icon } from "@/registry/components/icons";
import { PostBody } from "@/components/site/blog/post-body";
import { PostCover } from "@/components/site/illo";
import { Rich } from "@/components/site/blog/rich";
import { ItemCard } from "@/components/site/item-card";
import { fmtDate, readingTime, toc, wordCount, type Post } from "@/lib/blog";
import { entries } from "@/lib/library";
import { JsonLd, ORG_ID, abs, breadcrumbLd, faqLd, plain, PUBLISHER } from "@/lib/seo";

const SUMMARIZE = [
  ["ChatGPT", "/logos/chatgpt.svg", (q: string) => "https://chatgpt.com/?q=" + q],
  ["Claude", "/logos/claude.svg", (q: string) => "https://claude.ai/new?q=" + q],
  ["Perplexity", "/logos/perplexity.svg", (q: string) => "https://www.perplexity.ai/search?q=" + q],
] as const;

/** The post page. Shared by the static code-post route (app/blog/[slug]) and the per-request database route (app/blog-db/[slug]). */
export function PostArticle({ p, more }: { p: Post; more: Post[] }) {
  const url = abs("/blog/" + p.slug);
  const contents = toc(p);
  const comps = p.related.map((s) => entries.find((e) => e.slug === s)).filter((e): e is NonNullable<typeof e> => !!e).slice(0, 4);
  const prompt = encodeURIComponent(`Summarize the key points of "${p.title}" by ${PUBLISHER} (${url}) for a founder building a dashboard.`);

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": url + "#article",
    headline: p.title,
    description: p.description,
    url,
    mainEntityOfPage: url,
    image: abs("/blog/" + p.slug + "/opengraph-image"),
    datePublished: p.date,
    dateModified: p.updated ?? p.date,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    articleSection: p.category,
    keywords: p.keyword,
    wordCount: wordCount(p),
    inLanguage: "en",
    about: p.systems.map((s) => ({ "@type": "CreativeWork", name: s, url: abs("/systems/" + s) })),
  };

  return (
    <div className="max-w-[1100px]">
      {p.draft && (
        <p role="status" className="mb-5 flex items-center gap-2 rounded-[8px] bg-[#fff4dc] px-3 py-2 text-[13px] text-[#8a5a00]">
          <Icon name="lock" size={15} />
          Draft preview. Only staff can see this page; it is not on the blog, the sitemap or llms.txt until it is published.
        </p>
      )}
      <JsonLd data={[article, breadcrumbLd([["Ingot UI", "/"], ["Resources", "/blog"], [p.title, "/blog/" + p.slug]]), ...(p.faq.length ? [faqLd(p.faq.map((f) => ({ q: plain(f.q), a: plain(f.a) })))] : [])]} />
      <div className="grid gap-10 lg:grid-cols-[200px_minmax(0,680px)]">
        <aside className="hidden lg:block">
          <nav className="sticky top-5 flex flex-col text-[13px]" aria-label="On this page">
            <p className="eyebrow mb-1 px-2">On this page</p>
            {contents.map((h) => (
              <a key={h.id} href={"#" + h.id} className="rounded-[6px] px-2 py-1 leading-snug text-mute hover:bg-tile hover:text-ink">{h.label}</a>
            ))}
            {p.faq.length > 0 && <a href="#faq" className="rounded-[6px] px-2 py-1 text-mute hover:bg-tile hover:text-ink">FAQ</a>}
          </nav>
        </aside>

        <article className="min-w-0">
          <nav className="flex items-center gap-1 text-[12px] text-mute" aria-label="Breadcrumb">
            <Link href="/blog" className="hover:text-ink">Resources</Link>
            <span aria-hidden="true">/</span>
            <span>{p.category}</span>
          </nav>
          <h1 className="mt-3 text-[30px] font-medium leading-[1.12] tracking-[-0.025em] sm:text-[34px]">{p.title}</h1>
          <p className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[13px] text-mute">
            <span>By <Link href="/" className="text-ink hover:underline">{PUBLISHER}</Link></span>
            <time dateTime={p.date}>{fmtDate(p.date)}</time>
            {p.updated && p.updated !== p.date && <span>Updated <time dateTime={p.updated}>{fmtDate(p.updated)}</time></span>}
            <span>{readingTime(p)} min read</span>
          </p>

          <div className="mt-6">
            <PostCover slug={p.slug} category={p.category} title={p.title} size="hero" scene={p.cover} />
          </div>

          {p.lede && <p className="mt-6 text-[17px] leading-[1.6] text-ink"><Rich x={p.lede} /></p>}

          <p className="mt-5 flex flex-wrap items-center gap-1.5 text-[12px] text-mute">
            Summarize with
            {SUMMARIZE.map(([name, logo, href]) => (
              <a key={name} href={href(prompt)} target="_blank" rel="noopener nofollow" className="inline-flex items-center gap-1.5 rounded-full bg-chip py-0.5 pl-2 pr-2.5 text-ink hover:bg-chip-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo} alt="" width={13} height={13} className="size-[13px] shrink-0" />
                {name}
              </a>
            ))}
          </p>

          {contents.length > 0 && (
            <details className="card mt-6 lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-[13px] font-medium">
                On this page
                <Icon name="plus" size={14} className="text-mute" />
              </summary>
              <ol className="border-t border-hair px-4 py-2">
                {contents.map((h) => <li key={h.id}><a href={"#" + h.id} className="block py-1 text-[13px] text-mute hover:text-ink">{h.label}</a></li>)}
              </ol>
            </details>
          )}

          <PostBody blocks={p.body} />

          {p.faq.length > 0 && (
            <section className="mt-14" aria-labelledby="faq">
              <h2 id="faq" className="scroll-mt-6 text-[20px] font-medium tracking-[-0.015em]">Frequently asked questions</h2>
              <div className="mt-4 border-t border-hair">
                {p.faq.map((f) => (
                  <details key={f.q} className="group border-b border-hair">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-3.5 text-[15px] font-medium">
                      <h3 className="font-medium">{f.q}</h3>
                      <Icon name="plus" size={14} className="shrink-0 text-mute transition-transform group-open:rotate-45" />
                    </summary>
                    <p className="pb-4 pr-8 text-[15px] leading-[1.65] text-ink-2"><Rich x={f.a} /></p>
                  </details>
                ))}
              </div>
            </section>
          )}

          <section className="mt-14 rounded-[8px] bg-tile p-5">
            <p className="text-[13px] font-medium">About Ingot UI</p>
            <p className="mt-1 text-[14px] leading-relaxed text-ink-2">
              Ingot UI is a library of nine dashboard design systems built from real product screens. Every generated React component is checked against its Figma original before it ships. <Link href="/about#editorial" className="font-medium text-ink underline underline-offset-2">How we write guides</Link>.
            </p>
          </section>
        </article>
      </div>

      {comps.length > 0 && (
        <section className="mt-16" aria-labelledby="in-this-guide">
          <h2 id="in-this-guide" className="text-[13px] font-medium">Components in this guide</h2>
          <div className="mt-3 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2 xl:grid-cols-4">{comps.map((e) => <ItemCard key={e.slug} item={e} />)}</div>
        </section>
      )}

      {more.length > 0 && (
        <section className="mt-14" aria-labelledby="keep-reading">
          <h2 id="keep-reading" className="text-[13px] font-medium">Keep reading</h2>
          <ul className="mt-3 grid gap-3 md:grid-cols-3">
            {more.map((o) => (
              <li key={o.slug}>
                <Link href={"/blog/" + o.slug} className="card flex h-full flex-col p-4 hover:bg-tile">
                  <span className="text-[12px] text-mute">{o.category}</span>
                  <span className="mt-1 text-[14px] font-medium leading-snug">{o.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
