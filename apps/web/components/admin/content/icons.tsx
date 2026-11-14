/** Content-admin icons, copied from the Ingot icon library (public/icons/stroke-rounded.json, 24 grid, 1.5 stroke). Each one depicts its label. Server and client safe. */
const ICONS = {
  "bold": "<path d=\"M7 5h6a3.5 3.5 0 0 1 0 7h-6l0 -7\" /><path d=\"M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7\" />",
  "h-2": "<path d=\"M17 12a2 2 0 1 1 4 0c0 .591 -.417 1.318 -.816 1.858l-3.184 4.143l4 0\" /><path d=\"M4 6v12\" /><path d=\"M12 6v12\" /><path d=\"M11 18h2\" /><path d=\"M3 18h2\" /><path d=\"M4 12h8\" /><path d=\"M3 6h2\" /><path d=\"M11 6h2\" />",
  "h-3": "<path d=\"M19 14a2 2 0 1 0 -2 -2\" /><path d=\"M17 16a2 2 0 1 0 2 -2\" /><path d=\"M4 6v12\" /><path d=\"M12 6v12\" /><path d=\"M11 18h2\" /><path d=\"M3 18h2\" /><path d=\"M4 12h8\" /><path d=\"M3 6h2\" /><path d=\"M11 6h2\" />",
  "list": "<path d=\"M9 6l11 0\" /><path d=\"M9 12l11 0\" /><path d=\"M9 18l11 0\" /><path d=\"M5 6l0 .01\" /><path d=\"M5 12l0 .01\" /><path d=\"M5 18l0 .01\" />",
  "list-numbers": "<path d=\"M11 6h9\" /><path d=\"M11 12h9\" /><path d=\"M12 18h8\" /><path d=\"M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4\" /><path d=\"M6 10v-6l-2 2\" />",
  "quote": "<path d=\"M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5\" /><path d=\"M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5\" />",
  "code": "<path d=\"M7 8l-4 4l4 4\" /><path d=\"M17 8l4 4l-4 4\" /><path d=\"M14 4l-4 16\" />",
  "table": "<path d=\"M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14\" /><path d=\"M3 10h18\" /><path d=\"M10 3v18\" />",
  "link": "<path d=\"M9 15l6 -6\" /><path d=\"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464\" /><path d=\"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463\" />",
  "eye": "<path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\" />",
  "pencil": "<path d=\"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4\" /><path d=\"M13.5 6.5l4 4\" />",
  "device-floppy": "<path d=\"M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2\" /><path d=\"M10 14a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M14 4l0 4l-6 0l0 -4\" />",
  "send": "<path d=\"M10 14l11 -11\" /><path d=\"M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5\" />",
  "world": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0\" /><path d=\"M3.6 9h16.8\" /><path d=\"M3.6 15h16.8\" /><path d=\"M11.5 3a17 17 0 0 0 0 18\" /><path d=\"M12.5 3a17 17 0 0 1 0 18\" />",
  "plus": "<path d=\"M12 5l0 14\" /><path d=\"M5 12l14 0\" />",
  "copy": "<path d=\"M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666\" /><path d=\"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1\" />",
  "trash": "<path d=\"M4 7l16 0\" /><path d=\"M10 11l0 6\" /><path d=\"M14 11l0 6\" /><path d=\"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12\" /><path d=\"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3\" />",
  "markdown": "<path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10\" /><path d=\"M7 15v-6l2 2l2 -2v6\" /><path d=\"M14 13l2 2l2 -2m-2 2v-6\" />",
  "arrow-back-up": "<path d=\"M9 14l-4 -4l4 -4\" /><path d=\"M5 10h11a4 4 0 1 1 0 8h-1\" />",
  "arrow-left": "<path d=\"M5 12l14 0\" /><path d=\"M5 12l6 6\" /><path d=\"M5 12l6 -6\" />",
  "external-link": "<path d=\"M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6\" /><path d=\"M11 13l9 -9\" /><path d=\"M15 4h5v5\" />",
  "circle-check": "<path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /><path d=\"M9 12l2 2l4 -4\" />",
  "eye-off": "<path d=\"M10.585 10.587a2 2 0 0 0 2.829 2.828\" /><path d=\"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87\" /><path d=\"M3 3l18 18\" />",
  "calendar": "<path d=\"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" />",
  "x": "<path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" />",
  "photo": "<path d=\"M15 8h.01\" /><path d=\"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12\" /><path d=\"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5\" /><path d=\"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3\" />",
  "file-text": "<path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2\" /><path d=\"M9 9l1 0\" /><path d=\"M9 13l6 0\" /><path d=\"M9 17l6 0\" />",
  "lock": "<path d=\"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6\" /><path d=\"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0\" /><path d=\"M8 11v-4a4 4 0 1 1 8 0v4\" />",
} as const;

export type ContentIconName = keyof typeof ICONS;

export function CIco({ name, size = 16, className }: { name: ContentIconName; size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      dangerouslySetInnerHTML={{ __html: ICONS[name] }}
    />
  );
}
