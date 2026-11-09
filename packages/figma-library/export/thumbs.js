// Bridge: re-export every Foundry Library component thumbnail (after edits such as the icon swap). args: {sys, file}
if (figma.root.name.toLowerCase() !== args.file.toLowerCase()) throw new Error("wrong file " + figma.root.name);
const P = figma.root.children.find((p) => p.name === "Foundry Library");
await figma.setCurrentPageAsync(P);
const L = [];
for (const s of P.children) if (s.type === "SECTION") for (const c of s.children) if (c.type === "COMPONENT" || c.type === "COMPONENT_SET") L.push(c);
let ok = 0; const err = []; const t0 = Date.now();
for (const c of L.slice(args.off || 0)) {
  if (Date.now() - t0 > (args.budget || 45000)) break;
  try {
    const sc = Math.min(1, 1400 / Math.max(c.width, c.height));
    const b = await c.exportAsync({ format: "PNG", constraint: { type: "SCALE", value: Math.max(sc, 0.1) } });
    const r = await fetch("http://localhost:9231/thumb?system=" + args.sys + "&id=" + c.id.replace(/[:;]/g, "-"), { method: "POST", body: figma.base64Encode(b) });
    if (r.ok) ok++; else err.push(c.id);
  } catch (e) { err.push(c.id + ":" + String(e).slice(0, 60)); }
}
return { total: L.length, from: args.off || 0, ok, next: (args.off || 0) + ok + err.length, err: err.slice(0, 4), ms: Date.now() - t0 };
