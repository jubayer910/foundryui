// Harvest: turns blocks inside a system's product screens into library components on an additive "Foundry Library" page.
// Nothing on the source pages is edited. After all batches, run cleanup.js (QA removals, naming, atoms, relayout). Run in batches: ARGS = {system, offset, limit, roles}.
const ARGS = typeof args !== "undefined" ? args : {};
const SYSTEM = ARGS.system || "Loopo";
// ARGS.page: name of the screens page (default: first page). ARGS.minW: smallest screen width (default 1280).
const SRC = (ARGS.page && figma.root.children.find((p) => p.name === ARGS.page)) || figma.root.children[0];
const MINW = ARGS.minW || 1280;
const CONTAINER = /^(Content card|Content|Body|Main|Page body)$/;
const TEMPLATE = /^\d+\.0\b| — page\b/i;
await figma.setCurrentPageAsync(SRC);
let LIB = figma.root.children.find((p) => p.name === "Foundry Library");
if (!LIB) { LIB = figma.createPage(); LIB.name = "Foundry Library"; }

const GENERIC = /^(Frame|Group|Rectangle|Vector|Ellipse|Line) ?\d*$/;
const SKIP_SUB = /^(Menu item|Body|Spacer|Inner|Actions|Footer|Rule|Head|Head text|Title block|Items|Results|Details|Steps|Node|Content|Wrap|Row|Left|Right|Labels?)\b/;
const sig = (n, d) => { let s = n.type[0] + (n.layoutMode ? n.layoutMode[0] : ""); if (d < 3 && "children" in n) s += "(" + n.children.filter((c) => c.visible).map((c) => sig(c, d + 1)).join(",") + ")"; return s; };
const norm = (s) => s.replace(/ \/ (Hover|Selected|Active|Open|Focus|Pressed|Disabled)$/i, "").replace(/\d+/g, "#");
const named = (s) => / · |\//.test(s);

