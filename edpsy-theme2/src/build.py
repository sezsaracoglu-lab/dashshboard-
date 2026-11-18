import re,os
src=open('/home/claude/dashshboard-/wow-theme1/index.html',encoding='utf-8').read()
lines=src.split('\n')
head='\n'.join(lines[:244])
s1='\n'.join(lines[1912:2042])
s2=lines[2042:4556]
def between(text,a,b):
    i=text.index(a); j=text.index(b,i); return text[i:j]
deck=between(s1,"const host=$('#storyDeck');","/* ---------- tutorial self-check ---------- */")
nav=between(s1,"/* ---------- navigation ---------- */","</script>")
script1=(open('script1.src.js',encoding='utf-8').read()+deck+nav).replace('wow1_gotst','edpsy2_gotst')
J='\n'.join
L=lambda a,b:J(s2[a-1:b])
prelude="""/* ================= WALK-THROUGH MODULE (reading walk-throughs) ================= */
(function(){
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const store={get(k,d){try{const v=localStorage.getItem('edpsy2_'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('edpsy2_'+k,JSON.stringify(v))}catch(e){}}};
const esc=s=>String(s).replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const ORDER=['r-mot','r-sdt','r-prac'];
const NEXTL={'r-mot':'Next reading: Intrinsic and extrinsic motivation →','r-sdt':'Next reading: Instructional practices →','r-prac':'Back to Start here →'};
const TT={},ZERO={},GLOSS={};
"""
eng=(L(10,10)+'\n'+L(13,33)).replace("window.wowShow(id==='lg2'?'nut':(ORDER[ORDER.indexOf(id)+1]||'lg'))","window.wowShow(ORDER[ORDER.indexOf(id)+1]||'start')")
assert "'start')" in eng
full=J(s2)
ttcode=between(full,"setTimeout(()=>$$('.walk').forEach(w=>{const id=w.id.slice(2);$$('.step',w).forEach((st,i)=>{const d=TT[","/* ---------- tables and figures from the readings ---------- */")
a1="const vq=st.querySelector('.vq');if(vq&&d.fit&&!vq.querySelector('.fit')){const f=document.createElement('div');f.className='fit';f.innerHTML='↳ <b>How it fits the theme:</b> '+d.fit;vq.appendChild(f)}"
assert a1 in ttcode
ttcode=ttcode.replace(a1,"if(d.fit)st.querySelectorAll('.vq').forEach(vq=>{if(vq.querySelector('.fit'))return;const f=document.createElement('div');f.className='fit';f.innerHTML='↳ <b>How it fits the theme:</b> '+d.fit;vq.appendChild(f)});")
assert "if(!anchor)return;" in ttcode and "wrap.innerHTML=h;anchor.after(wrap)" in ttcode
ttcode=ttcode.replace("if(!anchor)return;","").replace("wrap.innerHTML=h;anchor.after(wrap)","wrap.innerHTML=h;if(anchor)anchor.after(wrap);else{const g=st.querySelector(':scope>.gotrow')||st.querySelector(':scope>.snav');if(g)g.before(wrap);else st.appendChild(wrap)}")
helpers=L(405,445)
scenes=open('scenes.js',encoding='utf-8').read()+'\n'+open('scenes2.js',encoding='utf-8').read()+(('\n'+open('scenes3.js',encoding='utf-8').read()) if os.path.exists('scenes3.js') else '')+'\n'+open('scenes4.js',encoding='utf-8').read()
side=L(1423,1431)
gl=between(full,"let gpop=document.getElementById('gpop')","/* ---------- From zero")
zero=between(full,"$$('.walk').forEach(w=>{const id=w.id.slice(2);$$('.step',w).forEach((st,i)=>{const z=ZERO[","/* ---------- My notebook").replace("t.closest('#w-r-craft,#w-r-play')","t.closest('#w-r-mot,#w-r-prac')")
assert '#w-r-mot' in zero
nb="""/* ---------- My notebook (assets/notebook.js, private, in this browser only) ---------- */
const NBSHORT={start:'Start here','r-mot':'Reading 1 · Motivation','r-sdt':'Reading 2 · Intrinsic and extrinsic motivation','r-prac':'Reading 3 · Instructional practices'};
window.SezNotebookHere=function(){const pn=document.querySelector('.panel.on');if(!pn)return null;const id=pn.id.slice(2),steps=$$('.step',pn),on=pn.querySelector('.step.on');
 let label='Theme 2 · '+(NBSHORT[id]||id),hash=id;if(on){label+=' · '+on.dataset.t;hash=id+'-'+(steps.indexOf(on)+1)}else if(id==='start'){const t=$('#stTitle');if(t&&t.textContent)label+=' · '+t.textContent}
 return {label,hash,course:'Educational Psychology'}};
"""
nbtail=full[full.index("window.SezNotebookGo=function"):]
script2=J([prelude,eng,ttcode,helpers,scenes,side,gl,zero,nb,nbtail])
body=open('body.html',encoding='utf-8').read()
extra=open('body2.html',encoding='utf-8').read()+(open('body3.html',encoding='utf-8').read() if os.path.exists('body3.html') else '')+open('body4.html',encoding='utf-8').read()
assert '<div id="readingPanels"></div>' in body
body=body.replace('<div id="readingPanels"></div>',extra+'\n<div id="readingPanels"></div>')
head=head.replace('<title>World of Work · Theme 1</title>','<title>Theme 2 · Motivation</title>')
head=re.sub(r'<meta name="description" content="[^"]*">','<meta name="description" content="Educational Psychology Theme 2: Motivation. The readings as interactive walk-throughs: scenes to act on, teaching text in short cards, traps and exam-style questions.">',head)
out=head+'\n'+body+'\n<script>\n'+script1.rstrip()+'\n'
if not out.rstrip().endswith('</script>'): out+='</script>\n'
out+='<script>\n'+script2.rstrip()+'\n'
if not out.rstrip().endswith('</script>'): out+='</script>\n'
out+='<script src="https://sezsaracoglu-lab.github.io/dashshboard-/assets/sitenav.js" defer></script>\n</body></html>\n'
os.makedirs('/home/claude/dashshboard-/edpsy-theme2',exist_ok=True)
open('/home/claude/dashshboard-/edpsy-theme2/index.html','w',encoding='utf-8').write(out)
print('built',len(out))
