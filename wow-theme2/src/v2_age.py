# Theme 2 · reading 3 (Bakker & Hakanen, 2019, Engaging aging): TEACHV2 cards, steps 1-5 (step 6 = take-aways)
import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(os.path.abspath(__file__)),'../../wow-theme1/src'))
from v2lib import apply_step,G,Q,CARD,RECAP,UL
W='r-age';S={}

S[1]=dict(lbl="What is work engagement?|How is engagement different from satisfaction?|What leads to engagement?|What does the chapter want to find out?|What can you now answer?",cards=[
Q("What is work engagement, why does it matter, and what does the chapter want to find out about age?",
 "Workforces are getting older, so organizations need people to stay engaged for longer. This short chapter combines research on aging with research on proactivity, and builds on theme 1 (engagement, JD-R, job crafting). A <b>resource</b> is anything that helps you reach goals or cope; <b>personal resources</b> sit in the person, <b>job resources</b> in the job.",
 ["What work engagement is","How it differs from satisfaction","What leads to it","The chapter's question about age"]),
CARD("A positive, fulfilling, work-related state of mind characterized by vigor, dedication and absorption (Schaufeli and colleagues, 2002).",
 UL([("V","<b>Vigor:</b> high energy and the willingness to invest effort."),("D","<b>Dedication:</b> strong involvement, with significance, enthusiasm and inspiration."),("A","<b>Absorption:</b> being fully immersed, so time passes quickly.")])+"William Kahn first introduced engagement in 1990. For two decades most research has measured it with the <b>Utrecht Work Engagement Scale</b>. The chapter was written as Wilmar Schaufeli's retirement approached; his definition and questionnaire set off this research.",
 "engagement is energy, meaning and immersion together.",
 "how it differs from feeling satisfied."),
CARD("Engagement is an activated state; satisfaction can be calm and passive.",
 "A satisfied person can feel calm and content; an engaged person feels excited and enthusiastic, and is prepared to put thinking power and energy into the work. In an early qualitative study, Schaufeli and colleagues (2001) described an engaged bus driver who loved driving smoothly so passengers were not startled. Engagement has been related to higher task performance, creativity and financial results, fewer medical errors and less counterproductive behavior (Christian and colleagues, 2011), and to fewer depressive symptoms and higher life satisfaction.",
 "an exam option saying a satisfied employee is engaged is wrong.",
 "where engagement comes from."),
CARD("Job challenges combined with personal or job resources, as Job Demands-Resources (JD-R) theory predicts.",
 "Engagement is most likely with interesting, challenging tasks plus social support, autonomy and skill variety; or with work pressure and deadlines on days when people feel optimistic and self-efficacious (confident in their own ability). One JD-R principle carries this chapter: employees need to be <b>proactive</b> (acting on their own initiative, ahead of problems) to stay engaged.",
 "challenge plus resources, and your own initiative, keep engagement up.",
 "the question about age."),
CARD("Three questions: does work engagement change with age, which HR practices foster \"engaging aging\", and what can employees do to stay engaged?",
 "The average age of the workforce in industrialized countries is clearly rising. Findings so far: older employees are slightly more engaged than younger ones (Hakanen and colleagues, 2019, a large-scale study in 30 European countries). The plan: look at what people lose and gain with age, combine that with proactivity research, and build a model of \"engaging aging\".",
 "the chapter asks how engagement can be kept up with age, not only whether it changes.",
 "check what you can now answer."),
RECAP("Work engagement is an activated state of vigor, dedication and absorption, fed by challenges plus resources; the chapter asks how to keep it up with age.",
 [("Engagement?","Vigor, dedication, absorption (Schaufeli et al., 2002); UWES."),("Vs satisfaction?","Activated vs calm."),("What leads to it?","Challenges plus resources; proactivity."),("Question?","How to stay engaged with age; older workers slightly more engaged.")],
 ["A case: an employee is calm and content but not energized. Engaged? (no: satisfied)","Name the three components of work engagement"])],
 guides=G("Five employees speak, one at a time.","<b>Tap the tile</b> that fits what each one says: vigor, dedication, absorption, or something else.","Read why after each one."))