function candidates() {
  const secs = SRC.children.filter((n) => n.type === "SECTION" && /^\d\d · /.test(n.name) && !n.name.startsWith("00"));
  const seen = new Set(); const out = [];
  const add = (n, role, sec, scr) => {
    if (!n.visible || n.width < 120 || n.height < 32) return;
    if (role !== "template" && n.width >= 1200 && n.height >= 1000) return;
    if (GENERIC.test(n.name)) return;
    const size = Math.round(n.width / 60) + "x" + Math.round(n.height / 30);
    const fp = role + "|" + norm(n.name) + "|" + size + (named(n.name) ? "" : "|" + sig(n, 0));
    if (seen.has(fp)) return; seen.add(fp);
    out.push({ id: n.id, role, sec: sec.name, scr: scr.name });
  };
  for (const sec of secs) for (const scr of sec.children) {
    if (scr.type !== "FRAME" || scr.width < MINW || /^Notes\b/.test(scr.name)) continue;
    if (TEMPLATE.test(scr.name)) add(scr, "template", sec, scr);
    const tops = [];
    for (const c of scr.children) {
      if (CONTAINER.test(c.name) && "children" in c) for (const b of c.children) tops.push([b, "block"]);
      else if (/^Shell\//.test(c.name)) tops.push([c, "shell"]);
      else if (c.type === "FRAME" || c.type === "INSTANCE" || c.type === "GROUP") tops.push([c, "overlay"]);
    }
    for (const [t, r] of tops) add(t, r, sec, scr);
    for (const [t] of tops) if ("children" in t) for (const s of t.children) if ("children" in s && !SKIP_SUB.test(s.name)) add(s, "sub", sec, scr);
  }
  return out;
}

function inIcon(x, root) { let p = x.parent; while (p && p !== root) { if (/^Icon\//.test(p.name)) return true; p = p.parent; } return false; }
function category(n, role) {
  const nm = n.name.toLowerCase();
  if (role === "template") return "Templates";
  if (role === "shell" || /sidebar|top bar|tab bar|breadcrumb|toolbar|editor bar|bulk action|tabs/.test(nm)) return "Navigation";
  if (/^modal/.test(nm)) return "Overlays/Modals";
  if (/^drawer/.test(nm)) return "Overlays/Drawers";
  if (/^menu|dropdown/.test(nm)) return "Overlays/Menus";
  if (/^popover|command palette|tooltip|annotation/.test(nm)) return "Overlays/Popovers";
  if (/toast|empty|banner|alert|helpful|callout/.test(nm)) return "Feedback";
  if (/kpi|stat|metric/.test(nm)) return "KPI and stats";
  if (/table|all |list|people|posts|top |up next|articles|flows$|checklist|matrix|invoices|transactions|members/.test(nm)) return "Tables and lists";
  if (/canvas|builder|editor|paper|tools|preview|zoom/.test(nm)) return "Editors";
  if (/your forms|form cards|suggest|plan card/.test(nm)) return "Cards and panels";
  // icon vectors do not count: only drawn chart geometry
  const vec = "findAll" in n ? n.findAll((x) => (x.type === "VECTOR" || x.type === "LINE") && !inIcon(x, n)).length : 0;
  const bars = "findAll" in n ? n.findAll((x) => /^bar/i.test(x.name)).length : 0;
  if (/chart|trend|heatmap|graph|cohort|retention|comparison|volume|bars|growth|revenue|best time|breakdown|sources|channels|plans|funnel/.test(nm) || bars >= 5 || vec >= 6) return "Charts";
  const rows = "findAll" in n ? n.findAll((x) => /^(row|source|item)\b/i.test(x.name)).length : 0;
  if (rows >= 3) return "Tables and lists";
  if (/header|title|head$/.test(nm)) return "Headers";
  if (/form|field|input|search|settings|select|toggle|format/.test(nm)) return "Forms";
  return "Cards and panels";
}

function keywords(n) {
  if (!("findAll" in n)) return "";
  const t = []; for (const x of n.findAll((x) => x.type === "TEXT")) { const c = x.characters.trim(); if (c && c.length < 32 && !t.includes(c)) t.push(c); if (t.length >= 8) break; }
  return t.join(", ");
}

function sectionFor(cat) {
  const name = SYSTEM + " / " + cat;
  let s = LIB.children.find((x) => x.type === "SECTION" && x.name === name);
  if (!s) { s = figma.createSection(); s.name = name; LIB.appendChild(s); s.resizeWithoutConstraints(800, 400); }
  return s;
}
function place(sec, node) {
  const PAD = 80, MAXW = 6400, GAP = 64;
  const kids = sec.children.filter((k) => k !== node);
  if (!kids.length) { node.x = PAD; node.y = PAD + 40; return; }
  const last = kids[kids.length - 1];
  let x = last.x + last.width + GAP, y = last.y;
  if (x + node.width > MAXW) { x = PAD; y = Math.max(...kids.map((k) => k.y + k.height)) + GAP; }
  node.x = x; node.y = y;
}
function fitSections() {
  let y = 0;
  const order = ["Templates", "Navigation", "Headers", "KPI and stats", "Charts", "Tables and lists", "Cards and panels", "Forms", "Editors", "Overlays/Modals", "Overlays/Drawers", "Overlays/Menus", "Overlays/Popovers", "Feedback", "Atoms"];
  const secs = LIB.children.filter((x) => x.type === "SECTION").sort((a, b) => order.indexOf(a.name.split(" / ").slice(1).join(" / ")) - order.indexOf(b.name.split(" / ").slice(1).join(" / ")));
  for (const s of secs) {
    const w = Math.max(800, ...s.children.map((k) => k.x + k.width + 80)), h = Math.max(400, ...s.children.map((k) => k.y + k.height + 80));
    s.resizeWithoutConstraints(w, h); s.x = 0; s.y = y; y += h + 240;
  }
}

const all = candidates();
if (ARGS.dry) { const by = {}; for (const c of all) by[c.role] = (by[c.role] || 0) + 1; return { total: all.length, by, screens: new Set(all.map((c) => c.scr)).size }; }
const off = ARGS.offset || 0, lim = ARGS.limit || 20;
const done = [], errors = [];
for (const c of all.slice(off, off + lim)) {
  try {
    const src = await figma.getNodeByIdAsync(c.id);
    let cl = src.clone();
    if (cl.type === "INSTANCE") cl = cl.detachInstance();
    if (cl.type === "GROUP") { const f = figma.createFrame(); f.fills = []; f.resize(cl.width, cl.height); f.appendChild(cl); cl.x = 0; cl.y = 0; cl = f; }
    const cat = category(src, c.role);
    const sec = sectionFor(cat);
    sec.appendChild(cl);
    const comp = figma.createComponentFromNode(cl);
    const nm = src.name.replace(/ \/ (Hover|Selected|Active|Open)$/i, "").replace(/^(Panel|Modal|Drawer|Menu|Popover|Integration) (·|\/) /, "$1 ").replace(/ ?\/ ?/g, " ");
    comp.name = SYSTEM + "/" + cat.replace("Overlays/", "") + "/" + nm;
    comp.description = cat.replace("/", ", ") + ". From the " + SYSTEM + " " + c.sec.replace(/^\d\d · /, "") + " screen \"" + c.scr + "\". Content: " + keywords(src);
    place(sec, comp);
    done.push(cat);
  } catch (e) { errors.push({ src: c.id, e: String(e).slice(0, 120) }); }
}
fitSections();
const by = {}; for (const k of done) by[k] = (by[k] || 0) + 1;
return { total: all.length, offset: off, created: done.length, next: off + lim < all.length ? off + lim : null, by, errors };
