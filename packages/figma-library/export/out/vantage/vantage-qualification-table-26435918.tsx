"use client";
// Qualification table (vantage, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Check, ChevronRight, Refresh } from "ingotui-icons/react/stroke-rounded";

export function QualificationTable() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "787px", height: "356px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "787px", height: "36px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222, inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "1px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "196px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Leg</p>
        </div>
        <div style={{ width: "100px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Next rank</p>
        </div>
        <div style={{ width: "116px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Active subs</p>
        </div>
        <div style={{ width: "112px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>People</p>
        </div>
        <div style={{ width: "112px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>MG1 / month</p>
        </div>
        <div style={{ width: "75px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Legs</p>
        </div>
        <div style={{ width: "76px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>ETA</p>
        </div>
      </div>
      <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Edwin & Wiliannys</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EAGLE</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>16 people</p>
            </div>
          </div>
        </div>
        <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
            </div>
          </div>
        </div>
        <div style={{ width: "116px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "78.4px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "82.4px", top: "0px", width: "1.1px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1.1" height="8" viewBox="0 0 1.1 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M1.1 0 L0.6 0 L0.6 8 L1.1 8 L1.6 8 L1.6 0 L1.1 0 Z" fill="#3a3a3a"/></svg>
            </div>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>280 / 300</p>
              <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
        </div>
        <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "33.6px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "37.6px", top: "0px", width: "45.9px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="45.9" height="8" viewBox="0 0 45.9 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.28 0 L2.78 0 L2.78 8 L3.28 8 L3.78 8 L3.78 0 L3.28 0 Z M6.56 0 L6.06 0 L6.06 8 L6.56 8 L7.06 8 L7.06 0 L6.56 0 Z M9.84 0 L9.34 0 L9.34 8 L9.84 8 L10.34 8 L10.34 0 L9.84 0 Z M13.11 0 L12.61 0 L12.61 8 L13.11 8 L13.61 8 L13.61 0 L13.11 0 Z M16.39 0 L15.89 0 L15.89 8 L16.39 8 L16.89 8 L16.89 0 L16.39 0 Z M19.67 0 L19.17 0 L19.17 8 L19.67 8 L20.17 8 L20.17 0 L19.67 0 Z M22.95 0 L22.45 0 L22.45 8 L22.95 8 L23.45 8 L23.45 0 L22.95 0 Z M26.23 0 L25.73 0 L25.73 8 L26.23 8 L26.73 8 L26.73 0 L26.23 0 Z M29.51 0 L29.01 0 L29.01 8 L29.51 8 L30.01 8 L30.01 0 L29.51 0 Z M32.79 0 L32.29 0 L32.29 8 L32.79 8 L33.29 8 L33.29 0 L32.79 0 Z M36.06 0 L35.56 0 L35.56 8 L36.06 8 L36.56 8 L36.56 0 L36.06 0 Z M39.34 0 L38.84 0 L38.84 8 L39.34 8 L39.84 8 L39.84 0 L39.34 0 Z M42.62 0 L42.12 0 L42.12 8 L42.62 8 L43.12 8 L43.12 0 L42.62 0 Z M45.9 0 L45.4 0 L45.4 8 L45.9 8 L46.4 8 L46.4 0 L45.9 0 Z" fill="#3a3a3a"/></svg>
            </div>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>16 / 40</p>
              <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
        </div>
        <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>158 / 150</p>
              <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "75px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>0 / 2</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Eagle</p>
          </div>
        </div>
        <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Dec 2026</p>
        </div>
      </div>
      <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Alberto & Ciany</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>PLATINUM</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>21 people</p>
            </div>
          </div>
        </div>
        <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EAGLE</p>
            </div>
          </div>
        </div>
        <div style={{ width: "116px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>123 / 30</p>
              <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>21 / 15</p>
              <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>69 / 10</p>
              <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "75px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>1 / 2</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Platinum</p>
          </div>
        </div>
        <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#3fb37f" }}>Aug 2026</p>
        </div>
      </div>
      <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Enmanuel & Suseidy</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>PLATINUM</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>16 people</p>
            </div>
          </div>
        </div>
        <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EAGLE</p>
            </div>
          </div>
        </div>
        <div style={{ width: "116px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>38 / 30</p>
              <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>16 / 15</p>
              <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>18 / 10</p>
              <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "75px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>0 / 2</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Platinum</p>
          </div>
        </div>
        <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Oct 2026</p>
        </div>
      </div>
      <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Julio & Liz Vasquez</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>55 people</p>
            </div>
          </div>
        </div>
        <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2a2316", boxShadow: "inset 0 0 0 1px #3a301c, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#e3b341", letterSpacing: "-0.01em", textTransform: "uppercase" }}>DIAMOND</p>
            </div>
          </div>
        </div>
        <div style={{ width: "116px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "83.44px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "87.44px", top: "0px", width: "3.94px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3.94" height="8" viewBox="0 0 3.94 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3.94 0 L3.44 0 L3.44 8 L3.94 8 L4.44 8 L4.44 0 L3.94 0 Z M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z" fill="#3a3a3a"/></svg>
            </div>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>596 / 600</p>
              <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
        </div>
        <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "57.75px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "61.75px", top: "0px", width: "21.75px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="21.75" height="8" viewBox="0 0 21.75 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.63 0 L3.13 0 L3.13 8 L3.63 8 L4.13 8 L4.13 0 L3.63 0 Z M7.25 0 L6.75 0 L6.75 8 L7.25 8 L7.75 8 L7.75 0 L7.25 0 Z M10.88 0 L10.38 0 L10.38 8 L10.88 8 L11.38 8 L11.38 0 L10.88 0 Z M14.5 0 L14 0 L14 8 L14.5 8 L15 8 L15 0 L14.5 0 Z M18.13 0 L17.63 0 L17.63 8 L18.13 8 L18.63 8 L18.63 0 L18.13 0 Z M21.75 0 L21.25 0 L21.25 8 L21.75 8 L22.25 8 L22.25 0 L21.75 0 Z" fill="#3a3a3a"/></svg>
            </div>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>55 / 80</p>
              <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
        </div>
        <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, borderRadius: "3px", background: "linear-gradient(90deg, #82ceac 0%, #3fb37f 100%)", boxShadow: "inset 0 0 0 1px rgba(49, 140, 99, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>342 / 300</p>
              <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#3fb37f", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ width: "75px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>0 / 2</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Emerald</p>
          </div>
        </div>
        <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Q1 2027</p>
        </div>
      </div>
      <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Carlos & Erody</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>paid as Platinum</p>
            </div>
          </div>
        </div>
        <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Refresh size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#e3b341", display: "block" }} />
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
            </div>
          </div>
        </div>
        <div style={{ width: "116px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "14.84px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "18.84px", top: "0px", width: "64.66px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="64.66" height="8" viewBox="0 0 64.66 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.23 0 L2.73 0 L2.73 8 L3.23 8 L3.73 8 L3.73 0 L3.23 0 Z M6.47 0 L5.97 0 L5.97 8 L6.47 8 L6.97 8 L6.97 0 L6.47 0 Z M9.7 0 L9.2 0 L9.2 8 L9.7 8 L10.2 8 L10.2 0 L9.7 0 Z M12.93 0 L12.43 0 L12.43 8 L12.93 8 L13.43 8 L13.43 0 L12.93 0 Z M16.16 0 L15.66 0 L15.66 8 L16.16 8 L16.66 8 L16.66 0 L16.16 0 Z M19.4 0 L18.9 0 L18.9 8 L19.4 8 L19.9 8 L19.9 0 L19.4 0 Z M22.63 0 L22.13 0 L22.13 8 L22.63 8 L23.13 8 L23.13 0 L22.63 0 Z M25.86 0 L25.36 0 L25.36 8 L25.86 8 L26.36 8 L26.36 0 L25.86 0 Z M29.1 0 L28.6 0 L28.6 8 L29.1 8 L29.6 8 L29.6 0 L29.1 0 Z M32.33 0 L31.83 0 L31.83 8 L32.33 8 L32.83 8 L32.83 0 L32.33 0 Z M35.56 0 L35.06 0 L35.06 8 L35.56 8 L36.06 8 L36.06 0 L35.56 0 Z M38.8 0 L38.3 0 L38.3 8 L38.8 8 L39.3 8 L39.3 0 L38.8 0 Z M42.03 0 L41.53 0 L41.53 8 L42.03 8 L42.53 8 L42.53 0 L42.03 0 Z M45.26 0 L44.76 0 L44.76 8 L45.26 8 L45.76 8 L45.76 0 L45.26 0 Z M48.49 0 L47.99 0 L47.99 8 L48.49 8 L48.99 8 L48.99 0 L48.49 0 Z M51.73 0 L51.23 0 L51.23 8 L51.73 8 L52.23 8 L52.23 0 L51.73 0 Z M54.96 0 L54.46 0 L54.46 8 L54.96 8 L55.46 8 L55.46 0 L54.96 0 Z M58.19 0 L57.69 0 L57.69 8 L58.19 8 L58.69 8 L58.69 0 L58.19 0 Z M61.43 0 L60.93 0 L60.93 8 L61.43 8 L61.93 8 L61.93 0 L61.43 0 Z M64.66 0 L64.16 0 L64.16 8 L64.66 8 L65.16 8 L65.16 0 L64.66 0 Z" fill="#3a3a3a"/></svg>
            </div>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>53 / 300</p>
              <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
        </div>
        <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "23.1px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "27.1px", top: "0px", width: "56.4px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="56.4" height="8" viewBox="0 0 56.4 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.32 0 L2.82 0 L2.82 8 L3.32 8 L3.82 8 L3.82 0 L3.32 0 Z M6.64 0 L6.14 0 L6.14 8 L6.64 8 L7.14 8 L7.14 0 L6.64 0 Z M9.95 0 L9.45 0 L9.45 8 L9.95 8 L10.45 8 L10.45 0 L9.95 0 Z M13.27 0 L12.77 0 L12.77 8 L13.27 8 L13.77 8 L13.77 0 L13.27 0 Z M16.59 0 L16.09 0 L16.09 8 L16.59 8 L17.09 8 L17.09 0 L16.59 0 Z M19.91 0 L19.41 0 L19.41 8 L19.91 8 L20.41 8 L20.41 0 L19.91 0 Z M23.22 0 L22.72 0 L22.72 8 L23.22 8 L23.72 8 L23.72 0 L23.22 0 Z M26.54 0 L26.04 0 L26.04 8 L26.54 8 L27.04 8 L27.04 0 L26.54 0 Z M29.86 0 L29.36 0 L29.36 8 L29.86 8 L30.36 8 L30.36 0 L29.86 0 Z M33.18 0 L32.68 0 L32.68 8 L33.18 8 L33.68 8 L33.68 0 L33.18 0 Z M36.49 0 L35.99 0 L35.99 8 L36.49 8 L36.99 8 L36.99 0 L36.49 0 Z M39.81 0 L39.31 0 L39.31 8 L39.81 8 L40.31 8 L40.31 0 L39.81 0 Z M43.13 0 L42.63 0 L42.63 8 L43.13 8 L43.63 8 L43.63 0 L43.13 0 Z M46.45 0 L45.95 0 L45.95 8 L46.45 8 L46.95 8 L46.95 0 L46.45 0 Z M49.76 0 L49.26 0 L49.26 8 L49.76 8 L50.26 8 L50.26 0 L49.76 0 Z M53.08 0 L52.58 0 L52.58 8 L53.08 8 L53.58 8 L53.58 0 L53.08 0 Z M56.4 0 L55.9 0 L55.9 8 L56.4 8 L56.9 8 L56.9 0 L56.4 0 Z" fill="#3a3a3a"/></svg>
            </div>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>11 / 40</p>
              <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
        </div>
        <div style={{ width: "112px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "84px", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "17.36px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "21.36px", top: "0px", width: "62.14px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="62.14" height="8" viewBox="0 0 62.14 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.27 0 L2.77 0 L2.77 8 L3.27 8 L3.77 8 L3.77 0 L3.27 0 Z M6.54 0 L6.04 0 L6.04 8 L6.54 8 L7.04 8 L7.04 0 L6.54 0 Z M9.81 0 L9.31 0 L9.31 8 L9.81 8 L10.31 8 L10.31 0 L9.81 0 Z M13.08 0 L12.58 0 L12.58 8 L13.08 8 L13.58 8 L13.58 0 L13.08 0 Z M16.35 0 L15.85 0 L15.85 8 L16.35 8 L16.85 8 L16.85 0 L16.35 0 Z M19.62 0 L19.12 0 L19.12 8 L19.62 8 L20.12 8 L20.12 0 L19.62 0 Z M22.89 0 L22.39 0 L22.39 8 L22.89 8 L23.39 8 L23.39 0 L22.89 0 Z M26.16 0 L25.66 0 L25.66 8 L26.16 8 L26.66 8 L26.66 0 L26.16 0 Z M29.43 0 L28.93 0 L28.93 8 L29.43 8 L29.93 8 L29.93 0 L29.43 0 Z M32.71 0 L32.21 0 L32.21 8 L32.71 8 L33.21 8 L33.21 0 L32.71 0 Z M35.98 0 L35.48 0 L35.48 8 L35.98 8 L36.48 8 L36.48 0 L35.98 0 Z M39.25 0 L38.75 0 L38.75 8 L39.25 8 L39.75 8 L39.75 0 L39.25 0 Z M42.52 0 L42.02 0 L42.02 8 L42.52 8 L43.02 8 L43.02 0 L42.52 0 Z M45.79 0 L45.29 0 L45.29 8 L45.79 8 L46.29 8 L46.29 0 L45.79 0 Z M49.06 0 L48.56 0 L48.56 8 L49.06 8 L49.56 8 L49.56 0 L49.06 0 Z M52.33 0 L51.83 0 L51.83 8 L52.33 8 L52.83 8 L52.83 0 L52.33 0 Z M55.6 0 L55.1 0 L55.1 8 L55.6 8 L56.1 8 L56.1 0 L55.6 0 Z M58.87 0 L58.37 0 L58.37 8 L58.87 8 L59.37 8 L59.37 0 L58.87 0 Z M62.14 0 L61.64 0 L61.64 8 L62.14 8 L62.64 8 L62.64 0 L62.14 0 Z" fill="#3a3a3a"/></svg>
            </div>
            <div style={{ width: "84px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>31 / 150</p>
              <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
        </div>
        <div style={{ width: "75px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>0 / 2</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Eagle</p>
          </div>
        </div>
        <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2d1a1c", boxShadow: "inset 0 0 0 1px #3d2326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#f07178"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#f07178", letterSpacing: "-0.01em", textTransform: "uppercase" }}>At risk</p>
          </div>
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
