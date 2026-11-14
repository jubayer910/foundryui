import Link from "next/link";
import summary from "@/app/accessibility/summary.json";

/**
 * Accessibility notes for a component page. Server-rendered, no JS.
 * - Hand-built Loopo components (registry/components): notes for that component, read from its code.
 * - Generated components (converted from Figma): notes for its category. The generated code is
 *   static markup (divs, text and aria-hidden icons; no native controls, roles or ARIA), so the
 *   notes say what it gives you and what to add before shipping.
 * - When the component was in the last automated run, its axe result is shown too.
 */

type Row = [label: string, text: string];
type Note = { rows: Row[]; gaps?: string[] };

const s = summary as { date: string; tool: string; components?: Record<string, { id: string; help: string; nodes: number }[]> };

// ---- hand-built components: written from registry/components/<slug>.tsx --------------------------
const HAND: Record<string, Note> = {
  button: { rows: [["Element", "Native <button>, so Enter and Space activate it and it is in the Tab order."], ["Focus", "2px accent outline on :focus-visible, offset 2px."], ["Disabled", "Uses the native disabled attribute (skipped by Tab)."]], gaps: ["Icon-only use needs an aria-label; use Icon button for that."] },
  "icon-button": { rows: [["Element", "Native <button> with a required label prop, rendered as aria-label."], ["Focus", "2px accent outline on :focus-visible."], ["Icon", "The icon is aria-hidden; the label is the accessible name."]], gaps: ["The notification indicator is visual only: put the count or “unread” in the label."] },
  badge: { rows: [["Element", "A <span> with text. The tone colour is never the only signal: the text says the status."]] },
  "delta-chip": { rows: [["Element", "A <span>; the triangle is aria-hidden."]], gaps: ["Screen readers hear the number without its direction (the value is shown unsigned). Add the direction in text, for example a visually hidden “up” or “down”, or pass a signed value."] },
  input: { rows: [["Element", "Native <input> with a visible <label> tied by htmlFor/id."], ["Errors", "aria-invalid is set when there is an error and the message is shown under the field."], ["Focus", "Accent border and soft ring on focus-within."]], gaps: ["The hint and error text are not linked with aria-describedby yet, so screen readers don’t read them with the field."] },
  "search-field": { rows: [["Element", "Native <input type=\"search\"> wrapped in a <label>."], ["Focus", "Accent border on focus-within."]], gaps: ["The only text inside the label is the ⌘K hint, so the field is announced as “⌘K” and the placeholder isn’t a label. Pass an aria-label (for example “Search”) where you use it."] },
  select: { rows: [["Built on", "Base UI Select: the trigger is a button that opens a listbox."], ["Keyboard", "Enter, Space or the arrow keys open it; arrows move between options; Enter picks; Escape closes and returns focus to the trigger; type to jump."], ["Labels", "Pass ariaLabel when there is no visible label."]] },
  "segmented-control": { rows: [["Roles", "role=\"radiogroup\" with role=\"radio\" buttons and aria-checked."], ["Keyboard", "Every option is its own Tab stop; Enter or Space selects."]], gaps: ["Arrow keys don’t move between options (the radio pattern expects them) and the group has no label. Add aria-label to the group and roving arrow-key focus, or use Tabs if it switches views.", "No focus style of its own: this site’s global focus ring covers it, your app may not."] },
  tabs: { rows: [["Built on", "Base UI Tabs: role=\"tablist\", role=\"tab\" with aria-selected, role=\"tabpanel\" linked to its tab."], ["Keyboard", "Tab reaches the active tab; arrow keys move focus between tabs; Enter or Space opens the focused tab (manual activation); Tab again goes into the panel."]], gaps: ["The component’s own focus style is a text colour change only (this site adds a global focus ring, your app may not). Add a ring, for example focus-visible:outline-2, for WCAG 2.4.7."] },
  switch: { rows: [["Built on", "Base UI Switch: role=\"switch\" with aria-checked, inside a <label> so the text names it."], ["Keyboard", "Space toggles."], ["Focus", "2px accent outline on :focus-visible."]] },
  checkbox: { rows: [["Built on", "Base UI Checkbox: role=\"checkbox\" with aria-checked, inside a <label>."], ["Keyboard", "Space toggles."], ["Focus", "2px accent outline on :focus-visible."]] },
  "avatar-group": { rows: [["Element", "Initials in <span>s with the full name in title."]], gaps: ["title is not read reliably. Give the group a label such as “6 members: Nadia Rahman, Leo Park…” (aria-label on the wrapper with role=\"img\", or a visually hidden list)."] },
  tooltip: { rows: [["Built on", "Base UI Tooltip: opens on hover and on keyboard focus, closes with Escape."], ["Roles", "The popup is linked to its trigger so the tip is announced."]], gaps: ["Tooltips are supplementary: never put the only label or essential information in one."] },
  "dropdown-menu": { rows: [["Built on", "Base UI Menu: the trigger has aria-haspopup and aria-expanded; the popup is role=\"menu\" with role=\"menuitem\" items."], ["Keyboard", "Enter, Space or ArrowDown opens and focuses the first item; arrows move; Enter selects; Escape closes and returns focus to the trigger; type to jump."]], gaps: ["Shortcut hints are shown as text only; they aren’t registered as real shortcuts."] },
  dialog: { rows: [["Built on", "Base UI Dialog: role=\"dialog\", aria-modal, labelled by its title and described by its description."], ["Focus", "Moves into the dialog on open, stays inside while it is open, and returns to the trigger on close."], ["Keyboard", "Escape closes; the close button is a labelled <button> (“Close”)."]] },
  "capsule-bars": { rows: [["Role", "The SVG is role=\"img\" with an aria-label naming the chart (“… by month”)."]], gaps: ["The label names the chart but doesn’t give the numbers. Add a one-line summary (highest, lowest, trend) or a visually hidden table of the values."] },
  "stacked-blocks": { rows: [["Role", "The SVG is role=\"img\" labelled “Stacked weekly totals”."]], gaps: ["No values in the text alternative, and the series are told apart by colour. Add a summary or a hidden data table, and label each series in text."] },
  "line-highlight": { rows: [["Role", "The SVG is role=\"img\" with an aria-label (“… over 52 weeks”)."]], gaps: ["The highlighted band and the values aren’t in the text alternative. Add a summary sentence or a hidden table."] },
  donut: { rows: [["Role", "The SVG is role=\"img\" with the caption as its label; the legend beside it is real text."]], gaps: ["Segments are told apart by colour; the text legend carries the values, so keep it next to the chart."] },
  "pill-meter": { rows: [["Role", "role=\"meter\" with aria-valuenow, aria-valuemin, aria-valuemax and aria-label."]] },
  "hatch-track-list": { rows: [["Element", "A <ul> of rows; each label and value is real text."]], gaps: ["The bars are visual; the value text is what screen readers get, so keep it visible."] },
  "kpi-card": { rows: [["Element", "Label and value are text; the sparkline SVG is aria-hidden."], ["Change", "Uses Delta chip, so the same direction gap applies (see below)."]], gaps: ["The change is read without “up” or “down”. Add the direction in text."] },
  "ranked-list": { rows: [["Element", "A <ul> with an <li> per row; labels and values are text."]] },
  "data-table": { rows: [["Element", "A real <table> with <thead> and <th> headers, so screen readers announce column names."], ["Selection", "Each row has a Base UI checkbox; the bulk bar shows the selected count and a Clear button."], ["Sorting", "The Amount header is a <button>, so it is keyboard-operable."]], gaps: ["The checkbox column header is empty and row checkboxes have no label. Label them (for example “Select INV-1042”).", "Sort state isn’t exposed: add aria-sort on the Amount header.", "The selected count isn’t announced: wrap it in aria-live=\"polite\"."] },
  "empty-state": { rows: [["Element", "The title is an <h3>; the icon is aria-hidden; the action is whatever you pass (use a Button)."]], gaps: ["Change the heading level to fit your page outline."] },
  "sidebar-nav": { rows: [["Element", "<nav aria-label=\"Main\">; the active item has aria-current=\"page\"."]], gaps: ["Items are <button>s. In an app with routes, render them as links (<a> or your router’s Link) so they open in new tabs and announce as links."] },
};

