// Top-down field in field coordinates (yards): x 0-120 from the left end line, y 0-53.33 from the
// top sideline. Offence is drawn as discs, defence as chevrons pointing at the line of scrimmage:
// shape carries the role, colour carries the club.

function fieldSVG(o) {
  const W = o.w, H = o.h, sx = W / 120, sy = H / (160 / 3);
  const X = (v) => (v * sx).toFixed(2), Y = (v) => (v * sy).toFixed(2);
  const home = CLUBS[o.home];
  let s = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="display:block">`;
  s += `<defs><marker id="ah-chalk" viewBox="0 0 6 6" refX="4.5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L6 3L0 6z" fill="rgba(238,241,234,0.85)"/></marker>
    <marker id="ah-flag" viewBox="0 0 6 6" refX="4.5" refY="3" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L6 3L0 6z" fill="#F4C542"/></marker></defs>`;
  // Turf with mowing stripes every five yards
  s += `<rect width="${W}" height="${H}" fill="var(--turf)"/>`;
  for (let yd = 10; yd < 110; yd += 10) s += `<rect x="${X(yd)}" y="0" width="${X(5)}" height="${H}" fill="var(--turf-stripe)"/>`;
  // End zones in the home club's colour
  for (const ez of [0, 110]) {
    s += `<rect x="${X(ez)}" y="0" width="${X(10)}" height="${H}" fill="${home.primary}" opacity="0.92"/>`;
    const cx = ez + 5, cy = 80 / 3;
    s += `<text x="${X(cx)}" y="${Y(cy)}" transform="rotate(${ez === 0 ? -90 : 90} ${X(cx)} ${Y(cy)})" text-anchor="middle" dominant-baseline="central"
      font-family="${FACES[home.face]}" font-weight="900" font-size="${(4.4 * sx).toFixed(1)}" letter-spacing="${(0.5 * sx).toFixed(1)}" fill="${home.secondary}" opacity="0.62">${home.nick.toUpperCase()}</text>`;
  }
  // Yard lines
  for (let yd = 10; yd <= 110; yd += 5) {
    const goal = yd === 10 || yd === 110;
    s += `<line x1="${X(yd)}" y1="0" x2="${X(yd)}" y2="${H}" stroke="${goal ? "rgba(238,241,234,0.75)" : "var(--turf-line)"}" stroke-width="${goal ? 1.4 : 0.8}"/>`;
  }
  // Hash marks (college: 20 yards from each sideline) and sideline ticks
  for (let yd = 11; yd < 110; yd++) {
    if (yd % 5 === 0) continue;
    for (const hy of [20, 100 / 3]) s += `<line x1="${X(yd)}" y1="${Y(hy - 0.4)}" x2="${X(yd)}" y2="${Y(hy + 0.4)}" stroke="var(--turf-line)" stroke-width="0.7"/>`;
    for (const hy of [0.3, 53]) s += `<line x1="${X(yd)}" y1="${Y(hy)}" x2="${X(yd)}" y2="${Y(hy + 0.5)}" stroke="var(--turf-line)" stroke-width="0.7"/>`;
  }
  // Yard numbers
  for (let yd = 20; yd <= 100; yd += 10) {
    const n = yd <= 60 ? yd - 10 : 110 - yd;
    s += `<text x="${X(yd)}" y="${Y(44.5)}" text-anchor="middle" font-family="Display" font-weight="600" font-size="${(2.6 * sx).toFixed(1)}" fill="#EEF1EA" opacity="0.38">${n}</text>`;
    s += `<text x="${X(yd)}" y="${Y(8.8)}" text-anchor="middle" transform="rotate(180 ${X(yd)} ${Y(8.8)})" font-family="Display" font-weight="600" font-size="${(2.6 * sx).toFixed(1)}" fill="#EEF1EA" opacity="0.38">${n}</text>`;
  }
  // Midfield: the home club's mark, painted
  const mr = 5.2 * sy;
  s += `<circle cx="${X(60)}" cy="${Y(80 / 3)}" r="${mr.toFixed(1)}" fill="${home.primary}" opacity="0.78" stroke="${home.secondary}" stroke-width="1" />`;
  s += `<text x="${X(60)}" y="${(+Y(80 / 3) + mr * 0.42).toFixed(1)}" text-anchor="middle" font-family="${FACES[home.face]}" font-weight="900" font-size="${(mr * 1.25).toFixed(1)}" fill="${home.secondary}" opacity="0.9">${home.letter}</text>`;
  // Sideline paint in the home colour
  s += `<rect x="0" y="0" width="${W}" height="2.5" fill="${home.primary}"/><rect x="0" y="${H - 2.5}" width="${W}" height="2.5" fill="${home.primary}"/>`;
  // Floodlights: the field is lit from above; the corners fall off
  s += `<defs><radialGradient id="lights" cx="50%" cy="45%" r="75%"><stop offset="0.55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity="0.38"/></radialGradient></defs><rect width="${W}" height="${H}" fill="url(#lights)"/>`;
  // Line of scrimmage and the line to gain
  if (o.los != null) s += `<line x1="${X(o.los)}" y1="0" x2="${X(o.los)}" y2="${H}" stroke="rgba(238,241,234,0.9)" stroke-width="1.3"/>`;
  if (o.fd != null) s += `<line x1="${X(o.fd)}" y1="0" x2="${X(o.fd)}" y2="${H}" stroke="#F4C542" stroke-width="2"/>`;
  // Routes
  for (const r of o.routes || []) {
    const d = "M" + r.pts.map(([a, b]) => `${X(a)} ${Y(b)}`).join(" L");
    const key = r.style === "key";
    s += `<path d="${d}" fill="none" stroke="${key ? "#F4C542" : "rgba(238,241,234,0.8)"}" stroke-width="${key ? 1.7 : 1.1}" stroke-dasharray="${r.style === "block" ? "none" : key ? "3 2" : "2.5 2"}" marker-end="${r.style === "block" ? "" : key ? "url(#ah-flag)" : "url(#ah-chalk)"}"/>`;
    if (r.style === "block") {
      const [a, b] = r.pts[r.pts.length - 1];
      s += `<line x1="${X(a)}" y1="${Y(b - 0.9)}" x2="${X(a)}" y2="${Y(b + 0.9)}" stroke="rgba(238,241,234,0.8)" stroke-width="1.1"/>`;
    }
  }
  // Players
  const R = o.markR || 3.3;
  for (const p of o.players) {
    const c = CLUBS[p.club];
    const px = +X(p.x), py = +Y(p.y), r = p.emph ? R + 1 : R;
    const op = p.emph || !o.dimOthers ? 1 : 0.62;
    if (p.emph) s += `<circle cx="${px}" cy="${py}" r="${r + 3.4}" fill="none" stroke="#EEF1EA" stroke-width="1"/>`;
    if (p.side === "o") {
      s += `<circle cx="${px}" cy="${py}" r="${r}" fill="${c.primary}" stroke="${c.ring}" stroke-width="1.4" opacity="${op}"/>`;
    } else {
      const f = p.face === "right" ? -1 : 1, k = r / 3.3;
      const pts = [[-4.3 * f, 0], [3.3 * f, -3.9], [1.3 * f, 0], [3.3 * f, 3.9]].map(([a, b]) => `${(px + a * k).toFixed(2)},${(py + b * k).toFixed(2)}`).join(" ");
      s += `<polygon points="${pts}" fill="${c.primary}" stroke="${c.ring}" stroke-width="1.3" stroke-linejoin="round" opacity="${op}"/>`;
    }
    if (p.label) {
      const fs = o.labelSize || 9.5, tw = p.label.length * fs * 0.59 + 8, th = fs + 3.5;
      let lx = px - tw / 2, ly = py - r - 6 - th;
      if (p.lpos === "below") ly = py + r + 6;
      if (p.lpos === "right") { lx = px + r + 6; ly = py - th / 2; }
      if (p.lpos === "left") { lx = px - r - 6 - tw; ly = py - th / 2; }
      s += `<rect x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" width="${tw.toFixed(1)}" height="${th}" rx="2.5" fill="rgba(12,18,16,0.88)" stroke="rgba(238,241,234,0.35)" stroke-width="0.6"/>`;
      s += `<text x="${(lx + tw / 2).toFixed(1)}" y="${(ly + fs + 0.2).toFixed(1)}" text-anchor="middle" font-family="Text" font-weight="600" font-size="${fs}" fill="#EEF1EA">${p.label}</text>`;
    }
  }
  // Ball
  if (o.ball) {
    const bx = +X(o.ball[0]), by = +Y(o.ball[1]);
    s += `<ellipse cx="${bx}" cy="${by}" rx="2.6" ry="1.7" fill="#9A6532" stroke="#EEF1EA" stroke-width="0.6"/>`;
  }
  s += `</svg>`;
  return s;
}

