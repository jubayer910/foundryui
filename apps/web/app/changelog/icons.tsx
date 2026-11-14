/* A few icons from the Ingot icon library (public/icons/stroke-rounded.json), inlined so the
   changelog and roadmap pages don't fetch the whole set. Same 24 grid and 1.5 stroke as CIcon. */

const PATHS = {
  // sparkles: something new
  new: ["M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2m-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6"],
  // trending-up: made better
  improved: ["M3 17l6 -6l4 4l8 -8", "M14 7l7 0l0 7"],
  // wrench: a fix
  fixed: ["M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"],
  rss: ["M4 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0", "M4 4a16 16 0 0 1 16 16", "M4 11a9 9 0 0 1 9 9"],
  "arrow-up": ["M12 5l0 14", "M18 11l-6 -6", "M6 11l6 -6"],
  link: ["M9 15l6 -6", "M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464", "M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463"],
  message: ["M8 9h8", "M8 13h6", "M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12"],
  road: ["M4 19l4 -14", "M16 5l4 14", "M12 8v-2", "M12 13v-2", "M12 18v-2"],
} as const;

export type LogIconName = keyof typeof PATHS;

export function LogIcon({ name, size = 14, className }: { name: LogIconName; size?: number; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      {PATHS[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
