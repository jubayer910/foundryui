# Interactive components — QA log

Each component here is written by hand from its QA'd generated code (`out/`), one at a time:
understand what the original product component does, then give it the behaviour that makes sense,
with real data behind it (filters and tabs change the content, tooltips show the real numbers).

A component is only added when all of these pass:

1. **Rest** — `node interactive-check.mjs <sys>/<slug>`: the hydrated preview matches the static original
   (no pixel off by more than 40 RGB-sum; anti-aliasing noise only).
2. **Types** — strict `tsc` on the file, React only, no other imports.
3. **UX logic** — every control does what its label says; nothing that only looks interactive is left dead,
   nothing static (labels, tags, info cards) pretends to be a control.
4. **Data** — filters, tabs and menus change the content consistently (axis, labels, subtitle, totals).
5. **Manual run in Chrome** — hover, click, keyboard (Escape / outside click closes menus), each state screenshotted.

`publish.mjs` prefers `interactive/<sys>/<slug>.tsx` over `out/`, and `library-finalize.mjs` hydrates
any `"use client"` component in its preview with the shared React runtime (`library-preview/_rt.js`).

| # | Component | Behaviour | Rest | Types | UX | Data | Chrome |
|---|-----------|-----------|------|-------|----|------|--------|
| 1 | loopo/loopo-new-contacts-card-18845391 | Column hover tooltip (both series + total, other columns dim, date label darkens); legend hover isolates a series; Daily / Weekly / Monthly menu redraws bars, axis, labels and subtitle (Escape / outside click close) | PASS (max 28) | PASS | PASS | PASS | PASS |
| 2 | axon/axon-range-menu-73237914 | Highlight follows pointer and ↑/↓ (starts on "Quarter" as drawn); click / Enter picks a range and moves the check; C picks Custom range; "Previous period" toggles a check | PASS (max 35) | PASS | PASS | PASS | PASS |
| 3 | mailpulse/mailpulse-date-range-menu-13937967 | Highlight follows pointer and ↑/↓; picking a range swaps its dates for the check; the compare switch slides on/off | PASS (exact) | PASS | PASS | PASS | PASS |
| 4 | montra/montra-all-recurring-card-3831814 | 18 real subscriptions behind the table: All / Software / Bills / Price up filter with live counts, search by name/plan/category with an empty state, Filter popover by cadence, row hover, row menu pauses/resumes or cancels (counts update, lower rows open the menu upward) | PASS (exact) | PASS | PASS | PASS | PASS |
