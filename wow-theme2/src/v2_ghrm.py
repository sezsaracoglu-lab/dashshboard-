# Theme 2 · reading 5 (Luu, 2019, Green HR practices and OCBE): TEACHV2 cards, steps 1-5 (step 6 = take-aways)
import sys,os
sys.path.insert(0,os.path.join(os.path.dirname(os.path.abspath(__file__)),'../../wow-theme1/src'))
from v2lib import apply_step,G,Q,CARD,RECAP,UL
W='r-ghrm';S={}

S[1]=dict(lbl="Why start from HR practices?|Which gaps does the study fill?|What does the study add?|What can you now answer?",cards=[
Q("How and when do green HR practices lead to voluntary green behavior, of individuals and of teams?",
 "This is an <b>empirical</b> study: it collects data. It tests seven <b>hypotheses</b> (predictions the data can support or not) in a survey. It answers a practical question for HR: do green HR practices work, through what, and when best?",
 ["Why HR practices matter for sustainability","The gaps in earlier research","What this study adds"]),
CARD("Because HR practices translate a green strategy into what employees do, and large-scale sustainability begins with individuals.",
 "The article starts from tourism: it keeps growing and is carbon-intensive, so its share of greenhouse gas emissions will rise. Green policies can reduce tourism organizations' carbon footprint, but a strategy must reach employees. <b>Green HR practices</b> align selection, training and performance assessment with green objectives. <b>HR</b> means human resources; <b>HRM</b> is human resource management.",
 "HR is the bridge between a green strategy and green behavior.",
 "what research had missed."),
CARD("Three: little research on green HR in tourism, green behavior studied mostly at the individual level, and the interaction of green HRM with leadership still neglected.",
 "Tourism research looked far more at corporate social responsibility than at green HR. Green behavior research stayed at the individual level, although teams matter for carrying out a strategy. The article's Table 1 lists twenty earlier studies; none examined how green HR practices and leadership interact, or a team-level crafting mechanism. The closest: Dumont and colleagues (2017), in a Chinese subsidiary of an Australian paper-packaging firm, found green HRM influences in-role and extra-role green behavior through psychological green climate, with individual green values as a moderator.",
 "the study combines HR, teams and leadership in one model.",
 "the contributions."),
CARD("Team-level voluntary green behavior, evidence from tourism in an emerging market, a new team mechanism, and the interaction with a green-serving leadership style.",
 UL([("1","<b>Team-level</b> voluntary green behavior as an outcome, next to the individual level."),("2","Evidence from tourism in Vietnam, a South-East Asian emerging market, where earlier work studied manufacturing or other services."),("3","<b>Conservation of resources theory</b> to explain how and when, with a new mediator: <b>collective green crafting</b>."),("4","The interaction with <b>environmentally specific servant leadership</b>.")])+"The author is Trong Tuan Luu (Swinburne University of Technology, Australia); the article appeared in the <i>Journal of Sustainable Tourism</i> (2019).",
 "an exam option saying the study is about doing green tasks better is wrong: the outcome is voluntary green behavior.",
 "check what you can now answer."),
RECAP("A survey study asks how (through team crafting) and when (with a green-serving leader) green HR practices go with voluntary green behavior of individuals and teams.",
 [("Why HR?","It translates strategy into behavior."),("Gaps?","Tourism, teams, HRM with leadership."),("Adds?","Team level, emerging market, collective crafting, leadership interaction.")],
 ["What is the outcome variable? (voluntary green behavior: OCBE, individual and collective)","Which earlier study is closest? (Dumont et al., 2017)"])],
 guides=G("Four short decisions appear one at a time.","<b>Choose</b> for each part of the question.","Each answer fills a box of the design."))

