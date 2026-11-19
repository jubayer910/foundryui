// Test helper: `node --import ./scripts/server-only-stub.mjs` makes `import "server-only"` a no-op outside Next,
// so server modules (lib/*) can run in plain Node scripts such as scripts/test-contra-sync.mts.
import { register } from "node:module";
import Module from "node:module";

register(
  "data:text/javascript," +
    encodeURIComponent(`export async function resolve(s, c, next) { if (s === "server-only") return { url: "data:text/javascript,", shortCircuit: true }; return next(s, c); }`),
);
// CommonJS path (tsx compiles some files to CJS).
const orig = Module._resolveFilename;
Module._resolveFilename = function (req, ...rest) {
  if (req === "server-only") return "data:text/javascript,";
  return orig.call(this, req, ...rest);
};
const origLoad = Module._load;
Module._load = function (req, ...rest) {
  if (req === "server-only") return {};
  return origLoad.call(this, req, ...rest);
};
