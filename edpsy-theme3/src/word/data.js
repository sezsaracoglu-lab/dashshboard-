// pull scene rounds, TT and GLOSS out of the fact-checked scene files
const fs=require('fs');const REG={},ORDER=[];
let src=['scenes.js','scenes2.js','scenes3.js'].map(f=>fs.readFileSync('/home/claude/t3/build/'+f,'utf8')).join('\n');
src=src.replace('function SEQ(id,outId,C){','function SEQ(id,outId,C){REG[id]=C;ORDER.push(id);return;');
const pre="const mid='';const T=()=>'';const $=()=>null,$$=()=>[];const esc=s=>s;const shuf=a=>a.slice();const TT={},ZERO={},GLOSS={};";
const fn=new Function('REG','ORDER',pre+src+';return {TT,GLOSS,ZERO}');
const r=fn(REG,ORDER);
const scenes={};for(const id of ORDER){const C=REG[id];scenes[id]={title:C.title,rounds:C.rounds.map(x=>({c:x.c,q:x.q||'',a:x.o?x.o[0].join(' '):'',say:x.say})),extras:C.extras||[],endOut:C.endOut}}
// which glossary keys belong to which file
const gk={};['scenes.js','scenes2.js','scenes3.js'].forEach((f,i)=>{const s=fs.readFileSync('/home/claude/t3/build/'+f,'utf8');const m=s.slice(s.lastIndexOf('Object.assign(GLOSS,{'));(m.match(/^([a-z]+):\[/gm)||[]).forEach(k=>gk[k.replace(':[','')]='ABC'[i])});
fs.writeFileSync('scenes.json',JSON.stringify({scenes,TT:r.TT,GLOSS:r.GLOSS,gk}));console.log(Object.keys(scenes).length,Object.keys(r.TT).length,Object.keys(r.GLOSS).length,Object.values(gk).join(''));
