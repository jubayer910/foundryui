"use client";

import Link from "next/link";
import { useState } from "react";
import type { ShowcaseSystem } from "@/components/showcase/data";
import { BrowserFrame } from "@/components/showcase/browser-frame";
import { ScreenPreview } from "@/components/showcase/screen-preview";

export type SwitcherSystem = ShowcaseSystem & { name: string; accent: string };

const address = (title: string) => "app.yourproduct.com/" + title.toLowerCase().replace(/&/g, "").trim().replace(/\s+/g, "-");

export function ShowcaseSwitcher({ systems }: { systems: SwitcherSystem[] }) {
  const [active, setActive] = useState(systems[0].system);
  const entry = systems.find((s) => s.system === active) ?? systems[0];
  const screen = entry.screens[0];

  return (
    <>
      <div role="group" aria-label="Design system" className="-mx-4 mt-3 flex gap-1.5 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        {systems.map((s) => {
          const on = s.system === active;
          return (
            <button
              key={s.system}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(s.system)}
              className="pill shrink-0"
              style={on ? { background: `color-mix(in srgb, ${s.accent} 12%, white)`, boxShadow: `inset 0 0 0 1.5px ${s.accent}`, color: "var(--color-ink)" } : undefined}
            >
              {s.name}
            </button>
          );
        })}
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_300px]">
        <figure className="min-w-0">
          <BrowserFrame address={address(screen.title)}>
            <ScreenPreview key={screen.slug} screen={screen} />
          </BrowserFrame>
          <figcaption className="mt-2 text-[12px] leading-snug text-mute">
            {entry.name} {screen.title} screen at {screen.w} px, scaled to fit.{" "}
            {screen.kind === "code" && screen.qa
              ? `React code generated from the Figma screen, ${screen.qa.perceptual}% match in visual QA.`
              : "Preview from the Figma screen; the coded version is still in visual QA."}
          </figcaption>
        </figure>

        <div className="flex flex-col gap-3">
          <div className="card p-4">
            <h3 className="text-[13px] font-medium">The prompt</h3>
            <p className="mt-2 rounded-[6px] bg-tile p-3 text-[12.5px] leading-relaxed text-ink-2">{entry.prompt}</p>
          </div>
          <div className="card p-4">
            <h3 className="text-[13px] font-medium">Tools it used</h3>
            <ol className="mt-2 flex flex-wrap gap-1.5" aria-label="MCP tools, in order">
              {entry.tools.map((t) => (
                <li key={t} className="rounded-[6px] bg-tile px-2 py-1 font-mono text-[11.5px]">{t}</li>
              ))}
            </ol>
            <p className="mt-3 text-[12px] leading-snug text-mute">Every piece comes from the {entry.name} system: its tokens, components, charts and Ingot icons.</p>
          </div>
          <Link href="/mcp" className="btn-ink w-full">Connect your agent</Link>
        </div>
      </div>
    </>
  );
}
