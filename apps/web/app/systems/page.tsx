import type { Metadata } from "next";
import Link from "next/link";
import { items, systems } from "@/lib/catalog";
import { figmaCount, FIGMA_TOTAL } from "@/lib/figma-library";
import { PageHead } from "@/components/site/page-head";

export const metadata: Metadata = { title: "Design systems", description: "Six complete design systems drawn from real dashboards: tokens, components, charts and screens that belong together." };

export default function SystemsPage() {
  return (
    <div className="max-w-[1400px]">
      <PageHead title="Design systems" sub="Pick one look and build the whole product in it." />
      <p className="mt-3 max-w-2xl text-[13px] leading-snug text-mute">
        Each system comes from a real dashboard, so its tokens, components and screens already work together. {FIGMA_TOTAL.toLocaleString("en-US")} components are in the Figma libraries today; code arrives system by system, starting with Loopo.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {systems.map((s) => {
          const live = s.status === "live";
          return (
            <Link key={s.slug} href={"/systems/" + s.slug} className="card group overflow-hidden transition-colors hover:bg-tile">
              <div className="flex h-36 items-end gap-1.5 p-4" style={{ background: s.accent + "14" }}>
                {[38, 62, 48, 80, 56, 92, 70, 84].map((h, i) => (
                  <span key={i} className="flex-1 rounded-t-[4px]" style={{ height: h + "%", background: i === 5 ? s.accent : s.accent + "4d" }} />
                ))}
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] font-medium">{s.name}</p>
                  <span className={"rounded-full px-2 py-0.5 text-[11px] " + (live ? "bg-ink text-white" : "bg-chip text-mute")}>{live ? "Live" : "Figma ready, code soon"}</span>
                  <span className="ml-auto text-[12px] text-mute">{s.tier === "free" ? "Free" : "Pro"}</span>
                </div>
                <p className="mt-1 text-[13px] text-mute">{s.tagline}</p>
                <dl className="mt-3 grid grid-cols-3 gap-2 border-t border-hair pt-3 text-[12px]">
                  <div>
                    <dt className="text-mute">In Figma</dt>
                    <dd className="font-medium tabular-nums">{figmaCount(s.slug)}</dd>
                  </div>
                  <div>
                    <dt className="text-mute">In code</dt>
                    <dd className="font-medium tabular-nums">{live ? items.length : 0}</dd>
                  </div>
                  <div>
                    <dt className="text-mute">Type</dt>
                    <dd className="font-medium">{s.font}</dd>
                  </div>
                </dl>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
