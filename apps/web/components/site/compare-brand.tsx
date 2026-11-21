import { Logo } from "./logo";

/**
 * Logos on the comparison pages. Other products' logos only identify them (nominative use);
 * each page says Ingot UI isn't affiliated with or endorsed by them.
 */
export function BrandTile({ name, logo, size = 40 }: { name: string; logo?: string; size?: number }) {
  return (
    <span
      className="inline-flex shrink-0 items-center justify-center rounded-[10px] bg-white shadow-[0_0_0_1px_var(--color-hair),0_1px_2px_rgb(0_0_0/0.05)]"
      style={{ width: size, height: size }}
      title={name}
    >
      {logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={logo} alt="" aria-hidden="true" width={size * 0.55} height={size * 0.55} style={{ width: size * 0.55, height: size * 0.55, objectFit: "contain" }} />
      ) : (
        <Logo withName={false} className="!h-[45%] text-ink" />
      )}
    </span>
  );
}

/** "[Ingot UI] vs [other]" as two logo tiles, for the top of a comparison and the index cards. */
export function VsChip({ name, logo, size = 40 }: { name: string; logo: string; size?: number }) {
  return (
    <span className="inline-flex items-center gap-2" aria-label={"Ingot UI vs " + name}>
      <BrandTile name="Ingot UI" size={size} />
      <span className="text-[11px] font-medium text-mute">vs</span>
      <BrandTile name={name} logo={logo} size={size} />
    </span>
  );
}
