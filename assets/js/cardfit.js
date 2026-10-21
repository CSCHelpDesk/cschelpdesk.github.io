/* CSC Desk: drag, zoom, brightness and contrast for card slots. Works on .card-preview-box and .pvc-card-slot */
(function(){
  const boxes=[].slice.call(document.querySelectorAll('.card-preview-box,.pvc-card-slot')); if(!boxes.length) return;
  const st=new Map(); const get=b=>{ if(!st.has(b)) st.set(b,{x:0,y:0,z:1,b:100,c:100}); return st.get(b); };
  let sel=boxes[0];
  const css=document.createElement('style');
  css.textContent='.card-preview-box,.pvc-card-slot{touch-action:none;cursor:grab}.card-preview-box img,.pvc-card-slot img{user-select:none;-webkit-user-drag:none;transform-origin:center}@media screen{.fit-sel{outline:3px solid #0b6e4f;outline-offset:2px}}.adj{border:1px solid #d3dfd8;border-radius:8px;padding:10px;margin-top:12px;background:#f7faf8}.adj h3{margin-top:0!important}.adj input[type=range]{width:100%;padding:0;border:0}.adj .note{font-size:11px;color:#5d6b7a;margin-bottom:8px}.adj button{background:#fff;border:1px solid #0b6e4f;color:#0b6e4f;border-radius:6px;padding:6px 10px;font-weight:600;font-size:12px;cursor:pointer;margin:4px 4px 0 0}';
  document.head.appendChild(css);
  const apply=b=>{ const i=b.querySelector('img'); if(!i) return; const s=get(b);
    i.style.transform='translate('+s.x+'px,'+s.y+'px) scale('+s.z+')'; i.style.filter='brightness('+s.b+'%) contrast('+s.c+'%)'; i.draggable=false; };
  const ui=document.createElement('div'); ui.className='adj';
  ui.innerHTML='<h3>Adjust selected card</h3><p class="note">Click a card, drag it to move, scroll over it (or use Zoom) to fit the frame.</p>'+
   '<div class="input-group"><label>Zoom: <span id="fzv">100</span>%</label><input type="range" id="fz" min="30" max="400" value="100"></div>'+
   '<div class="input-group"><label>Brightness: <span id="fbv">100</span>%</label><input type="range" id="fb" min="50" max="150" value="100"></div>'+
   '<div class="input-group"><label>Contrast: <span id="fcv">100</span>%</label><input type="range" id="fc" min="50" max="150" value="100"></div>'+
   '<button type="button" id="fr">Reset this card</button><button type="button" id="fa">Use this brightness and contrast on all</button>';
  const pb=document.querySelector('.form-panel .btn-print'); if(pb) pb.parentNode.insertBefore(ui,pb); else document.querySelector('.form-panel').appendChild(ui);
  const $=id=>document.getElementById(id);
  function sync(){ const s=get(sel); $('fz').value=Math.round(s.z*100); $('fb').value=s.b; $('fc').value=s.c; $('fzv').textContent=Math.round(s.z*100); $('fbv').textContent=s.b; $('fcv').textContent=s.c; boxes.forEach(b=>b.classList.toggle('fit-sel',b===sel)); }
  $('fz').oninput=()=>{get(sel).z=$('fz').value/100;apply(sel);sync();};
  $('fb').oninput=()=>{get(sel).b=+$('fb').value;apply(sel);sync();};
  $('fc').oninput=()=>{get(sel).c=+$('fc').value;apply(sel);sync();};
  $('fr').onclick=()=>{st.set(sel,{x:0,y:0,z:1,b:100,c:100});apply(sel);sync();};
  $('fa').onclick=()=>{const s=get(sel);boxes.forEach(b=>{const t=get(b);t.b=s.b;t.c=s.c;apply(b);});};
  boxes.forEach(b=>{
    let d=null;
    b.addEventListener('pointerdown',e=>{sel=b;sync();const s=get(b);d={x:e.clientX-s.x,y:e.clientY-s.y};b.setPointerCapture(e.pointerId);b.style.cursor='grabbing';});
    b.addEventListener('pointermove',e=>{if(!d)return;const s=get(b);s.x=e.clientX-d.x;s.y=e.clientY-d.y;apply(b);});
    const end=()=>{d=null;b.style.cursor='grab';}; b.addEventListener('pointerup',end); b.addEventListener('pointercancel',end);
    b.addEventListener('wheel',e=>{e.preventDefault();sel=b;const s=get(b);s.z=Math.min(4,Math.max(0.3,s.z*(e.deltaY<0?1.06:0.94)));apply(b);sync();},{passive:false});
    b.addEventListener('load',()=>apply(b),true);
  });
  boxes.forEach(apply); sync();
})();
