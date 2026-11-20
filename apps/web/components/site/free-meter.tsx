"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/** Count of free copies left, as one line beside the X link. */
export function FreeMeter() {
  const [left, setLeft] = useState<number | null>(null);
  useEffect(() => {
    const load = () =>
      fetch("/api/usage")
        .then((r) => r.json())
        .then((d: { remaining: number | null }) => setLeft(d.remaining))
        .catch(() => {});
    load();
    window.addEventListener("fu-usage", load);
    return () => window.removeEventListener("fu-usage", load);
  }, []);
  if (left === null) return null;
  // one quiet line at the bottom of the sidebar; the sign-up card above carries the ask
  return (
    <Link href="/sign-up" className="ml-auto inline-flex min-h-7 items-center whitespace-nowrap text-[12px] text-mute hover:text-ink" title="A free account removes the limit">
      {left > 0 ? `${left} of 5 free copies left` : "Free copies used"}
    </Link>
  );
}
