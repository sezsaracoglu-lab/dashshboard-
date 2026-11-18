import json
Q1=[
("def","mdef","Which statement best matches how the handbook chapter on motivation uses the term motivation?",
 ["The processes that both initiate and sustain behaviour","A stable trait that separates motivated from unmotivated students","The amount of effort a student visibly puts into a task","The pleasure a student takes in the activity itself"],
 "Look for the definition with two parts: starting and keeping going.",
 "The chapter's working definition is the <b>processes of both initiating and sustaining behaviour</b>. It explicitly goes beyond sorting students into <b>motivated or unmotivated</b>, so the trait option is the view it leaves behind. Effort and enjoyment are outcomes or parts of motivation, not the definition."),
("app","se","Lina says: \"If I hand in every lab report, I will pass this course. I just doubt that I am able to write those reports.\" Which combination of beliefs does this show?",
 ["A high outcome expectation with low self-efficacy","A low outcome expectation with high self-efficacy","A high self-concept with a low task value","A low expectancy with a high attainment value"],
 "Two beliefs in one sentence: does the behaviour lead to the result, and can I carry out the behaviour?",
 "Believing that handing in reports leads to passing is an <b>outcome expectation</b>, and it is high. Doubting her capacity to carry out the behaviour is low <b>self-efficacy</b>. The chapter treats the two as distinct. Nothing is said about how much she values the course, so the value options do not fit."),
("find","se","Adolescents were compared on where their confidence in science came from. Which group had the highest science self-efficacy and achievement in Chen and Usher (2013)?",
 ["Those who drew on several sources of self-efficacy at the same time","Those who relied primarily on their own mastery experiences","Those who relied primarily on encouragement from others","Those who were most sensitive to signals from their own body"],
 "A finding about sources: one strong source, or several together?",
 "Students who drew from <b>multiple sources simultaneously</b> had the highest science self-efficacy and achievement, significantly higher than those who derived it <b>primarily from mastery experiences</b> alone. Sensitivity to physiological arousal characterised the students most at risk, not the strongest group."),
("def","se","Students with a learning disability reported lower confidence in their abilities than their peers, yet compared with their real performance their confidence was too high. Which concept describes this mismatch?",
 ["Calibration","Collective efficacy","Outcome expectation","Self-concept"],
 "The stem compares a confidence judgment with actual performance.",
 "<b>Calibration</b> is the match between efficacy judgments and actual performance. Klassen (2007) found these students less calibrated, more <b>overconfident</b>. Collective efficacy is a group's shared belief, and an outcome expectation is the belief that a behaviour leads to an outcome."),
("app","evt","Sara puts a lot of work into biology. She says: \"Being good at science is simply part of how I see myself, so doing well in it matters to me.\" Which component of task value is this?",
 ["Attainment value","Utility value","Intrinsic value","Cost"],
 "Ask what makes the task worth it to her: use for something else, who she is, fun, or a price she pays.",
 "<b>Attainment value</b> is the personal importance or self-relevance of doing well. <b>Utility value</b> would mean biology is useful for another part of her life, such as a later job, which she does not mention. Intrinsic value is enjoyment, and cost is the negative side of engaging."),
("find","evt","Judge these two statements about expectancy-value research.<br><b>I.</b> Expectancies for success most strongly predict performance, even when previous performance is controlled.<br><b>II.</b> Task values most strongly predict choices, such as which courses students enrol in.",
 ["Both statements are true","Only statement I is true","Only statement II is true","Neither statement is true"],
 "Two beliefs, two different outcomes: which predicts grades and which predicts choices?",
 "Both are stated in the chapter: <b>expectancies</b> most strongly predict <b>performance</b>, and <b>task values</b> most strongly predict activity <b>choices</b> and enrollment decisions. The tempting mistake is to think value predicts grades best."),
("fig","evt","The chart shows achievement for four groups of adolescents. Which conclusion does the pattern support?",
 ["Expectancy matters much more when value is high, and high expectancy does not make up for low value","Expectancy and value each add a fixed amount, so their effects simply add up","Value matters only for students with low expectancy","Expectancy has no effect on achievement once value is taken into account"],
 "Compare the two lines: are they parallel, or does one rise much more steeply?",
 "The lines are not parallel: achievement rises steeply with expectancy only in the high-value group. That is an <b>interaction</b>, as research with adolescents suggests: the effect of expectancy is stronger when value is higher, and <b>neither can compensate</b> when the other is low. Parallel lines would have shown a purely additive pattern.",
 {"chart":{"type":"line","title":"Achievement by expectancy and value (illustrative numbers)","x":["Low expectancy","High expectancy"],"y":"Achievement score","series":[{"name":"Low value","v":[40,44]},{"name":"High value","v":[46,78]}],"min":0,"max":100,"note":"illustrative, follows the pattern described for Nagengast et al. (2011) and Trautwein et al. (2012)"}}),
("app","int","After a spectacular documentary shown in class, Tom is fascinated by volcanoes for the rest of the lesson. A week later he has not thought about them again. Which form of interest did the documentary produce?",
 ["Triggered situational interest","Maintained situational interest","Emerging individual interest","Well-developed individual interest"],
 "Where did the interest come from, and how long did it last?",
 "A short, heightened affective state started by something in the context is <b>triggered situational interest</b>. <b>Maintained</b> situational interest would involve focused involvement and finding meaning over time, and individual interest resides in the person and brings a willingness to re-engage."),
("find","int","In a study with undergraduates, how did triggered situational interest relate to involvement in the task?",
 ["It supported involvement for students with low individual interest but undermined it for those with high interest","It supported involvement for students with high individual interest only","It supported involvement for all students, most strongly for those with high interest","It was unrelated to involvement, whatever the students' individual interest"],
 "The answer depends on the student's starting interest.",
 "Durik and Harackiewicz (2007) found that <b>triggered</b> situational interest supported task involvement for students with <b>low individual interest</b> but undermined it for those with high interest. The option about high-interest students only describes <b>maintained</b> situational interest."),
("def","tax","According to self-determination theory, which two forms of extrinsic motivation are experienced as controlled?",
 ["External regulation and introjection","Identification and integration","Introjection and identification","External regulation and identification"],
 "Controlled means pressured, whether the pressure sits outside or inside the person.",
 "<b>External regulation</b> (rewards and punishments) and <b>introjection</b> (guilt, shame, self-esteem at stake) are the controlled forms. Introjection is the trap: the pressure is inside the person, yet it is still pressure. <b>Identification</b> and <b>integration</b> are autonomous forms of extrinsic motivation."),
("fig","tax","The table is taken from the taxonomy of motivation in self-determination theory. Which entry belongs in the empty cell?",
 ["Somewhat internal","Internal","Somewhat external","Impersonal"],
 "Follow the column from top to bottom: the cause moves step by step from outside to inside.",
 "In Figure 1 of Ryan and Deci (2020) the perceived locus of causality is <b>somewhat internal</b> for <b>identification</b>. Integration and intrinsic motivation are internal, introjection is somewhat external, and impersonal belongs to amotivation.",
 {"pre":"<table class=\"qt\"><tr><th>Regulatory style</th><th>Perceived locus of causality</th></tr><tr><td>External regulation</td><td>External</td></tr><tr><td>Introjection</td><td>Somewhat external</td></tr><tr><td>Identification</td><td><b>?</b></td></tr><tr><td>Integration</td><td>Internal</td></tr></table><p style=\"font-size:.85rem;color:#5d6472;text-align:center;margin:0 0 6px\">After Ryan &amp; Deci (2020), Figure 1 (p. 2).</p>"}),
("comp","tax","Identified regulation and intrinsic motivation are both highly volitional. What is the main difference between them?",
 ["Identified regulation rests on the value of the activity, intrinsic motivation on interest and enjoyment","Identified regulation is controlled, intrinsic motivation is autonomous","Identified regulation comes from other people, intrinsic motivation from the person","Identified regulation is weaker and fades faster than intrinsic motivation"],
 "Both are autonomous. Ask what each is based on.",
 "Intrinsic motivation is based in <b>interest and enjoyment</b>; identified (and integrated) motivation is based on a sense of <b>value</b>: the activity is worthwhile even if it is not enjoyable. Both are <b>autonomous</b>, so the controlled versus autonomous option is wrong."),
("fig","ag","The chart shows the average correlations between four achievement goals and achievement from a meta-analysis. Which conclusion fits the figure?",
 ["All four links are small; the two approach goals are positive and the two avoidance goals negative","Both mastery goals go with higher achievement and both performance goals with lower achievement","Performance-approach goals show the strongest positive link with achievement","Avoidance goals have large negative effects on achievement"],
 "Read the size first (how far from zero), then the direction of each bar.",
 "The values are .11, .06, −.12 and −.13: all <b>small</b>, positive for the two <b>approach</b> goals and negative for the two <b>avoidance</b> goals. Mastery-avoidance is negative, so the mastery versus performance reading fails, and the strongest positive bar is mastery-approach.",
 {"chart":{"type":"bar","title":"Achievement goals and achievement: average correlations","x":["Mastery-approach","Performance-approach","Mastery-avoidance","Performance-avoidance"],"y":"Correlation with achievement","series":[{"name":"r","v":[0.11,0.06,-0.12,-0.13]}],"min":-0.2,"max":0.2,"note":"values from Hulleman et al. (2010) as reported by Linnenbrink-Garcia & Patall (2015), p. 95"}}),
("find","ag","Two questionnaires both claim to measure performance-approach goals. In a meta-analysis, one type correlated +.14 with achievement and the other −.14. What distinguished the two types?",
 ["Whether the items were about outperforming others or about looking smart and demonstrating ability","Whether the items were answered by younger or by older students","Whether the items were about approaching success or about avoiding failure","Whether the items were about one school subject or about school in general"],
 "Same goal label, opposite result: look at what the items actually asked.",
 "With mostly <b>normative</b> items (outperforming others) the correlation was +.14; with items about <b>appearance</b> or <b>evaluation</b> (looking smart, demonstrating ability) it was −.14. Approach versus avoidance is a different distinction: both types here were approach items."),
("app","ag","Mila's main aim this term is \"not to fall behind what I could do last year, and not to waste my potential\". Which achievement goal is this?",
 ["Mastery-avoidance","Mastery-approach","Performance-avoidance","Performance-approach"],
 "Two questions: is it about developing or demonstrating competence, and is she going for something or steering away from something?",
 "Avoiding declining competence or not fulfilling one's potential is a <b>mastery-avoidance</b> goal. It is about her own competence, not about how she appears to others, so it is not <b>performance-avoidance</b>, and she is steering away from a loss, so it is not an approach goal."),
("app","attr","After a failed exam Jonas says: \"I simply have no aptitude for languages, and that will not change.\" According to attribution theory, what does the stability of this cause affect most directly?",
 ["His expectation of success on the next exam","His pride and self-esteem","His feelings of guilt or shame","His willingness to help others"],
 "Each of the three dimensions has its own consequence. Which one belongs to stability?",
 "<b>Stability</b> relates most directly to <b>expectancies</b> for success and failure: a cause that persists predicts the same result again. <b>Locus</b> relates to pride and self-esteem, and <b>controllability</b> to hopefulness, shame, guilt and help giving."),
("find","attr","Which statement about attributions is NOT supported by the handbook chapter on motivation?",
 ["Explaining results by effort is consistently more beneficial than explaining them by ability","Training students to see failures as unstable has beneficial effects","Students with mastery goals tend to make more adaptive attributions","Attributions are associated with different emotions and expectancies"],
 "Three options are findings; one is a prediction that research did not consistently confirm.",
 "The chapter says effort attributions are <b>not consistently</b> more beneficial than ability attributions, although theorists often predict it. The other three are reported: <b>attribution training</b> helps, mastery goals go with adaptive attributions, and attributions relate to emotions and expectancies."),
("comp","integ","A researcher measures students' achievement goals and task values, sorts the students into seven groups with typical combinations of the two, and compares how the groups feel and achieve. Which approach to integrating theories is this?",
 ["A person-centred approach","A variable-centred approach","An approach through the educational context","A sociocultural approach"],
 "Is the unit of analysis a variable across all students, or a type of student?",
 "Looking for <b>profiles</b>, combinations of motivation within individuals, is the <b>person-centred</b> approach (Conley, 2012). A <b>variable-centred</b> study would ask what each variable contributes across all students after controlling for the others."),
("def","integ","Participants who had unknowingly been exposed to words such as \"strive\" and \"succeed\" later performed better and persisted longer on a puzzle task than participants who had not. What does this finding illustrate?",
 ["Motivation can operate without the person being aware of it","Mastery goals lead to better performance than performance goals","Verbal persuasion is a source of self-efficacy","Triggered situational interest supports task involvement"],
 "The key word is unknowingly.",
 "Bargh et al. (2001) <b>primed</b> an achievement goal without participants noticing, which shows that much motivation may be <b>unconscious</b>. The six main theories assume conscious goals, which is why the chapter mentions this as a perspective educational research has rarely included."),
("find","needs","Students were exposed to a teacher who was autonomy supportive, neutral or controlling, and their cortisol was measured. What was the order of cortisol levels, from highest to lowest?",
 ["Controlling, neutral, autonomy supportive","Autonomy supportive, neutral, controlling","Neutral, controlling, autonomy supportive","Controlling and autonomy supportive equal, neutral lowest"],
 "Cortisol indicates stress. Which teaching style adds pressure and which removes it?",
 "In Reeve and Tseng (2011) students with a <b>controlling</b> teacher had higher cortisol than the neutral group, and those with <b>autonomy-supportive</b> teaching had lower cortisol than the neutral group."),
("app","nst","Mr De Vries tells his class exactly what a good essay must contain, applies the same rules every week and gives feedback on progress. He also asks students what they think of the assignment and explains why it matters. How would self-determination theory describe his teaching?",
 ["High in structure and high in autonomy support","Controlling, because he sets the rules and the criteria","High in autonomy support but low in structure","High in structure but low in autonomy support"],
 "Judge two things separately: is he clear, and does he pressure or listen?",
 "Clear expectations, consistent rules and feedback are <b>structure</b>; asking for students' views and giving a rationale is <b>autonomy support</b>. SDT strongly distinguishes structure from <b>control</b>, which means pressuring students without regard for their perspective. The combination has been associated with higher autonomous motivation."),
("find","crit","In a natural experiment with over eight thousand Swedish students, some had attended primary schools that gave grades and others had not. What was found?",
 ["Grading was associated with lower achievement in grades 7 to 9, especially for lower-ability students","Grading was associated with higher achievement in grades 7 to 9, especially for lower-ability students","Grading was associated with lower achievement only for higher-ability students","Grading was unrelated to later achievement and to finishing secondary education"],
 "Direction of the association, and for whom it was strongest.",
 "Klapp (2015) pointed to a <b>negative association</b> between primary school grading and achievement in grades 7 to 9, and lower odds of finishing secondary education, especially for <b>lower-ability students</b>. It is an association from a natural experiment, not a randomized study."),
("def","crit","A teacher returns a presentation with one of four reactions. Which reaction would self-determination theory call informational?",
 ["\"Your opening made the question clear; next time, support the second claim with a source.\"","\"A 6. You are in the bottom half of the class.\"","\"You must do better than this if you want to pass.\"","\"I expected more from a student like you.\""],
 "Informational feedback helps you see how to improve or where you are competent. Controlling feedback pushes you toward an outcome.",
 "Feedback has <b>functional significance</b>: it is <b>informational</b> when it is efficacy relevant, and controlling when it is experienced as pressure. A bare grade with a rank mainly tells students where they stand relative to others, and \"you must\" is pressure."),
("app","teach","A school board introduces bonuses and penalties for teachers based on their classes' test scores. Based on the research reviewed by Ryan and Deci (2020), what is the most likely effect on teachers?",
 ["Lower autonomous motivation for teaching and less autonomy support toward students","Higher autonomous motivation for teaching and more autonomy support toward students","More effort, without any change in how they treat students","No effect on teachers, but more pressure felt by students"],
 "What do pressures from above do to teachers' own needs, and then to their teaching style?",
 "Pressures from above were negatively associated with teachers' <b>autonomous motivation</b> and with their <b>autonomy support</b> of students (Pelletier et al., 2002), and pressure to boost performance predicted more exhaustion. Teachers whose autonomy is frustrated tend to become more controlling."),
("comp","cmp","Which set of constructs does the handbook chapter on motivation name as very similar constructs about competence, coming from different theories?",
 ["Self-concept, self-efficacy and expectancies","Interest, task value and attributions","Mastery goals, mindsets and outcome expectations","Autonomy, relatedness and calibration"],
 "Which three all answer the question \"can I do this?\"",
 "In its future directions the chapter points to the similarity among constructs related to <b>competence</b> (self-concept, self-efficacy, expectancies) and among those related to <b>value</b> (intrinsic motivation, task value, interest). Attributions and mindsets are related to goals, but they are not competence beliefs."),
]
Q2=[
("def","comp","Which statement about competence beliefs matches the chapter on instructional practices?",
 ["It is a student's perception of competence, more than actual competence, that matters most for choices and behaviour","Competence beliefs matter only once a student's actual competence is high","Competence beliefs are fixed traits that classroom practices cannot change","Competence beliefs are relevant for achievement but not for effort or persistence"],
 "Perceived versus actual competence: which one drives what students choose and do?",
 "The chapter stresses that the <b>perception</b> of competence matters most for choices and behaviours, more so than actual competence. It also says competence beliefs influence goals, effort, persistence and emotions, and that motivation, unlike intelligence, is <b>influenced by the educational environment</b>."),
("app","comp","To boost the confidence of a struggling student, a teacher gives her tasks far below her level and step-by-step help, so that she gets everything right. What does the chapter on instructional practices predict?",
 ["Her perceived competence may be undermined, because the tasks provide no real mastery experience","Her perceived competence will grow, because every success is a mastery experience","Her perceived competence will be unaffected, but her interest will grow","Her perceived competence will grow, but only if the help is given by a peer"],
 "Is every success a mastery experience?",
 "Insufficiently challenging or overly scaffolded tasks do not provide <b>mastery experiences</b>, and students may read them as a sign that the teacher lacks confidence in them. What builds confidence is <b>appropriate challenge</b> with scaffolding: tasks that slightly exceed existing skills."),
("find","comp","Middle school students received critical feedback together with a message that the teacher had high expectations and was confident they could meet them. For whom was the benefit strongest?",
 ["African American students, particularly those who reported greater mistrust in school","White students, particularly those with high prior achievement","Students who were already confident, whatever their background","Students with low interest in the subject, whatever their background"],
 "A \"for whom\" question about one specific kind of feedback.",
 "In Yeager et al. (2014) <b>wise feedback</b> led to more revising and higher achievement, with stronger effects for <b>African American students</b>, particularly those with greater mistrust in school. The chapter's suggested reason: these students are at greater risk of reading critical feedback through racism and low-ability stereotypes, so the framing may help them most."),
("app","comp","A physics teacher wants to raise the confidence of girls in her class, who are underrepresented in the field. Which use of role models fits the chapter's advice best?",
 ["Stories of scientists the girls can identify with, including how they struggled and overcame setbacks","Stories of the most brilliant physicists in history and their flawless achievements","Demonstrations by the teacher herself, completed quickly and without errors","Films about famous experiments, without attention to the people who did them"],
 "Two properties of a good model: who it is, and what it shows.",
 "Modeling helps most when the model is <b>someone the student identifies with</b> and when it shows <b>struggle as part of learning</b>; students who read struggle stories performed better (Lin-Siegler et al., 2016). Seeing only ideal models can undermine perceived competence because the standard looks unreachable."),
("fig","comp","The table gives four practices that primarily support perceived competence, with the other kinds of motivation each can also support. Which entry belongs in the empty cell?",
 ["Relatedness and belonging","Autonomy","Interest and value","Growth mindset"],
 "Think about what watching a similar peer does besides showing a strategy.",
 "In Table 1 of Patall et al. (2022) <b>modeling and vicarious learning</b> can also support <b>relatedness and belonging</b>, especially when the model is similar to the student. Autonomy is listed for self-regulation instruction.",
 {"pre":"<table class=\"qt\"><tr><th>Practice</th><th>Can also support</th></tr><tr><td>Classroom structure, climate and norms</td><td>Values; mastery goals</td></tr><tr><td>Appropriate challenge and scaffolding</td><td>Mastery goals; growth mindset</td></tr><tr><td>Modeling and vicarious learning</td><td><b>?</b></td></tr><tr><td>Self-regulation instruction</td><td>Autonomy</td></tr></table><p style=\"font-size:.85rem;color:#5d6472;text-align:center;margin:0 0 6px\">After Patall et al. (2022), Table 1.</p>"}),
("find","aut","Which of the following is NOT named in the chapter on instructional practices as a condition under which offering choice has fewer benefits or can backfire?",
 ["The choice concerns the topic of an assignment instead of the method","The options are very numerous or hard to tell apart","The students do not know what makes a good choice","The choice is offered in a controlling way, steering students to one option"],
 "Three options are real conditions from the chapter. One is about the type of choice.",
 "The chapter names excessive or hard-to-discriminate options, lack of competence to choose, and choice given in a <b>controlling</b> manner. It says different <b>types of choice</b> do not appear to be uniformly more or less beneficial, so topic versus method is not such a condition."),
("app","aut","Four teachers introduce the same revision task. Which wording is autonomy supportive?",
 ["\"You could start with the chapter you found hardest; consider making a summary first.\"","\"You must start with chapter 3, and you should make a summary.\"","\"Do it this way because I said so.\"","\"Everyone who wants a good grade does it like this.\""],
 "Listen for invitation versus pressure in the words.",
 "Autonomy-supportive language is informational and non-controlling: <b>could</b>, <b>consider</b>, hints and suggestions. <b>Must</b> and <b>should</b> pressure students, and appeals to authority or to grades are controlling reasons."),
("def","aut","Students in a class regularly tell their teacher what they find interesting, ask for different examples and suggest how a lesson could be more useful to them. What is this called?",
 ["Agentic engagement","Autonomy support","Self-regulation instruction","Vicarious learning"],
 "Who is doing the shaping here: the teacher or the students?",
 "<b>Agentic engagement</b> is students deliberately trying to enrich their own learning by offering input to the teacher. <b>Autonomy support</b> is what the teacher does. Preliminary evidence suggests teachers respond to agentic engagement with more autonomy support."),
("app","val","A teacher must get her class through a dull but necessary grammar unit. Which explanation is most likely to support motivation, according to the chapter on instructional practices?",
 ["\"These rules will help you write the letters to the council that your group wants to send about the playground.\"","\"You need this because it will be on the test and it counts for your grade.\"","\"Every class in this year learns this, so we do too.\"","\"Do it because I am the teacher and I know what is good for you.\""],
 "A good rationale is concrete, takes the student's perspective, and appeals to the right kind of goal.",
 "Effective <b>rationales</b> are specific and concrete, connect to students' own goals, and work especially well when they appeal to <b>prosocial</b> or intrinsic goals. Reasons that appeal to grades, <b>social norms</b> or pressure can undermine motivation."),
("app","val","Noor has little interest in chemistry and little confidence in it. Her teacher wants her to see the value of the subject. Which approach does the chapter on instructional practices call particularly effective for a student like Noor?",
 ["Letting her write about how the material connects to her own life","Telling her clearly why chemistry is important for her future","Promising her a reward for every completed assignment","Showing her how well the best students in the class are doing"],
 "The right route to value depends on the student's starting interest and confidence.",
 "<b>Self-generated value</b> activities are particularly effective for students with <b>low interest and competence</b>; directly communicated rationales tend to be most effective for students high in both. A reward appeals to an extrinsic goal, and comparison with top students can harm perceived competence."),
("find","val","What does the chapter on instructional practices conclude about using digital technology to raise interest?",
 ["It can trigger interest because it is novel, but may not maintain it unless combined with other practices","It reliably maintains interest by itself, because students are used to technology","It raises achievement but has no effect on interest or enjoyment","It undermines interest, because it distracts from the content"],
 "Think of the difference between sparking interest and keeping it.",
 "Technology is new and exciting, so it can <b>trigger</b> interest; without other practices it may not <b>maintain</b> that interest. It works best combined with practices that emphasize purpose, contextualize content and engage students actively."),
("comp","use","The authors of the chapter on instructional practices distinguish well-established practices from promising ones with more limited causal evidence. Which practice is on their \"promising\" list?",
 ["Culturally relevant education","Providing choices","Clear classroom structure","Giving rationales"],
 "Which of these rests mostly on case studies and correlational work?",
 "The <b>promising</b> list: encouraging agency, digital technology, practices to support relatedness, and <b>culturally relevant education</b>, whose support is mostly qualitative with some recent correlational evidence. Choice, structure and rationales have experimental support."),
("find","grow","A meta-analysis combined the studies on programmes that teach students that intelligence can grow. What did it find for achievement?",
 ["A small positive effect, with analyses suggesting benefits only for at-risk students","A large positive effect for students at every achievement level","No effect for any group of students","A positive effect only for students who were already high achievers"],
 "Size of the effect, and for whom.",
 "Sisk et al. (2018) found a <b>small</b> positive main effect; moderator analyses suggested benefits for achievement only for academically <b>high-risk</b> and economically disadvantaged students. The chapter calls the evidence on these programmes mixed."),
("app","grow","A pupil solves a hard problem after several failed attempts. Which reaction from the teacher is most likely to support a growth mindset?",
 ["\"You tried three different approaches until one worked. That persistence paid off.\"","\"You are clearly very smart.\"","\"You are a natural at maths.\"","\"You did better than most of the class.\""],
 "Is the praise about a fixed quality of the person, or about what the pupil did?",
 "<b>Process praise</b> (effort, strategies, perseverance) promotes a growth mindset; <b>person praise</b> (being smart, being a natural) promotes a fixed mindset. Comparing with classmates emphasizes relative ability, which fosters performance goals."),
("find","grow","Judge these two statements, based on a meta-analysis of feedback.<br><b>I.</b> Compared with no feedback, receiving grades was associated with endorsing performance goals but was unrelated to mastery goals.<br><b>II.</b> Students who received comments endorsed higher mastery goals than students who received grades alone.",
 ["Both statements are true","Only statement I is true","Only statement II is true","Neither statement is true"],
 "Two comparisons: grades versus nothing, and comments versus grades.",
 "Both are reported from Koenka et al. (2021): <b>grades</b> went with performance goals and were unrelated to mastery goals, and <b>comments</b> went with higher mastery goals than grades alone. Evaluation that informs supports mastery; evaluation that ranks supports performance goals."),
("fig","grow","The table shows two patterns of beliefs that tend to occur together. Which entry belongs in the empty cell?",
 ["Internal, stable, uncontrollable causes such as lack of ability","Controllable causes such as effort or strategy use","External, unstable causes such as bad luck","External, stable causes such as a difficult subject"],
 "The left column is the pattern that goes with a fixed view of ability.",
 "Performance goals, <b>entity (fixed) beliefs</b> and <b>helpless attributions</b> co-occur: failure is explained by internal, stable, uncontrollable causes. Mastery goals, incremental beliefs and adaptive attributions (controllable causes for success, unstable causes for failure) form the other pattern.",
 {"pre":"<table class=\"qt\"><tr><th></th><th>Pattern 1</th><th>Pattern 2</th></tr><tr><td>Goal</td><td>Performance goals</td><td>Mastery goals</td></tr><tr><td>Belief about intelligence</td><td>Entity (fixed)</td><td>Incremental (growth)</td></tr><tr><td>Explanation after failure</td><td><b>?</b></td><td>Unstable causes (and success seen as controllable)</td></tr></table><p style=\"font-size:.85rem;color:#5d6472;text-align:center;margin:0 0 6px\">Our table, after Patall et al. (2022), section on growth mindset and mastery goals.</p>"}),
("find","bel","How does the link between belonging and academic outcomes such as retention and grades differ between groups of students?",
 ["It is often stronger for minoritized students than for white students","It is often stronger for white students than for minoritized students","It is found only among minoritized students","It is equally strong in all groups of students"],
 "Belonging matters for everyone. The question is where the link is stronger.",
 "Belongingness is often <b>more strongly</b> connected to retention, persistence and grades for <b>minoritized students</b> than for white students (Walton &amp; Cohen, 2007, 2011). The chapter stresses that belonging matters for all students, so \"only\" is wrong."),
("app","bel","A university wants to write a short message for first-year students who doubt whether they fit in. Which core message matches the belonging interventions described in the chapter?",
 ["Doubts about fitting in are common in the first year and they fade with time","Students who work hard enough will be accepted by the others","Some groups need more time to adapt to university than others","Fitting in is less important than getting good grades"],
 "Two words carry the intervention.",
 "The interventions convey that concerns about belonging are <b>common</b> and <b>temporary</b>, and not a function of one's social identity. A message that some groups adapt more slowly says the opposite: that belonging depends on who you are."),
("app","bel","A teacher wants a group project to build a sense of community and to prevent some students from leaving the work to others. Which design does the chapter on instructional practices support?",
 ["Groups of three or four with a common goal, in which each member is individually accountable","One large group with a shared grade and freedom to divide the work","Pairs formed by ability level, with a prize for the best individual","Self-chosen groups without fixed goals, so that students feel free"],
 "Look for small size, a shared goal, and something that makes each member count.",
 "The chapter lists common goals with adequate structure, <b>smaller groups</b>, positive interdependence and some <b>individual accountability</b>, which discourage <b>social loafing</b>. Ability grouping can activate negative social comparison, and no structure undermines collaboration."),
("app","use","A teacher gives all students the same treatment: free choice of tasks and an explanation of why each topic matters. Confident students respond well. According to the conclusion of the chapter on instructional practices, how may students with limited skills and little confidence experience this?",
 ["As demoralizing and lacking in supportive caring","In the same way as the confident students do","As more motivating than the confident students do","As irrelevant, without any effect on their motivation"],
 "The same practice, a different student: what does the chapter say about fit?",
 "The chapter says such strategies may not be ideal for <b>less confident</b> students, who may experience the choices and value messages as demoralizing and lacking in supportive caring. That is its point about <b>precision</b>: tailor the practice to the motivational challenge the student faces."),
("def","use","What do the authors of the chapter on instructional practices mean when they contrast universality with the need for precision?",
 ["Most practices are likely to benefit most students, but they work best when tailored to the student's specific motivational challenge","Practices that work in one culture never work in another, so each must be tested locally","Only practices tested in randomized experiments may be used with all students","Each practice supports exactly one kind of motivation and must be matched to it"],
 "Both halves must be in the answer: benefits for nearly everyone, and tailoring.",
 "The authors see some degree of <b>universality</b> in the benefits of most practices, yet argue that practices are most effective when <b>tailored</b> to the motivational challenge of a particular student in a particular context. They also stress overlap: one practice often supports several kinds of motivation."),
("comp","cmp","A teacher stops grading on a curve, starts using rubrics with fixed criteria, and returns results privately. Which motivation theory is she applying most directly?",
 ["Achievement goal theory","Expectancy-value theory","Interest theory","Attribution theory"],
 "What do students aim for when evaluation stops comparing them with each other?",
 "Evaluation against <b>absolute standards</b>, with comparison kept private, is part of a <b>mastery goal structure</b>, which comes from achievement goal theory: it signals that developing competence is valued. Curves highlight relative ability and foster performance goals."),
("comp","cmp","Which classroom practice follows most directly from the idea that self-efficacy has four sources?",
 ["Letting a student watch a similar classmate work through a problem she finds hard","Explaining how a topic will be useful in the student's future job","Letting students choose the order of the week's assignments","Telling new students that doubts about fitting in are common"],
 "Which option matches one of the four sources?",
 "Watching a similar peer succeed is a <b>vicarious experience</b>, one of the four sources of self-efficacy in social cognitive theory. A rationale targets <b>value</b>, choice targets autonomy, and a belonging message targets relatedness."),
("app","cmp","After a low grade Bram stops going to the extra maths sessions. He says: \"There is no point. I am just not a maths person.\" Which response fits the motivation research best?",
 ["Help him explain the grade by causes he can change, such as preparation and strategy, and give feedback on his process","Give him easier exercises so that he gets them all right","Let him choose freely which maths topics he wants to skip","Remind him that the final grade counts for his school report"],
 "Diagnose first: what does his sentence say about the cause of the failure?",
 "Bram gives an internal, stable, uncontrollable cause: a <b>helpless attribution</b>. <b>Attributional retraining</b> teaches students to see failures as unstable and successes as controllable, and process-focused feedback supports it. Easy tasks give no mastery experience, and pointing to the grade adds pressure."),
("app","cmp","A capable student asks why the class has to learn statistics. The teacher answers: \"Because it is on the exam.\" The student does the minimum from then on. Which diagnosis and remedy fit the motivation research best?",
 ["The reason given appeals to an extrinsic goal; a concrete reason tied to the student's own goals would support value and autonomy","The student lacks self-efficacy; easier tasks would restore her confidence","The student has a performance-avoidance goal; ranking the class would give her a target","The student lacks belonging; a group project would solve the problem"],
 "The student is capable, so look at the reason she was given.",
 "A <b>rationale</b> that appeals to an extrinsic goal such as grades can undermine motivation. A specific reason that takes the student's perspective supports <b>task value</b> and, in self-determination terms, helps her endorse the activity as her own. Nothing in the case points to low confidence or belonging."),
]

