// List (montra, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Cloud = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878\" /></g>");
const Dots = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /><path d=\"M18 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0\" /></g>");
const Megaphone = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z\" /><path d=\"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14\" /><path d=\"M8 6v8\" /></g>");
const Transaction = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4.58 8.607L2 8.454C3.849 3.704 9.158 1 14.333 2.344c5.513 1.433 8.788 6.918 7.314 12.25c-1.219 4.411-5.304 7.337-9.8 7.406\"/><path stroke-dasharray=\".5 3\" d=\"M12 22C6.5 22 2 17 2 11\"/><path d=\"M13.604 9.722c-.352-.37-1.213-1.237-2.575-.62c-1.361.615-1.577 2.596.482 2.807c.93.095 1.537-.11 2.093.47c.556.582.659 2.198-.761 2.634s-2.341-.284-2.588-.509m1.653-6.484v.79m0 6.337v.873\"/></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");

export function List() {
  return (
    <div style={{ width: "1053.71px", height: "246.75px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", height: "49.35px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "274.17px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 14.62px 12.79px 14.62px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892", lineHeight: "1.4600000381469727" }}>Description</p>
        </div>
        <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892", lineHeight: "1.5" }}>Category</p>
        </div>
        <div style={{ width: "197.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892", lineHeight: "1.5" }}>Date</p>
        </div>
        <div style={{ width: "164.5px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892", lineHeight: "1.5" }}>Amount</p>
        </div>
        <div style={{ width: "164.5px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892", lineHeight: "1.5" }}>Status</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892", lineHeight: "1.5" }}>Actions</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "49.35px", flexShrink: 0, borderRadius: "0.91px", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
        <div style={{ width: "274.17px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 14.62px 12.79px 14.62px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Transaction size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Client Payment</p>
            </div>
          </div>
        </div>
        <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Revenue</p>
        </div>
        <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Aug 09</p>
        </div>
        <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.5" }}>+$4,200</p>
        </div>
        <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31111 3.65556 C7.31111 5.67446 5.67446 7.31111 3.65556 7.31111 C1.63665 7.31111 0 5.67446 0 3.65556 C0 1.63665 1.63665 0 3.65556 0 C5.67446 0 7.31111 1.63665 7.31111 3.65556 Z" fill="#00a77d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Received</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "49.35px", flexShrink: 0, borderRadius: "0.91px", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
        <div style={{ width: "274.17px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 14.62px 12.79px 14.62px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #ecb615 0%, #ffe79e 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Cloud size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>AWS Infrastructure</p>
            </div>
          </div>
        </div>
        <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Software</p>
        </div>
        <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Aug 08</p>
        </div>
        <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#f45363", lineHeight: "1.5" }}>-$620</p>
        </div>
        <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31111 3.65556 C7.31111 5.67446 5.67446 7.31111 3.65556 7.31111 C1.63665 7.31111 0 5.67446 0 3.65556 C0 1.63665 1.63665 0 3.65556 0 C5.67446 0 7.31111 1.63665 7.31111 3.65556 Z" fill="#4e57ed"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed", lineHeight: "1.4600000381469727" }}>Completed</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "49.35px", flexShrink: 0, borderRadius: "0.91px", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
        <div style={{ width: "274.17px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 14.62px 12.79px 14.62px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #1db9e2 0%, #a1ebff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Users size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Team Payroll</p>
            </div>
          </div>
        </div>
        <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Payroll</p>
        </div>
        <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Aug 07</p>
        </div>
        <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#f45363", lineHeight: "1.5" }}>-$5,850</p>
        </div>
        <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31111 3.65556 C7.31111 5.67446 5.67446 7.31111 3.65556 7.31111 C1.63665 7.31111 0 5.67446 0 3.65556 C0 1.63665 1.63665 0 3.65556 0 C5.67446 0 7.31111 1.63665 7.31111 3.65556 Z" fill="#4e57ed"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed", lineHeight: "1.4600000381469727" }}>Completed</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "49.35px", flexShrink: 0, borderRadius: "0.91px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
        <div style={{ width: "274.17px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 14.62px 12.79px 14.62px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #91d02b 0%, #dfffac 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Megaphone size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Meta Ads</p>
            </div>
          </div>
        </div>
        <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Marketing</p>
        </div>
        <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Aug 06</p>
        </div>
        <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#f45363", lineHeight: "1.5" }}>-$4,400</p>
        </div>
        <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31111 3.65556 C7.31111 5.67446 5.67446 7.31111 3.65556 7.31111 C1.63665 7.31111 0 5.67446 0 3.65556 C0 1.63665 1.63665 0 3.65556 0 C5.67446 0 7.31111 1.63665 7.31111 3.65556 Z" fill="#4e57ed"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed", lineHeight: "1.4600000381469727" }}>Completed</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
