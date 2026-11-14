"use client";
import type { CSSProperties } from "react";
import { Button } from "@/registry/components/button";
import { Badge } from "@/registry/components/badge";
import { Input } from "@/registry/components/input";
import { Switch } from "@/registry/components/switch";
import { Checkbox } from "@/registry/components/checkbox";
import { SegmentedControl } from "@/registry/components/segmented-control";
import { KpiCard } from "@/registry/components/kpi-card";
import { CapsuleBars } from "@/registry/components/capsule-bars";
import { Donut } from "@/registry/components/donut";
import { DataTable } from "@/registry/components/data-table";
import { Icon } from "@/registry/components/icons";
import type { Theme, Vision } from "@/lib/theme-gen";

/** SVG colour-matrix filters (Machado 2009). SVG filters work in linear RGB, as the matrices expect. */
const MATRICES: Record<Exclude<Vision, "normal">, string> = {
  protan: "0.152286 1.052583 -0.204868 0 0  0.114503 0.786281 0.099216 0 0  -0.003882 -0.048116 1.051998 0 0  0 0 0 1 0",
  deutan: "0.367322 0.860646 -0.227968 0 0  0.280085 0.672501 0.047413 0 0  -0.011820 0.042940 0.968881 0 0  0 0 0 1 0",
  tritan: "1.255528 -0.076749 -0.178779 0 0  -0.078411 0.930809 0.147602 0 0  0.004733 0.691367 0.303900 0 0  0 0 0 1 0",
};

/**
 * A small dashboard made of real Ingot registry components. Every --fu-* token (and Tailwind's
 * --spacing) is set inline on the wrapper, so the generated theme applies only inside it.
 */
export function ThemePreview({ theme, vars, vision }: { theme: Theme; vars: Record<string, string>; vision: Vision }) {
  const s = theme.series;
  const name = theme.input.name;
  return (
    <div
      data-system={theme.slug}
      className="@container overflow-hidden rounded-[10px] bg-fu-page text-fu-body"
      style={{ ...(vars as CSSProperties), fontFamily: "var(--fu-font)", filter: vision === "normal" ? undefined : `url(#tg-${vision})` }}
    >
      <svg width="0" height="0" className="absolute" aria-hidden="true" focusable="false">
        {Object.entries(MATRICES).map(([k, m]) => (
          <filter key={k} id={"tg-" + k} colorInterpolationFilters="linearRGB">
            <feColorMatrix type="matrix" values={m} />
          </filter>
        ))}
      </svg>

      <div className="flex flex-col gap-4 p-4 sm:p-5">
        {/* App header */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-fu-md font-medium text-fu-accent-ink [background:var(--fu-accent-grad)]" aria-hidden="true">
            {name.trim().charAt(0).toUpperCase() || "A"}
          </span>
          <div className="mr-auto min-w-0">
            <p className="truncate text-[15px] font-medium tracking-[-0.01em] text-fu-ink">{name} Overview</p>
            <p className="text-[12px] text-fu-muted">November 2026</p>
          </div>
          <SegmentedControl options={["Week", "Month", "Year"]} defaultValue="Month" />
          <Button variant="secondary" size="sm" leading={<Icon name="download" size={15} />}>
            Export
          </Button>
          <Button variant="accent" size="sm" leading={<Icon name="plus" size={15} />}>
            New invoice
          </Button>
        </div>

        {/* KPI row */}
        <div className="grid gap-3 @[720px]:grid-cols-3 @[480px]:grid-cols-2">
          <KpiCard label="Gross volume" value="$84,320" delta={12.4} icon="wallet" />
          <KpiCard label="Active customers" value="1,284" delta={4.1} icon="user-check" />
          <KpiCard label="Refunds" value="$1,204" delta={-3.1} icon="invoice" />
        </div>

        {/* Charts */}
        <div className="grid gap-3 @[720px]:grid-cols-[1.5fr_1fr]">
          <section className="rounded-fu-lg border border-fu-line bg-fu-surface p-4 shadow-fu-card" aria-label="Revenue chart">
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[13px] font-medium text-fu-ink">Revenue</h3>
              <Badge tone="accent">2026</Badge>
            </div>
            <div className="mt-3">
              <CapsuleBars color={s[0]} title="Revenue" />
            </div>
          </section>
          <section className="rounded-fu-lg border border-fu-line bg-fu-surface p-4 shadow-fu-card" aria-label="Traffic sources chart">
            <h3 className="text-[13px] font-medium text-fu-ink">Traffic sources</h3>
            <div className="mt-4">
              <Donut
                data={[
                  { label: "Direct", value: 4820, color: s[0] },
                  { label: "Organic search", value: 3140, color: s[1] },
                  { label: "Referral", value: 1760, color: s[2] },
                  { label: "Social", value: 980, color: s[3] },
                  { label: "Email", value: 640, color: s[4] },
                ]}
              />
            </div>
          </section>
        </div>

        {/* Table + form */}
        <div className="grid gap-3 @[860px]:grid-cols-[1.6fr_1fr]">
          <div className="min-w-0">
            <DataTable />
          </div>
          <section className="flex flex-col gap-4 rounded-fu-lg border border-fu-line bg-fu-surface p-5 shadow-fu-overlay" aria-label="Invite form">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-medium tracking-[-0.01em] text-fu-ink">Invite teammates</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-fu-muted">They get access to this workspace and its reports.</p>
              </div>
              <Badge tone="positive">3 seats left</Badge>
            </div>
            <Input label="Email address" placeholder="name@company.com" leadingIcon="mail" />
            <Input label="Team" defaultValue="Finance" hint="You can change this later." />
            <div className="flex flex-col gap-3">
              <Switch label="Send a welcome email" defaultChecked />
              <Checkbox label="Can export reports" defaultChecked />
            </div>
            <div className="mt-1 flex flex-wrap justify-end gap-2">
              <Button variant="ghost">Cancel</Button>
              <Button variant="accent">Send invite</Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
