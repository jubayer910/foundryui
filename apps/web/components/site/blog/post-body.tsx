import Link from "next/link";
import type { Block } from "@/lib/blog";
import { entries } from "@/lib/library";
import { getSystem } from "@/lib/catalog";
import { stat } from "@/lib/blog/stats";
import { fmt } from "@/lib/seo";
import { ItemCard } from "../item-card";
import { Rich } from "./rich";
import { basicBlock } from "./basic-blocks";
import { CARD, cardSrc, fitFor, midSrc, shotAlt } from "@/app/systems/fit";

const bySlug = new Map(entries.map((e) => [e.slug, e]));

function Pack({ b }: { b: Extract<Block, { t: "pack" }> }) {
  const s = getSystem(b.system);
  if (!s) return null;
  const facts: [string, string][] = [
    ["In Figma", fmt(stat("figma:" + s.slug) ?? 0)],
    ["With React code", fmt(stat("code:" + s.slug) ?? 0)],
    ["Source screens", fmt(stat("screens:" + s.slug) ?? 0)],
    ["Charts", fmt(stat("cat:" + s.slug + ":Charts") ?? 0)],
    ["Plan", s.tier === "free" ? "Free" : "Pro"],
  ];
  const ex = b.examples.map((x) => bySlug.get(x)).filter(Boolean);
  return (
    <section className="card not-prose my-8 overflow-hidden" aria-labelledby={"pack-" + s.slug}>
      <div className="flex items-center gap-3 px-5 pt-5">
        <span className="size-9 shrink-0 rounded-[8px]" style={{ background: s.accent }} aria-hidden="true" />
        <div className="min-w-0">
          <h3 id={"pack-" + s.slug} className="text-[16px] font-medium tracking-[-0.01em]">{b.rank}. {s.name}</h3>
          <p className="text-[13px] text-mute">{s.tagline}</p>
        </div>
        <Link href={"/systems/" + s.slug} className="btn-line ml-auto shrink-0 max-sm:hidden">Open {s.name}</Link>
      </div>
      <Shot slug={s.slug} name={s.name} className="mx-5 mt-4" />
      <dl className="mt-4 grid grid-cols-2 border-y border-hair sm:grid-cols-5">
        {facts.map(([k, v]) => (
          <div key={k} className="border-hair px-5 py-2.5 sm:border-r sm:last:border-r-0">
            <dt className="text-[12px] text-mute">{k}</dt>
            <dd className="text-[14px] font-medium tabular-nums">{v}</dd>
          </div>
        ))}
      </dl>
      <div className="px-5 py-4">
        <p className="text-[14px] leading-relaxed text-ink-2"><strong className="font-medium text-ink">Best for:</strong> <Rich x={b.bestFor} /></p>
        <ul className="mt-3 border-t border-hair">
          {b.strengths.map((x) => (
            <li key={x} className="border-b border-hair py-2 text-[14px] leading-relaxed text-ink-2"><Rich x={x} /></li>
          ))}
        </ul>
        {ex.length > 0 && (
          <div className="mt-4 grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2">
            {ex.slice(0, 2).map((e) => <ItemCard key={e!.slug} item={e!} />)}
          </div>
        )}
        {ex.length > 2 && (
          <p className="mt-4 flex flex-wrap items-center gap-1.5 text-[13px]">
            <span className="text-mute">More from {s.name}:</span>
            {ex.slice(2).map((e) => (
              <Link key={e!.slug} href={"/components/" + e!.slug} className="rounded-full bg-chip px-2.5 py-0.5 hover:bg-chip-2">{e!.name}</Link>
            ))}
          </p>
        )}
        <Link href={"/systems/" + s.slug} className="btn-line mt-4 w-full sm:hidden">Open {s.name}</Link>
        <p className="mt-4 text-[13px] max-sm:hidden">
          <Link href={"/systems/" + s.slug} className="font-medium underline decoration-hair-2 underline-offset-4 hover:decoration-ink">See every {s.name} screen and component</Link>
          <span className="text-mute"> ({s.tier === "free" ? "free in Figma and React" : "included in Pro"})</span>
        </p>
      </div>
    </section>
  );
}

/** One ranked component: big preview (the real Figma export, or the live React preview), why it works, when to use it. */
function Pick({ b }: { b: Extract<Block, { t: "pick" }> }) {
  const e = bySlug.get(b.slug);
  if (!e) return null;
  const s = getSystem(e.system);
  const coded = e.kind === "code" || !!e.qa;
  return (
    <section className="not-prose mt-10" aria-labelledby={"pick-" + b.rank}>
      <h3 id={"pick-" + b.rank} className="text-[17px] font-medium leading-snug tracking-[-0.01em]">{b.rank}. {b.title}</h3>
      <p className="mt-1 text-[13px] text-mute">
        {e.name} from {s ? <Link href={"/systems/" + s.slug} className="underline decoration-hair-2 underline-offset-4 hover:decoration-ink">{s.name}</Link> : e.system}, {coded ? "Figma and React" : "Figma"}{e.tier === "free" ? ", free" : ", Pro"}
      </p>
      {e.kind === "code" ? (
        <div className="mt-3"><ItemCard item={e} /></div>
      ) : (
        <Link href={"/components/" + e.slug} className="mt-3 flex items-center justify-center overflow-hidden rounded-[8px] bg-tile p-4 shadow-[inset_0_0_0_1px_var(--color-hair)] transition-opacity hover:opacity-95 sm:p-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={e.thumb} width={e.w} height={e.h} alt={`${b.title}: ${e.name} from the ${s?.name ?? e.system} dashboard design system`} loading="lazy" decoding="async" className="h-auto max-h-[440px] w-auto max-w-full rounded-[4px] object-contain shadow-[0_1px_3px_rgb(0_0_0/0.08)]" />
        </Link>
      )}
      <ul className="mt-3 border-t border-hair">
        {b.why.map((x) => <li key={x} className="border-b border-hair py-2 text-[14px] leading-relaxed text-ink-2"><Rich x={x} /></li>)}
      </ul>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-2"><strong className="font-medium text-ink">Use it when:</strong> <Rich x={b.use} /></p>
      <p className="mt-3 flex flex-wrap gap-2">
        <Link href={"/components/" + e.slug} className="btn-line">Open the {coded ? "code and Figma" : "Figma component"}</Link>
        {s && <Link href={"/systems/" + s.slug} className="btn-line">More from {s.name}</Link>}
      </p>
    </section>
  );
}

