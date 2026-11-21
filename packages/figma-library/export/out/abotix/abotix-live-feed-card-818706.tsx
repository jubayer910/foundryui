// Live feed card (abotix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const AdjustmentsHorizontal = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 6l8 0\" /><path d=\"M16 6l4 0\" /><path d=\"M6 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 12l2 0\" /><path d=\"M10 12l10 0\" /><path d=\"M15 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M4 18l11 0\" /><path d=\"M19 18l1 0\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");

export function LiveFeedCard() {
  return (
    <div style={{ width: "468px", height: "280px", borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #ececec", overflow: "hidden", position: "relative" }}>
      <p style={{ position: "absolute", left: "16px", top: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 600, color: "#1c1b20", letterSpacing: "-0.02em" }}>Live feed</p>
      <div style={{ position: "absolute", left: "323px", top: "12px", width: "129px", height: "32px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px rgba(232, 232, 232, 0.63), 0px 2.5px 2.5px 0px rgba(0, 0, 0, 0.05), inset 0px 2.5px 2.5px 0px rgba(255, 255, 255, 0.29)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <AdjustmentsHorizontal size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
        </div>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px rgba(221, 221, 221, 0.4), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#4f4f51" }}>View all</p>
          <ChevronRight size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#4f4f51", display: "block" }} />
        </div>
      </div>
      <div style={{ position: "absolute", left: "102px", top: "22px", width: "71px", height: "16px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#2db475"/></svg>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555" }}>Streaming</p>
      </div>
      <div style={{ position: "absolute", left: "16px", top: "56px", width: "436px", height: "210px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "436px", height: "35px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>10:42</p>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Support Copilot</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "244px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d", letterSpacing: "0.02em" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d", letterSpacing: "0.02em" }}>Critical</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555", letterSpacing: "0.02em" }}>{" · Prompt injection in ticket #48213"}</span>
            </p>
          </div>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(37, 99, 235, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb", letterSpacing: "-0.01em" }}>Blocked</p>
          </div>
        </div>
        <div style={{ width: "436px", height: "35px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>10:37</p>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Finance Ops Agent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "217px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fe710c", letterSpacing: "0.02em" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fe710c", letterSpacing: "0.02em" }}>High</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555", letterSpacing: "0.02em" }}>{" · Tool misuse · refund over $500"}</span>
            </p>
          </div>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(37, 99, 235, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb", letterSpacing: "-0.01em" }}>Blocked</p>
          </div>
        </div>
        <div style={{ width: "436px", height: "35px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>10:31</p>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>HR Helpdesk Agent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "213px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fe710c", letterSpacing: "0.02em" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fe710c", letterSpacing: "0.02em" }}>High</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555", letterSpacing: "0.02em" }}>{" · Data access · SSN in response"}</span>
            </p>
          </div>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(116, 74, 247, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#744af7", letterSpacing: "-0.01em" }}>Redacted</p>
          </div>
        </div>
        <div style={{ width: "436px", height: "35px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>10:24</p>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Claims Triage Agent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "220px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d", letterSpacing: "0.02em" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e5484d", letterSpacing: "0.02em" }}>Critical</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555", letterSpacing: "0.02em" }}>{" · Injection in email attachment"}</span>
            </p>
          </div>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(37, 99, 235, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb", letterSpacing: "-0.01em" }}>Blocked</p>
          </div>
        </div>
        <div style={{ width: "436px", height: "35px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ececec", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>10:18</p>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Sales Research Agent</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "235px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#744af7", letterSpacing: "0.02em" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#744af7", letterSpacing: "0.02em" }}>Medium</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555", letterSpacing: "0.02em" }}>{" · Data access · bulk CRM export"}</span>
            </p>
          </div>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(254, 113, 12, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#fe710c", letterSpacing: "-0.01em" }}>Flagged</p>
          </div>
        </div>
        <div style={{ width: "436px", height: "35px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ececec", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>10:09</p>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2d2d2d" }}>Code Review Bot</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "216px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#744af7", letterSpacing: "0.02em" }}>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#744af7", letterSpacing: "0.02em" }}>Medium</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#555555", letterSpacing: "0.02em" }}>{" · Data access · API key in diff"}</span>
            </p>
          </div>
          <div style={{ height: "22px", flexShrink: 0, borderRadius: "6px", background: "rgba(116, 74, 247, 0.08)", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#744af7", letterSpacing: "-0.01em" }}>Redacted</p>
          </div>
        </div>
      </div>
    </div>
  );
}
