import Link from "next/link";
import { Suspense } from "react";
import { Icon } from "@/registry/components/icons";
import { AccountLink } from "./account-link";

const NAV = [
  { href: "/components", label: "Components" },
  { href: "/systems", label: "Design systems" },
  { href: "/charts", label: "Charts" },
  { href: "/icons", label: "Icons" },
  { href: "/mcp", label: "MCP" },
  { href: "/docs", label: "Docs" },
  { href: "/pricing", label: "Pricing" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-fu-line bg-fu-page/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-6 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-[15px] font-medium tracking-[-0.02em] text-fu-ink">
          <span className="flex size-7 items-center justify-center rounded-fu-sm bg-fu-ink text-white">
            <Icon name="layers" size={15} />
          </span>
          Foundry UI
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-fu-sm px-2.5 py-1.5 text-[13px] font-medium text-fu-muted transition-colors hover:bg-fu-hover hover:text-fu-ink">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Suspense fallback={<span className="h-8 w-20" />}>
            <AccountLink />
          </Suspense>
        </div>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-fu-line px-3 py-1.5 md:hidden" aria-label="Primary mobile">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className="shrink-0 rounded-fu-sm px-2.5 py-1 text-[13px] font-medium text-fu-muted">
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
