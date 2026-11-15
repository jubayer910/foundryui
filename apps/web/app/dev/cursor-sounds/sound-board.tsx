"use client";
import { useState, useSyncExternalStore } from "react";
import { SOUNDS, playClickSound, readSoundPref, writeSoundPref, type SoundName } from "@/components/site/cursor/click-sounds";
import { CLICK_SOUND } from "@/components/site/cursor/custom-cursor";

const NAMES = Object.keys(SOUNDS) as SoundName[];

const subscribeStorage = (cb: () => void) => {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
};

export function SoundBoard() {
  const [last, setLast] = useState<SoundName | null>(null);
  // stored choice (null on the server), overridden by a click here
  const stored = useSyncExternalStore(subscribeStorage, readSoundPref, () => null);
  const [chosen, setPref] = useState<"on" | "off" | null>(null);
  const pref = chosen ?? stored;

  const play = (n: SoundName) => {
    playClickSound(n);
    setLast(n);
  };

  return (
    <div className="mt-6 space-y-10">
      <section aria-labelledby="sounds-h">
        <h2 id="sounds-h" className="eyebrow">Click sounds</h2>
        <p className="mt-1 max-w-prose text-ink-2">
          Five original sounds, synthesized in the browser with the Web Audio API. No audio files. Each is under 80 ms. Live setting:{" "}
          <code className="rounded bg-tile px-1.5 py-0.5 font-mono text-[12px]">CLICK_SOUND = {CLICK_SOUND ? `"${CLICK_SOUND}"` : "null"}</code>
          {CLICK_SOUND ? "" : " (sound is off on the site)."}
        </p>
        <ul className="mt-4 divide-y divide-hair rounded-card border border-hair-2">
          {NAMES.map((n, i) => (
            <li key={n} className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3">
              <span className="w-5 font-mono text-[12px] text-faint">{i + 1}</span>
              <div className="min-w-0 flex-1">
                <p className="font-medium">
                  {SOUNDS[n].label} <code className="ml-1 font-mono text-[12px] text-mute">{n}</code>
                </p>
                <p className="text-mute">{SOUNDS[n].description}</p>
              </div>
              <button
                type="button"
                data-no-click-sound
                onClick={() => play(n)}
                className={`h-9 rounded-btn px-4 text-[13px] transition-colors ${last === n ? "bg-ink text-paper" : "bg-chip hover:bg-chip-2"}`}
              >
                Play
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="pick-h">
        <h2 id="pick-h" className="eyebrow">Use this one</h2>
        <p className="mt-1 max-w-prose text-ink-2">
          Tell Claude in chat which one to use, by number or name, for example &ldquo;use 2, keyTap&rdquo;. That sets{" "}
          <code className="rounded bg-tile px-1.5 py-0.5 font-mono text-[12px]">CLICK_SOUND</code> in{" "}
          <code className="rounded bg-tile px-1.5 py-0.5 font-mono text-[12px]">components/site/cursor/custom-cursor.tsx</code>. From then on the sound plays on real
          mouse presses on links and buttons only: never on page load, never on touch, off for visitors who chose sound off, and off by default for
          visitors with reduced motion.
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-mute">Your sound preference on this browser:</span>
          {(["on", "off"] as const).map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={pref === v}
              onClick={() => {
                writeSoundPref(v);
                setPref(v);
              }}
              className={`h-8 rounded-btn px-3 text-[13px] ${pref === v ? "bg-ink text-paper" : "bg-chip hover:bg-chip-2"}`}
            >
              Sound {v}
            </button>
          ))}
          {pref === null && <span className="text-faint">(not set: default)</span>}
        </div>
      </section>

      <section aria-labelledby="cursor-h">
        <h2 id="cursor-h" className="eyebrow">Cursor check</h2>
        <p className="mt-1 max-w-prose text-ink-2">
          Move over each item. Plain areas show the ink arrow, clickable things the blue one, typing fields and code keep the normal system cursor.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-card bg-tile p-4">
            <p className="text-mute">Plain area and text</p>
            <p className="mt-2">
              A sentence with <a href="#cursor-h" className="underline underline-offset-2">a link in it</a>.
            </p>
            <button type="button" className="mt-3 h-9 rounded-btn bg-ink px-4 text-paper">A button</button>
            <button type="button" disabled className="ml-2 mt-3 h-9 rounded-btn bg-chip px-4 text-faint disabled:cursor-not-allowed">Disabled</button>
          </div>
          <div className="rounded-card bg-ink p-4 text-paper">
            <p className="text-white/60">Dark surface: the white outline keeps the arrow visible</p>
            <a href="#cursor-h" className="mt-3 inline-flex h-9 items-center rounded-btn bg-white/10 px-4">Link on dark</a>
          </div>
          <label className="block rounded-card bg-tile p-4">
            <span className="text-mute">Text input</span>
            <input type="text" placeholder="I-beam here" className="mt-2 h-9 w-full rounded-lg border border-hair-2 bg-paper px-3" />
          </label>
          <pre className="overflow-x-auto rounded-card bg-tile p-4 font-mono text-[12px]">{`// code block: native cursor
const sound = "keyTap";`}</pre>
        </div>
      </section>
    </div>
  );
}
