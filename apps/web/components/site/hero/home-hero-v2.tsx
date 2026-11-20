import Link from "next/link";
import { DEFAULT_SETTINGS } from "@/lib/settings";
import { ed } from "@/lib/content/edit";
import { StreakIngot } from "./streak-ingot";
import { HeroDealButton } from "./hero-deal-button";

/** Original marks, used only to say what the kit works with. */
const ReactMark = () => (
  <svg width="13.2" height="11.8" viewBox="-11.5 -10.23 23 20.46" aria-hidden="true">
    <circle r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);
const FigmaMark = () => (
  <svg width="8.1" height="12.3" viewBox="0 0 38 57" aria-hidden="true">
    <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
    <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
    <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
    <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
    <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
  </svg>
);

/**
 * Home hero from the owner's Figma frame "Hero · 2 · Ingot of streaks" (UwaYzhrLo0wwH61PauTGSw, 18:12432):
 * centred copy over warm paper with grain and an animated streak ingot rising from the bottom edge.
 */
export function HomeHeroV2() {
  return (
    <section aria-labelledby="home-title" className="hero-paper relative isolate -mx-4 -mt-4 overflow-hidden sm:-mx-6 lg:-mt-5">
      <StreakIngot className="-z-10" />

      <div className="mx-auto flex min-h-[500px] max-w-[783px] flex-col items-center px-4 pb-[200px] pt-[88px] text-center sm:min-h-[560px] sm:pb-[220px] lg:min-h-[600px] lg:pt-[112px]">
        <p className="hero-eyebrow">
          <span {...ed("home.hero.eyebrow")}>Dashboard UI kit for React and Figma</span>
          <span className="hero-eyebrow-logos">
            <span className="hero-eyebrow-logo" title="React"><ReactMark /></span>
            <span className="hero-eyebrow-logo" title="Figma"><FigmaMark /></span>
          </span>
        </p>

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
