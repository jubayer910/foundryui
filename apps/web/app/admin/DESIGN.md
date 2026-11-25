# Ingot UI admin: design rules

The admin is an Operate surface: staff come here to check how the business is doing and to clear a queue.
Calm, dense, predictable. Linear / Attio / Stripe Dashboard is the bar: important things first, nothing
decorative, the same pattern on every screen. Light theme only.

## 1. Audit (before, 2026-11-22, every screen at 1440)

Screens captured: overview, analytics, reports, revenue, orders, activations, contra, pricing, users, user
detail, waitlist, referrals, pages, posts, changelog, kb, kb/gaps, announcement, support, ticket, team,
settings, no-access.

| Screen | Height at 1440 | Findings |
|---|---|---|
| Sidebar | 21 items in 6 groups | Too many top-level choices; Team and Collapse fall below the fold at 900px; Analytics, Reports and Referral links sit under "Dashboard"; KB gaps (a support queue) is hidden inside Content. |
| Overview | 1127 | 11 KPI tiles (visitors twice, lifetime spots, waitlist), 3 equal bar charts, 3 activity feeds. Nothing says what needs action; pending activations and open tickets are tiles 9 and 10. |
| Analytics | 3814 | One long scroll of 6 sections, 22 KPI tiles, explanatory paragraphs under charts, its own 7/30/90 day ranges that disagree with Reports' week/month/quarter/year. |
| Reports | 15475 | Every dataset expanded at once (8 x KPIs + chart + 12-column table + breakdowns + notes + definitions). Two export rows above the controls. No day view. |
| Revenue | 2298 | A 6-line Lemon Squeezy setup block with shell commands is the first thing on the page. 10 KPI tiles in two rows, then 4 charts, orders, renewals, attention, store totals. |
| Orders | 13572 | Every order on one page; no search, no paging, revoke button on every row. |
| Activations | 900 | Fine structure; long subtitle; renewals explanation in a sentence. |
| Contra sales | 2182 | All sales in one table; "Linked to" column shows two grey lines for most rows; no status filter. |
| Users, waitlist, referrals | 1290 / 4512 / 900 | Waitlist lists every email. User detail opens a new page (loses list position). |
| Content (pages, posts, changelog, kb, announcement) | up to 9297 (kb) | KB lists ~90 articles flat with Edit + Delete on every row. |
| Support inbox, ticket | 1685 / 900 | OK. Ticket opens a new page. |
| Team, settings | 900 | OK. |

Common issues: subtitles of 2+ lines, definitions in body text, KPI tiles with a hint line under every number
(the same number often repeated in the hint of the next tile), inconsistent toolbars (pills here, selects
there), tables without sticky header or row hover, numbers left-aligned in some tables.

## 2. Decisions

### Information architecture (7 areas, URLs unchanged)

| Area | Tabs (route) | Perm |
|---|---|---|
| Home | `/admin` | overview |
| Insights | Overview `/admin/analytics`, Traffic `/admin/analytics/traffic`, Behavior `/admin/analytics/behavior`, Users `/admin/analytics/users`, Usage `/admin/analytics/usage`, Revenue `/admin/analytics/revenue`, Support `/admin/analytics/support`, Reports `/admin/reports` | analytics |
| Customers | Users `/admin/users`, Waitlist `/admin/waitlist`, Referral links `/admin/referrals` | users, waitlist, analytics |
| Revenue | Overview `/admin/revenue`, Orders `/admin/orders`, Activations `/admin/activations`, Contra sales `/admin/contra`, Pricing & deal `/admin/pricing` | revenue, orders, pricing |
| Content | Pages, Posts, Changelog, Knowledge base, Announcement | content, kb |
| Support | Inbox `/admin/support`, Bot questions `/admin/kb/gaps` | support, kb |
| Settings | Team `/admin/team`, Settings `/admin/settings` | team, settings |

- Every old URL is still the page it was; areas are a navigation layer (components/admin/shell/nav.ts).
- The sidebar lists areas only. The active area's tabs render as one tab row under the top bar.
- An area shows when the role can open at least one of its tabs; its link goes to the first tab it can open.
- Badges only where action is needed: Revenue (pending activations), Support (open tickets). Never totals.
- Active tab = the longest matching tab href, so `/admin/kb/gaps` is Support, `/admin/kb` is Content.

### Home = Today

1. Header: "Today", the date, period switch (Day / Week / Month / Quarter / Year).
2. Four KPIs for the selected period: Net revenue, Sign-ups, Visitors, Paying customers (level now).
3. One trend chart (metric switch: net revenue, sign-ups, visitors), from the report engine.
4. Needs attention: pending activations, open tickets, unanswered bot questions, unmatched Contra sales,
   past-due subscriptions. Each row: count + link. Rows the role cannot open are left out. Zero rows collapse
   into one "All clear" line.
5. Recent activity: one merged feed (orders, sign-ups, tickets), 8 rows, newest first.

