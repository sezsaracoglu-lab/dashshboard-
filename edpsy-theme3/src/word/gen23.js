const fs=require('fs');const D=require('docx');
const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,ShadingType,BorderStyle,AlignmentType,ImageRun,HeadingLevel,PageBreak,Footer,PageNumber,LevelFormat}=D;
const dom=JSON.parse(fs.readFileSync('dom_'+(process.argv[2])+'.json'));const {scenes,TT,GLOSS,gk}=JSON.parse(fs.readFileSync('scenes.json'));
const NAVY='1F2A44',GOLD='B8913A',DGOLD='7A5B16',GREY='6B7280',RED='8A2F24',GREEN='2F6B3A',F='Garamond',W=9026;
const RID=process.argv[2]||'r-srl';
const CFG={
 'r-read':{n:'2',kicker:'EDUCATIONAL PSYCHOLOGY  ·  THEME 3  ·  READING 2',title:'Self-Regulated Learning in Reading',sub:'How well do readers judge their own understanding, and what helps?',cite:'Thiede, K. W., & de Bruin, A. B. H. (2017). Self-regulated learning in reading. In D. H. Schunk & J. A. Greene (Eds.), Handbook of self-regulation of learning and performance (2nd ed., pp. 124–137). Taylor & Francis.',
  meta:['Self-Regulated Learning in Reading: Monitoring, Its Accuracy, and How to Improve It','Thiede, K. W., & de Bruin, A. B. H. (2017). Self-regulated learning in reading. Chapter 8 in the Handbook of Self-Regulation of Learning and Performance (2nd ed.), pp. 124–137.','How accurately do readers judge their own comprehension, why are they so often wrong, what improves their judgments, and does that improve learning?'],
  foot:'Educational Psychology · Theme 3 · Reading 2 · Self-regulated learning in reading · ',out:'Theme3_Reading2_SRL_in_Reading_Notes.docx',grp:'B'},
 'r-sct':{n:'3',kicker:'EDUCATIONAL PSYCHOLOGY  ·  THEME 3  ·  READING 3',title:'The Social Cognitive Perspective of Self-Regulation',sub:'Person, behaviour and environment: how a learner steers herself',cite:'Usher, E. L., & Schunk, D. H. (2017). Social cognitive theoretical perspective of self-regulation. In D. H. Schunk & J. A. Greene (Eds.), Handbook of self-regulation of learning and performance (2nd ed., pp. 19–35). Taylor & Francis.',
  meta:['Social Cognitive Theoretical Perspective of Self-Regulation','Usher, E. L., & Schunk, D. H. (2017). Social cognitive theoretical perspective of self-regulation. Chapter 2 in the Handbook of Self-Regulation of Learning and Performance (2nd ed.), pp. 19–35.','How does social cognitive theory explain self-regulation, how does it develop, which components feed it, and how can teachers support it?'],
  foot:'Educational Psychology · Theme 3 · Reading 3 · Social cognitive perspective · ',out:'Theme3_Reading3_Social_Cognitive_Notes.docx',grp:'C'}}[RID];
