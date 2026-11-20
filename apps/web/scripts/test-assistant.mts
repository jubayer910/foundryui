/**
 * Help assistant quality check: runs EVAL (lib/support/eval-questions.ts) through the real engine and prints
 * top-1 / top-3 accuracy and every failure, then checks multi-turn flows.
 *
 * KB: the seed SQL (migrations/0002_kb_seed.sql, plus 0013_kb_expand.sql when present) loaded into an in-memory
 * SQLite, like scripts/test-kb-match.mts. Live tools are stubbed with fixed data (no network, no D1).
 *
 *   cd apps/web && npx tsx scripts/test-assistant.mts            # summary + failures
 *   npx tsx scripts/test-assistant.mts --verbose                  # every case
 */
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";
import type { KbLike } from "../lib/support/match.ts";
import { Assistant, type Tools } from "../lib/support/assistant/engine.ts";
import { iconWords, searchIconMeta, type IconMeta } from "../lib/support/assistant/icons.ts";
import type { DialogState, Reply } from "../lib/support/assistant/types.ts";
import { canonicalIntent } from "../lib/support/assistant/intents.ts";
import { EVAL } from "../lib/support/eval-questions.ts";

const verbose = process.argv.includes("--verbose");
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const launch = readFileSync(join(root, "migrations/0001_launch.sql"), "utf8");
const create = launch.match(/CREATE TABLE `kb_article`[\s\S]*?\);/)?.[0];
if (!create) throw new Error("kb_article table not found in 0001_launch.sql");
const db = new DatabaseSync(":memory:");
db.exec(create);
db.exec("CREATE UNIQUE INDEX `kb_article_slug_unique` ON `kb_article` (`slug`);");
const seeds = ["migrations/0002_kb_seed.sql", "migrations/0013_kb_expand.sql"].filter((f) => existsSync(join(root, f)));
for (const f of seeds) db.exec(readFileSync(join(root, f), "utf8"));
const articles = db.prepare("SELECT id, slug, question, answer, keywords, category FROM kb_article WHERE published = 1").all() as unknown as KbLike[];

const meta = JSON.parse(readFileSync(join(root, "public/icons/index.json"), "utf8")) as IconMeta[];
const tools: Tools = {
  iconWords,
  async icons(words, limit) {
    const r = searchIconMeta(meta, words, limit);
    return { items: r.items.map((m) => ({ name: m.n, category: m.c, svg: null, url: "/icons?q=" + m.n })), total: r.total };
  },
  async pricing() {
    return { monthly: true, proMonthly: 9, proYearly: 79, teamMonthly: 29, teamYearly: 249, teamSeats: 5, lifetime: 29, lifetimeAfter: 149, dealActive: true, dealSpotsLeft: 150, dealEndsAt: "2026-11-30T23:59:00.000Z", dealRule: "When all 200 spots are taken, Lifetime goes to $149." };
  },
  async account() {
    return { signedIn: true, name: "Test", plan: "free", planLabel: "Free", paid: false, actionsToday: 3, mcpToday: 7, mcpLimit: 50, apiKeys: 1 };
  },
};

const bot = new Assistant(articles);
console.log(`KB: ${articles.length} published articles from ${seeds.join(", ")}. Vocabulary ${bot.vocab.size} words.\n`);

/* ---------- 1. single questions ---------- */
const label = (r: Reply) => r.article ?? r.intent;
let top1 = 0;
let top3 = 0;
const fails: string[] = [];
const t0 = performance.now();
for (const c of EVAL) {
  const { reply } = await bot.respond(c.q, undefined, tools);
  // accepted: the expected article or its alternatives, or the expected intent (aliases folded, e.g. greet = greeting)
  const want = new Set([c.article, ...(c.alt ?? []), c.intent ? canonicalIntent(c.intent) : undefined].filter(Boolean) as string[]);
  const first = [canonicalIntent(reply.intent), reply.article].filter(Boolean) as string[];
  const three = [...first, ...(reply.alternatives ?? []).slice(0, 2)];
  // no expectation = nonsense: the right answer is to admit it (unknown) or ask (clarify)
  const none = !want.size && (reply.intent === "unknown" || reply.intent === "clarify");
  const ok1 = none || first.some((x) => want.has(x));
  const ok3 = none || three.some((x) => want.has(x));
  if (ok1) top1++;
  if (ok3) top3++;
  const line = `${ok1 ? "PASS" : ok3 ? "TOP3" : "FAIL"}  ${JSON.stringify(c.q).padEnd(58)} -> ${label(reply)} (${reply.intent}, ${reply.confidence})${ok1 ? "" : "   expected " + [...want].join(" | ")}`;
  if (!ok1) fails.push(line);
  if (verbose || !ok1) console.log(line);
}
const ms = (performance.now() - t0) / Math.max(1, EVAL.length);
const pct = (n: number) => ((100 * n) / Math.max(1, EVAL.length)).toFixed(1) + "%";
console.log(`\nEVAL: ${EVAL.length} questions. top-1 ${top1} (${pct(top1)}), top-3 ${top3} (${pct(top3)}). ${ms.toFixed(1)} ms per question.\n`);

