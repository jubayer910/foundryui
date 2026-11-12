// Measures every illustration scene and prints a fitted viewBox map for components/site/illo/scenes.tsx (VIEWBOX).
// Run: NODE_PATH=$PWD/node_modules npx tsx --tsconfig scripts/illo-viewbox.tsconfig.json scripts/illo-viewbox.tsx
import React from "react"; (globalThis as any).React = React;
import { renderToStaticMarkup } from "react-dom/server";
import { SCENES } from "../components/site/illo/scenes";
const out: Record<string, string> = {};
for (const [k, f] of Object.entries(SCENES)) {
  const html = renderToStaticMarkup(<svg>{f()}</svg>);
  const xs: number[] = [], ys: number[] = [];
  for (const m of html.matchAll(/points="([^"]*)"/g)) for (const p of m[1].trim().split(/\s+/)) { if (!p) continue; const [x, y] = p.split(",").map(Number); xs.push(x); ys.push(y); }
  for (const m of html.matchAll(/<ellipse[^>]*cx="([-\d.]+)" cy="([-\d.]+)" rx="([-\d.]+)" ry="([-\d.]+)"/g)) { const [cx, cy, rx, ry] = m.slice(1).map(Number); xs.push(cx - rx, cx + rx); ys.push(cy - ry, cy + ry); }
  for (const m of html.matchAll(/ d="([^"]*)"/g)) { const n = m[1].match(/-?[\d.]+,-?[\d.]+/g) || []; for (const p of n) { const [x, y] = p.split(",").map(Number); xs.push(x); ys.push(y); } }
  const pad = 16;
  const x0 = Math.min(...xs) - pad, x1 = Math.max(...xs) + pad, y0 = Math.min(...ys) - pad - 4, y1 = Math.max(...ys) + pad;
  out[k] = [x0, y0, x1 - x0, y1 - y0].map((n) => Math.round(n)).join(" ");
}
console.log(JSON.stringify(out, null, 1));
