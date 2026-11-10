// Timeline (axon, Charts) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Foundry Icons.
import { Checklist, CircleCheck, GitBranch, Loader, Minus, Sparkles } from "foundryui-icons/react/stroke-rounded";

export function Timeline() {
  return (
    <div style={{ width: "759px", height: "512px", borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "19px 19px 19px 19px", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px", letterSpacing: "-0.1px" }}>Run T-1043</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Started 2.1s ago · Sandbox · writes mocked</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "4.6px", background: "#eff8ff", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Loader size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#1b8ce8", lineHeight: "20px" }}>Running · step 3 of 6</p>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "8px 4px 4px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#a6a6a6", lineHeight: "20px" }}>Step</p>
        <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
        <div style={{ width: "300px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>0s</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>3.4s</p>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>6.8s</p>
        </div>
        <div style={{ width: "44px", height: "4px", flexShrink: 0, overflow: "hidden" }} />
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 4px 11px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CircleCheck size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#17a673", display: "block" }} />
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "16px", height: "16px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.998)" d="M16 1.63969 L16 10.9124 C16 11.515 15.512 12.003 14.9093 12.003 L12.3633 12.003 L12.3633 5.82169 L8 9.09502 L3.63667 5.82169 L3.63667 12.0037 L1.09067 12.0037 C0.947382 12.0037 0.805502 11.9755 0.673133 11.9206 C0.540764 11.8657 0.4205 11.7854 0.319213 11.684 C0.217927 11.5827 0.137603 11.4623 0.0828308 11.3299 C0.0280589 11.1975 -8.73785e-05 11.0556 2.03768e-07 10.9124 L2.03768e-07 1.63969 C2.03768e-07 0.291021 1.53933 -0.478979 2.618 0.330354 L3.63667 1.09502 L8 4.36702 L12.3633 1.09369 L13.382 0.330354 C14.46 -0.478313 16 0.291021 16 1.63969 Z" fill="#ea4335"/></svg>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Email received</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{"Sample "}</span>
            <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>INV-20931.pdf</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{" · 1 attachment"}</span>
          </p>
        </div>
        <div style={{ width: "300px", height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "0px", top: "0px", width: "8.8px", height: "8px", borderRadius: "4px", background: "#1b8ce8" }} />
        </div>
        <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>0.2s</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 4px 11px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <CircleCheck size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#17a673", display: "block" }} />
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#eff8ff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Sparkles size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Extract invoice fields</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>9 fields · Sonnet 5.5 · 2,104 tokens</p>
        </div>
        <div style={{ width: "300px", height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "8.8px", top: "0px", width: "61.8px", height: "8px", borderRadius: "4px", background: "#1b8ce8" }} />
        </div>
        <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>1.4s</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 4px 11px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Loader size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#fef5f0", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <GitBranch size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#ff5601", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>PO found and confidence ≥ 92%?</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{"Took "}</span>
            <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>No</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{" · po_number at 81%"}</span>
          </p>
        </div>
        <div style={{ width: "300px", height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden", position: "relative" }}>
          <div style={{ position: "absolute", left: "96px", top: "0px", width: "120px", height: "8px", borderRadius: "4px", background: "linear-gradient(180deg, rgba(27, 140, 232, 0.2) 0%, rgba(27, 140, 232, 0.6) 100%)" }} />
        </div>
        <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>…</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, opacity: 0.5, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 4px 11px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Minus size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#dfe0e5", display: "block" }} />
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#fdf0f7", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Checklist size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#ef0c78", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Send to Review Queue</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Mocked · task would go to AP team</p>
        </div>
        <div style={{ width: "300px", height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden" }} />
        <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>—</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, opacity: 0.5, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 4px 11px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Minus size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#dfe0e5", display: "block" }} />
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "5px", background: "#1a3d6e", position: "relative" }}>
            <p style={{ position: "absolute", left: "4px", top: "4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>NS</p>
          </div>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Create vendor bill</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Skipped · branch not taken</p>
        </div>
        <div style={{ width: "300px", height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden" }} />
        <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>—</p>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, opacity: 0.5, boxShadow: "inset 0 -1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "10px 4px 11px 4px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <Minus size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#dfe0e5", display: "block" }} />
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <svg style={{ width: "16px", height: "16px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M3.36133 10.11 C3.36045 10.5555 3.18324 10.9825 2.86842 11.2977 C2.55361 11.6129 2.12681 11.7906 1.68133 11.792 C1.23563 11.7909 0.808485 11.6134 0.493383 11.2981 C0.178282 10.9829 0.000880292 10.5557 1.11022e-16 10.11 C0.00123297 9.66459 0.178811 9.23778 0.493894 8.92295 C0.808976 8.60812 1.23592 8.43088 1.68133 8.43 L3.36133 8.43 L3.36133 10.11 Z M4.20867 10.11 C4.2099 9.6647 4.38739 9.238 4.70232 8.92319 C5.01726 8.60837 5.44403 8.43106 5.88933 8.43 C6.33463 8.43106 6.7614 8.60837 7.07634 8.92319 C7.39128 9.238 7.56877 9.6647 7.57 10.11 L7.57 14.3187 C7.56894 14.7641 7.39156 15.1911 7.07662 15.5061 C6.76168 15.8212 6.33481 15.9988 5.88933 16 C5.44386 15.9988 5.01699 15.8212 4.70205 15.5061 C4.38711 15.1911 4.20972 14.7641 4.20867 14.3187 L4.20867 10.11 Z M5.88933 3.36133 C5.44409 3.3601 5.01742 3.18273 4.70252 2.86795 C4.38762 2.55318 4.21007 2.12658 4.20867 1.68133 C4.20972 1.23586 4.38711 0.808916 4.70205 0.493853 C5.01699 0.178789 5.44386 0.00123227 5.88933 0 C6.33481 0.00123227 6.76168 0.178789 7.07662 0.493853 C7.39156 0.808916 7.56894 1.23586 7.57 1.68133 L7.57 3.36133 L5.88933 3.36133 Z M5.88933 4.20867 C6.3347 4.2099 6.76146 4.38736 7.07638 4.70228 C7.3913 5.0172 7.56877 5.44397 7.57 5.88933 C7.56877 6.3347 7.3913 6.76146 7.07638 7.07638 C6.76146 7.3913 6.3347 7.56877 5.88933 7.57 L1.68133 7.57 C1.23586 7.56894 0.808916 7.39156 0.493853 7.07662 C0.178789 6.76168 0.00123227 6.33481 0 5.88933 C0.00123227 5.44386 0.178789 5.01699 0.493853 4.70205 C0.808916 4.38711 1.23586 4.20972 1.68133 4.20867 L5.88933 4.20867 Z M12.6373 5.88933 C12.6386 5.44386 12.8161 5.01699 13.1312 4.70205 C13.4462 4.38711 13.8732 4.20972 14.3187 4.20867 C14.7641 4.20972 15.1911 4.38711 15.5061 4.70205 C15.8212 5.01699 15.9988 5.44386 16 5.88933 C15.9988 6.33481 15.8212 6.76168 15.5061 7.07662 C15.1911 7.39156 14.7641 7.56894 14.3187 7.57 L12.6373 7.57 L12.6373 5.88933 Z M11.792 5.88933 C11.7908 6.33493 11.6131 6.7619 11.2979 7.07685 C10.9827 7.39181 10.5556 7.56912 10.11 7.57 C9.6647 7.56877 9.238 7.39128 8.92319 7.07634 C8.60837 6.7614 8.43106 6.33463 8.43 5.88933 L8.43 1.68133 C8.43088 1.23592 8.60812 0.808976 8.92295 0.493894 C9.23778 0.178811 9.66459 0.00123297 10.11 3.33067e-16 C10.5557 0.000880292 10.9829 0.178282 11.2981 0.493383 C11.6134 0.808485 11.7909 1.23563 11.792 1.68133 L11.792 5.88933 Z M10.11 12.6373 C10.5557 12.6382 10.9829 12.8156 11.2981 13.1307 C11.6134 13.4458 11.7909 13.873 11.792 14.3187 C11.7909 14.7644 11.6134 15.1915 11.2981 15.5066 C10.9829 15.8217 10.5557 15.9991 10.11 16 C9.66459 15.9988 9.23778 15.8212 8.92295 15.5061 C8.60812 15.191 8.43088 14.7641 8.43 14.3187 L8.43 12.6373 L10.11 12.6373 Z M10.11 11.792 C9.66447 11.7908 9.23757 11.6131 8.92272 11.2979 C8.60787 10.9826 8.4307 10.5555 8.43 10.11 C8.43106 9.66476 8.6084 9.23806 8.92323 8.92323 C9.23806 8.6084 9.66476 8.43106 10.11 8.43 L14.3187 8.43 C14.7641 8.43088 15.191 8.60812 15.5061 8.92295 C15.8212 9.23778 15.9988 9.66459 16 10.11 C15.9991 10.5557 15.8217 10.9829 15.5066 11.2981 C15.1915 11.6134 14.7644 11.7909 14.3187 11.792 L10.11 11.792 Z" fill="#4a154b"/></svg>
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Post daily summary</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>{"Mocked · would post to "}</span>
            <span style={{ fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>#finance-ops</span>
          </p>
        </div>
        <div style={{ width: "300px", height: "8px", flexShrink: 0, borderRadius: "4px", background: "#f5f5f5", overflow: "hidden" }} />
        <p style={{ width: "44px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>—</p>
      </div>
    </div>
  );
}
