"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Card = { title: string; note: string; button: string; avatars: string[] };
// placeholder faces (Unsplash portraits) until the owner sets their own in admin → Announcement
const FACES = ["/avatars/1.jpg", "/avatars/2.jpg", "/avatars/3.jpg", "/avatars/4.jpg", "/avatars/5.jpg"];
const NOTE = "Join 2,000+ members, including 30+ who signed up today";

/**
 * Sidebar sign-up card for signed-out visitors. Every word and picture comes from admin → Announcement
 * (settings.signupCard, served by /api/site), so the owner edits it without a deploy.
 */
export function SignupCard() {
  const [card, setCard] = useState<Card | null>(null);
  useEffect(() => {
    let alive = true;
    Promise.all([
      fetch("/api/site").then((r) => (r.ok ? r.json() : null)),
      fetch("/api/usage", { credentials: "include" }).then((r) => (r.ok ? r.json() : null)),
    ])
      .then(([site, usage]: [{ signupCard?: Card | null } | null, { user?: unknown } | null]) => {
        if (alive && site?.signupCard && !usage?.user) setCard(site.signupCard);
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);
  if (!card) return null;
  const faces = (card.avatars.length ? card.avatars : FACES).slice(0, 5);
  const note = card.note || NOTE;
  return (
    <div className="px-2">
      {card.title && <p className="text-[15px] leading-[1.35] text-ink">{card.title}</p>}
      <div className="mt-3 flex items-center gap-3">
        <Link href="/sign-up" className="inline-flex h-9 shrink-0 items-center whitespace-nowrap rounded-full bg-ink px-4 text-[14px] text-white hover:opacity-90">
          {card.button}
        </Link>
        <span className="flex items-center" aria-hidden="true">
          {faces.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={i} src={src} alt="" width={26} height={26} className={"size-[26px] rounded-full object-cover ring-2 ring-white" + (i ? " -ml-2" : "")} />
          ))}
        </span>
      </div>
      <p className="mt-3 text-[13px] leading-snug text-mute">{note}</p>
    </div>
  );
}
