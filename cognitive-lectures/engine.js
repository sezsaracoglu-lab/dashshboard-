// ---------------- Lecture Lab engine ----------------
const ORDER=[
 {id:'l1', name:'1 · Attention', sub:'Reader pp. 285–297'},
 {id:'l2', name:'2 · Malleability of memory', sub:'Reader pp. 298–323'},
 {id:'l3', name:'3 · Cognition & emotion', sub:'Reader pp. 324–342'},
 {id:'l4', name:'4 · Language & thought', sub:'Reader pp. 343–369'},
 {id:'l5', name:'5 · Dual process theory', sub:'Reader pp. 370–382'},
];
const store={get(k,d){try{const v=localStorage.getItem(k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
let cur=(location.hash.match(/^#(l[1-5])/)||[])[1]||store.get('ll_cur','l1');
let mode='slides', idx=0, cardIdx=0, L=LECS[cur], done=store.get('ll_done_'+cur,{});
const MODES=[['slides','📖 Slide by slide'],['practice','✅ Practice questions'],['cards','🃏 Flashcards'],['breath','⚡ Lecture in one breath']];
function num(){return ORDER.findIndex(o=>o.id===cur)+1}

function switchLec(id){cur=id;L=LECS[id];idx=0;cardIdx=0;mode='slides';done=store.get('ll_done_'+id,{});store.set('ll_cur',id);history.replaceState(null,'','#'+id);render();window.scrollTo(0,0)}

function renderSide(){
  document.getElementById('lecs').innerHTML=ORDER.map(l=>{const d=Object.values(store.get('ll_done_'+l.id,{})).filter(Boolean).length,n=LECS[l.id].screens.length;
    return `<button class="lec ${l.id===cur?'on':''}" data-l="${l.id}">${l.name}<span>${l.sub} · ${d}/${n} nailed</span></button>`}).join('');
  document.querySelectorAll('.lec').forEach(b=>b.onclick=()=>switchLec(b.dataset.l));
  document.getElementById('modes').innerHTML=MODES.map(([k,v])=>`<button class="mode ${mode===k?'on':''}" data-m="${k}">${v}</button>`).join('');
  document.querySelectorAll('.mode').forEach(b=>b.onclick=()=>{mode=b.dataset.m;render();window.scrollTo(0,0)});
  const n=Object.values(done).filter(Boolean).length;
  document.getElementById('progtxt').textContent=`Lecture ${num()}: ${n} / ${L.screens.length} screens nailed`;
  document.getElementById('progbar').style.width=(100*n/L.screens.length)+'%';
}
function head(){return `<div class="eyebrow">Lecture ${num()} · ${L.title}</div><h1>${L.title}</h1><p class="lede"><b>The lecture’s question:</b> ${L.question}</p>`}

function slideHTML(s){
  const imgs=s.imgs||[s.img,s.img2].filter(Boolean);
  if(s.svg==='bago') return bagoSVG();
  if(!imgs.length) return `<div style="padding:30px;text-align:center;color:var(--muted)">This slide showed the door-study video. Watch it via the QR code on reader p. 289, or try the flicker test below.</div>`;
  if(imgs.length===1) return `<img src="slides/${imgs[0]}.jpg" alt="Lecture slide: ${s.t}">`;
  return imgs.map((m,i)=>`<img class="sp" data-p="${i}" src="slides/${m}.jpg" alt="Lecture slide ${i+1} of ${imgs.length}: ${s.t}" style="${i?'display:none':''}">`).join('')+
   `<div class="spnav"><button class="btn ghost" id="spp">‹</button>${imgs.map((m,i)=>`<button class="spd ${i?'':'on'}" data-p="${i}">${i+1}</button>`).join('')}<button class="btn ghost" id="spn">›</button></div>`;
}
function bagoSVG(){const bar=(x,v,c,l)=>{const h=(v-50)*4.4;return `<rect x="${x}" y="${250-h}" width="56" height="${h}" fill="${c}"/><text x="${x+28}" y="${244-h}" text-anchor="middle" font-size="14" font-weight="700" fill="#34466b">≈${v}%</text><text x="${x+28}" y="270" text-anchor="middle" font-size="12" fill="#2b2f3a">${l}</text>`};
 return `<svg viewBox="0 0 440 320" width="100%" role="img" aria-label="Confidence on congruent and incongruent problems with and without load"><rect width="440" height="320" fill="#fff"/>
 <text x="220" y="22" text-anchor="middle" font-size="15" font-weight="700" fill="#34466b">Confidence in the answer (Bago &amp; De Neys, 2017)</text>
 <line x1="40" y1="250" x2="420" y2="250" stroke="#2b2f3a"/><text x="14" y="140" font-size="11" fill="#6b7280" transform="rotate(-90 14 140)">confidence (%)</text>
 ${bar(55,97,'#c9a96e','congruent')}${bar(140,85,'#34466b','incongruent')}${bar(245,97,'#c9a96e','congruent')}${bar(330,85,'#34466b','incongruent')}<text x="36" y="254" text-anchor="end" font-size="10" fill="#6b7280">50</text>
 <text x="125" y="296" text-anchor="middle" font-size="13" font-weight="700" fill="#34466b">No load</text><text x="315" y="296" text-anchor="middle" font-size="13" font-weight="700" fill="#34466b">With load (3×3 grid)</text>
 <text x="220" y="314" text-anchor="middle" font-size="11" fill="#6b7280">Redrawn from the reader’s values (axis starts at 50%); same drop with and without load</text></svg>`}

function renderSlides(){
  const s=L.screens[idx];const chipKeys=Object.keys(s.chips);
  const D=DEMOS[s.demo];
  return head()+`<p class="lede" style="margin-top:6px"><b>Storyline:</b> ${L.storyline}</p>
  <div class="screen">
   <div><div class="slidebox">${slideHTML(s)}<div class="ref"><span>${s.slide}</span><span>Reader ${s.page}</span></div></div>${D?D.html():''}</div>
   <div class="panel"><div class="eyebrow">Screen ${idx+1} of ${L.screens.length}</div><h2>${s.t}</h2>
    <div class="essence"><b>The essence:</b> ${s.essence}</div>
    <div class="chips">${chipKeys.map((k,i)=>`<button class="chip" data-c="${i}">${k}</button>`).join('')}</div>
    ${chipKeys.map((k,i)=>`<div class="chipbody ${k==='The trap'?'trap':''}" id="cb${i}">${s.chips[k]}</div>`).join('')}
    <div class="nav"><button class="btn ghost" id="prev">← Back</button><button class="btn" id="next">Next →</button><button class="got ${done[idx]?'on':''}" id="got">${done[idx]?'✓ Nailed':'I’ve got this'}</button></div>
   </div></div>
   <div class="dots">${L.screens.map((x,i)=>`<button class="dot ${i===idx?'cur':''} ${done[i]?'done':''}" data-i="${i}" title="${x.t}">${i+1}</button>`).join('')}</div>`;
}
function bindSlides(){
  document.querySelectorAll('.chip').forEach(c=>c.onclick=()=>{const b=document.getElementById('cb'+c.dataset.c);const on=!b.classList.contains('on');b.classList.toggle('on',on);c.classList.toggle('on',on)});
  document.getElementById('prev').onclick=()=>{if(idx>0){idx--;render();scrollTop()}};
  document.getElementById('next').onclick=()=>{if(idx<L.screens.length-1){idx++;render()}else{mode='practice';render()}scrollTop()};
  document.getElementById('got').onclick=()=>{done[idx]=!done[idx];store.set('ll_done_'+cur,done);render()};
  document.querySelectorAll('.dot').forEach(d=>d.onclick=()=>{idx=+d.dataset.i;render()});
  const sps=[...document.querySelectorAll('.sp')];if(sps.length){let k=0;const go=j=>{k=(j+sps.length)%sps.length;sps.forEach((x,i)=>x.style.display=i===k?'':'none');document.querySelectorAll('.spd').forEach((x,i)=>x.classList.toggle('on',i===k))};
   document.getElementById('spp').onclick=()=>go(k-1);document.getElementById('spn').onclick=()=>go(k+1);document.querySelectorAll('.spd').forEach(x=>x.onclick=()=>go(+x.dataset.p))}
  const D=DEMOS[L.screens[idx].demo]; if(D) D.bind();
}
function scrollTop(){if(window.innerWidth<860){const p=document.querySelector('.slidebox');if(p)p.scrollIntoView()}}

// ---------------- DEMOS ----------------
const DEMOS={};
DEMOS.ts={html:()=>`<div class="demo"><h4>Try it: measure your own switch cost</h4><p style="font-size:.9rem">Gold digit → is it <b>odd or even</b>? Blue digit → is it <b>low (1–4) or high (6–9)</b>? The colour switches every 2 trials. 24 trials; be fast and accurate.</p>
<div style="text-align:center;margin:12px 0"><div id="tscue" style="font-size:.85rem;color:var(--muted);height:20px"></div><div id="tsdig" style="font:700 64px 'DM Sans';height:80px"></div>
<div id="tsbtns" style="display:none;gap:8px;justify-content:center;flex-wrap:wrap"><button class="btn ghost" data-k="L">Odd / Low</button><button class="btn ghost" data-k="R">Even / High</button></div>
<button class="btn" id="tsstart">Start</button><div id="tsres" style="margin-top:10px;font-size:.92rem"></div></div></div>`,
bind(){const st=document.getElementById('tsstart');let trials=[],t=0,t0=0,data=[];
  st.onclick=()=>{st.style.display='none';document.getElementById('tsbtns').style.display='flex';document.getElementById('tsres').textContent='';
    trials=[];for(let i=0;i<24;i++){const task=Math.floor(i/2)%2;let d;do{d=1+Math.floor(Math.random()*9)}while(d===5);trials.push({task,d,sw:i>0&&i%2===0})}t=0;data=[];show()};
  function show(){if(t>=trials.length){finish();return}const tr=trials[t];document.getElementById('tscue').textContent=tr.task===0?'odd or even?':'low or high?';
    const dig=document.getElementById('tsdig');dig.textContent='';setTimeout(()=>{dig.textContent=tr.d;dig.style.color=tr.task===0?'#a8854a':'#34466b';t0=performance.now()},300)}
  document.querySelectorAll('#tsbtns button').forEach(b=>b.onclick=()=>{if(!t0)return;const tr=trials[t];const rt=performance.now()-t0;t0=0;
    const correct=tr.task===0?((tr.d%2===1)===(b.dataset.k==='L')):((tr.d<5)===(b.dataset.k==='L'));data.push({rt,sw:tr.sw,correct,first:t<2});t++;show()});
  function finish(){document.getElementById('tsbtns').style.display='none';st.style.display='inline-block';st.textContent='Try again';
    const ok=data.filter(x=>x.correct&&!x.first);const m=a=>a.length?Math.round(a.reduce((s,x)=>s+x.rt,0)/a.length):0;const sw=m(ok.filter(x=>x.sw)),rep=m(ok.filter(x=>!x.sw));
    document.getElementById('tsres').innerHTML=`Switch trials: <b>${sw} ms</b> · Repetition trials: <b>${rep} ms</b><br><b>Your switch cost ≈ ${sw-rep} ms</b> ${sw>rep?'(just like Monsell: switching is cognitively demanding)':'(try again; with more trials the switch cost usually shows up)'} · accuracy ${Math.round(100*data.filter(x=>x.correct).length/data.length)}%`}}};

function scene(changed){return `<svg viewBox="0 0 400 240" width="100%" style="max-width:420px;border-radius:10px;background:#f3ead8">
<rect x="0" y="170" width="400" height="70" fill="#d9c7a3"/><rect x="40" y="40" width="120" height="90" fill="#cfe0f2" stroke="#34466b" stroke-width="4"/><line x1="100" y1="40" x2="100" y2="130" stroke="#34466b" stroke-width="3"/>
<rect x="210" y="110" width="150" height="14" fill="#8a6a3a"/><rect x="220" y="124" width="10" height="50" fill="#8a6a3a"/><rect x="340" y="124" width="10" height="50" fill="#8a6a3a"/>
<rect x="232" y="78" width="30" height="32" rx="4" fill="#fff" stroke="#34466b" stroke-width="3"/><path d="M262 86 q14 8 0 18" fill="none" stroke="#34466b" stroke-width="3"/>
<rect x="280" y="60" width="18" height="50" fill="${changed?'#b0473a':'#2f7a52'}"/><circle cx="289" cy="56" r="8" fill="${changed?'#b0473a':'#2f7a52'}"/>
<circle cx="330" cy="98" r="11" fill="#e8b84a"/>${changed?'':'<rect x="60" y="150" width="40" height="22" fill="#a8854a"/>'}
<circle cx="180" cy="190" r="16" fill="#34466b"/></svg>`}
DEMOS.cb={html:()=>`<div class="demo"><h4>Try it: the flicker test</h4><p style="font-size:.9rem">The picture flickers between two versions with a blank in between, like the door passing. Press <b>“I see it!”</b> as soon as you spot what changes.</p>
<div style="text-align:center"><div id="cbstage">${scene(false)}</div><button class="btn" id="cbstart">Start flicker</button> <button class="btn ghost" id="cbsee" style="display:none">I see it!</button><div id="cbres" style="margin-top:8px;font-size:.92rem"></div></div></div>`,
bind(){let timer=null,ph=0,t0=0;const stage=document.getElementById('cbstage');
  document.getElementById('cbstart').onclick=()=>{document.getElementById('cbstart').style.display='none';document.getElementById('cbsee').style.display='inline-block';document.getElementById('cbres').textContent='';t0=performance.now();ph=0;
    timer=setInterval(()=>{if(!document.getElementById('cbstage')){clearInterval(timer);return}ph=(ph+1)%4;stage.innerHTML=ph%2===1?'<div style="height:240px;max-width:420px;margin:auto;background:#e9e3d6;border-radius:10px"></div>':scene(ph===2)},300)};
  document.getElementById('cbsee').onclick=()=>{clearInterval(timer);const s=((performance.now()-t0)/1000).toFixed(1);stage.innerHTML=scene(false)+scene(true);
    document.getElementById('cbsee').style.display='none';document.getElementById('cbstart').style.display='inline-block';document.getElementById('cbstart').textContent='Again';
    document.getElementById('cbres').innerHTML=`You took <b>${s} s</b>. Two things changed: the <b>bottle turns red</b> and the <b>box on the floor disappears</b>. Without the blank flash you would spot them instantly; the flash hides the motion signal, so you need focused attention, exactly like the door in Simons & Levin.`}}};

// L2: misinformation
function street(){return `<svg viewBox="0 0 400 200" width="100%" style="max-width:420px;border-radius:10px;background:#eef3f8">
<rect y="120" width="400" height="80" fill="#c9c9c9"/><line x1="0" y1="160" x2="400" y2="160" stroke="#fff" stroke-width="4" stroke-dasharray="20 14"/>
<rect x="20" y="40" width="70" height="80" fill="#d9c7a3"/><rect x="300" y="30" width="80" height="90" fill="#e3d4b5"/>
<g><rect x="150" y="120" width="110" height="28" rx="8" fill="#2f7a52"/><rect x="170" y="102" width="66" height="22" rx="6" fill="#2f7a52"/><rect x="178" y="106" width="22" height="14" fill="#cfe0f2"/><rect x="206" y="106" width="22" height="14" fill="#cfe0f2"/><circle cx="175" cy="150" r="11" fill="#333"/><circle cx="238" cy="150" r="11" fill="#333"/></g>
<rect x="110" y="70" width="6" height="52" fill="#555"/><polygon points="98,52 128,52 128,74 98,74" fill="#b0473a"/><text x="113" y="67" text-anchor="middle" font-size="10" fill="#fff" font-weight="700">STOP</text>
<circle cx="330" cy="100" r="8" fill="#34466b"/><rect x="324" y="108" width="12" height="16" fill="#34466b"/></svg>`}
DEMOS.mis={html:()=>`<div class="demo"><h4>Try it: can one word bend your memory?</h4><p style="font-size:.9rem">Look at the street scene for 4 seconds. Then answer one question, then a memory test.</p>
<div style="text-align:center"><div id="mstage"></div><button class="btn" id="mstart">Show the scene</button><div id="mres" style="margin-top:8px;font-size:.92rem;text-align:left"></div></div></div>`,
bind(){const st=document.getElementById('mstage'),r=document.getElementById('mres'),b=document.getElementById('mstart');
 b.onclick=()=>{b.style.display='none';r.innerHTML='';st.innerHTML=street();setTimeout(()=>{st.innerHTML='<p style="padding:30px;color:var(--muted)">…</p>';setTimeout(q1,700)},4000)};
 function q1(){st.innerHTML=`<p style="margin:8px 0"><b>Question:</b> Did the <b>blue</b> car stop at the sign?</p><button class="btn ghost" id="qy">Yes</button> <button class="btn ghost" id="qn">No</button>`;
  document.getElementById('qy').onclick=document.getElementById('qn').onclick=()=>{st.innerHTML='<p style="padding:20px;color:var(--muted)">Count backwards from 30 in threes in your head…</p>';setTimeout(q2,5000)}}
 function q2(){const cols=[['#2f7a52','green'],['#3a6fb0','blue'],['#2a8a8a','teal'],['#b0473a','red']];
  st.innerHTML=`<p style="margin:8px 0"><b>Memory test:</b> which colour was the car?</p>`+cols.map(c=>`<button class="btn ghost" data-c="${c[1]}" style="margin:3px;border-color:${c[0]};color:${c[0]}">● ${c[1]}</button>`).join('');
  st.querySelectorAll('button').forEach(x=>x.onclick=()=>{const c=x.dataset.c;
   r.innerHTML=`You chose <b>${c}</b>. The car was <b>green</b>. ${c==='green'?'Well resisted! In Loftus (1977) many people shifted towards the suggested colour.':'The question called it the <b>blue</b> car: that is inconsistent post-event information, exactly like Loftus (1977).'} The question was asked <b>after</b> the event, so this is a <b>storage</b> bias (distortion), and the new information interfering backwards is <b>retroactive interference</b>.`;
   st.innerHTML=street();b.style.display='inline-block';b.textContent='Again'})}}};

// L3: emotional Stroop
DEMOS.stroop={html:()=>`<div class="demo"><h4>Try it: the emotional Stroop</h4><p style="font-size:.9rem">Click the <b>ink colour</b> of each word. Ignore what it says. 16 words.</p>
<div style="text-align:center"><div id="swd" style="font:700 44px 'DM Sans';height:64px;margin:8px 0"></div><div id="sbt" style="display:none;gap:6px;justify-content:center;flex-wrap:wrap"></div><button class="btn" id="sst">Start</button><div id="sres" style="margin-top:10px;font-size:.92rem"></div></div></div>`,
bind(){const C=[['#c0392b','red'],['#2f7a52','green'],['#2c5aa0','blue'],['#8e44ad','purple']];
 const N=['TABLE','CHAIR','PATH','STREET','LAMP','DOOR','SPOON','WINDOW'],E=['DEATH','KILL','SHAME','MURDER','GRIEF','PANIC','TORTURE','CANCER'];
 const box=document.getElementById('sbt'),wd=document.getElementById('swd'),st=document.getElementById('sst');let tr=[],t=0,t0=0,data=[];
 box.innerHTML=C.map((c,i)=>`<button class="btn ghost" data-i="${i}" style="border-color:${c[0]};color:${c[0]}">${c[1]}</button>`).join('');
 st.onclick=()=>{st.style.display='none';box.style.display='flex';document.getElementById('sres').textContent='';
  tr=[...N.map(w=>({w,e:0})),...E.map(w=>({w,e:1}))].sort(()=>Math.random()-.5).map(x=>({...x,c:Math.floor(Math.random()*4)}));t=0;data=[];show()};
 function show(){if(t>=tr.length)return fin();wd.textContent='';setTimeout(()=>{wd.textContent=tr[t].w;wd.style.color=C[tr[t].c][0];t0=performance.now()},250)}
 box.querySelectorAll('button').forEach(b=>b.onclick=()=>{if(!t0)return;data.push({rt:performance.now()-t0,e:tr[t].e,ok:+b.dataset.i===tr[t].c});t0=0;t++;show()});
 function fin(){box.style.display='none';wd.textContent='';st.style.display='inline-block';st.textContent='Again';const m=a=>Math.round(a.reduce((s,x)=>s+x.rt,0)/Math.max(1,a.length));
  const n=m(data.filter(x=>!x.e&&x.ok)),e=m(data.filter(x=>x.e&&x.ok));
  document.getElementById('sres').innerHTML=`Neutral words: <b>${n} ms</b> · Emotional words: <b>${e} ms</b> · difference <b>${e-n} ms</b><br>${e>n?'Emotional words slowed you down, as in Ben-Haim et al. (2016): emotion captured attention and hurt inhibitory control.':'No slowing this time; with 16 words the effect is noisy. In the study the emotional block was about 30 ms slower.'}`}}};

// L4: Russian blues triad
DEMOS.blues={html:()=>`<div class="demo"><h4>Try it: the triad task</h4><p style="font-size:.9rem">Click the bottom square that is <b>identical</b> to the top one. 16 trials. Then try it again while silently repeating “6-4-9-7-3” (verbal interference).</p>
<div style="text-align:center"><div id="bstage" style="height:190px"></div><button class="btn" id="bst">Start</button><div id="bres" style="margin-top:8px;font-size:.92rem;text-align:left"></div></div></div>`,
bind(){const sh=['#a9d4f5','#93c6f0','#7db8ea','#67a9e2','#529ad8','#3f8acb','#2f79bb','#2267a6','#185690','#10457a'];
 const st=document.getElementById('bst'),stage=document.getElementById('bstage');let tr=[],t=0,t0=0,data=[];
 st.onclick=()=>{st.style.display='none';document.getElementById('bres').innerHTML='';tr=[];
  for(let i=0;i<16;i++){const cross=i%2===0;let a;if(cross){a=3+Math.floor(Math.random()*2)}else{a=Math.random()<.5?Math.floor(Math.random()*3):6+Math.floor(Math.random()*3)}const b=a+(cross?2:1)-(cross?0:0);tr.push({a,b:Math.min(9,a+2),cross})}
  tr.sort(()=>Math.random()-.5);t=0;data=[];show()};
 function sq(c,id,big){return `<div ${id?`data-k="${id}"`:''} style="width:${big?70:70}px;height:70px;background:${c};border-radius:6px;cursor:${id?'pointer':'default'}"></div>`}
 function show(){if(t>=tr.length)return fin();const x=tr[t],m=Math.random()<.5?'a':'b',left=Math.random()<.5;const top=sh[x[m]],o=sh[x[m==='a'?'b':'a']];
  stage.innerHTML=`<div style="display:flex;justify-content:center;margin:6px 0">${sq(top)}</div><div style="display:flex;justify-content:center;gap:60px;margin-top:20px">${left?sq(top,'y')+sq(o,'n'):sq(o,'n')+sq(top,'y')}</div>`;t0=performance.now();
  stage.querySelectorAll('[data-k]').forEach(d=>d.onclick=()=>{data.push({rt:performance.now()-t0,ok:d.dataset.k==='y',cross:x.cross});t++;show()})}
 function fin(){stage.innerHTML='';st.style.display='inline-block';st.textContent='Again';const m=a=>Math.round(a.reduce((s,x)=>s+x.rt,0)/Math.max(1,a.length));
  const c=m(data.filter(x=>x.cross&&x.ok)),w=m(data.filter(x=>!x.cross&&x.ok));
  document.getElementById('bres').innerHTML=`“Cross-boundary” pairs (light vs dark blue, the goluboy/siniy border): <b>${c} ms</b> · same-category pairs: <b>${w} ms</b>. Accuracy ${Math.round(100*data.filter(x=>x.ok).length/data.length)}%.<br>In English there is no blue boundary, so English speakers showed no difference; Russian speakers were faster across the boundary, until verbal interference blocked their colour names. (This demo is only an illustration; the real study controlled the colour distances exactly.)`}}};

// L5: CRT
DEMOS.crt={html:()=>`<div class="demo"><h4>Try it: three reflection problems</h4><p style="font-size:.9rem">Type your first answer. Notice whether a number “pops up”.</p><div id="crtq"></div></div>`,
bind(){const Q=[['A pen and an eraser cost €1.20 in total. The pen costs €1.00 more than the eraser. How many cents does the eraser cost?',10,20,'Eraser x, pen x + 100: 2x + 100 = 120, so x = 10 cents. The intuitive 20 gives a total of €1.40.'],
 ['If 4 printers print 4 posters in 4 minutes, how many minutes do 50 printers need for 50 posters?',4,50,'Each printer makes one poster in 4 minutes, so 50 printers make 50 posters in 4 minutes.'],
 ['Moss on a pond doubles in size every day. It covers the whole pond on day 30. On which day did it cover half the pond?',29,15,'It doubles every day, so the day before full it was half: day 29.']];
 let i=0;const box=document.getElementById('crtq');
 function show(){if(i>=Q.length){box.innerHTML=`<p style="font-size:.92rem">These are new problems built like the CRT (Frederick, 2005). The fast answer is System 1; checking it is System 2. <button class="btn ghost" id="crtr">Again</button></p>`;document.getElementById('crtr').onclick=()=>{i=0;show()};return}
  box.innerHTML=`<p style="margin:6px 0"><b>${i+1}.</b> ${Q[i][0]}</p><input id="crti" inputmode="numeric" style="font:inherit;padding:8px;border:1px solid var(--line);border-radius:8px;width:110px"> <button class="btn" id="crtg">Check</button><div id="crtf" style="margin-top:8px;font-size:.92rem"></div>`;
  document.getElementById('crtg').onclick=()=>{const v=parseFloat(document.getElementById('crti').value);const q=Q[i];
   document.getElementById('crtf').innerHTML=(v===q[1]?'<b>Correct: System 2 checked it.</b> ':(v===q[2]?'<b>That is the System 1 answer.</b> ':'<b>Not quite.</b> '))+q[3]+` <button class="btn ghost" id="crtn">Next</button>`;
   document.getElementById('crtn').onclick=()=>{i++;show()}}}
 show()}};

// L5: belief-bias sorter
DEMOS.syll={html:()=>`<div class="demo"><h4>Try it: valid or invalid?</h4><p style="font-size:.9rem">Judge only the <b>logic</b>: does the conclusion necessarily follow? Ignore whether it is true.</p><div id="sylq"></div></div>`,
bind(){const S=[['All fish can swim. Some pets can swim. Therefore, some pets are fish.',0,'Invalid but believable: the swimming pets could all be dogs. Conflict!'],
 ['No birds are mammals. Some animals that fly are birds. Therefore, some animals that fly are not mammals.',1,'Valid and believable: no conflict.'],
 ['All things made of wood float. Some heavy anchors are made of wood. Therefore, some heavy anchors float.',1,'Valid but unbelievable: if the premises were true, the conclusion must follow. Conflict!'],
 ['All teachers are adults. Some adults are pilots. Therefore, some teachers are pilots.',0,'Invalid but believable: the pilots could all be non-teachers. Conflict!']];
 let i=0,sc=0;const box=document.getElementById('sylq');
 function show(){if(i>=S.length){box.innerHTML=`<p style="font-size:.92rem">Score: <b>${sc}/4</b>. The conflict items are where belief bias bites (Evans, 2003). <button class="btn ghost" id="sylr">Again</button></p>`;document.getElementById('sylr').onclick=()=>{i=0;sc=0;show()};return}
  box.innerHTML=`<p style="margin:6px 0"><b>${i+1}.</b> ${S[i][0]}</p><button class="btn ghost" data-v="1">Valid</button> <button class="btn ghost" data-v="0">Invalid</button><div id="sylf" style="margin-top:8px;font-size:.92rem"></div>`;
  box.querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{const ok=+b.dataset.v===S[i][1];if(ok)sc++;box.querySelectorAll('[data-v]').forEach(x=>x.disabled=true);
   document.getElementById('sylf').innerHTML=(ok?'<b>Right.</b> ':'<b>Not quite.</b> ')+S[i][2]+' <button class="btn ghost" id="syln">Next</button>';document.getElementById('syln').onclick=()=>{i++;show()}})}
 show()}};

// ---------------- PRACTICE / CARDS / BREATH ----------------
function renderPractice(){
  return head()+`<h2 style="margin-top:14px">Practice questions</h2><p class="lede">New questions in the style of the exam (4 options, 1 correct). Answer first; the explanation appears after you choose. <span class="score" id="qs"></span></p>`+
  L.quiz.map((q,i)=>`<div class="q" data-q="${i}"><div class="stem">${i+1}. ${q.s}</div>${q.o.map((o,j)=>`<button class="opt" data-j="${j}">${'abcd'[j]}) ${o}</button>`).join('')}<div class="why" id="w${i}"></div></div>`).join('')+
  `<button class="btn ghost" id="qreset">Reset answers</button>`;
}
function bindPractice(){let right=0,ans=0;
  document.querySelectorAll('.q').forEach(qd=>{const q=L.quiz[+qd.dataset.q];let answered=false;
    qd.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{if(answered)return;answered=true;ans++;const j=+b.dataset.j;
      qd.querySelectorAll('.opt')[q.a].classList.add('right');if(j!==q.a)b.classList.add('wrong');else right++;
      const w=document.getElementById('w'+qd.dataset.q);w.innerHTML=(j===q.a?'<b>Correct.</b> ':'<b>Not quite.</b> ')+q.w;w.classList.add('on');
      document.getElementById('qs').textContent=`Score: ${right} / ${ans}`})});
  document.getElementById('qreset').onclick=()=>render();
}
function renderCards(){const c=L.cards[cardIdx];return head()+`<h2 style="margin-top:14px">Flashcards</h2><p class="lede">Tap the card to flip it. ${cardIdx+1} / ${L.cards.length}</p>
 <div class="fc" id="fc"><div class="fcin"><div class="face front">${c[0]}</div><div class="face back">${c[1]}</div></div></div>
 <div class="nav"><button class="btn ghost" id="cprev">← Previous</button><button class="btn" id="cnext">Next →</button><button class="btn ghost" id="cshuf">Shuffle</button></div>`}
function bindCards(){document.getElementById('fc').onclick=e=>e.currentTarget.classList.toggle('flip');
 document.getElementById('cprev').onclick=()=>{cardIdx=(cardIdx-1+L.cards.length)%L.cards.length;render()};
 document.getElementById('cnext').onclick=()=>{cardIdx=(cardIdx+1)%L.cards.length;render()};
 document.getElementById('cshuf').onclick=()=>{L.cards.sort(()=>Math.random()-.5);cardIdx=0;render()}}
function renderBreath(){return head()+`<h2 style="margin-top:14px">The lecture in one breath</h2><div class="breath">${L.breath.map(p=>`<p>◆ ${p}</p>`).join('')}<p class="hook" style="margin-top:14px">${L.hook||''}</p></div>`}

function render(){
  const m=document.getElementById('main');
  if(mode==='slides'){m.innerHTML=renderSlides();bindSlides()}
  if(mode==='practice'){m.innerHTML=renderPractice();bindPractice()}
  if(mode==='cards'){m.innerHTML=renderCards();bindCards()}
  if(mode==='breath'){m.innerHTML=renderBreath()}
  renderSide();
}
window.addEventListener('hashchange',()=>{const h=(location.hash.match(/^#(l[1-5])/)||[])[1];if(h&&h!==cur)switchLec(h)});
if(!LECS[cur])cur='l1';L=LECS[cur];done=store.get('ll_done_'+cur,{});render();
