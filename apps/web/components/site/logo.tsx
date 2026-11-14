import { LOCKUP_VIEWBOX, MARK_PATH, MARK_VIEWBOX, WORDMARK_PATHS } from "@/lib/brand";

/** Ingot UI logo from the brand file: the full lockup, or the mark alone. Inherits text colour. */
export function Logo({ withName = true, className = "" }: { withName?: boolean; className?: string }) {
  if (!withName)
    return (
      <svg viewBox={MARK_VIEWBOX} className={"h-5 w-auto " + className} fill="currentColor" aria-hidden="true">
        <path d={MARK_PATH} />
      </svg>
    );
  return (
    <svg viewBox={LOCKUP_VIEWBOX} className={"h-[18px] w-auto text-ink " + className} fill="currentColor" role="img" aria-label="Ingot UI">
      <path d={MARK_PATH} />
      {WORDMARK_PATHS.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
