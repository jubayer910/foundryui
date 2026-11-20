"use client";
// Recurring Payments page (montra, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AdjustmentsHorizontal, AlertTriangle, ArrowDataTransferHorizontal, Bell, Calendar, ChartIncrease, ChartLine, ChartPie, Check, ChevronDown, ChevronLeft, ChevronRight, Clock, CreditCard, Currency, Dots, File, FileInvoice, HelpCircle, LayoutDashboard, Plus, Repeat, Search, Settings, Tag, Target, Wallet } from "ingotui-icons/react/stroke-rounded";

export function RecurringPaymentsPage() {
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
                <svg style={{ width: "39.26px", height: "39.26px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="39.26" height="39.26" viewBox="0 0 39.26 39.26" fill="none" overflow="visible"><defs><linearGradient id="g10_gm5e" gradientUnits="userSpaceOnUse" x1="14.30" y1="32.59" x2="8.63" y2="0.00"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/></linearGradient></defs><path transform="matrix(-0.707 0.707 -0.707 -0.707 39.262 23.044)" d="M2.7812e-12 0 L22.9347 0 L19.8768 32.5896 L3.05797 32.5896 L2.7812e-12 0 Z" fill="url(#g10_gm5e)"/></svg>
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
                <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "63.97px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <FileInvoice size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#646871", display: "block" }} />
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "48px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#646871" }}>Invoices</p>
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
                      <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #eeeeee", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <Repeat size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#000000", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "121px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Recurring Payments</p>
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
        <div style={{ position: "absolute", left: "243.09px", top: "25.59px", width: "247.56px", height: "22px", display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <LayoutDashboard size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#b3b3b3" }}>Workspace</p>
          </div>
          <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "143px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Recurring Payments</p>
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
              <Repeat size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "89px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Monthly total</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$3,940</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "164.08px", height: "16.45px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "16.45px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.45" height="16.45" viewBox="0 0 16.45 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L8.22 6.85 L4.11 0 L0 6.85 Z" fill="#fd872f"/><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L-0.62597 6.47442 C-0.761281 6.69994 -0.764825 6.98081 -0.635246 7.20967 C-0.505667 7.43853 -0.262999 7.58 -2.0849e-16 7.58 L0 6.85 Z M8.22 6.85 L8.22 7.58 C8.483 7.58 8.72567 7.43853 8.85525 7.20967 C8.98483 6.98081 8.98128 6.69994 8.84597 6.47442 L8.22 6.85 Z M4.11 0 L4.73597 -0.375582 C4.60404 -0.595462 4.36642 -0.73 4.11 -0.73 C3.85358 -0.73 3.61596 -0.595462 3.48403 -0.375582 L4.11 0 Z M0 6.85 L0 7.58 L8.22 7.58 L8.22 6.85 L8.22 6.12 L0 6.12 L0 6.85 Z M8.22 6.85 L8.84597 6.47442 L4.73597 -0.375582 L4.11 0 L3.48403 0.375582 L7.59403 7.22558 L8.22 6.85 Z M4.11 0 L3.48403 -0.375582 L-0.62597 6.47442 L0 6.85 L0.62597 7.22558 L4.73597 0.375582 L4.11 0 Z" fill="#fd872f"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#fd872f" }}>1.1%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>18 subscriptions & bills</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "267.33px", top: "0px", width: "251.7px", height: "118.8px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)" }}>
          <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "240.73px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 14.62px 0.91px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #8e83fd 0%, #d9d4ff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Annual total</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$47,280</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "139.08px", height: "16.45px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "16.45px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.45" height="16.45" viewBox="0 0 16.45 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L8.22 6.85 L4.11 0 L0 6.85 Z" fill="#fd872f"/><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L-0.62597 6.47442 C-0.761281 6.69994 -0.764825 6.98081 -0.635246 7.20967 C-0.505667 7.43853 -0.262999 7.58 -2.0849e-16 7.58 L0 6.85 Z M8.22 6.85 L8.22 7.58 C8.483 7.58 8.72567 7.43853 8.85525 7.20967 C8.98483 6.98081 8.98128 6.69994 8.84597 6.47442 L8.22 6.85 Z M4.11 0 L4.73597 -0.375582 C4.60404 -0.595462 4.36642 -0.73 4.11 -0.73 C3.85358 -0.73 3.61596 -0.595462 3.48403 -0.375582 L4.11 0 Z M0 6.85 L0 7.58 L8.22 7.58 L8.22 6.85 L8.22 6.12 L0 6.12 L0 6.85 Z M8.22 6.85 L8.84597 6.47442 L4.73597 -0.375582 L4.11 0 L3.48403 0.375582 L7.59403 7.22558 L8.22 6.85 Z M4.11 0 L3.48403 -0.375582 L-0.62597 6.47442 L0 6.85 L0.62597 7.22558 L4.73597 0.375582 L4.11 0 Z" fill="#fd872f"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#fd872f" }}>$516</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>At current prices</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "534.66px", top: "0px", width: "251.7px", height: "118.8px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)" }}>
          <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "240.73px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 14.62px 0.91px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #0ab7bd 0%, #a9fcff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Clock size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Due this week</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$1,180</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "142.08px", height: "16.45px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "16.45px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.45" height="16.45" viewBox="0 0 16.45 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L8.22 6.85 L4.11 0 L0 6.85 Z" fill="#18b170"/><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L-0.62597 6.47442 C-0.761281 6.69994 -0.764825 6.98081 -0.635246 7.20967 C-0.505667 7.43853 -0.262999 7.58 -2.0849e-16 7.58 L0 6.85 Z M8.22 6.85 L8.22 7.58 C8.483 7.58 8.72567 7.43853 8.85525 7.20967 C8.98483 6.98081 8.98128 6.69994 8.84597 6.47442 L8.22 6.85 Z M4.11 0 L4.73597 -0.375582 C4.60404 -0.595462 4.36642 -0.73 4.11 -0.73 C3.85358 -0.73 3.61596 -0.595462 3.48403 -0.375582 L4.11 0 Z M0 6.85 L0 7.58 L8.22 7.58 L8.22 6.85 L8.22 6.12 L0 6.12 L0 6.85 Z M8.22 6.85 L8.84597 6.47442 L4.73597 -0.375582 L4.11 0 L3.48403 0.375582 L7.59403 7.22558 L8.22 6.85 Z M4.11 0 L3.48403 -0.375582 L-0.62597 6.47442 L0 6.85 L0.62597 7.22558 L4.73597 0.375582 L4.11 0 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#18b170" }}>4</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>Charges, Aug 10 – 15</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "801.99px", top: "0px", width: "251.7px", height: "118.8px", borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)" }}>
          <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "240.73px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "15.53px 14.62px 0.91px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #fd872f 0%, #ffd3b0 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <AlertTriangle size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Price changes</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>2</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "162.08px", height: "16.45px", display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "16.45px", height: "16.45px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16.45" height="16.45" viewBox="0 0 16.45 16.45" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L8.22 6.85 L4.11 0 L0 6.85 Z" fill="#fd872f"/><path transform="matrix(1 0 0 1 4.115 4.8)" d="M0 6.85 L-0.62597 6.47442 C-0.761281 6.69994 -0.764825 6.98081 -0.635246 7.20967 C-0.505667 7.43853 -0.262999 7.58 -2.0849e-16 7.58 L0 6.85 Z M8.22 6.85 L8.22 7.58 C8.483 7.58 8.72567 7.43853 8.85525 7.20967 C8.98483 6.98081 8.98128 6.69994 8.84597 6.47442 L8.22 6.85 Z M4.11 0 L4.73597 -0.375582 C4.60404 -0.595462 4.36642 -0.73 4.11 -0.73 C3.85358 -0.73 3.61596 -0.595462 3.48403 -0.375582 L4.11 0 Z M0 6.85 L0 7.58 L8.22 7.58 L8.22 6.85 L8.22 6.12 L0 6.12 L0 6.85 Z M8.22 6.85 L8.84597 6.47442 L4.73597 -0.375582 L4.11 0 L3.48403 0.375582 L7.59403 7.22558 L8.22 6.85 Z M4.11 0 L3.48403 -0.375582 L-0.62597 6.47442 L0 6.85 L0.62597 7.22558 L4.73597 0.375582 L4.11 0 Z" fill="#fd872f"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#fd872f" }}>+$43/mo</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>Figma and Slack</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "138px", width: "711px", height: "353.7px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>August calendar</p>
          <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "178px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>18 charges · $3,940 scheduled</p>
          <div style={{ position: "absolute", left: "574.58px", top: "18.28px", width: "118.14px", height: "25.59px", display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 3.11px 3.11px 0px rgba(0, 0, 0, 0.05), inset 0px 3.11px 3.11px 0px rgba(255, 255, 255, 0.29)", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronLeft size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Aug 2026</p>
            <div data-fu="btn" style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 3.11px 3.11px 0px rgba(0, 0, 0, 0.05), inset 0px 3.11px 3.11px 0px rgba(255, 255, 255, 0.29)", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
            </div>
          </div>
          <div style={{ position: "absolute", left: "397.87px", top: "43.87px", width: "294.85px", height: "14px", display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Software</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Rent & office</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#fd872f", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Utilities</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Insurance</p>
            </div>
          </div>
          <p data-fu="cell" style={{ position: "absolute", left: "25.59px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Mon</p>
          <p data-fu="cell" style={{ position: "absolute", left: "122.46px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Tue</p>
          <p data-fu="cell" style={{ position: "absolute", left: "219.33px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Wed</p>
          <p data-fu="cell" style={{ position: "absolute", left: "316.2px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Thu</p>
          <p data-fu="cell" style={{ position: "absolute", left: "413.08px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Fri</p>
          <p data-fu="cell" style={{ position: "absolute", left: "509.95px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Sat</p>
          <p data-fu="cell" style={{ position: "absolute", left: "606.82px", top: "76px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#818892" }}>Sun</p>
          <div style={{ position: "absolute", left: "14.62px", top: "173.37px", width: "681.75px", height: "44.16px", borderRadius: "9.14px", background: "rgba(73, 150, 254, 0.06)", outline: "0.91px dashed rgba(73, 150, 254, 0.35)", outlineOffset: "-0.91px" }} />
          <div style={{ position: "absolute", left: "18.28px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>27</p>
          </div>
          <div style={{ position: "absolute", left: "115.15px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>28</p>
          </div>
          <div style={{ position: "absolute", left: "212.02px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>29</p>
          </div>
          <div style={{ position: "absolute", left: "308.89px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>30</p>
          </div>
          <div style={{ position: "absolute", left: "405.77px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>31</p>
          </div>
          <div style={{ position: "absolute", left: "502.64px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "5px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>1</p>
            <div style={{ position: "absolute", left: "29.16px", top: "9.29px", width: "58.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(142, 131, 253, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(142, 131, 253, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#635cb1", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(92, 85, 164, 0.75)" }}>$1,450</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "599.51px", top: "96px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>2</p>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>3</p>
            <div style={{ position: "absolute", left: "36.16px", top: "9.29px", width: "51.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#3369b2", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(47, 98, 165, 0.75)" }}>$225</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "115.15px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>4</p>
            <div style={{ position: "absolute", left: "44.16px", top: "9.29px", width: "43.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#3369b2", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(47, 98, 165, 0.75)" }}>$74</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "212.02px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>5</p>
            <div style={{ position: "absolute", left: "41.16px", top: "9.29px", width: "46.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#3369b2", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(47, 98, 165, 0.75)" }}>$131</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "308.89px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>6</p>
            <div style={{ position: "absolute", left: "42.16px", top: "9.29px", width: "45.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#3369b2", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(47, 98, 165, 0.75)" }}>$84</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "405.77px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "6px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>7</p>
            <div style={{ position: "absolute", left: "38.16px", top: "9.29px", width: "49.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#3369b2", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(47, 98, 165, 0.75)" }}>$149</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "502.64px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#a6a6a6" }}>8</p>
            <div style={{ position: "absolute", left: "42.16px", top: "9.29px", width: "45.57px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.08)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={10.1} style={{ width: "10.05px", height: "10.05px", flexShrink: 0, color: "#3369b2", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "rgba(47, 98, 165, 0.75)" }}>$96</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "599.51px", top: "136.51px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <div style={{ position: "absolute", left: "7.31px", top: "8.37px", width: "20.11px", height: "20.11px", borderRadius: "999px", background: "#222222", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#ffffff" }}>9</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>10</p>
            <div style={{ position: "absolute", left: "48.95px", top: "9.29px", width: "38.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#2c5a98" }}>$336</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "115.15px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>11</p>
            <div style={{ position: "absolute", left: "48.95px", top: "9.29px", width: "38.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(142, 131, 253, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(142, 131, 253, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#554f98" }}>$420</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "212.02px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>12</p>
            <div style={{ position: "absolute", left: "48.95px", top: "9.29px", width: "38.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(99, 192, 147, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(99, 192, 147, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#3b7358" }}>$236</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "308.89px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>13</p>
          </div>
          <div style={{ position: "absolute", left: "405.77px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>14</p>
            <div style={{ position: "absolute", left: "51.95px", top: "9.29px", width: "35.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(253, 135, 47, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(253, 135, 47, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#98511c" }}>$188</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "502.64px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>15</p>
          </div>
          <div style={{ position: "absolute", left: "599.51px", top: "177.03px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>16</p>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>17</p>
          </div>
          <div style={{ position: "absolute", left: "115.15px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>18</p>
            <div style={{ position: "absolute", left: "51.95px", top: "9.29px", width: "35.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(253, 135, 47, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(253, 135, 47, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#98511c" }}>$142</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "212.02px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>19</p>
          </div>
          <div style={{ position: "absolute", left: "308.89px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>20</p>
            <div style={{ position: "absolute", left: "54.95px", top: "9.29px", width: "32.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#2c5a98" }}>$60</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "405.77px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>21</p>
            <div style={{ position: "absolute", left: "55.95px", top: "9.29px", width: "31.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#2c5a98" }}>$70</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "502.64px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>22</p>
          </div>
          <div style={{ position: "absolute", left: "599.51px", top: "217.54px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>23</p>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>24</p>
            <div style={{ position: "absolute", left: "50.95px", top: "9.29px", width: "36.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(253, 135, 47, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(253, 135, 47, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#98511c" }}>$120</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "115.15px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>25</p>
            <div style={{ position: "absolute", left: "56.95px", top: "9.29px", width: "30.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(99, 192, 147, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(99, 192, 147, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "18px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#3b7358" }}>$74</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "212.02px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>26</p>
          </div>
          <div style={{ position: "absolute", left: "308.89px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>27</p>
            <div style={{ position: "absolute", left: "54.95px", top: "9.29px", width: "32.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#2c5a98" }}>$45</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "405.77px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>28</p>
            <div style={{ position: "absolute", left: "54.95px", top: "9.29px", width: "32.78px", height: "18.28px", borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.14)", boxShadow: "inset 0 0 0 0.91px rgba(73, 150, 254, 0.28)", display: "flex", flexDirection: "row", padding: "0.91px 6.39px 0.91px 6.39px", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#2c5a98" }}>$40</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "502.64px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>29</p>
          </div>
          <div style={{ position: "absolute", left: "599.51px", top: "258.05px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>30</p>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "12px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>31</p>
          </div>
          <div style={{ position: "absolute", left: "115.15px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "5px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>1</p>
          </div>
          <div style={{ position: "absolute", left: "212.02px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>2</p>
          </div>
          <div style={{ position: "absolute", left: "308.89px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>3</p>
          </div>
          <div style={{ position: "absolute", left: "405.77px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>4</p>
          </div>
          <div style={{ position: "absolute", left: "502.64px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>5</p>
          </div>
          <div style={{ position: "absolute", left: "599.51px", top: "298.57px", width: "93.21px", height: "36.85px", borderRadius: "7.31px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #f2f2f2" }}>
            <p style={{ position: "absolute", left: "7.31px", top: "11.43px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#c4c4c8" }}>6</p>
          </div>
          <div style={{ position: "absolute", left: "557.8px", top: "163.23px", width: "129.44px", height: "21.93px", borderRadius: "6.4px", background: "#1f1f22", display: "flex", flexDirection: "row", padding: "0px 8.22px 0px 8.22px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#ffffff" }}>Due this week · $1,180</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "729.3px", top: "138px", width: "324.4px", height: "353.7px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>By type</p>
          <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "199px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Share of the $3,940 monthly total</p>
          <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "235.53px", width: "287.84px", height: "14px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Rent & office</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#0f172a" }}>$1,870 · 47%</p>
          </div>
          <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "259.29px", width: "287.84px", height: "14px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Software</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#0f172a" }}>$1,310 · 33%</p>
          </div>
          <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "283.05px", width: "287.84px", height: "14px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#fd872f", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Utilities</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#0f172a" }}>$450 · 12%</p>
          </div>
          <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "306.81px", width: "287.84px", height: "14px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Insurance</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#0f172a" }}>$310 · 8%</p>
          </div>
          <div style={{ position: "absolute", left: "93.66px", top: "82px", width: "137.08px", height: "137.08px" }}>
            <svg style={{ position: "absolute", left: "9.14px", top: "9.14px", width: "118.8px", height: "118.8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="118.8" height="118.8" viewBox="0 0 118.8 118.8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M59.43 118.8 L59.4328 127.94 L59.4328 127.94 L59.43 118.8 Z M2.53891e-05 59.45 L9.14002 59.4417 L9.14002 59.4417 L2.53891e-05 59.45 Z M59.32 4.51554e-05 L59.3089 -9.13995 L59.3089 -9.13995 L59.32 4.51554e-05 Z M118.8 59.4 L109.66 59.4 C109.66 87.1546 87.1691 109.652 59.4272 109.66 L59.43 118.8 L59.4328 127.94 C97.271 127.929 127.94 97.2455 127.94 59.4 L118.8 59.4 Z M59.43 118.8 L59.4272 109.66 C31.6714 109.669 9.16541 87.1945 9.14002 59.4417 L2.53891e-05 59.45 L-9.13997 59.4584 C-9.10535 97.3056 21.5886 127.952 59.4328 127.94 L59.43 118.8 Z M2.53891e-05 59.45 L9.14002 59.4417 C9.11464 31.6978 31.5886 9.17388 59.3312 9.14004 L59.32 4.51554e-05 L59.3089 -9.13995 C21.4714 -9.09379 -9.17459 21.6223 -9.13997 59.4584 L2.53891e-05 59.45 Z M59.32 4.51554e-05 L59.3312 9.14004 C87.0853 9.10619 109.609 31.5623 109.66 59.3168 L118.8 59.3 L127.94 59.2833 C127.871 21.4378 97.1548 -9.1861 59.3089 -9.13995 L59.32 4.51554e-05 Z" fill="#f1f1f3"/></svg>
            <svg data-fu="arc" style={{ position: "absolute", left: "81.21px", top: "10.51px", width: "46.73px", height: "113.32px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="46.73" height="113.32" viewBox="0 0 46.73 113.32" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M1.94944 -8.92969 C-2.98229 -10.0063 -7.85304 -6.88117 -8.92969 -1.94944 C-10.0063 2.98229 -6.88117 7.85304 -1.94944 8.92969 L0 0 L1.94944 -8.92969 Z M5.70675 104.813 C1.00868 106.66 -1.30303 111.965 0.543398 116.663 C2.38983 121.361 7.69519 123.673 12.3933 121.827 L9.05 113.32 L5.70675 104.813 Z M0 0 L-1.94944 8.92969 C19.6788 13.6514 35.6691 31.9614 37.4289 54.0266 L46.54 53.3 L55.6511 52.5733 C53.2509 22.4786 31.4412 -2.49135 1.94944 -8.92969 L0 0 Z M46.54 53.3 L37.4289 54.0266 C39.189 76.0955 26.3102 96.7159 5.70675 104.813 L9.05 113.32 L12.3933 121.827 C40.4898 110.784 58.051 82.6645 55.6511 52.5733 L46.54 53.3 Z" fill="#8e83fd"/></svg>
            <svg data-fu="arc" style={{ position: "absolute", left: "9.14px", top: "60.02px", width: "56.1px", height: "67.82px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="56.1" height="67.82" viewBox="0 0 56.1 67.82" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M55.5997 76.9461 C60.6398 77.2247 64.9516 73.3648 65.2303 68.3246 C65.509 63.2844 61.649 58.9726 56.6088 58.6939 L56.1042 67.82 L55.5997 76.9461 Z M13.4242 46.13 L6.34903 51.9163 L6.35172 51.9196 L13.4242 46.13 Z M9.65971 1.31102 C10.3838 -3.68466 6.92093 -8.32143 1.92525 -9.04549 C-3.07044 -9.76954 -7.7072 -6.3067 -8.43126 -1.31102 L0.614227 0 L9.65971 1.31102 Z M56.1042 67.82 L56.6088 58.6939 C42.5319 57.9156 29.4341 51.2583 20.4967 40.3404 L13.4242 46.13 L6.35172 51.9196 C18.5343 66.8017 36.3965 75.8843 55.5997 76.9461 L56.1042 67.82 Z M13.4242 46.13 L20.4994 40.3437 C11.5718 29.4274 7.63766 15.2623 9.65971 1.31102 L0.614227 0 L-8.43126 -1.31102 C-11.1892 17.7177 -5.8233 37.0326 6.34904 51.9163 L13.4242 46.13 Z" fill="#4996fe"/></svg>
            <svg data-fu="arc" style={{ position: "absolute", left: "18.65px", top: "23.47px", width: "11.2px", height: "12.83px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11.2" height="12.83" viewBox="0 0 11.2 12.83" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-7.67324 7.86402 C-10.4159 12.1018 -9.2038 17.7606 -4.96598 20.5032 C-0.728167 23.2459 4.93061 22.0338 7.67324 17.796 L0 12.83 L-7.67324 7.86402 Z M17.1561 6.93282 C20.985 3.64333 21.4223 -2.12725 18.1328 -5.95614 C14.8433 -9.78503 9.07275 -10.2223 5.24386 -6.93282 L11.2 0 L17.1561 6.93282 Z M0 12.83 L7.67324 17.796 C10.2985 13.7396 13.4904 10.0821 17.1561 6.93282 L11.2 0 L5.24386 -6.93282 C0.24958 -2.64212 -4.09848 2.34043 -7.67324 7.86402 L0 12.83 Z" fill="#fd872f"/></svg>
            <svg data-fu="arc" style={{ position: "absolute", left: "52.16px", top: "10.51px", width: "3.71px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3.71" height="1" viewBox="0 0 3.71 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.56741 -7.832 C-7.41206 -6.41406 -10.1899 -1.33723 -8.772 3.50741 C-7.35406 8.35206 -2.27723 11.1299 2.56741 9.712 L0 0.94 L-2.56741 -7.832 Z M5.63974 8.93396 C10.5738 7.8682 13.7097 3.00436 12.644 -1.92974 C11.5782 -6.86383 6.71436 -9.99973 1.78026 -8.93396 L3.71 0 L5.63974 8.93396 Z M0 0.94 L2.56741 9.712 C3.5765 9.41666 4.59335 9.15998 5.63974 8.93396 L3.71 0 L1.78026 -8.93396 C0.326651 -8.61998 -1.1165 -8.25666 -2.56741 -7.832 L0 0.94 Z" fill="#63c093"/></svg>
            <div style={{ position: "absolute", left: "37.04px", top: "49.13px", width: "63px", height: "38.83px", display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "24px", fontFamily: "'Geist'", fontSize: "18.28px", fontWeight: 500, color: "#1f1f22" }}>$3,940</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#6b6b6b" }}>per month</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "510px", width: "1053.7px", height: "309px", borderRadius: "14.62px", background: "#fefefe", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "18.28px", top: "21.93px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>All recurring</p>
          <div style={{ position: "absolute", left: "192px", top: "15.54px", width: "332.31px", height: "31.07px", borderRadius: "9.14px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.74px 2.74px 2.74px 2.74px", gap: "1.83px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #eeeeee, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#000000" }}>All</p>
              <div style={{ height: "16.45px", flexShrink: 0, borderRadius: "999px", background: "#222222", display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#ffffff" }}>18</p>
              </div>
            </div>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#646871" }}>Software</p>
              <div style={{ height: "16.45px", flexShrink: 0, borderRadius: "999px", background: "#f0f0f2", display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>11</p>
              </div>
            </div>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#646871" }}>Bills</p>
              <div style={{ height: "16.45px", flexShrink: 0, borderRadius: "999px", background: "#f0f0f2", display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "6px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>7</p>
              </div>
            </div>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "7.31px", display: "flex", flexDirection: "row", padding: "0px 10.97px 0px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#646871" }}>Price up</p>
              <div style={{ height: "16.45px", flexShrink: 0, borderRadius: "999px", background: "#f0f0f2", display: "flex", flexDirection: "row", padding: "0px 5.48px 0px 5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "7px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>2</p>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", left: "770.47px", top: "15.54px", width: "264.95px", height: "31.07px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="field" style={{ width: "182.78px", height: "31.07px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Search size={13.7} strokeWidth={1.51} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#686765", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#686765" }}>Search services</p>
            </div>
            <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <AdjustmentsHorizontal size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Filter</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "0px", top: "62.14px", width: "1053.7px", height: "246.75px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "1053.7px", height: "49.35px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "260px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Service</p>
              </div>
              <div style={{ width: "140px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Category</p>
              </div>
              <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Cadence</p>
              </div>
              <div style={{ width: "140px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Next charge</p>
              </div>
              <div style={{ width: "120px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Amount</p>
              </div>
              <div style={{ width: "160px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Status</p>
              </div>
              <div style={{ width: "113.7px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Actions</p>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1053.7px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "260px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <svg width={14.6} height={14.6} viewBox="0 0 24 24" style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#4285f4", display: "block" }}><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" /></svg>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Google Workspace</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Business Starter · 14 seats</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Software</p>
              </div>
              <div style={{ width: "120px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Monthly</p>
              </div>
              <div style={{ width: "140px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Aug 10</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>Tomorrow</p>
                </div>
              </div>
              <div style={{ width: "120px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#f45363" }}>-$336</p>
              </div>
              <div style={{ width: "160px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>Active</p>
                </div>
              </div>
              <div style={{ width: "113.7px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1053.7px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "260px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.21px", fontWeight: 600, color: "#0ab7bd" }}>Bw</p>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Brightway Cleaning</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Office cleaning · WeWork 4F</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Rent & office</p>
              </div>
              <div style={{ width: "120px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Monthly</p>
              </div>
              <div style={{ width: "140px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Aug 11</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>In 2 days</p>
                </div>
              </div>
              <div style={{ width: "120px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#f45363" }}>-$420</p>
              </div>
              <div style={{ width: "160px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>Active</p>
                </div>
              </div>
              <div style={{ width: "113.7px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1053.7px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "260px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <svg width={14.6} height={14.6} viewBox="0 0 24 24" style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#8e83fd", display: "block" }}><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" fill="currentColor" /></svg>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Figma</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Professional · 5 editors</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Software</p>
              </div>
              <div style={{ width: "120px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Monthly</p>
              </div>
              <div style={{ width: "140px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Sep 03</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>In 25 days</p>
                </div>
              </div>
              <div style={{ width: "120px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#f45363" }}>-$225</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6", textDecoration: "line-through" }}>$195</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#fff4eb", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#e8711a"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#e8711a" }}>Price up</p>
                </div>
              </div>
              <div style={{ width: "113.7px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "1053.7px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "260px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "25.59px", height: "25.59px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <svg width={14.6} height={14.6} viewBox="0 0 24 24" style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#e01e5a", display: "block" }}><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" fill="currentColor" /></svg>
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Slack</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Pro · 14 members</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "140px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Software</p>
              </div>
              <div style={{ width: "120px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Monthly</p>
              </div>
              <div style={{ width: "140px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Sep 05</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>In 27 days</p>
                </div>
              </div>
              <div style={{ width: "120px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#f45363" }}>-$131</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6", textDecoration: "line-through" }}>$118</p>
                </div>
              </div>
              <div style={{ width: "160px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#fff4eb", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#e8711a"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#e8711a" }}>Price up</p>
                </div>
              </div>
              <div style={{ width: "113.7px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
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
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "183px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Recurring payments</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "272px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#6b6b6b", letterSpacing: "-0.02em" }}>18 subscriptions and bills · $3,940 / month</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Calendar size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Calendar view</p>
          </div>
          <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Calendar size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>This Month</p>
            <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <div style={{ width: "0.91px", height: "29.24px", flexShrink: 0, background: "#e8e8e8" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>01 – 09 Aug 2026</p>
          </div>
          <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "linear-gradient(90deg, #222222 0%, #3a3a3a 50%, #222222 100%)", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Plus size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Add recurring</p>
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
