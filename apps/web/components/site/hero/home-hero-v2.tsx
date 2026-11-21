import Link from "next/link";
import { DEFAULT_SETTINGS } from "@/lib/settings";
import { ed } from "@/lib/content/edit";
import { StreakIngot } from "./streak-ingot";
import { HeroDealButton } from "./hero-deal-button";
import { ClientLogo } from "../client-logo";
import { CLIENTS } from "../connect-agent-config";

/**
 * Home hero from the owner's Figma frame "Hero · 2 · Ingot of streaks" (UwaYzhrLo0wwH61PauTGSw, 18:12432):
 * centred copy over warm paper with grain and an animated streak ingot rising from the bottom edge.
 */
export function HomeHeroV2() {
  return (
    <section aria-labelledby="home-title" className="hero-paper relative isolate -mx-4 -mt-4 overflow-hidden sm:-mx-6 lg:-mt-5">
      <StreakIngot className="-z-10" />

      <div className="mx-auto flex min-h-[500px] max-w-[783px] flex-col items-center px-4 pb-[200px] pt-[88px] text-center sm:min-h-[560px] sm:pb-[220px] lg:min-h-[600px] lg:pt-[112px]">
        {/* MCP is what sets Ingot apart from other UI libraries: the eyebrow sends people to connect their agent */}
        <Link href="/mcp" className="hero-eyebrow">
          <span {...ed("home.hero.eyebrow")}>Connect your AI agent</span>
          <span className="hero-eyebrow-logos">
            {CLIENTS.map((c) => (
              <span key={c.id} className="hero-eyebrow-logo" title={c.name}>
                <ClientLogo id={c.id} size={13} />
              </span>
            ))}
          </span>
        </Link>

        <h1 id="home-title" className="hero-title mt-3" {...ed("home.hero.title")}>
          Your design should look like enterprise products
        </h1>
        <p className="mt-5 max-w-[608px] text-pretty text-[16px] leading-[1.5] text-black/[.66] sm:text-[18px]" {...ed("home.hero.sub")}>
          Pick one of 9 design systems, then copy the React code, paste the Figma layers, or let your AI agent build the screens.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5">
          <Link href="/sign-up" className="hero-btn hero-btn-ink" {...ed("home.hero.cta")}>
            Start for free
          </Link>
          <HeroDealButton fallbackPrice={DEFAULT_SETTINGS.prices.lifetimeDeal} />
        </div>
      </div>
    </section>
  );
}
