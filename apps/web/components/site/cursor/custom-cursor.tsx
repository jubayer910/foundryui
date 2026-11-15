"use client";
import { useEffect } from "react";
import { playClickSound, readSoundPref, type SoundName } from "./click-sounds";

/**
 * Ingot UI's site cursor. Same approach as recent.design: a pure CSS `cursor: url(data:image/svg+xml…)`
 * image, so the OS still draws it (no lag, no rAF loop, no extra DOM, no layout cost, never blocks a click).
 * This component only switches it on: it sets `data-ingot-cursor` on <html> while the device has a mouse or
 * trackpad (`(hover: hover) and (pointer: fine)`); touch devices never get it. The cursor images and the
 * rules for where the native cursor stays (text fields, selects, code, iframes, disabled controls, any
 * Tailwind `cursor-*` other than pointer) live in app/globals.css under "Custom cursor".
 *
 * There is no motion, so prefers-reduced-motion needs nothing for the cursor itself; it only turns the click
 * sound off by default (see `soundAllowed`).
 */

/**
 * The click sound played on interactive elements. `null` keeps the site silent. To switch one on, set it to
 * a key of SOUNDS in ./click-sounds.ts ("softTick" | "keyTap" | "woodKnock" | "glassPop" | "paperFlick");
 * preview them all at /dev/cursor-sounds.
 */
export const CLICK_SOUND = null as SoundName | null;

const FINE_POINTER = "(hover: hover) and (pointer: fine)";

/** Elements that count as "interactive" for the click sound (mirrors the hover-cursor list in globals.css). */
export const INTERACTIVE =
  "a[href], button, [role=button], [role=link], [role=tab], [role=menuitem], [role=menuitemradio], [role=menuitemcheckbox], [role=option], [role=switch], [role=checkbox], [role=radio], summary, label[for], input[type=checkbox], input[type=radio], input[type=submit], input[type=button], input[type=reset], .cursor-pointer";

/**
 * Whether this visitor hears click sounds: an explicit "ingot:sound" choice in localStorage wins; otherwise
 * on, except for prefers-reduced-motion visitors, who get silence by default.
 */
export function soundAllowed() {
  const pref = readSoundPref();
  if (pref) return pref === "on";
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function CustomCursor() {
  useEffect(() => {
    const root = document.documentElement;
    const fine = window.matchMedia(FINE_POINTER);
    const apply = () => (fine.matches ? root.setAttribute("data-ingot-cursor", "") : root.removeAttribute("data-ingot-cursor"));
    apply();
    fine.addEventListener("change", apply);

    const sound = CLICK_SOUND;
    // Real mouse/pen presses only (isTrusted: never synthetic clicks, never on load). pointerdown is a user
    // gesture, so the AudioContext created on the first press is allowed to start.
    const onDown = (e: PointerEvent) => {
      if (!sound || !e.isTrusted || e.button !== 0 || e.pointerType === "touch" || !fine.matches) return;
      const el = e.target instanceof Element ? e.target.closest(INTERACTIVE) : null;
      if (!el || el.closest(":disabled, [aria-disabled=true], [data-no-click-sound]")) return;
      if (!soundAllowed()) return;
      playClickSound(sound);
    };
    if (sound) document.addEventListener("pointerdown", onDown, { capture: true, passive: true });

    return () => {
      fine.removeEventListener("change", apply);
      document.removeEventListener("pointerdown", onDown, { capture: true });
      root.removeAttribute("data-ingot-cursor");
    };
  }, []);
  return null;
}
