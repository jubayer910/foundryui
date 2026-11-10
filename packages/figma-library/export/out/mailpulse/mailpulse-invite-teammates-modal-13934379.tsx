// Invite teammates modal (mailpulse, Modals) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { ChartLine as ChartLineBulk, CreditCard as CreditCardBulk, Edit as EditBulk, InfoCircle as InfoCircleBulk, Shield as ShieldBulk, UserPlus as UserPlusBulk } from "foundryui-icons/react/bulk";
import { Send, X } from "foundryui-icons/react/stroke-rounded";

export function InviteTeammatesModal() {
  return (
    <div style={{ width: "520px", height: "509.9px", borderRadius: "14.6px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e3e3e3, 0px 21.9px 43.9px -11px rgba(13, 13, 18, 0.16)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "16.5px 16.5px 14.6px 16.5px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "29.2px", height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "rgba(124, 83, 249, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <UserPlusBulk size={16.5} style={{ width: "16.5px", height: "16.5px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 500, color: "#000000" }}>Invite teammates</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>They’ll get an email to join The Creator Brief.</p>
        </div>
        <div style={{ width: "25.6px", height: "25.6px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "0.9px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "14.6px 16.5px 16.5px 16.5px", gap: "14.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Email addresses</p>
          <div style={{ alignSelf: "stretch", height: "56.7px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 1.4px #7c53f9, 0px 0px 0px 2.7px rgba(124, 83, 249, 0.16)", display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "5.5px", padding: "8.7px 10.5px 8.7px 10.5px", columnGap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, borderRadius: "5.5px", background: "#fafafa", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "3.7px 6.4px 3.7px 8.2px", gap: "4.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#222222" }}>lena@creatorbrief.co</p>
              <X size={10.1} style={{ width: "10.1px", height: "10.1px", flexShrink: 0, color: "#989898", display: "block" }} />
            </div>
            <div style={{ flexShrink: 0, borderRadius: "5.5px", background: "#fafafa", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "3.7px 6.4px 3.7px 8.2px", gap: "4.6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#222222" }}>omar@studio.co</p>
              <X size={10.1} style={{ width: "10.1px", height: "10.1px", flexShrink: 0, color: "#989898", display: "block" }} />
            </div>
            <div style={{ height: "22.3px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "0.9px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "0.9px", height: "14.6px", flexShrink: 0, background: "#7c53f9" }} />
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#989898" }}>Add more emails…</p>
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#989898" }}>Paste a list to add many at once. People already on the team are skipped.</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Role</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "9.1px", columnGap: "9.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "237.5px", flexShrink: 0, borderRadius: "9.1px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "column", padding: "11px 11.9px 11px 11.9px", gap: "3.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ShieldBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>Admin</p>
                <div style={{ width: "14.6px", height: "14.6px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 0px 0px 20.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Everything except billing</p>
              </div>
            </div>
            <div style={{ width: "237.5px", flexShrink: 0, borderRadius: "9.1px", background: "#ffffff", boxShadow: "inset 0 0 0 1.4px #7c53f9", display: "flex", flexDirection: "column", padding: "11px 11.9px 11px 11.9px", gap: "3.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <EditBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>Editor</p>
                <div style={{ width: "14.6px", height: "14.6px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 4.6px #7c53f9", display: "flex", flexDirection: "row", padding: "4.6px 4.6px 4.6px 4.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 0px 0px 20.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Write and send campaigns</p>
              </div>
            </div>
            <div style={{ width: "237.5px", flexShrink: 0, borderRadius: "9.1px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "column", padding: "11px 11.9px 11px 11.9px", gap: "3.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <ChartLineBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>Analyst</p>
                <div style={{ width: "14.6px", height: "14.6px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 0px 0px 20.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>View reports and analytics</p>
              </div>
            </div>
            <div style={{ width: "237.5px", flexShrink: 0, borderRadius: "9.1px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "column", padding: "11px 11.9px 11px 11.9px", gap: "3.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <CreditCardBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#141b34", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>Billing</p>
                <div style={{ width: "14.6px", height: "14.6px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", padding: "0px 0px 0px 20.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Invoices and plan only</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Message (optional)</p>
          <div style={{ alignSelf: "stretch", height: "58.5px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.1px 10.1px 10.1px 10.1px", gap: "7.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#989898" }}>Add a personal note to the invite email…</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.9px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "13.7px 16.5px 12.8px 16.5px", gap: "9.1px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <InfoCircleBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#989898", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>1 seat left on Pro · next seat $8/mo</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "91.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.1px 9.1px 6.1px 9.1px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#6c6c6c" }}>Cancel</p>
        </div>
        <div style={{ height: "29.2px", flexShrink: 0, borderRadius: "91.4px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.2px 7.3px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.3px 11px 7.3px 11px", gap: "9.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Send size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#ffffff" }}>Send 2 invites</p>
          </div>
        </div>
      </div>
    </div>
  );
}
