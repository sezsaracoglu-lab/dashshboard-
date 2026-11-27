const fs=require('fs');
const {Document,Packer,Paragraph,TextRun,Table,TableRow,TableCell,WidthType,ShadingType,AlignmentType,BorderStyle,HeadingLevel,Footer,PageNumber,LevelFormat}=require('docx');
const NAVY='2B3A5C',GOLD='B8923A',GREY='5D6472',SAGE='4F7A5A',CLAY='A8553D',F='Garamond';
const W=9026;
function runs(t,o={}){const out=[];t.split(/(\*\*[^*]+\*\*)/).forEach(s=>{if(!s)return;const b=s.startsWith('**');out.push(new TextRun({text:b?s.slice(2,-2):s,bold:b||o.bold,italics:o.italics,color:o.color,font:F,size:o.size||24}))});return out}
const P=(t,o={})=>new Paragraph({children:runs(t,o),spacing:{after:o.after??140,line:o.size>40?(o.size*13):300},alignment:o.align,keepNext:o.keepNext});
const H1=t=>new Paragraph({heading:HeadingLevel.HEADING_1,children:[new TextRun({text:t,font:F,size:34,bold:true,color:NAVY})],spacing:{before:360,after:120},keepNext:true});
const H2=t=>new Paragraph({heading:HeadingLevel.HEADING_2,children:[new TextRun({text:t,font:F,size:26,bold:true,color:GOLD})],spacing:{before:200,after:80},keepNext:true});
const Q=t=>new Paragraph({children:[new TextRun({text:'The question: ',bold:true,font:F,size:24,color:NAVY}),...runs(t,{italics:true})],spacing:{after:160},keepNext:true});
const BUL=t=>new Paragraph({numbering:{reference:'b',level:0},children:runs(t),spacing:{after:80,line:290}});
const brd={style:BorderStyle.SINGLE,size:4,color:'D9D3C4'};
function cell(t,w,fill,bold){return new TableCell({width:{size:w,type:WidthType.DXA},shading:fill?{type:ShadingType.CLEAR,color:'auto',fill}:undefined,margins:{top:80,bottom:80,left:110,right:110},borders:{top:brd,bottom:brd,left:brd,right:brd},children:[new Paragraph({children:runs(t,{size:22,bold}),spacing:{after:0,line:270}})]})}
function table(head,rows,ws){return new Table({width:{size:W,type:WidthType.DXA},columnWidths:ws,rows:[new TableRow({tableHeader:true,children:head.map((h,i)=>cell(h,ws[i],'E7EBF3',true))}),...rows.map(r=>new TableRow({cantSplit:true,children:r.map((c,i)=>cell(c,ws[i],i===0?'FBF8F1':undefined))}))]})}
function box(title,lines,fill,col){return new Table({width:{size:W,type:WidthType.DXA},columnWidths:[W],rows:[new TableRow({cantSplit:true,children:[new TableCell({width:{size:W,type:WidthType.DXA},shading:{type:ShadingType.CLEAR,color:'auto',fill},margins:{top:120,bottom:120,left:180,right:180},borders:{top:{style:BorderStyle.SINGLE,size:4,color:col},bottom:{style:BorderStyle.SINGLE,size:4,color:col},left:{style:BorderStyle.SINGLE,size:24,color:col},right:{style:BorderStyle.SINGLE,size:4,color:col}},children:[new Paragraph({children:[new TextRun({text:title,bold:true,font:F,size:23,color:col})],spacing:{after:60}}),...lines.map(l=>new Paragraph({children:runs(l,{size:23}),spacing:{after:60,line:280}}))]})]})]})}
const TRAP=(w,r)=>box('The trap',['✗ '+w,'✓ '+r],'FBECEA',CLAY);
const SP=()=>new Paragraph({children:[],spacing:{after:120}});
const C=[];const add=(...x)=>C.push(...x);

// ---------- cover ----------
add(new Paragraph({children:[],spacing:{after:1600}}),
 P('EDUCATIONAL PSYCHOLOGY  ·  THEME 3  ·  READING 2',{bold:true,color:GOLD,size:24,align:AlignmentType.CENTER,after:200}),
 P('Self-Regulated Learning in Reading',{bold:true,color:NAVY,size:52,align:AlignmentType.CENTER,after:120}),
 P('A teaching summary: the logic first, the studies in plain words',{italics:true,color:NAVY,size:28,align:AlignmentType.CENTER,after:600}),
 P('Summary of: Thiede, K. W., & de Bruin, A. B. H. (2017). Self-regulated learning in reading. In D. H. Schunk & J. A. Greene (Eds.), Handbook of self-regulation of learning and performance (2nd ed., pp. 124–137). Taylor & Francis.',{size:22,align:AlignmentType.CENTER,after:300}),
 P('Prepared for: Sezen',{color:GREY,size:22,align:AlignmentType.CENTER}),
 new Paragraph({pageBreakBefore:true,children:[]}));

