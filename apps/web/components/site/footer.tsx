import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-fu-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-[13px] text-fu-muted sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div className="max-w-xs">
          <p className="font-medium text-fu-ink">Foundry UI</p>
          <p className="mt-1 leading-relaxed">Design systems, components and an MCP server, so founders ship products that look designed.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
          <Link href="/components" className="hover:text-fu-ink">Components</Link>
          <Link href="/systems" className="hover:text-fu-ink">Design systems</Link>
          <Link href="/charts" className="hover:text-fu-ink">Charts</Link>
          <Link href="/icons" className="hover:text-fu-ink">Icons</Link>
          <Link href="/mcp" className="hover:text-fu-ink">MCP &amp; CLI</Link>
          <Link href="/docs" className="hover:text-fu-ink">Docs</Link>
          <Link href="/pricing" className="hover:text-fu-ink">Pricing</Link>
          <Link href="/docs#license" className="hover:text-fu-ink">License</Link>
          <Link href="/changelog" className="hover:text-fu-ink">Changelog</Link>
        </div>
      </div>
    </footer>
  );
}
