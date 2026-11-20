"use client";
// Approvals page (spendix, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AlarmClock, AlertCircle, AlertTriangle, ArrowsSort, Bell, Briefcase, Calendar, ChartLine, Check, ChevronDown, CircleCheck, Clock, DotsVertical, File, LayoutDashboard, Loader, PlusSignCircle, Search, Settings, SlidersHorizontal, UserCheck, Users, Wallet } from "ingotui-icons/react/stroke-rounded";
import { AlarmClock as AlarmClockSolid, CircleCheck as CircleCheckSolid, Clock as ClockSolid, Send as SendSolid, ShieldCheck as ShieldCheckSolid, SquareRoundedCheck as SquareRoundedCheckSolid, Timer as TimerSolid } from "ingotui-icons/react/solid";

export function ApprovalsPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1440px", height: "1071px", background: "#fcfcfc", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "1440px", height: "1071px", background: "#fcfcfc", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "237.99px", height: "1194.51px", background: "#ffffff", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "20px", top: "20px", width: "125px", height: "46px", display: "flex", flexDirection: "row", gap: "48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "46px", flexShrink: 0, borderRadius: "8px", background: "#000000", backdropFilter: "blur(1.36px)", boxShadow: "inset 0 0 0 1.02px rgba(255, 255, 255, 0.4)", overflow: "hidden", display: "flex", flexDirection: "row", gap: "6.79px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "42.96px", height: "42.96px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="42.96" height="42.96" viewBox="0 0 42.96 42.96" fill="none" overflow="visible"><defs><linearGradient id="g3_vr3z" gradientUnits="userSpaceOnUse" x1="15.65" y1="35.66" x2="9.45" y2="0.00"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/></linearGradient></defs><path transform="matrix(-0.707 0.707 -0.707 -0.707 42.96 25.215)" d="M3.04317e-12 0 L25.095 0 L21.749 35.6592 L3.346 35.6592 L3.04317e-12 0 Z" fill="url(#g3_vr3z)"/></svg>
                <div style={{ width: "30px", height: "36px", flexShrink: 0, filter: "drop-shadow(0px 3px 3px rgba(36, 36, 36, 0.1))", position: "relative" }}>
                  <svg style={{ position: "absolute", left: "0px", top: "3.71px", width: "30px", height: "28.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="30" height="28.57" viewBox="0 0 30 28.57" fill="none" overflow="visible"><defs><linearGradient id="g4_vr40" gradientUnits="userSpaceOnUse" x1="15.00" y1="-0.00" x2="15.00" y2="28.57"><stop offset="0" stopColor="#ffffff" stopOpacity="0.8"/><stop offset="1" stopColor="#ffffff" stopOpacity="0.5"/></linearGradient></defs><path transform="matrix(-1 0 0 1 30 0)" d="M14.7 5.08644e-07 C12.1001 6.20908e-07 10.0002 2.07441 10.0002 4.64271 C10.0002 7.19128 12.1001 9.26565 14.68 9.28542 C14.04 9.26565 13.5401 8.75202 13.5401 8.11979 C13.5401 7.4876 14.0601 6.9542 14.72 6.9542 C17.5199 6.9542 23.7398 6.9542 26.4797 6.9542 C28.4196 6.9542 29.9995 5.39346 29.9995 3.47712 C29.9995 1.56074 28.4196 -8.37659e-08 26.4797 0 L14.7 5.08644e-07 Z" fill="url(#g4_vr40)"/><path transform="matrix(-1 0 0 1 30 0)" d="M8.98585 9.2854 C6.38593 9.2854 4.286 11.3598 4.286 13.9281 C4.286 16.4767 6.38593 18.551 8.96584 18.5708 C8.32586 18.551 7.82589 18.0374 7.82589 17.4052 C7.82589 16.773 8.34588 16.2396 9.00587 16.2396 C11.8057 16.2396 18.0256 16.2396 20.7655 16.2396 C22.7054 16.2396 24.2854 14.6789 24.2854 12.7625 C24.2854 10.8461 22.7054 9.2854 20.7655 9.2854 L8.98585 9.2854 Z" fill="url(#g4_vr40)"/><path transform="matrix(-1 0 0 1 30 0)" d="M5.03556 18.5708 C2.24993 18.5708 -8.11757e-08 20.8048 0 23.5707 C8.05519e-08 26.3153 2.24993 28.5492 5.01411 28.5705 C4.32843 28.5492 3.79274 27.9961 3.79274 27.3152 C3.79274 26.6344 4.34987 26.06 5.057 26.06 C8.05688 26.06 14.721 26.06 17.6566 26.06 C19.7351 26.06 21.4279 24.3792 21.4279 22.3154 C21.4279 20.2516 19.7351 18.5708 17.6566 18.5708 L5.03556 18.5708 Z" fill="url(#g4_vr40)"/></svg>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#0f172a", lineHeight: "1.399999976158142" }}>Spendix</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "58px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c", lineHeight: "1.5", letterSpacing: "0.02em" }}>Enterprise</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "20px", top: "95px", width: "211.99px", height: "485.99px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "10px 10px 10px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "85px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6" }}>WORKSPACE</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", gap: "10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <LayoutDashboard size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#646871" }}>Dashboard</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <PlusSignCircle size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "88px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#646871" }}>New Request</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "93px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <AlertTriangle size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "48px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#646871" }}>Review</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Wallet size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "39px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#646871" }}>Cards</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #e9e9e9", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "70px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <SquareRoundedCheckSolid size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#000000", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "66px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#000000" }}>Approvals</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "70px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Briefcase size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "91px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#646871" }}>Subscriptions</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "70px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <File size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "84px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#646871" }}>Transactions</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "4px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Settings size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "108px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#646871" }}>System Settings</p>
                    </div>
                  </div>
                </div>
              </div>
              <svg style={{ width: "211.99px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="211.99" height="1" viewBox="0 0 211.99 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.499984 L0 5.55112e-17 L211.993 5.55112e-17 L211.993 -0.499984 L211.993 -0.999968 L0 -0.999968 L0 -0.499984 Z" fill="#e8e8e8"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Users size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "86px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#646871" }}>My Requests</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Calendar size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "55px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#646871" }}>My Card</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", height: "36px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "70px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ChartLine size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "101px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#646871" }}>Team Spending</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg style={{ position: "absolute", left: "246.16px", top: "0px", width: "1px", height: "1679px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="1679" viewBox="0 0 1 1679" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.702778 L0 0 L1679 0 L1679 -0.702778 L1679 -1.40556 L0 -1.40556 L0 -0.702778 Z" fill="#ececec"/></svg>
        <div style={{ position: "absolute", left: "246.87px", top: "19.92px", width: "1192.96px", height: "52px", display: "flex", flexDirection: "column", gap: "18px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "1153.96px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "274.28px", flexShrink: 0, borderRadius: "9.14px", background: "#ffffff", boxShadow: "inset 0 0 0 0.76px #d6d6d6", display: "flex", flexDirection: "row", padding: "9px 9.1px 9px 9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.05px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Search size={10.7} strokeWidth={2.56} style={{ width: "10.67px", height: "10.67px", flexShrink: 0, color: "#64748b", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "209px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>Search vendors, cards, transactions...</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9.6px", background: "#ffffff", boxShadow: "inset 0 0 0 0.8px #d6d6d6", overflow: "hidden", position: "relative" }}>
                <Bell size={19.2} style={{ position: "absolute", left: "6.4px", top: "6.8px", width: "19.2px", height: "19.2px", color: "#686765", display: "block", flexShrink: 0 }} />
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9.6px", background: "#ffffff", boxShadow: "inset 0 0 0 0.8px #d6d6d6", overflow: "hidden", position: "relative" }}>
                <svg style={{ position: "absolute", left: "6.4px", top: "6.8px", width: "19.2px", height: "19.2px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="19.2" height="19.2" viewBox="0 0 19.2 19.2" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 6.8 6.8)" d="M5.59982 2.79991 L4.99984 2.79991 C4.99984 4.0149 4.0149 4.99984 2.79991 4.99984 L2.79991 5.59982 L2.79991 6.1998 C4.67762 6.1998 6.1998 4.67762 6.1998 2.79991 L5.59982 2.79991 Z M2.79991 5.59982 L2.79991 4.99984 C1.58492 4.99984 0.599981 4.0149 0.599981 2.79991 L0 2.79991 L-0.599981 2.79991 C-0.599981 4.67762 0.9222 6.1998 2.79991 6.1998 L2.79991 5.59982 Z M0 2.79991 L0.599981 2.79991 C0.599981 1.58492 1.58492 0.599981 2.79991 0.599981 L2.79991 0 L2.79991 -0.599981 C0.9222 -0.599981 -0.599981 0.9222 -0.599981 2.79991 L0 2.79991 Z M2.79991 0 L2.79991 0.599981 C4.0149 0.599981 4.99984 1.58492 4.99984 2.79991 L5.59982 2.79991 L6.1998 2.79991 C6.1998 0.9222 4.67762 -0.599981 2.79991 -0.599981 L2.79991 0 Z" fill="#686765"/><path transform="matrix(1 0 0 1 1.599 2.151)" d="M15.2083 9.1256 L15.0521 8.5463 L15.052 8.54633 L15.2083 9.1256 Z M15.917 8.84905 L15.4408 8.48404 L15.4405 8.48443 L15.917 8.84905 Z M15.917 6.04794 L15.4407 6.41277 L15.4408 6.41295 L15.917 6.04794 Z M15.2083 5.77137 L15.0521 6.35065 L15.0521 6.35066 L15.2083 5.77137 Z M13.0742 2.16931 L13.6549 2.32018 L13.6549 2.32014 L13.0742 2.16931 Z M12.6794 1.02142 L12.3831 1.54317 L12.3832 1.54319 L12.6794 1.02142 Z M11.2996 0.238063 L11.0034 0.759803 L11.0034 0.759813 L11.2996 0.238063 Z M10.7194 0.00246206 L10.7995 0.597077 L10.7995 0.597071 L10.7194 0.00246206 Z M10.1334 0.471655 L9.70975 0.0468414 L9.70969 0.0469026 L10.1334 0.471655 Z M5.86729 0.471583 L6.29103 0.0468263 L6.29103 0.0468257 L5.86729 0.471583 Z M5.28138 0.00238214 L5.3615 -0.592225 L5.36147 -0.592229 L5.28138 0.00238214 Z M4.70108 0.237983 L4.40485 -0.283771 L4.40484 -0.283766 L4.70108 0.237983 Z M3.32137 1.02135 L3.6176 1.5431 L3.6176 1.5431 L3.32137 1.02135 Z M2.81334 1.40476 L3.36591 1.63852 L3.36591 1.6385 L2.81334 1.40476 Z M2.92651 2.16926 L3.50723 2.01847 L3.50723 2.01847 L2.92651 2.16926 Z M0.791191 5.77138 L0.947365 6.35068 L0.947387 6.35068 L0.791191 5.77138 Z M0.0824614 6.04785 L-0.393733 5.68287 L-0.393881 5.68306 L0.0824614 6.04785 Z M0.0824614 8.84905 L0.558821 8.48427 L0.558673 8.48408 L0.0824614 8.84905 Z M0.791191 9.1256 L0.947419 8.54631 L0.947363 8.5463 L0.791191 9.1256 Z M2.92528 12.7276 L2.34458 12.5768 L2.34458 12.5768 L2.92528 12.7276 Z M2.81204 13.4921 L2.25943 13.7258 L2.25944 13.7258 L2.81204 13.4921 Z M3.3201 13.8755 L3.61634 13.3538 L3.61625 13.3537 L3.3201 13.8755 Z M4.69981 14.6589 L4.40356 15.1807 L4.40364 15.1807 L4.69981 14.6589 Z M5.86598 14.4253 L6.28977 14.85 L6.28978 14.85 L5.86598 14.4253 Z M10.1348 14.4252 L10.5587 14.0005 L10.5586 14.0005 L10.1348 14.4252 Z M10.7206 14.8945 L10.8007 14.2998 L10.8007 14.2998 L10.7206 14.8945 Z M11.3009 14.6589 L11.5971 15.1806 L11.5972 15.1806 L11.3009 14.6589 Z M12.6806 13.8754 L12.3845 13.3536 L12.3844 13.3537 L12.6806 13.8754 Z M13.1887 13.492 L12.6361 13.2583 L12.636 13.2586 L13.1887 13.492 Z M13.0754 12.7276 L13.6561 12.5766 L13.6561 12.5766 L13.0754 12.7276 Z M15.2083 9.1256 L15.3645 9.7049 C15.5624 9.65154 15.7486 9.60189 15.893 9.5495 C16.023 9.50233 16.2404 9.41374 16.3935 9.21366 L15.917 8.84905 L15.4405 8.48443 C15.4797 8.43322 15.5178 8.40956 15.5259 8.40479 C15.5323 8.40101 15.5232 8.40714 15.4837 8.42148 C15.3987 8.45232 15.2717 8.4871 15.0521 8.5463 L15.2083 9.1256 Z M15.917 8.84905 L16.3932 9.21406 C16.534 9.03035 16.5713 8.82897 16.586 8.68652 C16.6002 8.54849 16.5995 8.38203 16.5995 8.22195 L15.9995 8.22195 L15.3995 8.22195 C15.3995 8.31023 15.3995 8.37967 15.3983 8.43929 C15.3972 8.49919 15.395 8.53767 15.3924 8.56351 C15.3864 8.62113 15.3825 8.56015 15.4408 8.48404 L15.917 8.84905 Z M15.9995 8.22195 L16.5995 8.22195 L16.5995 6.67503 L15.9995 6.67503 L15.3995 6.67503 L15.3995 8.22195 L15.9995 8.22195 Z M15.9995 6.67503 L16.5995 6.67503 C16.5995 6.51495 16.6002 6.34849 16.586 6.21046 C16.5713 6.06801 16.534 5.86663 16.3932 5.68292 L15.917 6.04794 L15.4408 6.41295 C15.3825 6.33683 15.3864 6.27585 15.3924 6.33348 C15.395 6.35931 15.3972 6.39779 15.3983 6.45769 C15.3995 6.51731 15.3995 6.58675 15.3995 6.67503 L15.9995 6.67503 Z M15.917 6.04794 L16.3933 5.6831 C16.2402 5.48324 16.023 5.39469 15.893 5.34749 C15.7486 5.2951 15.5624 5.24544 15.3645 5.19207 L15.2083 5.77137 L15.0521 6.35066 C15.2717 6.40987 15.3987 6.44465 15.4837 6.47549 C15.5232 6.48983 15.5323 6.49596 15.5259 6.4922 C15.5178 6.48745 15.4798 6.46385 15.4407 6.41277 L15.917 6.04794 Z M15.2083 5.77137 L15.3645 5.19208 C14.1115 4.85417 13.3377 3.54111 13.6549 2.32018 L13.0742 2.16931 L12.4935 2.01845 C12.0053 3.89764 13.1846 5.84701 15.0521 6.35065 L15.2083 5.77137 Z M13.0742 2.16931 L13.6549 2.32014 C13.7075 2.11774 13.7571 1.92892 13.7834 1.77606 C13.8069 1.63993 13.8388 1.40462 13.74 1.17114 L13.1874 1.40487 L12.6348 1.63861 C12.6092 1.57794 12.6078 1.53248 12.6077 1.52411 C12.6076 1.51746 12.6083 1.52938 12.6009 1.57217 C12.5851 1.66371 12.5517 1.79459 12.4935 2.01849 L13.0742 2.16931 Z M13.1874 1.40487 L13.74 1.17114 C13.6496 0.957303 13.492 0.825139 13.3753 0.742079 C13.2619 0.661325 13.116 0.579384 12.9756 0.499653 L12.6794 1.02142 L12.3832 1.54319 C12.4605 1.5871 12.5214 1.62171 12.5732 1.65241 C12.6251 1.68325 12.6579 1.70437 12.6795 1.71968 C12.7277 1.75402 12.6724 1.72743 12.6348 1.63861 L13.1874 1.40487 Z M12.6794 1.02142 L12.9756 0.499672 L11.5959 -0.283688 L11.2996 0.238063 L11.0034 0.759813 L12.3831 1.54317 L12.6794 1.02142 Z M11.2996 0.238063 L11.5959 -0.283677 C11.4584 -0.361768 11.3153 -0.443877 11.1892 -0.499245 C11.0586 -0.556565 10.8668 -0.622801 10.6393 -0.592147 L10.7194 0.00246206 L10.7995 0.597071 C10.7056 0.609725 10.655 0.576757 10.7068 0.59947 C10.7301 0.609714 10.7641 0.626565 10.8161 0.65477 C10.8678 0.68285 10.9275 0.716692 11.0034 0.759803 L11.2996 0.238063 Z M10.7194 0.00246206 L10.6394 -0.592153 C10.392 -0.558846 10.2086 -0.416829 10.1032 -0.32816 C9.98691 -0.23034 9.85255 -0.0955716 9.70975 0.0468414 L10.1334 0.471655 L10.5571 0.896469 C10.7159 0.738091 10.8077 0.647263 10.8756 0.590184 C10.9071 0.563719 10.9164 0.559229 10.9097 0.563054 C10.9012 0.567891 10.8622 0.58863 10.7995 0.597077 L10.7194 0.00246206 Z M10.1334 0.471655 L9.70969 0.0469026 C8.77658 0.97781 7.22423 0.977799 6.29103 0.0468263 L5.86729 0.471583 L5.44354 0.89634 C6.84509 2.29454 9.15566 2.29463 10.5572 0.896408 L10.1334 0.471655 Z M5.86729 0.471583 L6.29103 0.0468257 C6.14824 -0.0956243 6.01389 -0.23039 5.89757 -0.328228 C5.79215 -0.416897 5.60881 -0.5589 5.3615 -0.592225 L5.28138 0.00238214 L5.20125 0.596989 C5.13852 0.588536 5.09958 0.567793 5.09106 0.562964 C5.08432 0.559144 5.09372 0.563639 5.12518 0.5901 C5.19302 0.647161 5.28482 0.737992 5.44354 0.896341 L5.86729 0.471583 Z M5.28138 0.00238214 L5.36147 -0.592229 C5.13397 -0.622873 4.94217 -0.55666 4.8116 -0.499336 C4.68549 -0.443971 4.54239 -0.361863 4.40485 -0.283771 L4.70108 0.237983 L4.9973 0.759736 C5.07324 0.716625 5.13289 0.682784 5.18466 0.654704 C5.23665 0.626498 5.27064 0.609647 5.29397 0.599402 C5.3457 0.576691 5.29516 0.609638 5.20128 0.596993 L5.28138 0.00238214 Z M4.70108 0.237983 L4.40484 -0.283766 L3.02513 0.499602 L3.32137 1.02135 L3.6176 1.5431 L4.99731 0.759731 L4.70108 0.237983 Z M3.32137 1.02135 L3.02513 0.499599 C2.88474 0.579309 2.73892 0.661243 2.62549 0.741971 C2.50885 0.824985 2.35123 0.957146 2.26076 1.17102 L2.81334 1.40476 L3.36591 1.6385 C3.32831 1.72739 3.27299 1.75399 3.32129 1.71961 C3.34281 1.70429 3.37564 1.68317 3.42762 1.65232 C3.47936 1.62162 3.54026 1.58701 3.6176 1.5431 L3.32137 1.02135 Z M2.81334 1.40476 L2.26077 1.171 C2.16199 1.40449 2.19386 1.63981 2.21732 1.77593 C2.24367 1.92879 2.29322 2.11763 2.34578 2.32005 L2.92651 2.16926 L3.50723 2.01847 C3.44909 1.79455 3.41562 1.66365 3.39984 1.57209 C3.39246 1.52929 3.39316 1.51736 3.39308 1.52401 C3.39299 1.53237 3.39158 1.57783 3.36591 1.63852 L2.81334 1.40476 Z M2.92651 2.16926 L2.34578 2.32004 C2.66276 3.54084 1.88846 4.85412 0.634996 5.19209 L0.791191 5.77138 L0.947387 6.35068 C2.81495 5.84712 3.99522 3.89789 3.50723 2.01847 L2.92651 2.16926 Z M0.791191 5.77138 L0.635017 5.19208 C0.437081 5.24545 0.250965 5.29509 0.106604 5.34746 C-0.0233998 5.39461 -0.240625 5.48311 -0.393733 5.68287 L0.0824614 6.04785 L0.558656 6.41284 C0.519496 6.46393 0.481502 6.48752 0.473461 6.49225 C0.4671 6.49599 0.476225 6.48985 0.51577 6.4755 C0.60078 6.44467 0.727795 6.40988 0.947365 6.35068 L0.791191 5.77138 Z M0.0824614 6.04785 L-0.393881 5.68306 C-0.534541 5.86673 -0.571835 6.068 -0.586514 6.21047 C-0.600735 6.3485 -0.599981 6.51495 -0.599981 6.67503 L0 6.67503 L0.599981 6.67503 C0.599981 6.58675 0.600004 6.51731 0.601157 6.45768 C0.602316 6.39779 0.604466 6.3593 0.60713 6.33345 C0.613066 6.27583 0.617002 6.33666 0.558804 6.41265 L0.0824614 6.04785 Z M0 6.67503 L-0.599981 6.67503 L-0.599981 8.22195 L0 8.22195 L0.599981 8.22195 L0.599981 6.67503 L0 6.67503 Z M0 8.22195 L-0.599981 8.22195 C-0.599981 8.38203 -0.600735 8.54849 -0.586514 8.68651 C-0.571837 8.82894 -0.53454 9.03031 -0.39375 9.21401 L0.0824614 8.84905 L0.558673 8.48408 C0.617002 8.56019 0.613068 8.62116 0.607129 8.56352 C0.604466 8.53767 0.602316 8.49919 0.601157 8.4393 C0.600004 8.37967 0.599981 8.31023 0.599981 8.22195 L0 8.22195 Z M0.0824614 8.84905 L-0.393898 9.21382 C-0.240801 9.41375 -0.0235015 9.50232 0.106553 9.5495 C0.250942 9.60189 0.43709 9.65154 0.63502 9.7049 L0.791191 9.1256 L0.947363 8.5463 C0.727777 8.4871 0.600787 8.45232 0.515803 8.42148 C0.476275 8.40714 0.467182 8.40101 0.473576 8.40477 C0.481659 8.40953 0.51967 8.43315 0.558821 8.48427 L0.0824614 8.84905 Z M0.791191 9.1256 L0.634963 9.70488 C1.88796 10.0428 2.66175 11.3559 2.34458 12.5768 L2.92528 12.7276 L3.50599 12.8785 C3.99416 10.9994 2.81493 9.04996 0.947419 8.54631 L0.791191 9.1256 Z M2.92528 12.7276 L2.34458 12.5768 C2.292 12.7792 2.24242 12.968 2.21606 13.1209 C2.19257 13.257 2.16071 13.4923 2.25943 13.7258 L2.81204 13.4921 L3.36465 13.2584 C3.39029 13.3191 3.3917 13.3645 3.3918 13.3729 C3.39187 13.3795 3.39118 13.3676 3.39856 13.3248 C3.41435 13.2333 3.44783 13.1024 3.50599 12.8785 L2.92528 12.7276 Z M2.81204 13.4921 L2.25944 13.7258 C2.3499 13.9397 2.50749 14.0719 2.6242 14.1549 C2.73767 14.2357 2.88351 14.3176 3.02394 14.3973 L3.3201 13.8755 L3.61625 13.3537 C3.53892 13.3098 3.47802 13.2752 3.4263 13.2446 C3.37433 13.2137 3.34151 13.1926 3.32001 13.1773 C3.27176 13.143 3.32706 13.1696 3.36464 13.2584 L2.81204 13.4921 Z M3.3201 13.8755 L3.02385 14.3973 L4.40356 15.1807 L4.69981 14.6589 L4.99606 14.1372 L3.61634 13.3538 L3.3201 13.8755 Z M4.69981 14.6589 L4.40364 15.1807 C4.54117 15.2588 4.68426 15.3409 4.81036 15.3962 C4.94091 15.4536 5.13272 15.5198 5.36024 15.4891 L5.28015 14.8945 L5.20007 14.2999 C5.29395 14.2873 5.34448 14.3202 5.29272 14.2975 C5.26938 14.2873 5.23539 14.2704 5.18337 14.2422 C5.13159 14.2141 5.07193 14.1803 4.99598 14.1372 L4.69981 14.6589 Z M5.28015 14.8945 L5.36024 15.4891 C5.60766 15.4558 5.79105 15.3137 5.89642 15.225 C6.01271 15.1272 6.14704 14.9924 6.28977 14.85 L5.86598 14.4253 L5.4422 14.0006 C5.28348 14.1589 5.19171 14.2498 5.12386 14.3069 C5.0924 14.3333 5.08301 14.3378 5.08976 14.334 C5.09829 14.3292 5.13727 14.3084 5.20007 14.2999 L5.28015 14.8945 Z M5.86598 14.4253 L6.28978 14.85 C7.22355 13.9182 8.77718 13.9181 9.71102 14.8499 L10.1348 14.4252 L10.5586 14.0005 C9.15633 12.6013 6.84433 12.6014 5.44218 14.0006 L5.86598 14.4253 Z M10.1348 14.4252 L9.71094 14.8498 C9.8537 14.9923 9.98803 15.1271 10.1044 15.225 C10.2098 15.3137 10.3932 15.4558 10.6406 15.4891 L10.7206 14.8945 L10.8007 14.2998 C10.8634 14.3083 10.9024 14.329 10.9109 14.3339 C10.9177 14.3377 10.9083 14.3332 10.8769 14.3068 C10.8091 14.2497 10.7173 14.1589 10.5587 14.0005 L10.1348 14.4252 Z M10.7206 14.8945 L10.6405 15.4891 C10.868 15.5197 11.0599 15.4535 11.1904 15.3962 C11.3165 15.3408 11.4596 15.2587 11.5971 15.1806 L11.3009 14.6589 L11.0047 14.1371 C10.9288 14.1802 10.8691 14.214 10.8174 14.2421 C10.7654 14.2703 10.7314 14.2872 10.708 14.2974 C10.6562 14.3202 10.7068 14.2872 10.8007 14.2998 L10.7206 14.8945 Z M11.3009 14.6589 L11.5972 15.1806 L12.9769 14.3972 L12.6806 13.8754 L12.3844 13.3537 L11.0047 14.1371 L11.3009 14.6589 Z M12.6806 13.8754 L12.9768 14.3973 C13.1172 14.3176 13.2631 14.2356 13.3766 14.1549 C13.4933 14.0718 13.651 13.9395 13.7414 13.7254 L13.1887 13.492 L12.636 13.2586 C12.6736 13.1696 12.729 13.1429 12.6808 13.1772 C12.6593 13.1925 12.6265 13.2136 12.5745 13.2445 C12.5228 13.2751 12.4619 13.3097 12.3845 13.3536 L12.6806 13.8754 Z M13.1887 13.492 L13.7413 13.7257 C13.84 13.4922 13.8082 13.257 13.7847 13.1208 C13.7583 12.9679 13.7087 12.7791 13.6561 12.5766 L13.0754 12.7276 L12.4947 12.8785 C12.5529 13.1024 12.5864 13.2332 12.6022 13.3248 C12.6096 13.3675 12.6089 13.3795 12.609 13.3728 C12.6091 13.3644 12.6105 13.319 12.6361 13.2583 L13.1887 13.492 Z M13.0754 12.7276 L13.6561 12.5766 C13.3387 11.3556 14.112 10.0428 15.3646 9.70487 L15.2083 9.1256 L15.052 8.54633 C13.1846 9.05013 12.0064 10.9996 12.4947 12.8785 L13.0754 12.7276 Z" fill="#686765"/></svg>
              </div>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9.6px", background: "#ffffff", boxShadow: "inset 0 0 0 0.8px #d6d6d6, 0px 3.2px 3.2px 0px rgba(0, 0, 0, 0.05), inset 0px 3.2px 3.2px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "1.39px", width: "33.6px", height: "41.21px", background: "url('https://ingotui.com/library-img/2d4d9c51da2eb70f800a86722fd0745b45c7d8e1.png') center / cover no-repeat" }} />
              </div>
            </div>
          </div>
          <svg style={{ width: "1192.96px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="1192.96" height="1" viewBox="0 0 1192.96 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.499984 L0 0 L1192.96 0 L1192.96 -0.499984 L1192.96 -0.999968 L0 -0.999968 L0 -0.499984 Z" fill="#e8e8e8"/></svg>
        </div>
        <svg style={{ position: "absolute", left: "246.87px", top: "157.54px", width: "1676.83px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1676.83" height="1" viewBox="0 0 1676.83 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.702778 L0 0 L1676.83 0 L1676.83 -0.702778 L1676.83 -1.40556 L0 -1.40556 L0 -0.702778 Z" fill="#e8e8e8"/></svg>
      </div>
      <div style={{ position: "absolute", left: "266px", top: "178px", width: "1154px", height: "893px" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "278px", height: "137px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "20px", top: "20px", width: "238px", height: "95px", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25px", height: "25px", flexShrink: 0, borderRadius: "8px", background: "#f59e0b", boxShadow: "inset 0 0 0 1px #ededed, 0px 4px 8px 0px rgba(0, 0, 0, 0.08), inset 0px 3px 2px 0px rgba(255, 255, 255, 0.49)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <ClockSolid size={12.5} style={{ width: "12.5px", height: "12.5px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Waiting on you</p>
              </div>
              <DotsVertical size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#0f172a" }}>18</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "149px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#0f172a" }}>$4,960 requested · 6 today</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "292px", top: "0px", width: "278px", height: "137px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "20px", top: "20px", width: "238px", height: "95px", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25px", height: "25px", flexShrink: 0, borderRadius: "8px", background: "#2bc48b", boxShadow: "inset 0 0 0 1px #ededed, 0px 4px 8px 0px rgba(0, 0, 0, 0.08), inset 0px 3px 2px 0px rgba(255, 255, 255, 0.49)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <TimerSolid size={12.5} style={{ width: "12.5px", height: "12.5px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "154px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Avg. time to approve</p>
              </div>
              <DotsVertical size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#0f172a" }}>3.2h</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "9px", height: "7.5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="9" height="7.5" viewBox="0 0 9 7.5" fill="none" overflow="visible"><path transform="matrix(-1 0 0 -1 9 7.5)" d="M4.5 0 L8.39711 5.625 L0.602886 5.625 L4.5 0 Z" fill="#18b170"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#18b170" }}>0.6h</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#0f172a" }}>faster than March</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "584px", top: "0px", width: "278px", height: "137px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "20px", top: "20px", width: "238px", height: "95px", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25px", height: "25px", flexShrink: 0, borderRadius: "8px", background: "#0474f3", boxShadow: "inset 0 0 0 1px #ededed, 0px 4px 8px 0px rgba(0, 0, 0, 0.08), inset 0px 3px 2px 0px rgba(255, 255, 255, 0.49)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <CircleCheckSolid size={12.5} style={{ width: "12.5px", height: "12.5px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Approved this month</p>
              </div>
              <DotsVertical size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#0f172a" }}>181</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "132px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#0f172a" }}>96% approved first time</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "876px", top: "0px", width: "278px", height: "137px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "20px", top: "20px", width: "238px", height: "95px", display: "flex", flexDirection: "column", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "25px", height: "25px", flexShrink: 0, borderRadius: "8px", background: "#e5484d", boxShadow: "inset 0 0 0 1px #ededed, 0px 4px 8px 0px rgba(0, 0, 0, 0.08), inset 0px 3px 2px 0px rgba(255, 255, 255, 0.49)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <AlarmClockSolid size={12.5} style={{ width: "12.5px", height: "12.5px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Over SLA</p>
              </div>
              <DotsVertical size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#c4c4c4", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#0f172a" }}>2</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#0f172a" }}>Waiting more than 24h</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "151px", width: "700px", height: "722px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "700px", height: "48px", boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 16px 1px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Queue</p>
              <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>18</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", display: "flex", flexDirection: "row", padding: "4px 4px 4px 4px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div data-fu="tab" style={{ height: "26px", flexShrink: 0, borderRadius: "7px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px #e9e9e9", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#000000" }}>All</p>
                  <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#e0e7ff", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb" }}>18</p>
                  </div>
                </div>
                <div data-fu="tab" style={{ height: "26px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#646871" }}>Over SLA</p>
                  <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>2</p>
                  </div>
                </div>
                <div data-fu="tab" style={{ height: "26px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#646871" }}>Over $500</p>
                  <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>3</p>
                  </div>
                </div>
              </div>
              <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ArrowsSort size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#7d818c" }}>Oldest first</p>
                <ChevronDown size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "64px", width: "668px", height: "644px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
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
                  <svg style={{ width: "24px", height: "24px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "hidden" }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" overflow="hidden"><path transform="matrix(1 0 0 1 0 5.488)" d="M0 0.656234 L0 9.44577 C0.00796875 11.4333 1.63125 13.0326 3.61078 13.0247 L16.4222 13.0247 C16.7864 13.0247 17.0794 12.7317 17.0794 12.3755 L17.0794 3.58639 C17.0714 1.59889 15.4486 -0.000953842 13.4686 0.00701491 L0.657188 0.00701491 C0.292969 0.00701491 0 0.299984 0 0.656234 Z M17.895 4.08514 L23.1844 0.220765 C23.6438 -0.158923 24 -0.0642354 24 0.624827 L24 12.4069 C24 13.1911 23.5645 13.0959 23.1844 12.8109 L17.895 8.95452 L17.895 4.08514 Z" fill="#4a8cff"/><path transform="matrix(1 0 0 1 -219.87 43.635)" d="M9.12001 0.350624 L9.39 1.44188 C8.32792 1.703 7.31144 2.12322 6.37501 2.68828 L5.79751 1.72453 C6.82946 1.10177 7.94961 0.638571 9.12001 0.350624 Z M14.61 1.44188 C15.672 1.70317 16.6885 2.12338 17.625 2.68828 L18.2063 1.72453 C17.1731 1.10143 16.0517 0.638221 14.88 0.350624 L14.61 1.44188 Z M1.72502 5.79703 C1.10173 6.8286 0.638331 7.94866 0.35063 9.11906 L1.44189 9.38906 C1.70306 8.32707 2.12343 7.31072 2.68875 6.37453 L1.72502 5.79703 Z M1.24689 10.3697 L0.135 10.2009 C-0.0450001 11.3928 -0.0450001 12.6049 0.135 13.7967 L1.24689 13.628 C1.08376 12.548 1.08376 11.4497 1.24689 10.3697 Z M17.625 21.3094 C16.6897 21.8742 15.6746 22.2946 14.6138 22.5562 L14.8838 23.6475 C16.0529 23.3591 17.1718 22.8957 18.2025 22.2731 L17.625 21.3094 Z M22.7531 13.628 L23.865 13.7967 C24.045 12.6049 24.045 11.3928 23.865 10.2009 L22.7531 10.3697 C22.9158 11.4469 22.9158 12.5508 22.7531 13.628 Z M22.5581 14.6086 C22.2966 15.6706 21.8762 16.687 21.3113 17.6236 L22.275 18.2048 C22.8981 17.1717 23.3615 16.0503 23.6494 14.8786 L22.5581 14.6086 Z M13.6294 22.7531 C12.5491 22.9158 11.4505 22.9158 10.3702 22.7531 L10.2019 23.865 C11.3939 24.045 12.6061 24.045 13.7981 23.865 L13.6294 22.7531 Z M20.7539 18.4505 C20.1055 19.3288 19.3289 20.1048 18.45 20.7525 L19.1175 21.6581 C20.0871 20.9451 20.9441 20.0906 21.66 19.1231 L20.7539 18.4505 Z M18.45 3.24515 C19.3289 3.89378 20.1055 4.67054 20.7539 5.54953 L21.66 4.87453 C20.9463 3.90771 20.0918 3.05323 19.125 2.33953 L18.45 3.24515 Z M3.24564 5.54953 C3.89413 4.67042 4.67089 3.89364 5.55 3.24515 L4.87501 2.33953 C3.90797 3.05298 3.05345 3.90749 2.34 4.87453 L3.24564 5.54953 Z M21.3113 6.37453 C21.8762 7.30959 22.2965 8.32464 22.5581 9.38531 L23.6494 9.11531 C23.3608 7.94636 22.8975 6.82767 22.275 5.79703 L21.3113 6.37453 Z M10.3702 1.24687 C11.4506 1.08422 12.5489 1.08422 13.6294 1.24687 L13.7981 0.135 C12.6061 -0.045 11.3939 -0.045 10.2019 0.135 L10.3702 1.24687 Z M3.82313 21.9563 L1.50001 22.4981 L2.04188 20.175 L0.94689 19.9181 L0.405012 22.2412 C0.2147 23.0522 0.945942 23.783 1.75688 23.5931 L4.07813 23.0606 L3.82313 21.9563 Z M1.18126 18.9155 L2.27626 19.17 L2.65126 17.5598 C2.10436 16.6413 1.69681 15.6468 1.44189 14.6086 L0.35063 14.8786 C0.595258 15.8728 0.967079 16.8313 1.45688 17.7305 L1.18126 18.9155 Z M4.82062 21.7275 L5.07564 22.8225 L6.26063 22.5469 C7.15975 23.0367 8.11828 23.4085 9.1125 23.6531 L9.38251 22.5619 C8.34665 22.3036 7.35466 21.8935 6.43875 21.345 L4.82062 21.7275 Z M3.47017 7.28578 C1.75502 10.3913 1.86188 14.183 3.75001 17.1867 L2.81251 21.1856 L6.81187 20.2481 C10.3195 22.4573 14.8411 22.207 18.0835 19.6238 C21.3258 17.0405 22.5802 12.6895 21.21 8.77734 C18.4313 0.841406 7.5108 -0.0304663 3.47017 7.28578 Z" fill="#3a76f0"/><path transform="matrix(1 0 0 1 -176.367 43.634)" d="M6.09663 9.67713 C12.7979 7.36713 10.4297 -0.220998 11.1085 0.0049399 C15.4955 2.14994 20.4291 6.82994 20.4291 13.8499 C20.4291 19.2321 16.2563 23.9899 10.1916 23.9899 C4.81178 24.2337 0.252716 20.0726 0.00896586 14.6923 C-0.244628 9.11416 4.96553 5.04588 4.96553 6.04994 C5.01193 6.62182 5.49756 9.67713 6.09663 9.67713 Z" fill="#e73d76" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -138.283 43.701)" d="M12.1116 4.01148 C15.7116 4.22288 17.8195 5.80632 18.0244 7.28429 C18.1242 8.25085 17.482 9.00226 16.3673 9.00226 C14.7389 9.00226 14.573 6.83195 11.7689 6.83195 C10.5047 6.83195 9.43687 7.35788 9.43687 8.49835 C9.43687 10.8815 18.4205 9.49726 18.4205 14.7449 C18.4205 17.7698 15.9994 19.7516 12.3853 19.7516 C9.20671 19.7516 6.01171 18.3107 6.02765 15.8296 C6.03327 15.081 6.59108 14.3943 7.33452 14.3943 C9.20671 14.3943 9.18937 17.1754 12.1702 17.1754 C14.2603 17.1754 14.9742 16.0344 14.9742 15.2394 C14.9742 12.3684 5.93764 14.129 5.93764 8.72898 C5.93764 5.80632 8.33859 3.7907 12.1116 4.01148 Z M14.0831 22.9044 C19.8501 26.3905 26.6025 19.7169 22.9805 13.889 C24.3328 6.16351 17.573 -0.446804 9.93655 0.97304 C4.18452 -2.53134 -2.59735 4.11976 1.00968 9.95898 C-0.36751 17.6263 6.35389 24.3782 14.0831 22.9044 Z" fill="#178cc8" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -101.179 43.635)" d="M0.475777 23.9995 L5.42813 23.9995 L5.42813 7.99969 L0.475777 7.99969 L0.475777 23.9995 Z M13.3453 15.6009 C13.3453 13.3519 14.3808 12.0112 16.3631 12.0112 C18.1842 12.0112 19.0589 13.2975 19.0589 15.6009 L19.0589 24 L23.9888 23.9995 L23.9888 13.8694 C23.9888 9.58359 21.5592 7.51125 18.1669 7.51125 C14.7731 7.51125 13.3453 10.155 13.3453 10.155 L13.3453 7.99969 L8.59453 7.99969 L8.59453 23.9995 L13.3453 23.9995 L13.3453 15.6009 Z M2.92875 5.90484 C4.54594 5.90484 5.85703 4.58203 5.85703 2.95172 C5.85703 1.32188 4.54594 0 2.92875 0 C1.31062 0 0 1.32188 0 2.95172 C0 4.58203 1.31062 5.90484 2.92875 5.90484 Z" fill="#10658f" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -260.469 74.743)" d="M14.8475 0.020153 C14.8484 0.386247 14.9558 5.67703 20.5081 6.00703 C20.5081 7.53281 20.5095 8.63906 20.5095 10.095 C20.089 10.1194 16.8547 9.88453 14.8409 8.08875 L14.8348 16.0472 C14.9112 21.5709 10.8467 24.9319 5.53295 23.7712 C-3.62923 21.0305 -0.584702 7.44141 8.61498 8.89594 C8.61498 13.283 8.61732 8.89453 8.61732 13.283 C4.81716 12.7237 3.54592 15.885 4.5556 18.1491 C5.47482 20.2097 9.25903 20.6569 10.5786 17.7492 C10.7281 17.1802 10.8031 16.5314 10.8031 15.803 L10.8031 0 L14.8475 0.020153 Z" fill="#000000" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -217.206 74.743)" d="M7.67499 15.8734 C7.04499 19.1776 6.27531 22.3454 3.99531 24.0001 C3.29124 19.0061 5.02843 15.2556 5.83515 11.2736 C4.45984 8.9584 6.00064 4.29902 8.90173 5.44746 C12.4713 6.85934 5.81032 14.0551 10.2817 14.9537 C14.9505 15.8917 16.8564 6.85324 13.9619 3.91418 C9.77875 -0.330349 1.78562 3.81715 2.76859 9.89402 C3.00765 11.3795 4.54234 11.83 3.38172 13.8803 C0.704687 13.2868 -0.0940605 11.1756 0.00859574 8.36027 C0.174064 3.75293 4.14859 0.526994 8.13484 0.0807438 C13.1767 -0.483631 17.9083 1.93137 18.5617 6.67371 C19.2972 12.0268 16.2859 17.8239 10.8953 17.4071 C9.43375 17.2932 8.82062 16.5695 7.67499 15.8734 Z" fill="#d0272c"/><path transform="matrix(1 0 0 1 -177.629 74.743)" d="M1.56515 0 L0 4.17375 L0 20.8678 L5.73656 20.8678 L5.73656 24 L8.86828 24 L11.9972 20.8678 L16.6912 20.8678 L22.9519 14.6095 L22.9519 0 L1.56515 0 Z M3.65062 2.08547 L20.8659 2.08547 L20.8659 13.5642 L17.2134 17.2167 L11.4759 17.2167 L8.34796 20.3447 L8.34796 17.2167 L3.65062 17.2167 L3.65062 2.08547 Z M9.38905 12.5222 L11.4759 12.5222 L11.4759 6.26203 L9.38905 6.26203 L9.38905 12.5222 Z M15.127 12.5222 L17.2134 12.5222 L17.2134 6.26203 L15.127 6.26203 L15.127 12.5222 Z" fill="#5a3e85"/><path transform="matrix(1 0 0 1 -138.283 76.41)" d="M11.779 4.85375 C11.2296 4.86359 10.7655 5.3314 10.7754 5.86531 C10.7852 6.4189 11.2409 6.85156 11.8057 6.845 C12.3719 6.83797 12.8013 6.40063 12.7962 5.83531 C12.7915 5.28078 12.3382 4.84343 11.779 4.85375 Z M18.8294 11.2395 C18.394 11.2362 18.0241 11.593 18.0063 12.0331 C17.9876 12.5033 18.3532 12.89 18.8187 12.8909 C19.2691 12.8923 19.6249 12.552 19.6413 12.1034 C19.6587 11.6323 19.293 11.2428 18.8294 11.2395 Z M14.4921 12.1025 C14.5099 11.6333 14.1326 11.2395 13.6624 11.2377 C13.1974 11.2358 12.8074 11.6347 12.8238 12.0969 C12.8388 12.5389 13.211 12.8961 13.6568 12.8966 C14.1016 12.897 14.4748 12.5497 14.4921 12.1025 Z M19.6409 19.8092 C18.9551 19.7375 18.2341 20.1331 17.5169 20.2067 C15.3312 20.4303 13.3732 19.8209 11.7584 18.328 C8.68757 15.4878 9.12632 11.1327 12.679 8.80531 C15.8365 6.73672 20.4673 7.42625 22.6934 10.2964 C24.6363 12.8009 24.408 16.1258 22.0362 18.23 C20.9295 19.212 21.3935 19.5252 21.6813 20.6661 C21.0438 20.382 20.3369 19.8819 19.6409 19.8092 Z M5.44569 4.85422 C4.88553 4.83734 4.42476 5.26578 4.40835 5.81796 C4.39195 6.37765 4.81992 6.82578 5.38429 6.84031 C5.94351 6.85437 6.41273 6.42594 6.43335 5.88078 C6.45398 5.3375 5.98053 4.86969 5.44569 4.85422 Z M8.83101 14.8709 C7.96055 14.7631 7.16788 14.6445 6.371 14.577 C6.09585 14.5541 5.76914 14.5869 5.5357 14.7186 C4.76179 15.1555 4.01976 15.6486 3.14038 16.198 C3.30163 15.4681 3.40617 14.8292 3.59132 14.2142 C3.72726 13.7628 3.66398 13.5111 3.24773 13.2167 C-2.14759 9.40766 -0.445556 2.40031 5.59007 0.428746 C10.2926 -1.10782 16.1941 1.595 16.6793 6.78687 C12.146 7.02359 8.42414 10.0709 8.83101 14.8709 Z" fill="#3caf41"/><path transform="matrix(1 0 0 1 -101.185 79.927)" d="M6.76876 0 C10.507 0 13.5375 3.05156 13.5375 6.81516 C13.5375 10.5792 10.507 13.6303 6.76876 13.6303 C3.03048 13.6303 0 10.5792 0 6.81516 C0 3.05156 3.03048 0 6.76876 0 Z M17.5781 0.399376 C19.4475 0.399376 20.9625 3.27141 20.9625 6.81516 C20.9686 7.66922 20.6058 13.2314 17.5786 13.2314 C15.7092 13.2314 14.1938 10.358 14.1938 6.81516 C14.1938 3.27234 15.7092 0.399376 17.5781 0.399376 Z M22.8098 1.06734 C23.467 1.06734 24 3.64078 24 6.81516 C24 9.98859 23.467 12.563 22.8098 12.563 C22.1522 12.563 21.6197 9.98953 21.6197 6.81516 C21.6197 3.64078 22.1522 1.06734 22.8098 1.06734 Z" fill="#1e1b1e"/><path transform="matrix(1 0 0 1 -66.402 74.743)" d="M8.76656 0.0159359 C7.44749 0.0159359 6.36984 1.09359 6.36984 2.41265 C6.36984 3.73172 7.44749 4.80937 8.76656 4.80937 L11.1637 4.80937 L11.1637 2.41265 C11.1637 1.09359 10.102 0.0159359 8.76656 0.0159359 Z M0 15.2011 C0 16.5202 1.07766 17.5978 2.39672 17.5978 C3.71578 17.5978 4.79343 16.5202 4.79343 15.2011 L4.79343 12.8044 L2.39672 12.8044 C1.06172 12.8044 0 13.882 0 15.2011 Z M6.38578 15.2011 L6.38578 21.6033 C6.38578 22.9223 7.46391 24 8.78297 24 C10.102 24 11.1797 22.9223 11.1797 21.6033 L11.1797 15.2011 C11.1797 13.882 10.102 12.8044 8.78297 12.8044 C7.4475 12.8044 6.38578 13.882 6.38578 15.2011 Z M15.1528 24 C16.4719 24 17.5495 22.9223 17.5495 21.6033 C17.5495 20.2842 16.4719 19.2066 15.1528 19.2066 L12.7561 19.2066 L12.7561 21.6033 C12.7561 22.9223 13.8337 24 15.1528 24 Z M21.5391 17.5978 C22.8581 17.5978 23.9358 16.5202 23.9358 15.2011 C23.9358 13.882 22.8581 12.8044 21.5391 12.8044 L15.1528 12.8044 C13.8337 12.8044 12.7561 13.882 12.7561 15.2011 C12.7561 16.5202 13.8337 17.5978 15.1528 17.5978 L21.5391 17.5978 Z M23.9358 8.7989 C23.9358 7.47984 22.8581 6.40219 21.5391 6.40219 C20.22 6.40219 19.1419 7.47984 19.1419 8.7989 L19.1419 11.1956 L21.5391 11.1956 C22.8581 11.212 23.9358 10.1339 23.9358 8.7989 Z M17.5495 8.7989 L17.5495 2.39672 C17.5495 1.07766 16.4719 0 15.1528 0 C13.8337 0 12.7561 1.07766 12.7561 2.39672 L12.7561 8.7989 C12.7561 10.118 13.8337 11.1956 15.1528 11.1956 C16.4878 11.212 17.5495 10.1339 17.5495 8.7989 Z M8.76656 6.40219 L2.39672 6.40219 C1.07766 6.40219 0 7.47984 0 8.7989 C0 10.118 1.07766 11.1956 2.39672 11.1956 L8.78297 11.1956 C10.102 11.1956 11.1797 10.118 11.1797 8.7989 C11.1637 7.47984 10.102 6.40219 8.76656 6.40219 Z" fill="#e01e5a"/><path transform="matrix(1 0 0 1 -66.62 47.111)" d="M23.9998 0.7348 L20.2043 19.8729 C20.2043 19.8729 19.6732 21.2 18.2135 20.5629 L9.41417 13.8284 C10.5968 12.7648 19.7721 4.51668 20.1729 4.14261 C20.7931 3.56371 20.4087 3.21918 19.6873 3.65699 L6.13527 12.2628 L0.906828 10.5026 C0.906828 10.5026 0.0841718 10.2111 0.00448435 9.57402 C-0.0752031 8.93699 0.933544 8.59198 0.933544 8.59198 L22.2481 0.230424 C22.2481 0.230424 23.9998 -0.539263 23.9998 0.7348 Z" fill="#23b7ec"/></svg>
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
        </div>
        <div style={{ position: "absolute", left: "714px", top: "151px", width: "440px", height: "722px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "440px", height: "48px", boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 16px 1px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "129px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Selected request</p>
            </div>
            <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "rgba(255, 176, 2, 0.1)", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#d2a134", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#d2a134" }}>Waiting</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "64px", width: "408px", height: "566px", display: "flex", flexDirection: "column", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, position: "relative" }}>
                  <div style={{ position: "absolute", left: "0px", top: "0px", width: "24px", height: "24px", background: "url('https://ingotui.com/library-img/31aaca83a4864f35dba467eb853566eebfeb77a6.png') center / cover no-repeat" }} />
                </div>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Canva Pro · 2 seats</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "234px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>REQ-1047 · Liam Chen · 18/04/2026, 08:12</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#0f172a" }}>$240.00</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>per month</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "169px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Marketing budget impact</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#10b981", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>Spent</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#9fe3c9", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>This request</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "10px", height: "10px", flexShrink: 0, borderRadius: "2px", background: "#e4e4e7", boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05), inset 0px 4px 4px 0px rgba(255, 255, 255, 0.29)" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#000000" }}>Budget pace</p>
                </div>
              </div>
            </div>
            <div style={{ width: "408px", height: "158px", flexShrink: 0, position: "relative" }}>
              <svg style={{ position: "absolute", left: "34px", top: "8px", width: "374px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="374" height="1" viewBox="0 0 374 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L374 0" fill="none" stroke="#e4e4e4" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
              <p style={{ position: "absolute", left: "3px", top: "0px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>$6K</p>
              <svg style={{ position: "absolute", left: "34px", top: "49.33px", width: "374px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="374" height="1" viewBox="0 0 374 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L374 0" fill="none" stroke="#e4e4e4" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
              <p style={{ position: "absolute", left: "3px", top: "41.33px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>$4K</p>
              <svg style={{ position: "absolute", left: "34px", top: "90.67px", width: "374px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="374" height="1" viewBox="0 0 374 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L374 0" fill="none" stroke="#e4e4e4" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
              <p style={{ position: "absolute", left: "3px", top: "82.67px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>$2K</p>
              <div style={{ position: "absolute", left: "34px", top: "131.5px", width: "374px", height: "1px", background: "#e2e2e5" }} />
              <p style={{ position: "absolute", left: "18px", top: "124px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>0</p>
              <div style={{ position: "absolute", left: "53.4px", top: "111.33px", width: "36px", height: "20.67px", borderRadius: "6px", background: "#f4f4f5" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "56.4px", top: "118.77px", width: "30px", height: "13.23px", borderRadius: "4px", background: "linear-gradient(180deg, #2fc291 0%, #10b981 100%)", boxShadow: "inset 0 0 0 1px rgba(12, 144, 101, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "128.2px", top: "82.4px", width: "36px", height: "49.6px", borderRadius: "6px", background: "#f4f4f5" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "131.2px", top: "104.72px", width: "30px", height: "27.28px", borderRadius: "4px", background: "linear-gradient(180deg, #2fc291 0%, #10b981 100%)", boxShadow: "inset 0 0 0 1px rgba(12, 144, 101, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "203px", top: "53.47px", width: "36px", height: "78.53px", borderRadius: "6px", background: "#f4f4f5" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "206px", top: "92.73px", width: "30px", height: "39.27px", borderRadius: "4px", background: "linear-gradient(180deg, #2fc291 0%, #10b981 100%)", boxShadow: "inset 0 0 0 1px rgba(12, 144, 101, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <div data-fu="bar" style={{ position: "absolute", left: "206px", top: "87.77px", width: "30px", height: "2.76px", borderRadius: "1.38px", background: "linear-gradient(180deg, #c1edde 0%, #aee7d4 100%)", boxShadow: "inset 0 0 0 1px rgba(15, 176, 123, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
              <div style={{ position: "absolute", left: "277.8px", top: "24.53px", width: "36px", height: "107.47px", borderRadius: "6px", background: "#f4f4f5" }} />
              <div style={{ position: "absolute", left: "352.6px", top: "8px", width: "36px", height: "124px", borderRadius: "6px", background: "#f4f4f5" }} />
              <p style={{ position: "absolute", left: "61.4px", top: "142px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>1–5</p>
              <p style={{ position: "absolute", left: "132.7px", top: "142px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>6–12</p>
              <p style={{ position: "absolute", left: "204.5px", top: "142px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>13–19</p>
              <p style={{ position: "absolute", left: "276.8px", top: "142px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>20–26</p>
              <p style={{ position: "absolute", left: "352.6px", top: "142px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>27–30</p>
              <div style={{ position: "absolute", left: "156.5px", top: "25.47px", width: "129px", height: "20px", borderRadius: "6px", background: "#1f1f22", boxShadow: "0px 2px 6px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "3px 7px 3px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ffffff" }}>$1,900 → $2,140 · 36%</p>
              </div>
              <svg style={{ position: "absolute", left: "217px", top: "44.97px", width: "8px", height: "4px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L8 0 L4 4 L0 0 Z" fill="#1f1f22"/></svg>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Policy checks</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#16a34a", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Within Marketing budget</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>$3,860 left after</p>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#16a34a", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Approved vendor</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Canva · since 2024</p>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <AlertCircle size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#f59e0b", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Duplicates an existing seat</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>1 Canva seat on file</p>
              </div>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>History</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(37, 99, 235, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <SendSolid size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#2563eb", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "148px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Submitted by Liam Chen</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "163px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>18/04 · 08:12 · quote attached</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(22, 163, 74, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <ShieldCheckSolid size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#16a34a", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Auto-checks passed</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "185px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>18/04 · 08:12 · 2 of 3 checks clear</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "11px", background: "rgba(245, 158, 11, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <ClockSolid size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#f59e0b", display: "block" }} />
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "167px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Waiting on Ethan Cole (you)</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Finance step · 2h so far</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "0px", top: "665px", width: "440px", height: "57px", background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "13px 16px 12px 16px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "118px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Approve with ⌘ Enter</p>
            </div>
            <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Decline</p>
            </div>
            <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Approve $240.00</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "266px", top: "92px", width: "1154px", height: "46px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#000000", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <SquareRoundedCheckSolid size={20} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#0f172a" }}>Approvals</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "457px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>Clear spend requests fast, with budget and policy context on every one.</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <UserCheck size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#0f172a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Delegate</p>
          </div>
          <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <SlidersHorizontal size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#0f172a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Approval rules</p>
          </div>
          <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Approve selected</p>
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
