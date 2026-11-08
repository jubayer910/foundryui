# Figma icon library builder

Builds the Foundry Icons library in Figma file `lRejDVlVy6he4KaFaqbNiA` (Platform · Icons):
one page per category (`Icons · <Category>`), one component set per icon with a
`Style` property (Stroke Rounded, Stroke Sharp, Solid, Duotone, Twotone, Bulk),
colours bound to `icon/primary` and `icon/secondary`, stroke weight bound to `icon/stroke`.

1. Build the icon data: `npm run build` in `packages/icons`.
2. Serve it on loopback (the Desktop Bridge plugin may only call localhost:9223–9232):
   `node figma/serve.mjs ../../apps/web/public/icons` (expects `builder.js` in `./tool/`).
3. With the Figma Desktop Bridge plugin open in the file, run per batch:
   ```js
   const { code } = await (await fetch("http://localhost:9230/?f=tool/builder.js")).json();
   const run = new Function("args", "return (async () => {\n" + code + "\n})()");
   return await run({ category: "Arrows", offset: 0, limit: 150 });
   ```
   Existing icons are skipped, so batches can be re-run safely.
