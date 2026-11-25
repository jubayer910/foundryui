"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { REF_COOKIE, REF_DAYS, cleanRef } from "@/lib/ref";

/**
 * First-party analytics beacon, cookieless and without identifiers. It sends to /api/track:
 *   - a view on load and on client-side route changes: { path, ref, utm, med, cmp, l, from, v2 }
 *   - engagement ({ t: "e" }) when a page is left or hidden: engaged seconds, deepest scroll, whether it was the
 *     last page of the visit, and clicks on buttons and links (their label and target, nothing typed).
 * A "visit" is this tab's session (sessionStorage holds only a page count and the last path, never sent as an id).
 * The one cookie: a visit through a referral link (?ref=name) keeps that name for 30 days so a sign-up can be
 * credited to the link (lib/ref.ts). Skips bots, admin/API paths, the account area for clicks, and visitors who
 * ask not to be tracked (Do Not Track / Global Privacy Control).
 */

const VISIT = "ig_visit";
type Visit = { n: number; last: string };
type PageItem = { path: string; secs: number; scroll: number; exit?: 1; cont?: 1 };
type Click = { path: string; kind: "button" | "link" | "out"; label: string; target: string };

function send(body: unknown) {
  const s = JSON.stringify(body);
  try {
    if (!navigator.sendBeacon?.("/api/track", new Blob([s], { type: "application/json" }))) {
      fetch("/api/track", { method: "POST", body: s, keepalive: true, headers: { "content-type": "application/json" } }).catch(() => {});
    }
  } catch {}
}

function readVisit(): Visit | null | undefined {
  try {
    const v = sessionStorage.getItem(VISIT);
    return v ? (JSON.parse(v) as Visit) : null;
  } catch {
    return undefined; // storage blocked
  }
}
function writeVisit(v: Visit) {
  try {
    sessionStorage.setItem(VISIT, JSON.stringify(v));
  } catch {}
}

const optedOut = () => {
  const nav = navigator as Navigator & { globalPrivacyControl?: boolean; msDoNotTrack?: string };
  const w = window as Window & { doNotTrack?: string };
  return !!(nav.webdriver || nav.globalPrivacyControl || nav.doNotTrack === "1" || w.doNotTrack === "1" || nav.msDoNotTrack === "1");
};
const skipPath = (p: string) => /^\/(admin|api)(\/|$)/.test(p);
const privatePath = (p: string) => /^\/(account|activate|redeem|gift|reset-password)(\/|$)/.test(p);

function scrollPct() {
  const el = document.documentElement;
  const h = el.scrollHeight;
  const seen = window.scrollY + window.innerHeight;
  return h <= window.innerHeight + 4 ? 100 : Math.min(100, Math.round((seen / h) * 100));
}

function labelOf(el: Element): string {
  const own = el.getAttribute("data-track") || el.getAttribute("aria-label") || (el as HTMLElement).innerText || el.getAttribute("title") || el.querySelector("img")?.getAttribute("alt") || "";
  return own.replace(/\s+/g, " ").trim().slice(0, 48);
}

