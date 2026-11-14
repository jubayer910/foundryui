/** Admin-only icons, copied from the Ingot icon library (public/icons/stroke-rounded.json, 24 grid). */
const ICONS = {
  "trending-up": '<path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" />',
  "trending-down": '<path d="M3 7l6 6l4 -4l8 8" /><path d="M21 10l0 7l-7 0" />',
  minus: '<path d="M5 12l14 0" />',
  "chart-line": '<path d="M4 19l16 0" /><path d="M4 15l4 -6l4 2l4 -5l4 4" />',
  "chart-funnel":
    '<path d="M4.387 3h15.226a1 1 0 0 1 .948 1.316l-5.105 15.316a2 2 0 0 1 -1.898 1.368h-3.116a2 2 0 0 1 -1.898 -1.368l-5.104 -15.316a1 1 0 0 1 .947 -1.316" /><path d="M5 9h14" /><path d="M7 15h10" />',
};

export type AdminIconName = keyof typeof ICONS;

export function AIcon({ name, size = 16, className }: { name: AdminIconName; size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}