const BL={[RID]:CFG.n};
const emo=/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}\u{2B00}-\u{2BFF}\u{2190}-\u{21FF}\u{2460}-\u{24FF}]/gu;
function clean(s,blk){s=String(s).replace(/&nbsp;/g,' ').replace(/—/g,',');
 s=s.replace(/In the picture:[^.]*\.( That is why the picture[^.]*\.)?/g,'').replace(/ and the short labels before you tap are ours/g,' and the short labels are ours').replace(/Each study in the scene tests one link\./g,'Each study in the table tests one link.').replace(/In the picture we have paired/g,'We have paired').replace(/ \(the exact wording is in the picture\)/g,'').replace(/ ?\(tap the chip at the end for more\)/g,'').replace(/Tap "[^"]*" for the authors' full list\. ?/g,'');
 if(blk){s=s.replace(/\b[Ss]teps (\d+) and (\d+)\b/g,(m,a,b)=>`lectures ${blk}.${a} and ${blk}.${b}`).replace(/\b([Ss])tep (\d+)\b/g,(m,c,a)=>`lecture ${blk}.${a}`)}
 s=s.replace(/\b[Tt]he (second|third) tab\b/g,'The next section').replace(/\((second|third) tab\)/g,'(next section)').replace(/of tab ③ in /g,'of the third section of ').replace(/\b[Tt]he next tab\b/g,'The next section').replace(/\bthis last tab\b/g,'this last section').replace(/\bnext tab\b/g,'next section').replace(/\bOne tab remains\b/g,'One section remains').replace(/walk-throughs?/g,'notes').replace(/\bThe final step\b/g,'The final part').replace(/\bThe next (three|five|two) steps\b/g,'The next $1 lectures').replace(/The pairing into steps is ours/g,'The pairing into lectures is ours').replace(/\bNext step: /g,'Next lecture: ').replace(/\bThe step also shows\b/g,'The lecture also shows').replace(/\bthe next (two|three|five) steps\b/g,'the next $1 lectures').replace(/\bThis step\b/g,'This lecture').replace(/\bthis step\b/g,'this lecture').replace(/\bThe last step\b/g,'The last part').replace(/\bThe next step\b/g,'The next lecture').replace(/\bnext step\b/g,'next lecture').replace(/\bone step per table\b/g,'one lecture per table').replace(/\bone step for each\b/g,'one lecture for each');
 return s.replace(emo,'').replace(/\s+/g,' ').replace(/ ([.,;:])/g,'$1').trim()}
function cut(html,max){const parts=String(html).split(/(?<=[a-z0-9)"][.!?])\s+(?=[A-Z(<])/);let out='';for(const p of parts){if(out&&(out.length+p.length)>max)break;out+=(out?' ':'')+p}
 const ob=(out.match(/<b[ >]/g)||[]).length-(out.match(/<\/b>/g)||[]).length;for(let k=0;k<ob;k++)out+='</b>';const oi=(out.match(/<i>/g)||[]).length-(out.match(/<\/i>/g)||[]).length;for(let k=0;k<oi;k++)out+='</i>';return out}
function runs(html,blk,o={}){html=clean(html,blk);const out=[];let b=0,i=0;
 html.split(/(<[^>]+>)/).forEach(tok=>{if(!tok)return;if(tok[0]==='<'){const t=tok.toLowerCase();if(/^<b[ >]/.test(t))b++;else if(t==='</b>')b=Math.max(0,b-1);else if(/^<i[ >]/.test(t))i++;else if(t==='</i>')i=Math.max(0,i-1);else if(t.startsWith('<br'))out.push(new TextRun({text:' ',font:F,size:o.size||23}));return}
  const text=tok.replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"');
  out.push(new TextRun({text,font:F,size:o.size||23,bold:!!b||o.bold,italics:!!i||o.italics,color:o.color||(b?NAVY:undefined)}))});return out}
const P=(html,blk,o={})=>new Paragraph({children:runs(html,blk,o),spacing:{after:o.after??130,line:o.line||276},alignment:o.align,keepNext:o.keepNext,indent:o.indent});
const TXT=(t,o={})=>new Paragraph({children:[new TextRun({text:t,font:F,size:o.size||23,bold:o.bold,italics:o.italics,color:o.color})],spacing:Object.assign({before:o.before||0,after:o.after??120},(o.size||23)<=28?{line:276}:{}),alignment:o.align,keepNext:o.keepNext});
const H1=t=>new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun({text:clean(t),font:F,size:32,bold:true,color:NAVY})],spacing:{before:320,after:140},keepNext:true,border:{bottom:{style:BorderStyle.SINGLE,size:8,color:GOLD,space:4}}});
const H2=t=>new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun({text:clean(t),font:F,size:26,bold:true,italics:true,color:GOLD})],spacing:{before:220,after:100},keepNext:true});
const nb={style:BorderStyle.NONE,size:0,color:'FFFFFF'};
function box(title,fill,edge,kids){return [new Table({width:{size:W,type:WidthType.DXA},columnWidths:[W],rows:[new TableRow({cantSplit:false,children:[new TableCell({width:{size:W,type:WidthType.DXA},shading:{type:ShadingType.CLEAR,fill,color:'auto'},margins:{top:110,bottom:90,left:170,right:170},borders:{top:nb,bottom:nb,right:nb,left:{style:BorderStyle.SINGLE,size:24,color:edge}},children:[TXT(title,{bold:true,color:edge,size:23,after:70,keepNext:true}),...kids]})]})]}),TXT('',{after:60,size:8})]}
function table(rows,widths,o={}){const cb={style:BorderStyle.SINGLE,size:4,color:'D9D2C3'};const B={top:cb,bottom:cb,left:cb,right:cb};
 return [new Table({width:{size:W,type:WidthType.DXA},columnWidths:widths,rows:rows.map((r,ri)=>new TableRow({tableHeader:ri===0,cantSplit:false,children:r.map((c,ci)=>new TableCell({width:{size:widths[ci],type:WidthType.DXA},borders:B,margins:{top:60,bottom:60,left:100,right:100},shading:{type:ShadingType.CLEAR,color:'auto',fill:ri===0?NAVY:(ri%2?'FFFFFF':'FBF8F1')},children:[new Paragraph({children:ri===0?[new TextRun({text:clean(c),font:F,size:22,bold:true,color:'FFFFFF'})]:runs(c,o.blk,{size:22,bold:ci===0&&o.bold0}),spacing:{after:30,line:252}})]}))}))}),TXT('',{after:60,size:8})]}
