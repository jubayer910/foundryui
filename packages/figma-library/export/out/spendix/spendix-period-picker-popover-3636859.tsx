"use client";
// Period picker popover (spendix, Popovers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "ingotui-icons/react/stroke-rounded";

export function PeriodPickerPopover() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "420px", height: "369px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8eb, 0px 12px 32px -8px rgba(13, 13, 18, 0.1), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "150px", alignSelf: "stretch", flexShrink: 0, boxShadow: "inset -1px 0 0 0 #ededed", display: "flex", flexDirection: "column", padding: "6px 7px 6px 6px", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 10px 4px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Presets</p>
          </div>
          <div data-fu="btn" style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px #e8e8eb", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>This month</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#3f3f46" }}>Last month</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#3f3f46" }}>This quarter · Q2</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#3f3f46" }}>Year to date</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "34px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#3f3f46" }}>Custom range…</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", padding: "12px 12px 12px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "9.6px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d6d6d6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronLeft size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>2026</p>
            <div data-fu="btn" style={{ width: "26px", height: "26px", flexShrink: 0, borderRadius: "9.6px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d6d6d6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#686765", display: "block" }} />
            </div>
          </div>
          <div data-fu="row" style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Jan</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>$5.9K</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Feb</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>$6.6K</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Mar</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>$6.4K</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #3f76ed 0%, #2563eb 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(37, 99, 235, 0.16)" }} />
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "inset 0 0 0 1px #242424", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ffffff" }}>Apr</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#d4d4d8" }}>$7.5K</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #ffffff 0%, #ffffff 100%)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(255, 255, 255, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(255, 255, 255, 0.16)" }} />
                <div style={{ width: "2.4px", height: "10px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(255, 255, 255, 0.16)" }} />
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#f2f6fe", display: "flex", flexDirection: "column", padding: "7px 8px 7px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>May</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#f2f6fe", display: "flex", flexDirection: "column", padding: "7px 8px 7px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Jun</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f0f0f0", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Jul</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f0f0f0", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Aug</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f0f0f0", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Sep</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f0f0f0", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Oct</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f0f0f0", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Nov</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
            <div style={{ width: "78px", height: "50px", flexShrink: 0, borderRadius: "8px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #f0f0f0", display: "flex", flexDirection: "column", padding: "8px 9px 8px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#94a3b8" }}>Dec</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#94a3b8" }}>—</p>
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#2563eb", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>Spend vs $10K</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>· Q2 shaded</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "11px 12px 10px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "18px", flexShrink: 0, borderRadius: "9px", background: "#242424", position: "relative" }}>
            <svg style={{ position: "absolute", left: "16px", top: "2px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M14 7 C14 10.866 10.866 14 7 14 C3.13401 14 0 10.866 0 7 C0 3.13401 3.13401 0 7 0 C10.866 0 14 3.13401 14 7 Z" fill="#ffffff"/></svg>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Compare with March</p>
        </div>
        <div data-fu="btn" style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Cancel</p>
        </div>
        <div data-fu="btn" style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Apply</p>
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