def rep(Q,i,**kw):
    q=list(Q[i])
    for k,v in kw.items():
        j={'s':0,'t':1,'q':2,'o':3,'spot':4,'why':5,'x':6}[k]
        if j==6:
            q=q[:6]+[v]
        else: q[j]=v
    Q[i]=tuple(q)
# ---------- set 1 ----------
rep(Q1,2,s="comp",t="ag",q="Mastery-avoidance goals and performance-avoidance goals are both avoidance goals. What separates them?",
 o=["Mastery-avoidance is about one's own competence slipping; performance-avoidance about looking incompetent","Mastery-avoidance is an autonomous form of motivation; performance-avoidance is a controlled form of motivation","Mastery-avoidance goes with higher achievement and performance-avoidance with lower achievement in the meta-analysis","Mastery-avoidance is about steering away from failure; performance-avoidance is about going for success"],
 spot="Same direction (away from something). Ask: away from what?",
 why="Mastery goals are about <b>developing</b> competence and performance goals about <b>demonstrating</b> it. With an avoidance focus, the first becomes avoiding a decline in one's own competence, the second avoiding appearing incompetent. Both avoidance goals had small <b>negative</b> links with achievement, so the achievement option is wrong.")
rep(Q1,4,o=["Attainment value","Utility value for a later goal","Intrinsic (interest) value","Cost"])
rep(Q1,6,o=["Expectancy matters more when value is high; neither makes up for the other","Expectancy and value each add a fixed amount, so their effects simply add up in every group","Value matters only for the students who have a low expectancy of success","Expectancy has no effect on achievement once value is taken into account"])
rep(Q1,7,s="comp",t="int",q="What is the main difference between situational interest and individual interest?",
 o=["Situational interest arises from the context; individual interest resides in the person and endures","Situational interest is felt as pressure from outside; individual interest is felt as one's own free choice","Situational interest is about usefulness for other goals; individual interest is about enjoying the activity itself","Situational interest predicts grades; individual interest predicts which courses students choose later on"],
 spot="Where does each kind of interest live: in the moment and the setting, or in the person?",
 why="<b>Situational interest</b> emerges from the context and is a state; <b>individual interest</b> is a more enduring preference that resides in the person, with a willingness to re-engage. Pressure versus choice is the controlled versus autonomous distinction from self-determination theory, a different theory.")
