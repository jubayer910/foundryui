/**
 * Category hubs: one indexable landing page per component category, written for the
 * "<component> react component" and "<component> figma" searches. Charts has its own
 * page at /charts, so it is not repeated here.
 */
export type Hub = {
  slug: string;
  category: string;
  title: string; // <title>, search phrase first
  h1: string;
  intro: string;
  uses: string[];
  faq: { q: string; a: string }[];
  guide?: string; // related blog slug
};

export const HUBS: Hub[] = [
  {
    slug: "kpi-cards",
    category: "KPI and stats",
    title: "KPI card and stat components for React and Figma",
    h1: "KPI cards and stats",
    intro: "Metric cards, KPI strips and compact stat rows drawn from six real dashboards. Each one pairs a value with a comparison, so the number says whether it is good or bad.",
    uses: ["Top row of an overview page", "Targets and progress against plan", "Health and status counts in admin consoles"],
    faq: [
      { q: "What makes a good KPI card?", a: "A plain label, one value with its unit, a comparison against a stated baseline, a status colour backed by text, and optionally a sparkline and a link to the detail." },
      { q: "Can I copy these KPI cards as React code?", a: "Yes for every card marked Code: React 19 and Tailwind CSS v4, checked against the Figma original. The Loopo KPI card is free." },
    ],
    guide: "kpi-card-design",
  },
  {
    slug: "tables",
    category: "Tables and lists",
    title: "Data table and list components for React dashboards",
    h1: "Tables and lists",
    intro: "Data tables, ranked lists, queues and row menus with status chips, actions and pagination already designed. Drawn for agents, campaigns, customers, secrets, runs and more.",
    uses: ["Record lists with filters and row actions", "Review and approval queues", "Ranked lists inside overview cards"],
    faq: [
      { q: "Do these tables include empty and loading states?", a: "The library covers empty states as their own components, and several tables ship with filter, column and row-action popovers. Check each component page for what is inside." },
      { q: "Are the tables built on a data grid library?", a: "No. They are plain React and Tailwind markup, so you can wire them to any data source or wrap them with TanStack Table for sorting and virtualisation." },
    ],
    guide: "react-data-table-design",
  },
  {
    slug: "cards",
    category: "Cards and panels",
    title: "Dashboard card and panel components for React and Figma",
    h1: "Cards and panels",
    intro: "The largest category: content cards, integration cards, settings panels, plan rows, activity feeds and summary panels that fill the space between charts and tables.",
    uses: ["Overview grids", "Integrations and connections pages", "Settings and billing sections"],
    faq: [
      { q: "Why so many card components?", a: "Each was harvested from a real product screen, so cards come in the shapes products actually need rather than one generic card with slots." },
      { q: "Can I change the colours?", a: "Yes. Every component reads the system tokens, so switching the token file changes the whole look." },
    ],
  },
  {
    slug: "modals",
    category: "Modals",
    title: "Modal and dialog components for React dashboards",
    h1: "Modals and dialogs",
    intro: "Create, confirm, connect and destroy flows as finished modals: add funds, invite teammates, connect Stripe, pause an automation, run a scan. Copy that names the object, not “Are you sure?”.",
    uses: ["Create and edit flows", "Destructive confirmations", "Connect-an-integration steps"],
    faq: [
      { q: "When should I use a modal instead of a drawer?", a: "Use a modal for a decision that blocks the task (confirm, create, destroy). Use a drawer to inspect or edit a record while keeping the list in view." },
      { q: "Are the modals accessible?", a: "Interactive parts use Base UI, which handles focus trapping, escape to close and ARIA roles." },
    ],
    guide: "modal-vs-drawer",
  },
  {
    slug: "drawers",
    category: "Drawers",
    title: "Drawer and side panel components for React dashboards",
    h1: "Drawers and side panels",
    intro: "Detail drawers for subscribers, transactions, deploys, members and pull requests. They open beside a list so people inspect one record without losing their place.",
    uses: ["Record detail from a table row", "Settings for one integration", "Version history and activity"],
    faq: [
      { q: "What belongs in a drawer?", a: "Detail and light editing for one record, opened from a list. Anything that needs the full page or blocks the task belongs elsewhere." },
      { q: "Do drawers work on mobile?", a: "On small screens a drawer should take the full width; the components are built to stretch." },
    ],
    guide: "modal-vs-drawer",
  },
  {
    slug: "forms",
    category: "Forms",
    title: "Form, input and search components for React dashboards",
    h1: "Forms and inputs",
    intro: "Inputs, selects, search fields, form rows and settings forms in each system’s look, including the dense field rows admin products use.",
    uses: ["Settings pages", "Create and edit forms inside modals", "Search and filter bars"],
    faq: [
      { q: "Are form components free?", a: "The Loopo input, select, search field, switch, checkbox and segmented control are free React components." },
      { q: "Do they include validation?", a: "They are presentational. Pair them with React Hook Form or your own validation and pass error text through props." },
    ],
  },
  {
    slug: "navigation",
    category: "Navigation",
    title: "Sidebar, tabs and toolbar components for React dashboards",
    h1: "Navigation",
    intro: "Sidebars, top bars, tab bars and toolbars that shape a whole product. Includes collapsed rails, workspace switchers and filter toolbars.",
    uses: ["App shell", "Section tabs", "List toolbars with filters and views"],
    faq: [
      { q: "Is there a free React sidebar?", a: "Yes. The Loopo sidebar nav is a free React component." },
      { q: "Can the sidebar collapse?", a: "Several systems include a collapsed rail variant in Figma; check the component page for code status." },
    ],
  },
  {
    slug: "page-headers",
    category: "Headers",
    title: "Page header components for dashboards",
    h1: "Page headers",
    intro: "Page titles with breadcrumbs, actions, date ranges and filters: the strip at the top of every dashboard page that most kits forget.",
    uses: ["Top of each page", "Report headers with date ranges", "Detail page titles with actions"],
    faq: [{ q: "What goes in a dashboard page header?", a: "The page title, an optional breadcrumb, the page’s primary action and any controls that affect the whole page, such as a date range." }],
  },
  {
    slug: "page-templates",
    category: "Templates",
    title: "Dashboard page templates in Figma (with React components)",
    h1: "Page templates",
    intro: "Full pages from the six products: overview, audience, agents, approvals, attack paths, business and more. Every block inside a template is also its own component.",
    uses: ["Starting point for a new product area", "Reference for layout and hierarchy", "Handoff between design and code"],
    faq: [
      { q: "Are page templates available as React code?", a: "Templates are in Figma today. The blocks inside them are separate components, and most of those already have React code." },
      { q: "How many templates are there?", a: "The count on this page is live from the library." },
    ],
    guide: "saas-dashboard-examples",
  },
  {
    slug: "menus",
    category: "Menus",
    title: "Dropdown and context menu components for React",
    h1: "Menus",
    intro: "Dropdowns, row menus, context menus, sort and range menus with icons and keyboard hints in place.",
    uses: ["Row actions in tables", "Sort and view switches", "Account and workspace menus"],
    faq: [{ q: "Is there a free dropdown menu?", a: "Yes. The Loopo dropdown menu is free React code built on Base UI." }],
  },
  {
    slug: "popovers",
    category: "Popovers",
    title: "Popover, tooltip and filter popover components",
    h1: "Popovers",
    intro: "Filter popovers, column pickers, date range pickers and notifications: the small overlays that make tables and charts usable.",
    uses: ["Table filters and column settings", "Date range selection", "Notification panels"],
    faq: [{ q: "When should I use a popover?", a: "For small, optional controls tied to one element, such as filters on a table. Anything larger or blocking belongs in a modal or drawer." }],
  },
  {
    slug: "editors",
    category: "Editors",
    title: "Editor and canvas components for dashboards",
    h1: "Editors and canvases",
    intro: "Email editors, workflow canvases, toolbars and preview panes from the products that build things, not just report on them.",
    uses: ["Email and content editors", "Workflow builders", "Preview panes"],
    faq: [{ q: "Are these full editors?", a: "They are the interface parts (canvas, toolbars, panels). Pair them with an editor engine such as Plate or React Flow for behaviour." }],
  },
  {
    slug: "feedback",
    category: "Feedback",
    title: "Empty state and feedback components for dashboards",
    h1: "Empty states and feedback",
    intro: "Empty states, no-results views and status messages that tell people what to do next instead of showing a blank table.",
    uses: ["First-run screens", "No search results", "Errors and system status"],
    faq: [{ q: "What makes a good empty state?", a: "One sentence on why it is empty, one on what to do, and the action as a button. Show it as soon as the list is empty, not after a delay." }],
    guide: "empty-state-design",
  },
  {
    slug: "buttons-badges",
    category: "Atoms",
    title: "Button, badge and avatar components for React and Tailwind",
    h1: "Buttons, badges and atoms",
    intro: "The small parts every screen uses: buttons, icon buttons, badges, delta chips and avatar groups, in each system’s style.",
    uses: ["Actions everywhere", "Status and change indicators", "People and teams"],
    faq: [{ q: "Are the atoms free?", a: "Yes. The Loopo button, icon button, badge, delta chip and avatar group are free React components." }],
  },
];

export const getHub = (slug: string) => HUBS.find((h) => h.slug === slug);
export const hubFor = (category: string) => HUBS.find((h) => h.category === category);
/** Where a category lives: its hub, or /charts for charts. */
export const categoryHref = (category: string) => (category === "Charts" ? "/charts" : hubFor(category) ? "/categories/" + hubFor(category)!.slug : null);
