/** X (Twitter) account for product updates. One place for the handle and URL. */
export const X_HANDLE = "ingotui";
export const X_URL = "https://x.com/" + X_HANDLE;

/** X's own logo mark, used only to link to our X account (allowed by X's brand guidelines). */
export function XMark({ size = 14 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="currentColor">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

/** Sidebar: small X link for daily updates. */
export function FollowX() {
  return (
    <a
      href={X_URL}
      target="_blank"
      rel="me noopener"
      className="inline-flex min-h-7 items-center gap-1.5 text-[12px] text-mute hover:text-ink"
      aria-label={"Follow @" + X_HANDLE + " on X for daily updates (opens in a new tab)"}
    >
      <XMark size={12} />
      <span>@{X_HANDLE}</span>
    </a>
  );
}

/** Footer: X as one small link among About, Changelog and the rest. */
export function XFooterLink({ onClick }: { onClick?: () => void }) {
  return (
    <a href={X_URL} target="_blank" rel="me noopener" onClick={onClick} className="inline-flex min-h-6 items-center gap-1 hover:text-ink" aria-label={"Ingot UI on X, @" + X_HANDLE + " (opens in a new tab)"}>
      <XMark size={10} />
      <span>@{X_HANDLE}</span>
    </a>
  );
}
