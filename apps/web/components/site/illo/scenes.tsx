/* Original isometric scenes for Ingot UI pages and guide covers. Each scene draws back to front. */
import type { ReactNode } from "react";
import { A, Box, Cyl, Dot, Ground, Line, LinesY, Quad, onX, onY, onZ, type V } from "./iso";
import { CATEGORY_SCENES } from "./category-scenes";

export { LIBRARY_CATEGORY_SCENE } from "./category-scenes";

const range = (n: number) => Array.from({ length: n }, (_, i) => i);

/** Stacked kit layers lifting apart: UI kits, design systems. */
function Stack() {
  return (
    <>
      <Ground x0={-46} x1={46} y0={-46} y1={46} />
      {range(4).map((i) => (
        <A key={i} a="lift" delay={i * 0.25}>
          <Box at={[-40, -40, i * 15]} size={[80, 80, 5]} accent={i === 3}>
            {i === 3 && (
              <>
                <Quad p={onZ(i * 15 + 5, -32, -14, -32, 32)} />
                <Quad p={onZ(i * 15 + 5, -8, 32, -32, -8)} accent />
                <Quad p={onZ(i * 15 + 5, -8, 10, -2, 32)} />
                <Quad p={onZ(i * 15 + 5, 14, 32, -2, 32)} />
              </>
            )}
            {i < 3 && <Quad p={onZ(i * 15 + 5, -30, 30, -30, 30)} dash />}
          </Box>
        </A>
      ))}
    </>
  );
}

/** A standing dashboard screen on a base with live bars. Variant b shows a card grid. */
function Screen({ variant = "a" }: { variant?: "a" | "b" }) {
  const Y = -4;
  const bars = [18, 30, 22, 38, 27, 44];
  return (
    <>
      <Ground x0={-62} x1={62} y0={-30} y1={42} />
      <Box at={[-58, -26, 0]} size={[116, 64, 4]} />
      <Box at={[-48, -10, 4]} size={[96, 6, 62]} />
      <Quad p={onY(Y, -44, -31, 8, 62)} fill="var(--illo-top)" />
      {variant === "a" ? (
        <>
          <Quad p={onY(Y, -27, 44, 8, 62)} fill="var(--illo-top)" />
          {bars.map((h, i) => (
            <A key={i} a="rise" delay={i * 0.18}>
              <Quad p={onY(Y, -22 + i * 11, -16 + i * 11, 12, 12 + h)} fill={i === 3 ? "var(--illo-accent-wash)" : "var(--illo-l)"} accent={i === 3} />
            </A>
          ))}
        </>
      ) : (
        <>
          {range(3).map((i) => (
            <Quad key={i} p={onY(Y, -27 + i * 24, -6 + i * 24, 46, 62)} fill="var(--illo-top)" accent={i === 1} />
          ))}
          <Quad p={onY(Y, -27, 44, 8, 42)} fill="var(--illo-top)" />
          <A a="flow">
            <Line p={[[-22, Y, 16], [-8, Y, 26], [6, Y, 20], [20, Y, 34], [38, Y, 30]]} accent />
          </A>
        </>
      )}
      <LinesY Y={Y} x0={-42} x1={-33} z0={56} n={6} gap={7} />
      <A a="f" delay={0.4}>
        <Box at={[-34, 14, 4]} size={[22, 16, 7]} />
      </A>
      <A a="f" delay={0.9}>
        <Box at={[2, 14, 4]} size={[26, 16, 12]} accent>
          <Dot at={[15, 22, 16]} className="pulse" />
        </Box>
      </A>
    </>
  );
}

/** Three KPI tiles standing in a row with sparklines. */
function Kpi() {
  const xs = [-52, -14, 24];
  const spark: number[][] = [[4, 9, 6, 12, 10, 16], [14, 10, 12, 7, 9, 5], [6, 7, 11, 9, 14, 13]];
  return (
    <>
      <Ground x0={-58} x1={62} y0={-12} y1={26} />
      <Box at={[-58, -10, 0]} size={[120, 34, 3]} />
      {xs.map((x, i) => (
        <A key={i} a="f" delay={i * 0.35}>
          <Box at={[x, 0, 3]} size={[32, 4, 46]} accent={i === 1} />
          <Quad p={onY(4, x + 4, x + 18, 41, 44)} />
          <Line p={[[x + 4, 4, 34], [x + 24, 4, 34]]} />
          <Line p={[[x + 4, 4, 30], [x + 14, 4, 30]]} faint />
          <Line p={spark[i].map((v, k): V => [x + 4 + k * 4.8, 4, 8 + v])} accent={i !== 1} />
        </A>
      ))}
    </>
  );
}

/** 3D bar chart with a trend line: chart guides. */
function Bars({ seed = 0 }: { seed?: number }) {
  const hs = seed ? [22, 34, 18, 42, 30] : [16, 26, 36, 30, 46];
  return (
    <>
      <Ground x0={-56} x1={56} y0={-24} y1={30} />
      <Box at={[-52, -20, 0]} size={[104, 46, 3]} />
      {hs.map((h, i) => (
        <A key={i} a="rise" delay={i * 0.2}>
          <Box at={[-44 + i * 18, -6, 3]} size={[11, 11, h]} accent={i === 3} tone={i === 3 ? "accent" : undefined} />
        </A>
      ))}
      <A a="flow">
        <Line p={hs.map((h, i): V => [-38.5 + i * 18, 0.5, h + 14])} accent />
      </A>
      {hs.map((h, i) => (
        <Dot key={i} at={[-38.5 + i * 18, 0.5, h + 14]} r={1.3} className={i === 3 ? "pulse" : undefined} />
      ))}
    </>
  );
}

