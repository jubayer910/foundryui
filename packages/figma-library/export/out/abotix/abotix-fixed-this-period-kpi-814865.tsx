// Fixed this period KPI (abotix, KPI and stats) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const CircleCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /><path d=\"M9 12l2 2l4 -4\" /></g>");
const Flag = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9\" /><path d=\"M5 21v-7\" /></g>");
const GitPullRequest = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M6 8l0 8\" /><path d=\"M11 6h5a2 2 0 0 1 2 2v8\" /><path d=\"M14 9l-3 -3l3 -3\" /></g>");
const Wrench = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z\" /></g>");

export function FixedThisPeriodKPI() {
  return (
    <div style={{ width: "258px", height: "208px", borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "16px", top: "16px", width: "226px", height: "174px", display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#141b34", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858" }}>Fixed this period</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "22px", fontWeight: 500, color: "#111111", lineHeight: "1.100000023841858" }}>61</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "10px", height: "9px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10" height="9" viewBox="0 0 10 9" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 0 L9.33013 6.75 L0.669873 6.75 L5 0 Z" fill="#2db475"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2db475", lineHeight: "1.100000023841858" }}>+18.0%</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858" }}>vs. previous 30 days</p>
            </div>
          </div>
        </div>
        <svg style={{ width: "226px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="226" height="1" viewBox="0 0 226 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L226 0" fill="none" stroke="#dddddd" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Wrench size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858" }}>Auto-fixed</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858" }}>24</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <GitPullRequest size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858" }}>Fix requests</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858" }}>29</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Flag size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#666666", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858" }}>Accepted risk</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#2d2d2d", lineHeight: "1.100000023841858" }}>8</p>
          </div>
        </div>
      </div>
    </div>
  );
}
