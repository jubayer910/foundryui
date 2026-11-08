import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { SITE_URL, categories, getItem, items, resolveFiles } from "@/lib/catalog";
import { getSessionUser } from "@/lib/auth";
import { ComponentWorkbench } from "@/components/site/component-workbench";
import { ItemCard } from "@/components/site/item-card";

export function generateStaticParams() {
  return items.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/components/[slug]">): Promise<Metadata> {
  const it = getItem((await params).slug);
  return it ? { title: it.name, description: it.description } : {};
}

async function Workbench({ slug, name, files, installCmd }: { slug: string; name: string; files: { path: string; content: string }[]; installCmd: string }) {
  const user = await getSessionUser().catch(() => null);
  return <ComponentWorkbench slug={slug} name={name} files={files} installCmd={installCmd} signedIn={!!user} />;
}

export default async function ComponentPage({ params }: PageProps<"/components/[slug]">) {
  const { slug } = await params;
  const it = getItem(slug);
  if (!it) notFound();
  const cat = categories.find((c) => c.slug === it.category);
  const files = it.tier === "free" ? resolveFiles(slug).map(({ path, content }) => ({ path, content })) : [{ path: it.files[0], content: "// Pro component — upgrade to view the source." }];
  const installCmd = "npx foundry-ui add " + slug;
  const related = items.filter((i) => i.category === it.category && i.slug !== slug).slice(0, 3);
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
      <nav className="mb-4 flex items-center gap-1.5 text-[13px] text-fu-muted" aria-label="Breadcrumb">
        <Link href="/components" className="hover:text-fu-ink">Components</Link>
        <span aria-hidden="true">/</span>
        <span>{cat?.name}</span>
      </nav>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-medium tracking-[-0.03em] text-fu-ink">{it.name}</h1>
          <p className="mt-2 text-sm leading-relaxed text-fu-muted">{it.description}</p>
        </div>
        <div className="flex flex-wrap gap-1.5 text-[11px] font-medium">
          <span className="rounded-full bg-fu-surface px-2.5 py-1 text-fu-body ring-1 ring-fu-line">System: Loopo</span>
          <span className={"rounded-full px-2.5 py-1 " + (it.tier === "free" ? "bg-fu-positive-soft text-fu-positive" : "bg-fu-accent-soft text-fu-accent")}>{it.tier === "free" ? "Free" : "Pro"}</span>
        </div>
      </div>

      <Suspense fallback={<div className="h-96 rounded-fu-xl border border-fu-line bg-fu-surface" />}>
        <Workbench slug={slug} name={it.name} files={files} installCmd={installCmd} />
      </Suspense>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        <section className="rounded-fu-lg border border-fu-line bg-fu-surface p-5 lg:col-span-2">
          <h2 className="text-sm font-medium text-fu-ink">Use it with your AI agent</h2>
          <p className="mt-1 text-[13px] leading-relaxed text-fu-muted">With the Foundry MCP connected, paste this prompt into Claude Code, Cursor or Codex:</p>
          <pre className="mt-3 whitespace-pre-wrap rounded-fu-sm bg-fu-sunken p-3 font-fu-mono text-xs text-fu-body">
            {"Use the Foundry UI MCP to add the \"" + slug + "\" component (Loopo system) to this project, install its dependencies and render it on the dashboard page."}
          </pre>
          <p className="mt-3 text-[13px] text-fu-muted">
            Or with the shadcn CLI: <code className="font-fu-mono text-xs text-fu-body">{"npx shadcn add " + SITE_URL + "/r/" + slug + ".json"}</code>
          </p>
        </section>
        <section className="rounded-fu-lg border border-fu-line bg-fu-surface p-5">
          <h2 className="text-sm font-medium text-fu-ink">Details</h2>
          <dl className="mt-3 flex flex-col gap-2 text-[13px]">
            <div className="flex justify-between gap-4"><dt className="text-fu-muted">Files</dt><dd className="text-right text-fu-ink">{files.length}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-fu-muted">npm</dt><dd className="text-right text-fu-ink">{it.dependencies.join(", ") || "none"}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-fu-muted">Uses</dt><dd className="text-right text-fu-ink">{it.registryDependencies.join(", ") || "none"}</dd></div>
            <div className="flex justify-between gap-4"><dt className="text-fu-muted">Stack</dt><dd className="text-right text-fu-ink">React 19 · Tailwind v4</dd></div>
          </dl>
        </section>
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-4 text-lg font-medium tracking-[-0.02em] text-fu-ink">More {cat?.name.toLowerCase()}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ItemCard key={r.slug} item={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