S[2]=dict(lbl="Why is proactive behavior needed?|What three states prompt proactivity?|How do loss and gain fit the model?|Why are HR practices in the model?|What can you now answer?",cards=[
Q("What is the model of engaging aging, and how do loss, gain and HR practices lead to proactive behavior?",
 "This is the chapter's Figure 1, the core of the reading. It explains, step by step, how aging employees can stay engaged. The model is a proposal, not a tested result. Figure 1 (p. 157) reads left to right: employee age; loss above and gain below; age-focused HR practices; proactive work behaviors; work outcomes (engagement, creativity, performance).",
 ["Why proactive behavior is needed","The three motivational states behind it","How loss, gain and HR practices fit"]),
CARD("Because everyone must keep adjusting their work and free time to stay engaged and perform well, and this need grows with age.",
 "<b>Proactive behavior</b> at work is self-initiated, anticipatory action, such as taking charge, voicing concerns and seeking feedback (Parker &amp; Bindl, 2017). There is considerable evidence that it goes with good performance: person and job fit better, people use more of their resources and strengths, and work may become more meaningful (Kooij and colleagues, 2017).",
 "proactivity is the engine that keeps engagement going over a working life.",
 "what drives proactivity."),
CARD("\"Can do\", \"reason to\" and \"energized to\" (Parker, Bindl &amp; Strauss, 2010).",
 "A <b>motivational state</b> makes you want and able to act."+UL([("1","<b>Can do:</b> do I believe I can, is it feasible, what will it cost me?"),("2","<b>Reason to:</b> why would I? Feeling responsible, wanting from within to take initiative."),("3","<b>Energized to:</b> do I have the energy for it?")]),
 "proactivity needs ability, a reason and energy together.",
 "where age comes in."),
CARD("Gain of personal resources gives the \"can do\"; loss gives the \"reason to\".",
 "As physical abilities slowly decline and the body recovers less easily, the need to be proactive grows: loss is a reason. Gained personal resources, such as emotional stability, self-discipline and emotion regulation skills, make it possible. Loss and gain may also work together: <b>conservation of resources theory</b> (Hobfoll and colleagues, 2018) says people protect their resources, and investing them matters more when others are lost, so older employees may use gained resources such as emotional stability and wisdom to compensate for loss.",
 "an exam option saying loss makes older employees less proactive is wrong: in the model, loss is a reason to act.",
 "the missing piece."),
CARD("To supply the energy: research on age and proactive behavior is inconclusive (weak positive links or none; Zacher &amp; Kooij, 2017), so something has to energize it.",
 "<b>Age-focused HR practices</b>, initiated by the organization, give the \"energized to\". <b>HR practices</b> are what an organization does to manage its people. They also act as <b>moderators</b> (factors that change how strong a link is; here they make it stronger): they help turn \"reason to\" and \"can do\" into behavior. Proactive behavior then leads to engagement, creativity and performance.",
 "the organization's job is to energize what age already gives reason and means for.",
 "check what you can now answer."),
RECAP("Engaging aging: loss gives a reason, gain gives the means, HR practices give the energy; together they lead to proactive behavior and engagement.",
 [("Why proactivity?","Fine-tuning work is more needed with age."),("Three states?","Can do, reason to, energized to."),("Loss and gain?","Loss = reason to; gain = can do."),("HR practices?","Energize, and strengthen the translation into behavior.")],
 ["In the model, what does resource loss provide? (a reason to be proactive)","Why are HR practices needed in the model? (age is only weakly related to proactivity)"])],
 guides=G("Follow Karin, 58, through the model: six questions.","<b>Answer each question</b>.","Each answer lights up one part of the figure."))

