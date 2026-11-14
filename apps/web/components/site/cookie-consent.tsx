"use client";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

/* Cookie consent. Google Analytics and Microsoft Clarity set cookies, so neither loads until the visitor
   accepts. Our own page counter (track-beacon) is cookieless and runs without consent. The choice is kept in
   localStorage; "Cookie settings" on /privacy reopens the banner through the `ingot:cookie-settings` event. */

const KEY = "ingot:consent";
const GA_ID = "G-791MYC76DX";
const CLARITY_ID = "zdnoi4px8s";

type Choice = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __ingotTrackers?: boolean;
  }
}

function read(): Choice | null {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function loadTrackers() {
  if (window.__ingotTrackers) return;
  window.__ingotTrackers = true;
  // Google Analytics 4
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
  const ga = document.createElement("script");
  ga.async = true;
  ga.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(ga);
  // Microsoft Clarity (same queue stub as the official snippet)
  const w = window as unknown as { clarity?: ((...a: unknown[]) => void) & { q?: unknown[] } };
  if (!w.clarity) {
    const stub = ((...a: unknown[]) => {
      (stub.q = stub.q || []).push(a);
    }) as ((...a: unknown[]) => void) & { q?: unknown[] };
    w.clarity = stub;
  }
  const cl = document.createElement("script");
  cl.async = true;
  cl.src = "https://www.clarity.ms/tag/" + CLARITY_ID;
  document.head.appendChild(cl);
}

const CHANGE = "ingot:consent-change";
function subscribe(cb: () => void) {
  window.addEventListener("storage", cb);
  window.addEventListener(CHANGE, cb);
  return () => {
    window.removeEventListener("storage", cb);
    window.removeEventListener(CHANGE, cb);
  };
}

export function CookieConsent() {
  // "server" during SSR and hydration, so the banner never flashes on prerendered pages.
  const choice = useSyncExternalStore(subscribe, () => read() ?? "unset", () => "server");
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    if (choice === "granted") loadTrackers();
  }, [choice]);

  useEffect(() => {
    const reopen = () => setReopened(true);
    window.addEventListener("ingot:cookie-settings", reopen);
    return () => window.removeEventListener("ingot:cookie-settings", reopen);
  }, []);

  const choose = (v: Choice) => {
    const before = read();
    try {
      localStorage.setItem(KEY, v);
    } catch {}
    setReopened(false);
    window.dispatchEvent(new Event(CHANGE));
    // Declining after an earlier accept: reload so the trackers already on this page stop.
    if (v === "denied" && before === "granted") window.location.reload();
  };

  const open = choice === "unset" || (reopened && choice !== "server");
  if (!open) return null;
  return (
    <div role="region" aria-label="Cookie consent" className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:left-4 sm:bottom-4 sm:w-[380px] lg:left-[248px]">
      <div className="rounded-[12px] border border-hair-2 bg-white p-4 shadow-[0_16px_40px_-12px_rgb(0_0_0/0.25)]">
        <p className="text-[13px] font-medium">Cookies for analytics</p>
        <p className="mt-1 text-[13px] leading-snug text-mute">
          With your OK we use Google Analytics and Microsoft Clarity cookies to see how the site is used. Signing in and the site itself work either way. <Link href="/privacy#cookies" className="font-medium text-ink underline underline-offset-2">Privacy Policy</Link>
        </p>
        <div className="mt-3 flex gap-2">
          <button type="button" onClick={() => choose("granted")} className="btn-ink flex-1">
            Accept
          </button>
          <button type="button" onClick={() => choose("denied")} className="btn-line flex-1">
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}

/** Button that reopens the banner (used on /privacy). */
export function CookieSettingsButton() {
  return (
    <button type="button" onClick={() => window.dispatchEvent(new Event("ingot:cookie-settings"))} className="btn-line mt-3">
      Cookie settings
    </button>
  );
}
