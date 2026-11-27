// Save Figma's current clipboard (a "Copy" of one Foundry Library component) as its Copy to Figma payload.
// The figmeta inside the payload names the file and node, so the file lands under exactly that component's slug.
//   node save-clipboard.mjs        -> prints "saved <sys> <slug>", "exists …" or "skip …"
// Used when the copy is made with Figma's Edit > Copy menu in the background (no keyboard focus needed).
import { execFile } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WEB = new URL("../../../apps/web/", import.meta.url).pathname;
const FILES = { lBBGdEStjKRYnwrTdJs1T3: "loopo", Q7K7Ix4KwJryX5XvLhaCZg: "auton", HO8FIKAQjZlHdfM65hYYis: "mailpulse", s8dzTyDpYzwDoDkqPekxXk: "axon", PB3XpCt9pnD9EiJfqXAiN3: "veriq", nG9LOj0Kw0l4iD7sSXFmc9: "vantage", toYI6MQsdYYU5sQvHPWTdY: "montra", LIk6T8Wj1vA1m7P3xSNCl5: "spendix", Wbmq8H1cYhZN0uX1YdppR2: "abotix" };
const bySysId = new Map(JSON.parse(readFileSync(WEB + "lib/figma-items.json", "utf8")).map((i) => [i.system + "|" + i.id, i]));

const raw = await new Promise((ok) => execFile("osascript", ["-e", "try", "-e", "the clipboard as «class HTML»", "-e", "on error", "-e", 'return ""', "-e", "end try"], { maxBuffer: 256 * 1024 * 1024 }, (e, out) => ok(e ? "" : out)));
const hex = raw.match(/«data HTML([0-9A-F]+)»/);
const html = hex ? Buffer.from(hex[1], "hex").toString("utf8") : "";
if (!html.includes("(figmeta)") || !html.includes("(figma)")) { console.log("skip: no figma payload on the clipboard"); process.exit(0); }
const m = html.match(/\(figmeta\)([A-Za-z0-9+/=]+)\(\/figmeta\)/);
const meta = m ? JSON.parse(Buffer.from(m[1], "base64").toString("utf8")) : {};
const sys = FILES[meta.fileKey];
const node = String(meta.selectedNodeData || "").split("|")[0];
const it = sys && node && !String(meta.selectedNodeData).includes(",") ? bySysId.get(sys + "|" + node) : null;
if (!it) { console.log(`skip: ${sys || "?"} ${node || "?"} is not one library item`); process.exit(0); }
const out = `${WEB}public/library-code/${sys}/${it.slug}.figma.html`;
if (existsSync(out)) { console.log(`exists ${sys} ${it.slug}`); process.exit(0); }
mkdirSync(`${WEB}public/library-code/${sys}`, { recursive: true });
writeFileSync(out, html);
console.log(`saved ${sys} ${it.slug} ${Math.round(html.length / 1024)} KB`);
