/* One original scene per component category (the Categories page cards). Each scene is calm at
   rest and acts out its category on card hover or keyboard focus through H groups (.hv in
   globals.css). Geometry is drawn at its outermost state so the measured viewBox holds both. */
import type { ReactNode } from "react";
import { Box, Cyl, Ground, H, Line, LinesY, Quad, onY, onZ, shift, type V } from "./iso";

const range = (n: number) => Array.from({ length: n }, (_, i) => i);
const ease = (i: number, step = 60) => i * step;

/** Four cards on the ground; the chart card lifts off its footprint. */
function CatCards() {
  const W = 46;
  const D = 38;
  return (
    <>
      <Ground x0={-54} x1={54} y0={-44} y1={44} />
      {/* Back left: a list card */}
      <Box at={[-50, -40, 0]} size={[W, D, 3]}>
        <Line p={[[-45, -34, 3], [-30, -34, 3]]} />
        {range(4).map((i) => (
          <g key={i}>
            <Quad p={onZ(3, -45, -41, -27 + i * 7, -23 + i * 7)} />
            <Line p={[[-38, -25 + i * 7, 3], [i % 2 ? -18 : -12, -25 + i * 7, 3]]} faint />
          </g>
        ))}
      </Box>
      {/* Front left: an activity card */}
      <Box at={[-50, 2, 0]} size={[W, D, 3]}>
        <Quad p={onZ(3, -45, -33, 7, 19)} />
        <Line p={[[-29, 10, 3], [-12, 10, 3]]} />
        <Line p={[[-29, 15, 3], [-18, 15, 3]]} faint />
        <Quad p={onZ(3, -45, -9, 25, 35)} dash />
      </Box>
      {/* Back right: the lifted chart card, footprint left behind */}
      <Quad p={onZ(0, 4, 4 + W, -40, -40 + D)} dash />
      <H on={shift(0, 0, 13)}>
        <Box at={[4, -40, 0]} size={[W, D, 3]} accent>
          <Line p={[[9, -34, 3], [24, -34, 3]]} accent />
          {[8, 14, 10, 18].map((h, i) => (
            <Box key={i} at={[12 + i * 8, -16, 3]} size={[5, 5, h]} accent={i === 3} tone={i === 3 ? "accent" : undefined} />
          ))}
        </Box>
      </H>
      {/* Front right: a stat card */}
      <Box at={[4, 2, 0]} size={[W, D, 3]}>
        <Line p={[[9, 8, 3], [22, 8, 3]]} />
        <Quad p={onZ(3, 9, 30, 13, 22)} fill="var(--illo-l)" />
        <Line p={[[9, 30, 3], [16, 27, 3], [24, 31, 3], [32, 25, 3], [44, 28, 3]]} faint />
      </Box>
    </>
  );
}

/** A bar chart in front of its gridlines: bars rise to their values, then the trend line lands. */
function CatCharts() {
  const hs = [14, 24, 18, 32, 26, 40];
  const tops: V[] = hs.map((h, i) => [-43 + i * 16, -9, h + 10]);
  return (
    <>
      <Ground x0={-60} x1={60} y0={-32} y1={30} />
      <Box at={[-56, -30, 0]} size={[112, 4, 50]}>
        {[14, 26, 38].map((z) => (
          <Line key={z} p={[[-52, -26, z], [52, -26, z]]} faint />
        ))}
      </Box>
      <Box at={[-56, -26, 0]} size={[112, 52, 3]} />
      {hs.map((h, i) => (
        <H key={i} rest="scaleY(0.45)" on="scaleY(1)" origin="50% 100%" delay={ease(i, 55)}>
          <Box at={[-48 + i * 16, -14, 3]} size={[10, 10, h]} accent={i === 3} tone={i === 3 ? "accent" : undefined} />
        </H>
      ))}
      <H o={[0, 1]} delay={340}>
        <Line p={tops} accent />
        {tops.map((t, i) => (
          <Quad key={i} p={onY(t[1], t[0] - 1.2, t[0] + 1.2, t[2] - 1.2, t[2] + 1.2)} accent fill="var(--illo-top)" />
        ))}
      </H>
    </>
  );
}

