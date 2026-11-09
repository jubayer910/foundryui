"use client";
import Link from "next/link";
import { useState } from "react";
import { CIcon } from "./chrome-icon";
import { RailNav, type RailSystem } from "./rail-nav";
import { Logo } from "./logo";

export function MobileBar({ systems }: { systems: RailSystem[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="sticky top-0 z-30 border-b border-hair bg-white/90 backdrop-blur lg:hidden">
      <div className="flex h-12 items-center justify-between px-4">
        <Link href="/" aria-label="Foundry UI home">
          <Logo />
        </Link>
        <button onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="flex size-8 items-center justify-center rounded-full bg-chip">
          <CIcon name={open ? "x" : "menu"} size={16} />
        </button>
      </div>
      {open && (
        <div className="max-h-[calc(100dvh-48px)] overflow-y-auto border-t border-hair px-2 py-4">
          <RailNav systems={systems} onNavigate={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