rep(Q1,8,o=["It helped students with low individual interest but undermined those with high interest","It supported involvement for students who already had a high individual interest, and for them only","It supported involvement for all students, and most strongly for those who already had high interest","It was unrelated to involvement, whatever the students' individual interest"])
rep(Q1,11,o=["Identified regulation rests on value; intrinsic motivation on interest and enjoyment","Identified regulation is a controlled form of motivation; intrinsic motivation is an autonomous form","Identified regulation comes from pressure by other people; intrinsic motivation comes from the person","Identified regulation is weaker and fades faster than intrinsic motivation"])
rep(Q1,12,o=["All links are small: positive for approach goals, negative for avoidance goals","Both mastery goals go with higher achievement and both performance goals with lower achievement","Performance-approach goals show the strongest positive link with achievement","Avoidance goals have large negative effects on achievement"],
 x={"chart":{"type":"bar","title":"Achievement goals and achievement: average correlations","x":["Mastery-approach","Performance-approach","Mastery-avoidance","Performance-avoidance"],"y":"Correlation with achievement","series":[{"name":"r","v":[0.11,0.06,-0.12,-0.13]}],"min":-0.2,"max":0.2,"note":"values from Hulleman et al. (2010), as reported by Linnenbrink-Garcia & Patall (2015)"}})
