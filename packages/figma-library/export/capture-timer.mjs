// Capture "Copy to Figma" payloads without pressing Escape (Escape in the wrong front app interrupts other tools).
// The Bridge driver moves the selection to the next missing component on a timer; this script only brings Figma
// forward, presses Cmd+C, and saves each new payload under the component its figmeta names.
//   node capture-timer.mjs <system> <expected-count>   stops when that many new payloads are saved or after 45 s idle
import { execFile } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const WEB = new URL("../../../apps/web/", import.meta.url).pathname;
const FILES = { lBBGdEStjKRYnwrTdJs1T3: "loopo", Q7K7Ix4KwJryX5XvLhaCZg: "auton", HO8FIKAQjZlHdfM65hYYis: "mailpulse", s8dzTyDpYzwDoDkqPekxXk: "axon", PB3XpCt9pnD9EiJfqXAiN3: "veriq", nG9LOj0Kw0l4iD7sSXFmc9: "vantage", toYI6MQsdYYU5sQvHPWTdY: "montra", LIk6T8Wj1vA1m7P3xSNCl5: "spendix", Wbmq8H1cYhZN0uX1YdppR2: "abotix" };
const bySysId = new Map(JSON.parse(readFileSync(WEB + "lib/figma-items.json", "utf8")).map((i) => [i.system + "|" + i.id, i]));
const want = process.argv[2];
const expect = Number(process.argv[3] || 8);

const run = (cmd, args) => new Promise((ok, no) => execFile(cmd, args, { maxBuffer: 256 * 1024 * 1024 }, (e, out) => (e ? no(e) : ok(out))));
const osa = (...lines) => run("osascript", lines.flatMap((l) => ["-e", l]));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function clipboardHtml() {
  const raw = await osa("try", "the clipboard as «class HTML»", "on error", 'return ""', "end try").catch(() => "");
  const m = raw.match(/«data HTML([0-9A-F]+)»/);
  return m ? Buffer.from(m[1], "hex").toString("utf8") : "";
}

let saved = 0, last = Date.now();
const seen = new Set();
while (saved < expect && Date.now() - last < 45000) {
  await osa('set the clipboard to "ingot-copy-marker"');
  await osa('tell application "Figma" to activate', "delay 0.2", 'tell application "System Events" to tell process "Figma" to keystroke "c" using command down').catch(() => {});
  let html = "";
  for (let t = 0; t < 20 && !html; t++) {
    await sleep(120);
    const h = await clipboardHtml();
    if (h.includes("(figmeta)") && h.includes("(figma)")) html = h;
  }
  if (html) {
    const mm = html.match(/\(figmeta\)([A-Za-z0-9+/=]+)\(\/figmeta\)/);
    let meta = {};
    try { meta = mm ? JSON.parse(Buffer.from(mm[1], "base64").toString("utf8")) : {}; } catch {}
    const sys = FILES[meta.fileKey];
    const node = String(meta.selectedNodeData || "").split("|")[0];
    const it = sys === want && node && !String(meta.selectedNodeData).includes(",") ? bySysId.get(sys + "|" + node) : null;
    if (it && !seen.has(node)) {
      seen.add(node);
      const out = `${WEB}public/library-code/${sys}/${it.slug}.figma.html`;
      if (!existsSync(out)) { mkdirSync(`${WEB}public/library-code/${sys}`, { recursive: true }); writeFileSync(out, html); saved++; last = Date.now(); console.log("saved", it.slug, Math.round(html.length / 1024) + " KB"); }
    }
  }
  await sleep(700);
}
console.log(`done ${want}: saved ${saved}`);
