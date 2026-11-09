import type { Metadata } from "next";
import { Icon } from "@/registry/components/icons";
import { PageHead } from "@/components/site/page-head";

export const metadata: Metadata = { title: "Changelog" };

const LOG = [
  { date: "Nov 10, 2026", title: "A library-first site and 1,852 Figma components", body: ["Figma libraries for all six systems: 1,852 components harvested from the product screens and checked", "New site: the home page is the library, with quick copy and save on every card", "Component pages with a facts panel, keyboard shortcuts (C, F, S) and a width switcher", "Saved and recent, a visible free-copies meter, and a plan comparison on Pricing"] },
  { date: "Nov 09, 2026", title: "Icon library and a new look", body: ["Foundry Icons: 7,165 icons in six styles (Stroke, Sharp, Solid, Duotone, Twotone, Bulk) on one 24px grid", "Icons page: search, 41 categories, stroke control, copy SVG or JSX, download", "foundryui-icons package with a tree-shakeable React entry", "MCP search_icons now searches the whole library and returns JSX and SVG", "Library browser redesign"] },
  { date: "Nov 08, 2026", title: "Foundry UI preview", body: ["Loopo design system live: tokens, 30 components incl. 7 charts", "Foundry Icons: first 30 original icons (Line style in code; Line, Fill, Duo in Figma)", "MCP server with 14 tools, CLI and shadcn-compatible registry", "Free accounts, API keys and the 5-action guest limit"] },
];

export default function ChangelogPage() {
  return (
    <div className="max-w-3xl">
      <PageHead title="Changelog" sub="What shipped, newest first." />
      {LOG.map((e) => (
        <section key={e.date} className="mt-6 grid gap-2 border-t border-hair pt-5 sm:grid-cols-[140px_1fr]">
          <p className="text-[13px] text-mute">{e.date}</p>
          <div>
          <h2 className="text-[14px] font-medium">{e.title}</h2>
          <ul className="mt-2 flex flex-col gap-1.5 text-[13px] text-mute">
            {e.body.map((b) => (
              <li key={b} className="flex items-start gap-2">
                <Icon name="plus" size={14} className="mt-0.5 shrink-0 text-ink" />
                {b}
              </li>
            ))}
          </ul>
          </div>
        </section>
      ))}
    </div>
  );
}
