"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * First-party page-view beacon. Sends { path, ref (referrer host), utm, l } to /api/track on load and on
 * client-side route changes. No cookies, no storage, no identifiers. Skips bots, admin/API paths and
 * visitors who ask not to be tracked (Do Not Track / Global Privacy Control).
 */
export function TrackBeacon() {
  const path = usePathname();
  const last = useRef<string | null>(null);
  const first = useRef(true);

  useEffect(() => {
    if (!path || path === last.current) return;
    last.current = path;
    const isFirst = first.current;
    first.current = false;
    if (/^\/(admin|api)(\/|$)/.test(path)) return;
    const nav = navigator as Navigator & { globalPrivacyControl?: boolean; msDoNotTrack?: string };
    const w = window as Window & { doNotTrack?: string };
    if (nav.webdriver || nav.globalPrivacyControl || nav.doNotTrack === "1" || w.doNotTrack === "1" || nav.msDoNotTrack === "1") return;

    // The external referrer only counts for the landing page; in-app navigation is not a new source.
    let ref = "";
    if (isFirst && document.referrer) {
      try {
        const h = new URL(document.referrer).hostname;
        if (h !== location.hostname) ref = h;
      } catch {}
    }
    const utm = isFirst ? (new URLSearchParams(location.search).get("utm_source") ?? "").slice(0, 64) : "";
    // l = 1 marks the landing page view, the only one that carries a traffic source.
    const body = JSON.stringify({ path, ref, utm, l: isFirst ? 1 : 0 });
    try {
      if (!navigator.sendBeacon?.("/api/track", new Blob([body], { type: "application/json" }))) {
        fetch("/api/track", { method: "POST", body, keepalive: true, headers: { "content-type": "application/json" } }).catch(() => {});
      }
    } catch {}
  }, [path]);

  return null;
}
