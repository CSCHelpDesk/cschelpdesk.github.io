/* CSC Desk: shared image adjuster. Brightness, contrast, zoom and drag-to-fit for an <img> inside a slot.
   Use: CSCAdjust.attach({img, slot, mount, label}). Works on screen and in print (CSS filter + transform). */
(function () {
  const S = { x: 0, y: 0, z: 1, b: 100, c: 100 };
  function apply(img, s) {
    img.style.filter = 'brightness(' + s.b + '%) contrast(' + s.c + '%)';
    img.style.transform = 'translate(' + s.x + 'px,' + s.y + 'px) scale(' + s.z + ')';
  }
  function row(txt, min, max, val, cb) {
    const w = document.createElement('div'); w.className = 'adj-row';
    const l = document.createElement('label'); l.textContent = txt;
    const r = document.createElement('input'); r.type = 'range'; r.min = min; r.max = max; r.value = val;
    r.oninput = () => cb(+r.value); w.append(l, r); return { w, r };
  }
  window.CSCAdjust = {
    attach(o) {
      const img = o.img, slot = o.slot, s = Object.assign({}, S);
      img.style.transformOrigin = 'center'; img.style.touchAction = 'none'; img.style.cursor = 'grab';
      img.draggable = false; slot.style.overflow = 'hidden';
      const go = () => apply(img, s);
      const box = document.createElement('div'); box.className = 'adj-box';
      box.innerHTML = '<b>' + (o.label || 'Adjust image') + '</b><small>Drag the picture to move it. Use sliders to zoom and fix light.</small>';
      const z = row('Zoom', 50, 300, 100, v => { s.z = v / 100; go(); });
      const br = row('Brightness', 40, 180, 100, v => { s.b = v; go(); });
      const ct = row('Contrast', 40, 200, 100, v => { s.c = v; go(); });
      const rs = document.createElement('button'); rs.type = 'button'; rs.className = 'adj-reset'; rs.textContent = 'Reset';
      rs.onclick = () => { Object.assign(s, S); z.r.value = 100; br.r.value = 100; ct.r.value = 100; go(); };
      box.append(z.w, br.w, ct.w, rs); o.mount.appendChild(box);
      let drag = null;
      img.addEventListener('pointerdown', e => { drag = { x: e.clientX - s.x, y: e.clientY - s.y }; img.setPointerCapture(e.pointerId); img.style.cursor = 'grabbing'; });
      img.addEventListener('pointermove', e => { if (!drag) return; s.x = e.clientX - drag.x; s.y = e.clientY - drag.y; go(); });
      const end = () => { drag = null; img.style.cursor = 'grab'; };
      img.addEventListener('pointerup', end); img.addEventListener('pointercancel', end);
      slot.addEventListener('wheel', e => { e.preventDefault(); s.z = Math.min(3, Math.max(.5, s.z + (e.deltaY < 0 ? .05 : -.05))); z.r.value = Math.round(s.z * 100); go(); }, { passive: false });
      go(); return s;
    }
  };
  const st = document.createElement('style');
  st.textContent = '.adj-box{border:1px solid var(--line,#ccc);border-radius:8px;padding:10px;margin:10px 0;background:#f7faf8;color:#12231c}.adj-box small{display:block;color:#58695f;font-size:11px;margin:2px 0 6px}.adj-row{display:grid;grid-template-columns:82px 1fr;align-items:center;gap:6px;margin:4px 0}.adj-row label{margin:0;font-size:12px}.adj-row input{width:100%}.adj-reset{margin-top:6px;padding:5px 12px;border:1px solid #0b6e4f;background:#fff;color:#0b6e4f;border-radius:6px;font-weight:600;cursor:pointer}@media print{.adj-box{display:none!important}}';
  document.head.appendChild(st);
})();
