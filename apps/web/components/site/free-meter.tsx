"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/** Count of free copies left, as one line under the sidebar sign-up button. */
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
  // one quiet line under the sidebar's Sign up button (no separate row, no bar)
  return (
    <Link href="/sign-up" className="mt-2 block text-[12px] text-mute hover:text-ink" title="A free account removes the limit">
      {left > 0 ? `${left} of 5 free copies left` : "Free copies used"}
    </Link>
  );
}
