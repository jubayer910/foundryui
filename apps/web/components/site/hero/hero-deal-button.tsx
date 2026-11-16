"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/** Secondary hero CTA. The home page is prerendered, so the live deal price comes from /api/site (admin-controlled). */
export function HeroDealButton({ fallbackPrice }: { fallbackPrice: number }) {
  const [deal, setDeal] = useState<{ price: number } | null | undefined>(undefined);
  useEffect(() => {
    let alive = true;
    fetch("/api/site")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: { deal?: { price: number } | null } | null) => alive && setDeal(d?.deal ?? null))
      .catch(() => alive && setDeal(null));
    return () => {
      alive = false;
    };
  }, []);
  const price = deal === undefined ? fallbackPrice : deal?.price;
  return (
    <Link href="/pricing#lifetime-h" className="hero-btn hero-btn-line">
      {price ? (
        <>
          Buy lifetime deal at <span className="text-[#4b55e6]">${price}</span>
        </>
      ) : (
        "See pricing"
      )}
    </Link>
  );
}
