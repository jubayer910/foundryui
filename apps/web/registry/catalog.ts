/**
 * Foundry UI catalogue — the single source of truth for every published item.
 * Pure data (no JSX) so build scripts, the website, the CLI and the MCP server can all read it.
 */
export type Category = "foundations" | "primitives" | "overlays" | "charts" | "dashboard-blocks" | "navigation";
export type Tier = "free" | "pro";

export interface CatalogItem {
  slug: string;
  name: string;
  category: Category;
  tier: Tier;
  description: string;
  /** files under registry/components (or registry/tokens for css) */
  files: string[];
  /** npm dependencies */
  dependencies?: string[];
  /** other catalogue slugs this item needs */
  registryDependencies?: string[];
  tags: string[];
}

export interface DesignSystem {
  slug: string;
  name: string;
  status: "live" | "in-progress";
  tier: Tier;
  tagline: string;
  description: string;
  accent: string;
  font: string;
  figmaKey: string;
}

export const SYSTEMS: DesignSystem[] = [
  { slug: "loopo", name: "Loopo", status: "live", tier: "free", tagline: "Warm analytics, soft surfaces", description: "A light analytics system with warm orange data, pill buttons, soft hairline cards and Geist type. Extracted from the Loopo finance dashboard.", accent: "#fd4b23", font: "Geist", figmaKey: "lBBGdEStjKRYnwrTdJs1T3" },
  { slug: "mailpulse", name: "MailPulse", status: "in-progress", tier: "pro", tagline: "Violet newsletter growth", description: "A newsletter and audience-growth system with violet accents, square heat cells and dual-tone icons.", accent: "#7c53f9", font: "Geist", figmaKey: "HO8FIKAQjZlHdfM65hYYis" },
  { slug: "auton", name: "Auton", status: "in-progress", tier: "pro", tagline: "Automation control room", description: "An operations and automation dashboard system.", accent: "#2563eb", font: "Geist", figmaKey: "Q7K7Ix4KwJryX5XvLhaCZg" },
  { slug: "axon", name: "Axon", status: "in-progress", tier: "pro", tagline: "Dense data, calm chrome", description: "A data-dense product system with a full brand book already in Figma.", accent: "#0f766e", font: "Geist", figmaKey: "s8dzTyDpYzwDoDkqPekxXk" },
  { slug: "veriq", name: "Veriq", status: "in-progress", tier: "pro", tagline: "Trust and verification", description: "A verification and compliance dashboard system.", accent: "#4f46e5", font: "Geist + Inter", figmaKey: "PB3XpCt9pnD9EiJfqXAiN3" },
  { slug: "vantage", name: "Vantage", status: "in-progress", tier: "pro", tagline: "Admin at a glance", description: "An admin dashboard system built from the Vantage Admin screens.", accent: "#e11d48", font: "Geist", figmaKey: "nG9LOj0Kw0l4iD7sSXFmc9" },
];

export const CATEGORIES: { slug: Category; name: string; blurb: string }[] = [
  { slug: "foundations", name: "Foundations", blurb: "Tokens, icons and the utilities everything else builds on." },
  { slug: "primitives", name: "Primitives", blurb: "Buttons, inputs, selects, toggles and the small parts of every screen." },
  { slug: "overlays", name: "Overlays", blurb: "Menus, dialogs and tooltips with real motion and keyboard support." },
  { slug: "charts", name: "Charts", blurb: "Kargul-grade data visuals: finished bars, dense lines, real-looking data." },
  { slug: "dashboard-blocks", name: "Dashboard blocks", blurb: "KPI cards, tables, ranked lists and empty states ready to drop in." },
  { slug: "navigation", name: "Navigation", blurb: "Sidebars and shells that hold a product together." },
];

