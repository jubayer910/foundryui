// Automated accessibility check for Ingot UI components (axe-core in headless Chrome).
//
//   node scripts/a11y-check.mjs [--per-system 8] [--base http://localhost:3406]
//
// What it does
// 1. Generated components: picks a stratified sample (every system, spread over its categories,
//    deterministic so runs are comparable) and runs axe on the pre-rendered preview page
//    (public/library-preview/<system>/<slug>.html), scoped to the component itself.
// 2. Hand-built Loopo components (registry/components): with --base, opens each component page
//    on a running dev server and runs axe on the live preview only, then a keyboard pass
//    (Tab order, visible focus, open/close with Enter and Escape, arrow keys, focus return).
// 3. Site pages: with --base, runs axe on a few full pages of the site.
// 4. A code census over every published generated component (public/library-code): how many use
//    native controls, roles and ARIA. axe cannot judge a static picture of a button that is a <div>,
//    so this is reported next to the axe numbers.
//
// Output: app/accessibility/summary.json (small, committed, read by /accessibility and component pages) and
//         .qa/a11y/results.json (every result, not committed).
// Nothing in the components is changed by this script.
import { readFile, writeFile, mkdir, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const WEB = new URL("../", import.meta.url).pathname;
const arg = (k, d) => { const i = process.argv.indexOf("--" + k); return i > 0 ? process.argv[i + 1] : d; };
const PER_SYSTEM = Number(arg("per-system", 8));
const BASE = arg("base", "");
const CHROME = process.env.CHROME || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

// puppeteer-core lives with the Figma export tools; fall back to a local install
const req = createRequire(import.meta.url);
let puppeteer;
for (const p of [WEB + "../../packages/figma-library/export/package.json", "/Users/muhammadjubayer/Documents/FoundryUI/packages/figma-library/export/package.json", WEB + "package.json"]) {
  try { puppeteer = createRequire(p)("puppeteer-core"); break; } catch {}
}
if (!puppeteer) { console.error("puppeteer-core not found"); process.exit(1); }
const AXE = await readFile(req.resolve("axe-core/axe.min.js"), "utf8");
const AXE_VERSION = JSON.parse(await readFile(req.resolve("axe-core/package.json"), "utf8")).version;

const SYSTEMS = ["loopo", "auton", "mailpulse", "axon", "veriq", "vantage"];
const items = JSON.parse(await readFile(WEB + "lib/figma-items.json", "utf8"));
const coded = JSON.parse(await readFile(WEB + "lib/figma-code.json", "utf8"));
const PREVIEW = WEB + "public/library-preview/";

// ---- 1. stratified sample of generated components -------------------------------------------
function sample(system) {
  const pool = items.filter((i) => i.system === system && coded[i.slug] && existsSync(PREVIEW + system + "/" + i.slug + ".html"));
  const byCat = new Map();
  for (const i of pool.sort((a, b) => a.slug.localeCompare(b.slug))) { if (!byCat.has(i.category)) byCat.set(i.category, []); byCat.get(i.category).push(i); }
  // biggest categories first, then take one from each in turn, from evenly spaced positions
  const cats = [...byCat.entries()].sort((a, b) => b[1].length - a[1].length);
  const out = [];
  for (let round = 0; out.length < PER_SYSTEM && round < 50; round++) {
    for (const [, list] of cats) {
      if (out.length >= PER_SYSTEM) break;
      const pos = Math.floor(((round * 0.618 + 0.5) % 1) * list.length);
      const pick = list[pos];
      if (pick && !out.includes(pick)) out.push(pick);
    }
  }
  return out;
}
const generated = SYSTEMS.flatMap(sample);

// WCAG 2.0–2.2 A and AA rules plus axe best practices. Page-level rules (landmarks, page heading,
// document title) are switched off for components, which are not pages.
const TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"];
const PAGE_RULES = ["region", "landmark-one-main", "page-has-heading-one", "document-title", "html-has-lang", "bypass", "landmark-complementary-is-top-level", "meta-viewport"];
const levelOf = (tags) => (tags.some((t) => /^wcag2\d?a$/.test(t)) ? "A" : tags.some((t) => /^wcag2\d?aa$/.test(t)) ? "AA" : "best practice");

async function runAxe(page, include, disable = []) {
  await page.evaluate(AXE);
  return page.evaluate(async (include, disable, tags) => {
    const rules = Object.fromEntries(disable.map((r) => [r, { enabled: false }]));
    const r = await window.axe.run(include ? { include: [include] } : document, { runOnly: { type: "tag", values: tags }, rules, resultTypes: ["violations", "incomplete"] });
    const slim = (v) => ({ id: v.id, impact: v.impact, tags: v.tags, help: v.help, helpUrl: v.helpUrl, nodes: v.nodes.length, sample: v.nodes.slice(0, 2).map((n) => ({ target: n.target.join(" "), html: n.html.slice(0, 180), summary: (n.failureSummary || "").split("\n").slice(0, 3).join(" ").slice(0, 240) })) });
    return { violations: r.violations.map(slim), incomplete: r.incomplete.map((v) => ({ id: v.id, nodes: v.nodes.length })), passes: r.passes?.length ?? 0 };
  }, include, disable, TAGS);
}

const browser = await puppeteer.launch({ executablePath: CHROME, headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1000 });
const results = [];

for (const it of generated) {
  const url = pathToFileURL(PREVIEW + it.system + "/" + it.slug + ".html").href;
  try {
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
    const ax = await runAxe(page, "#c", PAGE_RULES);
    results.push({ kind: "generated", system: it.system, category: it.category, slug: it.slug, name: it.name, ...ax });
  } catch (e) {
    results.push({ kind: "generated", system: it.system, category: it.category, slug: it.slug, name: it.name, error: String(e).slice(0, 160) });
  }
  process.stdout.write(".");
}

// ---- 2. hand-built components + keyboard pass -------------------------------------------------
const HAND = ["button", "icon-button", "badge", "delta-chip", "input", "search-field", "select", "segmented-control", "tabs", "switch", "checkbox", "avatar-group", "tooltip", "dropdown-menu", "dialog", "capsule-bars", "stacked-blocks", "line-highlight", "donut", "pill-meter", "hatch-track-list", "kpi-card", "ranked-list", "data-table", "empty-state", "sidebar-nav"];
const CATS = { button: "Atoms", "icon-button": "Atoms", badge: "Atoms", "delta-chip": "Atoms", "avatar-group": "Atoms", input: "Forms", "search-field": "Forms", select: "Forms", switch: "Forms", checkbox: "Forms", "segmented-control": "Forms", tabs: "Navigation", "sidebar-nav": "Navigation", tooltip: "Popovers", "dropdown-menu": "Menus", dialog: "Modals", "kpi-card": "KPI and stats", "ranked-list": "Tables and lists", "data-table": "Tables and lists", "empty-state": "Feedback" };
const keyboard = [];

// Tab through the preview; at each stop record the focused look, then compare with the same element
// unfocused: an outline/ring/border change, a colour-only change, or nothing visible
const LOOK = `(el) => { const s = getComputedStyle(el); return { o: s.outlineStyle !== "none" && parseFloat(s.outlineWidth) > 0 ? s.outlineStyle + s.outlineWidth + s.outlineColor : "", b: s.boxShadow, br: s.borderColor, c: s.color, bg: s.backgroundColor }; }`;
const kind = (on, off) => (!off ? "unknown" : on.o !== off.o || on.b !== off.b || on.br !== off.br ? "indicator" : on.c !== off.c || on.bg !== off.bg ? "colour only" : "none");

async function tabStops(page) {
  const stops = [];
  // start just before the preview: focus the element right before it, then Tab in
  const ready = await page.evaluate(() => {
    const root = document.querySelector("main [data-system]");
    if (!root) return false;
    const probe = document.createElement("button");
    probe.id = "a11y-probe-start"; probe.textContent = "start"; probe.style.cssText = "position:absolute;opacity:0";
    root.parentElement.insertBefore(probe, root);
    probe.focus();
    return true;
  });
  if (!ready) return stops;
  for (let i = 0; i < 25; i++) {
    await page.keyboard.press("Tab");
    await new Promise((r) => setTimeout(r, 80));
    const s = await page.evaluate((LOOK, i) => {
      const el = document.activeElement;
      if (!el || !el.closest("main [data-system]")) return null;
      el.setAttribute("data-a11y-stop", String(i));
      return { on: eval(LOOK)(el), role: el.getAttribute("role") || el.tagName.toLowerCase(), label: (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 40), name: !!(el.getAttribute("aria-label") || el.getAttribute("aria-labelledby") || el.textContent?.trim() || el.labels?.length || el.closest("label")) };
    }, LOOK, i);
    if (!s) break;
    stops.push(s);
  }
  await page.evaluate(() => { document.activeElement?.blur(); document.getElementById("a11y-probe-start")?.remove(); });
  await new Promise((r) => setTimeout(r, 80));
  for (let i = 0; i < stops.length; i++) {
    const off = await page.evaluate((LOOK, i) => { const el = document.querySelector(`[data-a11y-stop="${i}"]`); return el ? eval(LOOK)(el) : null; }, LOOK, i);
    stops[i] = { role: stops[i].role, label: stops[i].label, hasName: stops[i].name, focus: kind(stops[i].on, off) };
  }
  return stops;
}

async function overlayCheck(page, slug) {
  // open with Enter from the keyboard, check focus moved in, close with Escape, check focus came back
  const triggerSel = "main [data-system] button";
  const has = await page.$(triggerSel);
  if (!has) return null;
  await page.focus(triggerSel);
  const before = await page.evaluate(() => document.activeElement?.textContent?.trim().slice(0, 30));
  await page.keyboard.press(slug === "select" ? "ArrowDown" : "Enter");
  await new Promise((r) => setTimeout(r, 400));
  const opened = await page.evaluate(() => {
    const pop = document.querySelector("[role=dialog],[role=menu],[role=listbox]");
    return { role: pop?.getAttribute("role") ?? null, focusInside: !!(pop && pop.contains(document.activeElement)), focused: document.activeElement?.getAttribute("role") || document.activeElement?.tagName.toLowerCase(), labelled: !!(pop && (pop.getAttribute("aria-labelledby") || pop.getAttribute("aria-label"))), modal: pop?.getAttribute("aria-modal") ?? null };
  });
  let arrow = null;
  if (opened.role === "menu" || opened.role === "listbox") {
    const a = await page.evaluate(() => document.activeElement?.textContent?.trim());
    await page.keyboard.press("ArrowDown");
    await new Promise((r) => setTimeout(r, 120));
    const b = await page.evaluate(() => document.activeElement?.textContent?.trim());
    arrow = a !== b;
  }
  let trapped = null;
  if (opened.role === "dialog") {
    for (let i = 0; i < 6; i++) await page.keyboard.press("Tab");
    trapped = await page.evaluate(() => !!document.activeElement?.closest("[role=dialog]"));
  }
  await page.keyboard.press("Escape");
  await new Promise((r) => setTimeout(r, 400));
  const closed = await page.evaluate((before) => ({ gone: ![...document.querySelectorAll("[role=dialog],[role=menu],[role=listbox]")].some((e) => e.checkVisibility?.() ?? true), returned: document.activeElement?.textContent?.trim().slice(0, 30) === before }), before);
  return { opensWith: slug === "select" ? "ArrowDown" : "Enter", ...opened, arrowKeysMove: arrow, focusTrapped: trapped, escapeCloses: closed.gone, focusReturns: closed.returned };
}

async function tabsCheck(page) {
  const sel = "main [data-system] [role=tab]";
  if (!(await page.$(sel))) return null;
  await page.focus(sel);
  await page.keyboard.press("ArrowRight");
  await new Promise((r) => setTimeout(r, 150));
  return page.evaluate(() => ({ arrowMovesFocus: document.activeElement?.getAttribute("role") === "tab" && document.activeElement !== document.querySelector("main [data-system] [role=tab]"), selectedFollows: document.activeElement?.getAttribute("aria-selected") === "true" }));
}

if (BASE) {
  for (const slug of HAND) {
    try {
      await page.goto(BASE + "/components/" + slug, { waitUntil: "networkidle0", timeout: 60000 });
      await page.waitForSelector("main [data-system]", { timeout: 15000 });
      // only the live preview at the top: related cards further down also carry data-system
      await page.evaluate(() => document.querySelector("main [data-system]")?.setAttribute("data-a11y-root", ""));
      const ax = await runAxe(page, "[data-a11y-root]", PAGE_RULES);
      results.push({ kind: "hand-built", system: "loopo", category: CATS[slug] ?? (/(bars|blocks|line|donut|meter|track)/.test(slug) ? "Charts" : "Cards and panels"), slug, name: slug, ...ax });
      const k = { slug, tabStops: await tabStops(page) };
      if (["dialog", "dropdown-menu", "select"].includes(slug)) { await page.reload({ waitUntil: "networkidle0" }); k.overlay = await overlayCheck(page, slug); }
      if (slug === "tabs") k.tabs = await tabsCheck(page);
      keyboard.push(k);
    } catch (e) {
      results.push({ kind: "hand-built", system: "loopo", slug, name: slug, error: String(e).slice(0, 160) });
    }
    process.stdout.write("+");
  }
}

// ---- 3. site pages --------------------------------------------------------------------------------
const pages = [];
if (BASE) {
  for (const path of ["/", "/components/dialog", "/components/" + generated[0]?.slug, "/systems", "/pricing", "/accessibility"]) {
    try {
      const res = await page.goto(BASE + path, { waitUntil: "networkidle0", timeout: 60000 });
      if (!res || res.status() >= 400) { pages.push({ path, status: res?.status() }); continue; }
      const ax = await runAxe(page, null, []);
      pages.push({ path, violations: ax.violations });
    } catch (e) { pages.push({ path, error: String(e).slice(0, 160) }); }
  }
}
await browser.close();

// ---- 4. code census of every published generated component ----------------------------------------
const census = { files: 0, withButton: 0, withInput: 0, withRole: 0, withAriaLabel: 0, withHeading: 0 };
for (const sys of SYSTEMS) {
  const dir = WEB + "public/library-code/" + sys + "/";
  if (!existsSync(dir)) continue;
  for (const f of await readdir(dir)) {
    const t = await readFile(dir + f, "utf8");
    census.files++;
    if (/<button[\s>]/.test(t)) census.withButton++;
    if (/<(input|select|textarea)[\s>]/.test(t)) census.withInput++;
    if (/\srole=/.test(t)) census.withRole++;
    if (/aria-label(ledby)?=/.test(t)) census.withAriaLabel++;
    if (/<h[1-6][\s>]/.test(t)) census.withHeading++;
  }
}

// ---- summary -------------------------------------------------------------------------------------
const ok = results.filter((r) => !r.error);
const byRule = new Map();
for (const r of ok) for (const v of r.violations) {
  const e = byRule.get(v.id) ?? { id: v.id, help: v.help, helpUrl: v.helpUrl, impact: v.impact, level: levelOf(v.tags), components: 0, nodes: 0, examples: [] };
  e.components++; e.nodes += v.nodes;
  if (e.examples.length < 3) e.examples.push({ slug: r.slug, system: r.system, kind: r.kind, target: v.sample[0]?.target, html: v.sample[0]?.html, summary: v.sample[0]?.summary });
  byRule.set(v.id, e);
}
const top = [...byRule.values()].sort((a, b) => b.components - a.components || b.nodes - a.nodes);
const clean = ok.filter((r) => r.violations.filter((v) => levelOf(v.tags) !== "best practice").length === 0).length;
const per = (key) => { const m = {}; for (const r of ok) { const k = r[key] ?? "other"; m[k] ??= { checked: 0, clean: 0 }; m[k].checked++; if (!r.violations.some((v) => levelOf(v.tags) !== "best practice")) m[k].clean++; } return m; };
const summary = {
  date: new Date().toLocaleDateString("en-CA"), // local YYYY-MM-DD
  tool: "axe-core " + AXE_VERSION + " in headless Chrome",
  rules: "WCAG 2.0, 2.1 and 2.2 level A and AA rules, plus axe best practices. Page-level rules (landmarks, page heading, document title) are off for components.",
  checked: { total: ok.length, generated: ok.filter((r) => r.kind === "generated").length, handBuilt: ok.filter((r) => r.kind === "hand-built").length, errors: results.length - ok.length },
  cleanAtWcagAA: clean,
  bySystem: per("system"),
  byCategory: per("category"),
  topIssues: top.slice(0, 12),
  keyboard,
  sitePages: pages.map((p) => ({ path: p.path, status: p.status, error: p.error, violations: p.violations?.map((v) => ({ id: v.id, impact: v.impact, level: levelOf(v.tags), nodes: v.nodes, help: v.help })) })),
  codeCensus: census,
  // per component: the WCAG A/AA rules it failed (best practices left out), for its page
  components: Object.fromEntries(ok.map((r) => [r.slug, r.violations.filter((v) => levelOf(v.tags) !== "best practice").map((v) => ({ id: v.id, help: v.help, nodes: v.nodes }))])),
};
await mkdir(WEB + "app/accessibility", { recursive: true });
await writeFile(WEB + "app/accessibility/summary.json", JSON.stringify(summary, null, 1) + "\n");
await mkdir(WEB + ".qa/a11y", { recursive: true });
await writeFile(WEB + ".qa/a11y/results.json", JSON.stringify({ results, keyboard, pages }, null, 1));
console.log("\n" + JSON.stringify({ checked: summary.checked, cleanAtWcagAA: clean, top: top.slice(0, 8).map((t) => `${t.id} (${t.level}): ${t.components} components, ${t.nodes} nodes`), census }, null, 1));
