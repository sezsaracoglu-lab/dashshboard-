// Reads the scene files and writes their checked text (cards, answers, explanations, extras, teaching extras, glossary) to JSON for the Word notes.
const fs=require('fs'),path=require('path');
const REC={},TT={},GLOSS={};
const SEQ=(id,out,C)=>{REC[id]=C};const shuf=a=>a,mid='',BX=()=>'',TL=()=>'',T=()=>'',Q=()=>'',$=()=>null,$$=()=>[];
const files=fs.readdirSync(__dirname).filter(f=>/^scenes\d*\.js$/.test(f)).sort();
eval(files.map(f=>fs.readFileSync(path.join(__dirname,f),'utf8')).join('\n'));
const out={scenes:{},tt:TT,gloss:GLOSS};
for(const id in REC){const C=REC[id];out.scenes[id]={title:C.title,hook:C.hook,end:C.end,endOut:C.endOut,extras:C.extras||[],rounds:C.rounds.map(r=>({c:r.c,q:r.q||'',a:r.o?r.o[0].join(' '):'',say:r.say}))}}
fs.writeFileSync(process.argv[2],JSON.stringify(out));console.log(Object.keys(out.scenes).length,'scenes',Object.keys(TT).length,'tt',Object.keys(GLOSS).length,'gloss');
