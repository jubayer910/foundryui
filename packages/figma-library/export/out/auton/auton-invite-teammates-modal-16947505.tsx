// Invite teammates modal (auton, Modals) from Ingot UI (ingotui.com).
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
const Circle = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0\" /></g>");
const Copy = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M7 9.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667l0 -8.666\" /><path d=\"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1\" /></g>");
const Link = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 15l6 -6\" /><path d=\"M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464\" /><path d=\"M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463\" /></g>");
const Send = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 14l11 -11\" /><path d=\"M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function InviteTeammatesModal() {
  return (
    <div style={{ width: "560px", height: "570px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 32px 64px -16px rgba(10, 36, 71, 0.18)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "20px 20px 18px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <Circle size={40} style={{ width: "40px", height: "40px", flexShrink: 0, color: "#333333", display: "block" }} />
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "13px" }}>Invite teammates</p>
          <p style={{ width: "420px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.399999976158142" }}>They get an email to join Acme on Auton. Roles decide what they can approve and change.</p>
        </div>
        <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9999px", background: "#fafafa", overflow: "hidden", position: "relative" }}>
          <X size={16} style={{ position: "absolute", left: "8px", top: "8px", width: "16px", height: "16px", color: "#444444", display: "block", flexShrink: 0 }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#e2e4e5" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "20px 20px 20px 20px", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Email addresses</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "44px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #328ff9, 0px 0px 0px 4px rgba(46, 109, 232, 0.2)", display: "flex", flexDirection: "row", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "28px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "1px 7px 1px 4px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "6px" }}>LC</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>lina@acme.com</p>
              <X size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#888888", display: "block" }} />
            </div>
            <div style={{ height: "28px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f1f1f1", display: "flex", flexDirection: "row", padding: "1px 7px 1px 4px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "6px" }}>JC</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>jonas@acme.com</p>
              <X size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#888888", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Add more…|</p>
          </div>
          <p style={{ width: "520px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.399999976158142" }}>Paste a list or separate with commas. Only @acme.com addresses can join.</p>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>Role</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", background: "#f5f5f5", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 8px 10px 8px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Viewer</p>
          </div>
          <div style={{ height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 8px 10px 8px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Member</p>
          </div>
          <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "11px 9px 11px 9px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Approver</p>
          </div>
          <div style={{ height: "32px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "10px 8px 10px 8px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Admin</p>
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Approvers decide on access requests for their groups. They cannot change policies.</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>Approves for</p>
        <div style={{ width: "520px", flexShrink: 0, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "6px", columnGap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Security</p>
          </div>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.6)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#0a2447", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Platform</p>
          </div>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.6)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#0a2447", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Data</p>
          </div>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Finance</p>
          </div>
          <div style={{ height: "30px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Support</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Require 2FA before first sign-in</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Recommended for anyone who can approve.</p>
          </div>
          <div style={{ width: "32px", height: "18px", flexShrink: 0, borderRadius: "999px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", position: "relative" }}>
            <svg style={{ position: "absolute", left: "16px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#ffffff"/></svg>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f2f4f5", display: "flex", flexDirection: "row", padding: "13px 13px 13px 13px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Link size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#555555", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Or share an invite link · expires in 7 days</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, overflow: "hidden" }} />
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Copy link</p>
            <Copy size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#222222", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>2 invites · Approver</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 15px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Cancel</p>
          </div>
          <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "0px 14px 0px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Send size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Send 2 invites</p>
          </div>
        </div>
      </div>
    </div>
  );
}
