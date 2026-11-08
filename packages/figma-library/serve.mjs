// Serves Foundry icon JSON to the Figma Desktop Bridge plugin (localhost only, read-only).
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, normalize } from "node:path";
const ROOT = process.argv[2];
// Builder scripts: tool/<x>.js → core.js + <x>.js from this folder (or the icons builder).
const TOOL = new URL("./", import.meta.url).pathname;
const ICON_TOOL = new URL("../icons/figma/", import.meta.url).pathname;
const handler = async (req, res) => {
  if (process.env.LOG) console.log(req.method, req.url, JSON.stringify({ o: req.headers.origin, pna: req.headers["access-control-request-private-network"], ua: (req.headers["user-agent"] || "").slice(0, 40) }));
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Private-Network", "true");
  if (req.method === "OPTIONS") return res.writeHead(204).end();
  // Only one writable file: the icon component-set keys exported from the icon library.
  if (req.method === "POST" && new URL(req.url, "http://x").searchParams.get("save") === "icon-keys.json") {
    let body = ""; for await (const ch of req) body += ch;
    try { JSON.parse(body); } catch { return res.writeHead(400).end(); }
    const { writeFile } = await import("node:fs/promises");
    await writeFile(join(TOOL, "icon-keys.json"), body);
    return res.end("saved");
  }
  const u = new URL(req.url, "http://x");
  const p = normalize(u.searchParams.get("f") || decodeURIComponent(u.pathname)).replace(/^\/+/, "");
  if (p.includes("..") || !(p.endsWith(".json") || p.startsWith("tool/"))) return res.writeHead(404).end();
  try {
    res.setHeader("Content-Type", "application/json");
    if (p.startsWith("tool/")) {
      const f = p.slice(5);
      if (f === "builder.js") return res.end(JSON.stringify({ code: await readFile(join(ICON_TOOL, f), "utf8") }));
      if (f === "icon-keys.json") return res.end(await readFile(join(TOOL, f)));
      const core = await readFile(join(TOOL, "core.js"), "utf8");
      return res.end(JSON.stringify({ code: core + "\n" + (await readFile(join(TOOL, f), "utf8")) }));
    }
    res.end(await readFile(join(ROOT, p)));
  } catch { res.writeHead(404).end(); }
};
// loopback only: IPv4 and IPv6 localhost, never other interfaces
for (const host of ["127.0.0.1", "::1"]) createServer(handler).listen(9230, host, () => console.log("serving on " + host + ":9230"));
