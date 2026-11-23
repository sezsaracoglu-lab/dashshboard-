"""Builds wow-theme2/index.html from the platform standard (edpsy-theme2/index.html):
same head, styles, walk-through engine and scene kit; only the content files in this folder differ."""
import re,os
HERE=os.path.dirname(os.path.abspath(__file__))
rd=lambda n:open(os.path.join(HERE,n),encoding='utf-8').read()
B=open(os.path.join(HERE,'../../edpsy-theme2/index.html'),encoding='utf-8').read()
def rep(s,a,b,n=1):
    assert s.count(a)==n,(a[:60],s.count(a)); return s.replace(a,b)
head=B[:B.index('<body>')]
i1=B.index('<script>',B.index('<body>'));e1=B.index('</script>',i1);s1=B[i1+8:e1]
i2=B.index('<script>',e1);e2=B.index('</script>',i2);s2=B[i2+8:e2]
tail=B[e2+9:]
# script 1: keep helpers, story deck and navigation; swap readings and story
a=s1.index('/* ---------- readings ---------- */');b=s1.index("const host=$('#storyDeck');")
s1=s1[:a]+rd('script1.src.js')+'\n'+s1[b:]
s1=s1.replace('edpsy2_gotst','wow2_gotst')
# script 2: keep engine and scene kit; swap scenes and labels
s2=rep(s2,"localStorage.getItem('edpsy2_'+k)","localStorage.getItem('wow2_'+k)")
s2=rep(s2,"localStorage.setItem('edpsy2_'+k","localStorage.setItem('wow2_'+k")
s2=re.sub(r"const ORDER=\[[^\n]*\n",lambda m:"const ORDER=['r-egb','r-lead','r-age','r-aging','r-ghrm','r-champ','r-fb','r-self'];\n",s2,count=1)
s2=re.sub(r"const NEXTL=\{[^\n]*\n",lambda m:"const NEXTL={'r-egb':'Next: reading 2 · Leadership →','r-lead':'Next: reading 3 · Engaging aging →','r-age':'Back to Start here →','r-ghrm':'Next: reading 6 · Sustainability champions →','r-champ':'Back to Start here →'};\n",s2,count=1)
s2=rep(s2,"window.wowShow(ORDER[ORDER.indexOf(id)+1]||'start')","window.wowShow(NEXTL[id]&&NEXTL[id].startsWith('Back')?'start':(ORDER[ORDER.indexOf(id)+1]||'start'))")
a=s2.index('/* ---------- step 2 · the map: six theories');b=s2.index('/* Side panels: first sentence visible')
scenes=''.join(rd(f) for f in sorted(os.listdir(HERE)) if re.fullmatch(r'scenes\d*\.js',f))
s2=s2[:a]+scenes+'\n'+s2[b:]
s2=rep(s2,'/* ================= THEME 2 · READING 1 · MOTIVATION (Linnenbrink-Garcia & Patall, 2015) ================= */','/* ================= WORLD OF WORK · THEME 2 ================= */')
s2=rep(s2,"t.closest('#w-r-mot,#w-r-prac')","t.closest('#w-r-age')")
s2=re.sub(r"const NBSHORT=\{[^\n]*\n",lambda m:"const NBSHORT={start:'Start here','r-egb':'Reading 1 · Employee green behavior','r-lead':'Reading 2 · Leadership and sustainability','r-age':'Reading 3 · Engaging aging','r-ghrm':'Reading 5 · Green HR practices','r-champ':'Reading 6 · Sustainability champions'};\n",s2,count=1)
s2=rep(s2,"course:'Educational Psychology'","course:'World of Work'")
body=rd('body.html')
assert body.count('<div id="readingPanels"></div>')==1
body=body.replace('<div id="readingPanels"></div>',''.join(rd(f) for f in sorted(os.listdir(HERE)) if re.fullmatch(r'body\d+\.html',f))+'\n<div id="readingPanels"></div>')
head=rep(head,'<title>Theme 2 · Motivation</title>','<title>World of Work · Theme 2</title>')
head=re.sub(r'<meta name="description" content="[^"]*">','<meta name="description" content="World of Work Theme 2: the psychology of sustainability in organizations. The readings as interactive walk-throughs: scenes to act on, teaching text in short cards, traps and exam-style questions.">',head)
out=head+body+'\n<script>'+s1+'</script>\n<script>'+s2+'</script>'+tail
for bad in ['edpsy','Motivation','r-mot','r-sdt','r-prac','Educational Psychology']:
    n=out.count(bad)
    if n: print('LEFTOVER',bad,n)
open(os.path.join(HERE,'../index.html'),'w',encoding='utf-8').write(out)
print('built',len(out))