// The pre-snap look used by both match images: 4th and 2 at the Sedalia 36, Marlow attacking right.
// Line of scrimmage at x = 74 (the SED 36), line to gain at x = 76 (the SED 34), ball in the middle.
const PRESNAP = {
  los: 74, fd: 76, ball: [73.7, 80 / 3],
  players: [
    // Marlow State offence: 11 personnel, trips right
    { club: "marlow", side: "o", x: 73.1, y: 23.9 },
    { club: "marlow", side: "o", x: 73.1, y: 25.3 },
    { club: "marlow", side: "o", x: 73.1, y: 26.67 },
    { club: "marlow", side: "o", x: 73.1, y: 28.0 },
    { club: "marlow", side: "o", x: 73.1, y: 29.4 },
    { club: "marlow", side: "o", x: 73.1, y: 30.9, emph: true, label: "88 LUND", lpos: "below" },
    { club: "marlow", side: "o", x: 72.6, y: 37.2 },
    { club: "marlow", side: "o", x: 73.1, y: 46.0 },
    { club: "marlow", side: "o", x: 73.1, y: 7.8 },
    { club: "marlow", side: "o", x: 69.0, y: 26.67 },
    { club: "marlow", side: "o", x: 69.0, y: 28.6 },
    // Sedalia A&M defence: Cover 1 with the strong safety rotated down as a robber
    { club: "sedalia", side: "d", x: 75.0, y: 22.9 },
    { club: "sedalia", side: "d", x: 75.0, y: 25.9 },
    { club: "sedalia", side: "d", x: 75.0, y: 28.4 },
    { club: "sedalia", side: "d", x: 75.0, y: 31.6 },
    { club: "sedalia", side: "d", x: 76.3, y: 26.2, emph: true, label: "54 PIKE", lpos: "above" },
    { club: "sedalia", side: "d", x: 78.8, y: 33.4 },
    { club: "sedalia", side: "d", x: 75.4, y: 7.8 },
    { club: "sedalia", side: "d", x: 75.4, y: 46.0 },
    { club: "sedalia", side: "d", x: 77.4, y: 37.4 },
    { club: "sedalia", side: "d", x: 82.2, y: 30.6, emph: true, label: "21 HOLLIS", lpos: "right" },
    { club: "sedalia", side: "d", x: 91.0, y: 25.5 },
  ],
  // The Stick concept, drawn because the coach has selected it
  routes: [
    { style: "key", pts: [[73.4, 30.9], [79.4, 31.4], [79.0, 31.1]] },
    { style: "norm", pts: [[72.9, 37.2], [75.5, 39.5], [77.2, 42.4]] },
    { style: "norm", pts: [[73.4, 46.0], [80, 46.4], [90, 46.6]] },
    { style: "norm", pts: [[73.4, 7.8], [78.5, 8.0], [81, 12.5]] },
    { style: "norm", pts: [[69.3, 28.6], [71.5, 31.5], [75.5, 34.0]] },
  ],
};
