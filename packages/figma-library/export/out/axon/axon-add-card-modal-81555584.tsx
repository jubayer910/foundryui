// Add card modal (axon, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { Calendar, Check, ChevronDown, CreditCard, InfoCircle, Lock, ShieldCheck, User, World, X } from "ingotui-icons/react/stroke-rounded";

export function AddCardModal() {
  return (
    <div style={{ width: "880px", height: "580px", borderRadius: "14px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 24px 48px 0px rgba(13, 13, 18, 0.12), 0px 12px 22px 0px rgba(13, 13, 18, 0.08), 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "18px 16px 14px 20px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#eff8ff", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCard size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "4px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "79px", fontFamily: "'Geist'", fontSize: "16px", fontWeight: 400, color: "#15171c", lineHeight: "24px" }}>Add a card</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "361px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Used for Growth plan invoices and Credit wallet top-ups.</p>
        </div>
        <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#747474", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 20px 20px 20px", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "85px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>Card number</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #1b8ce8, 0px 0px 0px 3px #b7dfff, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CreditCard size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#979797", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>4319 8820 0412 7716</p>
              <svg style={{ width: "34px", height: "24px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="34" height="24" viewBox="0 0 34 24" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M29 0 L5 0 C2.23858 0 0 2.23858 0 5 L0 19 C0 21.7614 2.23858 24 5 24 L29 24 C31.7614 24 34 21.7614 34 19 L34 5 C34 2.23858 31.7614 0 29 0 Z" fill="#1a1f71"/><path transform="matrix(1 0 0 1 7 8.6)" d="M2.12992 6.0403 L0 0.13312 L1.30624 0.13312 L2.87872 4.6176 L4.4512 0.13312 L5.75745 0.13312 L3.6192 6.0403 L2.12992 6.0403 Z M6.64041 6.0403 L6.64041 0.13312 L7.90505 0.13312 L7.90505 6.0403 L6.64041 6.0403 Z M11.6755 6.17342 C11.1652 6.17342 10.727 6.08747 10.361 5.9155 C9.99488 5.74359 9.70919 5.50231 9.50399 5.19168 C9.29875 4.88107 9.18227 4.51499 9.15456 4.09344 L10.4275 4.0352 C10.4608 4.26816 10.5274 4.46784 10.6272 4.63424 C10.7325 4.79509 10.8712 4.91712 11.0432 5.00032 C11.2207 5.08352 11.437 5.12512 11.6922 5.12512 C11.9029 5.12512 12.0804 5.10016 12.2246 5.05024 C12.3744 5.00032 12.4881 4.92544 12.5658 4.8256 C12.6434 4.72021 12.6822 4.59264 12.6822 4.44288 C12.6822 4.30421 12.649 4.18496 12.5824 4.08512 C12.5158 3.97973 12.3882 3.88544 12.1997 3.80224 C12.0111 3.71349 11.7338 3.62752 11.3677 3.54432 C10.8629 3.42784 10.4552 3.29749 10.1446 3.15328 C9.83955 3.00907 9.61767 2.8288 9.47904 2.61248 C9.34035 2.39061 9.27104 2.11328 9.27104 1.78048 C9.27104 1.42549 9.35699 1.11488 9.52896 0.848638 C9.70643 0.582398 9.9616 0.3744 10.2944 0.224639 C10.6272 0.0748799 11.0237 0 11.4842 0 C11.9722 0 12.3855 0.0859731 12.7238 0.25792 C13.0621 0.429867 13.3256 0.665598 13.5142 0.965118 C13.7084 1.26464 13.8248 1.60853 13.8637 1.9968 L12.599 2.06336 C12.5824 1.85813 12.5269 1.68064 12.4326 1.53088 C12.3383 1.37557 12.2108 1.25632 12.0499 1.17312 C11.889 1.08992 11.6949 1.04832 11.4675 1.04832 C11.1791 1.04832 10.9517 1.11211 10.7853 1.23968 C10.6244 1.36725 10.544 1.53365 10.544 1.73888 C10.544 1.88309 10.58 2.00512 10.6522 2.10496 C10.7298 2.19925 10.8546 2.28245 11.0266 2.35456 C11.204 2.42667 11.4536 2.496 11.7754 2.56256 C12.3245 2.67349 12.7571 2.81493 13.0733 2.98688 C13.3949 3.15328 13.6224 3.35296 13.7555 3.58592 C13.8886 3.81888 13.9552 4.08512 13.9552 4.38464 C13.9552 4.75072 13.8609 5.06965 13.6723 5.34142 C13.4893 5.60766 13.2258 5.81291 12.8819 5.9571 C12.5436 6.10135 12.1414 6.17342 11.6755 6.17342 Z M14.5265 6.0403 L16.6564 0.13312 L18.154 0.13312 L20.284 6.0403 L18.9694 6.0403 L18.5368 4.784 L16.2654 4.784 L15.8328 6.0403 L14.5265 6.0403 Z M16.6232 3.744 L18.1873 3.744 L17.4052 1.46432 L16.6232 3.744 Z" fill="#ffffff"/></svg>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>Expiry</p>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Calendar size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#979797", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>08 / 29</p>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>CVC</p>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Lock size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#979797", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>•••</p>
                <InfoCircle size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#979797", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>Name on card</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(79, 79, 79, 0.12)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 11px 7px 11px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <User size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#979797", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Acme Inc.</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "95px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>Billing country</p>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "7px 9px 7px 11px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <World size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>United States</p>
                <ChevronDown size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "48px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#384152", lineHeight: "20px" }}>Use for</p>
              <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "9px", background: "#f5f5f5", overflow: "hidden", display: "flex", flexDirection: "row", padding: "3px 3px 3px 3px", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "6px", background: "#ffffff", boxShadow: "0px 1.4px 1px 0px rgba(0, 0, 0, 0.06), 0px 0px 1px 0px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Business</p>
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, borderRadius: "6px", display: "flex", flexDirection: "row", padding: "4px 10px 4px 10px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "56px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#384152", lineHeight: "20px" }}>Personal</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "2px 0px 0px 0px", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "16px", height: "16px", flexShrink: 0, borderRadius: "4px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), 0px 1px 2px 0px rgba(27, 140, 232, 0.25)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={12} strokeWidth={3} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "168px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Make this the default card</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "366px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Replaces Visa ending 4242 for invoices and auto top-ups</p>
            </div>
          </div>
        </div>
        <div style={{ width: "300px", alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 1px 0 0 0 #e9e9e9", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0px 0px 0px 21px", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Summary</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Card</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "108px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Visa ending 7716</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Use for</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Business</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Charged for</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Invoices, top-ups</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Next charge</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "35px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Nov 1</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "31px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Fees</p>
            <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Verification hold</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>$1.00</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Processing</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "59px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 600, color: "#17a673", lineHeight: "20px" }}>Included</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", padding: "6px 0px 6px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Foreign transaction</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>$0.00</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", overflow: "hidden", display: "flex", flexDirection: "row", padding: "11px 0px 0px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Due today</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", fontFamily: "'Geist Mono'", fontSize: "13px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>$0.00</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", background: "#f9f9f9", overflow: "hidden", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <InfoCircle size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#979797", display: "block" }} />
            <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>The $1.00 hold is released within 1 to 3 days.</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#f9f9f9", boxShadow: "inset 0 1px 0 0 #e9e9e9", overflow: "hidden", display: "flex", flexDirection: "row", padding: "13px 20px 12px 20px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <ShieldCheck size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#979797", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "310px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Stored by Stripe. Axon never sees card numbers.</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "10px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e8e8e8", display: "flex", flexDirection: "row", padding: "7px 13px 7px 13px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#686765", lineHeight: "20px" }}>Cancel</p>
        </div>
        <div style={{ flexShrink: 0, borderRadius: "10px", background: "linear-gradient(0deg, #1b8ce8 34.7%, #4eb0ff 93.7%)", boxShadow: "0px 8px 9px 0px rgba(0, 0, 0, 0.12), inset 0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25), inset -0.6px 0.6px 0px 0px rgba(255, 255, 255, 0.25)", display: "flex", flexDirection: "row", padding: "6px 12px 6px 12px", gap: "6px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Check size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#ffffff", lineHeight: "20px" }}>Save card</p>
        </div>
      </div>
    </div>
  );
}
