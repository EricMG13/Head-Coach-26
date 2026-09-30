// Shared pieces for the design images: clubs, the monogram shield, rail icons and the rail.
// Icons are simple stand-ins for SF Symbols, which the app uses.

// Every club's identity comes from one generator seam: colours, a wordmark face, a helmet and a
// stripe pattern, a venue, and a tradition with a mechanical effect. These are that seam's outputs.
const CLUBS = {
  marlow: { name: "Marlow State", nick: "Lanterns", short: "MARLOW", letter: "M", primary: "#7B1E2E", secondary: "#EDE3CF", plateText: "#EDE3CF", ring: "#EDE3CF",
    deep: "#2B0F15", face: "Varsity", stripes: ["secondary", "primary", "secondary"], shell: "primary", mask: "secondary", decal: "secondary",
    venue: "Lantern Hill Field", capacity: 31500, place: "Marlow, Oklahoma", founded: 1909 },
  sedalia: { name: "Sedalia A&M", nick: "Ironclads", short: "SEDALIA", letter: "S", primary: "#1B2A4A", secondary: "#9FB0C3", plateText: "#C9D4E0", ring: "#9FB0C3",
    deep: "#0F1626", face: "Slab", stripes: ["primary", "primary"], shell: "secondary", mask: "primary", decal: "primary",
    venue: "Foundry Field", capacity: 38400, place: "Sedalia, Missouri", founded: 1893 },
  amarillo: { name: "Amarillo Metro", nick: "Dust Devils", short: "AMARILLO", letter: "A", primary: "#5A3E8C", secondary: "#E4D7F5", plateText: "#F1EAFB", ring: "#E4D7F5",
    deep: "#221833", face: "Block", stripes: ["secondary"], shell: "primary", mask: "secondary", decal: "secondary",
    venue: "Civic Field", capacity: 18000, place: "Amarillo, Texas", founded: 1961 },
  staubin: { name: "St. Aubin College", nick: "Heralds", short: "ST AUBIN", letter: "H", primary: "#0E5A55", secondary: "#E8DDB5", plateText: "#F3ECCF", ring: "#E8DDB5",
    deep: "#0A2624", face: "Slab", stripes: [], shell: "secondary", mask: "primary", decal: "primary",
    venue: "Heralds Green", capacity: 24000, place: "Little Rock, Arkansas", founded: 1874 },
  hartford: { name: "Hartford", nick: "Sentinels", short: "HARTFORD", letter: "H", primary: "#E8743A", secondary: "#1E2830", plateText: "#1E2830", ring: "#E8743A",
    deep: "#2A1A12", face: "Block", stripes: ["primary", "secondary", "primary"], shell: "secondary", mask: "primary", decal: "primary",
    venue: "Riverfront Park", capacity: 66000, place: "Hartford, Connecticut", founded: 1961 },
  ardmore: { name: "Ardmore Tech", nick: "Prospectors", short: "ARDMORE", letter: "A", primary: "#9A4418", secondary: "#F2E6D0", plateText: "#F2E6D0", ring: "#F2E6D0",
    deep: "#2E1509", face: "Block", stripes: ["secondary"], shell: "primary", mask: "secondary", decal: "secondary",
    venue: "Pick & Lamp Stadium", capacity: 29000, place: "Ardmore, Oklahoma", founded: 1917 },
};
const FACES = { Varsity: "'Varsity', serif", Slab: "'Slab', serif", Block: "'Block', sans-serif" };
const col = (c, k) => (k === "primary" ? c.primary : k === "secondary" ? c.secondary : k);
function luminance(h) { const v = [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((x) => (x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4)); return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2]; }
function contrast(a, b) { const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); }
const inkOf = (c) => (luminance(c.primary) > luminance(c.secondary) ? c.primary : c.secondary);
// CSS variables that dress a screen in a club's colours.
function clubVars(club) {
  const c = CLUBS[club];
  const bands = c.stripes.length ? [c.shell, ...c.stripes, c.shell] : [c.shell];
  const total = bands.reduce((a, _, i) => a + (i === 0 || i === bands.length - 1 ? 2 : 1), 0);
  let at = 0, stops = [];
  bands.forEach((k, i) => { const w = ((i === 0 || i === bands.length - 1 ? 2 : 1) / total) * 100; stops.push(`${col(c, k)} ${at.toFixed(1)}% ${(at + w).toFixed(1)}%`); at += w; });
  return `--club:${c.primary};--club-2:${c.secondary};--club-deep:${c.deep};--club-ink:${inkOf(c)};--stripe:linear-gradient(to bottom, ${stops.join(", ")});--stripe-v:linear-gradient(to right, ${stops.join(", ")})`;
}

