import { can, getStaff } from "@/lib/admin";
import { exportRows, rangeOf } from "@/components/admin/analytics";

export const dynamic = "force-dynamic";

const cell = (v: string | number) => {
  const s = String(v);
  // Quote when needed; neutralise spreadsheet formulas.
  const safe = /^[=+\-@\t\r]/.test(s) && typeof v === "string" ? "'" + s : s;
  return /[",\n\r]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
};

/** CSV export for /admin/analytics. Staff with the analytics permission only; everyone else gets a plain 404. */
export async function GET(req: Request) {
  if (!can((await getStaff())?.role, "analytics")) return new Response("Not found", { status: 404 });
  const url = new URL(req.url);
  const kind = url.searchParams.get("kind") === "components" ? "components" : "traffic";
  const range = rangeOf(url.searchParams.get("range") ?? "");
  const rows = await exportRows(kind, range);
  const body = rows.map((r) => r.map(cell).join(",")).join("\r\n") + "\r\n";
  return new Response(body, {
    headers: {
      "content-type": "text/csv; charset=utf-8",
      "content-disposition": `attachment; filename="ingotui-${kind}-${range}-${new Date().toISOString().slice(0, 10)}.csv"`,
      "cache-control": "no-store",
    },
  });
}