S[3]=dict(lbl="What do employees lose with age?|What do employees gain with age?|Why does this matter for the model?|What can you now answer?",cards=[
Q("Which resources do employees lose and gain with increasing age?",
 "The model's two boxes, loss and gain, need content. The chapter reviews both sides, largely from reading 4 (Truxillo, Cadiz &amp; Hammer, 2015).",
 ["What declines","What grows","What this means for the model"]),
CARD("Physical ability, fluid intelligence and some social resources.",
 "Physical ability declines, with possible health problems and lower work ability. <b>Fluid intelligence</b>, the ability to reason and handle new information (working memory, abstract reasoning, attention), declines too, most likely starting already around the early twenties (Kanfer &amp; Ackerman, 2004). Physically: poorer vision and hearing, less strength, power and balance, higher blood pressure, slower recovery from stress (Hedge &amp; Borman, 2012). People lose social resources: fewer close friends, possibly less support from grown-up children, and a moderate decrease in <b>social vitality</b> (approaching life with less anticipation and excitement). <i>Our example:</i> a long-distance runner in her fifties: slower, but running smarter races.",
 "age takes some speed, fluid reasoning and social energy, not knowledge.",
 "what grows."),
CARD("Crystallized intelligence, a more favorable personality and better emotional abilities.",
 "<b>Crystallized intelligence</b> (knowledge, skills and wisdom built up over the years) increases. Personality shifts favorably: more conscientiousness (organized, careful) and agreeableness (caring), less neuroticism (irritable, anxious) (Soto and colleagues, 2011). Older people are also better at perceiving and regulating emotions, in line with a positive link between age and emotional intelligence (Mayer and colleagues, 1999).",
 "an exam option saying older employees perform worse because cognition declines is wrong: mainly fluid intelligence declines, and research generally shows no significant link between age and job performance, although older workers most likely need to invest more cognitive and time resources to reach the same level.",
 "the link with the model."),
CARD("Loss gives a reason to act, gain gives the means; yet proactivity does not rise with age by itself.",
 "In Figure 1, loss covers information processing, physical and fluid cognitive abilities and health; gain covers job knowledge, judgment, wisdom and socio-emotional abilities. Older employees have both a reason and the means, but age and proactive behavior are only weakly linked.",
 "that puzzle is why the model needs HR practices.",
 "check what you can now answer."),
RECAP("With age, physical ability, fluid intelligence and some social resources decline; crystallized intelligence, personality and emotional skills improve.",
 [("Lost?","Physical ability, fluid intelligence, social resources."),("Gained?","Crystallized intelligence, conscientiousness, agreeableness, emotional stability, emotion skills."),("For the model?","Loss = reason, gain = means; proactivity still needs energy.")],
 ["Which kind of intelligence declines with age, and which grows? (fluid; crystallized)","Is age related to job performance? (generally no significant relationship)"])],
 guides=G("Eight characteristics appear one at a time.","<b>Predict</b>: does it go down, go up, or show no clear link with age?","Read the finding after each prediction."))

S[4]=dict(lbl="Why do HR practices need to adjust to age?|What is a health behavior climate?|What is job crafting training?|What are idiosyncratic deals?|What can you now answer?",cards=[
Q("Which HR practices foster engaging aging, according to the chapter?",
 "In the model, age-focused HR practices supply the energy for proactive behavior. The chapter gives three examples it expects to be most likely to be effective; many more are possible, such as age management programs, mentoring and flexible work hours.",
 ["Why HR practices must adjust","A health behavior climate","Job crafting training","Idiosyncratic deals"]),
CARD("Because aging comes with important changes in employees' resources, the authors find it seems crucial to adapt the usual HR practices to keep people healthy, engaged and productive (Truxillo and colleagues, 2015).",
 "Examples include age-focused job design and age-focused training and development (Dikkers and colleagues, 2017). In the model they <b>energize</b> employees to be proactive and strengthen the translation of \"reason to\" and \"can do\" into behavior.",
 "HR practices are the organization's part of engaging aging.",
 "the first example."),
CARD("Employees' perceptions of the organization's policies, practices and procedures for health behavior, including expectations and rewards that encourage health promotion.",
 "Management communicates its care through strategy and vision; this care becomes more important with increasing age. Organizations can also design the \"choice architecture\" so that younger and older employees are nudged to be physically active and eat healthy food (Thaler &amp; Sunstein, 2008). A <b>nudge</b> is a small change in the environment that steers behavior without forcing it. In this way organizations may indirectly improve health, engagement and performance. <i>Our example:</i> stairs placed more visibly than the lift.",
 "make the healthy choice the default.",
 "the second example."),
CARD("A training in which employees learn to identify their key demands and resources and to set goals to optimize their own job.",
 "It can be a one-day workshop ending in a personal job crafting plan carried out over several weeks. There is evidence such interventions work (for example Gordon and colleagues, 2018), and the authors find them particularly suited to an aging workforce because they are tailored to individual needs and abilities.",
 "the organization teaches employees to reshape their own jobs.",
 "the third example."),
CARD("Personalized arrangements negotiated between one employee and the organization, most often about schedule flexibility and development.",
 "(Rousseau, Ho &amp; Greenberg, 2006.) <b>I-deals</b> vary per employee and can also be about tasks. They may protect against age-related loss (flexible hours allow recovery), help with learning demands (development), and show that the organization is willing to meet individual needs.",
 "an exam option saying i-deals and job crafting training are the same is wrong: an i-deal is negotiated with the organization; job crafting is done on the employee's own initiative, and the training only teaches it.",
 "check what you can now answer."),
RECAP("Age-focused HR practices energize proactivity: a health behavior climate, job crafting training and idiosyncratic deals are the chapter's examples.",
 [("Why adjust?","Resources change with age (Truxillo et al., 2015)."),("Health climate?","Care plus nudges toward healthy choices."),("Crafting training?","Learn to optimize your own job; tailored."),("I-deals?","Negotiated personal arrangements: flexibility, development.")],
 ["What is the difference between an i-deal and job crafting?","Give an example of a nudge in a health behavior climate"])],
 guides=G("Six situations in a company appear one at a time.","<b>Tap the practice</b> each one shows.","The tile then gets its name; read why."))

