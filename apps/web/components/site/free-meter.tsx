"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/** Always-visible count of free actions left, so the sign-up ask is never a surprise. */
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
  return (
    <div className="rounded-[8px] bg-tile p-3">
      <p className="text-[12px] font-medium">{left > 0 ? left + " of 5 free copies left" : "Free copies used"}</p>
      <div className="mt-2 flex gap-1" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className={"h-1 flex-1 rounded-full " + (i < left ? "bg-ink" : "bg-chip-2")} />
        ))}
      </div>
      <p className="mt-2 text-[12px] leading-snug text-mute">A free account removes the limit and keeps your saved items.</p>
      <Link href="/sign-up" className="btn-ink mt-3 !h-7 w-full !text-[12px]">
        Create free account
      </Link>
    </div>
  );
}
