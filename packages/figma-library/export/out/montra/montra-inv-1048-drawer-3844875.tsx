"use client";
// INV-1048 drawer (montra, Drawers) from Ingot UI (ingotui.com).
// Generated from the Figma original and checked against it. Fonts: Geist, Geist Mono. Icons: Ingot Icons.
import { useEffect, useRef } from "react";
import { Download, FileInvoice, Link, Printer, Send, X } from "ingotui-icons/react/stroke-rounded";

export function INV1048Drawer() {
  const fuRef = useRef<any>(null);
  useEffect(() => fuInteract(fuRef.current), []);
  return (
    <div ref={fuRef} style={{ width: "493.5px", height: "981.07px", borderRadius: "14.62px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 18.28px 40.21px -10.97px rgba(13, 13, 18, 0.12), 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.05)", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
      <div style={{ alignSelf: "stretch", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "16.45px 18.28px 15.53px 18.28px", gap: "10.97px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <div style={{ width: "34.73px", height: "34.73px", flexShrink: 0, borderRadius: "6.95px", background: "linear-gradient(180deg, #4a96fe 0%, #adcfff 100%)", boxShadow: "0px 0.91px 1.83px 0px rgba(0, 0, 0, 0.08)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <FileInvoice size={16.7} strokeWidth={1.49} style={{ width: "16.67px", height: "16.67px", flexShrink: 0, color: "#ffffff", display: "block" }} />
        </div>
        <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "69px", lineHeight: "20px", fontFamily: "'Geist'", fontSize: "15.54px", fontWeight: 500, color: "#202020" }}>INV-1048</p>
            <div style={{ height: "23.3px", flexShrink: 0, borderRadius: "999px", background: "#f6f6ff", display: "flex", flexDirection: "row", padding: "0px 9.14px 0px 9.14px", gap: "3.66px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <svg style={{ width: "7.31px", height: "7.31px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="7.31" viewBox="0 0 7.31 7.31" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#4e57ed"/></svg>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "25px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#4e57ed" }}>Sent</p>
            </div>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "205px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#6b6b6b" }}>Northwind Studio · $1,600 due Sep 07</p>
        </div>
        <div data-fu="btn" style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 3.11px 3.11px 0px rgba(0, 0, 0, 0.05), inset 0px 3.11px 3.11px 0px rgba(255, 255, 255, 0.29)", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Printer size={13.7} strokeWidth={1.51} style={{ width: "13.71px", height: "13.71px", flexShrink: 0, color: "#686765", display: "block" }} />
        </div>
        <div data-fu="btn" style={{ width: "27.42px", height: "27.42px", flexShrink: 0, borderRadius: "6.4px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 3.11px 3.11px 0px rgba(0, 0, 0, 0.05), inset 0px 3.11px 3.11px 0px rgba(255, 255, 255, 0.29)", display: "flex", flexDirection: "row", padding: "0.91px 0.91px 0.91px 0.91px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <X size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#686765", display: "block" }} />
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flexShrink: 0, display: "flex", flexDirection: "column", padding: "14.62px 18.28px 14.62px 18.28px", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
        <div style={{ width: "456.94px", flexShrink: 0, borderRadius: "10.97px", background: "#fafafa", boxShadow: "inset 0 0 0 0.91px #ededed", display: "flex", flexDirection: "column", padding: "13.7px 13.7px 13.7px 13.7px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ alignSelf: "stretch", flexShrink: 0, borderRadius: "5.48px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "column", padding: "21.02px 21.02px 21.02px 21.02px", gap: "14.62px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div data-fu="row" style={{ width: "391.14px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <div style={{ width: "23.76px", height: "23.76px", flexShrink: 0, borderRadius: "5.48px", background: "#222222", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "13px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.14px", fontWeight: 600, color: "#ffffff" }}>A&</p>
                </div>
                <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "0.91px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 500, color: "#202020" }}>Alder & Co.</p>
                  <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "117px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.14px", fontWeight: 400, color: "#a6a6a6" }}>Design & engineering studio</p>
                </div>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#a6a6a6", letterSpacing: "0.08em" }}>INVOICE</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "17px", fontFamily: "'Geist Mono'", fontSize: "12.79px", fontWeight: 500, color: "#202020" }}>INV-1048</p>
              </div>
            </div>
            <div data-fu="row" style={{ width: "391.14px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "45px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.14px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Billed to</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "83px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#222222" }}>Northwind Studio</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#6b6b6b" }}>Accounts payable</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#6b6b6b" }}>Portland, OR</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "33px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.14px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Issued</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "65px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#222222" }}>Aug 08, 2026</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "32px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#6b6b6b" }}>Net 30</p>
              </div>
              <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "2.74px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "19px", lineHeight: "12px", fontFamily: "'Geist'", fontSize: "9.14px", fontWeight: 500, color: "#a6a6a6", textTransform: "uppercase" }}>Due</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "62px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#222222" }}>Sep 07, 2026</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "21px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#6b6b6b" }}>USD</p>
              </div>
            </div>
            <div style={{ width: "391.14px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <div data-fu="row" style={{ width: "391.14px", height: "23.76px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#a6a6a6" }}>Description</p>
                <p style={{ width: "45.69px", height: "13px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>Qty</p>
                <p style={{ width: "73.11px", height: "13px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#a6a6a6" }}>Amount</p>
              </div>
              <div data-fu="row" style={{ width: "391.14px", height: "27.42px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#222222" }}>Brand system · phase 2</p>
                <p style={{ width: "45.69px", height: "13px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#6b6b6b" }}>1</p>
                <p style={{ width: "73.11px", height: "13px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#222222" }}>$1,200.00</p>
              </div>
              <div data-fu="row" style={{ width: "391.14px", height: "27.42px", flexShrink: 0, boxShadow: "inset 0 -0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "0px 0px 0.91px 0px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#222222" }}>Motion guidelines</p>
                <p style={{ width: "45.69px", height: "13px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#6b6b6b" }}>1</p>
                <p style={{ width: "73.11px", height: "13px", flexShrink: 0, margin: 0, textAlign: "right", whiteSpace: "pre-wrap", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 500, color: "#222222" }}>$400.00</p>
              </div>
            </div>
            <div style={{ width: "391.14px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-end", boxSizing: "border-box" }}>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "21.93px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "39px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#6b6b6b" }}>Subtotal</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#222222" }}>$1,600.00</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "21.93px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "16px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#6b6b6b" }}>Tax</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "28px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#222222" }}>$0.00</p>
              </div>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "21.93px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "47px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#202020" }}>Total due</p>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "70px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#202020" }}>$1,600.00</p>
              </div>
            </div>
            <div data-fu="row" style={{ width: "391.14px", flexShrink: 0, borderRadius: "5.48px", background: "rgba(73, 150, 254, 0.07)", display: "flex", flexDirection: "row", padding: "7.31px 9.14px 7.31px 9.14px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
              <Link size={12.8} style={{ width: "12.79px", height: "12.79px", flexShrink: 0, color: "#1f6fe0", display: "block" }} />
              <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#1f6fe0" }}>Pay online · pay.montra.app/alder/inv-1048</p>
            </div>
          </div>
        </div>
        <div style={{ width: "456.94px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "53px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Activity</p>
          </div>
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "78px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Viewed 2 times</p>
        </div>
        <div style={{ width: "456.94px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <svg style={{ width: "7.31px", height: "10.97px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="10.97" viewBox="0 0 7.31 10.97" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 3.66)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#8e83fd"/></svg>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "131px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>Created by Alex Morgan</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>Aug 08 · 10:12</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <svg style={{ width: "7.31px", height: "10.97px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="10.97" viewBox="0 0 7.31 10.97" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 3.66)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#4996fe"/></svg>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "158px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>Sent to ap@northwind.studio</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "64px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>Aug 08 · 10:14</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <svg style={{ width: "7.31px", height: "10.97px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="10.97" viewBox="0 0 7.31 10.97" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 3.66)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#63c093"/></svg>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "92px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>Opened by client</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "68px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>Aug 09 · 08:47</p>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "9.14px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <svg style={{ width: "7.31px", height: "10.97px", flexShrink: 0, display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="7.31" height="10.97" viewBox="0 0 7.31 10.97" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 3.66)" d="M7.31 3.655 C7.31 5.6736 5.6736 7.31 3.655 7.31 C1.6364 7.31 0 5.6736 0 3.655 C0 1.6364 1.6364 0 3.655 0 C5.6736 0 7.31 1.6364 7.31 3.655 Z" fill="#d4d4d8"/></svg>
            <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "1.83px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "101px", lineHeight: "15px", fontFamily: "'Geist'", fontSize: "11.88px", fontWeight: 400, color: "#222222" }}>Payment expected</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "155px", lineHeight: "13px", fontFamily: "'Geist'", fontSize: "10.05px", fontWeight: 400, color: "#a6a6a6" }}>by Sep 07 · auto-reminder Sep 04</p>
            </div>
          </div>
        </div>
        <div style={{ width: "455.12px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", boxSizing: "border-box" }}>
          <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: "3.66px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "171px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000" }}>Northwind Studio history</p>
          </div>
        </div>
        <div style={{ width: "455.12px", flexShrink: 0, borderRadius: "10.97px", background: "#fefefe", boxShadow: "inset 0 0 0 0.91px #e8e8e8", display: "flex", flexDirection: "column", padding: "13.7px 13.7px 13.7px 13.7px", gap: "12.79px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
          <div style={{ width: "429.53px", flexShrink: 0, display: "flex", flexDirection: "row", gap: "10.97px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "71px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Lifetime billed</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>$38,400</p>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "63px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Paid on time</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>13 of 14</p>
              </div>
            </div>
            <div style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "82px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Avg. days to pay</p>
              <div style={{ flexShrink: 0, display: "flex", flexDirection: "row", gap: "5.48px", justifyContent: "flex-start", alignItems: "baseline", boxSizing: "border-box" }}>
                <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "50px", lineHeight: "19px", fontFamily: "'Geist'", fontSize: "14.62px", fontWeight: 500, color: "#000000", letterSpacing: "-0.02em" }}>12 days</p>
              </div>
            </div>
          </div>
          <div style={{ width: "429.53px", flexShrink: 0, display: "flex", flexDirection: "column", gap: "5.48px", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }}>
            <div style={{ width: "429.53px", height: "9.14px", flexShrink: 0, position: "relative" }}>
              <div style={{ position: "absolute", left: "0px", top: "0px", width: "14.32px", height: "9.14px", borderRadius: "2.74px", background: "linear-gradient(90deg, #89bbfe 0%, #4996fe 100%)", boxShadow: "inset 0 0 0 1px rgba(57, 117, 198, 0.38), inset 0px 0.91px 0px 0px rgba(255, 255, 255, 0.32), inset 0px 0px 5.48px 0px rgba(255, 255, 255, 0.18), 0px 0.91px 1.37px 0px rgba(13, 13, 18, 0.09)", overflow: "hidden" }} />
              <svg style={{ position: "absolute", left: "17.98px", top: "0px", width: "411.05px", height: "9.14px", display: "block", lineHeight: 0, overflow: "visible" }} xmlns="http://www.w3.org/2000/svg" width="411.05" height="9.14" viewBox="0 0 411.05 9.14" fill="none" overflow="visible"><path transform="matrix(1 0 0 1 0 0)" d="M0 0 L-0.5 0 L-0.5 9.14 L0 9.14 L0.5 9.14 L0.5 0 L0 0 Z M2.94 0 L2.44 0 L2.44 9.14 L2.94 9.14 L3.44 9.14 L3.44 0 L2.94 0 Z M5.87 0 L5.37 0 L5.37 9.14 L5.87 9.14 L6.37 9.14 L6.37 0 L5.87 0 Z M8.81 0 L8.31 0 L8.31 9.14 L8.81 9.14 L9.31 9.14 L9.31 0 L8.81 0 Z M11.74 0 L11.24 0 L11.24 9.14 L11.74 9.14 L12.24 9.14 L12.24 0 L11.74 0 Z M14.68 0 L14.18 0 L14.18 9.14 L14.68 9.14 L15.18 9.14 L15.18 0 L14.68 0 Z M17.62 0 L17.12 0 L17.12 9.14 L17.62 9.14 L18.12 9.14 L18.12 0 L17.62 0 Z M20.55 0 L20.05 0 L20.05 9.14 L20.55 9.14 L21.05 9.14 L21.05 0 L20.55 0 Z M23.49 0 L22.99 0 L22.99 9.14 L23.49 9.14 L23.99 9.14 L23.99 0 L23.49 0 Z M26.42 0 L25.92 0 L25.92 9.14 L26.42 9.14 L26.92 9.14 L26.92 0 L26.42 0 Z M29.36 0 L28.86 0 L28.86 9.14 L29.36 9.14 L29.86 9.14 L29.86 0 L29.36 0 Z M32.3 0 L31.8 0 L31.8 9.14 L32.3 9.14 L32.8 9.14 L32.8 0 L32.3 0 Z M35.23 0 L34.73 0 L34.73 9.14 L35.23 9.14 L35.73 9.14 L35.73 0 L35.23 0 Z M38.17 0 L37.67 0 L37.67 9.14 L38.17 9.14 L38.67 9.14 L38.67 0 L38.17 0 Z M41.11 0 L40.61 0 L40.61 9.14 L41.11 9.14 L41.61 9.14 L41.61 0 L41.11 0 Z M44.04 0 L43.54 0 L43.54 9.14 L44.04 9.14 L44.54 9.14 L44.54 0 L44.04 0 Z M46.98 0 L46.48 0 L46.48 9.14 L46.98 9.14 L47.48 9.14 L47.48 0 L46.98 0 Z M49.91 0 L49.41 0 L49.41 9.14 L49.91 9.14 L50.41 9.14 L50.41 0 L49.91 0 Z M52.85 0 L52.35 0 L52.35 9.14 L52.85 9.14 L53.35 9.14 L53.35 0 L52.85 0 Z M55.79 0 L55.29 0 L55.29 9.14 L55.79 9.14 L56.29 9.14 L56.29 0 L55.79 0 Z M58.72 0 L58.22 0 L58.22 9.14 L58.72 9.14 L59.22 9.14 L59.22 0 L58.72 0 Z M61.66 0 L61.16 0 L61.16 9.14 L61.66 9.14 L62.16 9.14 L62.16 0 L61.66 0 Z M64.59 0 L64.09 0 L64.09 9.14 L64.59 9.14 L65.09 9.14 L65.09 0 L64.59 0 Z M67.53 0 L67.03 0 L67.03 9.14 L67.53 9.14 L68.03 9.14 L68.03 0 L67.53 0 Z M70.47 0 L69.97 0 L69.97 9.14 L70.47 9.14 L70.97 9.14 L70.97 0 L70.47 0 Z M73.4 0 L72.9 0 L72.9 9.14 L73.4 9.14 L73.9 9.14 L73.9 0 L73.4 0 Z M76.34 0 L75.84 0 L75.84 9.14 L76.34 9.14 L76.84 9.14 L76.84 0 L76.34 0 Z M79.27 0 L78.77 0 L78.77 9.14 L79.27 9.14 L79.77 9.14 L79.77 0 L79.27 0 Z M82.21 0 L81.71 0 L81.71 9.14 L82.21 9.14 L82.71 9.14 L82.71 0 L82.21 0 Z M85.15 0 L84.65 0 L84.65 9.14 L85.15 9.14 L85.65 9.14 L85.65 0 L85.15 0 Z M88.08 0 L87.58 0 L87.58 9.14 L88.08 9.14 L88.58 9.14 L88.58 0 L88.08 0 Z M91.02 0 L90.52 0 L90.52 9.14 L91.02 9.14 L91.52 9.14 L91.52 0 L91.02 0 Z M93.95 0 L93.45 0 L93.45 9.14 L93.95 9.14 L94.45 9.14 L94.45 0 L93.95 0 Z M96.89 0 L96.39 0 L96.39 9.14 L96.89 9.14 L97.39 9.14 L97.39 0 L96.89 0 Z M99.83 0 L99.33 0 L99.33 9.14 L99.83 9.14 L100.33 9.14 L100.33 0 L99.83 0 Z M102.76 0 L102.26 0 L102.26 9.14 L102.76 9.14 L103.26 9.14 L103.26 0 L102.76 0 Z M105.7 0 L105.2 0 L105.2 9.14 L105.7 9.14 L106.2 9.14 L106.2 0 L105.7 0 Z M108.64 0 L108.14 0 L108.14 9.14 L108.64 9.14 L109.14 9.14 L109.14 0 L108.64 0 Z M111.57 0 L111.07 0 L111.07 9.14 L111.57 9.14 L112.07 9.14 L112.07 0 L111.57 0 Z M114.51 0 L114.01 0 L114.01 9.14 L114.51 9.14 L115.01 9.14 L115.01 0 L114.51 0 Z M117.44 0 L116.94 0 L116.94 9.14 L117.44 9.14 L117.94 9.14 L117.94 0 L117.44 0 Z M120.38 0 L119.88 0 L119.88 9.14 L120.38 9.14 L120.88 9.14 L120.88 0 L120.38 0 Z M123.32 0 L122.82 0 L122.82 9.14 L123.32 9.14 L123.82 9.14 L123.82 0 L123.32 0 Z M126.25 0 L125.75 0 L125.75 9.14 L126.25 9.14 L126.75 9.14 L126.75 0 L126.25 0 Z M129.19 0 L128.69 0 L128.69 9.14 L129.19 9.14 L129.69 9.14 L129.69 0 L129.19 0 Z M132.12 0 L131.62 0 L131.62 9.14 L132.12 9.14 L132.62 9.14 L132.62 0 L132.12 0 Z M135.06 0 L134.56 0 L134.56 9.14 L135.06 9.14 L135.56 9.14 L135.56 0 L135.06 0 Z M138 0 L137.5 0 L137.5 9.14 L138 9.14 L138.5 9.14 L138.5 0 L138 0 Z M140.93 0 L140.43 0 L140.43 9.14 L140.93 9.14 L141.43 9.14 L141.43 0 L140.93 0 Z M143.87 0 L143.37 0 L143.37 9.14 L143.87 9.14 L144.37 9.14 L144.37 0 L143.87 0 Z M146.8 0 L146.3 0 L146.3 9.14 L146.8 9.14 L147.3 9.14 L147.3 0 L146.8 0 Z M149.74 0 L149.24 0 L149.24 9.14 L149.74 9.14 L150.24 9.14 L150.24 0 L149.74 0 Z M152.68 0 L152.18 0 L152.18 9.14 L152.68 9.14 L153.18 9.14 L153.18 0 L152.68 0 Z M155.61 0 L155.11 0 L155.11 9.14 L155.61 9.14 L156.11 9.14 L156.11 0 L155.61 0 Z M158.55 0 L158.05 0 L158.05 9.14 L158.55 9.14 L159.05 9.14 L159.05 0 L158.55 0 Z M161.48 0 L160.98 0 L160.98 9.14 L161.48 9.14 L161.98 9.14 L161.98 0 L161.48 0 Z M164.42 0 L163.92 0 L163.92 9.14 L164.42 9.14 L164.92 9.14 L164.92 0 L164.42 0 Z M167.36 0 L166.86 0 L166.86 9.14 L167.36 9.14 L167.86 9.14 L167.86 0 L167.36 0 Z M170.29 0 L169.79 0 L169.79 9.14 L170.29 9.14 L170.79 9.14 L170.79 0 L170.29 0 Z M173.23 0 L172.73 0 L172.73 9.14 L173.23 9.14 L173.73 9.14 L173.73 0 L173.23 0 Z M176.17 0 L175.67 0 L175.67 9.14 L176.17 9.14 L176.67 9.14 L176.67 0 L176.17 0 Z M179.1 0 L178.6 0 L178.6 9.14 L179.1 9.14 L179.6 9.14 L179.6 0 L179.1 0 Z M182.04 0 L181.54 0 L181.54 9.14 L182.04 9.14 L182.54 9.14 L182.54 0 L182.04 0 Z M184.97 0 L184.47 0 L184.47 9.14 L184.97 9.14 L185.47 9.14 L185.47 0 L184.97 0 Z M187.91 0 L187.41 0 L187.41 9.14 L187.91 9.14 L188.41 9.14 L188.41 0 L187.91 0 Z M190.85 0 L190.35 0 L190.35 9.14 L190.85 9.14 L191.35 9.14 L191.35 0 L190.85 0 Z M193.78 0 L193.28 0 L193.28 9.14 L193.78 9.14 L194.28 9.14 L194.28 0 L193.78 0 Z M196.72 0 L196.22 0 L196.22 9.14 L196.72 9.14 L197.22 9.14 L197.22 0 L196.72 0 Z M199.65 0 L199.15 0 L199.15 9.14 L199.65 9.14 L200.15 9.14 L200.15 0 L199.65 0 Z M202.59 0 L202.09 0 L202.09 9.14 L202.59 9.14 L203.09 9.14 L203.09 0 L202.59 0 Z M205.53 0 L205.03 0 L205.03 9.14 L205.53 9.14 L206.03 9.14 L206.03 0 L205.53 0 Z M208.46 0 L207.96 0 L207.96 9.14 L208.46 9.14 L208.96 9.14 L208.96 0 L208.46 0 Z M211.4 0 L210.9 0 L210.9 9.14 L211.4 9.14 L211.9 9.14 L211.9 0 L211.4 0 Z M214.33 0 L213.83 0 L213.83 9.14 L214.33 9.14 L214.83 9.14 L214.83 0 L214.33 0 Z M217.27 0 L216.77 0 L216.77 9.14 L217.27 9.14 L217.77 9.14 L217.77 0 L217.27 0 Z M220.21 0 L219.71 0 L219.71 9.14 L220.21 9.14 L220.71 9.14 L220.71 0 L220.21 0 Z M223.14 0 L222.64 0 L222.64 9.14 L223.14 9.14 L223.64 9.14 L223.64 0 L223.14 0 Z M226.08 0 L225.58 0 L225.58 9.14 L226.08 9.14 L226.58 9.14 L226.58 0 L226.08 0 Z M229.01 0 L228.51 0 L228.51 9.14 L229.01 9.14 L229.51 9.14 L229.51 0 L229.01 0 Z M231.95 0 L231.45 0 L231.45 9.14 L231.95 9.14 L232.45 9.14 L232.45 0 L231.95 0 Z M234.89 0 L234.39 0 L234.39 9.14 L234.89 9.14 L235.39 9.14 L235.39 0 L234.89 0 Z M237.82 0 L237.32 0 L237.32 9.14 L237.82 9.14 L238.32 9.14 L238.32 0 L237.82 0 Z M240.76 0 L240.26 0 L240.26 9.14 L240.76 9.14 L241.26 9.14 L241.26 0 L240.76 0 Z M243.7 0 L243.2 0 L243.2 9.14 L243.7 9.14 L244.2 9.14 L244.2 0 L243.7 0 Z M246.63 0 L246.13 0 L246.13 9.14 L246.63 9.14 L247.13 9.14 L247.13 0 L246.63 0 Z M249.57 0 L249.07 0 L249.07 9.14 L249.57 9.14 L250.07 9.14 L250.07 0 L249.57 0 Z M252.5 0 L252 0 L252 9.14 L252.5 9.14 L253 9.14 L253 0 L252.5 0 Z M255.44 0 L254.94 0 L254.94 9.14 L255.44 9.14 L255.94 9.14 L255.94 0 L255.44 0 Z M258.38 0 L257.88 0 L257.88 9.14 L258.38 9.14 L258.88 9.14 L258.88 0 L258.38 0 Z M261.31 0 L260.81 0 L260.81 9.14 L261.31 9.14 L261.81 9.14 L261.81 0 L261.31 0 Z M264.25 0 L263.75 0 L263.75 9.14 L264.25 9.14 L264.75 9.14 L264.75 0 L264.25 0 Z M267.18 0 L266.68 0 L266.68 9.14 L267.18 9.14 L267.68 9.14 L267.68 0 L267.18 0 Z M270.12 0 L269.62 0 L269.62 9.14 L270.12 9.14 L270.62 9.14 L270.62 0 L270.12 0 Z M273.06 0 L272.56 0 L272.56 9.14 L273.06 9.14 L273.56 9.14 L273.56 0 L273.06 0 Z M275.99 0 L275.49 0 L275.49 9.14 L275.99 9.14 L276.49 9.14 L276.49 0 L275.99 0 Z M278.93 0 L278.43 0 L278.43 9.14 L278.93 9.14 L279.43 9.14 L279.43 0 L278.93 0 Z M281.86 0 L281.36 0 L281.36 9.14 L281.86 9.14 L282.36 9.14 L282.36 0 L281.86 0 Z M284.8 0 L284.3 0 L284.3 9.14 L284.8 9.14 L285.3 9.14 L285.3 0 L284.8 0 Z M287.74 0 L287.24 0 L287.24 9.14 L287.74 9.14 L288.24 9.14 L288.24 0 L287.74 0 Z M290.67 0 L290.17 0 L290.17 9.14 L290.67 9.14 L291.17 9.14 L291.17 0 L290.67 0 Z M293.61 0 L293.11 0 L293.11 9.14 L293.61 9.14 L294.11 9.14 L294.11 0 L293.61 0 Z M296.54 0 L296.04 0 L296.04 9.14 L296.54 9.14 L297.04 9.14 L297.04 0 L296.54 0 Z M299.48 0 L298.98 0 L298.98 9.14 L299.48 9.14 L299.98 9.14 L299.98 0 L299.48 0 Z M302.42 0 L301.92 0 L301.92 9.14 L302.42 9.14 L302.92 9.14 L302.92 0 L302.42 0 Z M305.35 0 L304.85 0 L304.85 9.14 L305.35 9.14 L305.85 9.14 L305.85 0 L305.35 0 Z M308.29 0 L307.79 0 L307.79 9.14 L308.29 9.14 L308.79 9.14 L308.79 0 L308.29 0 Z M311.23 0 L310.73 0 L310.73 9.14 L311.23 9.14 L311.73 9.14 L311.73 0 L311.23 0 Z M314.16 0 L313.66 0 L313.66 9.14 L314.16 9.14 L314.66 9.14 L314.66 0 L314.16 0 Z M317.1 0 L316.6 0 L316.6 9.14 L317.1 9.14 L317.6 9.14 L317.6 0 L317.1 0 Z M320.03 0 L319.53 0 L319.53 9.14 L320.03 9.14 L320.53 9.14 L320.53 0 L320.03 0 Z M322.97 0 L322.47 0 L322.47 9.14 L322.97 9.14 L323.47 9.14 L323.47 0 L322.97 0 Z M325.91 0 L325.41 0 L325.41 9.14 L325.91 9.14 L326.41 9.14 L326.41 0 L325.91 0 Z M328.84 0 L328.34 0 L328.34 9.14 L328.84 9.14 L329.34 9.14 L329.34 0 L328.84 0 Z M331.78 0 L331.28 0 L331.28 9.14 L331.78 9.14 L332.28 9.14 L332.28 0 L331.78 0 Z M334.71 0 L334.21 0 L334.21 9.14 L334.71 9.14 L335.21 9.14 L335.21 0 L334.71 0 Z M337.65 0 L337.15 0 L337.15 9.14 L337.65 9.14 L338.15 9.14 L338.15 0 L337.65 0 Z M340.59 0 L340.09 0 L340.09 9.14 L340.59 9.14 L341.09 9.14 L341.09 0 L340.59 0 Z M343.52 0 L343.02 0 L343.02 9.14 L343.52 9.14 L344.02 9.14 L344.02 0 L343.52 0 Z M346.46 0 L345.96 0 L345.96 9.14 L346.46 9.14 L346.96 9.14 L346.96 0 L346.46 0 Z M349.39 0 L348.89 0 L348.89 9.14 L349.39 9.14 L349.89 9.14 L349.89 0 L349.39 0 Z M352.33 0 L351.83 0 L351.83 9.14 L352.33 9.14 L352.83 9.14 L352.83 0 L352.33 0 Z M355.27 0 L354.77 0 L354.77 9.14 L355.27 9.14 L355.77 9.14 L355.77 0 L355.27 0 Z M358.2 0 L357.7 0 L357.7 9.14 L358.2 9.14 L358.7 9.14 L358.7 0 L358.2 0 Z M361.14 0 L360.64 0 L360.64 9.14 L361.14 9.14 L361.64 9.14 L361.64 0 L361.14 0 Z M364.07 0 L363.57 0 L363.57 9.14 L364.07 9.14 L364.57 9.14 L364.57 0 L364.07 0 Z M367.01 0 L366.51 0 L366.51 9.14 L367.01 9.14 L367.51 9.14 L367.51 0 L367.01 0 Z M369.95 0 L369.45 0 L369.45 9.14 L369.95 9.14 L370.45 9.14 L370.45 0 L369.95 0 Z M372.88 0 L372.38 0 L372.38 9.14 L372.88 9.14 L373.38 9.14 L373.38 0 L372.88 0 Z M375.82 0 L375.32 0 L375.32 9.14 L375.82 9.14 L376.32 9.14 L376.32 0 L375.82 0 Z M378.76 0 L378.26 0 L378.26 9.14 L378.76 9.14 L379.26 9.14 L379.26 0 L378.76 0 Z M381.69 0 L381.19 0 L381.19 9.14 L381.69 9.14 L382.19 9.14 L382.19 0 L381.69 0 Z M384.63 0 L384.13 0 L384.13 9.14 L384.63 9.14 L385.13 9.14 L385.13 0 L384.63 0 Z M387.56 0 L387.06 0 L387.06 9.14 L387.56 9.14 L388.06 9.14 L388.06 0 L387.56 0 Z M390.5 0 L390 0 L390 9.14 L390.5 9.14 L391 9.14 L391 0 L390.5 0 Z M393.44 0 L392.94 0 L392.94 9.14 L393.44 9.14 L393.94 9.14 L393.94 0 L393.44 0 Z M396.37 0 L395.87 0 L395.87 9.14 L396.37 9.14 L396.87 9.14 L396.87 0 L396.37 0 Z M399.31 0 L398.81 0 L398.81 9.14 L399.31 9.14 L399.81 9.14 L399.81 0 L399.31 0 Z M402.24 0 L401.74 0 L401.74 9.14 L402.24 9.14 L402.74 9.14 L402.74 0 L402.24 0 Z M405.18 0 L404.68 0 L404.68 9.14 L405.18 9.14 L405.68 9.14 L405.68 0 L405.18 0 Z M408.12 0 L407.62 0 L407.62 9.14 L408.12 9.14 L408.62 9.14 L408.62 0 L408.12 0 Z M411.05 0 L410.55 0 L410.55 9.14 L411.05 9.14 L411.55 9.14 L411.55 0 L411.05 0 Z" fill="#d4d4d8"/></svg>
            </div>
            <div style={{ width: "429.53px", flexShrink: 0, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", boxSizing: "border-box" }}>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "58px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 500, color: "#1f1f22" }}>Day 1 of 30</p>
              <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "118px", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>Due Sep 07 · in 29 days</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ alignSelf: "stretch", flex: "1 1 0", minHeight: 0, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", boxSizing: "border-box" }} />
      <div style={{ alignSelf: "stretch", flexShrink: 0, background: "#fafafa", boxShadow: "inset 0 0.91px 0 0 #ededed", display: "flex", flexDirection: "row", padding: "13.7px 18.28px 12.79px 18.28px", gap: "7.31px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
        <p style={{ flex: "1 1 0", minWidth: 0, flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre-wrap", lineHeight: "14px", fontFamily: "'Geist'", fontSize: "10.97px", fontWeight: 400, color: "#6b6b6b" }}>1 of 9 outstanding</p>
        <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "#ffffff", boxShadow: "inset 0 0 0 0.91px #e8e8e8, 0px 0.91px 1.83px 0px rgba(13, 13, 18, 0.06)", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "5.48px", justifyContent: "flex-start", alignItems: "center", boxSizing: "border-box" }}>
          <Download size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#6c6c6c", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "87px", lineHeight: "17px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 400, color: "#6c6c6c" }}>Download PDF</p>
        </div>
        <div data-fu="btn" style={{ height: "29.24px", flexShrink: 0, borderRadius: "7.31px", background: "linear-gradient(90deg, #222222 0%, #3a3a3a 50%, #222222 100%)", boxShadow: "inset 0 0 0 0.91px #dfe1e6", display: "flex", flexDirection: "row", padding: "0.91px 11.88px 0.91px 11.88px", gap: "3.66px", justifyContent: "center", alignItems: "center", boxSizing: "border-box" }}>
          <Send size={14.6} style={{ width: "14.62px", height: "14.62px", flexShrink: 0, color: "#ffffff", display: "block" }} />
          <p style={{ flexShrink: 0, margin: 0, textAlign: "left", whiteSpace: "pre", minWidth: "88px", fontFamily: "'Geist'", fontSize: "12.79px", fontWeight: 500, color: "#ffffff", lineHeight: "1.4500000476837158" }}>Send reminder</p>
        </div>
      </div>
    </div>
  );
}

// Interactions: hover and click states. Remove this function and the two lines above to get a static component.
function fuInteract(root: HTMLElement | null) {
  if (!root || root.dataset.fuOn) return;
  root.dataset.fuOn = "1";
  const doc = root.ownerDocument;
  const all = (sel: string, el: Element = root): HTMLElement[] => Array.from(el.querySelectorAll(sel)) as HTMLElement[];
  const box = (el: Element) => el.getBoundingClientRect();
  const font = getComputedStyle(root).fontFamily;
  const tip = doc.createElement("div");
  tip.setAttribute("aria-hidden", "true");
  Object.assign(tip.style, { position: "fixed", zIndex: "2147483647", pointerEvents: "none", background: "#111113", color: "#fff", font: "500 12px/16px " + font, padding: "5px 8px", borderRadius: "6px", whiteSpace: "nowrap", opacity: "0", transform: "translate(-50%, -100%)", transition: "opacity .12s", boxShadow: "0 4px 14px rgba(0,0,0,.18)" });
  doc.body.appendChild(tip);
  const show = (text: string, x: number, y: number) => { if (!text) return hide(); tip.textContent = text; tip.style.left = x + "px"; tip.style.top = y - 8 + "px"; tip.style.opacity = "1"; };
  const hide = () => { tip.style.opacity = "0"; };
  const ease = (el: HTMLElement | SVGElement, props: string) => { const s = (el as HTMLElement).style; if (!s.transition) s.transition = props; };
  const texts = (scope: Element) => all("p, span", scope).filter((t) => t.children.length === 0 && (t.textContent || "").trim());
  const NUM = /^([^\d\-+.]*)([-+]?[\d,]*\.?\d+)\s*([kKmMbB%]?)([^\d]*)$/;
  // value axis: numeric labels along one edge of the chart, used to read a mark's value from its position
  const axis = (scope: Element, vertical: boolean) => {
    const pts: { v: number; p: number; pre: string; suf: string; dec: number }[] = [];
    for (const t of texts(scope)) {
      const m = (t.textContent || "").trim().match(NUM);
      if (!m) continue;
      const mult = { k: 1e3, K: 1e3, m: 1e6, M: 1e6, b: 1e9, B: 1e9 }[m[3] as "k"] || 1;
      const r = box(t);
      pts.push({ v: parseFloat(m[2].replace(/,/g, "")) * mult, p: vertical ? r.top + r.height / 2 : r.left + r.width / 2, pre: m[1], suf: m[3] + m[4], dec: (m[2].split(".")[1] || "").length });
    }
    const uniq = pts.filter((a, i) => pts.findIndex((b) => Math.abs(b.p - a.p) < 2) === i);
    if (uniq.length < 2) return null;
    uniq.sort((a, b) => a.p - b.p);
    const a = uniq[0], b = uniq[uniq.length - 1];
    if (a.v === b.v || Math.abs(b.p - a.p) < 10) return null;
    return (pos: number) => {
      const v = a.v + ((pos - a.p) * (b.v - a.v)) / (b.p - a.p);
      const suf = a.suf || b.suf, pre = a.pre || b.pre;
      const div = /^[kK]/.test(suf) ? 1e3 : /^[mM]/.test(suf) ? 1e6 : /^[bB]/.test(suf) ? 1e9 : 1;
      const x = v / div;
      const dec = Math.max(a.dec, b.dec, div > 1 && Math.abs(x) < 100 ? 1 : 0);
      return pre + x.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: dec }) + suf;
    };
  };
  // the chart around a group of marks: the nearest ancestor that also holds text labels
  const chartOf = (el: Element) => { let c: Element | null = el.parentElement; while (c && c !== root.parentElement) { if (texts(c).length >= 3) return c; c = c.parentElement; } return root; };
  const labelNear = (scope: Element, x: number, y: number, below: boolean, anyText = false) => {
    let best = "", d = 1e9;
    for (const t of texts(scope)) {
      const r = box(t);
      if (below ? r.top < y - 2 : r.right > x + 2) continue;
      if (!anyText && NUM.test((t.textContent || "").trim()) && !/[a-z]{3}/i.test(t.textContent || "")) continue;
      const dd = below ? Math.abs(r.left + r.width / 2 - x) + (r.top - y) * 0.2 : Math.abs(r.top + r.height / 2 - y) + (x - r.right) * 0.1;
      if (dd < d) { d = dd; best = (t.textContent || "").trim(); }
    }
    return d < 80 ? best : "";
  };
  const dim = (els: (HTMLElement | SVGElement)[], keep: (HTMLElement | SVGElement)[]) => { for (const e of els) { ease(e, "opacity .15s"); (e as HTMLElement).style.opacity = keep.includes(e) ? "" : "0.35"; } };
  const undim = (els: (HTMLElement | SVGElement)[]) => { for (const e of els) (e as HTMLElement).style.opacity = ""; };

  // vertical bars: the hovered column (all stacked segments at that x) stays, the rest fade
  const groups = new Map<Element, HTMLElement[]>();
  for (const b of all("[data-fu=bar],[data-fu=hbar]")) { const p = b.parentElement!; if (!groups.has(p)) groups.set(p, []); groups.get(p)!.push(b); }
  groups.forEach((bars) => {
    const horiz = bars[0].dataset.fu === "hbar";
    const scope = chartOf(bars[0]);
    const val = axis(scope, !horiz);
    const peers = (b: HTMLElement) => { const r = box(b), c = horiz ? r.top + r.height / 2 : r.left + r.width / 2; return bars.filter((o) => { const q = box(o); return Math.abs((horiz ? q.top + q.height / 2 : q.left + q.width / 2) - c) < Math.max(2, (horiz ? r.height : r.width) / 2); }); };
    for (const b of bars) {
      b.addEventListener("mouseenter", () => {
        const col = peers(b);
        dim(bars, col);
        const rs = col.map(box);
        const top = Math.min(...rs.map((r) => r.top)), right = Math.max(...rs.map((r) => r.right)), r0 = rs[0];
        const label = horiz ? labelNear(scope, r0.left, r0.top + r0.height / 2, false) : labelNear(scope, r0.left + r0.width / 2, Math.max(...rs.map((r) => r.bottom)), true);
        const v = val ? val(horiz ? right : top) : "";
        show([label, v].filter(Boolean).join(" · "), horiz ? right : r0.left + r0.width / 2, horiz ? r0.top : top);
      });
      b.addEventListener("mouseleave", () => { undim(bars); hide(); });
    }
  });

  // line and area plots: a guide line and a dot follow the pointer along the top edge of the plotted shape
  for (const svg of all("svg[data-fu=plot]") as unknown as SVGSVGElement[]) {
    const paths = Array.from(svg.querySelectorAll("path, polyline")) as SVGGeometryElement[];
    if (!paths.length) continue;
    const line = paths.reduce((a, b) => (b.getTotalLength() > a.getTotalLength() ? b : a));
    const len = line.getTotalLength();
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= 800; i++) { const q = line.getPointAtLength((len * i) / 800); pts.push({ x: q.x, y: q.y }); }
    const xs = pts.map((q) => q.x), minX = Math.min(...xs), maxX = Math.max(...xs);
    const color = (line.getAttribute("stroke") && line.getAttribute("stroke") !== "none" ? line.getAttribute("stroke") : line.getAttribute("fill")) || "#111";
    const NS = "http://www.w3.org/2000/svg";
    const g = doc.createElementNS(NS, "g");
    g.setAttribute("pointer-events", "none");
    g.style.opacity = "0";
    const guide = doc.createElementNS(NS, "line");
    guide.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    guide.setAttribute("stroke-dasharray", "3 3");
    guide.setAttribute("stroke-opacity", "0.5");
    const dot = doc.createElementNS(NS, "circle");
    dot.setAttribute("r", "4");
    dot.setAttribute("fill", "#fff");
    dot.setAttribute("stroke", /^url/.test(color) ? "#111" : color);
    dot.setAttribute("stroke-width", "2");
    g.append(guide, dot);
    svg.appendChild(g);
    const scope = chartOf(svg);
    const val = axis(scope, true);
    const area = svg.parentElement || svg;
    area.addEventListener("mousemove", (ev: Event) => {
      const e = ev as MouseEvent;
      const m = line.getScreenCTM();
      if (!m) return;
      const px = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()).x;
      if (px < minX - 4 || px > maxX + 4) { g.style.opacity = "0"; hide(); return; }
      const step = (maxX - minX) / 400 || 1;
      let y = Infinity, x = px;
      for (const q of pts) if (Math.abs(q.x - px) <= step && q.y < y) { y = q.y; x = q.x; }
      if (y === Infinity) return;
      const bb = line.getBBox();
      guide.setAttribute("x1", String(x)); guide.setAttribute("x2", String(x));
      guide.setAttribute("y1", String(bb.y)); guide.setAttribute("y2", String(bb.y + bb.height));
      dot.setAttribute("cx", String(x)); dot.setAttribute("cy", String(y));
      g.style.opacity = "1";
      const sp = new DOMPoint(x, y).matrixTransform(m);
      const label = labelNear(scope, sp.x, box(svg).bottom, true);
      show([label, val ? val(sp.y) : ""].filter(Boolean).join(" · "), sp.x, sp.y);
    });
    area.addEventListener("mouseleave", () => { g.style.opacity = "0"; hide(); });
  }

  // cards: a small lift on hover (an extra drop shadow, the card's own shadows stay as they are)
  for (const c of all("[data-fu=card]").concat(root.dataset.fu === "card" ? [root] : [])) {
    c.addEventListener("mouseenter", () => { ease(c, "transform .18s ease, filter .18s ease"); c.style.transform = "translateY(-2px)"; c.style.filter = "drop-shadow(0 8px 16px rgba(17,17,19,.08))"; });
    c.addEventListener("mouseleave", () => { c.style.transform = ""; c.style.filter = ""; });
  }

  // heatmap and calendar cells: an outline and the cell's own text
  for (const c of all("[data-fu=cell]")) {
    c.addEventListener("mouseenter", () => {
      ease(c, "outline-color .12s");
      c.style.outline = "2px solid rgba(17,17,19,.55)";
      c.style.outlineOffset = "1px";
      const r = box(c);
      // its own text, or the row and column labels of the grid it sits in
      let label = (c.textContent || "").trim();
      if (!label) {
        // walk outwards until a row label (left) and a column label (below) are in reach
        let row = "", col = "";
        for (let a: Element | null = c.parentElement; a && a !== root.parentElement && !(row && col); a = a.parentElement) {
          if (!row) row = labelNear(a, r.left, r.top + r.height / 2, false, true);
          if (!col) col = labelNear(a, r.left + r.width / 2, r.bottom, true, true);
        }
        label = [row, col].filter(Boolean).join(" · ");
      }
      show(label, r.left + r.width / 2, r.top);
    });
    c.addEventListener("mouseleave", () => { c.style.outline = ""; c.style.outlineOffset = ""; hide(); });
  }

  // fields: hover and focus states
  for (const f of all("[data-fu=field]")) {
    f.style.cursor = "text";
    f.addEventListener("mouseenter", () => { ease(f, "filter .15s, outline-color .15s"); f.style.filter = "brightness(0.985)"; });
    f.addEventListener("mouseleave", () => { f.style.filter = ""; });
    f.addEventListener("mousedown", (ev) => {
      ev.stopPropagation();
      for (const o of all("[data-fu=field]")) o.style.outline = "";
      f.style.outline = "3px solid rgba(17,17,19,.12)";
      f.style.outlineOffset = "0px";
    });
  }
  doc.addEventListener("mousedown", () => { for (const o of all("[data-fu=field]")) o.style.outline = ""; });

  // donut and pie charts drawn as one vector per arc: the hovered arc stays, the others fade
  const arcGroups = new Map<Element, HTMLElement[]>();
  for (const a of all("[data-fu=arc]")) { const p = a.parentElement!; if (!arcGroups.has(p)) arcGroups.set(p, []); arcGroups.get(p)!.push(a); }
  arcGroups.forEach((arcs) => {
    const scope = chartOf(arcs[0]);
    const hexOf = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        if (hexOf(getComputedStyle(el).backgroundColor) !== color.toLowerCase()) continue;
        // climb to the legend row: the first ancestor that holds more than the swatch's label
        let row: Element | null = el.parentElement;
        while (row && row.parentElement && texts(row).length < 2 && row !== scope) row = row.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length && words.length <= 5) return words.join(" · ");
        if (el.parentElement) return texts(el.parentElement).map((t) => (t.textContent || "").trim()).join(" · ");
      }
      return "";
    };
    // hit-test the whole stack under the pointer: labels or tracks drawn over the ring don't get in the way
    const fills = new Map(arcs.map((a) => { const sh = a.querySelector("path"); return [a, (sh && (sh.getAttribute("fill") || sh.getAttribute("stroke"))) || ""] as [HTMLElement, string]; }));
    let current: HTMLElement | null = null;
    scope.addEventListener("mousemove", (ev) => {
      const e = ev as MouseEvent;
      // the arc whose drawn shape (not just its box) is under the pointer
      const inside = (sh: SVGGeometryElement) => { const m = sh.getScreenCTM(); if (!m) return false; const q = new DOMPoint(e.clientX, e.clientY).matrixTransform(m.inverse()); return sh.isPointInFill(q) || sh.isPointInStroke(q); };
      const arc = arcs.find((a) => (Array.from(a.querySelectorAll("path, circle, ellipse")) as SVGGeometryElement[]).some(inside)) || null;
      if (!arc) { if (current) { undim(arcs); hide(); current = null; } return; }
      if (arc !== current) { dim(arcs, [arc]); current = arc; }
      show(legend(fills.get(arc) || ""), e.clientX, e.clientY);
    });
    scope.addEventListener("mouseleave", () => { undim(arcs); hide(); current = null; });
  });

  // donut and pie arcs in one drawing: the hovered arc stays, the others fade; the legend row with the same colour names it
  for (const svg of all("svg[data-fu=donut]") as unknown as SVGSVGElement[]) {
    const arcs = (Array.from(svg.querySelectorAll("path")) as SVGPathElement[]).filter((p) => { const f = p.getAttribute("fill"); return f && f !== "none" && !/^url/.test(f); });
    const scope = chartOf(svg);
    const hex = (c: string) => { const m = c.match(/\d+/g); return m && m.length >= 3 ? "#" + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, "0")).join("") : c.toLowerCase(); };
    const legend = (color: string) => {
      for (const el of all("*", scope)) {
        if (el.children.length || (el.textContent || "").trim()) continue;
        const bg = getComputedStyle(el).backgroundColor;
        if (!bg || hex(bg) !== color.toLowerCase()) continue;
        const row = el.parentElement;
        const words = row ? texts(row).map((t) => (t.textContent || "").trim()) : [];
        if (words.length) return words.join(" · ");
      }
      return "";
    };
    for (const a of arcs) {
      a.addEventListener("mouseenter", (ev) => {
        dim(arcs, [a]);
        const e = ev as MouseEvent;
        show(legend(a.getAttribute("fill") || ""), e.clientX, e.clientY);
      });
      a.addEventListener("mousemove", (ev) => { const e = ev as MouseEvent; tip.style.left = e.clientX + "px"; tip.style.top = e.clientY - 8 + "px"; });
      a.addEventListener("mouseleave", () => { undim(arcs); hide(); });
    }
  }

  // rows: a soft highlight under the pointer
  for (const r of all("[data-fu=row]")) {
    r.addEventListener("mouseenter", () => { ease(r, "filter .15s"); r.style.filter = "brightness(0.975)"; });
    r.addEventListener("mouseleave", () => { r.style.filter = ""; });
  }

  // buttons: hover and press feedback
  for (const b of all("[data-fu=btn],[data-fu=tab]")) {
    b.style.cursor = "pointer";
    b.addEventListener("mouseenter", () => { ease(b, "filter .15s, transform .1s"); if (!b.dataset.fuActive) b.style.filter = "brightness(0.96)"; });
    b.addEventListener("mouseleave", () => { b.style.filter = ""; b.style.transform = ""; });
    b.addEventListener("mousedown", () => { b.style.transform = "scale(0.98)"; });
    b.addEventListener("mouseup", () => { b.style.transform = ""; });
  }

  // tabs and segmented controls: clicking a tab moves the selected look onto it
  const VIS = ["background-color", "background-image", "box-shadow", "border-color", "color", "font-weight"];
  const look = (el: HTMLElement) => VIS.map((k) => el.style.getPropertyValue(k)).join("|");
  const tabGroups = new Map<Element, HTMLElement[]>();
  for (const t of all("[data-fu=tab]")) { const p = t.parentElement!; if (!tabGroups.has(p)) tabGroups.set(p, []); tabGroups.get(p)!.push(t); }
  tabGroups.forEach((tabs) => {
    if (tabs.length < 2) return;
    const counts = new Map<string, number>();
    for (const t of tabs) counts.set(look(t), (counts.get(look(t)) || 0) + 1);
    let active = tabs.find((t) => counts.get(look(t)) === 1 && counts.size > 1) || null;
    if (!active) return;
    active.dataset.fuActive = "1";
    // read both looks first, then write: swapping one property at a time would let shorthands undo each other
    const swapStyle = (a: HTMLElement, b: HTMLElement, props: string[]) => {
      const va = props.map((k) => a.style.getPropertyValue(k)), vb = props.map((k) => b.style.getPropertyValue(k));
      props.forEach((k, i) => { a.style.setProperty(k, vb[i]); b.style.setProperty(k, va[i]); });
    };
    const swap = (a: HTMLElement, b: HTMLElement) => {
      swapStyle(a, b, VIS);
      const ta = texts(a), tb = texts(b);
      for (let i = 0; i < Math.min(ta.length, tb.length); i++) swapStyle(ta[i], tb[i], ["color", "font-weight"]);
    };
    for (const t of tabs) t.addEventListener("click", () => {
      if (!active || t === active) return;
      t.style.filter = "";
      swap(active, t);
      delete active.dataset.fuActive;
      active = t;
      t.dataset.fuActive = "1";
    });
  });
}