/** Table rows on a sheet, one row lifted out. */
function Table() {
  return (
    <>
      <Ground x0={-56} x1={56} y0={-50} y1={50} />
      <Box at={[-50, -46, 0]} size={[100, 92, 3]} />
      {range(6).map((i) => {
        const y = -40 + i * 14;
        const lifted = i === 3;
        const row = (
          <Box at={[-44, y, 3]} size={[88, 10, i === 0 ? 5 : 2]} accent={lifted} tone={i === 0 ? "ink" : undefined}>
            {i > 0 && (
              <>
                <Line p={[[-38, y + 5, 5], [-20, y + 5, 5]]} />
                <Quad p={onZ(5, 10, 24, y + 3, y + 7)} accent={lifted} fill={lifted ? "var(--illo-accent-wash)" : "none"} />
                <Line p={[[32, y + 5, 5], [38, y + 5, 5]]} faint />
              </>
            )}
          </Box>
        );
        return lifted ? (
          <A key={i} a="lift" delay={0.2}>
            {row}
          </A>
        ) : (
          <g key={i}>{row}</g>
        );
      })}
    </>
  );
}

/** A flat page with a floating modal and a drawer sliding in from the side. */
function Overlay() {
  return (
    <>
      <Ground x0={-60} x1={60} y0={-46} y1={46} />
      <Box at={[-56, -42, 0]} size={[112, 84, 3]}>
        {range(4).map((i) => (
          <Quad key={i} p={onZ(3, -48 + i * 22, -32 + i * 22, -34, -20)} dash />
        ))}
        <Quad p={onZ(3, -48, 18, -12, 34)} dash />
      </Box>
      <A a="f">
        <Box at={[-34, -16, 22]} size={[44, 32, 3]} accent>
          <Line p={[[-28, -10, 25], [-6, -10, 25]]} />
          <Line p={[[-28, -4, 25], [0, -4, 25]]} faint />
          <Quad p={onZ(25, -8, 4, 6, 11)} accent fill="var(--illo-accent-wash)" />
        </Box>
      </A>
      <A a="slide">
        <Box at={[26, -42, 10]} size={[28, 84, 3]}>
          {range(5).map((i) => (
            <Line key={i} p={[[32, -34 + i * 12, 13], [48, -34 + i * 12, 13]]} faint={i > 0} />
          ))}
        </Box>
      </A>
    </>
  );
}

/** An empty tray with a dashed slot and a block waiting above it. */
function Empty() {
  return (
    <>
      <Ground x0={-52} x1={52} y0={-52} y1={52} />
      <Box at={[-46, -46, 0]} size={[92, 92, 6]}>
        <Quad p={onZ(6, -28, 28, -28, 28)} dash accent />
      </Box>
      <A a="f">
        <Box at={[-12, -12, 30]} size={[24, 24, 20]} accent>
          <Line p={[[-4, 0, 50], [4, 0, 50]]} accent />
          <Line p={[[0, -4, 50], [0, 4, 50]]} accent />
        </Box>
      </A>
      <Line p={[[0, 0, 7], [0, 0, 28]]} dash faint />
    </>
  );
}

/** A hub with tools around it and live calls flowing: agents and MCP. */
function Hub({ server }: { server?: boolean }) {
  const spots: V[] = [[-36, -14, 6], [-10, -38, 6], [30, -16, 6], [20, 30, 6], [-30, 26, 6]];
  return (
    <>
      <Ground x0={-62} x1={62} y0={-62} y1={62} />
      <Cyl at={[0, 0, 0]} r={52} h={6} />
      {spots.map((s, i) => (
        <A key={"l" + i} a="flow" delay={i * 0.1}>
          <Line p={[[0, 0, 12], [s[0], s[1], 10]]} accent dash />
        </A>
      ))}
      {spots.slice(0, 3).map((s, i) => (
        <A key={i} a="f" delay={i * 0.4}>
          {i === 1 ? <Cyl at={s} r={7} h={12} /> : <Box at={[s[0] - 6, s[1] - 6, 6]} size={[12, 12, 10]} />}
        </A>
      ))}
      {server ? (
        <>
          <Cyl at={[0, 0, 6]} r={13} h={10} />
          <Cyl at={[0, 0, 18]} r={13} h={10} />
          <A a="f" delay={0.2}>
            <Cyl at={[0, 0, 30]} r={13} h={10} accent ring />
          </A>
        </>
      ) : (
        <Cyl at={[0, 0, 6]} r={14} h={26} accent ring />
      )}
      {spots.slice(3).map((s, i) => (
        <A key={"b" + i} a="f" delay={1 + i * 0.4}>
          <Box at={[s[0] - 6, s[1] - 6, 6]} size={[12, 12, i ? 8 : 14]} accent={i === 0}>
            {i === 0 && <Dot at={[s[0], s[1], 20]} className="pulse" />}
          </Box>
        </A>
      ))}
    </>
  );
}