S[5]=dict(lbl="What are SOC strategies?|What is job crafting here?|What is proactive vitality management?|What can you now answer?",cards=[
Q("What strategies can employees use to stay engaged with increasing age?",
 "The model ends in proactive behavior. The chapter names three behaviors with high potential for positive outcomes, the employee's own tools for engaging aging.",
 ["Selection, optimization and compensation","Job crafting","Proactive vitality management"]),
CARD("Selection, optimization and compensation: ways to use limited resources as well as possible (Baltes, 1997).",
 UL([("S","<b>Selection:</b> choosing and prioritizing goals."),("O","<b>Optimization:</b> investing extra resources in the chosen goals."),("C","<b>Compensation:</b> replacing means that no longer work with more effective ones.")])+"<i>Our example:</i> a 60-year-old pianist plays fewer pieces (selection), practises those more (optimization), and plays slow passages before fast ones so they sound faster (compensation). <i>The chapter's example:</i> an older front-line manager chooses to become a leader who motivates his team rather than stay the expert (selection), takes leadership training and reads books (optimization), and after setbacks invests more time, shows self-compassion and models other leaders (compensation). Using SOC predicts work ability, engagement and job performance (Zacher and colleagues, 2015).",
 "an exam option saying compensation means lowering your goals is wrong: choosing fewer or different goals is selection; compensation keeps the goal and finds other means to reach it.",
 "the second behavior."),
CARD("Changing your job demands and resources on your own initiative so the work fits your abilities and preferences better (Tims &amp; Bakker, 2010).",
 "You know this from theme 1. Originally: \"the physical and cognitive changes individuals make in the task or relational boundaries of their work\" (Wrzesniewski &amp; Dutton, 2001, p. 179). Four strategies: increasing resources (asking for feedback), increasing challenges (new tasks), decreasing hindering demands (less bureaucracy) and optimizing demands (Demerouti &amp; Peeters, 2018). <i>The chapter's aging examples:</i> seeking support to learn new IT applications, volunteering for the mentoring program, or limiting time spent on details. Survey, diary and intervention studies link crafting to resources, engagement, meaningfulness and performance.",
 "crafting lets an aging employee reshape the job around changing resources.",
 "the third behavior."),
CARD("Managing your own physical and mental energy directly, with small strategies to stay vital or regain energy.",
 "Like job crafting it is self-initiated and goal-oriented, but it manages your own physical and mental energy with small strategies (Op den Kamp and colleagues, 2018). For aging employees: regular exercise, a walk in the park, a gallery visit, or regular micro-breaks. It has been positively related to relaxation, cognitive liveliness, work engagement, creativity and task performance.",
 "crafting changes the job; vitality management changes your energy.",
 "check what you can now answer."),
RECAP("Employees stay engaged with age through SOC strategies, job crafting and proactive vitality management.",
 [("SOC?","Select goals, optimize effort, compensate with new means (Baltes, 1997)."),("Job crafting?","Change demands and resources to fit (Tims & Bakker, 2010)."),("Vitality management?","Manage your own energy directly.")],
 ["Classify: an older nurse uses a checklist for details she now forgets (compensation)","Which statement is wrong? \"Compensation means lowering your goals.\""])],
 guides=G("First follow an older manager through three steps, then four more actions.","<b>Tap the tile</b> each action belongs to: selection, optimization, compensation, job crafting or vitality management.","Read why after each action."))

def run(path):
    s=open(path,encoding='utf-8').read()
    for n,d in S.items(): s=apply_step(s,W,n,d['lbl'],d['cards'],guides=d.get('guides'))
    open(path,'w',encoding='utf-8').write(s);print('ok',list(S))
if __name__=='__main__': run(sys.argv[1])