function fig(img,ratio,cap,blk){const w=500,h=Math.round(w*ratio);return [new Paragraph({alignment:AlignmentType.CENTER,spacing:{before:80,after:40},keepNext:true,children:[new ImageRun({type:'png',data:fs.readFileSync(img),transformation:{width:w,height:h}})]}),P(cap,blk,{size:22,italics:true,color:GREY,align:AlignmentType.CENTER,after:140})]}
const body=[];const add=(...x)=>x.flat().forEach(e=>body.push(e));
/* ---------- cover ---------- */
add(TXT('',{after:1500}),TXT(CFG.kicker,{align:AlignmentType.CENTER,color:GOLD,bold:true,size:26,after:200}),TXT(CFG.title,{align:AlignmentType.CENTER,color:NAVY,bold:true,size:56,after:120}),TXT(CFG.sub,{align:AlignmentType.CENTER,color:NAVY,italics:true,size:30,after:500}),
 TXT('Lecture notes drawn from:',{align:AlignmentType.CENTER,color:GREY,size:24,after:120}),
 TXT(CFG.cite,{align:AlignmentType.CENTER,size:23,after:500}),
 TXT('Prepared for: Sezen',{align:AlignmentType.CENTER,color:NAVY,bold:true,size:28,after:120}),TXT('Educational Psychology, International Bachelor in Psychology, Year 2, Block 2',{align:AlignmentType.CENTER,color:GREY,size:24,after:60}),TXT('Erasmus University Rotterdam · 2026–2027',{align:AlignmentType.CENTER,color:GREY,size:24}),new Paragraph({children:[new PageBreak()]}));