/** Figma frames on one plate becoming code on another. */
function Bridge() {
  return (
    <>
      <Ground x0={-64} x1={64} y0={-40} y1={40} />
      <Box at={[-60, -34, 0]} size={[50, 68, 4]}>
        <Quad p={onZ(4, -54, -16, -28, -6)} />
        <Quad p={onZ(4, -54, -36, 0, 28)} />
        <Quad p={onZ(4, -32, -16, 0, 28)} />
      </Box>
      <Box at={[12, -34, 0]} size={[50, 68, 4]}>
        {range(7).map((i) => (
          <Line key={i} p={[[18 + (i % 3) * 4, -26 + i * 8, 4], [i % 2 ? 44 : 54, -26 + i * 8, 4]]} accent={i === 0} faint={i > 3} />
        ))}
      </Box>
      <A a="flow">
        <Line p={[[-14, 0, 14], [-4, 0, 22], [6, 0, 22], [14, 0, 14]]} accent dash />
      </A>
      <A a="slide">
        <Box at={[-48, -18, 14]} size={[22, 22, 3]} accent tone="accent" />
      </A>
    </>
  );
}

/** An envelope with campaign bars behind it. */
function Mail() {
  return (
    <>
      <Ground x0={-58} x1={58} y0={-40} y1={44} />
      {[20, 34, 26].map((h, i) => (
        <A key={i} a="rise" delay={i * 0.25}>
          <Box at={[10 + i * 14, -34, 0]} size={[9, 9, h]} accent={i === 1} tone={i === 1 ? "accent" : undefined} />
        </A>
      ))}
      <A a="f">
        <Box at={[-52, -14, 0]} size={[76, 52, 8]}>
          <Line p={[[-52, -14, 8], [-14, 14, 8], [24, -14, 8]]} />
          <Dot at={[-14, 14, 8]} className="pulse" />
        </Box>
      </A>
    </>
  );
}

/** Pedestals of different heights: comparisons. `pick` sets which one wins. */
function Podium({ pick = 1, things = ["box", "cyl", "box"] as const }: { pick?: number; things?: readonly ("box" | "cyl")[] }) {
  const hs = [16, 30, 22];
  return (
    <>
      <Ground x0={-60} x1={58} y0={-16} y1={22} />
      {hs.map((h, i) => {
        const x = -54 + i * 38;
        return (
          <g key={i}>
            <Box at={[x, -10, 0]} size={[28, 28, h]} accent={i === pick} />
            <A a="f" delay={i * 0.35}>
              {things[i] === "cyl" ? <Cyl at={[x + 14, 4, h + 4]} r={8} h={10} accent={i === pick} ring={i === pick} /> : <Box at={[x + 7, -3, h + 4]} size={[14, 14, 12]} accent={i === pick} />}
            </A>
          </g>
        );
      })}
    </>
  );
}

/** One block exploded into its layers: why generated dashboards look generic. */
function Exploded() {
  return (
    <>
      <Ground x0={-58} x1={58} y0={-36} y1={36} />
      <Box at={[-54, -32, 0]} size={[108, 64, 6]} />
      <A a="lift" delay={0.1}>
        <Box at={[-54, -32, 18]} size={[108, 64, 3]}>
          <Quad p={onZ(21, -48, -30, -26, 26)} dash />
          <Quad p={onZ(21, -24, 48, -26, 26)} dash />
        </Box>
      </A>
      <A a="lift" delay={0.35}>
        <Box at={[-54, -32, 34]} size={[108, 64, 3]} accent>
          {range(3).map((i) => (
            <Quad key={i} p={onZ(37, -24 + i * 25, -4 + i * 25, -26, -8)} accent={i === 2} fill={i === 2 ? "var(--illo-accent-wash)" : "none"} />
          ))}
          <Quad p={onZ(37, -24, 48, -2, 26)} />
          <Quad p={onZ(37, -48, -30, -26, 26)} />
        </Box>
      </A>
    </>
  );
}

/** A grid of component blocks, some popping up. */
function Grid() {
  const h = [6, 12, 6, 10, 18, 8, 6, 9, 14];
  return (
    <>
      <Ground x0={-48} x1={48} y0={-48} y1={48} />
      <Box at={[-44, -44, 0]} size={[88, 88, 3]} />
      {range(9).map((i) => {
        const x = -38 + (i % 3) * 27;
        const y = -38 + Math.floor(i / 3) * 27;
        const pop = i === 4 || i === 1 || i === 8;
        const b = <Box at={[x, y, 3]} size={[22, 22, h[i]]} accent={i === 4} tone={i === 4 ? "accent" : undefined} />;
        return pop ? (
          <A key={i} a="rise" delay={i * 0.15}>
            {b}
          </A>
        ) : (
          <g key={i}>{b}</g>
        );
      })}
    </>
  );
}

/** Frames standing on a shelf: a Figma kit. */
function Frames() {
  return (
    <>
      <Ground x0={-60} x1={60} y0={-20} y1={26} />
      <Box at={[-58, -16, 0]} size={[116, 38, 4]} />
      {range(4).map((i) => {
        const x = -48 + i * 26;
        const y = -8 + (i % 2) * 6;
        return (
          <A key={i} a="f" delay={i * 0.3}>
            <Box at={[x, y, 4]} size={[22, 3, 40 - (i % 2) * 8]} accent={i === 2} />
            <Quad p={onY(y + 3, x + 3, x + 19, 34 - (i % 2) * 8, 40 - (i % 2) * 8)} accent={i === 2} />
            <LinesY Y={y + 3} x0={x + 3} x1={x + 19} z0={28 - (i % 2) * 8} n={3} gap={6} />
          </A>
        );
      })}
    </>
  );
}