/** A table sheet: header, rows with checkboxes and status pills; the highlighted row lifts out. */
function CatTables() {
  return (
    <>
      <Ground x0={-56} x1={56} y0={-48} y1={48} />
      <Box at={[-52, -44, 0]} size={[104, 88, 3]} />
      {range(6).map((i) => {
        const y = -38 + i * 14;
        const hot = i === 3;
        const row = (
          <Box at={[-46, y, 3]} size={[92, 10, i === 0 ? 4 : 2]} accent={hot} tone={i === 0 ? "ink" : undefined}>
            {i > 0 && (
              <>
                <Quad p={onZ(5, -42, -38, y + 3, y + 7)} accent={hot} fill={hot ? "var(--illo-accent)" : "none"} />
                <Line p={[[-33, y + 5, 5], [i % 2 ? -12 : -18, y + 5, 5]]} />
                <Quad p={onZ(5, 10, 24, y + 3, y + 7)} accent={hot} fill={hot ? "var(--illo-accent-wash)" : "none"} />
                <Line p={[[32, y + 5, 5], [40, y + 5, 5]]} faint />
              </>
            )}
          </Box>
        );
        if (!hot) return <g key={i}>{row}</g>;
        return (
          <g key={i}>
            <Quad p={onZ(3, -46, 46, y, y + 10)} dash />
            <H on={shift(4, 0, 10)}>{row}</H>
          </g>
        );
      })}
    </>
  );
}

/** A page with a dialog resting on it; on hover the dialog lifts off and the page dims. */
function CatModals() {
  return (
    <>
      <Ground x0={-62} x1={62} y0={-48} y1={48} />
      <Box at={[-58, -44, 0]} size={[116, 88, 3]}>
        <Quad p={onZ(3, -50, 50, -38, -30)} dash />
        {range(3).map((i) => (
          <Quad key={i} p={onZ(3, -50 + i * 34, -22 + i * 34, -24, -8)} dash />
        ))}
        <Quad p={onZ(3, -50, 50, -2, 36)} dash />
      </Box>
      <H o={[0, 1]}>
        <Quad p={onZ(3.2, -58, 58, -44, 44)} fill="rgb(11 11 11 / 0.07)" />
      </H>
      <H o={[0, 1]} delay={80}>
        <Quad p={onZ(3, -30, 24, -20, 20)} dash accent />
      </H>
      <H rest={shift(0, 0, -21)} on="translate(0px, 0px)">
        <Box at={[-30, -20, 24]} size={[54, 40, 3]} accent>
          <Line p={[[-24, -14, 27], [-4, -14, 27]]} />
          <Line p={[[14, -16, 27], [18, -12, 27]]} />
          <Line p={[[18, -16, 27], [14, -12, 27]]} />
          <Line p={[[-24, -6, 27], [14, -6, 27]]} faint />
          <Line p={[[-24, 0, 27], [4, 0, 27]]} faint />
          <Quad p={onZ(27, -6, 6, 9, 15)} />
          <Quad p={onZ(27, 8, 20, 9, 15)} accent fill="var(--illo-accent-wash)" />
        </Box>
      </H>
    </>
  );
}

