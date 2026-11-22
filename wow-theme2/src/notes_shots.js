// Plays every scene to its end and saves the finished picture for the Word notes.
const {chromium}=require('playwright');
(async()=>{const out=process.argv[3],b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:900},deviceScaleFactor:2});
 await p.goto(process.argv[2],{waitUntil:'domcontentloaded',timeout:60000});await p.waitForTimeout(1500);
 const ids=await p.evaluate(()=>[...document.querySelectorAll('.walk figure.fig svg[id]')].map(s=>s.id));
 for(const id of ids){
  await p.evaluate(id=>{const s=document.getElementById(id),st=s.closest('.step'),w=s.closest('.walk'),k=w.id.slice(2);window.wowShow(k);window.wowWalk(k,[...w.querySelectorAll('.step')].indexOf(st)+1);const pn=s.closest('.pane');if(pn)st.querySelector('.ptab[data-pane="'+pn.dataset.pane+'"]').click();
   const ck=g=>g.dispatchEvent(new MouseEvent('click',{bubbles:true}));for(let i=0;i<80;i++){if(s.querySelector('[data-k="again"]'))break;const nx=s.querySelector('[data-k="next"]');if(nx){ck(nx);continue}const o=s.querySelector('[data-k="o0"]')||s.querySelector('[data-k^="z"]');if(!o)break;ck(o)}},id);
  await p.waitForTimeout(250);const el=await p.$('#'+id);await el.scrollIntoViewIfNeeded();const bx=await el.boundingBox();
  await p.screenshot({path:`${out}/fig-${id}.png`,clip:{x:bx.x,y:bx.y,width:bx.width,height:bx.height*264/506}})}
 console.log(ids.length,'figures');await b.close()})();