rep(Q1,13,s="fig",q="The chart shows how performance-approach goals correlated with achievement in a meta-analysis, for two types of questionnaire. Which conclusion fits the figure?",
 o=["The link depends on how the goal is measured, so the label alone does not give the direction","Performance-approach goals go with lower achievement, whichever type of questionnaire is used to measure them","Wanting to look smart goes with higher achievement than wanting to outperform other students","The two results cancel out, so these goals are unrelated to achievement"],
 spot="Same goal label on both bars, opposite signs. What differs between the bars?",
 why="With mostly <b>normative</b> items (outperforming others) the correlation was +.14; with items about <b>appearance</b> or evaluation (looking smart, demonstrating ability) it was −.14. So what the questionnaire asks decides the direction. Averaging the two to zero would hide exactly this difference.",
 x={"chart":{"type":"bar","title":"Performance-approach goals and achievement, by type of questionnaire item","x":["Outperforming others","Looking smart, showing ability"],"y":"Correlation with achievement","series":[{"name":"r","v":[0.14,-0.14]}],"min":-0.2,"max":0.2,"note":"values from Hulleman et al. (2010), as reported by Linnenbrink-Garcia & Patall (2015)"}})
rep(Q1,10,x={"pre":"<table class=\"qt\"><tr><th>Regulatory style</th><th>Perceived locus of causality</th></tr><tr><td>External regulation</td><td>External</td></tr><tr><td>Introjection</td><td>Somewhat external</td></tr><tr><td>Identification</td><td><b>?</b></td></tr><tr><td>Integration</td><td>Internal</td></tr></table><p style=\"font-size:.85rem;color:#5d6472;text-align:center;margin:0 0 6px\">After Ryan &amp; Deci (2020), Figure 1.</p>"})
rep(Q1,15,o=["His expectation of success on the next exam","His pride and his self-esteem as a learner of languages","His feelings of guilt or shame about the result","His willingness to help others"])
rep(Q1,16,o=["Effort explanations are consistently more beneficial than ability explanations","Training students to see their failures as unstable has been found to have beneficial effects","Students with mastery goals tend to make more adaptive attributions","Attributions are associated with different emotions and expectancies"])
rep(Q1,22,o=["\"Your opening made the question clear; next time, add a source for claim two.\"","\"A 6. That puts you in the bottom half of the class for this assignment.\"","\"You must do better than this if you want to pass.\"","\"I expected much more from a student like you; this is not the level you showed last term.\""])
# ---------- set 2 ----------
rep(Q2,0,o=["Perceived competence matters more for choices and behaviour than actual competence","Competence beliefs start to matter only once a student's actual competence is high","Competence beliefs are fixed traits that classroom practices cannot change","Competence beliefs are relevant for achievement, but not for effort, persistence or emotions in class"])
rep(Q2,1,o=["It may be undermined, because such tasks give no real mastery experience","It will grow, because every success counts as a mastery experience, however easy the task was","It will stay the same, but her interest in the subject will grow","It will grow, but only if the help comes from a peer"])
rep(Q2,2,o=["African American students, particularly those with greater mistrust in school","White students, particularly those who already had high prior achievement in the subject","Students who were already confident, whatever their background","Students with low interest in the subject, whatever their background"])
rep(Q2,3,s="comp",q="A teacher can show students flawless experts, or people who visibly struggle before they succeed. How do the two kinds of model differ in their likely effect on students' perceived competence, according to the chapter on instructional practices?",
 o=["Models who show struggle help; seeing only ideal models can undermine it","Ideal models raise it most, because they show exactly what excellent performance looks like","Both raise it equally, as long as the model is an adult whom the students respect and trust","Neither affects it, because perceived competence comes from one's own mastery experiences only"],
 spot="Two kinds of model, one outcome. Which one makes the standard look reachable?",
 why="Students who read about scientists' <b>struggles</b> performed better (Lin-Siegler et al., 2016), and modeling helps most when students can identify with the model. Seeing <b>only ideal models</b> can undermine perceived competence, because the standard looks unreachable. Watching others is itself a source of confidence, so the last option is wrong.")
