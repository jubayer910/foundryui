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
  // one quiet line at the bottom of the sidebar, with a small bar of the 5 free copies
  const used = 5 - Math.max(0, Math.min(5, left));
  return (
    <Link href="/sign-up" className="ml-auto flex flex-col items-end gap-1 text-[12px] text-mute hover:text-ink" title="A free account removes the limit">
      <span className="whitespace-nowrap">{left > 0 ? `${left} of 5 free copies left` : "Free copies used"}</span>
      <span className="flex w-full gap-0.5" role="img" aria-label={`${used} of 5 free copies used`}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={"h-1 flex-1 rounded-full " + (i < used ? "bg-ink" : "bg-chip-2")} />
        ))}
      </span>
    </Link>
  );
}
