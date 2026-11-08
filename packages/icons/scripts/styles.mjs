/**
 * Derives the six Foundry icon styles from one Stroke Rounded drawing.
 *
 *   stroke-rounded  the source drawing: 1.5 stroke, round caps and joins
 *   stroke-sharp    square caps, mitred joins, square rect corners
 *   solid           the container shape filled; details inside it knocked out; outside parts stay as bold strokes
 *   duotone         stroke drawing over a 20% fill of the container
 *   twotone         container in the primary colour, every other part in the secondary colour
 *   bulk            container filled at 40% with the details drawn solid on top
 *
 * "Container" = the largest closed sub-shape (area >= MIN_AREA). Icons without one fall back:
 * solid and bulk use a heavier stroke; duotone fills any small closed parts; twotone tints the last part.
 *
 * Secondary colour is expressed as opacity on currentColor, so one colour still works everywhere;
 * in Figma it maps to the icon/secondary variable.
 */
import svgpath from "svgpath";
import { svgPathBbox } from "svg-path-bbox";

export const STYLES = ["stroke-rounded", "stroke-sharp", "solid", "duotone", "twotone", "bulk"];
const MIN_AREA = 40; // px² of bbox on the 24 grid
const SECONDARY = 0.4; // twotone / bulk secondary opacity
const DUO = 0.2;

