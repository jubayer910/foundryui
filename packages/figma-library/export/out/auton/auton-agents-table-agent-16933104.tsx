// Agents table, Agent (auton, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const Code = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 8l-4 4l4 4\" /><path d=\"M17 8l4 4l-4 4\" /><path d=\"M14 4l-4 16\" /></g>");
const DatabaseExport = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 6c0 1.657 3.582 3 8 3s8 -1.343 8 -3s-3.582 -3 -8 -3s-8 1.343 -8 3\" /><path d=\"M4 6v6c0 1.657 3.582 3 8 3c1.118 0 2.183 -.086 3.15 -.241\" /><path d=\"M20 12v-6\" /><path d=\"M4 12v6c0 1.657 3.582 3 8 3c.157 0 .312 -.002 .466 -.005\" /><path d=\"M16 19h6\" /><path d=\"M19 16l3 3l-3 3\" /></g>");
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const FileInvoice = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2\" /><path d=\"M9 7l1 0\" /><path d=\"M9 13l6 0\" /><path d=\"M13 17l2 0\" /></g>");
const Headset = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 14v-3a8 8 0 1 1 16 0v3\" /><path d=\"M18 19c0 1.657 -2.686 3 -6 3\" /><path d=\"M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3\" /><path d=\"M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3\" /></g>");
const Rocket = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3\" /><path d=\"M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3\" /><path d=\"M14 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const Search = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0\" /><path d=\"M21 21l-6 -6\" /></g>");
const ShieldCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06\" /><path d=\"M15 19l2 2l4 -4\" /></g>");
const TrendingUp = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 17l6 -6l4 4l8 -8\" /><path d=\"M14 7l7 0l0 7\" /></g>");

