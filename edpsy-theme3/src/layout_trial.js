/* ---------- layout trial (only with ?layout=A|B|C, only on new-format steps) ---------- */
(function(){const L=(new URLSearchParams(location.search).get('layout')||'').toUpperCase();if(!['A','B','C'].includes(L))return;
const css=`.lyA,.lyB,.lyC{display:flex!important;flex-direction:column;gap:0}.lyA>.teach{order:-1}.lyA>.teach,.lyB>.teach,.lyC>.teach{width:100%}.lyA>.fig,.lyB>.fig{width:100%;max-width:880px;margin-left:auto;margin-right:auto}
.lyA>.teach,.lyB>.teach,.lyC>.teach{max-width:780px;margin:0 auto}.playov .in>.fig{max-width:900px;margin:0 auto}
.lyA>.fig{margin-top:26px}.playhd{display:flex;flex-direction:column;margin:0 0 10px}.playhd b{font-family:'Cormorant Garamond',serif;font-size:1.6rem;color:var(--navy);line-height:1.1}.playhd small{color:var(--muted)}
.playgo{display:flex;justify-content:center;margin:16px 0 4px}.playgo button{border:0;background:var(--navy);color:#fff;border-radius:999px;padding:12px 26px;font:inherit;font-weight:700;font-size:1.02rem;cursor:pointer;box-shadow:0 6px 16px rgba(52,70,107,.25)}.playgo button:hover{transform:translateY(-1px)}
.lsw{display:flex;gap:8px;max-width:780px;margin:0 auto 14px}.lsw button{flex:1;border:1.5px solid var(--line);background:#fff;border-radius:999px;padding:10px 12px;font:inherit;font-weight:700;color:var(--muted);cursor:pointer}.lsw button.on{background:var(--navy);border-color:var(--navy);color:#fff}
.lyB>.fig{display:none}.lyB.play>.fig{display:block}.lyB.play>.teach{display:none}
.lyC>.fig{display:none}.playov{position:fixed;inset:0;background:rgba(43,47,58,.5);z-index:9999;overflow:auto;padding:18px}.playov .in{background:var(--bg);max-width:1000px;margin:0 auto;border-radius:20px;padding:14px 16px 18px}.playov .in>.fig{display:block}.playov .top{display:flex;align-items:center;gap:10px;margin-bottom:10px}.playov .top b{flex:1;font-family:'Cormorant Garamond',serif;font-size:1.5rem;color:var(--navy)}.playov .top button{border:1px solid var(--line);background:#fff;border-radius:999px;padding:8px 16px;font:inherit;font-weight:600;color:var(--navy);cursor:pointer}`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
setTimeout(()=>document.querySelectorAll('.step[data-v2] .scr').forEach(scr=>{const fig=scr.querySelector(':scope>.fig'),teach=scr.querySelector(':scope>.teach');if(!fig||!teach)return;
 const out=teach.querySelector(':scope>.out');const sv=fig.querySelector('svg');if(out&&sv)sv.after(out);
 const go=(label,fn)=>{const d=document.createElement('div');d.className='playgo';d.innerHTML='<button type="button">'+label+'</button>';d.firstChild.onclick=fn;teach.appendChild(d)};
 if(L==='A'){scr.classList.add('lyA');const h=document.createElement('div');h.className='playhd';h.innerHTML='<b>🎮 Now play it</b><small>You have read the step. Now test it yourself in the picture.</small>';fig.prepend(h);
  go('🎮 Go to the game ↓',()=>fig.scrollIntoView({behavior:'smooth',block:'start'}))}
 if(L==='B'){scr.classList.add('lyB');const sw=document.createElement('div');sw.className='lsw';sw.innerHTML='<button type="button" class="on">📖 1 · Learn</button><button type="button">🎮 2 · Play</button>';scr.before(sw);
  const set=p=>{scr.classList.toggle('play',p);sw.children[0].classList.toggle('on',!p);sw.children[1].classList.toggle('on',p);sw.scrollIntoView({behavior:'smooth',block:'start'})};
  sw.children[0].onclick=()=>set(false);sw.children[1].onclick=()=>set(true);go('🎮 Now play it',()=>set(true))}
 if(L==='C'){scr.classList.add('lyC');const ph=document.createComment('fig');
  const open=()=>{fig.before(ph);const ov=document.createElement('div');ov.className='playov';ov.innerHTML='<div class="in"><div class="top"><b>🎮 Play the game</b><button type="button">✕ Back to the cards</button></div></div>';ov.querySelector('.in').appendChild(fig);document.body.appendChild(ov);document.body.style.overflow='hidden';
   const close=()=>{ph.replaceWith(fig);ov.remove();document.body.style.overflow=''};ov.querySelector('.top button').onclick=close;ov.onclick=e=>{if(e.target===ov)close()}};
  go('🎮 Play the game',open)}
}),400);
})();
/* ---------- bottom-of-step trial (only with ?after=1|2|3) ---------- */
(function(){const AF=new URLSearchParams(location.search).get('after');if(!['1','2','3'].includes(AF))return;
const css=`.afbox{background:#fff;border:1px solid var(--line);border-radius:18px;padding:16px 18px;margin:18px auto 0;max-width:880px;box-shadow:0 6px 18px rgba(52,70,107,.05)}
.afh{font-family:'Cormorant Garamond',serif;font-size:1.45rem;font-weight:700;color:var(--navy);margin:0 0 10px}
.afkey{background:var(--pgold);border-left:4px solid var(--gold);border-radius:10px;padding:10px 14px;margin:0 0 10px}.afkey>b:first-child{display:block;font-size:.74rem;letter-spacing:.12em;text-transform:uppercase;color:var(--dgold);margin-bottom:2px}
.aftrap{background:var(--rose);border-radius:12px;padding:10px 14px;margin:0 0 10px}.aftrap>b:first-child{display:block;color:var(--bad);margin-bottom:2px}.aftrap .w,.aftrap .r{display:block}.aftrap .r{color:var(--ok);font-weight:600}
.aftiles{display:grid;grid-template-columns:1fr 1fr;gap:10px}.aftiles details{border:1.5px solid var(--line);border-radius:12px;background:#fbfaf6}.aftiles summary{cursor:pointer;padding:10px 14px;font-weight:700;color:var(--navy);list-style:none}.aftiles summary::after{content:' ▸';color:var(--muted)}.aftiles details[open] summary::after{content:' ▾'}.aftiles details>div{padding:0 14px 12px;font-size:.95rem}
.t4{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.t4 button{border:1.5px solid var(--line);background:#fff;border-radius:14px;padding:14px 8px;font:inherit;font-weight:700;color:var(--navy);cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;box-shadow:0 3px 8px rgba(52,70,107,.06)}.t4 button span{font-size:1.5rem}.t4 button.on{background:var(--navy);color:#fff;border-color:var(--navy)}
.t4p{margin-top:10px;border-radius:12px;padding:12px 16px;display:none}.t4p.on{display:block}.t4p.k{background:var(--pgold)}.t4p.t{background:var(--rose)}.t4p.t .w,.t4p.t .r{display:block}.t4p.t .r{color:var(--ok);font-weight:600}.t4p.t>b:first-child{display:none}.t4p.h,.t4p.x{background:#fbfaf6;border:1px solid var(--line)}
.snav.affoot{align-items:center;flex-wrap:wrap}.snav.affoot .gotrow{margin:0;border:0;padding:0;background:none;flex:1}
.lyB:not(.play)>.afbox{display:none}
@media(max-width:700px){.aftiles{grid-template-columns:1fr}.t4{grid-template-columns:1fr 1fr}.snav.affoot .gotrow{order:-1;flex-basis:100%}}`;
const s=document.createElement('style');s.textContent=css;document.head.appendChild(s);
setTimeout(()=>document.querySelectorAll('.step[data-v2]').forEach(st=>{const ttx=st.querySelector(':scope>.ttx');if(!ttx)return;
 const key=ttx.querySelector('.keyl'),dr=ttx.querySelectorAll('.tdrawer');
 const keyH=key?key.innerHTML.replace(/^<b>★ KEY INSIGHT<\/b> · /,''):'',think=dr[0]?dr[0].innerHTML.replace(/^🧠 /,''):'',tip=dr[1]?dr[1].innerHTML.replace(/^✎ /,''):'';
 ttx.style.display='none';
 const panes=st.querySelectorAll(':scope>.pane'),hosts=panes.length?[...panes]:[st];
 hosts.forEach(h=>{const ab=h.querySelector('.afterbox'),trap=ab&&ab.querySelector('.trapb'),trapH=trap?trap.innerHTML:'';if(ab)ab.style.display='none';
  const box=document.createElement('div');box.className='afbox';
  if(AF==='1'||AF==='2')box.innerHTML=(AF==='2'?'<div class="afh">✅ After playing: lock it in</div>':'<div class="afh">✅ Before you move on</div>')+(keyH?'<div class="afkey"><b>★ Key insight</b>'+keyH+'</div>':'')+(trapH?'<div class="aftrap">'+trapH+'</div>':'')+'<div class="aftiles"><details><summary>🧠 Think of it like…</summary><div>'+think+'</div></details><details><summary>✎ Exam tip</summary><div>'+tip+'</div></details></div>';
  if(AF==='3'){const P=[['k','★','Key insight',keyH],['t','⚠️','The trap',trapH],['h','🧠','Think of it like',think],['x','✎','Exam tip',tip]];
   box.innerHTML='<div class="afh">✅ Before you move on <small style="font-family:DM Sans,sans-serif;font-size:.85rem;color:var(--muted);font-weight:500">· tap a tile</small></div><div class="t4">'+P.map(p=>'<button type="button" data-k="'+p[0]+'"><span>'+p[1]+'</span>'+p[2]+'</button>').join('')+'</div>'+P.map(p=>'<div class="t4p '+p[0]+'" data-k="'+p[0]+'">'+p[3]+'</div>').join('');
   box.querySelectorAll('.t4 button').forEach(b=>b.onclick=()=>{const on=!b.classList.contains('on');box.querySelectorAll('.t4 button').forEach(x=>x.classList.toggle('on',x===b&&on));box.querySelectorAll('.t4p').forEach(x=>x.classList.toggle('on',x.dataset.k===b.dataset.k&&on))})}
  const scr=h.querySelector('.scr');
  if(AF==='2'&&scr&&scr.classList.contains('lyB'))scr.appendChild(box);else if(ab)ab.after(box);else if(scr)scr.after(box)});
 const gr=st.querySelector(':scope>.gotrow'),sn=st.querySelector(':scope>.snav');if(gr&&sn&&sn.children.length===2){sn.insertBefore(gr,sn.children[1]);sn.classList.add('affoot');const sp=gr.querySelector('span');if(sp)sp.textContent='How did it go?'}
}),700);
})();
