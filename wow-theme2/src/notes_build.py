"""Builds the Word lecture notes from the same checked text as the pages:
body*.html (teaching text, traps, exam questions, tables) + scenes*.js (via notes_extract.js) + finished scene pictures (notes_shots.js)."""
import sys,re,json,os
from bs4 import BeautifulSoup,NavigableString
from docx import Document
from docx.shared import Pt,Cm,RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
HERE=os.path.dirname(os.path.abspath(__file__))
data=json.load(open(sys.argv[1]));FIG=sys.argv[2];OUT=sys.argv[3];READS=sys.argv[4].split(',');TITLE=sys.argv[5];SUB=sys.argv[6]
NAVY=RGBColor(0x34,0x46,0x6b);GOLD=RGBColor(0x8a,0x6a,0x2f);RED=RGBColor(0xa9,0x32,0x26);GREEN=RGBColor(0x25,0x6e,0x46)
EMO=re.compile('[\U0001F000-\U0001FAFF☀-➿⬀-⯿️‍←-⇿⌀-⏿①-⓿■-◿]')
def clean(t): return re.sub(r'\s+',' ',EMO.sub('',t).replace(' ',' '))
doc=Document()
st=doc.styles['Normal'];st.font.name='Calibri';st.font.size=Pt(11);st.element.rPr.rFonts.set(qn('w:eastAsia'),'Calibri')
st.paragraph_format.space_after=Pt(5);st.paragraph_format.space_before=Pt(0);st.paragraph_format.line_spacing=1.08
for s in doc.sections: s.left_margin=s.right_margin=Cm(2);s.top_margin=s.bottom_margin=Cm(1.8)
def H(text,lvl):
    p=doc.add_paragraph();r=p.add_run(clean(text).strip());r.bold=True
    r.font.size=Pt({0:22,1:17,2:14,3:12}[lvl]);r.font.color.rgb=NAVY if lvl<3 else GOLD
    p.paragraph_format.space_before=Pt({0:0,1:14,2:11,3:7}[lvl]);p.paragraph_format.space_after=Pt(3);p.paragraph_format.keep_with_next=True;return p
def runs(p,node,bold=False,ital=False,color=None):
    for ch in node.children if hasattr(node,'children') else []:
        if isinstance(ch,NavigableString):
            t=clean(str(ch))
            if t:
                r=p.add_run(t);r.bold=bold;r.italic=ital
                if color: r.font.color.rgb=color
        else:
            n=ch.name
            if n in('summary',): continue
            runs(p,ch,bold or n in('b','strong','th'),ital or n in('i','em'),color)
def P(html=None,lead=None,node=None,color=None,ital=False,indent=0):
    p=doc.add_paragraph()
    if indent: p.paragraph_format.left_indent=Cm(indent)
    if lead:
        r=p.add_run(clean(lead).strip()+' ');r.bold=True;r.font.color.rgb=color or NAVY
    if node is None and html is not None: node=BeautifulSoup('<x>'+html+'</x>','html.parser').x
    if node is not None: runs(p,node,ital=ital)
    return p
def shade(cell,hexc):
    tc=cell._tc.get_or_add_tcPr();sh=OxmlElement('w:shd');sh.set(qn('w:val'),'clear');sh.set(qn('w:color'),'auto');sh.set(qn('w:fill'),hexc);tc.append(sh)
def TABLE(tb):
    rows=tb.find_all('tr');grid=[];span={}
    for tr in rows:
        cells=[];ci=0;tds=tr.find_all(['td','th'])
        it=iter(tds)
        while True:
            if ci in span and span[ci][0]>0:
                cells.append((span[ci][1],False));span[ci][0]-=1;ci+=1;continue
            try: td=next(it)
            except StopIteration: break
            rs=int(td.get('rowspan',1))
            if rs>1: span[ci]=[rs-1,td]
            cells.append((td,td.name=='th'));ci+=1
        while ci in span and span[ci][0]>0:
            cells.append((span[ci][1],False));span[ci][0]-=1;ci+=1
        grid.append(cells)
    n=max(len(r) for r in grid);t=doc.add_table(rows=len(grid),cols=n);t.style='Table Grid';t.autofit=False
    for col in t.columns:
        for c in col.cells: c.width=Cm(17.0/n)
    for i,r in enumerate(grid):
        for j,(td,th) in enumerate(r):
            c=t.cell(i,j);p=c.paragraphs[0];p.paragraph_format.space_after=Pt(2);runs(p,td,bold=th)
            if th: shade(c,'E3ECF7')
    doc.add_paragraph().paragraph_format.space_after=Pt(2)
def FIGURE(fig):
    svg=fig.find('svg');sid=svg.get('id');path=os.path.join(FIG,f'fig-{sid}.png')
    if os.path.exists(path):
        p=doc.add_paragraph();p.alignment=WD_ALIGN_PARAGRAPH.CENTER;p.paragraph_format.keep_with_next=True;p.add_run().add_picture(path,width=Cm(14.5))
    cap=fig.find('figcaption')
    if cap:
        p=P(node=cap,lead='Figure.',ital=True);p.alignment=WD_ALIGN_PARAGRAPH.CENTER
    return sid
