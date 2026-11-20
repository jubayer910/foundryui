// KPI 1 (loopo, KPI and stats) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const ArrowUpRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 7l-10 10\" /><path d=\"M8 7l9 0l0 9\" /></g>");
const DotsVertical = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");

export function KPI1() {
  return (
    <div style={{ width: "299.11px", height: "147.91px", borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "-2.19px", top: "-2.19px", width: "301.3px", height: "41.91px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Users size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Total audience</p>
          </div>
          <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: "4.38px", top: "37.25px", width: "290.34px", height: "106.28px", borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "8.76px", top: "8.76px", width: "276.1px", height: "88.25px", display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>18,420</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#fd4b23" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
              <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#e1e1e1" }} />
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ArrowUpRight size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#18b170", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>{"+6.2% "}</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>vs. prior period</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
