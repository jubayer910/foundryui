// Pause Customer Refunds? modal (axon, Modals) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Foundry Icons.
import { Check, PlayerPause, X } from "foundryui-icons/react/stroke-rounded";

export function PauseCustomerRefundsModal() {
  return (
    <div style={{ width: "500px", height: "521px", borderRadius: "14px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 24px 48px 0px rgba(13, 13, 18, 0.12), 0px 12px 22px 0px rgba(13, 13, 18, 0.08), 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "18px 16px 14px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#fffbf0", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <PlayerPause size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#d99a00", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Pause Customer Refunds?</p>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>New tickets tagged “refund” won’t start runs until you resume this workflow.</p>
        </div>
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "6px 20px 20px 20px", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#f9f9f9", boxShadow: "inset 0 0 0 1px #e9e9e9", display: "flex", flexDirection: "column", padding: "7px 13px 7px 13px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Runs in queue</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>
              <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>14</span>
              <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>{" will be affected"}</span>
            </p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Next trigger</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>in ~3 min</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Downstream</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Revenue Sync</p>
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>Queued runs</p>
          <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#eff8ff", boxShadow: "inset 0 0 0 1px #1b8ce8", display: "flex", flexDirection: "row", padding: "13px 13px 13px 13px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "8px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "6px", height: "6px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M6 3 C6 4.65685 4.65685 6 3 6 C1.34315 6 0 4.65685 0 3 C0 1.34315 1.34315 0 3 0 C4.65685 0 6 1.34315 6 3 Z" fill="#ffffff"/></svg>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Finish queued runs, then pause</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>14 runs complete normally · about 6 minutes</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "13px 13px 13px 13px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe0e5, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }} />
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Pause now and hold the queue</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Held runs restart when you resume</p>
            </div>
          </div>
        </div>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), 0px 1px 2px 0px rgba(27, 140, 232, 0.25)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Check size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Notify owners in</p>
          <div style={{ width: "20px", height: "20px", flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "11px", height: "11px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M2.31092 6.95062 C2.31031 7.25689 2.18847 7.55046 1.97204 7.76715 C1.75561 7.98384 1.46218 8.10603 1.15592 8.107 C0.849493 8.10627 0.555833 7.98419 0.339201 7.76748 C0.122569 7.55076 0.000605201 7.25705 7.63278e-17 6.95062 C0.00084767 6.6444 0.122933 6.35098 0.339552 6.13453 C0.556171 5.91808 0.849693 5.79623 1.15592 5.79563 L2.31092 5.79563 L2.31092 6.95062 Z M2.89346 6.95062 C2.89431 6.64448 3.01633 6.35113 3.23285 6.13469 C3.44937 5.91826 3.74277 5.79635 4.04892 5.79563 C4.35506 5.79635 4.64847 5.91826 4.86499 6.13469 C5.08151 6.35113 5.20353 6.64448 5.20437 6.95062 L5.20437 9.84408 C5.20365 10.1503 5.0817 10.4439 4.86518 10.6605 C4.64865 10.8771 4.35518 10.9992 4.04892 11 C3.74265 10.9992 3.44918 10.8771 3.23266 10.6605 C3.01614 10.4439 2.89418 10.1503 2.89346 9.84408 L2.89346 6.95062 Z M4.04892 2.31092 C3.74281 2.31007 3.44948 2.18813 3.23298 1.97172 C3.01649 1.75531 2.89443 1.46202 2.89346 1.15592 C2.89418 0.849651 3.01614 0.55613 3.23266 0.339524 C3.44918 0.122918 3.74265 0.000847189 4.04892 0 C4.35518 0.000847189 4.64865 0.122918 4.86518 0.339524 C5.0817 0.55613 5.20365 0.849651 5.20437 1.15592 L5.20437 2.31092 L4.04892 2.31092 Z M4.04892 2.89346 C4.3551 2.89431 4.64851 3.01631 4.86501 3.23282 C5.08152 3.44933 5.20353 3.74273 5.20437 4.04892 C5.20353 4.3551 5.08152 4.64851 4.86501 4.86501 C4.64851 5.08152 4.3551 5.20353 4.04892 5.20437 L1.15592 5.20437 C0.849651 5.20365 0.55613 5.0817 0.339524 4.86518 C0.122918 4.64865 0.000847189 4.35518 0 4.04892 C0.000847189 3.74265 0.122918 3.44918 0.339524 3.23266 C0.55613 3.01614 0.849651 2.89418 1.15592 2.89346 L4.04892 2.89346 Z M8.68817 4.04892 C8.68901 3.74265 8.81108 3.44918 9.02769 3.23266 C9.2443 3.01614 9.53782 2.89418 9.84408 2.89346 C10.1503 2.89418 10.4439 3.01614 10.6605 3.23266 C10.8771 3.44918 10.9992 3.74265 11 4.04892 C10.9992 4.35518 10.8771 4.64865 10.6605 4.86518 C10.4439 5.0817 10.1503 5.20365 9.84408 5.20437 L8.68817 5.20437 L8.68817 4.04892 Z M8.107 4.04892 C8.10615 4.35526 7.98402 4.6488 7.76731 4.86534 C7.55061 5.08187 7.25697 5.20377 6.95062 5.20437 C6.64448 5.20353 6.35113 5.08151 6.13469 4.86499 C5.91826 4.64847 5.79635 4.35506 5.79563 4.04892 L5.79563 1.15592 C5.79623 0.849693 5.91808 0.556171 6.13453 0.339552 C6.35098 0.122933 6.6444 0.00084767 6.95062 2.28983e-16 C7.25705 0.000605201 7.55076 0.122569 7.76748 0.339201 C7.98419 0.555833 8.10627 0.849493 8.107 1.15592 L8.107 4.04892 Z M6.95062 8.68817 C7.25705 8.68877 7.55076 8.81074 7.76748 9.02737 C7.98419 9.244 8.10627 9.53766 8.107 9.84408 C8.10627 10.1505 7.98419 10.4442 7.76748 10.6608 C7.55076 10.8774 7.25705 10.9994 6.95062 11 C6.6444 10.9992 6.35098 10.8771 6.13453 10.6604 C5.91808 10.4438 5.79623 10.1503 5.79563 9.84408 L5.79563 8.68817 L6.95062 8.68817 Z M6.95062 8.107 C6.64432 8.10615 6.35083 7.984 6.13437 7.76729 C5.91791 7.55057 5.79611 7.25693 5.79563 6.95062 C5.79635 6.64452 5.91827 6.35117 6.13472 6.13472 C6.35117 5.91827 6.64452 5.79635 6.95062 5.79563 L9.84408 5.79563 C10.1503 5.79623 10.4438 5.91808 10.6604 6.13453 C10.8771 6.35098 10.9992 6.6444 11 6.95062 C10.9994 7.25705 10.8774 7.55076 10.6608 7.76748 C10.4442 7.98419 10.1505 8.10627 9.84408 8.107 L6.95062 8.107 Z" fill="#4a154b"/></svg>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>#ops-alerts</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "13px 20px 12px 20px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#4996fe", lineHeight: "20px" }}>View dependencies</p>
        <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Cancel</p>
          </div>
          <div style={{ flexShrink: 0, borderRadius: "10px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <PlayerPause size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Pause workflow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
