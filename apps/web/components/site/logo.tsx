/** Foundry mark: three stacked plates, the library in layers. */
export function Logo({ withName = true }: { withName?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <rect x="3" y="3" width="18" height="5" rx="1.5" fill="#0b0b0b" />
        <rect x="3" y="10" width="12" height="5" rx="1.5" fill="#0b0b0b" />
        <rect x="3" y="17" width="7" height="4" rx="1.5" fill="#0b0b0b" />
      </svg>
      {withName && <span className="text-[14px] font-semibold tracking-[-0.02em]">Foundry</span>}
    </span>
  );
}
