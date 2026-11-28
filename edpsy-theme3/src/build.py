import re,os
src=open('wow1_pinned.html',encoding='utf-8').read()
lines=src.split('\n')
head='\n'.join(lines[:244])
s1='\n'.join(lines[1912:2042])
s2=lines[2042:4556]
def between(text,a,b):
    i=text.index(a); j=text.index(b,i); return text[i:j]
deck=between(s1,"const host=$('#storyDeck');","/* ---------- tutorial self-check ---------- */")
nav=between(s1,"/* ---------- navigation ---------- */","</script>")
script1=(open('script1.src.js',encoding='utf-8').read()+deck+nav).replace('wow1_gotst','edpsy3_gotst')
J='\n'.join
L=lambda a,b:J(s2[a-1:b])
prelude="""/* ================= WALK-THROUGH MODULE (reading walk-throughs) ================= */
(function(){
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const store={get(k,d){try{const v=localStorage.getItem('edpsy3_'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('edpsy3_'+k,JSON.stringify(v))}catch(e){}}};
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const ORDER=['r-srl','r-read','r-sct'];
const NEXTL={'r-srl':'Next reading: Self-regulated learning in reading →','r-read':'Next reading: Social cognitive perspective →','r-sct':'Put it together: compare and apply →'};
const TT={},ZERO={},GLOSS={};
"""
eng=(L(10,10)+'\n'+L(13,33)).replace("window.wowShow(id==='lg2'?'nut':(ORDER[ORDER.indexOf(id)+1]||'lg'))","window.wowShow(ORDER[ORDER.indexOf(id)+1]||'apply')")
assert "'apply')" in eng
full=J(s2)
ttcode=between(full,"setTimeout(()=>$$('.walk').forEach(w=>{const id=w.id.slice(2);$$('.step',w).forEach((st,i)=>{const d=TT[","/* ---------- tables and figures from the readings ---------- */")
a1="const vq=st.querySelector('.vq');if(vq&&d.fit&&!vq.querySelector('.fit')){const f=document.createElement('div');f.className='fit';f.innerHTML='↳ <b>How it fits the theme:</b> '+d.fit;vq.appendChild(f)}"
assert a1 in ttcode
ttcode=ttcode.replace(a1,"if(d.fit)st.querySelectorAll('.vq').forEach(vq=>{if(vq.querySelector('.fit'))return;const f=document.createElement('div');f.className='fit';f.innerHTML='↳ <b>How it fits the theme:</b> '+d.fit;vq.appendChild(f)});")
assert "if(!anchor)return;" in ttcode and "wrap.innerHTML=h;anchor.after(wrap)" in ttcode
ttcode=ttcode.replace("if(!anchor)return;","").replace("wrap.innerHTML=h;anchor.after(wrap)","wrap.innerHTML=h;if(anchor)anchor.after(wrap);else{const g=st.querySelector(':scope>.gotrow')||st.querySelector(':scope>.snav');if(g)g.before(wrap);else st.appendChild(wrap)}")
# V2EXTRAS: steps marked data-v2 keep only Think of it like + Exam tip
a=" h+='<div class=\"chipbar\">"
assert a in ttcode
ttcode=ttcode.replace(a," if(st.dataset.v2){h+='<div class=\"chipbar\"><span class=\"tapl\">Tap to open ▸</span><button class=\"cbtn\" type=\"button\" data-td=\"'+k+'-a\" aria-expanded=\"false\">🧠 Think of it like…</button><button class=\"cbtn\" type=\"button\" data-td=\"'+k+'-b\" aria-expanded=\"false\">✎ Exam tip</button></div><div class=\"tdrawer\" id=\"td-'+k+'-a\">🧠 '+d.think+'</div><div class=\"tdrawer\" id=\"td-'+k+'-b\">✎ '+d.tip+'</div>';wrap.innerHTML=h;if(anchor)anchor.after(wrap);else{const g=st.querySelector(':scope>.gotrow')||st.querySelector(':scope>.snav');if(g)g.before(wrap);else st.appendChild(wrap)}return}\n"+a,1)
helpers=L(405,445)
scenes='\n'.join(open(f,encoding='utf-8').read() for f in ['scenes.js','scenes2.js','scenes3.js','scenes4.js'] if os.path.exists(f))
side=L(1423,1431)
gl=between(full,"let gpop=document.getElementById('gpop')","/* ---------- From zero")
zero=between(full,"$$('.walk').forEach(w=>{const id=w.id.slice(2);$$('.step',w).forEach((st,i)=>{const z=ZERO[","/* ---------- My notebook").replace("t.closest('#w-r-craft,#w-r-play')","t.closest('#w-r-srl,#w-r-read,#w-r-sct')")
assert '#w-r-srl' in zero
# TEACHV2: question headers, 'What this step answers' opener
a="if(zp){ps=[zp].concat(ps);L=['🧭 From zero'].concat(L)}"
assert a in zero
zero=zero.replace(a,"if(zp){ps=[zp].concat(ps);L=[zp.classList.contains('qstart')?'🧭 What this step answers':'🧭 From zero'].concat(L)}")
b="pg.querySelector('.pl span').textContent=L[i];"
assert b in zero
zero=zero.replace(b,b+"pg.querySelector('.pl').classList.toggle('q',/\\?$/.test(L[i]));")
V2CSS='''.pager .pl.q{flex-wrap:nowrap;align-items:flex-start}.pager .pl.q span{font-family:'Cormorant Garamond',serif;text-transform:none;letter-spacing:0;font-size:1.32rem;line-height:1.2;color:var(--navy);font-weight:700}
.pager .pg .ans{display:block;background:var(--pgold);border-left:4px solid var(--gold);border-radius:10px;padding:9px 13px;margin:0 0 12px;font-weight:600;color:var(--ink)}
.pager .pg .soth{display:block;margin-top:12px;padding-top:10px;border-top:1px dashed var(--line)}
.pager .pg .look{display:block;margin-top:10px;background:var(--blue);border-radius:10px;padding:7px 12px;font-size:.95rem}
.pager .pg .bridge{display:block;margin-top:10px;color:var(--dgold);font-weight:600;font-size:.95rem}
.pager .pg.qstart{background:transparent;padding:0}.pager .pg .qq{display:block;font-family:'Cormorant Garamond',serif;font-size:1.38rem;line-height:1.25;font-weight:700;color:var(--navy);margin:0 0 12px;padding:12px 14px;background:var(--pgold);border-radius:12px}
.pager .pg .rm{display:flex;flex-direction:column;gap:6px;margin:12px 0 4px}.pager .pg .rm>b{margin-bottom:2px}.pager .pg .rm>span{display:block;background:#fff;border:1px solid var(--line);border-radius:10px;padding:7px 11px;font-size:.96rem}
.pager .pg .rm>span>i{font-style:normal;min-width:22px;height:22px;margin-right:8px;vertical-align:1px;border-radius:50%;background:var(--navy);color:#fff;display:inline-flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:700}
.qguide{background:#fff;border:1px solid var(--line);border-left:4px solid var(--navy);border-radius:12px;padding:10px 14px;margin:10px 0 6px;font-size:.95rem;line-height:1.5}.qguide>b{display:block;color:var(--navy);margin-bottom:4px}.qguide ol{margin:0;padding-left:1.2em}.qguide li{margin:3px 0}
.pager .pg.recap .rm>span>i{background:var(--ok)}
.pager .pg .rm.tl>span>i{min-width:46px;border-radius:8px;padding:0 6px;background:var(--gold)}
'''
head=head.replace('</style>',V2CSS+'</style>',1)
nb="""/* ---------- My notebook (assets/notebook.js, private, in this browser only) ---------- */
const NBSHORT={start:'Start here','r-srl':'Reading 1 · Self-regulation and learning','r-read':'Reading 2 · Self-regulated learning in reading','r-sct':'Reading 3 · Social cognitive perspective',apply:'Compare and apply'};
window.SezNotebookHere=function(){const pn=document.querySelector('.panel.on');if(!pn)return null;const id=pn.id.slice(2),steps=$$('.step',pn),on=pn.querySelector('.step.on');
 let label='Theme 3 · '+(NBSHORT[id]||id),hash=id;if(on){label+=' · '+on.dataset.t;hash=id+'-'+(steps.indexOf(on)+1)}else if(id==='start'){const t=$('#stTitle');if(t&&t.textContent)label+=' · '+t.textContent}
 return {label,hash,course:'Educational Psychology'}};
"""
nbtail=full[full.index("window.SezNotebookGo=function"):]
script2=J([prelude,eng,ttcode,helpers,scenes,side,gl,zero,nb,nbtail])
body=open('body.html',encoding='utf-8').read()
extra=''.join(open(f,encoding='utf-8').read() for f in ['body2.html','body3.html','body4.html','body5.html'] if os.path.exists(f))
assert '<div id="readingPanels"></div>' in body
body=body.replace('<div id="readingPanels"></div>',extra+'\n<div id="readingPanels"></div>')
head=head.replace('<title>World of Work · Theme 1</title>','<title>Theme 3 · Self-regulation and metacognition</title>')
head=re.sub(r'<meta name="description" content="[^"]*">','<meta name="description" content="Educational Psychology Theme 3: Self-regulation and metacognition. The readings as interactive walk-throughs: scenes to act on, teaching text in short cards, traps and exam-style questions.">',head)
out=head+'\n'+body+'\n<script>\n'+script1.rstrip()+'\n'
if not out.rstrip().endswith('</script>'): out+='</script>\n'
out+='<script>\n'+script2.rstrip()+'\n'
if not out.rstrip().endswith('</script>'): out+='</script>\n'
out+='<script src="https://sezsaracoglu-lab.github.io/dashshboard-/assets/sitenav.js" defer></script>\n</body></html>\n'
os.makedirs('/home/claude/dashshboard-/edpsy-theme3',exist_ok=True)
open('/home/claude/dashshboard-/edpsy-theme3/index.html','w',encoding='utf-8').write(out)
print('built',len(out))