// A side-view helmet facing right (or left). The helmet is the club's everyday face in the game.
function helmet(club, w = 40, facing = "right") {
  const c = CLUBS[club], shell = col(c, c.shell), mask = col(c, c.mask), decal = col(c, c.decal);
  const h = w * 0.8, id = `h${club}${Math.random().toString(36).slice(2, 7)}`;
  const shellPath = "M20 76 C8 62 8 38 20 24 C32 10 52 4 70 6 C92 9 108 24 110 44 L111 54 L97 55 C93 55 91 58 91 62 L91 70 C91 77 87 81 81 81 L46 81 C35 81 26 79 20 76 Z";
  const n = c.stripes.length, sw = n === 1 ? 9 : n === 2 ? 4.5 : 3.6;
  let stripes = "";
  c.stripes.forEach((k, i) => {
    const off = (i - (n - 1) / 2) * (sw + (n === 2 ? 3 : 0.4));
    stripes += `<path d="M26 ${24 + off} C38 ${12 + off} 54 ${7 + off} 71 ${8 + off} C90 ${10 + off} 104 ${22 + off} 108 ${40 + off}" fill="none" stroke="${col(c, k)}" stroke-width="${sw}"/>`;
  });
  const flip = facing === "left" ? `transform="translate(120 0) scale(-1 1)"` : "";
  return `<svg width="${w}" height="${h}" viewBox="0 0 120 96" style="display:block;flex:none"><g ${flip}>
    <defs><clipPath id="${id}"><path d="${shellPath}"/></clipPath>
      <linearGradient id="${id}g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".28"/></linearGradient></defs>
    <path d="${shellPath}" fill="${shell}"/>
    <g clip-path="url(#${id})">${stripes}</g>
    <path d="${shellPath}" fill="url(#${id}g)"/>
    <path d="${shellPath}" fill="none" stroke="rgba(0,0,0,.45)" stroke-width="2"/>
    <circle cx="57" cy="58" r="4.2" fill="rgba(0,0,0,.55)"/>
    <text x="${facing === "left" ? 58 : 58}" y="47" text-anchor="middle" font-family="${FACES[c.face]}" font-weight="900" font-size="28" fill="${decal}" ${facing === "left" ? 'transform="translate(116 0) scale(-1 1)"' : ""}>${c.letter}</text>
    <g fill="none" stroke="${mask}" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round">
      <path d="M105 50 L118 57 L118 81 L92 82"/><path d="M91 68 L118 68"/><path d="M97 55 L110 54"/></g>
  </g></svg>`;
}

// The club's name set in its own wordmark face.
function wordmark(club, size = 20, color) {
  const c = CLUBS[club];
  const ls = c.face === "Block" ? "0.02em" : "0.03em";
  return `<span style="font-family:${FACES[c.face]};font-weight:${c.face === "Block" ? 900 : 400};font-size:${size}px;line-height:1;letter-spacing:${ls};text-transform:uppercase;color:${color || inkOf(c)};white-space:nowrap">${c.name}</span>`;
}

// The helmet's stripe pattern, laid flat: the club's signature rule under every header.
function stripeRule(club, h = 5) {
  const c = CLUBS[club];
  const bands = c.stripes.length ? [c.shell, ...c.stripes, c.shell] : [c.shell];
  return `<div style="display:flex;flex-direction:column;height:${h}px">${bands.map((k, i) => `<i style="flex:${i === 0 || i === bands.length - 1 ? 2 : 1};background:${col(c, k)}"></i>`).join("")}</div>`;
}

function shield(club, w = 34, h = 38) {
  const c = CLUBS[club];
  return `<svg class="shield" width="${w}" height="${h}" viewBox="0 0 34 38">
    <path d="M17 1.5 L32 6 V19 C32 28 25.5 33.5 17 36.5 C8.5 33.5 2 28 2 19 V6 Z" fill="${c.primary}" stroke="${c.secondary}" stroke-width="1.6"/>
    <text x="17" y="25" text-anchor="middle" font-family="Display" font-weight="700" font-size="18" fill="${c.plateText}">${c.letter}</text>
  </svg>`;
}

const ICONS = {
  week: `<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="15" rx="2"/><path d="M3.5 9.5h17M8 3v4M16 3v4"/><path d="M8 14h3M13 14h3M8 17h3"/></svg>`,
  prep: `<svg viewBox="0 0 24 24"><rect x="5" y="4.5" width="14" height="16.5" rx="2"/><path d="M9 3h6v3H9z"/><path d="M8.5 11l3 3M11.5 11l-3 3"/><circle cx="15" cy="16.5" r="1.8"/><path d="M11 15.5l2.5-3"/></svg>`,
  squad: `<svg viewBox="0 0 24 24"><path d="M8 3.5l-4.5 3 1.8 4 2-1V20.5h9.4V9.5l2 1 1.8-4-4.5-3c-.6 1.6-2 2.5-4 2.5s-3.4-.9-4-2.5z"/><path d="M10 13h4"/></svg>`,
  recruit: `<svg viewBox="0 0 24 24"><path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0113 0c0 4.8-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>`,
  program: `<svg viewBox="0 0 24 24"><path d="M3.5 9L12 4l8.5 5"/><path d="M5 9.5v8M9 9.5v8M15 9.5v8M19 9.5v8"/><path d="M3.5 20h17"/></svg>`,
  league: `<svg viewBox="0 0 24 24"><path d="M7.5 4h9v5a4.5 4.5 0 01-9 0z"/><path d="M7.5 6H4.5c0 3 1.5 4.5 3.3 4.7M16.5 6h3c0 3-1.5 4.5-3.3 4.7"/><path d="M12 13.5V17M8.5 20.5h7M9.5 17h5v3.5h-5z"/></svg>`,
  office: `<svg viewBox="0 0 24 24"><rect x="3.5" y="7.5" width="17" height="12" rx="2"/><path d="M9 7.5V5.5h6v2M3.5 12.5h17"/></svg>`,
};

