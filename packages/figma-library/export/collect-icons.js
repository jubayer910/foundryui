// Bridge: lists every third-party icon on the Foundry Library page as set|Style|Type -> count. args: {sys, file}
if (figma.root.name.toLowerCase() !== args.file.toLowerCase()) throw new Error("wrong file " + figma.root.name);
const P = figma.root.children.find((p) => p.name === "Foundry Library");
await figma.setCurrentPageAsync(P);
const found = await findIcons(P.children.filter((s) => s.type === "SECTION"));
const combos = {};
for (const [, i] of found) { const k = i.set + "|" + i.style + "|" + i.type; combos[k] = (combos[k] || 0) + 1; }
const r = await fetch("http://localhost:9231/iconlist?system=" + args.sys, { method: "POST", body: JSON.stringify(combos) });
return { found: found.length, frames: found.filter(([, i]) => i.kind === "frame").length, unique: Object.keys(combos).length, status: r.status };
