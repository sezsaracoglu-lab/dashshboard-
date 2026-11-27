import re,sys
def apply(path,N,first_step_marker):
    s=open(path).read()
    a=s.index(first_step_marker)
    pre,rest=s[:a],s[a:]
    steps=re.split(r'(?=<section class="step")',rest)
    head=steps[0];steps=steps[1:]
    out=[head]
    for i,st in enumerate(steps,1):
        pos=0;j=0;new=''
        for m in re.finditer(r'<div class="teach" data-lbl="([^"]*)">',st):
            new+=st[pos:m.start()]
            key=(i,j);j+=1
            body_start=m.end()
            nxt=st.find('<div class="teach"',body_start); nxt=len(st) if nxt<0 else nxt
            ends=[st.find(t,body_start) for t in ['<div class="trapb">','<details class="exq"','<div class="verdict"','<div class="endb"']]
            ends=[e for e in ends if 0<=e<nxt]; end=min(ends) if ends else nxt
            region=st[body_start:end]
            if key in N:
                ps=list(re.finditer(r'<p>.*?</p>',region,flags=re.S))
                assert ps,(path,key)
                first=ps[0].start()
                stripped=re.sub(r'<p>.*?</p>','',region,flags=re.S)
                # insert at position of first p in stripped text
                cut=len(re.sub(r'<p>.*?</p>','',region[:first],flags=re.S))
                html=''.join(f'<p>{h}</p>' for _,h in N[key])
                region=stripped[:cut]+html+stripped[cut:]
                lbl='|'.join(l for l,_ in N[key])
            else:
                lbl=m.group(1)
            new+=f'<div class="teach" data-lbl="{lbl}">'+region
            pos=end
        new+=st[pos:]
        out.append(new)
    missing=[k for k in N if k[0]>len(steps)]
    open(path,'w').write(pre+''.join(out));return missing
