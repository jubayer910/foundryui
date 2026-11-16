import { ImageResponse } from "next/og";
import { LOCKUP_VIEWBOX, MARK_PATH, MARK_VIEWBOX, WORDMARK_PATHS } from "./brand";
import { INTER_400, INTER_500, INTER_600 } from "./og-fonts";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

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
export function ogImage({ title, sub, chips = [], visual }: { eyebrow?: string; title: string; sub?: string; accent?: string; chips?: string[]; visual?: string | null }) {
  if (visual) return ogVisualImage({ title, sub, visual });
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

/**
 * The library thumbnail for a link preview, as a JPEG data URL. The JPEGs are made before each build by
 * scripts/og-visuals.mjs (Satori cannot read WebP). Returns null when there is none, so callers fall back
 * to the text-only card.
 */
export async function ogVisual(thumb: string | undefined | null): Promise<string | null> {
  const m = thumb?.match(/^\/library\/([a-z0-9-]+)\/([\w-]+)\.webp$/);
  if (!m) return null;
  try {
    const buf = await readFile(join(process.cwd(), ".og-cache", m[1], m[2] + ".jpg"));
    return "data:image/jpeg;base64," + buf.toString("base64");
  } catch {
    return null;
  }
}

/** Same card with the real component or dashboard: lockup, title and one line on top, the picture in a tile below. */
function ogVisualImage({ title, sub, visual }: { title: string; sub?: string; visual: string }) {
  const size = title.length > 56 ? 40 : title.length > 36 ? 46 : 52;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", background: "#ffffff", padding: "44px 64px 0", fontFamily: "Inter", color: "#0b0b0b" }}>
        <Lockup h={28} />
        <div style={{ display: "flex", maxWidth: 940, marginTop: 26, textAlign: "center", justifyContent: "center", fontSize: size, fontWeight: 600, lineHeight: 1.08, letterSpacing: -4 * (size / 66) }}>{title}</div>
        {sub && <div style={{ display: "flex", maxWidth: 860, textAlign: "center", justifyContent: "center", fontSize: 22, fontWeight: 400, color: "rgba(0,0,0,0.55)", marginTop: 12, lineHeight: 1.35 }}>{sub}</div>}
        <div style={{ display: "flex", flex: 1, width: 1040, marginTop: 30, marginBottom: -36, padding: "28px 28px 64px", alignItems: "center", justifyContent: "center", background: "#f5f5f5", borderRadius: 22, border: "1px solid #ececec" }}>
          <img src={visual} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: 10, boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 12px 32px -12px rgba(0,0,0,0.18)" }} />
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
