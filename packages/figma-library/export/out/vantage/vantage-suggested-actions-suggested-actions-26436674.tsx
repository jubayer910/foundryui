// Suggested actions, Suggested actions (vantage, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Award = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\" /><path d=\"M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889\" /><path d=\"M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const Phone = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2\" /></g>");
const UserPlus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M16 19h6\" /><path d=\"M19 16v6\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4\" /></g>");

export function SuggestedActionsSuggestedActions() {
  return (
    <div style={{ width: "440px", height: "240px", display: "flex", flexDirection: "column", padding: "16px 20px 16px 20px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Suggested actions</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>to close the gap by Dec</p>
      </div>
      <div style={{ width: "400px", height: "6px", flexShrink: 0 }} />
      <div style={{ width: "400px", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "rgba(123, 91, 255, 0.12)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.22)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Phone size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8f74ff", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Push 56 follow-ups to close 20 subs</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>At the network’s 35.6% follow-up → customer rate</p>
        </div>
        <ChevronRight size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
      </div>
      <div style={{ width: "400px", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "rgba(122, 162, 247, 0.12)", boxShadow: "inset 0 0 0 1px rgba(122, 162, 247, 0.22)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <UserPlus size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8eb0f8", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Onboard 5 new members a month</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>24 more people needed to reach 40 by December</p>
        </div>
        <ChevronRight size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
      </div>
      <div style={{ width: "400px", height: "56px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #222222", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "rgba(227, 179, 65, 0.12)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.22)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Award size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#e7be5e", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Coach Marisol Peña toward Eagle</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>First Eagle leg · 6 / 15 people · 9 / 30 subs</p>
        </div>
        <ChevronRight size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
      </div>
    </div>
  );
}
