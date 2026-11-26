import html
CHECK="https://claude.ai/artifact/RhtvDpfv6aMiHSbbudsskb"
TEAM="https://claude.ai/artifact/Ag2XQ6izhsR2rjFpkF2FKf"
F={"prereg":("Preregistration_Consent_Ethics_Group1811.docx","Preregistration, consent form and ethics checklist","Word"),
"pack":("Tester_pack_Group1811.docx","Tester pack: timeline, schedule, script, scoring, sums and recall sheets","Word"),
"xl":("Experiment_lists_and_schedule.xlsx","Word sets, deck orders, participant schedule, data entry sheet","Excel"),
"ac":("SetA_categorized.pptx","Slide deck: Set A, categorized","PowerPoint"),
"ar":("SetA_randomized.pptx","Slide deck: Set A, randomized","PowerPoint"),
"bc":("SetB_categorized.pptx","Slide deck: Set B, categorized","PowerPoint"),
"br":("SetB_randomized.pptx","Slide deck: Set B, randomized","PowerPoint")}
def dl(k):
    f,_,t=F[k];return f'<span class="fn">{t}: {f}</span>'
C=lambda u,t:f'<a href="{u}">{t}</a>'
CAN="https://canvas.eur.nl/courses/55903"
W=[
(1,"Design and team contract","20 November 2026","done","Done",
 ["Form the project team and agree how you work together.","Decide the 2 × 2 design for the experiment.","Sign the teamwork contract and upload it on Canvas."],
 ["Teamwork contract template (Canvas)","Meeting 1 worksheet: Experimental Design I","Passer, chapter 8: single-factor experimental designs"],
 [("All","Kickoff meeting, contract signed and uploaded"),("All","Confirm the proposed design: every participant does both delay conditions, each participant gets one list order")],
 ["Signed teamwork contract, uploaded","Agreed design (proposal is in the preregistration draft)"],[]),
(2,"Experiment setup","Before the Week 3 tutorial","draft","Drafted, team check needed",
 ["Finish the experiment setup.","Test the experiment on yourselves and adjust it if needed.","In Meeting 2 each group presents its design, materials and recruitment plan."],
 ["Meeting 2 worksheet: Experimental Design II (confounds, between or within, factorial designs, power)","G*Power, for sample size calculations"],
 [("Sezen and Luca","Check the 80 draft words against the Van Overschelde et al. (2004) norms; test the four decks on your own laptop"),("Catinca and Viggo","Pilot one full session on ourselves; comment on the preregistration draft"),("All","Agree on the instruction script and the scoring rules"),("To assign","Ask the tutor what 'combined group data' means for our procedure")],
 ["Four slide decks, 40 words each, 4 seconds per word","Word lists and a balanced schedule for 16 participants","Tester pack so every session runs the same way"],["ac","ar","bc","br","xl","pack"]),
(3,"Preregistration, ethics and informed consent","1 December 2026","draft","Drafted, team check needed",
 ["Write the preregistration: Method plus Planned Analysis, maximum 900 words, one tense.","Create an informed consent form.","Fill out the ethics checklist together.","Combine the three into one file and upload it. No testing before this upload."],
 [C(CAN+"/pages/instructions-on-writing-a-research-report","Instructions for writing a research report"),C(CAN+"/files/101869723","APA style rules"),C(CAN+"/files/101869642","Ethics checklist form"),C(CAN+"/files/101869643","Consent form template, English")+" and "+C(CAN+"/files/101869718","Dutch"),"Example preregistration and example report (Canvas)","Preparation for Meeting 3: van Zeijts et al. (2023), Passer chapter 3, Code of Ethics"],
 [("Catinca and Sezen","Finalize the preregistration after the pilot; go through the ethics checklist; upload the combined file"),("Luca and Viggo","Finalize the consent form (contact email); lead recruitment"),("All","Recruit 4 participants each: 18 or older, not second-year Psychology students, unaware of the hypotheses")],
 ["One Word file: preregistration (860 words), consent form, ethics checklist","16 participants lined up"],["prereg"]),
(4,"Collect data","Before the Week 5 tutorial","todo","Not started",
 ["Run the experiment as preregistered.","Meeting 4 teaches data processing: from raw data to a table with means per condition and participant."],
 ["Meeting 4 exercise files (three Excel files) and the Meeting 4 results sheet"],
 [("Sezen","Test P01 to P04"),("Catinca","Test P05 to P08"),("Luca","Test P09 to P12"),("Viggo","Test P13 to P16"),("All","Score each recall sheet with two scorers; keep consent forms separate from recall sheets")],
 ["16 completed sessions, each with a session record and two scored recall sheets"],["pack"]),
(5,"Process and upload the data","10 December 2026","todo","Not started",
 ["Upload the data of your group project.","Meeting 5 teaches reporting results in graphs."],
 ["Graph-making exercises and the Excel practice file","Instructions on making graphs in Excel"],
 [("Viggo and Luca","Enter and check all scores; upload the data file"),("Sezen and Catinca","Run the descriptives and the 2 × 2 mixed ANOVA"),("All","Write down every change from the preregistration, with the reason")],
 ["Clean data file, uploaded on Canvas","Means per condition and the ANOVA output"],["xl"]),
(6,"Report the results","12 January 2027","todo","Not started",
 ["Analyze the combined group data.","Write the Results section of the empirical report and upload it.","Meeting 6 teaches statistics and test choice."],
 ["Meeting 6 study descriptions with SPSS and CSV files","Example report (Method, Results, bar graph with error bars)"],
 [("Sezen and Viggo","Write the Results in APA style, with a table or bar graph; upload"),("Catinca and Luca","Update the Method with the final sample; make the tables")],
 ["Results section in APA style","One figure: mean words recalled per condition, with standard-error bars"],[]),
(7,"Revise the report","Before the Week 8 tutorial","todo","Not started",
 ["Revise your group reports using the feedback on the previous versions.","Meeting 7 covers correlations and quasi-experiments."],
 ["Tutor feedback on Method and Results","Passer, chapters 5 and 11"],
 [("All","Revise Method and Results with the feedback; review the full draft together"),("Catinca and Luca","Draft the Introduction and the Discussion"),("Sezen and Viggo","Check APA formatting, citations and statistics")],
 ["Revised Method and Results","Draft Introduction and Discussion"],[]),
(8,"Present and finalize","Final report deadline on Canvas","todo","Not started",
 ["Give a group presentation of at most 5 minutes on your method and results, with slides.","Combine the revised parts into the Final Report, add the member contributions list, and upload it."],
 ["Woitzel and Alves (2024) and its preregistration","Video: the dance of the p-values"],
 [("All","Prepare and give the presentation; combine, proofread and upload the final report; add the member contributions list")],
 ["5-minute slide presentation","Final empirical research report with member contributions list"],[])]