/** A standing form: input slabs, a toggle and a submit button. Hover focuses the first field and flips the toggle. */
function CatForms() {
  const F = 1; // front face of the slabs
  return (
    <>
      <Ground x0={-50} x1={50} y0={-16} y1={20} />
      <Box at={[-46, -14, 0]} size={[92, 32, 3]} />
      <Box at={[-38, -8, 3]} size={[76, 6, 68]} />
      <Line p={[[-32, -2, 64], [-6, -2, 64]]} />
      {/* First field, focused on hover */}
      <Line p={[[-32, -2, 57], [-20, -2, 57]]} faint />
      <H on={shift(0, 3, 0)}>
        <Box at={[-32, -2, 45]} size={[64, 3, 8]} />
        <H o={[0, 1]} delay={120}>
          <Quad p={onY(F, -32, 32, 45, 53)} accent fill="var(--illo-top)" />
          <Line p={[[-29, F, 47], [-29, F, 51]]} accent />
        </H>
      </H>
      {/* Second field */}
      <Line p={[[-32, -2, 40], [-16, -2, 40]]} faint />
      <Box at={[-32, -2, 28]} size={[64, 3, 8]}>
        <Line p={[[-28, F, 32], [-10, F, 32]]} faint />
      </Box>
      {/* Toggle row */}
      <Line p={[[-32, -2, 19], [-6, -2, 19]]} />
      <Box at={[14, -2, 16]} size={[18, 3, 7]} />
      <H o={[0, 1]} delay={60}>
        <Quad p={onY(F, 14, 32, 16, 23)} accent fill="var(--illo-accent-wash)" />
      </H>
      <H on={shift(9, 0, 0)} delay={60}>
        <Quad p={onY(F, 15, 22, 17, 22)} fill="var(--illo-top)" />
      </H>
      {/* Submit */}
      <Box at={[-32, -2, 6]} size={[26, 3, 6]} accent tone="accent" />
    </>
  );
}

/** A full page template: header and sidebar over a wireframe; hover drops the hero, card row and table into place. */
function CatTemplates() {
  const blocks: { x: [number, number]; y: [number, number]; h: number; accent?: boolean; ink?: boolean }[] = [
    { x: [-50, 50], y: [-38, -31], h: 5, ink: true },
    { x: [-50, -36], y: [-27, 38], h: 7 },
    { x: [-32, 50], y: [-27, -8], h: 9, accent: true },
    { x: [-32, -8], y: [-4, 12], h: 6 },
    { x: [-4, 20], y: [-4, 12], h: 6 },
    { x: [24, 50], y: [-4, 12], h: 6 },
    { x: [-32, 50], y: [16, 38], h: 4 },
  ];
  return (
    <>
      <Ground x0={-60} x1={60} y0={-48} y1={48} />
      <Box at={[-56, -44, 0]} size={[112, 88, 3]} />
      {blocks.map((b, i) => (
        <g key={i}>
          <Quad p={onZ(3, b.x[0], b.x[1], b.y[0], b.y[1])} dash />
          {/* Header and sidebar always stand; the content blocks drop into their wireframe slots. */}
          <H rest={i > 1 ? shift(0, 0, 9) : undefined} on="translate(0px, 0px)" o={i > 1 ? [0, 1] : undefined} delay={i > 1 ? ease(i - 2, 70) : 0}>
            <Box at={[b.x[0], b.y[0], 3]} size={[b.x[1] - b.x[0], b.y[1] - b.y[0], b.h]} accent={b.accent} tone={b.accent ? "accent" : b.ink ? "ink" : undefined}>
              {i === 1 && range(5).map((k) => <Line key={k} p={[[-47, -20 + k * 9, 10], [-40, -20 + k * 9, 10]]} faint={k > 0} accent={k === 0} />)}
              {i === 6 && range(3).map((k) => <Line key={k} p={[[-28, 21 + k * 6, 7], [k === 1 ? 30 : 44, 21 + k * 6, 7]]} faint />)}
            </Box>
          </H>
        </g>
      ))}
    </>
  );
}

/** A sidebar rail beside the content; the active marker slides to another item. */
function CatNav() {
  const item = (k: number) => -30 + k * 13;
  return (
    <>
      <Ground x0={-60} x1={60} y0={-46} y1={46} />
      <Box at={[-56, -42, 0]} size={[112, 84, 3]}>
        <Quad p={onZ(3, -24, 50, -36, -26)} dash />
        <Quad p={onZ(3, -24, 12, -20, 4)} dash />
        <Quad p={onZ(3, 16, 50, -20, 4)} dash />
        <Quad p={onZ(3, -24, 50, 10, 36)} dash />
      </Box>
      <Box at={[-56, -42, 3]} size={[24, 84, 8]}>
        <H on={shift(0, 26, 0)}>
          <Quad p={onZ(11, -53, -35, item(0) - 3, item(0) + 6)} accent fill="var(--illo-accent-wash)" />
        </H>
        {range(5).map((k) => (
          <g key={k}>
            <Quad p={onZ(11, -51, -48, item(k), item(k) + 3)} />
            <Line p={[[-46, item(k) + 1.5, 11], [k % 2 ? -40 : -37, item(k) + 1.5, 11]]} faint={k !== 0 && k !== 2} />
          </g>
        ))}
      </Box>
    </>
  );
}

