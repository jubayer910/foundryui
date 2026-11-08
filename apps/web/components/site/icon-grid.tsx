"use client";
import { useState } from "react";
import { Icon, iconNames } from "@/registry/components/icons";

export function IconGrid() {
  const [q, setQ] = useState("");
  const [copied, setCopied] = useState<string | null>(null);
  const shown = iconNames.filter((n) => n.includes(q.trim().toLowerCase()));
  async function copy(name: string, el: HTMLButtonElement) {
    const svg = el.querySelector("svg");
    if (!svg) return;
    try {
      await navigator.clipboard.writeText(svg.outerHTML.replace(/ aria-hidden="true"/, ""));
      setCopied(name);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      /* clipboard blocked */
    }
  }
  return (
    <div>
      <label className="mb-5 flex h-10 max-w-sm items-center gap-2 rounded-full border border-fu-line-strong bg-fu-surface px-4 focus-within:border-fu-accent">
        <Icon name="search" size={16} className="text-fu-muted" />
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search icons" className="w-full bg-transparent text-sm outline-none placeholder:text-fu-faint" />
      </label>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-8">
        {shown.map((n) => (
          <button key={n} onClick={(e) => copy(n, e.currentTarget)} className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-fu-lg border border-fu-line bg-fu-surface text-fu-ink transition-colors hover:border-fu-line-strong hover:bg-fu-sunken">
            <Icon name={n} size={26} />
            <span className="px-1 text-center font-fu-mono text-[10px] text-fu-muted">{copied === n ? "Copied SVG" : n}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