export const CATALOG: CatalogItem[] = [
  { slug: "tokens", name: "Design tokens", category: "foundations", tier: "free", description: "Loopo token CSS (--fu-*) plus the Tailwind v4 theme bridge that turns them into utilities.", files: ["tokens/theme.css", "tokens/loopo.css"], tags: ["tokens", "theme", "tailwind", "css variables"] },
  { slug: "cx", name: "cx utility", category: "foundations", tier: "free", description: "Tiny className joiner used by every component.", files: ["components/cx.ts"], tags: ["utility", "classnames"] },
  { slug: "icons", name: "Foundry Icons", category: "foundations", tier: "free", description: "Original 24px line icons on a keyline grid: 1.5px stroke, round caps, badge zone with a 1.5px gap.", files: ["components/icons.tsx"], tags: ["icons", "svg", "line icons"] },
  { slug: "chart-kit", name: "Chart kit", category: "foundations", tier: "free", description: "Shared bar finish (gradient, inside stroke, highlight, hatch), grid lines, tooltip card and seeded data.", files: ["components/chart-kit.tsx"], registryDependencies: [], tags: ["charts", "svg", "utility"] },
  { slug: "button", name: "Button", category: "primitives", tier: "free", description: "Pill button in primary (graphite gradient), accent, secondary, ghost and danger variants, three sizes.", files: ["components/button.tsx"], registryDependencies: ["cx"], tags: ["button", "cta", "action"] },
  { slug: "icon-button", name: "Icon button", category: "primitives", tier: "free", description: "Square icon button with an optional notification indicator.", files: ["components/icon-button.tsx"], registryDependencies: ["cx", "icons"], tags: ["button", "icon", "toolbar"] },
  { slug: "badge", name: "Badge", category: "primitives", tier: "free", description: "Status pill in neutral, accent, positive, negative and warning tones. No decorative dots.", files: ["components/badge.tsx"], registryDependencies: ["cx"], tags: ["badge", "status", "pill", "tag"] },
  { slug: "delta-chip", name: "Delta chip", category: "primitives", tier: "free", description: "Soft trend pill with a filled triangle for KPI changes.", files: ["components/delta-chip.tsx"], registryDependencies: ["cx"], tags: ["delta", "trend", "kpi", "percentage"] },
  { slug: "input", name: "Input", category: "primitives", tier: "free", description: "Text field with label, hint, error state, leading icon and accent focus ring.", files: ["components/input.tsx"], registryDependencies: ["cx", "icons"], tags: ["input", "form", "text field"] },
  { slug: "search-field", name: "Search field", category: "primitives", tier: "free", description: "Top-bar search with icon and keyboard shortcut hint.", files: ["components/search-field.tsx"], registryDependencies: ["cx", "icons"], tags: ["search", "input", "command"] },
  { slug: "select", name: "Select", category: "primitives", tier: "free", description: "Accessible select built on Base UI with animated popup and check indicator.", files: ["components/select.tsx"], dependencies: ["@base-ui/react"], registryDependencies: ["cx", "icons"], tags: ["select", "dropdown", "form"] },
  { slug: "segmented-control", name: "Segmented control", category: "primitives", tier: "free", description: "Sliding segmented control for period switches (Daily / Weekly / Monthly).", files: ["components/segmented-control.tsx"], registryDependencies: ["cx"], tags: ["segmented", "toggle", "tabs", "period"] },
  { slug: "tabs", name: "Tabs", category: "primitives", tier: "free", description: "Underline tabs with an animated indicator, built on Base UI.", files: ["components/tabs.tsx"], dependencies: ["@base-ui/react"], tags: ["tabs", "navigation"] },
  { slug: "switch", name: "Switch", category: "primitives", tier: "free", description: "Toggle switch with spring-like thumb travel.", files: ["components/switch.tsx"], dependencies: ["@base-ui/react"], tags: ["switch", "toggle", "settings"] },
  { slug: "checkbox", name: "Checkbox", category: "primitives", tier: "free", description: "Checkbox with an ink fill and crisp check glyph.", files: ["components/checkbox.tsx"], dependencies: ["@base-ui/react"], registryDependencies: ["icons"], tags: ["checkbox", "form", "selection"] },
  { slug: "avatar-group", name: "Avatar group", category: "primitives", tier: "free", description: "Overlapping initials avatars with soft tints and an overflow count.", files: ["components/avatar-group.tsx"], registryDependencies: ["cx"], tags: ["avatar", "team", "users"] },
  { slug: "tooltip", name: "Tooltip", category: "overlays", tier: "free", description: "Hover tooltip with delay, scale-in motion and the system overlay shadow.", files: ["components/tooltip.tsx"], dependencies: ["@base-ui/react"], tags: ["tooltip", "hint", "overlay"] },
  { slug: "dropdown-menu", name: "Dropdown menu", category: "overlays", tier: "free", description: "Action menu with icons, shortcuts, separators and a danger item.", files: ["components/dropdown-menu.tsx"], dependencies: ["@base-ui/react"], registryDependencies: ["cx", "icons"], tags: ["menu", "dropdown", "actions", "overlay"] },
  { slug: "dialog", name: "Dialog", category: "overlays", tier: "free", description: "Modal dialog with backdrop, title, description, body and footer actions.", files: ["components/dialog.tsx"], dependencies: ["@base-ui/react"], registryDependencies: ["icons"], tags: ["dialog", "modal", "overlay", "confirm"] },
  { slug: "capsule-bars", name: "Capsule bars", category: "charts", tier: "free", description: "Values as capsules in full-height pale tracks; the focused period is saturated, the rest tint with hatch.", files: ["components/capsule-bars.tsx"], registryDependencies: ["chart-kit"], tags: ["chart", "bar chart", "capsule", "monthly", "revenue"] },
  { slug: "stacked-blocks", name: "Stacked blocks", category: "charts", tier: "free", description: "Parts of a total over time as separate rounded blocks with a selected-slot band and tooltip.", files: ["components/stacked-blocks.tsx"], registryDependencies: ["chart-kit"], tags: ["chart", "stacked bar", "weekly", "composition"] },
  { slug: "line-highlight", name: "Line with highlight band", category: "charts", tier: "free", description: "Dense 52-week trend, soft area, dashed last-year comparison, dotted highlight band, annotation and hover tooltip.", files: ["components/line-highlight.tsx"], registryDependencies: ["chart-kit"], tags: ["chart", "line chart", "trend", "area", "comparison"] },
  { slug: "donut", name: "Donut", category: "charts", tier: "free", description: "Thick ring with rounded ends and gaps, centre value, interactive legend with shares.", files: ["components/donut.tsx"], registryDependencies: ["chart-kit"], tags: ["chart", "donut", "pie", "share", "traffic sources"] },
  { slug: "pill-meter", name: "Pill meter", category: "charts", tier: "free", description: "Capacity or quota as tall gradient pills with a tint remainder.", files: ["components/pill-meter.tsx"], registryDependencies: ["chart-kit"], tags: ["meter", "progress", "capacity", "quota"] },
  { slug: "hatch-track-list", name: "Hatch track list", category: "charts", tier: "free", description: "Share-of-total rows: gradient fill over a hatched pale track.", files: ["components/hatch-track-list.tsx"], registryDependencies: ["chart-kit"], tags: ["progress", "share", "list", "payment methods"] },
  { slug: "kpi-card", name: "KPI card", category: "dashboard-blocks", tier: "free", description: "Metric card with icon, value, delta pill and an area sparkline in an inner well.", files: ["components/kpi-card.tsx"], registryDependencies: ["delta-chip", "icons", "chart-kit"], tags: ["kpi", "stat", "metric", "card", "sparkline", "mrr"] },
  { slug: "ranked-list", name: "Ranked list", category: "dashboard-blocks", tier: "free", description: "Row-background bars: each row is its own bar, for top countries, pages or products.", files: ["components/ranked-list.tsx"], registryDependencies: ["chart-kit"], tags: ["list", "ranking", "countries", "top pages"] },
  { slug: "data-table", name: "Data table", category: "dashboard-blocks", tier: "free", description: "Transactions table with sortable amount, row selection, bulk bar and status pills.", files: ["components/data-table.tsx"], registryDependencies: ["badge", "checkbox", "icons", "cx"], tags: ["table", "transactions", "invoices", "data grid"] },
  { slug: "empty-state", name: "Empty state", category: "dashboard-blocks", tier: "free", description: "Empty state with icon tile, title, description and one primary action.", files: ["components/empty-state.tsx"], registryDependencies: ["icons"], tags: ["empty", "zero state", "onboarding"] },
  { slug: "sidebar-nav", name: "Sidebar navigation", category: "navigation", tier: "free", description: "Grouped sidebar with brand, active surface, count badges and the system icon set.", files: ["components/sidebar-nav.tsx"], registryDependencies: ["icons", "cx"], tags: ["sidebar", "navigation", "menu", "shell"] },
];