rep(Q2,5,o=["The choice concerns the topic of an assignment instead of the method","The options are so numerous or so similar that students find them hard to tell apart","The students do not know what makes a good choice","The choice is offered in a controlling way, steering students to one option"])
rep(Q2,6,o=["\"You could start with the chapter you found hardest; consider making a summary first.\"","\"You must start with chapter 3, and you should make a summary.\"","\"Do it this way because I said so.\"","\"Everyone who wants a good grade in this course does it like this, so you should do so too.\""])
rep(Q2,8,o=["\"These rules will help you write your group's letter to the council about the playground.\"","\"You need this because it will be on the test next month, and the test counts for your final grade.\"","\"Every class in this year learns this, so we do too.\"","\"Do it because I am the teacher and I know what is good for you.\""])
rep(Q2,9,s="comp",q="A teacher can tell students directly why a subject is valuable, or let them write about its value for their own lives. For whom is each approach most effective, according to the chapter on instructional practices?",
 o=["Told for students high in interest and competence; self-generated for those low in both","Told for students low in interest and competence; self-generated for students who are high in both","Told for younger students; self-generated for older students, whatever their interest or competence","Both work equally well for all students, as long as the reason is concrete"],
 spot="Two routes to value. Match each to the student's starting interest and confidence.",
 why="Directly communicated <b>rationales</b> tend to be most effective for students high in interest and competence, while <b>self-generated</b> value is particularly effective for students low in both. The tempting mistake is the mirror image: thinking that the weakest students need to be told.")
