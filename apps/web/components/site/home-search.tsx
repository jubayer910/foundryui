"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/registry/components/icons";

type Scope = "components" | "icons" | "systems";
const TRY = ["kpi card", "invoice", "data table", "donut", "upload", "empty state", "calendar"];

export function HomeSearch({ counts }: { counts: Record<Scope, number> }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [scope, setScope] = useState<Scope>("components");
  const go = (query = q, s = scope) => router.push("/" + s + (query.trim() && s !== "systems" ? "?q=" + encodeURIComponent(query.trim()) : ""));

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          go();
        }}
        className="flex flex-col gap-2 rounded-[14px] bg-card p-2 text-left shadow-[0_0_0_1px_var(--color-hair-2),0_12px_32px_-16px_rgb(14_16_20/0.18)] sm:flex-row sm:items-center"
      >
        <label className="flex h-10 flex-1 items-center gap-2.5 px-2.5">
          <Icon name="search" size={17} className="text-mute" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the library, e.g. revenue card" className="w-full bg-transparent text-[15px] outline-none placeholder:text-faint" aria-label="Search the library" />
        </label>
        <div className="flex h-10 items-center gap-0.5 rounded-[10px] bg-paper p-1 shadow-[inset_0_0_0_1px_var(--color-hair)]">
          {(["components", "icons", "systems"] as const).map((s) => (
            <button key={s} type="button" onClick={() => setScope(s)} className={"h-8 rounded-[8px] px-2.5 text-[12.5px] capitalize " + (scope === s ? "bg-card text-ink shadow-[0_0_0_1px_var(--color-hair-2)]" : "text-mute hover:text-ink")}>
              {s}
              <span className="ml-1.5 font-fu-mono text-[10px] text-faint">{counts[s].toLocaleString("en-US")}</span>
            </button>
          ))}
        </div>
      </form>
      <p className="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-[12px] text-mute">
        Try
        {TRY.map((t) => (
          <button key={t} onClick={() => go(t, t === "invoice" || t === "upload" || t === "calendar" ? "icons" : "components")} className="h-6 rounded-full bg-card px-2.5 text-ink-2 shadow-[inset_0_0_0_1px_var(--color-hair-2)] hover:text-ink">
            {t}
          </button>
        ))}
      </p>
    </div>
  );
}
