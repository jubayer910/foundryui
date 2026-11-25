// Add card modal (loopo, Modals) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Ingot Icons.
import { BuildingBank as BuildingBankBulk, CreditCard as CreditCardBulk, InfoCircle as InfoCircleBulk, Lock as LockBulk, User as UserBulk } from "ingotui-icons/react/bulk";
import { Check, ChevronDown, X } from "ingotui-icons/react/stroke-rounded";

export function AddCardModal() {
  return (
    <div style={{ width: "760px", height: "539.88px", borderRadius: "17.53px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8, 0px 26.3px 52.59px -13.15px rgba(13, 13, 18, 0.16)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "19.72px 19.72px 17.53px 19.72px", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "37px", height: "37px", flexShrink: 0, borderRadius: "9.86px", background: "rgba(253, 75, 35, 0.12)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <CreditCardBulk size={20} strokeWidth={1.8} style={{ width: "20px", height: "20px", flexShrink: 0, color: "#fd4b23", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "4.38px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", lineHeight: "23px", fontFamily: "'Geist'", fontSize: "17.53px", fontWeight: 500, color: "#000000" }}>Add a card</p>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "289px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#747474", letterSpacing: "-0.02em" }}>Used for your Loopo plan and any add-ons.</p>
        </div>
        <div style={{ width: "31px", height: "31px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", padding: "0px 19.72px 19.72px 19.72px", gap: "19.72px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "15.34px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Card number</p>
            <div style={{ alignSelf: "stretch", height: "39px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.64px #fd4b23, 0px 0px 0px 3.29px rgba(253, 75, 35, 0.16)", display: "flex", flexDirection: "row", padding: "1.64px 12.6px 1.64px 12.6px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <CreditCardBulk size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>4242 4242 4242 4242</p>
              <div style={{ width: "44px", height: "30px", flexShrink: 0, borderRadius: "5.48px", background: "#1a1f71", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "29px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.5px", fontWeight: 700, color: "#ffffff", letterSpacing: "0.04em" }}>VISA</p>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "42px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Expiry</p>
              <div style={{ alignSelf: "stretch", height: "39px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>08 / 28</p>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "30px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>CVC</p>
              <div style={{ alignSelf: "stretch", height: "39px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>•••</p>
                <InfoCircleBulk size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#a3a3a3", display: "block" }} />
              </div>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "93px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Name on card</p>
            <div style={{ alignSelf: "stretch", height: "39px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <UserBulk size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>Ethan Cole</p>
            </div>
          </div>
          <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", gap: "6.57px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "54px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#222222" }}>Country</p>
            <div style={{ alignSelf: "stretch", height: "39px", flexShrink: 0, borderRadius: "8.77px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "1.1px 12.06px 1.1px 12.06px", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <BuildingBankBulk size={16} strokeWidth={2.25} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 400, color: "#222222" }}>United States</p>
              <ChevronDown size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "181px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#747474" }}>Used for tax and fraud checks</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "8.77px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "18px", height: "18px", flexShrink: 0, borderRadius: "4.38px", background: "#fd4b23", boxShadow: "inset 0 0 0 1.1px #fd4b23", display: "flex", flexDirection: "row", padding: "1.1px 1.1px 1.1px 1.1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
              <Check size={13} strokeWidth={2.77} style={{ width: "13px", height: "13px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            </div>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "253px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#222222" }}>Make this the default payment method</p>
          </div>
        </div>
        <div style={{ width: "300px", flexShrink: 0, borderRadius: "13.15px", background: "#fafafa", boxShadow: "inset 0 0 0 1.1px #eeeeee", display: "flex", flexDirection: "column", padding: "16.44px 16.44px 16.44px 16.44px", gap: "13.15px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#6c6c6c", letterSpacing: "0.04em" }}>PREVIEW</p>
          <div style={{ width: "269px", height: "167px", flexShrink: 0, borderRadius: "15.34px", background: "linear-gradient(115deg, #fd6240 12.2%, #e8401b 87.8%)", boxShadow: "inset 0 0 0 1px rgba(197, 59, 27, 0.38), inset 0px 1.1px 0px 0px rgba(255, 255, 255, 0.32), 0px 8.77px 21.9px -8.77px rgba(197, 59, 27, 0.22)", overflow: "hidden", position: "relative" }}>
            <svg style={{ position: "absolute", left: "190px", top: "-150px", width: "300px", height: "300px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M300 150 C300 232.843 232.843 300 150 300 C67.1573 300 0 232.843 0 150 C0 67.1573 67.1573 0 150 0 C232.843 0 300 67.1573 300 150 Z" fill="#ffffff" fillOpacity="0.08"/></svg>
            <svg style={{ position: "absolute", left: "250px", top: "-70px", width: "220px", height: "220px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="220" height="220" viewBox="0 0 220 220" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M220 110 C220 170.751 170.751 220 110 220 C49.2487 220 0 170.751 0 110 C0 49.2487 49.2487 0 110 0 C170.751 0 220 49.2487 220 110 Z" fill="#ffffff" fillOpacity="0.08"/></svg>
            <p style={{ position: "absolute", left: "15.34px", top: "14px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "90px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.34px", fontWeight: 500, color: "#ffffff" }}>Harbor & Co.</p>
            <p style={{ position: "absolute", left: "218px", top: "15px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "37px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "rgba(255, 255, 255, 0.72)" }}>Credit</p>
            <div style={{ position: "absolute", left: "15.34px", top: "50px", width: "30px", height: "22px", borderRadius: "6.57px", background: "linear-gradient(90deg, #ffedd1 0%, #f0cc99 100%)" }} />
            <p style={{ position: "absolute", left: "15.34px", top: "88px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "125px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", letterSpacing: "0.04em" }}>••••  ••••  ••••  4242</p>
            <p style={{ position: "absolute", left: "15.34px", top: "120px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.86px", fontWeight: 400, color: "rgba(255, 255, 255, 0.72)" }}>CARDHOLDER</p>
            <p style={{ position: "absolute", left: "15.34px", top: "133px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#ffffff" }}>Ethan Cole</p>
            <p style={{ position: "absolute", left: "122px", top: "120px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "40px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "9.86px", fontWeight: 400, color: "rgba(255, 255, 255, 0.72)" }}>EXPIRES</p>
            <p style={{ position: "absolute", left: "122px", top: "133px", margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "41px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 500, color: "#ffffff" }}>08/28</p>
            <svg style={{ position: "absolute", left: "216px", top: "132px", width: "22px", height: "22px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M22 11 C22 17.0751 17.0751 22 11 22 C4.92487 22 0 17.0751 0 11 C0 4.92487 4.92487 0 11 0 C17.0751 0 22 4.92487 22 11 Z" fill="#ffffff" fillOpacity="0.9"/></svg>
            <svg style={{ position: "absolute", left: "229px", top: "132px", width: "22px", height: "22px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M22 11 C22 17.0751 17.0751 22 11 22 C4.92487 22 0 17.0751 0 11 C0 4.92487 4.92487 0 11 0 C17.0751 0 22 4.92487 22 11 Z" fill="#ffffff" fillOpacity="0.55"/></svg>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "6.57px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <LockBulk size={15} strokeWidth={2.4} style={{ width: "15px", height: "15px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "187px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "13.15px", fontWeight: 400, color: "#6c6c6c" }}>Encrypted and stored by Stripe</p>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 1px 0 0 #eeeeee", display: "flex", flexDirection: "row", padding: "16.34px 19.72px 15.34px 19.72px", gap: "10.96px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 400, color: "#6c6c6c" }}>You won't be charged now</p>
        <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "#ffffff", boxShadow: "inset 0 0 0 1.1px #e8e8e8", display: "flex", flexDirection: "row", padding: "10.96px 10.96px 10.96px 10.96px", gap: "6.57px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#6c6c6c", lineHeight: "17.53px" }}>Cancel</p>
        </div>
        <div style={{ height: "39.44px", flexShrink: 0, borderRadius: "109.56px", background: "linear-gradient(180deg, #838383 0%, #2d2d2d 100%)", boxShadow: "0px 9.86px 8.77px 0px rgba(0, 0, 0, 0.04)", display: "flex", flexDirection: "column", padding: "10.96px 10.96px 10.96px 10.96px", gap: "10.96px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", height: "17.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "4.38px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <LockBulk size={17.5} strokeWidth={2.06} style={{ width: "17.53px", height: "17.53px", flexShrink: 0, color: "#ffffff", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "67px", fontFamily: "'Geist'", fontSize: "14.24px", fontWeight: 500, color: "#ffffff", lineHeight: "17.53px" }}>Save card</p>
          </div>
        </div>
      </div>
    </div>
  );
}