S[2]=dict(lbl="What is OCBE?|What are green HR practices?|What is collective green crafting?|What is environmentally specific servant leadership?|What can you now answer?",cards=[
Q("What is green human resource management, what is organizational citizenship behavior for the environment, and what are the other concepts in the model?",
 "Figure 1 has five boxes. You need each concept sharp before the hypotheses make sense. An <b>item</b> is one sentence in a questionnaire that people rate.",
 ["OCBE, individual and collective","Green HR practices","Collective green crafting","Environmentally specific servant leadership"]),
CARD("Voluntary behavior that helps the natural environment and goes beyond the job role; here measured for individuals and for teams.",
 "<b>Organizational citizenship behavior</b> is helpful behavior beyond your formal job; <b>OCBE</b> is its environmental form (Daily and colleagues, 2009). The author extends it to the team: <b>collective OCBE</b>, the synergy of members' efforts, not the sum. He follows the three dimensions of Boiral and Paillé (2012), one of the citizenship scales in reading 1: <b>eco-civic engagement</b> (taking part voluntarily in the organization's green programs), <b>eco-helping</b> (helping others take environmental concerns into their work) and <b>eco-initiatives</b> (own suggestions and actions to improve green performance).",
 "an exam option calling collective OCBE the average of members' behavior is wrong: it is their synergy, rated by the manager.",
 "the HR side."),
CARD("Recruitment and selection, training, performance management, rewarding and involvement aimed at green values, knowledge and skills.",
 "HR practices carry out an organization's HRM strategy; the green ones aim to build green values and the knowledge and skills for green activities. Selection screens for green awareness; training builds awareness, knowledge, skills and a green climate; performance management assesses green performance and gives feedback; rewards are financial and non-financial (green travel benefits, green recognition); involvement offers a clear green vision, learning and communication channels. The article stresses that green training should also aim at attitudes and emotional involvement, and that integrated training links programs to performance management, which helps create a green climate.",
 "green HR is a bundle across the whole employee cycle.",
 "the team mechanism."),
CARD("Team members together changing the resources and demands of their green work, to make it more meaningful and reach the team's green goals.",
 "<b>Job crafting</b> (theme 1) is employees changing their own demands and resources; jobs can be crafted individually or collectively. <b>Collective green crafting</b> means more structural and relational resources, more <b>challenging demands</b> (demands that stretch you, like a new green project) and fewer <b>hindering demands</b> (demands that get in the way), all for green work. <i>Our example:</i> a tour team that together redesigns its trips to cut waste and teaches each other how.",
 "crafting becomes a team activity aimed at green goals.",
 "the leader."),
CARD("A leader who is a role model of green values and commitment to green goals, and who serves and helps employees contribute to the sustainable growth of the organization and the community (Luu, 2018).",
 "General <b>servant leadership</b> means leading with the motivation to serve others, as an empathic role model with altruistic values and a moral responsibility for the organization, employees and community. The author argues it may suit green behavior well: environmental psychologists suggest altruistic, other-oriented reasons may bring about green behavior, and leader conscientiousness and moral reflectiveness have been linked to voluntary green behavior.",
 "a leader who serves others may model the other-oriented motive behind green behavior.",
 "check what you can now answer."),
RECAP("Five concepts: green HR practices, collective green crafting, environmentally specific servant leadership, and OCBE of individuals and teams.",
 [("OCBE?","Voluntary green behavior; eco-civic engagement, eco-helping, eco-initiatives; collective = synergy."),("Green HR?","Selection, training, performance management, rewards, involvement."),("Collective green crafting?","Team crafting toward green goals."),("Servant leadership?","Serving others, role model, moral responsibility, applied to the environment.")],
 ["Name the three dimensions of OCBE (eco-civic engagement, eco-helping, eco-initiatives)","Which statement is wrong? \"Collective OCBE is the average of members' scores.\""])],
 guides=G("Five questionnaire items appear one at a time.","Each one measures one concept: <b>tap the box in the model</b> where it belongs.","Read why after each item."))

