/* Career Compass 4.0 – shared app scripts */

// Theme toggle
(function () {
  const KEY = "cc-theme";
  const saved = localStorage.getItem(KEY);
  if (saved) document.documentElement.setAttribute("data-theme", saved);
  window.toggleTheme = function () {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    const next = cur === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(KEY, next);
  };

  window.toggleNav = function () {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    nav.classList.toggle('open');
  };
})();

// Sidebar builder (used by student pages)
window.renderSidebar = function (active) {
  const groups = [
    {
      h: "Overview",
      items: [
        ["dashboard", "Dashboard", "M3 12l9-9 9 9M5 10v10h14V10"],
        ["profile", "My Profile", "M12 12a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 0114 0"]
      ]
    },
    {
      h: "AI Guidance",
      items: [
        ["recommendation", "Career Recommendation", "M12 2l2.4 6h6.6l-5.4 4 2 6.6L12 15l-5.6 3.6 2-6.6L3 8h6.6z"],
        ["skill-gap", "Skill Gap Analysis", "M4 20V4m6 16V10m6 10V7m6 13V13"],
        ["roadmap", "Learning Roadmap", "M4 6h16M4 12h10M4 18h16"],
        ["chatbot", "Career Chatbot", "M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-9 4h6"]
      ]
    },
    {
      h: "Placement",
      items: [
        ["resume", "Resume ATS Checker", "M8 4h8l4 4v12a2 2 0 01-2 2H8a2 2 0 01-2-2V6a2 2 0 012-2z"],
        ["interview", "Mock Interview", "M12 4v16m8-8H4"],
        ["jobs", "Jobs & Internships", "M4 7h16v13H4zM8 7V4h8v3"]
      ]
    }
  ];

  return `
    <aside class="sidebar">
      <a href="../index.html" class="logo">
        <span class="logo-mark">C</span>
        <div>Career Compass<br><span class="ux-093">4.0</span></div>
      </a>
      ${groups.map(g => `
        <div class="side-group">
          <div class="h">${g.h}</div>
          ${g.items.map(([id, name, path]) => `
            <a href="${id}.html" class="side-link ${active === id ? "active" : ""}">
              <svg class="ico-s" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${path}"/></svg>
              ${name}
            </a>
          `).join("")}
        </div>
      `).join("")}
      <div class="side-group">
        <div class="h">Account</div>
        <a href="#" class="side-link">
          <svg class="ico-s" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 01-4 0v-.1a1.7 1.7 0 00-1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 010-4h.1a1.7 1.7 0 001.5-1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 014 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 010 4h-.1a1.7 1.7 0 00-1.5 1z"/></svg>
          Settings
        </a>
        <a href="../index.html" class="side-link">
          <svg class="ico-s" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"/></svg>
          Log out
        </a>
      </div>
    </aside>
  `;
};

// Topbar
window.renderTopbar = function (name = "Ananya Rao") {
  return `
    <div class="topbar">
      <div class="searchbar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <input placeholder="Search careers, skills, jobs…"/>
        <span class="chip ux-094" >⌘K</span>
      </div>
      <div class="flex gap center">
        <button class="icon-btn" onclick="toggleTheme()" title="Toggle theme">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z"/></svg>
        </button>
        <button class="icon-btn" title="Notifications">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0"/></svg>
        </button>
        <div class="flex gap-sm center ux-095" >
          <div class="avatar ux-096" >AR</div>
          <div class="ux-097">${name}</div>
        </div>
      </div>
    </div>
  `;
};

// Tiny sparkline renderer
window.renderSpark = function (points, color = "url(#g1)") {
  const w = 200, h = 44, max = Math.max(...points), min = Math.min(...points);
  const d = points.map((p, i) => {
    const x = (i / (points.length - 1)) * w;
    const y = h - ((p - min) / Math.max(1, (max - min))) * (h - 6) - 3;
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
  return `
    <svg class="mini-chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g1" x1="0" x2="1"><stop offset="0" stop-color="#7c5cff"/><stop offset="1" stop-color="#4aa8ff"/></linearGradient>
        <linearGradient id="g1fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7c5cff" stop-opacity=".4"/><stop offset="1" stop-color="#7c5cff" stop-opacity="0"/></linearGradient>
      </defs>
      <path d="${d} L${w},${h} L0,${h} Z" fill="url(#g1fill)"/>
      <path d="${d}" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
};

// Simple bar chart in SVG
window.renderBars = function (data) {
  const w = 320, h = 160, pad = 20;
  const max = Math.max(...data.map(d => d.v));
  const bw = (w - pad*2) / data.length;
  return `
    <svg viewBox="0 0 ${w} ${h}" class="ux-098">
      <defs><linearGradient id="bg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#7c5cff"/><stop offset="1" stop-color="#4aa8ff"/></linearGradient></defs>
      ${data.map((d, i) => {
        const bh = ((d.v / max) * (h - pad*2));
        const x = pad + i * bw + bw*0.15;
        const y = h - pad - bh;
        return `
          <rect x="${x}" y="${y}" width="${bw*0.7}" height="${bh}" rx="6" fill="url(#bg)" opacity=".92"/>
          <text x="${x + bw*0.35}" y="${h - 4}" text-anchor="middle" fill="#a9a9c9" font-size="10">${d.l}</text>
          <text x="${x + bw*0.35}" y="${y - 4}" text-anchor="middle" fill="#ececff" font-size="10" font-weight="600">${d.v}</text>
        `;
      }).join("")}
    </svg>
  `;
};

// Donut
window.renderDonut = function (segments) {
  const total = segments.reduce((s, x) => s + x.v, 0);
  let acc = 0;
  const r = 60, cx = 80, cy = 80, sw = 22;
  const paths = segments.map(seg => {
    const frac = seg.v / total;
    const start = acc / total * Math.PI * 2 - Math.PI/2;
    acc += seg.v;
    const end = acc / total * Math.PI * 2 - Math.PI/2;
    const large = frac > .5 ? 1 : 0;
    const x1 = cx + r * Math.cos(start), y1 = cy + r * Math.sin(start);
    const x2 = cx + r * Math.cos(end), y2 = cy + r * Math.sin(end);
    return `<path d="M${x1},${y1} A${r},${r} 0 ${large} 1 ${x2},${y2}" fill="none" stroke="${seg.c}" stroke-width="${sw}" stroke-linecap="round"/>`;
  }).join("");
  return `
    <svg viewBox="0 0 160 160" width="160" height="160">${paths}
      <text x="80" y="78" text-anchor="middle" fill="#ececff" font-size="20" font-weight="800">${total}</text>
      <text x="80" y="96" text-anchor="middle" fill="#a9a9c9" font-size="10">total</text>
    </svg>
  `;
};
