import Link from "next/link";
import { Icon } from "@/registry/components/icons";

const COLS = [
  { h: "Library", l: [["Components", "/components"], ["Charts", "/charts"], ["Icons", "/icons"], ["Design systems", "/systems"]] },
  { h: "Developers", l: [["MCP server", "/mcp"], ["CLI", "/mcp#cli"], ["Docs", "/docs"], ["Registry", "/r/index.json"]] },
  { h: "Product", l: [["Pricing", "/pricing"], ["Changelog", "/changelog"], ["License", "/docs#license"], ["Icon licences", "/icons/LICENSES.md"]] },
];

export function SiteFooter() {
  return (
    <footer className="mt-28 border-t border-hair">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <p className="flex items-center gap-2 text-[16px] font-semibold tracking-[-0.03em]">
            <Icon name="layers" size={20} /> foundry
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-mute">Design systems, components, charts and icons, in Figma and code, with an MCP server so your agent builds with them.</p>
        </div>
        {COLS.map((c) => (
          <div key={c.h}>
            <p className="eyebrow">{c.h}</p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {c.l.map(([t, h]) => (
                <li key={h}>
                  <Link href={h} className="text-[13px] text-ink-2 hover:text-ink">{t}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-hair">
        <p className="mx-auto max-w-[1180px] px-4 py-5 font-fu-mono text-[11px] text-faint sm:px-6">© 2026 Foundry UI · Light mode · Made for founders</p>
      </div>
    </footer>
  );
}