S[3]=dict(lbl="What does conservation of resources theory say here?|Why should green HR raise voluntary green behavior?|Why should team crafting carry the effect?|Why should the leader strengthen it?|What can you now answer?",cards=[
Q("Why would green HR practices lead to voluntary green behavior, and what are the seven hypotheses?",
 "The study explains its predictions with <b>conservation of resources theory</b> (Hobfoll), which you met in theme 1. <b>Resources</b> here are personal attributes, energies or conditions people value: knowledge, skills, support, self-esteem.",
 ["The theory's logic: who has, invests","Hypotheses 1 and 2: the direct links","Hypotheses 3 and 4: crafting as the route","Hypotheses 5 to 7: the leader as amplifier"]),
CARD("People with ample resources invest them proactively to gain more; people with few resources turn defensive.",
 "A lack or loss of resources may harm people, so they avoid loss and, with limited resources, perform at the minimum. With ample resources they take a <b>proactive resource gain strategy</b>: going above and beyond with voluntary, extra-role behavior. Bordia and colleagues (2017) see this as a trade: resources in, growing resources back (<b>resource gain spirals</b>), structural (knowledge, skills), social (relationships) and personal (self-esteem, pride). Resources can also change form, from structural or social into personal resources such as pride: the <b>resource caravan</b>.",
 "an exam option saying the study's main explanation is social exchange (paying back) is wrong: the main explanation is investing resources; the author offers it as an alternative that does not challenge social exchange theory.",
 "the first hypotheses."),
CARD("Because green HR practices are organizational resources: knowledge, skills, information, chances to solve problems, and a green norm (H1 team, H2 individual).",
 "Training gives green values, knowledge and skills; communication keeps employees informed; involvement offers problem-solving on environmental issues. The practices also create a green learning atmosphere and a norm for behaving pro-environmentally and helping each other. With these resources, members are expected to show OCBE individually and collectively.",
 "more green HR, more voluntary green behavior, of teams and individuals.",
 "the route."),
CARD("Because resources from HR motivate teams to build more resources together, and that shared crafting then makes green behavior the team norm and easier to learn (H3 team, H4 individual).",
 "Why HR leads to crafting: employees are active players, not passive receivers of HR. Green training gives knowledge and skills, and supervisor feedback gives support; with these, teams take on challenging new green projects (new green tours, greening destinations) and share the load to cut hindering demands. Crafting is the <b>mediator</b>: the route through which HR works. For the team: a stronger norm, person-group fit (how well a person matches the team's values) and shared values. For the individual: shared knowledge, peer coaching and feedback, observational learning from more role models, and open communication that turns knowledge into initiatives.",
 "HR works partly by getting teams to reshape their green work together.",
 "the leader."),
CARD("Because such leaders model and reinforce the green norm that HR cultivates, and spread it through the team (H5 to H7).",
 "The prediction: the links of green HR with team crafting, collective OCBE and individual OCBE are stronger when followers see their leader as high on environmentally specific servant leadership. Employees react more strongly to HR's green signals when the leader sends the same signal (Ostroff &amp; Bowen, 2016), and hold back when they doubt the manager's real motive (Chan and colleagues, 2014). Leadership has been found to moderate HRM effects; such leaders are role models, followers spread their values (a contagion process), and managers act as gatekeepers. Because managers often support green behavior less than other activities, leader and HR are not equivalent: the leader adds to the HR practices rather than replacing them.",
 "the leader is an amplifier of what HR starts.",
 "check what you can now answer."),
RECAP("Conservation of resources: green HR gives resources that people invest in voluntary green behavior (H1, H2), partly through collective crafting (H3, H4), more strongly under a green-serving leader (H5 to H7).",
 [("Theory?","Who has resources, invests them proactively."),("H1, H2?","Green HR → collective and individual OCBE."),("H3, H4?","Through collective green crafting."),("H5–H7?","Leader strengthens the links.")],
 ["Which theory does the author mainly use? (conservation of resources)","What is the mediator in the model? (collective green crafting)"])],
 guides=G("Six cases appear one at a time.","<b>Reason like the author</b>: choose the explanation that fits.","Each answer lights up the hypotheses it supports."))

