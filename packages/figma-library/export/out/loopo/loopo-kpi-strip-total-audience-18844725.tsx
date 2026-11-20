// KPI strip, Total audience (loopo, KPI and stats) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Activity = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12h4l3 8l4 -16l3 8h4\" /></g>");
const ArrowDownRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 7l10 10\" /><path d=\"M17 8l0 9l-9 0\" /></g>");
const ArrowUpRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 7l-10 10\" /><path d=\"M8 7l9 0l0 9\" /></g>");
const DotsVertical = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const MailX = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13.5 19h-8.5a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v6\" /><path d=\"M3 7l9 6l9 -6\" /><path d=\"M22 22l-5 -5\" /><path d=\"M17 22l5 -5\" /></g>");
const UserPlus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M16 19h6\" /><path d=\"M19 16v6\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4\" /></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");

export function KPIStripTotalAudience() {
  return (
    <div style={{ width: "1245.74px", height: "147.91px", display: "flex", flexDirection: "row", gap: "16.43px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
      <div style={{ width: "299.11px", height: "147.91px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
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
      <div style={{ width: "299.11px", height: "147.91px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", left: "-2.19px", top: "-2.19px", width: "301.3px", height: "41.91px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <UserPlus size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>New this month</p>
            </div>
            <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "4.38px", top: "37.25px", width: "290.34px", height: "106.28px", borderRadius: "8.77px", background: "#ffffff", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "8.77px", top: "8.76px", width: "276.1px", height: "88.25px", display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>1,284</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#0044ff" }} />
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
                  <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>{"+12.1% "}</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>vs. prior period</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "299.11px", height: "147.91px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "299.11px", height: "41.91px", background: "#ffffff", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Activity size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Engagement rate</p>
            </div>
            <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "4.38px", top: "37.25px", width: "290.34px", height: "106.28px", borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "8.77px", top: "8.76px", width: "276.1px", height: "88.25px", display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>46.2%</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#18b170" }} />
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
                  <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>{"+2.4% "}</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>vs. prior period</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "299.11px", height: "147.91px", flexShrink: 0, borderRadius: "13.15px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #eeeeee, 0px 1.1px 4.38px 0px rgba(0, 0, 0, 0.05)", overflow: "hidden", position: "relative" }}>
        <div style={{ position: "absolute", left: "-2.19px", top: "-2.19px", width: "301.3px", height: "41.91px", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <MailX size={17.5} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#7d818c" }}>Unsubscribe rate</p>
            </div>
            <DotsVertical size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
          </div>
        </div>
        <div style={{ position: "absolute", left: "4.38px", top: "37.25px", width: "290.34px", height: "106.28px", borderRadius: "8.77px", background: "rgba(255, 255, 255, 0.91)", boxShadow: "0px 0px 1.1px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "8.77px", top: "8.76px", width: "276.1px", height: "88.25px", display: "flex", flexDirection: "column", gap: "21.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "28px", fontFamily: "'Geist'", fontSize: "21.91px", fontWeight: 500, color: "#222222" }}>0.4%</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8.77px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.29px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
                <div style={{ width: "2.19px", height: "6.57px", flexShrink: 0, borderRadius: "70.12px", background: "#f3c83d" }} />
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
                <ArrowDownRight size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#18b170", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>
                  <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#18b170", lineHeight: "1.5" }}>{"-0.1% "}</span>
                  <span style={{ fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>vs. prior period</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
