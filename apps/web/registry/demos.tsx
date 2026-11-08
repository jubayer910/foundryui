"use client";
import type { ReactNode } from "react";
import { Button } from "./components/button";
import { IconButton } from "./components/icon-button";
import { Badge } from "./components/badge";
import { DeltaChip } from "./components/delta-chip";
import { Input } from "./components/input";
import { SearchField } from "./components/search-field";
import { Select } from "./components/select";
import { SegmentedControl } from "./components/segmented-control";
import { Tabs } from "./components/tabs";
import { Switch } from "./components/switch";
import { Checkbox } from "./components/checkbox";
import { AvatarGroup } from "./components/avatar-group";
import { Tooltip } from "./components/tooltip";
import { DropdownMenu } from "./components/dropdown-menu";
import { Dialog } from "./components/dialog";
import { CapsuleBars } from "./components/capsule-bars";
import { StackedBlocks } from "./components/stacked-blocks";
import { LineHighlight } from "./components/line-highlight";
import { Donut } from "./components/donut";
import { PillMeter } from "./components/pill-meter";
import { HatchTrackList } from "./components/hatch-track-list";
import { KpiCard } from "./components/kpi-card";
import { RankedList } from "./components/ranked-list";
import { DataTable } from "./components/data-table";
import { EmptyState } from "./components/empty-state";
import { SidebarNav } from "./components/sidebar-nav";
import { Icon, iconNames } from "./components/icons";

const row = "flex flex-wrap items-center gap-3";

