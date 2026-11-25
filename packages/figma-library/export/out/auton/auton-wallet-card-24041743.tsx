// Wallet card (auton, Cards and panels) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { Bolt, DatabaseExport, FileInvoice, Headset, Rocket } from "ingotui-icons/react/stroke-rounded";

export function WalletCard() {
  return (
    <div style={{ width: "480px", height: "592px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e4e5, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "20px 20px 4px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #eff1f2", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Bolt size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#328ff9", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858" }}>Run credits</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "181px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858" }}>Team plan, cycle Nov 1 to Nov 30</p>
        </div>
        <div style={{ height: "24px", flexShrink: 0, borderRadius: "9999px", background: "#ebf6ff", boxShadow: "inset 0 0 0 1px rgba(125, 181, 255, 0.2)", display: "flex", flexDirection: "row", padding: "11px 11px 11px 11px", gap: "10px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "84px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#0a2447", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Day 26 of 30</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "16px 20px 20px 20px", gap: "24px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "132px", height: "132px", flexShrink: 0, overflow: "hidden", position: "relative" }}>
          <svg style={{ position: "absolute", left: "0px", top: "0px", width: "132px", height: "132px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="132" height="132" viewBox="0 0 132 132" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M132 66 C132 102.451 102.451 132 66 132 C29.5492 132 0 102.451 0 66 C0 29.5492 29.5492 0 66 0 C102.451 0 132 29.5492 132 66 Z M11.88 66 C11.88 95.8896 36.1104 120.12 66 120.12 C95.8896 120.12 120.12 95.8896 120.12 66 C120.12 36.1104 95.8896 11.88 66 11.88 C36.1104 11.88 11.88 36.1104 11.88 66 Z" fill="#328ff9" fillOpacity="0.14"/></svg>
          <svg style={{ position: "absolute", left: "0px", top: "0px", width: "132px", height: "132px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="132" height="132" viewBox="0 0 132 132" fill="none" overflow="visible"><defs><linearGradient id="g1_7k77" gradientUnits="userSpaceOnUse" x1="66.00" y1="0.00" x2="66.00" y2="132.00"><stop offset="0" stopColor="#5aa7fb"/><stop offset="1" stopColor="#328ff9"/></linearGradient></defs><path transform="matrix(1 0 0 1 0 0)" d="M66 6.12843e-14 C77.848 -5.17894e-07 89.4776 3.18934 99.6681 9.23329 C109.859 15.2772 118.234 23.9529 123.916 34.3497 C129.598 44.7465 132.376 56.4811 131.959 68.3218 C131.542 80.1625 127.946 91.6726 121.547 101.644 C115.148 111.616 106.184 119.681 95.5933 124.994 C85.003 130.306 73.178 132.67 61.3593 131.837 C49.5406 131.004 38.1641 127.004 28.4238 120.259 C18.6835 113.513 10.9385 104.27 6.00193 93.4997 L16.8016 88.5497 C20.8496 97.3816 27.2004 104.961 35.1875 110.492 C43.1745 116.024 52.5033 119.303 62.1946 119.986 C71.886 120.669 81.5825 118.731 90.2665 114.375 C98.9505 110.018 106.302 103.405 111.549 95.2283 C116.796 87.0516 119.745 77.6132 120.087 67.9039 C120.428 58.1945 118.15 48.5722 113.491 40.0468 C108.832 31.5214 101.964 24.4073 93.6078 19.4513 C85.2516 14.4953 75.7154 11.88 66 11.88 L66 6.12843e-14 Z" fill="url(#g1_7k77)"/></svg>
          <div style={{ position: "absolute", left: "41.5px", top: "43.5px", width: "49px", height: "45px", overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "49px", fontFamily: "'Geist'", fontSize: "24px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858" }}>68%</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "27px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858" }}>used</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858" }}>Credits left</p>
          <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "99px", fontFamily: "'Geist'", fontSize: "32px", fontWeight: 400, color: "#111111", lineHeight: "1.100000023841858" }}>31,840</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858" }}>of 100,000</p>
          </div>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.399999976158142" }}>68,160 used so far, on pace for 78,648</p>
          <div style={{ flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 0px 0px 0px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#328ff9", boxShadow: "inset 0px 4px 7px 0px rgba(255, 255, 255, 0.5)", display: "flex", flexDirection: "row", padding: "0px 14px 0px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "16px", height: "16px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 8 3.334)" d="M0.75 0 C0.75 -0.414214 0.414214 -0.75 0 -0.75 C-0.414214 -0.75 -0.75 -0.414214 -0.75 0 L0 0 L0.75 0 Z M-0.75 9.33333 C-0.75 9.74755 -0.414214 10.0833 0 10.0833 C0.414214 10.0833 0.75 9.74755 0.75 9.33333 L0 9.33333 L-0.75 9.33333 Z M0 0 L-0.75 0 L-0.75 9.33333 L0 9.33333 L0.75 9.33333 L0.75 0 L0 0 Z" fill="#ffffff"/><path transform="matrix(1 0 0 1 3.333 8)" d="M0 -0.75 C-0.414214 -0.75 -0.75 -0.414214 -0.75 0 C-0.75 0.414214 -0.414214 0.75 0 0.75 L0 0 L0 -0.75 Z M9.33333 0.75 C9.74755 0.75 10.0833 0.414214 10.0833 0 C10.0833 -0.414214 9.74755 -0.75 9.33333 -0.75 L9.33333 0 L9.33333 0.75 Z M0 0 L0 0.75 L9.33333 0.75 L9.33333 0 L9.33333 -0.75 L0 -0.75 L0 0 Z" fill="#ffffff"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "72px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Buy credits</p>
            </div>
            <div style={{ height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e7e9eb, 0px 2px 4px 0px rgba(0, 0, 0, 0.02)", display: "flex", flexDirection: "row", padding: "1px 15px 1px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "16px", height: "16px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.667 2.676)" d="M9.92381 4.75994 C9.98082 5.17021 10.3596 5.45658 10.7699 5.39957 C11.1802 5.34255 11.4665 4.96374 11.4095 4.55347 L10.6667 4.65671 L9.92381 4.75994 Z M-0.358991 3.03495 C-0.518282 3.41731 -0.337448 3.85641 0.0449117 4.0157 C0.427272 4.17499 0.866367 3.99415 1.02566 3.61179 L0.333333 3.32337 L-0.358991 3.03495 Z M0.75 0.656705 C0.75 0.242492 0.414214 -0.0932947 0 -0.0932947 C-0.414214 -0.0932947 -0.75 0.242492 -0.75 0.656705 L0 0.656705 L0.75 0.656705 Z M0 3.32337 L-0.75 3.32337 C-0.75 3.73759 -0.414214 4.07337 1.66533e-16 4.07337 L0 3.32337 Z M2.66667 4.07337 C3.08088 4.07337 3.41667 3.73759 3.41667 3.32337 C3.41667 2.90916 3.08088 2.57337 2.66667 2.57337 L2.66667 3.32337 L2.66667 4.07337 Z M10.6667 4.65671 L11.4095 4.55347 C11.2238 3.21734 10.604 1.97932 9.64549 1.03012 L9.11776 1.56304 L8.59002 2.09595 C9.31475 2.81364 9.78341 3.7497 9.92381 4.75994 L10.6667 4.65671 Z M9.11776 1.56304 L9.64549 1.03012 C8.68698 0.0809247 7.44297 -0.526797 6.10509 -0.699426 L6.00911 0.044407 L5.91314 0.78824 C6.9247 0.918765 7.8653 1.37826 8.59002 2.09595 L9.11776 1.56304 Z M6.00911 0.044407 L6.10509 -0.699426 C4.76721 -0.872056 3.40969 -0.600017 2.24163 0.0747849 L2.6168 0.724202 L2.99198 1.37362 C3.87514 0.863403 4.90157 0.657715 5.91314 0.78824 L6.00911 0.044407 Z M2.6168 0.724202 L2.24163 0.0747849 C1.07356 0.749587 0.159772 1.78972 -0.358991 3.03495 L0.333333 3.32337 L1.02566 3.61179 C1.41789 2.67028 2.10881 1.88384 2.99198 1.37362 L2.6168 0.724202 Z M0 0.656705 L-0.75 0.656705 L-0.75 3.32337 L0 3.32337 L0.75 3.32337 L0.75 0.656705 L0 0.656705 Z M0 3.32337 L0 4.07337 L2.66667 4.07337 L2.66667 3.32337 L2.66667 2.57337 L0 2.57337 L0 3.32337 Z" fill="#777777"/><path transform="matrix(1 0 0 1 2.667 8.666)" d="M0.742861 -0.103236 C0.685845 -0.513507 0.307034 -0.799877 -0.103236 -0.742861 C-0.513507 -0.685845 -0.799877 -0.307034 -0.742861 0.103236 L0 0 L0.742861 -0.103236 Z M11.0257 1.62176 C11.1849 1.23939 11.0041 0.8003 10.6218 0.641009 C10.2394 0.481718 9.8003 0.662552 9.64101 1.04491 L10.3333 1.33333 L11.0257 1.62176 Z M9.91667 4 C9.91667 4.41421 10.2525 4.75 10.6667 4.75 C11.0809 4.75 11.4167 4.41421 11.4167 4 L10.6667 4 L9.91667 4 Z M10.6667 1.33333 L11.4167 1.33333 C11.4167 0.91912 11.0809 0.583333 10.6667 0.583333 L10.6667 1.33333 Z M8 0.583333 C7.58579 0.583333 7.25 0.91912 7.25 1.33333 C7.25 1.74755 7.58579 2.08333 8 2.08333 L8 1.33333 L8 0.583333 Z M0 0 L-0.742861 0.103236 C-0.557177 1.43937 0.062661 2.67738 1.02117 3.62658 L1.54891 3.09367 L2.07664 2.56076 C1.35191 1.84307 0.883256 0.907009 0.742861 -0.103236 L0 0 Z M1.54891 3.09367 L1.02117 3.62658 C1.97968 4.57578 3.22369 5.1835 4.56157 5.35613 L4.65755 4.6123 L4.75353 3.86847 C3.74196 3.73794 2.80137 3.27844 2.07664 2.56076 L1.54891 3.09367 Z M4.65755 4.6123 L4.56157 5.35613 C5.89945 5.52876 7.25698 5.25672 8.42504 4.58192 L8.04987 3.9325 L7.67469 3.28309 C6.79152 3.7933 5.7651 3.99899 4.75353 3.86847 L4.65755 4.6123 Z M8.04987 3.9325 L8.42504 4.58192 C9.5931 3.90712 10.5069 2.86699 11.0257 1.62176 L10.3333 1.33333 L9.64101 1.04491 C9.24877 1.98643 8.55786 2.77287 7.67469 3.28309 L8.04987 3.9325 Z M10.6667 4 L11.4167 4 L11.4167 1.33333 L10.6667 1.33333 L9.91667 1.33333 L9.91667 4 L10.6667 4 Z M10.6667 1.33333 L10.6667 0.583333 L8 0.583333 L8 1.33333 L8 2.08333 L10.6667 2.08333 L10.6667 1.33333 Z" fill="#777777"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>Auto top-up</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "17px 20px 12px 20px", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "118px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", letterSpacing: "0.13em", textTransform: "uppercase", textBox: "trim-both cap alphabetic", height: "9px" }}>Usage by agent</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>this cycle</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #e2e4e5, inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "3px 0px 3px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "36px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Agent</p>
          </div>
          <div style={{ width: "74px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Runs</p>
          </div>
          <div style={{ width: "92px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "43px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Credits</p>
          </div>
          <div style={{ width: "118px", height: "36px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "12.5px 12px 12.5px 12px", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>Share</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "4px 0px 5px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Rocket size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#333333", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "86px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>deploy-agent</p>
            </div>
          </div>
          <div style={{ width: "74px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>1,284</p>
          </div>
          <div style={{ width: "92px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>21,400</p>
          </div>
          <div style={{ width: "118px", height: "40px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "56px", height: "6px", flexShrink: 0, borderRadius: "99px", background: "rgba(50, 143, 249, 0.14)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "50.4px", height: "6px", borderRadius: "99px", background: "#328ff9" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858" }}>31%</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "4px 0px 5px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <DatabaseExport size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#333333", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>data-sync</p>
            </div>
          </div>
          <div style={{ width: "74px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>2,960</p>
          </div>
          <div style={{ width: "92px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>17,900</p>
          </div>
          <div style={{ width: "118px", height: "40px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "56px", height: "6px", flexShrink: 0, borderRadius: "99px", background: "rgba(50, 143, 249, 0.14)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "42.21px", height: "6px", borderRadius: "99px", background: "#328ff9" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858" }}>26%</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "4px 0px 5px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <Headset size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#333333", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "114px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>support-assistant</p>
            </div>
          </div>
          <div style={{ width: "74px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>3,410</p>
          </div>
          <div style={{ width: "92px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>14,260</p>
          </div>
          <div style={{ width: "118px", height: "40px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "56px", height: "6px", flexShrink: 0, borderRadius: "99px", background: "rgba(50, 143, 249, 0.14)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "33.55px", height: "6px", borderRadius: "99px", background: "#328ff9" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858" }}>21%</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "56px", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e2e4e5", display: "flex", flexDirection: "row", padding: "4px 0px 5px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <FileInvoice size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#333333", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "115px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>invoice-processor</p>
            </div>
          </div>
          <div style={{ width: "74px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>1,120</p>
          </div>
          <div style={{ width: "92px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>9,800</p>
          </div>
          <div style={{ width: "118px", height: "40px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "56px", height: "6px", flexShrink: 0, borderRadius: "99px", background: "rgba(50, 143, 249, 0.14)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "23.11px", height: "6px", borderRadius: "99px", background: "#328ff9" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858" }}>14%</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", height: "56px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "4px 0px 4px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "196px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <div style={{ width: "24px", height: "24px", flexShrink: 0, borderRadius: "6px", background: "#f4f6f8", boxShadow: "inset 0 0 0 1px #eff1f2", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <DatabaseExport size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#333333", display: "block" }} />
              </div>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "94px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#333333", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "10px" }}>3 other agents</p>
            </div>
          </div>
          <div style={{ width: "74px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "24px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>640</p>
          </div>
          <div style={{ width: "92px", height: "40px", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "4px", justifyContent: "flex-end", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#222222", lineHeight: "1.100000023841858", textBox: "trim-both cap alphabetic", height: "9px" }}>4,800</p>
          </div>
          <div style={{ width: "118px", height: "40px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "0px 12px 0px 12px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "56px", height: "6px", flexShrink: 0, borderRadius: "99px", background: "rgba(50, 143, 249, 0.14)", overflow: "hidden", position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "11.24px", height: "6px", borderRadius: "99px", background: "#328ff9" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#666666", lineHeight: "1.100000023841858" }}>7%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
