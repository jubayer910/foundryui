"use client";
import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { SupportWidget } from "./support-widget";
import { AnnouncementBar } from "./announcement-bar";
import { TrackBeacon } from "./track-beacon";
import { CookieConsent } from "./cookie-consent";

// GA4 property id: used to switch GA off when a tab moves into /admin. GA and Clarity themselves are loaded
// by CookieConsent, only after the visitor accepts.
const GA_ID = "G-791MYC76DX";

export const isAdminPath = (p: string | null) => !!p && /^\/admin(\/|$)/.test(p);

/**
 * The public site frame: announcement bar, rail, mobile bar, padded main, support widget, page-view beacon
 * and the cookie consent banner (which loads GA and Clarity after Accept). /admin is a separate backend and renders its children alone. Rail and MobileBar are server
 * components, so they come in as slots.
 */
export function SiteChrome({ rail, mobileBar, children }: { rail: ReactNode; mobileBar: ReactNode; children: ReactNode }) {
  const path = usePathname();
  const admin = isAdminPath(path);
  useEffect(() => {
    // A client-side hop from the site into /admin: GA and Clarity are already running in this tab, so load
    // the backend fresh to leave them behind (and stop GA counting admin views meanwhile).
    if (!admin) return;
    const w = window as unknown as Record<string, unknown>;
    w[`ga-disable-${GA_ID}`] = true;
    if (typeof w.clarity === "function" || typeof w.gtag === "function") window.location.reload();
  }, [admin]);
  if (admin) return <>{children}</>;
  return (
    <>
      <AnnouncementBar />
      <div className="flex min-h-dvh">
        {rail}
        <div className="min-w-0 flex-1">
          {mobileBar}
          <main className="site-main px-4 pb-24 pt-4 sm:px-6 lg:pt-5">{children}</main>
        </div>
      </div>
      <SupportWidget />
      <TrackBeacon />
      <CookieConsent />
    </>
  );
}