/** A terminal block writing a component: coding agents. */
function Terminal() {
  const Y = -2;
  return (
    <>
      <Ground x0={-60} x1={60} y0={-26} y1={40} />
      <Box at={[-56, -22, 0]} size={[70, 58, 4]} />
      <Box at={[-50, -8, 4]} size={[58, 6, 44]} />
      <Quad p={onY(Y, -46, 4, 8, 44)} fill="var(--illo-ink)" />
      {range(4).map((i) => (
        <Line key={i} p={[[-42 + (i ? 6 : 0), Y, 38 - i * 7], [i % 2 ? -14 : -4, Y, 38 - i * 7]]} accent={i === 0} />
      ))}
      <A a="blink">
        <Quad p={onY(Y, -36, -32, 12, 17)} fill="var(--illo-accent)" accent />
      </A>
      <A a="slide">
        <Box at={[26, -10, 4]} size={[26, 26, 8]} accent>
          <Quad p={onZ(12, 30, 48, -6, 4)} />
          <Quad p={onZ(12, 30, 38, 7, 12)} accent />
        </Box>
      </A>
    </>
  );
}

/** A rules document next to token slabs: editor rules for a design system. */
function Rules() {
  const Y = 2;
  return (
    <>
      <Ground x0={-58} x1={60} y0={-28} y1={34} />
      <A a="f">
        <Box at={[-52, -4, 0]} size={[44, 6, 58]} />
        {range(5).map((i) => (
          <g key={i}>
            <Quad p={onY(Y, -46, -42, 46 - i * 9, 50 - i * 9)} accent={i < 3} fill={i < 3 ? "var(--illo-accent-wash)" : "none"} />
            <Line p={[[-38, Y, 48 - i * 9], [i % 2 ? -18 : -12, Y, 48 - i * 9]]} faint={i > 2} />
          </g>
        ))}
      </A>
      {range(4).map((i) => (
        <A key={i} a="lift" delay={i * 0.2}>
          <Box at={[10, -20, i * 9]} size={[40, 40, 4]} accent={i === 3} tone={i === 3 ? "accent" : undefined} />
        </A>
      ))}
    </>
  );
}

/** Colour and spacing token chips fanned out. */
function Tokens() {
  return (
    <>
      <Ground x0={-56} x1={56} y0={-30} y1={30} />
      {range(6).map((i) => (
        <A key={i} a="f" delay={i * 0.18}>
          <Box at={[-52 + i * 16, -24, 0]} size={[12, 48, 6 + i * 5]} accent={i === 4} tone={i === 4 ? "accent" : i === 0 ? "ink" : undefined} />
        </A>
      ))}
    </>
  );
}

/** Three small screens: dashboard examples. */
function Trio() {
  return (
    <>
      <Ground x0={-64} x1={64} y0={-26} y1={30} />
      <Box at={[-62, -22, 0]} size={[124, 48, 3]} />
      {range(3).map((i) => {
        const x = -56 + i * 40;
        const Y = -6 + i * 2;
        return (
          <A key={i} a="f" delay={i * 0.4}>
            <Box at={[x, Y - 4, 3]} size={[34, 4, 34]} accent={i === 1} />
            {i === 0 && [10, 16, 12, 22].map((h, k) => <Quad key={k} p={onY(Y, x + 5 + k * 6, x + 9 + k * 6, 8, 8 + h)} fill="var(--illo-l)" />)}
            {i === 1 && <Line p={[[x + 4, Y, 12], [x + 11, Y, 20], [x + 18, Y, 16], [x + 24, Y, 28], [x + 30, Y, 26]]} accent />}
            {i === 2 && (
              <>
                <Quad p={onY(Y, x + 4, x + 30, 26, 32)} />
                <Line p={[[x + 4, Y, 20], [x + 30, Y, 20]]} faint />
                <Line p={[[x + 4, Y, 14], [x + 24, Y, 14]]} faint />
                <Line p={[[x + 4, Y, 8], [x + 28, Y, 8]]} faint />
              </>
            )}
          </A>
        );
      })}
    </>
  );
}

/** Points of a circle lying on the plane z = Z. */
const circleZ = (cx: number, cy: number, Z: number, r: number, n = 20): V[] => range(n).map((i) => [cx + r * Math.cos((i / n) * Math.PI * 2), cy + r * Math.sin((i / n) * Math.PI * 2), Z]);

/** A tapered ingot bar: footprint w x d, top inset by k. */
function Bar({ at: [x, y, z], w, d, h, k = 3, accent }: { at: V; w: number; d: number; h: number; k?: number; accent?: boolean }) {
  const t = z + h;
  return (
    <g>
      <Quad p={[[x + w, y, z], [x + w, y + d, z], [x + w - k, y + d - k, t], [x + w - k, y + k, t]]} fill="var(--illo-r)" accent={accent} />
      <Quad p={[[x, y + d, z], [x + w, y + d, z], [x + w - k, y + d - k, t], [x + k, y + d - k, t]]} fill="var(--illo-l)" accent={accent} />
      <Quad p={onZ(t, x + k, x + w - k, y + k, y + d - k)} fill={accent ? "var(--illo-accent-wash)" : "var(--illo-top)"} accent={accent} />
    </g>
  );
}

