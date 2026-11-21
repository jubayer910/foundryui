// INV-1046 · 8 days late menu (montra, Menus) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const CancelCircle = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10s10-4.477 10-10m-7 3l-3-3m0 0L9 9m3 3l-3 3m3-3l3-3\"/></g>");
const CircleCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /><path d=\"M9 12l2 2l4 -4\" /></g>");
const Copy = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666\" /><path d=\"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1\" /></g>");
const Download = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2\" /><path d=\"M7 11l5 5l5 -5\" /><path d=\"M12 4l0 12\" /></g>");
const Eye = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6\" /></g>");
const Send = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 14l11 -11\" /><path d=\"M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5\" /></g>");

export function INV10468DaysLateMenu() {
  return (
    <div style={{ width: "219.33px", height: "235.95px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 10.97px 25.59px -7.31px rgba(13, 13, 18, 0.08), 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.05)", display: "flex", flexDirection: "column", padding: "5.48px 5.48px 5.48px 5.48px", gap: "0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "7.31px 9.14px 3.66px 9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>INV-1046 · 8 days late</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#f4f4f5", boxShadow: "inset 0 0 0 0.91px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Send size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#222222", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#222222" }}>Send reminder</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#a6a6a6" }}>Last Aug 04</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CircleCheck size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>Mark as paid</p>
      </div>
      <div style={{ alignSelf: "stretch", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Eye size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>View invoice</p>
        <div style={{ height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 5.48px 0.91px 5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>↵</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Copy size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>Duplicate</p>
        <div style={{ height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 5.48px 0.91px 5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>D</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Download size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#3f3f46" }}>Download PDF</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "3.66px 0px 3.66px 0px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "0.91px", flexShrink: 0, background: "#ededed" }} />
      </div>
      <div style={{ alignSelf: "stretch", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CancelCircle size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#f45363", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#f45363" }}>Void invoice</p>
      </div>
    </div>
  );
}
