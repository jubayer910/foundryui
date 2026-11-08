import { cx } from "./cx";

const TINTS = ["#ffe3d9", "#dce9ff", "#ffe1ee", "#fdf1c9", "#dff5ea"];

export interface AvatarGroupProps { names: string[]; max?: number; size?: number; className?: string }

function initials(n: string) {
  return n.split(" ").map((p) => p[0]).slice(0, 2).join("").toUpperCase();
}

export function AvatarGroup({ names, max = 4, size = 28, className }: AvatarGroupProps) {
  const shown = names.slice(0, max);
  const rest = names.length - shown.length;
  return (
    <div className={cx("flex items-center", className)}>
      {shown.map((n, i) => (
        <span
          key={n}
          title={n}
          className="-ml-2 flex items-center justify-center rounded-full font-medium text-fu-body ring-2 ring-fu-surface first:ml-0"
          style={{ width: size, height: size, fontSize: size * 0.38, background: TINTS[i % TINTS.length] }}
        >
          {initials(n)}
        </span>
      ))}
      {rest > 0 && (
        <span className="-ml-2 flex items-center justify-center rounded-full bg-fu-hover font-medium text-fu-muted ring-2 ring-fu-surface" style={{ width: size, height: size, fontSize: size * 0.36 }}>
          +{rest}
        </span>
      )}
    </div>
  );
}
