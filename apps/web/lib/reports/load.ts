import "server-only";
import { getEnv } from "@/lib/db";
import { BUILDERS } from "./datasets";
import { makeCtx, type Row } from "./engine";
import { DATASET_LABEL, MONEY_DATASETS, type DatasetId, type ReportState } from "./period";
import type { DatasetResult, Report } from "./types";

/**
 * Loads the report for a selection: one D1 batch per dataset, all batches in parallel. About 3 to 4 grouped
 * statements per dataset, so the full report stays near 30 D1 queries (Workers free plan: 50 per request).
 * Nothing is cached in KV.
 */
export async function loadReport(s: ReportState, opts: { revenue: boolean }, only?: DatasetId[]): Promise<Report> {
  const c = makeCtx(s);
  const wanted = only ?? s.datasets;
  const allowed = wanted.filter((d) => opts.revenue || !MONEY_DATASETS.includes(d));
  const hidden = wanted.filter((d) => !allowed.includes(d));
  const env = await getEnv();
  let queries = 0;
  const datasets = await Promise.all(
    allowed.map(async (id): Promise<DatasetResult> => {
      try {
        const built = await BUILDERS[id](c);
        queries += built.statements.length;
        const res = await env.DB.batch(built.statements.map((st) => env.DB.prepare(st.sql).bind(...st.params)));
        return await built.finish(res.map((r: { results?: unknown[] }) => (r.results ?? []) as Row[]));
      } catch (e) {
        console.error(`reports: ${id} failed`, e);
        return {
          id,
          title: DATASET_LABEL[id],
          intro: "",
          metrics: [],
          rows: [],
          selected: {},
          compare: null,
          totals: {},
          breakdowns: [],
          notes: [],
          since: null,
          filters: [],
          error: "This dataset could not be loaded. Reload the page; if it keeps failing, the server log has the reason.",
        };
      }
    }),
  );
  return { state: s, sel: c.sel, cmp: c.cmp, buckets: c.buckets, datasets, hidden, generatedAt: Date.now(), queries };
}