/** Screen to Figma to code to check: how components are made. Laid out across the page. */
function Pipeline() {
  const at = (i: number): [number, number] => [-66 + i * 34, 66 - i * 34];
  const [a, b, c, e] = [0, 1, 2, 3].map(at);
  return (
    <>
      {[0, 1, 2].map((i) => {
        const [x, y] = at(i);
        const [x2, y2] = at(i + 1);
        return (
          <A key={"c" + i} a="flow" delay={i * 0.2}>
            <Line p={[[x + 14, y - 14, 4], [x2 - 14, y2 + 14, 4]]} accent dash />
          </A>
        );
      })}
      <Box at={[a[0] - 14, a[1] - 14, 0]} size={[28, 28, 3]} />
      <Box at={[a[0] - 10, a[1] - 2, 3]} size={[22, 3, 26]} />
      {[8, 14, 11, 18].map((h, k) => (
        <A key={k} a="rise" delay={k * 0.2}>
          <Quad p={onY(a[1] + 1, a[0] - 7 + k * 5, a[0] - 4 + k * 5, 7, 7 + h)} fill="var(--illo-l)" accent={k === 3} />
        </A>
      ))}
      <Box at={[b[0] - 14, b[1] - 14, 0]} size={[28, 28, 3]}>
        <Quad p={onZ(3, b[0] - 10, b[0] - 1, b[1] - 10, b[1] + 10)} />
        <Quad p={onZ(3, b[0] + 2, b[0] + 10, b[1] - 10, b[1] - 1)} />
      </Box>
      <A a="lift">
        <Box at={[b[0] + 1, b[1] + 1, 12]} size={[10, 10, 2]} accent tone="accent" />
      </A>
      <Box at={[c[0] - 14, c[1] - 14, 0]} size={[28, 28, 3]}>
        {range(5).map((i) => (
          <Line key={i} p={[[c[0] - 10 + (i % 2) * 3, c[1] - 9 + i * 4.5, 3], [c[0] + (i % 3 === 1 ? 4 : 10), c[1] - 9 + i * 4.5, 3]]} accent={i === 0} faint={i > 2} />
        ))}
      </Box>
      <Box at={[e[0] - 14, e[1] - 14, 0]} size={[28, 28, 3]} />
      <A a="f">
        <Box at={[e[0] - 9, e[1] - 9, 6]} size={[18, 18, 12]} accent>
          <Line p={[[e[0] - 5, e[1], 18], [e[0] - 1, e[1] + 4, 18], [e[0] + 6, e[1] - 4, 18]]} accent />
        </Box>
      </A>
    </>
  );
}

/** A small pile of documents with a checked line: editorial policy, licence. */
function Docs() {
  return (
    <>
      <Ground x0={-44} x1={44} y0={-40} y1={40} />
      <Box at={[-34, -30, 0]} size={[56, 64, 2]} />
      <Box at={[-30, -34, 4]} size={[56, 64, 2]} />
      <A a="lift">
        <Box at={[-26, -38, 9]} size={[56, 64, 2]} accent>
          {range(6).map((i) => (
            <g key={i}>
              <Quad p={onZ(11, -20, -15, -30 + i * 9, -25 + i * 9)} accent={i < 3} fill={i < 3 ? "var(--illo-accent-wash)" : "none"} />
              <Line p={[[-10, -27.5 + i * 9, 11], [i % 2 ? 12 : 22, -27.5 + i * 9, 11]]} faint={i > 2} />
            </g>
          ))}
        </Box>
      </A>
      <A a="f" delay={0.6}>
        <Box at={[30, -30, 14]} size={[5, 44, 4]} />
      </A>
    </>
  );
}

/** An API key lying on a plate. */
function Key() {
  return (
    <>
      <Ground x0={-46} x1={46} y0={-26} y1={26} />
      <Box at={[-42, -22, 0]} size={[84, 44, 3]} />
      <A a="f">
        <Cyl at={[-22, 0, 6]} r={12} h={5} accent ring />
        <Box at={[-10, -3, 6]} size={[44, 6, 5]} accent />
        <Box at={[22, 3, 6]} size={[5, 6, 5]} accent />
        <Box at={[30, 3, 6]} size={[4, 4, 5]} accent />
      </A>
      <Dot at={[-30, 14, 3]} className="pulse" />
    </>
  );
}

/** An agent block plugged into the server: add the MCP server. */
function Plug() {
  return (
    <>
      <Ground x0={-56} x1={56} y0={-30} y1={30} />
      <Box at={[-52, -18, 0]} size={[34, 34, 22]}>
        <Quad p={onY(16, -48, -24, 6, 18)} fill="var(--illo-ink)" />
        <Line p={[[-45, 16, 14], [-34, 16, 14]]} accent />
      </Box>
      <A a="flow">
        <Line p={[[-18, 0, 10], [0, 0, 16], [18, 0, 10]]} accent dash />
      </A>
      <Cyl at={[34, 0, 0]} r={14} h={8} />
      <Cyl at={[34, 0, 10]} r={14} h={8} />
      <Cyl at={[34, 0, 20]} r={14} h={8} accent ring />
      <A a="slide">
        <Box at={[-14, -4, 12]} size={[8, 8, 6]} accent tone="accent" />
      </A>
    </>
  );
}

