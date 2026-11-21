"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useRef, useState, type ReactNode } from "react";
import { AIcon } from "./admin-icons";
import { Handle, useFocusTrap, useSheetLock, useSwipeDown } from "./sheet";

/**
 * Detail panel for a list row, opened by a search param (?view=<id>, ?order=<id>) so it survives a reload
 * and can be shared. Closing goes back to the list URL without the param. Focus moves into the panel, Tab stays
 * inside it, Escape closes it. `full` links to the item's own page when there is one.
 * From md up it is a right-side drawer; on phones a bottom sheet with a drag handle (swipe down closes, swipe up
 * or the size button makes it full height).
 */
export function Drawer({ title, sub, closeHref, full, children }: { title: string; sub?: string; closeHref: string; full?: string; children: ReactNode }) {
  const router = useRouter();
  const panel = useRef<HTMLDivElement>(null);
  const [tall, setTall] = useState(false);
  const close = useCallback(() => router.push(closeHref, { scroll: false }), [router, closeHref]);
  useSheetLock(true);
  useFocusTrap(panel, true, close, "panel");
  const swipe = useSwipeDown(panel, close, () => setTall(true));
  return (
    <div className="fixed inset-0 z-[60]">
      <Link href={closeHref} scroll={false} aria-label="Close details" tabIndex={-1} className="admin-fade absolute inset-0 bg-black/30 md:bg-black/20" />
      <div
        ref={panel}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        tabIndex={-1}
        className={
          "absolute inset-x-0 bottom-0 flex flex-col rounded-t-[14px] bg-white shadow-[0_0_0_1px_var(--color-hair-2),0_12px_40px_rgb(0_0_0/0.14)] outline-none admin-drawer max-md:transition-[height] max-md:duration-200 md:inset-y-0 md:right-0 md:left-auto md:h-auto md:w-[520px] md:max-w-full md:rounded-none " +
          (tall ? "h-[calc(100dvh-env(safe-area-inset-top)-8px)]" : "h-[min(85dvh,calc(100dvh-env(safe-area-inset-top)-24px))]")
        }
      >
        <div className="shrink-0 touch-none select-none border-b border-hair md:touch-auto" {...swipe}>
          <div className="md:hidden">
            <Handle />
          </div>
          <div className="flex min-h-14 items-center gap-1 py-1 pr-2 pl-4 md:h-[55px] md:min-h-0 md:gap-2 md:py-0 md:pr-4">
            <div className="min-w-0 flex-1">
              <p className="truncate text-[16px] font-medium md:text-[15px]">{title}</p>
              {sub && <p className="truncate text-[13px] text-mute md:text-[12px]">{sub}</p>}
            </div>
            <button
              type="button"
              onClick={() => setTall((t) => !t)}
              aria-label={tall ? "Smaller panel" : "Full height"}
              aria-pressed={tall}
              className="flex size-11 items-center justify-center rounded-full text-mute hover:bg-tile hover:text-ink md:hidden"
            >
              <AIcon name={tall ? "arrows-diagonal-minimize" : "arrows-diagonal"} size={18} />
            </button>
            {full && (
              <Link href={full} className="btn-line !h-8 !px-3 max-md:!hidden">
                <AIcon name="arrows-maximize" size={14} />
                Full page
              </Link>
            )}
            <Link href={closeHref} scroll={false} aria-label="Close" className="flex size-8 items-center justify-center rounded-[6px] text-mute hover:bg-tile hover:text-ink max-md:size-11 max-md:rounded-full">
              <AIcon name="x" size={16} />
            </Link>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 pb-[max(16px,env(safe-area-inset-bottom))]">
          {children}
          {full && (
            <Link href={full} className="btn-line mt-6 w-full md:!hidden">
              <AIcon name="arrows-maximize" size={16} />
              Open full page
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/** Label / value list for a drawer. On phones each label sits above its value. */
export function Facts({ rows }: { rows: [string, ReactNode][] }) {
  return (
    <dl className="grid grid-cols-[minmax(96px,auto)_minmax(0,1fr)] gap-x-3 gap-y-2.5 text-[14px] md:grid-cols-[120px_minmax(0,1fr)] md:gap-y-2 md:text-[13px]">
      {rows.map(([k, v]) => (
        <div key={k} className="contents">
          <dt className="text-mute">{k}</dt>
          <dd className="min-w-0 break-words">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