/* ---------- 2. multi-turn flows ---------- */
let flowFail = 0;
async function flow(name: string, turns: [string, (r: Reply, s: DialogState) => boolean][]) {
  let st: DialogState | undefined;
  const log: string[] = [];
  let ok = true;
  for (const [msg, check] of turns) {
    const { reply, state } = await bot.respond(msg, st, tools);
    st = state;
    const pass = check(reply, state);
    const cards = (reply.cards ?? []).map((c) => c.type + (c.type === "components" ? `:${c.items.length}/${c.total}` : c.type === "steps" ? ":" + c.title : "")).join(",");
    log.push(`   ${pass ? "ok " : "BAD"} "${msg}" -> [${reply.intent}] ${reply.text.slice(0, 90).replace(/\n/g, " ")}${cards ? "  {" + cards + "}" : ""}${reply.chips?.length ? "  chips: " + reply.chips.join(" | ") : ""}`);
    if (!pass) ok = false;
  }
  if (!ok) flowFail++;
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}`);
  if (!ok || verbose) console.log(log.join("\n"));
}
const comps = (r: Reply) => r.cards?.find((c) => c.type === "components");

await flow("find component -> only Loopo -> show more", [
  ["do you have a data table", (r) => r.intent === "find_component" && !!comps(r)?.items.length],
  ["only Loopo", (r) => { const c = comps(r); return !!c && c.items.every((i) => i.system === "loopo"); }],
  ["show more", (r, s) => { const c = comps(r); return !!c && c.page === 1 && c.items.every((i) => i.system === "loopo") && s.page === 1; }],
]);
await flow("kanban board -> free only", [
  ["do you have a kanban board?", (r) => r.intent === "find_component" && !!comps(r)?.items.some((i) => /kanban/i.test(i.name))],
  ["only free ones", (r) => r.intent === "find_component"],
]);
await flow("pricing table is a component, not prices", [["show me a pricing table", (r) => r.intent === "find_component"]]);
await flow("setup MCP -> what about Cursor", [
  ["set up MCP", (r, s) => r.intent === "setup_mcp" && s.pending?.kind === "slot"],
  ["Claude Code", (r) => r.cards?.[0]?.type === "steps" && r.text.includes("Claude Code")],
  ["what about Cursor?", (r) => r.cards?.[0]?.type === "steps" && r.text.includes("Cursor")],
]);
await flow("pricing -> is it one time?", [
  ["how much is it?", (r) => r.intent === "pricing" && r.cards?.[0]?.type === "pricing"],
  ["is it one time?", (r) => r.intent === "lifetime" && /one payment/i.test(r.text)],
]);
await flow("buy -> payment or activation", [
  ["I want to buy lifetime", (r) => r.intent === "buy" || r.intent === "lifetime"],
  ["Payment or activation", (r) => !!r.article || r.intent === "payment_activation"],
]);
await flow("unknown -> clarify -> human", [
  ["blorf the wizzle quantum", (r, s) => r.intent === "unknown" && s.misses === 1],
  ["zzzz qqqq", (r, s) => r.intent === "unknown" && s.pending?.kind === "confirm"],
  ["yes", (r) => r.intent === "human" && !!r.handoff],
]);
await flow("system -> its components", [
  ["tell me about montra", (r) => r.intent === "show_system" && r.cards?.[0]?.type === "system"],
  ["Show Montra components", (r) => !!comps(r) && comps(r)!.items.every((i) => i.system === "montra")],
]);
await flow("icons -> more", [
  ["do you have an arrow icon", (r) => r.intent === "find_icon" && r.cards?.[0]?.type === "icons"],
  ["more", (r) => r.intent === "find_icon"],
]);
await flow("typos", [["how do i conect cursr", (r) => r.intent === "setup_mcp"], ["prcing", (r) => r.intent === "pricing"]]);
await flow("account status", [["what plan am I on?", (r) => r.intent === "account_status" && r.cards?.[0]?.type === "account"]]);

console.log(`\nFlows: ${flowFail ? flowFail + " failed" : "all passed"}.`);
process.exit(flowFail ? 1 : 0);
