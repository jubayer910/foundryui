/**
 * Small BM25F index (fields with weights, one shared length normalisation). Pure.
 * Used for the knowledge base, the intent phrases and the component catalog.
 */
import { termsOf } from "./text";

export type Field = { text: string; weight: number; core?: boolean };
export type Hit = { i: number; score: number; coverage: number; focus: number; coreCoverage: number };

const K1 = 1.2;
const B = 0.6;

type Doc = { tf: Map<string, number>; len: number; core: Set<string>; bigrams: Set<string> };

function bigrams(seq: string[]) {
  const out: string[] = [];
  for (let i = 0; i + 1 < seq.length; i++) if (seq[i] !== seq[i + 1]) out.push(seq[i] + " " + seq[i + 1]);
  return out;
}

export class Bm25 {
  private docs: Doc[];
  private df = new Map<string, number>();
  private avg: number;
  readonly n: number;

  constructor(fieldsPerDoc: Field[][], tokenize: (s: string) => string[] = termsOf) {
    this.docs = fieldsPerDoc.map((fields) => {
      const tf = new Map<string, number>();
      const core = new Set<string>();
      const bg = new Set<string>();
      let len = 0;
      for (const f of fields) {
        const seq = tokenize(f.text);
        len += seq.length * f.weight;
        for (const t of seq) {
          tf.set(t, (tf.get(t) ?? 0) + f.weight);
          if (f.core) core.add(t);
        }
        if (f.core) for (const b of bigrams(seq)) bg.add(b);
      }
      return { tf, len, core, bigrams: bg };
    });
    for (const d of this.docs) for (const t of d.tf.keys()) this.df.set(t, (this.df.get(t) ?? 0) + 1);
    this.n = this.docs.length;
    this.avg = this.docs.reduce((s, d) => s + d.len, 0) / Math.max(1, this.n) || 1;
  }

  idf(t: string) {
    const df = this.df.get(t) ?? 0;
    return Math.log(1 + (this.n - df + 0.5) / (df + 0.5));
  }
  knows(t: string) {
    return this.df.has(t);
  }

  /**
   * Rank documents for query terms (in order, duplicates allowed). coverage = share of the query's IDF weight the
   * document contains (unknown words count half, so a typo dilutes but does not sink). focus = share of the
   * document's core terms the query names.
   */
  search(qSeq: string[], limit = 5, filter?: (i: number) => boolean, unknownWeight = 0.5): Hit[] {
    const q = [...new Set(qSeq)];
    if (!q.length || !this.n) return [];
    const known = q.filter((t) => this.df.has(t));
    if (!known.length) return [];
    const unknown = q.length - known.length;
    const total = known.reduce((s, t) => s + this.idf(t), 0) + unknown * unknownWeight * Math.log(1 + this.n);
    const qb = bigrams(qSeq);
    const hits: Hit[] = [];
    this.docs.forEach((d, i) => {
      if (filter && !filter(i)) return;
      let s = 0;
      let cov = 0;
      let coreHits = 0;
      let coreCov = 0;
      for (const t of known) {
        const tf = d.tf.get(t);
        if (!tf) continue;
        const idf = this.idf(t);
        s += (idf * (tf * (K1 + 1))) / (tf + K1 * (1 - B + (B * d.len) / this.avg));
        cov += idf;
        if (d.core.has(t)) {
          coreHits++;
          coreCov += idf;
        }
      }
      if (!s) return;
      for (const b of qb) if (d.bigrams.has(b)) s += 0.5 * this.idf(b.split(" ")[1]);
      hits.push({ i, score: s, coverage: cov / total, focus: d.core.size ? coreHits / d.core.size : 0, coreCoverage: coreCov / total });
    });
    return hits.sort((a, b) => b.score - a.score || a.i - b.i).slice(0, limit);
  }
}