/** Stat tiles standing in a row. Hover draws each sparkline and lifts the change pill. */
function CatKpi() {
  const xs = [-52, -14, 24];
  const spark: number[][] = [[4, 9, 6, 12, 10, 16], [14, 10, 12, 7, 9, 5], [6, 7, 11, 9, 14, 13]];
  const Y = 4;
  return (
    <>
      <Ground x0={-58} x1={62} y0={-12} y1={26} />
      <Box at={[-58, -10, 0]} size={[120, 34, 3]} />
      {xs.map((x, i) => {
        const pts: V[] = spark[i].map((v, k) => [x + 4 + k * 4.8, Y, 7 + v]);
        return (
          <g key={i}>
            <Box at={[x, 0, 3]} size={[32, 4, 46]} accent={i === 1} />
            <Line p={[[x + 4, Y, 43], [x + 15, Y, 43]]} faint />
            <Quad p={onY(Y, x + 4, x + 19, 31, 38)} fill="var(--illo-l)" />
            <H on={shift(0, 0, 3)} delay={ease(i, 70) + 220}>
              <Quad p={onY(Y, x + 21, x + 28, 32, 36)} accent={i !== 1} fill={i !== 1 ? "var(--illo-accent-wash)" : "var(--illo-r)"} />
            </H>
            <Line p={pts} faint />
            {pts.slice(1).map((p, k) => (
              <H key={k} o={[0, 1]} delay={ease(i, 70) + k * 55}>
                <Line p={[pts[k], p]} accent={i !== 1} />
              </H>
            ))}
          </g>
        );
      })}
    </>
  );
}

/** A button on a wall; the dropdown list unrolls beneath it. */
function CatMenus() {
  const F = -2; // menu front face
  return (
    <>
      <Ground x0={-54} x1={54} y0={-16} y1={8} />
      <Box at={[-50, -14, 0]} size={[100, 6, 64]} />
      <LinesY Y={-8} x0={16} x1={42} z0={56} n={6} gap={7} />
      <Box at={[-32, -8, 49]} size={[36, 4, 9]} accent>
        <Line p={[[-28, -4, 53.5], [-12, -4, 53.5]]} />
        <Line p={[[-6, -4, 55], [-4, -4, 52.5], [-2, -4, 55]]} accent />
      </Box>
      <H o={[1, 0]}>
        <Quad p={onY(-8, -32, 8, 10, 46)} dash />
      </H>
      <H rest="scaleY(0.2)" on="scaleY(1)" o={[0, 1]} origin="50% 0%">
        <Box at={[-32, -8, 10]} size={[40, 6, 36]}>
          <Quad p={onY(F, -30, 6, 29, 35)} accent fill="var(--illo-accent-wash)" />
          {range(5).map((k) => (
            <g key={k}>
              <Quad p={onY(F, -28, -25, 40 - k * 6.5, 43 - k * 6.5)} accent={k === 1} />
              <Line p={[[-22, F, 41.5 - k * 6.5], [k % 2 ? -2 : -8, F, 41.5 - k * 6.5]]} accent={k === 1} faint={k === 4} />
            </g>
          ))}
        </Box>
      </H>
    </>
  );
}

