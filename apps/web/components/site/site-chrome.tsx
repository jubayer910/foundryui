"use client";
import { useEffect, type ReactNode } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { SupportWidget } from "./support-widget";
import { AnnouncementBar } from "./announcement-bar";
import { TrackBeacon } from "./track-beacon";

// Google Analytics 4 (property ingotui.com, account "Ingot UI"). Client-side route changes are
// counted by GA enhanced measurement (browser history events).
const GA_ID = "G-791MYC76DX";
// Microsoft Clarity (project "ingotui"): heatmaps and session recordings; masks sensitive content by default.
const CLARITY_ID = "zdnoi4px8s";

export const isAdminPath = (p: string | null) => !!p && /^\/admin(\/|$)/.test(p);

/**
 * The public site frame: announcement bar, rail, mobile bar, padded main, support widget, page-view beacon,
 * GA and Clarity. /admin is a separate backend and renders its children alone. Rail and MobileBar are server
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
          <main className="px-4 pb-24 pt-4 sm:px-6 lg:pt-5">{children}</main>
        </div>
      </div>
      <SupportWidget />
      <TrackBeacon />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
      <Script id="clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}
      </Script>
    </>
  );
}
