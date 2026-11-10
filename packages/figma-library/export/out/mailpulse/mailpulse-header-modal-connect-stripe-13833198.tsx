// Header modal, Connect Stripe (mailpulse, Modals) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Mail as MailBulk } from "foundryui-icons/react/bulk";
import { Link, X } from "foundryui-icons/react/stroke-rounded";

export function HeaderModalConnectStripe() {
  return (
    <div style={{ width: "458.2px", height: "119.5px", display: "flex", flexDirection: "column", padding: "16.5px 16.5px 14.6px 16.5px", gap: "12.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "9.1px", background: "#222222", boxShadow: "0px 0.9px 1.8px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <MailBulk size={18.3} style={{ width: "18.3px", height: "18.3px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "3.7px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "2.7px", height: "2.7px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="2.74" height="2.74" viewBox="0 0 2.74 2.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M2.74 1.37 C2.74 2.12663 2.12663 2.74 1.37 2.74 C0.61337 2.74 0 2.12663 0 1.37 C0 0.61337 0.61337 0 1.37 0 C2.12663 0 2.74 0.61337 2.74 1.37 Z" fill="#c4c4c4"/></svg>
            <Link size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#989898", display: "block" }} />
            <svg style={{ width: "2.7px", height: "2.7px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="2.74" height="2.74" viewBox="0 0 2.74 2.74" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M2.74 1.37 C2.74 2.12663 2.12663 2.74 1.37 2.74 C0.61337 2.74 0 2.12663 0 1.37 C0 0.61337 0.61337 0 1.37 0 C2.12663 0 2.74 0.61337 2.74 1.37 Z" fill="#c4c4c4"/></svg>
          </div>
          <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "9.1px", background: "#ffffff", boxShadow: "0px 0.9px 1.8px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg width={20} height={20} viewBox="0 0 24 24" style={{ width: "20px", height: "20px", flexShrink: 0, color: "#635bff", display: "block" }}><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" fill="currentColor" /></svg>
          </div>
        </div>
        <div style={{ width: "25.6px", height: "25.6px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 500, color: "#000000" }}>Connect Stripe</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Charge for paid tiers and track revenue in MailPulse.</p>
      </div>
    </div>
  );
}
