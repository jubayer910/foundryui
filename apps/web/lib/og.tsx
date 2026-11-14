import { ImageResponse } from "next/og";
import { LOCKUP_VIEWBOX, MARK_PATH, MARK_VIEWBOX, WORDMARK_PATHS } from "./brand";
import { INTER_400, INTER_500, INTER_600 } from "./og-fonts";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_TYPE = "image/png";

const Mark = ({ s = 40 }: { s?: number }) => (
  <svg viewBox={MARK_VIEWBOX} width={Math.round((s * 207) / 212)} height={s}>
    <path d={MARK_PATH} fill="#0b0b0b" />
  </svg>
);

const Lockup = ({ h = 36 }: { h?: number }) => (
  <svg viewBox={LOCKUP_VIEWBOX} width={Math.round((h * 1005) / 252)} height={h}>
    <path d={MARK_PATH} fill="#0b0b0b" />
    {WORDMARK_PATHS.map((d, i) => (
      <path key={i} d={d} fill="#0b0b0b" />
    ))}
  </svg>
);

const fontData = (b64: string) => Uint8Array.from(atob(b64), (c) => c.charCodeAt(0)).buffer as ArrayBuffer;
let fonts: { name: string; data: ArrayBuffer; weight: 400 | 500 | 600; style: "normal" }[] | null = null;
const ogFonts = () =>
  (fonts ??= [
    { name: "Inter", data: fontData(INTER_400), weight: 400, style: "normal" },
    { name: "Inter", data: fontData(INTER_500), weight: 500, style: "normal" },
    { name: "Inter", data: fontData(INTER_600), weight: 600, style: "normal" },
  ]);

/**
 * One social card for every template, from the owner's Figma frame
 * (UwaYzhrLo0wwH61PauTGSw node 2:2): white, centred lockup on top, centred title, subtitle and chips at the bottom.
 * `eyebrow` and `accent` are kept for callers but not drawn in this design.
 */
export function ogImage({ title, sub, chips = [] }: { eyebrow?: string; title: string; sub?: string; accent?: string; chips?: string[] }) {
  const size = title.length > 70 ? 52 : title.length > 48 ? 58 : 66;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", background: "#ffffff", padding: 64, fontFamily: "Inter", color: "#0b0b0b" }}>
        <Lockup h={36} />
        <div style={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "flex-end", width: "100%" }}>
          <div style={{ display: "flex", maxWidth: 730, textAlign: "center", justifyContent: "center", fontSize: size, fontWeight: 600, lineHeight: 1.08, letterSpacing: -4 * (size / 66) }}>{title}</div>
          {sub && <div style={{ display: "flex", maxWidth: 730, textAlign: "center", justifyContent: "center", fontSize: 26, fontWeight: 400, color: "rgba(0,0,0,0.55)", marginTop: 22, lineHeight: 1.35 }}>{sub}</div>}
          {chips.filter(Boolean).length > 0 && (
            <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
              {chips.filter(Boolean).slice(0, 4).map((c) => (
                <span key={c} style={{ fontSize: 20, fontWeight: 500, background: "#efefef", borderRadius: 999, padding: "7px 16px" }}>{c}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts: ogFonts() },
  );
}

export function markImage(size: number) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#ffffff" }}>
        <Mark s={Math.round(size * 0.62)} />
      </div>
    ),
    { width: size, height: size },
  );
}
