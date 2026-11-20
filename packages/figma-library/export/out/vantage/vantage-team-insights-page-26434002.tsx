"use client";
// Team insights page (vantage, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { AdjustmentsHorizontal, Bell, Briefcase, Bulb, Calendar, ChartBar, ChartColumn, ChartLine, Checklist, ChevronDown, ChevronRight, FileInvoice, GitCompare, GitMerge, Home, InfoCircle, Percentage, Share, Stack2, TrendingDown, TrendingUp, UserSearch, Users } from "ingotui-icons/react/stroke-rounded";

export function TeamInsightsPage() {
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
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", background: "linear-gradient(90deg, rgba(123, 91, 255, 0.17) 0%, rgba(123, 91, 255, 0.04) 62%, rgba(123, 91, 255, 0) 100%), linear-gradient(#232323, #232323)", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <Bulb size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#7b5bff", display: "block" }} />
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
                  <div style={{ width: "5px", height: "26px", flexShrink: 0, opacity: 0, borderRadius: "0px 6px 6px 0px", background: "#7b5bff", boxShadow: "0px 0px 7.2px 0px rgba(123, 91, 255, 0.5)" }} />
                  <div style={{ width: "214px", alignSelf: "stretch", flexShrink: 0, borderRadius: "6px", filter: "drop-shadow(0px 0px 2.3px rgba(0, 0, 0, 0.5))", display: "flex", flexDirection: "row", padding: "6px 6px 6px 6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                      <FileInvoice size={15} strokeWidth={2} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
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
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed", lineHeight: "12px" }}>Team</p>
          </div>
          <ChevronRight size={13} strokeWidth={2.77} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#dadada", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed", lineHeight: "12px" }}>Insights</p>
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
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Team insights</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "603px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>How the 13 legs compare on efficiency, volume, momentum and reporting · Jul 4 – Jul 31, 2026</p>
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
            <div style={{ width: "99px", alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <GitCompare size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Compare</p>
              <div style={{ position: "relative", flexShrink: 0, alignSelf: "flex-start", marginTop: "1px", width: "16px", height: "16px" }}>
                <ChevronRight size={16} strokeWidth={2.25} style={{ position: "absolute", left: "16px", top: "0px", width: "16px", height: "16px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#8a8a8a", display: "block", flexShrink: 0 }} />
              </div>
            </div>
          </div>
          <div data-fu="btn" style={{ flexShrink: 0, borderRadius: "6px", background: "#7b5bff", boxShadow: "inset 0 0 0 1px #8f74ff, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 13px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Share size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Share report</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "144px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "156px", width: "414px", height: "38px", borderRadius: "8px", background: "#191919", boxShadow: "inset 0px 2px 8px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #191919, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5), inset 0px 2px 4px 0px rgba(255, 255, 255, 0.2)", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Percentage size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ededed", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada", lineHeight: "1.4500000476837158" }}>Efficiency</p>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <ChartColumn size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>Volume</p>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <TrendingUp size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>Momentum</p>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "6px 10px 6px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Checklist size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.4500000476837158" }}>Reporting</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1322px", top: "161.5px", width: "104px", height: "27px", borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <AdjustmentsHorizontal size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#dadada" }}>Tier: All</p>
        <ChevronDown size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
      </div>
      <p style={{ position: "absolute", left: "989px", top: "167px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "317px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f" }}>13 legs · 241 people · efficiency = MG1 ÷ positive messages</p>
      <div style={{ position: "absolute", left: "238px", top: "204px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "204px", width: "1176px", height: "110px" }}>
        <div style={{ position: "absolute", left: "0px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Network efficiency</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>30.58%</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Percentage size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>−2.4 pts</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs prior</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "228px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "240px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "109px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Legs above average</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>5 of 13</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Users size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>−1 leg</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs prior</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "468px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "480px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Spread top – bottom</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "120px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>29.21 pts</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <ChartBar size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>+4.0 pts</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>45.00 vs 15.79</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "708px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "720px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Median momentum</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>−36%</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <TrendingDown size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>12 of 13</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>legs with lower MG1</p>
          </div>
        </div>
        <div style={{ position: "absolute", left: "948px", top: "0px", width: "1px", height: "110px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
        <div style={{ position: "absolute", left: "960px", top: "0px", width: "216px", height: "110px", display: "flex", flexDirection: "column", padding: "11px 0px 11px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0", lineHeight: "1.100000023841858" }}>Reporting rate</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#ededed", lineHeight: "23px", textBox: "trim-both cap alphabetic", height: "23px" }}>78.4%</p>
            </div>
            <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 7px 7px 7px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
              <Checklist size={18} strokeWidth={1.51} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#ededed", display: "block" }} />
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 2px 2px 2px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+3.2 pts</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>189 of 241</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "314px", width: "1202px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "1038px", top: "315px", width: "1px", height: "768px", background: "#000000", boxShadow: "1px 0px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "332px", width: "494px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Efficiency by leg</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Weekly range W28–W31</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #8c70ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Last 4 weeks</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #999999 0%, #8a8a8a 100%)", boxShadow: "inset 0 0 0 1px rgba(108, 108, 108, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Prior 4 weeks</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "9px", height: "9px", flexShrink: 0, borderRadius: "2.5px", background: "linear-gradient(180deg, #6c56a8 0%, #5f4c91 100%)", boxShadow: "inset 0 0 0 1px rgba(150, 117, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a" }}>Network avg 30.58%</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "888px", top: "332px", width: "138px", height: "30px", display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "6px 11px 6px 11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ededed" }}>4W</p>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "22px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>8W</p>
        </div>
        <div data-fu="tab" style={{ flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "5px 10px 5px 10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#dadada" }}>12W</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "250px", top: "386px", width: "776px", height: "252px" }}>
        <svg style={{ position: "absolute", left: "36px", top: "10px", width: "740px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="740" height="1" viewBox="0 0 740 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L740 0" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "2px", top: "2px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>60%</p>
        <svg style={{ position: "absolute", left: "36px", top: "53.2px", width: "740px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="740" height="1" viewBox="0 0 740 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L740 0" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "2px", top: "45.2px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>50%</p>
        <svg style={{ position: "absolute", left: "36px", top: "96.4px", width: "740px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="740" height="1" viewBox="0 0 740 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L740 0" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "3px", top: "88.4px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>40%</p>
        <svg style={{ position: "absolute", left: "36px", top: "139.6px", width: "740px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="740" height="1" viewBox="0 0 740 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L740 0" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "3px", top: "131.6px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>30%</p>
        <svg style={{ position: "absolute", left: "36px", top: "182.8px", width: "740px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="740" height="1" viewBox="0 0 740 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0L740 0" fill="none" stroke="#2c2c2c" strokeWidth="1" strokeDasharray="3 3" strokeLinecap="butt"/></svg>
        <p style={{ position: "absolute", left: "3px", top: "174.8px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>20%</p>
        <div style={{ position: "absolute", left: "36px", top: "225.5px", width: "740px", height: "1px", background: "#333333" }} />
        <p style={{ position: "absolute", left: "5px", top: "218px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>10%</p>
        <div style={{ position: "absolute", left: "736.54px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <div style={{ position: "absolute", left: "679.62px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <div style={{ position: "absolute", left: "622.69px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <div style={{ position: "absolute", left: "565.77px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <div style={{ position: "absolute", left: "508.85px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <div style={{ position: "absolute", left: "451.92px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <div style={{ position: "absolute", left: "395px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <div style={{ position: "absolute", left: "338.08px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <div style={{ position: "absolute", left: "281.15px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <div style={{ position: "absolute", left: "224.23px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <div style={{ position: "absolute", left: "167.31px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <div style={{ position: "absolute", left: "110.38px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <div style={{ position: "absolute", left: "53.46px", top: "10px", width: "22px", height: "216px", borderRadius: "11px", background: "#202020" }} />
        <svg style={{ position: "absolute", left: "36px", top: "137.09px", width: "740px", height: "1px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="740" height="1" viewBox="0 0 740 1" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 -0.5 C-0.276142 -0.5 -0.5 -0.276142 -0.5 0 C-0.5 0.276142 -0.276142 0.5 0 0.5 L0 0 L0 -0.5 Z M740 0.5 C740.276 0.5 740.5 0.276142 740.5 0 C740.5 -0.276142 740.276 -0.5 740 -0.5 L740 0 L740 0.5 Z M1 0.5 C1.27614 0.5 1.5 0.276142 1.5 0 C1.5 -0.276142 1.27614 -0.5 1 -0.5 L1 0 L1 0.5 Z M4 -0.5 C3.72386 -0.5 3.5 -0.276142 3.5 0 C3.5 0.276142 3.72386 0.5 4 0.5 L4 0 L4 -0.5 Z M6 0.5 C6.27614 0.5 6.5 0.276142 6.5 0 C6.5 -0.276142 6.27614 -0.5 6 -0.5 L6 0 L6 0.5 Z M9 -0.5 C8.72386 -0.5 8.5 -0.276142 8.5 0 C8.5 0.276142 8.72386 0.5 9 0.5 L9 0 L9 -0.5 Z M11 0.5 C11.2761 0.5 11.5 0.276142 11.5 0 C11.5 -0.276142 11.2761 -0.5 11 -0.5 L11 0 L11 0.5 Z M14 -0.5 C13.7239 -0.5 13.5 -0.276142 13.5 0 C13.5 0.276142 13.7239 0.5 14 0.5 L14 0 L14 -0.5 Z M16 0.5 C16.2761 0.5 16.5 0.276142 16.5 0 C16.5 -0.276142 16.2761 -0.5 16 -0.5 L16 0 L16 0.5 Z M19 -0.5 C18.7239 -0.5 18.5 -0.276142 18.5 0 C18.5 0.276142 18.7239 0.5 19 0.5 L19 0 L19 -0.5 Z M21 0.5 C21.2761 0.5 21.5 0.276142 21.5 0 C21.5 -0.276142 21.2761 -0.5 21 -0.5 L21 0 L21 0.5 Z M24 -0.5 C23.7239 -0.5 23.5 -0.276142 23.5 0 C23.5 0.276142 23.7239 0.5 24 0.5 L24 0 L24 -0.5 Z M26 0.5 C26.2761 0.5 26.5 0.276142 26.5 0 C26.5 -0.276142 26.2761 -0.5 26 -0.5 L26 0 L26 0.5 Z M29 -0.5 C28.7239 -0.5 28.5 -0.276142 28.5 0 C28.5 0.276142 28.7239 0.5 29 0.5 L29 0 L29 -0.5 Z M31 0.5 C31.2761 0.5 31.5 0.276142 31.5 0 C31.5 -0.276142 31.2761 -0.5 31 -0.5 L31 0 L31 0.5 Z M34 -0.5 C33.7239 -0.5 33.5 -0.276142 33.5 0 C33.5 0.276142 33.7239 0.5 34 0.5 L34 0 L34 -0.5 Z M36 0.5 C36.2761 0.5 36.5 0.276142 36.5 0 C36.5 -0.276142 36.2761 -0.5 36 -0.5 L36 0 L36 0.5 Z M39 -0.5 C38.7239 -0.5 38.5 -0.276142 38.5 0 C38.5 0.276142 38.7239 0.5 39 0.5 L39 0 L39 -0.5 Z M41 0.5 C41.2761 0.5 41.5 0.276142 41.5 0 C41.5 -0.276142 41.2761 -0.5 41 -0.5 L41 0 L41 0.5 Z M44 -0.5 C43.7239 -0.5 43.5 -0.276142 43.5 0 C43.5 0.276142 43.7239 0.5 44 0.5 L44 0 L44 -0.5 Z M46 0.5 C46.2761 0.5 46.5 0.276142 46.5 0 C46.5 -0.276142 46.2761 -0.5 46 -0.5 L46 0 L46 0.5 Z M49 -0.5 C48.7239 -0.5 48.5 -0.276142 48.5 0 C48.5 0.276142 48.7239 0.5 49 0.5 L49 0 L49 -0.5 Z M51 0.5 C51.2761 0.5 51.5 0.276142 51.5 0 C51.5 -0.276142 51.2761 -0.5 51 -0.5 L51 0 L51 0.5 Z M54 -0.5 C53.7239 -0.5 53.5 -0.276142 53.5 0 C53.5 0.276142 53.7239 0.5 54 0.5 L54 0 L54 -0.5 Z M56 0.5 C56.2761 0.5 56.5 0.276142 56.5 0 C56.5 -0.276142 56.2761 -0.5 56 -0.5 L56 0 L56 0.5 Z M59 -0.5 C58.7239 -0.5 58.5 -0.276142 58.5 0 C58.5 0.276142 58.7239 0.5 59 0.5 L59 0 L59 -0.5 Z M61 0.5 C61.2761 0.5 61.5 0.276142 61.5 0 C61.5 -0.276142 61.2761 -0.5 61 -0.5 L61 0 L61 0.5 Z M64 -0.5 C63.7239 -0.5 63.5 -0.276142 63.5 0 C63.5 0.276142 63.7239 0.5 64 0.5 L64 0 L64 -0.5 Z M66 0.5 C66.2761 0.5 66.5 0.276142 66.5 0 C66.5 -0.276142 66.2761 -0.5 66 -0.5 L66 0 L66 0.5 Z M69 -0.5 C68.7239 -0.5 68.5 -0.276142 68.5 0 C68.5 0.276142 68.7239 0.5 69 0.5 L69 0 L69 -0.5 Z M71 0.5 C71.2761 0.5 71.5 0.276142 71.5 0 C71.5 -0.276142 71.2761 -0.5 71 -0.5 L71 0 L71 0.5 Z M74 -0.5 C73.7239 -0.5 73.5 -0.276142 73.5 0 C73.5 0.276142 73.7239 0.5 74 0.5 L74 0 L74 -0.5 Z M76 0.5 C76.2761 0.5 76.5 0.276142 76.5 0 C76.5 -0.276142 76.2761 -0.5 76 -0.5 L76 0 L76 0.5 Z M79 -0.5 C78.7239 -0.5 78.5 -0.276142 78.5 0 C78.5 0.276142 78.7239 0.5 79 0.5 L79 0 L79 -0.5 Z M81 0.5 C81.2761 0.5 81.5 0.276142 81.5 0 C81.5 -0.276142 81.2761 -0.5 81 -0.5 L81 0 L81 0.5 Z M84 -0.5 C83.7239 -0.5 83.5 -0.276142 83.5 0 C83.5 0.276142 83.7239 0.5 84 0.5 L84 0 L84 -0.5 Z M86 0.5 C86.2761 0.5 86.5 0.276142 86.5 0 C86.5 -0.276142 86.2761 -0.5 86 -0.5 L86 0 L86 0.5 Z M89 -0.5 C88.7239 -0.5 88.5 -0.276142 88.5 0 C88.5 0.276142 88.7239 0.5 89 0.5 L89 0 L89 -0.5 Z M91 0.5 C91.2761 0.5 91.5 0.276142 91.5 0 C91.5 -0.276142 91.2761 -0.5 91 -0.5 L91 0 L91 0.5 Z M94 -0.5 C93.7239 -0.5 93.5 -0.276142 93.5 0 C93.5 0.276142 93.7239 0.5 94 0.5 L94 0 L94 -0.5 Z M96 0.5 C96.2761 0.5 96.5 0.276142 96.5 0 C96.5 -0.276142 96.2761 -0.5 96 -0.5 L96 0 L96 0.5 Z M99 -0.5 C98.7239 -0.5 98.5 -0.276142 98.5 0 C98.5 0.276142 98.7239 0.5 99 0.5 L99 0 L99 -0.5 Z M101 0.5 C101.276 0.5 101.5 0.276142 101.5 0 C101.5 -0.276142 101.276 -0.5 101 -0.5 L101 0 L101 0.5 Z M104 -0.5 C103.724 -0.5 103.5 -0.276142 103.5 0 C103.5 0.276142 103.724 0.5 104 0.5 L104 0 L104 -0.5 Z M106 0.5 C106.276 0.5 106.5 0.276142 106.5 0 C106.5 -0.276142 106.276 -0.5 106 -0.5 L106 0 L106 0.5 Z M109 -0.5 C108.724 -0.5 108.5 -0.276142 108.5 0 C108.5 0.276142 108.724 0.5 109 0.5 L109 0 L109 -0.5 Z M111 0.5 C111.276 0.5 111.5 0.276142 111.5 0 C111.5 -0.276142 111.276 -0.5 111 -0.5 L111 0 L111 0.5 Z M114 -0.5 C113.724 -0.5 113.5 -0.276142 113.5 0 C113.5 0.276142 113.724 0.5 114 0.5 L114 0 L114 -0.5 Z M116 0.5 C116.276 0.5 116.5 0.276142 116.5 0 C116.5 -0.276142 116.276 -0.5 116 -0.5 L116 0 L116 0.5 Z M119 -0.5 C118.724 -0.5 118.5 -0.276142 118.5 0 C118.5 0.276142 118.724 0.5 119 0.5 L119 0 L119 -0.5 Z M121 0.5 C121.276 0.5 121.5 0.276142 121.5 0 C121.5 -0.276142 121.276 -0.5 121 -0.5 L121 0 L121 0.5 Z M124 -0.5 C123.724 -0.5 123.5 -0.276142 123.5 0 C123.5 0.276142 123.724 0.5 124 0.5 L124 0 L124 -0.5 Z M126 0.5 C126.276 0.5 126.5 0.276142 126.5 0 C126.5 -0.276142 126.276 -0.5 126 -0.5 L126 0 L126 0.5 Z M129 -0.5 C128.724 -0.5 128.5 -0.276142 128.5 0 C128.5 0.276142 128.724 0.5 129 0.5 L129 0 L129 -0.5 Z M131 0.5 C131.276 0.5 131.5 0.276142 131.5 0 C131.5 -0.276142 131.276 -0.5 131 -0.5 L131 0 L131 0.5 Z M134 -0.5 C133.724 -0.5 133.5 -0.276142 133.5 0 C133.5 0.276142 133.724 0.5 134 0.5 L134 0 L134 -0.5 Z M136 0.5 C136.276 0.5 136.5 0.276142 136.5 0 C136.5 -0.276142 136.276 -0.5 136 -0.5 L136 0 L136 0.5 Z M139 -0.5 C138.724 -0.5 138.5 -0.276142 138.5 0 C138.5 0.276142 138.724 0.5 139 0.5 L139 0 L139 -0.5 Z M141 0.5 C141.276 0.5 141.5 0.276142 141.5 0 C141.5 -0.276142 141.276 -0.5 141 -0.5 L141 0 L141 0.5 Z M144 -0.5 C143.724 -0.5 143.5 -0.276142 143.5 0 C143.5 0.276142 143.724 0.5 144 0.5 L144 0 L144 -0.5 Z M146 0.5 C146.276 0.5 146.5 0.276142 146.5 0 C146.5 -0.276142 146.276 -0.5 146 -0.5 L146 0 L146 0.5 Z M149 -0.5 C148.724 -0.5 148.5 -0.276142 148.5 0 C148.5 0.276142 148.724 0.5 149 0.5 L149 0 L149 -0.5 Z M151 0.5 C151.276 0.5 151.5 0.276142 151.5 0 C151.5 -0.276142 151.276 -0.5 151 -0.5 L151 0 L151 0.5 Z M154 -0.5 C153.724 -0.5 153.5 -0.276142 153.5 0 C153.5 0.276142 153.724 0.5 154 0.5 L154 0 L154 -0.5 Z M156 0.5 C156.276 0.5 156.5 0.276142 156.5 0 C156.5 -0.276142 156.276 -0.5 156 -0.5 L156 0 L156 0.5 Z M159 -0.5 C158.724 -0.5 158.5 -0.276142 158.5 0 C158.5 0.276142 158.724 0.5 159 0.5 L159 0 L159 -0.5 Z M161 0.5 C161.276 0.5 161.5 0.276142 161.5 0 C161.5 -0.276142 161.276 -0.5 161 -0.5 L161 0 L161 0.5 Z M164 -0.5 C163.724 -0.5 163.5 -0.276142 163.5 0 C163.5 0.276142 163.724 0.5 164 0.5 L164 0 L164 -0.5 Z M166 0.5 C166.276 0.5 166.5 0.276142 166.5 0 C166.5 -0.276142 166.276 -0.5 166 -0.5 L166 0 L166 0.5 Z M169 -0.5 C168.724 -0.5 168.5 -0.276142 168.5 0 C168.5 0.276142 168.724 0.5 169 0.5 L169 0 L169 -0.5 Z M171 0.5 C171.276 0.5 171.5 0.276142 171.5 0 C171.5 -0.276142 171.276 -0.5 171 -0.5 L171 0 L171 0.5 Z M174 -0.5 C173.724 -0.5 173.5 -0.276142 173.5 0 C173.5 0.276142 173.724 0.5 174 0.5 L174 0 L174 -0.5 Z M176 0.5 C176.276 0.5 176.5 0.276142 176.5 0 C176.5 -0.276142 176.276 -0.5 176 -0.5 L176 0 L176 0.5 Z M179 -0.5 C178.724 -0.5 178.5 -0.276142 178.5 0 C178.5 0.276142 178.724 0.5 179 0.5 L179 0 L179 -0.5 Z M181 0.5 C181.276 0.5 181.5 0.276142 181.5 0 C181.5 -0.276142 181.276 -0.5 181 -0.5 L181 0 L181 0.5 Z M184 -0.5 C183.724 -0.5 183.5 -0.276142 183.5 0 C183.5 0.276142 183.724 0.5 184 0.5 L184 0 L184 -0.5 Z M186 0.5 C186.276 0.5 186.5 0.276142 186.5 0 C186.5 -0.276142 186.276 -0.5 186 -0.5 L186 0 L186 0.5 Z M189 -0.5 C188.724 -0.5 188.5 -0.276142 188.5 0 C188.5 0.276142 188.724 0.5 189 0.5 L189 0 L189 -0.5 Z M191 0.5 C191.276 0.5 191.5 0.276142 191.5 0 C191.5 -0.276142 191.276 -0.5 191 -0.5 L191 0 L191 0.5 Z M194 -0.5 C193.724 -0.5 193.5 -0.276142 193.5 0 C193.5 0.276142 193.724 0.5 194 0.5 L194 0 L194 -0.5 Z M196 0.5 C196.276 0.5 196.5 0.276142 196.5 0 C196.5 -0.276142 196.276 -0.5 196 -0.5 L196 0 L196 0.5 Z M199 -0.5 C198.724 -0.5 198.5 -0.276142 198.5 0 C198.5 0.276142 198.724 0.5 199 0.5 L199 0 L199 -0.5 Z M201 0.5 C201.276 0.5 201.5 0.276142 201.5 0 C201.5 -0.276142 201.276 -0.5 201 -0.5 L201 0 L201 0.5 Z M204 -0.5 C203.724 -0.5 203.5 -0.276142 203.5 0 C203.5 0.276142 203.724 0.5 204 0.5 L204 0 L204 -0.5 Z M206 0.5 C206.276 0.5 206.5 0.276142 206.5 0 C206.5 -0.276142 206.276 -0.5 206 -0.5 L206 0 L206 0.5 Z M209 -0.5 C208.724 -0.5 208.5 -0.276142 208.5 0 C208.5 0.276142 208.724 0.5 209 0.5 L209 0 L209 -0.5 Z M211 0.5 C211.276 0.5 211.5 0.276142 211.5 0 C211.5 -0.276142 211.276 -0.5 211 -0.5 L211 0 L211 0.5 Z M214 -0.5 C213.724 -0.5 213.5 -0.276142 213.5 0 C213.5 0.276142 213.724 0.5 214 0.5 L214 0 L214 -0.5 Z M216 0.5 C216.276 0.5 216.5 0.276142 216.5 0 C216.5 -0.276142 216.276 -0.5 216 -0.5 L216 0 L216 0.5 Z M219 -0.5 C218.724 -0.5 218.5 -0.276142 218.5 0 C218.5 0.276142 218.724 0.5 219 0.5 L219 0 L219 -0.5 Z M221 0.5 C221.276 0.5 221.5 0.276142 221.5 0 C221.5 -0.276142 221.276 -0.5 221 -0.5 L221 0 L221 0.5 Z M224 -0.5 C223.724 -0.5 223.5 -0.276142 223.5 0 C223.5 0.276142 223.724 0.5 224 0.5 L224 0 L224 -0.5 Z M226 0.5 C226.276 0.5 226.5 0.276142 226.5 0 C226.5 -0.276142 226.276 -0.5 226 -0.5 L226 0 L226 0.5 Z M229 -0.5 C228.724 -0.5 228.5 -0.276142 228.5 0 C228.5 0.276142 228.724 0.5 229 0.5 L229 0 L229 -0.5 Z M231 0.5 C231.276 0.5 231.5 0.276142 231.5 0 C231.5 -0.276142 231.276 -0.5 231 -0.5 L231 0 L231 0.5 Z M234 -0.5 C233.724 -0.5 233.5 -0.276142 233.5 0 C233.5 0.276142 233.724 0.5 234 0.5 L234 0 L234 -0.5 Z M236 0.5 C236.276 0.5 236.5 0.276142 236.5 0 C236.5 -0.276142 236.276 -0.5 236 -0.5 L236 0 L236 0.5 Z M239 -0.5 C238.724 -0.5 238.5 -0.276142 238.5 0 C238.5 0.276142 238.724 0.5 239 0.5 L239 0 L239 -0.5 Z M241 0.5 C241.276 0.5 241.5 0.276142 241.5 0 C241.5 -0.276142 241.276 -0.5 241 -0.5 L241 0 L241 0.5 Z M244 -0.5 C243.724 -0.5 243.5 -0.276142 243.5 0 C243.5 0.276142 243.724 0.5 244 0.5 L244 0 L244 -0.5 Z M246 0.5 C246.276 0.5 246.5 0.276142 246.5 0 C246.5 -0.276142 246.276 -0.5 246 -0.5 L246 0 L246 0.5 Z M249 -0.5 C248.724 -0.5 248.5 -0.276142 248.5 0 C248.5 0.276142 248.724 0.5 249 0.5 L249 0 L249 -0.5 Z M251 0.5 C251.276 0.5 251.5 0.276142 251.5 0 C251.5 -0.276142 251.276 -0.5 251 -0.5 L251 0 L251 0.5 Z M254 -0.5 C253.724 -0.5 253.5 -0.276142 253.5 0 C253.5 0.276142 253.724 0.5 254 0.5 L254 0 L254 -0.5 Z M256 0.5 C256.276 0.5 256.5 0.276142 256.5 0 C256.5 -0.276142 256.276 -0.5 256 -0.5 L256 0 L256 0.5 Z M259 -0.5 C258.724 -0.5 258.5 -0.276142 258.5 0 C258.5 0.276142 258.724 0.5 259 0.5 L259 0 L259 -0.5 Z M261 0.5 C261.276 0.5 261.5 0.276142 261.5 0 C261.5 -0.276142 261.276 -0.5 261 -0.5 L261 0 L261 0.5 Z M264 -0.5 C263.724 -0.5 263.5 -0.276142 263.5 0 C263.5 0.276142 263.724 0.5 264 0.5 L264 0 L264 -0.5 Z M266 0.5 C266.276 0.5 266.5 0.276142 266.5 0 C266.5 -0.276142 266.276 -0.5 266 -0.5 L266 0 L266 0.5 Z M269 -0.5 C268.724 -0.5 268.5 -0.276142 268.5 0 C268.5 0.276142 268.724 0.5 269 0.5 L269 0 L269 -0.5 Z M271 0.5 C271.276 0.5 271.5 0.276142 271.5 0 C271.5 -0.276142 271.276 -0.5 271 -0.5 L271 0 L271 0.5 Z M274 -0.5 C273.724 -0.5 273.5 -0.276142 273.5 0 C273.5 0.276142 273.724 0.5 274 0.5 L274 0 L274 -0.5 Z M276 0.5 C276.276 0.5 276.5 0.276142 276.5 0 C276.5 -0.276142 276.276 -0.5 276 -0.5 L276 0 L276 0.5 Z M279 -0.5 C278.724 -0.5 278.5 -0.276142 278.5 0 C278.5 0.276142 278.724 0.5 279 0.5 L279 0 L279 -0.5 Z M281 0.5 C281.276 0.5 281.5 0.276142 281.5 0 C281.5 -0.276142 281.276 -0.5 281 -0.5 L281 0 L281 0.5 Z M284 -0.5 C283.724 -0.5 283.5 -0.276142 283.5 0 C283.5 0.276142 283.724 0.5 284 0.5 L284 0 L284 -0.5 Z M286 0.5 C286.276 0.5 286.5 0.276142 286.5 0 C286.5 -0.276142 286.276 -0.5 286 -0.5 L286 0 L286 0.5 Z M289 -0.5 C288.724 -0.5 288.5 -0.276142 288.5 0 C288.5 0.276142 288.724 0.5 289 0.5 L289 0 L289 -0.5 Z M291 0.5 C291.276 0.5 291.5 0.276142 291.5 0 C291.5 -0.276142 291.276 -0.5 291 -0.5 L291 0 L291 0.5 Z M294 -0.5 C293.724 -0.5 293.5 -0.276142 293.5 0 C293.5 0.276142 293.724 0.5 294 0.5 L294 0 L294 -0.5 Z M296 0.5 C296.276 0.5 296.5 0.276142 296.5 0 C296.5 -0.276142 296.276 -0.5 296 -0.5 L296 0 L296 0.5 Z M299 -0.5 C298.724 -0.5 298.5 -0.276142 298.5 0 C298.5 0.276142 298.724 0.5 299 0.5 L299 0 L299 -0.5 Z M301 0.5 C301.276 0.5 301.5 0.276142 301.5 0 C301.5 -0.276142 301.276 -0.5 301 -0.5 L301 0 L301 0.5 Z M304 -0.5 C303.724 -0.5 303.5 -0.276142 303.5 0 C303.5 0.276142 303.724 0.5 304 0.5 L304 0 L304 -0.5 Z M306 0.5 C306.276 0.5 306.5 0.276142 306.5 0 C306.5 -0.276142 306.276 -0.5 306 -0.5 L306 0 L306 0.5 Z M309 -0.5 C308.724 -0.5 308.5 -0.276142 308.5 0 C308.5 0.276142 308.724 0.5 309 0.5 L309 0 L309 -0.5 Z M311 0.5 C311.276 0.5 311.5 0.276142 311.5 0 C311.5 -0.276142 311.276 -0.5 311 -0.5 L311 0 L311 0.5 Z M314 -0.5 C313.724 -0.5 313.5 -0.276142 313.5 0 C313.5 0.276142 313.724 0.5 314 0.5 L314 0 L314 -0.5 Z M316 0.5 C316.276 0.5 316.5 0.276142 316.5 0 C316.5 -0.276142 316.276 -0.5 316 -0.5 L316 0 L316 0.5 Z M319 -0.5 C318.724 -0.5 318.5 -0.276142 318.5 0 C318.5 0.276142 318.724 0.5 319 0.5 L319 0 L319 -0.5 Z M321 0.5 C321.276 0.5 321.5 0.276142 321.5 0 C321.5 -0.276142 321.276 -0.5 321 -0.5 L321 0 L321 0.5 Z M324 -0.5 C323.724 -0.5 323.5 -0.276142 323.5 0 C323.5 0.276142 323.724 0.5 324 0.5 L324 0 L324 -0.5 Z M326 0.5 C326.276 0.5 326.5 0.276142 326.5 0 C326.5 -0.276142 326.276 -0.5 326 -0.5 L326 0 L326 0.5 Z M329 -0.5 C328.724 -0.5 328.5 -0.276142 328.5 0 C328.5 0.276142 328.724 0.5 329 0.5 L329 0 L329 -0.5 Z M331 0.5 C331.276 0.5 331.5 0.276142 331.5 0 C331.5 -0.276142 331.276 -0.5 331 -0.5 L331 0 L331 0.5 Z M334 -0.5 C333.724 -0.5 333.5 -0.276142 333.5 0 C333.5 0.276142 333.724 0.5 334 0.5 L334 0 L334 -0.5 Z M336 0.5 C336.276 0.5 336.5 0.276142 336.5 0 C336.5 -0.276142 336.276 -0.5 336 -0.5 L336 0 L336 0.5 Z M339 -0.5 C338.724 -0.5 338.5 -0.276142 338.5 0 C338.5 0.276142 338.724 0.5 339 0.5 L339 0 L339 -0.5 Z M341 0.5 C341.276 0.5 341.5 0.276142 341.5 0 C341.5 -0.276142 341.276 -0.5 341 -0.5 L341 0 L341 0.5 Z M344 -0.5 C343.724 -0.5 343.5 -0.276142 343.5 0 C343.5 0.276142 343.724 0.5 344 0.5 L344 0 L344 -0.5 Z M346 0.5 C346.276 0.5 346.5 0.276142 346.5 0 C346.5 -0.276142 346.276 -0.5 346 -0.5 L346 0 L346 0.5 Z M349 -0.5 C348.724 -0.5 348.5 -0.276142 348.5 0 C348.5 0.276142 348.724 0.5 349 0.5 L349 0 L349 -0.5 Z M351 0.5 C351.276 0.5 351.5 0.276142 351.5 0 C351.5 -0.276142 351.276 -0.5 351 -0.5 L351 0 L351 0.5 Z M354 -0.5 C353.724 -0.5 353.5 -0.276142 353.5 0 C353.5 0.276142 353.724 0.5 354 0.5 L354 0 L354 -0.5 Z M356 0.5 C356.276 0.5 356.5 0.276142 356.5 0 C356.5 -0.276142 356.276 -0.5 356 -0.5 L356 0 L356 0.5 Z M359 -0.5 C358.724 -0.5 358.5 -0.276142 358.5 0 C358.5 0.276142 358.724 0.5 359 0.5 L359 0 L359 -0.5 Z M361 0.5 C361.276 0.5 361.5 0.276142 361.5 0 C361.5 -0.276142 361.276 -0.5 361 -0.5 L361 0 L361 0.5 Z M364 -0.5 C363.724 -0.5 363.5 -0.276142 363.5 0 C363.5 0.276142 363.724 0.5 364 0.5 L364 0 L364 -0.5 Z M366 0.5 C366.276 0.5 366.5 0.276142 366.5 0 C366.5 -0.276142 366.276 -0.5 366 -0.5 L366 0 L366 0.5 Z M369 -0.5 C368.724 -0.5 368.5 -0.276142 368.5 0 C368.5 0.276142 368.724 0.5 369 0.5 L369 0 L369 -0.5 Z M371 0.5 C371.276 0.5 371.5 0.276142 371.5 0 C371.5 -0.276142 371.276 -0.5 371 -0.5 L371 0 L371 0.5 Z M374 -0.5 C373.724 -0.5 373.5 -0.276142 373.5 0 C373.5 0.276142 373.724 0.5 374 0.5 L374 0 L374 -0.5 Z M376 0.5 C376.276 0.5 376.5 0.276142 376.5 0 C376.5 -0.276142 376.276 -0.5 376 -0.5 L376 0 L376 0.5 Z M379 -0.5 C378.724 -0.5 378.5 -0.276142 378.5 0 C378.5 0.276142 378.724 0.5 379 0.5 L379 0 L379 -0.5 Z M381 0.5 C381.276 0.5 381.5 0.276142 381.5 0 C381.5 -0.276142 381.276 -0.5 381 -0.5 L381 0 L381 0.5 Z M384 -0.5 C383.724 -0.5 383.5 -0.276142 383.5 0 C383.5 0.276142 383.724 0.5 384 0.5 L384 0 L384 -0.5 Z M386 0.5 C386.276 0.5 386.5 0.276142 386.5 0 C386.5 -0.276142 386.276 -0.5 386 -0.5 L386 0 L386 0.5 Z M389 -0.5 C388.724 -0.5 388.5 -0.276142 388.5 0 C388.5 0.276142 388.724 0.5 389 0.5 L389 0 L389 -0.5 Z M391 0.5 C391.276 0.5 391.5 0.276142 391.5 0 C391.5 -0.276142 391.276 -0.5 391 -0.5 L391 0 L391 0.5 Z M394 -0.5 C393.724 -0.5 393.5 -0.276142 393.5 0 C393.5 0.276142 393.724 0.5 394 0.5 L394 0 L394 -0.5 Z M396 0.5 C396.276 0.5 396.5 0.276142 396.5 0 C396.5 -0.276142 396.276 -0.5 396 -0.5 L396 0 L396 0.5 Z M399 -0.5 C398.724 -0.5 398.5 -0.276142 398.5 0 C398.5 0.276142 398.724 0.5 399 0.5 L399 0 L399 -0.5 Z M401 0.5 C401.276 0.5 401.5 0.276142 401.5 0 C401.5 -0.276142 401.276 -0.5 401 -0.5 L401 0 L401 0.5 Z M404 -0.5 C403.724 -0.5 403.5 -0.276142 403.5 0 C403.5 0.276142 403.724 0.5 404 0.5 L404 0 L404 -0.5 Z M406 0.5 C406.276 0.5 406.5 0.276142 406.5 0 C406.5 -0.276142 406.276 -0.5 406 -0.5 L406 0 L406 0.5 Z M409 -0.5 C408.724 -0.5 408.5 -0.276142 408.5 0 C408.5 0.276142 408.724 0.5 409 0.5 L409 0 L409 -0.5 Z M411 0.5 C411.276 0.5 411.5 0.276142 411.5 0 C411.5 -0.276142 411.276 -0.5 411 -0.5 L411 0 L411 0.5 Z M414 -0.5 C413.724 -0.5 413.5 -0.276142 413.5 0 C413.5 0.276142 413.724 0.5 414 0.5 L414 0 L414 -0.5 Z M416 0.5 C416.276 0.5 416.5 0.276142 416.5 0 C416.5 -0.276142 416.276 -0.5 416 -0.5 L416 0 L416 0.5 Z M419 -0.5 C418.724 -0.5 418.5 -0.276142 418.5 0 C418.5 0.276142 418.724 0.5 419 0.5 L419 0 L419 -0.5 Z M421 0.5 C421.276 0.5 421.5 0.276142 421.5 0 C421.5 -0.276142 421.276 -0.5 421 -0.5 L421 0 L421 0.5 Z M424 -0.5 C423.724 -0.5 423.5 -0.276142 423.5 0 C423.5 0.276142 423.724 0.5 424 0.5 L424 0 L424 -0.5 Z M426 0.5 C426.276 0.5 426.5 0.276142 426.5 0 C426.5 -0.276142 426.276 -0.5 426 -0.5 L426 0 L426 0.5 Z M429 -0.5 C428.724 -0.5 428.5 -0.276142 428.5 0 C428.5 0.276142 428.724 0.5 429 0.5 L429 0 L429 -0.5 Z M431 0.5 C431.276 0.5 431.5 0.276142 431.5 0 C431.5 -0.276142 431.276 -0.5 431 -0.5 L431 0 L431 0.5 Z M434 -0.5 C433.724 -0.5 433.5 -0.276142 433.5 0 C433.5 0.276142 433.724 0.5 434 0.5 L434 0 L434 -0.5 Z M436 0.5 C436.276 0.5 436.5 0.276142 436.5 0 C436.5 -0.276142 436.276 -0.5 436 -0.5 L436 0 L436 0.5 Z M439 -0.5 C438.724 -0.5 438.5 -0.276142 438.5 0 C438.5 0.276142 438.724 0.5 439 0.5 L439 0 L439 -0.5 Z M441 0.5 C441.276 0.5 441.5 0.276142 441.5 0 C441.5 -0.276142 441.276 -0.5 441 -0.5 L441 0 L441 0.5 Z M444 -0.5 C443.724 -0.5 443.5 -0.276142 443.5 0 C443.5 0.276142 443.724 0.5 444 0.5 L444 0 L444 -0.5 Z M446 0.5 C446.276 0.5 446.5 0.276142 446.5 0 C446.5 -0.276142 446.276 -0.5 446 -0.5 L446 0 L446 0.5 Z M449 -0.5 C448.724 -0.5 448.5 -0.276142 448.5 0 C448.5 0.276142 448.724 0.5 449 0.5 L449 0 L449 -0.5 Z M451 0.5 C451.276 0.5 451.5 0.276142 451.5 0 C451.5 -0.276142 451.276 -0.5 451 -0.5 L451 0 L451 0.5 Z M454 -0.5 C453.724 -0.5 453.5 -0.276142 453.5 0 C453.5 0.276142 453.724 0.5 454 0.5 L454 0 L454 -0.5 Z M456 0.5 C456.276 0.5 456.5 0.276142 456.5 0 C456.5 -0.276142 456.276 -0.5 456 -0.5 L456 0 L456 0.5 Z M459 -0.5 C458.724 -0.5 458.5 -0.276142 458.5 0 C458.5 0.276142 458.724 0.5 459 0.5 L459 0 L459 -0.5 Z M461 0.5 C461.276 0.5 461.5 0.276142 461.5 0 C461.5 -0.276142 461.276 -0.5 461 -0.5 L461 0 L461 0.5 Z M464 -0.5 C463.724 -0.5 463.5 -0.276142 463.5 0 C463.5 0.276142 463.724 0.5 464 0.5 L464 0 L464 -0.5 Z M466 0.5 C466.276 0.5 466.5 0.276142 466.5 0 C466.5 -0.276142 466.276 -0.5 466 -0.5 L466 0 L466 0.5 Z M469 -0.5 C468.724 -0.5 468.5 -0.276142 468.5 0 C468.5 0.276142 468.724 0.5 469 0.5 L469 0 L469 -0.5 Z M471 0.5 C471.276 0.5 471.5 0.276142 471.5 0 C471.5 -0.276142 471.276 -0.5 471 -0.5 L471 0 L471 0.5 Z M474 -0.5 C473.724 -0.5 473.5 -0.276142 473.5 0 C473.5 0.276142 473.724 0.5 474 0.5 L474 0 L474 -0.5 Z M476 0.5 C476.276 0.5 476.5 0.276142 476.5 0 C476.5 -0.276142 476.276 -0.5 476 -0.5 L476 0 L476 0.5 Z M479 -0.5 C478.724 -0.5 478.5 -0.276142 478.5 0 C478.5 0.276142 478.724 0.5 479 0.5 L479 0 L479 -0.5 Z M481 0.5 C481.276 0.5 481.5 0.276142 481.5 0 C481.5 -0.276142 481.276 -0.5 481 -0.5 L481 0 L481 0.5 Z M484 -0.5 C483.724 -0.5 483.5 -0.276142 483.5 0 C483.5 0.276142 483.724 0.5 484 0.5 L484 0 L484 -0.5 Z M486 0.5 C486.276 0.5 486.5 0.276142 486.5 0 C486.5 -0.276142 486.276 -0.5 486 -0.5 L486 0 L486 0.5 Z M489 -0.5 C488.724 -0.5 488.5 -0.276142 488.5 0 C488.5 0.276142 488.724 0.5 489 0.5 L489 0 L489 -0.5 Z M491 0.5 C491.276 0.5 491.5 0.276142 491.5 0 C491.5 -0.276142 491.276 -0.5 491 -0.5 L491 0 L491 0.5 Z M494 -0.5 C493.724 -0.5 493.5 -0.276142 493.5 0 C493.5 0.276142 493.724 0.5 494 0.5 L494 0 L494 -0.5 Z M496 0.5 C496.276 0.5 496.5 0.276142 496.5 0 C496.5 -0.276142 496.276 -0.5 496 -0.5 L496 0 L496 0.5 Z M499 -0.5 C498.724 -0.5 498.5 -0.276142 498.5 0 C498.5 0.276142 498.724 0.5 499 0.5 L499 0 L499 -0.5 Z M501 0.5 C501.276 0.5 501.5 0.276142 501.5 0 C501.5 -0.276142 501.276 -0.5 501 -0.5 L501 0 L501 0.5 Z M504 -0.5 C503.724 -0.5 503.5 -0.276142 503.5 0 C503.5 0.276142 503.724 0.5 504 0.5 L504 0 L504 -0.5 Z M506 0.5 C506.276 0.5 506.5 0.276142 506.5 0 C506.5 -0.276142 506.276 -0.5 506 -0.5 L506 0 L506 0.5 Z M509 -0.5 C508.724 -0.5 508.5 -0.276142 508.5 0 C508.5 0.276142 508.724 0.5 509 0.5 L509 0 L509 -0.5 Z M511 0.5 C511.276 0.5 511.5 0.276142 511.5 0 C511.5 -0.276142 511.276 -0.5 511 -0.5 L511 0 L511 0.5 Z M514 -0.5 C513.724 -0.5 513.5 -0.276142 513.5 0 C513.5 0.276142 513.724 0.5 514 0.5 L514 0 L514 -0.5 Z M516 0.5 C516.276 0.5 516.5 0.276142 516.5 0 C516.5 -0.276142 516.276 -0.5 516 -0.5 L516 0 L516 0.5 Z M519 -0.5 C518.724 -0.5 518.5 -0.276142 518.5 0 C518.5 0.276142 518.724 0.5 519 0.5 L519 0 L519 -0.5 Z M521 0.5 C521.276 0.5 521.5 0.276142 521.5 0 C521.5 -0.276142 521.276 -0.5 521 -0.5 L521 0 L521 0.5 Z M524 -0.5 C523.724 -0.5 523.5 -0.276142 523.5 0 C523.5 0.276142 523.724 0.5 524 0.5 L524 0 L524 -0.5 Z M526 0.5 C526.276 0.5 526.5 0.276142 526.5 0 C526.5 -0.276142 526.276 -0.5 526 -0.5 L526 0 L526 0.5 Z M529 -0.5 C528.724 -0.5 528.5 -0.276142 528.5 0 C528.5 0.276142 528.724 0.5 529 0.5 L529 0 L529 -0.5 Z M531 0.5 C531.276 0.5 531.5 0.276142 531.5 0 C531.5 -0.276142 531.276 -0.5 531 -0.5 L531 0 L531 0.5 Z M534 -0.5 C533.724 -0.5 533.5 -0.276142 533.5 0 C533.5 0.276142 533.724 0.5 534 0.5 L534 0 L534 -0.5 Z M536 0.5 C536.276 0.5 536.5 0.276142 536.5 0 C536.5 -0.276142 536.276 -0.5 536 -0.5 L536 0 L536 0.5 Z M539 -0.5 C538.724 -0.5 538.5 -0.276142 538.5 0 C538.5 0.276142 538.724 0.5 539 0.5 L539 0 L539 -0.5 Z M541 0.5 C541.276 0.5 541.5 0.276142 541.5 0 C541.5 -0.276142 541.276 -0.5 541 -0.5 L541 0 L541 0.5 Z M544 -0.5 C543.724 -0.5 543.5 -0.276142 543.5 0 C543.5 0.276142 543.724 0.5 544 0.5 L544 0 L544 -0.5 Z M546 0.5 C546.276 0.5 546.5 0.276142 546.5 0 C546.5 -0.276142 546.276 -0.5 546 -0.5 L546 0 L546 0.5 Z M549 -0.5 C548.724 -0.5 548.5 -0.276142 548.5 0 C548.5 0.276142 548.724 0.5 549 0.5 L549 0 L549 -0.5 Z M551 0.5 C551.276 0.5 551.5 0.276142 551.5 0 C551.5 -0.276142 551.276 -0.5 551 -0.5 L551 0 L551 0.5 Z M554 -0.5 C553.724 -0.5 553.5 -0.276142 553.5 0 C553.5 0.276142 553.724 0.5 554 0.5 L554 0 L554 -0.5 Z M556 0.5 C556.276 0.5 556.5 0.276142 556.5 0 C556.5 -0.276142 556.276 -0.5 556 -0.5 L556 0 L556 0.5 Z M559 -0.5 C558.724 -0.5 558.5 -0.276142 558.5 0 C558.5 0.276142 558.724 0.5 559 0.5 L559 0 L559 -0.5 Z M561 0.5 C561.276 0.5 561.5 0.276142 561.5 0 C561.5 -0.276142 561.276 -0.5 561 -0.5 L561 0 L561 0.5 Z M564 -0.5 C563.724 -0.5 563.5 -0.276142 563.5 0 C563.5 0.276142 563.724 0.5 564 0.5 L564 0 L564 -0.5 Z M566 0.5 C566.276 0.5 566.5 0.276142 566.5 0 C566.5 -0.276142 566.276 -0.5 566 -0.5 L566 0 L566 0.5 Z M569 -0.5 C568.724 -0.5 568.5 -0.276142 568.5 0 C568.5 0.276142 568.724 0.5 569 0.5 L569 0 L569 -0.5 Z M571 0.5 C571.276 0.5 571.5 0.276142 571.5 0 C571.5 -0.276142 571.276 -0.5 571 -0.5 L571 0 L571 0.5 Z M574 -0.5 C573.724 -0.5 573.5 -0.276142 573.5 0 C573.5 0.276142 573.724 0.5 574 0.5 L574 0 L574 -0.5 Z M576 0.5 C576.276 0.5 576.5 0.276142 576.5 0 C576.5 -0.276142 576.276 -0.5 576 -0.5 L576 0 L576 0.5 Z M579 -0.5 C578.724 -0.5 578.5 -0.276142 578.5 0 C578.5 0.276142 578.724 0.5 579 0.5 L579 0 L579 -0.5 Z M581 0.5 C581.276 0.5 581.5 0.276142 581.5 0 C581.5 -0.276142 581.276 -0.5 581 -0.5 L581 0 L581 0.5 Z M584 -0.5 C583.724 -0.5 583.5 -0.276142 583.5 0 C583.5 0.276142 583.724 0.5 584 0.5 L584 0 L584 -0.5 Z M586 0.5 C586.276 0.5 586.5 0.276142 586.5 0 C586.5 -0.276142 586.276 -0.5 586 -0.5 L586 0 L586 0.5 Z M589 -0.5 C588.724 -0.5 588.5 -0.276142 588.5 0 C588.5 0.276142 588.724 0.5 589 0.5 L589 0 L589 -0.5 Z M591 0.5 C591.276 0.5 591.5 0.276142 591.5 0 C591.5 -0.276142 591.276 -0.5 591 -0.5 L591 0 L591 0.5 Z M594 -0.5 C593.724 -0.5 593.5 -0.276142 593.5 0 C593.5 0.276142 593.724 0.5 594 0.5 L594 0 L594 -0.5 Z M596 0.5 C596.276 0.5 596.5 0.276142 596.5 0 C596.5 -0.276142 596.276 -0.5 596 -0.5 L596 0 L596 0.5 Z M599 -0.5 C598.724 -0.5 598.5 -0.276142 598.5 0 C598.5 0.276142 598.724 0.5 599 0.5 L599 0 L599 -0.5 Z M601 0.5 C601.276 0.5 601.5 0.276142 601.5 0 C601.5 -0.276142 601.276 -0.5 601 -0.5 L601 0 L601 0.5 Z M604 -0.5 C603.724 -0.5 603.5 -0.276142 603.5 0 C603.5 0.276142 603.724 0.5 604 0.5 L604 0 L604 -0.5 Z M606 0.5 C606.276 0.5 606.5 0.276142 606.5 0 C606.5 -0.276142 606.276 -0.5 606 -0.5 L606 0 L606 0.5 Z M609 -0.5 C608.724 -0.5 608.5 -0.276142 608.5 0 C608.5 0.276142 608.724 0.5 609 0.5 L609 0 L609 -0.5 Z M611 0.5 C611.276 0.5 611.5 0.276142 611.5 0 C611.5 -0.276142 611.276 -0.5 611 -0.5 L611 0 L611 0.5 Z M614 -0.5 C613.724 -0.5 613.5 -0.276142 613.5 0 C613.5 0.276142 613.724 0.5 614 0.5 L614 0 L614 -0.5 Z M616 0.5 C616.276 0.5 616.5 0.276142 616.5 0 C616.5 -0.276142 616.276 -0.5 616 -0.5 L616 0 L616 0.5 Z M619 -0.5 C618.724 -0.5 618.5 -0.276142 618.5 0 C618.5 0.276142 618.724 0.5 619 0.5 L619 0 L619 -0.5 Z M621 0.5 C621.276 0.5 621.5 0.276142 621.5 0 C621.5 -0.276142 621.276 -0.5 621 -0.5 L621 0 L621 0.5 Z M624 -0.5 C623.724 -0.5 623.5 -0.276142 623.5 0 C623.5 0.276142 623.724 0.5 624 0.5 L624 0 L624 -0.5 Z M626 0.5 C626.276 0.5 626.5 0.276142 626.5 0 C626.5 -0.276142 626.276 -0.5 626 -0.5 L626 0 L626 0.5 Z M629 -0.5 C628.724 -0.5 628.5 -0.276142 628.5 0 C628.5 0.276142 628.724 0.5 629 0.5 L629 0 L629 -0.5 Z M631 0.5 C631.276 0.5 631.5 0.276142 631.5 0 C631.5 -0.276142 631.276 -0.5 631 -0.5 L631 0 L631 0.5 Z M634 -0.5 C633.724 -0.5 633.5 -0.276142 633.5 0 C633.5 0.276142 633.724 0.5 634 0.5 L634 0 L634 -0.5 Z M636 0.5 C636.276 0.5 636.5 0.276142 636.5 0 C636.5 -0.276142 636.276 -0.5 636 -0.5 L636 0 L636 0.5 Z M639 -0.5 C638.724 -0.5 638.5 -0.276142 638.5 0 C638.5 0.276142 638.724 0.5 639 0.5 L639 0 L639 -0.5 Z M641 0.5 C641.276 0.5 641.5 0.276142 641.5 0 C641.5 -0.276142 641.276 -0.5 641 -0.5 L641 0 L641 0.5 Z M644 -0.5 C643.724 -0.5 643.5 -0.276142 643.5 0 C643.5 0.276142 643.724 0.5 644 0.5 L644 0 L644 -0.5 Z M646 0.5 C646.276 0.5 646.5 0.276142 646.5 0 C646.5 -0.276142 646.276 -0.5 646 -0.5 L646 0 L646 0.5 Z M649 -0.5 C648.724 -0.5 648.5 -0.276142 648.5 0 C648.5 0.276142 648.724 0.5 649 0.5 L649 0 L649 -0.5 Z M651 0.5 C651.276 0.5 651.5 0.276142 651.5 0 C651.5 -0.276142 651.276 -0.5 651 -0.5 L651 0 L651 0.5 Z M654 -0.5 C653.724 -0.5 653.5 -0.276142 653.5 0 C653.5 0.276142 653.724 0.5 654 0.5 L654 0 L654 -0.5 Z M656 0.5 C656.276 0.5 656.5 0.276142 656.5 0 C656.5 -0.276142 656.276 -0.5 656 -0.5 L656 0 L656 0.5 Z M659 -0.5 C658.724 -0.5 658.5 -0.276142 658.5 0 C658.5 0.276142 658.724 0.5 659 0.5 L659 0 L659 -0.5 Z M661 0.5 C661.276 0.5 661.5 0.276142 661.5 0 C661.5 -0.276142 661.276 -0.5 661 -0.5 L661 0 L661 0.5 Z M664 -0.5 C663.724 -0.5 663.5 -0.276142 663.5 0 C663.5 0.276142 663.724 0.5 664 0.5 L664 0 L664 -0.5 Z M666 0.5 C666.276 0.5 666.5 0.276142 666.5 0 C666.5 -0.276142 666.276 -0.5 666 -0.5 L666 0 L666 0.5 Z M669 -0.5 C668.724 -0.5 668.5 -0.276142 668.5 0 C668.5 0.276142 668.724 0.5 669 0.5 L669 0 L669 -0.5 Z M671 0.5 C671.276 0.5 671.5 0.276142 671.5 0 C671.5 -0.276142 671.276 -0.5 671 -0.5 L671 0 L671 0.5 Z M674 -0.5 C673.724 -0.5 673.5 -0.276142 673.5 0 C673.5 0.276142 673.724 0.5 674 0.5 L674 0 L674 -0.5 Z M676 0.5 C676.276 0.5 676.5 0.276142 676.5 0 C676.5 -0.276142 676.276 -0.5 676 -0.5 L676 0 L676 0.5 Z M679 -0.5 C678.724 -0.5 678.5 -0.276142 678.5 0 C678.5 0.276142 678.724 0.5 679 0.5 L679 0 L679 -0.5 Z M681 0.5 C681.276 0.5 681.5 0.276142 681.5 0 C681.5 -0.276142 681.276 -0.5 681 -0.5 L681 0 L681 0.5 Z M684 -0.5 C683.724 -0.5 683.5 -0.276142 683.5 0 C683.5 0.276142 683.724 0.5 684 0.5 L684 0 L684 -0.5 Z M686 0.5 C686.276 0.5 686.5 0.276142 686.5 0 C686.5 -0.276142 686.276 -0.5 686 -0.5 L686 0 L686 0.5 Z M689 -0.5 C688.724 -0.5 688.5 -0.276142 688.5 0 C688.5 0.276142 688.724 0.5 689 0.5 L689 0 L689 -0.5 Z M691 0.5 C691.276 0.5 691.5 0.276142 691.5 0 C691.5 -0.276142 691.276 -0.5 691 -0.5 L691 0 L691 0.5 Z M694 -0.5 C693.724 -0.5 693.5 -0.276142 693.5 0 C693.5 0.276142 693.724 0.5 694 0.5 L694 0 L694 -0.5 Z M696 0.5 C696.276 0.5 696.5 0.276142 696.5 0 C696.5 -0.276142 696.276 -0.5 696 -0.5 L696 0 L696 0.5 Z M699 -0.5 C698.724 -0.5 698.5 -0.276142 698.5 0 C698.5 0.276142 698.724 0.5 699 0.5 L699 0 L699 -0.5 Z M701 0.5 C701.276 0.5 701.5 0.276142 701.5 0 C701.5 -0.276142 701.276 -0.5 701 -0.5 L701 0 L701 0.5 Z M704 -0.5 C703.724 -0.5 703.5 -0.276142 703.5 0 C703.5 0.276142 703.724 0.5 704 0.5 L704 0 L704 -0.5 Z M706 0.5 C706.276 0.5 706.5 0.276142 706.5 0 C706.5 -0.276142 706.276 -0.5 706 -0.5 L706 0 L706 0.5 Z M709 -0.5 C708.724 -0.5 708.5 -0.276142 708.5 0 C708.5 0.276142 708.724 0.5 709 0.5 L709 0 L709 -0.5 Z M711 0.5 C711.276 0.5 711.5 0.276142 711.5 0 C711.5 -0.276142 711.276 -0.5 711 -0.5 L711 0 L711 0.5 Z M714 -0.5 C713.724 -0.5 713.5 -0.276142 713.5 0 C713.5 0.276142 713.724 0.5 714 0.5 L714 0 L714 -0.5 Z M716 0.5 C716.276 0.5 716.5 0.276142 716.5 0 C716.5 -0.276142 716.276 -0.5 716 -0.5 L716 0 L716 0.5 Z M719 -0.5 C718.724 -0.5 718.5 -0.276142 718.5 0 C718.5 0.276142 718.724 0.5 719 0.5 L719 0 L719 -0.5 Z M721 0.5 C721.276 0.5 721.5 0.276142 721.5 0 C721.5 -0.276142 721.276 -0.5 721 -0.5 L721 0 L721 0.5 Z M724 -0.5 C723.724 -0.5 723.5 -0.276142 723.5 0 C723.5 0.276142 723.724 0.5 724 0.5 L724 0 L724 -0.5 Z M726 0.5 C726.276 0.5 726.5 0.276142 726.5 0 C726.5 -0.276142 726.276 -0.5 726 -0.5 L726 0 L726 0.5 Z M729 -0.5 C728.724 -0.5 728.5 -0.276142 728.5 0 C728.5 0.276142 728.724 0.5 729 0.5 L729 0 L729 -0.5 Z M731 0.5 C731.276 0.5 731.5 0.276142 731.5 0 C731.5 -0.276142 731.276 -0.5 731 -0.5 L731 0 L731 0.5 Z M734 -0.5 C733.724 -0.5 733.5 -0.276142 733.5 0 C733.5 0.276142 733.724 0.5 734 0.5 L734 0 L734 -0.5 Z M736 0.5 C736.276 0.5 736.5 0.276142 736.5 0 C736.5 -0.276142 736.276 -0.5 736 -0.5 L736 0 L736 0.5 Z M739 -0.5 C738.724 -0.5 738.5 -0.276142 738.5 0 C738.5 0.276142 738.724 0.5 739 0.5 L739 0 L739 -0.5 Z M0 0 L0 0.5 L1 0.5 L1 0 L1 -0.5 L0 -0.5 L0 0 Z M4 0 L4 0.5 L6 0.5 L6 0 L6 -0.5 L4 -0.5 L4 0 Z M9 0 L9 0.5 L11 0.5 L11 0 L11 -0.5 L9 -0.5 L9 0 Z M14 0 L14 0.5 L16 0.5 L16 0 L16 -0.5 L14 -0.5 L14 0 Z M19 0 L19 0.5 L21 0.5 L21 0 L21 -0.5 L19 -0.5 L19 0 Z M24 0 L24 0.5 L26 0.5 L26 0 L26 -0.5 L24 -0.5 L24 0 Z M29 0 L29 0.5 L31 0.5 L31 0 L31 -0.5 L29 -0.5 L29 0 Z M34 0 L34 0.5 L36 0.5 L36 0 L36 -0.5 L34 -0.5 L34 0 Z M39 0 L39 0.5 L41 0.5 L41 0 L41 -0.5 L39 -0.5 L39 0 Z M44 0 L44 0.5 L46 0.5 L46 0 L46 -0.5 L44 -0.5 L44 0 Z M49 0 L49 0.5 L51 0.5 L51 0 L51 -0.5 L49 -0.5 L49 0 Z M54 0 L54 0.5 L56 0.5 L56 0 L56 -0.5 L54 -0.5 L54 0 Z M59 0 L59 0.5 L61 0.5 L61 0 L61 -0.5 L59 -0.5 L59 0 Z M64 0 L64 0.5 L66 0.5 L66 0 L66 -0.5 L64 -0.5 L64 0 Z M69 0 L69 0.5 L71 0.5 L71 0 L71 -0.5 L69 -0.5 L69 0 Z M74 0 L74 0.5 L76 0.5 L76 0 L76 -0.5 L74 -0.5 L74 0 Z M79 0 L79 0.5 L81 0.5 L81 0 L81 -0.5 L79 -0.5 L79 0 Z M84 0 L84 0.5 L86 0.5 L86 0 L86 -0.5 L84 -0.5 L84 0 Z M89 0 L89 0.5 L91 0.5 L91 0 L91 -0.5 L89 -0.5 L89 0 Z M94 0 L94 0.5 L96 0.5 L96 0 L96 -0.5 L94 -0.5 L94 0 Z M99 0 L99 0.5 L101 0.5 L101 0 L101 -0.5 L99 -0.5 L99 0 Z M104 0 L104 0.5 L106 0.5 L106 0 L106 -0.5 L104 -0.5 L104 0 Z M109 0 L109 0.5 L111 0.5 L111 0 L111 -0.5 L109 -0.5 L109 0 Z M114 0 L114 0.5 L116 0.5 L116 0 L116 -0.5 L114 -0.5 L114 0 Z M119 0 L119 0.5 L121 0.5 L121 0 L121 -0.5 L119 -0.5 L119 0 Z M124 0 L124 0.5 L126 0.5 L126 0 L126 -0.5 L124 -0.5 L124 0 Z M129 0 L129 0.5 L131 0.5 L131 0 L131 -0.5 L129 -0.5 L129 0 Z M134 0 L134 0.5 L136 0.5 L136 0 L136 -0.5 L134 -0.5 L134 0 Z M139 0 L139 0.5 L141 0.5 L141 0 L141 -0.5 L139 -0.5 L139 0 Z M144 0 L144 0.5 L146 0.5 L146 0 L146 -0.5 L144 -0.5 L144 0 Z M149 0 L149 0.5 L151 0.5 L151 0 L151 -0.5 L149 -0.5 L149 0 Z M154 0 L154 0.5 L156 0.5 L156 0 L156 -0.5 L154 -0.5 L154 0 Z M159 0 L159 0.5 L161 0.5 L161 0 L161 -0.5 L159 -0.5 L159 0 Z M164 0 L164 0.5 L166 0.5 L166 0 L166 -0.5 L164 -0.5 L164 0 Z M169 0 L169 0.5 L171 0.5 L171 0 L171 -0.5 L169 -0.5 L169 0 Z M174 0 L174 0.5 L176 0.5 L176 0 L176 -0.5 L174 -0.5 L174 0 Z M179 0 L179 0.5 L181 0.5 L181 0 L181 -0.5 L179 -0.5 L179 0 Z M184 0 L184 0.5 L186 0.5 L186 0 L186 -0.5 L184 -0.5 L184 0 Z M189 0 L189 0.5 L191 0.5 L191 0 L191 -0.5 L189 -0.5 L189 0 Z M194 0 L194 0.5 L196 0.5 L196 0 L196 -0.5 L194 -0.5 L194 0 Z M199 0 L199 0.5 L201 0.5 L201 0 L201 -0.5 L199 -0.5 L199 0 Z M204 0 L204 0.5 L206 0.5 L206 0 L206 -0.5 L204 -0.5 L204 0 Z M209 0 L209 0.5 L211 0.5 L211 0 L211 -0.5 L209 -0.5 L209 0 Z M214 0 L214 0.5 L216 0.5 L216 0 L216 -0.5 L214 -0.5 L214 0 Z M219 0 L219 0.5 L221 0.5 L221 0 L221 -0.5 L219 -0.5 L219 0 Z M224 0 L224 0.5 L226 0.5 L226 0 L226 -0.5 L224 -0.5 L224 0 Z M229 0 L229 0.5 L231 0.5 L231 0 L231 -0.5 L229 -0.5 L229 0 Z M234 0 L234 0.5 L236 0.5 L236 0 L236 -0.5 L234 -0.5 L234 0 Z M239 0 L239 0.5 L241 0.5 L241 0 L241 -0.5 L239 -0.5 L239 0 Z M244 0 L244 0.5 L246 0.5 L246 0 L246 -0.5 L244 -0.5 L244 0 Z M249 0 L249 0.5 L251 0.5 L251 0 L251 -0.5 L249 -0.5 L249 0 Z M254 0 L254 0.5 L256 0.5 L256 0 L256 -0.5 L254 -0.5 L254 0 Z M259 0 L259 0.5 L261 0.5 L261 0 L261 -0.5 L259 -0.5 L259 0 Z M264 0 L264 0.5 L266 0.5 L266 0 L266 -0.5 L264 -0.5 L264 0 Z M269 0 L269 0.5 L271 0.5 L271 0 L271 -0.5 L269 -0.5 L269 0 Z M274 0 L274 0.5 L276 0.5 L276 0 L276 -0.5 L274 -0.5 L274 0 Z M279 0 L279 0.5 L281 0.5 L281 0 L281 -0.5 L279 -0.5 L279 0 Z M284 0 L284 0.5 L286 0.5 L286 0 L286 -0.5 L284 -0.5 L284 0 Z M289 0 L289 0.5 L291 0.5 L291 0 L291 -0.5 L289 -0.5 L289 0 Z M294 0 L294 0.5 L296 0.5 L296 0 L296 -0.5 L294 -0.5 L294 0 Z M299 0 L299 0.5 L301 0.5 L301 0 L301 -0.5 L299 -0.5 L299 0 Z M304 0 L304 0.5 L306 0.5 L306 0 L306 -0.5 L304 -0.5 L304 0 Z M309 0 L309 0.5 L311 0.5 L311 0 L311 -0.5 L309 -0.5 L309 0 Z M314 0 L314 0.5 L316 0.5 L316 0 L316 -0.5 L314 -0.5 L314 0 Z M319 0 L319 0.5 L321 0.5 L321 0 L321 -0.5 L319 -0.5 L319 0 Z M324 0 L324 0.5 L326 0.5 L326 0 L326 -0.5 L324 -0.5 L324 0 Z M329 0 L329 0.5 L331 0.5 L331 0 L331 -0.5 L329 -0.5 L329 0 Z M334 0 L334 0.5 L336 0.5 L336 0 L336 -0.5 L334 -0.5 L334 0 Z M339 0 L339 0.5 L341 0.5 L341 0 L341 -0.5 L339 -0.5 L339 0 Z M344 0 L344 0.5 L346 0.5 L346 0 L346 -0.5 L344 -0.5 L344 0 Z M349 0 L349 0.5 L351 0.5 L351 0 L351 -0.5 L349 -0.5 L349 0 Z M354 0 L354 0.5 L356 0.5 L356 0 L356 -0.5 L354 -0.5 L354 0 Z M359 0 L359 0.5 L361 0.5 L361 0 L361 -0.5 L359 -0.5 L359 0 Z M364 0 L364 0.5 L366 0.5 L366 0 L366 -0.5 L364 -0.5 L364 0 Z M369 0 L369 0.5 L371 0.5 L371 0 L371 -0.5 L369 -0.5 L369 0 Z M374 0 L374 0.5 L376 0.5 L376 0 L376 -0.5 L374 -0.5 L374 0 Z M379 0 L379 0.5 L381 0.5 L381 0 L381 -0.5 L379 -0.5 L379 0 Z M384 0 L384 0.5 L386 0.5 L386 0 L386 -0.5 L384 -0.5 L384 0 Z M389 0 L389 0.5 L391 0.5 L391 0 L391 -0.5 L389 -0.5 L389 0 Z M394 0 L394 0.5 L396 0.5 L396 0 L396 -0.5 L394 -0.5 L394 0 Z M399 0 L399 0.5 L401 0.5 L401 0 L401 -0.5 L399 -0.5 L399 0 Z M404 0 L404 0.5 L406 0.5 L406 0 L406 -0.5 L404 -0.5 L404 0 Z M409 0 L409 0.5 L411 0.5 L411 0 L411 -0.5 L409 -0.5 L409 0 Z M414 0 L414 0.5 L416 0.5 L416 0 L416 -0.5 L414 -0.5 L414 0 Z M419 0 L419 0.5 L421 0.5 L421 0 L421 -0.5 L419 -0.5 L419 0 Z M424 0 L424 0.5 L426 0.5 L426 0 L426 -0.5 L424 -0.5 L424 0 Z M429 0 L429 0.5 L431 0.5 L431 0 L431 -0.5 L429 -0.5 L429 0 Z M434 0 L434 0.5 L436 0.5 L436 0 L436 -0.5 L434 -0.5 L434 0 Z M439 0 L439 0.5 L441 0.5 L441 0 L441 -0.5 L439 -0.5 L439 0 Z M444 0 L444 0.5 L446 0.5 L446 0 L446 -0.5 L444 -0.5 L444 0 Z M449 0 L449 0.5 L451 0.5 L451 0 L451 -0.5 L449 -0.5 L449 0 Z M454 0 L454 0.5 L456 0.5 L456 0 L456 -0.5 L454 -0.5 L454 0 Z M459 0 L459 0.5 L461 0.5 L461 0 L461 -0.5 L459 -0.5 L459 0 Z M464 0 L464 0.5 L466 0.5 L466 0 L466 -0.5 L464 -0.5 L464 0 Z M469 0 L469 0.5 L471 0.5 L471 0 L471 -0.5 L469 -0.5 L469 0 Z M474 0 L474 0.5 L476 0.5 L476 0 L476 -0.5 L474 -0.5 L474 0 Z M479 0 L479 0.5 L481 0.5 L481 0 L481 -0.5 L479 -0.5 L479 0 Z M484 0 L484 0.5 L486 0.5 L486 0 L486 -0.5 L484 -0.5 L484 0 Z M489 0 L489 0.5 L491 0.5 L491 0 L491 -0.5 L489 -0.5 L489 0 Z M494 0 L494 0.5 L496 0.5 L496 0 L496 -0.5 L494 -0.5 L494 0 Z M499 0 L499 0.5 L501 0.5 L501 0 L501 -0.5 L499 -0.5 L499 0 Z M504 0 L504 0.5 L506 0.5 L506 0 L506 -0.5 L504 -0.5 L504 0 Z M509 0 L509 0.5 L511 0.5 L511 0 L511 -0.5 L509 -0.5 L509 0 Z M514 0 L514 0.5 L516 0.5 L516 0 L516 -0.5 L514 -0.5 L514 0 Z M519 0 L519 0.5 L521 0.5 L521 0 L521 -0.5 L519 -0.5 L519 0 Z M524 0 L524 0.5 L526 0.5 L526 0 L526 -0.5 L524 -0.5 L524 0 Z M529 0 L529 0.5 L531 0.5 L531 0 L531 -0.5 L529 -0.5 L529 0 Z M534 0 L534 0.5 L536 0.5 L536 0 L536 -0.5 L534 -0.5 L534 0 Z M539 0 L539 0.5 L541 0.5 L541 0 L541 -0.5 L539 -0.5 L539 0 Z M544 0 L544 0.5 L546 0.5 L546 0 L546 -0.5 L544 -0.5 L544 0 Z M549 0 L549 0.5 L551 0.5 L551 0 L551 -0.5 L549 -0.5 L549 0 Z M554 0 L554 0.5 L556 0.5 L556 0 L556 -0.5 L554 -0.5 L554 0 Z M559 0 L559 0.5 L561 0.5 L561 0 L561 -0.5 L559 -0.5 L559 0 Z M564 0 L564 0.5 L566 0.5 L566 0 L566 -0.5 L564 -0.5 L564 0 Z M569 0 L569 0.5 L571 0.5 L571 0 L571 -0.5 L569 -0.5 L569 0 Z M574 0 L574 0.5 L576 0.5 L576 0 L576 -0.5 L574 -0.5 L574 0 Z M579 0 L579 0.5 L581 0.5 L581 0 L581 -0.5 L579 -0.5 L579 0 Z M584 0 L584 0.5 L586 0.5 L586 0 L586 -0.5 L584 -0.5 L584 0 Z M589 0 L589 0.5 L591 0.5 L591 0 L591 -0.5 L589 -0.5 L589 0 Z M594 0 L594 0.5 L596 0.5 L596 0 L596 -0.5 L594 -0.5 L594 0 Z M599 0 L599 0.5 L601 0.5 L601 0 L601 -0.5 L599 -0.5 L599 0 Z M604 0 L604 0.5 L606 0.5 L606 0 L606 -0.5 L604 -0.5 L604 0 Z M609 0 L609 0.5 L611 0.5 L611 0 L611 -0.5 L609 -0.5 L609 0 Z M614 0 L614 0.5 L616 0.5 L616 0 L616 -0.5 L614 -0.5 L614 0 Z M619 0 L619 0.5 L621 0.5 L621 0 L621 -0.5 L619 -0.5 L619 0 Z M624 0 L624 0.5 L626 0.5 L626 0 L626 -0.5 L624 -0.5 L624 0 Z M629 0 L629 0.5 L631 0.5 L631 0 L631 -0.5 L629 -0.5 L629 0 Z M634 0 L634 0.5 L636 0.5 L636 0 L636 -0.5 L634 -0.5 L634 0 Z M639 0 L639 0.5 L641 0.5 L641 0 L641 -0.5 L639 -0.5 L639 0 Z M644 0 L644 0.5 L646 0.5 L646 0 L646 -0.5 L644 -0.5 L644 0 Z M649 0 L649 0.5 L651 0.5 L651 0 L651 -0.5 L649 -0.5 L649 0 Z M654 0 L654 0.5 L656 0.5 L656 0 L656 -0.5 L654 -0.5 L654 0 Z M659 0 L659 0.5 L661 0.5 L661 0 L661 -0.5 L659 -0.5 L659 0 Z M664 0 L664 0.5 L666 0.5 L666 0 L666 -0.5 L664 -0.5 L664 0 Z M669 0 L669 0.5 L671 0.5 L671 0 L671 -0.5 L669 -0.5 L669 0 Z M674 0 L674 0.5 L676 0.5 L676 0 L676 -0.5 L674 -0.5 L674 0 Z M679 0 L679 0.5 L681 0.5 L681 0 L681 -0.5 L679 -0.5 L679 0 Z M684 0 L684 0.5 L686 0.5 L686 0 L686 -0.5 L684 -0.5 L684 0 Z M689 0 L689 0.5 L691 0.5 L691 0 L691 -0.5 L689 -0.5 L689 0 Z M694 0 L694 0.5 L696 0.5 L696 0 L696 -0.5 L694 -0.5 L694 0 Z M699 0 L699 0.5 L701 0.5 L701 0 L701 -0.5 L699 -0.5 L699 0 Z M704 0 L704 0.5 L706 0.5 L706 0 L706 -0.5 L704 -0.5 L704 0 Z M709 0 L709 0.5 L711 0.5 L711 0 L711 -0.5 L709 -0.5 L709 0 Z M714 0 L714 0.5 L716 0.5 L716 0 L716 -0.5 L714 -0.5 L714 0 Z M719 0 L719 0.5 L721 0.5 L721 0 L721 -0.5 L719 -0.5 L719 0 Z M724 0 L724 0.5 L726 0.5 L726 0 L726 -0.5 L724 -0.5 L724 0 Z M729 0 L729 0.5 L731 0.5 L731 0 L731 -0.5 L729 -0.5 L729 0 Z M734 0 L734 0.5 L736 0.5 L736 0 L736 -0.5 L734 -0.5 L734 0 Z M739 0 L739 0.5 L740 0.5 L740 0 L740 -0.5 L739 -0.5 L739 0 Z" fill="#9e7bff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "59.96px", top: "48.02px", width: "9px", height: "56.59px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "56.46px", top: "100.58px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "58.96px", top: "69.3px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "116.88px", top: "53.2px", width: "9px", height: "72.14px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "113.38px", top: "97.91px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "115.88px", top: "81.31px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "173.81px", top: "76.53px", width: "9px", height: "46.66px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "170.31px", top: "116.01px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "172.81px", top: "94.66px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "230.73px", top: "96.4px", width: "9px", height: "45.79px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "227.23px", top: "125.29px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "229.73px", top: "115.18px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "287.65px", top: "119.73px", width: "9px", height: "15.98px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "284.15px", top: "120.11px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "286.65px", top: "123.39px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "344.58px", top: "122.75px", width: "9px", height: "26.35px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "341.08px", top: "127.8px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "343.58px", top: "131.94px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "401.5px", top: "111.95px", width: "9px", height: "53.57px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "398px", top: "133.85px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "400.5px", top: "132.8px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "458.42px", top: "117.57px", width: "9px", height: "38.45px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "454.92px", top: "115.96px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "457.42px", top: "133.5px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "515.35px", top: "107.2px", width: "9px", height: "75.6px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "511.85px", top: "140.63px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "514.35px", top: "141.31px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "572.27px", top: "131.82px", width: "9px", height: "39.31px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "568.77px", top: "141.36px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "571.27px", top: "147.23px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "629.19px", top: "143.92px", width: "9px", height: "28.51px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "625.69px", top: "138.82px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "628.19px", top: "152.89px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "686.12px", top: "145.65px", width: "9px", height: "61.78px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "682.62px", top: "161.02px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "685.12px", top: "172.07px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <div data-fu="bar" style={{ position: "absolute", left: "743.04px", top: "182.8px", width: "9px", height: "38.45px", borderRadius: "4.5px", background: "linear-gradient(180deg, #5642a8 0%, #4c3c91 100%)", boxShadow: "inset 0 0 0 1px rgba(117, 86, 242, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.06), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.25)", overflow: "hidden" }} />
        <div style={{ position: "absolute", left: "739.54px", top: "206.9px", width: "16px", height: "2px", borderRadius: "1px", background: "#8a8a8a" }} />
        <svg style={{ position: "absolute", left: "742.04px", top: "195.49px", width: "11px", height: "11px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 C11 8.53757 8.53757 11 5.5 11 C2.46243 11 0 8.53757 0 5.5 C0 2.46243 2.46243 0 5.5 0 C8.53757 0 11 2.46243 11 5.5 Z" fill="#7b5bff"/><path transform="matrix(1 0 0 1 0 0)" d="M11 5.5 L9.47 5.5 C9.47 7.69257 7.69257 9.47 5.5 9.47 L5.5 11 L5.5 12.53 C9.38256 12.53 12.53 9.38256 12.53 5.5 L11 5.5 Z M5.5 11 L5.5 9.47 C3.30743 9.47 1.53 7.69257 1.53 5.5 L0 5.5 L-1.53 5.5 C-1.53 9.38256 1.61744 12.53 5.5 12.53 L5.5 11 Z M0 5.5 L1.53 5.5 C1.53 3.30743 3.30743 1.53 5.5 1.53 L5.5 0 L5.5 -1.53 C1.61744 -1.53 -1.53 1.61744 -1.53 5.5 L0 5.5 Z M5.5 0 L5.5 1.53 C7.69257 1.53 9.47 3.30743 9.47 5.5 L11 5.5 L12.53 5.5 C12.53 1.61744 9.38256 -1.53 5.5 -1.53 L5.5 0 Z" fill="#ffffff"/></svg>
        <p style={{ position: "absolute", left: "36.96px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Enmanuel</p>
        <p style={{ position: "absolute", left: "96.38px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Domingo</p>
        <p style={{ position: "absolute", left: "151.81px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Jonathan</p>
        <p style={{ position: "absolute", left: "222.73px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Saul</p>
        <p style={{ position: "absolute", left: "278.65px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Julio</p>
        <p style={{ position: "absolute", left: "332.08px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Edwin</p>
        <p style={{ position: "absolute", left: "380px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Carlos M.</p>
        <p style={{ position: "absolute", left: "446.42px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Oscar</p>
        <p style={{ position: "absolute", left: "501.85px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Ruben</p>
        <p style={{ position: "absolute", left: "552.27px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Carlos S.</p>
        <p style={{ position: "absolute", left: "613.69px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Alberto</p>
        <p style={{ position: "absolute", left: "673.62px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Fredis</p>
        <p style={{ position: "absolute", left: "736.04px", top: "236px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "23px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>Luis</p>
        <div style={{ position: "absolute", left: "700px", top: "114.09px", width: "76px", height: "20px", borderRadius: "5px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "3px 7px 3px 7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#9e7bff" }}>Avg 30.58%</p>
        </div>
        <div style={{ position: "absolute", left: "0px", top: "15.28px", width: "131.74px", height: "21.74px", borderRadius: "6px", background: "#000000", boxShadow: "inset 0 0 0 0.87px #3a3a3a, 0px 6px 24px 0px rgba(123, 91, 255, 0.1)", display: "flex", flexDirection: "row", padding: "3.87px 7.87px 3.87px 7.87px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ededed" }}>Top · 45.00% · +6.2 pts</p>
        </div>
        <svg style={{ position: "absolute", left: "60.46px", top: "35.82px", width: "8px", height: "4px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="8" height="4" viewBox="0 0 8 4" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L8 0 L4 4 L0 0 Z" fill="#000000"/></svg>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "332px", width: "211px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Movers</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "211px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>Efficiency change vs the prior 4 weeks</p>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "388px", width: "375px", height: "148px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Biggest gains</p>
        <div style={{ width: "375px", height: "44px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "14px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#9c84ff" }}>ES</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Enmanuel & Suseidy</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>45.00% · was 38.80%</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "5px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "1.5px 5px 1.5px 5px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 5 L6 5 L3 0 L0 5 Z" fill="#3fb37f"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.5px", fontWeight: 500, color: "#3fb37f" }}>+6.2 pts</p>
          </div>
        </div>
        <div style={{ width: "375px", height: "44px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(122, 162, 247, 0.14)", boxShadow: "inset 0 0 0 1px rgba(122, 162, 247, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#9bb9f9" }}>JR</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Jonathan Rondon</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>39.13% · was 35.23%</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "5px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "1.5px 5px 1.5px 5px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 5 L6 5 L3 0 L0 5 Z" fill="#3fb37f"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.5px", fontWeight: 500, color: "#3fb37f" }}>+3.9 pts</p>
          </div>
        </div>
        <div style={{ width: "375px", height: "44px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(123, 91, 255, 0.14)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#9c84ff" }}>DA</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "138px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Domingo & Alejandra</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "117px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>42.22% · was 39.42%</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "5px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "1.5px 5px 1.5px 5px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 5 L6 5 L3 0 L0 5 Z" fill="#3fb37f"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.5px", fontWeight: 500, color: "#3fb37f" }}>+2.8 pts</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "544px", width: "375px", height: "148px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "98px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#5f5f5f", letterSpacing: "0.04em", textTransform: "uppercase" }}>Biggest drops</p>
        <div style={{ width: "375px", height: "44px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "17px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ec80b4" }}>ON</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "153px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Oscar & Nayrobi Griñán</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>30.14% · was 35.24%</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "5px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "1.5px 5px 1.5px 5px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L6 0 L3 5 L0 0 Z" fill="#e5484d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.5px", fontWeight: 500, color: "#e5484d" }}>−5.1 pts</p>
          </div>
        </div>
        <div style={{ width: "375px", height: "44px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(227, 179, 65, 0.14)", boxShadow: "inset 0 0 0 1px rgba(227, 179, 65, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#eac671" }}>AC</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Alberto & Ciany</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "118px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>25.65% · was 29.95%</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "5px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "1.5px 5px 1.5px 5px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L6 0 L3 5 L0 0 Z" fill="#e5484d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.5px", fontWeight: 500, color: "#e5484d" }}>−4.3 pts</p>
          </div>
        </div>
        <div style={{ width: "375px", height: "44px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "rgba(229, 85, 155, 0.14)", boxShadow: "inset 0 0 0 1px rgba(229, 85, 155, 0.28)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#ec80b4" }}>FY</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "160px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Fredis & Yanelis Paredes</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "109px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>21.21% · was 24.81%</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "5px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "1.5px 5px 1.5px 5px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "6px", height: "5px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="6" height="5" viewBox="0 0 6 5" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L6 0 L3 5 L0 0 Z" fill="#e5484d"/></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.5px", fontWeight: 500, color: "#e5484d" }}>−3.6 pts</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1038px", top: "704px", width: "402px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "1051px", top: "721px", width: "200px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "140px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Network average</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "200px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>MG1 ÷ positive messages · all 13 legs</p>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "772px", width: "231px", height: "42px", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "42px", fontFamily: "'Geist'", fontSize: "32px", fontWeight: 500, color: "#ededed", letterSpacing: "-0.03em" }}>30.58%</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(229, 72, 77, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#e5484d", lineHeight: "1.100000023841858" }}>−2.4 pts</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8f8f8f", lineHeight: "1.100000023841858" }}>vs 32.98%</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "824px", width: "375px", height: "32px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "375px", height: "10px", flexShrink: 0, position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "347.5px", height: "10px", borderRadius: "3px", background: "linear-gradient(90deg, #a994ff 0%, #7b5bff 100%)", boxShadow: "inset 0 0 0 1px rgba(96, 71, 199, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
          <svg style={{ position: "absolute", left: "351.5px", top: "0px", width: "23px", height: "10px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="23" height="10" viewBox="0 0 23 10" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 10 L0 10 L0.5 10 L0.5 0 L0 0 Z M3.29 0 L2.79 0 L2.79 10 L3.29 10 L3.79 10 L3.79 0 L3.29 0 Z M6.57 0 L6.07 0 L6.07 10 L6.57 10 L7.07 10 L7.07 0 L6.57 0 Z M9.86 0 L9.36 0 L9.36 10 L9.86 10 L10.36 10 L10.36 0 L9.86 0 Z M13.14 0 L12.64 0 L12.64 10 L13.14 10 L13.64 10 L13.64 0 L13.14 0 Z M16.43 0 L15.93 0 L15.93 10 L16.43 10 L16.93 10 L16.93 0 L16.43 0 Z M19.71 0 L19.21 0 L19.21 10 L19.71 10 L20.21 10 L20.21 0 L19.71 0 Z M23 0 L22.5 0 L22.5 10 L23 10 L23.5 10 L23.5 0 L23 0 Z" fill="#3a3a3a"/></svg>
        </div>
        <div style={{ width: "375px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#ededed" }}>1,002 MG1 of 3,277</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "121px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#7c7c7c" }}>August target 33.00%</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "876px", width: "375px", height: "40px", display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "125px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "26px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>Best</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed" }}>45.00%</p>
        </div>
        <div style={{ width: "125px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>Median leg</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed" }}>30.30%</p>
        </div>
        <div style={{ width: "125px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#a0a0a0" }}>Lowest</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#ededed" }}>15.79%</p>
        </div>
      </div>
      <div style={{ position: "absolute", left: "1051px", top: "940px", width: "375px", height: "76px", borderRadius: "8px", background: "rgba(123, 91, 255, 0.07)", boxShadow: "inset 0 0 0 1px rgba(123, 91, 255, 0.22)", display: "flex", flexDirection: "row", padding: "11px 13px 11px 13px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <Bulb size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#9e7bff", display: "block" }} />
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#c9b8ff", lineHeight: "1.399999976158142" }}>
          <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#c9b8ff", lineHeight: "1.399999976158142" }}>Lifting the 8 legs below average to 30.58% adds ≈ 35 MG1</span>
          <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#a99bd6", lineHeight: "1.399999976158142" }}>{" a month — Alberto & Ciany alone +13, Luis & Jackie +8."}</span>
        </p>
      </div>
      <div style={{ position: "absolute", left: "238px", top: "655px", width: "800px", height: "1px", background: "#000000", boxShadow: "0px 1px 0px 0px #232323" }} />
      <div style={{ position: "absolute", left: "250px", top: "673px", width: "187px", height: "43px", display: "flex", flexDirection: "column", gap: "7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#ededed", lineHeight: "1.100000023841858", letterSpacing: "-0.02em" }}>Leg ranking</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "187px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#8a8a8a", lineHeight: "1.2999999523162842" }}>Sorted by efficiency · last 4 weeks</p>
      </div>
      <div style={{ position: "absolute", left: "937px", top: "676px", width: "89px", height: "17px", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#dadada" }}>Show all 13</p>
        <ChevronRight size={14} strokeWidth={2.14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#8a8a8a", display: "block" }} />
      </div>
      <div style={{ position: "absolute", left: "239px", top: "712px", width: "787px", height: "356px", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "787px", height: "36px", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #222222, inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "1px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "262px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Leg</p>
          </div>
          <div style={{ width: "84px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>EFF</p>
            <InfoCircle size={10} strokeWidth={1.51} style={{ width: "10px", height: "10px", flexShrink: 0, color: "#5f5f5f", display: "block" }} />
          </div>
          <div style={{ width: "96px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>vs avg</p>
          </div>
          <div style={{ width: "66px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>MG1</p>
          </div>
          <div style={{ width: "179px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "2px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Momentum</p>
          </div>
          <div style={{ width: "100px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "2px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#7c7c7c" }}>Reporting</p>
          </div>
        </div>
        <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "262px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "6px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>1</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Enmanuel & Suseidy</p>
                  <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>PLATINUM</p>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>16 people</p>
                  <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>16 reporting</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>45.00%</p>
          </div>
          <div style={{ width: "96px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+14.42 pts</p>
            </div>
          </div>
          <div style={{ width: "66px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>18</p>
          </div>
          <div style={{ width: "179px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "120px", height: "14px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "3px", width: "120px", height: "8px", borderRadius: "4px", background: "#232323" }} />
                <div style={{ position: "absolute", left: "60px", top: "0px", width: "1px", height: "14px", background: "#555555" }} />
                <div style={{ position: "absolute", left: "41.4px", top: "3px", width: "17.6px", height: "8px", borderRadius: "3px", background: "linear-gradient(180deg, #f2838a 0%, #f07178 100%)", boxShadow: "inset 0 0 0 1px rgba(187, 88, 94, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#f07178" }}>−22%</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>100%</p>
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "262px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>2</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "138px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Domingo & Alejandra</p>
                  <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#211b33", boxShadow: "inset 0 0 0 1px #2d2547, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#a58bff", letterSpacing: "-0.01em", textTransform: "uppercase" }}>PLATINUM</p>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>3 people</p>
                  <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>3 reporting</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>42.22%</p>
          </div>
          <div style={{ width: "96px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+11.64 pts</p>
            </div>
          </div>
          <div style={{ width: "66px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "15px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>19</p>
          </div>
          <div style={{ width: "179px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "120px", height: "14px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "3px", width: "120px", height: "8px", borderRadius: "4px", background: "#232323" }} />
                <div style={{ position: "absolute", left: "60px", top: "0px", width: "1px", height: "14px", background: "#555555" }} />
                <div style={{ position: "absolute", left: "55px", top: "3px", width: "4px", height: "8px", borderRadius: "2px", background: "linear-gradient(180deg, #f2838a 0%, #f07178 100%)", boxShadow: "inset 0 0 0 1px rgba(187, 88, 94, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#f07178" }}>−5%</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>100%</p>
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "262px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>3</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Jonathan Rondon</p>
                  <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EAGLE</p>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>16 people</p>
                  <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>16 reporting</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>39.13%</p>
          </div>
          <div style={{ width: "96px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+8.55 pts</p>
            </div>
          </div>
          <div style={{ width: "66px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>9</p>
          </div>
          <div style={{ width: "179px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "120px", height: "14px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "3px", width: "120px", height: "8px", borderRadius: "4px", background: "#232323" }} />
                <div style={{ position: "absolute", left: "60px", top: "0px", width: "1px", height: "14px", background: "#555555" }} />
                <div style={{ position: "absolute", left: "30.2px", top: "3px", width: "28.8px", height: "8px", borderRadius: "3px", background: "linear-gradient(180deg, #f2838a 0%, #f07178 100%)", boxShadow: "inset 0 0 0 1px rgba(187, 88, 94, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#f07178" }}>−36%</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>100%</p>
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "262px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>4</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Saul Santana</p>
                  <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#1b2233", boxShadow: "inset 0 0 0 1px #24304a, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#7aa2f7", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EAGLE</p>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>16 people</p>
                  <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "66px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>16 reporting</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>34.38%</p>
          </div>
          <div style={{ width: "96px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+3.80 pts</p>
            </div>
          </div>
          <div style={{ width: "66px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "11px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>11</p>
          </div>
          <div style={{ width: "179px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "120px", height: "14px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "3px", width: "120px", height: "8px", borderRadius: "4px", background: "#232323" }} />
                <div style={{ position: "absolute", left: "60px", top: "0px", width: "1px", height: "14px", background: "#555555" }} />
                <div style={{ position: "absolute", left: "34.2px", top: "3px", width: "24.8px", height: "8px", borderRadius: "3px", background: "linear-gradient(180deg, #f2838a 0%, #f07178 100%)", boxShadow: "inset 0 0 0 1px rgba(187, 88, 94, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#f07178" }}>−31%</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #8b6fff 0%, #7b5bff 100%)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>100%</p>
            </div>
          </div>
        </div>
        <div data-fu="row" style={{ width: "787px", height: "64px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #222222", display: "flex", flexDirection: "row", padding: "0px 0px 1px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "262px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "14px", background: "#232323", boxShadow: "inset 0 0 0 1px #2e2e2e, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "9px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#ededed" }}>5</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "127px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>Julio & Liz Vasquez</p>
                  <div style={{ height: "18px", flexShrink: 0, borderRadius: "6px", background: "#16251c", boxShadow: "inset 0 0 0 1px #1f3326, 0px 0px 4.6px 0px rgba(0, 0, 0, 0.5)", display: "flex", flexDirection: "row", padding: "1px 7px 1px 7px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                    <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#6bcb8b", letterSpacing: "-0.01em", textTransform: "uppercase" }}>EMERALD</p>
                  </div>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>55 people</p>
                  <svg style={{ width: "3px", height: "3px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="3" height="3" viewBox="0 0 3 3" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3 1.5 C3 2.32843 2.32843 3 1.5 3 C0.671573 3 0 2.32843 0 1.5 C0 0.671573 0.671573 0 1.5 0 C2.32843 0 3 0.671573 3 1.5 Z" fill="#5f5f5f"/></svg>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#909090" }}>37 reporting</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: "84px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>32.48%</p>
          </div>
          <div style={{ width: "96px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "22px", background: "rgba(63, 179, 127, 0.1)", display: "flex", flexDirection: "row", padding: "2px 3px 2px 3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#3fb37f", lineHeight: "1.100000023841858" }}>+1.90 pts</p>
            </div>
          </div>
          <div style={{ width: "66px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>342</p>
          </div>
          <div style={{ width: "179px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "120px", height: "14px", flexShrink: 0, position: "relative" }}>
                <div style={{ position: "absolute", left: "0px", top: "3px", width: "120px", height: "8px", borderRadius: "4px", background: "#232323" }} />
                <div style={{ position: "absolute", left: "60px", top: "0px", width: "1px", height: "14px", background: "#555555" }} />
                <div style={{ position: "absolute", left: "19px", top: "3px", width: "40px", height: "8px", borderRadius: "3px", background: "linear-gradient(180deg, #f2838a 0%, #f07178 100%)", boxShadow: "inset 0 0 0 1px rgba(187, 88, 94, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.22), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.35)", overflow: "hidden" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#f07178" }}>−50%</p>
            </div>
          </div>
          <div style={{ width: "100px", height: "63px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 0px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "linear-gradient(180deg, #e6bc58 0%, #e3b341 100%)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(227, 179, 65, 0.16)" }} />
                <div style={{ width: "2.4px", height: "12px", flexShrink: 0, borderRadius: "1.2px", background: "rgba(227, 179, 65, 0.16)" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ededed" }}>67%</p>
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