Cut from Home: copies, MCP calls, lifetime spots, waitlist, the three 30-day bar charts, the three feeds.
They live in Insights and Revenue.

### Insights

- One period bar for all tabs (the Reports controls): granularity Day / Week / Month / Quarter / Year,
  prev / next / Today, a date picker on Day, compare to previous period / same weekday last week (day) / same
  period last year / none, time zone UTC or Asia/Dhaka.
- Each tab is one or two report datasets: 4 KPIs, the trend, an hourly chart on Day, then breakdowns
  (first two visible, the rest behind "Show more"), and the per-period table behind "Show table".
- Definitions live in the info popover next to each label, never in body text.
- Reports keeps the full view and every export; datasets collapse to their headline until opened.

### Day granularity (lib/reports/period.ts is the only source)

- `day` is a granularity like the others: key `YYYY-MM-DD`, trend ranges 7 / 14 / 30 / 90 days.
- Compare: previous day, same weekday last week (`cmp=week`), same day last year, none.
- Timestamped data (usage events, sign-ups, orders, tickets) also gets a 24-hour breakdown of the selected
  day in the report time zone (`loadHourly`). Day tables (page views, visitors, referrers) are stored per UTC
  day and show the day total only.
- Exports: CSV / XLSX / print accept `g=day`; `dataset=hourly` exports the hourly breakdown.

### Page pattern

```
PageHeader   title, optional one-line subtitle, primary action right
Toolbar      search, filter pills, period, export (wraps on mobile)
Content      KPIs (max 4) -> one chart -> table
```

- KPI card: label (+ info), big number, delta. Nothing else.
- Tables: sticky header, row hover, numbers right-aligned with tabular figures, status as a small text badge
  (no dots), at most 50 rows per page with Previous / Next.
- Row detail opens a right-side drawer (`?view=<id>`) on users, orders and tickets; the full page stays one
  link away. Drawer: Esc / close link, focus moves into it, full-page link in its header.
- Empty state: one line + one action.
- Long setup or help text: collapsed in a `details` disclosure or an info popover.

### Visual

- Tokens from the site: white, ink, hairlines (`--color-hair`, `--color-hair-2`), chip / tile greys.
- 13px Inter body, 12px meta, 15px section titles, 20px page titles. One step per level.
- Geist Mono only for codes, slugs and ids.
- 8px grid: 8 / 12 / 16 / 24 / 32 gaps; cards 16px padding.
- Charts: ink for the selected value, neutral grey for the rest, hover / focus readout, "Show data table".
- Icons: admin-icons (Ingot stroke-rounded set), 1.5px stroke, each depicts its label.
- No decorative dots anywhere (badges, bullets, separators, legends use squares or text).
- Mobile: see section 5. Phones get a bottom tab bar, phone lists and bottom sheets; desktop is unchanged.

## 3. Building blocks (where they live)

| Need | Use |
|---|---|
| Page header, toolbar, section, KPI, table, empty state, pager | `components/admin/ui.tsx` (`AdminHead`, `Toolbar`, `Section`, `Kpi`, `Table` + `td` / `tdNum` + `right`, `Empty`, `Pager`, `pageOf`) |
| Definition next to a label | `Info` (`components/admin/reports/info.tsx`); `AdminHead`, `Section` and `Kpi` take `info` / a string `hint` |
| Row detail | `Drawer` + `Facts` (`components/admin/drawer.tsx`), opened by a search param |
| Secondary actions, exports | `Menu` (`components/admin/menu.tsx`); report exports from `exportItems()` |
| Period selection | `PeriodBar` (`components/admin/reports/period-bar.tsx`); server side `parseState(searchParams, undefined, { gran })` |
| Report numbers | `loadReport(state, { revenue }, datasets)`; hour-by-hour `loadHourly(state, { revenue })` + `hourlyFor()` |
| A dataset block | `DatasetSection` (KPIs, trend, hourly, two breakdowns, disclosures) |
| Charts | `Trend` (per period), `HourlyChart` (24 hours); both have a readout and a data-table toggle |
| Collapsed extras | `More` (`components/admin/reports/view.tsx`) |
| Icons | `AIcon` (`components/admin/admin-icons.tsx`); add icons from `public/icons/stroke-rounded.json` |

Sticky table headers sit at `--admin-top` (set by the shell: 57px, or 97px when the area has a tab row).

## 4. After (2026-11-22, 1440 wide, local seed data)

| Screen | Before | After |
|---|---|---|
| Sidebar | 21 items, 6 groups | 7 areas, badges on Revenue and Support only |
| Home | 11 KPIs, 3 charts, 3 feeds | 4 KPIs, 1 trend, Needs attention, 1 feed |
| Analytics | 3814px, 22 KPIs | Overview 900px (4 KPIs, trend, funnel) + 5 tabs |
| Reports | 15475px | 7519px (month), datasets collapse to KPIs + trend |
| Revenue | 2298px, setup block first | 1829px, setup one line, 8 KPIs in two rows of 4 |
| Orders | 13572px, all rows | 2405px, tabs, 50 per page, drawer |
| Waitlist | 4512px | 2116px, 50 per page |