/** A field with an info mark; a small panel with a pointer pops up beside it. */
function CatPopovers() {
  const Z = 24;
  return (
    <>
      <Ground x0={-58} x1={58} y0={-38} y1={38} />
      <Box at={[-54, -34, 0]} size={[108, 68, 3]}>
        <Line p={[[-46, -26, 3], [-30, -26, 3]]} faint />
        <Quad p={onZ(3, -46, 10, -22, -12)} dash />
        <Line p={[[-46, 22, 3], [-30, 22, 3]]} faint />
        <Quad p={onZ(3, -46, 10, 26, 32)} dash />
      </Box>
      <Line p={[[-46, 1, 3], [-34, 1, 3]]} />
      <Box at={[-46, 4, 3]} size={[56, 14, 4]} accent>
        <Line p={[[-41, 11, 7], [-18, 11, 7]]} faint />
      </Box>
      <Cyl at={[2, 11, 7]} r={3} h={2} accent ring />
      <H o={[1, 0]}>
        <Quad p={onZ(Z, -10, 42, -30, 0)} dash />
      </H>
      <H rest={shift(0, 0, -6)} on="translate(0px, 0px)" o={[0, 1]}>
        <Quad p={[[-2, 0, Z], [6, 0, Z], [2, 6, Z - 8]]} accent fill="var(--illo-top)" />
        <Box at={[-10, -30, Z]} size={[52, 30, 3]} accent>
          <Line p={[[-5, -25, Z + 3], [14, -25, Z + 3]]} />
          <Line p={[[-5, -19, Z + 3], [32, -19, Z + 3]]} faint />
          <Line p={[[-5, -13, Z + 3], [24, -13, Z + 3]]} faint />
          <Quad p={onZ(Z + 3, 24, 37, -8, -3)} accent fill="var(--illo-accent-wash)" />
        </Box>
      </H>
    </>
  );
}

/** A page with a side panel peeking off its edge; hover slides the drawer in over a dimmed page. */
function CatDrawers() {
  return (
    <>
      <Ground x0={-62} x1={62} y0={-48} y1={48} />
      <Box at={[-58, -44, 0]} size={[116, 88, 3]}>
        <Quad p={onZ(3, -50, 50, -38, -30)} dash />
        {range(3).map((k) => (
          <Quad key={k} p={onZ(3, -50, 18, -22 + k * 20, -8 + k * 20)} dash />
        ))}
      </Box>
      <H o={[0, 1]}>
        <Quad p={onZ(3.2, -58, 58, -44, 44)} fill="rgb(11 11 11 / 0.07)" />
      </H>
      <H rest={shift(18, 0, 0)} on="translate(0px, 0px)">
        <Box at={[24, -44, 9]} size={[32, 88, 3]} accent>
          <Line p={[[30, -37, 12], [44, -37, 12]]} />
          <Line p={[[48, -39, 12], [51, -36, 12]]} />
          <Line p={[[51, -39, 12], [48, -36, 12]]} />
          {range(5).map((k) => (
            <g key={k}>
              <Quad p={onZ(12, 30, 50, -28 + k * 12, -21 + k * 12)} />
            </g>
          ))}
          <Quad p={onZ(12, 30, 50, 34, 40)} accent fill="var(--illo-accent-wash)" />
        </Box>
      </H>
    </>
  );
}

