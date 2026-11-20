"use client";
// Queue list (spendix, Tables and lists) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AlarmClock, Check, ChevronDown, Clock } from "ingotui-icons/react/stroke-rounded";

export function QueueList() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "668px", height: "644px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6.72px", background: "#ff7a59", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>H</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "166px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>HubSpot Starter · 3 seats</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "999px", background: "#ddf2fc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "9px", fontFamily: "'Geist'", fontSize: "7px", fontWeight: 500, color: "#096b97" }}>NK</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "157px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Noah Kim · Sales · REQ-1029</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>$890.00</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>per month</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 28px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "190px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Sales budget</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>26% used</p>
            </div>
            <div style={{ width: "190px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(14, 165, 233, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "48.86px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #32b3ec 0%, #0ea5e9 100%)" }} />
            </div>
          </div>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "13px", background: "#fde4e4", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <AlarmClock size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#c42b2b", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#c42b2b" }}>Over SLA · 27h</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div data-fu="btn" style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Decline</p>
          </div>
          <div data-fu="btn" style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Approve</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6.72px", background: "#e8382a", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 600, color: "#ffffff" }}>A</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Adobe CC · annual plan</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "999px", background: "#ede8ff", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "9px", fontFamily: "'Geist'", fontSize: "7px", fontWeight: 500, color: "#513ca4" }}>MP</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "170px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Maya Patel · Design · REQ-1031</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>$599.88</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>per year</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 28px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "190px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Design budget</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>35% used</p>
            </div>
            <div style={{ width: "190px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(124, 92, 252, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "66.5px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #9074fc 0%, #7c5cfc 100%)" }} />
            </div>
          </div>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "13px", background: "#fde4e4", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <AlarmClock size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#c42b2b", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#c42b2b" }}>Over SLA · 26h</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div data-fu="btn" style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Decline</p>
          </div>
          <div data-fu="btn" style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Approve</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "24px", height: "24px", background: "url('https://ingotui.com/library-img/c1b9ac38b4d88317b1ed300762b915082a72b430.png') center / cover no-repeat" }} />
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "138px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>AWS credits · staging</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "999px", background: "#e0e9fc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "9px", fontFamily: "'Geist'", fontSize: "7px", fontWeight: 500, color: "#184099" }}>SR</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "204px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Sofia Reyes · Engineering · REQ-1039</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>$240.00</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>one-off</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 28px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "190px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Engineering budget</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>22% used</p>
            </div>
            <div style={{ width: "190px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "42px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
            </div>
          </div>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "13px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Clock size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#64748b", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>Waiting 5h</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div data-fu="btn" style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Decline</p>
          </div>
          <div data-fu="btn" style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Approve</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px #e8e8eb", display: "flex", flexDirection: "column", padding: "14px 14px 14px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "24px", height: "24px", background: "url('https://ingotui.com/library-img/31aaca83a4864f35dba467eb853566eebfeb77a6.png') center / cover no-repeat" }} />
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Canva Pro · 2 seats</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "999px", background: "#def5ed", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "9px", fontFamily: "'Geist'", fontSize: "7px", fontWeight: 500, color: "#0a7854" }}>LC</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "186px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Liam Chen · Marketing · REQ-1047</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>$240.00</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>per month</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 28px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "190px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Marketing budget</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>32% used</p>
            </div>
            <div style={{ width: "190px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(16, 185, 129, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "60.17px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #34c394 0%, #10b981 100%)" }} />
            </div>
          </div>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "13px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Clock size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#64748b", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>Waiting 2h</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div data-fu="btn" style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Decline</p>
          </div>
          <div data-fu="btn" style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Approve</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", display: "flex", flexDirection: "column", padding: "15px 15px 15px 15px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "24px", height: "24px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "hidden" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" overflow="hidden"><path transform="matrix(1 0 0 1 0 5.487)" d="M0 0.656234 L0 9.44577 C0.00796875 11.4333 1.63125 13.0326 3.61078 13.0247 L16.4222 13.0247 C16.7864 13.0247 17.0794 12.7317 17.0794 12.3755 L17.0794 3.58639 C17.0714 1.59889 15.4486 -0.000953842 13.4686 0.00701491 L0.657188 0.00701491 C0.292969 0.00701491 0 0.299984 0 0.656234 Z M17.895 4.08514 L23.1844 0.220765 C23.6438 -0.158923 24 -0.0642354 24 0.624827 L24 12.4069 C24 13.1911 23.5645 13.0959 23.1844 12.8109 L17.895 8.95452 L17.895 4.08514 Z" fill="#4a8cff"/><path transform="matrix(1 0 0 1 -219.87 43.634)" d="M9.12001 0.350624 L9.39 1.44188 C8.32792 1.703 7.31144 2.12322 6.37501 2.68828 L5.79751 1.72453 C6.82946 1.10177 7.94961 0.638571 9.12001 0.350624 Z M14.61 1.44188 C15.672 1.70317 16.6885 2.12338 17.625 2.68828 L18.2063 1.72453 C17.1731 1.10143 16.0517 0.638221 14.88 0.350624 L14.61 1.44188 Z M1.72502 5.79703 C1.10173 6.8286 0.638331 7.94866 0.35063 9.11906 L1.44189 9.38906 C1.70306 8.32707 2.12343 7.31072 2.68875 6.37453 L1.72502 5.79703 Z M1.24689 10.3697 L0.135 10.2009 C-0.0450001 11.3928 -0.0450001 12.6049 0.135 13.7967 L1.24689 13.628 C1.08376 12.548 1.08376 11.4497 1.24689 10.3697 Z M17.625 21.3094 C16.6897 21.8742 15.6746 22.2946 14.6138 22.5562 L14.8838 23.6475 C16.0529 23.3591 17.1718 22.8957 18.2025 22.2731 L17.625 21.3094 Z M22.7531 13.628 L23.865 13.7967 C24.045 12.6049 24.045 11.3928 23.865 10.2009 L22.7531 10.3697 C22.9158 11.4469 22.9158 12.5508 22.7531 13.628 Z M22.5581 14.6086 C22.2966 15.6706 21.8762 16.687 21.3113 17.6236 L22.275 18.2048 C22.8981 17.1717 23.3615 16.0503 23.6494 14.8786 L22.5581 14.6086 Z M13.6294 22.7531 C12.5491 22.9158 11.4505 22.9158 10.3702 22.7531 L10.2019 23.865 C11.3939 24.045 12.6061 24.045 13.7981 23.865 L13.6294 22.7531 Z M20.7539 18.4505 C20.1055 19.3288 19.3289 20.1048 18.45 20.7525 L19.1175 21.6581 C20.0871 20.9451 20.9441 20.0906 21.66 19.1231 L20.7539 18.4505 Z M18.45 3.24515 C19.3289 3.89378 20.1055 4.67054 20.7539 5.54953 L21.66 4.87453 C20.9463 3.90771 20.0918 3.05323 19.125 2.33953 L18.45 3.24515 Z M3.24564 5.54953 C3.89413 4.67042 4.67089 3.89364 5.55 3.24515 L4.87501 2.33953 C3.90797 3.05298 3.05345 3.90749 2.34 4.87453 L3.24564 5.54953 Z M21.3113 6.37453 C21.8762 7.30959 22.2965 8.32464 22.5581 9.38531 L23.6494 9.11531 C23.3608 7.94636 22.8975 6.82767 22.275 5.79703 L21.3113 6.37453 Z M10.3702 1.24687 C11.4506 1.08422 12.5489 1.08422 13.6294 1.24687 L13.7981 0.135 C12.6061 -0.045 11.3939 -0.045 10.2019 0.135 L10.3702 1.24687 Z M3.82313 21.9563 L1.50001 22.4981 L2.04188 20.175 L0.94689 19.9181 L0.405012 22.2412 C0.2147 23.0522 0.945942 23.783 1.75688 23.5931 L4.07813 23.0606 L3.82313 21.9563 Z M1.18126 18.9155 L2.27626 19.17 L2.65126 17.5598 C2.10436 16.6413 1.69681 15.6468 1.44189 14.6086 L0.35063 14.8786 C0.595258 15.8728 0.967079 16.8313 1.45688 17.7305 L1.18126 18.9155 Z M4.82062 21.7275 L5.07564 22.8225 L6.26063 22.5469 C7.15975 23.0367 8.11828 23.4085 9.1125 23.6531 L9.38251 22.5619 C8.34665 22.3036 7.35466 21.8935 6.43875 21.345 L4.82062 21.7275 Z M3.47017 7.28578 C1.75502 10.3913 1.86188 14.183 3.75001 17.1867 L2.81251 21.1856 L6.81187 20.2481 C10.3195 22.4573 14.8411 22.207 18.0835 19.6238 C21.3258 17.0405 22.5802 12.6895 21.21 8.77734 C18.4313 0.841406 7.5108 -0.0304663 3.47017 7.28578 Z" fill="#3a76f0"/><path transform="matrix(1 0 0 1 -176.367 43.634)" d="M6.09663 9.67713 C12.7979 7.36713 10.4297 -0.220998 11.1085 0.0049399 C15.4955 2.14994 20.4291 6.82994 20.4291 13.8499 C20.4291 19.2321 16.2563 23.9899 10.1916 23.9899 C4.81178 24.2337 0.252716 20.0726 0.00896586 14.6923 C-0.244628 9.11416 4.96553 5.04588 4.96553 6.04994 C5.01193 6.62182 5.49756 9.67713 6.09663 9.67713 Z" fill="#e73d76" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -138.283 43.701)" d="M12.1116 4.01148 C15.7116 4.22288 17.8195 5.80632 18.0244 7.28429 C18.1242 8.25085 17.482 9.00226 16.3673 9.00226 C14.7389 9.00226 14.573 6.83195 11.7689 6.83195 C10.5047 6.83195 9.43687 7.35788 9.43687 8.49835 C9.43687 10.8815 18.4205 9.49726 18.4205 14.7449 C18.4205 17.7698 15.9994 19.7516 12.3853 19.7516 C9.20671 19.7516 6.01171 18.3107 6.02765 15.8296 C6.03327 15.081 6.59108 14.3943 7.33452 14.3943 C9.20671 14.3943 9.18937 17.1754 12.1702 17.1754 C14.2603 17.1754 14.9742 16.0344 14.9742 15.2394 C14.9742 12.3684 5.93764 14.129 5.93764 8.72898 C5.93764 5.80632 8.33859 3.7907 12.1116 4.01148 Z M14.0831 22.9044 C19.8501 26.3905 26.6025 19.7169 22.9805 13.889 C24.3328 6.16351 17.573 -0.446804 9.93655 0.97304 C4.18452 -2.53134 -2.59735 4.11976 1.00968 9.95898 C-0.36751 17.6263 6.35389 24.3782 14.0831 22.9044 Z" fill="#178cc8" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -101.179 43.634)" d="M0.475777 23.9995 L5.42813 23.9995 L5.42813 7.99969 L0.475777 7.99969 L0.475777 23.9995 Z M13.3453 15.6009 C13.3453 13.3519 14.3808 12.0112 16.3631 12.0112 C18.1842 12.0112 19.0589 13.2975 19.0589 15.6009 L19.0589 24 L23.9888 23.9995 L23.9888 13.8694 C23.9888 9.58359 21.5592 7.51125 18.1669 7.51125 C14.7731 7.51125 13.3453 10.155 13.3453 10.155 L13.3453 7.99969 L8.59453 7.99969 L8.59453 23.9995 L13.3453 23.9995 L13.3453 15.6009 Z M2.92875 5.90484 C4.54594 5.90484 5.85703 4.58203 5.85703 2.95172 C5.85703 1.32188 4.54594 0 2.92875 0 C1.31062 0 0 1.32188 0 2.95172 C0 4.58203 1.31062 5.90484 2.92875 5.90484 Z" fill="#10658f" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -260.469 74.742)" d="M14.8475 0.020153 C14.8484 0.386247 14.9558 5.67703 20.5081 6.00703 C20.5081 7.53281 20.5095 8.63906 20.5095 10.095 C20.089 10.1194 16.8547 9.88453 14.8409 8.08875 L14.8348 16.0472 C14.9112 21.5709 10.8467 24.9319 5.53295 23.7712 C-3.62923 21.0305 -0.584702 7.44141 8.61498 8.89594 C8.61498 13.283 8.61732 8.89453 8.61732 13.283 C4.81716 12.7237 3.54592 15.885 4.5556 18.1491 C5.47482 20.2097 9.25903 20.6569 10.5786 17.7492 C10.7281 17.1802 10.8031 16.5314 10.8031 15.803 L10.8031 0 L14.8475 0.020153 Z" fill="#000000" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -217.206 74.742)" d="M7.67499 15.8734 C7.04499 19.1776 6.27531 22.3454 3.99531 24.0001 C3.29124 19.0061 5.02843 15.2556 5.83515 11.2736 C4.45984 8.9584 6.00064 4.29902 8.90173 5.44746 C12.4713 6.85934 5.81032 14.0551 10.2817 14.9537 C14.9505 15.8917 16.8564 6.85324 13.9619 3.91418 C9.77875 -0.330349 1.78562 3.81715 2.76859 9.89402 C3.00765 11.3795 4.54234 11.83 3.38172 13.8803 C0.704687 13.2868 -0.0940605 11.1756 0.00859574 8.36027 C0.174064 3.75293 4.14859 0.526994 8.13484 0.0807438 C13.1767 -0.483631 17.9083 1.93137 18.5617 6.67371 C19.2972 12.0268 16.2859 17.8239 10.8953 17.4071 C9.43375 17.2932 8.82062 16.5695 7.67499 15.8734 Z" fill="#d0272c"/><path transform="matrix(1 0 0 1 -177.629 74.742)" d="M1.56515 0 L0 4.17375 L0 20.8678 L5.73656 20.8678 L5.73656 24 L8.86828 24 L11.9972 20.8678 L16.6912 20.8678 L22.9519 14.6095 L22.9519 0 L1.56515 0 Z M3.65062 2.08547 L20.8659 2.08547 L20.8659 13.5642 L17.2134 17.2167 L11.4759 17.2167 L8.34796 20.3447 L8.34796 17.2167 L3.65062 17.2167 L3.65062 2.08547 Z M9.38905 12.5222 L11.4759 12.5222 L11.4759 6.26203 L9.38905 6.26203 L9.38905 12.5222 Z M15.127 12.5222 L17.2134 12.5222 L17.2134 6.26203 L15.127 6.26203 L15.127 12.5222 Z" fill="#5a3e85"/><path transform="matrix(1 0 0 1 -138.283 76.409)" d="M11.779 4.85375 C11.2296 4.86359 10.7655 5.3314 10.7754 5.86531 C10.7852 6.4189 11.2409 6.85156 11.8057 6.845 C12.3719 6.83797 12.8013 6.40063 12.7962 5.83531 C12.7915 5.28078 12.3382 4.84343 11.779 4.85375 Z M18.8294 11.2395 C18.394 11.2362 18.0241 11.593 18.0063 12.0331 C17.9876 12.5033 18.3532 12.89 18.8187 12.8909 C19.2691 12.8923 19.6249 12.552 19.6413 12.1034 C19.6587 11.6323 19.293 11.2428 18.8294 11.2395 Z M14.4921 12.1025 C14.5099 11.6333 14.1326 11.2395 13.6624 11.2377 C13.1974 11.2358 12.8074 11.6347 12.8238 12.0969 C12.8388 12.5389 13.211 12.8961 13.6568 12.8966 C14.1016 12.897 14.4748 12.5497 14.4921 12.1025 Z M19.6409 19.8092 C18.9551 19.7375 18.2341 20.1331 17.5169 20.2067 C15.3312 20.4303 13.3732 19.8209 11.7584 18.328 C8.68757 15.4878 9.12632 11.1327 12.679 8.80531 C15.8365 6.73672 20.4673 7.42625 22.6934 10.2964 C24.6363 12.8009 24.408 16.1258 22.0362 18.23 C20.9295 19.212 21.3935 19.5252 21.6813 20.6661 C21.0438 20.382 20.3369 19.8819 19.6409 19.8092 Z M5.44569 4.85422 C4.88553 4.83734 4.42476 5.26578 4.40835 5.81796 C4.39195 6.37765 4.81992 6.82578 5.38429 6.84031 C5.94351 6.85437 6.41273 6.42594 6.43335 5.88078 C6.45398 5.3375 5.98053 4.86969 5.44569 4.85422 Z M8.83101 14.8709 C7.96055 14.7631 7.16788 14.6445 6.371 14.577 C6.09585 14.5541 5.76914 14.5869 5.5357 14.7186 C4.76179 15.1555 4.01976 15.6486 3.14038 16.198 C3.30163 15.4681 3.40617 14.8292 3.59132 14.2142 C3.72726 13.7628 3.66398 13.5111 3.24773 13.2167 C-2.14759 9.40766 -0.445556 2.40031 5.59007 0.428746 C10.2926 -1.10782 16.1941 1.595 16.6793 6.78687 C12.146 7.02359 8.42414 10.0709 8.83101 14.8709 Z" fill="#3caf41"/><path transform="matrix(1 0 0 1 -101.185 79.928)" d="M6.76876 0 C10.507 0 13.5375 3.05156 13.5375 6.81516 C13.5375 10.5792 10.507 13.6303 6.76876 13.6303 C3.03048 13.6303 0 10.5792 0 6.81516 C0 3.05156 3.03048 0 6.76876 0 Z M17.5781 0.399376 C19.4475 0.399376 20.9625 3.27141 20.9625 6.81516 C20.9686 7.66922 20.6058 13.2314 17.5786 13.2314 C15.7092 13.2314 14.1938 10.358 14.1938 6.81516 C14.1938 3.27234 15.7092 0.399376 17.5781 0.399376 Z M22.8098 1.06734 C23.467 1.06734 24 3.64078 24 6.81516 C24 9.98859 23.467 12.563 22.8098 12.563 C22.1522 12.563 21.6197 9.98953 21.6197 6.81516 C21.6197 3.64078 22.1522 1.06734 22.8098 1.06734 Z" fill="#1e1b1e"/><path transform="matrix(1 0 0 1 -66.402 74.742)" d="M8.76656 0.0159359 C7.44749 0.0159359 6.36984 1.09359 6.36984 2.41265 C6.36984 3.73172 7.44749 4.80937 8.76656 4.80937 L11.1637 4.80937 L11.1637 2.41265 C11.1637 1.09359 10.102 0.0159359 8.76656 0.0159359 Z M0 15.2011 C0 16.5202 1.07766 17.5978 2.39672 17.5978 C3.71578 17.5978 4.79343 16.5202 4.79343 15.2011 L4.79343 12.8044 L2.39672 12.8044 C1.06172 12.8044 0 13.882 0 15.2011 Z M6.38578 15.2011 L6.38578 21.6033 C6.38578 22.9223 7.46391 24 8.78297 24 C10.102 24 11.1797 22.9223 11.1797 21.6033 L11.1797 15.2011 C11.1797 13.882 10.102 12.8044 8.78297 12.8044 C7.4475 12.8044 6.38578 13.882 6.38578 15.2011 Z M15.1528 24 C16.4719 24 17.5495 22.9223 17.5495 21.6033 C17.5495 20.2842 16.4719 19.2066 15.1528 19.2066 L12.7561 19.2066 L12.7561 21.6033 C12.7561 22.9223 13.8337 24 15.1528 24 Z M21.5391 17.5978 C22.8581 17.5978 23.9358 16.5202 23.9358 15.2011 C23.9358 13.882 22.8581 12.8044 21.5391 12.8044 L15.1528 12.8044 C13.8337 12.8044 12.7561 13.882 12.7561 15.2011 C12.7561 16.5202 13.8337 17.5978 15.1528 17.5978 L21.5391 17.5978 Z M23.9358 8.7989 C23.9358 7.47984 22.8581 6.40219 21.5391 6.40219 C20.22 6.40219 19.1419 7.47984 19.1419 8.7989 L19.1419 11.1956 L21.5391 11.1956 C22.8581 11.212 23.9358 10.1339 23.9358 8.7989 Z M17.5495 8.7989 L17.5495 2.39672 C17.5495 1.07766 16.4719 0 15.1528 0 C13.8337 0 12.7561 1.07766 12.7561 2.39672 L12.7561 8.7989 C12.7561 10.118 13.8337 11.1956 15.1528 11.1956 C16.4878 11.212 17.5495 10.1339 17.5495 8.7989 Z M8.76656 6.40219 L2.39672 6.40219 C1.07766 6.40219 0 7.47984 0 8.7989 C0 10.118 1.07766 11.1956 2.39672 11.1956 L8.78297 11.1956 C10.102 11.1956 11.1797 10.118 11.1797 8.7989 C11.1637 7.47984 10.102 6.40219 8.76656 6.40219 Z" fill="#e01e5a"/><path transform="matrix(1 0 0 1 -66.62 47.11)" d="M23.9998 0.7348 L20.2043 19.8729 C20.2043 19.8729 19.6732 21.2 18.2135 20.5629 L9.41417 13.8284 C10.5968 12.7648 19.7721 4.51668 20.1729 4.14261 C20.7931 3.56371 20.4087 3.21918 19.6873 3.65699 L6.13527 12.2628 L0.906828 10.5026 C0.906828 10.5026 0.0841718 10.2111 0.00448435 9.57402 C-0.0752031 8.93699 0.933544 8.59198 0.933544 8.59198 L22.2481 0.230424 C22.2481 0.230424 23.9998 -0.539263 23.9998 0.7348 Z" fill="#23b7ec"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Zoom Webinars add-on</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "999px", background: "#def5ed", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "9px", fontFamily: "'Geist'", fontSize: "7px", fontWeight: 500, color: "#0a7854" }}>LC</p>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "187px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Liam Chen · Marketing · REQ-1048</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>$240.00</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>one-off</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 28px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "190px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Marketing budget</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>32% used</p>
            </div>
            <div style={{ width: "190px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(16, 185, 129, 0.12)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "60.17px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #34c394 0%, #10b981 100%)" }} />
            </div>
          </div>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "13px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Clock size={13} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#64748b", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>Waiting 1h</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <div data-fu="btn" style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Decline</p>
          </div>
          <div data-fu="btn" style={{ height: "30px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Approve</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "142px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#64748b" }}>Show 13 more requests</p>
        <ChevronDown size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#64748b", display: "block" }} />
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
