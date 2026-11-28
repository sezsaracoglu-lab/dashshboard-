# Shared helper: rewrite one step's teaching cards to the TEACHV2 format (question headers, gold answer, qstart opener, how-to-play guide)
import re
def _steps(s,walk):
    i=s.index('id="w-'+walk+'"');j=s.find('<section class="panel"',i)
    if j<0:j=len(s)
    seg=s[i:j];starts=[m.start()+i for m in re.finditer(r'<section class="step"',seg)]
    return starts
def step_bounds(s,walk,idx):
    st=_steps(s,walk)[idx-1];en=s.index('</section>',st)
    # nested sections? steps don't nest sections
    return st,en
def _children(h):
    """split html fragment into top-level elements (balanced on div/p/dl/details/table/figure)"""
    import re
    out=[];i=0;n=len(h)
    while i<n:
        m=re.compile(r'<([a-zA-Z0-9]+)').search(h,i)
        if not m: out.append(('text',h[i:]));break
        if h[i:m.start()].strip(): out.append(('text',h[i:m.start()]))
        tag=m.group(1).lower();j=m.start();depth=0;k=j
        pat=re.compile(r'<(/?)'+tag+r'\b[^>]*?(/?)>',re.I)
        for t in pat.finditer(h,j):
            if t.group(1): depth-=1
            elif not t.group(2): depth+=1
            if depth==0: k=t.end();break
        else: k=n
        out.append((tag,h[j:k]));i=k
    return out
def rebuild_teach(block,lbl,cards):
    ti=block.index('<div class="teach"')
    end_candidates=[x for x in [block.find('<div class="trapb">',ti),block.find('<details class="exq',ti)] if x>=0]
    tj=min(end_candidates)
    head=block[ti:tj]
    o=head.index('>')+1
    # inner = up to the teach's own closing </div> if present inside head
    kids=_children(head[o:])
    out='';keepfirst='';keeplast='';tail='';pend=''
    for tag,html in kids:
        if tag=='p':
            if 'class="mini' in html[:40]: pend=html
            continue
        if tag=='div' and 'class="out"' in html[:60]: out=html;continue
        if tag=='dl': keepfirst+=html;continue
        if tag=='text': tail+=html;continue
        if pend: keeplast+='<div>'+pend+html+'</div>';pend='';continue
        keeplast+=html
    if pend: keeplast+='<div>'+pend+'</div>'
    return block[:ti]+'<div class="teach" data-lbl="'+lbl+'">'+out+keepfirst+''.join(cards)+keeplast+tail+block[tj:]
def apply_step(s,walk,idx,lbl,cards,guides=None,panes=None,gguide=None):
    """panes: list of (lbl,cards,guide) for steps with .pane tabs; otherwise lbl/cards/guides(single)"""
    a,b=step_bounds(s,walk,idx);st=s[a:b]
    if 'data-v2' not in st[:120]: st=st.replace('<section class="step" ','<section class="step" data-v2="1" ',1)
    st=re.sub(r'<div class="ask">.*?</div>\n?','',st)
    st=re.sub(r'<details class="exq">.*?</details>','',st,flags=re.S)
    if panes:
        parts=re.split(r'(?=<div class="pane)',st)
        head,ps=parts[0],parts[1:]
        assert len(ps)==len(panes),(walk,idx,len(ps),len(panes))
        newps=[]
        for p,(l,c,g) in zip(ps,panes):
            assert len(l.split('|'))==len(c)-1,(walk,idx,len(l.split('|')),len(c))
            p=rebuild_teach(p,l,c)
            if g and 'qguide' not in p and '</svg>' in p: k=p.index('</svg>')+6;p=p[:k]+g+p[k:]
            newps.append(p)
        st=head+''.join(newps)
    else:
        assert len(lbl.split('|'))==len(cards)-1,(walk,idx,len(lbl.split('|')),len(cards))
        st=rebuild_teach(st,lbl,cards)
        if guides and 'qguide' not in st and '</svg>' in st: k=st.index('</svg>')+6;st=st[:k]+guides+st[k:]
    if gguide:
        gl=gguide if isinstance(gguide,list) else [gguide]
        pos=0
        for g in gl:
            gi=st.find('<div class="game"',pos)
            assert gi>=0,(walk,idx,'no game')
            m=st.find('</p>',gi)+4
            if 'qguide' not in st[gi:m+20]: st=st[:m]+g+st[m:]
            pos=st.find('<div class="game"',gi)+1 or len(st)
    s=s[:a]+st+s[b:]
    s=re.sub(r"\n'"+re.escape(walk)+"-"+str(idx)+r"':'[^\n]*',?","\n",s,count=1)
    return s
def dump(s,walk,path):
    out=[]
    for n,st in enumerate(_steps(s,walk),1):
        en=s.index('</section>',st);t=s[st:en]
        txt=re.sub(r'<svg.*?</svg>','[SVG]',t,flags=re.S)
        txt=re.sub(r'<(?!/?(b|i|p)\b)[^>]+>',' ',txt);txt=re.sub(r'[ \t]+',' ',txt)
        z=re.search(r"\n'"+re.escape(walk)+"-"+str(n)+r"':'([^\n]*)'",s)
        tt=re.search(r"\n'"+re.escape(walk)+"-"+str(n)+r"':\{(.*?)\},?\n'",s,re.S)
        out.append(f'===== STEP {n}\n'+txt+'\n--ZERO: '+(z.group(1) if z else '')+'\n--TT: '+(tt.group(1)[:1500] if tt else ''))
    open(path,'w').write('\n'.join(out))

def G(*steps):
    return '<div class="qguide"><b>🎮 How to play</b><ol>'+''.join('<li>'+x+'</li>' for x in steps)+'</ol></div>'
def Q(q,why,rm,intro='In this step you learn'):
    return '<p class="zero qstart"><span class="qq">'+q+'</span><b>Why this matters.</b> '+why+'<span class="rm"><b>'+intro+':</b>'+''.join('<span><i>'+str(i)+'</i>'+x+'</span>' for i,x in enumerate(rm,1))+'</span></p>'
def CARD(ans,body,so,nxt):
    return '<p><span class="ans">⭐ '+ans+'</span>'+body+'<span class="soth"><b>So this means:</b> '+so+'</span>'+('<span class="bridge">→ Next: '+nxt+'</span>' if nxt else '')+'</p>'
def RECAP(ans,qa,exam,extra=''):
    return '<p class="recap"><span class="ans">⭐ '+ans+'</span><span class="rm">'+''.join('<span><i>'+str(i)+'</i><b>'+q+'</b> '+a+'</span>' for i,(q,a) in enumerate(qa,1))+'</span>'+extra+'<b>Typical exam questions on this step:</b><span class="rm">'+''.join('<span><i>?</i>'+x+'</span>' for x in exam)+'</span></p>'
def UL(items):
    return '<span class="rm">'+''.join('<span><i>'+k+'</i>'+v+'</span>' for k,v in items)+'</span>'
