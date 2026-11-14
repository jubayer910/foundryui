"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CIcon } from "./chrome-icon";

type Site = { announcement: { text: string; href: string | null } | null; deal: { price: number; left: number; total: number } | null };

/** Admin-controlled bar above the page. Reads /api/site so prerendered pages stay static. Dismissal is remembered per text. */
export function AnnouncementBar() {
  const [site, setSite] = useState<Site | null>(null);
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    let alive = true;
    fetch("/api/site")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: Site | null) => {
        if (!alive || !d?.announcement) return;
        let dismissed = false;
        try {
          dismissed = localStorage.getItem("ingot:bar") === d.announcement.text;
        } catch {}
        setSite(d);
        setHidden(dismissed);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);
  if (!site?.announcement || hidden) return null;
  const { text, href } = site.announcement;
  const left = site.deal ? `${site.deal.left} of ${site.deal.total} spots left` : null;
  const body = (
    <>
      <span className="font-medium">{text}</span>
      {left && <span className="text-white/70">{left}</span>}
    </>
  );
  return (
    <div className="relative bg-ink px-10 py-2 text-center text-[12px] leading-snug text-white">
      {href ? (
        <Link href={href} className="inline-flex flex-wrap items-center justify-center gap-x-2 hover:underline">
          {body}
        </Link>
      ) : (
        <span className="inline-flex flex-wrap items-center justify-center gap-x-2">{body}</span>
      )}
      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => {
          try {
            localStorage.setItem("ingot:bar", text);
          } catch {}
          setHidden(true);
        }}
        className="absolute right-2 top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-white/70 hover:bg-white/10 hover:text-white"
      >
        <CIcon name="x" size={13} />
      </button>
    </div>
  );
}