/** Stacked ingots: the brand, Lifetime. */
function Ingots() {
  return (
    <>
      <Ground x0={-46} x1={46} y0={-30} y1={30} />
      <Bar at={[-42, -24, 0]} w={40} d={22} h={10} />
      <Bar at={[2, -24, 0]} w={40} d={22} h={10} />
      <Bar at={[-42, 2, 0]} w={40} d={22} h={10} />
      <Bar at={[2, 2, 0]} w={40} d={22} h={10} />
      <A a="lift">
        <Bar at={[-20, -11, 12]} w={40} d={22} h={10} accent />
      </A>
    </>
  );
}

/** A tray of icon tiles, each with its own glyph. */
function IconSet() {
  const glyph = (i: number, x: number, y: number, z: number) => {
    const cx = x + 8;
    const cy = y + 8;
    if (i % 4 === 0) return <Quad p={circleZ(cx, cy, z, 4)} accent={i === 4} />;
    if (i % 4 === 1) return <Line p={[[cx - 4, cy, z], [cx + 4, cy, z], [cx, cy, z], [cx, cy - 4, z], [cx, cy + 4, z]]} />;
    if (i % 4 === 2) return <Quad p={onZ(z, cx - 4, cx + 4, cy - 4, cy + 4)} />;
    return <Line p={[[cx - 4, cy + 2, z], [cx - 1, cy + 4, z], [cx + 4, cy - 4, z]]} accent />;
  };
  return (
    <>
      <Ground x0={-36} x1={36} y0={-36} y1={36} />
      <Box at={[-32, -32, 0]} size={[64, 64, 3]} />
      {range(9).map((i) => {
        const x = -28 + (i % 3) * 20;
        const y = -28 + Math.floor(i / 3) * 20;
        const tile = (
          <Box at={[x, y, 3]} size={[16, 16, 3]} accent={i === 4}>
            {glyph(i, x, y, 6)}
          </Box>
        );
        return i === 4 || i === 2 ? (
          <A key={i} a="lift" delay={i * 0.2}>
            {tile}
          </A>
        ) : (
          <g key={i}>{tile}</g>
        );
      })}
    </>
  );
}

/** A grid with one block gone missing: the 404. */
function Lost() {
  return (
    <>
      <Ground x0={-46} x1={46} y0={-34} y1={34} />
      <Box at={[-42, -30, 0]} size={[84, 60, 3]} />
      {range(6).map((i) => {
        const x = -36 + (i % 3) * 26;
        const y = -24 + Math.floor(i / 3) * 26;
        return i === 4 ? <Quad key={i} p={onZ(3, x, x + 20, y, y + 20)} dash accent /> : <Box key={i} at={[x, y, 3]} size={[20, 20, 10]} />;
      })}
      <Line p={[[0, 12, 4], [14, -4, 34]]} dash faint />
      <A a="f">
        <Box at={[6, -14, 34]} size={[20, 20, 10]} accent tone="accent" />
      </A>
    </>
  );
}

/** One block and room to grow: the Free plan. */
function Seed() {
  return (
    <>
      <Ground x0={-36} x1={36} y0={-36} y1={36} />
      <Box at={[-32, -32, 0]} size={[64, 64, 3]}>
        <Quad p={onZ(3, -24, -4, 4, 24)} dash />
        <Quad p={onZ(3, 4, 24, 4, 24)} dash />
        <Quad p={onZ(3, 4, 24, -24, -4)} dash />
      </Box>
      <A a="f">
        <Box at={[-24, -24, 3]} size={[20, 20, 14]} accent />
      </A>
    </>
  );
}

/** Six system blocks: Pro. */
function Six() {
  const h = [12, 18, 14, 20, 10, 16];
  return (
    <>
      <Ground x0={-46} x1={46} y0={-32} y1={32} />
      <Box at={[-42, -28, 0]} size={[84, 56, 3]} />
      {range(6).map((i) => (
        <A key={i} a="f" delay={i * 0.25}>
          <Box at={[-36 + (i % 3) * 26, -22 + Math.floor(i / 3) * 24, 3]} size={[20, 20, h[i]]} accent={i === 1} tone={i === 1 ? "accent" : undefined} />
        </A>
      ))}
    </>
  );
}

/** A launch pad: a product stack ships upward on a dashed trail, next to a rising growth trio. Home: founders. */
function Founders() {
  return (
    <>
      <Ground x0={-58} x1={58} y0={-40} y1={40} />
      <Cyl at={[-14, 0, 0]} r={34} h={5} />
      <Quad p={circleZ(-14, 0, 5, 22)} dash />
      <Box at={[-30, -16, 5]} size={[32, 32, 10]} />
      <Box at={[-26, -12, 15]} size={[24, 24, 8]} />
      <A a="flow">
        <Line p={[[-14, 0, 24], [-14, 0, 44]]} accent dash />
      </A>
      <A a="lift">
        <Box at={[-23, -9, 48]} size={[18, 18, 12]} accent tone="accent">
          <Line p={[[-18, 0, 60], [-14, -4, 60], [-10, 0, 60]]} accent />
        </Box>
      </A>
      {[12, 22, 34].map((h, i) => (
        <A key={i} a="rise" delay={i * 0.25}>
          <Box at={[24 + i * 12, -32, 0]} size={[9, 9, h]} accent={i === 2} tone={i === 2 ? "accent" : undefined} />
        </A>
      ))}
      <Dot at={[40, 14, 0]} className="pulse" />
    </>
  );
}

