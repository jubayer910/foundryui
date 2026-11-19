// Loopback-only receiver for the Figma Desktop Bridge export.
// POST /thumb?system=<s>&id=<id>  body: base64 PNG -> apps/web/public/library/<s>/<id>.webp
// POST /meta?system=<s>           body: JSON array   -> merged into apps/web/lib/figma-items.json
import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { createRequire } from "node:module";
const WEB = new URL("../../../apps/web/", import.meta.url).pathname;
const sharp = createRequire(join(WEB, "package.json"))("sharp");
const SYS = /^(loopo|auton|mailpulse|axon|veriq|vantage|montra|spendix|abotix)$/;
let saved = 0, copied = 0;
// Figma desktop must be the front app with the canvas focused (the bridge selection lives there).
// A fresh marker goes on the clipboard first, so an old payload is never saved under the wrong slug.
const osa = (script) => new Promise((ok, no) => execFile("osascript", ["-e", script], { maxBuffer: 64 * 1024 * 1024 }, (e, out) => (e ? no(e) : ok(out))));
async function figmaCopy() {
  await osa('set the clipboard to "ingot-copy-marker"');
  await osa('tell application "Figma" to activate\ntell application "System Events" to keystroke "c" using command down');
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 150));
    const raw = await osa("try\nthe clipboard as «class HTML»\non error\nreturn \"\"\nend try").catch(() => "");
    const m = raw.match(/«data HTML([0-9A-F]+)»/);
    if (m) return Buffer.from(m[1], "hex").toString("utf8");
  }
  throw new Error("clipboard stayed empty");
}
const handler = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Private-Network", "true");
  if (req.method === "OPTIONS") return res.writeHead(204).end();
  const u = new URL(req.url, "http://x");
  // GET /data/<system>/<file>.json -> prepared data for bridge scripts
  if (req.method === "GET" && /^\/data\/[a-z]+\/[a-z0-9-]+\.json$/.test(u.pathname)) {
    res.setHeader("Content-Type", "application/json");
    return res.end(await readFile(new URL("." + u.pathname, import.meta.url)).catch(() => "null"));
  }
  // GET /tool/<name>.js -> {code} for new Function() inside the bridge
  if (req.method === "GET" && /^\/tool\/[a-z-]+\.js$/.test(u.pathname)) {
    res.setHeader("Content-Type", "application/json");
    const name = u.pathname.slice(6);
    const pre = /^(swap|collect)-icons\.js$/.test(name) ? (await readFile(new URL("./icon-find.js", import.meta.url), "utf8")) + "\n" : "";
    return res.end(JSON.stringify({ code: pre + (await readFile(new URL("./" + name, import.meta.url), "utf8")) }));
  }
  // GET /copy?system=<s>&slug=<slug>: the bridge has selected a component; press Cmd+C in Figma desktop, read the
  // clipboard (Figma's own HTML payload: real, editable layers) and save it as public/library-code/<s>/<slug>.figma.html
  if (req.method === "GET" && u.pathname === "/copy") {
    const sys = u.searchParams.get("system") || "", slug = (u.searchParams.get("slug") || "").replace(/[^a-z0-9-]/g, "");
    if (!SYS.test(sys) || !slug) return res.writeHead(400).end();
    try {
      const html = await figmaCopy();
      if (!html.includes("(figmeta)") || !html.includes("(figma)")) return res.end(JSON.stringify({ ok: false, why: "no figma payload" }));
      const dir = join(WEB, "public/library-code", sys);
      await mkdir(dir, { recursive: true });
      await writeFile(join(dir, slug + ".figma.html"), html);
      copied++;
      if (copied % 25 === 0) console.log("copied", copied);
      return res.end(JSON.stringify({ ok: true, size: html.length }));
    } catch (e) { return res.end(JSON.stringify({ ok: false, why: String(e).slice(0, 120) })); }
  }
  const system = u.searchParams.get("system") || "";
  if (req.method !== "POST" || !SYS.test(system)) return res.writeHead(400).end();
  let body = ""; for await (const ch of req) body += ch;
  try {
    if (u.pathname === "/thumb") {
      const id = (u.searchParams.get("id") || "").replace(/[^0-9-]/g, "");
      if (!id) return res.writeHead(400).end();
      const dir = join(WEB, "public/library", system);
      await mkdir(dir, { recursive: true });
      await sharp(Buffer.from(body, "base64")).resize({ width: 960, height: 1400, fit: "inside", withoutEnlargement: true }).flatten({ background: "#ffffff" }).webp({ quality: 80 }).toFile(join(dir, id + ".webp"));
      saved++;
      if (saved % 50 === 0) console.log("saved", saved);
      return res.end("ok");
    }
    if (u.pathname === "/iconlist") {
      const dir = new URL("./data/" + system + "/", import.meta.url).pathname;
      await mkdir(dir, { recursive: true });
      JSON.parse(body); await writeFile(join(dir, "icon-list.json"), body);
      return res.end("ok");
    }
    if (u.pathname === "/img") {
      const hash = (u.searchParams.get("hash") || "").replace(/[^0-9a-f]/g, "");
      if (!hash) return res.writeHead(400).end();
      const dir = new URL("./data/" + system + "/img/", import.meta.url).pathname;
      await mkdir(dir, { recursive: true });
      await writeFile(join(dir, hash + ".bin"), Buffer.from(body, "base64"));
      return res.end("ok");
    }
    if (u.pathname === "/node" || u.pathname === "/png") {
      const id = (u.searchParams.get("id") || "").replace(/[^0-9-]/g, "");
      const dir = new URL("./data/" + system + "/", import.meta.url).pathname;
      await mkdir(dir, { recursive: true });
      if (u.pathname === "/node") { JSON.parse(body); await writeFile(join(dir, id + ".json"), body); }
      else await writeFile(join(dir, id + ".png"), Buffer.from(body, "base64"));
      return res.end("ok");
    }
    if (u.pathname === "/meta") {
      const items = JSON.parse(body);
      const file = join(WEB, "lib/figma-items.json");
      const all = JSON.parse(await readFile(file, "utf8").catch(() => "[]")).filter((x) => x.system !== system);
      await writeFile(file, JSON.stringify([...all, ...items]));
      console.log("meta", system, items.length);
      return res.end("ok");
    }
  } catch (e) { console.log("error", String(e).slice(0, 120)); return res.writeHead(500).end(); }
  res.writeHead(404).end();
};
for (const host of ["127.0.0.1", "::1"]) createServer(handler).listen(9231, host, () => console.log("receiver on " + host + ":9231"));
