"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Secondary hero CTA. The home page is prerendered, so the live deal price comes from /api/site (admin-controlled).
 * While the Lifetime deal runs it goes straight to checkout (POST /api/checkout, option lifetime), the same as the
 * Lifetime button on /pricing: signed-out visitors land on the Creem checkout, no sign-up first.
 * With no deal it links to pricing.
 */
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
  if (!price) {
    return (
      <Link href="/pricing" className="hero-btn hero-btn-line">
        See pricing
      </Link>
    );
  }
  return (
    <form action="/api/checkout" method="post" className="contents">
      <input type="hidden" name="option" value="lifetime" />
      <button type="submit" className="hero-btn hero-btn-line cursor-pointer">
        Buy lifetime deal at <span className="text-[#4b55e6]">${price}</span>
      </button>
    </form>
  );
}
