// Reallocate budget modal (spendix, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { ArrowDataTransferHorizontal as ArrowDataTransferHorizontalSolid, CircleCheck as CircleCheckSolid } from "ingotui-icons/react/solid";
import { ArrowDataTransferHorizontal, Check, ChevronDown, ChevronRight, X } from "ingotui-icons/react/stroke-rounded";

export function ReallocateBudgetModal() {
  return (
    <div style={{ width: "560px", height: "807px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0, 0px 20px 44px -12px rgba(13, 13, 18, 0.14), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "20px 20px 17px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ArrowDataTransferHorizontalSolid size={18} strokeWidth={2.25} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#2563eb", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "138px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Reallocate budget</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "438px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>Move unspent April budget between teams. The total stays $25,000.</p>
        </div>
        <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "20px 20px 20px 20px", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>From</p>
            <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "#ddf2fc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#096b97" }}>LM</p>
              </div>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Operations</p>
              <ChevronDown size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
          <div style={{ width: "38px", height: "38px", flexShrink: 0, borderRadius: "19px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #e2e8f0", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <ChevronRight size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#0f172a", display: "block" }} />
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>To</p>
            <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "#def5ed", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#0a7854" }}>LC</p>
              </div>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Marketing</p>
              <ChevronDown size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Amount</p>
            <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #2563eb, 0px 0px 0px 3px rgba(37, 99, 235, 0.16)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#64748b" }}>$</p>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>1,000.00</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "322px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Operations has $1,270 unspent; forecast to 30/04 is $383.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#7d818c" }}>$250</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#7d818c" }}>$500</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px #e8e8eb", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,000</p>
            </div>
            <div style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#7d818c" }}>Max · $1,270</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #e2e8f0", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Before → after</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#c9c9cd", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>Before</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#2563eb", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>After</p>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#ddf2fc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#096b97" }}>LM</p>
              </div>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Operations</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>$1,500  →  $500</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "40px", height: "16px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Before</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>15% used</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "40px", height: "16px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>After</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2bb0ec 0%, #0ea5e9 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(14, 165, 233, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>46% used</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ededed" }} />
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#def5ed", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#0a7854" }}>LC</p>
              </div>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Marketing</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>$6,000</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#94a3b8" }}>{"  →  "}</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$7,000</span>
              </p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "40px", height: "16px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Before</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #acacb1 0%, #a1a1a6 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(161, 161, 166, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>32% used</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ width: "40px", height: "16px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>After</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "linear-gradient(180deg, #2dc190 0%, #10b981 100%)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
                <div style={{ width: "3.2px", height: "12px", flexShrink: 0, borderRadius: "1.6px", background: "rgba(16, 185, 129, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>27% used</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheckSolid size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "305px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#16a34a" }}>Operations' $383 forecast still fits its new $500 budget</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Reason</p>
          <div style={{ alignSelf: "stretch", height: "64px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "11px 13px 11px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Spring campaign launch on 24/04 needs extra paid social.</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#242424", boxShadow: "inset 0 0 0 1px #242424", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "230px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Notify Lucas Martin and Liam Chen</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Logged by Ethan Cole · Finance</p>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Cancel</p>
        </div>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <ArrowDataTransferHorizontal size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Move $1,000</p>
        </div>
      </div>
    </div>
  );
}
