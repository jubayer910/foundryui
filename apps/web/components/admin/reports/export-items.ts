import { GRANS, GRAN_LABEL, periodOfInstant, stateQuery, type ReportState } from "@/lib/reports/period";
import type { MenuItem } from "../menu";

/** The Export menu for a report selection: this view as Excel / print, the hourly CSV on a day, quick Excel exports. */
export function exportItems(s: ReportState, datasets?: string[]): MenuItem[] {
  const q = stateQuery(s, datasets ? { datasets: datasets as ReportState["datasets"] } : {});
  const items: MenuItem[] = [
    { section: "This view" },
    { href: `/admin/reports/export/xlsx?${q}`, label: "Excel workbook", hint: `${s.period.name}, one sheet per dataset`, icon: "file-spreadsheet", download: true },
    { href: `/admin/reports/print?${q}`, label: "Print or PDF", hint: "A4, opens in a new tab", icon: "printer", newTab: true },
  ];
  if (s.gran === "day") items.push({ href: `/admin/reports/export/csv?${stateQuery(s)}&dataset=hourly`, label: "Hourly CSV", hint: "24 rows for this day", icon: "file-type-csv", download: true });
  items.push({ section: "Quick export, Excel" });
  for (const g of GRANS) {
    const cur = periodOfInstant(g, s.now, s.offset);
    items.push({ href: `/admin/reports/export/xlsx?${stateQuery(s, { gran: g, p: "current" })}`, label: g === "day" ? "Today" : `This ${GRAN_LABEL[g].toLowerCase()}`, hint: cur.dates, download: true });
  }
  return items;
}