// ---- generated components: by category -----------------------------------------------------------
const BASE_GAP = "The generated code draws the design only: <div>s, text and aria-hidden icons, with no buttons, inputs, roles or ARIA. That is why it matches Figma closely, and why you add behaviour when you wire it up.";
const CAT: Record<string, Note> = {
  Modals: { rows: [["Keyboard", "Escape closes; Tab stays inside while open; focus returns to the button that opened it."], ["ARIA", "role=\"dialog\" and aria-modal=\"true\", labelled by the title (aria-labelledby)."], ["Focus", "Move focus to the first field or the dialog itself on open."]], gaps: ["Wrap it in a dialog primitive (the free Loopo Dialog uses Base UI and does all of the above).", "Make the close icon a <button aria-label=\"Close\">, and footer actions real buttons."] },
  Drawers: { rows: [["Keyboard", "Escape closes; Tab stays inside while open; focus returns to the trigger."], ["ARIA", "A side panel is still a dialog: role=\"dialog\", aria-modal, labelled by its title."], ["Focus", "Move focus into the drawer on open."]], gaps: ["Wrap it in a dialog primitive (Loopo Dialog, Base UI or Radix) positioned at the edge.", "Make the close icon and actions real buttons."] },
  Menus: { rows: [["Keyboard", "Enter, Space or ArrowDown opens; arrow keys move; Enter selects; Escape closes and returns focus to the trigger."], ["ARIA", "Trigger: aria-haspopup and aria-expanded. Popup: role=\"menu\" with role=\"menuitem\" (or menuitemcheckbox) items."], ["Focus", "The highlighted item holds focus; the highlight must be visible."]], gaps: ["Render the items through a menu primitive (the free Loopo Dropdown menu uses Base UI)."] },
  Popovers: { rows: [["Keyboard", "Opens from a button; Escape closes and returns focus to it."], ["ARIA", "Trigger: aria-expanded and aria-controls. Tooltips must also open on keyboard focus, not hover only."], ["Focus", "Interactive popovers take focus on open; tooltips don’t."]], gaps: ["Use a popover or tooltip primitive (Loopo Tooltip uses Base UI) rather than toggling visibility yourself."] },
  Forms: { rows: [["Keyboard", "Every field reachable with Tab, in visual order; Enter submits."], ["ARIA", "Native <input>, <select> and <textarea> with a visible <label>; aria-invalid and aria-describedby for errors and hints; toggles as role=\"switch\"."], ["Focus", "A visible focus ring on every field and button."]], gaps: ["Replace the drawn fields with real inputs (the free Loopo Input, Select, Switch and Checkbox are built this way).", "Don’t rely on placeholder text as the label."] },
  "Tables and lists": { rows: [["Keyboard", "Sort headers, row actions and checkboxes reachable with Tab."], ["ARIA", "A real <table> with <th scope=\"col\">, aria-sort on the sorted column, a label on each row checkbox. Lists as <ul>/<li>."], ["Focus", "Visible focus on every control in a row."]], gaps: ["Rebuild the grid of <div>s as a <table> (see the free Loopo Data table) or a list, keeping the classes for the look.", "Status pills must say the status in text, not colour alone."] },
  Charts: { rows: [["Text alternative", "Give the SVG role=\"img\" and an aria-label that states what it shows and the key numbers (for example “Revenue by month, highest in March at $42k”), or add a visually hidden table of the values."], ["Colour", "Series must be told apart by more than colour: labels, a text legend or patterns."], ["Keyboard", "Only needed if points are interactive; then each must be focusable with its value announced."]], gaps: ["Axis labels and values in the generated SVG are drawn shapes, so screen readers get nothing until you add the text alternative."] },
  "KPI and stats": { rows: [["Text", "The value and its label are real text, read in order."], ["Change", "Say the direction in words (“up 12%”), not only with an arrow or green/red."], ["Decoration", "Sparklines are decorative here: keep them aria-hidden."]], gaps: ["Group label and value (for example a <dl> or an aria-label on the card) so they are read together."] },
  Navigation: { rows: [["Keyboard", "Tab through links in order; Enter follows. Tabs: arrow keys between tabs."], ["ARIA", "<nav aria-label>, links as <a>, aria-current=\"page\" on the active item. Tab bars use role=\"tablist\"."], ["Focus", "A visible focus ring on every item."]], gaps: ["Turn the drawn items into links or your router’s Link; use Loopo Sidebar navigation or Tabs as the pattern."] },
  Headers: { rows: [["Structure", "The page title should be the page’s <h1>, section titles <h2>."], ["Keyboard", "Actions (buttons, search, menus) reachable with Tab in visual order."], ["ARIA", "Icon-only buttons need an aria-label."]], gaps: ["Swap the drawn title for a heading element and the action shapes for buttons."] },
  "Cards and panels": { rows: [["Structure", "The card title should be a heading at the right level for your page."], ["Keyboard", "Every action in the card is a button or link, reachable with Tab."], ["ARIA", "Icon-only actions need an aria-label; decorative icons stay aria-hidden."]], gaps: ["Swap drawn buttons and links for real ones; if the whole card is clickable, use one link and keep other actions outside it."] },
  Editors: { rows: [["Keyboard", "Toolbar: one Tab stop, arrow keys between tools. The editing area is reachable with Tab."], ["ARIA", "role=\"toolbar\" with a label; toggle tools use aria-pressed; the editable area has a label."], ["Focus", "A visible focus ring on tools and the editing area."]], gaps: ["Build it on a real editor (a <textarea> or a rich-text library) and keep this as the skin."] },
  Feedback: { rows: [["Announcements", "Toasts and inline messages use role=\"status\" (polite) or role=\"alert\" (urgent) so screen readers hear them."], ["Timing", "Don’t auto-dismiss messages people need to act on; let them pause or close."], ["Colour", "Success, warning and error must be clear from the text or icon, not colour alone."]], gaps: ["Add the live-region role when you render it."] },
  Atoms: { rows: [["Element", "Buttons as <button>, links as <a>; status pills say the status in text."], ["Focus", "A visible focus ring on anything interactive."], ["ARIA", "Icon-only controls need an aria-label."]] },
  Templates: { rows: [["Structure", "One <h1>, landmarks (<header>, <nav>, <main>) and a skip link."], ["Keyboard", "Every control reachable in visual order."]], gaps: ["Rebuild each part with the matching primitives."] },
};
const GENERIC: Note = { rows: [["Keyboard", "Every interactive part reachable with Tab and usable with Enter or Space."], ["ARIA", "Native elements first; icon-only controls need an aria-label."], ["Focus", "A visible focus ring on anything interactive."]] };

