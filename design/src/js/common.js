// Shared pieces for the design images: clubs, the monogram shield, rail icons and the rail.
// Icons are simple stand-ins for SF Symbols, which the app uses.

const CLUBS = {
  marlow:   { name: "Marlow State", nick: "Lanterns",  short: "MARLOW",  letter: "M", primary: "#7B1E2E", secondary: "#EDE3CF", plateText: "#EDE3CF", ring: "#EDE3CF" },
  sedalia:  { name: "Sedalia A&M",  nick: "Ironclads", short: "SEDALIA", letter: "S", primary: "#1B2A4A", secondary: "#9FB0C3", plateText: "#C9D4E0", ring: "#9FB0C3" },
  amarillo: { name: "Amarillo Metro", nick: "Dust Devils", short: "AMARILLO", letter: "A", primary: "#5A3E8C", secondary: "#E4D7F5", plateText: "#F1EAFB", ring: "#E4D7F5" },
  staubin:  { name: "St. Aubin College", nick: "Heralds", short: "ST AUBIN", letter: "H", primary: "#0E5A55", secondary: "#E8DDB5", plateText: "#F3ECCF", ring: "#E8DDB5" },
  hartford: { name: "Hartford", nick: "Sentinels", short: "HARTFORD", letter: "H", primary: "#E8743A", secondary: "#1E2830", plateText: "#1E2830", ring: "#E8743A" },
};

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
    <div class="stripe" style="background:${c.primary}"></div>
    <div class="mono">${shield(club)}</div>
    ${items.map(([k, label]) => `<div class="item ${k === active ? "on" : ""}">
      ${flags.includes(k) ? '<i class="pennant"></i>' : ""}
      ${ICONS[k]}<span>${label}</span></div>`).join("")}
  </div>`;
}

function device(inner, opts = {}) {
  return `<div class="device ${opts.ax5 ? "ax5" : ""}">${inner}<div class="island"></div><div class="home-indicator"></div></div>`;
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
