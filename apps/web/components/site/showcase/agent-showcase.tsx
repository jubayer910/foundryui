import { systems } from "@/lib/catalog";
import { SHOWCASE } from "@/components/showcase/data";
import { ShowcaseSwitcher, type SwitcherSystem } from "./showcase-switcher";

/** Home: "what you get after connecting the MCP server", one real dashboard per system.
 *  Server part: only names and accents go to the client; the dashboards load lazily below the fold. */
export function AgentShowcase() {
  const list: SwitcherSystem[] = SHOWCASE.map((s) => {
    const m = systems.find((x) => x.slug === s.system);
    return { ...s, name: m?.name ?? s.system, accent: m?.accent ?? "#0b0b0b" };
  });
  return (
    <section aria-labelledby="agent-showcase-title" className="mt-16">
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h2 id="agent-showcase-title" className="page-title">What your agent builds with Ingot UI</h2>
        <p className="page-sub">Real dashboards made from our components. Connect the MCP server, describe the screen, get this.</p>
      </div>
      <ShowcaseSwitcher systems={list} />
    </section>
  );
}
