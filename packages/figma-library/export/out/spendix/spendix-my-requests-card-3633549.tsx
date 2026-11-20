"use client";
// My requests card (spendix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Dots, Loader, Search } from "ingotui-icons/react/stroke-rounded";

export function MyRequestsCard() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} data-fu="card" style={{ width: "790px", height: "742px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "790px", height: "60px", boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 16px 1px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>My requests</p>
          <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", display: "flex", flexDirection: "row", padding: "4px 4px 4px 4px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="tab" style={{ height: "26px", flexShrink: 0, borderRadius: "7px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px #e9e9e9", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#000000" }}>All</p>
              <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#e0e7ff", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb" }}>11</p>
              </div>
            </div>
            <div data-fu="tab" style={{ height: "26px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#646871" }}>Open</p>
              <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>3</p>
              </div>
            </div>
            <div data-fu="tab" style={{ height: "26px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#646871" }}>Approved</p>
              <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>7</p>
              </div>
            </div>
            <div data-fu="tab" style={{ height: "26px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#646871" }}>Declined</p>
              <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "5px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>1</p>
              </div>
            </div>
          </div>
        </div>
        <div data-fu="field" style={{ width: "176px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d6d6d6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Search size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#64748b", display: "block" }} />
          <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>Search requests…</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "0px", top: "60px", width: "790px", height: "748px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "790px", height: "44px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ededed, inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "1px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "220px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Request</p>
          </div>
          <div style={{ width: "100px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Amount</p>
          </div>
          <div style={{ width: "190px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Progress</p>
          </div>
          <div style={{ width: "150px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Status</p>
          </div>
          <div style={{ width: "92px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Submitted</p>
          </div>
          <div style={{ width: "38px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "16px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "790px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "220px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg width={19.2} height={19.2} viewBox="0 0 24 24" style={{ width: "19.2px", height: "19.2px", flexShrink: 0, color: "#1f1f21", display: "block" }}><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" fill="currentColor" /></svg>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Notion</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>REQ-1042 · Subscription</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$320.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>per month</p>
            </div>
          </div>
          <div style={{ width: "190px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "142px", height: "10px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="142" height="10" viewBox="0 0 142 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 14 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#ffffff"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 L7.5 5 C7.5 6.38071 6.38071 7.5 5 7.5 L5 10 L5 12.5 C9.14214 12.5 12.5 9.14214 12.5 5 L10 5 Z M5 10 L5 7.5 C3.61929 7.5 2.5 6.38071 2.5 5 L0 5 L-2.5 5 C-2.5 9.14214 0.857864 12.5 5 12.5 L5 10 Z M0 5 L2.5 5 C2.5 3.61929 3.61929 2.5 5 2.5 L5 0 L5 -2.5 C0.857864 -2.5 -2.5 0.857864 -2.5 5 L0 5 Z M5 0 L5 2.5 C6.38071 2.5 7.5 3.61929 7.5 5 L10 5 L12.5 5 C12.5 0.857864 9.14214 -2.5 5 -2.5 L5 0 Z" fill="#ffb002"/><path transform="matrix(1 0 0 1 58 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#e4e4e7"/><path transform="matrix(1 0 0 1 88 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#e4e4e7"/><path transform="matrix(1 0 0 1 102 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#e4e4e7"/><path transform="matrix(1 0 0 1 132 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#e4e4e7"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Waiting on Maya Patel</p>
            </div>
          </div>
          <div style={{ width: "150px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "rgba(255, 176, 2, 0.1)", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#d2a134", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#d2a134" }}>Waiting</p>
            </div>
          </div>
          <div style={{ width: "92px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>18/04/2026</p>
          </div>
          <div style={{ width: "38px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "790px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "220px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, borderRadius: "5.38px", background: "#006bff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>C</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Calendly Teams</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>REQ-1040 · Subscription</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$120.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>per month</p>
            </div>
          </div>
          <div style={{ width: "190px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "142px", height: "10px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="142" height="10" viewBox="0 0 142 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 14 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 58 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 88 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#ffffff"/><path transform="matrix(1 0 0 1 88 0)" d="M10 5 L7.5 5 C7.5 6.38071 6.38071 7.5 5 7.5 L5 10 L5 12.5 C9.14214 12.5 12.5 9.14214 12.5 5 L10 5 Z M5 10 L5 7.5 C3.61929 7.5 2.5 6.38071 2.5 5 L0 5 L-2.5 5 C-2.5 9.14214 0.857864 12.5 5 12.5 L5 10 Z M0 5 L2.5 5 C2.5 3.61929 3.61929 2.5 5 2.5 L5 0 L5 -2.5 C0.857864 -2.5 -2.5 0.857864 -2.5 5 L0 5 Z M5 0 L5 2.5 C6.38071 2.5 7.5 3.61929 7.5 5 L10 5 L12.5 5 C12.5 0.857864 9.14214 -2.5 5 -2.5 L5 0 Z" fill="#2563eb"/><path transform="matrix(1 0 0 1 102 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#e4e4e7"/><path transform="matrix(1 0 0 1 132 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#e4e4e7"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Finance · Grace Liu</p>
            </div>
          </div>
          <div style={{ width: "150px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e0f6ff", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#2563eb", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb" }}>In review</p>
            </div>
          </div>
          <div style={{ width: "92px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>16/04/2026</p>
          </div>
          <div style={{ width: "38px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "790px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "220px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, position: "relative" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "19.2px", height: "19.2px", background: "url('https://ingotui.com/library-img/c1b9ac38b4d88317b1ed300762b915082a72b430.png') center / cover no-repeat" }} />
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>AWS credits</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>REQ-1039 · Purchase</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$240.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>one-off</p>
            </div>
          </div>
          <div style={{ width: "190px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "142px", height: "10px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="142" height="10" viewBox="0 0 142 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 14 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#ffffff"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 L7.5 5 C7.5 6.38071 6.38071 7.5 5 7.5 L5 10 L5 12.5 C9.14214 12.5 12.5 9.14214 12.5 5 L10 5 Z M5 10 L5 7.5 C3.61929 7.5 2.5 6.38071 2.5 5 L0 5 L-2.5 5 C-2.5 9.14214 0.857864 12.5 5 12.5 L5 10 Z M0 5 L2.5 5 C2.5 3.61929 3.61929 2.5 5 2.5 L5 0 L5 -2.5 C0.857864 -2.5 -2.5 0.857864 -2.5 5 L0 5 Z M5 0 L5 2.5 C6.38071 2.5 7.5 3.61929 7.5 5 L10 5 L12.5 5 C12.5 0.857864 9.14214 -2.5 5 -2.5 L5 0 Z" fill="#2563eb"/><path transform="matrix(1 0 0 1 58 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#e4e4e7"/><path transform="matrix(1 0 0 1 88 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#e4e4e7"/><path transform="matrix(1 0 0 1 102 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#e4e4e7"/><path transform="matrix(1 0 0 1 132 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#e4e4e7"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Sofia Reyes reviewing</p>
            </div>
          </div>
          <div style={{ width: "150px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e0f6ff", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#2563eb", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb" }}>Manager review</p>
            </div>
          </div>
          <div style={{ width: "92px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>15/04/2026</p>
          </div>
          <div style={{ width: "38px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "790px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "220px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, borderRadius: "5.38px", background: "#0a3b78", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>D</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Delta flight NYC</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>REQ-1036 · Travel</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$612.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>one-off</p>
            </div>
          </div>
          <div style={{ width: "190px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "142px", height: "10px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="142" height="10" viewBox="0 0 142 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 14 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 58 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 88 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 102 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 132 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Card issued · 09/04</p>
            </div>
          </div>
          <div style={{ width: "150px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Approved</p>
            </div>
          </div>
          <div style={{ width: "92px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>09/04/2026</p>
          </div>
          <div style={{ width: "38px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "790px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "220px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, borderRadius: "5.38px", background: "#a3112f", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>M</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Marriott NYC</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>REQ-1034 · Travel</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$389.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>2 nights</p>
            </div>
          </div>
          <div style={{ width: "190px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "142px", height: "10px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="142" height="10" viewBox="0 0 142 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 14 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 58 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 88 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 102 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 132 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Card issued · 08/04</p>
            </div>
          </div>
          <div style={{ width: "150px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Approved</p>
            </div>
          </div>
          <div style={{ width: "92px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>08/04/2026</p>
          </div>
          <div style={{ width: "38px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "790px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "220px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, borderRadius: "5.38px", background: "#f6c200", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>H</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Hertz rental NYC</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>REQ-1033 · Travel</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$335.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>3 days</p>
            </div>
          </div>
          <div style={{ width: "190px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "142px", height: "10px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="142" height="10" viewBox="0 0 142 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 14 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 58 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 88 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 102 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 132 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Card issued · 08/04</p>
            </div>
          </div>
          <div style={{ width: "150px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Approved</p>
            </div>
          </div>
          <div style={{ width: "92px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>08/04/2026</p>
          </div>
          <div style={{ width: "38px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "790px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "220px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, position: "relative" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "19.2px", height: "19.2px", background: "url('https://ingotui.com/library-img/31aaca83a4864f35dba467eb853566eebfeb77a6.png') center / cover no-repeat" }} />
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Canva Pro</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "131px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>REQ-1031 · Subscription</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$240.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>per year</p>
            </div>
          </div>
          <div style={{ width: "190px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "142px", height: "10px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="142" height="10" viewBox="0 0 142 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 14 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#e5484d"/><path transform="matrix(1 0 0 1 58 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#e4e4e7"/><path transform="matrix(1 0 0 1 88 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#e4e4e7"/><path transform="matrix(1 0 0 1 102 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#e4e4e7"/><path transform="matrix(1 0 0 1 132 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#e4e4e7"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Declined by Liam Chen</p>
            </div>
          </div>
          <div style={{ width: "150px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#fde4e4", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#c42b2b", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#c42b2b" }}>Declined</p>
            </div>
          </div>
          <div style={{ width: "92px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>06/04/2026</p>
          </div>
          <div style={{ width: "38px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "790px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "220px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, borderRadius: "5.38px", background: "#5e6ad2", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>L</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Linear seats</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>REQ-1030 · Subscription</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$240.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>per month</p>
            </div>
          </div>
          <div style={{ width: "190px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "142px", height: "10px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="142" height="10" viewBox="0 0 142 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 14 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 58 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 88 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 102 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 132 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Card issued · 05/04</p>
            </div>
          </div>
          <div style={{ width: "150px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Approved</p>
            </div>
          </div>
          <div style={{ width: "92px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>05/04/2026</p>
          </div>
          <div style={{ width: "38px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "790px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "220px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "19.2px", height: "19.2px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "hidden" }} xmlns="http://www.w3.org/2000/svg" width="19.2" height="19.2" viewBox="0 0 19.2 19.2" fill="none" overflow="hidden"><path transform="matrix(1 0 0 1 0 4.39)" d="M0 0.524987 L0 7.55661 C0.006375 9.14661 1.305 10.4261 2.88863 10.4197 L13.1378 10.4197 C13.4291 10.4197 13.6635 10.1854 13.6635 9.90036 L13.6635 2.86911 C13.6571 1.27911 12.3589 -0.000763074 10.7749 0.00561193 L0.52575 0.00561193 C0.234375 0.00561193 0 0.239987 0 0.524987 Z M14.316 3.26811 L18.5475 0.176612 C18.915 -0.127138 19.2 -0.0513883 19.2 0.499862 L19.2 9.92549 C19.2 10.5529 18.8516 10.4767 18.5475 10.2487 L14.316 7.16361 L14.316 3.26811 Z" fill="#4a8cff"/><path transform="matrix(1 0 0 1 -175.896 34.908)" d="M7.29601 0.280499 L7.512 1.1535 C6.66234 1.3624 5.84915 1.69857 5.1 2.15062 L4.63801 1.37962 C5.46357 0.881417 6.35969 0.510857 7.29601 0.280499 Z M11.688 1.1535 C12.5376 1.36254 13.3508 1.6987 14.1 2.15062 L14.565 1.37962 C13.7385 0.881145 12.8414 0.510577 11.904 0.280499 L11.688 1.1535 Z M1.38002 4.63763 C0.881384 5.46288 0.510665 6.35893 0.280504 7.29525 L1.15351 7.51125 C1.36245 6.66166 1.69875 5.84858 2.151 5.09962 L1.38002 4.63763 Z M0.997508 8.29575 L0.108 8.16075 C-0.0360001 9.11422 -0.0360001 10.0839 0.108 11.0374 L0.997508 10.9024 C0.867008 10.0384 0.867008 9.15972 0.997508 8.29575 Z M14.1 17.0475 C13.3518 17.4994 12.5396 17.8356 11.691 18.045 L11.907 18.918 C12.8423 18.6873 13.7374 18.3166 14.562 17.8185 L14.1 17.0475 Z M18.2025 10.9024 L19.092 11.0374 C19.236 10.0839 19.236 9.11422 19.092 8.16075 L18.2025 8.29575 C18.3326 9.1575 18.3326 10.0406 18.2025 10.9024 Z M18.0465 11.6869 C17.8372 12.5365 17.501 13.3496 17.049 14.0989 L17.82 14.5639 C18.3185 13.7374 18.6892 12.8402 18.9195 11.9029 L18.0465 11.6869 Z M10.9035 18.2025 C10.0393 18.3326 9.16038 18.3326 8.29613 18.2025 L8.16151 19.092 C9.11514 19.236 10.0849 19.236 11.0385 19.092 L10.9035 18.2025 Z M16.6031 14.7604 C16.0844 15.4631 15.4631 16.0839 14.76 16.602 L15.294 17.3265 C16.0697 16.7561 16.7553 16.0725 17.328 15.2985 L16.6031 14.7604 Z M14.76 2.59612 C15.4631 3.11502 16.0844 3.73643 16.6031 4.43963 L17.328 3.89962 C16.757 3.12617 16.0735 2.44258 15.3 1.87163 L14.76 2.59612 Z M2.59651 4.43963 C3.1153 3.73634 3.73671 3.11491 4.44 2.59612 L3.9 1.87163 C3.12637 2.44238 2.44276 3.12599 1.872 3.89962 L2.59651 4.43963 Z M17.049 5.09962 C17.5009 5.84768 17.8372 6.65972 18.0465 7.50825 L18.9195 7.29225 C18.6887 6.35709 18.318 5.46214 17.82 4.63763 L17.049 5.09962 Z M8.29613 0.997499 C9.1605 0.867374 10.0391 0.867374 10.9035 0.997499 L11.0385 0.108 C10.0849 -0.036 9.1151 -0.036 8.16151 0.108 L8.29613 0.997499 Z M3.05851 17.565 L1.2 17.9985 L1.63351 16.14 L0.757512 15.9345 L0.32401 17.793 C0.17176 18.4417 0.756754 19.0264 1.4055 18.8745 L3.2625 18.4485 L3.05851 17.565 Z M0.945012 15.1324 L1.82101 15.336 L2.12101 14.0479 C1.68349 13.3131 1.35745 12.5174 1.15351 11.6869 L0.280504 11.9029 C0.476207 12.6983 0.773663 13.4651 1.16551 14.1844 L0.945012 15.1324 Z M3.8565 17.382 L4.06051 18.258 L5.00851 18.0375 C5.7278 18.4293 6.49462 18.7268 7.29 18.9225 L7.50601 18.0495 C6.67732 17.8428 5.88373 17.5148 5.151 17.076 L3.8565 17.382 Z M2.77614 5.82863 C1.40401 8.313 1.4895 11.3464 3 13.7494 L2.25 16.9485 L5.4495 16.1985 C8.25562 17.9659 11.8729 17.7656 14.4668 15.699 C17.0606 13.6324 18.0641 10.1516 16.968 7.02188 C14.745 0.673125 6.00864 -0.0243731 2.77614 5.82863 Z" fill="#3a76f0"/><path transform="matrix(1 0 0 1 -141.094 34.907)" d="M4.8773 7.74171 C10.2383 5.89371 8.3438 -0.176798 8.8868 0.00395192 C12.3964 1.71995 16.3433 5.46395 16.3433 11.08 C16.3433 15.3857 13.005 19.192 8.1533 19.192 C3.84942 19.387 0.202173 16.0581 0.00717269 11.7538 C-0.195702 7.29133 3.97242 4.03671 3.97242 4.83995 C4.00955 5.29745 4.39805 7.74171 4.8773 7.74171 Z" fill="#e73d76" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -110.626 34.961)" d="M9.68925 3.20918 C12.5692 3.37831 14.2556 4.64506 14.4195 5.82743 C14.4994 6.60068 13.9856 7.20181 13.0939 7.20181 C11.7911 7.20181 11.6584 5.46556 9.41512 5.46556 C8.40374 5.46556 7.54949 5.88631 7.54949 6.79868 C7.54949 8.70518 14.7364 7.59781 14.7364 11.7959 C14.7364 14.2158 12.7995 15.8013 9.90824 15.8013 C7.36537 15.8013 4.80937 14.6486 4.82212 12.6637 C4.82662 12.0648 5.27286 11.5154 5.86761 11.5154 C7.36537 11.5154 7.3515 13.7403 9.73612 13.7403 C11.4082 13.7403 11.9794 12.8276 11.9794 12.1916 C11.9794 9.89468 4.75011 11.3032 4.75011 6.98318 C4.75011 4.64506 6.67087 3.03256 9.68925 3.20918 Z M11.2665 18.3236 C15.8801 21.1124 21.282 15.7736 18.3844 11.1112 C19.4662 4.93081 14.0584 -0.357443 7.94924 0.778432 C3.34762 -2.02507 -2.07788 3.29581 0.807742 7.96718 C-0.294008 14.1011 5.08311 19.5026 11.2665 18.3236 Z" fill="#178cc8" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -80.943 34.908)" d="M0.380621 19.1996 L4.3425 19.1996 L4.3425 6.39975 L0.380621 6.39975 L0.380621 19.1996 Z M10.6762 12.4807 C10.6762 10.6815 11.5046 9.609 13.0905 9.609 C14.5474 9.609 15.2471 10.638 15.2471 12.4807 L15.2471 19.2 L19.191 19.1996 L19.191 11.0955 C19.191 7.66688 17.2474 6.009 14.5335 6.009 C11.8185 6.009 10.6762 8.124 10.6762 8.124 L10.6762 6.39975 L6.87562 6.39975 L6.87562 19.1996 L10.6762 19.1996 L10.6762 12.4807 Z M2.343 4.72387 C3.63675 4.72387 4.68562 3.66563 4.68562 2.36138 C4.68562 1.0575 3.63675 0 2.343 0 C1.0485 0 0 1.0575 0 2.36138 C0 3.66563 1.0485 4.72387 2.343 4.72387 Z" fill="#10658f" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -208.375 59.794)" d="M11.878 0.0161224 C11.8787 0.308997 11.9646 4.54163 16.4065 4.80563 C16.4065 6.02625 16.4076 6.91125 16.4076 8.076 C16.0712 8.0955 13.4837 7.90762 11.8727 6.471 L11.8679 12.8377 C11.929 17.2567 8.67736 19.9455 4.42636 19.017 C-2.90339 16.8244 -0.467762 5.95313 6.89199 7.11675 C6.89199 10.6264 6.89386 7.11562 6.89386 10.6264 C3.85373 10.179 2.83673 12.708 3.64448 14.5192 C4.37986 16.1677 7.40723 16.5255 8.46285 14.1994 C8.58247 13.7441 8.64248 13.2251 8.64248 12.6424 L8.64248 0 L11.878 0.0161224 Z" fill="#000000" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -173.765 59.794)" d="M6.13999 12.6987 C5.63599 15.3421 5.02024 17.8763 3.19624 19.2001 C2.63299 15.2048 4.02274 12.2045 4.66812 9.01885 C3.56787 7.16672 4.80051 3.43922 7.12139 4.35797 C9.97701 5.48747 4.64826 11.2441 8.22538 11.963 C11.9604 12.7133 13.4851 5.4826 11.1695 3.13135 C7.823 -0.264279 1.4285 3.05372 2.21487 7.91522 C2.40612 9.10359 3.63388 9.46397 2.70538 11.1042 C0.56375 10.6295 -0.0752484 8.94047 0.00687659 6.68822 C0.139252 3.00235 3.31887 0.421595 6.50787 0.064595 C10.5414 -0.386905 14.3266 1.5451 14.8494 5.33897 C15.4377 9.62147 13.0288 14.2591 8.71625 13.9257 C7.547 13.8346 7.05649 13.2556 6.13999 12.6987 Z" fill="#d0272c"/><path transform="matrix(1 0 0 1 -142.103 59.794)" d="M1.25212 0 L0 3.339 L0 16.6942 L4.58925 16.6942 L4.58925 19.2 L7.09462 19.2 L9.59775 16.6942 L13.353 16.6942 L18.3615 11.6876 L18.3615 0 L1.25212 0 Z M2.9205 1.66837 L16.6927 1.66837 L16.6927 10.8514 L13.7707 13.7734 L9.18074 13.7734 L6.67837 16.2758 L6.67837 13.7734 L2.9205 13.7734 L2.9205 1.66837 Z M7.51124 10.0178 L9.18074 10.0178 L9.18074 5.00962 L7.51124 5.00962 L7.51124 10.0178 Z M12.1016 10.0178 L13.7707 10.0178 L13.7707 5.00962 L12.1016 5.00962 L12.1016 10.0178 Z" fill="#5a3e85"/><path transform="matrix(1 0 0 1 -110.626 61.127)" d="M9.42318 3.883 C8.98368 3.89087 8.61244 4.26512 8.62031 4.69225 C8.62819 5.13512 8.99268 5.48125 9.44456 5.476 C9.89756 5.47037 10.2411 5.1205 10.2369 4.66825 C10.2332 4.22463 9.87056 3.87475 9.42318 3.883 Z M15.0636 8.99162 C14.7152 8.989 14.4193 9.27437 14.4051 9.6265 C14.3901 10.0026 14.6826 10.312 15.0549 10.3127 C15.4153 10.3139 15.6999 10.0416 15.7131 9.68275 C15.7269 9.30587 15.4344 8.99425 15.0636 8.99162 Z M11.5937 9.682 C11.6079 9.30662 11.3061 8.99163 10.9299 8.99013 C10.5579 8.98863 10.2459 9.30775 10.2591 9.6775 C10.2711 10.0311 10.5688 10.3169 10.9254 10.3172 C11.2813 10.3176 11.5798 10.0397 11.5937 9.682 Z M15.7127 15.8474 C15.1641 15.79 14.5873 16.1065 14.0136 16.1654 C12.2649 16.3442 10.6986 15.8567 9.40668 14.6624 C6.95006 12.3902 7.30106 8.90613 10.1432 7.04425 C12.6692 5.38938 16.3738 5.941 18.1547 8.23712 C19.7091 10.2407 19.5264 12.9006 17.6289 14.584 C16.7436 15.3696 17.1148 15.6201 17.3451 16.5329 C16.8351 16.3056 16.2696 15.9055 15.7127 15.8474 Z M4.35655 3.88337 C3.90843 3.86987 3.53981 4.21262 3.52668 4.65437 C3.51356 5.10212 3.85593 5.46062 4.30743 5.47225 C4.75481 5.4835 5.13018 5.14075 5.14668 4.70462 C5.16318 4.27 4.78443 3.89575 4.35655 3.88337 Z M7.06481 11.8967 C6.36844 11.8105 5.7343 11.7156 5.0968 11.6616 C4.87668 11.6433 4.61531 11.6695 4.42856 11.7749 C3.80943 12.1244 3.21581 12.5189 2.51231 12.9584 C2.6413 12.3745 2.72493 11.8634 2.87306 11.3714 C2.98181 11.0103 2.93118 10.8089 2.59818 10.5734 C-1.71807 7.52612 -0.356445 1.92025 4.47206 0.342997 C8.23406 -0.886253 12.9553 1.276 13.3434 5.4295 C9.71681 5.61887 6.73931 8.05675 7.06481 11.8967 Z" fill="#3caf41"/><path transform="matrix(1 0 0 1 -80.948 63.942)" d="M5.41501 0 C8.40563 0 10.83 2.44125 10.83 5.45213 C10.83 8.46338 8.40563 10.9043 5.41501 10.9043 C2.42438 10.9043 0 8.46338 0 5.45213 C0 2.44125 2.42438 0 5.41501 0 Z M14.0625 0.319501 C15.558 0.319501 16.77 2.61713 16.77 5.45213 C16.7749 6.13538 16.4846 10.5851 14.0629 10.5851 C12.5674 10.5851 11.355 8.28638 11.355 5.45213 C11.355 2.61788 12.5674 0.319501 14.0625 0.319501 Z M18.2479 0.853876 C18.7736 0.853876 19.2 2.91263 19.2 5.45213 C19.2 7.99088 18.7736 10.0504 18.2479 10.0504 C17.7218 10.0504 17.2958 7.99163 17.2958 5.45213 C17.2958 2.91263 17.7218 0.853876 18.2479 0.853876 Z" fill="#1e1b1e"/><path transform="matrix(1 0 0 1 -53.121 59.794)" d="M7.01325 0.0127487 C5.958 0.0127487 5.09587 0.874874 5.09587 1.93012 C5.09587 2.98537 5.958 3.8475 7.01325 3.8475 L8.931 3.8475 L8.931 1.93012 C8.931 0.874874 8.08162 0.0127487 7.01325 0.0127487 Z M0 12.1609 C0 13.2161 0.862125 14.0783 1.91738 14.0783 C2.97263 14.0783 3.83475 13.2161 3.83475 12.1609 L3.83475 10.2435 L1.91738 10.2435 C0.849375 10.2435 0 11.1056 0 12.1609 Z M5.10862 12.1609 L5.10862 17.2826 C5.10862 18.3379 5.97112 19.2 7.02637 19.2 C8.08162 19.2 8.94375 18.3379 8.94375 17.2826 L8.94375 12.1609 C8.94375 11.1056 8.08162 10.2435 7.02637 10.2435 C5.958 10.2435 5.10862 11.1056 5.10862 12.1609 Z M12.1222 19.2 C13.1775 19.2 14.0396 18.3379 14.0396 17.2826 C14.0396 16.2274 13.1775 15.3653 12.1222 15.3653 L10.2049 15.3653 L10.2049 17.2826 C10.2049 18.3379 11.067 19.2 12.1222 19.2 Z M17.2312 14.0783 C18.2865 14.0783 19.1486 13.2161 19.1486 12.1609 C19.1486 11.1056 18.2865 10.2435 17.2312 10.2435 L12.1222 10.2435 C11.067 10.2435 10.2049 11.1056 10.2049 12.1609 C10.2049 13.2161 11.067 14.0783 12.1222 14.0783 L17.2312 14.0783 Z M19.1486 7.03912 C19.1486 5.98387 18.2865 5.12175 17.2312 5.12175 C16.176 5.12175 15.3135 5.98387 15.3135 7.03912 L15.3135 8.9565 L17.2312 8.9565 C18.2865 8.96962 19.1486 8.10712 19.1486 7.03912 Z M14.0396 7.03912 L14.0396 1.91738 C14.0396 0.862125 13.1775 0 12.1222 0 C11.067 0 10.2049 0.862125 10.2049 1.91738 L10.2049 7.03912 C10.2049 8.09437 11.067 8.9565 12.1222 8.9565 C13.1902 8.96962 14.0396 8.10712 14.0396 7.03912 Z M7.01325 5.12175 L1.91738 5.12175 C0.862125 5.12175 0 5.98387 0 7.03912 C0 8.09437 0.862125 8.9565 1.91738 8.9565 L7.02637 8.9565 C8.08162 8.9565 8.94375 8.09437 8.94375 7.03912 C8.931 5.98387 8.08162 5.12175 7.01325 5.12175 Z" fill="#e01e5a"/><path transform="matrix(1 0 0 1 -53.296 37.688)" d="M19.1998 0.58784 L16.1635 15.8983 C16.1635 15.8983 15.7386 16.96 14.5708 16.4503 L7.53134 11.0627 C8.47746 10.2118 15.8177 3.61334 16.1383 3.31409 C16.6345 2.85097 16.327 2.57534 15.7498 2.92559 L4.90821 9.81022 L0.725462 8.40209 C0.725462 8.40209 0.0673375 8.16884 0.00358748 7.65922 C-0.0601625 7.14959 0.746835 6.87359 0.746835 6.87359 L17.7985 0.184339 C17.7985 0.184339 19.1998 -0.43141 19.1998 0.58784 Z" fill="#23b7ec"/></svg>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Zoom webinar</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>REQ-1028 · Purchase</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$240.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>one-off</p>
            </div>
          </div>
          <div style={{ width: "190px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "142px", height: "10px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="142" height="10" viewBox="0 0 142 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 14 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 58 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 88 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 102 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 132 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "109px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Card issued · 03/04</p>
            </div>
          </div>
          <div style={{ width: "150px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Approved</p>
            </div>
          </div>
          <div style={{ width: "92px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>03/04/2026</p>
          </div>
          <div style={{ width: "38px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "790px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "220px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, borderRadius: "5.38px", background: "#625df5", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>L</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Loom Business</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>REQ-1026 · Subscription</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$180.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>per month</p>
            </div>
          </div>
          <div style={{ width: "190px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "142px", height: "10px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="142" height="10" viewBox="0 0 142 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 14 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 58 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 88 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 102 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 132 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Card issued · 02/04</p>
            </div>
          </div>
          <div style={{ width: "150px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Approved</p>
            </div>
          </div>
          <div style={{ width: "92px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>02/04/2026</p>
          </div>
          <div style={{ width: "38px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "790px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "220px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, position: "relative" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "19.2px", height: "19.2px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Figma seats</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>REQ-1024 · Subscription</p>
              </div>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$144.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>per month</p>
            </div>
          </div>
          <div style={{ width: "190px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "142px", height: "10px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="142" height="10" viewBox="0 0 142 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 14 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 44 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 58 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 88 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 102 4)" d="M0 1 C0 0.447715 0.447715 0 1 0 L25 0 C25.5523 0 26 0.447715 26 1 L26 1 C26 1.55228 25.5523 2 25 2 L1 2 C0.447716 2 0 1.55228 0 1 L0 1 Z" fill="#18b170" fillOpacity="0.5"/><path transform="matrix(1 0 0 1 132 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Card issued · 01/04</p>
            </div>
          </div>
          <div style={{ width: "150px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Approved</p>
            </div>
          </div>
          <div style={{ width: "92px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>01/04/2026</p>
          </div>
          <div style={{ width: "38px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
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
