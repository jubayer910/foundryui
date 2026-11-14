"use client";
import Link from "next/link";
import { useState } from "react";
import { CIcon } from "./chrome-icon";
import { RailNav, type RailSystem } from "./rail-nav";
import { Logo } from "./logo";
import { AccountLink } from "./account-link";

export function MobileBar({ systems }: { systems: RailSystem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-30 border-b border-hair bg-white/90 backdrop-blur lg:hidden">
      <div className="flex h-12 items-center justify-between px-4">
        <Link href="/" aria-label="Ingot UI home">
          <Logo />
        </Link>
        <div className="flex items-center gap-2">
          <AccountLink />
          <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="flex size-8 items-center justify-center rounded-full bg-chip hover:bg-chip-2">
            <CIcon name={open ? "x" : "menu"} size={16} />
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="absolute inset-x-0 top-full max-h-[calc(100dvh-48px)] overflow-y-auto border-y border-hair bg-white px-2 py-4 shadow-[0_16px_32px_-16px_rgb(0_0_0/0.18)]">
          <RailNav systems={systems} onNavigate={() => setOpen(false)} />
          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-hair px-2 pt-4 text-[12px] text-mute">
            <Link href="/about" onClick={() => setOpen(false)} className="inline-flex min-h-6 items-center hover:text-ink">About</Link>
            <Link href="/changelog" onClick={() => setOpen(false)} className="inline-flex min-h-6 items-center hover:text-ink">Changelog</Link>
            <Link href="/roadmap" onClick={() => setOpen(false)} className="inline-flex min-h-6 items-center hover:text-ink">Roadmap</Link>
            <Link href="/support" onClick={() => setOpen(false)} className="inline-flex min-h-6 items-center hover:text-ink">Support</Link>
            <Link href="/license" onClick={() => setOpen(false)} className="inline-flex min-h-6 items-center hover:text-ink">License</Link>
            <Link href="/accessibility" onClick={() => setOpen(false)} className="inline-flex min-h-6 items-center hover:text-ink">Accessibility</Link>
          </p>
        </div>
      )}
    </div>
  );
}