/* ---------- professor's note ---------- */
const FRONT=JSON.parse(fs.readFileSync('front_'+RID+'.json'));
add(H1("Professor's note"));FRONT.note.forEach(p=>add(P(p)));
add(H1('Learning objectives'));add(P(FRONT.lgintro));add(table([['Learning goal','Where these notes answer it']].concat(FRONT.lg),[4200,4826],{bold0:true}));
/* ---------- key terms ---------- */
add(H1('Key terms: read these first'));
const names={'1':'READING 1 · Self-regulation and learning'};
[CFG.grp].forEach(b=>{add(table([['Term','Plain-English meaning']].concat(Object.keys(GLOSS).filter(k=>gk[k]===b).map(k=>[GLOSS[k][0],GLOSS[k][1]])),[2700,6326],{bold0:true}))});
/* ---------- blocks ---------- */
let figN=0;const onepage=[];
const META0={'r-srl':['Self-Regulation and Learning: Five Theories, the Research, and Two Interventions','Schunk, D. H., & Zimmerman, B. J. (2012). Self-regulation and learning. Chapter 3 in the Handbook of Psychology: Educational Psychology (2nd ed.), pp. 45–68.','What is self-regulated learning, how do five theories explain it, what do self-regulating students do, and can it be taught?']};
const META={[RID]:CFG.meta};
for(const rid of [RID]){const blk=BL[rid],steps=dom[rid],lect=steps,last=steps[steps.length-1],M=META[rid];
 add(new Table({width:{size:W,type:WidthType.DXA},columnWidths:[W],rows:[new TableRow({children:[new TableCell({width:{size:W,type:WidthType.DXA},shading:{type:ShadingType.CLEAR,fill:NAVY,color:'auto'},margins:{top:160,bottom:140,left:220,right:220},borders:{top:nb,bottom:{style:BorderStyle.SINGLE,size:18,color:GOLD},left:nb,right:nb},children:[TXT('READING '+blk,{color:'E9D9B4',bold:true,size:24,after:40}),TXT(M[0],{color:'FFFFFF',bold:true,size:40,after:80}),TXT('Source of these notes',{color:'E9D9B4',italics:true,size:22,after:30}),TXT(M[1],{color:'FFFFFF',size:22,after:30}),TXT(`Lectures ${blk}.1 to ${blk}.${lect.length}`,{color:'E9D9B4',size:22,after:0})]})]})]}),TXT('',{after:80,size:8}));
 add(P('<b>The question this reading answers.</b> '+M[2]));
 if(false)lect.forEach((s,i)=>add(new Paragraph({numbering:{reference:'story'+blk,level:0},children:runs(`<b>${blk}.${i+1}</b> ${s.h2}`,blk),spacing:{after:40,line:264}})));add(TXT('',{after:60,size:8}));
 lect.forEach((s,i)=>{const L=`${blk}.${i+1}`;add(H1(`${L}  ${s.h2}`));
  const multi=s.units.length>1;if(!multi&&s.vq)add(P('<i>This lecture answers: '+s.vq+'</i>',blk,{color:DGOLD,after:110}));
  s.units.forEach((U,ui)=>{if(multi){add(H2(`${L}.${ui+1}  ${clean(U.tab).replace(/^\d+\s*/,'')}`));if(U.vq)add(P('<i>This section answers: '+U.vq+'</i>',blk,{color:DGOLD,after:110}))}
   let ps=U.paras.slice();if(i<lect.length-1&&ps.length>2&&/^So /.test(ps[ps.length-1].replace(/<[^>]+>/g,'')))ps.pop();const firstN=Math.min(1,ps.length);
   ps.slice(0,firstN).forEach(p=>add(P(p,blk)));
   if(U.img){figN++;add(fig(U.img,U.ratio,`Figure ${figN}. `+clean(U.cap,blk).replace(/\(interactive\)/g,''),blk))}
   ps.slice(firstN).forEach(p=>add(P(p,blk)));
   if(U.tbl){add(TXT(clean(U.tbl.title),{bold:true,color:NAVY,after:60,keepNext:true}));add(table(U.tbl.rows,[3000,6026],{bold0:true,blk}))}
   if(U.box){const t=U.box;add(TXT(`Table from the chapter, in our words`,{bold:true,color:NAVY,after:60,keepNext:true}));add(table(t,[1700,2500,3126,1700],{bold0:true,blk}))}
   const sc=U.svg&&scenes[U.svg];
   if(sc&&false){const st=sc.rounds.filter(r=>/\b(19|20)\d{2}\b/.test(r.c.join(' ')));
    if(st.length){add(TXT('The studies, told as short stories',{bold:true,color:NAVY,after:60,keepNext:true}));add(table([['What they asked and did','What they found, and what it shows']].concat(st.map(r=>[clean(r.c.join(' '),blk),cut(r.say,300)])),[3300,5726],{blk}))}
    const ex=sc.extras.filter(e=>!/How the chapter is built|How to read Figure 1/.test(e[0]));
    if(ex.length){add(TXT('Also in this part of the reading',{bold:true,color:NAVY,after:60,keepNext:true}));ex.forEach(e=>add(P(`<b>${clean(e[0])}.</b> `+cut(e[1],230),blk)))}}
   if(U.trap)add(box('The trap','FBF1EE',RED,[P('<b>Mistake:</b> '+U.trap[0].replace(/^✗\s*/,''),blk,{size:22,after:60}),P('<b>Correct:</b> '+U.trap[1].replace(/^✓\s*/,''),blk,{size:22,after:20})]));
   if(false&&U.exq)add(box('Exam-style question','F7F0E1',DGOLD,[P(U.exq[0],blk,{size:22,after:60}),P(U.exq[1],blk,{size:22,after:20})]))});
  const t=TT[`${rid}-${i+1}`];
  if(t){onepage.push([`${blk}${i+1}`,clean(s.h2),t.key])}});
 /* end of block */
 add(H1(`Reading ${blk} in one minute`));last.wide.forEach(p=>add(P(p,blk)));
 if(last.verdict){add(table(last.verdict,last.verdict[0].length===5?[1500,1500,1900,2326,1800]:[2100,2100,2726,2100],{blk,bold0:true}))}
 if(last.gold)add(box('The authors\' conclusion','F7F0E1',GOLD,[P(last.gold,blk,{size:23,italics:true,after:20})]));
 if(false&&last.qc.length){add(TXT('Comprehension check',{bold:true,color:NAVY,after:60,keepNext:true}));last.qc.forEach(q=>{add(P('<b>'+q[0]+'</b>',blk,{after:40,keepNext:true}));add(P(q[1],blk,{indent:{left:300}}))})}
 if(false)add(P('<b>Think of it this way.</b> '+last.think,blk));
 if(last.conn)add(P('<b>Connection.</b> '+last.conn,blk));
}
add(H1('Reading '+CFG.n+' on one page'));add(P(FRONT.oneintro));
add(table([['','The idea','What it is, how it works, why it matters']].concat(onepage.map(r=>[r[0],r[1],r[2]])),[700,2700,5626],{bold0:true}));
add(box('Say it to a friend: the whole reading','F2F4F8',NAVY,[P(FRONT.friend,null,{size:23,after:20})]));
const doc=new Document({styles:{default:{document:{run:{font:F,size:23}},heading1:{run:{font:F,size:32,bold:true,color:NAVY},paragraph:{spacing:{before:320,after:140},keepNext:true}},heading2:{run:{font:F,size:26,bold:true,italics:true,color:GOLD},paragraph:{spacing:{before:220,after:100},keepNext:true}}}},
 numbering:{config:[CFG.n].map(b=>({reference:'story'+b,levels:[{level:0,format:LevelFormat.DECIMAL,text:'%1.',alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:420,hanging:320}},run:{font:F,size:23}}}]}))},
 sections:[{properties:{page:{size:{width:11906,height:16838},margin:{top:1300,right:1440,bottom:1300,left:1440}}},footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:CFG.foot,font:F,size:22,color:GREY}),new TextRun({children:[PageNumber.CURRENT],font:F,size:22,color:GREY})]})]})},children:body}]});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync(CFG.out,b);console.log('ok',b.length)});