// ---------- the story ----------
add(H1('The whole chapter in one story'),
 P('Think about how you study a reading. You read it, you ask yourself **"do I get this?"**, and if the answer is no you read it again. That small loop, checking and then acting on the check, is self-regulated learning in reading.'),
 P('The chapter makes one big point: **the loop is only as good as the check.** Most readers act sensibly on their judgment, but their judgment is often wrong. They feel they understood a text when they did not, so they stop too early or reread the wrong text.'),
 P('So the chapter asks four questions, and these notes follow them: **How do we measure** how good a reader\'s judgment is? **Why** is it so often wrong? **What helps** readers judge better? And **does better judging really lead to better learning?** It ends with what is still unknown and what teachers can do.'),
 table(['Part','The question','The answer in one line'],[
  ['2.1','What is self-regulated reading?','Monitor your understanding, then regulate: reread or stop.'],
  ['2.2','How is accuracy measured?','Two kinds: is your confidence the right size, and can you tell which text you know best?'],
  ['2.3','Why do we misjudge?','We judge by clues, and many clues (like "it felt easy") mislead.'],
  ['2.4','Fix 1','Test yourself before judging, but after a delay.'],
  ['2.5','Fix 2','Read in a way that builds deep understanding: map it, explain it, expect a deep test.'],
  ['2.6','Does it pay?','Yes: better judgments lead to better rereading choices and more understanding.'],
  ['2.7','What now?','Teachers should train the judgment, not the rereading.']],[900,3200,4926]));

// ---------- 2.1 ----------
add(H1('2.1  The reading loop and its weak link'),Q('What does self-regulated learning look like in reading, and why does the accuracy of monitoring matter so much?'),
 H2('The idea'),
 P('Think of a car\'s fuel gauge. You decide when to fill up by looking at the gauge. If the gauge is wrong, you stop at the wrong moment or run dry, however good a driver you are.'),
 P('Reading works the same way. The reader **monitors** her understanding ("do I get this yet?") and **regulates** her study on that basis: she rereads, asks for help, or stops when the gauge says "understood". Many models of self-regulated learning describe exactly this interplay of monitoring and regulation.'),
 H2('Why the check must be accurate'),
 P('If her monitoring is wrong, two things go wrong:'),
 BUL('she **stops too early**, because she thinks she understood a text she did not;'),
 BUL('she **rereads the wrong text**, spending time on what she already knows.'),
 P('How well a reader\'s judgments match her real understanding is called **metacomprehension accuracy**. The rest of the chapter is about this one thing.'),
 TRAP('Readers who feel they understood a text usually did; the problem is that they do not reread.','The chapter says the opposite: readers reread sensibly, but their sense of understanding is often wrong, even in college.'));

