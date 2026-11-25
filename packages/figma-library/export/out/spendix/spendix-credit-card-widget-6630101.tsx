// Credit card widget (spendix, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { Eye, Key, Loader, Lock, Wifi } from "ingotui-icons/react/stroke-rounded";

export function CreditCardWidget() {
  return (
    <div style={{ width: "452px", height: "768px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", height: "48px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e8f0", display: "flex", flexDirection: "row", padding: "0px 16px 1px 16px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "113px", lineHeight: "21px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 500, color: "#0f172a" }}>Corporate card</p>
        </div>
        <div style={{ height: "26px", flexShrink: 0, borderRadius: "16px", background: "#e7fff0", display: "flex", flexDirection: "row", padding: "0px 12px 0px 8px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Loader size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#16a34a", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0a7854" }}>Active</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "16px 16px 16px 16px", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "420px", height: "240px", flexShrink: 0, borderRadius: "12px", background: "linear-gradient(90deg, #f9f6ff 0%, #e4e4ea 100%), linear-gradient(#f8f8f8, #f8f8f8)", boxShadow: "inset 0 0 0 0.8px #f3f3f3", overflow: "hidden", position: "relative" }}>
          <p style={{ position: "absolute", left: "15.7px", top: "15.7px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 500, color: "#040404" }}>Ethan Cole</p>
          <Wifi size={18} strokeWidth={2} style={{ position: "absolute", left: "402px", top: "15px", width: "18px", height: "18px", transform: "rotate(90deg)", transformOrigin: "top left", color: "#040404", display: "block", flexShrink: 0 }} />
          <p style={{ position: "absolute", left: "12.5px", top: "190px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 600, color: "#040404" }}>Spendix Corporate</p>
          <p style={{ position: "absolute", left: "374.5px", top: "192px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 500, color: "#040404" }}>09/29</p>
          <p style={{ position: "absolute", left: "12.5px", top: "210px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "118px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12.5px", fontWeight: 600, color: "#040404", letterSpacing: "0.08em" }}>••••  ••••  ••••  7731</p>
          <div style={{ position: "absolute", left: "16px", top: "88px", width: "36px", height: "27px", borderRadius: "5px", background: "linear-gradient(90deg, #eddba8 0%, #c7a35c 100%)", boxShadow: "inset 0 0 0 0.75px rgba(168, 134, 63, 0.45)", overflow: "hidden" }}>
            <div style={{ position: "absolute", left: "0px", top: "9px", width: "36px", height: "0.75px", background: "rgba(168, 134, 63, 0.5)" }} />
            <div style={{ position: "absolute", left: "0px", top: "18px", width: "36px", height: "0.75px", background: "rgba(168, 134, 63, 0.5)" }} />
            <div style={{ position: "absolute", left: "13px", top: "0px", width: "0.75px", height: "27px", background: "rgba(168, 134, 63, 0.5)" }} />
            <div style={{ position: "absolute", left: "23px", top: "0px", width: "0.75px", height: "27px", background: "rgba(168, 134, 63, 0.5)" }} />
          </div>
          <div style={{ position: "absolute", left: "368px", top: "206px", width: "36px", height: "24px", borderRadius: "4.8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10px", fontWeight: 700, color: "#1a1f71" }}>VISA</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "60px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Eye size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#0f172a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "73px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Show details</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "60px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Lock size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#0f172a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "38px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Freeze</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "60px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Key size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#0f172a", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Set PIN</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "60px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "column", padding: "1px 9px 1px 9px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg width={18} height={18} viewBox="0 0 24 24" style={{ width: "18px", height: "18px", flexShrink: 0, color: "#0f172a", display: "block" }}><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor" /></svg>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#0f172a" }}>Apple Wallet</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Monthly limit</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$1,180.00 spent</p>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>of $3,000, 39% used</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", height: "8px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "163px", height: "8px", borderRadius: "3px", background: "linear-gradient(90deg, #719af2 0%, #2563eb 100%)", boxShadow: "inset 0 0 0 1px rgba(29, 77, 183, 0.38), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 6px 0px rgba(255, 255, 255, 0.18), 0px 1px 1.5px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "167px", top: "0px", width: "251px", height: "8px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="251" height="8" viewBox="0 0 251 8" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 8 L0 8 L0.5 8 L0.5 0 L0 0 Z M5.97971 0 L5.47971 0 L5.47971 8 L5.97971 8 L6.47971 8 L6.47971 0 L5.97971 0 Z M11.9594 0 L11.4594 0 L11.4594 8 L11.9594 8 L12.4594 8 L12.4594 0 L11.9594 0 Z M17.9207 0 L17.4207 0 L17.4207 8 L17.9207 8 L18.4207 8 L18.4207 0 L17.9207 0 Z M23.9004 0 L23.4004 0 L23.4004 8 L23.9004 8 L24.4004 8 L24.4004 0 L23.9004 0 Z M29.8801 0 L29.3801 0 L29.3801 8 L29.8801 8 L30.3801 8 L30.3801 0 L29.8801 0 Z M35.8598 0 L35.3598 0 L35.3598 8 L35.8598 8 L36.3598 8 L36.3598 0 L35.8598 0 Z M41.8395 0 L41.3395 0 L41.3395 8 L41.8395 8 L42.3395 8 L42.3395 0 L41.8395 0 Z M47.8007 0 L47.3007 0 L47.3007 8 L47.8007 8 L48.3007 8 L48.3007 0 L47.8007 0 Z M53.7804 0 L53.2804 0 L53.2804 8 L53.7804 8 L54.2804 8 L54.2804 0 L53.7804 0 Z M59.7601 0 L59.2601 0 L59.2601 8 L59.7601 8 L60.2601 8 L60.2601 0 L59.7601 0 Z M65.7399 0 L65.2399 0 L65.2399 8 L65.7399 8 L66.2399 8 L66.2399 0 L65.7399 0 Z M71.7196 0 L71.2196 0 L71.2196 8 L71.7196 8 L72.2196 8 L72.2196 0 L71.7196 0 Z M77.6993 0 L77.1993 0 L77.1993 8 L77.6993 8 L78.1993 8 L78.1993 0 L77.6993 0 Z M83.6605 0 L83.1605 0 L83.1605 8 L83.6605 8 L84.1605 8 L84.1605 0 L83.6605 0 Z M89.6402 0 L89.1402 0 L89.1402 8 L89.6402 8 L90.1402 8 L90.1402 0 L89.6402 0 Z M95.6199 0 L95.1199 0 L95.1199 8 L95.6199 8 L96.1199 8 L96.1199 0 L95.6199 0 Z M101.6 0 L101.1 0 L101.1 8 L101.6 8 L102.1 8 L102.1 0 L101.6 0 Z M107.579 0 L107.079 0 L107.079 8 L107.579 8 L108.079 8 L108.079 0 L107.579 0 Z M113.541 0 L113.041 0 L113.041 8 L113.541 8 L114.041 8 L114.041 0 L113.541 0 Z M119.52 0 L119.02 0 L119.02 8 L119.52 8 L120.02 8 L120.02 0 L119.52 0 Z M125.5 0 L125 0 L125 8 L125.5 8 L126 8 L126 0 L125.5 0 Z M131.48 0 L130.98 0 L130.98 8 L131.48 8 L131.98 8 L131.98 0 L131.48 0 Z M137.459 0 L136.959 0 L136.959 8 L137.459 8 L137.959 8 L137.959 0 L137.459 0 Z M143.421 0 L142.921 0 L142.921 8 L143.421 8 L143.921 8 L143.921 0 L143.421 0 Z M149.4 0 L148.9 0 L148.9 8 L149.4 8 L149.9 8 L149.9 0 L149.4 0 Z M155.38 0 L154.88 0 L154.88 8 L155.38 8 L155.88 8 L155.88 0 L155.38 0 Z M161.36 0 L160.86 0 L160.86 8 L161.36 8 L161.86 8 L161.86 0 L161.36 0 Z M167.339 0 L166.839 0 L166.839 8 L167.339 8 L167.839 8 L167.839 0 L167.339 0 Z M173.301 0 L172.801 0 L172.801 8 L173.301 8 L173.801 8 L173.801 0 L173.301 0 Z M179.28 0 L178.78 0 L178.78 8 L179.28 8 L179.78 8 L179.78 0 L179.28 0 Z M185.26 0 L184.76 0 L184.76 8 L185.26 8 L185.76 8 L185.76 0 L185.26 0 Z M191.24 0 L190.74 0 L190.74 8 L191.24 8 L191.74 8 L191.74 0 L191.24 0 Z M197.22 0 L196.72 0 L196.72 8 L197.22 8 L197.72 8 L197.72 0 L197.22 0 Z M203.199 0 L202.699 0 L202.699 8 L203.199 8 L203.699 8 L203.699 0 L203.199 0 Z M209.161 0 L208.661 0 L208.661 8 L209.161 8 L209.661 8 L209.661 0 L209.161 0 Z M215.14 0 L214.64 0 L214.64 8 L215.14 8 L215.64 8 L215.64 0 L215.14 0 Z M221.12 0 L220.62 0 L220.62 8 L221.12 8 L221.62 8 L221.62 0 L221.12 0 Z M227.1 0 L226.6 0 L226.6 8 L227.1 8 L227.6 8 L227.6 0 L227.1 0 Z M233.079 0 L232.579 0 L232.579 8 L233.079 8 L233.579 8 L233.579 0 L233.079 0 Z M239.041 0 L238.541 0 L238.541 8 L239.041 8 L239.541 8 L239.541 0 L239.041 0 Z M245.02 0 L244.52 0 L244.52 8 L245.02 8 L245.52 8 L245.52 0 L245.02 0 Z M251 0 L250.5 0 L250.5 8 L251 8 L251.5 8 L251.5 0 L251 0 Z" fill="#2563eb" fillOpacity="0.35"/></svg>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "103px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#1f1f22" }}>$1,820 left in April</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "75px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Resets 01/05</p>
            </div>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "1px", flexShrink: 0, background: "#ededed" }} />
        <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 0px 4px 0px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "107px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Recent on this card</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "55px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#2563eb" }}>View all 6</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 0px 11px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, borderRadius: "5.38px", background: "#1f1f21", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>S</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "74px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Sweetgreen</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Team lunch</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$42.80</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "123px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#9f6707" }}>15/04, receipt missing</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 0px 11px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, borderRadius: "5.38px", background: "#111111", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>U</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Uber</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Ride to JFK</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$64.20</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "122px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#9f6707" }}>12/04, receipt missing</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #ededed", overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 0px 11px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, borderRadius: "5.38px", background: "#f6c200", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "8px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 600, color: "#0f172a" }}>H</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "34px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Hertz</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Car rental, Boston</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$264.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "126px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#9f6707" }}>09/04, receipt missing</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "10px 0px 10px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e7e7", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "19.2px", height: "19.2px", flexShrink: 0, borderRadius: "5.38px", background: "#a3112f", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "10px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "11px", fontWeight: 600, color: "#ffffff" }}>M</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Marriott</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "80px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Boston, 1 night</p>
              </div>
            </div>
            <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "57px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>$389.00</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "131px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>08/04, receipt matched</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