S[4]=dict(lbl="Who took part, and where?|What was measured?|How was it analysed?|What can we conclude from this design?|What can you now answer?",cards=[
Q("How was the study carried out, and what does that allow us to conclude?",
 "A finding is only as strong as its design. This study used two waves and two sources, which helps, but it is still a survey. A <b>wave</b> is one round of data collection; a <b>sample</b> is the group of people who took part.",
 ["The sample","The measures","The analysis","What the design allows"]),
CARD("Employees and their direct managers in tour departments of Vietnamese tour operators with an established green strategy.",
 "Operators based in Ho Chi Minh City with at least 100 employees and tour departments of at least ten employees. The author used his connections and asked chief executives to introduce other operators: <b>snowball sampling</b>, not a random sample. Only employees who had worked under their manager for at least a year were contacted; employees and managers got different questionnaires by e-mail.",
 "the sample fits the question, but it is not representative of all organizations.",
 "the measures."),
CARD("Five scales on five-point answers, with collective OCBE rated by managers and the rest by employees.",
 UL([("1","Green HR practices: 6 items (Dumont and colleagues, 2017)."),("2","Collective green crafting: 8 items adapted from Tims and colleagues (2013)."),("3","Environmentally specific servant leadership: 12 items (Luu, 2018, adapted from Liden and colleagues, 2008)."),("4","Collective OCBE: 10 items adapted from Boiral &amp; Paillé (2012), rated by managers."),("5","Individual OCBE: 10 items (Boiral &amp; Paillé, 2012).")])+"Two waves, two months apart, from December 2017: at time 1, employees rated green HR practices and their leader; at time 2, the same employees rated collective green crafting and their own OCBE, and managers rated collective OCBE. Response: 71% of invited employees at time 1; the final sample was 51% of employees and 68% of managers: 1,024 employees and 156 managers from 44 tour operators. A <b>scale</b> is a set of items measuring one concept.",
 "two sources (employees and managers) reduce the risk that one person's view colours everything.",
 "the analysis."),
CARD("With one model that tests all links at once while respecting that employees sit in teams; it checks the route (mediation) and the leader's amplifying role (moderation).",
 "<b>Multilevel structural equation modeling</b> estimates all paths at once and respects that employees are nested in teams. An <b>indirect effect</b> is the effect that runs through the mediator; <b>bootstrapping</b> estimates its uncertainty by resampling the data. <b>Simple slopes</b> show the effect of HR at high and low levels of the leader variable.",
 "the analysis matches the multilevel model: individuals in teams.",
 "what we may conclude."),
CARD("Relationships, not causes: two waves and two sources reduce the risk of common method bias, but it was not a cross-lagged design.",
 "<b>Common method bias</b> is distortion when everything is measured the same way at the same time. A <b>cross-lagged</b> design measures all variables at several times to see which predicts which. The route and the outcomes were measured at the same moment (crafting and individual OCBE both from employees at time 2). A marker variable test (an unrelated question added to check for distortion) suggested a low risk of common method bias. The author states that causal relationships might not be derived.",
 "an exam option saying the two waves show green HR causes crafting is wrong.",
 "check what you can now answer."),
RECAP("A two-wave, two-source survey of Vietnamese tour teams, analysed with multilevel SEM; it shows relationships, not causes.",
 [("Sample?","Tour departments in Ho Chi Minh City; snowball sampling."),("Measures?","Five scales; collective OCBE by managers."),("Analysis?","Multilevel SEM; bootstrapped indirect effects; simple slopes."),("Conclusion limits?","Not cross-lagged; no causal claims.")],
 ["Why can the study not claim causality? (not cross-lagged; survey design)","Who rated collective OCBE? (the managers)"])],
 guides=G("Six design decisions appear one at a time.","<b>Choose what you would do</b>.","The timeline fills in with what the study actually did."))

P51=("What do the plain correlations show?|Do green HR practices go with voluntary green behavior?|Does collective green crafting carry the link?|What was not predicted?|What can you now answer?",[
Q("Do green HR practices go with more voluntary green behavior, and does collective green crafting carry that link?",
 "All seven hypotheses were supported. This tab covers hypotheses 1 to 4. A <b>path coefficient</b> says how strongly one variable predicts another in the model; <b>significant</b> means the link is unlikely to be chance.",
 ["The correlations in Table 3","The direct links (H1, H2)","The mediation (H3, H4)","Two unexpected findings"]),
CARD("Moderate positive links: green HR correlates .43 with team crafting, .36 with collective OCBE and .38 with individual OCBE.",
 "On five-point scales the averages sit in the middle to upper half: 3.51 for green HR practices, 3.47 for collective green crafting, 3.44 for collective OCBE, 3.49 for individual OCBE and 3.39 for leadership. The control variables (age, gender, education, tenure, team size) hardly correlate with anything. A <b>control variable</b> is measured so its influence can be taken out.",
 "the raw data already point in the predicted direction.",
 "the model."),
CARD("Yes: green HR practices showed significant positive associations with collective and individual OCBE (H1, H2).",
 "This fits an earlier report of a positive link between green HR practices and extra-role green behavior (Dumont and colleagues, 2017).",
 "more green HR goes with more voluntary green behavior at both levels.",
 "the route."),
CARD("Partly: green HR went with more collective crafting, which went with more OCBE at both levels, but a direct path remained (H3, H4).",
 "The indirect effect was .15 for collective OCBE (95% interval .09 to .22) and .17 for individual OCBE (.04 to .29). The indirect effects were significant (their <b>confidence intervals</b>, the range in which the true value probably lies, did not include zero), and a <b>partial mediation</b> model fitted better than a full mediation model.",
 "an exam option saying crafting fully explains the link is wrong: the mediation is partial.",
 "two surprises."),
CARD("Collective OCBE related positively to individual OCBE, and the leadership style itself related positively to both kinds of OCBE.",
 "These were not hypotheses but extra (post hoc) analyses: collective OCBE went with individual OCBE (.28), and the leadership style went with collective OCBE (.26) and individual OCBE (.29). <i>In plain words:</i> greener teams go with greener individuals, and a green-serving leader goes with greener teams and individuals.",
 "team behavior and leadership matter beyond HR's route.",
 "check what you can now answer."),
RECAP("Green HR practices go with more collective and individual OCBE, partly through collective green crafting.",
 [("Correlations?","Green HR .43 with crafting, .36 and .38 with OCBE."),("H1, H2?","Supported."),("H3, H4?","Supported; partial mediation."),("Unexpected?","Team OCBE → individual OCBE; leadership → OCBE.")],
 ["Is the mediation by collective green crafting full or partial? (partial)","Which correlation is highest: green HR with crafting or with individual OCBE? (crafting, .43)"])],
 G("Five results appear one at a time.","<b>Predict first</b>.","Then read the numbers: each answer writes the path coefficients into the model."))
