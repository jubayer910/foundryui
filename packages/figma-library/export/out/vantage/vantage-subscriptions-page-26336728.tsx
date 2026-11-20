"use client";
// Subscriptions page (vantage, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AlarmClock, Bell, Briefcase, Bulb, Calendar, ChartLine, ChevronRight, CirclePlus, CircleX, CurrencyDollar, Dots, FileInvoice, GitMerge, Home, InfoCircle, Plus, Repeat, Share, Stack2, TrendingUp, UserSearch, Users } from "ingotui-icons/react/stroke-rounded";

export function SubscriptionsPage() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "1440px", height: "1083px", background: "#1a1a1a", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "0px", top: "0px", width: "238px", height: "1083px", boxShadow: "inset -1px 0 0 0 #000000, 1px 0px 0px 0px #232323", overflow: "hidden" }}>
        <div style={{ position: "absolute", left: "12px", top: "11px", width: "161px", height: "40px", display: "flex", flexDirection: "row", gap: "48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "6.96px", background: "#232323", backdropFilter: "blur(1.18px)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "10.5px", top: "21px", width: "5px", height: "9px", borderRadius: "2.5px", background: "#7b5bff" }} />
              <div style={{ position: "absolute", left: "17.5px", top: "16px", width: "5px", height: "14px", borderRadius: "2.5px", background: "#7b5bff" }} />
              <div style={{ position: "absolute", left: "24.5px", top: "10px", width: "5px", height: "20px", borderRadius: "2.5px", background: "#7b5bff" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ffffff", lineHeight: "1.399999976158142", letterSpacing: "-0.02em" }}>Vantage Admin</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c", lineHeight: "1.5", letterSpacing: "-0.01em" }}>Management</p>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "63px", width: "238px", height: "720px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div data-fu="row" style={{ alignSelf: "stretch", height: "210px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "238px", height: "210px", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 10px 6px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "77px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>DASHBOARD</p>
                </div>
                <div style={{ width: "226px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <Home size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "37px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Home</p>
                      </div>
                      <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "20px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf", lineHeight: "12px", letterSpacing: "-0.02em" }}>241</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <Briefcase size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "57px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Business</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <UserSearch size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "113px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Customer insights</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <GitMerge size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "65px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Processes</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                    <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                        <Bulb size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                        <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "49px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Insights</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
            </div>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 10px 6px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>TEAM</p>
              </div>
              <div style={{ width: "226px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <TrendingUp size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "57px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Numbers</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Users size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "68px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Customers</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <GitMerge size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "65px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Processes</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Bulb size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "49px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Insights</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Stack2 size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "69px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Collections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 10px 6px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "95px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>PERFORMANCE</p>
              </div>
              <div style={{ width: "226px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Calendar size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "103px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Weekly numbers</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <ChartLine size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "98px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Weekly analysis</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(90deg, rgba(123, 91, 255, 0.17) 0%, rgba(123, 91, 255, 0.04) 62%, rgba(123, 91, 255, 0) 100%), linear-gradient(#232323, #232323)", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <FileInvoice size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#7b5bff", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "85px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Subscriptions</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <TrendingUp size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "70px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Projections</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
          </div>
          <div data-fu="row" style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", display: "flex", flexDirection: "column", padding: "6px 10px 6px 10px", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "61px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em" }}>NETWORK</p>
              </div>
              <div style={{ width: "226px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Share size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "54px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Network</p>
                    </div>
                  </div>
                </div>
                <div style={{ width: "226px", height: "30px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Stack2 size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
                      <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "64px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b4b4b4", letterSpacing: "-0.02em" }}>Boardplan</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <svg style={{ width: "238px", height: "1px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible", marginBottom: "-1px" }} xmlns="http://www.w3.org/2000/svg" width="238" height="1" viewBox="0 0 238 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 L0 0 L238 0 L238 -0.5 L238 -1 L0 -1 L0 -0.5 Z" fill="#000000"/></svg>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "250px", top: "15px", width: "1174px", height: "32px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, opacity: 0.5, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Home size={13} strokeWidth={2.4} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed", lineHeight: "12px" }}>Performance</p>
          </div>
          <ChevronRight size={13} strokeWidth={2.77} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#dadada", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed", lineHeight: "12px" }}>Subscriptions</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist Mono'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a", lineHeight: "15px" }}>08:10 AST</p>
          <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <Bell size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#dadada", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "62px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "74px", width: "1174px", height: "58px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Subscriptions</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "500px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>The subscription book: plans, renewals and cancellations · Jul 4 – Jul 31, 2026</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "126px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Calendar size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Last 4 weeks</p>
              <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "1px", width: "16px", height: "16px" }}>
                <ChevronRight size={16} strokeWidth={2.25} style={{ position: "absolute", left: "16px", top: "0px", width: "16px", height: "16px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#8a8a8a", display: "block", flexShrink: 0 }} />
              </div>
            </div>
          </div>
          <div data-fu="btn" style={{ height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "76px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Stack2 size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Plans</p>
              <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "1px", width: "16px", height: "16px" }}>
                <ChevronRight size={16} strokeWidth={2.25} style={{ position: "absolute", left: "16px", top: "0px", width: "16px", height: "16px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#8a8a8a", display: "block", flexShrink: 0 }} />
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "6px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #8f74ff, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 13px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Plus size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>New subscription</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "144px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "144px", width: "1176px", height: "110px" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Active subscriptions</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>1,751</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Repeat size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+8.4%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs prior</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "228px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "240px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>MRR</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>$77,839</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <CurrencyDollar size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+6.1%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs Jun $73,360</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "468px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "480px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>New</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>128</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <CirclePlus size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+19.1%</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs prior</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "708px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "720px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Cancelled</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>41</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <CircleX size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>−0.4 pts</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>2.3% churn</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "948px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "960px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Past due</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>23</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <AlarmClock size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>$1,147</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>open balance</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "254px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "1038px", top: "255px", width: "1px", height: "828px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "1051px", top: "272px", width: "264px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "171px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Cancellation reasons</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "264px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>41 cancellations in the last 4 weeks · churn 2.3%</p>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "330px", width: "375px", height: "245px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Price</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>34% of cancellations</p>
          </div>
          <div style={{ width: "375px", height: "18px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "332.5px", height: "16px", borderRadius: "6px", background: "rgba(229, 85, 155, 0.12)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ec80b4" }}>14</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "292.5px", height: "16px", borderRadius: "6px", background: "linear-gradient(180deg, #e86ba8 0%, #e5559b 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 66, 121, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "76px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Moved away</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>22% of cancellations</p>
          </div>
          <div style={{ width: "375px", height: "18px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "228.04px", height: "16px", borderRadius: "6px", background: "rgba(229, 85, 155, 0.12)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ec80b4" }}>9</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "188.04px", height: "16px", borderRadius: "6px", background: "linear-gradient(180deg, #e86ba8 0%, #e5559b 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 66, 121, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Not using it</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>20% of cancellations</p>
          </div>
          <div style={{ width: "375px", height: "18px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "207.14px", height: "16px", borderRadius: "6px", background: "rgba(229, 85, 155, 0.12)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ec80b4" }}>8</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "167.14px", height: "16px", borderRadius: "6px", background: "linear-gradient(180deg, #e86ba8 0%, #e5559b 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 66, 121, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Switched provider</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>15% of cancellations</p>
          </div>
          <div style={{ width: "375px", height: "18px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "165.36px", height: "16px", borderRadius: "6px", background: "rgba(229, 85, 155, 0.12)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ec80b4" }}>6</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "125.36px", height: "16px", borderRadius: "6px", background: "linear-gradient(180deg, #e86ba8 0%, #e5559b 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 66, 121, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          </div>
        </div>
        <div style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Other</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>10% of cancellations</p>
          </div>
          <div style={{ width: "375px", height: "18px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "123.57px", height: "16px", borderRadius: "6px", background: "rgba(229, 85, 155, 0.12)", display: "flex", flexDirection: "row", padding: "0px 9px 0px 9px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ec80b4" }}>4</p>
            </div>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "83.57px", height: "16px", borderRadius: "6px", background: "linear-gradient(180deg, #e86ba8 0%, #e5559b 100%)", boxShadow: "inset 0 0 0 1px rgba(179, 66, 121, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1038px", top: "596px", width: "402px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "1051px", top: "614px", width: "226px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Plan mix</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "226px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>1,751 active · MRR $77,839 · ARPU $44.45</p>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "662px", width: "375px", height: "12px", display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "171.12px", height: "12px", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(180deg, #566ea3 0%, #4c618d 100%)", boxShadow: "inset 0 0 0 1px rgba(116, 154, 235, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div style={{ width: "139.72px", height: "12px", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div style={{ width: "58.16px", height: "12px", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "690px", width: "375px", height: "67px", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div data-fu="row" style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "6px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "#546c9f" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Essential · $29</p>
          </div>
          <div style={{ width: "1px", height: "1px", flexShrink: 0 }} />
          <div style={{ width: "90px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>812 subs</p>
          </div>
          <div style={{ width: "76px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>$23,548</p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "6px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "#7b5bff" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Plus · $49</p>
          </div>
          <div style={{ width: "1px", height: "1px", flexShrink: 0 }} />
          <div style={{ width: "90px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>663 subs</p>
          </div>
          <div style={{ width: "76px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>$32,487</p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "6px", height: "6px", flexShrink: 0, borderRadius: "3px", background: "#943d67" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>Family · $79</p>
          </div>
          <div style={{ width: "1px", height: "1px", flexShrink: 0 }} />
          <div style={{ width: "90px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>276 subs</p>
          </div>
          <div style={{ width: "76px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-end", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>$21,804</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1038px", top: "778px", width: "402px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "1051px", top: "796px", width: "110px", height: "20px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Plan changes</p>
      </div>
      <p style={{ position: "absolute", left: "1353px", top: "798px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#5bc98b" }}>+$620 MRR</p>
      <div style={{ position: "absolute", left: "1051px", top: "826px", width: "375px", height: "46px" }}>
        <div style={{ position: "absolute", left: "0px", top: "34px", width: "280.9px", height: "12px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "283.9px", top: "34px", width: "91.1px", height: "12px", borderRadius: "4px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
          <svg style={{ position: "absolute", left: "-12px", top: "0px", width: "127px", height: "12px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="127" height="12" viewBox="0 0 127 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 12 L0.494975 12.495 L12.495 0.494975 L12 0 L11.505 -0.494975 L-0.494975 11.505 L0 12 Z M5 12 L5.49497 12.495 L17.495 0.494975 L17 0 L16.505 -0.494975 L4.50503 11.505 L5 12 Z M10 12 L10.495 12.495 L22.495 0.494975 L22 0 L21.505 -0.494975 L9.50502 11.505 L10 12 Z M15 12 L15.495 12.495 L27.495 0.494975 L27 0 L26.505 -0.494975 L14.505 11.505 L15 12 Z M20 12 L20.495 12.495 L32.495 0.494975 L32 0 L31.505 -0.494975 L19.505 11.505 L20 12 Z M25 12 L25.495 12.495 L37.495 0.494975 L37 0 L36.505 -0.494975 L24.505 11.505 L25 12 Z M30 12 L30.495 12.495 L42.495 0.494975 L42 0 L41.505 -0.494975 L29.505 11.505 L30 12 Z M35 12 L35.495 12.495 L47.495 0.494975 L47 0 L46.505 -0.494975 L34.505 11.505 L35 12 Z M40 12 L40.495 12.495 L52.495 0.494975 L52 0 L51.505 -0.494975 L39.505 11.505 L40 12 Z M45 12 L45.495 12.495 L57.495 0.494975 L57 0 L56.505 -0.494975 L44.505 11.505 L45 12 Z M50 12 L50.495 12.495 L62.495 0.494975 L62 0 L61.505 -0.494975 L49.505 11.505 L50 12 Z M55 12 L55.495 12.495 L67.495 0.494975 L67 0 L66.505 -0.494975 L54.505 11.505 L55 12 Z M60 12 L60.495 12.495 L72.495 0.494975 L72 0 L71.505 -0.494975 L59.505 11.505 L60 12 Z M65 12 L65.495 12.495 L77.495 0.494975 L77 0 L76.505 -0.494975 L64.505 11.505 L65 12 Z M70 12 L70.495 12.495 L82.495 0.494975 L82 0 L81.505 -0.494975 L69.505 11.505 L70 12 Z M75 12 L75.495 12.495 L87.495 0.494975 L87 0 L86.505 -0.494975 L74.505 11.505 L75 12 Z M80 12 L80.495 12.495 L92.495 0.494975 L92 0 L91.505 -0.494975 L79.505 11.505 L80 12 Z M85 12 L85.495 12.495 L97.495 0.494975 L97 0 L96.505 -0.494975 L84.505 11.505 L85 12 Z M90 12 L90.495 12.495 L102.495 0.494975 L102 0 L101.505 -0.494975 L89.505 11.505 L90 12 Z M95 12 L95.495 12.495 L107.495 0.494975 L107 0 L106.505 -0.494975 L94.505 11.505 L95 12 Z M100 12 L100.495 12.495 L112.495 0.494975 L112 0 L111.505 -0.494975 L99.505 11.505 L100 12 Z M105 12 L105.495 12.495 L117.495 0.494975 L117 0 L116.505 -0.494975 L104.505 11.505 L105 12 Z M110 12 L110.495 12.495 L122.495 0.494975 L122 0 L121.505 -0.494975 L109.505 11.505 L110 12 Z M115 12 L115.495 12.495 L127.495 0.494975 L127 0 L126.505 -0.494975 L114.505 11.505 L115 12 Z" fill="#ffffff" fillOpacity="0.14"/></svg>
        </div>
        <svg style={{ position: "absolute", left: "1px", top: "4px", width: "1px", height: "30px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="30" viewBox="0 0 1 30" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0.5 0 C0.5 -0.276142 0.276142 -0.5 0 -0.5 C-0.276142 -0.5 -0.5 -0.276142 -0.5 0 L0 0 L0.5 0 Z M-0.5 30 C-0.5 30.2761 -0.276142 30.5 0 30.5 C0.276142 30.5 0.5 30.2761 0.5 30 L0 30 L-0.5 30 Z M0 0 L-0.5 0 L-0.5 30 L0 30 L0.5 30 L0.5 0 L0 0 Z" fill="#7b5bff"/></svg>
        <svg style={{ position: "absolute", left: "-1.5px", top: "1.5px", width: "5px", height: "5px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#7b5bff"/></svg>
        <p style={{ position: "absolute", left: "7px", top: "14px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>Upgrades 37</p>
        <svg style={{ position: "absolute", left: "284.9px", top: "4px", width: "1px", height: "30px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="1" height="30" viewBox="0 0 1 30" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0.5 0 C0.5 -0.276142 0.276142 -0.5 0 -0.5 C-0.276142 -0.5 -0.5 -0.276142 -0.5 0 L0 0 L0.5 0 Z M-0.5 30 C-0.5 30.2761 -0.276142 30.5 0 30.5 C0.276142 30.5 0.5 30.2761 0.5 30 L0 30 L-0.5 30 Z M0 0 L-0.5 0 L-0.5 30 L0 30 L0.5 30 L0.5 0 L0 0 Z" fill="#4b3b8d"/></svg>
        <svg style={{ position: "absolute", left: "282.4px", top: "1.5px", width: "5px", height: "5px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#4b3b8d"/></svg>
        <p style={{ position: "absolute", left: "290.9px", top: "14px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>{"Downgrades "}</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#dadada" }}>12</span>
        </p>
      </div>
      <p style={{ position: "absolute", left: "1051px", top: "882px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "295px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Essential → Plus 21 · Plus → Family 16 · 12 downgrades</p>
      <div style={{ position: "absolute", left: "1038px", top: "914px", width: "402px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "1051px", top: "932px", width: "156px", height: "20px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "156px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>August MRR target</p>
      </div>
      <p style={{ position: "absolute", left: "1304px", top: "934px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>$77,839 of $80,000</p>
      <div style={{ position: "absolute", left: "1051px", top: "968px", width: "375px", height: "32px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "375px", height: "10px", flexShrink: 0, position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "364.87px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          <svg style={{ position: "absolute", left: "368.87px", top: "0px", width: "5.63px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5.63" height="10" viewBox="0 0 5.63 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M5.63 0 L5.13 0 L5.13 10 L5.63 10 L6.13 10 L6.13 0 L5.63 0 Z" fill="#3a3a3a"/></svg>
        </div>
        <div style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>97.3% · $2,161 to go</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>≈ 49 subs at $44.45</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "250px", top: "272px", width: "272px", height: "45px", display: "flex", flexDirection: "column", gap: "9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "225px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Net subscription movement</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "14px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>New</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Reactivated</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Cancelled</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "12px", height: "2px", flexShrink: 0, borderRadius: "1px", background: "#7aa2f7" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "20px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Net</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "870px", top: "272px", width: "156px", height: "30px", display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "6px 11px 6px 11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ededed" }}>12W</p>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>26W</p>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>52W</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "250px", top: "322px", width: "776px", height: "318px" }}>
        <div style={{ position: "absolute", left: "716.33px", top: "14px", width: "57.67px", height: "278px", borderRadius: "8px", background: "rgba(255, 255, 255, 0.05)" }} />
        <svg style={{ position: "absolute", left: "36px", top: "14px", width: "740px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="740" height="1" viewBox="0 0 740 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L740 0" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "12px", top: "6px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>40</p>
        <svg style={{ position: "absolute", left: "36px", top: "106.67px", width: "740px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="740" height="1" viewBox="0 0 740 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L740 0" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "12px", top: "98.67px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>20</p>
        <svg style={{ position: "absolute", left: "36px", top: "199.33px", width: "740px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="740" height="1" viewBox="0 0 740 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L740 0" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "20px", top: "191.33px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>0</p>
        <div style={{ position: "absolute", left: "36px", top: "291.5px", width: "740px", height: "1px", background: "#333333" }} />
        <p style={{ position: "absolute", left: "6px", top: "284px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>−20</p>
        <div data-fu="bar" style={{ position: "absolute", left: "53.83px", top: "88.13px", width: "26px", height: "111.2px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "53.83px", top: "78.87px", width: "26px", height: "7.07px", borderRadius: "3.53px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "53.83px", top: "200.83px", width: "26px", height: "58.73px", borderRadius: "2px 2px 13px 13px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "115.5px", top: "78.87px", width: "26px", height: "120.47px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "115.5px", top: "64.97px", width: "26px", height: "11.7px", borderRadius: "4px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "115.5px", top: "200.83px", width: "26px", height: "54.1px", borderRadius: "2px 2px 13px 13px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "177.17px", top: "92.77px", width: "26px", height: "106.57px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "177.17px", top: "88.13px", width: "26px", height: "2.43px", borderRadius: "1.22px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "177.17px", top: "200.83px", width: "26px", height: "63.37px", borderRadius: "2px 2px 13px 13px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "238.83px", top: "74.23px", width: "26px", height: "125.1px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "238.83px", top: "64.97px", width: "26px", height: "7.07px", borderRadius: "3.53px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "238.83px", top: "200.83px", width: "26px", height: "49.47px", borderRadius: "2px 2px 13px 13px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "300.5px", top: "83.5px", width: "26px", height: "115.83px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "300.5px", top: "69.6px", width: "26px", height: "11.7px", borderRadius: "4px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "300.5px", top: "200.83px", width: "26px", height: "54.1px", borderRadius: "2px 2px 13px 13px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "362.17px", top: "64.97px", width: "26px", height: "134.37px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "362.17px", top: "55.7px", width: "26px", height: "7.07px", borderRadius: "3.53px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "362.17px", top: "200.83px", width: "26px", height: "44.83px", borderRadius: "2px 2px 13px 13px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "423.83px", top: "69.6px", width: "26px", height: "129.73px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "423.83px", top: "51.07px", width: "26px", height: "16.33px", borderRadius: "4px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "423.83px", top: "200.83px", width: "26px", height: "54.1px", borderRadius: "2px 2px 13px 13px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "485.5px", top: "60.33px", width: "26px", height: "139px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "485.5px", top: "51.07px", width: "26px", height: "7.07px", borderRadius: "3.53px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "485.5px", top: "200.83px", width: "26px", height: "49.47px", borderRadius: "2px 2px 13px 13px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "547.17px", top: "55.7px", width: "26px", height: "143.63px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "547.17px", top: "41.8px", width: "26px", height: "11.7px", borderRadius: "4px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "547.17px", top: "200.83px", width: "26px", height: "49.47px", borderRadius: "2px 2px 13px 13px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "608.83px", top: "60.33px", width: "26px", height: "139px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "608.83px", top: "41.8px", width: "26px", height: "16.33px", borderRadius: "4px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "608.83px", top: "200.83px", width: "26px", height: "44.83px", borderRadius: "2px 2px 13px 13px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "670.5px", top: "41.8px", width: "26px", height: "157.53px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "670.5px", top: "32.53px", width: "26px", height: "7.07px", borderRadius: "3.53px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "670.5px", top: "200.83px", width: "26px", height: "40.2px", borderRadius: "2px 2px 13px 13px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div data-fu="bar" style={{ position: "absolute", left: "732.17px", top: "64.97px", width: "26px", height: "134.37px", borderRadius: "4px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }}>
          <svg data-fu="plot" style={{ position: "absolute", left: "-134.37px", top: "0px", width: "424.37px", height: "134.37px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="424.37" height="134.37" viewBox="0 0 424.37 134.37" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 134.37 L0.494975 134.865 L134.865 0.494975 L134.37 0 L133.875 -0.494975 L-0.494975 133.875 L0 134.37 Z M5 134.37 L5.49497 134.865 L139.865 0.494975 L139.37 0 L138.875 -0.494975 L4.50503 133.875 L5 134.37 Z M10 134.37 L10.495 134.865 L144.865 0.494975 L144.37 0 L143.875 -0.494975 L9.50502 133.875 L10 134.37 Z M15 134.37 L15.495 134.865 L149.865 0.494975 L149.37 0 L148.875 -0.494975 L14.505 133.875 L15 134.37 Z M20 134.37 L20.495 134.865 L154.865 0.494975 L154.37 0 L153.875 -0.494975 L19.505 133.875 L20 134.37 Z M25 134.37 L25.495 134.865 L159.865 0.494975 L159.37 0 L158.875 -0.494975 L24.505 133.875 L25 134.37 Z M30 134.37 L30.495 134.865 L164.865 0.494975 L164.37 0 L163.875 -0.494975 L29.505 133.875 L30 134.37 Z M35 134.37 L35.495 134.865 L169.865 0.494975 L169.37 0 L168.875 -0.494975 L34.505 133.875 L35 134.37 Z M40 134.37 L40.495 134.865 L174.865 0.494975 L174.37 0 L173.875 -0.494975 L39.505 133.875 L40 134.37 Z M45 134.37 L45.495 134.865 L179.865 0.494975 L179.37 0 L178.875 -0.494975 L44.505 133.875 L45 134.37 Z M50 134.37 L50.495 134.865 L184.865 0.494975 L184.37 0 L183.875 -0.494975 L49.505 133.875 L50 134.37 Z M55 134.37 L55.495 134.865 L189.865 0.494975 L189.37 0 L188.875 -0.494975 L54.505 133.875 L55 134.37 Z M60 134.37 L60.495 134.865 L194.865 0.494975 L194.37 0 L193.875 -0.494975 L59.505 133.875 L60 134.37 Z M65 134.37 L65.495 134.865 L199.865 0.494975 L199.37 0 L198.875 -0.494975 L64.505 133.875 L65 134.37 Z M70 134.37 L70.495 134.865 L204.865 0.494975 L204.37 0 L203.875 -0.494975 L69.505 133.875 L70 134.37 Z M75 134.37 L75.495 134.865 L209.865 0.494975 L209.37 0 L208.875 -0.494975 L74.505 133.875 L75 134.37 Z M80 134.37 L80.495 134.865 L214.865 0.494975 L214.37 0 L213.875 -0.494975 L79.505 133.875 L80 134.37 Z M85 134.37 L85.495 134.865 L219.865 0.494975 L219.37 0 L218.875 -0.494975 L84.505 133.875 L85 134.37 Z M90 134.37 L90.495 134.865 L224.865 0.494975 L224.37 0 L223.875 -0.494975 L89.505 133.875 L90 134.37 Z M95 134.37 L95.495 134.865 L229.865 0.494975 L229.37 0 L228.875 -0.494975 L94.505 133.875 L95 134.37 Z M100 134.37 L100.495 134.865 L234.865 0.494975 L234.37 0 L233.875 -0.494975 L99.505 133.875 L100 134.37 Z M105 134.37 L105.495 134.865 L239.865 0.494975 L239.37 0 L238.875 -0.494975 L104.505 133.875 L105 134.37 Z M110 134.37 L110.495 134.865 L244.865 0.494975 L244.37 0 L243.875 -0.494975 L109.505 133.875 L110 134.37 Z M115 134.37 L115.495 134.865 L249.865 0.494975 L249.37 0 L248.875 -0.494975 L114.505 133.875 L115 134.37 Z M120 134.37 L120.495 134.865 L254.865 0.494975 L254.37 0 L253.875 -0.494975 L119.505 133.875 L120 134.37 Z M125 134.37 L125.495 134.865 L259.865 0.494975 L259.37 0 L258.875 -0.494975 L124.505 133.875 L125 134.37 Z M130 134.37 L130.495 134.865 L264.865 0.494975 L264.37 0 L263.875 -0.494975 L129.505 133.875 L130 134.37 Z M135 134.37 L135.495 134.865 L269.865 0.494975 L269.37 0 L268.875 -0.494975 L134.505 133.875 L135 134.37 Z M140 134.37 L140.495 134.865 L274.865 0.494975 L274.37 0 L273.875 -0.494975 L139.505 133.875 L140 134.37 Z M145 134.37 L145.495 134.865 L279.865 0.494975 L279.37 0 L278.875 -0.494975 L144.505 133.875 L145 134.37 Z M150 134.37 L150.495 134.865 L284.865 0.494975 L284.37 0 L283.875 -0.494975 L149.505 133.875 L150 134.37 Z M155 134.37 L155.495 134.865 L289.865 0.494975 L289.37 0 L288.875 -0.494975 L154.505 133.875 L155 134.37 Z M160 134.37 L160.495 134.865 L294.865 0.494975 L294.37 0 L293.875 -0.494975 L159.505 133.875 L160 134.37 Z M165 134.37 L165.495 134.865 L299.865 0.494975 L299.37 0 L298.875 -0.494975 L164.505 133.875 L165 134.37 Z M170 134.37 L170.495 134.865 L304.865 0.494975 L304.37 0 L303.875 -0.494975 L169.505 133.875 L170 134.37 Z M175 134.37 L175.495 134.865 L309.865 0.494975 L309.37 0 L308.875 -0.494975 L174.505 133.875 L175 134.37 Z M180 134.37 L180.495 134.865 L314.865 0.494975 L314.37 0 L313.875 -0.494975 L179.505 133.875 L180 134.37 Z M185 134.37 L185.495 134.865 L319.865 0.494975 L319.37 0 L318.875 -0.494975 L184.505 133.875 L185 134.37 Z M190 134.37 L190.495 134.865 L324.865 0.494975 L324.37 0 L323.875 -0.494975 L189.505 133.875 L190 134.37 Z M195 134.37 L195.495 134.865 L329.865 0.494975 L329.37 0 L328.875 -0.494975 L194.505 133.875 L195 134.37 Z M200 134.37 L200.495 134.865 L334.865 0.494975 L334.37 0 L333.875 -0.494975 L199.505 133.875 L200 134.37 Z M205 134.37 L205.495 134.865 L339.865 0.494975 L339.37 0 L338.875 -0.494975 L204.505 133.875 L205 134.37 Z M210 134.37 L210.495 134.865 L344.865 0.494975 L344.37 0 L343.875 -0.494975 L209.505 133.875 L210 134.37 Z M215 134.37 L215.495 134.865 L349.865 0.494975 L349.37 0 L348.875 -0.494975 L214.505 133.875 L215 134.37 Z M220 134.37 L220.495 134.865 L354.865 0.494975 L354.37 0 L353.875 -0.494975 L219.505 133.875 L220 134.37 Z M225 134.37 L225.495 134.865 L359.865 0.494975 L359.37 0 L358.875 -0.494975 L224.505 133.875 L225 134.37 Z M230 134.37 L230.495 134.865 L364.865 0.494975 L364.37 0 L363.875 -0.494975 L229.505 133.875 L230 134.37 Z M235 134.37 L235.495 134.865 L369.865 0.494975 L369.37 0 L368.875 -0.494975 L234.505 133.875 L235 134.37 Z M240 134.37 L240.495 134.865 L374.865 0.494975 L374.37 0 L373.875 -0.494975 L239.505 133.875 L240 134.37 Z M245 134.37 L245.495 134.865 L379.865 0.494975 L379.37 0 L378.875 -0.494975 L244.505 133.875 L245 134.37 Z M250 134.37 L250.495 134.865 L384.865 0.494975 L384.37 0 L383.875 -0.494975 L249.505 133.875 L250 134.37 Z M255 134.37 L255.495 134.865 L389.865 0.494975 L389.37 0 L388.875 -0.494975 L254.505 133.875 L255 134.37 Z M260 134.37 L260.495 134.865 L394.865 0.494975 L394.37 0 L393.875 -0.494975 L259.505 133.875 L260 134.37 Z M265 134.37 L265.495 134.865 L399.865 0.494975 L399.37 0 L398.875 -0.494975 L264.505 133.875 L265 134.37 Z M270 134.37 L270.495 134.865 L404.865 0.494975 L404.37 0 L403.875 -0.494975 L269.505 133.875 L270 134.37 Z M275 134.37 L275.495 134.865 L409.865 0.494975 L409.37 0 L408.875 -0.494975 L274.505 133.875 L275 134.37 Z M280 134.37 L280.495 134.865 L414.865 0.494975 L414.37 0 L413.875 -0.494975 L279.505 133.875 L280 134.37 Z M285 134.37 L285.495 134.865 L419.865 0.494975 L419.37 0 L418.875 -0.494975 L284.505 133.875 L285 134.37 Z M290 134.37 L290.495 134.865 L424.865 0.494975 L424.37 0 L423.875 -0.494975 L289.505 133.875 L290 134.37 Z" fill="#ffffff" fillOpacity="0.16"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "732.17px", top: "51.07px", width: "26px", height: "11.7px", borderRadius: "4px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
          <svg style={{ position: "absolute", left: "-11.7px", top: "0px", width: "56.7px", height: "11.7px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="56.7" height="11.7" viewBox="0 0 56.7 11.7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 11.7 L0.494975 12.195 L12.195 0.494975 L11.7 0 L11.205 -0.494975 L-0.494975 11.205 L0 11.7 Z M5 11.7 L5.49497 12.195 L17.195 0.494975 L16.7 0 L16.205 -0.494975 L4.50503 11.205 L5 11.7 Z M10 11.7 L10.495 12.195 L22.195 0.494975 L21.7 0 L21.205 -0.494975 L9.50502 11.205 L10 11.7 Z M15 11.7 L15.495 12.195 L27.195 0.494975 L26.7 0 L26.205 -0.494975 L14.505 11.205 L15 11.7 Z M20 11.7 L20.495 12.195 L32.195 0.494975 L31.7 0 L31.205 -0.494975 L19.505 11.205 L20 11.7 Z M25 11.7 L25.495 12.195 L37.195 0.494975 L36.7 0 L36.205 -0.494975 L24.505 11.205 L25 11.7 Z M30 11.7 L30.495 12.195 L42.195 0.494975 L41.7 0 L41.205 -0.494975 L29.505 11.205 L30 11.7 Z M35 11.7 L35.495 12.195 L47.195 0.494975 L46.7 0 L46.205 -0.494975 L34.505 11.205 L35 11.7 Z M40 11.7 L40.495 12.195 L52.195 0.494975 L51.7 0 L51.205 -0.494975 L39.505 11.205 L40 11.7 Z M45 11.7 L45.495 12.195 L57.195 0.494975 L56.7 0 L56.205 -0.494975 L44.505 11.205 L45 11.7 Z" fill="#ffffff" fillOpacity="0.16"/></svg>
        </div>
        <div data-fu="bar" style={{ position: "absolute", left: "732.17px", top: "200.83px", width: "26px", height: "40.2px", borderRadius: "2px 2px 13px 13px", background: "linear-gradient(180deg, #983f6a 0%, #84395d 100%)", boxShadow: "inset 0 0 0 1px rgba(218, 81, 147, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }}>
          <svg data-fu="plot" style={{ position: "absolute", left: "-40.2px", top: "0px", width: "145.2px", height: "40.2px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="145.2" height="40.2" viewBox="0 0 145.2 40.2" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 40.2 L0.494975 40.695 L40.695 0.494975 L40.2 0 L39.705 -0.494975 L-0.494975 39.705 L0 40.2 Z M5 40.2 L5.49497 40.695 L45.695 0.494975 L45.2 0 L44.705 -0.494975 L4.50503 39.705 L5 40.2 Z M10 40.2 L10.495 40.695 L50.695 0.494975 L50.2 0 L49.705 -0.494975 L9.50502 39.705 L10 40.2 Z M15 40.2 L15.495 40.695 L55.695 0.494975 L55.2 0 L54.705 -0.494975 L14.505 39.705 L15 40.2 Z M20 40.2 L20.495 40.695 L60.695 0.494975 L60.2 0 L59.705 -0.494975 L19.505 39.705 L20 40.2 Z M25 40.2 L25.495 40.695 L65.695 0.494975 L65.2 0 L64.705 -0.494975 L24.505 39.705 L25 40.2 Z M30 40.2 L30.495 40.695 L70.695 0.494975 L70.2 0 L69.705 -0.494975 L29.505 39.705 L30 40.2 Z M35 40.2 L35.495 40.695 L75.695 0.494975 L75.2 0 L74.705 -0.494975 L34.505 39.705 L35 40.2 Z M40 40.2 L40.495 40.695 L80.695 0.494975 L80.2 0 L79.705 -0.494975 L39.505 39.705 L40 40.2 Z M45 40.2 L45.495 40.695 L85.695 0.494975 L85.2 0 L84.705 -0.494975 L44.505 39.705 L45 40.2 Z M50 40.2 L50.495 40.695 L90.695 0.494975 L90.2 0 L89.705 -0.494975 L49.505 39.705 L50 40.2 Z M55 40.2 L55.495 40.695 L95.695 0.494975 L95.2 0 L94.705 -0.494975 L54.505 39.705 L55 40.2 Z M60 40.2 L60.495 40.695 L100.695 0.494975 L100.2 0 L99.705 -0.494975 L59.505 39.705 L60 40.2 Z M65 40.2 L65.495 40.695 L105.695 0.494975 L105.2 0 L104.705 -0.494975 L64.505 39.705 L65 40.2 Z M70 40.2 L70.495 40.695 L110.695 0.494975 L110.2 0 L109.705 -0.494975 L69.505 39.705 L70 40.2 Z M75 40.2 L75.495 40.695 L115.695 0.494975 L115.2 0 L114.705 -0.494975 L74.505 39.705 L75 40.2 Z M80 40.2 L80.495 40.695 L120.695 0.494975 L120.2 0 L119.705 -0.494975 L79.505 39.705 L80 40.2 Z M85 40.2 L85.495 40.695 L125.695 0.494975 L125.2 0 L124.705 -0.494975 L84.505 39.705 L85 40.2 Z M90 40.2 L90.495 40.695 L130.695 0.494975 L130.2 0 L129.705 -0.494975 L89.505 39.705 L90 40.2 Z M95 40.2 L95.495 40.695 L135.695 0.494975 L135.2 0 L134.705 -0.494975 L94.505 39.705 L95 40.2 Z M100 40.2 L100.495 40.695 L140.695 0.494975 L140.2 0 L139.705 -0.494975 L99.505 39.705 L100 40.2 Z M105 40.2 L105.495 40.695 L145.695 0.494975 L145.2 0 L144.705 -0.494975 L104.505 39.705 L105 40.2 Z" fill="#ffffff" fillOpacity="0.16"/></svg>
        </div>
        <p style={{ position: "absolute", left: "53.33px", top: "302px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W20</p>
        <p style={{ position: "absolute", left: "116.5px", top: "302px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W21</p>
        <p style={{ position: "absolute", left: "176.67px", top: "302px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W22</p>
        <p style={{ position: "absolute", left: "238.83px", top: "302px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W23</p>
        <p style={{ position: "absolute", left: "300.5px", top: "302px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W24</p>
        <p style={{ position: "absolute", left: "361.67px", top: "302px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W25</p>
        <p style={{ position: "absolute", left: "423.33px", top: "302px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W26</p>
        <p style={{ position: "absolute", left: "486px", top: "302px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W27</p>
        <p style={{ position: "absolute", left: "546.67px", top: "302px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W28</p>
        <p style={{ position: "absolute", left: "608.33px", top: "302px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W29</p>
        <p style={{ position: "absolute", left: "670px", top: "302px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>W30</p>
        <p style={{ position: "absolute", left: "733.17px", top: "302px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>W31</p>
        <div style={{ position: "absolute", left: "36px", top: "198.83px", width: "740px", height: "1px", background: "#3a3a3a" }} />
        <svg data-fu="plot" style={{ position: "absolute", left: "66.83px", top: "74.23px", width: "678.33px", height: "78.78px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="678.33" height="78.78" viewBox="0 0 678.33 78.78" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M-0.260376 64.0164 C-0.736176 64.1602 -1.00531 64.6624 -0.861513 65.1382 C-0.717711 65.614 -0.215424 65.8832 0.260376 65.7394 L0 64.8779 L-0.260376 64.0164 Z M61.67 46.3379 L61.7716 45.4436 L61.7706 45.4435 L61.67 46.3379 Z M123.33 78.7779 L123.296 77.8785 L123.296 77.8785 L123.33 78.7779 Z M246.67 50.9779 L246.771 51.8722 L246.772 51.8721 L246.67 50.9779 Z M308.33 27.8079 L308.197 26.9178 L308.196 26.9178 L308.33 27.8079 Z M431.67 27.8079 L431.771 28.7022 L431.771 28.7022 L431.67 27.8079 Z M493.33 18.5379 L493.229 17.6435 L493.228 17.6436 L493.33 18.5379 Z M616.67 0.0078714 L616.704 -0.891496 L616.704 -0.891497 L616.67 0.0078714 Z M678.071 19.3999 C678.547 19.5428 679.049 19.2727 679.192 18.7966 C679.335 18.3206 679.065 17.8188 678.589 17.6759 L678.33 18.5379 L678.071 19.3999 Z M0 64.8779 L0.260376 65.7394 C1.52345 65.3576 5.41812 63.928 10.6338 62.0427 C15.8738 60.1486 22.4961 57.7761 29.2708 55.4855 C36.048 53.1939 42.9649 50.9886 48.7963 49.4263 C51.7127 48.645 54.3445 48.028 56.5445 47.6411 C58.7663 47.2503 60.4712 47.1087 61.5694 47.2322 L61.67 46.3379 L61.7706 45.4435 C60.4013 45.2895 58.4824 45.4726 56.2327 45.8683 C53.9609 46.2679 51.2733 46.8992 48.3305 47.6876 C42.4438 49.2647 35.4845 51.4843 28.6942 53.7803 C21.9014 56.0771 15.2649 58.4547 10.0219 60.3499 C4.75438 62.254 0.941549 63.6531 -0.260376 64.0164 L0 64.8779 Z M61.67 46.3379 L61.5684 47.2321 C62.6471 47.3547 64.2687 47.9171 66.369 48.8858 C68.4446 49.8431 70.9047 51.1569 73.6315 52.7128 C79.0861 55.8253 85.5425 59.8683 92.0263 63.8819 C98.4981 67.888 104.996 71.8642 110.497 74.8158 C113.247 76.2914 115.767 77.5215 117.923 78.3732 C120.049 79.2126 121.932 79.731 123.364 79.6772 L123.33 78.7779 L123.296 77.8785 C122.263 77.9173 120.679 77.5263 118.585 76.6991 C116.521 75.8841 114.071 74.6905 111.348 73.2297 C105.904 70.3085 99.4519 66.3615 92.9737 62.3514 C86.5074 58.3487 80.0139 54.2823 74.5235 51.1495 C71.7778 49.5827 69.2666 48.2399 67.1229 47.2512 C65.0038 46.2739 63.1579 45.6011 61.7716 45.4436 L61.67 46.3379 Z M123.33 78.7779 L123.364 79.6772 C124.791 79.6237 126.667 78.9737 128.789 77.9857 C130.942 76.9833 133.459 75.5785 136.209 73.9113 C141.708 70.5763 148.204 66.1476 154.676 61.6772 C161.16 57.1994 167.619 52.6809 173.078 49.1396 C175.807 47.3694 178.272 45.8527 180.354 44.7123 C182.457 43.5599 184.097 42.8335 185.197 42.5859 L185 41.7079 L184.803 40.8298 C183.436 41.1372 181.606 41.974 179.489 43.1336 C177.35 44.3051 174.843 45.8493 172.098 47.6295 C166.611 51.1893 160.12 55.7301 153.654 60.1961 C147.176 64.6694 140.722 69.0688 135.275 72.3722 C132.551 74.0242 130.097 75.3912 128.029 76.3539 C125.93 77.3311 124.336 77.8395 123.296 77.8785 L123.33 78.7779 Z M185 41.7079 L185.197 42.5859 C186.304 42.3371 187.935 42.2841 190.024 42.4126 C192.095 42.5401 194.551 42.8414 197.273 43.2651 C202.719 44.1126 209.172 45.4399 215.649 46.8072 C222.115 48.1722 228.608 49.5777 234.098 50.5711 C236.844 51.0681 239.352 51.4645 241.492 51.7017 C243.617 51.9373 245.434 52.0226 246.771 51.8722 L246.67 50.9779 L246.569 50.0835 C245.439 50.2106 243.786 50.145 241.69 49.9127 C239.609 49.6819 237.146 49.2935 234.418 48.7999 C228.962 47.8124 222.505 46.4148 216.021 45.046 C209.548 43.6796 203.051 42.3425 197.55 41.4865 C194.8 41.0585 192.283 40.7483 190.134 40.616 C188.002 40.4848 186.164 40.5236 184.803 40.8298 L185 41.7079 Z M246.67 50.9779 L246.772 51.8721 C249.373 51.5767 253.955 50.0321 259.401 47.933 C264.889 45.8179 271.378 43.0896 277.85 40.357 C284.329 37.6214 290.792 34.8816 296.252 32.7325 C301.749 30.5691 306.119 29.0498 308.464 28.6979 L308.33 27.8079 L308.196 26.9178 C305.611 27.3059 301.041 28.9129 295.593 31.0576 C290.108 33.2167 283.621 35.9668 277.15 38.6987 C270.672 41.4336 264.211 44.1504 258.754 46.2534 C253.255 48.3724 248.897 49.8191 246.568 50.0836 L246.67 50.9779 Z M308.33 27.8079 L308.463 28.6979 C310.819 28.3447 315.194 28.4392 320.682 28.8049 C326.138 29.1685 332.599 29.792 339.072 30.4631 C351.968 31.8 365.003 33.3379 370 33.3379 L370 32.4379 L370 31.5379 C365.127 31.5379 352.262 30.0208 339.258 28.6727 C332.781 28.0013 326.292 27.3748 320.802 27.0089 C315.344 26.6453 310.776 26.5311 308.197 26.9178 L308.33 27.8079 Z M370 32.4379 L370 33.3379 C379.925 33.3379 421.899 29.8124 431.771 28.7022 L431.67 27.8079 L431.569 26.9135 C421.701 28.0234 379.815 31.5379 370 31.5379 L370 32.4379 Z M431.67 27.8079 L431.771 28.7022 C436.726 28.1443 449.705 26.1021 462.64 24.0657 C475.605 22.0246 488.527 19.9893 493.432 19.4321 L493.33 18.5379 L493.228 17.6436 C488.273 18.2065 475.295 20.2512 462.36 22.2876 C449.395 24.3287 436.474 26.3614 431.569 26.9135 L431.67 27.8079 Z M493.33 18.5379 L493.431 19.4322 C498.337 18.8804 511.252 18.0949 524.223 17.2598 C537.148 16.4276 550.15 15.5452 555.133 14.7979 L555 13.9079 L554.867 13.0178 C549.98 13.7506 537.082 14.6281 524.107 15.4635 C511.178 16.2959 498.193 17.0853 493.229 17.6435 L493.33 18.5379 Z M555 13.9079 L555.133 14.7979 C560.13 14.0487 573.166 10.4573 586.06 7.13566 C592.532 5.46807 598.992 3.86168 604.446 2.69564 C609.939 1.52127 614.3 0.819654 616.636 0.90724 L616.67 0.0078714 L616.704 -0.891497 C614.105 -0.988911 609.523 -0.230527 604.07 0.935418 C598.578 2.10969 592.088 3.72393 585.61 5.39258 C572.604 8.74343 559.74 12.287 554.867 13.0178 L555 13.9079 Z M616.67 0.0078714 L616.636 0.907238 C618.975 0.995005 623.647 2.07226 629.528 3.71787 C635.368 5.35189 642.292 7.51346 649.071 9.7127 C662.585 14.0971 675.603 18.6588 678.071 19.3999 L678.33 18.5379 L678.589 17.6759 C676.127 16.9369 663.245 12.4187 649.626 8.00055 C642.839 5.79853 635.888 3.62823 630.013 1.98444 C624.18 0.352229 619.295 -0.794263 616.704 -0.891496 L616.67 0.0078714 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "63.33px", top: "135.6px", width: "7px", height: "7px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#1a1a1a"/><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 L5.5 3.5 C5.5 4.60457 4.60457 5.5 3.5 5.5 L3.5 7 L3.5 8.5 C6.26142 8.5 8.5 6.26142 8.5 3.5 L7 3.5 Z M3.5 7 L3.5 5.5 C2.39543 5.5 1.5 4.60457 1.5 3.5 L0 3.5 L-1.5 3.5 C-1.5 6.26142 0.738576 8.5 3.5 8.5 L3.5 7 Z M0 3.5 L1.5 3.5 C1.5 2.39543 2.39543 1.5 3.5 1.5 L3.5 0 L3.5 -1.5 C0.738576 -1.5 -1.5 0.738576 -1.5 3.5 L0 3.5 Z M3.5 0 L3.5 1.5 C4.60457 1.5 5.5 2.39543 5.5 3.5 L7 3.5 L8.5 3.5 C8.5 0.738576 6.26142 -1.5 3.5 -1.5 L3.5 0 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "125px", top: "117.07px", width: "7px", height: "7px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#1a1a1a"/><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 L5.5 3.5 C5.5 4.60457 4.60457 5.5 3.5 5.5 L3.5 7 L3.5 8.5 C6.26142 8.5 8.5 6.26142 8.5 3.5 L7 3.5 Z M3.5 7 L3.5 5.5 C2.39543 5.5 1.5 4.60457 1.5 3.5 L0 3.5 L-1.5 3.5 C-1.5 6.26142 0.738576 8.5 3.5 8.5 L3.5 7 Z M0 3.5 L1.5 3.5 C1.5 2.39543 2.39543 1.5 3.5 1.5 L3.5 0 L3.5 -1.5 C0.738576 -1.5 -1.5 0.738576 -1.5 3.5 L0 3.5 Z M3.5 0 L3.5 1.5 C4.60457 1.5 5.5 2.39543 5.5 3.5 L7 3.5 L8.5 3.5 C8.5 0.738576 6.26142 -1.5 3.5 -1.5 L3.5 0 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "186.67px", top: "149.5px", width: "7px", height: "7px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#1a1a1a"/><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 L5.5 3.5 C5.5 4.60457 4.60457 5.5 3.5 5.5 L3.5 7 L3.5 8.5 C6.26142 8.5 8.5 6.26142 8.5 3.5 L7 3.5 Z M3.5 7 L3.5 5.5 C2.39543 5.5 1.5 4.60457 1.5 3.5 L0 3.5 L-1.5 3.5 C-1.5 6.26142 0.738576 8.5 3.5 8.5 L3.5 7 Z M0 3.5 L1.5 3.5 C1.5 2.39543 2.39543 1.5 3.5 1.5 L3.5 0 L3.5 -1.5 C0.738576 -1.5 -1.5 0.738576 -1.5 3.5 L0 3.5 Z M3.5 0 L3.5 1.5 C4.60457 1.5 5.5 2.39543 5.5 3.5 L7 3.5 L8.5 3.5 C8.5 0.738576 6.26142 -1.5 3.5 -1.5 L3.5 0 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "248.33px", top: "112.43px", width: "7px", height: "7px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#1a1a1a"/><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 L5.5 3.5 C5.5 4.60457 4.60457 5.5 3.5 5.5 L3.5 7 L3.5 8.5 C6.26142 8.5 8.5 6.26142 8.5 3.5 L7 3.5 Z M3.5 7 L3.5 5.5 C2.39543 5.5 1.5 4.60457 1.5 3.5 L0 3.5 L-1.5 3.5 C-1.5 6.26142 0.738576 8.5 3.5 8.5 L3.5 7 Z M0 3.5 L1.5 3.5 C1.5 2.39543 2.39543 1.5 3.5 1.5 L3.5 0 L3.5 -1.5 C0.738576 -1.5 -1.5 0.738576 -1.5 3.5 L0 3.5 Z M3.5 0 L3.5 1.5 C4.60457 1.5 5.5 2.39543 5.5 3.5 L7 3.5 L8.5 3.5 C8.5 0.738576 6.26142 -1.5 3.5 -1.5 L3.5 0 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "310px", top: "121.7px", width: "7px", height: "7px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#1a1a1a"/><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 L5.5 3.5 C5.5 4.60457 4.60457 5.5 3.5 5.5 L3.5 7 L3.5 8.5 C6.26142 8.5 8.5 6.26142 8.5 3.5 L7 3.5 Z M3.5 7 L3.5 5.5 C2.39543 5.5 1.5 4.60457 1.5 3.5 L0 3.5 L-1.5 3.5 C-1.5 6.26142 0.738576 8.5 3.5 8.5 L3.5 7 Z M0 3.5 L1.5 3.5 C1.5 2.39543 2.39543 1.5 3.5 1.5 L3.5 0 L3.5 -1.5 C0.738576 -1.5 -1.5 0.738576 -1.5 3.5 L0 3.5 Z M3.5 0 L3.5 1.5 C4.60457 1.5 5.5 2.39543 5.5 3.5 L7 3.5 L8.5 3.5 C8.5 0.738576 6.26142 -1.5 3.5 -1.5 L3.5 0 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "371.67px", top: "98.53px", width: "7px", height: "7px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#1a1a1a"/><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 L5.5 3.5 C5.5 4.60457 4.60457 5.5 3.5 5.5 L3.5 7 L3.5 8.5 C6.26142 8.5 8.5 6.26142 8.5 3.5 L7 3.5 Z M3.5 7 L3.5 5.5 C2.39543 5.5 1.5 4.60457 1.5 3.5 L0 3.5 L-1.5 3.5 C-1.5 6.26142 0.738576 8.5 3.5 8.5 L3.5 7 Z M0 3.5 L1.5 3.5 C1.5 2.39543 2.39543 1.5 3.5 1.5 L3.5 0 L3.5 -1.5 C0.738576 -1.5 -1.5 0.738576 -1.5 3.5 L0 3.5 Z M3.5 0 L3.5 1.5 C4.60457 1.5 5.5 2.39543 5.5 3.5 L7 3.5 L8.5 3.5 C8.5 0.738576 6.26142 -1.5 3.5 -1.5 L3.5 0 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "433.33px", top: "103.17px", width: "7px", height: "7px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#1a1a1a"/><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 L5.5 3.5 C5.5 4.60457 4.60457 5.5 3.5 5.5 L3.5 7 L3.5 8.5 C6.26142 8.5 8.5 6.26142 8.5 3.5 L7 3.5 Z M3.5 7 L3.5 5.5 C2.39543 5.5 1.5 4.60457 1.5 3.5 L0 3.5 L-1.5 3.5 C-1.5 6.26142 0.738576 8.5 3.5 8.5 L3.5 7 Z M0 3.5 L1.5 3.5 C1.5 2.39543 2.39543 1.5 3.5 1.5 L3.5 0 L3.5 -1.5 C0.738576 -1.5 -1.5 0.738576 -1.5 3.5 L0 3.5 Z M3.5 0 L3.5 1.5 C4.60457 1.5 5.5 2.39543 5.5 3.5 L7 3.5 L8.5 3.5 C8.5 0.738576 6.26142 -1.5 3.5 -1.5 L3.5 0 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "495px", top: "98.53px", width: "7px", height: "7px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#1a1a1a"/><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 L5.5 3.5 C5.5 4.60457 4.60457 5.5 3.5 5.5 L3.5 7 L3.5 8.5 C6.26142 8.5 8.5 6.26142 8.5 3.5 L7 3.5 Z M3.5 7 L3.5 5.5 C2.39543 5.5 1.5 4.60457 1.5 3.5 L0 3.5 L-1.5 3.5 C-1.5 6.26142 0.738576 8.5 3.5 8.5 L3.5 7 Z M0 3.5 L1.5 3.5 C1.5 2.39543 2.39543 1.5 3.5 1.5 L3.5 0 L3.5 -1.5 C0.738576 -1.5 -1.5 0.738576 -1.5 3.5 L0 3.5 Z M3.5 0 L3.5 1.5 C4.60457 1.5 5.5 2.39543 5.5 3.5 L7 3.5 L8.5 3.5 C8.5 0.738576 6.26142 -1.5 3.5 -1.5 L3.5 0 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "556.67px", top: "89.27px", width: "7px", height: "7px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#1a1a1a"/><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 L5.5 3.5 C5.5 4.60457 4.60457 5.5 3.5 5.5 L3.5 7 L3.5 8.5 C6.26142 8.5 8.5 6.26142 8.5 3.5 L7 3.5 Z M3.5 7 L3.5 5.5 C2.39543 5.5 1.5 4.60457 1.5 3.5 L0 3.5 L-1.5 3.5 C-1.5 6.26142 0.738576 8.5 3.5 8.5 L3.5 7 Z M0 3.5 L1.5 3.5 C1.5 2.39543 2.39543 1.5 3.5 1.5 L3.5 0 L3.5 -1.5 C0.738576 -1.5 -1.5 0.738576 -1.5 3.5 L0 3.5 Z M3.5 0 L3.5 1.5 C4.60457 1.5 5.5 2.39543 5.5 3.5 L7 3.5 L8.5 3.5 C8.5 0.738576 6.26142 -1.5 3.5 -1.5 L3.5 0 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "618.33px", top: "84.63px", width: "7px", height: "7px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#1a1a1a"/><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 L5.5 3.5 C5.5 4.60457 4.60457 5.5 3.5 5.5 L3.5 7 L3.5 8.5 C6.26142 8.5 8.5 6.26142 8.5 3.5 L7 3.5 Z M3.5 7 L3.5 5.5 C2.39543 5.5 1.5 4.60457 1.5 3.5 L0 3.5 L-1.5 3.5 C-1.5 6.26142 0.738576 8.5 3.5 8.5 L3.5 7 Z M0 3.5 L1.5 3.5 C1.5 2.39543 2.39543 1.5 3.5 1.5 L3.5 0 L3.5 -1.5 C0.738576 -1.5 -1.5 0.738576 -1.5 3.5 L0 3.5 Z M3.5 0 L3.5 1.5 C4.60457 1.5 5.5 2.39543 5.5 3.5 L7 3.5 L8.5 3.5 C8.5 0.738576 6.26142 -1.5 3.5 -1.5 L3.5 0 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "680px", top: "70.73px", width: "7px", height: "7px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#1a1a1a"/><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 L5.5 3.5 C5.5 4.60457 4.60457 5.5 3.5 5.5 L3.5 7 L3.5 8.5 C6.26142 8.5 8.5 6.26142 8.5 3.5 L7 3.5 Z M3.5 7 L3.5 5.5 C2.39543 5.5 1.5 4.60457 1.5 3.5 L0 3.5 L-1.5 3.5 C-1.5 6.26142 0.738576 8.5 3.5 8.5 L3.5 7 Z M0 3.5 L1.5 3.5 C1.5 2.39543 2.39543 1.5 3.5 1.5 L3.5 0 L3.5 -1.5 C0.738576 -1.5 -1.5 0.738576 -1.5 3.5 L0 3.5 Z M3.5 0 L3.5 1.5 C4.60457 1.5 5.5 2.39543 5.5 3.5 L7 3.5 L8.5 3.5 C8.5 0.738576 6.26142 -1.5 3.5 -1.5 L3.5 0 Z" fill="#7aa2f7"/></svg>
        <svg style={{ position: "absolute", left: "740.17px", top: "87.77px", width: "10px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10 5 C10 7.76142 7.76142 10 5 10 C2.23858 10 0 7.76142 0 5 C0 2.23858 2.23858 0 5 0 C7.76142 0 10 2.23858 10 5 Z" fill="#7aa2f7"/><path transform="matrix(1 0 0 1 0 0)" d="M10 5 L8.47 5 C8.47 6.91643 6.91643 8.47 5 8.47 L5 10 L5 11.53 C8.60642 11.53 11.53 8.60642 11.53 5 L10 5 Z M5 10 L5 8.47 C3.08357 8.47 1.53 6.91643 1.53 5 L0 5 L-1.53 5 C-1.53 8.60642 1.39358 11.53 5 11.53 L5 10 Z M0 5 L1.53 5 C1.53 3.08357 3.08357 1.53 5 1.53 L5 0 L5 -1.53 C1.39358 -1.53 -1.53 1.39358 -1.53 5 L0 5 Z M5 0 L5 1.53 C6.91643 1.53 8.47 3.08357 8.47 5 L10 5 L11.53 5 C11.53 1.39358 8.60642 -1.53 5 -1.53 L5 0 Z" fill="#ffffff"/></svg>
        <div style={{ position: "absolute", left: "658.26px", top: "57.03px", width: "117.74px", height: "21.74px", borderRadius: "6px", background: "#000000", boxShadow: "inset 0 0 0 0.87px #3a3a3a, 0px 6px 24px 0px rgba(123, 91, 255, 0.1)", display: "flex", flexDirection: "row", padding: "3.87px 7.87px 3.87px 7.87px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "102px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ededed" }}>W31 so far · net +23</p>
        </div>
        <svg style={{ position: "absolute", left: "741.17px", top: "77.57px", width: "8px", height: "4px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L8 0 L4 4 L0 0 Z" fill="#000000"/></svg>
        <svg style={{ position: "absolute", left: "535.33px", top: "275.42px", width: "234.67px", height: "5px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="234.67" height="5" viewBox="0 0 234.67 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0.5 0 C0.5 -0.276142 0.276142 -0.5 0 -0.5 C-0.276142 -0.5 -0.5 -0.276142 -0.5 0 L0 0 L0.5 0 Z M0 5 L-0.5 5 C-0.5 5.27614 -0.276142 5.5 1.11022e-16 5.5 L0 5 Z M234.67 5 L234.67 5.5 C234.946 5.5 235.17 5.27614 235.17 5 L234.67 5 Z M235.17 0 C235.17 -0.276142 234.946 -0.5 234.67 -0.5 C234.394 -0.5 234.17 -0.276142 234.17 0 L234.67 0 L235.17 0 Z M0 0 L-0.5 0 L-0.5 5 L0 5 L0.5 5 L0.5 0 L0 0 Z M0 5 L0 5.5 L234.67 5.5 L234.67 5 L234.67 4.5 L0 4.5 L0 5 Z M234.67 5 L235.17 5 L235.17 0 L234.67 0 L234.17 0 L234.17 5 L234.67 5 Z" fill="#4a4a4a"/></svg>
        <div style={{ position: "absolute", left: "547.17px", top: "271.42px", width: "211px", height: "18px", borderRadius: "5px", background: "#1a1a1a", display: "flex", flexDirection: "row", padding: "2px 6px 2px 6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "199px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#8a8a8a" }}>{"Last 4 weeks  "}</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#c9b8ff" }}>+128 new</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#5f5f5f" }}>{" · "}</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ec79b1" }}>−41 cancelled</span>
          </p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "656px", width: "800px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "674px", width: "169px", height: "20px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "169px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Renewals & past due</p>
      </div>
      <div style={{ position: "absolute", left: "768px", top: "667px", width: "258px", height: "34px", borderRadius: "8px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #191919, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>All</p>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 9px 4px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>Past due</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>23</p>
          </div>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 9px 4px 9px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>Next 7 days</p>
          <div style={{ flexShrink: 0, borderRadius: "18px", background: "#1f1f1f", display: "flex", flexDirection: "row", padding: "3px 5px 3px 5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#cfcfcf" }}>96</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "239px", top: "708px", width: "787px", height: "356px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "787px", height: "36px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222, inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "1px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "81px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Subscription</p>
          </div>
          <div style={{ width: "146px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Leg</p>
          </div>
          <div style={{ width: "104px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Status</p>
          </div>
          <div style={{ width: "100px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Due</p>
          </div>
          <div style={{ width: "76px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Amount</p>
          </div>
          <div style={{ width: "131px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Retries</p>
            <InfoCircle size={10} strokeWidth={1.51} style={{ width: "10px", height: "10px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
          </div>
          <div style={{ width: "34px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, height: "18px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Altagracia Mejía</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Family</p>
                <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>$79/mo</p>
              </div>
            </div>
          </div>
          <div style={{ width: "146px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "104px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>Oscar & Nayrobi</p>
          </div>
          <div style={{ width: "104px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2d1a1c", boxShadow: "inset 0 0 0 1px #3d2326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#f07178"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#f07178", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Past due</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Jul 29</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>2 days</p>
              </div>
            </div>
          </div>
          <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>$79</p>
          </div>
          <div style={{ width: "131px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "4px", height: "14px", flexShrink: 0, borderRadius: "2px", background: "#e5484d" }} />
                <div style={{ width: "4px", height: "14px", flexShrink: 0, borderRadius: "2px", background: "rgba(229, 72, 77, 0.16)" }} />
                <div style={{ width: "4px", height: "14px", flexShrink: 0, borderRadius: "2px", background: "rgba(229, 72, 77, 0.16)" }} />
                <div style={{ width: "4px", height: "14px", flexShrink: 0, borderRadius: "2px", background: "rgba(229, 72, 77, 0.16)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>1 of 4</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#909090" }}>next Aug 2</p>
              </div>
            </div>
          </div>
          <div style={{ width: "34px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Leonel Cabrera</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Plus</p>
                <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>$49/mo</p>
              </div>
            </div>
          </div>
          <div style={{ width: "146px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>Julio & Liz</p>
          </div>
          <div style={{ width: "104px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2d1a1c", boxShadow: "inset 0 0 0 1px #3d2326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#f07178"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#f07178", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Past due</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Jul 26</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>5 days</p>
              </div>
            </div>
          </div>
          <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>$49</p>
          </div>
          <div style={{ width: "131px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "4px", height: "14px", flexShrink: 0, borderRadius: "2px", background: "#e5484d" }} />
                <div style={{ width: "4px", height: "14px", flexShrink: 0, borderRadius: "2px", background: "#e5484d" }} />
                <div style={{ width: "4px", height: "14px", flexShrink: 0, borderRadius: "2px", background: "rgba(229, 72, 77, 0.16)" }} />
                <div style={{ width: "4px", height: "14px", flexShrink: 0, borderRadius: "2px", background: "rgba(229, 72, 77, 0.16)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>2 of 4</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#909090" }}>next Aug 1</p>
              </div>
            </div>
          </div>
          <div style={{ width: "34px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Colmado Díaz</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>3 × Plus</p>
                <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>$147/mo</p>
              </div>
            </div>
          </div>
          <div style={{ width: "146px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>Edwin & Wiliannys</p>
          </div>
          <div style={{ width: "104px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#2d1a1c", boxShadow: "inset 0 0 0 1px #3d2326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "5px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M5 2.5 C5 3.88071 3.88071 5 2.5 5 C1.11929 5 0 3.88071 0 2.5 C0 1.11929 1.11929 0 2.5 0 C3.88071 0 5 1.11929 5 2.5 Z" fill="#f07178"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#f07178", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Past due</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Jul 24</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>7 days</p>
              </div>
            </div>
          </div>
          <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>$147</p>
          </div>
          <div style={{ width: "131px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "4px", height: "14px", flexShrink: 0, borderRadius: "2px", background: "#e3b341" }} />
                <div style={{ width: "4px", height: "14px", flexShrink: 0, borderRadius: "2px", background: "#e3b341" }} />
                <div style={{ width: "4px", height: "14px", flexShrink: 0, borderRadius: "2px", background: "#e3b341" }} />
                <div style={{ width: "4px", height: "14px", flexShrink: 0, borderRadius: "2px", background: "rgba(227, 179, 65, 0.16)" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>3 of 4</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#909090" }}>final Aug 3</p>
              </div>
            </div>
          </div>
          <div style={{ width: "34px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Juan Carlos Abreu</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Essential</p>
                <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>$29/mo</p>
              </div>
            </div>
          </div>
          <div style={{ width: "146px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>Alberto & Ciany</p>
          </div>
          <div style={{ width: "104px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Renewed</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Jul 31</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>today</p>
              </div>
            </div>
          </div>
          <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>$29</p>
          </div>
          <div style={{ width: "131px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Paid 00:12</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>card on file</p>
              </div>
            </div>
          </div>
          <div style={{ width: "34px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Familia Peña</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>Family</p>
                <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>$79/mo</p>
              </div>
            </div>
          </div>
          <div style={{ width: "146px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>Julio & Liz</p>
          </div>
          <div style={{ width: "104px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>Renews</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Aug 3</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>in 3 days</p>
              </div>
            </div>
          </div>
          <div style={{ width: "76px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>$79</p>
          </div>
          <div style={{ width: "131px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Auto-renew</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>card on file</p>
              </div>
            </div>
          </div>
          <div style={{ width: "34px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
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
