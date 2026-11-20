"use client";
// EW drawer (vantage, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import type { SVGProps } from "react";

// Ingot Icons used here, inlined so this file needs no icon package.
function icon(body: string) {
  return function Icon({ size = 24, strokeWidth = 1.5, ...p }: { size?: number; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
    const html = strokeWidth == 1.5 ? body : body.replace(/stroke-width="([\d.]+)"/g, (_, w) => `stroke-width="${(Number(w) * Number(strokeWidth)) / 1.5}"`);
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden {...p} dangerouslySetInnerHTML={{ __html: html }} />;
  };
}
const Award = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9a6 6 0 1 0 12 0a6 6 0 1 0 -12 0\" /><path d=\"M12 15l3.4 5.89l1.598 -3.233l3.598 .232l-3.4 -5.889\" /><path d=\"M6.802 12l-3.4 5.89l3.598 -.233l1.598 3.232l3.4 -5.889\" /></g>");
const Bolt = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11\" /></g>");
const ChevronRight = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M9 6l6 6l-6 6\" /></g>");
const FileInvoice = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\" /><path d=\"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2\" /><path d=\"M9 7l1 0\" /><path d=\"M9 13l6 0\" /><path d=\"M13 17l2 0\" /></g>");
const Hierarchy = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M3 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0\" /><path d=\"M6.5 17.5l5.5 -4.5l5.5 4.5\" /><path d=\"M12 7l0 6\" /></g>");
const Message = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 9h8\" /><path d=\"M8 13h6\" /><path d=\"M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12\" /></g>");
const Phone = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2\" /></g>");
const UserPlus = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0\" /><path d=\"M16 19h6\" /><path d=\"M19 16v6\" /><path d=\"M6 21v-2a4 4 0 0 1 4 -4h4\" /></g>");
const Users = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M5 7a4 4 0 1 0 8 0a4 4 0 1 0 -8 0\" /><path d=\"M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2\" /><path d=\"M16 3.13a4 4 0 0 1 0 7.75\" /><path d=\"M21 21v-2a4 4 0 0 0 -3 -3.85\" /></g>");
const X = icon("<g fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6l-12 12\" /><path d=\"M6 6l12 12\" /></g>");