// tier: "college" or "pro"; active: key; flags: keys that hold a decision that is yours.
function rail(club, active, flags = [], tier = "college") {
  const items = tier === "college"
    ? [["week", "Week"], ["prep", "Prep"], ["squad", "Squad"], ["recruit", "Recruit"], ["program", "Program"], ["league", "League"]]
    : [["week", "Week"], ["prep", "Prep"], ["squad", "Squad"], ["office", "Office"], ["program", "Club"], ["league", "League"]];
  const c = CLUBS[club];
  return `<div class="rail">
    <div class="mono">${helmet(club, 44)}</div>
    ${items.map(([k, label]) => `<div class="item ${k === active ? "on" : ""}">
      ${flags.includes(k) ? '<i class="pennant"></i>' : ""}
      ${ICONS[k]}<span>${label}</span></div>`).join("")}
  </div>`;
}

function device(inner, opts = {}) {
  return `<div class="device ${opts.ax5 ? "ax5" : ""}" style="${opts.club ? clubVars(opts.club) : ""}">${inner}<div class="island"></div><div class="home-indicator"></div></div>`;
}

// A range on the 40-99 rating scale (or any lo-hi scale).
function rangeBar(lo, hi, min = 40, max = 99, fact = null) {
  const p = (v) => ((v - min) / (max - min)) * 100;
  return `<div class="range"><div class="track"></div>
    <div class="band" style="left:${p(lo)}%;width:${p(hi) - p(lo)}%"></div>
    ${fact !== null ? `<div class="fact" style="left:calc(${p(fact)}% - 1px)"></div>` : ""}</div>`;
}

function ratingBar(v, min = 40, max = 99) {
  return `<div class="rbar"><i style="width:${((v - min) / (max - min)) * 100}%"></i></div>`;
}

function stars(n, of = 5) {
  let s = "";
  for (let i = 0; i < of; i++) s += `<span style="color:${i < n ? "var(--chalk)" : "var(--line-strong)"}">&#9733;</span>`;
  return `<span style="letter-spacing:-1px">${s}</span>`;
}

// A gameday matchup card: both helmets facing each other on a split of the two clubs' colours.
function matchup(away, home, lines, w = 258) {
  const a = CLUBS[away], h = CLUBS[home];
  return `<div style="position:relative;width:${w}px;border-radius:8px;overflow:hidden;background:linear-gradient(100deg, ${a.deep} 0%, ${a.deep} 44%, ${h.deep} 56%, ${h.deep} 100%)">
    <div style="position:absolute;left:0;right:0;top:0;height:3px;background:linear-gradient(90deg, ${a.primary} 0 50%, ${h.primary} 50% 100%)"></div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px 2px">
      <div style="display:flex;align-items:center;gap:6px">${helmet(away, 50)}</div>
      <div style="text-align:center"><div style="font-family:Display;font-weight:700;font-size:12px;letter-spacing:.12em;color:var(--stone)">AT</div></div>
      <div style="display:flex;align-items:center;gap:6px">${helmet(home, 50, "left")}</div></div>
    <div style="display:flex;justify-content:space-between;padding:0 10px">${wordmark(away, 12)}${wordmark(home, 12)}</div>
    <div style="padding:5px 10px 7px;font-size:var(--fs-caption2);line-height:14px;color:var(--stone)">${lines.join("<br>")}</div></div>`;
}

// An earned banner: what a programme has won, hung where everyone can see it.
function banner(club, lines, w = 58, h = 70, empty = false) {
  const c = CLUBS[club];
  const fill = empty ? "none" : c.primary, stroke = empty ? "rgba(238,241,234,.35)" : c.secondary, ink = empty ? "rgba(238,241,234,.5)" : c.plateText;
  const notch = h - 11;
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" style="display:block;flex:none">
    <path d="M1 0 H${w - 1} V${h - 1} L${w / 2} ${notch} L1 ${h - 1} Z" fill="${fill}" stroke="${stroke}" stroke-width="1.4" ${empty ? 'stroke-dasharray="3 2"' : ""}/>
    ${empty ? "" : `<line x1="5" y1="5" x2="${w - 5}" y2="5" stroke="${c.secondary}" stroke-width="1"/>`}
    ${lines.map((t, i) => `<text x="${w / 2}" y="${20 + i * 13}" text-anchor="middle" font-family="${i === lines.length - 1 && /\d{4}|\?/.test(t) ? FACES[c.face] : "Display"}" font-weight="700" font-size="${i === lines.length - 1 && /\d{4}|\?/.test(t) ? 14 : 9.5}" letter-spacing=".06em" fill="${ink}">${t}</text>`).join("")}
  </svg>`;
}
