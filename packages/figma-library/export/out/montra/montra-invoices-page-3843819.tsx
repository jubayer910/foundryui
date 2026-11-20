"use client";
// Invoices page (montra, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AdjustmentsHorizontal, AlertTriangle, ArrowDataTransferHorizontal, Bell, Calendar, ChartIncrease, ChartLine, ChartPie, ChevronDown, ChevronRight, Clock, CreditCard, Currency, Dots, File, FileExport, FileInvoice, HandCoins, HelpCircle, LayoutDashboard, Plus, Repeat, Search, Settings, Tag, Target, Wallet } from "ingotui-icons/react/stroke-rounded";

export function InvoicesPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1316px", height: "1003px", background: "#f9f9f9", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "1316px", height: "1003px", overflow: "hidden" }}>
        <svg style={{ position: "absolute", left: "224.82px", top: "0px", width: "1px", height: "968.72px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="968.72" viewBox="0 0 1 968.72" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.456944 L0 0 L968.722 0 L968.722 -0.456944 L968.722 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "224.82px", height: "1019.9px", background: "#ffffff", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "78.59px", height: "21px", display: "flex", flexDirection: "row", gap: "23.76px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20.11px", height: "20.11px", flexShrink: 0, borderRadius: "3.02px", background: "#000000", backdropFilter: "blur(0.51px)", boxShadow: "inset 0 0 0 0.38px rgba(255, 255, 255, 0.4)", overflow: "hidden", display: "flex", flexDirection: "row", gap: "2.56px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "39.26px", height: "39.26px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="39.26" height="39.26" viewBox="0 0 39.26 39.26" fill="none" overflow="visible"><defs><linearGradient id="g24_gnjq" gradientUnits="userSpaceOnUse" x1="14.30" y1="32.59" x2="8.63" y2="0.00"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/></linearGradient></defs><path transform="matrix(-0.707 0.707 -0.707 -0.707 39.262 23.044)" d="M2.7812e-12 0 L22.9347 0 L19.8768 32.5896 L3.05797 32.5896 L2.7812e-12 0 Z" fill="url(#g24_gnjq)"/></svg>
                <svg style={{ width: "9.35px", height: "10.67px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="9.35" height="10.67" viewBox="0 0 9.35 10.67" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.302)" d="M1.20502 3.98103 C1.20551 3.2393 1.50594 2.52811 2.04029 2.0038 C2.57463 1.47949 3.29915 1.18496 4.05459 1.18496 L4.05459 0 C2.97924 6.38819e-16 1.94794 0.419429 1.18756 1.16602 C0.427179 1.9126 1.13859e-15 2.92519 0 3.98103 C1.30125e-15 5.03686 0.427179 6.04945 1.18756 6.79604 C1.94794 7.54263 2.97924 7.96206 4.05459 7.96206 L4.05459 6.7771 C3.29915 6.7771 2.57463 6.48257 2.04029 5.95826 C1.50594 5.43394 1.20551 4.72276 1.20502 3.98103 Z" fill="#ffffff"/><path transform="matrix(1 0 0 1 4.055 2.487)" d="M2.8459 2.79607 C2.8459 2.05482 2.54613 1.3439 2.01247 0.819585 C1.47881 0.295272 0.754949 0.00047669 0 0 L0 5.59034 C0.373729 5.59034 0.743799 5.51806 1.08908 5.37764 C1.43436 5.23721 1.74809 5.03139 2.01236 4.77192 C2.27662 4.51245 2.48625 4.20441 2.62927 3.86539 C2.77229 3.52637 2.8459 3.16302 2.8459 2.79607 Z" fill="#ffffff"/><path transform="matrix(1 0 0 1 4.055 0)" d="M0 0 L0 1.30363 C1.07534 1.30363 2.10664 1.72306 2.86703 2.46965 C3.62741 3.21624 4.05459 4.22883 4.05459 5.28466 C4.05459 6.3405 3.62741 7.35309 2.86703 8.09967 C2.10664 8.84626 1.07534 9.26569 0 9.26569 L0 10.5693 C1.42748 10.5693 2.79649 10.0125 3.80587 9.02148 C4.81524 8.03042 5.38231 6.68624 5.38231 5.28466 C5.38231 3.88308 4.81524 2.53891 3.80587 1.54784 C2.79649 0.556775 1.42748 9.18302e-16 0 0 Z" fill="#ffffff"/></svg>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 600, color: "#000000", letterSpacing: "-0.05em" }}>Montra</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "63.97px", width: "193.74px", height: "698.21px", display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "74px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#a6a6a6" }}>MAIN MENU</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "36.56px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", gap: "9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <LayoutDashboard size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "64px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Dashboard</p>
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ArrowDataTransferHorizontal size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "75px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Transactions</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <Wallet size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Accounts</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "63.97px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <ChartPie size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "50px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Budgets</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #eeeeee", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "63.97px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <FileInvoice size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#000000", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "50px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Invoices</p>
                  </div>
                </div>
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "63.97px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <CreditCard size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Payments</p>
                  </div>
                </div>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <svg style={{ width: "193.74px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="193.74" height="1" viewBox="0 0 193.74 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.456944 L0 0 L193.744 0 L193.744 -0.456944 L193.744 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#a6a6a6" }}>ANALYTICS</p>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <File size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "102px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Financial Reports</p>
                        </div>
                      </div>
                    </div>
                    <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <Currency size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Cash Flow</p>
                        </div>
                      </div>
                    </div>
                    <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <ChartIncrease size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "108px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Spending Analysis</p>
                        </div>
                      </div>
                    </div>
                    <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <ChartLine size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "58px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Forecasts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <svg style={{ width: "193.74px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="193.74" height="1" viewBox="0 0 193.74 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.456944 L0 0 L193.744 0 L193.744 -0.456944 L193.744 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "90px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#a6a6a6" }}>MANAGEMENT</p>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <Target size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "89px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Financial Goals</p>
                        </div>
                      </div>
                    </div>
                    <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <Repeat size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "118px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Recurring Payments</p>
                        </div>
                      </div>
                    </div>
                    <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <Tag size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "64px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Categories</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <svg style={{ width: "193.74px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="193.74" height="1" viewBox="0 0 193.74 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.456944 L0 0 L193.744 0 L193.744 -0.456944 L193.744 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#a6a6a6" }}>SETTINGS</p>
                    </div>
                  </div>
                  <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <HelpCircle size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Help Center</p>
                        </div>
                      </div>
                    </div>
                    <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                      <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <Settings size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "96px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>System Settings</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "243.09px", top: "25.59px", width: "163.56px", height: "22px", display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <LayoutDashboard size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#b3b3b3" }}>Workspace</p>
          </div>
          <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Invoices</p>
        </div>
        <div style={{ position: "absolute", left: "1085.7px", top: "18.28px", width: "212.02px", height: "31.62px", display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "138.91px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.31px 5.48px 7.31px 9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "63.97px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#686765" }}>Search</p>
            </div>
          </div>
          <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "#ffffff", boxShadow: "inset 0 0 0 0.78px #e8e8e8", overflow: "hidden", position: "relative" }}>
            <Bell size={18.6} strokeWidth={1.51} style={{ position: "absolute", left: "6.21px", top: "6.6px", width: "18.64px", height: "18.64px", color: "#686765", display: "block", flexShrink: 0 }} />
          </div>
          <div style={{ width: "31.07px", height: "31.07px", flexShrink: 0, borderRadius: "6.21px", background: "#ffffff", boxShadow: "inset 0 0 0 0.78px #e8e8e8", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "-3.56px", top: "3.11px", width: "38.19px", height: "30.3px", background: "url('https://ingotui.com/library-img/f3bd7733d508155bcb01d85374d81844b290a080.png') center / cover no-repeat" }} />
          </div>
        </div>
        <svg style={{ position: "absolute", left: "225.73px", top: "73.11px", width: "1090.27px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1090.27" height="1" viewBox="0 0 1090.27 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.456944 L0 0 L1090.27 0 L1090.27 -0.456944 L1090.27 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
      </div>
      <div style={{ position: "absolute", left: "244px", top: "165px", width: "1053.7px", height: "819px" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "251.7px", height: "118.8px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)" }}>
          <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "240.73px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 14.62px 0.91px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <FileInvoice size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Outstanding</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$7,850</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "188.08px", height: "16.45px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "16.45px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.45" height="16.45" viewBox="0 0 16.45 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L8.22 6.85 L4.11 0 L0 6.85 Z" fill="#fd872f"/><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L-0.62597 6.47442 C-0.761281 6.69994 -0.764825 6.98081 -0.635246 7.20967 C-0.505667 7.43853 -0.262999 7.58 -2.0849e-16 7.58 L0 6.85 Z M8.22 6.85 L8.22 7.58 C8.483 7.58 8.72567 7.43853 8.85525 7.20967 C8.98483 6.98081 8.98128 6.69994 8.84597 6.47442 L8.22 6.85 Z M4.11 0 L4.73597 -0.375582 C4.60404 -0.595462 4.36642 -0.73 4.11 -0.73 C3.85358 -0.73 3.61596 -0.595462 3.48403 -0.375582 L4.11 0 Z M0 6.85 L0 7.58 L8.22 7.58 L8.22 6.85 L8.22 6.12 L0 6.12 L0 6.85 Z M8.22 6.85 L8.84597 6.47442 L4.73597 -0.375582 L4.11 0 L3.48403 0.375582 L7.59403 7.22558 L8.22 6.85 Z M4.11 0 L3.48403 -0.375582 L-0.62597 6.47442 L0 6.85 L0.62597 7.22558 L4.73597 0.375582 L4.11 0 Z" fill="#fd872f"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#fd872f" }}>8.2%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "132px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>9 invoices · due in 30 days</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "267.33px", top: "0px", width: "251.7px", height: "118.8px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)" }}>
          <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "240.73px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 14.62px 0.91px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #f45363 0%, #ffc7cd 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <AlertTriangle size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Overdue</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$1,920</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "135.08px", height: "16.45px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "16.45px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.45" height="16.45" viewBox="0 0 16.45 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L8.22 6.85 L4.11 0 L0 6.85 Z" fill="#f45363"/><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L-0.62597 6.47442 C-0.761281 6.69994 -0.764825 6.98081 -0.635246 7.20967 C-0.505667 7.43853 -0.262999 7.58 -2.0849e-16 7.58 L0 6.85 Z M8.22 6.85 L8.22 7.58 C8.483 7.58 8.72567 7.43853 8.85525 7.20967 C8.98483 6.98081 8.98128 6.69994 8.84597 6.47442 L8.22 6.85 Z M4.11 0 L4.73597 -0.375582 C4.60404 -0.595462 4.36642 -0.73 4.11 -0.73 C3.85358 -0.73 3.61596 -0.595462 3.48403 -0.375582 L4.11 0 Z M0 6.85 L0 7.58 L8.22 7.58 L8.22 6.85 L8.22 6.12 L0 6.12 L0 6.85 Z M8.22 6.85 L8.84597 6.47442 L4.73597 -0.375582 L4.11 0 L3.48403 0.375582 L7.59403 7.22558 L8.22 6.85 Z M4.11 0 L3.48403 -0.375582 L-0.62597 6.47442 L0 6.85 L0.62597 7.22558 L4.73597 0.375582 L4.11 0 Z" fill="#f45363"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#f45363" }}>3</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>3 invoices past due</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "534.66px", top: "0px", width: "251.7px", height: "118.8px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)" }}>
          <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "240.73px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 14.62px 0.91px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #0ab7bd 0%, #a9fcff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <HandCoins size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Paid in August</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$14,920</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "157.08px", height: "16.45px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "16.45px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.45" height="16.45" viewBox="0 0 16.45 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L8.22 6.85 L4.11 0 L0 6.85 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L-0.62597 6.47442 C-0.761281 6.69994 -0.764825 6.98081 -0.635246 7.20967 C-0.505667 7.43853 -0.262999 7.58 -2.0849e-16 7.58 L0 6.85 Z M8.22 6.85 L8.22 7.58 C8.483 7.58 8.72567 7.43853 8.85525 7.20967 C8.98483 6.98081 8.98128 6.69994 8.84597 6.47442 L8.22 6.85 Z M4.11 0 L4.73597 -0.375582 C4.60404 -0.595462 4.36642 -0.73 4.11 -0.73 C3.85358 -0.73 3.61596 -0.595462 3.48403 -0.375582 L4.11 0 Z M0 6.85 L0 7.58 L8.22 7.58 L8.22 6.85 L8.22 6.12 L0 6.12 L0 6.85 Z M8.22 6.85 L8.84597 6.47442 L4.73597 -0.375582 L4.11 0 L3.48403 0.375582 L7.59403 7.22558 L8.22 6.85 Z M4.11 0 L3.48403 -0.375582 L-0.62597 6.47442 L0 6.85 L0.62597 7.22558 L4.73597 0.375582 L4.11 0 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#18b170" }}>6.4%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>Across 31 payments</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "801.99px", top: "0px", width: "251.7px", height: "118.8px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)" }}>
          <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "240.73px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 14.62px 0.91px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #91d02b 0%, #e2ffb3 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Clock size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "109px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Avg. days to pay</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>18 days</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "151.08px", height: "16.45px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "16.45px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.45" height="16.45" viewBox="0 0 16.45 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 0 L8.22 0 L4.11 6.85 L0 0 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 0 L0 -0.73 C-0.262999 -0.73 -0.505667 -0.588531 -0.635246 -0.35967 C-0.764825 -0.130809 -0.761281 0.150063 -0.62597 0.375582 L0 0 Z M8.22 0 L8.84597 0.375582 C8.98128 0.150063 8.98483 -0.130809 8.85525 -0.35967 C8.72567 -0.588531 8.483 -0.73 8.22 -0.73 L8.22 0 Z M4.11 6.85 L3.48403 7.22558 C3.61596 7.44546 3.85358 7.58 4.11 7.58 C4.36642 7.58 4.60404 7.44546 4.73597 7.22558 L4.11 6.85 Z M0 0 L0 0.73 L8.22 0.73 L8.22 0 L8.22 -0.73 L0 -0.73 L0 0 Z M8.22 0 L7.59403 -0.375582 L3.48403 6.47442 L4.11 6.85 L4.73597 7.22558 L8.84597 0.375582 L8.22 0 Z M4.11 6.85 L4.73597 6.47442 L0.62597 -0.375582 L0 0 L-0.62597 0.375582 L3.48403 7.22558 L4.11 6.85 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#18b170" }}>-3 days</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>Faster than July</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "138px", width: "711px", height: "353.7px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Receivables aging</p>
          <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "322px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Open invoices by due date, and when cash should land.</p>
          <div data-fu="btn" style={{ position: "absolute", left: "577.9px", top: "18.28px", width: "114.82px", height: "29.24px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 8.22px 0.91px 8.22px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Calendar size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>By due date</p>
            <ChevronDown size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "76.77px", width: "674.44px", height: "23.76px", display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "354.75px", height: "23.76px", flexShrink: 0, borderRadius: "11.88px", background: "linear-gradient(180deg, #61a4fe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "148.52px", height: "23.76px", flexShrink: 0, borderRadius: "11.88px", background: "linear-gradient(180deg, #9d93fd 0%, #8e83fd 100%)", boxShadow: "inset 0 0 0 1px rgba(111, 102, 197, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "105.24px", height: "23.76px", flexShrink: 0, borderRadius: "11.88px", background: "linear-gradient(180deg, #fd974a 0%, #fd872f 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 105, 37, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "57.71px", height: "23.76px", flexShrink: 0, borderRadius: "11.88px", background: "linear-gradient(180deg, #f56977 0%, #f45363 100%)", boxShadow: "inset 0 0 0 1px rgba(190, 65, 77, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden", position: "relative" }}>
              <svg style={{ position: "absolute", left: "-23.76px", top: "0px", width: "128.87px", height: "23.76px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="128.87" height="23.76" viewBox="0 0 128.87 23.76" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 23.76 L0.452548 24.2125 L24.2125 0.452548 L23.76 0 L23.3075 -0.452548 L-0.452548 23.3075 L0 23.76 Z M4.57 23.76 L5.02255 24.2125 L28.7825 0.452548 L28.33 0 L27.8775 -0.452548 L4.11745 23.3075 L4.57 23.76 Z M9.14 23.76 L9.59255 24.2125 L33.3526 0.452548 L32.9 0 L32.4475 -0.452548 L8.68745 23.3075 L9.14 23.76 Z M13.71 23.76 L14.1625 24.2125 L37.9226 0.452548 L37.47 0 L37.0175 -0.452548 L13.2575 23.3075 L13.71 23.76 Z M18.28 23.76 L18.7325 24.2125 L42.4925 0.452548 L42.04 0 L41.5875 -0.452548 L17.8275 23.3075 L18.28 23.76 Z M22.85 23.76 L23.3025 24.2125 L47.0625 0.452548 L46.61 0 L46.1575 -0.452548 L22.3975 23.3075 L22.85 23.76 Z M27.42 23.76 L27.8725 24.2125 L51.6325 0.452548 L51.18 0 L50.7275 -0.452548 L26.9675 23.3075 L27.42 23.76 Z M31.99 23.76 L32.4425 24.2125 L56.2025 0.452548 L55.75 0 L55.2975 -0.452548 L31.5375 23.3075 L31.99 23.76 Z M36.56 23.76 L37.0126 24.2125 L60.7725 0.452548 L60.32 0 L59.8675 -0.452548 L36.1075 23.3075 L36.56 23.76 Z M41.13 23.76 L41.5826 24.2125 L65.3425 0.452548 L64.89 0 L64.4375 -0.452548 L40.6775 23.3075 L41.13 23.76 Z M45.7 23.76 L46.1525 24.2125 L69.9125 0.452548 L69.46 0 L69.0075 -0.452548 L45.2475 23.3075 L45.7 23.76 Z M50.27 23.76 L50.7225 24.2125 L74.4825 0.452548 L74.03 0 L73.5775 -0.452548 L49.8175 23.3075 L50.27 23.76 Z M54.84 23.76 L55.2925 24.2125 L79.0525 0.452548 L78.6 0 L78.1475 -0.452548 L54.3875 23.3075 L54.84 23.76 Z M59.41 23.76 L59.8625 24.2125 L83.6225 0.452548 L83.17 0 L82.7175 -0.452548 L58.9575 23.3075 L59.41 23.76 Z M63.98 23.76 L64.4325 24.2125 L88.1925 0.452548 L87.74 0 L87.2875 -0.452548 L63.5275 23.3075 L63.98 23.76 Z M68.55 23.76 L69.0025 24.2125 L92.7625 0.452548 L92.31 0 L91.8575 -0.452548 L68.0975 23.3075 L68.55 23.76 Z M73.12 23.76 L73.5725 24.2125 L97.3325 0.452548 L96.88 0 L96.4275 -0.452548 L72.6675 23.3075 L73.12 23.76 Z M77.69 23.76 L78.1425 24.2125 L101.903 0.452548 L101.45 0 L100.997 -0.452548 L77.2375 23.3075 L77.69 23.76 Z M82.26 23.76 L82.7125 24.2125 L106.473 0.452548 L106.02 0 L105.567 -0.452548 L81.8075 23.3075 L82.26 23.76 Z M86.83 23.76 L87.2825 24.2125 L111.043 0.452548 L110.59 0 L110.137 -0.452548 L86.3775 23.3075 L86.83 23.76 Z M91.4 23.76 L91.8525 24.2125 L115.613 0.452548 L115.16 0 L114.707 -0.452548 L90.9475 23.3075 L91.4 23.76 Z M95.97 23.76 L96.4225 24.2125 L120.183 0.452548 L119.73 0 L119.277 -0.452548 L95.5175 23.3075 L95.97 23.76 Z M100.54 23.76 L100.993 24.2125 L124.753 0.452548 L124.3 0 L123.847 -0.452548 L100.087 23.3075 L100.54 23.76 Z M105.11 23.76 L105.563 24.2125 L129.323 0.452548 L128.87 0 L128.417 -0.452548 L104.657 23.3075 L105.11 23.76 Z" fill="#ffffff" fillOpacity="0.09"/></svg>
            </div>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "113.32px", width: "674.44px", height: "36.66px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "160.38px", flexShrink: 0, boxShadow: "inset 1.83px 0 0 0 #4996fe", display: "flex", flexDirection: "column", padding: "0px 0px 0px 10.97px", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Not yet due</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#202020" }}>$4,180</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>53% · 4 invoices</p>
              </div>
            </div>
            <div style={{ width: "160.38px", flexShrink: 0, boxShadow: "inset 1.83px 0 0 0 #8e83fd", display: "flex", flexDirection: "column", padding: "0px 0px 0px 10.97px", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Due in 1–30 days</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#202020" }}>$1,750</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>22% · 2 invoices</p>
              </div>
            </div>
            <div style={{ width: "160.38px", flexShrink: 0, boxShadow: "inset 1.83px 0 0 0 #fd872f", display: "flex", flexDirection: "column", padding: "0px 0px 0px 10.97px", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>1–30 days late</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#202020" }}>$1,240</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>16% · 2 invoices</p>
              </div>
            </div>
            <div style={{ width: "160.38px", flexShrink: 0, boxShadow: "inset 1.83px 0 0 0 #f45363", display: "flex", flexDirection: "column", padding: "0px 0px 0px 10.97px", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>30+ days late</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#202020" }}>$680</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>9% · 1 invoice</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "168.16px", width: "674.44px", height: "0.91px", background: "#ededed" }} />
          <div style={{ position: "absolute", left: "18.28px", top: "180.95px", width: "674.44px", height: "17px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Collection forecast</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>next 6 weeks</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Expected</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#fecfac", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>At risk</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "206.54px", width: "674.44px", height: "139.85px" }}>
            <div style={{ position: "absolute", left: "34.73px", top: "7.31px", width: "103.26px", height: "112.43px", borderRadius: "7.31px", background: "rgba(73, 150, 254, 0.06)" }} />
            <svg style={{ position: "absolute", left: "32.9px", top: "7.31px", width: "641.54px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="641.54" height="1" viewBox="0 0 641.54 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L641.5399780273438 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
            <p style={{ position: "absolute", left: "0px", top: "0.31px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$3.6K</p>
            <svg style={{ position: "absolute", left: "32.9px", top: "63.52px", width: "641.54px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="641.54" height="1" viewBox="0 0 641.54 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L641.5399780273438 0" fill="none" stroke="#efeff1" strokeWidth="1" strokeDasharray="2.740000009536743 2.740000009536743" strokeLinecap="butt"/></svg>
            <p style={{ position: "absolute", left: "0px", top: "56.52px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$1.8K</p>
            <div style={{ position: "absolute", left: "32.9px", top: "119.24px", width: "641.54px", height: "1px", background: "#e2e2e5" }} />
            <p style={{ position: "absolute", left: "10.59px", top: "112.74px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>$0</p>
            <div data-fu="bar" style={{ position: "absolute", left: "60.77px", top: "38.54px", width: "51.18px", height: "81.2px", borderRadius: "3.66px", background: "linear-gradient(180deg, #61a4fe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "167.7px", top: "70.4px", width: "51.18px", height: "49.34px", borderRadius: "3.66px", background: "linear-gradient(180deg, #61a4fe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "167.7px", top: "65.09px", width: "51.18px", height: "3.3px", borderRadius: "1.65px", background: "linear-gradient(180deg, #fee0c9 0%, #fed6b8 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 128, 45, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "274.62px", top: "81.01px", width: "51.18px", height: "38.73px", borderRadius: "3.66px", background: "linear-gradient(180deg, #61a4fe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "381.54px", top: "92.88px", width: "51.18px", height: "26.86px", borderRadius: "3.66px", background: "linear-gradient(180deg, #61a4fe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "381.54px", top: "81.01px", width: "51.18px", height: "9.86px", borderRadius: "3.66px", background: "linear-gradient(180deg, #fee0c9 0%, #fed6b8 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 128, 45, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
              <svg style={{ position: "absolute", left: "-9.86px", top: "0px", width: "78.41px", height: "9.86px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="78.41" height="9.86" viewBox="0 0 78.41 9.86" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 9.86 L0.452548 10.3125 L10.3125 0.452548 L9.86 0 L9.40745 -0.452548 L-0.452548 9.40745 L0 9.86 Z M4.57 9.86 L5.02255 10.3125 L14.8825 0.452548 L14.43 0 L13.9775 -0.452548 L4.11745 9.40745 L4.57 9.86 Z M9.14 9.86 L9.59255 10.3125 L19.4525 0.452548 L19 0 L18.5475 -0.452548 L8.68745 9.40745 L9.14 9.86 Z M13.71 9.86 L14.1625 10.3125 L24.0225 0.452548 L23.57 0 L23.1175 -0.452548 L13.2575 9.40745 L13.71 9.86 Z M18.28 9.86 L18.7325 10.3125 L28.5925 0.452548 L28.14 0 L27.6875 -0.452548 L17.8275 9.40745 L18.28 9.86 Z M22.85 9.86 L23.3025 10.3125 L33.1625 0.452548 L32.71 0 L32.2575 -0.452548 L22.3975 9.40745 L22.85 9.86 Z M27.42 9.86 L27.8725 10.3125 L37.7325 0.452548 L37.28 0 L36.8274 -0.452548 L26.9675 9.40745 L27.42 9.86 Z M31.99 9.86 L32.4425 10.3125 L42.3025 0.452548 L41.85 0 L41.3974 -0.452548 L31.5375 9.40745 L31.99 9.86 Z M36.56 9.86 L37.0126 10.3125 L46.8725 0.452548 L46.42 0 L45.9674 -0.452548 L36.1075 9.40745 L36.56 9.86 Z M41.13 9.86 L41.5826 10.3125 L51.4426 0.452548 L50.99 0 L50.5375 -0.452548 L40.6775 9.40745 L41.13 9.86 Z M45.7 9.86 L46.1525 10.3125 L56.0126 0.452548 L55.56 0 L55.1075 -0.452548 L45.2475 9.40745 L45.7 9.86 Z M50.27 9.86 L50.7225 10.3125 L60.5826 0.452548 L60.13 0 L59.6775 -0.452548 L49.8175 9.40745 L50.27 9.86 Z M54.84 9.86 L55.2925 10.3125 L65.1525 0.452548 L64.7 0 L64.2475 -0.452548 L54.3875 9.40745 L54.84 9.86 Z M59.41 9.86 L59.8625 10.3125 L69.7225 0.452548 L69.27 0 L68.8175 -0.452548 L58.9575 9.40745 L59.41 9.86 Z M63.98 9.86 L64.4325 10.3125 L74.2925 0.452548 L73.84 0 L73.3875 -0.452548 L63.5275 9.40745 L63.98 9.86 Z M68.55 9.86 L69.0025 10.3125 L78.8625 0.452548 L78.41 0 L77.9575 -0.452548 L68.0975 9.40745 L68.55 9.86 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
            </div>
            <div data-fu="bar" style={{ position: "absolute", left: "488.47px", top: "106.62px", width: "51.18px", height: "13.12px", borderRadius: "3.66px", background: "linear-gradient(180deg, #61a4fe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div data-fu="bar" style={{ position: "absolute", left: "488.47px", top: "97.25px", width: "51.18px", height: "7.36px", borderRadius: "3.66px", background: "linear-gradient(180deg, #fee0c9 0%, #fed6b8 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 128, 45, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
              <svg style={{ position: "absolute", left: "-7.36px", top: "0px", width: "71.34px", height: "7.36px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="71.34" height="7.36" viewBox="0 0 71.34 7.36" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 7.36 L0.452548 7.81255 L7.81255 0.452548 L7.36 0 L6.90745 -0.452548 L-0.452548 6.90745 L0 7.36 Z M4.57 7.36 L5.02255 7.81255 L12.3825 0.452548 L11.93 0 L11.4775 -0.452548 L4.11745 6.90745 L4.57 7.36 Z M9.14 7.36 L9.59255 7.81255 L16.9525 0.452548 L16.5 0 L16.0475 -0.452548 L8.68745 6.90745 L9.14 7.36 Z M13.71 7.36 L14.1625 7.81255 L21.5225 0.452548 L21.07 0 L20.6175 -0.452548 L13.2575 6.90745 L13.71 7.36 Z M18.28 7.36 L18.7325 7.81255 L26.0925 0.452548 L25.64 0 L25.1875 -0.452548 L17.8275 6.90745 L18.28 7.36 Z M22.85 7.36 L23.3025 7.81255 L30.6625 0.452548 L30.21 0 L29.7575 -0.452548 L22.3975 6.90745 L22.85 7.36 Z M27.42 7.36 L27.8725 7.81255 L35.2325 0.452548 L34.78 0 L34.3274 -0.452548 L26.9675 6.90745 L27.42 7.36 Z M31.99 7.36 L32.4425 7.81255 L39.8025 0.452548 L39.35 0 L38.8974 -0.452548 L31.5375 6.90745 L31.99 7.36 Z M36.56 7.36 L37.0126 7.81255 L44.3725 0.452548 L43.92 0 L43.4674 -0.452548 L36.1075 6.90745 L36.56 7.36 Z M41.13 7.36 L41.5826 7.81255 L48.9426 0.452548 L48.49 0 L48.0375 -0.452548 L40.6775 6.90745 L41.13 7.36 Z M45.7 7.36 L46.1525 7.81255 L53.5126 0.452548 L53.06 0 L52.6075 -0.452548 L45.2475 6.90745 L45.7 7.36 Z M50.27 7.36 L50.7225 7.81255 L58.0826 0.452548 L57.63 0 L57.1775 -0.452548 L49.8175 6.90745 L50.27 7.36 Z M54.84 7.36 L55.2925 7.81255 L62.6525 0.452548 L62.2 0 L61.7475 -0.452548 L54.3875 6.90745 L54.84 7.36 Z M59.41 7.36 L59.8625 7.81255 L67.2225 0.452548 L66.77 0 L66.3175 -0.452548 L58.9575 6.90745 L59.41 7.36 Z M63.98 7.36 L64.4325 7.81255 L71.7925 0.452548 L71.34 0 L70.8875 -0.452548 L63.5275 6.90745 L63.98 7.36 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
            </div>
            <div data-fu="bar" style={{ position: "absolute", left: "595.39px", top: "98.5px", width: "51.18px", height: "21.24px", borderRadius: "3.66px", background: "linear-gradient(180deg, #fee0c9 0%, #fed6b8 100%)", boxShadow: "inset 0 0 0 1px rgba(240, 128, 45, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }}>
              <svg style={{ position: "absolute", left: "-21.24px", top: "0px", width: "112.64px", height: "21.24px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="112.64" height="21.24" viewBox="0 0 112.64 21.24" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 21.24 L0.452548 21.6925 L21.6925 0.452548 L21.24 0 L20.7875 -0.452548 L-0.452548 20.7875 L0 21.24 Z M4.57 21.24 L5.02255 21.6925 L26.2625 0.452548 L25.81 0 L25.3575 -0.452548 L4.11745 20.7875 L4.57 21.24 Z M9.14 21.24 L9.59255 21.6925 L30.8325 0.452548 L30.38 0 L29.9275 -0.452548 L8.68745 20.7875 L9.14 21.24 Z M13.71 21.24 L14.1625 21.6925 L35.4025 0.452548 L34.95 0 L34.4975 -0.452548 L13.2575 20.7875 L13.71 21.24 Z M18.28 21.24 L18.7325 21.6925 L39.9725 0.452548 L39.52 0 L39.0675 -0.452548 L17.8275 20.7875 L18.28 21.24 Z M22.85 21.24 L23.3025 21.6925 L44.5425 0.452548 L44.09 0 L43.6375 -0.452548 L22.3975 20.7875 L22.85 21.24 Z M27.42 21.24 L27.8725 21.6925 L49.1125 0.452548 L48.66 0 L48.2075 -0.452548 L26.9675 20.7875 L27.42 21.24 Z M31.99 21.24 L32.4425 21.6925 L53.6825 0.452548 L53.23 0 L52.7775 -0.452548 L31.5375 20.7875 L31.99 21.24 Z M36.56 21.24 L37.0126 21.6925 L58.2525 0.452548 L57.8 0 L57.3475 -0.452548 L36.1075 20.7875 L36.56 21.24 Z M41.13 21.24 L41.5826 21.6925 L62.8225 0.452548 L62.37 0 L61.9174 -0.452548 L40.6775 20.7875 L41.13 21.24 Z M45.7 21.24 L46.1525 21.6925 L67.3925 0.452548 L66.94 0 L66.4875 -0.452548 L45.2475 20.7875 L45.7 21.24 Z M50.27 21.24 L50.7225 21.6925 L71.9625 0.452548 L71.51 0 L71.0575 -0.452548 L49.8175 20.7875 L50.27 21.24 Z M54.84 21.24 L55.2925 21.6925 L76.5325 0.452548 L76.08 0 L75.6275 -0.452548 L54.3875 20.7875 L54.84 21.24 Z M59.41 21.24 L59.8625 21.6925 L81.1025 0.452548 L80.65 0 L80.1975 -0.452548 L58.9575 20.7875 L59.41 21.24 Z M63.98 21.24 L64.4325 21.6925 L85.6725 0.452548 L85.22 0 L84.7675 -0.452548 L63.5275 20.7875 L63.98 21.24 Z M68.55 21.24 L69.0025 21.6925 L90.2425 0.452548 L89.79 0 L89.3375 -0.452548 L68.0975 20.7875 L68.55 21.24 Z M73.12 21.24 L73.5725 21.6925 L94.8125 0.452548 L94.36 0 L93.9075 -0.452548 L72.6675 20.7875 L73.12 21.24 Z M77.69 21.24 L78.1425 21.6925 L99.3825 0.452548 L98.93 0 L98.4775 -0.452548 L77.2375 20.7875 L77.69 21.24 Z M82.26 21.24 L82.7125 21.6925 L103.953 0.452548 L103.5 0 L103.047 -0.452548 L81.8075 20.7875 L82.26 21.24 Z M86.83 21.24 L87.2825 21.6925 L108.523 0.452548 L108.07 0 L107.617 -0.452548 L86.3775 20.7875 L86.83 21.24 Z M91.4 21.24 L91.8525 21.6925 L113.093 0.452548 L112.64 0 L112.187 -0.452548 L90.9475 20.7875 L91.4 21.24 Z" fill="#ffffff" fillOpacity="0.6"/></svg>
            </div>
            <p style={{ position: "absolute", left: "68.86px", top: "125.23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#1f1f22" }}>Aug 10</p>
            <p style={{ position: "absolute", left: "176.78px", top: "125.23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Aug 17</p>
            <p style={{ position: "absolute", left: "282.21px", top: "125.23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Aug 24</p>
            <p style={{ position: "absolute", left: "390.13px", top: "125.23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Aug 31</p>
            <p style={{ position: "absolute", left: "499.55px", top: "125.23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Sep 7</p>
            <p style={{ position: "absolute", left: "607.48px", top: "125.23px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Later</p>
            <div style={{ position: "absolute", left: "35.46px", top: "14.57px", width: "101.8px", height: "18.48px", borderRadius: "5.48px", background: "#1f1f22", boxShadow: "0px 1.83px 5.48px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "2.74px 6.4px 2.74px 6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>This week · $2,600</p>
            </div>
            <svg style={{ position: "absolute", left: "82.7px", top: "32.55px", width: "7.31px", height: "3.66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="3.66" viewBox="0 0 7.31 3.66" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L7.31 0 L3.66 3.66 L0 0 Z" fill="#1f1f22"/></svg>
            <div style={{ position: "absolute", left: "529.82px", top: "72.71px", width: "144.62px", height: "20.3px", borderRadius: "5.48px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 1.83px 5.48px 0px rgba(0, 0, 0, 0.12)", display: "flex", flexDirection: "row", padding: "3.65px 7.31px 3.65px 7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#1f1f22" }}>Harbor & Vale · $680 at risk</p>
            </div>
            <svg style={{ position: "absolute", left: "617.32px", top: "92.51px", width: "7.31px", height: "3.66px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="3.66" viewBox="0 0 7.31 3.66" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L7.31 0 L3.66 3.66 L0 0 Z" fill="#ffffff"/></svg>
          </div>
        </div>
        <div style={{ position: "absolute", left: "729.3px", top: "138px", width: "324.4px", height: "353.7px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Top clients</p>
          <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "137px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Open balance by client.</p>
          <div data-fu="btn" style={{ position: "absolute", left: "246.02px", top: "18.28px", width: "60.1px", height: "25.59px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>View all</p>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "73.11px", width: "287.84px", height: "230.28px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div data-fu="row" style={{ width: "287.84px", height: "38.38px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "999px", background: "#e2eeff", boxShadow: "inset 0 0 0 0.91px #ffffff", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.7px", fontWeight: 500, color: "#2f62a5" }}>NS</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Northwind Studio</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>2 invoices · next due Aug 18</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>$2,400</p>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.64px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "287.84px", height: "38.38px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "999px", background: "#d8f3f4", boxShadow: "inset 0 0 0 0.91px #ffffff", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.7px", fontWeight: 500, color: "#07777b" }}>BH</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Brightline Health</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>2 invoices · next due Aug 27</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>$1,850</p>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.64px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "287.84px", height: "38.38px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "999px", background: "#edebff", boxShadow: "inset 0 0 0 0.91px #ffffff", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.7px", fontWeight: 500, color: "#5c55a4" }}>KL</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Kestrel Labs</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#f45363" }}>2 invoices · 8 days late</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>$1,240</p>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.64px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #f56876 0%, #f45363 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #f56876 0%, #f45363 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #f56876 0%, #f45363 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #f56876 0%, #f45363 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #f56876 0%, #f45363 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #f56876 0%, #f45363 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "287.84px", height: "38.38px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "999px", background: "#ffecde", boxShadow: "inset 0 0 0 0.91px #ffffff", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.7px", fontWeight: 500, color: "#a4581f" }}>OR</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Oakridge Retail</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>1 invoice · due Aug 22</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>$980</p>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.64px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "287.84px", height: "38.38px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "999px", background: "#f5edd6", boxShadow: "inset 0 0 0 0.91px #ffffff", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.7px", fontWeight: 500, color: "#7d5d00" }}>LC</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Lumen Coffee</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>1 invoice · due Sep 02</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>$700</p>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.64px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(73, 150, 254, 0.16)" }} />
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "287.84px", height: "38.38px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "999px", background: "#fde3e6", boxShadow: "inset 0 0 0 0.91px #ffffff", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.7px", fontWeight: 500, color: "#9f3640" }}>HV</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Harbor & Vale</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#f45363" }}>1 invoice · 41 days late</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>$680</p>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "1.64px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #f56876 0%, #f45363 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #f56876 0%, #f45363 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "linear-gradient(180deg, #f56876 0%, #f45363 100%)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                  <div style={{ width: "2.19px", height: "5.48px", flexShrink: 0, borderRadius: "1.1px", background: "rgba(244, 83, 99, 0.16)" }} />
                </div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "310.37px", width: "287.84px", height: "25.05px", boxShadow: "inset 0 0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "10.05px 0px 0px 0px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Total open · 9 invoices</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#202020" }}>$7,850</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "510px", width: "1053.7px", height: "309px", borderRadius: "14.62px", background: "#fefefe", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "18.28px", top: "21.93px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>All invoices</p>
          <div style={{ position: "absolute", left: "160px", top: "15.53px", width: "363.31px", height: "31.07px", borderRadius: "9.14px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.74px 2.74px 2.74px 2.74px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #eeeeee, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#000000" }}>All</p>
              <div style={{ height: "16.45px", flexShrink: 0, borderRadius: "999px", background: "#222222", display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>24</p>
              </div>
            </div>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#646871" }}>Outstanding</p>
              <div style={{ height: "16.45px", flexShrink: 0, borderRadius: "999px", background: "#f0f0f2", display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>9</p>
              </div>
            </div>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#646871" }}>Overdue</p>
              <div style={{ height: "16.45px", flexShrink: 0, borderRadius: "999px", background: "#f0f0f2", display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>3</p>
              </div>
            </div>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#646871" }}>Drafts</p>
              <div style={{ height: "16.45px", flexShrink: 0, borderRadius: "999px", background: "#f0f0f2", display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>2</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "761.33px", top: "15.53px", width: "274.09px", height: "31.07px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="field" style={{ width: "191.92px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={13.7} strokeWidth={1.51} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#686765", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#686765" }}>Search invoices</p>
            </div>
            <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <AdjustmentsHorizontal size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Filter</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "0px", top: "62.14px", width: "1053.7px", height: "246.75px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "1053.7px", height: "49.35px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "210px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Invoice</p>
              </div>
              <div style={{ width: "190px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Client</p>
              </div>
              <div style={{ width: "130px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Issued</p>
              </div>
              <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Due</p>
              </div>
              <div style={{ width: "130px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Amount</p>
              </div>
              <div style={{ width: "150px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Status</p>
              </div>
              <div style={{ width: "93.7px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Actions</p>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1053.7px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "210px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <FileInvoice size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>INV-1048</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Brand system · phase 2</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "190px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Northwind Studio</p>
              </div>
              <div style={{ width: "130px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Aug 08</p>
              </div>
              <div style={{ width: "150px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Sep 07</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>in 29 days</p>
                </div>
              </div>
              <div style={{ width: "130px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>$1,600</p>
              </div>
              <div style={{ width: "150px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#4e57ed"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed" }}>Sent</p>
                </div>
              </div>
              <div style={{ width: "93.7px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1053.7px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "210px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #f45363 0%, #ffc7cd 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <FileInvoice size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>INV-1046</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>API integration sprint</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "190px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Kestrel Labs</p>
              </div>
              <div style={{ width: "130px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Jul 02</p>
              </div>
              <div style={{ width: "150px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Aug 01</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#f45363" }}>8 days late</p>
                </div>
              </div>
              <div style={{ width: "130px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>$720</p>
              </div>
              <div style={{ width: "150px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#fff1f2", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#e5384a"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#e5384a" }}>Overdue</p>
                </div>
              </div>
              <div style={{ width: "93.7px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1053.7px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "210px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #8e83fd 0%, #d9d4ff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <FileInvoice size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>INV-1045</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Patient portal UX audit</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "190px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Brightline Health</p>
              </div>
              <div style={{ width: "130px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Jul 28</p>
              </div>
              <div style={{ width: "150px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Aug 27</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>in 18 days</p>
                </div>
              </div>
              <div style={{ width: "130px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>$1,100</p>
              </div>
              <div style={{ width: "150px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#4e57ed"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed" }}>Sent</p>
                </div>
              </div>
              <div style={{ width: "93.7px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1053.7px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "210px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #0ab7bd 0%, #a9fcff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <FileInvoice size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>INV-1044</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Website retainer · July</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "190px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Northwind Studio</p>
              </div>
              <div style={{ width: "130px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Jul 10</p>
              </div>
              <div style={{ width: "150px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Aug 09</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#00a77d" }}>paid Aug 09</p>
                </div>
              </div>
              <div style={{ width: "130px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>$4,200</p>
              </div>
              <div style={{ width: "150px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>Paid</p>
                </div>
              </div>
              <div style={{ width: "93.7px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "244px", top: "91px", width: "1053.7px", height: "52.09px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Invoices</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "239px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#6b6b6b", letterSpacing: "-0.02em" }}>$7,850 outstanding across 9 invoices</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <FileExport size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Export</p>
          </div>
          <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "linear-gradient(90deg, #222222 0%, #3a3a3a 50%, #222222 100%)", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Plus size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>New invoice</p>
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
