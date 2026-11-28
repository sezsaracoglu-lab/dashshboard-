/* ---------- Standard step layout (Nov 2026): Learn | Play tabs, four tiles below. ?layout=old shows the previous layout ---------- */
(function(){const Q=new URLSearchParams(location.search);if(Q.get('layout')==='old')return;
const css=`.lyB{display:flex!important;flex-direction:column;gap:0}.lyB>.teach{width:100%;max-width:780px;margin:0 auto}.lyB>.fig{width:100%;max-width:880px;margin-left:auto;margin-right:auto;display:none}.lyB.play>.fig{display:block}.lyB.play>.teach{display:none}
.lsw{display:flex;gap:8px;max-width:780px;margin:0 auto 14px}.lsw button{flex:1;border:1.5px solid var(--line);background:#fff;border-radius:999px;padding:10px 12px;font:inherit;font-weight:700;color:var(--muted);cursor:pointer}.lsw button.on{background:var(--navy);border-color:var(--navy);color:#fff}
.playgo{display:flex;justify-content:center;margin:16px 0 4px}.playgo button{border:0;background:var(--navy);color:#fff;border-radius:999px;padding:12px 26px;font:inherit;font-weight:700;font-size:1.02rem;cursor:pointer;box-shadow:0 6px 16px rgba(52,70,107,.25)}
.fig .ask{margin:0 0 10px}
.walk .exq{display:none!important}.lock .f,.lock .h{display:none!important}.lock{grid-template-columns:1fr!important}
.afbox{background:#fff;border:1px solid var(--line);border-radius:18px;padding:16px 18px;margin:18px auto 0;max-width:880px;box-shadow:0 6px 18px rgba(52,70,107,.05)}
.afh{font-family:'Cormorant Garamond',serif;font-size:1.45rem;font-weight:700;color:var(--navy);margin:0 0 10px}.afh small{font-family:'DM Sans',sans-serif;font-size:.85rem;color:var(--muted);font-weight:500}
.t4{display:grid;grid-template-columns:repeat(var(--n,4),1fr);gap:10px}.t4 button{border:1.5px solid var(--line);background:#fff;border-radius:14px;padding:14px 8px;font:inherit;font-weight:700;color:var(--navy);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;box-shadow:0 3px 8px rgba(52,70,107,.06)}.t4 button span{font-size:1.5rem}.t4 button.on{background:var(--navy);color:#fff;border-color:var(--navy)}
.t4p{margin-top:10px;border-radius:12px;padding:12px 16px;display:none}.t4p.on{display:block}.t4p.k{background:var(--pgold)}.t4p.t{background:var(--rose)}.t4p.t .w,.t4p.t .r{display:block}.t4p.t .r{color:var(--ok);font-weight:600}.t4p.t>b:first-child{display:none}.t4p.h,.t4p.x{background:#fbfaf6;border:1px solid var(--line)}
.snav.affoot{align-items:center;flex-wrap:wrap}.snav.affoot .gotrow{margin:0;border:0;padding:0;background:none;flex:1}
@media(max-width:700px){.t4{grid-template-columns:1fr 1fr!important}.snav.affoot .gotrow{order:-1;flex-basis:100%}}`;
const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
setTimeout(()=>{
 /* 1 · Learn | Play */
 document.querySelectorAll('.walk .step .scr').forEach(scr=>{const fig=scr.querySelector(':scope>.fig'),teach=scr.querySelector(':scope>.teach.guided');if(!fig||!teach||!fig.querySelector('svg'))return;
  const host=scr.parentElement,ask=host.querySelector(':scope>.ask');if(ask&&!fig.querySelector('.qguide'))fig.prepend(ask);
  const out=teach.querySelector(':scope>.out'),sv=fig.querySelector('svg');if(out&&sv)sv.after(out);
  scr.classList.add('lyB');const sw=document.createElement('div');sw.className='lsw';sw.innerHTML='<button type="button" class="on">📖 1 · Learn</button><button type="button">🎮 2 · Play</button>';scr.before(sw);
  const set=p=>{scr.classList.toggle('play',p);sw.children[0].classList.toggle('on',!p);sw.children[1].classList.toggle('on',p);sw.scrollIntoView({behavior:'smooth',block:'start'})};
  sw.children[0].onclick=()=>set(false);sw.children[1].onclick=()=>set(true);
  const d=document.createElement('div');d.className='playgo';d.innerHTML='<button type="button">🎮 Now play it</button>';d.firstChild.onclick=()=>set(true);teach.appendChild(d)});
 /* 2 · four tiles */
 document.querySelectorAll('.walk .step').forEach(st=>{const ttx=st.querySelector(':scope>.ttx');if(!ttx)return;
  const key=ttx.querySelector('.keyl'),dr=ttx.querySelectorAll('.tdrawer');
  const keyH=key?key.innerHTML.replace(/^<b>★ KEY INSIGHT<\/b> · /,''):'',think=dr[0]?dr[0].innerHTML.replace(/^🧠 /,''):'';
  let tip='';if(dr[1]){const r3=dr[1].querySelector('.row3');if(r3){const t=r3.children[2];tip=t?t.innerHTML.replace(/^<b>✎ Exam tip<\/b>/,''):''}else tip=dr[1].innerHTML.replace(/^✎ /,'')}
  ttx.style.display='none';
  const panes=st.querySelectorAll(':scope>.pane'),hosts=panes.length?[...panes]:[st];
  hosts.forEach(h=>{const ab=h.querySelector('.afterbox'),trap=ab&&ab.querySelector(':scope>.trapb'),trapH=trap?trap.innerHTML:'';if(trap)trap.style.display='none';
   if(ab&&![...ab.children].some(c=>c.style.display!=='none'&&!c.classList.contains('exq')))ab.style.display='none';
   const P=[['k','★','Key insight',keyH],['t','⚠️','The trap',trapH],['h','🧠','Think of it like',think],['x','✎','Exam tip',tip]].filter(p=>p[3]);if(!P.length)return;
   const box=document.createElement('div');box.className='afbox';
   box.innerHTML='<div class="afh">✅ Before you move on <small>· tap a tile</small></div><div class="t4" style="--n:'+P.length+'">'+P.map(p=>'<button type="button" data-k="'+p[0]+'"><span>'+p[1]+'</span>'+p[2]+'</button>').join('')+'</div>'+P.map(p=>'<div class="t4p '+p[0]+'" data-k="'+p[0]+'">'+p[3]+'</div>').join('');
   box.querySelectorAll('.t4 button').forEach(b=>b.onclick=()=>{const on=!b.classList.contains('on');box.querySelectorAll('.t4 button').forEach(x=>x.classList.toggle('on',x===b&&on));box.querySelectorAll('.t4p').forEach(x=>x.classList.toggle('on',x.dataset.k===b.dataset.k&&on))});
   const scr=h.querySelector(':scope>.scr');if(ab)ab.after(box);else if(scr)scr.after(box);else{const g=st.querySelector(':scope>.gotrow')||st.querySelector(':scope>.snav');if(g)g.before(box);else st.appendChild(box)}});
  const gr=st.querySelector(':scope>.gotrow'),sn=st.querySelector(':scope>.snav');if(gr&&sn&&sn.children.length===2){sn.insertBefore(gr,sn.children[1]);sn.classList.add('affoot');const sp=gr.querySelector('span');if(sp)sp.textContent='How did it go?'}
 });
},700);
})();