def SCENE(sid):
    sc=data['scenes'].get(sid)
    if not sc: return
    H('Worked through in the scene: '+sc['title'],3)
    for i,r in enumerate(sc['rounds'],1):
        case=' '.join(r['c'])+((' '+r['q']) if r['q'] else '')
        P(lead=f'Case {i}.',html=clean(case)+((' <b>Answer: '+r['a']+'.</b>') if r['a'] else ''))
        P(html=r['say'],indent=0.6)
    if sc.get('endOut'): P(html=re.sub(r'^<b>[^<]*</b>\s*','',sc['endOut']),lead='In short.')
    for t,h in sc['extras']: P(html=h,lead=clean(t).strip()+'.')
def TRAP(tr):
    P(node=tr.find(class_='w'),lead='The trap. Wrong:',color=RED);P(node=tr.find(class_='r'),lead='Right:',color=GREEN)
def EXQ(d):
    sm=d.find('summary');tb=d.find('table')
    if tb:
        H(clean(sm.find('b').get_text()),3);sp=sm.find('span')
        if sp: P(node=sp,ital=True)
        TABLE(tb);return
    P(node=sm.find('span'),lead='Exam-style question.')
    for p in d.find_all('p'): P(node=p,indent=0.6)
def CONT(c,key,step_i):
    vq=c.find(class_='vq',recursive=False) or c.find(class_='vq')
    if vq: P(node=vq,ital=True)
    teach=None
    scr=c.find(class_='scr')
    if scr:
        fig=scr.find('figure');teach=scr.find(class_='teach')
        card=teach.find('dl',class_='idcard')
        if card:
            for dt,dd in zip(card.find_all('dt'),card.find_all('dd')): P(node=dd,lead=clean(dt.get_text())+':')
        lbl=(teach.get('data-lbl') or '').split('|');ps=[p for p in teach.find_all('p',recursive=False)]
        z=[p for p in ps if 'zero' in (p.get('class') or [])];ps=[p for p in ps if p not in z]
        lbl=[l for l in lbl if 'From zero' not in l]
        for p in z: P(node=p,lead='From zero.')
        sid=FIGURE(fig)
        for i,p in enumerate(ps): P(node=p,lead=(clean(lbl[i]).strip()+'.') if i<len(lbl) and lbl[i].strip() else None)
        SCENE(sid)
        for d in teach.find_all('details',class_='tb1'): EXQ(d)
        tr=teach.find(class_='trapb')
        if tr: TRAP(tr)
        for d in teach.find_all('details',class_='exq'):
            if 'tb1' not in d.get('class'): EXQ(d)
    else:
        v=c.find(class_='verdict')
        if v:
            H(clean(v.find(class_='eyebrow').get_text()),3);TABLE(v.find('table'));g=v.find(class_='goldb')
            if g: P(node=g)
        t=c.find(class_='teach',recursive=False)
        if t:
            for ch in t.children:
                if isinstance(ch,NavigableString): continue
                if ch.name=='h4': H(ch.get_text(),3)
                elif ch.name=='p': P(node=ch)
                elif ch.name=='details': EXQ(ch)
soup=BeautifulSoup(''.join(open(os.path.join(HERE,f),encoding='utf-8').read() for f in sorted(os.listdir(HERE)) if re.fullmatch(r'body\d*\.html',f)),'html.parser')
H(TITLE,0);P(html=SUB,ital=True)
P(html='These notes are made from the same checked text as the study pages. Each reading follows the steps of its walk-through: the question, the teaching text, the finished picture of each scene with the cases worked out, the trap, an exam-style question with a model answer, and the key insight with memory aids. Characters and cases marked as ours are our own examples.')
n=0
for key in READS:
    pan=soup.find('section',id='p-'+key);n+=1
    H(clean(pan.find('h1').get_text()),1);P(node=pan.find('p',class_='cite'),ital=True)
    for si,stp in enumerate(pan.find_all('section',class_='step'),1):
        H(f'Step {si} · '+clean(stp.find('h2').get_text()),2)
        panes=stp.find_all('div',class_='pane')
        if panes:
            tabs=stp.find_all('button',class_='ptab')
            for tb_,pn in zip(tabs,panes):
                H(re.sub(r'^[①②③④]\s*','',clean(tb_.get_text()).strip()),3);CONT(pn,key,si)
        else: CONT(stp,key,si)
        tt=data['tt'].get(f'{key}-{si}')
        if tt:
            for lab,k in [('How it fits.','fit'),('Key insight.','key'),('Think of it like.','think'),('Say it to a friend.','friend'),('Memory hook.','hook'),('Exam tip.','tip')]:
                if tt.get(k): P(html=tt[k],lead=lab,color=GOLD)
H('Glossary',1)
used=set(re.findall(r'data-g="([^"]+)"',''.join(str(soup.find('section',id='p-'+k)) for k in READS)))
for k,(term,defi) in sorted(data['gloss'].items(),key=lambda x:x[1][0].lower()):
    if k in used: P(html=defi,lead=clean(term)+':')
doc.save(OUT)
txt='\n'.join(p.text for p in doc.paragraphs)
assert '—' not in txt,'em dash'
small=[r.font.size.pt for p in doc.paragraphs for r in p.runs if r.font.size and r.font.size.pt<11]
print('saved',OUT,len(doc.paragraphs),'paragraphs',len(txt.split()),'words','small runs',len(small))
