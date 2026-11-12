// Post slugs for `indexnow.mjs --all-posts`, read from the post files so the list never drifts.
import { readdirSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const dir = join(dirname(fileURLToPath(import.meta.url)), "../lib/blog/posts");
export const posts = readdirSync(dir)
  .filter((f) => f.endsWith(".ts") && f !== "index.ts" && f !== "types.ts")
  .map((f) => readFileSync(join(dir, f), "utf8").match(/slug: "([^"]+)"/)?.[1])
  .filter(Boolean);