/** A page header strip: breadcrumb pills, title, actions and tabs. Hover moves the tab and raises the primary action. */
function CatHeaders() {
  const tab = (k: number): [number, number] => [-50 + k * 17, -38 + k * 17];
  return (
    <>
      <Ground x0={-60} x1={60} y0={-44} y1={44} />
      <Box at={[-56, -40, 0]} size={[112, 80, 3]}>
        <Quad p={onZ(3, -50, 50, -2, 14)} dash />
        <Quad p={onZ(3, -50, 50, 18, 34)} dash />
      </Box>
      <Box at={[-56, -40, 3]} size={[112, 24, 6]}>
        {[[-50, -42], [-38, -28], [-24, -12]].map(([a, b], k) => (
          <Quad key={k} p={onZ(9, a, b, -36, -33)} fill={k === 2 ? "var(--illo-accent-wash)" : "none"} accent={k === 2} />
        ))}
        <Line p={[[-50, -27, 9], [-18, -27, 9]]} />
        <Line p={[[-50, -22, 9], [-30, -22, 9]]} faint />
      </Box>
      <Box at={[16, -34, 9]} size={[15, 11, 3]} />
      <H on={shift(0, 0, 4)} delay={90}>
        <Box at={[35, -34, 9]} size={[15, 11, 3]} accent tone="accent" />
      </H>
      {range(4).map((k) => (
        <Line key={k} p={[[tab(k)[0] + 1, -11, 3], [tab(k)[1] - 1, -11, 3]]} faint={k > 1} />
      ))}
      <Line p={[[-50, -6, 3], [50, -6, 3]]} faint />
      <H on={shift(17, 0, 0)}>
        <Quad p={onZ(3.2, tab(0)[0], tab(0)[1], -8, -6)} accent fill="var(--illo-accent)" />
      </H>
    </>
  );
}

/** A canvas with connected nodes: hover lights the connections in sequence and selects a node. */
function CatEditors() {
  const links: V[][] = [
    [[-24, -26, 3], [-7, -26, 3], [-7, -30, 3], [10, -30, 3]],
    [[-36, -18, 3], [-36, -4, 3], [-18, -4, 3], [-18, 10, 3]],
    [[22, -22, 3], [22, -4, 3], [36, -4, 3], [36, 14, 3]],
    [[-6, 18, 3], [8, 18, 3], [8, 22, 3], [24, 22, 3]],
  ];
  const nodes: { at: [number, number]; acc?: boolean }[] = [{ at: [-48, -34] }, { at: [10, -38] }, { at: [-30, 10] }, { at: [24, 14], acc: true }];
  return (
    <>
      <Ground x0={-62} x1={62} y0={-50} y1={50} />
      <Box at={[-58, -46, 0]} size={[116, 92, 3]}>
        {[-24, 6, 36].map((y) => (
          <Line key={"y" + y} p={[[-54, y, 3], [54, y, 3]]} faint />
        ))}
      </Box>
      {links.map((l, i) => (
        <g key={i}>
          <Line p={l} dash faint />
          <H o={[0, 1]} delay={ease(i, 110)}>
            <Line p={l} accent />
          </H>
        </g>
      ))}
      {nodes.map((n, i) => {
        const [x, y] = n.at;
        const node = (
          <Box at={[x, y, 3]} size={[24, 16, 5]} accent={n.acc}>
            <Quad p={onZ(8, x + 3, x + 7, y + 3, y + 7)} accent={n.acc} fill={n.acc ? "var(--illo-accent-wash)" : "none"} />
            <Line p={[[x + 10, y + 5, 8], [x + 20, y + 5, 8]]} />
            <Line p={[[x + 3, y + 11, 8], [x + 16, y + 11, 8]]} faint />
          </Box>
        );
        if (!n.acc) return <g key={i}>{node}</g>;
        return (
          <H key={i} on={shift(0, 0, 6)} delay={420}>
            {node}
            <H o={[0, 1]} delay={420}>
              {[[x - 2, y - 2], [x + 22, y - 2], [x + 22, y + 14], [x - 2, y + 14]].map(([a, b], k) => (
                <Quad key={k} p={onZ(8, a, a + 4, b, b + 4)} accent fill="var(--illo-top)" />
              ))}
            </H>
          </H>
        );
      })}
    </>
  );
}

/** An empty tray with a dashed slot; hover drops the waiting block towards it. */
function CatEmpty() {
  return (
    <>
      <Ground x0={-52} x1={52} y0={-52} y1={52} />
      <Box at={[-46, -46, 0]} size={[92, 92, 6]}>
        <H o={[0, 1]} delay={260}>
          <Quad p={onZ(6, -26, 26, -26, 26)} fill="var(--illo-accent-wash)" />
        </H>
        <Quad p={onZ(6, -26, 26, -26, 26)} dash accent />
      </Box>
      <H o={[1, 0]}>
        <Line p={[[0, 0, 7], [0, 0, 34]]} dash faint />
      </H>
      <H on={shift(0, 0, -20)}>
        <Box at={[-12, -12, 34]} size={[24, 24, 18]} accent>
          <Line p={[[-4, 0, 52], [4, 0, 52]]} accent />
          <Line p={[[0, -4, 52], [0, 4, 52]]} accent />
        </Box>
      </H>
    </>
  );
}

