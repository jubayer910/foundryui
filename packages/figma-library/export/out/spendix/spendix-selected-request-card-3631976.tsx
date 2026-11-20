// Selected request card (spendix, Charts) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { AlertCircle, Check, CircleCheck, Loader } from "ingotui-icons/react/stroke-rounded";
import { Clock as ClockSolid, Send as SendSolid, ShieldCheck as ShieldCheckSolid } from "ingotui-icons/react/solid";

export function SelectedRequestCard() {
  return (
    <div style={{ width: "440px", height: "722px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden", position: "relative" }}>
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
          <div style={{ position: "absolute", left: "56.4px", top: "118.77px", width: "30px", height: "13.23px", borderRadius: "4px", background: "linear-gradient(180deg, #2fc291 0%, #10b981 100%)", boxShadow: "inset 0 0 0 1px rgba(12, 144, 101, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "128.2px", top: "82.4px", width: "36px", height: "49.6px", borderRadius: "6px", background: "#f4f4f5" }} />
          <div style={{ position: "absolute", left: "131.2px", top: "104.72px", width: "30px", height: "27.28px", borderRadius: "4px", background: "linear-gradient(180deg, #2fc291 0%, #10b981 100%)", boxShadow: "inset 0 0 0 1px rgba(12, 144, 101, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "203px", top: "53.47px", width: "36px", height: "78.53px", borderRadius: "6px", background: "#f4f4f5" }} />
          <div style={{ position: "absolute", left: "206px", top: "92.73px", width: "30px", height: "39.27px", borderRadius: "4px", background: "linear-gradient(180deg, #2fc291 0%, #10b981 100%)", boxShadow: "inset 0 0 0 1px rgba(12, 144, 101, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
          <div style={{ position: "absolute", left: "206px", top: "87.77px", width: "30px", height: "2.76px", borderRadius: "1.38px", background: "linear-gradient(180deg, #c1edde 0%, #aee7d4 100%)", boxShadow: "inset 0 0 0 1px rgba(15, 176, 123, 0.22), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.55), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.35), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.04)", overflow: "hidden" }} />
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
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Within Marketing budget</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>$3,860 left after</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#16a34a", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Approved vendor</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Canva · since 2024</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
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
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Decline</p>
        </div>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Approve $240.00</p>
        </div>
      </div>
    </div>
  );
}
