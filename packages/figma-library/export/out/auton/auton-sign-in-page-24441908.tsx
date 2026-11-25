// Sign in page (auton, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { Ban, Checklist, ChevronRight, CircleCheck, CircleX, DatabaseExport, Eye, FileInvoice, Lock, Login, Mail, Refresh, Rocket, Shield, ShieldKeyhole, User } from "ingotui-icons/react/stroke-rounded";
import { CircleCheck as CircleCheckSolid } from "ingotui-icons/react/solid";

export function SignInPage() {
  return (
    <div style={{ width: "1440px", height: "1026px", background: "#fafafa", overflow: "hidden", display: "flex", flexDirection: "row", padding: "20px 20px 20px 20px", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "772px", alignSelf: "stretch", flexShrink: 0, borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e4e5", overflow: "hidden", display: "flex", flexDirection: "column", padding: "33px 33px 33px 33px", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "219px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Live audit log, 48,213 events today</p>
          </div>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 400, color: "#111111", lineHeight: "1.25" }}>Every agent action, approved and on the record</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.5" }}>Sign in to review what your agents did while you were away: runs, approvals and blocked requests, in order.</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e4e5", overflow: "hidden", display: "flex", flexDirection: "column", padding: "2px 2px 2px 2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "8px 0px 9px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "112px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Time</p>
            </div>
            <div style={{ width: "206px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Event</p>
            </div>
            <div style={{ width: "190px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Actor</p>
            </div>
            <div style={{ width: "140px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "11px" }}>Result</p>
            </div>
            <div style={{ width: "58px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, height: "11px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "0px" }}></p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "112px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>14:32:08</p>
            </div>
            <div style={{ width: "206px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#333840", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Access granted</p>
              </div>
            </div>
            <div style={{ width: "190px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <FileInvoice size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#333333", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>invoice-processor</p>
              </div>
            </div>
            <div style={{ width: "140px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Allowed</p>
              </div>
            </div>
            <div style={{ width: "58px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#888888", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "112px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>14:31:54</p>
            </div>
            <div style={{ width: "206px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Ban size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#333840", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Request blocked</p>
              </div>
            </div>
            <div style={{ width: "190px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Rocket size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#333333", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>deploy-agent</p>
              </div>
            </div>
            <div style={{ width: "140px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fff5f5", boxShadow: "inset 0 0 0 1px rgba(255, 125, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#470909", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Blocked</p>
              </div>
            </div>
            <div style={{ width: "58px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#888888", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "112px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>14:31:40</p>
            </div>
            <div style={{ width: "206px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Checklist size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#333840", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Approval requested</p>
              </div>
            </div>
            <div style={{ width: "190px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Rocket size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#333333", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>deploy-agent</p>
              </div>
            </div>
            <div style={{ width: "140px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fffaeb", boxShadow: "inset 0 0 0 1px rgba(255, 206, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#472c09", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Pending</p>
              </div>
            </div>
            <div style={{ width: "58px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#888888", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "112px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>14:30:12</p>
            </div>
            <div style={{ width: "206px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Refresh size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#333840", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Credential rotated</p>
              </div>
            </div>
            <div style={{ width: "190px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <ShieldKeyhole size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#333333", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Auton broker</p>
              </div>
            </div>
            <div style={{ width: "140px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Allowed</p>
              </div>
            </div>
            <div style={{ width: "58px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#888888", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "112px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>14:28:47</p>
            </div>
            <div style={{ width: "206px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Shield size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#333840", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "105px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Policy published</p>
              </div>
            </div>
            <div style={{ width: "190px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px #e7e9eb, inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "7px" }}>MC</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Maya Chen</p>
              </div>
            </div>
            <div style={{ width: "140px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#f4f1fe", boxShadow: "inset 0 0 0 1px rgba(169, 150, 242, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#24165e", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Changed</p>
              </div>
            </div>
            <div style={{ width: "58px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#888888", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 0px 13px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "112px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>14:27:03</p>
            </div>
            <div style={{ width: "206px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CircleCheck size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#333840", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Access granted</p>
              </div>
            </div>
            <div style={{ width: "190px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <DatabaseExport size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#333333", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>data-sync</p>
              </div>
            </div>
            <div style={{ width: "140px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "52px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Allowed</p>
              </div>
            </div>
            <div style={{ width: "58px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#888888", display: "block" }} />
            </div>
          </div>
          <div style={{ alignSelf: "stretch", height: "56px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12px 0px 12px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "112px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>14:25:51</p>
            </div>
            <div style={{ width: "206px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Ban size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#333840", display: "block" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "97px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Export blocked</p>
              </div>
            </div>
            <div style={{ width: "190px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <DatabaseExport size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#333333", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>data-sync-eu</p>
              </div>
            </div>
            <div style={{ width: "140px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#fff5f5", boxShadow: "inset 0 0 0 1px rgba(255, 125, 125, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#470909", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Blocked</p>
              </div>
            </div>
            <div style={{ width: "58px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#888888", display: "block" }} />
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "311px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>Last run, deploy-agent to prod-billing</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>decided in 2.1 ms</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "12px", boxShadow: "inset 0 0 0 1px #e2e4e5", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 14px 13px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #d7d9db", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "5px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>1</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Identity verified</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "300px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>agent certificate, spiffe://auton/platform/deploy-agent</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>0.3 ms</p>
            <CircleCheckSolid size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#07bc6d", display: "block" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 14px 13px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #d7d9db", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>2</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "100px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Credential valid</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "188px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>11 of 15 min left, scope aws:deploy</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>0.2 ms</p>
            <CircleCheckSolid size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#07bc6d", display: "block" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 14px 13px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #d7d9db", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>3</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "134px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Read-only by default</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>skipped, write action</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>0.1 ms</p>
            <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#888888", display: "block" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fff5f5", boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "12px 14px 13px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #d7d9db", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>4</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "161px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#470909", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Secrets never leave vault</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "215px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#470909", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>iam:PassRole on an admin role → block</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>1.4 ms</p>
            <CircleX size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#f14c43", display: "block" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, opacity: 0.55, display: "flex", flexDirection: "row", padding: "12px 14px 12px 14px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "999px", background: "#fafafa", boxShadow: "inset 0 0 0 1px #d7d9db", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#555555", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>5</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "217px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Production deploys need approval</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "177px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>not evaluated, earlier block wins</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", fontFamily: "'Geist Mono'", fontSize: "12px", fontWeight: 400, color: "#888888", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>—</p>
            <ChevronRight size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#888888", display: "block" }} />
          </div>
        </div>
      </div>
      <div style={{ flex: "1 1 0", minWidth: 0, alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "20px 40px 20px 40px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "13332px", boxShadow: "inset 0 0 0 1.33px #212121", overflow: "hidden" }} />
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "13332px", background: "#212121", boxShadow: "inset 0 0 0 1.33px #212121", overflow: "hidden", marginLeft: "-8px" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 400, color: "#444444", lineHeight: "1.100000023841858", letterSpacing: "-0.06em" }}>Auton</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "400px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "24px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "190px", fontFamily: "'Geist'", fontSize: "28px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "20px" }}>Welcome back</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.399999976158142", textBox: "trim-both cap alphabetic", height: "10px" }}>Sign in to see what your agents did while you were away.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box", position: "relative" }}>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 13px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <User size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, opacity: 0, color: "#555555", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "139px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Continue with Google</p>
                </div>
                <svg style={{ position: "absolute", left: "15.5px", top: "12px", width: "16px", height: "16px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0.853 0)" d="M7.14667 3.16667 C8.32667 3.16667 9.38333 3.57333 10.2167 4.36667 L12.5 2.08333 C11.1133 0.793333 9.30333 0 7.14667 0 C4.02 0 1.31667 1.79333 0 4.40667 L2.66 6.47 C3.29 4.57333 5.06 3.16667 7.14667 3.16667 Z" fill="#ea4335"/><path transform="matrix(1 0 0 1 8 6.666)" d="M7.66 1.51667 C7.66 0.993333 7.61 0.486667 7.53333 0 L0 0 L0 3.00667 L4.31333 3.00667 C4.12 3.99333 3.56 4.83333 2.72 5.4 L5.29667 7.4 C6.8 6.00667 7.66 3.94667 7.66 1.51667 Z" fill="#4285f4"/><path transform="matrix(1 0 0 1 0 4.406)" d="M3.51 5.12333 C3.35 4.64 3.25667 4.12667 3.25667 3.59333 C3.25667 3.06 3.34667 2.54667 3.51 2.06333 L0.85 0 C0.306667 1.08 0 2.3 0 3.59333 C0 4.88667 0.306667 6.10667 0.853333 7.18667 L3.51 5.12333 Z" fill="#fbbc05"/><path transform="matrix(1 0 0 1 0.85 9.527)" d="M7.15 6.47333 C9.31 6.47333 11.1267 5.76333 12.4467 4.53667 L9.87 2.53667 C9.15333 3.02 8.23 3.30333 7.15 3.30333 C5.06333 3.30333 3.29333 1.89667 2.66 0 L0 2.06333 C1.32 4.68 4.02333 6.47333 7.15 6.47333 Z" fill="#34a853"/></svg>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box", position: "relative" }}>
                <div style={{ flex: "1 1 0", minWidth: 0, height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 13px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <User size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, opacity: 0, color: "#555555", display: "block" }} />
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "130px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Continue with Apple</p>
                </div>
                <svg style={{ position: "absolute", left: "20px", top: "12px", width: "16px", height: "16px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.483 0)" d="M6.61801 4.59733 C5.98601 4.59733 5.00801 3.87867 3.97801 3.904 C2.61801 3.922 1.37134 4.69267 0.670675 5.91333 C-0.740658 8.36333 0.306675 11.982 1.68334 13.9733 C2.35868 14.9427 3.15534 16.0333 4.21134 15.9993 C5.22467 15.956 5.60468 15.3413 6.83467 15.3413 C8.05534 15.3413 8.40134 15.9993 9.47468 15.9733 C10.566 15.956 11.2587 14.9867 11.9253 14.008 C12.696 12.8827 13.016 11.7913 13.0333 11.7313 C13.0073 11.7227 10.912 10.9173 10.8867 8.49333 C10.8693 6.46667 12.54 5.49733 12.618 5.454 C11.6653 4.06067 10.2027 3.90467 9.69134 3.87 C8.35801 3.766 7.24134 4.59733 6.61801 4.59733 Z M8.87001 2.55333 C9.43201 1.87867 9.80334 0.935333 9.70001 0 C8.89534 0.0346667 7.92534 0.536667 7.34534 1.212 C6.82534 1.80933 6.37601 2.77067 6.49668 3.688 C7.38868 3.75733 8.30667 3.22933 8.86934 2.554" fill="#111111"/></svg>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, background: "#e2e4e5" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>or with email</p>
              <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, background: "#e2e4e5" }} />
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Email</p>
                </div>
                <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Mail size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#777777", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>maya@acme.com</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Password</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "116px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#328ff9", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Forgot password?</p>
                </div>
                <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #328ff9, 0px 0px 0px 4px rgba(46, 109, 232, 0.2)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                  <Lock size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#777777", display: "block" }} />
                  <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>••••••••••••</p>
                  <div style={{ width: "1px", height: "16px", flexShrink: 0, background: "#328ff9" }} />
                  <Eye size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#777777", display: "block" }} />
                </div>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <svg style={{ width: "12px", height: "12px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.5 3.25)" d="M0.53033 3.21967 C0.237437 2.92678 -0.237437 2.92678 -0.53033 3.21967 C-0.823223 3.51256 -0.823223 3.98744 -0.53033 4.28033 L0 3.75 L0.53033 3.21967 Z M1.75 5.5 L1.21967 6.03033 C1.36246 6.17312 1.5568 6.2523 1.75872 6.24995 C1.96064 6.2476 2.15308 6.16393 2.29252 6.01786 L1.75 5.5 Z M7.54252 0.517857 C7.82852 0.218233 7.81748 -0.256512 7.51786 -0.542517 C7.21823 -0.828521 6.74349 -0.817481 6.45748 -0.517857 L7 0 L7.54252 0.517857 Z M7 0 L6.45748 -0.517857 L1.20748 4.98214 L1.75 5.5 L2.29252 6.01786 L7.54252 0.517857 L7 0 Z M1.75 5.5 L2.28033 4.96967 L0.53033 3.21967 L0 3.75 L-0.53033 4.28033 L1.21967 6.03033 L1.75 5.5 Z" fill="#ffffff"/></svg>
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "194px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Keep me signed in for 30 days</p>
            </div>
            <div style={{ alignSelf: "stretch", height: "40px", flexShrink: 0, borderRadius: "10px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "0px 14px 0px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Login size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "44px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Sign in</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "216px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>
                <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#777777", lineHeight: "1.100000023841858" }}>{"New to Auton? "}</span>
                <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#328ff9", lineHeight: "1.100000023841858" }}>Create an account</span>
              </p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>© 2026 Auton</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "117px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Privacy   Terms   Help</p>
        </div>
      </div>
    </div>
  );
}
