// Transaction drawer (spendix, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { Check, CircleCheck, Download, Loader, X } from "ingotui-icons/react/stroke-rounded";
import { Clock as ClockSolid, User as UserSolid, Wallet as WalletSolid } from "ingotui-icons/react/solid";

export function TransactionDrawer() {
  return (
    <div style={{ width: "440px", height: "1047px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0, 0px 20px 44px -12px rgba(13, 13, 18, 0.14), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "18px 20px 19px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "24px", height: "24px", flexShrink: 0, position: "relative" }}>
            <div style={{ position: "absolute", left: "0px", top: "0px", width: "24px", height: "24px", background: "url('https://ingotui.com/library-img/0cf31a99ea799aa140a3352eb940dd3f193295c3.png') center / cover no-repeat" }} />
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "46px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Figma</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "178px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>TXN-20418 · 03/04/2026, 10:42</p>
        </div>
        <div style={{ width: "30px", height: "30px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "20px 20px 20px 20px", gap: "18px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "106px", lineHeight: "36px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 500, color: "#0f172a", letterSpacing: "-0.02em" }}>$420.70</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "203px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>USD · charged to Travel card •••• 3109</p>
          </div>
          <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e0f6ff", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#2563eb", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "51px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb" }}>In review</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "150px", flexShrink: 0, borderRadius: "12px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "20px", top: "18px", width: "150px", height: "126px", borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "12px 12px 12px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#0f172a" }}>Figma, Inc.</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8px", fontWeight: 400, color: "#64748b" }}>Invoice #FG-88213</p>
            <div style={{ width: "126px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8px", fontWeight: 400, color: "#666d80" }}>Organization plan</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8px", fontWeight: 400, color: "#666d80" }}>$360.00</p>
            </div>
            <div style={{ width: "126px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "61px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8px", fontWeight: 400, color: "#666d80" }}>FigJam seats ×3</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8px", fontWeight: 400, color: "#666d80" }}>$45.00</p>
            </div>
            <div style={{ width: "126px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8px", fontWeight: 400, color: "#666d80" }}>Tax</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "10px", fontFamily: "'Geist'", fontSize: "8px", fontWeight: 400, color: "#666d80" }}>$15.70</p>
            </div>
            <div style={{ width: "126px", height: "1px", flexShrink: 0, background: "#ededed" }} />
            <div style={{ width: "126px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#0f172a" }}>Total</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 500, color: "#0f172a" }}>$420.70</p>
            </div>
          </div>
          <div style={{ position: "absolute", left: "196px", top: "30px", width: "178px", height: "96px", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CircleCheck size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#16a34a", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Receipt matched</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "177px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>figma-invoice-88213.pdf · 84 KB</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "178px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Amount, date and vendor match.</p>
            <div style={{ height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Download size={14} strokeWidth={1.51} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Download</p>
            </div>
          </div>
        </div>
        <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Details</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#7d818c" }}>Category</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "7px", height: "7px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7" height="7" viewBox="0 0 7 7" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7 3.5 C7 5.433 5.433 7 3.5 7 C1.567 7 0 5.433 0 3.5 C0 1.567 1.567 0 3.5 0 C5.433 0 7 1.567 7 3.5 Z" fill="#f59e0b"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Travel</p>
            </div>
          </div>
          <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#7d818c" }}>Team</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "119px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Design · Maya Patel</p>
          </div>
          <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#7d818c" }}>Card</p>
            <div style={{ height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f8f8f8", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "112px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#344054" }}>Travel card •••• 3109</p>
            </div>
          </div>
          <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#7d818c" }}>Budget</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "191px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Design · $1,400 of $4,000 used</p>
          </div>
          <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#7d818c" }}>Policy</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "200px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#d2a134" }}>Software bought on a travel card</p>
          </div>
        </div>
        <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Approval trail</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "20px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20px", height: "20px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <WalletSolid size={11} strokeWidth={2.25} style={{ width: "11px", height: "11px", flexShrink: 0, color: "#2563eb", display: "block" }} />
              </div>
              <div style={{ width: "1px", height: "22px", flexShrink: 0, background: "#e2e8f0" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", padding: "1px 0px 8px 0px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "111px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Charged by Figma</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "202px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>03/04 · 10:42 · auto-matched receipt</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "20px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20px", height: "20px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <UserSolid size={11} style={{ width: "11px", height: "11px", flexShrink: 0, color: "#2563eb", display: "block" }} />
              </div>
              <div style={{ width: "1px", height: "22px", flexShrink: 0, background: "#e2e8f0" }} />
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", padding: "1px 0px 8px 0px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Flagged for review</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "176px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Policy: software on a travel card</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "20px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "20px", height: "20px", flexShrink: 0, borderRadius: "10px", background: "rgba(210, 161, 52, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <ClockSolid size={11} style={{ width: "11px", height: "11px", flexShrink: 0, color: "#d2a134", display: "block" }} />
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", padding: "1px 0px 8px 0px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "135px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Waiting on Maya Patel</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "166px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Design lead · reminded 2h ago</p>
            </div>
          </div>
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Comment</p>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "72px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "11px 13px 11px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#94a3b8" }}>Ask Maya why this went on the travel card…</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0 }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "15px 20px 14px 20px", gap: "8px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "32px", flexShrink: 0, borderRadius: "8px", display: "flex", flexDirection: "row", padding: "0px 10px 0px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#e5484d" }}>Decline</p>
        </div>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "150px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Move to Software card</p>
        </div>
        <div style={{ height: "32px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Approve</p>
        </div>
      </div>
    </div>
  );
}