// ---------- 2.2 ----------
add(H1('2.2  Measuring accuracy: two different kinds'),Q('How do researchers measure how well readers judge their own understanding?'),
 H2('How it is measured'),
 P('The standard method (Glenberg & Epstein, 1985) is simple: students read several short texts, rate how well they understood each one, and then answer an **inference question** about each text (a question whose answer is not written in the text but follows from it). Accuracy is how well the ratings match the scores. (The analogies in these notes, like the baking contest below, are ours.)'),
 H2('The idea: how much versus which one'),
 P('Imagine two judges at a baking contest. One gives every cake 3 points too many, but ranks the cakes in exactly the right order. The other gets the average score right, but ranks the cakes in exactly reverse order. Each is accurate in a different way.'),
 BUL('**Absolute accuracy:** is your confidence the right **size**? Measured as **bias**: your average prediction minus your average score. Positive means over-confident.'),
 BUL('**Relative accuracy:** can you tell **which** texts you understood better? Measured as an **intra-individual correlation**: a correlation computed within one person, between her ratings and her scores across her texts (+1 is perfect, −1 is exactly backwards).'),
 H2('Table 8.1 (p. 125): four students, five texts'),
 P('All four students predicted the same scores for five texts: 7, 7, 6, 5 and 3.',{keepNext:true}),
 table(['No.','Actual scores','Bias','Relative','In plain words'],[
  ['1','7, 7, 6, 5, 3','0','+1.0','Right on both counts.'],
  ['2','4, 4, 3, 2, 0','+3','+1.0','3 points too confident on every text, but she knows which text is best.'],
  ['3','3, 5, 6, 7, 7','0','−1.0','No bias on average, but her order is exactly backwards: she would reread the wrong texts.'],
  ['4','0, 2, 3, 4, 4','+3','−1.0','Wrong on both counts.']],[800,1900,1200,1250,3876]),SP(),
 P('**Why keep them apart?** The two are theoretically **orthogonal** (independent of each other), so a factor can change one and not the other: knowing a lot about the topic (domain knowledge) affected absolute but not relative accuracy (Griffin, Jee & Wiley, 2009). From here on the chapter studies **relative accuracy**. Our reasoning for why that suits rereading: to choose what to reread, you only need to know which text you understood least.'),
 TRAP('If your average prediction equals your average score, your monitoring is accurate.','That is only absolute accuracy. Student 3 has no bias at all, yet her ranking is completely reversed.'));

// ---------- 2.3 ----------
add(H1('2.3  Why we misjudge: we judge by clues'),Q('On what do readers base their judgment of understanding, and which clues predict the test?'),
 H2('The idea'),
 P('You cannot look inside your own head, so you **judge your understanding from clues**, the way you might judge a cake by its icing. The icing can look perfect while the inside is not baked. Koriat\'s (1997) **cue-utilization framework** says exactly this: judgments are inferred from cues, and they are accurate only when the cues really predict the test.'),
 P('In the exam you will meet the word **cue**: it simply means clue. A cue is **diagnostic** when it really predicts test performance.'),
 P('To know which cues are diagnostic, you need a second theory, one about comprehension itself (Weaver, 1990). Rawson, Dunlosky and Thiede (2000) therefore combined the cue framework with a model of how we understand texts.'),
 H2('Which clues are good? Three levels of understanding'),
 P('Kintsch\'s (1988) **construction-integration model** says we understand a text at three levels:'),
 BUL('the **surface**: the words and phrases themselves;'),
 BUL('the **textbase**: the ideas in the text and how they link;'),
 BUL('the **situation model**: the ideas connected to what you already know, so you can draw conclusions.'),
 P('Comprehension tests depend mainly on the **situation model** (McNamara et al., 1996). So the good clue is "**can I explain this?**"; a poor clue is "**it felt easy to read**".'),
 H2('The evidence'),
 table(['Study','What they did','What they found','In plain words'],[
  ['Thiede et al. (2010), cue reports','Asked college students which clues they used to rate their understanding. Answers fell into five types: explaining, recalling, prior knowledge, interest, features of the text.','Students who judged by whether they could understand or explain the text were more accurate; those who judged by text features were less accurate.','"Can I explain it?" works. "It was short and easy" misleads.'],
  ['van Loon et al. (2014)','Measured each cue\'s **diagnosticity** (how well it predicts the test) and its **utilization** (how strongly it drives the judgment).','Differences in accuracy were explained more by utilization than by diagnosticity.','Accuracy depends mostly on which clues readers lean on.']],[1500,2700,2700,2126]),SP(),
 P('**So what:** to help readers judge better, steer them to the right clue. The chapter shows two ways, in 2.4 and 2.5.'),
 TRAP('Remembering lots of details shows you understood the text.','Recall is a separate clue. Tests of understanding depend on the situation model, so the best clue is whether you can explain it.'));

