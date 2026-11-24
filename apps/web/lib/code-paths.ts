import "server-only";
import paths from "./code-paths.generated.json";

/** Unguessable URL of a generated component's code (see scripts/code-gate.mjs). Hand it out only after the plan check. */
export function codePath(slug: string): string | null {
  const token = (paths as Record<string, string>)[slug];
  return token ? "/c/" + token + ".txt" : null;
}

/** Unguessable URL of a template's Figma clipboard payload (paste = editable layers). Hand it out only after the plan check. */
export function figmaPath(slug: string): string | null {
  const token = (paths as Record<string, string>)["figma:" + slug];
  return token ? "/c/" + token + ".html" : null;
}

/** Paid icon styles. Free plans get the stroke styles only, public at /icons/<style>.json. */
export const PRO_ICON_STYLES = ["solid", "duotone", "twotone", "bulk"] as const;
export type ProIconStyle = (typeof PRO_ICON_STYLES)[number];
export const isProIconStyle = (s: string): s is ProIconStyle => (PRO_ICON_STYLES as readonly string[]).includes(s);

/** Unguessable asset path of a paid icon style's bodies. Server only: /api/icons streams it after the plan check. */
export function iconStylePath(style: ProIconStyle): string | null {
  const token = (paths as Record<string, string>)["icons:" + style];
  return token ? "/c/" + token + ".json" : null;
}
