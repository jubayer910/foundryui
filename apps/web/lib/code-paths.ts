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
