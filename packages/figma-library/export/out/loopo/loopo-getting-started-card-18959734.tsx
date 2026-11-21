// Getting started card (loopo, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const RocketBulk = icon("<path d=\"M4 13A8 8 0 0 1 11 20 6 6 0 0 0 14 15 9 9 0 0 0 20 7 3 3 0 0 0 17 4 9 9 0 0 0 9 10 6 6 0 0 0 4 13\" fill=\"currentColor\" fill-opacity=\"0.4\"/><g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 14A6 6 0 0 0 4 20 6 6 0 0 0 10 17\"/><path d=\"M14 9A1 1 0 1 0 16 9 1 1 0 1 0 14 9\"/></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");

export function GettingStartedCard() {
  return (
    <div style={{ width: "401.43px", height: "380.19px", borderRadius: "24.1px", background: "#fefefe", boxShadow: "inset 0 0 0 1.1px #eaeaea", overflow: "hidden", display: "flex", flexDirection: "column", padding: "23.01px 14.25px 23.01px 14.25px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "375.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 8.77px 0px 8.77px", gap: "13.15px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "39.44px", height: "39.44px", flexShrink: 0, borderRadius: "10.96px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <RocketBulk size={19.7} style={{ width: "19.72px", height: "19.72px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#141417", lineHeight: "1.5" }}>Getting started</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6b6b70" }}>14 guides · set up in an afternoon</p>
        </div>
      </div>
      <div style={{ width: "375.13px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "375.13px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 8.77px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Set up your Harbor & Co. workspace</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>4 min read</p>
          </div>
          <ChevronRight size={15.3} strokeWidth={2.35} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#999999", display: "block" }} />
        </div>
        <div style={{ width: "375.13px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 8.77px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Import contacts from Shopify</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>3 min read</p>
          </div>
          <ChevronRight size={15.3} strokeWidth={2.35} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#999999", display: "block" }} />
        </div>
        <div style={{ width: "375.13px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 8.77px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Verify your sending domain (DNS)</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>6 min read</p>
          </div>
          <ChevronRight size={15.3} strokeWidth={2.35} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#999999", display: "block" }} />
        </div>
        <div style={{ width: "375.13px", flexShrink: 0, borderRadius: "10.96px", display: "flex", flexDirection: "row", padding: "7.67px 8.77px 7.67px 8.77px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#222222" }}>Invite your team and set roles</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#999999" }}>2 min read</p>
          </div>
          <ChevronRight size={15.3} strokeWidth={2.35} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#999999", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "375.13px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6.57px 8.77px 6.57px 8.77px", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#fd4b23" }}>View all 14 guides</p>
        <ChevronRight size={15.3} strokeWidth={2.35} style={{ width: "15.34px", height: "15.34px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
      </div>
    </div>
  );
}
