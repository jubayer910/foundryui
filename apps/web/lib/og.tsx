import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_TYPE = "image/png";

const Mark = ({ s = 40 }: { s?: number }) => (
  <svg viewBox="0 0 24 24" width={s} height={s}>
    <rect x="3" y="3" width="18" height="5" rx="1.5" fill="#0b0b0b" />
    <rect x="3" y="10" width="12" height="5" rx="1.5" fill="#0b0b0b" />
    <rect x="3" y="17" width="7" height="4" rx="1.5" fill="#0b0b0b" />
  </svg>
);

/** One social card for every template: white, ink, hairline, one accent bar chart. */
export function ogImage({ eyebrow, title, sub, accent = "#0b0b0b", chips = [] }: { eyebrow: string; title: string; sub?: string; accent?: string; chips?: string[] }) {
  const bars = [38, 62, 48, 80, 56, 92, 70, 84];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#ffffff", padding: 64, fontFamily: "sans-serif", color: "#0b0b0b" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Mark />
          <span style={{ fontSize: 30, fontWeight: 700, letterSpacing: -0.5 }}>Ingot UI</span>
          <span style={{ marginLeft: "auto", fontSize: 22, color: "rgba(0,0,0,0.55)", background: "#efefef", borderRadius: 999, padding: "8px 18px" }}>{eyebrow}</span>
        </div>
        <div style={{ display: "flex", flex: 1, alignItems: "flex-end", gap: 48, marginTop: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div style={{ fontSize: title.length > 60 ? 54 : 66, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>{title}</div>
            {sub && <div style={{ fontSize: 26, color: "rgba(0,0,0,0.55)", marginTop: 22, lineHeight: 1.35 }}>{sub}</div>}
            {chips.length > 0 && (
              <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
                {chips.slice(0, 4).map((c) => (
                  <span key={c} style={{ fontSize: 20, background: "#efefef", borderRadius: 999, padding: "6px 16px" }}>{c}</span>
                ))}
              </div>
            )}
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, width: 260, height: 220, padding: 18, borderRadius: 16, background: accent + "14" }}>
            {bars.map((h, i) => (
              <div key={i} style={{ flex: 1, height: h + "%", borderRadius: "6px 6px 0 0", background: i === 5 ? accent : accent + "4d" }} />
            ))}
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}

export function markImage(size: number) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
        <Mark s={Math.round(size * 0.78)} />
      </div>
    ),
    { width: size, height: size },
  );
}
