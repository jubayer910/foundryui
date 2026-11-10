// Create offer modal (mailpulse, Modals) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Calendar as CalendarBulk, Copy as CopyBulk, InfoCircle as InfoCircleBulk, Link as LinkBulk, Tag as TagBulk, Users as UsersBulk } from "foundryui-icons/react/bulk";
import { Check, ChevronDown, Tag, X } from "foundryui-icons/react/stroke-rounded";

export function CreateOfferModal() {
  return (
    <div style={{ width: "600px", height: "550.8px", borderRadius: "14.6px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e3e3e3, 0px 21.9px 43.9px -11px rgba(13, 13, 18, 0.16)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "16.5px 16.5px 14.6px 16.5px", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "29.2px", height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "rgba(124, 83, 249, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <TagBulk size={16.5} style={{ width: "16.5px", height: "16.5px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.6px", fontWeight: 500, color: "#000000" }}>Create offer</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Discounts and trials for your paid plans.</p>
        </div>
        <div style={{ width: "25.6px", height: "25.6px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", height: "0.9px", flexShrink: 0, background: "#eeeeee" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "14.6px 16.5px 16.5px 16.5px", gap: "16.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "14.6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Offer name</p>
            <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 10.1px 0.9px 10.1px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>Holiday 30% off</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Type</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8.2px", background: "#f5f5f5", display: "flex", flexDirection: "row", padding: "2.7px 2.7px 2.7px 2.7px", gap: "1.8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "0px 0px 0.9px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "4.6px 9.1px 4.6px 9.1px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#000000" }}>Percent off</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "4.6px 9.1px 4.6px 9.1px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#6c6c6c" }}>Fixed amount</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "6.4px", display: "flex", flexDirection: "row", padding: "4.6px 9.1px 4.6px 9.1px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#6c6c6c" }}>Free trial</p>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "100px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Discount</p>
              <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 10.1px 0.9px 10.1px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>30%</p>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Duration</p>
              <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 10.1px 0.9px 10.1px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>First 3 months</p>
                <ChevronDown size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "7.3px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Applies to</p>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "18.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "14.6px", height: "14.6px", flexShrink: 0, borderRadius: "3.7px", background: "rgba(124, 83, 249, 0.12)", boxShadow: "inset 0 0 0 0.9px #7c53f9", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Check size={11} style={{ width: "11px", height: "11px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>Monthly</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "14.6px", height: "14.6px", flexShrink: 0, borderRadius: "3.7px", background: "rgba(124, 83, 249, 0.12)", boxShadow: "inset 0 0 0 0.9px #7c53f9", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <Check size={11} style={{ width: "11px", height: "11px", flexShrink: 0, color: "#7c53f9", display: "block" }} />
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>Annual</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "14.6px", height: "14.6px", flexShrink: 0, borderRadius: "3.7px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #d0d3d9", display: "flex", flexDirection: "row", padding: "0.9px 0.9px 0.9px 0.9px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#6c6c6c" }}>Founding</p>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Ends</p>
            <div style={{ alignSelf: "stretch", height: "32.9px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 10.1px 0.9px 10.1px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CalendarBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#222222" }}>Jan 6, 2027</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#989898" }}>Stops at 11:59 PM in your time zone.</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "0.9px", flexShrink: 0, background: "#eeeeee" }} />
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "11px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#222222" }}>New readers only</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#989898" }}>Current paid members won’t see this offer.</p>
            </div>
            <div style={{ width: "27.4px", height: "16.5px", flexShrink: 0, borderRadius: "8.2px", background: "#7c53f9", position: "relative" }}>
              <svg style={{ position: "absolute", left: "12.8px", top: "1.8px", width: "12.8px", height: "12.8px", display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="12.79" height="12.79" viewBox="0 0 12.79 12.79" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M12.79 6.395 C12.79 9.92686 9.92686 12.79 6.395 12.79 C2.86314 12.79 0 9.92686 0 6.395 C0 2.86314 2.86314 0 6.395 0 C9.92686 0 12.79 2.86314 12.79 6.395 Z" fill="#ffffff"/></svg>
            </div>
          </div>
        </div>
        <div style={{ width: "236px", alignSelf: "stretch", flexShrink: 0, borderRadius: "12.8px", background: "#fafafa", boxShadow: "inset 0 0 0 0.9px #ededed", display: "flex", flexDirection: "column", padding: "13.7px 13.7px 13.7px 13.7px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "9.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 500, color: "#a6a6a6", letterSpacing: "0.02em", textTransform: "uppercase" }}>Preview</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "11px", background: "#ffffff", boxShadow: "0px 0px 0.9px 0px rgba(0, 0, 0, 0.25), 0px 0.9px 1.8px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "12.8px 12.8px 12.8px 12.8px", gap: "9.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#000000" }}>The Creator Brief</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#989898" }}>Paid · Monthly plan</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "0.9px", flexShrink: 0, background: "#eeeeee" }} />
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#989898", textDecoration: "line-through" }}>$5</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20.1px", fontWeight: 500, color: "#202020", letterSpacing: "-0.02em" }}>$3.50</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#747474" }}>/ month</p>
                </div>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#989898" }}>for 3 months</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "25.6px", flexShrink: 0, borderRadius: "91.4px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 4.6px 5.5px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "row", padding: "0px 11px 0px 11px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#ffffff" }}>Subscribe</p>
              </div>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#989898" }}>Then $5/month. Cancel anytime.</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "12.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.1px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "22.9px", height: "22.9px", flexShrink: 0, borderRadius: "5.5px", background: "#ffffff", boxShadow: "0px 0.9px 1.8px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <UsersBulk size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#141b34", display: "block" }} />
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>17,136 eligible readers</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 400, color: "#989898" }}>Free readers and new signups</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.5px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 500, color: "#222222" }}>Shareable link</p>
              <div style={{ alignSelf: "stretch", height: "29.2px", flexShrink: 0, borderRadius: "7.3px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "0.9px 10.1px 0.9px 10.1px", gap: "7.3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <LinkBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#222222" }}>creatorbrief.co/holiday30</p>
                <CopyBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.9px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "13.7px 16.5px 12.8px 16.5px", gap: "9.1px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <InfoCircleBulk size={12.8} style={{ width: "12.8px", height: "12.8px", flexShrink: 0, color: "#989898", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.9px", fontWeight: 400, color: "#989898" }}>Applies at checkout and in emails</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "91.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.9px #e8e8e8", display: "flex", flexDirection: "row", padding: "6.1px 9.1px 6.1px 9.1px", gap: "5.5px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 400, color: "#6c6c6c" }}>Cancel</p>
        </div>
        <div style={{ height: "29.2px", flexShrink: 0, borderRadius: "91.4px", background: "linear-gradient(180deg, #686868 0%, #222222 100%)", boxShadow: "0px 8.2px 7.3px 0px rgba(0, 0, 0, 0.14)", display: "flex", flexDirection: "column", padding: "7.3px 11px 7.3px 11px", gap: "9.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.5px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Tag size={14.6} style={{ width: "14.6px", height: "14.6px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.8px", fontWeight: 500, color: "#ffffff" }}>Create offer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