/** The small parts: primary and secondary buttons, a count badge, a checkbox, a chip and an avatar. */
function CatAtoms() {
  return (
    <>
      <Ground x0={-60} x1={60} y0={-40} y1={40} />
      <Box at={[-56, -36, 0]} size={[112, 72, 3]} />
      <H on={shift(0, 0, -2.5)}>
        <Box at={[-48, -28, 3]} size={[34, 14, 6]} accent tone="accent">
          <Line p={[[-42, -21, 9], [-22, -21, 9]]} accent />
        </Box>
      </H>
      <Box at={[-8, -28, 3]} size={[30, 14, 4]}>
        <Line p={[[-2, -21, 7], [14, -21, 7]]} />
      </Box>
      <H on={shift(0, 0, 5)} delay={90}>
        <Box at={[30, -26, 3]} size={[18, 10, 4]} accent>
          <Line p={[[35, -21, 7], [43, -21, 7]]} accent />
        </Box>
      </H>
      <Box at={[-48, 2, 3]} size={[11, 11, 3]} accent>
        <H o={[0, 1]} delay={160}>
          <Quad p={onZ(6, -48, -37, 2, 13)} fill="var(--illo-accent-wash)" />
          <Line p={[[-45.5, 9, 6], [-43, 11, 6], [-39, 4, 6]]} accent />
        </H>
      </Box>
      <Box at={[-30, 2, 3]} size={[34, 11, 3]}>
        <Line p={[[-25, 7.5, 6], [-8, 7.5, 6]]} />
        <Line p={[[-4, 6, 6], [-1, 9, 6]]} />
        <Line p={[[-1, 6, 6], [-4, 9, 6]]} />
      </Box>
      <Cyl at={[30, 10, 3]} r={7} h={4} />
      <Box at={[-48, 20, 3]} size={[60, 8, 2]}>
        <Line p={[[-44, 24, 5], [-20, 24, 5]]} faint />
      </Box>
    </>
  );
}

export const CATEGORY_SCENES: Record<string, () => ReactNode> = {
  "cat-cards": () => <CatCards />,
  "cat-charts": () => <CatCharts />,
  "cat-tables": () => <CatTables />,
  "cat-modals": () => <CatModals />,
  "cat-forms": () => <CatForms />,
  "cat-templates": () => <CatTemplates />,
  "cat-nav": () => <CatNav />,
  "cat-kpi": () => <CatKpi />,
  "cat-menus": () => <CatMenus />,
  "cat-popovers": () => <CatPopovers />,
  "cat-drawers": () => <CatDrawers />,
  "cat-headers": () => <CatHeaders />,
  "cat-editors": () => <CatEditors />,
  "cat-empty": () => <CatEmpty />,
  "cat-atoms": () => <CatAtoms />,
};

/** Scene per library category (the `category` field of entries and hubs). */
export const LIBRARY_CATEGORY_SCENE: Record<string, string> = {
  "Cards and panels": "cat-cards",
  Charts: "cat-charts",
  "Tables and lists": "cat-tables",
  Modals: "cat-modals",
  Forms: "cat-forms",
  Templates: "cat-templates",
  Navigation: "cat-nav",
  "KPI and stats": "cat-kpi",
  Menus: "cat-menus",
  Popovers: "cat-popovers",
  Drawers: "cat-drawers",
  Headers: "cat-headers",
  Editors: "cat-editors",
  Feedback: "cat-empty",
  Atoms: "cat-atoms",
  // sign in pages and card widgets: the form scene (fields and a primary action) fits best
  "Auth and payments": "cat-forms",
};