P52=("How do you read an interaction figure?|Does the leader strengthen the effects?|What does this mean in practice?|What can you now answer?",[
Q("Does environmentally specific servant leadership change how strongly green HR practices relate to the outcomes?",
 "Hypotheses 5 to 7 are about moderation: does the leader change the size of HR's effect? The answer is in three interaction figures (Figures 2 to 4).",
 ["How to read an interaction figure","What the three figures show","What this means for HR and leaders"]),
CARD("Two lines for two groups: if their steepness differs, the second variable changes the effect of the first.",
 "Here: the horizontal axis is green HR practices (low to high), the vertical axis the outcome, and two lines: teams whose leader is high on environmentally specific servant leadership (one standard deviation above the mean) and teams whose leader is low (one below). A <b>standard deviation</b> is the typical distance of scores from the average.",
 "steeper line = stronger effect of HR in that group.",
 "what the figures show."),
CARD("Yes: for team crafting, collective OCBE and individual OCBE, the line was clearly steeper with a high green-serving leader, and still rose with a low one.",
 "The interaction terms were significantly positive, and the mediation models that included the interaction fitted better than those without. With a high leader the slopes were .71, .56 and .63. Slopes with low leadership (.22, .15, .17) were smaller but still positive and significant. The author links this to earlier findings on leadership interacting with organizational support for the environment and with corporate social responsibility initiatives.",
 "an exam option saying green HR has no effect without such a leader is wrong: the relationship is stronger with the leader, not dependent on the leader.",
 "the practical message."),
CARD("HR practices and leaders have to say the same thing.",
 "The author's argument: employees respond most when HR and the leader send the same green signal. <i>Our reading:</i> this study is an example of reading 2's \"moderating action\", where a leader strengthens or weakens what organizational policies do to followers, measured here with a leadership style.",
 "invest in green HR and in green-serving leaders together.",
 "check what you can now answer."),
RECAP("A green-serving leader strengthens the links of green HR with team crafting and OCBE; the links stay positive without such a leader.",
 [("Reading the figure?","Different steepness = interaction."),("Result?","Steeper with high leadership; still positive with low (.22, .15, .17)."),("Practice?","Align HR and leaders.")],
 ["Which statement is wrong? \"Without a green-serving leader, green HR has no effect.\"","What does one standard deviation above the mean represent in the figure? (high leadership)"])],
 G("Three interaction figures appear one at a time.","<b>Predict the first one</b>: which line is steeper?","Then interpret what you see in the next two."))
S[5]=dict(panes=[P51,P52])

def run(path):
    s=open(path,encoding='utf-8').read()
    for n,d in S.items():
        if 'panes' in d: s=apply_step(s,W,n,None,None,panes=[(l,c,g) for l,c,g in d['panes']])
        else: s=apply_step(s,W,n,d['lbl'],d['cards'],guides=d.get('guides'))
    open(path,'w',encoding='utf-8').write(s);print('ok',list(S))
if __name__=='__main__': run(sys.argv[1])
