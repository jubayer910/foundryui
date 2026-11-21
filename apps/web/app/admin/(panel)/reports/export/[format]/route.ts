import { can, getStaff } from "@/lib/admin";
import { csvName, datasetCsv, reportXlsx, xlsxName } from "@/lib/reports/exports";
import { loadReport } from "@/lib/reports/load";
import { DATASETS, MONEY_DATASETS, parseState, type DatasetId } from "@/lib/reports/period";

export const dynamic = "force-dynamic";

const notFound = () => new Response("Not found", { status: 404, headers: { "cache-control": "no-store" } });

/**
 * Report downloads for /admin/reports, for the selection in the query string:
 * - /admin/reports/export/csv?dataset=traffic&g=month&p=2026-11  one dataset, one row per period
 * - /admin/reports/export/xlsx?g=month&p=2026-11                 Summary sheet plus one sheet per dataset
 * Staff with the analytics permission only (revenue datasets also need "revenue"); everyone else gets a 404.
 */
export async function GET(req: Request, ctx: RouteContext<"/admin/reports/export/[format]">) {
  const staff = await getStaff();
  if (!can(staff?.role, "analytics")) return notFound();
  const money = can(staff?.role, "revenue");
  const { format } = await ctx.params;
  const url = new URL(req.url);
  const s = parseState(url.searchParams);

  if (format === "csv") {
    const id = url.searchParams.get("dataset") ?? "";
    if (!(DATASETS as readonly string[]).includes(id)) return notFound();
    if (MONEY_DATASETS.includes(id as DatasetId) && !money) return notFound();
    const r = await loadReport(s, { revenue: money }, [id as DatasetId]);
    const d = r.datasets[0];
    if (!d || d.error) return new Response("This dataset could not be loaded. Try again.", { status: 503, headers: { "cache-control": "no-store" } });
    return new Response(datasetCsv(d, r), {
      headers: { "content-type": "text/csv; charset=utf-8", "content-disposition": `attachment; filename="${csvName(d, r)}"`, "cache-control": "no-store" },
    });
  }

  if (format === "xlsx") {
    const r = await loadReport(s, { revenue: money });
    const body = reportXlsx(r);
    return new Response(body as BodyInit, {
      headers: {
        "content-type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "content-disposition": `attachment; filename="${xlsxName(r)}"`,
        "cache-control": "no-store",
      },
    });
  }

  return notFound();
}
