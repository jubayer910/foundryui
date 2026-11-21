// Path drawer (abotix, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist Mono, Geist, Inter. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Crown = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4l4 -6\" /></g>");
const Database = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6a8 3 0 1 0 16 0a8 3 0 1 0 -16 0\" /><path d=\"M4 6v6a8 3 0 0 0 16 0v-6\" /><path d=\"M4 12v6a8 3 0 0 0 16 0v-6\" /></g>");
const Flag = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0v9a5 5 0 0 1 -7 0a5 5 0 0 0 -7 0v-9\" /><path d=\"M5 21v-7\" /></g>");
const GitPullRequest = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M16 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M6 8l0 8\" /><path d=\"M11 6h5a2 2 0 0 1 2 2v8\" /><path d=\"M14 9l-3 -3l3 -3\" /></g>");
const Mail = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10\" /><path d=\"M3 7l9 6l9 -6\" /></g>");
const Robot = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 6a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2l0 -4\" /><path d=\"M12 2v2\" /><path d=\"M9 12v9\" /><path d=\"M15 12v9\" /><path d=\"M5 16l4 -2\" /><path d=\"M15 14l4 2\" /><path d=\"M9 18h6\" /><path d=\"M10 8v.01\" /><path d=\"M14 8v.01\" /></g>");
const Route = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0\" /><path d=\"M19 7a2 2 0 1 0 0 -4a2 2 0 0 0 0 4\" /><path d=\"M11 19h5.5a3.5 3.5 0 0 0 0 -7h-8a3.5 3.5 0 0 1 0 -7h4.5\" /></g>");
const UserLock = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M19 16v-2a2 2 0 0 0-4 0v2\" /><path d=\"M9.5 15H7a4 4 0 0 0-4 4v2\" /><circle cx=\"10\" cy=\"7\" r=\"4\" /><rect x=\"13\" y=\"16\" width=\"8\" height=\"5\" rx=\".899\" /></g>");
const Wand = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 21l15 -15l-3 -3l-15 15l3 3\" /><path d=\"M15 6l3 3\" /><path d=\"M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2\" /><path d=\"M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function PathDrawer() {
  return (
    <div style={{ width: "460px", height: "1056px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 20px 44px -12px rgba(13, 13, 18, 0.12), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "20px 20px 17px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "rgba(229, 72, 77, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Route size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#e5484d", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#555555" }}>AP-07</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "218px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Inbound email → Customer PII</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(229, 72, 77, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#e5484d"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d", letterSpacing: "-0.01em" }}>Critical</p>
            </div>
            <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(229, 72, 77, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#e5484d"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d", letterSpacing: "-0.01em" }}>Open</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "171px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>Risk 94 · 3 hops · found 27 Oct</p>
          </div>
        </div>
        <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#353537", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "16px 20px 16px 20px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, boxShadow: "inset 0 -2px 0 0 #2563eb", display: "flex", flexDirection: "row", padding: "0px 0px 12px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#2d2d2d" }}>Hops</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 10px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#8a8a8a" }}>Findings</p>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "5px", background: "#f3f3f3", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#353537" }}>3</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 10px 0px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#8a8a8a" }}>History</p>
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a", lineHeight: "1.3300000429153442" }}>HOP BY HOP</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "32px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Mail size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#2563eb", display: "block" }} />
              </div>
              <div style={{ width: "1.5px", flex: "1 1 0", minHeight: 0, flexShrink: 0, background: "#e8e8e8" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 0px 14px 0px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.04em" }}>ENTRY</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>Inbound email</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "212px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>Anyone can mail claims@northwind.ai</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "32px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "rgba(229, 72, 77, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Robot size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#e5484d", display: "block" }} />
              </div>
              <div style={{ width: "1.5px", flex: "1 1 0", minHeight: 0, flexShrink: 0, background: "rgba(229, 72, 77, 0.5)" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 0px 14px 0px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.04em" }}>HOP 1</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>Claims Triage Agent</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "313px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d", letterSpacing: "0.02em" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d", letterSpacing: "0.02em" }}>Critical</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555", letterSpacing: "0.02em" }}>{" · VUL-2284 · injection from email attachments"}</span>
              </p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "32px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "rgba(254, 113, 12, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Database size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#fe710c", display: "block" }} />
              </div>
              <div style={{ width: "1.5px", flex: "1 1 0", minHeight: 0, flexShrink: 0, background: "rgba(229, 72, 77, 0.5)" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 0px 14px 0px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.04em" }}>HOP 2</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>SQL connector</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "245px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fe710c", letterSpacing: "0.02em" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fe710c", letterSpacing: "0.02em" }}>High</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555", letterSpacing: "0.02em" }}>{" · VUL-2281 · write scope, no row limit"}</span>
              </p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "32px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "rgba(229, 72, 77, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <UserLock size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#e5484d", display: "block" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#8a8a8a", letterSpacing: "0.04em" }}>TARGET</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>Customer PII store</p>
                <Crown size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#e3a044", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "203px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>1.2M customer records · crown jewel</p>
            </div>
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", fontFamily: "'Inter'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a", lineHeight: "1.3300000429153442" }}>BREAK THIS PATH</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Wand size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#2563eb", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "231px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#2d2d2d" }}>Scope SQL connector to read-only</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "275px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#555555" }}>Removes 4 paths, including AP-07 and AP-12.</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>Paths removed</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2d2d2d" }}>4 of 23</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
            <div style={{ width: "3.2px", height: "14px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(37, 99, 235, 0.16)" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>Crown-jewel paths left</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d" }}>5</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>{" → "}</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2d2d2d" }}>3</span>
            </p>
          </div>
          <div style={{ width: "390px", height: "12px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "232.2px", height: "12px", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(180deg, #e86064 0%, #e5484d 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 56, 60, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "154.8px", height: "12px", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(180deg, #c8ecdb 0%, #b8e6d0 100%)", boxShadow: "inset 0 0 0 1px rgba(43, 171, 111, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "131px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Paths this fix closes</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#747474" }}>4 of 23</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "column", padding: "3px 13px 3px 13px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>AP-07</p>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Inbound email → Customer PII</p>
            <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "rgba(45, 180, 117, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#2db475"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#2db475", letterSpacing: "-0.01em" }}>Closes</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>AP-12</p>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Inbound email → Payments ledger</p>
            <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "rgba(45, 180, 117, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#2db475"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#2db475", letterSpacing: "-0.01em" }}>Closes</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>AP-18</p>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Partner webhook → Claims history</p>
            <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "rgba(45, 180, 117, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#2db475"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#2db475", letterSpacing: "-0.01em" }}>Closes</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ececec", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>AP-21</p>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Inbound email → Claims history</p>
            <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "rgba(45, 180, 117, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#2db475"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#2db475", letterSpacing: "-0.01em" }}>Closes</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#e0e9fc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#184099" }}>LM</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Leo Martins · Platform</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#8a8a8a" }}>Suggested owner</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ height: "34px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ebebeb", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Flag size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#353537", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "17px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>Accept risk</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "11px", background: "#347bf9", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "linear-gradient(90deg, #0f61f3 28%, #5895ff 100%)", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <GitPullRequest size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "120px", fontFamily: "'Inter'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.149999976158142" }}>Create fix request</p>
          </div>
        </div>
      </div>
    </div>
  );
}
