// Bridge: capture Figma's own clipboard payload for every Foundry Library component, so the site's
// "Copy to Figma" pastes real, editable layers. args: {sys, file, off, budget, only}
// For each component: clone it to a scratch page, detach every instance (the paste must not depend on this file's
// components), select it and ask the local receiver (receive.mjs /copy) to press Cmd+C in Figma desktop and save
// the clipboard. The clone is deleted afterwards; the Foundry Library page is not changed.
if (figma.root.name.toLowerCase() !== args.file.toLowerCase()) throw new Error("wrong file " + figma.root.name);
const MAP = await (await fetch("http://localhost:9231/data/" + args.sys + "/copy-map.json")).json(); // node id -> slug
const LIB = figma.root.children.find((p) => p.name === "Foundry Library");
await LIB.loadAsync();
let TMP = figma.root.children.find((p) => p.name === "Ingot copy (temp)");
if (!TMP) { TMP = figma.createPage(); TMP.name = "Ingot copy (temp)"; }
await figma.setCurrentPageAsync(TMP);
const L = [];
for (const s of LIB.children) if (s.type === "SECTION") for (const c of s.children) if ((c.type === "COMPONENT" || c.type === "COMPONENT_SET") && MAP[c.id]) L.push(c);
const list = args.only ? L.filter((c) => args.only.includes(MAP[c.id])) : L.slice(args.off || 0);
let ok = 0, done = 0; const err = []; const t0 = Date.now();
for (const c of list) {
  if (Date.now() - t0 > (args.budget || 240000)) break;
  done++;
  let f = null;
  try {
    f = c.clone();
    TMP.appendChild(f);
    // turn the clone into a plain frame tree: no component, no instances
    let inst = f.findAll ? f.findAll((n) => n.type === "INSTANCE") : [];
    for (let guard = 0; inst.length && guard < 20; guard++) { for (const i of inst) { try { i.detachInstance(); } catch (e) {} } inst = f.findAll((n) => n.type === "INSTANCE"); }
    f.x = 0; f.y = 0;
    figma.currentPage.selection = [f];
    figma.viewport.scrollAndZoomIntoView([f]);
    await new Promise((r) => setTimeout(r, 120));
    const r = await (await fetch("http://localhost:9231/copy?system=" + args.sys + "&slug=" + MAP[c.id])).json();
    if (r.ok) ok++; else err.push(MAP[c.id] + ":" + r.why);
  } catch (e) { err.push(MAP[c.id] + ":" + String(e).slice(0, 80)); }
  if (f) { try { f.remove(); } catch (e) {} }
}
figma.currentPage.selection = [];
return { total: L.length, from: args.off || 0, done, ok, next: (args.off || 0) + done, finished: (args.off || 0) + done >= L.length, err: err.slice(0, 5), ms: Date.now() - t0 };
