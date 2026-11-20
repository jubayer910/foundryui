import { GLYPHS, type GlyphName } from "./glyphs";

/** A 24px Ingot icon from GLYPHS (our own static SVG bodies, no user input). */
export function Glyph({ name, size = 16, className }: { name: GlyphName; size?: number; className?: string }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} dangerouslySetInnerHTML={{ __html: GLYPHS[name] }} />;
}

/** The Ingot UI mark (the site icon). */
export function IngotMark({ size = 28 }: { size?: number }) {
  // eslint-disable-next-line @next/next/no-img-element -- tiny static SVG, already cached as the favicon
  return <img src="/icon.svg" width={size} height={Math.round((size * 212) / 207)} alt="" className="shrink-0 rounded-[8px] shadow-[0_0_0_1px_var(--color-hair-2)]" />;
}
