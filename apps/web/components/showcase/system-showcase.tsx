import Link from "next/link";
import { showcaseFor } from "./data";
import { BrowserFrame } from "./browser-frame";
import { ScreenPreview } from "./screen-preview";
import { fitFor, midSrc, shotAlt, shotSrc } from "@/app/systems/fit";
import { CopyPrompt } from "@/app/systems/copy-prompt";

/** System page: the system's full dashboard screen(s), sharp, then the prompt a founder gives their agent to build one.
 *  Coded screens (Loopo, Veriq) render live from React; the others show a 2x Figma export from public/systems. */
export function SystemShowcase({ system, name }: { system: string; name: string }) {
  const entry = showcaseFor(system);
  if (!entry) return null;
  const fit = fitFor(system);
  return (
    <>
      <section aria-labelledby="system-showcase-title" className="mb-10">
        <h2 id="system-showcase-title" className="text-[13px] font-medium">What you get with {name}</h2>
        <p className="mt-1 text-[13px] text-mute">Full screens from the {name} product, made from the components below. Your agent builds screens like these through MCP.</p>
        <div className={"mt-3 grid gap-4" + (entry.screens.length > 1 ? " xl:grid-cols-2" : "")}>
          {entry.screens.map((screen, i) => {
            const address = "app.yourproduct.com/" + screen.slug.split("-").slice(1).join("-");
            // Image screens: the sharp 2x export (the Templates thumbnail is only 960 px wide).
            if (screen.kind === "image" && fit) {
              return (
                <figure key={screen.slug} className="min-w-0">
                  <BrowserFrame address={address}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={shotSrc(system)}
                      srcSet={`${midSrc(system)} 1200w, ${shotSrc(system)} ${fit.w}w`}
                      sizes="(min-width: 1440px) 1060px, (min-width: 1024px) calc(100vw - 600px), calc(100vw - 32px)"
                      width={fit.w}
                      height={fit.h}
                      alt={shotAlt(name, fit)}
                      loading={i === 0 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : undefined}
                      decoding="async"
                      className="block h-auto w-full bg-tile"
                    />
                  </BrowserFrame>
                  <figcaption className="mt-2 text-[12px] text-mute">{screen.title} screen, exported from the {name} Figma file at 2x.</figcaption>
                </figure>
              );
            }
            const label = i === 0 && fit ? shotAlt(name, fit) : `${name} ${screen.title} dashboard screen, rendered from its React code.`;
            return (
              <figure key={screen.slug} className="min-w-0">
                <BrowserFrame address={address}>
                  <div role="img" aria-label={label}>
                    <ScreenPreview screen={screen} eager={i === 0} />
                  </div>
                </BrowserFrame>
                <figcaption className="mt-2 text-[12px] text-mute">
                  {screen.title} screen.{" "}
                  {screen.kind === "code" && screen.qa ? `Live React code, ${screen.qa.perceptual}% match to the Figma screen.` : "Preview from the Figma screen; code in visual QA."}
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="system-agent-title" className="mb-10">
        <h2 id="system-agent-title" className="text-[13px] font-medium">Build it with your agent</h2>
        <p className="mt-1 text-[13px] text-mute">Connect Ingot UI to Claude Code, Cursor or VS Code, then paste this. Your agent builds the {entry.screens[0].title} screen above from real {name} components and tokens.</p>
        <div className="card mt-3 overflow-hidden">
          <div className="flex items-center gap-2 border-b border-hair px-3 py-1.5">
            <span className="text-[12px] text-mute">Prompt</span>
            <span className="ml-auto" />
            <CopyPrompt text={entry.prompt} />
          </div>
          <p className="whitespace-pre-wrap p-3 font-fu-mono text-[12px] leading-relaxed">{entry.prompt}</p>
          <div className="border-t border-hair px-3 py-2.5">
            <p className="text-[12px] text-mute">Tools your agent calls, in order</p>
            <ol className="mt-1.5 flex flex-wrap gap-1.5" aria-label="MCP tools in order">
              {entry.tools.map((t, k) => (
                <li key={t} className="rounded-full bg-chip px-2 py-0.5 font-fu-mono text-[11px]">
                  <span className="sr-only">Step {k + 1}: </span>
                  {t}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="mt-2 text-[12px] text-mute">
          Not connected yet? <Link href="/mcp" className="text-ink underline underline-offset-2">Connect your agent</Link>.
        </p>
      </section>
    </>
  );
}
