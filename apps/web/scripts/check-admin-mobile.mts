/**
 * Admin on phones: visits every admin route at 375px (iPhone emulation) on the LOCAL dev server and fails on
 *   1. horizontal overflow: document scrollWidth wider than the viewport, or any visible element sticking out of
 *      the viewport that no ancestor clips (deliberate scrollers such as tab rows and report tables clip);
 *   2. tap targets under 40px: buttons, links that are not inline text, summaries, selects and inputs.
 * Text under 12px is reported as a warning. Chart bars (data-tap-exempt) are scrubbed by touch, so they are skipped.
 *
 *   cd apps/web
 *   npx next dev -p 3350                      # .dev.vars: BETTER_AUTH_URL=http://localhost:3350, ADMIN_EMAILS=owner@reports.test
 *   node scripts/check-reports.mts --seed     # local seed data, once
 *   node scripts/check-admin-mobile.mts       # ADMIN_BASE to point elsewhere, ADMIN_WIDTH for another width
 */
import { createRequire } from "node:module";
import { ROUTES, session } from "./admin-routes.mts";

const require = createRequire(import.meta.url);
const puppeteer = require("/Users/muhammadjubayer/Documents/FoundryUI/packages/figma-library/export/node_modules/puppeteer-core");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.ADMIN_BASE ?? "http://localhost:3350";
const WIDTH = Number(process.env.ADMIN_WIDTH ?? 375);
const UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1";
const MIN_TAP = 40;

type Finding = { kind: "overflow" | "tap" | "small-text"; what: string };

const cookie = await session(BASE);
const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
let failed = 0;
let warned = 0;
try {
  const page = await browser.newPage();
  await page.setUserAgent(UA);
  await page.setViewport({ width: WIDTH, height: 812, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
  const jar = cookie.split("; ").map((c) => ({ name: c.split("=")[0], value: c.slice(c.indexOf("=") + 1), url: BASE }));
  await page.setCookie(...jar);
  for (const r of ROUTES) {
    if (r.anon) await page.deleteCookie(...(await page.cookies()));
    const res = await page.goto(BASE + r.path, { waitUntil: "networkidle0", timeout: 120000 }).catch(() => null);
    await page.evaluate(() => document.fonts.ready);
    const findings: Finding[] = await page.evaluate((MIN: number) => {
      const out: { kind: "overflow" | "tap" | "small-text"; what: string }[] = [];
      const vw = document.documentElement.clientWidth;
      const name = (el: Element) => {
        const t = (el.textContent ?? "").replace(/\s+/g, " ").trim().slice(0, 40);
        const label = el.getAttribute("aria-label");
        const cls = (el.getAttribute("class") ?? "").split(" ").slice(0, 4).join(".");
        return `<${el.tagName.toLowerCase()}${cls ? "." + cls : ""}> "${label ?? t}"`;
      };
      const hiddenTree = (el: Element) => !!el.closest("[inert],[aria-hidden=true]");
      const visible = (el: Element) => {
        const h = el as HTMLElement;
        if (hiddenTree(el)) return false;
        if (typeof h.checkVisibility === "function" && !h.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) return false;
        const b = el.getBoundingClientRect();
        return b.width > 1 && b.height > 1;
      };
      const clipped = (el: Element) => {
        for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
          const ox = getComputedStyle(p).overflowX;
          if (ox !== "visible") {
            const pb = p.getBoundingClientRect();
            if (pb.left >= -1 && pb.right <= vw + 1) return true;
          }
        }
        return false;
      };
      if (document.documentElement.scrollWidth > vw + 1) out.push({ kind: "overflow", what: `page scrollWidth ${document.documentElement.scrollWidth} > ${vw}` });
      const all = [...document.querySelectorAll("body *")];
      for (const el of all) {
        if (!visible(el)) continue;
        const b = el.getBoundingClientRect();
        if ((b.right > vw + 1 || b.left < -1) && !clipped(el) && getComputedStyle(el).position !== "fixed") {
          // Report the outermost offender only.
          const parent = el.parentElement;
          const pb = parent?.getBoundingClientRect();
          if (!pb || (pb.right <= vw + 1 && pb.left >= -1)) out.push({ kind: "overflow", what: `${name(el)} spans ${Math.round(b.left)}..${Math.round(b.right)}` });
        }
      }
      const taps = document.querySelectorAll("a[href],button,summary,select,input:not([type=hidden]),textarea,[role=button],[role=tab],[role=menuitem]");
      for (const el of taps) {
        if (!visible(el) || el.closest("[data-tap-exempt]")) continue;
        const cs = getComputedStyle(el);
        if (el.tagName === "A" && cs.display === "inline") continue; // a link inside a sentence (WCAG 2.5.8 inline exception)
        if (el.tagName === "INPUT" && ["checkbox", "radio"].includes((el as HTMLInputElement).type)) {
          const lab = el.closest("label");
          if (lab && lab.getBoundingClientRect().height >= MIN) continue;
        }
        const b = el.getBoundingClientRect();
        if (b.height < MIN - 0.5 || b.width < MIN - 0.5) {
          // A control inside a bigger tappable label or row counts as that row.
          const host = el.parentElement?.closest("label,a[href],button");
          if (host && host.getBoundingClientRect().height >= MIN) continue;
          out.push({ kind: "tap", what: `${name(el)} ${Math.round(b.width)}x${Math.round(b.height)}` });
        }
      }
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      const seen = new Set<Element>();
      for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        const el = n.parentElement;
        if (!el || seen.has(el) || !(n.textContent ?? "").trim() || !visible(el) || el.closest(".sr-only,svg,[data-tap-exempt]")) continue;
        seen.add(el);
        const fs = parseFloat(getComputedStyle(el).fontSize);
        if (fs < 12) out.push({ kind: "small-text", what: `${name(el)} ${fs}px` });
      }
      return out;
    }, MIN_TAP);
    const bad = findings.filter((f) => f.kind !== "small-text");
    const warn = findings.filter((f) => f.kind === "small-text");
    failed += bad.length;
    warned += warn.length;
    console.log(`${bad.length ? "FAIL" : "ok  "} ${r.name.padEnd(18)} ${r.path}  (HTTP ${res?.status() ?? "?"})${warn.length ? `, ${warn.length} text under 12px` : ""}`);
    for (const f of bad.slice(0, 25)) console.log(`       ${f.kind}: ${f.what}`);
    if (bad.length > 25) console.log(`       ... ${bad.length - 25} more`);
    if (process.env.VERBOSE) for (const f of warn) console.log(`       warn: ${f.what}`);
    if (r.anon) await page.setCookie(...jar);
  }
} finally {
  await browser.close();
}
console.log(`\n${failed ? `${failed} problem(s)` : "No overflow and no tap target under " + MIN_TAP + "px"} on ${ROUTES.length} routes at ${WIDTH}px; ${warned} text node(s) under 12px.`);
process.exit(failed ? 1 : 0);
