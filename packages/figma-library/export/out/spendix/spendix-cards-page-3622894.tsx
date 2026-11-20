"use client";
// Cards page (spendix, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AdjustmentsHorizontal, AlertTriangle, Bell, Briefcase, Calendar, ChartLine, ChevronRight, CreditCard, File, LayoutDashboard, Loader, MapPinpoint01, Plus, PlusSignCircle, Repeat, Search, Settings, Shield, SquareRoundedCheck, Upload, Users, Wifi } from "ingotui-icons/react/stroke-rounded";
import { Wallet as WalletSolid } from "ingotui-icons/react/solid";

export function CardsPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1440px", height: "1071px", background: "#fcfcfc", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "1440px", height: "1071px", background: "#fcfcfc", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "237.99px", height: "1194.51px", background: "#ffffff", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "20px", top: "20px", width: "125px", height: "46px", display: "flex", flexDirection: "row", gap: "48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "46px", height: "46px", flexShrink: 0, borderRadius: "8px", background: "#000000", backdropFilter: "blur(1.36px)", boxShadow: "inset 0 0 0 1.02px rgba(255, 255, 255, 0.4)", overflow: "hidden", display: "flex", flexDirection: "row", gap: "6.79px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "42.96px", height: "42.96px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="42.96" height="42.96" viewBox="0 0 42.96 42.96" fill="none" overflow="visible"><defs><linearGradient id="g5_gput" gradientUnits="userSpaceOnUse" x1="15.65" y1="35.66" x2="9.45" y2="0.00"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/></linearGradient></defs><path transform="matrix(-0.707 0.707 -0.707 -0.707 42.96 25.215)" d="M3.04317e-12 0 L25.095 0 L21.749 35.6592 L3.346 35.6592 L3.04317e-12 0 Z" fill="url(#g5_gput)"/></svg>
                <div style={{ width: "30px", height: "36px", flexShrink: 0, filter: "drop-shadow(0px 3px 3px rgba(36, 36, 36, 0.1))", position: "relative" }}>
                  <svg style={{ position: "absolute", left: "0px", top: "3.71px", width: "30px", height: "28.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="30" height="28.57" viewBox="0 0 30 28.57" fill="none" overflow="visible"><defs><linearGradient id="g6_gpuv" gradientUnits="userSpaceOnUse" x1="15.00" y1="-0.00" x2="15.00" y2="28.57"><stop offset="0" stopColor="#ffffff" stopOpacity="0.8"/><stop offset="1" stopColor="#ffffff" stopOpacity="0.5"/></linearGradient></defs><path transform="matrix(-1 0 0 1 30 0)" d="M14.7 5.08644e-07 C12.1001 6.20908e-07 10.0002 2.07441 10.0002 4.64271 C10.0002 7.19128 12.1001 9.26565 14.68 9.28542 C14.04 9.26565 13.5401 8.75202 13.5401 8.11979 C13.5401 7.4876 14.0601 6.9542 14.72 6.9542 C17.5199 6.9542 23.7398 6.9542 26.4797 6.9542 C28.4196 6.9542 29.9995 5.39346 29.9995 3.47712 C29.9995 1.56074 28.4196 -8.37659e-08 26.4797 0 L14.7 5.08644e-07 Z" fill="url(#g6_gpuv)"/><path transform="matrix(-1 0 0 1 30 0)" d="M8.98585 9.2854 C6.38593 9.2854 4.286 11.3598 4.286 13.9281 C4.286 16.4767 6.38593 18.551 8.96584 18.5708 C8.32586 18.551 7.82589 18.0374 7.82589 17.4052 C7.82589 16.773 8.34588 16.2396 9.00587 16.2396 C11.8057 16.2396 18.0256 16.2396 20.7655 16.2396 C22.7054 16.2396 24.2854 14.6789 24.2854 12.7625 C24.2854 10.8461 22.7054 9.2854 20.7655 9.2854 L8.98585 9.2854 Z" fill="url(#g6_gpuv)"/><path transform="matrix(-1 0 0 1 30 0)" d="M5.03556 18.5708 C2.24993 18.5708 -8.11757e-08 20.8048 0 23.5707 C8.05519e-08 26.3153 2.24993 28.5492 5.01411 28.5705 C4.32843 28.5492 3.79274 27.9961 3.79274 27.3152 C3.79274 26.6344 4.34987 26.06 5.057 26.06 C8.05688 26.06 14.721 26.06 17.6566 26.06 C19.7351 26.06 21.4279 24.3792 21.4279 22.3154 C21.4279 20.2516 19.7351 18.5708 17.6566 18.5708 L5.03556 18.5708 Z" fill="url(#g6_gpuv)"/></svg>
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
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #e9e9e9", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <WalletSolid size={14} strokeWidth={2.25} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#000000", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "39px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#000000" }}>Cards</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "column", padding: "7px 10px 7px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "70px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <SquareRoundedCheck size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "66px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#646871" }}>Approvals</p>
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
                <svg style={{ position: "absolute", left: "6.4px", top: "6.8px", width: "19.2px", height: "19.2px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="19.2" height="19.2" viewBox="0 0 19.2 19.2" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 6.8 6.799)" d="M5.59982 2.79991 L4.99984 2.79991 C4.99984 4.0149 4.0149 4.99984 2.79991 4.99984 L2.79991 5.59982 L2.79991 6.1998 C4.67762 6.1998 6.1998 4.67762 6.1998 2.79991 L5.59982 2.79991 Z M2.79991 5.59982 L2.79991 4.99984 C1.58492 4.99984 0.599981 4.0149 0.599981 2.79991 L0 2.79991 L-0.599981 2.79991 C-0.599981 4.67762 0.9222 6.1998 2.79991 6.1998 L2.79991 5.59982 Z M0 2.79991 L0.599981 2.79991 C0.599981 1.58492 1.58492 0.599981 2.79991 0.599981 L2.79991 0 L2.79991 -0.599981 C0.9222 -0.599981 -0.599981 0.9222 -0.599981 2.79991 L0 2.79991 Z M2.79991 0 L2.79991 0.599981 C4.0149 0.599981 4.99984 1.58492 4.99984 2.79991 L5.59982 2.79991 L6.1998 2.79991 C6.1998 0.9222 4.67762 -0.599981 2.79991 -0.599981 L2.79991 0 Z" fill="#686765"/><path transform="matrix(1 0 0 1 1.599 2.151)" d="M15.2083 9.1256 L15.0521 8.5463 L15.052 8.54633 L15.2083 9.1256 Z M15.917 8.84905 L15.4408 8.48404 L15.4405 8.48443 L15.917 8.84905 Z M15.917 6.04794 L15.4407 6.41277 L15.4408 6.41295 L15.917 6.04794 Z M15.2083 5.77137 L15.0521 6.35065 L15.0521 6.35066 L15.2083 5.77137 Z M13.0742 2.16931 L13.6549 2.32018 L13.6549 2.32014 L13.0742 2.16931 Z M12.6794 1.02142 L12.3831 1.54317 L12.3832 1.54319 L12.6794 1.02142 Z M11.2996 0.238063 L11.0034 0.759803 L11.0034 0.759813 L11.2996 0.238063 Z M10.7194 0.00246206 L10.7995 0.597077 L10.7995 0.597071 L10.7194 0.00246206 Z M10.1334 0.471655 L9.70975 0.0468414 L9.70969 0.0469026 L10.1334 0.471655 Z M5.86729 0.471583 L6.29103 0.0468263 L6.29103 0.0468257 L5.86729 0.471583 Z M5.28138 0.00238214 L5.3615 -0.592225 L5.36147 -0.592229 L5.28138 0.00238214 Z M4.70108 0.237983 L4.40485 -0.283771 L4.40484 -0.283766 L4.70108 0.237983 Z M3.32137 1.02135 L3.6176 1.5431 L3.6176 1.5431 L3.32137 1.02135 Z M2.81334 1.40476 L3.36591 1.63852 L3.36591 1.6385 L2.81334 1.40476 Z M2.92651 2.16926 L3.50723 2.01847 L3.50723 2.01847 L2.92651 2.16926 Z M0.791191 5.77138 L0.947365 6.35068 L0.947387 6.35068 L0.791191 5.77138 Z M0.0824614 6.04785 L-0.393733 5.68287 L-0.393881 5.68306 L0.0824614 6.04785 Z M0.0824614 8.84905 L0.558821 8.48427 L0.558673 8.48408 L0.0824614 8.84905 Z M0.791191 9.1256 L0.947419 8.54631 L0.947363 8.5463 L0.791191 9.1256 Z M2.92528 12.7276 L2.34458 12.5768 L2.34458 12.5768 L2.92528 12.7276 Z M2.81204 13.4921 L2.25943 13.7258 L2.25944 13.7258 L2.81204 13.4921 Z M3.3201 13.8755 L3.61634 13.3538 L3.61625 13.3537 L3.3201 13.8755 Z M4.69981 14.6589 L4.40356 15.1807 L4.40364 15.1807 L4.69981 14.6589 Z M5.86598 14.4253 L6.28977 14.85 L6.28978 14.85 L5.86598 14.4253 Z M10.1348 14.4252 L10.5587 14.0005 L10.5586 14.0005 L10.1348 14.4252 Z M10.7206 14.8945 L10.8007 14.2998 L10.8007 14.2998 L10.7206 14.8945 Z M11.3009 14.6589 L11.5971 15.1806 L11.5972 15.1806 L11.3009 14.6589 Z M12.6806 13.8754 L12.3845 13.3536 L12.3844 13.3537 L12.6806 13.8754 Z M13.1887 13.492 L12.6361 13.2583 L12.636 13.2586 L13.1887 13.492 Z M13.0754 12.7276 L13.6561 12.5766 L13.6561 12.5766 L13.0754 12.7276 Z M15.2083 9.1256 L15.3645 9.7049 C15.5624 9.65154 15.7486 9.60189 15.893 9.5495 C16.023 9.50233 16.2404 9.41374 16.3935 9.21366 L15.917 8.84905 L15.4405 8.48443 C15.4797 8.43322 15.5178 8.40956 15.5259 8.40479 C15.5323 8.40101 15.5232 8.40714 15.4837 8.42148 C15.3987 8.45232 15.2717 8.4871 15.0521 8.5463 L15.2083 9.1256 Z M15.917 8.84905 L16.3932 9.21406 C16.534 9.03035 16.5713 8.82897 16.586 8.68652 C16.6002 8.54849 16.5995 8.38203 16.5995 8.22195 L15.9995 8.22195 L15.3995 8.22195 C15.3995 8.31023 15.3995 8.37967 15.3983 8.43929 C15.3972 8.49919 15.395 8.53767 15.3924 8.56351 C15.3864 8.62113 15.3825 8.56015 15.4408 8.48404 L15.917 8.84905 Z M15.9995 8.22195 L16.5995 8.22195 L16.5995 6.67503 L15.9995 6.67503 L15.3995 6.67503 L15.3995 8.22195 L15.9995 8.22195 Z M15.9995 6.67503 L16.5995 6.67503 C16.5995 6.51495 16.6002 6.34849 16.586 6.21046 C16.5713 6.06801 16.534 5.86663 16.3932 5.68292 L15.917 6.04794 L15.4408 6.41295 C15.3825 6.33683 15.3864 6.27585 15.3924 6.33348 C15.395 6.35931 15.3972 6.39779 15.3983 6.45769 C15.3995 6.51731 15.3995 6.58675 15.3995 6.67503 L15.9995 6.67503 Z M15.917 6.04794 L16.3933 5.6831 C16.2402 5.48324 16.023 5.39469 15.893 5.34749 C15.7486 5.2951 15.5624 5.24544 15.3645 5.19207 L15.2083 5.77137 L15.0521 6.35066 C15.2717 6.40987 15.3987 6.44465 15.4837 6.47549 C15.5232 6.48983 15.5323 6.49596 15.5259 6.4922 C15.5178 6.48745 15.4798 6.46385 15.4407 6.41277 L15.917 6.04794 Z M15.2083 5.77137 L15.3645 5.19208 C14.1115 4.85417 13.3377 3.54111 13.6549 2.32018 L13.0742 2.16931 L12.4935 2.01845 C12.0053 3.89764 13.1846 5.84701 15.0521 6.35065 L15.2083 5.77137 Z M13.0742 2.16931 L13.6549 2.32014 C13.7075 2.11774 13.7571 1.92892 13.7834 1.77606 C13.8069 1.63993 13.8388 1.40462 13.74 1.17114 L13.1874 1.40487 L12.6348 1.63861 C12.6092 1.57794 12.6078 1.53248 12.6077 1.52411 C12.6076 1.51746 12.6083 1.52938 12.6009 1.57217 C12.5851 1.66371 12.5517 1.79459 12.4935 2.01849 L13.0742 2.16931 Z M13.1874 1.40487 L13.74 1.17114 C13.6496 0.957303 13.492 0.825139 13.3753 0.742079 C13.2619 0.661325 13.116 0.579384 12.9756 0.499653 L12.6794 1.02142 L12.3832 1.54319 C12.4605 1.5871 12.5214 1.62171 12.5732 1.65241 C12.6251 1.68325 12.6579 1.70437 12.6795 1.71968 C12.7277 1.75402 12.6724 1.72743 12.6348 1.63861 L13.1874 1.40487 Z M12.6794 1.02142 L12.9756 0.499672 L11.5959 -0.283688 L11.2996 0.238063 L11.0034 0.759813 L12.3831 1.54317 L12.6794 1.02142 Z M11.2996 0.238063 L11.5959 -0.283677 C11.4584 -0.361768 11.3153 -0.443877 11.1892 -0.499245 C11.0586 -0.556565 10.8668 -0.622801 10.6393 -0.592147 L10.7194 0.00246206 L10.7995 0.597071 C10.7056 0.609725 10.655 0.576757 10.7068 0.59947 C10.7301 0.609714 10.7641 0.626565 10.8161 0.65477 C10.8678 0.68285 10.9275 0.716692 11.0034 0.759803 L11.2996 0.238063 Z M10.7194 0.00246206 L10.6394 -0.592153 C10.392 -0.558846 10.2086 -0.416829 10.1032 -0.32816 C9.98691 -0.23034 9.85255 -0.0955716 9.70975 0.0468414 L10.1334 0.471655 L10.5571 0.896469 C10.7159 0.738091 10.8077 0.647263 10.8756 0.590184 C10.9071 0.563719 10.9164 0.559229 10.9097 0.563054 C10.9012 0.567891 10.8622 0.58863 10.7995 0.597077 L10.7194 0.00246206 Z M10.1334 0.471655 L9.70969 0.0469026 C8.77658 0.97781 7.22423 0.977799 6.29103 0.0468263 L5.86729 0.471583 L5.44354 0.89634 C6.84509 2.29454 9.15566 2.29463 10.5572 0.896408 L10.1334 0.471655 Z M5.86729 0.471583 L6.29103 0.0468257 C6.14824 -0.0956243 6.01389 -0.23039 5.89757 -0.328228 C5.79215 -0.416897 5.60881 -0.5589 5.3615 -0.592225 L5.28138 0.00238214 L5.20125 0.596989 C5.13852 0.588536 5.09958 0.567793 5.09106 0.562964 C5.08432 0.559144 5.09372 0.563639 5.12518 0.5901 C5.19302 0.647161 5.28482 0.737992 5.44354 0.896341 L5.86729 0.471583 Z M5.28138 0.00238214 L5.36147 -0.592229 C5.13397 -0.622873 4.94217 -0.55666 4.8116 -0.499336 C4.68549 -0.443971 4.54239 -0.361863 4.40485 -0.283771 L4.70108 0.237983 L4.9973 0.759736 C5.07324 0.716625 5.13289 0.682784 5.18466 0.654704 C5.23665 0.626498 5.27064 0.609647 5.29397 0.599402 C5.3457 0.576691 5.29516 0.609638 5.20128 0.596993 L5.28138 0.00238214 Z M4.70108 0.237983 L4.40484 -0.283766 L3.02513 0.499602 L3.32137 1.02135 L3.6176 1.5431 L4.99731 0.759731 L4.70108 0.237983 Z M3.32137 1.02135 L3.02513 0.499599 C2.88474 0.579309 2.73892 0.661243 2.62549 0.741971 C2.50885 0.824985 2.35123 0.957146 2.26076 1.17102 L2.81334 1.40476 L3.36591 1.6385 C3.32831 1.72739 3.27299 1.75399 3.32129 1.71961 C3.34281 1.70429 3.37564 1.68317 3.42762 1.65232 C3.47936 1.62162 3.54026 1.58701 3.6176 1.5431 L3.32137 1.02135 Z M2.81334 1.40476 L2.26077 1.171 C2.16199 1.40449 2.19386 1.63981 2.21732 1.77593 C2.24367 1.92879 2.29322 2.11763 2.34578 2.32005 L2.92651 2.16926 L3.50723 2.01847 C3.44909 1.79455 3.41562 1.66365 3.39984 1.57209 C3.39246 1.52929 3.39316 1.51736 3.39308 1.52401 C3.39299 1.53237 3.39158 1.57783 3.36591 1.63852 L2.81334 1.40476 Z M2.92651 2.16926 L2.34578 2.32004 C2.66276 3.54084 1.88846 4.85412 0.634996 5.19209 L0.791191 5.77138 L0.947387 6.35068 C2.81495 5.84712 3.99522 3.89789 3.50723 2.01847 L2.92651 2.16926 Z M0.791191 5.77138 L0.635017 5.19208 C0.437081 5.24545 0.250965 5.29509 0.106604 5.34746 C-0.0233998 5.39461 -0.240625 5.48311 -0.393733 5.68287 L0.0824614 6.04785 L0.558656 6.41284 C0.519496 6.46393 0.481502 6.48752 0.473461 6.49225 C0.4671 6.49599 0.476225 6.48985 0.51577 6.4755 C0.60078 6.44467 0.727795 6.40988 0.947365 6.35068 L0.791191 5.77138 Z M0.0824614 6.04785 L-0.393881 5.68306 C-0.534541 5.86673 -0.571835 6.068 -0.586514 6.21047 C-0.600735 6.3485 -0.599981 6.51495 -0.599981 6.67503 L0 6.67503 L0.599981 6.67503 C0.599981 6.58675 0.600004 6.51731 0.601157 6.45768 C0.602316 6.39779 0.604466 6.3593 0.60713 6.33345 C0.613066 6.27583 0.617002 6.33666 0.558804 6.41265 L0.0824614 6.04785 Z M0 6.67503 L-0.599981 6.67503 L-0.599981 8.22195 L0 8.22195 L0.599981 8.22195 L0.599981 6.67503 L0 6.67503 Z M0 8.22195 L-0.599981 8.22195 C-0.599981 8.38203 -0.600735 8.54849 -0.586514 8.68651 C-0.571837 8.82894 -0.53454 9.03031 -0.39375 9.21401 L0.0824614 8.84905 L0.558673 8.48408 C0.617002 8.56019 0.613068 8.62116 0.607129 8.56352 C0.604466 8.53767 0.602316 8.49919 0.601157 8.4393 C0.600004 8.37967 0.599981 8.31023 0.599981 8.22195 L0 8.22195 Z M0.0824614 8.84905 L-0.393898 9.21382 C-0.240801 9.41375 -0.0235015 9.50232 0.106553 9.5495 C0.250942 9.60189 0.43709 9.65154 0.63502 9.7049 L0.791191 9.1256 L0.947363 8.5463 C0.727777 8.4871 0.600787 8.45232 0.515803 8.42148 C0.476275 8.40714 0.467182 8.40101 0.473576 8.40477 C0.481659 8.40953 0.51967 8.43315 0.558821 8.48427 L0.0824614 8.84905 Z M0.791191 9.1256 L0.634963 9.70488 C1.88796 10.0428 2.66175 11.3559 2.34458 12.5768 L2.92528 12.7276 L3.50599 12.8785 C3.99416 10.9994 2.81493 9.04996 0.947419 8.54631 L0.791191 9.1256 Z M2.92528 12.7276 L2.34458 12.5768 C2.292 12.7792 2.24242 12.968 2.21606 13.1209 C2.19257 13.257 2.16071 13.4923 2.25943 13.7258 L2.81204 13.4921 L3.36465 13.2584 C3.39029 13.3191 3.3917 13.3645 3.3918 13.3729 C3.39187 13.3795 3.39118 13.3676 3.39856 13.3248 C3.41435 13.2333 3.44783 13.1024 3.50599 12.8785 L2.92528 12.7276 Z M2.81204 13.4921 L2.25944 13.7258 C2.3499 13.9397 2.50749 14.0719 2.6242 14.1549 C2.73767 14.2357 2.88351 14.3176 3.02394 14.3973 L3.3201 13.8755 L3.61625 13.3537 C3.53892 13.3098 3.47802 13.2752 3.4263 13.2446 C3.37433 13.2137 3.34151 13.1926 3.32001 13.1773 C3.27176 13.143 3.32706 13.1696 3.36464 13.2584 L2.81204 13.4921 Z M3.3201 13.8755 L3.02385 14.3973 L4.40356 15.1807 L4.69981 14.6589 L4.99606 14.1372 L3.61634 13.3538 L3.3201 13.8755 Z M4.69981 14.6589 L4.40364 15.1807 C4.54117 15.2588 4.68426 15.3409 4.81036 15.3962 C4.94091 15.4536 5.13272 15.5198 5.36024 15.4891 L5.28015 14.8945 L5.20007 14.2999 C5.29395 14.2873 5.34448 14.3202 5.29272 14.2975 C5.26938 14.2873 5.23539 14.2704 5.18337 14.2422 C5.13159 14.2141 5.07193 14.1803 4.99598 14.1372 L4.69981 14.6589 Z M5.28015 14.8945 L5.36024 15.4891 C5.60766 15.4558 5.79105 15.3137 5.89642 15.225 C6.01271 15.1272 6.14704 14.9924 6.28977 14.85 L5.86598 14.4253 L5.4422 14.0006 C5.28348 14.1589 5.19171 14.2498 5.12386 14.3069 C5.0924 14.3333 5.08301 14.3378 5.08976 14.334 C5.09829 14.3292 5.13727 14.3084 5.20007 14.2999 L5.28015 14.8945 Z M5.86598 14.4253 L6.28978 14.85 C7.22355 13.9182 8.77718 13.9181 9.71102 14.8499 L10.1348 14.4252 L10.5586 14.0005 C9.15633 12.6013 6.84433 12.6014 5.44218 14.0006 L5.86598 14.4253 Z M10.1348 14.4252 L9.71094 14.8498 C9.8537 14.9923 9.98803 15.1271 10.1044 15.225 C10.2098 15.3137 10.3932 15.4558 10.6406 15.4891 L10.7206 14.8945 L10.8007 14.2998 C10.8634 14.3083 10.9024 14.329 10.9109 14.3339 C10.9177 14.3377 10.9083 14.3332 10.8769 14.3068 C10.8091 14.2497 10.7173 14.1589 10.5587 14.0005 L10.1348 14.4252 Z M10.7206 14.8945 L10.6405 15.4891 C10.868 15.5197 11.0599 15.4535 11.1904 15.3962 C11.3165 15.3408 11.4596 15.2587 11.5971 15.1806 L11.3009 14.6589 L11.0047 14.1371 C10.9288 14.1802 10.8691 14.214 10.8174 14.2421 C10.7654 14.2703 10.7314 14.2872 10.708 14.2974 C10.6562 14.3202 10.7068 14.2872 10.8007 14.2998 L10.7206 14.8945 Z M11.3009 14.6589 L11.5972 15.1806 L12.9769 14.3972 L12.6806 13.8754 L12.3844 13.3537 L11.0047 14.1371 L11.3009 14.6589 Z M12.6806 13.8754 L12.9768 14.3973 C13.1172 14.3176 13.2631 14.2356 13.3766 14.1549 C13.4933 14.0718 13.651 13.9395 13.7414 13.7254 L13.1887 13.492 L12.636 13.2586 C12.6736 13.1696 12.729 13.1429 12.6808 13.1772 C12.6593 13.1925 12.6265 13.2136 12.5745 13.2445 C12.5228 13.2751 12.4619 13.3097 12.3845 13.3536 L12.6806 13.8754 Z M13.1887 13.492 L13.7413 13.7257 C13.84 13.4922 13.8082 13.257 13.7847 13.1208 C13.7583 12.9679 13.7087 12.7791 13.6561 12.5766 L13.0754 12.7276 L12.4947 12.8785 C12.5529 13.1024 12.5864 13.2332 12.6022 13.3248 C12.6096 13.3675 12.6089 13.3795 12.609 13.3728 C12.6091 13.3644 12.6105 13.319 12.6361 13.2583 L13.1887 13.492 Z M13.0754 12.7276 L13.6561 12.5766 C13.3387 11.3556 14.112 10.0428 15.3646 9.70487 L15.2083 9.1256 L15.052 8.54633 C13.1846 9.05013 12.0064 10.9996 12.4947 12.8785 L13.0754 12.7276 Z" fill="#686765"/></svg>
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
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "1154px", height: "270px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "1154px", height: "48px", boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 16px 1px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Top cards</p>
              <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>124</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Highest spend · April</p>
              <div data-fu="btn" style={{ height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>View all</p>
                <ChevronRight size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "16px", top: "64px", width: "268.5px", height: "192px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "268.5px", height: "148px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(90deg, #f5f7ff 0%, #e3e8f5 100%), linear-gradient(#f8f8f8, #f8f8f8)", boxShadow: "inset 0 0 0 0.8px #f3f3f3", overflow: "hidden", position: "relative" }}>
              <p style={{ position: "absolute", left: "15.7px", top: "15.7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 500, color: "#040404" }}>Design Team</p>
              <Wifi size={18} strokeWidth={1.51} style={{ position: "absolute", left: "250.5px", top: "15px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#040404", display: "block", flexShrink: 0 }} />
              <p style={{ position: "absolute", left: "12.5px", top: "98px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#040404" }}>Figma</p>
              <p style={{ position: "absolute", left: "223px", top: "100px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.4px", fontWeight: 500, color: "#040404" }}>06/28</p>
              <p style={{ position: "absolute", left: "12.5px", top: "118px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 600, color: "#040404", letterSpacing: "0.08em" }}>••••  ••••  ••••  4242</p>
            </div>
            <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "268.5px", height: "8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "60.14px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #719af2 0%, #2563eb 100%)", boxShadow: "inset 0 0 0 1px rgba(29, 77, 183, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "64.14px", top: "0px", width: "203.86px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="203.86" height="8" viewBox="0 0 203.86 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.24 0 L2.74 0 L2.74 8 L3.24 8 L3.74 8 L3.74 0 L3.24 0 Z M6.47 0 L5.97 0 L5.97 8 L6.47 8 L6.97 8 L6.97 0 L6.47 0 Z M9.71 0 L9.21 0 L9.21 8 L9.71 8 L10.21 8 L10.21 0 L9.71 0 Z M12.94 0 L12.44 0 L12.44 8 L12.94 8 L13.44 8 L13.44 0 L12.94 0 Z M16.18 0 L15.68 0 L15.68 8 L16.18 8 L16.68 8 L16.68 0 L16.18 0 Z M19.41 0 L18.91 0 L18.91 8 L19.41 8 L19.91 8 L19.91 0 L19.41 0 Z M22.65 0 L22.15 0 L22.15 8 L22.65 8 L23.15 8 L23.15 0 L22.65 0 Z M25.89 0 L25.39 0 L25.39 8 L25.89 8 L26.39 8 L26.39 0 L25.89 0 Z M29.12 0 L28.62 0 L28.62 8 L29.12 8 L29.62 8 L29.62 0 L29.12 0 Z M32.36 0 L31.86 0 L31.86 8 L32.36 8 L32.86 8 L32.86 0 L32.36 0 Z M35.59 0 L35.09 0 L35.09 8 L35.59 8 L36.09 8 L36.09 0 L35.59 0 Z M38.83 0 L38.33 0 L38.33 8 L38.83 8 L39.33 8 L39.33 0 L38.83 0 Z M42.07 0 L41.57 0 L41.57 8 L42.07 8 L42.57 8 L42.57 0 L42.07 0 Z M45.3 0 L44.8 0 L44.8 8 L45.3 8 L45.8 8 L45.8 0 L45.3 0 Z M48.54 0 L48.04 0 L48.04 8 L48.54 8 L49.04 8 L49.04 0 L48.54 0 Z M51.77 0 L51.27 0 L51.27 8 L51.77 8 L52.27 8 L52.27 0 L51.77 0 Z M55.01 0 L54.51 0 L54.51 8 L55.01 8 L55.51 8 L55.51 0 L55.01 0 Z M58.24 0 L57.74 0 L57.74 8 L58.24 8 L58.74 8 L58.74 0 L58.24 0 Z M61.48 0 L60.98 0 L60.98 8 L61.48 8 L61.98 8 L61.98 0 L61.48 0 Z M64.72 0 L64.22 0 L64.22 8 L64.72 8 L65.22 8 L65.22 0 L64.72 0 Z M67.95 0 L67.45 0 L67.45 8 L67.95 8 L68.45 8 L68.45 0 L67.95 0 Z M71.19 0 L70.69 0 L70.69 8 L71.19 8 L71.69 8 L71.69 0 L71.19 0 Z M74.42 0 L73.92 0 L73.92 8 L74.42 8 L74.92 8 L74.92 0 L74.42 0 Z M77.66 0 L77.16 0 L77.16 8 L77.66 8 L78.16 8 L78.16 0 L77.66 0 Z M80.9 0 L80.4 0 L80.4 8 L80.9 8 L81.4 8 L81.4 0 L80.9 0 Z M84.13 0 L83.63 0 L83.63 8 L84.13 8 L84.63 8 L84.63 0 L84.13 0 Z M87.37 0 L86.87 0 L86.87 8 L87.37 8 L87.87 8 L87.87 0 L87.37 0 Z M90.6 0 L90.1 0 L90.1 8 L90.6 8 L91.1 8 L91.1 0 L90.6 0 Z M93.84 0 L93.34 0 L93.34 8 L93.84 8 L94.34 8 L94.34 0 L93.84 0 Z M97.07 0 L96.57 0 L96.57 8 L97.07 8 L97.57 8 L97.57 0 L97.07 0 Z M100.31 0 L99.81 0 L99.81 8 L100.31 8 L100.81 8 L100.81 0 L100.31 0 Z M103.55 0 L103.05 0 L103.05 8 L103.55 8 L104.05 8 L104.05 0 L103.55 0 Z M106.78 0 L106.28 0 L106.28 8 L106.78 8 L107.28 8 L107.28 0 L106.78 0 Z M110.02 0 L109.52 0 L109.52 8 L110.02 8 L110.52 8 L110.52 0 L110.02 0 Z M113.25 0 L112.75 0 L112.75 8 L113.25 8 L113.75 8 L113.75 0 L113.25 0 Z M116.49 0 L115.99 0 L115.99 8 L116.49 8 L116.99 8 L116.99 0 L116.49 0 Z M119.72 0 L119.22 0 L119.22 8 L119.72 8 L120.22 8 L120.22 0 L119.72 0 Z M122.96 0 L122.46 0 L122.46 8 L122.96 8 L123.46 8 L123.46 0 L122.96 0 Z M126.2 0 L125.7 0 L125.7 8 L126.2 8 L126.7 8 L126.7 0 L126.2 0 Z M129.43 0 L128.93 0 L128.93 8 L129.43 8 L129.93 8 L129.93 0 L129.43 0 Z M132.67 0 L132.17 0 L132.17 8 L132.67 8 L133.17 8 L133.17 0 L132.67 0 Z M135.9 0 L135.4 0 L135.4 8 L135.9 8 L136.4 8 L136.4 0 L135.9 0 Z M139.14 0 L138.64 0 L138.64 8 L139.14 8 L139.64 8 L139.64 0 L139.14 0 Z M142.38 0 L141.88 0 L141.88 8 L142.38 8 L142.88 8 L142.88 0 L142.38 0 Z M145.61 0 L145.11 0 L145.11 8 L145.61 8 L146.11 8 L146.11 0 L145.61 0 Z M148.85 0 L148.35 0 L148.35 8 L148.85 8 L149.35 8 L149.35 0 L148.85 0 Z M152.08 0 L151.58 0 L151.58 8 L152.08 8 L152.58 8 L152.58 0 L152.08 0 Z M155.32 0 L154.82 0 L154.82 8 L155.32 8 L155.82 8 L155.82 0 L155.32 0 Z M158.55 0 L158.05 0 L158.05 8 L158.55 8 L159.05 8 L159.05 0 L158.55 0 Z M161.79 0 L161.29 0 L161.29 8 L161.79 8 L162.29 8 L162.29 0 L161.79 0 Z M165.03 0 L164.53 0 L164.53 8 L165.03 8 L165.53 8 L165.53 0 L165.03 0 Z M168.26 0 L167.76 0 L167.76 8 L168.26 8 L168.76 8 L168.76 0 L168.26 0 Z M171.5 0 L171 0 L171 8 L171.5 8 L172 8 L172 0 L171.5 0 Z M174.73 0 L174.23 0 L174.23 8 L174.73 8 L175.23 8 L175.23 0 L174.73 0 Z M177.97 0 L177.47 0 L177.47 8 L177.97 8 L178.47 8 L178.47 0 L177.97 0 Z M181.21 0 L180.71 0 L180.71 8 L181.21 8 L181.71 8 L181.71 0 L181.21 0 Z M184.44 0 L183.94 0 L183.94 8 L184.44 8 L184.94 8 L184.94 0 L184.44 0 Z M187.68 0 L187.18 0 L187.18 8 L187.68 8 L188.18 8 L188.18 0 L187.68 0 Z M190.91 0 L190.41 0 L190.41 8 L190.91 8 L191.41 8 L191.41 0 L190.91 0 Z M194.15 0 L193.65 0 L193.65 8 L194.15 8 L194.65 8 L194.65 0 L194.15 0 Z M197.38 0 L196.88 0 L196.88 8 L197.38 8 L197.88 8 L197.88 0 L197.38 0 Z M200.62 0 L200.12 0 L200.12 8 L200.62 8 L201.12 8 L201.12 0 L200.62 0 Z M203.86 0 L203.36 0 L203.36 8 L203.86 8 L204.36 8 L204.36 0 L203.86 0 Z" fill="#d4d4d8"/></svg>
              </div>
              <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>$1,120 spent</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>of $5,000 · 22%</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "300.5px", top: "64px", width: "268.5px", height: "192px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "268.5px", height: "148px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(90deg, #f3fbf7 0%, #e1ebe5 100%), linear-gradient(#f8f8f8, #f8f8f8)", boxShadow: "inset 0 0 0 0.8px #f3f3f3", overflow: "hidden", position: "relative" }}>
              <p style={{ position: "absolute", left: "15.7px", top: "15.7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 500, color: "#040404" }}>Marketing Team</p>
              <Wifi size={18} strokeWidth={1.51} style={{ position: "absolute", left: "250.5px", top: "15px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#040404", display: "block", flexShrink: 0 }} />
              <p style={{ position: "absolute", left: "12.5px", top: "98px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#040404" }}>Google Ads</p>
              <p style={{ position: "absolute", left: "229px", top: "100px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.4px", fontWeight: 500, color: "#040404" }}>11/27</p>
              <p style={{ position: "absolute", left: "12.5px", top: "118px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 600, color: "#040404", letterSpacing: "0.08em" }}>••••  ••••  ••••  8817</p>
            </div>
            <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "268.5px", height: "8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "66.59px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #64d2ad 0%, #10b981 100%)", boxShadow: "inset 0 0 0 1px rgba(12, 144, 101, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "70.59px", top: "0px", width: "197.41px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="197.41" height="8" viewBox="0 0 197.41 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.24 0 L2.74 0 L2.74 8 L3.24 8 L3.74 8 L3.74 0 L3.24 0 Z M6.47 0 L5.97 0 L5.97 8 L6.47 8 L6.97 8 L6.97 0 L6.47 0 Z M9.71 0 L9.21 0 L9.21 8 L9.71 8 L10.21 8 L10.21 0 L9.71 0 Z M12.95 0 L12.45 0 L12.45 8 L12.95 8 L13.45 8 L13.45 0 L12.95 0 Z M16.18 0 L15.68 0 L15.68 8 L16.18 8 L16.68 8 L16.68 0 L16.18 0 Z M19.42 0 L18.92 0 L18.92 8 L19.42 8 L19.92 8 L19.92 0 L19.42 0 Z M22.65 0 L22.15 0 L22.15 8 L22.65 8 L23.15 8 L23.15 0 L22.65 0 Z M25.89 0 L25.39 0 L25.39 8 L25.89 8 L26.39 8 L26.39 0 L25.89 0 Z M29.13 0 L28.63 0 L28.63 8 L29.13 8 L29.63 8 L29.63 0 L29.13 0 Z M32.36 0 L31.86 0 L31.86 8 L32.36 8 L32.86 8 L32.86 0 L32.36 0 Z M35.6 0 L35.1 0 L35.1 8 L35.6 8 L36.1 8 L36.1 0 L35.6 0 Z M38.84 0 L38.34 0 L38.34 8 L38.84 8 L39.34 8 L39.34 0 L38.84 0 Z M42.07 0 L41.57 0 L41.57 8 L42.07 8 L42.57 8 L42.57 0 L42.07 0 Z M45.31 0 L44.81 0 L44.81 8 L45.31 8 L45.81 8 L45.81 0 L45.31 0 Z M48.54 0 L48.04 0 L48.04 8 L48.54 8 L49.04 8 L49.04 0 L48.54 0 Z M51.78 0 L51.28 0 L51.28 8 L51.78 8 L52.28 8 L52.28 0 L51.78 0 Z M55.02 0 L54.52 0 L54.52 8 L55.02 8 L55.52 8 L55.52 0 L55.02 0 Z M58.25 0 L57.75 0 L57.75 8 L58.25 8 L58.75 8 L58.75 0 L58.25 0 Z M61.49 0 L60.99 0 L60.99 8 L61.49 8 L61.99 8 L61.99 0 L61.49 0 Z M64.73 0 L64.23 0 L64.23 8 L64.73 8 L65.23 8 L65.23 0 L64.73 0 Z M67.96 0 L67.46 0 L67.46 8 L67.96 8 L68.46 8 L68.46 0 L67.96 0 Z M71.2 0 L70.7 0 L70.7 8 L71.2 8 L71.7 8 L71.7 0 L71.2 0 Z M74.43 0 L73.93 0 L73.93 8 L74.43 8 L74.93 8 L74.93 0 L74.43 0 Z M77.67 0 L77.17 0 L77.17 8 L77.67 8 L78.17 8 L78.17 0 L77.67 0 Z M80.91 0 L80.41 0 L80.41 8 L80.91 8 L81.41 8 L81.41 0 L80.91 0 Z M84.14 0 L83.64 0 L83.64 8 L84.14 8 L84.64 8 L84.64 0 L84.14 0 Z M87.38 0 L86.88 0 L86.88 8 L87.38 8 L87.88 8 L87.88 0 L87.38 0 Z M90.62 0 L90.12 0 L90.12 8 L90.62 8 L91.12 8 L91.12 0 L90.62 0 Z M93.85 0 L93.35 0 L93.35 8 L93.85 8 L94.35 8 L94.35 0 L93.85 0 Z M97.09 0 L96.59 0 L96.59 8 L97.09 8 L97.59 8 L97.59 0 L97.09 0 Z M100.32 0 L99.82 0 L99.82 8 L100.32 8 L100.82 8 L100.82 0 L100.32 0 Z M103.56 0 L103.06 0 L103.06 8 L103.56 8 L104.06 8 L104.06 0 L103.56 0 Z M106.8 0 L106.3 0 L106.3 8 L106.8 8 L107.3 8 L107.3 0 L106.8 0 Z M110.03 0 L109.53 0 L109.53 8 L110.03 8 L110.53 8 L110.53 0 L110.03 0 Z M113.27 0 L112.77 0 L112.77 8 L113.27 8 L113.77 8 L113.77 0 L113.27 0 Z M116.51 0 L116.01 0 L116.01 8 L116.51 8 L117.01 8 L117.01 0 L116.51 0 Z M119.74 0 L119.24 0 L119.24 8 L119.74 8 L120.24 8 L120.24 0 L119.74 0 Z M122.98 0 L122.48 0 L122.48 8 L122.98 8 L123.48 8 L123.48 0 L122.98 0 Z M126.21 0 L125.71 0 L125.71 8 L126.21 8 L126.71 8 L126.71 0 L126.21 0 Z M129.45 0 L128.95 0 L128.95 8 L129.45 8 L129.95 8 L129.95 0 L129.45 0 Z M132.69 0 L132.19 0 L132.19 8 L132.69 8 L133.19 8 L133.19 0 L132.69 0 Z M135.92 0 L135.42 0 L135.42 8 L135.92 8 L136.42 8 L136.42 0 L135.92 0 Z M139.16 0 L138.66 0 L138.66 8 L139.16 8 L139.66 8 L139.66 0 L139.16 0 Z M142.4 0 L141.9 0 L141.9 8 L142.4 8 L142.9 8 L142.9 0 L142.4 0 Z M145.63 0 L145.13 0 L145.13 8 L145.63 8 L146.13 8 L146.13 0 L145.63 0 Z M148.87 0 L148.37 0 L148.37 8 L148.87 8 L149.37 8 L149.37 0 L148.87 0 Z M152.1 0 L151.6 0 L151.6 8 L152.1 8 L152.6 8 L152.6 0 L152.1 0 Z M155.34 0 L154.84 0 L154.84 8 L155.34 8 L155.84 8 L155.84 0 L155.34 0 Z M158.58 0 L158.08 0 L158.08 8 L158.58 8 L159.08 8 L159.08 0 L158.58 0 Z M161.81 0 L161.31 0 L161.31 8 L161.81 8 L162.31 8 L162.31 0 L161.81 0 Z M165.05 0 L164.55 0 L164.55 8 L165.05 8 L165.55 8 L165.55 0 L165.05 0 Z M168.29 0 L167.79 0 L167.79 8 L168.29 8 L168.79 8 L168.79 0 L168.29 0 Z M171.52 0 L171.02 0 L171.02 8 L171.52 8 L172.02 8 L172.02 0 L171.52 0 Z M174.76 0 L174.26 0 L174.26 8 L174.76 8 L175.26 8 L175.26 0 L174.76 0 Z M177.99 0 L177.49 0 L177.49 8 L177.99 8 L178.49 8 L178.49 0 L177.99 0 Z M181.23 0 L180.73 0 L180.73 8 L181.23 8 L181.73 8 L181.73 0 L181.23 0 Z M184.47 0 L183.97 0 L183.97 8 L184.47 8 L184.97 8 L184.97 0 L184.47 0 Z M187.7 0 L187.2 0 L187.2 8 L187.7 8 L188.2 8 L188.2 0 L187.7 0 Z M190.94 0 L190.44 0 L190.44 8 L190.94 8 L191.44 8 L191.44 0 L190.94 0 Z M194.18 0 L193.68 0 L193.68 8 L194.18 8 L194.68 8 L194.68 0 L194.18 0 Z M197.41 0 L196.91 0 L196.91 8 L197.41 8 L197.91 8 L197.91 0 L197.41 0 Z" fill="#d4d4d8"/></svg>
              </div>
              <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>$1,240 spent</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>of $5,000 · 25%</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "585px", top: "64px", width: "268.5px", height: "192px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "268.5px", height: "148px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(90deg, #fffaf0 0%, #efe8dc 100%), linear-gradient(#f8f8f8, #f8f8f8)", boxShadow: "inset 0 0 0 0.8px #f3f3f3", overflow: "hidden", position: "relative" }}>
              <p style={{ position: "absolute", left: "15.7px", top: "15.7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 500, color: "#040404" }}>Travel Card</p>
              <Wifi size={18} strokeWidth={1.51} style={{ position: "absolute", left: "250.5px", top: "15px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#040404", display: "block", flexShrink: 0 }} />
              <p style={{ position: "absolute", left: "12.5px", top: "98px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#040404" }}>Uber</p>
              <p style={{ position: "absolute", left: "223px", top: "100px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.4px", fontWeight: 500, color: "#040404" }}>03/28</p>
              <p style={{ position: "absolute", left: "12.5px", top: "118px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 600, color: "#040404", letterSpacing: "0.08em" }}>••••  ••••  ••••  3109</p>
            </div>
            <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "268.5px", height: "8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "46.18px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #f9c060 0%, #f59e0b 100%)", boxShadow: "inset 0 0 0 1px rgba(191, 123, 9, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "50.18px", top: "0px", width: "217.82px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="217.82" height="8" viewBox="0 0 217.82 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.2 0 L2.7 0 L2.7 8 L3.2 8 L3.7 8 L3.7 0 L3.2 0 Z M6.41 0 L5.91 0 L5.91 8 L6.41 8 L6.91 8 L6.91 0 L6.41 0 Z M9.61 0 L9.11 0 L9.11 8 L9.61 8 L10.11 8 L10.11 0 L9.61 0 Z M12.81 0 L12.31 0 L12.31 8 L12.81 8 L13.31 8 L13.31 0 L12.81 0 Z M16.02 0 L15.52 0 L15.52 8 L16.02 8 L16.52 8 L16.52 0 L16.02 0 Z M19.22 0 L18.72 0 L18.72 8 L19.22 8 L19.72 8 L19.72 0 L19.22 0 Z M22.42 0 L21.92 0 L21.92 8 L22.42 8 L22.92 8 L22.92 0 L22.42 0 Z M25.63 0 L25.13 0 L25.13 8 L25.63 8 L26.13 8 L26.13 0 L25.63 0 Z M28.83 0 L28.33 0 L28.33 8 L28.83 8 L29.33 8 L29.33 0 L28.83 0 Z M32.03 0 L31.53 0 L31.53 8 L32.03 8 L32.53 8 L32.53 0 L32.03 0 Z M35.24 0 L34.74 0 L34.74 8 L35.24 8 L35.74 8 L35.74 0 L35.24 0 Z M38.44 0 L37.94 0 L37.94 8 L38.44 8 L38.94 8 L38.94 0 L38.44 0 Z M41.64 0 L41.14 0 L41.14 8 L41.64 8 L42.14 8 L42.14 0 L41.64 0 Z M44.84 0 L44.34 0 L44.34 8 L44.84 8 L45.34 8 L45.34 0 L44.84 0 Z M48.05 0 L47.55 0 L47.55 8 L48.05 8 L48.55 8 L48.55 0 L48.05 0 Z M51.25 0 L50.75 0 L50.75 8 L51.25 8 L51.75 8 L51.75 0 L51.25 0 Z M54.45 0 L53.95 0 L53.95 8 L54.45 8 L54.95 8 L54.95 0 L54.45 0 Z M57.66 0 L57.16 0 L57.16 8 L57.66 8 L58.16 8 L58.16 0 L57.66 0 Z M60.86 0 L60.36 0 L60.36 8 L60.86 8 L61.36 8 L61.36 0 L60.86 0 Z M64.06 0 L63.56 0 L63.56 8 L64.06 8 L64.56 8 L64.56 0 L64.06 0 Z M67.27 0 L66.77 0 L66.77 8 L67.27 8 L67.77 8 L67.77 0 L67.27 0 Z M70.47 0 L69.97 0 L69.97 8 L70.47 8 L70.97 8 L70.97 0 L70.47 0 Z M73.67 0 L73.17 0 L73.17 8 L73.67 8 L74.17 8 L74.17 0 L73.67 0 Z M76.88 0 L76.38 0 L76.38 8 L76.88 8 L77.38 8 L77.38 0 L76.88 0 Z M80.08 0 L79.58 0 L79.58 8 L80.08 8 L80.58 8 L80.58 0 L80.08 0 Z M83.28 0 L82.78 0 L82.78 8 L83.28 8 L83.78 8 L83.78 0 L83.28 0 Z M86.49 0 L85.99 0 L85.99 8 L86.49 8 L86.99 8 L86.99 0 L86.49 0 Z M89.69 0 L89.19 0 L89.19 8 L89.69 8 L90.19 8 L90.19 0 L89.69 0 Z M92.89 0 L92.39 0 L92.39 8 L92.89 8 L93.39 8 L93.39 0 L92.89 0 Z M96.1 0 L95.6 0 L95.6 8 L96.1 8 L96.6 8 L96.6 0 L96.1 0 Z M99.3 0 L98.8 0 L98.8 8 L99.3 8 L99.8 8 L99.8 0 L99.3 0 Z M102.5 0 L102 0 L102 8 L102.5 8 L103 8 L103 0 L102.5 0 Z M105.71 0 L105.21 0 L105.21 8 L105.71 8 L106.21 8 L106.21 0 L105.71 0 Z M108.91 0 L108.41 0 L108.41 8 L108.91 8 L109.41 8 L109.41 0 L108.91 0 Z M112.11 0 L111.61 0 L111.61 8 L112.11 8 L112.61 8 L112.61 0 L112.11 0 Z M115.32 0 L114.82 0 L114.82 8 L115.32 8 L115.82 8 L115.82 0 L115.32 0 Z M118.52 0 L118.02 0 L118.02 8 L118.52 8 L119.02 8 L119.02 0 L118.52 0 Z M121.72 0 L121.22 0 L121.22 8 L121.72 8 L122.22 8 L122.22 0 L121.72 0 Z M124.93 0 L124.43 0 L124.43 8 L124.93 8 L125.43 8 L125.43 0 L124.93 0 Z M128.13 0 L127.63 0 L127.63 8 L128.13 8 L128.63 8 L128.63 0 L128.13 0 Z M131.33 0 L130.83 0 L130.83 8 L131.33 8 L131.83 8 L131.83 0 L131.33 0 Z M134.53 0 L134.03 0 L134.03 8 L134.53 8 L135.03 8 L135.03 0 L134.53 0 Z M137.74 0 L137.24 0 L137.24 8 L137.74 8 L138.24 8 L138.24 0 L137.74 0 Z M140.94 0 L140.44 0 L140.44 8 L140.94 8 L141.44 8 L141.44 0 L140.94 0 Z M144.14 0 L143.64 0 L143.64 8 L144.14 8 L144.64 8 L144.64 0 L144.14 0 Z M147.35 0 L146.85 0 L146.85 8 L147.35 8 L147.85 8 L147.85 0 L147.35 0 Z M150.55 0 L150.05 0 L150.05 8 L150.55 8 L151.05 8 L151.05 0 L150.55 0 Z M153.75 0 L153.25 0 L153.25 8 L153.75 8 L154.25 8 L154.25 0 L153.75 0 Z M156.96 0 L156.46 0 L156.46 8 L156.96 8 L157.46 8 L157.46 0 L156.96 0 Z M160.16 0 L159.66 0 L159.66 8 L160.16 8 L160.66 8 L160.66 0 L160.16 0 Z M163.36 0 L162.86 0 L162.86 8 L163.36 8 L163.86 8 L163.86 0 L163.36 0 Z M166.57 0 L166.07 0 L166.07 8 L166.57 8 L167.07 8 L167.07 0 L166.57 0 Z M169.77 0 L169.27 0 L169.27 8 L169.77 8 L170.27 8 L170.27 0 L169.77 0 Z M172.97 0 L172.47 0 L172.47 8 L172.97 8 L173.47 8 L173.47 0 L172.97 0 Z M176.18 0 L175.68 0 L175.68 8 L176.18 8 L176.68 8 L176.68 0 L176.18 0 Z M179.38 0 L178.88 0 L178.88 8 L179.38 8 L179.88 8 L179.88 0 L179.38 0 Z M182.58 0 L182.08 0 L182.08 8 L182.58 8 L183.08 8 L183.08 0 L182.58 0 Z M185.79 0 L185.29 0 L185.29 8 L185.79 8 L186.29 8 L186.29 0 L185.79 0 Z M188.99 0 L188.49 0 L188.49 8 L188.99 8 L189.49 8 L189.49 0 L188.99 0 Z M192.19 0 L191.69 0 L191.69 8 L192.19 8 L192.69 8 L192.69 0 L192.19 0 Z M195.4 0 L194.9 0 L194.9 8 L195.4 8 L195.9 8 L195.9 0 L195.4 0 Z M198.6 0 L198.1 0 L198.1 8 L198.6 8 L199.1 8 L199.1 0 L198.6 0 Z M201.8 0 L201.3 0 L201.3 8 L201.8 8 L202.3 8 L202.3 0 L201.8 0 Z M205.01 0 L204.51 0 L204.51 8 L205.01 8 L205.51 8 L205.51 0 L205.01 0 Z M208.21 0 L207.71 0 L207.71 8 L208.21 8 L208.71 8 L208.71 0 L208.21 0 Z M211.41 0 L210.91 0 L210.91 8 L211.41 8 L211.91 8 L211.91 0 L211.41 0 Z M214.61 0 L214.11 0 L214.11 8 L214.61 8 L215.11 8 L215.11 0 L214.61 0 Z M217.82 0 L217.32 0 L217.32 8 L217.82 8 L218.32 8 L218.32 0 L217.82 0 Z" fill="#d4d4d8"/></svg>
              </div>
              <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>$860 spent</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>of $5,000 · 17%</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "869.5px", top: "64px", width: "268.5px", height: "192px", display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "268.5px", height: "148px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(90deg, #f9f6ff 0%, #e8e8e8 100%), linear-gradient(#f8f8f8, #f8f8f8)", boxShadow: "inset 0 0 0 0.8px #f3f3f3", overflow: "hidden", position: "relative" }}>
              <p style={{ position: "absolute", left: "15.7px", top: "15.7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 500, color: "#040404" }}>Engineering</p>
              <Wifi size={18} strokeWidth={1.51} style={{ position: "absolute", left: "250.5px", top: "15px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#040404", display: "block", flexShrink: 0 }} />
              <p style={{ position: "absolute", left: "12.5px", top: "98px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#040404" }}>AWS</p>
              <p style={{ position: "absolute", left: "223px", top: "100px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.4px", fontWeight: 500, color: "#040404" }}>09/28</p>
              <p style={{ position: "absolute", left: "12.5px", top: "118px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 600, color: "#040404", letterSpacing: "0.08em" }}>••••  ••••  ••••  5520</p>
            </div>
            <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "268.5px", height: "8px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "0px", width: "68.47px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #aa95fd 0%, #7c5cfc 100%)", boxShadow: "inset 0 0 0 1px rgba(97, 72, 197, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
                <svg style={{ position: "absolute", left: "72.47px", top: "0px", width: "195.53px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="195.53" height="8" viewBox="0 0 195.53 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M3.21 0 L2.71 0 L2.71 8 L3.21 8 L3.71 8 L3.71 0 L3.21 0 Z M6.41 0 L5.91 0 L5.91 8 L6.41 8 L6.91 8 L6.91 0 L6.41 0 Z M9.62 0 L9.12 0 L9.12 8 L9.62 8 L10.12 8 L10.12 0 L9.62 0 Z M12.82 0 L12.32 0 L12.32 8 L12.82 8 L13.32 8 L13.32 0 L12.82 0 Z M16.03 0 L15.53 0 L15.53 8 L16.03 8 L16.53 8 L16.53 0 L16.03 0 Z M19.23 0 L18.73 0 L18.73 8 L19.23 8 L19.73 8 L19.73 0 L19.23 0 Z M22.44 0 L21.94 0 L21.94 8 L22.44 8 L22.94 8 L22.94 0 L22.44 0 Z M25.64 0 L25.14 0 L25.14 8 L25.64 8 L26.14 8 L26.14 0 L25.64 0 Z M28.85 0 L28.35 0 L28.35 8 L28.85 8 L29.35 8 L29.35 0 L28.85 0 Z M32.05 0 L31.55 0 L31.55 8 L32.05 8 L32.55 8 L32.55 0 L32.05 0 Z M35.26 0 L34.76 0 L34.76 8 L35.26 8 L35.76 8 L35.76 0 L35.26 0 Z M38.47 0 L37.97 0 L37.97 8 L38.47 8 L38.97 8 L38.97 0 L38.47 0 Z M41.67 0 L41.17 0 L41.17 8 L41.67 8 L42.17 8 L42.17 0 L41.67 0 Z M44.88 0 L44.38 0 L44.38 8 L44.88 8 L45.38 8 L45.38 0 L44.88 0 Z M48.08 0 L47.58 0 L47.58 8 L48.08 8 L48.58 8 L48.58 0 L48.08 0 Z M51.29 0 L50.79 0 L50.79 8 L51.29 8 L51.79 8 L51.79 0 L51.29 0 Z M54.49 0 L53.99 0 L53.99 8 L54.49 8 L54.99 8 L54.99 0 L54.49 0 Z M57.7 0 L57.2 0 L57.2 8 L57.7 8 L58.2 8 L58.2 0 L57.7 0 Z M60.9 0 L60.4 0 L60.4 8 L60.9 8 L61.4 8 L61.4 0 L60.9 0 Z M64.11 0 L63.61 0 L63.61 8 L64.11 8 L64.61 8 L64.61 0 L64.11 0 Z M67.31 0 L66.81 0 L66.81 8 L67.31 8 L67.81 8 L67.81 0 L67.31 0 Z M70.52 0 L70.02 0 L70.02 8 L70.52 8 L71.02 8 L71.02 0 L70.52 0 Z M73.73 0 L73.23 0 L73.23 8 L73.73 8 L74.23 8 L74.23 0 L73.73 0 Z M76.93 0 L76.43 0 L76.43 8 L76.93 8 L77.43 8 L77.43 0 L76.93 0 Z M80.14 0 L79.64 0 L79.64 8 L80.14 8 L80.64 8 L80.64 0 L80.14 0 Z M83.34 0 L82.84 0 L82.84 8 L83.34 8 L83.84 8 L83.84 0 L83.34 0 Z M86.55 0 L86.05 0 L86.05 8 L86.55 8 L87.05 8 L87.05 0 L86.55 0 Z M89.75 0 L89.25 0 L89.25 8 L89.75 8 L90.25 8 L90.25 0 L89.75 0 Z M92.96 0 L92.46 0 L92.46 8 L92.96 8 L93.46 8 L93.46 0 L92.96 0 Z M96.16 0 L95.66 0 L95.66 8 L96.16 8 L96.66 8 L96.66 0 L96.16 0 Z M99.37 0 L98.87 0 L98.87 8 L99.37 8 L99.87 8 L99.87 0 L99.37 0 Z M102.57 0 L102.07 0 L102.07 8 L102.57 8 L103.07 8 L103.07 0 L102.57 0 Z M105.78 0 L105.28 0 L105.28 8 L105.78 8 L106.28 8 L106.28 0 L105.78 0 Z M108.99 0 L108.49 0 L108.49 8 L108.99 8 L109.49 8 L109.49 0 L108.99 0 Z M112.19 0 L111.69 0 L111.69 8 L112.19 8 L112.69 8 L112.69 0 L112.19 0 Z M115.4 0 L114.9 0 L114.9 8 L115.4 8 L115.9 8 L115.9 0 L115.4 0 Z M118.6 0 L118.1 0 L118.1 8 L118.6 8 L119.1 8 L119.1 0 L118.6 0 Z M121.81 0 L121.31 0 L121.31 8 L121.81 8 L122.31 8 L122.31 0 L121.81 0 Z M125.01 0 L124.51 0 L124.51 8 L125.01 8 L125.51 8 L125.51 0 L125.01 0 Z M128.22 0 L127.72 0 L127.72 8 L128.22 8 L128.72 8 L128.72 0 L128.22 0 Z M131.42 0 L130.92 0 L130.92 8 L131.42 8 L131.92 8 L131.92 0 L131.42 0 Z M134.63 0 L134.13 0 L134.13 8 L134.63 8 L135.13 8 L135.13 0 L134.63 0 Z M137.83 0 L137.33 0 L137.33 8 L137.83 8 L138.33 8 L138.33 0 L137.83 0 Z M141.04 0 L140.54 0 L140.54 8 L141.04 8 L141.54 8 L141.54 0 L141.04 0 Z M144.25 0 L143.75 0 L143.75 8 L144.25 8 L144.75 8 L144.75 0 L144.25 0 Z M147.45 0 L146.95 0 L146.95 8 L147.45 8 L147.95 8 L147.95 0 L147.45 0 Z M150.66 0 L150.16 0 L150.16 8 L150.66 8 L151.16 8 L151.16 0 L150.66 0 Z M153.86 0 L153.36 0 L153.36 8 L153.86 8 L154.36 8 L154.36 0 L153.86 0 Z M157.07 0 L156.57 0 L156.57 8 L157.07 8 L157.57 8 L157.57 0 L157.07 0 Z M160.27 0 L159.77 0 L159.77 8 L160.27 8 L160.77 8 L160.77 0 L160.27 0 Z M163.48 0 L162.98 0 L162.98 8 L163.48 8 L163.98 8 L163.98 0 L163.48 0 Z M166.68 0 L166.18 0 L166.18 8 L166.68 8 L167.18 8 L167.18 0 L166.68 0 Z M169.89 0 L169.39 0 L169.39 8 L169.89 8 L170.39 8 L170.39 0 L169.89 0 Z M173.09 0 L172.59 0 L172.59 8 L173.09 8 L173.59 8 L173.59 0 L173.09 0 Z M176.3 0 L175.8 0 L175.8 8 L176.3 8 L176.8 8 L176.8 0 L176.3 0 Z M179.51 0 L179.01 0 L179.01 8 L179.51 8 L180.01 8 L180.01 0 L179.51 0 Z M182.71 0 L182.21 0 L182.21 8 L182.71 8 L183.21 8 L183.21 0 L182.71 0 Z M185.92 0 L185.42 0 L185.42 8 L185.92 8 L186.42 8 L186.42 0 L185.92 0 Z M189.12 0 L188.62 0 L188.62 8 L189.12 8 L189.62 8 L189.62 0 L189.12 0 Z M192.33 0 L191.83 0 L191.83 8 L192.33 8 L192.83 8 L192.83 0 L192.33 0 Z M195.53 0 L195.03 0 L195.03 8 L195.53 8 L196.03 8 L196.03 0 L195.53 0 Z" fill="#d4d4d8"/></svg>
              </div>
              <div style={{ width: "268.5px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>$2,040 spent</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7d818c" }}>of $8,000 · 26%</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "284px", width: "1154px", height: "640px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "1154px", height: "60px", boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 16px 1px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "16px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>All cards</p>
              <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", display: "flex", flexDirection: "row", padding: "4px 4px 4px 4px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div data-fu="tab" style={{ height: "26px", flexShrink: 0, borderRadius: "7px", background: "#f4f4f5", boxShadow: "inset 0 0 0 1px #e9e9e9", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#000000" }}>Active</p>
                  <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#e0e7ff", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb" }}>118</p>
                  </div>
                </div>
                <div data-fu="tab" style={{ height: "26px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#646871" }}>Frozen</p>
                  <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>4</p>
                  </div>
                </div>
                <div data-fu="tab" style={{ height: "26px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#646871" }}>Expired</p>
                  <div style={{ height: "20px", flexShrink: 0, borderRadius: "6px", background: "#f1f5f9", display: "flex", flexDirection: "row", padding: "0px 6px 0px 6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>2</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div data-fu="field" style={{ width: "220px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #d6d6d6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Search size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#64748b", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#64748b" }}>Search cardholder, last 4…</p>
              </div>
              <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <AdjustmentsHorizontal size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#7d818c" }}>Filter</p>
              </div>
              <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Upload size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#7d818c" }}>Export</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "0px", top: "60px", width: "1154px", height: "524px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "1154px", height: "44px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #ededed, inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "1px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "230px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Cardholder</p>
              </div>
              <div style={{ width: "200px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Card</p>
              </div>
              <div style={{ width: "140px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Type</p>
              </div>
              <div style={{ width: "200px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Monthly limit</p>
              </div>
              <div style={{ width: "130px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Spent</p>
              </div>
              <div style={{ width: "110px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Expires</p>
              </div>
              <div style={{ width: "144px", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#818892" }}>Status</p>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#e0e9fc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#184099" }}>MP</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Maya Patel</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Design</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
                    </div>
                  </div>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 4242</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Repeat size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Subscription</p>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$5,000</p>
                  <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "33.6px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
                  </div>
                </div>
              </div>
              <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,120.00</p>
              </div>
              <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>06/28</p>
              </div>
              <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#def5ed", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0a7854" }}>LC</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Liam Chen</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Marketing</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/dd52d6f9e2bd846d926206c8f5b26c40c52b382d.png') center / cover no-repeat" }} />
                    </div>
                  </div>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 8817</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Repeat size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Subscription</p>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$5,000</p>
                  <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(16, 185, 129, 0.12)", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "37.2px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #34c394 0%, #10b981 100%)" }} />
                  </div>
                </div>
              </div>
              <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,240.00</p>
              </div>
              <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>11/27</p>
              </div>
              <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#fef1dd", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#9f6707" }}>NK</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Noah Kim</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Sales</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/b94eb4200d125514858483d8ee6f73642a96928a.png') center / cover no-repeat" }} />
                    </div>
                  </div>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 3109</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <MapPinpoint01 size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Travel</p>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$5,000</p>
                  <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(245, 158, 11, 0.12)", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "25.8px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #f7ad30 0%, #f59e0b 100%)" }} />
                  </div>
                </div>
              </div>
              <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$860.00</p>
              </div>
              <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>03/28</p>
              </div>
              <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#ede8ff", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#513ca4" }}>SR</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Sofia Reyes</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Engineering</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/c1b9ac38b4d88317b1ed300762b915082a72b430.png') center / cover no-repeat" }} />
                    </div>
                  </div>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 5520</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Repeat size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Subscription</p>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$8,000</p>
                  <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "38.25px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
                  </div>
                </div>
              </div>
              <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$2,040.00</p>
              </div>
              <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>09/28</p>
              </div>
              <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#def5ed", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0a7854" }}>LC</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Liam Chen</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Marketing</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <svg style={{ width: "16.8px", height: "16.8px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "hidden" }} xmlns="http://www.w3.org/2000/svg" width="16.8" height="16.8" viewBox="0 0 16.8 16.8" fill="none" overflow="hidden"><path transform="matrix(1 0 0 1 0 3.841)" d="M0 0.459364 L0 6.61204 C0.00557812 8.00329 1.14187 9.12285 2.52755 9.11727 L11.4955 9.11727 C11.7505 9.11727 11.9556 8.91219 11.9556 8.66282 L11.9556 2.51047 C11.95 1.11922 10.814 -0.00066769 9.42801 0.00491044 L0.460031 0.00491044 C0.205078 0.00491044 0 0.209989 0 0.459364 Z M12.5265 2.8596 L16.2291 0.154535 C16.5506 -0.111246 16.8 -0.0449648 16.8 0.437379 L16.8 8.6848 C16.8 9.23376 16.4952 9.16715 16.2291 8.96765 L12.5265 6.26816 L12.5265 2.8596 Z" fill="#4a8cff"/><path transform="matrix(1 0 0 1 -153.909 30.544)" d="M6.38401 0.245437 L6.573 1.00931 C5.82954 1.1921 5.11801 1.48625 4.4625 1.8818 L4.05826 1.20717 C4.78062 0.77124 5.56473 0.446999 6.38401 0.245437 Z M10.227 1.00931 C10.9704 1.19222 11.6819 1.48637 12.3375 1.8818 L12.7444 1.20717 C12.0212 0.771002 11.2362 0.446754 10.416 0.245437 L10.227 1.00931 Z M1.20751 4.05792 C0.771211 4.78002 0.446832 5.56406 0.245441 6.38334 L1.00932 6.57235 C1.19215 5.82895 1.4864 5.1175 1.88212 4.46217 L1.20751 4.05792 Z M0.87282 7.25878 L0.0945001 7.14066 C-0.0315 7.97494 -0.0315 8.82342 0.0945001 9.6577 L0.87282 9.53958 C0.758632 8.7836 0.758632 8.01476 0.87282 7.25878 Z M12.3375 14.9166 C11.6828 15.3119 10.9722 15.6062 10.2296 15.7894 L10.4186 16.5532 C11.237 16.3514 12.0202 16.027 12.7417 15.5912 L12.3375 14.9166 Z M15.9272 9.53958 L16.7055 9.6577 C16.8315 8.82342 16.8315 7.97494 16.7055 7.14066 L15.9272 7.25878 C16.041 8.01281 16.041 8.78555 15.9272 9.53958 Z M15.7907 10.226 C15.6076 10.9694 15.3133 11.6809 14.9179 12.3365 L15.5925 12.7434 C16.0287 12.0202 16.353 11.2352 16.5546 10.415 L15.7907 10.226 Z M9.54057 15.9272 C8.78435 16.041 8.01534 16.041 7.25911 15.9272 L7.14132 16.7055 C7.97574 16.8315 8.82426 16.8315 9.65869 16.7055 L9.54057 15.9272 Z M14.5277 12.9153 C14.0739 13.5302 13.5302 14.0734 12.915 14.5267 L13.3822 15.1607 C14.0609 14.6616 14.6609 14.0634 15.162 13.3862 L14.5277 12.9153 Z M12.915 2.27161 C13.5302 2.72564 14.0738 3.26938 14.5277 3.88467 L15.162 3.41217 C14.6624 2.73539 14.0643 2.13726 13.3875 1.63767 L12.915 2.27161 Z M2.27195 3.88467 C2.72589 3.2693 3.26962 2.72555 3.885 2.27161 L3.4125 1.63767 C2.73558 2.13709 2.13741 2.73524 1.638 3.41217 L2.27195 3.88467 Z M14.9179 4.46217 C15.3133 5.11672 15.6076 5.82725 15.7907 6.56972 L16.5546 6.38072 C16.3526 5.56245 16.0282 4.77937 15.5925 4.05792 L14.9179 4.46217 Z M7.25911 0.872811 C8.01544 0.758952 8.78425 0.758952 9.54057 0.872811 L9.65869 0.0945 C8.82429 -0.0315 7.97572 -0.0315 7.14132 0.0945 L7.25911 0.872811 Z M2.67619 15.3694 L1.05 15.7487 L1.42932 14.1225 L0.662823 13.9427 L0.283508 15.5689 C0.15029 16.1365 0.66216 16.6481 1.22982 16.5152 L2.85469 16.1424 L2.67619 15.3694 Z M0.826885 13.2408 L1.59338 13.419 L1.85588 12.2919 C1.47305 11.6489 1.18776 10.9527 1.00932 10.226 L0.245441 10.415 C0.416681 11.111 0.676955 11.7819 1.01982 12.4113 L0.826885 13.2408 Z M3.37444 15.2092 L3.55295 15.9757 L4.38244 15.7828 C5.01183 16.1257 5.68279 16.3859 6.37875 16.5572 L6.56776 15.7933 C5.84265 15.6125 5.14826 15.3254 4.50712 14.9415 L3.37444 15.2092 Z M2.42912 5.10005 C1.22851 7.27388 1.30332 9.92808 2.625 12.0307 L1.96875 14.8299 L4.76831 14.1737 C7.22367 15.7201 10.3888 15.5449 12.6584 13.7366 C14.9281 11.9283 15.8061 8.88267 14.847 6.14414 C12.9019 0.588984 5.25756 -0.0213264 2.42912 5.10005 Z" fill="#3a76f0"/><path transform="matrix(1 0 0 1 -123.457 30.544)" d="M4.26764 6.77399 C8.95851 5.15699 7.30082 -0.154698 7.77595 0.00345793 C10.8469 1.50496 14.3004 4.78096 14.3004 9.69496 C14.3004 13.4625 11.3794 16.793 7.13413 16.793 C3.36824 16.9636 0.176901 14.0508 0.0062761 10.2846 C-0.171239 6.37991 3.47587 3.53212 3.47587 4.23496 C3.50835 4.63527 3.84829 6.77399 4.26764 6.77399 Z" fill="#e73d76" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -96.798 30.591)" d="M8.47809 2.80803 C10.9981 2.95602 12.4737 4.06442 12.6171 5.099 C12.6869 5.77559 12.2374 6.30158 11.4571 6.30158 C10.3172 6.30158 10.2011 4.78236 8.23823 4.78236 C7.35328 4.78236 6.60581 5.15052 6.60581 5.94885 C6.60581 7.61703 12.8943 6.64808 12.8943 10.3214 C12.8943 12.4388 11.1996 13.8261 8.66971 13.8261 C6.44469 13.8261 4.2082 12.8175 4.21935 11.0807 C4.22329 10.5567 4.61376 10.076 5.13416 10.076 C6.44469 10.076 6.43256 12.0228 8.51911 12.0228 C9.98222 12.0228 10.4819 11.2241 10.4819 10.6676 C10.4819 8.65785 4.15635 9.89028 4.15635 6.11028 C4.15635 4.06442 5.83701 2.65349 8.47809 2.80803 Z M9.85818 16.0331 C13.8951 18.4734 18.6217 13.8019 16.0863 9.72228 C17.033 4.31446 12.3011 -0.312763 6.95559 0.681128 C2.92916 -1.77193 -1.81815 2.88383 0.706774 6.97128 C-0.257257 12.3384 4.44772 17.0647 9.85818 16.0331 Z" fill="#178cc8" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -70.825 30.544)" d="M0.333044 16.7997 L3.79969 16.7997 L3.79969 5.59978 L0.333044 5.59978 L0.333044 16.7997 Z M9.34172 10.9207 C9.34172 9.34631 10.0665 8.40787 11.4542 8.40787 C12.729 8.40787 13.3412 9.30825 13.3412 10.9207 L13.3412 16.8 L16.7921 16.7997 L16.7921 9.70856 C16.7921 6.70852 15.0915 5.25787 12.7168 5.25787 C10.3412 5.25787 9.34172 7.1085 9.34172 7.1085 L9.34172 5.59978 L6.01617 5.59978 L6.01617 16.7997 L9.34172 16.7997 L9.34172 10.9207 Z M2.05012 4.13339 C3.18216 4.13339 4.09992 3.20742 4.09992 2.0662 C4.09992 0.925313 3.18216 0 2.05012 0 C0.917437 0 0 0.925313 0 2.0662 C0 3.20742 0.917437 4.13339 2.05012 4.13339 Z" fill="#10658f" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -182.328 52.32)" d="M10.3932 0.0141071 C10.3939 0.270373 10.469 3.97392 14.3557 4.20492 C14.3557 5.27297 14.3567 6.04734 14.3567 7.0665 C14.0623 7.08356 11.7983 6.91917 10.3886 5.66212 L10.3844 11.233 C10.4379 15.0997 7.59269 17.4523 3.87307 16.6399 C-2.54046 14.7213 -0.409292 5.20898 6.03049 6.22716 C6.03049 9.29808 6.03212 6.22617 6.03212 9.29808 C3.37201 8.90662 2.48214 11.1195 3.18892 12.7043 C3.83238 14.1468 6.48132 14.4598 7.40499 12.4245 C7.50967 12.0261 7.56217 11.572 7.56217 11.0621 L7.56217 0 L10.3932 0.0141071 Z" fill="#000000" fillRule="evenodd"/><path transform="matrix(1 0 0 1 -152.044 52.32)" d="M5.37249 11.1114 C4.93149 13.4243 4.39271 15.6418 2.79671 16.8001 C2.30387 13.3042 3.5199 10.6789 4.0846 7.89149 C3.12189 6.27088 4.20045 3.00932 6.23121 3.81322 C8.72988 4.80154 4.06723 9.83858 7.19721 10.4676 C10.4653 11.1242 11.7995 4.79727 9.77331 2.73993 C6.84512 -0.231244 1.24994 2.672 1.93801 6.92582 C2.10536 7.96564 3.17964 8.28097 2.3672 9.71619 C0.493281 9.30079 -0.0658424 7.82291 0.00601702 5.85219 C0.121845 2.62705 2.90401 0.368896 5.69439 0.0565206 C9.2237 -0.338542 12.5358 1.35196 12.9932 4.6716 C13.508 8.41879 11.4002 12.4767 7.62672 12.185 C6.60363 12.1053 6.17443 11.5986 5.37249 11.1114 Z" fill="#d0272c"/><path transform="matrix(1 0 0 1 -124.34 52.32)" d="M1.09561 0 L0 2.92163 L0 14.6075 L4.01559 14.6075 L4.01559 16.8 L6.20779 16.8 L8.39803 14.6075 L11.6839 14.6075 L16.0663 10.2267 L16.0663 0 L1.09561 0 Z M2.55543 1.45983 L14.6062 1.45983 L14.6062 9.49495 L12.0494 12.0517 L8.03315 12.0517 L5.84357 14.2413 L5.84357 12.0517 L2.55543 12.0517 L2.55543 1.45983 Z M6.57234 8.76553 L8.03315 8.76553 L8.03315 4.38342 L6.57234 4.38342 L6.57234 8.76553 Z M10.5889 8.76553 L12.0494 8.76553 L12.0494 4.38342 L10.5889 4.38342 L10.5889 8.76553 Z" fill="#5a3e85"/><path transform="matrix(1 0 0 1 -96.798 53.487)" d="M8.24528 3.39762 C7.86072 3.40451 7.53588 3.73198 7.54277 4.10572 C7.54966 4.49323 7.8686 4.79609 8.26399 4.7915 C8.66036 4.78658 8.96092 4.48044 8.95731 4.08472 C8.95403 3.69655 8.63674 3.3904 8.24528 3.39762 Z M13.1806 7.86767 C12.8758 7.86537 12.6169 8.11508 12.6044 8.42319 C12.5913 8.7523 12.8472 9.023 13.1731 9.02365 C13.4884 9.02464 13.7374 8.78642 13.7489 8.47241 C13.7611 8.14264 13.5051 7.86997 13.1806 7.86767 Z M10.1445 8.47175 C10.1569 8.1433 9.8928 7.86767 9.56369 7.86636 C9.23819 7.86505 8.96519 8.14428 8.97668 8.46781 C8.98718 8.77723 9.24771 9.02726 9.55975 9.02759 C9.87115 9.02792 10.1323 8.78478 10.1445 8.47175 Z M13.7486 13.8664 C13.2685 13.8162 12.7639 14.0932 12.2619 14.1447 C10.7318 14.3012 9.36124 13.8747 8.23085 12.8296 C6.0813 10.8415 6.38842 7.79286 8.87528 6.16372 C11.0855 4.7157 14.3271 5.19837 15.8853 7.20748 C17.2454 8.96065 17.0856 11.288 15.4253 12.761 C14.6506 13.4484 14.9755 13.6676 15.1769 14.4663 C14.7307 14.2674 14.2359 13.9173 13.7486 13.8664 Z M3.81198 3.39795 C3.41987 3.38614 3.09733 3.68604 3.08585 4.07257 C3.07436 4.46436 3.37394 4.77805 3.769 4.78822 C4.16046 4.79806 4.48891 4.49816 4.50334 4.11655 C4.51778 3.73625 4.18637 3.40878 3.81198 3.39795 Z M6.18171 10.4097 C5.57238 10.3342 5.01751 10.2512 4.4597 10.2039 C4.26709 10.1878 4.03839 10.2108 3.87499 10.303 C3.33325 10.6088 2.81383 10.954 2.19827 11.3386 C2.31114 10.8277 2.38432 10.3805 2.51393 9.94995 C2.60908 9.63397 2.56478 9.45777 2.27341 9.2517 C-1.50331 6.58536 -0.311889 1.68022 3.91305 0.300122 C7.2048 -0.775472 11.3359 1.1165 11.6755 4.75081 C8.50221 4.91651 5.8969 7.04965 6.18171 10.4097 Z" fill="#3caf41"/><path transform="matrix(1 0 0 1 -70.83 55.949)" d="M4.73813 0 C7.35493 0 9.47625 2.13609 9.47625 4.77061 C9.47625 7.40545 7.35493 9.54122 4.73813 9.54122 C2.12133 9.54122 0 7.40545 0 4.77061 C0 2.13609 2.12133 0 4.73813 0 Z M12.3047 0.279563 C13.6133 0.279563 14.6738 2.28998 14.6738 4.77061 C14.678 5.36845 14.4241 9.26198 12.305 9.26198 C10.9965 9.26198 9.93563 7.25058 9.93563 4.77061 C9.93563 2.29064 10.9965 0.279563 12.3047 0.279563 Z M15.9669 0.747141 C16.4269 0.747141 16.8 2.54855 16.8 4.77061 C16.8 6.99202 16.4269 8.79408 15.9669 8.79408 C15.5065 8.79408 15.1338 6.99267 15.1338 4.77061 C15.1338 2.54855 15.5065 0.747141 15.9669 0.747141 Z" fill="#1e1b1e"/><path transform="matrix(1 0 0 1 -46.481 52.32)" d="M6.13659 0.0111551 C5.21325 0.0111551 4.45889 0.765515 4.45889 1.68886 C4.45889 2.6122 5.21325 3.36656 6.13659 3.36656 L7.81462 3.36656 L7.81462 1.68886 C7.81462 0.765515 7.07142 0.0111551 6.13659 0.0111551 Z M0 10.6408 C0 11.5641 0.75436 12.3185 1.6777 12.3185 C2.60105 12.3185 3.3554 11.5641 3.3554 10.6408 L3.3554 8.96306 L1.6777 8.96306 C0.743203 8.96306 0 9.71742 0 10.6408 Z M4.47005 10.6408 L4.47005 15.1223 C4.47005 16.0456 5.22473 16.8 6.14808 16.8 C7.07142 16.8 7.82578 16.0456 7.82578 15.1223 L7.82578 10.6408 C7.82578 9.71742 7.07142 8.96306 6.14808 8.96306 C5.21325 8.96306 4.47005 9.71742 4.47005 10.6408 Z M10.607 16.8 C11.5303 16.8 12.2847 16.0456 12.2847 15.1223 C12.2847 14.1989 11.5303 13.4446 10.607 13.4446 L8.92927 13.4446 L8.92927 15.1223 C8.92927 16.0456 9.68362 16.8 10.607 16.8 Z M15.0773 12.3185 C16.0007 12.3185 16.755 11.5641 16.755 10.6408 C16.755 9.71742 16.0007 8.96306 15.0773 8.96306 L10.607 8.96306 C9.68362 8.96306 8.92927 9.71742 8.92927 10.6408 C8.92927 11.5641 9.68362 12.3185 10.607 12.3185 L15.0773 12.3185 Z M16.755 6.15923 C16.755 5.23589 16.0007 4.48153 15.0773 4.48153 C14.154 4.48153 13.3993 5.23589 13.3993 6.15923 L13.3993 7.83694 L15.0773 7.83694 C16.0007 7.84842 16.755 7.09373 16.755 6.15923 Z M12.2847 6.15923 L12.2847 1.6777 C12.2847 0.75436 11.5303 0 10.607 0 C9.68362 0 8.92927 0.75436 8.92927 1.6777 L8.92927 6.15923 C8.92927 7.08258 9.68362 7.83694 10.607 7.83694 C11.5415 7.84842 12.2847 7.09373 12.2847 6.15923 Z M6.13659 4.48153 L1.6777 4.48153 C0.75436 4.48153 0 5.23589 0 6.15923 C0 7.08258 0.75436 7.83694 1.6777 7.83694 L6.14808 7.83694 C7.07142 7.83694 7.82578 7.08258 7.82578 6.15923 C7.81462 5.23589 7.07142 4.48153 6.13659 4.48153 Z" fill="#e01e5a"/><path transform="matrix(1 0 0 1 -46.634 32.977)" d="M16.7999 0.51436 L14.143 13.911 C14.143 13.911 13.7713 14.84 12.7495 14.394 L6.58992 9.67988 C7.41778 8.93536 13.8405 3.16167 14.121 2.89983 C14.5552 2.49459 14.2861 2.25342 13.7811 2.55989 L4.29469 8.58394 L0.63478 7.35183 C0.63478 7.35183 0.0589203 7.14774 0.00313905 6.70181 C-0.0526422 6.25589 0.653481 6.01439 0.653481 6.01439 L15.5737 0.161297 C15.5737 0.161297 16.7999 -0.377484 16.7999 0.51436 Z" fill="#23b7ec"/></svg>
                  </div>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 6630</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Repeat size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Subscription</p>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,000</p>
                  <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(16, 185, 129, 0.12)", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "67.5px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #34c394 0%, #10b981 100%)" }} />
                  </div>
                </div>
              </div>
              <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$450.00</p>
              </div>
              <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>02/28</p>
              </div>
              <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#fceae8", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#99453d" }}>AJ</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Ava Johnson</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>HR</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                      <div style={{ position: "absolute", left: "-0.4px", top: "-0.4px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/2241eb9e90bd7762609a0b334568806d0ddacb36.png') center / cover no-repeat" }} />
                    </div>
                  </div>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 1984</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Repeat size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>Subscription</p>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$1,000</p>
                  <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "79.53px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
                  </div>
                </div>
              </div>
              <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$530.20</p>
              </div>
              <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>08/27</p>
              </div>
              <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#e0e9fc", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#184099" }}>MP</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Maya Patel</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Design</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
                    </div>
                  </div>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 7710</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CreditCard size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>One-time</p>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$500</p>
                  <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "84.12px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #467aee 0%, #2563eb 100%)" }} />
                  </div>
                </div>
              </div>
              <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$280.40</p>
              </div>
              <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>05/26</p>
              </div>
              <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#16a34a" }}>Active</p>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1154px", height: "60px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "230px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 16px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "999px", background: "#def5ed", boxShadow: "inset 0 0 0 1px #ffffff", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0a7854" }}>LC</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Liam Chen</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Marketing</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "16.8px", height: "16.8px", flexShrink: 0, position: "relative" }}>
                      <div style={{ position: "absolute", left: "0px", top: "0px", width: "16.8px", height: "16.8px", background: "url('https://ingotui.com/library-img/31aaca83a4864f35dba467eb853566eebfeb77a6.png') center / cover no-repeat" }} />
                    </div>
                  </div>
                  <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>•••• 2291</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <CreditCard size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>One-time</p>
                </div>
              </div>
              <div style={{ width: "200px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$500</p>
                  <div style={{ width: "150px", height: "5px", flexShrink: 0, borderRadius: "2.5px", background: "rgba(16, 185, 129, 0.12)", overflow: "hidden", position: "relative" }}>
                    <div style={{ position: "absolute", left: "0px", top: "0px", width: "0.75px", height: "5px", opacity: 0.85, borderRadius: "2.5px", background: "linear-gradient(180deg, #34c394 0%, #10b981 100%)" }} />
                  </div>
                </div>
              </div>
              <div style={{ width: "130px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>$0.00</p>
              </div>
              <div style={{ width: "110px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#666d80" }}>04/26</p>
              </div>
              <div style={{ width: "144px", height: "59px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e0f6ff", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#2563eb", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb" }}>Frozen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "266px", top: "92px", width: "1154px", height: "46px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#000000", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <WalletSolid size={20} strokeWidth={2.26} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#0f172a" }}>Cards</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "473px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>Issue, limit and freeze Halcyon’s virtual cards — 124 active, 2 issued today.</p>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Shield size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#0f172a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Card policies</p>
          </div>
          <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Plus size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Issue new card</p>
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
