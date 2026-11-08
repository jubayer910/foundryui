import type { Metadata } from "next";
import { Icon } from "@/registry/components/icons";

export const metadata: Metadata = { title: "Changelog" };

const LOG = [
  { date: "Nov 09, 2026", title: "Icon library and a new look", body: ["Foundry Icons: 7,165 icons in six styles (Stroke, Sharp, Solid, Duotone, Twotone, Bulk) on one 24px grid", "Icons page: search, 41 categories, stroke control, copy SVG or JSX, download", "foundryui-icons package with a tree-shakeable React entry", "MCP search_icons now searches the whole library and returns JSX and SVG", "New site design: paper, ink and hairlines, with a gallery-style library browser"] },
  { date: "Nov 08, 2026", title: "Foundry UI preview", body: ["Loopo design system live: tokens, 30 components incl. 7 charts", "Foundry Icons: first 30 original icons (Line style in code; Line, Fill, Duo in Figma)", "MCP server with 14 tools, CLI and shadcn-compatible registry", "Free accounts, API keys and the 5-action guest limit"] },
];

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pt-12 sm:px-6">
      <h1 className="display text-[40px] sm:text-[52px] text-ink">Changelog</h1>
      {LOG.map((e) => (
        <section key={e.date} className="mt-8 rounded-[14px] border border-hair bg-fu-surface p-6">
          <p className="font-fu-mono text-xs text-fu-faint">{e.date}</p>
          <h2 className="mt-1 text-base font-medium text-fu-ink">{e.title}</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm text-fu-muted">
            {e.body.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Icon name="plus" size={16} className="mt-0.5 shrink-0 text-fu-positive-text" />
                {b}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
