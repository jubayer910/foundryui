"use client";
// Help Center page (montra, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { ArrowDataTransferHorizontal, ArrowUpRight, Bell, BuildingBank, ChartIncrease, ChartLine, ChartPie, ChevronRight, CreditCard, Currency, CustomerSupport, File, FileExport, FileInvoice, HelpCircle, LayoutDashboard, Mail, Message, Repeat, Rocket, Search, Settings, Shield, Sparkles, Tag, Target, Wallet } from "ingotui-icons/react/stroke-rounded";

export function HelpCenterPage() {
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
                <svg style={{ width: "39.26px", height: "39.26px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="39.26" height="39.26" viewBox="0 0 39.26 39.26" fill="none" overflow="visible"><defs><linearGradient id="g2_gli5" gradientUnits="userSpaceOnUse" x1="14.30" y1="32.59" x2="8.63" y2="0.00"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/></linearGradient></defs><path transform="matrix(-0.707 0.707 -0.707 -0.707 39.262 23.044)" d="M2.7812e-12 0 L22.9347 0 L19.8768 32.5896 L3.05797 32.5896 L2.7812e-12 0 Z" fill="url(#g2_gli5)"/></svg>
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
                      <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "9.14px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #eeeeee", display: "flex", flexDirection: "column", padding: "9.14px 9.14px 9.14px 9.14px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                          <HelpCircle size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#000000", display: "block" }} />
                          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Help Center</p>
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
        <div style={{ position: "absolute", left: "243.09px", top: "25.59px", width: "189.56px", height: "22px", display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <LayoutDashboard size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#b3b3b3", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#b3b3b3" }}>Workspace</p>
          </div>
          <ChevronRight size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#666d80", lineHeight: "1.5", letterSpacing: "0.02em" }}>Help Center</p>
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
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "1053.7px", height: "160px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "198px", lineHeight: "24px", fontFamily: "'Geist'", fontSize: "18.28px", fontWeight: 500, color: "#000000", letterSpacing: "-0.01em" }}>How can we help, Alex?</p>
          <p style={{ position: "absolute", left: "18.28px", top: "46px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "356px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Search 86 guides, or ask Montra AI about your own numbers.</p>
          <div style={{ position: "absolute", left: "18.28px", top: "72px", width: "640px", height: "40.21px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Search size={13.7} strokeWidth={1.51} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#686765", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#686765" }}>Search articles, e.g. “reconcile” or “Plaid”</p>
            <div style={{ height: "18.28px", flexShrink: 0, borderRadius: "4.57px", background: "#f5f5f5", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "row", padding: "0.91px 5.48px 0.91px 5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#6c6c6c" }}>⌘ /</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "122px", width: "573.9px", height: "25.59px", display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Popular:</p>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>Reconcile transactions</p>
            </div>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>Bank sync</p>
            </div>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>Recurring invoices</p>
            </div>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>Approval rules</p>
            </div>
            <div data-fu="tab" style={{ height: "25.59px", flexShrink: 0, borderRadius: "999px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6c6c6c" }}>Export to Xero</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "705.42px", top: "18.28px", width: "330px", height: "123.44px", borderRadius: "9.14px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed" }}>
            <div style={{ position: "absolute", left: "10.97px", top: "10.97px", width: "29.24px", height: "29.24px", borderRadius: "7.31px", background: "rgba(142, 131, 253, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Sparkles size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#8e83fd", display: "block" }} />
            </div>
            <p style={{ position: "absolute", left: "49.35px", top: "10.97px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#000000" }}>Montra AI</p>
            <p style={{ position: "absolute", left: "49.35px", top: "27.97px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "152px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Answers from your own books</p>
            <div style={{ position: "absolute", left: "281.03px", top: "12.79px", width: "43.28px", height: "23.3px", borderRadius: "999px", background: "#f4f2ff", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#7a6cf5" }}>Beta</p>
            </div>
            <div style={{ position: "absolute", left: "10.97px", top: "52px", width: "308.06px", height: "27.42px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>Why did marketing spend jump in August?</p>
              <ArrowUpRight size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
            </div>
            <div style={{ position: "absolute", left: "10.97px", top: "83px", width: "308.06px", height: "27.42px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#222222" }}>Which invoices are overdue right now?</p>
              <ArrowUpRight size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#a6a6a6", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "178.28px", width: "339.04px", height: "108px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "31.07px", height: "31.07px", borderRadius: "6.21px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Rocket size={14.9} style={{ width: "14.91px", height: "14.91px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ position: "absolute", left: "60.32px", top: "17.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Getting started</p>
          <p style={{ position: "absolute", left: "60.32px", top: "37.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "214px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>Workspace setup, roles and first import</p>
          <ChevronRight size={14.6} style={{ position: "absolute", left: "306.14px", top: "20.11px", width: "14.62px", height: "14.62px", color: "#a6a6a6", display: "block", flexShrink: 0 }} />
          <div style={{ position: "absolute", left: "18.28px", top: "70px", width: "302.48px", height: "0.91px", background: "#ededed" }} />
          <p style={{ position: "absolute", left: "18.28px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>12 articles</p>
          <div style={{ position: "absolute", left: "170.88px", top: "79px", width: "149.88px", height: "14px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>12 of 12 read</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #60a3fe 0%, #4a96fe 100%)" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "357.32px", top: "178.28px", width: "339.04px", height: "108px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "31.07px", height: "31.07px", borderRadius: "6.21px", background: "linear-gradient(180deg, #0ab7bd 0%, #a9fcff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <BuildingBank size={14.9} style={{ width: "14.91px", height: "14.91px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ position: "absolute", left: "60.32px", top: "17.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Bank connections</p>
          <p style={{ position: "absolute", left: "60.32px", top: "37.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "203px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>Plaid, sync errors and duplicate feeds</p>
          <ChevronRight size={14.6} style={{ position: "absolute", left: "306.14px", top: "20.11px", width: "14.62px", height: "14.62px", color: "#a6a6a6", display: "block", flexShrink: 0 }} />
          <div style={{ position: "absolute", left: "18.28px", top: "70px", width: "302.48px", height: "0.91px", background: "#ededed" }} />
          <p style={{ position: "absolute", left: "18.28px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>14 articles</p>
          <div style={{ position: "absolute", left: "174.88px", top: "79px", width: "145.88px", height: "14px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>6 of 14 read</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #27c0c5 0%, #0ab7bd 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #27c0c5 0%, #0ab7bd 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #27c0c5 0%, #0ab7bd 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #27c0c5 0%, #0ab7bd 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #27c0c5 0%, #0ab7bd 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #27c0c5 0%, #0ab7bd 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #27c0c5 0%, #0ab7bd 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(10, 183, 189, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(10, 183, 189, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(10, 183, 189, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(10, 183, 189, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(10, 183, 189, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(10, 183, 189, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(10, 183, 189, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(10, 183, 189, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(10, 183, 189, 0.16)" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "714.64px", top: "178.28px", width: "339.04px", height: "108px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "31.07px", height: "31.07px", borderRadius: "6.21px", background: "linear-gradient(180deg, #8e83fd 0%, #d9d4ff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <FileInvoice size={14.9} style={{ width: "14.91px", height: "14.91px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ position: "absolute", left: "60.32px", top: "17.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "141px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Invoices & payments</p>
          <p style={{ position: "absolute", left: "60.32px", top: "37.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "196px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>Send, remind, approve and reconcile</p>
          <ChevronRight size={14.6} style={{ position: "absolute", left: "306.14px", top: "20.11px", width: "14.62px", height: "14.62px", color: "#a6a6a6", display: "block", flexShrink: 0 }} />
          <div style={{ position: "absolute", left: "18.28px", top: "70px", width: "302.48px", height: "0.91px", background: "#ededed" }} />
          <p style={{ position: "absolute", left: "18.28px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>18 articles</p>
          <div style={{ position: "absolute", left: "174.88px", top: "79px", width: "145.88px", height: "14px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>5 of 18 read</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9c92fd 0%, #8e83fd 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(142, 131, 253, 0.16)" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "304.56px", width: "339.04px", height: "108px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "31.07px", height: "31.07px", borderRadius: "6.21px", background: "linear-gradient(180deg, #91d02b 0%, #e2ffb3 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Target size={14.9} style={{ width: "14.91px", height: "14.91px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ position: "absolute", left: "60.32px", top: "17.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Budgets & goals</p>
          <p style={{ position: "absolute", left: "60.32px", top: "37.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "189px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>Limits, alerts, rollovers and savings</p>
          <ChevronRight size={14.6} style={{ position: "absolute", left: "306.14px", top: "20.11px", width: "14.62px", height: "14.62px", color: "#a6a6a6", display: "block", flexShrink: 0 }} />
          <div style={{ position: "absolute", left: "18.28px", top: "70px", width: "302.48px", height: "0.91px", background: "#ededed" }} />
          <p style={{ position: "absolute", left: "18.28px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>9 articles</p>
          <div style={{ position: "absolute", left: "178.88px", top: "79px", width: "141.88px", height: "14px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>5 of 9 read</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9ed644 0%, #91d02b 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9ed644 0%, #91d02b 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9ed644 0%, #91d02b 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9ed644 0%, #91d02b 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9ed644 0%, #91d02b 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9ed644 0%, #91d02b 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9ed644 0%, #91d02b 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9ed644 0%, #91d02b 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #9ed644 0%, #91d02b 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(145, 208, 43, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(145, 208, 43, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(145, 208, 43, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(145, 208, 43, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(145, 208, 43, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(145, 208, 43, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(145, 208, 43, 0.16)" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "357.32px", top: "304.56px", width: "339.04px", height: "108px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "31.07px", height: "31.07px", borderRadius: "6.21px", background: "linear-gradient(180deg, #fd872f 0%, #ffd3b0 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <FileExport size={14.9} style={{ width: "14.91px", height: "14.91px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ position: "absolute", left: "60.32px", top: "17.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Reports & exports</p>
          <p style={{ position: "absolute", left: "60.32px", top: "37.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "203px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>P&L, cash flow, CSV and Xero exports</p>
          <ChevronRight size={14.6} style={{ position: "absolute", left: "306.14px", top: "20.11px", width: "14.62px", height: "14.62px", color: "#a6a6a6", display: "block", flexShrink: 0 }} />
          <div style={{ position: "absolute", left: "18.28px", top: "70px", width: "302.48px", height: "0.91px", background: "#ededed" }} />
          <p style={{ position: "absolute", left: "18.28px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>11 articles</p>
          <div style={{ position: "absolute", left: "177.88px", top: "79px", width: "142.88px", height: "14px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>2 of 11 read</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #fd9548 0%, #fd872f 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(253, 135, 47, 0.16)" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "714.64px", top: "304.56px", width: "339.04px", height: "108px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: "18.28px", top: "18.28px", width: "31.07px", height: "31.07px", borderRadius: "6.21px", background: "linear-gradient(180deg, #1db9e2 0%, #a1ebff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Shield size={14.9} style={{ width: "14.91px", height: "14.91px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ position: "absolute", left: "60.32px", top: "17.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Security</p>
          <p style={{ position: "absolute", left: "60.32px", top: "37.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "177px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>2FA, sessions, audit log and SSO</p>
          <ChevronRight size={14.6} style={{ position: "absolute", left: "306.14px", top: "20.11px", width: "14.62px", height: "14.62px", color: "#a6a6a6", display: "block", flexShrink: 0 }} />
          <div style={{ position: "absolute", left: "18.28px", top: "70px", width: "302.48px", height: "0.91px", background: "#ededed" }} />
          <p style={{ position: "absolute", left: "18.28px", top: "80px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>7 articles</p>
          <div style={{ position: "absolute", left: "179.88px", top: "79px", width: "140.88px", height: "14px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>5 of 7 read</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #38c1e5 0%, #1db9e2 100%)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(29, 185, 226, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(29, 185, 226, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(29, 185, 226, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(29, 185, 226, 0.16)" }} />
              <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(29, 185, 226, 0.16)" }} />
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "430.84px", width: "711px", height: "388.16px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Popular articles</p>
          <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "210px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Most read by Alder & Co. this month</p>
          <div data-fu="btn" style={{ position: "absolute", left: "617.99px", top: "18.28px", width: "74.73px", height: "25.59px", borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "0.91px 10.05px 0.91px 10.05px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#686765" }}>View all</p>
            <ChevronRight size={11} strokeWidth={1.51} style={{ width: "10.97px", height: "10.97px", flexShrink: 0, color: "#686765", display: "block" }} />
          </div>
          <div style={{ position: "absolute", left: "0px", top: "73.11px", width: "711px", height: "296.1px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "711px", height: "49.35px", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed, inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0.91px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "262px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Article</p>
              </div>
              <div style={{ width: "148px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Topic</p>
              </div>
              <div style={{ width: "72px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Read</p>
              </div>
              <div style={{ width: "72px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Views</p>
              </div>
              <div style={{ width: "157px", height: "49.35px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#818892" }}>Helpful</p>
              </div>
            </div>
            <div data-fu="row" style={{ width: "711px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "262px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "147px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Reconcile bank transactions</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Updated Aug 06</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "148px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Bank connections</p>
              </div>
              <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>6 min</p>
              </div>
              <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>1,284</p>
              </div>
              <div style={{ width: "157px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(99, 192, 147, 0.16)" }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>94%</p>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "711px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "262px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "151px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Fix a disconnected Plaid feed</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Updated Aug 06</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "148px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Bank connections</p>
              </div>
              <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>3 min</p>
              </div>
              <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>962</p>
              </div>
              <div style={{ width: "157px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>89%</p>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "711px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "262px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "128px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Set up recurring invoices</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Updated Jul 28</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "148px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Invoices & payments</p>
              </div>
              <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>4 min</p>
              </div>
              <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>815</p>
              </div>
              <div style={{ width: "157px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(99, 192, 147, 0.16)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(99, 192, 147, 0.16)" }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>91%</p>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "711px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "262px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "145px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Approval rules for payments</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Updated Jul 28</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "148px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Invoices & payments</p>
              </div>
              <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>5 min</p>
              </div>
              <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>640</p>
              </div>
              <div style={{ width: "157px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #5fa3fe 0%, #4996fe 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(73, 150, 254, 0.16)" }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>86%</p>
                </div>
              </div>
            </div>
            <div data-fu="row" style={{ width: "711px", height: "49.35px", flexShrink: 0, boxShadow: "inset 0 0 0 0px #ededed", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "262px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "29.24px", height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                    <File size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#646871", display: "block" }} />
                  </div>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "170px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>Export a P&L for your accountant</p>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#666d80" }}>Updated Jul 28</p>
                  </div>
                </div>
              </div>
              <div style={{ width: "148px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>Reports & exports</p>
              </div>
              <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>3 min</p>
              </div>
              <div style={{ width: "72px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 0px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#666d80" }}>512</p>
              </div>
              <div style={{ width: "157px", height: "48.44px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 14.62px 0px 14.62px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2.19px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "linear-gradient(180deg, #76c8a0 0%, #63c093 100%)" }} />
                    <div style={{ width: "2.92px", height: "10.97px", flexShrink: 0, borderRadius: "1.46px", background: "rgba(99, 192, 147, 0.16)" }} />
                  </div>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#222222" }}>97%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "729.3px", top: "430.84px", width: "324.4px", height: "252px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>System status</p>
          <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "195px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>Last 60 days · updated 2 min ago</p>
          <div style={{ position: "absolute", left: "216.87px", top: "18.28px", width: "89.25px", height: "23.3px", borderRadius: "999px", background: "#e7fff9", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#00a77d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#00a77d" }}>Operational</p>
          </div>
          <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "78px", width: "287.84px", height: "15px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#fd872f"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Bank sync</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>99.94% uptime</p>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "98px", width: "250.54px", height: "16.45px", display: "flex", flexDirection: "row", gap: "1.46px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #fd974a 0%, #fd872f 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 105, 37, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #fd974a 0%, #fd872f 100%)", boxShadow: "inset 0 0 0 1px rgba(197, 105, 37, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
          <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "128px", width: "287.84px", height: "15px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#18b170"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Payments</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>100% uptime</p>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "148px", width: "250.54px", height: "16.45px", display: "flex", flexDirection: "row", gap: "1.46px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
          <div data-fu="row" style={{ position: "absolute", left: "18.28px", top: "178px", width: "287.84px", height: "15px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6.4px", height: "6.4px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6.4" height="6.4" viewBox="0 0 6.4 6.4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6.4 3.2 C6.4 4.96731 4.96731 6.4 3.2 6.4 C1.43269 6.4 0 4.96731 0 3.2 C0 1.43269 1.43269 0 3.2 0 C4.96731 0 6.4 1.43269 6.4 3.2 Z" fill="#fd872f"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#222222" }}>Reports & exports</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "77px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>99.99% uptime</p>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "198px", width: "250.54px", height: "16.45px", display: "flex", flexDirection: "row", gap: "1.46px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #d6efe3 0%, #caeada 100%)", boxShadow: "inset 0 0 0 1px rgba(94, 182, 140, 0.22), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.35), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #eebf33 0%, #ecb615 100%)", boxShadow: "inset 0 0 0 1px rgba(184, 142, 16, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
            <div style={{ width: "2.74px", height: "16.45px", flexShrink: 0, borderRadius: "1.37px", background: "linear-gradient(180deg, #77c8a1 0%, #63c093 100%)", boxShadow: "inset 0 0 0 1px rgba(77, 150, 115, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "221.72px", width: "243.44px", height: "14px", display: "flex", flexDirection: "row", gap: "12.79px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#63c093", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Operational</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#fd872f", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Degraded</p>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "9.14px", height: "9.14px", flexShrink: 0, borderRadius: "1.83px", background: "#ecb615", boxShadow: "inset 0 0 0 0.91px rgba(214, 214, 214, 0.4), inset 0px 3.66px 3.66px 0px rgba(255, 255, 255, 0.29)" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#24322e" }}>Maintenance</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "729.3px", top: "701.12px", width: "324.4px", height: "117.88px", borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #ededed", overflow: "hidden" }}>
          <p style={{ position: "absolute", left: "18.28px", top: "18.28px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Still stuck?</p>
          <p style={{ position: "absolute", left: "18.28px", top: "43.87px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "213px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6b6b6b" }}>A finance specialist replies in ~4 min</p>
          <div style={{ position: "absolute", left: "244.12px", top: "18.28px", width: "60.32px", height: "23.76px", display: "flex", flexDirection: "row", gap: "-5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "999px", background: "#edebff", boxShadow: "inset 0 0 0 0.91px #ffffff", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.5px", fontWeight: 500, color: "#5c55a4" }}>NR</p>
            </div>
            <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "999px", background: "#d8f3f4", boxShadow: "inset 0 0 0 0.91px #ffffff", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-5.48px" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.5px", fontWeight: 500, color: "#07777b" }}>JO</p>
            </div>
            <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "999px", background: "#ffecde", boxShadow: "inset 0 0 0 0.91px #ffffff", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", marginLeft: "-5.48px" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.5px", fontWeight: 500, color: "#a4581f" }}>EV</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "18.28px", top: "70.36px", width: "287.84px", height: "29.24px", display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div data-fu="btn" style={{ flex: "1 1 0", minWidth: 0, height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Message size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Start a chat</p>
            </div>
            <div data-fu="btn" style={{ flex: "1 1 0", minWidth: 0, height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Mail size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Email us</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "244px", top: "91px", width: "1053.7px", height: "52.09px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.11px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>Help center</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "280px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 400, color: "#6b6b6b", letterSpacing: "-0.02em" }}>Guides, answers and support for Alder & Co.</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CustomerSupport size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "96px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Contact support</p>
          </div>
          <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "linear-gradient(90deg, #222222 0%, #3a3a3a 50%, #222222 100%)", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Sparkles size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Ask Montra AI</p>
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
