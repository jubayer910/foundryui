"use client";
// Dashboard page (montra, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { ArrowDataTransferHorizontal, Bell, Calendar, ChartIncrease, ChartLine, ChartPie, ChevronDown, ChevronRight, Cloud, CreditCard, Currency, Dots, File, FileExport, FileInvoice, HelpCircle, LayoutDashboard, Megaphone, MoneybagMove, Repeat, Search, Settings, Tag, Target, Transaction, Users, Wallet } from "ingotui-icons/react/stroke-rounded";
import { ChevronDown as ChevronDownSolid } from "ingotui-icons/react/solid";

export function DashboardPage() {
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
                <svg style={{ width: "39.26px", height: "39.26px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="39.26" height="39.26" viewBox="0 0 39.26 39.26" fill="none" overflow="visible"><defs><linearGradient id="g1_vpds" gradientUnits="userSpaceOnUse" x1="14.30" y1="32.59" x2="8.63" y2="0.00"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/></linearGradient></defs><path transform="matrix(-0.707 0.707 -0.707 -0.707 39.262 23.044)" d="M2.7812e-12 0 L22.9347 0 L19.8768 32.5896 L3.05797 32.5896 L2.7812e-12 0 Z" fill="url(#g1_vpds)"/></svg>
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
              <div style={{ alignSelf: "stretch", height: "36.56px", flexShrink: 0, borderRadius: "9.14px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #eeeeee", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", gap: "9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <LayoutDashboard size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#000000", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "66px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Dashboard</p>
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
        <div style={{ position: "absolute", left: "243.09px", top: "25.59px", width: "171.56px", height: "22px", display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <LayoutDashboard size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#b3b3b3" }}>Workspace</p>
          </div>
          <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "67px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Overview</p>
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
      <div style={{ position: "absolute", left: "244.01px", top: "91.39px", width: "1053.71px", height: "193.05px", display: "flex", flexDirection: "column", gap: "21.93px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "286.96px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Good morning, Alex</p>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Here's your financial overview for this month.</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "65px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>This Month</p>
              <ChevronDown size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <svg style={{ width: "1px", height: "29.24px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginRight: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="1" height="29.24" viewBox="0 0 1 29.24" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.456944 L0 0 L29.2444 0 L29.2444 -0.456944 L29.2444 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#e8e8e8"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "78px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>09 Aug 2026</p>
            </div>
            <div style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "linear-gradient(180deg, #222222 0%, #3a3a3a 57%, #222222 100%)", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", gap: "9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <FileExport size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "84px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Export Report</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "15.54px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "250.41px", height: "118.81px", flexShrink: 0, borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "239.44px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "167.24px", height: "53.48px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Wallet size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                </div>
                <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Available Funds</p>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$28,640</p>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "239.44px", height: "16.45px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <ChevronDownSolid size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#18b170", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#18b170", lineHeight: "1.5" }}>8.2%</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222", lineHeight: "1.5" }}>Across 6 active accounts</p>
              </div>
            </div>
          </div>
          <div style={{ width: "250.41px", height: "118.81px", flexShrink: 0, borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "239.44px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "167.24px", height: "53.48px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #ecb615 0%, #ffe9a7 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <MoneybagMove size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                </div>
                <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Monthly Expenses</p>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$12,480</p>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "239.44px", height: "16.45px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <ChevronDownSolid size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#18b170", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#18b170", lineHeight: "1.5" }}>4.2%</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222", lineHeight: "1.5" }}>72% of planned spending</p>
              </div>
            </div>
          </div>
          <div style={{ width: "250.41px", height: "118.81px", flexShrink: 0, borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "239.44px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "167.24px", height: "53.48px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #0ab7bd 0%, #a9fcff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <ChartIncrease size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                </div>
                <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Net Cash Position</p>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$16,160</p>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "239.44px", height: "16.45px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <ChevronDownSolid size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#18b170", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#18b170", lineHeight: "1.5" }}>11.2%</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222", lineHeight: "1.5" }}>Income minus expenses</p>
              </div>
            </div>
          </div>
          <div style={{ width: "250.41px", height: "118.81px", flexShrink: 0, borderRadius: "10.97px", background: "#ffffff", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.09)", overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", left: "5.48px", top: "5.48px", width: "239.44px", height: "74.94px", borderRadius: "7.31px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
              <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "167.24px", height: "53.48px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "4.57px", background: "linear-gradient(180deg, #91d02b 0%, #e2ffb3 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <FileInvoice size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                </div>
                <div style={{ width: "137.08px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "139px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#667085" }}>Pending Receivables</p>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "29px", fontFamily: "'Geist'", fontSize: "21.93px", fontWeight: 500, color: "#202020" }}>$7,850</p>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", left: "5.48px", top: "91.39px", width: "239.44px", height: "16.45px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <ChevronDownSolid size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#fd872f", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#fd872f", lineHeight: "1.5" }}>8.2%</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "124px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222", lineHeight: "1.5" }}>Expected within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "244.01px", top: "303.41px", width: "711.01px", height: "353.67px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
        <svg data-fu="plot" style={{ position: "absolute", left: "63.97px", top: "100.53px", width: "691.81px", height: "206.54px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="691.81" height="206.54" viewBox="0 0 691.81 206.54" fill="none" overflow="visible"><path transform="matrix(0 1 -1 0 0 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 53.006 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 106.011 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 159.017 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 212.022 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 265.028 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 318.033 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 371.039 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 424.045 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 477.05 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 530.056 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 583.061 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 636.067 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/><path transform="matrix(0 1 -1 0 691.814 0)" d="M0 -0.548333 L0 0 L206.539 0 L206.539 -0.548333 L206.539 -1.09667 L0 -1.09667 L0 -0.548333 Z" fill="#f6f6f6"/></svg>
        <div style={{ position: "absolute", left: "18.28px", top: "100.53px", width: "684.5px", height: "19px", display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ width: "32.9px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.5" }}>$40K</p>
          <svg style={{ width: "636.98px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="636.98" height="1" viewBox="0 0 636.98 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.43704 0 C-2.43704 1.34594 -1.34594 2.43704 0 2.43704 C1.34594 2.43704 2.43704 1.34594 2.43704 0 C2.43704 -1.34594 1.34594 -2.43704 0 -2.43704 C-1.34594 -2.43704 -2.43704 -1.34594 -2.43704 0 Z M636.981 0.456944 L637.438 0.456944 L637.438 -0.456944 L636.981 -0.456944 L636.981 0 L636.981 0.456944 Z M0 0 L0 0.456944 L636.981 0.456944 L636.981 0 L636.981 -0.456944 L0 -0.456944 L0 0 Z" fill="#f5f5f5"/></svg>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "149.88px", width: "684.5px", height: "19px", display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ width: "32.9px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.5" }}>$30K</p>
          <svg style={{ width: "636.98px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="636.98" height="1" viewBox="0 0 636.98 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.43704 0 C-2.43704 1.34594 -1.34594 2.43704 0 2.43704 C1.34594 2.43704 2.43704 1.34594 2.43704 0 C2.43704 -1.34594 1.34594 -2.43704 0 -2.43704 C-1.34594 -2.43704 -2.43704 -1.34594 -2.43704 0 Z M636.981 0.456944 L637.438 0.456944 L637.438 -0.456944 L636.981 -0.456944 L636.981 0 L636.981 0.456944 Z M0 0 L0 0.456944 L636.981 0.456944 L636.981 0 L636.981 -0.456944 L0 -0.456944 L0 0 Z" fill="#f5f5f5"/></svg>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "199.23px", width: "684.5px", height: "19px", display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ width: "32.9px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.5" }}>$20K</p>
          <svg style={{ width: "636.98px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="636.98" height="1" viewBox="0 0 636.98 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.43704 0 C-2.43704 1.34594 -1.34594 2.43704 0 2.43704 C1.34594 2.43704 2.43704 1.34594 2.43704 0 C2.43704 -1.34594 1.34594 -2.43704 0 -2.43704 C-1.34594 -2.43704 -2.43704 -1.34594 -2.43704 0 Z M636.981 0.456944 L637.438 0.456944 L637.438 -0.456944 L636.981 -0.456944 L636.981 0 L636.981 0.456944 Z M0 0 L0 0.456944 L636.981 0.456944 L636.981 0 L636.981 -0.456944 L0 -0.456944 L0 0 Z" fill="#f5f5f5"/></svg>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "248.58px", width: "684.5px", height: "19px", display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ width: "32.9px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.5" }}>$10K</p>
          <svg style={{ width: "636.98px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="636.98" height="1" viewBox="0 0 636.98 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.43704 0 C-2.43704 1.34594 -1.34594 2.43704 0 2.43704 C1.34594 2.43704 2.43704 1.34594 2.43704 0 C2.43704 -1.34594 1.34594 -2.43704 0 -2.43704 C-1.34594 -2.43704 -2.43704 -1.34594 -2.43704 0 Z M636.981 0.456944 L637.438 0.456944 L637.438 -0.456944 L636.981 -0.456944 L636.981 0 L636.981 0.456944 Z M0 0 L0 0.456944 L636.981 0.456944 L636.981 0 L636.981 -0.456944 L0 -0.456944 L0 0 Z" fill="#f5f5f5"/></svg>
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "297.93px", width: "684.5px", height: "19px", display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ width: "32.9px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.5" }}>$0</p>
          <svg style={{ width: "636.98px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="636.98" height="1" viewBox="0 0 636.98 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-2.43704 0 C-2.43704 1.34594 -1.34594 2.43704 0 2.43704 C1.34594 2.43704 2.43704 1.34594 2.43704 0 C2.43704 -1.34594 1.34594 -2.43704 0 -2.43704 C-1.34594 -2.43704 -2.43704 -1.34594 -2.43704 0 Z M636.981 0.456944 L637.438 0.456944 L637.438 -0.456944 L636.981 -0.456944 L636.981 0 L636.981 0.456944 Z M0 0 L0 0.456944 L636.981 0.456944 L636.981 0 L636.981 -0.456944 L0 -0.456944 L0 0 Z" fill="#f5f5f5"/></svg>
        </div>
        <div style={{ position: "absolute", left: "63.97px", top: "317.12px", width: "636.07px", height: "18px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Jan</p>
          <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Feb</p>
          <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Mar</p>
          <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Apr</p>
          <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>May</p>
          <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Jun</p>
          <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Jul</p>
          <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Aug</p>
          <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Sep</p>
          <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Oct</p>
          <p style={{ width: "49.73px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Nov</p>
          <p style={{ width: "49.35px", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", lineHeight: "1.399999976158142" }}>Dec</p>
        </div>
        <div style={{ position: "absolute", left: "63.97px", top: "239.44px", width: "7.31px", height: "67.63px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "30.16px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "74.94px", top: "257.72px", width: "7.31px", height: "49.35px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "26.5px", width: "7.31px", height: "22.85px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "85.91px", top: "227.56px", width: "7.31px", height: "79.51px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "53.92px", width: "7.31px", height: "25.59px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "96.87px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "42.95px", width: "7.31px", height: "49.35px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "107.84px", top: "193.74px", width: "7.31px", height: "113.32px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "47.52px", width: "7.31px", height: "65.8px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "118.81px", top: "241.27px", width: "7.31px", height: "65.8px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "44.78px", width: "7.31px", height: "21.02px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "129.77px", top: "188.26px", width: "7.31px", height: "118.81px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "49.35px", width: "7.31px", height: "69.46px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "140.74px", top: "208.37px", width: "7.31px", height: "98.7px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "46.61px", width: "7.31px", height: "52.09px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "151.71px", top: "149.88px", width: "7.31px", height: "157.19px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "53.92px", width: "7.31px", height: "103.27px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "162.67px", top: "176.38px", width: "7.31px", height: "130.69px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "46.61px", width: "7.31px", height: "84.08px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "173.64px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "184.61px", top: "185.52px", width: "7.31px", height: "121.55px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "44.78px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "195.57px", top: "199.23px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "206.54px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "217.51px", top: "193.74px", width: "7.31px", height: "113.32px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "48.44px", width: "7.31px", height: "64.89px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "228.47px", top: "159.02px", width: "7.31px", height: "148.05px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "58.49px", width: "7.31px", height: "89.56px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "239.44px", top: "230.3px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "50.26px", width: "7.31px", height: "26.5px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "250.41px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "57.57px", width: "7.31px", height: "34.73px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "261.37px", top: "176.38px", width: "7.31px", height: "130.69px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "52.09px", width: "7.31px", height: "78.59px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "272.34px", top: "193.74px", width: "7.31px", height: "113.32px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "58.49px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "283.31px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "294.27px", top: "149.88px", width: "7.31px", height: "157.19px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "85.91px", width: "7.31px", height: "71.28px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "305.24px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "316.21px", top: "169.07px", width: "7.31px", height: "138px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "63.06px", width: "7.31px", height: "74.94px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "327.17px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "338.14px", top: "199.23px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "349.11px", top: "193.74px", width: "7.31px", height: "113.32px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "48.44px", width: "7.31px", height: "64.89px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "360.07px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "371.04px", top: "199.23px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "382.01px", top: "176.38px", width: "7.31px", height: "130.69px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "46.61px", width: "7.31px", height: "84.08px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "392.97px", top: "176.38px", width: "7.31px", height: "130.69px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "46.61px", width: "7.31px", height: "84.08px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "403.94px", top: "230.3px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "50.26px", width: "7.31px", height: "26.5px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "414.91px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "425.87px", top: "185.52px", width: "7.31px", height: "121.55px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "44.78px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "436.84px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "447.81px", top: "193.74px", width: "7.31px", height: "113.32px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "48.44px", width: "7.31px", height: "64.89px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "458.77px", top: "159.02px", width: "7.31px", height: "148.05px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "58.49px", width: "7.31px", height: "89.56px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "469.74px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "480.71px", top: "199.23px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "491.67px", top: "231.21px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "50.26px", width: "7.31px", height: "26.5px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "502.64px", top: "189.17px", width: "7.31px", height: "118.81px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "49.35px", width: "7.31px", height: "69.46px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "513.61px", top: "209.28px", width: "7.31px", height: "98.7px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "46.61px", width: "7.31px", height: "52.09px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "524.57px", top: "150.79px", width: "7.31px", height: "157.19px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "53.92px", width: "7.31px", height: "103.27px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "535.54px", top: "177.29px", width: "7.31px", height: "130.69px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "46.61px", width: "7.31px", height: "84.08px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "546.51px", top: "200.14px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "557.47px", top: "186.43px", width: "7.31px", height: "121.55px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "44.78px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "568.44px", top: "242.18px", width: "7.31px", height: "65.8px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "44.78px", width: "7.31px", height: "21.02px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "579.41px", top: "258.63px", width: "7.31px", height: "49.35px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "26.5px", width: "7.31px", height: "22.85px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "590.37px", top: "186.43px", width: "7.31px", height: "121.55px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "44.78px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "601.34px", top: "200.14px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "612.31px", top: "215.68px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "623.27px", top: "159.93px", width: "7.31px", height: "148.05px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "58.49px", width: "7.31px", height: "89.56px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "634.24px", top: "200.14px", width: "7.31px", height: "107.84px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "57.58px", width: "7.31px", height: "50.26px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "645.21px", top: "231.21px", width: "7.31px", height: "76.77px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "50.26px", width: "7.31px", height: "26.5px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "656.17px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "54.83px", width: "7.31px", height: "37.47px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "667.14px", top: "227.56px", width: "7.31px", height: "79.51px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "53.92px", width: "7.31px", height: "25.59px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "678.11px", top: "257.72px", width: "7.31px", height: "49.35px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "26.5px", width: "7.31px", height: "22.85px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "689.07px", top: "214.76px", width: "7.31px", height: "92.3px", borderRadius: "91.39px", background: "#d8d8d8", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "0px", top: "56.66px", width: "7.31px", height: "35.64px", borderRadius: "91.39px", background: "#4996fe", boxShadow: "inset 0 0 0 0.91px #ffffff, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.3)" }} />
        </div>
        <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "672.62px", height: "64.59px", display: "flex", flexDirection: "column", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000", lineHeight: "1.5" }}>Cash Position</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "283px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Track how your available cash is moving over time.</p>
            </div>
            <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "33px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>Month</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0 0 0 0.37px #d6d6d6, inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e", textBox: "trim-both cap alphabetic", height: "8px" }}>Cash Inflow</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#d8d8d8", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e", textBox: "trim-both cap alphabetic", height: "8px" }}>Cash Outflow</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "973.29px", top: "303.41px", width: "324.43px", height: "353.67px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "12.79px", top: "12.79px", width: "288.79px", height: "36.66px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Spending Breakdown</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "174px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Where your money went this month.</p>
          </div>
          <Dots size={21.9} style={{ width: "21.93px", height: "21.93px", flexShrink: 0, color: "#222222", display: "block" }} />
        </div>
        <div style={{ position: "absolute", left: "12.79px", top: "72.2px", width: "297.01px", height: "79.49px", display: "flex", flexDirection: "column", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16.45px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>$12,480</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Total Spending</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.74px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#fd872f", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#fd872f", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#fd872f", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
            <div style={{ width: "4.57px", height: "31.07px", flexShrink: 0, borderRadius: "1.83px", background: "#fd872f", boxShadow: "inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.25)" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#4996fe", boxShadow: "inset 0 0 0 0.37px #d6d6d6, 0px 3.66px 3.66px 0px rgba(0, 0, 0, 0.05), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "8px" }}>Operations</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#8e83fd", boxShadow: "inset 0 0 0 0.37px #d6d6d6, 0px 3.66px 3.66px 0px rgba(0, 0, 0, 0.05), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "8px" }}>Payroll</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0 0 0 0.37px #d6d6d6, 0px 3.66px 3.66px 0px rgba(0, 0, 0, 0.05), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", textBox: "trim-both cap alphabetic", height: "8px" }}>Marketing</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#fd872f", boxShadow: "inset 0 0 0 0.37px #d6d6d6, 0px 3.66px 3.66px 0px rgba(0, 0, 0, 0.05), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)", overflow: "hidden" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", letterSpacing: "-0.01em", textBox: "trim-both cap alphabetic", height: "8px" }}>Software</p>
            </div>
          </div>
        </div>
        <svg style={{ position: "absolute", left: "0px", top: "61.23px", width: "324.43px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="324.43" height="1" viewBox="0 0 324.43 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.456944 L0 0 L324.431 0 L324.431 -0.456944 L324.431 -0.913889 L0 -0.913889 L0 -0.456944 Z" fill="#efefef"/></svg>
        <div style={{ position: "absolute", left: "12.79px", top: "169.98px", width: "298.84px", height: "118.87px", display: "flex", flexDirection: "column", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Operations</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#0f172a", lineHeight: "1.399999976158142" }}>56%</p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Payroll</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#0f172a", lineHeight: "1.399999976158142" }}>18%</p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Marketing</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#0f172a", lineHeight: "1.399999976158142" }}>14%</p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", lineHeight: "1.399999976158142", letterSpacing: "-0.02em" }}>Software</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#0f172a", lineHeight: "1.399999976158142" }}>7%</p>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#6b6b6b", lineHeight: "1.399999976158142", letterSpacing: "-0.02em" }}>Other</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#0f172a", lineHeight: "1.399999976158142" }}>5%</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "12.79px", top: "309.81px", width: "298.84px", height: "31.62px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "7.31px 5.48px 7.31px 9.14px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "63.97px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "139px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#686765" }}>View spending details ›</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "244.01px", top: "675.36px", width: "1053.71px", height: "308.89px", borderRadius: "14.62px", background: "#fefefe", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "18.28px 18.28px 14.62px 18.28px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "170px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>Recent Financial Activity</p>
          <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "7.31px 10.97px 7.31px 10.97px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Calendar size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "107px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#222222", lineHeight: "1.5" }}>01 – 09 Aug 2026</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "49.35px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "274.17px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 14.62px 12.79px 14.62px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892", lineHeight: "1.4600000381469727" }}>Description</p>
            </div>
            <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892", lineHeight: "1.5" }}>Category</p>
            </div>
            <div style={{ width: "197.4px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892", lineHeight: "1.5" }}>Date</p>
            </div>
            <div style={{ width: "164.5px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892", lineHeight: "1.5" }}>Amount</p>
            </div>
            <div style={{ width: "164.5px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892", lineHeight: "1.5" }}>Status</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892", lineHeight: "1.5" }}>Actions</p>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "49.35px", flexShrink: 0, borderRadius: "0.91px", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ width: "274.17px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 14.62px 12.79px 14.62px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Transaction size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Client Payment</p>
                </div>
              </div>
            </div>
            <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Revenue</p>
            </div>
            <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Aug 09</p>
            </div>
            <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.5" }}>+$4,200</p>
            </div>
            <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31111 3.65556 C7.31111 5.67446 5.67446 7.31111 3.65556 7.31111 C1.63665 7.31111 0 5.67446 0 3.65556 C0 1.63665 1.63665 0 3.65556 0 C5.67446 0 7.31111 1.63665 7.31111 3.65556 Z" fill="#00a77d"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d", lineHeight: "1.4600000381469727" }}>Received</p>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div data-fu="btn" style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
                </div>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "49.35px", flexShrink: 0, borderRadius: "0.91px", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ width: "274.17px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 14.62px 12.79px 14.62px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #ecb615 0%, #ffe79e 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Cloud size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>AWS Infrastructure</p>
                </div>
              </div>
            </div>
            <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Software</p>
            </div>
            <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Aug 08</p>
            </div>
            <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#f45363", lineHeight: "1.5" }}>-$620</p>
            </div>
            <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31111 3.65556 C7.31111 5.67446 5.67446 7.31111 3.65556 7.31111 C1.63665 7.31111 0 5.67446 0 3.65556 C0 1.63665 1.63665 0 3.65556 0 C5.67446 0 7.31111 1.63665 7.31111 3.65556 Z" fill="#4e57ed"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed", lineHeight: "1.4600000381469727" }}>Completed</p>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div data-fu="btn" style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
                </div>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "49.35px", flexShrink: 0, borderRadius: "0.91px", boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ width: "274.17px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 14.62px 12.79px 14.62px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #1db9e2 0%, #a1ebff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Users size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Team Payroll</p>
                </div>
              </div>
            </div>
            <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Payroll</p>
            </div>
            <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Aug 07</p>
            </div>
            <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#f45363", lineHeight: "1.5" }}>-$5,850</p>
            </div>
            <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31111 3.65556 C7.31111 5.67446 5.67446 7.31111 3.65556 7.31111 C1.63665 7.31111 0 5.67446 0 3.65556 C0 1.63665 1.63665 0 3.65556 0 C5.67446 0 7.31111 1.63665 7.31111 3.65556 Z" fill="#4e57ed"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed", lineHeight: "1.4600000381469727" }}>Completed</p>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div data-fu="btn" style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
                </div>
              </div>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "49.35px", flexShrink: 0, borderRadius: "0.91px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ width: "274.17px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 14.62px 12.79px 14.62px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "22.85px", height: "22.85px", flexShrink: 0, borderRadius: "5.48px", background: "linear-gradient(180deg, #91d02b 0%, #dfffac 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", padding: "3.66px 7.31px 3.66px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Megaphone size={16.5} style={{ width: "16.45px", height: "16.45px", flexShrink: 0, color: "#ffffff", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222", lineHeight: "1.2000000476837158" }}>Meta Ads</p>
                </div>
              </div>
            </div>
            <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Marketing</p>
            </div>
            <div style={{ width: "197.4px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80", lineHeight: "1.5" }}>Aug 06</p>
            </div>
            <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#f45363", lineHeight: "1.5" }}>-$4,400</p>
            </div>
            <div style={{ width: "164.5px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 10.97px 12.79px 10.97px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, borderRadius: "91.39px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "3.66px 9.14px 3.66px 9.14px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31111 3.65556 C7.31111 5.67446 5.67446 7.31111 3.65556 7.31111 C1.63665 7.31111 0 5.67446 0 3.65556 C0 1.63665 1.63665 0 3.65556 0 C5.67446 0 7.31111 1.63665 7.31111 3.65556 Z" fill="#4e57ed"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed", lineHeight: "1.4600000381469727" }}>Completed</p>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.79px 21.93px 12.79px 21.93px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div data-fu="btn" style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "7.31px 7.31px 7.31px 7.31px", gap: "7.31px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Dots size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#808897", display: "block" }} />
                </div>
              </div>
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
