/* CSC Desk: page background and button colour picker (screen only, never printed). Saved on this computer. */
(function () {
  const KEY = 'cscdesk_pagetheme', R = document.documentElement;
  const BG = [['Default', ''], ['Cream', '#fbf6e9'], ['Mint', '#e8f5ee'], ['Sky', '#e6f1fb'], ['Lavender', '#f0eafb'], ['Rose', '#fbebf0'], ['Grey', '#eceff1'], ['Dark', '#10151b']];
  const BT = [['Default', ''], ['Green', '#0b6e4f'], ['Blue', '#1d4ed8'], ['Purple', '#6d3fc0'], ['Rose', '#c2255c'], ['Orange', '#d9480f'], ['Black', '#111827']];
  let s = { bg: '', bt: '' };
  try { s = Object.assign(s, JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) {}
  const lum = h => { const n = parseInt(h.slice(1), 16); return (0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255)) / 255; };
  const mix = (h, a) => { const n = parseInt(h.slice(1), 16), c = [n >> 16, (n >> 8) & 255, n & 255].map(v => Math.round(v * a + 255 * (1 - a))); return '#' + c.map(v => v.toString(16).padStart(2, '0')).join(''); };
  const ALL = ['--bg', '--card', '--surface', '--tx', '--text', '--mu', '--muted', '--bd', '--line', '--pr', '--pr2', '--on', '--brand', '--brand-strong', '--soft', '--on-brand'];
  function apply() {
    ALL.forEach(v => R.style.removeProperty(v));
    if (s.bg) {
      const d = lum(s.bg) < .5;
      R.style.setProperty('--bg', s.bg);
      if (d) { [['--card', '#18202a'], ['--surface', '#18202a'], ['--tx', '#e8edf2'], ['--text', '#e8edf2'], ['--mu', '#98a6b4'], ['--muted', '#98a6b4'], ['--bd', '#2c3846'], ['--line', '#2c3846']].forEach(a => R.style.setProperty(a[0], a[1])); }
    }
    if (s.bt) {
      const on = lum(s.bt) > .6 ? '#111' : '#fff';
      [['--pr', s.bt], ['--brand', s.bt], ['--brand-strong', s.bt], ['--pr2', mix(s.bt, .12)], ['--soft', mix(s.bt, .12)], ['--on', on], ['--on-brand', on]].forEach(a => R.style.setProperty(a[0], a[1]));
    }
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
  }
  apply();
  const st = document.createElement('style');
  st.textContent = '.cpt{position:fixed;right:14px;bottom:calc(14px + env(safe-area-inset-bottom,0px));z-index:3000;font:14px system-ui,sans-serif}.cpt-b{background:#111827;color:#fff;border:0;border-radius:999px;padding:10px 16px;font-weight:700;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.3)}.cpt-p{display:none;position:absolute;right:0;bottom:48px;width:250px;background:#fff;color:#111;border:1px solid #ccc;border-radius:12px;padding:12px;box-shadow:0 6px 24px rgba(0,0,0,.25)}.cpt.open .cpt-p{display:block}.cpt-p b{display:block;margin:6px 0 4px;font-size:13px}.cpt-sw{display:flex;flex-wrap:wrap;gap:6px}.cpt-sw button{width:30px;height:30px;border-radius:50%;border:2px solid #999;cursor:pointer;padding:0}.cpt-sw button.on{border:3px solid #000}.cpt-p input[type=color]{width:100%;height:30px;margin-top:6px;padding:0;border:1px solid #ccc;border-radius:6px}.cpt-r{margin-top:10px;width:100%;padding:7px;border:1px solid #999;background:#f3f3f3;border-radius:8px;cursor:pointer;font-weight:600}@media print{.cpt{display:none!important}}';
  document.head.appendChild(st);
  const w = document.createElement('div'); w.className = 'cpt';
  w.innerHTML = '<div class="cpt-p"><b>Background colour</b><div class="cpt-sw" data-k="bg"></div><input type="color" data-c="bg" aria-label="Custom background colour"><b>Button colour</b><div class="cpt-sw" data-k="bt"></div><input type="color" data-c="bt" aria-label="Custom button colour"><button type="button" class="cpt-r">Reset colours</button></div><button type="button" class="cpt-b" aria-expanded="false">&#127912; Colours</button>';
  document.body.appendChild(w);
  function draw() {
    [['bg', BG], ['bt', BT]].forEach(([k, list]) => {
      w.querySelector('[data-k=' + k + ']').innerHTML = list.map(([n, c]) => '<button type="button" title="' + n + '" data-k="' + k + '" data-v="' + c + '" class="' + (s[k] === c ? 'on' : '') + '" style="background:' + (c || (k === 'bg' ? '#f4f6f9' : '#0b5c3b')) + '"></button>').join('');
    });
  }
  draw();
  w.addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.classList.contains('cpt-b')) { const o = w.classList.toggle('open'); b.setAttribute('aria-expanded', o); return; }
    if (b.classList.contains('cpt-r')) { s = { bg: '', bt: '' }; apply(); draw(); return; }
    if (b.dataset.k) { s[b.dataset.k] = b.dataset.v; apply(); draw(); }
  });
  w.addEventListener('input', e => { const k = e.target.dataset.c; if (k) { s[k] = e.target.value; apply(); draw(); } });
})();