rep(Q2,10,o=["It can trigger interest through novelty, but may not maintain it by itself","It reliably maintains interest without other practices, because students are used to technology","It raises achievement but has no effect on interest or enjoyment","It undermines interest, because it distracts from the content"])
rep(Q2,11,o=["Culturally relevant education","Providing choice opportunities","Clear classroom structure and norms","Giving rationales"])
rep(Q2,12,o=["A small positive effect, with benefits only for at-risk students in further analyses","A large positive effect for students at every achievement level and in every type of school","No effect for any group of students","A positive effect only for students who were already high achievers"])
rep(Q2,13,s="fig",q="The table links what a teacher emphasizes to what it tends to promote in students. Which entry belongs in the empty cell?",
 o=["A growth mindset","A fixed mindset","Performance goals","Triggered situational interest"],
 spot="Read the rows as pairs: what the teacher stresses, and the belief or goal it feeds.",
 why="<b>Process praise</b> (effort, strategies, perseverance) promotes a <b>growth mindset</b>; person praise promotes a fixed mindset, and stressing relative ability fosters performance goals. The chapter adds that the praise findings have not been fully replicated.",
 x={"pre":"<table class=\"qt\"><tr><th>The teacher emphasizes</th><th>Tends to promote</th></tr><tr><td>Being smart, being a natural</td><td>A fixed mindset</td></tr><tr><td>Effort, strategies and perseverance</td><td><b>?</b></td></tr><tr><td>Relative ability: curves and rankings</td><td>Performance goals</td></tr></table><p style=\"font-size:.85rem;color:#5d6472;text-align:center;margin:0 0 6px\">Our table, after Patall et al. (2022), section on growth mindset and mastery goals.</p>"})
