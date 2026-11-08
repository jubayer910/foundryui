import type { Metadata } from "next";
import Link from "next/link";
import { systems } from "@/lib/catalog";

export const metadata: Metadata = { title: "Design systems", description: "Six complete, modern design systems with tokens, components, charts and screens." };

export default function SystemsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6">
      <h1 className="text-3xl font-medium tracking-[-0.03em] text-fu-ink">Design systems</h1>
      <p className="mt-2 max-w-xl text-sm leading-relaxed text-fu-muted">Each system is extracted from a real product dashboard: foundations, components and screens that belong together. Loopo is live and free; the other five are being built now.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {systems.map((s) => (
          <Link key={s.slug} href={"/systems/" + s.slug} className="group overflow-hidden rounded-fu-xl border border-fu-line bg-fu-surface shadow-fu-card transition-shadow hover:shadow-fu-overlay">
            <div className="flex h-40 items-end gap-2 p-5" style={{ background: "linear-gradient(135deg, " + s.accent + "14, " + s.accent + "38)" }}>
              {[38, 62, 48, 80, 56, 92, 70].map((h, i) => (
                <span key={i} className="flex-1 rounded-t-[6px]" style={{ height: h + "%", background: i === 5 ? s.accent : s.accent + "55" }} />
              ))}
            </div>
            <div className="flex items-start justify-between gap-4 p-5">
              <div>
                <p className="text-base font-medium tracking-[-0.01em] text-fu-ink">{s.name}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-fu-muted">{s.description}</p>
                <p className="mt-3 font-fu-mono text-[11px] text-fu-faint">{s.font} · {s.accent}</p>
              </div>
              <div className="flex shrink-0 flex-col items-end gap-1.5">
                <span className={"rounded-full px-2 py-0.5 text-[11px] font-medium " + (s.status === "live" ? "bg-fu-positive-soft text-fu-positive" : "bg-fu-hover text-fu-muted")}>{s.status === "live" ? "Live" : "In progress"}</span>
                <span className="text-[11px] font-medium text-fu-muted">{s.tier === "free" ? "Free" : "Pro"}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
