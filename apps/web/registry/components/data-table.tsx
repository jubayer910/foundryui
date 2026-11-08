"use client";
import { useMemo, useState } from "react";
import { Badge } from "./badge";
import { Checkbox } from "./checkbox";
import { Icon } from "./icons";
import { cx } from "./cx";

export interface Txn {
  id: string;
  customer: string;
  date: string;
  amount: number;
  status: "Paid" | "Pending" | "Failed" | "Refunded";
}

const DEFAULT: Txn[] = [
  { id: "INV-2041", customer: "Northwind Labs", date: "Nov 06, 2026", amount: 4280.0, status: "Paid" },
  { id: "INV-2040", customer: "Acme Robotics", date: "Nov 05, 2026", amount: 1199.5, status: "Pending" },
  { id: "INV-2039", customer: "Lumen Health", date: "Nov 05, 2026", amount: 860.0, status: "Paid" },
  { id: "INV-2038", customer: "Orbit Freight", date: "Nov 04, 2026", amount: 2310.75, status: "Failed" },
  { id: "INV-2037", customer: "Kestrel Studio", date: "Nov 03, 2026", amount: 640.0, status: "Refunded" },
  { id: "INV-2036", customer: "Halcyon Bank", date: "Nov 02, 2026", amount: 9875.0, status: "Paid" },
];

const TONE = { Paid: "positive", Pending: "warning", Failed: "negative", Refunded: "neutral" } as const;

/** Transactions table: sortable amount, row selection with bulk bar, status pills, tabular numbers. */
export function DataTable({ rows = DEFAULT }: { rows?: Txn[] }) {
  const [desc, setDesc] = useState(true);
  const [sel, setSel] = useState<string[]>([]);
  const sorted = useMemo(() => [...rows].sort((a, b) => (desc ? b.amount - a.amount : a.amount - b.amount)), [rows, desc]);
  const toggle = (id: string) => setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  return (
    <div className="w-full overflow-hidden rounded-fu-lg border border-fu-line bg-fu-surface">
      {sel.length > 0 && (
        <div className="flex items-center justify-between border-b border-fu-line bg-fu-sunken px-4 py-2 text-[13px]">
          <span className="text-fu-body">{sel.length} selected</span>
          <button className="font-medium text-fu-accent" onClick={() => setSel([])}>
            Clear
          </button>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-left text-[13px]">
          <thead className="bg-fu-sunken text-[11px] font-medium uppercase tracking-[0.04em] text-fu-muted">
            <tr>
              <th className="w-10 py-2.5 pl-4" />
              <th className="py-2.5 font-medium">Invoice</th>
              <th className="py-2.5 font-medium">Customer</th>
              <th className="py-2.5 font-medium">Date</th>
              <th className="py-2.5 pr-4 text-right font-medium">
                <button className="inline-flex items-center gap-1 uppercase hover:text-fu-ink" onClick={() => setDesc((d) => !d)}>
                  Amount
                  <Icon name="chevron-down" size={12} className={cx("transition-transform", !desc && "rotate-180")} />
                </button>
              </th>
              <th className="py-2.5 pr-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((r) => (
              <tr key={r.id} className={cx("border-t border-fu-line transition-colors hover:bg-fu-sunken", sel.includes(r.id) && "bg-fu-accent-soft/50")}>
                <td className="py-3 pl-4">
                  <Checkbox defaultChecked={sel.includes(r.id)} onCheckedChange={() => toggle(r.id)} />
                </td>
                <td className="py-3 font-fu-mono text-xs text-fu-muted">{r.id}</td>
                <td className="py-3 font-medium text-fu-ink">{r.customer}</td>
                <td className="py-3 text-fu-muted">{r.date}</td>
                <td className="py-3 pr-4 text-right font-medium tabular-nums text-fu-ink">${r.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</td>
                <td className="py-3 pr-4">
                  <Badge tone={TONE[r.status]}>{r.status}</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