export function A11yNotes({ slug, category, handBuilt }: { slug: string; category: string; handBuilt: boolean }) {
  const own = handBuilt ? HAND[slug] : undefined;
  if (handBuilt && !own) return null; // tokens, utilities and icons: nothing interactive to note
  const note = own ?? CAT[category] ?? GENERIC;
  const scope = own ? "Notes for this component, from its code." : `Notes for all ${category.toLowerCase()} components (category level).`;
  const gaps = [...(own ? [] : [BASE_GAP]), ...(note.gaps ?? [])];
  const run = s.components?.[slug];
  return (
    <section className="mt-14 max-w-[1400px]" aria-labelledby="a11y-notes">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2 id="a11y-notes" className="text-[13px] font-medium">Accessibility</h2>
        <p className="text-[12px] text-mute">{scope} Target: WCAG 2.2 AA.</p>
      </div>
      <div className="mt-3 grid gap-3 lg:grid-cols-2">
        <dl className="card p-4">
          {note.rows.map(([k, v]) => (
            <div key={k} className="grid gap-1 border-b border-hair py-2 text-[13px] leading-snug first:pt-0 last:border-0 last:pb-0 sm:grid-cols-[120px_1fr] sm:gap-3">
              <dt className="text-mute">{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="card flex flex-col gap-3 p-4 text-[13px] leading-snug">
          {gaps.length > 0 && (
            <div>
              <h3 className="text-[12px] text-mute">{own ? "Known gaps" : "Before you ship it"}</h3>
              <ul className="mt-1.5 flex flex-col gap-1.5">
                {gaps.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
          )}
          {run && (
            <div>
              <h3 className="text-[12px] text-mute">Automated check ({s.date})</h3>
              <p className="mt-1.5">
                {run.length === 0
                  ? "No WCAG A or AA issues found by axe."
                  : run.map((r) => `${r.help} (${r.nodes} element${r.nodes === 1 ? "" : "s"})`).join("; ") + "."}
              </p>
            </div>
          )}
          <p className="mt-auto text-[12px] text-mute">
            How we test and what’s known: <Link href="/accessibility" className="font-medium text-ink underline underline-offset-2">accessibility statement</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
