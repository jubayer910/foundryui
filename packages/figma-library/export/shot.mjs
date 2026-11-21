// Screenshot a library preview (#c) — node shot.mjs <sys/slug> <out.png> [js=1]
import puppeteer from "puppeteer-core";
const [, , id, out, js = "1"] = process.argv;
const b = await puppeteer.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome", headless: true, args: ["--font-render-hinting=none", "--allow-file-access-from-files"] });
const p = await b.newPage();
await p.setJavaScriptEnabled(js === "1");
const errs = [];
p.on("pageerror", (e) => errs.push(e.message));
p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
await p.setViewport({ width: 1600, height: 1200 });
await p.goto("file://" + new URL("../../../apps/web/public/library-preview/" + id + ".html", import.meta.url).pathname, { waitUntil: "load" });
await p.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 500));
await (await p.$("#c")).screenshot({ path: out });
if (errs.length) console.log("errors:", errs.join(" | "));
await b.close();