// ---------- 2.4 ----------
add(H1('2.4  Fix 1: test yourself, but later'),Q('How does retrieving information before judging improve accuracy, and why only after a delay?'),
 H2('The idea'),
 P('The **modified-feedback hypothesis** (Glenberg et al., 1987) says your judgment of understanding reflects how much you can **retrieve** (get back out of memory) at the moment you judge. So: before rating your understanding, try to retrieve the text: write a short summary, five keywords, or complete a cause-and-effect diagram. What comes back is a fairer clue than a feeling.'),
 H2('Why the timing matters'),
 P('**Activation theories** of reading (Fletcher, van den Broek & Arthur, 1996) explain why. Right after reading, much of a text is still active in **working memory** (the short-term "desk" you think on), even a text you did not really understand. Retrieving then feels much the same for every text: the cues are **homogeneous** (all alike). After a delay, the surface and textbase information has faded and only **long-term memory** is left: little comes back for weak texts, much more for strong ones. The cues become **heterogeneous** (different), and long-term memory is also what the test draws on.'),
 P('Our example: straight after listening to an album you can hum every song; a little later, only the ones that really stuck come back.'),
 H2('The evidence'),
 table(['Study','What they did','What they found','In plain words'],[
  ['Thiede & Anderson (2003)','Six texts. One group summarized each text right after reading; one group read all six first, then summarized; a control group wrote nothing.','The delayed-summary group was the most accurate.','Summarize later, not straight away.'],
  ['Thiede et al. (2003)','Same design, but with five keywords per text, which takes far less time.','The delayed-keyword group was the most accurate; replicated by Chen (2009).','Five keywords later works too, and is quick.'],
  ['Thiede et al. (2005)','Varied the gap between reading and keywords, and between keywords and judging.','The gap between reading and writing the keywords was the crucial part.','The delay must come before the retrieval.'],
  ['van Loon et al. (2014)','Students filled in the missing parts of a given cause-and-effect diagram, immediately or after a delay; a control group made no diagram.','The delayed-diagram group was the most accurate.','Same rule, different task.']],[1600,2900,2300,2226]),SP(),
 P('**Who it works for:** summaries helped both typical and **at-risk readers** (students whose reading puts them at risk of failing), but at-risk readers relied more often on surface cues (Anderson & Thiede, 2008). The effect has been shown down to **grade 6**, but it **may not work in grade 4** (de Bruin et al., 2011).'),
 TRAP('A summary straight after each text makes you a better judge of your understanding.','Only the delayed summary helped. Right after reading, all texts still feel the same.'));

// ---------- 2.5 ----------
add(H1('2.5  Fix 2: read so that real understanding is built'),Q('Which ways of reading build the situation model, and do they improve accuracy?'),
 H2('The idea'),
 P('The second route changes **how** you read. If you read in a way that builds the situation model, its clues ("can I explain this?") are right there when you judge yourself. Think of assembling furniture: building it yourself shows you which joints you understood; looking at someone else\'s finished piece does not.'),
 H2('The evidence'),
 table(['Technique','What they did','What they found','In plain words'],[
  ['Concept maps (making)','A **concept map** is a drawing of a text\'s ideas and how they connect. At-risk readers made maps while reading (Thiede et al., 2010, Experiment 2).','Making maps improved accuracy.','Drawing the links shows what you really understood.'],
  ['Concept maps (given)','7th graders made maps, were given ready-made maps, or had none (Redford et al., 2012).','Making helped; ready-made maps were no better than no maps.','The making is what helps.'],
  ['Self-explanation','**Self-explaining** (Chi, 2000) means telling yourself what each sentence means and how it fits the whole. College students did this, or read the text twice in the same time, or once (Griffin, Wiley & Thiede, 2008).','The self-explainers were the most accurate.','Not more time, but explaining, makes the difference.'],
  ['Test expectancy','After practice texts with fact tests or with understanding tests, students rated new texts (Thiede, Griffin & Wiley, 2011).','Expecting understanding tests raised **metacomprehension** accuracy (predicting understanding); expecting fact tests raised **metamemory** accuracy (predicting memory for facts).','What you expect the test to ask changes how you read and judge.']],[1750,3000,2300,1976]),SP(),
 P('A later study found the same test-expectancy effect in grades 7 and 8, shaped by the school\'s own tests (Thiede et al., 2012).'),
 TRAP('Handing out a ready-made concept map helps as much as making one.','Pupils who were given maps judged no better than pupils without maps.'));