export function TrackBeacon() {
  const path = usePathname();
  const last = useRef<string | null>(null);
  const first = useRef(true);
  // the page being measured
  const cur = useRef<{ path: string; secs: number; scroll: number; sent: boolean; active: number } | null>(null);
  const clicks = useRef<Click[]>([]);

  // Engagement: one timer, scroll and activity listeners, clicks, and the flush on hide / leave.
  useEffect(() => {
    if (optedOut()) return;
    const touch = () => {
      if (cur.current) cur.current.active = Date.now();
    };
    const onScroll = () => {
      if (!cur.current) return;
      cur.current.active = Date.now();
      cur.current.scroll = Math.max(cur.current.scroll, scrollPct());
    };
    // Engaged time: the tab is visible and the visitor did something in the last 30 seconds.
    const timer = window.setInterval(() => {
      const c = cur.current;
      if (c && document.visibilityState === "visible" && Date.now() - c.active < 30_000) c.secs += 1;
    }, 1000);
    const flush = (exit: boolean) => {
      const c = cur.current;
      const pages: PageItem[] = [];
      if (c && (c.secs >= 1 || exit)) {
        pages.push({ path: c.path, secs: c.secs, scroll: c.scroll, ...(exit ? { exit: 1 as const } : {}), ...(c.sent ? { cont: 1 as const } : {}) });
        c.sent = true;
        c.secs = 0;
      }
      const cl = clicks.current.splice(0, 25);
      if (pages.length || cl.length) send({ t: "e", pages, clicks: cl });
    };
    const onHide = () => document.visibilityState === "hidden" && flush(false);
    const onPageHide = () => flush(true);
    const onClick = (e: MouseEvent) => {
      const p = location.pathname;
      if (skipPath(p) || privatePath(p)) return;
      const t = e.target as Element | null;
      const el = t?.closest?.("a[href], button, [role='button'], [data-track]");
      if (!el || el.closest("[data-no-track]")) return;
      const label = labelOf(el);
      if (!label) return;
      let kind: Click["kind"] = "button";
      let target = "";
      if (el instanceof HTMLAnchorElement) {
        try {
          const u = new URL(el.href, location.href);
          if (!/^https?:$/.test(u.protocol)) return;
          if (u.origin === location.origin) {
            kind = "link";
            target = u.pathname;
          } else {
            kind = "out";
            target = u.hostname;
          }
        } catch {
          return;
        }
      }
      clicks.current.push({ path: p, kind, label, target });
      if (clicks.current.length >= 20) flush(false);
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("pointerdown", touch, { passive: true });
    addEventListener("keydown", touch);
    addEventListener("mousemove", touch, { passive: true });
    addEventListener("pagehide", onPageHide);
    document.addEventListener("visibilitychange", onHide);
    document.addEventListener("click", onClick, true);
    return () => {
      clearInterval(timer);
      removeEventListener("scroll", onScroll);
      removeEventListener("pointerdown", touch);
      removeEventListener("keydown", touch);
      removeEventListener("mousemove", touch);
      removeEventListener("pagehide", onPageHide);
      document.removeEventListener("visibilitychange", onHide);
      document.removeEventListener("click", onClick, true);
    };
  }, []);

  useEffect(() => {
    if (!path || path === last.current) return;
    const prevPath = last.current;
    last.current = path;
    const isFirstLoad = first.current;
    first.current = false;
    if (optedOut()) return;

    // Leaving the previous page inside the site: send its engagement now (not an exit).
    const c = cur.current;
    if (c && (c.secs >= 1 || clicks.current.length)) {
      send({ t: "e", pages: c.secs >= 1 ? [{ path: c.path, secs: c.secs, scroll: c.scroll, ...(c.sent ? { cont: 1 } : {}) }] : [], clicks: clicks.current.splice(0, 25) });
    }
    cur.current = skipPath(path) ? null : { path, secs: 0, scroll: 0, sent: false, active: Date.now() };
    if (skipPath(path)) return;
    requestAnimationFrame(() => {
      if (cur.current?.path === path) cur.current.scroll = scrollPct();
    });

    // A visit is this tab's session: the first page of it is the landing page and carries the source.
    const stored = readVisit();
    const landing = stored === undefined ? isFirstLoad : stored === null;
    const visit: Visit = landing || !stored ? { n: 1, last: path } : { n: stored.n + 1, last: path };
    writeVisit(visit);
    const from = landing ? "" : (prevPath ?? stored?.last ?? "");

    // The external referrer only counts for the landing page; in-app navigation is not a new source.
    let ref = "";
    if (landing && document.referrer) {
      try {
        const h = new URL(document.referrer).hostname;
        if (h !== location.hostname) ref = h;
      } catch {}
    }
    const qs = new URLSearchParams(location.search);
    const refLink = isFirstLoad ? cleanRef(qs.get("ref")) : "";
    if (refLink) document.cookie = `${REF_COOKIE}=${refLink}; Max-Age=${REF_DAYS * 86400}; Path=/; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
    const utm = landing ? refLink || (qs.get("utm_source") ?? "").slice(0, 64) : "";
    const med = landing ? (qs.get("utm_medium") ?? "").slice(0, 40) : "";
    const cmp = landing ? (qs.get("utm_campaign") ?? "").slice(0, 60) : "";
    // l = 1 marks the landing view, the only one that carries a source; v2 = 1 marks a visit's second page.
    send({ path, ref, utm, med, cmp, l: landing ? 1 : 0, from, v2: visit.n === 2 ? 1 : 0 });
  }, [path]);

  return null;
}
