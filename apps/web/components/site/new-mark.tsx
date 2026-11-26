"use client";
import { useEffect, useState } from "react";

/**
 * Hand-drawn "new" mark: pink lowercase word with a scribbled underline (our own drawing), no pill or box.
 * With `until` (an ISO date) it shows only before that moment, checked in the visitor's browser,
 * so it disappears on time even without a new deploy.
 */
export function NewMark({ until, className = "" }: { until?: string; className?: string }) {
  const [on, setOn] = useState(!until);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the clock is only known in the browser
    if (until) setOn(Date.now() < Date.parse(until));
  }, [until]);
  if (!on) return null;
  return (
    <span className={"relative ml-1 inline-flex shrink-0 -rotate-3 flex-col items-center leading-none " + className} aria-label="new">
      <span className="font-medium italic tracking-[-0.01em] text-[#e0177d]" style={{ fontSize: 12 }}>new</span>
      <svg width="26" height="6" viewBox="0 0 26 6" aria-hidden="true" className="-mt-0.5">
        <path d="M1 3.6c3.2-1.6 6.1-1.9 8.6-.7 2.2 1 4.6 1.2 7.4-.2 2.4-1.2 4.9-1.4 7.9-.4" fill="none" stroke="#e0177d" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M5 5.1c2.6-.9 5.6-1 8.4-.3" fill="none" stroke="#e0177d" strokeWidth="1" strokeLinecap="round" opacity=".7" />
      </svg>
    </span>
  );
}
