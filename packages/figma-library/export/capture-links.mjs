// Capture Figma's own clipboard payload for every library component, without the Desktop Bridge.
// Figma desktop selects a node when its link is opened (…?node-id=…); then Cmd+C puts real, editable layers on
// the clipboard, saved as apps/web/public/library-code/<sys>/<slug>.figma.html (served by "Copy to Figma").
//   node capture-links.mjs [system…]     resumable: items that already have a payload are skipped
// Needs: Figma desktop signed in, and Accessibility permission for the app running this (to press Cmd+C).
import { execFile } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync, appendFileSync } from "node:fs";

const WEB = new URL("../../../apps/web/", import.meta.url).pathname;
const FILES = { loopo: "lBBGdEStjKRYnwrTdJs1T3", auton: "Q7K7Ix4KwJryX5XvLhaCZg", mailpulse: "HO8FIKAQjZlHdfM65hYYis", axon: "s8dzTyDpYzwDoDkqPekxXk", veriq: "PB3XpCt9pnD9EiJfqXAiN3", vantage: "nG9LOj0Kw0l4iD7sSXFmc9", montra: "toYI6MQsdYYU5sQvHPWTdY", spendix: "LIk6T8Wj1vA1m7P3xSNCl5", abotix: "Wbmq8H1cYhZN0uX1YdppR2" };
const LOG = new URL("./data/capture-log.txt", import.meta.url).pathname;
const only = process.argv.slice(2);
const items = JSON.parse(readFileSync(WEB + "lib/figma-items.json", "utf8")).filter((i) => FILES[i.system] && (!only.length || only.includes(i.system)));

const run = (cmd, args) => new Promise((ok, no) => execFile(cmd, args, { maxBuffer: 128 * 1024 * 1024 }, (e, out) => (e ? no(e) : ok(out))));
const osa = (...lines) => run("osascript", lines.flatMap((l) => ["-e", l]));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (s) => { console.log(s); appendFileSync(LOG, new Date().toISOString() + " " + s + "\n"); };

async function clipboardHtml() {
  const raw = await osa("try", "the clipboard as «class HTML»", "on error", 'return ""', "end try").catch(() => "");
  const m = raw.match(/«data HTML([0-9A-F]+)»/);
  return m ? Buffer.from(m[1], "hex").toString("utf8") : "";
}
async function copySelection() {
  await osa('set the clipboard to "ingot-copy-marker"');
  // the link zooms the node into the middle of the canvas but does not select it: click the middle, then copy
  await osa('tell application "Figma" to activate', "delay 0.3", 'tell application "System Events"', 'tell process "Figma"', "set {wx, wy} to position of front window", "set {ww, wh} to size of front window", "end tell", "click at {wx + ww * 0.532, wy + wh * 0.52}", "delay 0.35", 'keystroke "c" using command down', "end tell");
  for (let i = 0; i < 40; i++) {
    await sleep(150);
    const h = await clipboardHtml();
    if (h.includes("(figmeta)") && h.includes("(figma)")) return h;
  }
  return "";
}

let lastFile = "", lastHash = "", ok = 0, skip = 0, fail = 0;
const t0 = Date.now();
const LIMIT = Number(process.env.LIMIT) || Infinity;
for (const it of items) {
  if (ok + fail >= LIMIT) break;
  const out = `${WEB}public/library-code/${it.system}/${it.slug}.figma.html`;
  if (existsSync(out)) { skip++; continue; }
  const key = FILES[it.system];
  const url = `https://www.figma.com/design/${key}/f?node-id=${it.id.replace(":", "-")}`;
  let saved = false;
  for (let attempt = 0; attempt < 3 && !saved; attempt++) {
    await run("open", ["-a", "Figma", url]);
    // a new file takes a while to open; jumping inside an open file is quick
    await sleep(key !== lastFile ? 14000 : 1600 + attempt * 1500);
    lastFile = key;
    const html = await copySelection();
    if (!html) continue;
    const hash = createHash("sha1").update(html).digest("hex");
    // same payload as the previous item = Figma had not moved to the new node yet; wait and try again
    if (hash === lastHash) continue;
    // the copy carries the layer text: it must contain this item's first words, or a neighbour got selected
    const words = String(it.keywords || "").split(", ").filter((k) => k.length >= 3).slice(0, 2);
    if (words.length) {
      const txt = await osa("the clipboard as text").catch(() => "");
      if (!words.some((w) => txt.includes(w))) { log(`mismatch ${it.slug} (${words.join(" | ")})`); continue; }
    }
    mkdirSync(`${WEB}public/library-code/${it.system}`, { recursive: true });
    writeFileSync(out, html);
    lastHash = hash; saved = true; ok++;
  }
  if (!saved) { fail++; log(`fail ${it.system} ${it.slug} ${it.id}`); }
  if ((ok + fail) % 25 === 0) log(`progress ok=${ok} fail=${fail} skip=${skip} of ${items.length} in ${Math.round((Date.now() - t0) / 60000)} min`);
}
log(`done ok=${ok} fail=${fail} skip=${skip} of ${items.length} in ${Math.round((Date.now() - t0) / 60000)} min`);
