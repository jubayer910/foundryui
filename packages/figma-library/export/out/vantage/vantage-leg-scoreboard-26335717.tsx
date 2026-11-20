"use client";
// Leg scoreboard (vantage, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Dots } from "ingotui-icons/react/stroke-rounded";

export function LegScoreboard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "787px", height: "356px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "787px", height: "36px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222, inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "1px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "236px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Leg</p>
        </div>
        <div style={{ width: "84px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>MG1</p>
        </div>
        <div style={{ width: "84px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Target</p>
        </div>
        <div style={{ width: "223px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Progress</p>
        </div>
        <div style={{ width: "120px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Status</p>
        </div>
        <div style={{ width: "40px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, height: "18px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
        </div>
      </div>
      <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "236px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Julio & Liz Vasquez</p>
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "131px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>55 people · 37 reporting</p>
            </div>
          </div>
        </div>
        <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>79</p>
        </div>
        <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a" }}>88</p>
        </div>
        <div style={{ width: "223px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "150px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "134.66px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "138.66px", top: "0px", width: "10.84px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10.84" height="8" viewBox="0 0 10.84 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.61 0 L3.11 0 L3.11 8 L3.61 8 L4.11 8 L4.11 0 L3.61 0 Z M7.23 0 L6.73 0 L6.73 8 L7.23 8 L7.73 8 L7.73 0 L7.23 0 Z M10.84 0 L10.34 0 L10.34 8 L10.84 8 L11.34 8 L11.34 0 L10.84 0 Z" fill="#3a3a3a"/></svg>
              <div style={{ position: "absolute", left: "92px", top: "-3px", width: "2px", height: "14px", borderRadius: "1px", background: "#ededed" }} />
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>90%</p>
        </div>
        <div style={{ width: "120px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#6bcb8b"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Ahead</p>
          </div>
        </div>
        <div style={{ width: "40px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
      </div>
      <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "236px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "153px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Oscar & Nayrobi Griñán</p>
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>58 people · 31 reporting</p>
            </div>
          </div>
        </div>
        <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>44</p>
        </div>
        <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a" }}>75</p>
        </div>
        <div style={{ width: "223px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "150px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "88px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #edce84 0%, #e3b341 100%)", boxShadow: "inset 0 0 0 1px rgba(177, 140, 51, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "92px", top: "0px", width: "57.5px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="57.5" height="8" viewBox="0 0 57.5 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.38 0 L2.88 0 L2.88 8 L3.38 8 L3.88 8 L3.88 0 L3.38 0 Z M6.76 0 L6.26 0 L6.26 8 L6.76 8 L7.26 8 L7.26 0 L6.76 0 Z M10.15 0 L9.65 0 L9.65 8 L10.15 8 L10.65 8 L10.65 0 L10.15 0 Z M13.53 0 L13.03 0 L13.03 8 L13.53 8 L14.03 8 L14.03 0 L13.53 0 Z M16.91 0 L16.41 0 L16.41 8 L16.91 8 L17.41 8 L17.41 0 L16.91 0 Z M20.29 0 L19.79 0 L19.79 8 L20.29 8 L20.79 8 L20.79 0 L20.29 0 Z M23.68 0 L23.18 0 L23.18 8 L23.68 8 L24.18 8 L24.18 0 L23.68 0 Z M27.06 0 L26.56 0 L26.56 8 L27.06 8 L27.56 8 L27.56 0 L27.06 0 Z M30.44 0 L29.94 0 L29.94 8 L30.44 8 L30.94 8 L30.94 0 L30.44 0 Z M33.82 0 L33.32 0 L33.32 8 L33.82 8 L34.32 8 L34.32 0 L33.82 0 Z M37.21 0 L36.71 0 L36.71 8 L37.21 8 L37.71 8 L37.71 0 L37.21 0 Z M40.59 0 L40.09 0 L40.09 8 L40.59 8 L41.09 8 L41.09 0 L40.59 0 Z M43.97 0 L43.47 0 L43.47 8 L43.97 8 L44.47 8 L44.47 0 L43.97 0 Z M47.35 0 L46.85 0 L46.85 8 L47.35 8 L47.85 8 L47.85 0 L47.35 0 Z M50.74 0 L50.24 0 L50.24 8 L50.74 8 L51.24 8 L51.24 0 L50.74 0 Z M54.12 0 L53.62 0 L53.62 8 L54.12 8 L54.62 8 L54.62 0 L54.12 0 Z M57.5 0 L57 0 L57 8 L57.5 8 L58 8 L58 0 L57.5 0 Z" fill="#3a3a3a"/></svg>
              <div style={{ position: "absolute", left: "92px", top: "-3px", width: "2px", height: "14px", borderRadius: "1px", background: "#ededed" }} />
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>59%</p>
        </div>
        <div style={{ width: "120px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2a2316", boxShadow: "inset 0 0 0 1px #3a301c, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#e3b341"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#e3b341", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Behind</p>
          </div>
        </div>
        <div style={{ width: "40px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
      </div>
      <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "236px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Edwin & Wiliannys</p>
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EAGLE</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>16 people · 16 reporting</p>
            </div>
          </div>
        </div>
        <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>38</p>
        </div>
        <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a" }}>40</p>
        </div>
        <div style={{ width: "223px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "150px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "142.5px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "146.5px", top: "0px", width: "3px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="8" viewBox="0 0 3 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3 0 L2.5 0 L2.5 8 L3 8 L3.5 8 L3.5 0 L3 0 Z" fill="#3a3a3a"/></svg>
              <div style={{ position: "absolute", left: "92px", top: "-3px", width: "2px", height: "14px", borderRadius: "1px", background: "#ededed" }} />
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>95%</p>
        </div>
        <div style={{ width: "120px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#6bcb8b"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Ahead</p>
          </div>
        </div>
        <div style={{ width: "40px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
      </div>
      <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "236px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Alberto & Ciany</p>
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>PLATINUM</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>21 people · 18 reporting</p>
            </div>
          </div>
        </div>
        <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>15</p>
        </div>
        <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a" }}>18</p>
        </div>
        <div style={{ width: "223px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "150px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "125px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "129px", top: "0px", width: "20.5px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="20.5" height="8" viewBox="0 0 20.5 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.42 0 L2.92 0 L2.92 8 L3.42 8 L3.92 8 L3.92 0 L3.42 0 Z M6.83 0 L6.33 0 L6.33 8 L6.83 8 L7.33 8 L7.33 0 L6.83 0 Z M10.25 0 L9.75 0 L9.75 8 L10.25 8 L10.75 8 L10.75 0 L10.25 0 Z M13.67 0 L13.17 0 L13.17 8 L13.67 8 L14.17 8 L14.17 0 L13.67 0 Z M17.08 0 L16.58 0 L16.58 8 L17.08 8 L17.58 8 L17.58 0 L17.08 0 Z M20.5 0 L20 0 L20 8 L20.5 8 L21 8 L21 0 L20.5 0 Z" fill="#3a3a3a"/></svg>
              <div style={{ position: "absolute", left: "92px", top: "-3px", width: "2px", height: "14px", borderRadius: "1px", background: "#ededed" }} />
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>83%</p>
        </div>
        <div style={{ width: "120px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#7aa2f7"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>On track</p>
          </div>
        </div>
        <div style={{ width: "40px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        </div>
      </div>
      <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "236px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Carlos & Erody Santana</p>
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>11 people · 10 reporting</p>
            </div>
          </div>
        </div>
        <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>6</p>
        </div>
        <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a" }}>9</p>
        </div>
        <div style={{ width: "223px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "150px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "150px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "100px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #edce84 0%, #e3b341 100%)", boxShadow: "inset 0 0 0 1px rgba(177, 140, 51, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "104px", top: "0px", width: "45.5px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="45.5" height="8" viewBox="0 0 45.5 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.25 0 L2.75 0 L2.75 8 L3.25 8 L3.75 8 L3.75 0 L3.25 0 Z M6.5 0 L6 0 L6 8 L6.5 8 L7 8 L7 0 L6.5 0 Z M9.75 0 L9.25 0 L9.25 8 L9.75 8 L10.25 8 L10.25 0 L9.75 0 Z M13 0 L12.5 0 L12.5 8 L13 8 L13.5 8 L13.5 0 L13 0 Z M16.25 0 L15.75 0 L15.75 8 L16.25 8 L16.75 8 L16.75 0 L16.25 0 Z M19.5 0 L19 0 L19 8 L19.5 8 L20 8 L20 0 L19.5 0 Z M22.75 0 L22.25 0 L22.25 8 L22.75 8 L23.25 8 L23.25 0 L22.75 0 Z M26 0 L25.5 0 L25.5 8 L26 8 L26.5 8 L26.5 0 L26 0 Z M29.25 0 L28.75 0 L28.75 8 L29.25 8 L29.75 8 L29.75 0 L29.25 0 Z M32.5 0 L32 0 L32 8 L32.5 8 L33 8 L33 0 L32.5 0 Z M35.75 0 L35.25 0 L35.25 8 L35.75 8 L36.25 8 L36.25 0 L35.75 0 Z M39 0 L38.5 0 L38.5 8 L39 8 L39.5 8 L39.5 0 L39 0 Z M42.25 0 L41.75 0 L41.75 8 L42.25 8 L42.75 8 L42.75 0 L42.25 0 Z M45.5 0 L45 0 L45 8 L45.5 8 L46 8 L46 0 L45.5 0 Z" fill="#3a3a3a"/></svg>
              <div style={{ position: "absolute", left: "92px", top: "-3px", width: "2px", height: "14px", borderRadius: "1px", background: "#ededed" }} />
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>67%</p>
        </div>
        <div style={{ width: "120px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2a2316", boxShadow: "inset 0 0 0 1px #3a301c, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#e3b341"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#e3b341", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Behind</p>
          </div>
        </div>
        <div style={{ width: "40px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
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
  const labelNear = (scope: Element, x: number, y: number, below: boolean, anyText = false) => {
    let best = "", d = 1e9;
    for (const t of texts(scope)) {
      const r = box(t);
      if (below ? r.top < y - 2 : r.right > x + 2) continue;
      if (!anyText && NUM.test((t.textContent || "").trim()) && !/[a-z]{3}/i.test(t.textContent || "")) continue;
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

  // cards: a small lift on hover (an extra drop shadow, the card's own shadows stay as they are)
  for (const c of all("[data-fu=card]").concat(root.dataset.fu === "card" ? [root] : [])) {
    c.addEventListener("mouseenter", () => { ease(c, "transform .18s ease, filter .18s ease"); c.style.transform = "translateY(-2px)"; c.style.filter = "drop-shadow(0 8px 16px rgba(17,17,19,.08))"; });
    c.addEventListener("mouseleave", () => { c.style.transform = ""; c.style.filter = ""; });
  }

  // heatmap and calendar cells: an outline and the cell's own text
  for (const c of all("[data-fu=cell]")) {
    c.addEventListener("mouseenter", () => {
      ease(c, "outline-color .12s");
      c.style.outline = "2px solid rgba(17,17,19,.55)";
      c.style.outlineOffset = "1px";
      const r = box(c);
      // its own text, or the row and column labels of the grid it sits in
      let label = (c.textContent || "").trim();
      if (!label) {
        // walk outwards until a row label (left) and a column label (below) are in reach
        let row = "", col = "";
        for (let a: Element | null = c.parentElement; a && a !== root.parentElement && !(row && col); a = a.parentElement) {
          if (!row) row = labelNear(a, r.left, r.top + r.height / 2, false, true);
          if (!col) col = labelNear(a, r.left + r.width / 2, r.bottom, true, true);
        }
        label = [row, col].filter(Boolean).join(" · ");
      }
      show(label, r.left + r.width / 2, r.top);
    });
    c.addEventListener("mouseleave", () => { c.style.outline = ""; c.style.outlineOffset = ""; hide(); });
  }

  // fields: hover and focus states
  for (const f of all("[data-fu=field]")) {
    f.style.cursor = "text";
    f.addEventListener("mouseenter", () => { ease(f, "filter .15s, outline-color .15s"); f.style.filter = "brightness(0.985)"; });
    f.addEventListener("mouseleave", () => { f.style.filter = ""; });
    f.addEventListener("mousedown", (ev) => {
      ev.stopPropagation();
      for (const o of all("[data-fu=field]")) o.style.outline = "";
      f.style.outline = "3px solid rgba(17,17,19,.12)";
      f.style.outlineOffset = "0px";
    });
  }
  doc.addEventListener("mousedown", () => { for (const o of all("[data-fu=field]")) o.style.outline = ""; });

  // donut and pie charts drawn as one vector per arc: the hovered arc stays, the others fade
  const arcGroups = new Map<Element, HTMLElement[]>();
  for (const a of all("[data-fu=arc]")) { const p = a.parentElement!; if (!arcGroups.has(p)) arcGroups.set(p, []); arcGroups.get(p)!.push(a); }
  arcGroups.forEach((arcs) => {
    const scope = chartOf(arcs[0]);
    const hexOf = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        if (hexOf(getComputedStyle(el).backgroundColor) !== color.toLowerCase()) continue;
        // climb to the legend row: the first ancestor that holds more than the swatch's label
        let row: Element | null = el.parentElement;
        while (row && row.parentElement && texts(row).length < 2 && row !== scope) row = row.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length && words.length <= 5) return words.join(" · ");
        if (el.parentElement) return texts(el.parentElement).map((t) => (t.textContent || "").trim()).join(" · ");
      }
      return "";
    };
    // hit-test the whole stack under the pointer: labels or tracks drawn over the ring don't get in the way
    const fills = new Map(arcs.map((a) => { const sh = a.querySelector("path"); return [a, (sh && (sh.getAttribute("fill") || sh.getAttribute("stroke"))) || ""] as [HTMLElement, string]; }));
    let current: HTMLElement | null = null;
    scope.addEventListener("mousemove", (ev) => {
      const e = ev as MouseEvent;
      // the arc whose drawn shape (not just its box) is under the pointer
      const inside = (sh: SVGGeometryElement) => { const m = sh.getScreenCTM(); if (!m) return false; const q = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()); return sh.isPointInFill(q) || sh.isPointInStroke(q); };
      const arc = arcs.find((a) => (Array.from(a.querySelectorAll("path, circle, ellipse")) as SVGGeometryElement[]).some(inside)) || null;
      if (!arc) { if (current) { undim(arcs); hide(); current = null; } return; }
      if (arc !== current) { dim(arcs, [arc]); current = arc; }
      show(legend(fills.get(arc) || ""), e.clientX, e.clientY);
    });
    scope.addEventListener("mouseleave", () => { undim(arcs); hide(); current = null; });
  });

  // donut and pie arcs in one drawing: the hovered arc stays, the others fade; the legend row with the same colour names it
  for (const svg of all("svg[data-fu=donut]") as unknown as SVGSVGElement[]) {
    const arcs = (Array.from(svg.querySelectorAll("path")) as SVGPathElement[]).filter((p) => { const f = p.getAttribute("fill"); return f && f !== "none" && !/^url/.test(f); });
    const scope = chartOf(svg);
    const hex = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        const bg = getComputedStyle(el).backgroundColor;
        if (!bg || hex(bg) !== color.toLowerCase()) continue;
        const row = el.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length) return words.join(" · ");
      }
      return "";
    };
    for (const a of arcs) {
      a.addEventListener("mouseenter", (ev) => {
        dim(arcs, [a]);
        const e = ev as MouseEvent;
        show(legend(a.getAttribute("fill") || ""), e.clientX, e.clientY);
      });
      a.addEventListener("mousemove", (ev) => { const e = ev as MouseEvent; tip.style.left = e.clientX + "px"; tip.style.top = e.clientY - 8 + "px"; });
      a.addEventListener("mouseleave", () => { undim(arcs); hide(); });
    }
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