/** A system's real dashboard screen, linked to its page. */
function Shot({ slug, name, caption, className = "" }: { slug: string; name: string; caption?: string; className?: string }) {
  const f = fitFor(slug);
  if (!f) return null;
  return (
    <figure className={className}>
      <Link href={"/systems/" + slug} className="block overflow-hidden rounded-[8px] border border-hair bg-tile transition-opacity hover:opacity-95">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={midSrc(slug)} width={1200} height={Math.round((1200 * f.h) / f.w)} alt={`${name} dashboard UI kit: ${shotAlt(name, f)}`} loading="lazy" decoding="async" className="block h-auto w-full" />
      </Link>
      <figcaption className="mt-2 text-[12px] text-mute">{caption ? <Rich x={caption} /> : <>{name} {f.screen} screen, from the {name} Figma file and React code.</>}</figcaption>
    </figure>
  );
}

function Systems({ b }: { b: Extract<Block, { t: "systems" }> }) {
  const list = b.slugs.map((x) => getSystem(x)).filter((x): x is NonNullable<typeof x> => !!x);
  if (!list.length) return null;
  return (
    <figure className="not-prose mt-6">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s) => {
          const f = fitFor(s.slug);
          return (
            <li key={s.slug} className="min-w-0">
              <Link href={"/systems/" + s.slug} className="card group block h-full overflow-hidden transition-colors hover:bg-tile">
                <div className="relative aspect-[16/10] overflow-hidden border-b border-hair bg-tile">
                  {f ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={cardSrc(s.slug)} width={CARD.w} height={CARD.h} alt={`${s.name} dashboard UI kit: ${shotAlt(s.name, f)}`} loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                  ) : (
                    <span className="absolute inset-0" style={{ background: s.accent + "14" }} aria-hidden="true" />
                  )}
                </div>
                <div className="p-3.5">
                  <div className="flex items-center gap-2">
                    <span className="size-3 shrink-0 rounded-[3px]" style={{ background: s.accent }} aria-hidden="true" />
                    <span className="text-[14px] font-medium">{s.name}</span>
                    <span className="ml-auto text-[12px] text-mute">{s.tier === "free" ? "Free" : "Pro"}</span>
                  </div>
                  {f && <p className="mt-1 text-[13px] leading-snug text-ink-2">{f.goodFor}</p>}
                  <p className="mt-1 text-[12px] tabular-nums text-mute">{fmt(stat("figma:" + s.slug) ?? 0)} components, {fmt(stat("code:" + s.slug) ?? 0)} in React</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {b.caption && <figcaption className="mt-2 text-[12px] text-mute"><Rich x={b.caption} /></figcaption>}
    </figure>
  );
}

export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        const basic = basicBlock(b, i);
        if (basic !== undefined) return basic;
        switch (b.t) {
          case "components": {
            const list = b.slugs.map((s) => bySlug.get(s)).filter((e): e is NonNullable<typeof e> => !!e);
            if (!list.length) return null;
            return (
              <figure key={i} className="mt-6">
                <div className="grid grid-cols-1 gap-x-3 gap-y-5 sm:grid-cols-2">{list.map((e) => <ItemCard key={e.slug} item={e} />)}</div>
                {b.caption && <figcaption className="mt-2 text-[12px] text-mute"><Rich x={b.caption} /></figcaption>}
              </figure>
            );
          }
          case "pack":
            return <Pack key={i} b={b} />;
          case "shot": {
            const sys = getSystem(b.system);
            return sys ? <Shot key={i} slug={sys.slug} name={sys.name} caption={b.caption} className="not-prose mt-6" /> : null;
          }
          case "systems":
            return <Systems key={i} b={b} />;
          case "pick":
            return <Pick key={i} b={b} />;
          case "cta":
            return (
              <aside key={i} className="mt-8 flex flex-col gap-3 rounded-[8px] bg-ink p-5 text-white sm:flex-row sm:items-center">
                <div className="flex-1">
                  <p className="text-[15px] font-medium">{b.h ?? "Build your dashboard from a finished system"}</p>
                  <p className="mt-1 text-[13px] leading-snug text-white/65">{b.x ?? "Browse the library free, copy five components without an account, or connect your AI agent through MCP."}</p>
                </div>
                <Link href={b.href ?? "/"} className="btn-line shrink-0 !bg-white">{b.label ?? "Browse components"}</Link>
              </aside>
            );
        }
      })}
    </>
  );
}