/** A code sheet lying flat, and component blocks snapping into the slots of a layout plate. Home: React code. */
function ReactCode() {
  return (
    <>
      <Ground x0={-64} x1={60} y0={-44} y1={40} />
      <Box at={[-60, -40, 0]} size={[46, 60, 3]}>
        <Line p={[[-52, -32, 3], [-56, -28, 3], [-52, -24, 3]]} accent />
        <Line p={[[-46, -24, 3], [-42, -32, 3]]} accent />
        <Line p={[[-38, -32, 3], [-34, -28, 3], [-38, -24, 3]]} accent />
        {range(5).map((i) => (
          <Line key={i} p={[[-54 + (i % 3 === 1 ? 6 : i % 3 === 2 ? 12 : 0), -16 + i * 7, 3], [i % 2 ? -26 : -20, -16 + i * 7, 3]]} faint={i > 2} />
        ))}
      </Box>
      <A a="flow">
        <Line p={[[-14, -10, 6], [-4, -10, 12], [6, -10, 6]]} accent dash />
      </A>
      <Box at={[6, -40, 0]} size={[52, 76, 3]}>
        <Quad p={onZ(3, 12, 52, -34, -22)} />
        <Quad p={onZ(3, 12, 30, -18, 0)} />
        <Quad p={onZ(3, 34, 52, -18, 0)} dash accent />
        <Quad p={onZ(3, 12, 52, 4, 30)} />
      </Box>
      <Box at={[12, -34, 3]} size={[40, 12, 5]} />
      <Box at={[12, -18, 3]} size={[18, 18, 9]} />
      <Box at={[12, 4, 3]} size={[40, 26, 4]}>
        <Line p={[[18, 10, 7], [40, 10, 7]]} faint />
        <Line p={[[18, 16, 7], [32, 16, 7]]} faint />
      </Box>
      <Line p={[[43, -9, 4], [43, -9, 22]]} dash faint />
      <A a="lift">
        <Box at={[34, -18, 22]} size={[18, 18, 9]} accent tone="accent" />
      </A>
    </>
  );
}

/** Layers lifting off a frame and landing on a canvas inside a selection box. Home: Figma layer. */
function FigmaLayer() {
  const handles: V[] = [[10, -30, 3], [56, -30, 3], [56, 30, 3], [10, 30, 3]];
  return (
    <>
      <Ground x0={-62} x1={64} y0={-40} y1={40} />
      <Box at={[-58, -24, 0]} size={[44, 48, 3]}>
        <Quad p={onZ(3, -52, -20, -18, -8)} dash />
        <Quad p={onZ(3, -52, -20, -4, 18)} dash />
      </Box>
      {range(3).map((i) => (
        <A key={i} a="lift" delay={i * 0.3}>
          <Box at={[-54, -20, 10 + i * 9]} size={[36, 40, 2]} accent={i === 2} tone={i === 2 ? "accent" : undefined}>
            {i === 2 && (
              <>
                <Line p={[[-48, -14, 30], [-30, -14, 30]]} accent />
                <Quad p={onZ(30, -48, -24, -4, 14)} accent />
              </>
            )}
          </Box>
        </A>
      ))}
      <Box at={[4, -36, 0]} size={[58, 72, 3]}>
        <Quad p={onZ(3, 10, 56, -30, 30)} accent />
        {handles.map((h, i) => (
          <Quad key={i} p={onZ(3, h[0] - 2, h[0] + 2, h[1] - 2, h[1] + 2)} fill="var(--illo-top)" accent />
        ))}
      </Box>
      <A a="f" delay={0.5}>
        <Box at={[16, -22, 6]} size={[34, 18, 3]} />
        <Box at={[16, 0, 6]} size={[16, 22, 6]} />
        <Box at={[36, 0, 6]} size={[14, 22, 3]} />
      </A>
      <A a="flow">
        <Line p={[[-16, 0, 30], [-4, 0, 34], [8, 0, 24]]} accent dash />
      </A>
    </>
  );
}

/** An agent block calling a component stack: calls go out and answers flow back. Home: your AI agent. */
function Agent() {
  const Y = 10;
  return (
    <>
      <Ground x0={-60} x1={60} y0={-34} y1={36} />
      <Box at={[-56, -14, 0]} size={[34, 24, 30]}>
        <Quad p={onY(Y, -50, -28, 8, 26)} fill="var(--illo-ink)" />
        <Line p={[[-46, Y, 21], [-43, Y, 18], [-46, Y, 15]]} accent />
        <A a="blink">
          <Line p={[[-40, Y, 15], [-35, Y, 15]]} accent />
        </A>
      </Box>
      <A a="flow">
        <Line p={[[-22, -6, 26], [-2, -6, 36], [20, -6, 30]]} accent dash />
      </A>
      <A a="flow" delay={0.7}>
        <Line p={[[20, 6, 12], [-2, 6, 16], [-22, 6, 12]]} dash faint />
      </A>
      <Dot at={[-2, -6, 36]} className="pulse" />
      {range(4).map((i) => (
        <A key={i} a="lift" delay={i * 0.2}>
          <Box at={[20, -20, i * 9]} size={[34, 34, 5]} accent={i === 3} tone={i === 3 ? "accent" : undefined}>
            {i === 3 && (
              <>
                <Quad p={onZ(32, 26, 36, -14, -4)} accent />
                <Line p={[[40, -9, 32], [48, -9, 32]]} accent />
                <Line p={[[26, 4, 32], [48, 4, 32]]} />
              </>
            )}
          </Box>
        </A>
      ))}
    </>
  );
}