export function EWDrawer() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "440px", height: "1059px", borderRadius: "12px", background: "#1a1a1a", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 24px 64px -12px rgba(0, 0, 0, 0.55), 0px 12px 48px 0px rgba(123, 91, 255, 0.08)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "440px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "18px 20px 16px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "44px", height: "44px", flexShrink: 0, borderRadius: "22px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>EW</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.01em" }}>Edwin & Wiliannys</p>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EAGLE</p>
            </div>
            <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>16 people · 16 reporting</p>
          </div>
        </div>
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
      </div>
      <div style={{ width: "440px", height: "1px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      </div>
      <div style={{ width: "440px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "16px 20px 16px 20px", gap: "20px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "156px", height: "98px", flexShrink: 0, position: "relative" }}>
            <svg data-fu="plot" style={{ position: "absolute", left: "11.02px", top: "11.02px", width: "133.96px", height: "66.98px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="133.96" height="66.98" viewBox="0 0 133.96 66.98" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-7.02 66.98 C-7.02 70.857 -3.87704 74 0 74 C3.87704 74 7.02 70.857 7.02 66.98 L0 66.98 L-7.02 66.98 Z M126.94 66.98 C126.94 70.857 130.083 74 133.96 74 C137.837 74 140.98 70.857 140.98 66.98 L133.96 66.98 L126.94 66.98 Z M0 66.98 L7.02 66.98 C7.02 33.867 33.867 7.02 66.98 7.02 L66.98 0 L66.98 -7.02 C26.113 -7.02 -7.02 26.113 -7.02 66.98 L0 66.98 Z M66.98 0 L66.98 7.02 C100.093 7.02 126.94 33.867 126.94 66.98 L133.96 66.98 L140.98 66.98 C140.98 26.113 107.847 -7.02 66.98 -7.02 L66.98 0 Z" fill="#2a243f"/></svg>
            <svg style={{ position: "absolute", left: "11.02px", top: "30.64px", width: "19.62px", height: "47.36px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="19.62" height="47.36" viewBox="0 0 19.62 47.36" fill="none" overflow="visible"><defs><linearGradient id="g19_56t0" gradientUnits="userSpaceOnUse" x1="0.00" y1="23.68" x2="19.62" y2="23.68"><stop offset="0" stopColor="#a994ff"/><stop offset="1" stopColor="#7b5bff"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M-7.02 47.36 C-7.02 51.237 -3.87704 54.38 0 54.38 C3.87704 54.38 7.02 51.237 7.02 47.36 L0 47.36 L-7.02 47.36 Z M24.5839 4.96389 C27.3254 2.22241 27.3254 -2.22241 24.5839 -4.96389 C21.8424 -7.70537 17.3976 -7.70537 14.6561 -4.96389 L19.62 0 L24.5839 4.96389 Z M0 47.36 L7.02 47.36 C7.02 31.4624 13.34 16.2078 24.5839 4.96389 L19.62 0 L14.6561 -4.96389 C0.780047 8.91218 -7.02 27.7376 -7.02 47.36 L0 47.36 Z" fill="url(#g19_56t0)"/></svg>
            <svg style={{ position: "absolute", left: "27.04px", top: "27.04px", width: "101.92px", height: "50.96px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="101.92" height="50.96" viewBox="0 0 101.92 50.96" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M 0 50.959999084472656 C 0 22.81999969482422 22.81999969482422 0 50.959999084472656 0 C 79.0999984741211 0 101.91999816894531 22.81999969482422 101.91999816894531 50.959999084472656" fill="none" stroke="#b6a5ff" strokeWidth="2" strokeDasharray="0.10000000149011612 6" strokeLinecap="round"/></svg>
            <svg style={{ position: "absolute", left: "24.32px", top: "24.32px", width: "12.64px", height: "12.64px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12.64" height="12.64" viewBox="0 0 12.64 12.64" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.636 6.318 C12.636 9.80733 9.80733 12.636 6.318 12.636 C2.82866 12.636 0 9.80733 0 6.318 C0 2.82866 2.82866 0 6.318 0 C9.80733 0 12.636 2.82866 12.636 6.318 Z" fill="#ededed"/><path transform="matrix(1 0 0 1 0 0)" d="M12.636 6.318 L10.136 6.318 C10.136 8.42662 8.42662 10.136 6.318 10.136 L6.318 12.636 L6.318 15.136 C11.188 15.136 15.136 11.188 15.136 6.318 L12.636 6.318 Z M6.318 12.636 L6.318 10.136 C4.20938 10.136 2.5 8.42662 2.5 6.318 L0 6.318 L-2.5 6.318 C-2.5 11.188 1.44795 15.136 6.318 15.136 L6.318 12.636 Z M0 6.318 L2.5 6.318 C2.5 4.20938 4.20938 2.5 6.318 2.5 L6.318 0 L6.318 -2.5 C1.44795 -2.5 -2.5 1.44795 -2.5 6.318 L0 6.318 Z M6.318 0 L6.318 2.5 C8.42662 2.5 10.136 4.20938 10.136 6.318 L12.636 6.318 L15.136 6.318 C15.136 1.44795 11.188 -2.5 6.318 -2.5 L6.318 0 Z" fill="#7b5bff"/></svg>
            <div style={{ position: "absolute", left: "48px", top: "45px", width: "60px", height: "31px", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24px", fontWeight: 500, color: "#ededed" }}>1 of 4</p>
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>requirements met</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Window</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Jul 1 – Jul 31</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Projected</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Dec 2026</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Pay rate</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>7% → 12% of leg MRR</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Active subs</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>280 · 16% of 1,751</p>
          </div>
        </div>
      </div>
      <div style={{ width: "440px", height: "1px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      </div>
      <div style={{ width: "440px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "16px 20px 16px 20px", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Requirements for Emerald</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>July · closes today 23:59</p>
        </div>
        <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "rgba(123, 91, 255, 0.12)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.22)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <FileInvoice size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8f74ff", display: "block" }} />
          </div>
          <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Active subscriptions</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a0a0a0" }}>20 to go</p>
            </div>
            <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "356px", height: "10px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "332.27px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "336.27px", top: "0px", width: "19.23px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="19.23" height="10" viewBox="0 0 19.23 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.21 0 L2.71 0 L2.71 10 L3.21 10 L3.71 10 L3.71 0 L3.21 0 Z M6.41 0 L5.91 0 L5.91 10 L6.41 10 L6.91 10 L6.91 0 L6.41 0 Z M9.62 0 L9.12 0 L9.12 10 L9.62 10 L10.12 10 L10.12 0 L9.62 0 Z M12.82 0 L12.32 0 L12.32 10 L12.82 10 L13.32 10 L13.32 0 L12.82 0 Z M16.03 0 L15.53 0 L15.53 10 L16.03 10 L16.53 10 L16.53 0 L16.03 0 Z M19.23 0 L18.73 0 L18.73 10 L19.23 10 L19.73 10 L19.73 0 L19.23 0 Z" fill="#3a3a3a"/></svg>
              </div>
              <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>280 / 300</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>+9 net in July</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "rgba(122, 162, 247, 0.12)", boxShadow: "inset 0 0 0 1px rgba(122, 162, 247, 0.22)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Users size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8eb0f8", display: "block" }} />
          </div>
          <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>People in the leg</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a0a0a0" }}>24 to go</p>
            </div>
            <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "356px", height: "10px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "142.4px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "146.4px", top: "0px", width: "209.1px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="209.1" height="10" viewBox="0 0 209.1 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.22 0 L2.72 0 L2.72 10 L3.22 10 L3.72 10 L3.72 0 L3.22 0 Z M6.43 0 L5.93 0 L5.93 10 L6.43 10 L6.93 10 L6.93 0 L6.43 0 Z M9.65 0 L9.15 0 L9.15 10 L9.65 10 L10.15 10 L10.15 0 L9.65 0 Z M12.87 0 L12.37 0 L12.37 10 L12.87 10 L13.37 10 L13.37 0 L12.87 0 Z M16.08 0 L15.58 0 L15.58 10 L16.08 10 L16.58 10 L16.58 0 L16.08 0 Z M19.3 0 L18.8 0 L18.8 10 L19.3 10 L19.8 10 L19.8 0 L19.3 0 Z M22.52 0 L22.02 0 L22.02 10 L22.52 10 L23.02 10 L23.02 0 L22.52 0 Z M25.74 0 L25.24 0 L25.24 10 L25.74 10 L26.24 10 L26.24 0 L25.74 0 Z M28.95 0 L28.45 0 L28.45 10 L28.95 10 L29.45 10 L29.45 0 L28.95 0 Z M32.17 0 L31.67 0 L31.67 10 L32.17 10 L32.67 10 L32.67 0 L32.17 0 Z M35.39 0 L34.89 0 L34.89 10 L35.39 10 L35.89 10 L35.89 0 L35.39 0 Z M38.6 0 L38.1 0 L38.1 10 L38.6 10 L39.1 10 L39.1 0 L38.6 0 Z M41.82 0 L41.32 0 L41.32 10 L41.82 10 L42.32 10 L42.32 0 L41.82 0 Z M45.04 0 L44.54 0 L44.54 10 L45.04 10 L45.54 10 L45.54 0 L45.04 0 Z M48.25 0 L47.75 0 L47.75 10 L48.25 10 L48.75 10 L48.75 0 L48.25 0 Z M51.47 0 L50.97 0 L50.97 10 L51.47 10 L51.97 10 L51.97 0 L51.47 0 Z M54.69 0 L54.19 0 L54.19 10 L54.69 10 L55.19 10 L55.19 0 L54.69 0 Z M57.9 0 L57.4 0 L57.4 10 L57.9 10 L58.4 10 L58.4 0 L57.9 0 Z M61.12 0 L60.62 0 L60.62 10 L61.12 10 L61.62 10 L61.62 0 L61.12 0 Z M64.34 0 L63.84 0 L63.84 10 L64.34 10 L64.84 10 L64.84 0 L64.34 0 Z M67.56 0 L67.06 0 L67.06 10 L67.56 10 L68.06 10 L68.06 0 L67.56 0 Z M70.77 0 L70.27 0 L70.27 10 L70.77 10 L71.27 10 L71.27 0 L70.77 0 Z M73.99 0 L73.49 0 L73.49 10 L73.99 10 L74.49 10 L74.49 0 L73.99 0 Z M77.21 0 L76.71 0 L76.71 10 L77.21 10 L77.71 10 L77.71 0 L77.21 0 Z M80.42 0 L79.92 0 L79.92 10 L80.42 10 L80.92 10 L80.92 0 L80.42 0 Z M83.64 0 L83.14 0 L83.14 10 L83.64 10 L84.14 10 L84.14 0 L83.64 0 Z M86.86 0 L86.36 0 L86.36 10 L86.86 10 L87.36 10 L87.36 0 L86.86 0 Z M90.07 0 L89.57 0 L89.57 10 L90.07 10 L90.57 10 L90.57 0 L90.07 0 Z M93.29 0 L92.79 0 L92.79 10 L93.29 10 L93.79 10 L93.79 0 L93.29 0 Z M96.51 0 L96.01 0 L96.01 10 L96.51 10 L97.01 10 L97.01 0 L96.51 0 Z M99.72 0 L99.22 0 L99.22 10 L99.72 10 L100.22 10 L100.22 0 L99.72 0 Z M102.94 0 L102.44 0 L102.44 10 L102.94 10 L103.44 10 L103.44 0 L102.94 0 Z M106.16 0 L105.66 0 L105.66 10 L106.16 10 L106.66 10 L106.66 0 L106.16 0 Z M109.38 0 L108.88 0 L108.88 10 L109.38 10 L109.88 10 L109.88 0 L109.38 0 Z M112.59 0 L112.09 0 L112.09 10 L112.59 10 L113.09 10 L113.09 0 L112.59 0 Z M115.81 0 L115.31 0 L115.31 10 L115.81 10 L116.31 10 L116.31 0 L115.81 0 Z M119.03 0 L118.53 0 L118.53 10 L119.03 10 L119.53 10 L119.53 0 L119.03 0 Z M122.24 0 L121.74 0 L121.74 10 L122.24 10 L122.74 10 L122.74 0 L122.24 0 Z M125.46 0 L124.96 0 L124.96 10 L125.46 10 L125.96 10 L125.96 0 L125.46 0 Z M128.68 0 L128.18 0 L128.18 10 L128.68 10 L129.18 10 L129.18 0 L128.68 0 Z M131.89 0 L131.39 0 L131.39 10 L131.89 10 L132.39 10 L132.39 0 L131.89 0 Z M135.11 0 L134.61 0 L134.61 10 L135.11 10 L135.61 10 L135.61 0 L135.11 0 Z M138.33 0 L137.83 0 L137.83 10 L138.33 10 L138.83 10 L138.83 0 L138.33 0 Z M141.54 0 L141.04 0 L141.04 10 L141.54 10 L142.04 10 L142.04 0 L141.54 0 Z M144.76 0 L144.26 0 L144.26 10 L144.76 10 L145.26 10 L145.26 0 L144.76 0 Z M147.98 0 L147.48 0 L147.48 10 L147.98 10 L148.48 10 L148.48 0 L147.98 0 Z M151.2 0 L150.7 0 L150.7 10 L151.2 10 L151.7 10 L151.7 0 L151.2 0 Z M154.41 0 L153.91 0 L153.91 10 L154.41 10 L154.91 10 L154.91 0 L154.41 0 Z M157.63 0 L157.13 0 L157.13 10 L157.63 10 L158.13 10 L158.13 0 L157.63 0 Z M160.85 0 L160.35 0 L160.35 10 L160.85 10 L161.35 10 L161.35 0 L160.85 0 Z M164.06 0 L163.56 0 L163.56 10 L164.06 10 L164.56 10 L164.56 0 L164.06 0 Z M167.28 0 L166.78 0 L166.78 10 L167.28 10 L167.78 10 L167.78 0 L167.28 0 Z M170.5 0 L170 0 L170 10 L170.5 10 L171 10 L171 0 L170.5 0 Z M173.71 0 L173.21 0 L173.21 10 L173.71 10 L174.21 10 L174.21 0 L173.71 0 Z M176.93 0 L176.43 0 L176.43 10 L176.93 10 L177.43 10 L177.43 0 L176.93 0 Z M180.15 0 L179.65 0 L179.65 10 L180.15 10 L180.65 10 L180.65 0 L180.15 0 Z M183.36 0 L182.86 0 L182.86 10 L183.36 10 L183.86 10 L183.86 0 L183.36 0 Z M186.58 0 L186.08 0 L186.08 10 L186.58 10 L187.08 10 L187.08 0 L186.58 0 Z M189.8 0 L189.3 0 L189.3 10 L189.8 10 L190.3 10 L190.3 0 L189.8 0 Z M193.02 0 L192.52 0 L192.52 10 L193.02 10 L193.52 10 L193.52 0 L193.02 0 Z M196.23 0 L195.73 0 L195.73 10 L196.23 10 L196.73 10 L196.73 0 L196.23 0 Z M199.45 0 L198.95 0 L198.95 10 L199.45 10 L199.95 10 L199.95 0 L199.45 0 Z M202.67 0 L202.17 0 L202.17 10 L202.67 10 L203.17 10 L203.17 0 L202.67 0 Z M205.88 0 L205.38 0 L205.38 10 L205.88 10 L206.38 10 L206.38 0 L205.88 0 Z M209.1 0 L208.6 0 L208.6 10 L209.1 10 L209.6 10 L209.6 0 L209.1 0 Z" fill="#3a3a3a"/></svg>
              </div>
              <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>16 / 40</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>needs ~5 a month to Dec</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "rgba(63, 179, 127, 0.12)", boxShadow: "inset 0 0 0 1px rgba(63, 179, 127, 0.22)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Bolt size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#5cbe92", display: "block" }} />
          </div>
          <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>MG1 a month</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#3fb37f" }}>Met</p>
            </div>
            <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "356px", height: "10px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>158 / 150</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>8 spare · 30.50% eff</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "rgba(227, 179, 65, 0.12)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.22)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Award size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#e7be5e", display: "block" }} />
          </div>
          <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Eagle legs</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#a0a0a0" }}>2 to go</p>
            </div>
            <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "356px", height: "10px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "10.68px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "14.68px", top: "0px", width: "340.82px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="340.82" height="10" viewBox="0 0 340.82 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.22 0 L2.72 0 L2.72 10 L3.22 10 L3.72 10 L3.72 0 L3.22 0 Z M6.43 0 L5.93 0 L5.93 10 L6.43 10 L6.93 10 L6.93 0 L6.43 0 Z M9.65 0 L9.15 0 L9.15 10 L9.65 10 L10.15 10 L10.15 0 L9.65 0 Z M12.86 0 L12.36 0 L12.36 10 L12.86 10 L13.36 10 L13.36 0 L12.86 0 Z M16.08 0 L15.58 0 L15.58 10 L16.08 10 L16.58 10 L16.58 0 L16.08 0 Z M19.29 0 L18.79 0 L18.79 10 L19.29 10 L19.79 10 L19.79 0 L19.29 0 Z M22.51 0 L22.01 0 L22.01 10 L22.51 10 L23.01 10 L23.01 0 L22.51 0 Z M25.72 0 L25.22 0 L25.22 10 L25.72 10 L26.22 10 L26.22 0 L25.72 0 Z M28.94 0 L28.44 0 L28.44 10 L28.94 10 L29.44 10 L29.44 0 L28.94 0 Z M32.15 0 L31.65 0 L31.65 10 L32.15 10 L32.65 10 L32.65 0 L32.15 0 Z M35.37 0 L34.87 0 L34.87 10 L35.37 10 L35.87 10 L35.87 0 L35.37 0 Z M38.58 0 L38.08 0 L38.08 10 L38.58 10 L39.08 10 L39.08 0 L38.58 0 Z M41.8 0 L41.3 0 L41.3 10 L41.8 10 L42.3 10 L42.3 0 L41.8 0 Z M45.01 0 L44.51 0 L44.51 10 L45.01 10 L45.51 10 L45.51 0 L45.01 0 Z M48.23 0 L47.73 0 L47.73 10 L48.23 10 L48.73 10 L48.73 0 L48.23 0 Z M51.44 0 L50.94 0 L50.94 10 L51.44 10 L51.94 10 L51.94 0 L51.44 0 Z M54.66 0 L54.16 0 L54.16 10 L54.66 10 L55.16 10 L55.16 0 L54.66 0 Z M57.88 0 L57.38 0 L57.38 10 L57.88 10 L58.38 10 L58.38 0 L57.88 0 Z M61.09 0 L60.59 0 L60.59 10 L61.09 10 L61.59 10 L61.59 0 L61.09 0 Z M64.31 0 L63.81 0 L63.81 10 L64.31 10 L64.81 10 L64.81 0 L64.31 0 Z M67.52 0 L67.02 0 L67.02 10 L67.52 10 L68.02 10 L68.02 0 L67.52 0 Z M70.74 0 L70.24 0 L70.24 10 L70.74 10 L71.24 10 L71.24 0 L70.74 0 Z M73.95 0 L73.45 0 L73.45 10 L73.95 10 L74.45 10 L74.45 0 L73.95 0 Z M77.17 0 L76.67 0 L76.67 10 L77.17 10 L77.67 10 L77.67 0 L77.17 0 Z M80.38 0 L79.88 0 L79.88 10 L80.38 10 L80.88 10 L80.88 0 L80.38 0 Z M83.6 0 L83.1 0 L83.1 10 L83.6 10 L84.1 10 L84.1 0 L83.6 0 Z M86.81 0 L86.31 0 L86.31 10 L86.81 10 L87.31 10 L87.31 0 L86.81 0 Z M90.03 0 L89.53 0 L89.53 10 L90.03 10 L90.53 10 L90.53 0 L90.03 0 Z M93.24 0 L92.74 0 L92.74 10 L93.24 10 L93.74 10 L93.74 0 L93.24 0 Z M96.46 0 L95.96 0 L95.96 10 L96.46 10 L96.96 10 L96.96 0 L96.46 0 Z M99.67 0 L99.17 0 L99.17 10 L99.67 10 L100.17 10 L100.17 0 L99.67 0 Z M102.89 0 L102.39 0 L102.39 10 L102.89 10 L103.39 10 L103.39 0 L102.89 0 Z M106.1 0 L105.6 0 L105.6 10 L106.1 10 L106.6 10 L106.6 0 L106.1 0 Z M109.32 0 L108.82 0 L108.82 10 L109.32 10 L109.82 10 L109.82 0 L109.32 0 Z M112.53 0 L112.03 0 L112.03 10 L112.53 10 L113.03 10 L113.03 0 L112.53 0 Z M115.75 0 L115.25 0 L115.25 10 L115.75 10 L116.25 10 L116.25 0 L115.75 0 Z M118.97 0 L118.47 0 L118.47 10 L118.97 10 L119.47 10 L119.47 0 L118.97 0 Z M122.18 0 L121.68 0 L121.68 10 L122.18 10 L122.68 10 L122.68 0 L122.18 0 Z M125.4 0 L124.9 0 L124.9 10 L125.4 10 L125.9 10 L125.9 0 L125.4 0 Z M128.61 0 L128.11 0 L128.11 10 L128.61 10 L129.11 10 L129.11 0 L128.61 0 Z M131.83 0 L131.33 0 L131.33 10 L131.83 10 L132.33 10 L132.33 0 L131.83 0 Z M135.04 0 L134.54 0 L134.54 10 L135.04 10 L135.54 10 L135.54 0 L135.04 0 Z M138.26 0 L137.76 0 L137.76 10 L138.26 10 L138.76 10 L138.76 0 L138.26 0 Z M141.47 0 L140.97 0 L140.97 10 L141.47 10 L141.97 10 L141.97 0 L141.47 0 Z M144.69 0 L144.19 0 L144.19 10 L144.69 10 L145.19 10 L145.19 0 L144.69 0 Z M147.9 0 L147.4 0 L147.4 10 L147.9 10 L148.4 10 L148.4 0 L147.9 0 Z M151.12 0 L150.62 0 L150.62 10 L151.12 10 L151.62 10 L151.62 0 L151.12 0 Z M154.33 0 L153.83 0 L153.83 10 L154.33 10 L154.83 10 L154.83 0 L154.33 0 Z M157.55 0 L157.05 0 L157.05 10 L157.55 10 L158.05 10 L158.05 0 L157.55 0 Z M160.76 0 L160.26 0 L160.26 10 L160.76 10 L161.26 10 L161.26 0 L160.76 0 Z M163.98 0 L163.48 0 L163.48 10 L163.98 10 L164.48 10 L164.48 0 L163.98 0 Z M167.19 0 L166.69 0 L166.69 10 L167.19 10 L167.69 10 L167.69 0 L167.19 0 Z M170.41 0 L169.91 0 L169.91 10 L170.41 10 L170.91 10 L170.91 0 L170.41 0 Z M173.63 0 L173.13 0 L173.13 10 L173.63 10 L174.13 10 L174.13 0 L173.63 0 Z M176.84 0 L176.34 0 L176.34 10 L176.84 10 L177.34 10 L177.34 0 L176.84 0 Z M180.06 0 L179.56 0 L179.56 10 L180.06 10 L180.56 10 L180.56 0 L180.06 0 Z M183.27 0 L182.77 0 L182.77 10 L183.27 10 L183.77 10 L183.77 0 L183.27 0 Z M186.49 0 L185.99 0 L185.99 10 L186.49 10 L186.99 10 L186.99 0 L186.49 0 Z M189.7 0 L189.2 0 L189.2 10 L189.7 10 L190.2 10 L190.2 0 L189.7 0 Z M192.92 0 L192.42 0 L192.42 10 L192.92 10 L193.42 10 L193.42 0 L192.92 0 Z M196.13 0 L195.63 0 L195.63 10 L196.13 10 L196.63 10 L196.63 0 L196.13 0 Z M199.35 0 L198.85 0 L198.85 10 L199.35 10 L199.85 10 L199.85 0 L199.35 0 Z M202.56 0 L202.06 0 L202.06 10 L202.56 10 L203.06 10 L203.06 0 L202.56 0 Z M205.78 0 L205.28 0 L205.28 10 L205.78 10 L206.28 10 L206.28 0 L205.78 0 Z M208.99 0 L208.49 0 L208.49 10 L208.99 10 L209.49 10 L209.49 0 L208.99 0 Z M212.21 0 L211.71 0 L211.71 10 L212.21 10 L212.71 10 L212.71 0 L212.21 0 Z M215.42 0 L214.92 0 L214.92 10 L215.42 10 L215.92 10 L215.92 0 L215.42 0 Z M218.64 0 L218.14 0 L218.14 10 L218.64 10 L219.14 10 L219.14 0 L218.64 0 Z M221.85 0 L221.35 0 L221.35 10 L221.85 10 L222.35 10 L222.35 0 L221.85 0 Z M225.07 0 L224.57 0 L224.57 10 L225.07 10 L225.57 10 L225.57 0 L225.07 0 Z M228.29 0 L227.79 0 L227.79 10 L228.29 10 L228.79 10 L228.79 0 L228.29 0 Z M231.5 0 L231 0 L231 10 L231.5 10 L232 10 L232 0 L231.5 0 Z M234.72 0 L234.22 0 L234.22 10 L234.72 10 L235.22 10 L235.22 0 L234.72 0 Z M237.93 0 L237.43 0 L237.43 10 L237.93 10 L238.43 10 L238.43 0 L237.93 0 Z M241.15 0 L240.65 0 L240.65 10 L241.15 10 L241.65 10 L241.65 0 L241.15 0 Z M244.36 0 L243.86 0 L243.86 10 L244.36 10 L244.86 10 L244.86 0 L244.36 0 Z M247.58 0 L247.08 0 L247.08 10 L247.58 10 L248.08 10 L248.08 0 L247.58 0 Z M250.79 0 L250.29 0 L250.29 10 L250.79 10 L251.29 10 L251.29 0 L250.79 0 Z M254.01 0 L253.51 0 L253.51 10 L254.01 10 L254.51 10 L254.51 0 L254.01 0 Z M257.22 0 L256.72 0 L256.72 10 L257.22 10 L257.72 10 L257.72 0 L257.22 0 Z M260.44 0 L259.94 0 L259.94 10 L260.44 10 L260.94 10 L260.94 0 L260.44 0 Z M263.65 0 L263.15 0 L263.15 10 L263.65 10 L264.15 10 L264.15 0 L263.65 0 Z M266.87 0 L266.37 0 L266.37 10 L266.87 10 L267.37 10 L267.37 0 L266.87 0 Z M270.08 0 L269.58 0 L269.58 10 L270.08 10 L270.58 10 L270.58 0 L270.08 0 Z M273.3 0 L272.8 0 L272.8 10 L273.3 10 L273.8 10 L273.8 0 L273.3 0 Z M276.51 0 L276.01 0 L276.01 10 L276.51 10 L277.01 10 L277.01 0 L276.51 0 Z M279.73 0 L279.23 0 L279.23 10 L279.73 10 L280.23 10 L280.23 0 L279.73 0 Z M282.94 0 L282.44 0 L282.44 10 L282.94 10 L283.44 10 L283.44 0 L282.94 0 Z M286.16 0 L285.66 0 L285.66 10 L286.16 10 L286.66 10 L286.66 0 L286.16 0 Z M289.38 0 L288.88 0 L288.88 10 L289.38 10 L289.88 10 L289.88 0 L289.38 0 Z M292.59 0 L292.09 0 L292.09 10 L292.59 10 L293.09 10 L293.09 0 L292.59 0 Z M295.81 0 L295.31 0 L295.31 10 L295.81 10 L296.31 10 L296.31 0 L295.81 0 Z M299.02 0 L298.52 0 L298.52 10 L299.02 10 L299.52 10 L299.52 0 L299.02 0 Z M302.24 0 L301.74 0 L301.74 10 L302.24 10 L302.74 10 L302.74 0 L302.24 0 Z M305.45 0 L304.95 0 L304.95 10 L305.45 10 L305.95 10 L305.95 0 L305.45 0 Z M308.67 0 L308.17 0 L308.17 10 L308.67 10 L309.17 10 L309.17 0 L308.67 0 Z M311.88 0 L311.38 0 L311.38 10 L311.88 10 L312.38 10 L312.38 0 L311.88 0 Z M315.1 0 L314.6 0 L314.6 10 L315.1 10 L315.6 10 L315.6 0 L315.1 0 Z M318.31 0 L317.81 0 L317.81 10 L318.31 10 L318.81 10 L318.81 0 L318.31 0 Z M321.53 0 L321.03 0 L321.03 10 L321.53 10 L322.03 10 L322.03 0 L321.53 0 Z M324.74 0 L324.24 0 L324.24 10 L324.74 10 L325.24 10 L325.24 0 L324.74 0 Z M327.96 0 L327.46 0 L327.46 10 L327.96 10 L328.46 10 L328.46 0 L327.96 0 Z M331.17 0 L330.67 0 L330.67 10 L331.17 10 L331.67 10 L331.67 0 L331.17 0 Z M334.39 0 L333.89 0 L333.89 10 L334.39 10 L334.89 10 L334.89 0 L334.39 0 Z M337.6 0 L337.1 0 L337.1 10 L337.6 10 L338.1 10 L338.1 0 L337.6 0 Z M340.82 0 L340.32 0 L340.32 10 L340.82 10 L341.32 10 L341.32 0 L340.82 0 Z" fill="#3a3a3a"/></svg>
              </div>
              <div style={{ width: "356px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>0 / 2</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>closest: Marisol Peña · 6 people</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "440px", height: "1px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      </div>
      <div style={{ width: "440px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "16px 20px 16px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Rank history</p>
        <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "133px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "133px", height: "12px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "10px", height: "10px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#a58bff"/><path transform="matrix(1 0 0 1 0 0)" d="M10 5 L8.5 5 C8.5 6.933 6.933 8.5 5 8.5 L5 10 L5 11.5 C8.58985 11.5 11.5 8.58985 11.5 5 L10 5 Z M5 10 L5 8.5 C3.067 8.5 1.5 6.933 1.5 5 L0 5 L-1.5 5 C-1.5 8.58985 1.41015 11.5 5 11.5 L5 10 Z M0 5 L1.5 5 C1.5 3.067 3.067 1.5 5 1.5 L5 0 L5 -1.5 C1.41015 -1.5 -1.5 1.41015 -1.5 5 L0 5 Z M5 0 L5 1.5 C6.933 1.5 8.5 3.067 8.5 5 L10 5 L11.5 5 C11.5 1.41015 8.58985 -1.5 5 -1.5 L5 0 Z" fill="#ffffff"/></svg>
              <div style={{ width: "109px", height: "1.5px", flexShrink: 0, background: "rgba(165, 139, 255, 0.5)" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Platinum</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Mar 2024</p>
          </div>
          <div style={{ width: "133px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <svg style={{ width: "133px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="133" height="12" viewBox="0 0 133 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#7aa2f7"/><path transform="matrix(1 0 0 1 0 1)" d="M10 5 L8.5 5 C8.5 6.933 6.933 8.5 5 8.5 L5 10 L5 11.5 C8.58985 11.5 11.5 8.58985 11.5 5 L10 5 Z M5 10 L5 8.5 C3.067 8.5 1.5 6.933 1.5 5 L0 5 L-1.5 5 C-1.5 8.58985 1.41015 11.5 5 11.5 L5 10 Z M0 5 L1.5 5 C1.5 3.067 3.067 1.5 5 1.5 L5 0 L5 -1.5 C1.41015 -1.5 -1.5 1.41015 -1.5 5 L0 5 Z M5 0 L5 1.5 C6.933 1.5 8.5 3.067 8.5 5 L10 5 L11.5 5 C11.5 1.41015 8.58985 -1.5 5 -1.5 L5 0 Z" fill="#ffffff"/><path transform="matrix(1 0 0 1 16 6)" d="M0 0L109 0" fill="none" stroke="#4a4a4a" strokeWidth="1" strokeDasharray="4 4" strokeLinecap="butt"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Eagle</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Nov 2025</p>
          </div>
          <div style={{ width: "133px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <svg style={{ width: "133px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="133" height="12" viewBox="0 0 133 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#1a1a1a"/><path transform="matrix(1 0 0 1 0 1)" d="M10 5 L8.5 5 C8.5 6.933 6.933 8.5 5 8.5 L5 10 L5 11.5 C8.58985 11.5 11.5 8.58985 11.5 5 L10 5 Z M5 10 L5 8.5 C3.067 8.5 1.5 6.933 1.5 5 L0 5 L-1.5 5 C-1.5 8.58985 1.41015 11.5 5 11.5 L5 10 Z M0 5 L1.5 5 C1.5 3.067 3.067 1.5 5 1.5 L5 0 L5 -1.5 C1.41015 -1.5 -1.5 1.41015 -1.5 5 L0 5 Z M5 0 L5 1.5 C6.933 1.5 8.5 3.067 8.5 5 L10 5 L11.5 5 C11.5 1.41015 8.58985 -1.5 5 -1.5 L5 0 Z" fill="#6bcb8b"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#a0a0a0" }}>Emerald</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Dec 2026 · projected</p>
          </div>
        </div>
      </div>
      <div style={{ width: "440px", height: "1px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      </div>
      <div style={{ width: "440px", flexShrink: 0, display: "flex", flexDirection: "column", padding: "16px 20px 16px 20px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Suggested actions</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>to close the gap by Dec</p>
        </div>
        <div style={{ width: "400px", height: "6px", flexShrink: 0 }} />
        <div data-fu="row" style={{ width: "400px", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "rgba(123, 91, 255, 0.12)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.22)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Phone size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8f74ff", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Push 56 follow-ups to close 20 subs</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>At the network’s 35.6% follow-up → customer rate</p>
          </div>
          <ChevronRight size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
        </div>
        <div data-fu="row" style={{ width: "400px", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "rgba(122, 162, 247, 0.12)", boxShadow: "inset 0 0 0 1px rgba(122, 162, 247, 0.22)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <UserPlus size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8eb0f8", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Onboard 5 new members a month</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>24 more people needed to reach 40 by December</p>
          </div>
          <ChevronRight size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
        </div>
        <div data-fu="row" style={{ width: "400px", height: "56px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #222222", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
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
      <div style={{ width: "440px", flex: "1 1 0", minHeight: 0, flexShrink: 0 }} />
      <div style={{ width: "440px", flexShrink: 0, background: "#191919", boxShadow: "inset 0 1px 0 0 #000000", display: "flex", flexDirection: "row", padding: "13px 20px 12px 20px", gap: "10px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Hierarchy size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Open in Network</p>
          </div>
        </div>
        <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "6px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #8f74ff, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 13px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Message size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Message leg</p>
        </div>
      </div>
    </div>
  );
}

// Interactions: hover and click states. Remove this function and the two lines above to get a static component.
function fuInteract(root: HTMLElement | null) {
  if (!root || root.dataset.fuOn) return;
  root.dataset.fuOn = "1";
  const doc = root.ownerDocument;
  const all = (sel: string, el: Element = root): HTMLElement[] => Array.from(el.querySelectorAll(sel)) as HTMLElement[];
  const box = (el: Element) => el.getBoundingClientRect();
  const font = getComputedStyle(root).fontFamily;
  const tip = doc.createElement("div");
  tip.setAttribute("aria-hidden", "true");
  Object.assign(tip.style, { position: "fixed", zIndex: "2147483647", pointerEvents: "none", background: "#111113", color: "#fff", font: "500 12px/16px " + font, padding: "5px 8px", borderRadius: "6px", whiteSpace: "nowrap", opacity: "0", transform: "translate(-50%, -100%)", transition: "opacity .12s", boxShadow: "0 4px 14px rgba(0,0,0,.18)" });
  doc.body.appendChild(tip);
  const show = (text: string, x: number, y: number) => { if (!text) return hide(); tip.textContent = text; tip.style.left = x + "px"; tip.style.top = y - 8 + "px"; tip.style.opacity = "1"; };
  const hide = () => { tip.style.opacity = "0"; };
  const ease = (el: HTMLElement | SVGElement, props: string) => { const s = (el as HTMLElement).style; if (!s.transition) s.transition = props; };
  const texts = (scope: Element) => all("p, span", scope).filter((t) => t.children.length === 0 && (t.textContent || "").trim());
  const NUM = /^([^\d\-+.]*)([-+]?[\d,]*\.?\d+)\s*([kKmMbB%]?)([^\d]*)$/;
  // value axis: numeric labels along one edge of the chart, used to read a mark's value from its position
  const axis = (scope: Element, vertical: boolean) => {
    const pts: { v: number; p: number; pre: string; suf: string; dec: number }[] = [];
    for (const t of texts(scope)) {
      const m = (t.textContent || "").trim().match(NUM);
      if (!m) continue;
      const mult = { k: 1e3, K: 1e3, m: 1e6, M: 1e6, b: 1e9, B: 1e9 }[m[3] as "k"] || 1;
      const r = box(t);
      pts.push({ v: parseFloat(m[2].replace(/,/g, "")) * mult, p: vertical ? r.top + r.height / 2 : r.left + r.width / 2, pre: m[1], suf: m[3] + m[4], dec: (m[2].split(".")[1] || "").length });
    }
    const uniq = pts.filter((a, i) => pts.findIndex((b) => Math.abs(b.p - a.p) < 2) === i);
    if (uniq.length < 2) return null;
    uniq.sort((a, b) => a.p - b.p);
    const a = uniq[0], b = uniq[uniq.length - 1];
    if (a.v === b.v || Math.abs(b.p - a.p) < 10) return null;
    return (pos: number) => {
      const v = a.v + ((pos - a.p) * (b.v - a.v)) / (b.p - a.p);
      const suf = a.suf || b.suf, pre = a.pre || b.pre;
      const div = /^[kK]/.test(suf) ? 1e3 : /^[mM]/.test(suf) ? 1e6 : /^[bB]/.test(suf) ? 1e9 : 1;
      const x = v / div;
      const dec = Math.max(a.dec, b.dec, div > 1 && Math.abs(x) < 100 ? 1 : 0);
      return pre + x.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: dec }) + suf;
    };
  };
  // the chart around a group of marks: the nearest ancestor that also holds text labels
  const chartOf = (el: Element) => { let c: Element | null = el.parentElement; while (c && c !== root.parentElement) { if (texts(c).length >= 3) return c; c = c.parentElement; } return root; };
  const labelNear = (scope: Element, x: number, y: number, below: boolean) => {
    let best = "", d = 1e9;
    for (const t of texts(scope)) {
      const r = box(t);
      if (below ? r.top < y - 2 : r.right > x + 2) continue;
      if (NUM.test((t.textContent || "").trim()) && !/[a-z]{3}/i.test(t.textContent || "")) continue;
      const dd = below ? Math.abs(r.left + r.width / 2 - x) + (r.top - y) * 0.2 : Math.abs(r.top + r.height / 2 - y) + (x - r.right) * 0.1;
      if (dd < d) { d = dd; best = (t.textContent || "").trim(); }
    }
    return d < 80 ? best : "";
  };
  const dim = (els: (HTMLElement | SVGElement)[], keep: (HTMLElement | SVGElement)[]) => { for (const e of els) { ease(e, "opacity .15s"); (e as HTMLElement).style.opacity = keep.includes(e) ? "" : "0.35"; } };
  const undim = (els: (HTMLElement | SVGElement)[]) => { for (const e of els) (e as HTMLElement).style.opacity = ""; };

  // vertical bars: the hovered column (all stacked segments at that x) stays, the rest fade
  const groups = new Map<Element, HTMLElement[]>();
  for (const b of all("[data-fu=bar],[data-fu=hbar]")) { const p = b.parentElement!; if (!groups.has(p)) groups.set(p, []); groups.get(p)!.push(b); }
  groups.forEach((bars) => {
    const horiz = bars[0].dataset.fu === "hbar";
    const scope = chartOf(bars[0]);
    const val = axis(scope, !horiz);
    const peers = (b: HTMLElement) => { const r = box(b), c = horiz ? r.top + r.height / 2 : r.left + r.width / 2; return bars.filter((o) => { const q = box(o); return Math.abs((horiz ? q.top + q.height / 2 : q.left + q.width / 2) - c) < Math.max(2, (horiz ? r.height : r.width) / 2); }); };
    for (const b of bars) {
      b.addEventListener("mouseenter", () => {
        const col = peers(b);
        dim(bars, col);
        const rs = col.map(box);
        const top = Math.min(...rs.map((r) => r.top)), right = Math.max(...rs.map((r) => r.right)), r0 = rs[0];
        const label = horiz ? labelNear(scope, r0.left, r0.top + r0.height / 2, false) : labelNear(scope, r0.left + r0.width / 2, Math.max(...rs.map((r) => r.bottom)), true);
        const v = val ? val(horiz ? right : top) : "";
        show([label, v].filter(Boolean).join(" · "), horiz ? right : r0.left + r0.width / 2, horiz ? r0.top : top);
      });
      b.addEventListener("mouseleave", () => { undim(bars); hide(); });
    }
  });

  // line and area plots: a guide line and a dot follow the pointer along the top edge of the plotted shape
  for (const svg of all("svg[data-fu=plot]") as unknown as SVGSVGElement[]) {
    const paths = Array.from(svg.querySelectorAll("path, polyline")) as SVGGeometryElement[];
    if (!paths.length) continue;
    const line = paths.reduce((a, b) => (b.getTotalLength() > a.getTotalLength() ? b : a));
    const len = line.getTotalLength();
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= 800; i++) { const q = line.getPointAtLength((len * i) / 800); pts.push({ x: q.x, y: q.y }); }
    const xs = pts.map((q) => q.x), minX = Math.min(...xs), maxX = Math.max(...xs);
    const color = (line.getAttribute("stroke") && line.getAttribute("stroke") !== "none" ? line.getAttribute("stroke") : line.getAttribute("fill")) || "#111";
    const NS = "http://www.w3.org/2000/svg";
    const g = doc.createElementNS(NS, "g");
    g.setAttribute("pointer-events", "none");
    g.style.opacity = "0";
    const guide = doc.createElementNS(NS, "line");
    guide.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    guide.setAttribute("stroke-dasharray", "3 3");
    guide.setAttribute("stroke-opacity", "0.5");
    const dot = doc.createElementNS(NS, "circle");
    dot.setAttribute("r", "4");
    dot.setAttribute("fill", "#fff");
    dot.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    dot.setAttribute("stroke-width", "2");
    g.append(guide, dot);
    svg.appendChild(g);
    const scope = chartOf(svg);
    const val = axis(scope, true);
    const area = svg.parentElement || svg;
    area.addEventListener("mousemove", (ev: Event) => {
      const e = ev as MouseEvent;
      const m = line.getScreenCTM();
      if (!m) return;
      const px = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()).x;
      if (px < minX - 4 || px > maxX + 4) { g.style.opacity = "0"; hide(); return; }
      const step = (maxX - minX) / 400 || 1;
      let y = Infinity, x = px;
      for (const q of pts) if (Math.abs(q.x - px) <= step && q.y < y) { y = q.y; x = q.x; }
      if (y === Infinity) return;
      const bb = line.getBBox();
      guide.setAttribute("x1", String(x)); guide.setAttribute("x2", String(x));
      guide.setAttribute("y1", String(bb.y)); guide.setAttribute("y2", String(bb.y + bb.height));
      dot.setAttribute("cx", String(x)); dot.setAttribute("cy", String(y));
      g.style.opacity = "1";
      const sp = new DOMPoint(x, y).matrixTransform(m);
      const label = labelNear(scope, sp.x, box(svg).bottom, true);
      show([label, val ? val(sp.y) : ""].filter(Boolean).join(" · "), sp.x, sp.y);
    });
    area.addEventListener("mouseleave", () => { g.style.opacity = "0"; hide(); });
  }

  // rows: a soft highlight under the pointer
  for (const r of all("[data-fu=row]")) {
    r.addEventListener("mouseenter", () => { ease(r, "filter .15s"); r.style.filter = "brightness(0.975)"; });
    r.addEventListener("mouseleave", () => { r.style.filter = ""; });
  }

  // buttons: hover and press feedback
  for (const b of all("[data-fu=btn],[data-fu=tab]")) {
    b.style.cursor = "pointer";
    b.addEventListener("mouseenter", () => { ease(b, "filter .15s, transform .1s"); if (!b.dataset.fuActive) b.style.filter = "brightness(0.96)"; });
    b.addEventListener("mouseleave", () => { b.style.filter = ""; b.style.transform = ""; });
    b.addEventListener("mousedown", () => { b.style.transform = "scale(0.98)"; });
    b.addEventListener("mouseup", () => { b.style.transform = ""; });
  }

  // tabs and segmented controls: clicking a tab moves the selected look onto it
  const VIS = ["background-color", "background-image", "box-shadow", "border-color", "color", "font-weight"];
  const look = (el: HTMLElement) => VIS.map((k) => el.style.getPropertyValue(k)).join("|");
  const tabGroups = new Map<Element, HTMLElement[]>();
  for (const t of all("[data-fu=tab]")) { const p = t.parentElement!; if (!tabGroups.has(p)) tabGroups.set(p, []); tabGroups.get(p)!.push(t); }
  tabGroups.forEach((tabs) => {
    if (tabs.length < 2) return;
    const counts = new Map<string, number>();
    for (const t of tabs) counts.set(look(t), (counts.get(look(t)) || 0) + 1);
    let active = tabs.find((t) => counts.get(look(t)) === 1 && counts.size > 1) || null;
    if (!active) return;
    active.dataset.fuActive = "1";
    // read both looks first, then write: swapping one property at a time would let shorthands undo each other
    const swapStyle = (a: HTMLElement, b: HTMLElement, props: string[]) => {
      const va = props.map((k) => a.style.getPropertyValue(k)), vb = props.map((k) => b.style.getPropertyValue(k));
      props.forEach((k, i) => { a.style.setProperty(k, vb[i]); b.style.setProperty(k, va[i]); });
    };
    const swap = (a: HTMLElement, b: HTMLElement) => {
      swapStyle(a, b, VIS);
      const ta = texts(a), tb = texts(b);
      for (let i = 0; i < Math.min(ta.length, tb.length); i++) swapStyle(ta[i], tb[i], ["color", "font-weight"]);
    };
    for (const t of tabs) t.addEventListener("click", () => {
      if (!active || t === active) return;
      t.style.filter = "";
      swap(active, t);
      delete active.dataset.fuActive;
      active = t;
      t.dataset.fuActive = "1";
    });
  });
}