/** Split an icon body into parts: one per sub-path or primitive element. */
export function parts(body) {
  const out = [];
  for (const m of body.matchAll(/<(path|circle|rect|line|ellipse|polygon|polyline)\b([^>]*?)\/?>/g)) {
    const [, tag, attrs] = m;
    const a = Object.fromEntries([...attrs.matchAll(/([\w-]+)="([^"]*)"/g)].map((x) => [x[1], x[2]]));
    const solidDot = a.fill === "currentColor";
    if (tag === "path") {
      const abs = svgpath(a.d).abs().unshort().toString();
      for (const sub of abs.split(/(?=M)/).filter((s) => s.trim())) out.push(fromPath(sub, solidDot));
    } else {
      const d = toPath(tag, a);
      if (d) out.push({ ...fromPath(d, solidDot), closed: tag !== "line" && tag !== "polyline", el: `<${tag}${attrs.replace(/\s*\/$/, "")}/>` });
    }
  }
  return out;
}

function fromPath(d, solidDot) {
  let bbox = [0, 0, 0, 0];
  try {
    bbox = svgPathBbox(d);
  } catch {}
  const area = Math.max(0, bbox[2] - bbox[0]) * Math.max(0, bbox[3] - bbox[1]);
  const hasZ = /z/i.test(d);
  const segs = segments(d);
  const closed = hasZ || (segs.length > 1 && Math.hypot(segs[0].from[0] - segs[segs.length - 1].to[0], segs[0].from[1] - segs[segs.length - 1].to[1]) < 0.1);
  return { d, bbox, area, closed: !!closed, solidDot, el: `<path d="${d}"/>` };
}

function toPath(tag, a) {
  const n = (k) => Number(a[k] ?? 0);
  if (tag === "circle") { const [cx, cy, r] = [n("cx"), n("cy"), n("r")]; return `M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0z`; }
  if (tag === "ellipse") { const [cx, cy, rx, ry] = [n("cx"), n("cy"), n("rx"), n("ry")]; return `M${cx - rx} ${cy}a${rx} ${ry} 0 1 0 ${2 * rx} 0a${rx} ${ry} 0 1 0 ${-2 * rx} 0z`; }
  if (tag === "rect") {
    const [x, y, w, h] = [n("x"), n("y"), n("width"), n("height")];
    const r = Math.min(n("rx") || n("ry"), w / 2, h / 2);
    return r
      ? `M${x + r} ${y}h${w - 2 * r}a${r} ${r} 0 0 1 ${r} ${r}v${h - 2 * r}a${r} ${r} 0 0 1 ${-r} ${r}h${-(w - 2 * r)}a${r} ${r} 0 0 1 ${-r} ${-r}v${-(h - 2 * r)}a${r} ${r} 0 0 1 ${r} ${-r}z`
      : `M${x} ${y}h${w}v${h}h${-w}z`;
  }
  if (tag === "line") return `M${n("x1")} ${n("y1")}L${n("x2")} ${n("y2")}`;
  if (tag === "polygon" || tag === "polyline") { const p = (a.points || "").trim().split(/[\s,]+/).map(Number); if (p.length < 4) return null; let d = `M${p[0]} ${p[1]}`; for (let i = 2; i < p.length; i += 2) d += `L${p[i]} ${p[i + 1]}`; return tag === "polygon" ? d + "z" : d; }
  return null;
}

/** Absolute segments with explicit start points, H/V turned into L, so a sub-path can be reversed. */
function segments(d) {
  const segs = [];
  let start = null;
  svgpath(d).abs().unshort().iterate((s, _i, x, y) => {
    const c = s[0];
    if (c === "M") return void (start = [s[1], s[2]]);
    if (c === "Z") return void segs.push({ c: "L", from: [x, y], to: start, args: [] });
    const to = c === "H" ? [s[1], y] : c === "V" ? [x, s[1]] : [s[s.length - 2], s[s.length - 1]];
    const args = c === "H" || c === "V" || c === "L" ? [] : s.slice(1, -2);
    segs.push({ c: c === "H" || c === "V" ? "L" : c, from: [x, y], to, args });
  });
  return segs;
}
function reverseSegs(segs) {
  return segs
    .slice()
    .reverse()
    .map((s) => {
      const a = s.args;
      const args = s.c === "C" ? [a[2], a[3], a[0], a[1]] : s.c === "A" ? [a[0], a[1], a[2], a[3], a[4] ? 0 : 1] : a;
      return { c: s.c, from: s.to, to: s.from, args };
    });
}
const segsToD = (segs) => `M${segs[0].from[0]} ${segs[0].from[1]}` + segs.map((s) => s.c + [...s.args, ...s.to].join(" ")).join("") + "Z";
const near = (p, q) => p && q && Math.hypot(p[0] - q[0], p[1] - q[1]) < 0.1;

/** Chain open parts whose endpoints meet into closed loops (e.g. a roof + walls → a house). */
function closeLoops(ps) {
  const open = ps.filter((p) => !p.closed && !p.solidDot && p.d).map((p) => ({ p, segs: segments(p.d) })).filter((o) => o.segs.length);
  const used = new Set();
  const loops = [];
  for (const o of open) {
    if (used.has(o)) continue;
    let chain = [...o.segs];
    const members = [o];
    let grew = true;
    while (grew && !near(chain[chain.length - 1].to, chain[0].from)) {
      grew = false;
      for (const q of open) {
        if (used.has(q) || members.includes(q)) continue;
        const tail = chain[chain.length - 1].to;
        if (near(q.segs[0].from, tail)) chain = chain.concat(q.segs);
        else if (near(q.segs[q.segs.length - 1].to, tail)) chain = chain.concat(reverseSegs(q.segs));
        else continue;
        members.push(q);
        grew = true;
        break;
      }
    }
    if (members.length > 1 && near(chain[chain.length - 1].to, chain[0].from)) {
      members.forEach((m) => used.add(m));
      const d = segsToD(chain);
      loops.push({ ...fromPath(d, false), closed: true, members: members.map((m) => m.p) });
    }
  }
  return loops;
}

/** Stroke Sharp: replace small quarter-arc corners with square corners. */
function sharpenPath(d) {
  const subs = svgpath(d).abs().unshort().toString().split(/(?=M)/).filter((s) => s.trim());
  return subs
    .map((sub) => {
      const segs = segments(sub);
      if (!segs.length) return sub;
      const out = segs.map((s) => {
        if (s.c !== "A") return s;
        const [rx, ry, , large, sweep] = s.args;
        const dx = s.to[0] - s.from[0], dy = s.to[1] - s.from[1];
        const quarter = !large && rx === ry && rx <= 4 && Math.abs(Math.abs(dx) - rx) < 0.02 && Math.abs(Math.abs(dy) - rx) < 0.02;
        if (!quarter) return s;
        const mid = [(s.from[0] + s.to[0]) / 2, (s.from[1] + s.to[1]) / 2];
        const n = sweep ? [-dy, dx] : [dy, -dx]; // points toward the arc centre
        const cands = [[s.from[0], s.to[1]], [s.to[0], s.from[1]]];
        const corner = cands.find((c) => (c[0] - mid[0]) * n[0] + (c[1] - mid[1]) * n[1] < 0) ?? cands[0];
        return [{ c: "L", from: s.from, to: corner, args: [] }, { c: "L", from: corner, to: s.to, args: [] }];
      }).flat();
      return `M${out[0].from[0]} ${out[0].from[1]}` + out.map((s) => s.c + [...s.args, ...s.to].join(" ")).join("") + (/z/i.test(sub) ? "Z" : "");
    })
    .join("");
}
function sharpenBody(body) {
  return body.replace(/\s(rx|ry)="[^"]*"/g, "").replace(/<path d="([^"]*)"/g, (_m, d) => `<path d="${sharpenPath(d)}"`);
}

const inside = (b, c) => b[0] >= c[0] - 0.5 && b[1] >= c[1] - 0.5 && b[2] <= c[2] + 0.5 && b[3] <= c[3] + 0.5;
const strokeAttrs = 'fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"';

/**
 * Returns { analysis, svg: {style: innerBody} }. Each body is wrapped by the caller in a root
 * <svg viewBox="0 0 24 24"> with no paint attributes: every element carries its own paint.
 */
export function deriveStyles(name, body) {
  const ps = parts(body);
  const closed = [...ps.filter((p) => p.closed && !p.solidDot), ...closeLoops(ps)].sort((a, b) => b.area - a.area);
  const container = closed[0] && closed[0].area >= MIN_AREA ? closed[0] : null;
  const rest = ps.filter((p) => p !== container && !(container?.members ?? []).includes(p));
  const innerParts = container ? rest.filter((p) => inside(p.bbox, container.bbox)) : [];
  const outerParts = container ? rest.filter((p) => !inside(p.bbox, container.bbox)) : rest;
  const dots = (list) => list.filter((p) => p.solidDot).map((p) => p.el.replace(/\/>$/, ' fill="currentColor"/>')).join("");
  const strokes = (list, extra = "") => {
    const l = list.filter((p) => !p.solidDot);
    return l.length ? `<g ${strokeAttrs}${extra}>${l.map((p) => p.el).join("")}</g>` : "";
  };
  const fill = (p, op) => `<path d="${p.d}" fill="currentColor"${op < 1 ? ` fill-opacity="${op}"` : ""}/>`;
  const sharpBody = sharpenBody(body);

  const svg = {};
  svg["stroke-rounded"] = `<g ${strokeAttrs}>${body}</g>`;
  svg["stroke-sharp"] = `<g fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="miter">${sharpBody}</g>`;

  if (container) {
    const id = "fu-" + name;
    const cut = innerParts.filter((p) => !p.solidDot);
    svg.solid =
      (cut.length || innerParts.some((p) => p.solidDot)
        ? `<mask id="${id}" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24"><rect width="24" height="24" fill="#fff"/><g stroke="#000" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${cut.map((p) => p.el).join("")}</g>${innerParts.filter((p) => p.solidDot).map((p) => p.el.replace(/\/>$/, ' fill="#000"/>')).join("")}</mask><g mask="url(#${id})">${fill(container, 1)}<path d="${container.d}" ${strokeAttrs}/></g>`
        : `${fill(container, 1)}<path d="${container.d}" ${strokeAttrs}/>`) +
      strokes(outerParts) + dots(outerParts);
    svg.duotone = fill(container, DUO) + `<g ${strokeAttrs}>${body}</g>`;
    svg.twotone = `<path d="${container.d}" ${strokeAttrs}/>` + strokes(rest, ` stroke-opacity="${SECONDARY}"`) + rest.filter((p) => p.solidDot).map((p) => p.el.replace(/\/>$/, ` fill="currentColor" fill-opacity="${SECONDARY}"/>`)).join("");
    svg.bulk = fill(container, SECONDARY) + strokes(innerParts) + dots(innerParts) + strokes(outerParts) + dots(outerParts);
  } else {
    const smallClosed = closed.filter((p) => p.area > 2);
    svg.solid = `<g fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">${body}</g>` + smallClosed.map((p) => fill(p, 1)).join("");
    svg.duotone = smallClosed.map((p) => fill(p, DUO)).join("") + `<g ${strokeAttrs}>${body}</g>`;
    const last = ps[ps.length - 1];
    const first = ps.slice(0, -1);
    svg.twotone = ps.length > 1 ? strokes(first) + dots(first) + strokes([last], ` stroke-opacity="${SECONDARY}"`) : `<g ${strokeAttrs}>${body}</g>`;
    svg.bulk = smallClosed.map((p) => fill(p, SECONDARY)).join("") + `<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</g>`;
  }
  return { analysis: { parts: ps.length, container: !!container, inner: innerParts.length }, svg };
}