export const SCENES: Record<string, () => ReactNode> = {
  ...CATEGORY_SCENES,
  stack: () => <Stack />,
  screen: () => <Screen />,
  "screen-b": () => <Screen variant="b" />,
  kpi: () => <Kpi />,
  bars: () => <Bars />,
  "bars-b": () => <Bars seed={1} />,
  table: () => <Table />,
  overlay: () => <Overlay />,
  empty: () => <Empty />,
  hub: () => <Hub />,
  server: () => <Hub server />,
  bridge: () => <Bridge />,
  mail: () => <Mail />,
  podium: () => <Podium />,
  "podium-b": () => <Podium pick={2} things={["cyl", "box", "box"]} />,
  "podium-c": () => <Podium pick={0} things={["box", "box", "cyl"]} />,
  exploded: () => <Exploded />,
  grid: () => <Grid />,
  frames: () => <Frames />,
  terminal: () => <Terminal />,
  rules: () => <Rules />,
  tokens: () => <Tokens />,
  trio: () => <Trio />,
  pipeline: () => <Pipeline />,
  docs: () => <Docs />,
  key: () => <Key />,
  plug: () => <Plug />,
  ingots: () => <Ingots />,
  icons: () => <IconSet />,
  lost: () => <Lost />,
  seed: () => <Seed />,
  six: () => <Six />,
  founders: () => <Founders />,
  react: () => <ReactCode />,
  figmalayer: () => <FigmaLayer />,
  agent: () => <Agent />,
};

/** Cover scene for each guide. Every guide gets its own picture; unknown slugs fall back by category. */
export const POST_SCENE: Record<string, string> = {
  "ai-agent-dashboard-design": "hub",
  "ai-generated-dashboard-design": "exploded",
  "admin-dashboard-templates-nextjs": "screen",
  "best-dashboard-ui-kits": "stack",
  "claude-code-frontend-ui": "terminal",
  "cursor-rules-design-system": "rules",
  "dashboard-chart-types-react": "bars",
  "best-react-chart-libraries": "bars-b",
  "email-marketing-dashboard": "mail",
  "empty-state-design": "empty",
  "dashboard-design-system-tailwind-tokens": "tokens",
  "figma-to-react-code": "bridge",
  "kpi-card-design": "kpi",
  "free-figma-dashboard-ui-kit": "frames",
  "mcp-server-ui-components-ai-agents": "server",
  "react-data-table-design": "table",
  "saas-dashboard-examples": "trio",
  "modal-vs-drawer": "overlay",
  "shadcn-dashboard": "screen-b",
  "tailwind-dashboard-components": "grid",
  "untitled-ui-alternatives": "podium-b",
  "shadcn-ui-alternatives": "podium",
};

export const CATEGORY_SCENE: Record<string, string> = { Guides: "stack", Lists: "trio", Comparisons: "podium-c", "AI agents": "hub" };


/** Fitted viewBox per scene (measured from the drawn geometry, plus padding for motion). */
export const VIEWBOX: Record<string, string> = {
 "cat-cards": "-108 -73 216 142",
 "cat-charts": "-101 -113 203 178",
 "cat-tables": "-113 -76 226 148",
 "cat-modals": "-118 -79 236 154",
 "cat-forms": "-84 -114 164 169",
 "cat-templates": "-116 -78 233 152",
 "cat-nav": "-115 -80 229 153",
 "cat-kpi": "-96 -95 183 159",
 "cat-menus": "-77 -116 160 167",
 "cat-popovers": "-106 -72 212 140",
 "cat-drawers": "-118 -79 236 154",
 "cat-headers": "-113 -77 226 149",
 "cat-editors": "-120 -80 240 156",
 "cat-empty": "-113 -84 226 156",
 "cat-atoms": "-110 -74 219 144",
 "stack": "-103 -110 205 176",
 "screen": "-113 -115 216 187",
 "screen-b": "-113 -115 216 187",
 "kpi": "-96 -95 183 159",
 "bars": "-97 -72 190 135",
 "bars-b": "-97 -79 190 142",
 "table": "-115 -77 229 150",
 "overlay": "-115 -77 229 150",
 "empty": "-113 -82 226 154",
 "hub": "-130 -86 261 168",
 "server": "-130 -86 261 168",
 "bridge": "-113 -76 226 148",
 "mail": "-111 -73 219 144",
 "podium": "-94 -77 181 137",
 "podium-b": "-94 -74 181 134",
 "podium-c": "-94 -77 181 137",
 "exploded": "-104 -100 209 167",
 "grid": "-106 -72 212 140",
 "frames": "-97 -92 190 155",
 "terminal": "-110 -97 207 167",
 "rules": "-103 -106 202 173",
 "tokens": "-97 -67 195 130",
 "trio": "-104 -90 205 157",
 "pipeline": "-155 -55 257 85",
 "docs": "-96 -66 191 128",
 "key": "-85 -60 171 116",
 "plug": "-97 -77 195 140",
 "ingots": "-89 -62 178 120",
 "icons": "-85 -60 171 116",
 "lost": "-92 -68 184 128",
 "seed": "-85 -61 171 117",
 "six": "-90 -64 181 123",
 "founders": "-108 -96 216 165",
 "react": "-113 -78 226 148",
 "figmalayer": "-111 -87 224 159",
 "agent": "-106 -85 210 153"
};
