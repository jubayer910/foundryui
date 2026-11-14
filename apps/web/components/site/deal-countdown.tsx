"use client";
import { useEffect, useRef, useState } from "react";

/** ms left until endsAt (0 when passed or invalid). */
export function msLeft(endsAt: string | null | undefined, now = Date.now()) {
  const t = endsAt ? Date.parse(endsAt) : NaN;
  return Number.isFinite(t) ? Math.max(0, t - now) : 0;
}

const pad = (n: number) => String(n).padStart(2, "0");

function parts(ms: number) {
  const s = Math.floor(ms / 1000);
  return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
}

/** "2d 04h 12m 09s"; days are dropped when zero. */
export function countdownText(ms: number) {
  const p = parts(ms);
  return (p.d > 0 ? p.d + "d " : "") + pad(p.h) + "h " + pad(p.m) + "m " + pad(p.s) + "s";
}

const plural = (n: number, w: string) => n + " " + w + (n === 1 ? "" : "s");

/** Screen-reader text, coarse on purpose so it doesn't change every second: "Deal ends in 2 days 4 hours". */
export function countdownLabel(ms: number) {
  const p = parts(ms);
  if (ms <= 0) return "Deal ended";
  if (p.d > 0) return "Deal ends in " + plural(p.d, "day") + (p.h ? " " + plural(p.h, "hour") : "");
  if (p.h > 0) return "Deal ends in " + plural(p.h, "hour") + (p.m ? " " + plural(p.m, "minute") : "");
  if (p.m > 0) return "Deal ends in " + plural(p.m, "minute");
  return "Deal ends in less than a minute";
}

/**
 * Remaining ms to a real end date, ticking once a second on the second boundary.
 * Pauses while the tab is hidden and catches up on return. Calls onEnd once when it reaches zero.
 */
export function useCountdown(endsAt: string | null | undefined, onEnd?: () => void) {
  const [ms, setMs] = useState(() => msLeft(endsAt));
  const endRef = useRef(onEnd);
  useEffect(() => {
    endRef.current = onEnd;
  }, [onEnd]);
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    let fired = false;
    const tick = () => {
      const left = msLeft(endsAt);
      setMs(left);
      if (left <= 0) {
        if (!fired) {
          fired = true;
          endRef.current?.();
        }
        return;
      }
      if (typeof document !== "undefined" && document.hidden) return; // resumes on visibilitychange
      timer = setTimeout(tick, (left % 1000) + 20);
    };
    const onVis = () => {
      clearTimeout(timer);
      if (!document.hidden) tick();
    };
    tick();
    document.addEventListener("visibilitychange", onVis);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [endsAt]);
  return ms;
}

/**
 * The visible countdown. role="timer" (aria-live off by default) carries a coarse label;
 * the ticking digits are hidden from screen readers.
 */
export function DealCountdown({ endsAt, onEnd, prefix = "Ends in", className, endedText = "Deal ended" }: { endsAt: string; onEnd?: () => void; prefix?: string; className?: string; endedText?: string }) {
  const ms = useCountdown(endsAt, onEnd);
  return (
    <span role="timer" aria-label={countdownLabel(ms)} className={"tabular-nums " + (className ?? "")} suppressHydrationWarning>
      <span aria-hidden="true" suppressHydrationWarning>
        {ms > 0 ? (prefix ? prefix + " " : "") + countdownText(ms) : endedText}
      </span>
    </span>
  );
}
