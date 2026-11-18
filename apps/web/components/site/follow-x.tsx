/** X (Twitter) account for product updates. One place for the handle and URL. */
export const X_HANDLE = "ingotui";
export const X_URL = "https://x.com/" + X_HANDLE;

/** X's own logo mark, used only to link to our X account (allowed by X's brand guidelines). */
function XMark({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

/** Sidebar card: follow Ingot UI on X for daily updates. */
export function FollowX() {
  return (
    <a
      href={X_URL}
      target="_blank"
      rel="me noopener"
      className="group flex items-center gap-2.5 rounded-[8px] px-2 py-2 transition-colors hover:bg-tile"
      aria-label={"Follow @" + X_HANDLE + " on X for daily updates (opens in a new tab)"}
    >
      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-ink text-white">
        <XMark size={13} />
      </span>
      <span className="min-w-0 leading-tight">
        <span className="block text-[12.5px] font-medium text-ink">Follow @{X_HANDLE}</span>
        <span className="block text-[11.5px] text-mute">Daily updates on X</span>
      </span>
    </a>
  );
}