rep(Q2,14,s="fig",q="The table summarizes a meta-analysis of feedback. Which entry belongs in the empty cell?",
 o=["Unrelated","Higher","Lower","Higher, but only for at-risk students"],
 spot="Row 1 compares grades with no feedback at all. What did grades do for learning-oriented goals?",
 why="In Koenka et al. (2021), receiving <b>grades</b> (compared with no feedback) was associated with performance goals but was <b>unrelated</b> to mastery goals. <b>Comments</b>, compared with grades alone, went with higher mastery goals.",
 x={"pre":"<table class=\"qt\"><tr><th>Comparison</th><th>Performance goals</th><th>Mastery goals</th></tr><tr><td>Grades versus no feedback</td><td>Higher</td><td><b>?</b></td></tr><tr><td>Comments versus grades alone</td><td>(not shown)</td><td>Higher</td></tr></table><p style=\"font-size:.85rem;color:#5d6472;text-align:center;margin:0 0 6px\">Our table, after Koenka et al. (2021) as reported by Patall et al. (2022).</p>"})
rep(Q2,15,o=["Internal, stable, uncontrollable causes such as lack of ability","Controllable causes such as effort or strategy use","External, unstable causes such as bad luck or an unusually hard test on that day","External, stable causes such as a difficult subject"])
rep(Q2,16,o=["It is often stronger for minoritized students than for white students","It is often stronger for white students than for minoritized students in the same school","It is found only among minoritized students","It is equally strong in all groups of students"])
rep(Q2,17,s="def",q="Which description matches the social-belonging interventions discussed in the chapter on instructional practices?",
 o=["Messages that doubts about fitting in are common and fade with time","Group projects with common goals in which students from different backgrounds depend on each other","Mentoring programmes in which a senior student guides a first-year student for a year","Lessons that connect the content to students' cultural backgrounds and communities"],
 spot="Two words carry the intervention.",
 why="The interventions convey that concerns about belonging are <b>common</b> and <b>temporary</b>, and not a function of one's social identity. Group work and culturally relevant teaching can also support belonging, but they are different practices.")
