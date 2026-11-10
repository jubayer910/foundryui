// Connector grid (axon, Charts) from Foundry UI.
// Generated from the Figma original and checked against it. Fonts: Geist. Icons: Foundry Icons.
import { Activity, AlertCircle, CircleCheck, Clock, Dots, GitMerge, PlayerPause, Plus } from "foundryui-icons/react/stroke-rounded";

export function ConnectorGrid() {
  return (
    <div style={{ width: "1155px", height: "491px", display: "flex", flexDirection: "row", flexWrap: "wrap", rowGap: "16px", columnGap: "16px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ width: "276.8px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #f5c2c4", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "22px", height: "22px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.748)" d="M22 2.25457 L22 15.0045 C22 15.8332 21.329 16.5042 20.5003 16.5042 L16.9996 16.5042 L16.9996 8.00482 L11 12.5057 L5.00042 8.00482 L5.00042 16.5051 L1.49967 16.5051 C1.30265 16.5051 1.10757 16.4662 0.925558 16.3908 C0.74355 16.3154 0.578187 16.2049 0.438918 16.0655 C0.299649 15.9261 0.189204 15.7607 0.113892 15.5787 C0.038581 15.3966 -0.000120145 15.2015 2.80181e-07 15.0045 L2.80181e-07 2.25457 C2.80181e-07 0.400153 2.11658 -0.658597 3.59975 0.454237 L5.00042 1.50565 L11 6.00465 L16.9996 1.50382 L18.4002 0.454237 C19.8825 -0.65768 22 0.400153 22 2.25457 Z" fill="#ea4335"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Gmail</p>
            <p style={{ width: "127px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>finance@acme.com</p>
          </div>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4.6px", background: "#fff1f1", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <AlertCircle size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#e5484d", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#e5484d", lineHeight: "20px" }}>Expired</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>14 min ago</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "11px 0px 0px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <GitMerge size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>3 workflows</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Activity size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>4.8k calls</p>
          </div>
        </div>
      </div>
      <div style={{ width: "276.8px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "22px", height: "22px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M4.62183 13.9012 C4.62063 14.5138 4.37695 15.1009 3.94408 15.5343 C3.51121 15.9677 2.92436 16.2121 2.31183 16.214 C1.69899 16.2125 1.11167 15.9684 0.678402 15.535 C0.245137 15.1015 0.0012104 14.5141 1.52656e-16 13.9012 C0.00169534 13.2888 0.245865 12.702 0.679104 12.2691 C1.11234 11.8362 1.69939 11.5925 2.31183 11.5913 L4.62183 11.5913 L4.62183 13.9012 Z M5.78692 13.9012 C5.78861 13.289 6.03266 12.7023 6.4657 12.2694 C6.89874 11.8365 7.48554 11.5927 8.09783 11.5913 C8.71012 11.5927 9.29693 11.8365 9.72997 12.2694 C10.163 12.7023 10.4071 13.289 10.4087 13.9012 L10.4087 19.6882 C10.4073 20.3007 10.1634 20.8877 9.73035 21.321 C9.29731 21.7542 8.71036 21.9983 8.09783 22 C7.4853 21.9983 6.89836 21.7542 6.46532 21.321 C6.03228 20.8877 5.78837 20.3007 5.78692 19.6882 L5.78692 13.9012 Z M8.09783 4.62183 C7.48562 4.62014 6.89895 4.37625 6.46596 3.94344 C6.03297 3.51062 5.78885 2.92405 5.78692 2.31183 C5.78837 1.6993 6.03228 1.11226 6.46532 0.679047 C6.89836 0.245835 7.4853 0.00169438 8.09783 0 C8.71036 0.00169438 9.29731 0.245835 9.73035 0.679047 C10.1634 1.11226 10.4073 1.6993 10.4087 2.31183 L10.4087 4.62183 L8.09783 4.62183 Z M8.09783 5.78692 C8.71021 5.78861 9.29701 6.03262 9.73003 6.46564 C10.163 6.89865 10.4071 7.48546 10.4087 8.09783 C10.4071 8.71021 10.163 9.29701 9.73003 9.73003 C9.29701 10.163 8.71021 10.4071 8.09783 10.4087 L2.31183 10.4087 C1.6993 10.4073 1.11226 10.1634 0.679047 9.73035 C0.245835 9.29731 0.00169438 8.71036 0 8.09783 C0.00169438 7.4853 0.245835 6.89836 0.679047 6.46532 C1.11226 6.03228 1.6993 5.78837 2.31183 5.78692 L8.09783 5.78692 Z M17.3763 8.09783 C17.378 7.4853 17.6222 6.89836 18.0554 6.46532 C18.4886 6.03228 19.0756 5.78837 19.6882 5.78692 C20.3007 5.78837 20.8877 6.03228 21.321 6.46532 C21.7542 6.89836 21.9983 7.4853 22 8.09783 C21.9983 8.71036 21.7542 9.29731 21.321 9.73035 C20.8877 10.1634 20.3007 10.4073 19.6882 10.4087 L17.3763 10.4087 L17.3763 8.09783 Z M16.214 8.09783 C16.2123 8.71052 15.968 9.29761 15.5346 9.73067 C15.1012 10.1637 14.5139 10.4075 13.9012 10.4087 C13.289 10.4071 12.7023 10.163 12.2694 9.72997 C11.8365 9.29693 11.5927 8.71012 11.5913 8.09783 L11.5913 2.31183 C11.5925 1.69939 11.8362 1.11234 12.2691 0.679104 C12.702 0.245865 13.2888 0.00169534 13.9012 4.57967e-16 C14.5141 0.0012104 15.1015 0.245137 15.535 0.678402 C15.9684 1.11167 16.2125 1.69899 16.214 2.31183 L16.214 8.09783 Z M13.9012 17.3763 C14.5141 17.3775 15.1015 17.6215 15.535 18.0547 C15.9684 18.488 16.2125 19.0753 16.214 19.6882 C16.2125 20.301 15.9684 20.8883 15.535 21.3216 C15.1015 21.7549 14.5141 21.9988 13.9012 22 C13.2888 21.9983 12.702 21.7541 12.2691 21.3209 C11.8362 20.8877 11.5925 20.3006 11.5913 19.6882 L11.5913 17.3763 L13.9012 17.3763 Z M13.9012 16.214 C13.2886 16.2123 12.7017 15.968 12.2687 15.5346 C11.8358 15.1011 11.5922 14.5139 11.5913 13.9012 C11.5927 13.289 11.8365 12.7023 12.2694 12.2694 C12.7023 11.8365 13.289 11.5927 13.9012 11.5913 L19.6882 11.5913 C20.3006 11.5925 20.8877 11.8362 21.3209 12.2691 C21.7541 12.702 21.9983 13.2888 22 13.9012 C21.9988 14.5141 21.7549 15.1015 21.3216 15.535 C20.8883 15.9684 20.301 16.2125 19.6882 16.214 L13.9012 16.214 Z" fill="#4a154b"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Slack</p>
            <p style={{ width: "103px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>acme.slack.com</p>
          </div>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4.6px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Connected</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>just now</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "11px 0px 0px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <GitMerge size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>7 workflows</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Activity size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>1.2k calls</p>
          </div>
        </div>
      </div>
      <div style={{ width: "276.8px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <div style={{ width: "22px", height: "22px", flexShrink: 0, borderRadius: "5px", background: "#1a3d6e", position: "relative" }}>
              <p style={{ position: "absolute", left: "4px", top: "4px", margin: 0, textAlign: "left", whiteSpace: "pre", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9px", fontWeight: 600, color: "#ffffff" }}>NS</p>
            </div>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>NetSuite</p>
            <p style={{ width: "151px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Acme Corp · Production</p>
          </div>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4.6px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Connected</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>1 min ago</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "11px 0px 0px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <GitMerge size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>4 workflows</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Activity size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>9.6k calls</p>
          </div>
        </div>
      </div>
      <div style={{ width: "276.8px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "22px", height: "22px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 3.3)" d="M9.17217 1.66375 C9.53177 1.28515 9.96471 0.983746 10.4446 0.777923 C10.9245 0.572101 11.4413 0.466168 11.9634 0.466584 C13.3934 0.466584 14.6712 1.29158 15.3459 2.48783 C15.9234 2.21283 16.5834 2.07533 17.2709 2.07533 C19.8834 2.07533 22 4.22033 22 6.86033 C22 9.50033 19.8825 11.6453 17.2553 11.6453 C16.9391 11.6453 16.6228 11.605 16.3203 11.55 C16.0235 12.0925 15.5859 12.5449 15.0535 12.8594 C14.5211 13.174 13.9137 13.3392 13.2953 13.3375 C12.7453 13.3375 12.2366 13.2 11.7828 12.9937 C11.4789 13.7081 10.9714 14.3172 10.3236 14.7451 C9.67578 15.173 8.91636 15.4008 8.14 15.4 C7.33072 15.4021 6.54037 15.1552 5.87622 14.6928 C5.21208 14.2303 4.70629 13.5747 4.4275 12.815 C4.18 12.8718 3.9325 12.8847 3.67125 12.8847 C1.65092 12.8847 0 11.2347 0 9.17217 C0 7.79717 0.743417 6.60092 1.8425 5.95467 C1.60875 5.43217 1.485 4.85467 1.485 4.2625 C1.485 1.8975 3.41 0 5.7475 0 C7.15 0 8.36 0.64625 9.1575 1.65" fill="#00a1e0"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Salesforce</p>
            <p style={{ width: "156px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>acme.my.salesforce.com</p>
          </div>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4.6px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Connected</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>3 min ago</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "11px 0px 0px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <GitMerge size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>2 workflows</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Activity size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>640 calls</p>
          </div>
        </div>
      </div>
      <div style={{ width: "276.8px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "22px", height: "22px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0.503 0)" d="M16.1476 7.26914 L16.1476 4.66031 C16.4928 4.49888 16.7852 4.24283 16.9908 3.92189 C17.1964 3.60094 17.3067 3.22827 17.309 2.84714 L17.309 2.78573 C17.3075 2.25294 17.0953 1.74237 16.7187 1.36554 C16.342 0.988716 15.8315 0.776253 15.2987 0.77456 L15.2373 0.77456 C14.7047 0.776252 14.1944 0.988589 13.8177 1.36522 C13.4411 1.74185 13.2288 2.25218 13.2271 2.78481 L13.2271 2.84623 C13.2288 3.22515 13.3374 3.5959 13.5404 3.91584 C13.7434 4.23578 14.0326 4.49193 14.3747 4.65481 L14.3867 4.66031 L14.3867 7.27464 C13.3892 7.42704 12.45 7.84143 11.6651 8.47548 L11.6761 8.46631 L4.50041 2.87923 C4.63702 2.36741 4.59189 1.82406 4.37269 1.3418 C4.15349 0.859545 3.77381 0.468248 3.29838 0.234624 C2.82294 0.00100033 2.2812 -0.0604844 1.7655 0.0606527 C1.2498 0.18179 0.792086 0.478049 0.470392 0.898918 C0.148698 1.31979 -0.0170565 1.83921 0.00138887 2.36862 C0.0198342 2.89803 0.221338 3.40466 0.571543 3.80212 C0.921748 4.19957 1.39897 4.46326 1.92185 4.54821 C2.44473 4.63316 2.98088 4.53412 3.43891 4.26798 L3.42791 4.27348 L10.4835 9.76523 C9.85976 10.7004 9.52853 11.8 9.53199 12.9241 C9.53199 14.1551 9.92157 15.2964 10.5834 16.2305 L10.5715 16.2121 L8.42465 18.3599 C8.25279 18.3044 8.07357 18.2751 7.89299 18.2728 L7.89115 18.2728 C7.52257 18.2728 7.16227 18.3821 6.8558 18.5869 C6.54934 18.7917 6.31048 19.0827 6.16943 19.4232 C6.02838 19.7638 5.99147 20.1385 6.06338 20.5 C6.13529 20.8615 6.31278 21.1935 6.5734 21.4541 C6.83403 21.7148 7.16609 21.8923 7.52759 21.9642 C7.88909 22.0361 8.26379 21.9992 8.60432 21.8581 C8.94484 21.7171 9.23589 21.4782 9.44067 21.1717 C9.64544 20.8653 9.75474 20.505 9.75474 20.1364 C9.75225 19.951 9.72134 19.767 9.66307 19.591 L9.66765 19.6038 L11.7916 17.4799 C12.4838 18.0081 13.2875 18.3715 14.1413 18.5424 C14.9951 18.7134 15.8767 18.6873 16.719 18.4662 C17.5612 18.2452 18.342 17.835 19.0019 17.2668 C19.6617 16.6986 20.1833 15.9874 20.5269 15.1873 C20.8706 14.3872 21.0272 13.5192 20.985 12.6495 C20.9427 11.7797 20.7026 10.931 20.283 10.168 C19.8634 9.40501 19.2753 8.74773 18.5635 8.2462 C17.8516 7.74466 17.0348 7.41207 16.1751 7.27373 L16.1421 7.26914 L16.1476 7.26914 Z M15.2639 15.8656 C14.6831 15.864 14.1157 15.6903 13.6335 15.3664 C13.1513 15.0425 12.7759 14.583 12.5548 14.046 C12.3336 13.5089 12.2765 12.9183 12.3907 12.3488 C12.505 11.7793 12.7854 11.2564 13.1967 10.8462 C13.6079 10.436 14.1315 10.1568 14.7013 10.044 C15.2711 9.93114 15.8615 9.98968 16.3981 10.2122 C16.9346 10.4348 17.3932 10.8113 17.7158 11.2943 C18.0385 11.7773 18.2108 12.345 18.211 12.9259 L18.211 12.9277 C18.2111 13.3138 18.1352 13.6961 17.9875 14.0529 C17.8398 14.4096 17.6232 14.7337 17.3502 15.0067 C17.0772 15.2797 16.7531 15.4963 16.3964 15.6439 C16.0397 15.7916 15.6573 15.8676 15.2712 15.8675 L15.2639 15.8656 Z" fill="#ff7a59"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>HubSpot</p>
            <p style={{ width: "105px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Acme Marketing</p>
          </div>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4.6px", background: "#fffbf0", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Clock size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#d99a00", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#d99a00", lineHeight: "20px" }}>Rate limited</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>1 min ago</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "11px 0px 0px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <GitMerge size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>2 workflows</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Activity size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>3.4k calls</p>
          </div>
        </div>
      </div>
      <div style={{ width: "276.8px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "22px", height: "22px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 2.662)" d="M11.8378 0 L11.8378 12.2705 L22 0.0009166 L11.8378 0 Z M0 0.0018332 C0 2.80683 2.27608 5.08383 5.08108 5.08383 C7.88608 5.08383 10.1613 2.80683 10.1622 0.0018332 L0 0.0018332 Z M10.1622 4.40825 L0 16.676 L10.1622 16.676 L10.1622 4.40825 Z M16.918 11.5949 C14.1102 11.5949 11.8378 13.8683 11.8378 16.676 L22 16.676 C22 13.871 19.7267 11.5949 16.9189 11.5949 L16.918 11.5949 Z" fill="#03363d"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Zendesk</p>
            <p style={{ width: "123px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>acme.zendesk.com</p>
          </div>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4.6px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Connected</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>just now</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "11px 0px 0px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <GitMerge size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>3 workflows</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Activity size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>7.1k calls</p>
          </div>
        </div>
      </div>
      <div style={{ width: "276.8px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "22px", height: "22px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3.148 0)" d="M9.6635 8.3875 C7.6725 7.64867 6.58717 7.08033 6.58717 6.17925 C6.58717 5.4175 7.21325 4.983 8.32975 4.983 C10.3712 4.983 12.4685 5.7695 13.9122 6.47808 L14.7281 1.44192 C13.5832 0.89375 11.2411 0 8.00342 0 C5.71358 0 3.80875 0.5995 2.4475 1.716 C1.03217 2.88475 0.296083 4.576 0.296083 6.6165 C0.296083 10.3189 2.5575 11.8965 6.23242 13.2339 C8.602 14.0773 9.39033 14.6768 9.39033 15.6017 C9.39033 16.5 8.62033 17.0179 7.2325 17.0179 C5.51375 17.0179 2.68125 16.1737 0.825 15.0847 L0 20.1768 C1.59592 21.0742 4.53842 22 7.59 22 C10.0109 22 12.0294 21.428 13.3907 20.3381 C14.916 19.1418 15.7052 17.3717 15.7052 15.0838 C15.7052 11.2998 13.3916 9.72033 9.66075 8.3875 L9.6635 8.3875 Z" fill="#635bff"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Stripe</p>
            <p style={{ width: "92px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Acme Inc · live</p>
          </div>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4.6px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Connected</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>8 min ago</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "11px 0px 0px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <GitMerge size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>1 workflow</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Activity size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>210 calls</p>
          </div>
        </div>
      </div>
      <div style={{ width: "276.8px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "22px", height: "22px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M11 0 C8.08262 2.64603e-15 5.28473 1.15893 3.22183 3.22183 C1.15893 5.28473 3.05311e-15 8.08262 0 11 C3.86728e-15 13.9174 1.15893 16.7153 3.22183 18.7782 C5.28473 20.8411 8.08262 22 11 22 C13.9174 22 16.7153 20.8411 18.7782 18.7782 C20.8411 16.7153 22 13.9174 22 11 C22 8.08262 20.8411 5.28473 18.7782 3.22183 C16.7153 1.15893 13.9174 1.7301e-15 11 0 Z M11.5885 3.78904 C12.4643 3.78904 13.174 4.50038 13.174 5.37781 L13.174 13.689 L14.6406 13.689 C16.1201 13.689 17.3242 12.483 17.3242 11.0004 C17.3242 9.51784 16.12 8.31151 14.6405 8.31151 L14.0306 8.31151 L14.0306 6.72228 L14.6405 6.72228 C16.9984 6.72228 18.9101 8.63784 18.9101 11.0004 C18.9101 13.363 16.9984 15.2781 14.6405 15.2781 L11.5885 15.2781 L11.5885 3.78904 Z M7.31839 6.72192 L10.3701 6.72192 L10.3701 18.2105 C9.49419 18.2105 8.78423 17.4993 8.78423 16.6217 L8.78423 8.31068 L7.31839 8.31068 C5.83834 8.31068 4.63467 9.51702 4.63467 10.9996 C4.63467 12.4823 5.83834 13.6885 7.31839 13.6885 L7.92834 13.6885 L7.92834 15.2773 L7.31839 15.2773 C4.96027 15.2773 3.04883 13.3622 3.04883 10.9996 C3.04883 8.63729 4.96027 6.72192 7.31839 6.72192 Z" fill="#2ca01c"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>QuickBooks</p>
            <p style={{ width: "83px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Acme UK Ltd</p>
          </div>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4.6px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Connected</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>1 h ago</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "11px 0px 0px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <GitMerge size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>1 workflow</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Activity size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>96 calls</p>
          </div>
        </div>
      </div>
      <div style={{ width: "276.8px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "22px", height: "22px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 3 0)" d="M7.37458 11.4996 L4.25058 11.4996 L4.25058 9.74967 L7.37642 9.74967 L7.37642 11.5005 L7.37458 11.4996 Z M10.5004 0 L10.5004 5.5 L16.0004 5.5 L10.5004 0 Z M11.7498 9.74967 L8.624 9.74967 L8.624 11.5005 L11.7498 11.5005 L11.7498 9.74967 Z M11.7498 12.7499 L8.624 12.7499 L8.624 14.5008 L11.7498 14.5008 L11.7498 12.7499 Z M15.9995 5.95833 L15.9995 20.5003 C15.9995 21.329 15.3285 22 14.4998 22 L1.49967 22 C1.30273 22 1.10772 21.9612 0.925769 21.8858 C0.743821 21.8105 0.578499 21.7 0.439242 21.5608 C0.158 21.2795 0 20.8981 0 20.5003 L0 1.49967 C4.07082e-16 0.671 0.671 0 1.49967 0 L10.0412 0 L10.0412 5.95833 L15.9995 5.95833 Z M12.9993 8.50025 L2.99933 8.50025 L2.99933 15.7502 L13.0002 15.7502 L13.0002 8.49933 L12.9993 8.50025 Z M7.37458 12.7499 L4.25058 12.7499 L4.25058 14.5008 L7.37642 14.5008 L7.37642 12.7499 L7.37458 12.7499 Z" fill="#34a853"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Google Sheets</p>
            <p style={{ width: "102px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>ops@acme.com</p>
          </div>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4.6px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Connected</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>5 min ago</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "11px 0px 0px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <GitMerge size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>3 workflows</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Activity size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>880 calls</p>
          </div>
        </div>
      </div>
      <div style={{ width: "276.8px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "22px", height: "22px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 1.361)" d="M11.0092 0 C9.10067 0 7.568 0.0183333 7.57808 0.0430833 C7.58725 0.0614166 9.14375 2.794 11.0376 6.11142 L14.4843 12.1376 L17.9309 12.1376 C19.8385 12.1376 21.3712 12.1192 21.3611 12.0945 C21.3565 12.0762 19.7954 9.34358 17.9007 6.02617 L14.454 0 L11.0092 0 Z M6.64583 1.58583 C5.52777 3.51151 4.41859 5.44234 3.31833 7.37825 L0 13.1844 L1.7325 16.2076 L3.46042 19.2298 L6.77875 13.4227 L10.0953 7.62025 L8.37192 4.60717 C7.425 2.95075 6.65042 1.59133 6.64583 1.58583 Z M8.71658 13.1844 L8.5305 13.5034 C8.426 13.6849 7.6505 15.0361 6.80717 16.5165 C6.292 17.4261 5.77316 18.3336 5.25067 19.239 C5.2415 19.2628 8.22067 19.2775 11.8708 19.2775 L18.5112 19.2775 L20.1575 16.3836 C21.0668 14.7941 21.8533 13.4227 21.9047 13.3375 L22 13.1844 L15.3551 13.1844 L8.71658 13.1844 Z" fill="#4285f4"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Google Drive</p>
            <p style={{ width: "141px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>Shared drive · Finance</p>
          </div>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4.6px", background: "#f6fffb", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <CircleCheck size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#17a673", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#17a673", lineHeight: "20px" }}>Connected</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>12 min ago</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "11px 0px 0px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <GitMerge size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>2 workflows</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Activity size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>150 calls</p>
          </div>
        </div>
      </div>
      <div style={{ width: "276.8px", flexShrink: 0, borderRadius: "12px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed", display: "flex", flexDirection: "column", padding: "17px 17px 17px 17px", gap: "12px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ width: "40px", height: "40px", flexShrink: 0, borderRadius: "11px", background: "#ffffff", boxShadow: "inset 0 0 0 1px #ededed, 0px 1px 2px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "1px 1px 1px 1px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <svg style={{ width: "22px", height: "22px", flexShrink: 0, display: "block", lineHeight: 0 }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M10.6067 10.5536 L0 10.5536 C0.00035936 11.1826 0.12477 11.8053 0.366111 12.3861 C0.607451 12.967 0.960982 13.4945 1.40646 13.9386 C1.85195 14.3826 2.38063 14.7344 2.96226 14.9739 C3.54388 15.2133 4.16702 15.3357 4.796 15.334 L6.7485 15.334 L6.7485 17.2196 C6.7485 18.4871 7.2519 19.7028 8.148 20.5992 C9.04411 21.4957 10.2596 21.9995 11.5271 22 L11.5271 11.4748 C11.5271 11.2305 11.43 10.9962 11.2573 10.8234 C11.0845 10.6506 10.8502 10.5536 10.6058 10.5536 L10.6067 10.5536 Z M15.8528 5.27725 L5.258 5.27725 C5.25824 6.54494 5.762 7.76062 6.65848 8.65692 C7.55495 9.55323 8.77073 10.0568 10.0384 10.0568 L11.99 10.0568 L11.99 11.9433 C11.991 13.2107 12.495 14.426 13.3913 15.3221 C14.2876 16.2183 15.503 16.722 16.7704 16.7227 L16.7704 6.19483 C16.7704 5.95148 16.6737 5.71808 16.5017 5.546 C16.3296 5.37392 16.0962 5.27725 15.8528 5.27725 Z M21.0952 0 L10.5004 0 C10.5004 1.26785 11.0041 2.48376 11.9006 3.38026 C12.7971 4.27677 14.013 4.78042 15.2808 4.78042 L17.2324 4.78042 L17.2324 6.666 C17.2334 7.93099 17.7357 9.14403 18.6293 10.0394 C19.5229 10.9347 20.735 11.4394 22 11.4427 L22 0.92125 C22.001 0.679465 21.9065 0.447061 21.7371 0.274553 C21.5677 0.102046 21.337 0.00337961 21.0952 0 Z" fill="#0052cc"/></svg>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Jira</p>
            <p style={{ width: "120px", flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>acme.atlassian.net</p>
          </div>
          <div style={{ width: "28px", height: "28px", flexShrink: 0, borderRadius: "7px", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
            <Dots size={16} style={{ width: "16px", height: "16px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          </div>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "row", gap: "8px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, borderRadius: "4.6px", background: "#f7f8fa", display: "flex", flexDirection: "row", padding: "2px 8px 2px 8px", gap: "3px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <PlayerPause size={12} style={{ width: "12px", height: "12px", flexShrink: 0, color: "#697386", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#697386", lineHeight: "20px" }}>Paused</p>
          </div>
          <div style={{ flex: "1 1 0", minWidth: 0, height: "1px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#b3b3b3", lineHeight: "20px" }}>2 d ago</p>
        </div>
        <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 1px 0 0 #e9e9e9", display: "flex", flexDirection: "row", padding: "11px 0px 0px 0px", gap: "12px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <GitMerge size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>1 workflow</p>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "4px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <Activity size={14} style={{ width: "14px", height: "14px", flexShrink: 0, color: "#929292", display: "block" }} />
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>0 calls</p>
          </div>
        </div>
      </div>
      <div style={{ width: "276.8px", height: "153px", flexShrink: 0, borderRadius: "12px", background: "#f9f9f9", boxShadow: "inset 0 0 0 1px #dfe0e5", display: "flex", flexDirection: "column", padding: "1px 1px 1px 1px", gap: "8px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "36px", height: "36px", flexShrink: 0, borderRadius: "10px", background: "#ffffff", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Plus size={18} style={{ width: "18px", height: "18px", flexShrink: 0, color: "#1b8ce8", display: "block" }} />
        </div>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#15171c", lineHeight: "20px" }}>Add connector</p>
        <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", fontFamily: "'Geist'", fontSize: "14px", fontWeight: 400, color: "#747474", lineHeight: "20px" }}>140+ apps, or any REST API</p>
      </div>
    </div>
  );
}