Not yet changed: the knowledge base article list (one long table, filter by category pills), bot questions
(up to 200 rows, not paged), the post and changelog editors, pricing form, team and settings bodies (only
their headers follow the pattern). Activations has no drawer: approving happens inline in its short queue.

## 5. Mobile (2026-11-22, phones 360 to 430 wide, quick check at 768)

The owner checks the admin mostly on his phone. Below md (768px) every screen is built for one thumb: fast to
scan, 44px targets, nothing sideways. Bar: the Stripe, Linear and Shopify admin apps. From md up nothing changes.

### Navigation

- Bottom tab bar (`components/admin/shell/bottom-bar.tsx`): Home, Insights, Revenue, Support, More. Only areas the
  role can open; badges on Revenue (pending activations) and Support (open tickets), ink pill, never totals.
  56px plus `env(safe-area-inset-bottom)`. It slides away while a sheet is open (`html[data-sheet]`) or the
  on-screen keyboard is up (`[data-admin][data-kb]`, set by the shell from focus plus the visual viewport).
- More is a sheet: Customers, Content, Settings (with their tabs as the second line), View site, the account
  card (name, email, role) with Your account and Sign out.
- Top bar on phones: area title (or a back chevron plus the list name on a detail page), search icon, avatar.
  The hamburger drawer is md to lg only.
- The tab row scrolls sideways, scrolls the active tab into view, fades the edge where more tabs hide; tabs are
  44px tall.
- `--admin-bottom` is the tab bar height (0 with the keyboard up). Sticky save bars and the reply box sit on it;
  `--admin-top-m` is the phone header height for things that stick under it (post editor Write / Preview).

### Building blocks

| Need | Use |
|---|---|
| Bottom sheet dialog | `Sheet` (`components/admin/sheet.tsx`): handle, title, 44px close, scrolling body, sticky `footer` |
| Sheet behaviour in custom markup | `useSheetLock`, `useFocusTrap`, `useSwipeDown`, `Handle`, `sheetPanel`, `isPhone()` |
| A table on a phone | `Table` prop `mobile` with `PhoneList` + `PhoneRow` (`ui.tsx`): title, meta line, value on the right, chevron, whole row is the link |
| Filters of a list | `FilterSheet` (`components/admin/filter-sheet.tsx`) inside the GET form: inline from md, "Filters" button + sheet with Clear / Apply on phones |
| Period options | `PeriodBar`: granularity + options button on row one, previous / period / next / Today on row two; compare, range and time zone in a sheet |
| Export and other menus | `Menu` opens as a sheet on phones (56px rows) |
| Row detail | `Drawer` is a bottom sheet on phones: handle (swipe down closes, swipe up or the size button goes full height), Open full page at the end |
| Save row | `saveBar` (inside a 16px-padded card) or `pageSaveBar` (page-level form): sticky above the tab bar |
| KPI | `kpiCard` / `kpiRow` / `kpiValue`: 2 columns, fluid number size (never truncated), change under the number |
| Definitions | `Info`: 44px hit area on phones, the popover becomes a card above the tab bar |

### Rules

- No sideways scroll on any admin route. The only deliberate wide tables are Reports' "Show table" period tables
  (scroll inside their card, sticky first column) and the print view on a phone screen.
- Tap targets: buttons, chips, selects and inputs at least 44px (chips 40px), via min-height in globals.css
  ("Admin on phones"), so the desktop `!h-8` sizes stay. Inline links inside a sentence are the only exception.
- Fields 16px text on phones (no iOS zoom), labels 13px; 12px only for tertiary meta, chart ticks and badges.
- Charts: at most five x labels on phones, counted back from the newest; the first and last label align to the
  edges so neither is clipped; tap or drag across the bars to read a value (the readout keeps it). Metric chips
  scroll in one row; the legend stays under the chart.
- Lists: who or what on the first line (15px), status / date / plan on the second (13px), the key number right,
  a chevron when the row opens something. Row actions (approve, reject, dismiss, write answer) stay as cards
  with full-width buttons at the bottom (activations, Contra sales, bot questions, referral links).
- Support thread: chat bubbles (customer and bot left, support right, 88% max width); the reply box is pinned to
  the bottom above the tab bar, grows on focus.
- Login and invite: the card sits in the top third so the keyboard never covers it; safe areas respected.
- Motion: sheets rise in 280ms (iOS curve), the bar slides; `prefers-reduced-motion` removes both.
- Checks: `node scripts/check-admin-mobile.mts` (every route at 375: overflow and tap targets under 40px, text under
  12px reported); screenshots with `node scripts/admin-shots.mts <label> [widths]`, sheets included.
