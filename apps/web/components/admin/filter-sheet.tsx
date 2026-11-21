"use client";
import Link from "next/link";
import { useRef, useState, type ReactNode } from "react";
import { AIcon } from "./admin-icons";
import { Handle, sheetPanel, useFocusTrap, useSheetLock, useSwipeDown } from "./sheet";

/**
 * The filter controls of a list toolbar (selects inside a GET form). From md up they render inline, exactly as
 * before. On phones they collapse into one "Filters" button (with the number of active filters) that opens a
 * bottom sheet holding the same controls, with a sticky Clear / Apply bar; Apply submits the surrounding form.
 * The controls stay in the DOM in both cases, so the form sends them either way. Put it inside the <form>.
 */
export function FilterSheet({ children, active = 0, clearHref }: { children: ReactNode; active?: number; clearHref: string }) {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);
  useSheetLock(open);
  useFocusTrap(panel, open, close, "panel");
  const swipe = useSwipeDown(panel, close);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-expanded={open} className="btn-line shrink-0 md:!hidden">
        <AIcon name="adjustments-horizontal" size={17} />
        Filters
        {active > 0 && <span className="-mr-1 min-w-5 rounded-full bg-ink px-1.5 text-[12px] leading-5 text-white tabular-nums">{active}</span>}
      </button>
      <div className={"md:contents " + (open ? "fixed inset-0 z-[60]" : "max-md:hidden")}>
        <div className="admin-fade absolute inset-0 bg-black/30 md:hidden" onClick={close} aria-hidden="true" />
        <div ref={panel} role={open ? "dialog" : undefined} aria-modal={open || undefined} aria-label={open ? "Filters" : undefined} tabIndex={open ? -1 : undefined} className={"md:contents " + (open ? sheetPanel : "")}>
          <div className="shrink-0 touch-none select-none md:hidden" {...swipe}>
            <Handle />
            <div className="flex items-center gap-2 pr-2 pl-4">
              <p className="min-w-0 flex-1 text-[16px] font-medium tracking-[-0.01em]">Filters</p>
              <button type="button" onClick={close} aria-label="Close" className="flex size-11 items-center justify-center rounded-full text-mute hover:bg-tile hover:text-ink">
                <AIcon name="x" size={18} />
              </button>
            </div>
          </div>
          <div className="admin-filter-body min-h-0 overflow-y-auto overscroll-contain px-4 pt-1 pb-4 max-md:flex max-md:flex-1 max-md:flex-col max-md:gap-4 max-md:[&_label]:block max-md:[&_label]:w-full max-md:[&_label>span.sr-only]:not-sr-only max-md:[&_label>span.sr-only]:mb-1.5 max-md:[&_label>span.sr-only]:block max-md:[&_label>span.sr-only]:text-[13px] max-md:[&_label>span.sr-only]:text-mute max-md:[&_select]:!w-full max-md:[&_select]:rounded-[10px] md:contents">
            {children}
          </div>
          <div className="flex shrink-0 items-center gap-2 border-t border-hair bg-white px-4 pt-3 pb-[max(12px,env(safe-area-inset-bottom))] md:hidden">
            <Link href={clearHref} className="btn-line flex-1" onClick={close}>
              Clear
            </Link>
            <button type="submit" className="btn-ink flex-[2]">
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
