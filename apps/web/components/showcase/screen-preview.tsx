"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { Geist } from "next/font/google";
import type { ShowcaseScreen } from "./data";

// The generated screens use Geist (the systems' typeface); the site itself runs on Inter.
const geist = Geist({ subsets: ["latin"], variable: "--font-showcase-geist", preload: false, display: "swap" });

// One chunk per screen, fetched only when its preview comes near the viewport.
const LOADERS: Record<string, () => Promise<{ default: ComponentType }>> = {
  "loopo-analytics": () => import("./loopo-analytics"),
  "loopo-overview": () => import("./loopo-overview"),
  "veriq-secrets": () => import("./veriq-secrets"),
  "veriq-team-access": () => import("./veriq-team-access"),
  "mailpulse-analytics": () => import("./mailpulse-analytics"),
  "mailpulse-campaigns": () => import("./mailpulse-campaigns"),
  "auton-agents": () => import("./auton-agents"),
  "axon-analytics": () => import("./axon-analytics"),
  "vantage-home": () => import("./vantage-home"),
  "vantage-customers": () => import("./vantage-customers"),
};
const cache = new Map<string, ComponentType>();

/** A full dashboard at its native size (e.g. 1440 px wide), scaled down to the width it gets.
 *  Fixed aspect ratio, so nothing moves when the screen arrives. Decorative: hidden from assistive tech. */
export function ScreenPreview({ screen, eager = false }: { screen: ShowcaseScreen; eager?: boolean }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [near, setNear] = useState(eager);
  const [Screen, setScreen] = useState<ComponentType | null>(() => cache.get(screen.slug) ?? null);

  // scale = available width / native width
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / screen.w));
    ro.observe(el);
    return () => ro.disconnect();
  }, [screen.w]);

  // load the code only when the preview is about to be seen
  useEffect(() => {
    if (near) return;
    const el = box.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setNear(true), { rootMargin: "600px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [near]);

  useEffect(() => {
    if (screen.kind !== "code" || !near) return;
    const hit = cache.get(screen.slug);
    if (hit) return setScreen(() => hit);
    setScreen(null);
    let live = true;
    LOADERS[screen.slug]?.().then((m) => {
      cache.set(screen.slug, m.default);
      if (live) setScreen(() => m.default);
    });
    return () => {
      live = false;
    };
  }, [screen.slug, screen.kind, near]);

  return (
    <div ref={box} className="relative w-full overflow-hidden bg-tile" style={{ aspectRatio: `${screen.w} / ${screen.h}` }} aria-hidden="true" inert>
      {screen.kind === "image" && screen.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={screen.src} alt="" loading={eager ? "eager" : "lazy"} decoding="async" className="absolute inset-0 size-full object-cover object-top" />
      ) : (
        Screen &&
        scale > 0 && (
          <div
            data-system={screen.system}
            className={geist.variable + " absolute left-0 top-0 origin-top-left"}
            style={{ width: screen.w, height: screen.h, transform: `scale(${scale})` }}
          >
            <Screen />
          </div>
        )
      )}
    </div>
  );
}
