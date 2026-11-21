// Makes a batch of AppSumo codes. Plain codes go to a CSV (one column, no header) for AppSumo's "Upload your codes";
// the database only ever gets sha256(normalised code), as a SQL file run with wrangler d1 execute.
//   node scripts/appsumo-codes.mjs <count> <batch> <csvOut> <sqlOut>
import { createHash, randomInt } from "node:crypto";
import { writeFileSync } from "node:fs";
const [count = "5000", batch = "appsumo-1", csvOut, sqlOut] = process.argv.slice(2);
if (!csvOut || !sqlOut) throw new Error("usage: node scripts/appsumo-codes.mjs <count> <batch> <csvOut> <sqlOut>");
const A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O, 1/I: easy to read and type
const part = () => Array.from({ length: 4 }, () => A[randomInt(A.length)]).join("");
const codes = new Set();
while (codes.size < Number(count)) codes.add(`INGOT-${part()}-${part()}-${part()}`);
const list = [...codes];
const norm = (c) => c.toUpperCase().replace(/[^A-Z0-9]/g, "");
const now = Math.floor(Date.now() / 1000);
writeFileSync(csvOut, list.join("\n") + "\n");
const rows = list.map((c) => `('${createHash("sha256").update(norm(c)).digest("hex")}','${batch}','available',${now})`);
let sql = "";
for (let i = 0; i < rows.length; i += 200) sql += `INSERT INTO appsumo_code (hash,batch,status,createdAt) VALUES ${rows.slice(i, i + 200).join(",")};\n`;
writeFileSync(sqlOut, sql);
console.log(`${list.length} codes -> ${csvOut}; hashes -> ${sqlOut}`);
