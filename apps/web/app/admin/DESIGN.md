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
| Insights | Overview `/admin/analytics`, Traffic `/admin/analytics/traffic`, Users `/admin/analytics/users`, Usage `/admin/analytics/usage`, Revenue `/admin/analytics/revenue`, Support `/admin/analytics/support`, Reports `/admin/reports` | analytics |
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
- Mobile 375: sidebar is a drawer, tab row scrolls sideways, tables become stacked rows, toolbars wrap.