// ---------- 2.6 ----------
add(H1('2.6  Does it pay? From judging to learning'),Q('Does more accurate monitoring really lead to better learning?'),
 H2('The idea'),
 P('The **discrepancy-reduction model** (Dunlosky & Hertzog, 1997) describes how students decide what to restudy: they keep studying until the gap between "how well I know it" and "how well I want to know it" is closed. The bigger the gap, the more restudy. Much of the data fits this, and allocating study this way appears to optimize learning (Tullis & Benjamin, 2011). So a reader who judges accurately picks the right texts.'),
 H2('The evidence'),
 BUL('**Regulation is in place early.** Pupils in grades 4, 6 and 7 picked the texts they knew less well for restudy (de Bruin et al., 2011), at-risk readers did too (Anderson & Thiede, 2008), and even grade-1 children gave harder items more time (Dufresne & Kobasigawa, 1989). Students are fairly good at this, though some find it hard to turn their monitoring into action (Sussan & Son, 2014).'),
 BUL('**The whole chain was shown** by Thiede et al. (2003): the delayed-keyword group judged more accurately, then chose its weaker texts to reread, and ended with **better overall comprehension**. It was the first evidence that accuracy affects learning. Thiede et al. (2012) found the same in grades 7 and 8.'),
 P('**In plain words:** judge right, reread right, understand more. And the main weak link is the judging, not the rereading.'),
 TRAP('Young readers mainly need to learn to reread what they do not know.','They already do that. What needs help is the accuracy of their judgment.'));

// ---------- 2.7 ----------
add(H1('2.7  Still open, and what teachers can do'),Q('What is still unknown, and how can teachers support self-regulated reading?'),
 H2('Still open'),
 BUL('**Pictures:** adding diagrams raised both judgments and scores (Serra & Dunlosky, 2010). Later research found that uninformative pictures raised judgments without raising scores. Ackerman and Leiser (2014) showed this harm was limited to lower performers; higher performers even profited, possibly because they worked harder to make sense of them. Why such "seductive details" (Jaeger & Wiley, 2014) mislead is still open.'),
 BUL('**Paper or screen:** **calibration** (absolute accuracy, see 2.2) was better on paper, with the same scores; when students studied at their own pace, paper also led to better regulation and higher scores (Ackerman & Goldsmith, 2011). Because real study is self-paced, students need extra support when reading on screen.'),
 H2('What teachers should do'),
 P('Because pupils already reread sensibly, teachers **need not train the rereading**. They should train the **judging**, by pointing pupils to the clues that predict the test:'),
 BUL('be clear about what they want students to learn, **describe the test explicitly**, and **test deep understanding** rather than facts;'),
 BUL('promote **self-testing later**: keywords, summaries, cause-and-effect diagrams;'),
 BUL('teach pupils to **make their own concept maps**, and show how maps, summaries and diagrams relate to the test;'),
 BUL('practise good self-regulation themselves, as well as in their pupils.'),
 box('The chapter in one sentence',['Readers steer their reading by their own judgment, that judgment is often wrong, and delayed self-testing and deep-reading tasks make it more accurate, which leads to better rereading choices and better understanding (pp. 133–134, in our words).'],'FBF3DF',GOLD));

// ---------- one page ----------
add(H1('Explain it to a friend'),
 P('"When you read, you keep asking yourself whether you get it, and you reread what you don\'t. The catch: most people are bad at that judgment, because they go by how easy the text felt. Two things help. Test yourself a bit later, with a few keywords or a short summary. And read in a way that builds real understanding: make your own map, explain it to yourself, know the test will ask you to explain. Then you reread the right texts and actually understand more."',{italics:true}),
 box('Memory hook',['**Judge right, then reread right.** Two kinds of accuracy: **how much** and **which one**. Two fixes: **test later** and **build it yourself**.'],'E3ECF7',NAVY));

const doc=new Document({numbering:{config:[{reference:'b',levels:[{level:0,format:LevelFormat.BULLET,text:'•',alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:540,hanging:300}}}}]}]},
 styles:{default:{document:{run:{font:F,size:24}}},paragraphStyles:[{id:'Heading1',name:'Heading 1',basedOn:'Normal',next:'Normal',run:{font:F,size:34,bold:true,color:NAVY},paragraph:{spacing:{before:360,after:120},keepNext:true,outlineLevel:0}},{id:'Heading2',name:'Heading 2',basedOn:'Normal',next:'Normal',run:{font:F,size:26,bold:true,color:GOLD},paragraph:{spacing:{before:200,after:80},keepNext:true,outlineLevel:1}}]},
 sections:[{properties:{page:{margin:{top:1200,bottom:1200,left:1440,right:1440}}},footers:{default:new Footer({children:[new Paragraph({alignment:AlignmentType.CENTER,children:[new TextRun({text:'Theme 3 · Reading 2 · Teaching summary · ',font:F,size:20,color:GREY}),new TextRun({children:[PageNumber.CURRENT],font:F,size:20,color:GREY})]})]})},children:C}]});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync('Theme3_Reading2_SRL_in_Reading_Summary.docx',b);console.log('ok')});
