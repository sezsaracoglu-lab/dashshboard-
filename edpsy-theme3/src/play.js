const {chromium}=require('playwright');
const W=+process.argv[2]||1400;
const SC=[[2,0,'mapScene'],[3,0,'opScene'],[4,0,'ipLoop'],[4,1,'ipStrat'],[5,0,'dvScene'],[5,1,'scScene'],[6,0,'triScene'],[6,1,'cyScene'],[6,2,'lvScene'],[7,0,'catScene'],[7,1,'glScene'],[7,2,'mnScene'],[8,0,'mdScene'],[8,1,'vbScene'],[9,0,'srsdScene'],[9,1,'refScene'],[10,0,'fdScene']];
const only=process.argv[3]?process.argv[3].split(','):null;
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:W,height:1000}});const errs=[];p.on('pageerror',e=>errs.push(e.message));p.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await p.route('**/sitenav.js',r=>r.abort());
for(const [st,pane,id] of SC){if(only&&!only.includes(id))continue;
 await p.goto('file:///home/claude/dashshboard-/edpsy-theme3/index.html#r-srl-'+st);await p.reload();await p.waitForTimeout(400);
 if(pane)await p.evaluate(pn=>{const s=document.querySelector('.panel.on .step.on');s.querySelector('.ptab[data-pane="'+pn+'"]').click()},pane);
 await p.waitForTimeout(150);const svg=await p.$('#'+id);await svg.scrollIntoViewIfNeeded();await svg.screenshot({path:`/tmp/t3/${id}_${W}_0.png`});
 let n=0,wrongs=0;for(let i=0;i<40;i++){const r=await p.evaluate(id=>{const s=document.getElementById(id);const ks=[...s.querySelectorAll('[data-k]')].map(g=>g.dataset.k);
   if(ks.includes('again'))return 'end';const cl=k=>s.querySelector('[data-k="'+k+'"]').dispatchEvent(new MouseEvent('click',{bubbles:true}));
   if(ks.includes('next')){cl('next');return 'next'}if(ks.includes('o0')){cl('o0');return 'o'}const z=ks.filter(k=>k[0]==='z');if(z.length){cl(z[0]);return 'z:'+z.join('|')}return 'none:'+ks.join(',')},id);
  if(r==='end'){n=i;break}if(r.startsWith('none')){console.log(id,'STUCK',r);break}if(r.startsWith('z'))wrongs++;
  if(i===1)await svg.screenshot({path:`/tmp/t3/${id}_${W}_1.png`})}
 await svg.screenshot({path:`/tmp/t3/${id}_${W}_end.png`});
 const out=await p.evaluate(id=>{const o=document.getElementById(id).closest('.scr').querySelector('.out');return o?o.textContent.slice(0,80):'no out'},id);
 console.log(id,'clicks',n,'zone-rounds',wrongs,'|',out)}
console.log('errors',errs.slice(0,5));await b.close()})();