export const DEMOS: Record<string, { node: () => ReactNode; wide?: boolean }> = {
  tokens: {
    node: () => (
      <div className="grid w-full grid-cols-4 gap-2 sm:grid-cols-6">
        {["page", "surface", "line-strong", "ink", "muted", "accent", "accent-soft", "series-2", "series-3", "series-4", "positive", "negative"].map((t) => (
          <div key={t} className="flex flex-col gap-1.5">
            <span className="h-10 rounded-fu-sm border border-fu-line" style={{ background: "var(--fu-" + t + ")" }} />
            <span className="font-fu-mono text-[10px] text-fu-muted">{t}</span>
          </div>
        ))}
      </div>
    ),
    wide: true,
  },
  cx: { node: () => <code className="rounded-fu-sm bg-fu-hover px-3 py-2 font-fu-mono text-xs text-fu-body">{'cx("a", false && "b", "c") → "a c"'}</code> },
  icons: {
    node: () => (
      <div className="grid w-full grid-cols-6 gap-1 sm:grid-cols-10">
        {iconNames.map((n) => (
          <span key={n} title={n} className="flex aspect-square items-center justify-center rounded-fu-sm text-fu-ink hover:bg-fu-hover">
            <Icon name={n} size={22} />
          </span>
        ))}
      </div>
    ),
    wide: true,
  },
  "chart-kit": { node: () => <div className="w-full max-w-xl"><StackedBlocks /></div>, wide: true },
  button: {
    node: () => (
      <div className={row}>
        <Button leading={<Icon name="plus" size={16} />}>Add funds</Button>
        <Button variant="accent">Upgrade</Button>
        <Button variant="secondary" leading={<Icon name="download" size={16} />}>Export</Button>
        <Button variant="ghost">Cancel</Button>
        <Button variant="danger" size="sm">Delete</Button>
      </div>
    ),
  },
  "icon-button": { node: () => <div className={row}><IconButton icon="bell" label="Notifications" indicator /><IconButton icon="sliders" label="Filters" /><IconButton icon="more-horizontal" label="More" size="sm" /></div> },
  badge: { node: () => <div className={row}><Badge tone="positive">Paid</Badge><Badge tone="warning">Pending</Badge><Badge tone="negative">Failed</Badge><Badge tone="accent">New</Badge><Badge>Draft</Badge></div> },
  "delta-chip": { node: () => <div className={row}><DeltaChip value={12.4} /><DeltaChip value={-3.1} /><DeltaChip value={0.8} /></div> },
  input: { node: () => <div className="grid w-full max-w-md gap-4"><Input label="Workspace name" placeholder="Acme Inc." hint="Shown on invoices." /><Input label="Email" leadingIcon="mail" defaultValue="finance@acme" error="Enter a valid email address." /></div> },
  "search-field": { node: () => <SearchField className="max-w-80" /> },
  select: { node: () => <div className={row}><Select ariaLabel="Period" options={[{ value: "monthly", label: "Monthly" }, { value: "weekly", label: "Weekly" }, { value: "daily", label: "Daily" }]} /><Select ariaLabel="Year" options={[{ value: "2026", label: "2026" }, { value: "2025", label: "2025" }]} /></div> },
  "segmented-control": { node: () => <SegmentedControl options={["Daily", "Weekly", "Monthly"]} defaultValue="Weekly" /> },
  tabs: { node: () => <div className="w-full max-w-md"><Tabs items={[{ value: "o", label: "Overview", content: "Revenue is up 12% this month." }, { value: "t", label: "Transactions", content: "6 transactions need review." }, { value: "s", label: "Settings", content: "Payout schedule: weekly." }]} /></div> },
  switch: { node: () => <div className="flex flex-col gap-3"><Switch label="Email digests" defaultChecked /><Switch label="Payout alerts" /></div> },
  checkbox: { node: () => <div className="flex flex-col gap-3"><Checkbox label="Include refunds" defaultChecked /><Checkbox label="Show archived" /></div> },
  "avatar-group": { node: () => <AvatarGroup names={["Nadia Rahman", "Leo Park", "Sara Kim", "Omar Faruk", "Iris Chen", "Ben Ode"]} /> },
  tooltip: { node: () => <Tooltip content="Export as CSV"><Button variant="secondary" leading={<Icon name="download" size={16} />}>Hover me</Button></Tooltip> },
  "dropdown-menu": {
    node: () => (
      <DropdownMenu
        align="start"
        trigger={<Button variant="secondary" trailing={<Icon name="chevron-down" size={14} />}>Actions</Button>}
        items={[{ label: "Duplicate", icon: "copy", shortcut: "⌘D" }, { label: "Export", icon: "download", shortcut: "⌘E" }, { label: "Share", icon: "arrow-up-right" }, "separator", { label: "Delete", icon: "x", danger: true }]}
      />
    ),
  },
  dialog: {
    node: () => (
      <Dialog
        trigger={<Button>Open dialog</Button>}
        title="Invite teammates"
        description="They'll get access to this workspace and its reports."
        footer={<><Button variant="ghost">Cancel</Button><Button>Send invites</Button></>}
      >
        <Input label="Email addresses" placeholder="name@company.com" />
      </Dialog>
    ),
  },
  "capsule-bars": { node: () => <div className="w-full max-w-xl"><CapsuleBars /></div>, wide: true },
  "stacked-blocks": { node: () => <div className="w-full max-w-xl"><StackedBlocks /></div>, wide: true },
  "line-highlight": { node: () => <div className="w-full max-w-xl pt-6"><LineHighlight /></div>, wide: true },
  donut: { node: () => <div className="w-full max-w-md"><Donut /></div>, wide: true },
  "pill-meter": { node: () => <div className="w-full max-w-sm"><PillMeter value={68} /></div> },
  "hatch-track-list": { node: () => <div className="w-full max-w-sm"><HatchTrackList /></div> },
  "kpi-card": { node: () => <div className={row}><KpiCard label="Gross volume" value="$84,320" delta={12.4} icon="wallet" /><KpiCard label="Refunds" value="$1,204" delta={-3.1} icon="invoice" /></div>, wide: true },
  "ranked-list": { node: () => <div className="w-full max-w-sm"><RankedList /></div> },
  "data-table": { node: () => <DataTable />, wide: true },
  "empty-state": { node: () => <div className="w-full max-w-md"><EmptyState title="No invoices yet" description="Create your first invoice and it will show up here with its payment status." action={<Button leading={<Icon name="plus" size={16} />}>New invoice</Button>} /></div> },
  "sidebar-nav": { node: () => <SidebarNav /> },
};
