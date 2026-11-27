// Capture "Copy to Figma" payloads with the Desktop Bridge doing the selecting (no canvas clicks, so no neighbour
// gets copied by mistake). Before running, a figma_execute installs a selectionchange driver in the plugin that
// selects the first missing component; every Escape this script presses changes the selection and the driver
// moves on to the next one. Each copy names its own node (figmeta selectedNodeData + fileKey), so the payload
// is saved under exactly that component's slug; nothing depends on the two sides staying in step.
//   node capture-bridge.mjs        stops after several copies in a row bring nothing new (driver finished)
// Needs Figma desktop in front with the canvas focused, and Accessibility permission for Cmd+C / Escape.
import { execFile } from "node:child_process";
import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WEB = new URL("../../../apps/web/", import.meta.url).pathname;
const LOG = new URL("./data/capture-log.txt", import.meta.url).pathname;
const FILES = { lBBGdEStjKRYnwrTdJs1T3: "loopo", Q7K7Ix4KwJryX5XvLhaCZg: "auton", HO8FIKAQjZlHdfM65hYYis: "mailpulse", s8dzTyDpYzwDoDkqPekxXk: "axon", PB3XpCt9pnD9EiJfqXAiN3: "veriq", nG9LOj0Kw0l4iD7sSXFmc9: "vantage", toYI6MQsdYYU5sQvHPWTdY: "montra", LIk6T8Wj1vA1m7P3xSNCl5: "spendix", Wbmq8H1cYhZN0uX1YdppR2: "abotix" };
const bySysId = new Map(JSON.parse(readFileSync(WEB + "lib/figma-items.json", "utf8")).map((i) => [i.system + "|" + i.id, i]));

const run = (cmd, args) => new Promise((ok, no) => execFile(cmd, args, { maxBuffer: 128 * 1024 * 1024 }, (e, out) => (e ? no(e) : ok(out))));
const osa = (...lines) => run("osascript", lines.flatMap((l) => ["-e", l]));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const log = (s) => { console.log(s); appendFileSync(LOG, new Date().toISOString() + " [bridge] " + s + "\n"); };
// keystrokes go to the frontmost app: bring Figma forward first every time, so an Escape never lands in another app
const key = (k) => osa('tell application "Figma" to activate', "delay 0.15", 'tell application "System Events" to tell process "Figma" to ' + k);

async function clipboardHtml() {
  const raw = await osa("try", "the clipboard as «class HTML»", "on error", 'return ""', "end try").catch(() => "");
  const m = raw.match(/«data HTML([0-9A-F]+)»/);
  return m ? Buffer.from(m[1], "hex").toString("utf8") : "";
}
function meta(html) {
  const m = html.match(/\(figmeta\)([A-Za-z0-9+/=]+)\(\/figmeta\)/);
  if (!m) return null;
  try { return JSON.parse(Buffer.from(m[1], "base64").toString("utf8")); } catch { return null; }
}

let ok = 0, dup = 0, empty = 0, lastNode = "";
const t0 = Date.now();
await osa('tell application "Figma" to activate');
while (empty < 8) {
  await osa('set the clipboard to "ingot-copy-marker"');
  await key('keystroke "c" using command down');
  let html = "";
  for (let t = 0; t < 25; t++) {
    await sleep(120);
    const h = await clipboardHtml();
    if (h.includes("(figmeta)") && h.includes("(figma)")) { html = h; break; }
  }
  const m = html && meta(html);
  const node = m && m.selectedNodeData ? String(m.selectedNodeData).split("|")[0] : "";
  const sys = m && FILES[m.fileKey];
  const it = sys && node && !String(m.selectedNodeData).includes(",") ? bySysId.get(sys + "|" + node) : null;
  if (!it) {
    empty++;
    if (html) log(`skip copy of ${sys || "?"} ${node || "?"} (not a library item or several nodes)`);
  } else if (node === lastNode) {
    // the driver has not moved yet: give it a moment, do not count as progress
    dup++;
    await sleep(400);
    if (dup > 4) { empty++; dup = 0; }
    continue;
  } else {
    empty = 0; dup = 0; lastNode = node;
    const out = `${WEB}public/library-code/${sys}/${it.slug}.figma.html`;
    if (!existsSync(out)) { mkdirSync(`${WEB}public/library-code/${sys}`, { recursive: true }); writeFileSync(out, html); ok++; }
    if (ok && ok % 25 === 0) log(`${sys} saved ${ok} in ${Math.round((Date.now() - t0) / 60000)} min`);
  }
  await key("key code 53"); // Escape: selection changes, the driver selects the next missing item
  await sleep(350);
}
log(`done: saved ${ok} in ${Math.round((Date.now() - t0) / 60000)} min`);
