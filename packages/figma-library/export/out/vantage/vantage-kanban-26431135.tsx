// Kanban (vantage, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const CalendarCheck = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M11.5 21h-5.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6\" /><path d=\"M16 3v4\" /><path d=\"M8 3v4\" /><path d=\"M4 11h16\" /><path d=\"M15 19l2 2l4 -4\" /></g>");
const Check = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 12l5 5l10 -10\" /></g>");
const Message = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 9h8\" /><path d=\"M8 13h6\" /><path d=\"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12\" /></g>");
const Note = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 20l7 -7\" /><path d=\"M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7\" /></g>");
const Plus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 5l0 14\" /><path d=\"M5 12l14 0\" /></g>");
const School = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 9l-10 -4l-10 4l10 4l10 -4v6\" /><path d=\"M6 10.6v5.4a6 3 0 0 0 12 0v-5.4\" /></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");

export function Kanban() {
  return (
    <div style={{ width: "1176px", height: "283px", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "376px", height: "267px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "376px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "7px", height: "7px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#8a8a8a"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>To do</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>41</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Plus size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
        <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Re-engage 27 members who missed W30</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e3b341" }}>Today</p>
          </div>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Oscar & Nayrobi</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Note size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Weekly report</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
            </div>
          </div>
        </div>
        <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Book MG1 for 14 walk-in leads from Ágora Mall</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Aug 1</p>
          </div>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Julio & Liz</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CalendarCheck size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>MG1 booked</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>JL</p>
            </div>
          </div>
        </div>
        <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Objection handling · training module 3</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Aug 2</p>
          </div>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Carlos & Erody</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <School size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Training</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(63, 179, 127, 0.14)", boxShadow: "inset 0 0 0 1px rgba(63, 179, 127, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#6fc69f" }}>CE</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "388px", top: "0px", width: "1px", height: "283px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "400px", top: "0px", width: "376px", height: "267px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "376px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "7px", height: "7px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#e3b341"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>In progress</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>33</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Plus size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
        <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Follow up 2+ with 12 overdue prospects</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#e3b341" }}>Today</p>
          </div>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Oscar & Nayrobi</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>5 of 12</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
            </div>
          </div>
        </div>
        <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Family plan upsell calls · 20 customers</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Aug 1</p>
          </div>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Edwin & Wiliannys</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>8 of 20</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(122, 162, 247, 0.14)", boxShadow: "inset 0 0 0 1px rgba(122, 162, 247, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9bb9f9" }}>EW</p>
            </div>
          </div>
        </div>
        <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Prepare the W31 leaders call</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Aug 2</p>
          </div>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Luis & Jackie</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "3px", height: "12px", flexShrink: 0, borderRadius: "1.5px", background: "rgba(227, 179, 65, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>2 of 4</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "788px", top: "0px", width: "1px", height: "283px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "800px", top: "0px", width: "376px", height: "267px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "376px", height: "30px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "7px", height: "7px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#3fb37f"/></svg>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Done</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>212</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
          <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Plus size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          </div>
        </div>
        <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#a0a0a0" }}>Submit W30 weekly reports</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>189 of 241</p>
          </div>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Users size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>All legs</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Note size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Weekly report</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>LJ</p>
            </div>
          </div>
        </div>
        <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#a0a0a0" }}>Onboard 6 new Platinum members</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Jul 29</p>
          </div>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Enmanuel & Suseidy</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <School size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Training</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#9c84ff" }}>ES</p>
            </div>
          </div>
        </div>
        <div style={{ width: "376px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222", display: "flex", flexDirection: "column", padding: "13px 0px 12px 0px", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#a0a0a0" }}>Daily message push · Santiago walk-ins</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Jul 30</p>
          </div>
          <div style={{ width: "376px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Saul Santana</p>
            </div>
            <div style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Message size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Daily messages</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0 }} />
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(227, 179, 65, 0.14)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#eac671" }}>SS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
