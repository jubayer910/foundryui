/**
 * Preview surfaces for systems that have no light mode. Vantage is a dark-only product, so its blocks are shown on
 * Vantage's own app background (#1a1a1a, sampled from its Figma screens) instead of the light library tile.
 */
export const SYSTEM_SURFACE: Record<string, string> = { vantage: "#1a1a1a" };

/** Inline style for a preview area of this system, or undefined to keep the default tile. */
export const surfaceStyle = (system: string | undefined) => (system && SYSTEM_SURFACE[system] ? { backgroundColor: SYSTEM_SURFACE[system] } : undefined);