rep(Q2,18,s="def",q="In a project group of eight with one shared grade, two students leave the work to the others. What is this called, and which design features discourage it according to the chapter on instructional practices?",
 o=["Social loafing; smaller groups and individual accountability","Social comparison; grouping students by ability level and rewarding the best group","Amotivation; letting students choose their own groups and their own goals","Agentic engagement; giving the group more freedom to divide the work as it likes"],
 spot="Name the behaviour first, then look for small size and something that makes each member count.",
 why="Leaving the work to others is <b>social loafing</b>. The chapter lists common goals with adequate structure, <b>smaller groups</b>, positive interdependence and some <b>individual accountability</b>. Agentic engagement is the opposite kind of behaviour: students actively shaping their own learning.")
rep(Q2,19,o=["As demoralizing and lacking in supportive caring","In the same way as the confident students do, because the practices are universal","As more motivating than the confident students do","As irrelevant, without any effect on their motivation"])
rep(Q2,20,o=["Most practices help most students, but work best when tailored to a student's motivational challenge","Practices that work in one culture never work in another, so each must be tested locally","Only practices tested in randomized experiments may be used with all students","Each practice supports exactly one kind of motivation and must be matched to the student who lacks that kind"])
rep(Q2,22,o=["Letting a student watch a similar classmate solve a hard problem","Explaining how a topic will be useful in the job the student hopes to have later","Letting students choose the order of the week's assignments","Telling new students that doubts about fitting in are common"])
rep(Q2,23,o=["Help him see causes he can change, such as strategy, and give feedback on his process","Give him easier exercises for a few weeks, so that he gets them all right and feels successful again","Let him choose freely which maths topics he wants to skip","Remind him that the final grade counts for his school report"])
rep(Q2,24,o=["The reason appeals to an extrinsic goal; a concrete reason tied to her own goals would help","She lacks self-efficacy; a period of easier tasks would restore her confidence in statistics","She has a performance-avoidance goal; ranking the class would give her a clear target to aim for","She lacks belonging; a group project would solve the problem"])

def mk(Q):
    out=[]
    for q in Q:
        d={"s":q[0],"t":q[1],"q":q[2],"o":q[3],"a":0,"spot":q[4],"why":q[5]}
        if len(q)>6:
            x=q[6]
            if "chart" in x: d["chart"]=x["chart"]
            if "pre" in x: d["q"]=q[2]+x["pre"]
        assert len(set(q[3]))==4
        out.append(d)
    assert len(out)==25,len(out)
    return out
S1,S2=mk(Q1),mk(Q2)
for name,S in (('1',S1),('2',S2)):
    longest=[i for i,d in enumerate(S) if len(d['o'][0])>max(map(len,d['o'][1:]))]
    from collections import Counter
    print(name,Counter(d['s'] for d in S),'correct longest:',len(longest),longest); assert not any('\u2014' in json.dumps(d,ensure_ascii=False) for d in S)
js="// Educational Psychology · Theme 2 · Motivation. Two sets of 25, written from the three readings and the four learning goals of the theme. There are no past exams yet, so the sets follow an evidence-based blueprint: tied to a learning goal and central in a reading. New contexts and new question shapes; options are shuffled.\n"
js+="EXAMS.push("+json.dumps({"id":"t2s1","group":"t2","shuffle":True,"title":"Theme 2 · Set 1 · The six theories and self-determination theory","blurb":"25 exam-style questions on the motivation theories: students' thoughts to classify, findings, the taxonomy of motivation, and charts and tables to read. Charts marked illustrative use made-up numbers that follow the pattern in the reading.","questions":S1},ensure_ascii=False)+");\n"
js+="EXAMS.push("+json.dumps({"id":"t2s2","group":"t2","shuffle":True,"title":"Theme 2 · Set 2 · Teaching practices, comparing and applying","blurb":"25 exam-style questions on what teachers can do: classroom cases to diagnose, practices to choose and to tailor, the chapter's tables, and questions that link a practice back to its theory.","questions":S2},ensure_ascii=False)+");\n"
open('/home/claude/dashshboard-/edpsy-exams/sets/t2.js','w',encoding='utf-8').write(js)