def ul(xs): return "<ul>"+"".join(f"<li>{x}</li>" for x in xs)+"</ul>"
weeks=""
for n,t,d,st,sl,ask,mat,act,end,fs in W:
    acts="".join(f'<li><b>{w}</b><span>{a}</span></li>' for w,a in act)
    files=('<div class="dls">'+"".join(dl(k) for k in fs)+f'<a class="dl" href="{TEAM}">Team members: download on the team page</a></div>') if fs else ""
    weeks+=f'''<section class="week" id="week-{n}"><header><div class="num">Week {n}</div><h2>{t}</h2><div class="meta"><span class="pill {st}">{sl}</span><span class="due">Deadline: {d}</span></div></header>
<div class="grid"><div><h3>What the course asks</h3>{ul(ask)}</div><div><h3>Materials provided</h3>{ul(mat)}</div><div><h3>Our actions</h3><ul class="who">{acts}</ul></div><div class="end"><h3>Our end product</h3>{ul(end)}{files}</div></div></section>'''
nav="".join(f'<a href="#week-{n}">{n}</a>' for n in range(1,9))
allfiles="".join(f'<li><span class="fn">{t}: {f}</span><span>{d}</span></li>' for f,d,t in F.values())
page=f'''<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Psychological Science · Group project guide</title>
<meta name="description" content="Week by week guide to the Psychological Science group experiment: what the course asks, materials, actions and end products.">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet">
<style>
:root{{/* layout: one column of week cards, each a 2x2 grid of ask / materials / actions / end product */
--bg:#faf7f1;--card:#ffffff;--ink:#2b2f3a;--muted:#6b7280;--line:#e8e1d3;--accent:#34466b;--accent-soft:#f6eedd;--done:#2f8a57;--done-bg:#e2f1e6;--draft:#8a6420;--draft-bg:#fbe9d9;--todo:#6b7280;--todo-bg:#efeae0;
--display:'Cormorant Garamond',Georgia,serif;--body:'DM Sans',system-ui,sans-serif;color-scheme:light}}
*{{box-sizing:border-box}}html{{scroll-behavior:smooth}}body{{margin:0;background:var(--bg);color:var(--ink);font:16px/1.6 var(--body)}}
main{{max-width:1040px;margin:0 auto;padding:28px 18px 60px;display:flex;flex-direction:column;gap:22px}}
h1{{color:var(--accent);font:700 2.4rem/1.1 var(--display);margin:0;text-wrap:balance}}h2{{color:var(--accent);font:700 1.7rem/1.15 var(--display);margin:0;text-wrap:balance}}h3{{font:600 .82rem/1.2 var(--body);letter-spacing:.06em;text-transform:uppercase;color:#a8854a;margin:0 0 8px}}
p{{margin:0}}a{{color:var(--accent)}}a:focus-visible,button:focus-visible{{outline:3px solid var(--accent);outline-offset:2px}}
.lead{{color:var(--muted);max-width:65ch}}.top{{display:flex;flex-direction:column;gap:10px}}
.next{{background:var(--draft-bg);border:1px solid #f0d3b5;border-radius:12px;padding:14px 18px}}.next b{{color:var(--draft)}}
.card{{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px}}
.exp{{display:grid;grid-template-columns:minmax(260px,1fr) 1.2fr;gap:22px;align-items:start}}
table.d{{border-collapse:collapse;width:100%;font-size:1rem}}table.d th,table.d td{{border:1px solid var(--line);padding:10px;text-align:center}}table.d th{{background:var(--accent-soft);font-weight:600}}table.d td{{background:#fbfdfe}}
.facts{{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin:0;padding:0;list-style:none}}.facts li{{background:var(--bg);border-radius:10px;padding:10px 12px}}.facts b{{display:block;font:700 1.25rem var(--display);font-variant-numeric:tabular-nums}}
nav{{position:sticky;top:0;z-index:5;background:var(--bg);padding:8px 0;display:flex;gap:8px;flex-wrap:wrap;align-items:center;border-bottom:1px solid var(--line)}}nav span{{color:var(--muted);font-size:.95rem}}nav a{{text-decoration:none;font-weight:600;background:var(--card);border:1px solid var(--line);border-radius:8px;padding:5px 13px;color:var(--ink)}}nav a:hover{{border-color:var(--accent);color:var(--accent)}}nav a.ext{{margin-left:auto;background:var(--accent);color:#fff;border-color:var(--accent)}}
.week{{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:20px;scroll-margin-top:60px}}.week header{{display:flex;flex-wrap:wrap;gap:6px 14px;align-items:baseline;margin-bottom:16px}}.num{{font:700 .78rem var(--body);letter-spacing:.1em;text-transform:uppercase;color:#a8854a}}.meta{{display:flex;gap:10px;flex-wrap:wrap;align-items:center;width:100%}}.due{{color:var(--muted);font-size:.98rem}}
.pill{{font-size:.85rem;font-weight:600;border-radius:99px;padding:2px 12px}}.pill.done{{background:var(--done-bg);color:var(--done)}}.pill.draft{{background:var(--draft-bg);color:var(--draft)}}.pill.todo{{background:var(--todo-bg);color:var(--todo)}}
.grid{{display:grid;grid-template-columns:1fr 1fr;gap:18px 26px}}.grid ul{{margin:0;padding-left:18px;display:flex;flex-direction:column;gap:5px}}.who{{list-style:none;padding:0!important}}.who li{{display:grid;grid-template-columns:118px 1fr;gap:10px}}.who b{{font-weight:600}}
.end{{background:var(--accent-soft);border-radius:10px;padding:14px}}.dls{{display:flex;flex-direction:column;gap:6px;margin-top:12px}}
.dl{{display:inline-block;background:var(--card);border:1px solid var(--accent);border-radius:8px;padding:6px 12px;text-decoration:none;font-weight:600;font-size:.95rem;overflow-wrap:anywhere}}.dl:hover{{background:var(--accent);color:#fff}}
.files{{list-style:none;margin:12px 0 0;padding:0;display:flex;flex-direction:column;gap:10px}}.files li{{display:grid;grid-template-columns:minmax(0,1.1fr) 1fr;gap:14px;align-items:center}}.files span{{color:var(--muted)}}.fn{{font-weight:500;color:var(--ink)!important;overflow-wrap:anywhere}}.crumb{{font-size:.74rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);font-weight:700}}
.two{{display:grid;grid-template-columns:1fr 1fr;gap:22px}}.two ul{{margin:8px 0 0;padding-left:18px;display:flex;flex-direction:column;gap:6px}}
#msg{{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);background:var(--ink);color:#fff;padding:10px 16px;border-radius:10px;font-size:.95rem;max-width:90vw;display:none}}
@media(max-width:720px){{.grid,.exp,.two,.files li{{grid-template-columns:1fr}}.who li{{grid-template-columns:1fr;gap:0}}h1{{font-size:1.7rem}}nav a.ext{{margin-left:0}}}}
</style></head><body><main>
<div class="top"><div class="crumb">Psychological Science · Group project</div><h1>Group project guide</h1><p class="lead">Our group experiment on memory for word lists, by Sezen, Catinca, Luca and Viggo. One page with what the course asks each week, the materials we were given, who does what, and the end product we hand in.</p></div>
<p class="next"><b>Next deadline: 1 December 2026.</b> Upload the preregistration, consent form and ethics checklist as one file. We may not test any participant before that upload. Before then: check the word lists against the norms, pilot on ourselves, and fill in the yellow fields.</p>
<section class="card exp"><div><h3>Our experiment</h3><table class="d"><tr><th></th><th>Immediate recall</th><th>Recall after 3 min of sums</th></tr><tr><th>Randomized list</th><td colspan="2">8 participants do both</td></tr><tr><th>Categorized list</th><td colspan="2">8 participants do both</td></tr></table><p class="lead" style="margin-top:10px">We measure how many of the 40 words a person writes down. Delay is compared within each person; list order is compared between the two groups.</p></div>
<ul class="facts"><li><b>16</b>participants, 4 per tester</li><li><b>2 × 40</b>words per session, two lists</li><li><b>4 s</b>per word, automatic</li><li><b>3 min</b>written recall per list</li><li><b>20 min</b>per session, in person</li><li><b>2 × 2</b>mixed ANOVA planned</li></ul></section>
<nav aria-label="Weeks"><span>Jump to week</span>{nav}<a class="ext" href="{CHECK}">Team checklist</a></nav>
{weeks}
<section class="card" id="team-files"><h2>Files prepared for the team</h2><p class="lead" style="margin-top:6px">All seven are drafts made with Claude for the team to check and change. Team members download them on the team page.</p><ul class="files">{allfiles}</ul><p style="margin-top:14px"><a class="dl" href="{TEAM}">Open the team page with downloads</a></p></section>
<section class="card two"><div><h2>Open decisions</h2><ul><li>Confirm the design proposal as a group. If it changes, the decks and the preregistration change too.</li><li>The 80 words are a draft. Each must be checked as a low-frequency answer in the Van Overschelde et al. (2004) norms before the upload.</li><li>Do we add our predictions to the planned analysis, as the course example does?</li><li>Keep or delete the cover page of the upload file (the course example has none).</li></ul></div>
<div><h2>Questions for the tutor</h2><ul><li>The Meeting 6 instructions say "analyze the combined group data". What is combined, and does it fix any part of our procedure?</li><li>Is recruiting participants of 18 and older acceptable? Our contract says 16 and older; the ethics checklist treats under 18 as a vulnerable group.</li><li>What is the date of the final report deadline?</li></ul></div></section>
<section class="card"><h2>How this guide stays current</h2><p class="lead" style="margin-top:6px">Each week Sezen brings the new course materials and our progress to Claude, which prepares the next drafts and updates this page and the checklist. Claude drafts and checks; the team decides, tests participants and submits.</p></section>
</main>
<script src="https://sezsaracoglu-lab.github.io/dashshboard-/assets/sitenav.js" defer></script></body></html>'''
open(__import__('os').path.join(__import__('os').path.dirname(__file__),'..','index.html'),'w').write(page)
