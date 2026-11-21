"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";
import { AIcon } from "./admin-icons";

/**
 * Detail side panel for a list row, opened by a search param (?view=<id>, ?order=<id>) so it survives a reload
 * and can be shared. Closing goes back to the list URL without the param. Focus moves into the panel, Tab stays
 * inside it, Escape closes it. `full` links to the item's own page when there is one.
 */
export function Drawer({ title, sub, closeHref, full, children }: { title: string; sub?: string; closeHref: string; full?: string; children: ReactNode }) {
  const router = useRouter();
  const panel = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = panel.current;
    const before = document.activeElement as HTMLElement | null;
    el?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") router.push(closeHref, { scroll: false });
      else if (e.key === "Tab" && el) {
        const f = [...el.querySelectorAll<HTMLElement>("a[href],button:not([disabled]),input,select,textarea,summary")].filter((x) => x.offsetParent !== null);
        if (!f.length) return;
        if (e.shiftKey && (document.activeElement === f[0] || document.activeElement === el)) {
          e.preventDefault();
          f[f.length - 1].focus();
        } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) {
          e.preventDefault();
          f[0].focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      before?.focus?.();
    };
  }, [closeHref, router]);
  return (
    <div className="fixed inset-0 z-50">
      <Link href={closeHref} scroll={false} aria-label="Close details" tabIndex={-1} className="absolute inset-0 bg-black/20" />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className="absolute inset-y-0 right-0 flex w-[520px] max-w-full flex-col bg-white shadow-[0_0_0_1px_var(--color-hair-2),0_12px_40px_rgb(0_0_0/0.14)] outline-none"
      >
        <div className="flex h-14 shrink-0 items-center gap-2 border-b border-hair px-4">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-medium">{title}</p>
            {sub && <p className="truncate text-[12px] text-mute">{sub}</p>}
          </div>
          {full && (
            <Link href={full} className="btn-line !h-8 !px-3">
              <AIcon name="arrows-maximize" size={14} />
              Full page
            </Link>
          )}
          <Link href={closeHref} scroll={false} aria-label="Close" className="flex size-8 items-center justify-center rounded-[6px] text-mute hover:bg-tile hover:text-ink">
            <AIcon name="x" size={16} />
          </Link>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto p-4">{children}</div>
      </div>
    </div>
  );
}

/** Label / value list for a drawer. */
export function Facts({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <dl className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-3 gap-y-2 text-[13px]">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="text-mute">{k}</dt>
          <dd className="min-w-0 break-words">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