export function AgentsTableAgent() {
  return (
    <div style={{ width: "1133px", height: "642px", borderRadius: "20px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e4e5", overflow: "hidden", display: "flex", flexDirection: "column", padding: "2px 2px 2px 2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "1131px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "8px 0px 9px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "220px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "8px", height: "1.5px", flexShrink: 0, borderRadius: "1px", background: "#ffffff" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Agent</p>
        </div>
        <div style={{ width: "160px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Owner</p>
        </div>
        <div style={{ width: "130px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Environment</p>
        </div>
        <div style={{ width: "220px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Access Scope</p>
        </div>
        <div style={{ width: "125px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Credential TTL</p>
        </div>
        <div style={{ width: "110px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Last active</p>
        </div>
        <div style={{ width: "116px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Status</p>
        </div>
        <div style={{ width: "50px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>CTA</p>
        </div>
      </div>
      <div style={{ width: "1131px", height: "65px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d7d9db, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <FileInvoice size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#333840", display: "block" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>invoice-processor</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Finance</p>
            </div>
          </div>
        </div>
        <div style={{ width: "160px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>MC</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Maya Chen</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Production</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Gmail</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Read</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+2</p>
            </div>
          </div>
        </div>
        <div style={{ width: "125px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>24 min</p>
        </div>
        <div style={{ width: "110px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>2 min ago</p>
        </div>
        <div style={{ width: "116px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Active</p>
          </div>
        </div>
        <div style={{ width: "50px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={24} style={{ width: "24px", height: "24px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1131px", height: "65px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d7d9db, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Rocket size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#333840", display: "block" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>deploy-agent</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Platform</p>
            </div>
          </div>
        </div>
        <div style={{ width: "160px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#fffaeb", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#472c09", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>AP</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Arjun Patel</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Production</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>GitHub</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Deploy</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+1</p>
            </div>
          </div>
        </div>
        <div style={{ width: "125px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>12 min</p>
        </div>
        <div style={{ width: "110px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Just now</p>
        </div>
        <div style={{ width: "116px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Active</p>
          </div>
        </div>
        <div style={{ width: "50px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={24} style={{ width: "24px", height: "24px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1131px", height: "65px", flexShrink: 0, background: "#f5f9ff", boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <DatabaseExport size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#333840", display: "block" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>data-sync</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Data</p>
            </div>
          </div>
        </div>
        <div style={{ width: "160px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#f4f1fe", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#24165e", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>SR</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Sofia Ramos</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Production</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Snowflake</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Write</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+2</p>
            </div>
          </div>
        </div>
        <div style={{ width: "125px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>8 min</p>
        </div>
        <div style={{ width: "110px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>5 min ago</p>
        </div>
        <div style={{ width: "116px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fffaeb", boxShadow: "inset 0 0 0 1px rgba(255, 206, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#472c09", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Needs review</p>
          </div>
        </div>
        <div style={{ width: "50px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={24} style={{ width: "24px", height: "24px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1131px", height: "65px", flexShrink: 0, background: "#f5f9ff", boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <DatabaseExport size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#333840", display: "block" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>data-sync-eu</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Data</p>
            </div>
          </div>
        </div>
        <div style={{ width: "160px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#f4f1fe", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#24165e", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>SR</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Sofia Ramos</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Staging</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>BigQuery</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Write</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+1</p>
            </div>
          </div>
        </div>
        <div style={{ width: "125px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>10 min</p>
        </div>
        <div style={{ width: "110px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>18 min ago</p>
        </div>
        <div style={{ width: "116px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fffaeb", boxShadow: "inset 0 0 0 1px rgba(255, 206, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#472c09", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Needs review</p>
          </div>
        </div>
        <div style={{ width: "50px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={24} style={{ width: "24px", height: "24px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1131px", height: "65px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d7d9db, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Headset size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#333840", display: "block" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>support-assistant</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Support</p>
            </div>
          </div>
        </div>
        <div style={{ width: "160px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#edfbf3", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#073b22", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>LN</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Leah Novak</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Production</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Gmail</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Reply</p>
            </div>
          </div>
        </div>
        <div style={{ width: "125px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>15 min</p>
        </div>
        <div style={{ width: "110px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>1 min ago</p>
        </div>
        <div style={{ width: "116px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Active</p>
          </div>
        </div>
        <div style={{ width: "50px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={24} style={{ width: "24px", height: "24px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1131px", height: "65px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d7d9db, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Code size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#333840", display: "block" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>code-reviewer</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Engineering</p>
            </div>
          </div>
        </div>
        <div style={{ width: "160px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>OH</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Omar Haddad</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Staging</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>GitHub</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Read</p>
            </div>
          </div>
        </div>
        <div style={{ width: "125px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>30 min</p>
        </div>
        <div style={{ width: "110px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>9 min ago</p>
        </div>
        <div style={{ width: "116px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Active</p>
          </div>
        </div>
        <div style={{ width: "50px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={24} style={{ width: "24px", height: "24px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1131px", height: "65px", flexShrink: 0, background: "#f5f9ff", boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <TrendingUp size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#333840", display: "block" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>sales-copilot</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Sales</p>
            </div>
          </div>
        </div>
        <div style={{ width: "160px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#fff5f5", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#470909", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>PS</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Priya Shah</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Production</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Slack</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Post</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+1</p>
            </div>
          </div>
        </div>
        <div style={{ width: "125px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>20 min</p>
        </div>
        <div style={{ width: "110px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>1 h ago</p>
        </div>
        <div style={{ width: "116px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#f5f5f5", boxShadow: "inset 0 0 0 1px rgba(185, 188, 191, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Paused</p>
          </div>
        </div>
        <div style={{ width: "50px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={24} style={{ width: "24px", height: "24px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1131px", height: "65px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d7d9db, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ShieldCheck size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#333840", display: "block" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>security-triage</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Security</p>
            </div>
          </div>
        </div>
        <div style={{ width: "160px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>MC</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Maya Chen</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Production</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>AWS</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Read</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+4</p>
            </div>
          </div>
        </div>
        <div style={{ width: "125px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>5 min</p>
        </div>
        <div style={{ width: "110px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>3 min ago</p>
        </div>
        <div style={{ width: "116px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Active</p>
          </div>
        </div>
        <div style={{ width: "50px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={24} style={{ width: "24px", height: "24px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "1131px", height: "65px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12px 0px 12px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d7d9db, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Search size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#333840", display: "block" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>research-agent</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Engineering</p>
            </div>
          </div>
        </div>
        <div style={{ width: "160px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>DK</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Daniel Kim</p>
          </div>
        </div>
        <div style={{ width: "130px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Production</p>
          </div>
        </div>
        <div style={{ width: "220px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Drive</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Read</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "4px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>+3</p>
            </div>
          </div>
        </div>
        <div style={{ width: "125px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Expired</p>
        </div>
        <div style={{ width: "110px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>2 days ago</p>
        </div>
        <div style={{ width: "116px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fff5f5", boxShadow: "inset 0 0 0 1px rgba(255, 125, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#470909", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Revoked</p>
          </div>
        </div>
        <div style={{ width: "50px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={24} style={{ width: "24px", height: "24px", flexShrink: 0, color: "#141b34", display: "block" }} />
        </div>
      </div>
    </div>
  );
}
