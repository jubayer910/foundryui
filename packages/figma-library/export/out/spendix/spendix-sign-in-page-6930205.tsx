// Sign in page (spendix, Templates) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { Eye, InfoCircle, Lock, Mail } from "ingotui-icons/react/stroke-rounded";
import { ChartBar as ChartBarSolid, CreditCard as CreditCardSolid, FlowConnection as FlowConnectionSolid, ReceiptDollar as ReceiptDollarSolid, SquareRoundedCheck as SquareRoundedCheckSolid } from "ingotui-icons/react/solid";

export function SignInPage() {
  return (
    <div style={{ width: "1440px", height: "1071px", background: "#fcfcfc", overflow: "hidden", position: "relative" }}>
      <div style={{ position: "absolute", left: "219px", top: "227px", width: "1002px", height: "598px", borderRadius: "16px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #e2e8f0, 0px 20px 44px -12px rgba(13, 13, 18, 0.14), 0px 1px 2px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "500px", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", padding: "44px 48px 44px 48px", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "46px", height: "46px", flexShrink: 0, borderRadius: "8px", background: "#000000", backdropFilter: "blur(1.36px)", boxShadow: "inset 0 0 0 1.02px rgba(255, 255, 255, 0.4)", overflow: "hidden", display: "flex", flexDirection: "row", gap: "6.79px", justifyContent: "center", alignItems: "center", boxSizing: "border-box", position: "relative" }}>
              <svg style={{ position: "absolute", left: "-19.5px", top: "-20.25px", width: "42.96px", height: "42.96px", display: "block", lineHeight: 0, overflow: "visible", filter: "blur(3.39px)" }} xmlns="http://www.w3.org/2000/svg" width="42.96" height="42.96" viewBox="0 0 42.96 42.96" fill="none" overflow="visible"><defs><linearGradient id="g4_ckb6" gradientUnits="userSpaceOnUse" x1="15.65" y1="35.66" x2="9.45" y2="0.00"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#ffffff" stopOpacity="0"/></linearGradient></defs><path transform="matrix(-0.707 0.707 -0.707 -0.707 42.96 25.215)" d="M3.04317e-12 0 L25.095 0 L21.749 35.6592 L3.346 35.6592 L3.04317e-12 0 Z" fill="url(#g4_ckb6)"/></svg>
              <div style={{ width: "30px", height: "36px", flexShrink: 0, filter: "drop-shadow(0px 3px 3px rgba(36, 36, 36, 0.1))", position: "relative" }}>
                <svg style={{ position: "absolute", left: "0px", top: "3.71px", width: "30px", height: "28.57px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="30" height="28.57" viewBox="0 0 30 28.57" fill="none" overflow="visible"><defs><linearGradient id="g5_ckb7" gradientUnits="userSpaceOnUse" x1="15.00" y1="-0.00" x2="15.00" y2="28.57"><stop offset="0" stopColor="#ffffff" stopOpacity="0.8"/><stop offset="1" stopColor="#ffffff" stopOpacity="0.5"/></linearGradient></defs><path transform="matrix(-1 0 0 1 30 0)" d="M14.7 5.08644e-07 C12.1001 6.20908e-07 10.0002 2.07441 10.0002 4.64271 C10.0002 7.19128 12.1001 9.26565 14.68 9.28542 C14.04 9.26565 13.5401 8.75202 13.5401 8.11979 C13.5401 7.4876 14.0601 6.9542 14.72 6.9542 C17.5199 6.9542 23.7398 6.9542 26.4797 6.9542 C28.4196 6.9542 29.9995 5.39346 29.9995 3.47712 C29.9995 1.56074 28.4196 -8.37659e-08 26.4797 0 L14.7 5.08644e-07 Z" fill="url(#g5_ckb7)"/><path transform="matrix(-1 0 0 1 30 0)" d="M8.98585 9.2854 C6.38593 9.2854 4.286 11.3598 4.286 13.9281 C4.286 16.4767 6.38593 18.551 8.96584 18.5708 C8.32586 18.551 7.82589 18.0374 7.82589 17.4052 C7.82589 16.773 8.34588 16.2396 9.00587 16.2396 C11.8057 16.2396 18.0256 16.2396 20.7655 16.2396 C22.7054 16.2396 24.2854 14.6789 24.2854 12.7625 C24.2854 10.8461 22.7054 9.2854 20.7655 9.2854 L8.98585 9.2854 Z" fill="url(#g5_ckb7)"/><path transform="matrix(-1 0 0 1 30 0)" d="M5.03556 18.5708 C2.24993 18.5708 -8.11757e-08 20.8048 0 23.5707 C8.05519e-08 26.3153 2.24993 28.5492 5.01411 28.5705 C4.32843 28.5492 3.79274 27.9961 3.79274 27.3152 C3.79274 26.6344 4.34987 26.06 5.057 26.06 C8.05688 26.06 14.721 26.06 17.6566 26.06 C19.7351 26.06 21.4279 24.3792 21.4279 22.3154 C21.4279 20.2516 19.7351 18.5708 17.6566 18.5708 L5.03556 18.5708 Z" fill="url(#g5_ckb7)"/></svg>
              </div>
            </div>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", fontFamily: "'Geist'", fontSize: "18px", fontWeight: 500, color: "#0f172a", lineHeight: "1.399999976158142" }}>Spendix</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre", minWidth: "58px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b", lineHeight: "1.5", letterSpacing: "0.02em" }}>Enterprise</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "167px", lineHeight: "31px", fontFamily: "'Geist'", fontSize: "24px", fontWeight: 500, color: "#0f172a" }}>Welcome back</p>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "292px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#64748b" }}>Sign in to the Halcyon workspace on Spendix.</p>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "38px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={16} height={16} viewBox="0 0 24 24" style={{ width: "16px", height: "16px", flexShrink: 0, color: "#000000", display: "block" }}><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="currentColor" /></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "142px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Continue with Google</p>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "38px", flexShrink: 0, borderRadius: "8px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6", display: "flex", flexDirection: "row", padding: "1px 11px 1px 11px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <svg width={16} height={16} viewBox="0 0 24 24" style={{ width: "16px", height: "16px", flexShrink: 0, color: "#000000", display: "block" }}><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" fill="currentColor" /></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "133px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Continue with Apple</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, background: "#ededed" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>or with email</p>
            <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, background: "#ededed" }} />
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Work email</p>
              <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #dfe1e6, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Mail size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>ethan.cole@halcyon.com</p>
              </div>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "60px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#0f172a" }}>Password</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "110px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2563eb" }}>Forgot password?</p>
              </div>
              <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "9px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #2563eb, 0px 0px 0px 3px rgba(37, 99, 235, 0.16)", display: "flex", flexDirection: "row", padding: "1px 13px 1px 13px", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <Lock size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7d818c", display: "block" }} />
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>••••••••••••••</p>
                <Eye size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#7d818c", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "20px", height: "20px", flexShrink: 0, borderRadius: "6px", background: "#242424", overflow: "hidden", position: "relative" }}>
              <svg style={{ position: "absolute", left: "3px", top: "3px", width: "14px", height: "14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 2.333 3.5)" d="M10.0404 0.707107 C10.431 0.316583 10.431 -0.316583 10.0404 -0.707107 C9.64992 -1.09763 9.01675 -1.09763 8.62623 -0.707107 L9.33333 0 L10.0404 0.707107 Z M2.91667 6.41667 L2.20956 7.12377 C2.60008 7.5143 3.23325 7.5143 3.62377 7.12377 L2.91667 6.41667 Z M0.707107 2.79289 C0.316583 2.40237 -0.316583 2.40237 -0.707107 2.79289 C-1.09763 3.18342 -1.09763 3.81658 -0.707107 4.20711 L0 3.5 L0.707107 2.79289 Z M9.33333 0 L8.62623 -0.707107 L2.20956 5.70956 L2.91667 6.41667 L3.62377 7.12377 L10.0404 0.707107 L9.33333 0 Z M2.91667 6.41667 L3.62377 5.70956 L0.707107 2.79289 L0 3.5 L-0.707107 4.20711 L2.20956 7.12377 L2.91667 6.41667 Z" fill="#ffffff"/></svg>
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "180px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#0f172a" }}>Keep me signed in for 30 days</p>
          </div>
          <div style={{ alignSelf: "stretch", height: "38px", flexShrink: 0, borderRadius: "8px", background: "#242424", boxShadow: "0px 2px 6px 0px rgba(15, 15, 15, 0.18), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.12)", display: "flex", flexDirection: "row", padding: "0px 10.5px 0px 10.5px", gap: "4px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>Sign in</p>
          </div>
          <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "center", whiteSpace: "pre-wrap", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>
            <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 400, color: "#64748b" }}>{"New to Spendix? "}</span>
            <span style={{ fontFamily: "'Geist'", fontSize: "13px", fontWeight: 500, color: "#2563eb" }}>Create an account</span>
          </p>
        </div>
        <div style={{ width: "500px", alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 1px 0 0 0 #e2e8f0", overflow: "hidden", display: "flex", flexDirection: "column", padding: "44px 48px 44px 49px", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "28px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "8px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "191px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Why finance teams run on Spendix</p>
              <p style={{ alignSelf: "stretch", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "26px", fontFamily: "'Geist'", fontSize: "20px", fontWeight: 500, color: "#0f172a" }}>Every card, budget and approval in one place.</p>
            </div>
            <div style={{ alignSelf: "stretch", flexShrink: 0, overflow: "hidden", display: "flex", flexDirection: "column", gap: "20px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ alignSelf: "stretch", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "38px", height: "38px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <CreditCardSolid size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#2563eb", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "183px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Virtual cards for every team</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "266px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Issue a card in seconds, locked to one merchant.</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "38px", height: "38px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <ChartBarSolid size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#2563eb", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "162px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Budgets that update live</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "291px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Each team sees what is left this month, as it is spent.</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "38px", height: "38px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <SquareRoundedCheckSolid size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#2563eb", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "214px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Approvals that route themselves</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "289px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Requests reach the right approver in Slack or Teams.</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "38px", height: "38px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <ReceiptDollarSolid size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#2563eb", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "169px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Receipts matched for you</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "261px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Missing receipts get a nudge before month end.</p>
                </div>
              </div>
              <div style={{ alignSelf: "stretch", height: "42px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "38px", height: "38px", flexShrink: 0, borderRadius: "10px", background: "rgba(37, 99, 235, 0.12)", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <FlowConnectionSolid size={18} strokeWidth={2} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#2563eb", display: "block" }} />
                </div>
                <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "159px", lineHeight: "18px", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 500, color: "#0f172a" }}>Synced with your ledger</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "308px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Every transaction lands in QuickBooks, Xero or NetSuite.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "8px", background: "rgba(37, 99, 235, 0.08)", display: "flex", flexDirection: "row", padding: "8px 10px 8px 10px", gap: "6px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <InfoCircle size={14} strokeWidth={2.57} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#2563eb", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "350px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 500, color: "#184099" }}>Halcyon runs 124 active cards and 7 team budgets on Spendix.</p>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", left: "40px", top: "1015px", width: "1360px", height: "16px", overflow: "hidden", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "91px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>© 2026 Spendix</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "117px", lineHeight: "16px", fontFamily: "'Geist'", fontSize: "12px", fontWeight: 400, color: "#64748b" }}>Privacy   Terms   Help</p>
      </div>
    </div>
  );
}
