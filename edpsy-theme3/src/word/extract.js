const {chromium}=require('playwright');
const fs=require('fs');
(async()=>{const b=await chromium.launch();const pg=await b.newPage({viewport:{width:1400,height:1000},deviceScaleFactor:2});
await pg.route('**/*',r=>{const u=r.request().url();if(u.startsWith('file:'))r.continue();else r.abort()});
await pg.goto('file:///home/claude/dashshboard-/edpsy-theme3/index.html#start');await pg.waitForTimeout(700);
const out={};let n=0;
// story map picture
for(let i=0;i<2;i++){await pg.click('#stNx');await pg.waitForTimeout(80)}
await (await pg.$('#stSvg')).screenshot({path:'img_map.png'});
for(const rid of (process.argv[2]||'r-srl').split(',')){
 const cnt=await pg.evaluate(r=>document.querySelectorAll('#w-'+r+' .step').length,rid);const steps=[];
 for(let s=1;s<=cnt;s++){
  await pg.evaluate(a=>window.wowShow(a),rid+'-'+s);await pg.waitForTimeout(150);
  const info=await pg.evaluate(()=>{const st=document.querySelector('.panel.on .step.on');const tx=e=>e?e.innerHTML:'';
   const vqt=e=>{if(!e)return '';const c=e.cloneNode(true);c.querySelectorAll('.fit').forEach(x=>x.remove());return c.textContent.replace('❓','').replace('This step answers:','').trim()};
   const panes=[...st.querySelectorAll(':scope>.pane')];const units=panes.length?panes:[st];
   const tabs=[...st.querySelectorAll('.ptab')].map(x=>x.textContent);
   return {t:st.dataset.t,k:tx(st.querySelector('.shead .k')),h2:tx(st.querySelector('.shead h2')),vq:vqt(st.querySelector('.vq')),
    units:units.map((u,i)=>({tab:tabs[i]||'',vq:vqt(u.querySelector('.vq')),svg:(u.querySelector('.fig svg')||{}).id||'',hasfig:!!u.querySelector('.scr>.fig svg'),cap:tx(u.querySelector('figcaption')),
      paras:[...u.querySelectorAll('.teach p.pg:not(.zero)')].map(p=>p.innerHTML),
      trap:u.querySelector('.trapb')?[u.querySelector('.trapb .w').textContent,u.querySelector('.trapb .r').textContent]:null,
      exq:u.querySelector('.exq')?[u.querySelector('.exq summary span').textContent,u.querySelector('.exq p').innerHTML]:null,
      tbl:u.querySelector('.afterbox .verdict table')?{title:u.querySelector('.afterbox .verdict .eyebrow').textContent,rows:[...u.querySelectorAll('.afterbox .verdict table tr')].map(r=>[...r.children].map(c=>c.textContent))}:null,box:u.querySelector('details.box table')?[...u.querySelectorAll('details.box table tr')].map(r=>[...r.children].map(c=>c.textContent)):null})),
    verdict:st.querySelector(':scope>.verdict table')?[...st.querySelectorAll(':scope>.verdict table tr')].map(r=>[...r.children].map(c=>c.innerText.replace(/\n+/g,' · '))):null,
    gold:st.querySelector('.verdict .goldb')?st.querySelector('.verdict .goldb').textContent:(st.querySelector(':scope>.goldb')?st.querySelector(':scope>.goldb').textContent:''),
    wide:[...st.querySelectorAll('.teach.wide p')].map(p=>p.innerHTML),
    take:[...st.querySelectorAll(':scope>.tw table tr')].map(r=>[...r.children].map(c=>c.textContent)),
    lock:[...st.querySelectorAll('.endb .lock>div')].map(d=>d.textContent),think:(st.querySelector('.endb .think')||{}).textContent||'',
    qc:[...st.querySelectorAll('.endb details.qc')].map(d=>[d.querySelector('summary').textContent,d.querySelector('p').textContent]),
    conn:(()=>{const h=[...st.querySelectorAll('.endb h4')].find(x=>x.textContent.includes('Connection'));return h&&h.nextElementSibling?h.nextElementSibling.textContent:''})()}});
  for(let u=0;u<info.units.length;u++){const U=info.units[u];
   if(info.units.length>1){await pg.evaluate(i=>document.querySelectorAll('.panel.on .step.on .ptab')[i].click(),u);await pg.waitForTimeout(120)}
   if(!U.hasfig)continue;
   const sel=U.svg?('#'+U.svg):null;let el;
   if(sel){ // play scene to the end
    for(let k=0;k<70;k++){if(await pg.$(sel+' [data-k="again"]'))break;const nx=await pg.$(sel+' [data-k="next"]');if(nx){await nx.dispatchEvent('click');await pg.waitForTimeout(30);continue}
     const o=await pg.$(sel+' [data-k="o0"]')||await pg.$(sel+' [data-k^="z"]');if(!o)break;await o.dispatchEvent('click');await pg.waitForTimeout(30)}
    el=await pg.$(sel);const bb=await el.boundingBox();const vb=await pg.evaluate(s=>document.querySelector(s).viewBox.baseVal.height,sel);
    const top=258;const h=bb.width*(top+4)/640;
    U.img=`img_${rid}_${++n}.png`;await pg.screenshot({path:U.img,clip:{x:bb.x,y:bb.y,width:bb.width,height:h}});U.ratio=h/bb.width;
   }else{el=(await pg.$$('.panel.on .step.on .fig svg'))[0];const bb=await el.boundingBox();U.img=`img_${rid}_${++n}.png`;await el.screenshot({path:U.img});U.ratio=bb.height/bb.width}
  }
  steps.push(info)}
 out[rid]=steps}
fs.writeFileSync('dom_'+(process.argv[2]||'r-srl')+'.json',JSON.stringify(out));console.log('steps',Object.values(out).map(s=>s.length),'imgs',n);await b.close()})();
