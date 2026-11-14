import { can, getStaff } from "@/lib/admin";
import { orderCsv, rangeOf } from "../data";

export const dynamic = "force-dynamic";

const cell = (v: string | number) => {
  const s = String(v);
  // Quote when needed; neutralise spreadsheet formulas.
  const safe = /^[=+\-@\t\r]/.test(s) && typeof v === "string" ? "'" + s : s;
  return /[",\n\r]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
};

/** Orders CSV for /admin/revenue. Staff with the revenue permission only; everyone else gets a plain 404. */
export async function GET(req: Request) {
  if (!can((await getStaff())?.role, "revenue")) return new Response("Not found", { status: 404 });
  const range = rangeOf(new URL(req.url).searchParams.get("range") ?? "");
  const rows = await orderCsv(range);
  const body = rows.map((r) => r.map(cell).join(",")).join("\r\n") + "\r\n";
  return new Response(body, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="ingotui-orders-${range}-${new Date().toISOString().slice(0, 10)}.csv"`,
      "cache-control": "no-store",
    },
  });
}
