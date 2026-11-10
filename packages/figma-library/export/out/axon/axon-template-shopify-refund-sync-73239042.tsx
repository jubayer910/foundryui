// Template Shopify refund sync (axon, Tables and lists) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Clock, Users } from "foundryui-icons/react/stroke-rounded";

export function TemplateShopifyRefundSync() {
  return (
    <div style={{ width: "276.8px", height: "192px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "-6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 1.086 0)" d="M10.4167 17.9842 L15.8287 16.8135 C15.8287 16.8135 13.8757 3.60375 13.86 3.516 C13.8465 3.429 13.7745 3.372 13.7017 3.372 C13.629 3.372 12.255 3.27 12.255 3.27 C12.255 3.27 11.2988 2.3145 11.1758 2.21175 C11.142 2.184 11.1195 2.169 11.085 2.15625 L10.3995 17.9842 L10.4167 17.9842 Z M7.6965 8.47875 C7.6965 8.47875 7.089 8.16075 6.366 8.16075 C5.28075 8.16075 5.238 8.84025 5.238 9.0165 C5.238 9.9405 7.668 10.3027 7.668 12.4882 C7.668 14.2095 6.588 15.3082 5.1135 15.3082 C3.348 15.3082 2.4585 14.2095 2.4585 14.2095 L2.943 12.645 C2.943 12.645 3.87675 13.4445 4.653 13.4445 C5.15925 13.4445 5.38425 13.0357 5.38425 12.7455 C5.38425 11.5312 3.39375 11.475 3.39375 9.47625 C3.36825 7.7985 4.572 6.16425 7.014 6.16425 C7.95675 6.16425 8.42025 6.435 8.42025 6.435 L7.7115 8.47125 L7.6965 8.47875 Z M7.2915 0.6225 C7.3935 0.6225 7.49475 0.651 7.59525 0.72375 C6.85725 1.0725 6.04725 1.953 5.71425 3.71775 C5.22225 3.8775 4.7445 4.0215 4.2975 4.15125 C4.68675 2.8125 5.62725 0.63 7.2915 0.63 L7.2915 0.6225 Z M8.21775 2.83425 L8.21775 2.9355 C7.65225 3.1095 7.0305 3.2985 6.42225 3.4875 C6.77175 2.15475 7.422 1.50375 7.986 1.25925 C8.13075 1.635 8.21775 2.14125 8.21775 2.83425 Z M8.622 1.15875 C9.1425 1.21425 9.47775 1.809 9.69375 2.475 C9.432 2.5605 9.1425 2.64825 8.82525 2.7495 L8.82525 2.5605 C8.82525 1.9965 8.75325 1.53225 8.622 1.15725 L8.622 1.15875 Z M10.866 2.1255 C10.851 2.1255 10.821 2.14125 10.8075 2.14125 C10.794 2.14125 10.5907 2.1975 10.272 2.29875 C9.95475 1.374 9.39 0.52125 8.391 0.52125 L8.30475 0.52125 C8.01525 0.15675 7.66575 0 7.36275 0 C5.03325 0 3.92025 2.90775 3.5715 4.3845 C2.676 4.65825 2.02425 4.8615 1.9515 4.89 C1.44525 5.04975 1.431 5.064 1.3725 5.5425 C1.31625 5.889 0 16.0897 0 16.0897 L10.1707 18 L10.866 2.1255 Z" fill="#7ab55c"/></svg>
        </div>
        <div style={{ width: "32px", height: "32px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 0px 0px 2px #ffffff, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "18px", height: "18px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.576 0)" d="M7.9065 6.8625 C6.2775 6.258 5.3895 5.793 5.3895 5.05575 C5.3895 4.4325 5.90175 4.077 6.81525 4.077 C8.4855 4.077 10.2015 4.7205 11.3827 5.30025 L12.0502 1.17975 C11.1135 0.73125 9.19725 0 6.54825 0 C4.67475 0 3.11625 0.4905 2.0025 1.404 C0.8445 2.36025 0.24225 3.744 0.24225 5.4135 C0.24225 8.44275 2.0925 9.7335 5.09925 10.8278 C7.038 11.5177 7.683 12.0083 7.683 12.765 C7.683 13.5 7.053 13.9237 5.9175 13.9237 C4.51125 13.9237 2.19375 13.233 0.675 12.342 L0 16.5082 C1.30575 17.2425 3.71325 18 6.21 18 C8.19075 18 9.84225 17.532 10.956 16.6403 C12.204 15.6615 12.8497 14.2133 12.8497 12.3412 C12.8497 9.24525 10.9567 7.953 7.90425 6.8625 L7.9065 6.8625 Z" fill="#635bff"/></svg>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Shopify refund sync</p>
        <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Mirror Shopify refunds into Stripe and notify finance on large ones.</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flexShrink: 0, borderRadius: "100px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "1px 8px 1px 8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Operations</p>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Users size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>730</p>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Clock size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>3h</p>
        </div>
      </div>
    </div>
  );
}
