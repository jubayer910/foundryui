import { showcaseFor } from "./data";
import { BrowserFrame } from "./browser-frame";
import { ScreenPreview } from "./screen-preview";

/** System page: the system's full dashboard screen(s), as built from its components. */
export function SystemShowcase({ system, name }: { system: string; name: string }) {
  const entry = showcaseFor(system);
  if (!entry) return null;
  return (
    <section aria-labelledby="system-showcase-title" className="mb-10">
      <h2 id="system-showcase-title" className="text-[13px] font-medium">Built with {name}</h2>
      <p className="mt-1 text-[13px] text-mute">Full screens from the {name} product, made from the components below. Your agent builds screens like these through MCP.</p>
      <div className={"mt-3 grid gap-4" + (entry.screens.length > 1 ? " xl:grid-cols-2" : "")}>
        {entry.screens.map((screen, i) => (
          <figure key={screen.slug} className="min-w-0">
            <BrowserFrame address={"app.yourproduct.com/" + screen.slug.split("-").slice(1).join("-")}>
              <ScreenPreview screen={screen} eager={i === 0} />
            </BrowserFrame>
            <figcaption className="mt-2 text-[12px] text-mute">
              {screen.title} screen.{" "}
              {screen.kind === "code" && screen.qa
                ? `React code, ${screen.qa.perceptual}% match to the Figma screen.`
                : "Preview from the Figma screen; code in visual QA."}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
