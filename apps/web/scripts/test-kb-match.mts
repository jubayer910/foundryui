/**
 * Knowledge-base matcher test: loads the real seed (migrations/0002_kb_seed.sql) into an in-memory
 * SQLite and checks that real customer questions get the expected answer first.
 * Run: node scripts/test-kb-match.mts
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { DatabaseSync } from "node:sqlite";
import { matchArticles, type KbLike } from "../lib/support/match.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const launch = readFileSync(join(root, "migrations/0001_launch.sql"), "utf8");
const create = launch.match(/CREATE TABLE `kb_article`[\s\S]*?\);/)?.[0];
if (!create) throw new Error("kb_article table not found in 0001_launch.sql");
const db = new DatabaseSync(":memory:");
db.exec(create);
db.exec(readFileSync(join(root, "migrations/0002_kb_seed.sql"), "utf8"));
const articles = db.prepare("SELECT id, slug, question, answer, keywords, category FROM kb_article WHERE published = 1").all() as unknown as KbLike[];

/** [question, expected top slug] — `null` means nothing should match. */
const CASES: [string, string | null][] = [
  ["how much does it cost?", "pricing-plans"],
  ["what's the price of pro", "pricing-plans"],
  ["I want my money back", "refund-policy"],
  ["can I get a refund", "refund-policy"],
  ["how do I unsubscribe", "cancel-subscription"],
  ["cancel my subscription", "cancel-subscription"],
  ["where is my receipt", "invoices-receipts"],
  ["I need an invoice with VAT for my company", "invoices-receipts"],
  ["lifetime deal how many spots left", "lifetime-deal"],
  ["is there a one time payment option", "lifetime-deal"],
  ["can I pay with a credit card", "checkout-opening"],
  ["can I use this for client projects", "commercial-use"],
  ["is a commercial license included", "commercial-use"],
  ["what happens to my code if I stop paying", "stop-paying"],
  ["can I resell the components on a marketplace", "resell-library"],
  ["how do I install it", "install-cli"],
  ["npx command to add a component", "install-cli"],
  ["does it work with shadcn", "shadcn-registry"],
  ["does it support vue", "frameworks"],
  ["is there dark mode", "dark-mode"],
  ["how do I connect it to cursor", "connect-mcp"],
  ["set up the MCP server in Claude Code", "connect-mcp"],
  ["where do I find my api key", "api-key"],
  ["how many MCP calls do I get on free", "mcp-limits"],
  ["how do I paste into figma", "copy-to-figma"],
  ["figma paste not working", "figma-paste-issue"],
  ["is there a figma kit", "figma-kit"],
  ["why do I have to sign up after 5 copies", "free-copy-limit"],
  ["forgot my password", "forgot-password"],
  ["can't sign in", "forgot-password"],
  ["delete my account", "delete-account"],
  ["how can I talk to a human", "contact-support"],
  ["which design systems are included", "design-systems"],
  ["what do I get for free", "free-components"],
  ["do you have a team plan for 5 seats", "team-plan"],
  ["how do I change the theme colors with tokens", "tokens-theming"],
  ["what should I ask my agent first", "agent-first-steps"],
  ["asdfgh qwerty", null],
  ["the weather in paris", null],
];

let fail = 0;
for (const [q, want] of CASES) {
  const got = matchArticles(q, articles, 3);
  const top = got[0]?.article.slug ?? null;
  const ok = top === want;
  if (!ok) fail++;
  const list = got.map((m) => m.article.slug + " " + m.score.toFixed(2)).join(", ") || "(none)";
  console.log((ok ? "PASS " : "FAIL ") + JSON.stringify(q).padEnd(56) + " -> " + list + (ok ? "" : "   expected " + want));
}
console.log(`\n${CASES.length - fail}/${CASES.length} passed (${articles.length} articles)`);
if (articles.length < 20) {
  console.log("Seed has fewer than 20 articles");
  fail++;
}
process.exit(fail ? 1 : 0);
