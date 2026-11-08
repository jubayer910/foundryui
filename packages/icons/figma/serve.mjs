// Serves Foundry icon JSON to the Figma Desktop Bridge plugin (localhost only, read-only).
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, normalize } from "node:path";
const ROOT = process.argv[2];
const TOOL = new URL("./tool/", import.meta.url).pathname;
const handler = async (req, res) => {
  if (process.env.LOG) console.log(req.method, req.url, JSON.stringify({ o: req.headers.origin, pna: req.headers["access-control-request-private-network"], ua: (req.headers["user-agent"] || "").slice(0, 40) }));
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Private-Network", "true");
  if (req.method === "OPTIONS") return res.writeHead(204).end();
  const u = new URL(req.url, "http://x");
  const p = normalize(u.searchParams.get("f") || decodeURIComponent(u.pathname)).replace(/^\/+/, "");
  if (p.includes("..") || !(p.endsWith(".json") || p.startsWith("tool/"))) return res.writeHead(404).end();
  try {
    res.setHeader("Content-Type", "application/json");
    if (p.startsWith("tool/")) return res.end(JSON.stringify({ code: await readFile(join(TOOL, p.slice(5)), "utf8") }));
    res.end(await readFile(join(ROOT, p)));
  } catch { res.writeHead(404).end(); }
};
// loopback only: IPv4 and IPv6 localhost, never other interfaces
for (const host of ["127.0.0.1", "::1"]) createServer(handler).listen(9230, host, () => console.log("serving on " + host + ":9230"));
