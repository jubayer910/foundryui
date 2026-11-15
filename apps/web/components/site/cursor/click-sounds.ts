/**
 * Five original click sounds, synthesized live with the Web Audio API (no audio files, nothing third-party).
 * Every preset is shorter than ~80 ms, peaks well below full scale and ends on a silent tail, so a click
 * never pops or clips. The AudioContext is created lazily on the first call, which always happens inside a
 * user gesture (browser autoplay rules).
 */

type Voice = (ctx: AudioContext, out: AudioNode, t: number, noise: AudioBuffer) => void;

export type SoundPreset = { label: string; description: string; play: Voice };

/** Exponential envelope on a gain: quick linear attack, exponential decay to silence. */
function env(g: GainNode, t: number, peak: number, attack: number, decay: number) {
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(peak, t + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t + attack + decay);
}

function tone(ctx: AudioContext, out: AudioNode, t: number, o: { type?: OscillatorType; from: number; to?: number; peak: number; attack?: number; decay: number }) {
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = o.type ?? "sine";
  osc.frequency.setValueAtTime(o.from, t);
  if (o.to) osc.frequency.exponentialRampToValueAtTime(o.to, t + o.decay);
  env(g, t, o.peak, o.attack ?? 0.001, o.decay);
  osc.connect(g).connect(out);
  osc.start(t);
  osc.stop(t + (o.attack ?? 0.001) + o.decay + 0.01);
}

function burst(ctx: AudioContext, out: AudioNode, t: number, noise: AudioBuffer, o: { filter: BiquadFilterType; freq: number; to?: number; q?: number; peak: number; attack?: number; decay: number }) {
  const src = ctx.createBufferSource();
  src.buffer = noise;
  const f = ctx.createBiquadFilter();
  f.type = o.filter;
  f.frequency.setValueAtTime(o.freq, t);
  if (o.to) f.frequency.exponentialRampToValueAtTime(o.to, t + o.decay);
  f.Q.value = o.q ?? 1;
  const g = ctx.createGain();
  env(g, t, o.peak, o.attack ?? 0.0008, o.decay);
  src.connect(f).connect(g).connect(out);
  // a random offset into the buffer, so repeated clicks never sound copy-pasted
  src.start(t, Math.random() * 0.2, (o.attack ?? 0.0008) + o.decay + 0.01);
}

export const SOUNDS = {
  softTick: {
    label: "Soft tick",
    description: "A tiny, rounded sine blip that falls in pitch: the quietest of the set, like a watch hand moving.",
    play: (ctx, out, t, noise) => {
      tone(ctx, out, t, { from: 1750, to: 1150, peak: 0.16, attack: 0.002, decay: 0.035 });
      burst(ctx, out, t, noise, { filter: "highpass", freq: 6000, peak: 0.025, decay: 0.008 });
    },
  },
  keyTap: {
    label: "Key tap",
    description: "A mechanical keyboard switch: a bright click on top of a short low 'thock' from the keycap bottoming out.",
    play: (ctx, out, t, noise) => {
      burst(ctx, out, t, noise, { filter: "bandpass", freq: 3800, q: 1.4, peak: 0.22, decay: 0.012 });
      tone(ctx, out, t + 0.004, { type: "triangle", from: 210, to: 140, peak: 0.2, attack: 0.002, decay: 0.045 });
      burst(ctx, out, t + 0.004, noise, { filter: "lowpass", freq: 900, peak: 0.06, decay: 0.03 });
    },
  },
  woodKnock: {
    label: "Wood knock",
    description: "Knuckle on a small wooden block: two inharmonic hollow partials with a dry woody attack.",
    play: (ctx, out, t, noise) => {
      tone(ctx, out, t, { from: 560, to: 520, peak: 0.2, attack: 0.001, decay: 0.06 });
      tone(ctx, out, t, { from: 1520, to: 1460, peak: 0.07, attack: 0.001, decay: 0.03 });
      burst(ctx, out, t, noise, { filter: "bandpass", freq: 1800, q: 2.2, peak: 0.12, decay: 0.01 });
    },
  },
  glassPop: {
    label: "Glass pop",
    description: "A bright glassy ping with a quick upward pop, like flicking a thin glass with a fingernail.",
    play: (ctx, out, t, noise) => {
      tone(ctx, out, t, { from: 1900, to: 2700, peak: 0.11, attack: 0.001, decay: 0.05 });
      tone(ctx, out, t, { from: 5200, to: 6100, peak: 0.035, attack: 0.001, decay: 0.03 });
      burst(ctx, out, t, noise, { filter: "highpass", freq: 4500, peak: 0.03, decay: 0.006 });
    },
  },
  paperFlick: {
    label: "Paper flick",
    description: "A dry, airy flick of a paper corner: filtered noise with a falling band and no pitch at all.",
    play: (ctx, out, t, noise) => {
      burst(ctx, out, t, noise, { filter: "bandpass", freq: 5200, to: 2400, q: 0.9, peak: 0.2, attack: 0.002, decay: 0.045 });
      burst(ctx, out, t + 0.003, noise, { filter: "highpass", freq: 7000, peak: 0.05, decay: 0.015 });
    },
  },
} satisfies Record<string, SoundPreset>;

export type SoundName = keyof typeof SOUNDS;

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let noise: AudioBuffer | null = null;

function engine() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    // one gentle master level plus a limiter, so overlapping fast clicks can never clip
    const limiter = ctx.createDynamicsCompressor();
    limiter.threshold.value = -12;
    limiter.ratio.value = 12;
    limiter.attack.value = 0.001;
    limiter.release.value = 0.05;
    master = ctx.createGain();
    master.gain.value = 0.6;
    master.connect(limiter).connect(ctx.destination);
    // 0.3 s of white noise, shared by every preset
    noise = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 0.3), ctx.sampleRate);
    const d = noise.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  if (ctx.state === "suspended") void ctx.resume();
  return { ctx, out: master!, noise: noise! };
}

/** Plays a preset. Call only from inside a user gesture (click / pointerdown handler). */
export function playClickSound(name: SoundName) {
  const e = engine();
  if (!e) return;
  SOUNDS[name].play(e.ctx, e.out, e.ctx.currentTime + 0.002, e.noise);
}

/** Visitor preference: localStorage "ingot:sound" = "on" | "off". Absent means the default. */
export const SOUND_PREF_KEY = "ingot:sound";

export function readSoundPref(): "on" | "off" | null {
  try {
    const v = window.localStorage.getItem(SOUND_PREF_KEY);
    return v === "on" || v === "off" ? v : null;
  } catch {
    return null;
  }
}

export function writeSoundPref(v: "on" | "off") {
  try {
    window.localStorage.setItem(SOUND_PREF_KEY, v);
  } catch {
    /* storage blocked: the preference just does not persist */
  }
}
