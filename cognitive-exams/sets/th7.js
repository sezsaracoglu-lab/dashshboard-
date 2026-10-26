// Theme 7 · Problem solving and creativity: practice sets written from the theme readings. Options are shuffled.
EXAMS.push({
 "id": "t7s1",
 "group": "t7",
 "shuffle": true,
 "title": "Theme 7 · Set 1",
 "blurb": "25 questions on Theme 7 (Problem solving and creativity), covering all its readings and the five exam skills: key concepts, main findings, figures and tables, comparing theories and applying them. Your results show your score per topic and per skill.",
 "questions": [
  {
   "s": "def",
   "t": "ps",
   "q": "Which statement about algorithms and heuristics is NOT correct?",
   "o": [
    "A heuristic guarantees a correct solution, but usually takes longer than an algorithm",
    "An exhaustive search, in which all possible answers are tried, is an example of an algorithm",
    "A heuristic ignores some alternatives and explores only those that seem likely to work",
    "Everyday problems are more often solved successfully with heuristics than with algorithms"
   ],
   "a": 0,
   "spot": "NOT correct + algorithm vs heuristic: check which of the two owns the guarantee.",
   "why": "An <b>algorithm</b> always produces a solution, but can be slow (an exhaustive search of every letter order of an anagram). A <b>heuristic</b> is a rule of thumb that is usually correct and fast, but gives <b>no guarantee</b>. The first statement swaps the two. The last statement is true: it is one reason psychologists study heuristics more than algorithms."
  },
  {
   "s": "app",
   "t": "cre",
   "q": "An advertising team must invent a new slogan for a bicycle brand. Every idea in the first ten minutes is a variation on “freedom” or “speed”. According to the dual-process model of creative idea generation, what has to happen before truly new ideas can appear?",
   "o": [
    "Obvious, dominant ideas must first be inhibited; then System 2 can explore new concepts",
    "Control must be relaxed, so that loose and remote associations from System 1 can flow freely",
    "The team must trust fast intuitive judgements, because deliberate analysis blocks originality",
    "The team must lower its working-memory load, so that more ideas can be held in mind at once"
   ],
   "a": 0,
   "spot": "Stuck on the same obvious ideas = fixation. Which process gets you past fixation in the dual-process model?",
   "why": "In the <b>dual-process model</b> (Cassotti et al., 2016a, tested by Camarda et al., 2018), the fast heuristic System 1 offers the most accessible ideas, and these cause <b>fixation</b>. You first have to <b>inhibit</b> them and then use deliberate System 2 reasoning (conceptual expansion). Relaxing control is the <b>disinhibition view</b>, which Camarda's results contradicted. Working-memory load had no effect in their Experiment 2."
  },
  {
   "s": "fig",
   "t": "ps",
   "q": "Participants first read 16 short scenarios. Later they read 8 new scenarios and, for each one, chose which earlier scenario seemed most analogous. Each new scenario resembled one earlier scenario on the surface and another one in its underlying structure. Half of the participants thought aloud while choosing. Which conclusion fits the figure best?",
   "chart": {
    "type": "bar",
    "title": "Analogous scenarios chosen",
    "x": [
     "Thinking aloud",
     "Working silently"
    ],
    "y": "Mean number chosen (of 8)",
    "series": [
     {
      "name": "Surface match",
      "v": [
       3.8,
       1.9
      ]
     },
     {
      "name": "Structural match",
      "v": [
       1.0,
       2.3
      ]
     }
    ],
    "note": "Lane & Schooler (2004), as reported in Robinson-Riegler, Table 12.3",
    "min": 0,
    "max": 5
   },
   "o": [
    "Thinking aloud shifted choices toward surface matches and away from structural matches",
    "Thinking aloud improved analogy finding overall, because more analogies were chosen in total",
    "Hearing the scenarios instead of reading them helped people find the structural matches",
    "Working silently led people to choose mainly surface matches rather than structural ones"
   ],
   "a": 0,
   "spot": "Two groups x two kinds of match: compare the pattern across the bars, not the totals.",
   "why": "Thinking aloud: 3.8 surface versus 1.0 structural matches. Silent: 1.9 versus 2.3. Putting things into words pulls attention to what is <b>easy to verbalise</b> (concrete surface details) at the cost of the relations: <b>verbal overshadowing</b> (Lane & Schooler, 2004). The total is not the point, because the useful <b>structural</b> analogies dropped. Hearing versus reading was a different study (Markman et al., 2007)."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "In Gick and Holyoak's (1980) first studies, 10% of participants who received only the radiation problem found the convergence solution, against 30% of participants who had first studied an analogous military story. What does the difference of 20% indicate?",
   "o": [
    "The share who noticed the analogy on their own and used it",
    "The share who could map the story onto the problem only after a hint",
    "The share who formed a convergence schema by comparing two stories",
    "The share who reached the solution through insight without any story"
   ],
   "a": 0,
   "spot": "Story versus no story, and nobody was told to use the story: the gain = spontaneous transfer.",
   "why": "No one in the story group was told the story was relevant, so the extra 20% must be people who <b>spontaneously noticed</b> the analogous relationship and used it. It also shows how rare spontaneous transfer is: 70% still missed it. Hints and comparing <b>two stories</b> (schema induction) were tested in later studies, not in this comparison."
  },
  {
   "s": "comp",
   "t": "ps",
   "q": "Gestalt psychologists saw insight as a special, sudden process that differs from ordinary step-by-step thinking. Which finding fits this view LEAST well?",
   "o": [
    "Smith (1995a): insights can also develop gradually and incrementally over time",
    "Metcalfe and Wiebe (1987): warmth ratings stayed low until just before an insight solution",
    "Metcalfe (1986): people predict their own success on insight problems poorly",
    "Köhler (1927): after jumping in vain, Sultan suddenly stacked boxes to reach the bananas"
   ],
   "a": 0,
   "spot": "LEAST fits a 'sudden, special' view → look for the finding that says insight is gradual.",
   "why": "The Gestalt view (Wertheimer, <b>Köhler</b>) and the neo-Gestalt work of <b>Metcalfe</b> both say insight is sudden and different from routine solving: warmth stays cold and then jumps, and people cannot predict their success. <b>Smith (1995a)</b> argues that insights need not be sudden “aha” moments: they can build up gradually, which fits the Gestalt view least."
  },
  {
   "s": "def",
   "t": "cre",
   "q": "In Camarda et al. (2018), creative performance on the egg task was scored in three ways. What did <i>expansivity</i> measure?",
   "o": [
    "The number of solutions outside the three metacategories that make up the fixation effect",
    "The number of different solution categories that a participant's ideas came from",
    "The total number of solutions a participant proposed within the five minutes",
    "The average originality of a participant's ideas as rated by expert judges"
   ],
   "a": 0,
   "spot": "Three scores: how many (fluidity), how varied (flexibility), how far past the obvious (expansivity).",
   "why": "<b>Fluidity</b> = number of solutions; <b>flexibility</b> = number of different categories (out of 54); <b>expansivity</b> = number of solutions outside the fixation effect, that is, outside the three obvious metacategories (damping the shock, protecting the egg, slowing the fall). Expansivity is known to correlate highly with expert ratings, but it is not itself an expert rating."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "Every evening, Mira picks the lesson in her language app that adds the most points to today's score. She keeps skipping the grammar module, which earns few points this week but would make all later lessons much easier. Which strategy is she using?",
   "o": [
    "Hill climbing",
    "Means-ends analysis",
    "The analogy approach",
    "An exhaustive search"
   ],
   "a": 0,
   "spot": "Always the step that looks like the most progress right now, missing a better long-term route.",
   "why": "With <b>hill climbing</b> you choose, at every choice point, the alternative that seems to lead most directly to the goal. It encourages <b>short-term goals</b> and misses indirect routes with greater long-term benefits, like the student who takes a job straight after graduating instead of a graduate degree. The <b>means-ends heuristic</b> would split the goal into subgoals and could accept a temporary step back."
  },
  {
   "s": "fig",
   "t": "ps",
   "q": "Participants tried to solve Duncker's radiation problem after different kinds of experience with an analogous military story (a general captures a fortress by sending small groups along many mined roads at once).<br><table class=\"qt\"><tr><th>Before the radiation problem</th><th>Solved it</th></tr><tr><td>No story, or an irrelevant story</td><td>fewer than 10%</td></tr><tr><td>Memorised the military story for a supposed recall test</td><td>30%</td></tr><tr><td>Worked out the military solution themselves (those who succeeded)</td><td>41%</td></tr><tr><td>Received the military solution plus a hint to use it</td><td>about 75%</td></tr></table>Which conclusion is best supported by the table?",
   "o": [
    "Transfer is strongest when the source solution is given and its relevance is pointed out",
    "Working out the source solution yourself produces the strongest transfer to the new problem",
    "Memorising the analogous story is enough to make most people transfer its solution",
    "An analogous story helps only when it comes from the same domain as the target problem"
   ],
   "a": 0,
   "spot": "Rank the rows from high to low and ask what the top row has that the others lack.",
   "why": "The highest rate (about 75%) came when people were handed the solution and told to apply it. Solvers who found the military solution themselves transferred it less often (41%), and merely memorising the story gave 30%. The military story is from a completely different domain than medicine and still helped, so same-domain stories are not required (more similar domains do make transfer more likely). Positive transfer depends on noticing that the story is relevant."
  },
  {
   "s": "find",
   "t": "cre",
   "q": "In Experiment 2 of Camarda et al. (2018), participants produced egg-task ideas while also remembering complex sequences of dot positions in a grid. Compared with doing the egg task alone, what happened?",
   "o": [
    "Neither fluidity nor expansivity differed significantly from the single task",
    "They produced fewer ideas, just as under the incongruent Stroop task in Experiment 1",
    "They produced significantly more ideas, as the view that working-memory depletion helps predicts",
    "They produced as many ideas, but fewer of them fell outside the fixation categories"
   ],
   "a": 0,
   "spot": "Second experiment, different load (working memory instead of inhibition): did creativity change at all?",
   "why": "Working-memory load had <b>no significant effect</b>: fluidity 11.08 versus 10.45 (p = .68), expansivity 5.24 versus 5 (p = .81). The slightly higher number is not significant, so it does not support Lin and Lien (2013b), who predicted that depleting working memory would help. The contrast with Experiment 1 suggests that the creative cost is specific to <b>inhibitory control</b>."
  },
  {
   "s": "comp",
   "t": "ps",
   "q": "Both the means-ends heuristic and the hill-climbing heuristic try to reduce the distance to a goal. What distinguishes them?",
   "o": [
    "Means-ends uses subgoals and allows a needed step back; hill climbing sees only the next step",
    "Means-ends guarantees a correct solution; hill climbing, being a heuristic, gives no such guarantee",
    "Hill climbing sets subgoals first; means-ends looks only one step ahead at each choice point",
    "Means-ends describes computer programs such as GPS; hill climbing describes human solvers"
   ],
   "a": 0,
   "spot": "Two 'get closer to the goal' heuristics: which one plans in subgoals, which one sees only the next step?",
   "why": "<b>Means-ends analysis</b> divides the problem into subproblems and reduces the difference for each, which can include a temporary step away from the goal (step 6 of the elves-and-goblins problem), even though people dislike such detours. <b>Hill climbing</b> only looks at the next step and always picks the one that seems most direct, so it can get stuck. Both are heuristics, so neither guarantees a solution, and GPS was built to mimic how humans use means-ends analysis."
  },
  {
   "s": "def",
   "t": "ps",
   "q": "Someone first opened a locked car with a bent coat hanger; thieves first opened simple spring locks with a credit card. Sternberg et al. use these examples to show what it takes to overcome",
   "o": [
    "functional fixedness",
    "the hill-climbing heuristic",
    "negative transfer",
    "transparency"
   ],
   "a": 0,
   "spot": "An everyday object used for something other than its usual job.",
   "why": "<b>Functional fixedness</b> is the inability to see that an object with a known use can also serve other functions. Breaking free of it let people use a coat hanger as a lock tool. It is a type of <b>mental set</b>. <b>Negative transfer</b> is broader: an earlier problem making a later one harder."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "A hospital manager wants to shorten waiting times in the emergency department. Because both involve “welcoming people at a front desk”, she copies the self-service check-in kiosks of a hotel chain, which serve guests in order of arrival. The plan fails, because emergency patients must be seen in order of urgency. Which error did she make?",
   "o": [
    "Transparency: she saw an analogy in similar content where the structure differs",
    "Functional fixedness: she could not see a new use for an object she already knew",
    "Mental set: she kept using a procedure that had worked for her on earlier problems",
    "Incubation: she set the problem aside too long before choosing a solution"
   ],
   "a": 0,
   "spot": "Two situations that look alike on the surface but work differently underneath.",
   "why": "<b>Transparency</b> means seeing an analogy that is not really there because the <b>content</b> is similar. A hotel desk and an emergency desk look alike, but their structure differs: first come first served versus urgency first. This leads to negative transfer between problems that are not isomorphs. Mental set is about reusing your own earlier procedure, which is not what happened here."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "Kounios et al. (2006) measured brain activity while participants prepared for a problem, before they had seen it. What did they find?",
   "o": [
    "Those who later produced an insight solution showed strong frontal activation; the others showed comparable occipital activation",
    "Those who later produced an insight solution showed strong occipital activation; the others showed frontal activation",
    "Right hippocampus activity during preparation predicted who would later solve the problem analytically",
    "Activity during preparation did not differ between people who did and did not later produce an insight"
   ],
   "a": 0,
   "spot": "Brain activity BEFORE the problem appears: which lobe goes with later insight?",
   "why": "During preparation, later insight solvers had substantial activation in the <b>frontal lobes</b>; people who would not produce an insightful solution had comparable activation in the <b>occipital lobes</b>. This suggests that some people are more inclined to use insight, and that insight involves <b>advanced planning</b> before the problem is even shown. The right hippocampus is linked to forming the insight itself (Luo & Niki, 2003)."
  },
  {
   "s": "fig",
   "t": "cre",
   "q": "The figure shows how many of participants' egg-task ideas fell outside the fixation categories when the egg task was done alone, or together with a congruent or an incongruent Stroop task. Which statement is NOT supported by these results?",
   "chart": {
    "type": "bar",
    "title": "Ideas outside the fixation categories (expansivity)",
    "x": [
     "Egg task only",
     "+ congruent Stroop",
     "+ incongruent Stroop"
    ],
    "y": "Mean number of ideas",
    "series": [
     {
      "name": "Expansivity",
      "v": [
       3.12,
       2.82,
       1.73
      ]
     }
    ],
    "note": "Camarda et al. (2018), Experiment 1, condition means",
    "min": 0,
    "max": 4
   },
   "o": [
    "Any second task makes it harder to come up with ideas outside the fixation categories",
    "Loading inhibitory control reduced the number of ideas outside the fixation categories",
    "A second task that needs no inhibition left this score close to the single-task level",
    "The pattern runs against the view that weaker inhibition frees more original ideas"
   ],
   "a": 0,
   "spot": "NOT supported + three bars: compare the middle bar (second task, no inhibition) with the first.",
   "why": "With the congruent Stroop task (a second task without inhibition) participants scored 2.82, close to 3.12 for the egg task alone (no significant difference). Only the incongruent version, which loads <b>inhibitory control</b>, lowered the score to 1.73. So it is not “any second task”. Fewer original ideas under inhibition load contradicts the <b>disinhibition view</b> and fits the <b>dual-process model</b>."
  },
  {
   "s": "comp",
   "t": "cre",
   "q": "Camarda et al. review earlier studies on inhibition and creativity. Which finding is correctly paired with the view it was taken to support?",
   "o": [
    "ADHD and bipolar patients giving more original associations than healthy participants: disinhibition view",
    "Industrial designers showing more efficient inhibitory control than a control group: disinhibition view",
    "Negative correlations between inhibitory-control scores and divergent thinking: dual-process view",
    "Inferior frontal gyrus activation rising with the originality and appropriateness of ideas: disinhibition view"
   ],
   "a": 0,
   "spot": "Ask of each finding: does it link LESS control or MORE control to creativity?",
   "why": "Findings where <b>weaker</b> control goes with more creativity support the <b>disinhibition view</b>: negative correlations, and patients with ADHD or bipolar disorder (often linked to reduced inhibition) giving more original ideas. Findings where <b>stronger</b> control goes with more creativity support the <b>dual-process view</b>: designers with better inhibitory control, and the <b>inferior frontal gyrus</b> (an inhibition region) tracking originality."
  },
  {
   "s": "def",
   "t": "ps",
   "q": "Researchers use a specific term for a set of problems that have the same underlying structure and solution, but different specific details. What is this term?",
   "o": [
    "Problem isomorphs",
    "Problem spaces",
    "Transformation problems",
    "Ill-structured problems"
   ],
   "a": 0,
   "spot": "Same structure, different details.",
   "why": "<b>Problem isomorphs</b> share their underlying structure and solution but differ in surface details, like the radiation and military problems. A <b>problem space</b> is the set of states and moves within one problem. A <b>transformation problem</b> is one you solve by moving from start to goal through a series of steps."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "An escape-room company notices that groups solve a puzzle in which a rope must be set swinging more often when their warm-up included arm-swinging exercises. Which idea from the readings best explains this?",
   "o": [
    "Embodied cognition: movements of one's own body influence how a problem is represented",
    "Situated cognition: cues in the room itself suggest the right representation of the problem",
    "Incubation: the warm-up lets the problem be processed without conscious thought",
    "Positive transfer: solving an earlier, similar puzzle made the new one easier"
   ],
   "a": 0,
   "spot": "Body movement changes problem solving → body-based or environment-based cues?",
   "why": "Cues from your own body belong to <b>embodied cognition</b>; cues from the environment to <b>situated cognition</b>. In Thomas and Lleras (2009), people who had swung their arms during an exercise break solved the two-rope problem more often. The warm-up came before the puzzle, so there was no stuck problem to incubate, and no earlier puzzle was solved."
  },
  {
   "s": "find",
   "t": "cre",
   "q": "In Experiment 1 of Camarda et al., the authors analysed only fluidity and expansivity and left flexibility out of the analysis. Why?",
   "o": [
    "Flexibility correlated above .80 with fluidity, so analysing it as well would be redundant",
    "Flexibility could not be scored reliably, because there were too many solution categories",
    "Flexibility did not differ between the three conditions, so it was not worth reporting",
    "Flexibility measures working memory rather than creativity, so it was kept for Experiment 2"
   ],
   "a": 0,
   "spot": "Why would researchers drop one of their own measures? Think about overlap between measures.",
   "why": "Fluidity and flexibility were very highly correlated, r = .82. With a correlation above .80 the two scores carry almost the same information, so the authors analysed fluidity and expansivity only, <b>to avoid redundancy</b>. Fluidity and expansivity correlated less strongly (r = .61), so expansivity adds something: it measures getting past the <b>fixation effect</b>."
  },
  {
   "s": "comp",
   "t": "ps",
   "q": "Laboratory studies such as Gick and Holyoak's suggest that people rarely notice structural analogies on their own. Which finding gives a more hopeful picture, and why?",
   "o": [
    "Blanchette and Dunbar (2000): analogies people produced themselves were structural, so the lab may underestimate analogy use",
    "Lane and Schooler (2004): thinking aloud made people find more structural analogies, so talking problems through is key",
    "Luchins (1942): people readily reuse a procedure that worked before, so solutions transfer automatically",
    "Gick and Holyoak (1983): a diagram of converging arrows let most people notice the analogy by themselves"
   ],
   "a": 0,
   "spot": "Look for the study where people's analogies turned out to be MORE structural than lab results suggest.",
   "why": "When <b>Blanchette and Dunbar (2000)</b> let participants generate their own analogies, these shared <b>structural</b> rather than surface similarity with the target, which suggests the poor lab results are partly an artifact of the lab. Lane and Schooler found the opposite of the second option: thinking aloud pushed people toward <b>surface</b> matches. The diagram in Gick and Holyoak did not help (40% versus 22%)."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "Two students study the same worked examples in physics before an exam with new problems. Anouk asks herself <i>why</i> each example was solved the way it was; Bram makes sure he knows <i>how</i> each solution goes, step by step. What do the readings predict?",
   "o": [
    "Anouk is more likely to transfer the examples to the new, unsolved problems",
    "Bram is more likely to transfer, because he can reproduce every step exactly",
    "Both transfer equally well, because they studied exactly the same examples",
    "Neither transfers, because worked examples do not help with new problems"
   ],
   "a": 0,
   "spot": "Same examples, different study goal: understanding why versus memorising how.",
   "why": "Chi et al. (1989) found that positive transfer from solved to unsolved physics problems was more likely in students who tried to understand <b>why</b> an example was solved that way than in students who only focused on <b>how</b>. Asking why directs attention to the <b>structure</b> of the solution, which is what carries over. We usually find analogies only when we actively look for them."
  },
  {
   "s": "def",
   "t": "ps",
   "q": "What makes a problem ill-structured?",
   "o": [
    "There is no clear, readily available path to the solution, and the problem space is not well defined",
    "The problem has no solution, so the solver must eventually give up or change the goal",
    "The problem contains irrelevant information, such as a ratio that plays no role in the answer",
    "The problem can only be solved by an algorithm that tries out every possible answer"
   ],
   "a": 0,
   "spot": "Ill-structured = something is missing about the ROUTE, not about the answer.",
   "why": "<b>Ill-structured problems</b> have no clear, readily available path to the solution and, by definition, no well-defined <b>problem space</b>. Much of the difficulty lies in building a suitable representation and a plan. They do have solutions, often more than one. Irrelevant information (the sock ratio) appears in some insight problems, but it is not what defines them."
  },
  {
   "s": "fig",
   "t": "ps",
   "q": "Participants have just solved six water-jar problems with the same formula: fill jar B, then pour off jar A once and jar C twice. They now get these problems (capacities in cups).<br><table class=\"qt\"><tr><th>Problem</th><th>Jar A</th><th>Jar B</th><th>Jar C</th><th>Required</th></tr><tr><td>8</td><td>15</td><td>39</td><td>3</td><td>18</td></tr><tr><td>9</td><td>28</td><td>76</td><td>3</td><td>25</td></tr><tr><td>10</td><td>18</td><td>48</td><td>4</td><td>22</td></tr></table>On which problem is such a participant most likely to get stuck?",
   "o": [
    "Problem 9",
    "Problem 8",
    "Problem 10",
    "None: the practised formula works for all three"
   ],
   "a": 0,
   "spot": "Check the practised rule (B − A − 2C) on each row; the one where it fails is the trap.",
   "why": "B − A − 2C gives 39 − 15 − 6 = 18 for problem 8 and 48 − 18 − 8 = 22 for problem 10, so the habit still works there. For problem 9 it gives 76 − 28 − 6 = 42, not 25. Only the simple A − C (28 − 3) works, and someone with an entrenched <b>mental set</b> keeps looking for the old formula. In Luchins (1942), 64% to 83% of trained participants kept using the long formula, against 1% to 5% of controls."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "Judge these statements. I. Engineers have been observed to make an average of more than 100 analogies during 9 hours of problem solving. II. In a cross-cultural study, students in Brazil, India and the United States mostly preferred the means-ends heuristic.",
   "o": [
    "I is true, and II is false.",
    "I is false, and II is true.",
    "Both I and II are true.",
    "Both statements I and II are false."
   ],
   "a": 0,
   "spot": "Two facts about how widely one strategy is used: check which strategy each study was about.",
   "why": "I is <b>true</b>: Christensen and Schunn (2007) counted an average of 102 analogies in 9 hours. II is <b>false</b>: Güss and Wiley (2007) found that students in these three countries typically chose the <b>analogy approach</b>, not means-ends, as their preferred strategy. Both findings show how common analogies are, which is why their failures matter."
  },
  {
   "s": "comp",
   "t": "ps",
   "q": "Robinson-Riegler warn that algorithms and heuristics do not map neatly onto System 2 and System 1. Which example shows an algorithm that runs as a fast System 1 process?",
   "o": [
    "Reciting a well-practised multiplication table",
    "Following a new recipe closely, step by step",
    "Solving a problem by using an analogous earlier one",
    "Glancing at a blackjack hand of 19 and not hitting"
   ],
   "a": 0,
   "spot": "Two labels per option: algorithm or heuristic, and fast or slow. Find algorithm + fast.",
   "why": "A well-practised <b>algorithm</b> such as the multiplication tables runs fast and automatically, so it is <b>System 1</b>. A new recipe is an algorithm that needs slow System 2 effort. Using an analogy is a slow, deliberate heuristic (System 2), and not hitting on 19 is a fast heuristic (System 1). So both strategy types can be either system."
  },
  {
   "s": "fig",
   "t": "ps",
   "q": "The table lines up two problems and the general schema they share.<br><table class=\"qt\"><tr><th></th><th>Military problem</th><th>Radiation problem</th><th>Shared schema</th></tr><tr><td>Goal</td><td>Use army to capture fortress</td><td>Use rays to destroy tumour</td><td>Use force to overcome a central target</td></tr><tr><td>Constraint</td><td>Cannot send the entire army along one road</td><td>Cannot give high-intensity rays from one direction only</td><td>Cannot apply full force along one path alone</td></tr><tr><td>Solution plan</td><td>Send small groups along many roads at once</td><td>Give low-intensity rays from many directions at once</td><td>?</td></tr></table>What belongs in the empty cell?",
   "o": [
    "Apply weak forces along multiple paths simultaneously",
    "Apply one strong force along the shortest path",
    "Apply weak forces along one path, one after another",
    "Split the target into parts and attack each separately"
   ],
   "a": 0,
   "spot": "Strip both rows to what they have in common: how many paths, how strong, and when.",
   "why": "Both solutions use <b>several weak forces</b> from <b>different directions</b> at the <b>same time</b>, so the shared rule is “apply weak forces along multiple paths simultaneously”: the <b>convergence schema</b>. Lining up the parts like this is <b>mapping</b>, and the general rule that results is what Gick and Holyoak mean by schema induction. Forces one after another would never add up at the target."
  }
 ]
});
EXAMS.push({
 "id": "t7s2",
 "group": "t7",
 "shuffle": true,
 "title": "Theme 7 · Set 2",
 "blurb": "25 questions on Theme 7 (Problem solving and creativity), covering all its readings and the five exam skills: key concepts, main findings, figures and tables, comparing theories and applying them. Your results show your score per topic and per skill.",
 "questions": [
  {
   "s": "def",
   "t": "ps",
   "q": "Which description fits the means-ends heuristic?",
   "o": [
    "Divide the problem into subproblems, then reduce the difference to the goal for each one",
    "At every choice point, pick the alternative that seems to lead most directly toward the goal",
    "Retrieve the solution to an earlier, similar problem and apply it to the new problem",
    "Try out all possible answers in a fixed, systematic order until one of them works"
   ],
   "a": 0,
   "spot": "Ends = the goal, means = the methods: which option builds a plan from smaller goals?",
   "why": "The <b>means-ends heuristic</b> has two parts: divide the problem into <b>subproblems</b>, then for each one reduce the difference between where you are and where you want to be. The second option is <b>hill climbing</b>, the third is the <b>analogy approach</b>, and the last is an <b>exhaustive search</b>, which is an algorithm."
  },
  {
   "s": "fig",
   "t": "cre",
   "q": "Before interpreting Experiment 2, Camarda et al. ran a control study in which 21 participants did both versions of the dot memory task.<br><table class=\"qt\"><tr><th>Dot pattern</th><th>Mean response time</th><th>Accuracy</th></tr><tr><td>Simple (four dots on a line)</td><td>1,649 ms</td><td>93%</td></tr><tr><td>Complex (unpredictable pattern)</td><td>1,867 ms</td><td>82%</td></tr></table>Why does this table matter for the conclusion of Experiment 2?",
   "o": [
    "It shows the complex version took more working memory, so the null result is not a failed load",
    "It shows the complex version also needed inhibitory control, so Experiment 2 tested inhibition as well",
    "It shows the two versions were equally easy, so neither version could be expected to affect creativity",
    "It shows working memory was overloaded, so participants could hardly do the egg task at the same time"
   ],
   "a": 0,
   "spot": "A check that the manipulation worked: slower and less accurate = harder. Why do you need that before reading a null result?",
   "why": "The complex version was slower (1,867 versus 1,649 ms) and less accurate (82% versus 93%), so it really demanded more <b>working memory</b>. That matters because in Experiment 2 this load had <b>no effect</b> on creativity. Without the check, a critic could say the load simply failed. With it, the result points to a cost that is specific to <b>inhibitory control</b> in Experiment 1. A null result still does not prove that there is no effect at all."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "Jonas wants to roll out pastry but has no rolling pin. A full wine bottle stands on the counter, yet it does not occur to him to use it, and he gives up on the pastry. What is blocking him?",
   "o": [
    "Functional fixedness",
    "The hill-climbing heuristic",
    "Transparency",
    "Verbal overshadowing"
   ],
   "a": 0,
   "spot": "The tool is right there but is only seen in its normal role.",
   "why": "<b>Functional fixedness</b> is the inability to see that an object with a familiar use can also do another job. The bottle is seen only as a bottle, not as a roller. <b>Transparency</b> is seeing an analogy that is not there because of similar content, and <b>verbal overshadowing</b> is about words pulling attention to surface details."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "Greeno (1974) studied how people solve the elves-and-goblins river problem. What did he find?",
   "o": [
    "People pause where a new subproblem begins and a sequence of moves must be planned",
    "People solve the problem fastest if they never move creatures back to the starting bank",
    "People solve it through sudden insight, without pausing before the final move",
    "People do not organise the problem into subproblems and instead try moves at random"
   ],
   "a": 0,
   "spot": "Research on the means-ends heuristic: where in the problem do solvers slow down?",
   "why": "Greeno showed that people do organise problems in <b>subproblems</b>: they pause where a new subproblem starts and a sequence of moves must be planned, and <b>working memory</b> is especially active during that planning. The second option is wrong: step 6 requires moving two creatures back, and people are reluctant to make such <b>backward</b> moves even when they are needed."
  },
  {
   "s": "fig",
   "t": "ps",
   "q": "While solving, participants rated every 15 seconds how close they felt to the solution (1 = cold, 7 = hot). The figure shows mean ratings for two new problems, P and Q, in the last minute before they were solved. Which interpretation fits Metcalfe and Wiebe's (1987) findings?",
   "chart": {
    "type": "line",
    "title": "Feeling of warmth before the solution",
    "x": [
     "60 s before",
     "45 s before",
     "30 s before",
     "15 s before",
     "Solved"
    ],
    "y": "Mean warmth rating (1 = cold, 7 = hot)",
    "series": [
     {
      "name": "Problem P",
      "v": [
       2,
       2,
       2,
       2.2,
       7
      ]
     },
     {
      "name": "Problem Q",
      "v": [
       2.5,
       3.5,
       4.5,
       5.5,
       7
      ]
     }
    ],
    "note": "Hypothetical data, drawn to the pattern Metcalfe & Wiebe (1987) describe",
    "min": 1,
    "max": 7
   },
   "o": [
    "P behaves like an insight problem, Q like a routine problem such as algebra",
    "Q behaves like an insight problem and P like a routine problem such as algebra",
    "Both behave like insight problems, because both end at the top of the scale",
    "Q shows more insight, because the solver felt close to the solution earlier"
   ],
   "a": 0,
   "spot": "Gradual rise versus flat-then-jump: which shape belongs to insight?",
   "why": "For routine problems such as <b>algebra</b>, warmth ratings rise <b>gradually</b> as people approach the solution. For <b>insight</b> problems they stay cold until just before the solution and then jump, as in line P. Every solved problem ends hot, so the end point says nothing; the shape of the approach does. This supports the Gestalt idea that insight is special."
  },
  {
   "s": "def",
   "t": "cre",
   "q": "In the egg task, a participant proposes 12 solutions. A rater assigns them to 5 different solution categories, and 2 of the solutions fall outside the three fixation metacategories. What is this participant's flexibility score? (whole number)",
   "o": [
    "5",
    "12",
    "2",
    "10"
   ],
   "a": 0,
   "spot": "Three numbers, three scores: match each number to fluidity, flexibility or expansivity.",
   "why": "<b>Flexibility</b> is the number of different solution <b>categories</b> used, so 5. The 12 solutions are the <b>fluidity</b> score and the 2 solutions outside the fixation metacategories are the <b>expansivity</b> score. 10 is the number of solutions inside the fixation effect, which is not one of the three scores."
  },
  {
   "s": "comp",
   "t": "ps",
   "q": "The Gestalt psychologists (Wertheimer, Köhler) and Newell and Simon (the General Problem Solver) give different pictures of problem solving. Which statement captures the contrast?",
   "o": [
    "Gestalt: insight is a special process unlike ordinary linear processing; Newell and Simon: solving is a stepwise search through a problem space",
    "Gestalt: solving is a stepwise search through a problem space; Newell and Simon: insight is a special process of restructuring",
    "Gestalt: problems are solved by reusing existing associations; Newell and Simon: problems are solved by sudden restructuring",
    "Gestalt: insight builds up gradually in small steps; Newell and Simon: insight arrives all at once without prior work"
   ],
   "a": 0,
   "spot": "One school stresses seeing the whole anew, the other a step-by-step search. Which is which?",
   "why": "For the <b>Gestaltists</b>, insight requires seeing the problem as a whole in a new light: a special process that differs from normal, linear information processing (productive rather than reproductive thinking). <b>Newell and Simon</b> modelled problem solving as a search through a <b>problem space</b>, using means-ends analysis to reduce differences step by step. Reusing existing associations is what Wertheimer called <b>reproductive</b> thinking, the opposite of insight."
  },
  {
   "s": "def",
   "t": "cre",
   "q": "In research with the egg task (protecting a hen's egg dropped from 10 metres), which kinds of solutions make up the fixation effect?",
   "o": [
    "Damping the shock, protecting the egg and slowing the fall",
    "Using a living creature and changing the egg's natural properties",
    "Freezing the egg and training a bird to catch it in the fall",
    "Any idea that more than half of all participants proposed"
   ],
   "a": 0,
   "spot": "Fixation = the path of least resistance: the first, most accessible kinds of solution.",
   "why": "Three of the ten metacategories form the <b>fixation effect</b>: damping the shock, protecting the egg and slowing the fall (a parachute, for example). These follow the <b>path of least resistance</b>, based on the most accessible knowledge. Using a living object or changing the egg (training a bird, freezing the egg) are the original categories that count toward <b>expansivity</b>."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "A city wants to stop long queues forming at its new swimming pool on hot days. Which earlier solution is the most promising analogy to borrow from?",
   "o": [
    "A museum's timed-entry tickets, which spread visitors' arrivals over the day",
    "The pool of a nearby town, which has the same building, changing rooms and pools",
    "A swimming club's training schedule, which also involves swimmers and water",
    "A beach's lifeguard rota, which also needs more staff on hot days"
   ],
   "a": 0,
   "spot": "Look past what the problems are about to how they work: what is the real problem here?",
   "why": "The real problem is too many people arriving at the same time. A museum's timed-entry system solves exactly that, so it shares the <b>structural features</b> even though it looks nothing like a pool. The nearby pool shares only <b>surface features</b>. Rutgers University did the same when it stopped copying other universities and modelled its applicant tracking on how Federal Express tracks packages."
  },
  {
   "s": "fig",
   "t": "ps",
   "q": "Gick and Holyoak (1983) compared three kinds of extra help for transferring a story's solution to the radiation problem. Each bar pair compares one kind of help with a group that received only one analogous story.<br>Judge these statements. I. Adding a diagram of converging arrows raised the percentage of solvers compared with its analogy-only group. II. Of the three additions, only a second analogous problem produced a large increase.",
   "chart": {
    "type": "bar",
    "title": "Solving the radiation problem",
    "x": [
     "General principle",
     "Diagram",
     "Another analogous problem"
    ],
    "y": "% of participants",
    "series": [
     {
      "name": "Analogous problem only",
      "v": [
       29,
       40,
       21
      ]
     },
     {
      "name": "Analogous problem plus addition",
      "v": [
       32,
       22,
       52
      ]
     }
    ],
    "note": "Gick & Holyoak (1983), Figure 12.5 in Robinson-Riegler (values as reported in the reader)",
    "min": 0,
    "max": 60
   },
   "o": [
    "I is false, and II is true.",
    "I is true, and II is false.",
    "Both I and II are true.",
    "Both statements I and II are false."
   ],
   "a": 0,
   "spot": "Read each bar pair separately: is the 'plus' bar higher, lower, or about the same?",
   "why": "I is <b>false</b>: with the diagram, 22% solved the problem against 40% in its comparison group. II is <b>true</b>: the general principle barely changed anything (29% to 32%), while a <b>second analogous problem</b> raised success from 21% to 52%. Comparing two stories lets people map them onto each other and form a general schema: <b>schema induction</b>."
  },
  {
   "s": "def",
   "t": "ps",
   "q": "A frame of mind involving an existing model for representing a problem, a problem context or a procedure for solving it, which makes you fixate on a strategy that does not work for this problem, is called",
   "o": [
    "a mental set",
    "functional fixedness",
    "a problem space",
    "transparency"
   ],
   "a": 0,
   "spot": "An existing way of looking or a familiar procedure that you get stuck in.",
   "why": "A <b>mental set</b>, also called <b>entrenchment</b>, makes you fixate on a strategy that usually works but fails for the current problem, as in Luchins' water jars. <b>Functional fixedness</b> is a specific type of mental set about the usual use of an <b>object</b>. A problem space is the set of states and moves in a problem."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "Güss, Tuason and Gerhard (2010) counted planning remarks while students from five countries thought aloud during a complex fire-fighting simulation. What did they find?",
   "o": [
    "German students made the most planning remarks and Filipino students the fewest",
    "American students made the most planning remarks and Indian students the fewest",
    "Students from the two countries with most economic resources made the most remarks",
    "Filipino students made the most planning remarks and German students the fewest"
   ],
   "a": 0,
   "spot": "Cross-cultural microworld study: who planned most, who least?",
   "why": "Germans made the most <b>plan-oriented</b> remarks, Filipinos the fewest, and Americans, Brazilians and Indians were in between. The researchers had expected resource-rich countries (Germany and the United States) to plan more, so the low American score surprised them; they suggested a focus on immediate gratification. Because cultural groups differ on many dimensions, such a difference cannot be explained clear-cut."
  },
  {
   "s": "comp",
   "t": "cre",
   "q": "In Experiment 1 of Camarda et al., the disinhibition view and the dual-process model make opposite predictions for one comparison and the same prediction for another. Which is which?",
   "o": [
    "Opposite for incongruent Stroop versus egg task alone; the same for congruent Stroop versus egg task alone",
    "Opposite for congruent Stroop versus egg task alone; the same for incongruent Stroop versus egg task alone",
    "Opposite for incongruent versus congruent Stroop; the same for incongruent Stroop versus egg task alone",
    "Opposite for every comparison in the design, which is exactly why the experiment can separate the two views"
   ],
   "a": 0,
   "spot": "Which condition loads inhibition? Only there can the two views disagree.",
   "why": "Only the <b>incongruent</b> Stroop task loads inhibitory control. The <b>disinhibition view</b> predicts more creativity there than in the single task, the <b>dual-process model</b> predicts less. The <b>congruent</b> version needs attention but no inhibition, so both views expect it to equal the single task. That control condition shows that any drop comes from inhibition, not from doing two things at once."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "After years of tennis, Lotte takes up squash. She keeps playing with the stiff-wristed swing she learned in tennis, which makes her squash shots worse than they would otherwise be. This is an example of",
   "o": [
    "negative transfer",
    "positive transfer",
    "incubation",
    "functional fixedness"
   ],
   "a": 0,
   "spot": "Earlier experience makes the new task harder.",
   "why": "<b>Transfer</b> is any carry-over of knowledge or skills from one situation to another. When an earlier problem makes a later one harder, it is <b>negative transfer</b>, like someone operating a new tool the way they used a familiar one. <b>Positive transfer</b> would be earlier skills making the new task easier, such as addition helping with algebra."
  },
  {
   "s": "fig",
   "t": "ps",
   "q": "Pretz (2008) gave first-year and third-year (junior) students problem scenarios about college life, after analytic instructions, intuitive instructions or no special instructions. The score is the distance from the consensus solution, so lower is better.<br><table class=\"qt\"><tr><th></th><th>Analytic</th><th>Intuitive</th><th>Control</th></tr><tr><td>First-years</td><td colspan=\"3\">all three close together; intuitive slightly lowest (about 9.9)</td></tr><tr><td>Juniors</td><td>about 9.7 (lowest)</td><td>about 12 (highest)</td><td>in between</td></tr></table>Which conclusion fits these results?",
   "o": [
    "The best mode depends on experience: analysis helps juniors, while intuition hurts them",
    "Intuition works best for ill-defined problems, whatever the solver's level of experience",
    "Analysis works best for everyone, but juniors benefit more because they are older",
    "Juniors outperform first-years in every condition, so experience alone explains the results"
   ],
   "a": 0,
   "spot": "Lower = better. Compare the conditions WITHIN each row, then compare the rows.",
   "why": "For first-years the instructions made little difference (intuitive was even slightly best). For juniors, <b>analytic</b> instructions gave the best score and <b>intuitive</b> the worst. So the best mode depends on <b>experience</b>: with more organised knowledge, deliberate analysis pays off, while trusting your gut backfires. The last option is wrong: juniors under intuitive instructions (about 12) did worse than first-years (about 9.9)."
  },
  {
   "s": "def",
   "t": "ps",
   "q": "Which statement about insight is NOT correct?",
   "o": [
    "Insight occurs only in ill-structured problems, never in well-structured ones",
    "Insight often involves restructuring how the problem is represented",
    "An insight may feel sudden but is often the result of much prior thought and work",
    "Insight often combines relevant old and new information into a new view"
   ],
   "a": 0,
   "spot": "NOT correct + insight: watch for absolute words like 'only' and 'never'.",
   "why": "<b>Insight</b> is a distinctive, sometimes seemingly sudden understanding of a problem or strategy, often through <b>restructuring</b> and combining old and new information. It feels sudden but usually follows a lot of prior work. Insight is <b>more often</b> linked to ill-structured problems, but it can also play a role in well-structured ones, so “only” makes the first statement wrong."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "Which finding about the brain and insight is reported in the readings?",
   "o": [
    "Activity in the right anterior superior temporal gyrus rises during an insight",
    "Activity in the left hemisphere can be observed before an insight becomes conscious",
    "Insight depends on the left hippocampus, which stores well-practised procedures",
    "EEG shows a clear drop in high-frequency activity at the moment of insight"
   ],
   "a": 0,
   "spot": "Insight and the brain: think right side, and a burst rather than a drop.",
   "why": "fMRI shows more activity in the <b>right anterior superior temporal gyrus</b> during insight, and EEG records a <b>burst</b> of high-frequency activity (Jung-Beeman et al., 2004). Activity in the <b>right</b> hemisphere can be seen even before the insight becomes conscious, and the <b>right</b> hippocampus is critical for forming the insight (Luo & Niki, 2003)."
  },
  {
   "s": "app",
   "t": "cre",
   "q": "A teacher asks pupils to think up as many original ideas as possible for a science fair while they also do a small task on a tablet. Based on Camarda et al. (2018), which tablet task is most likely to make their ideas less original?",
   "o": [
    "Naming the ink colour of colour words printed in a clashing colour",
    "Naming the ink colour of colour words printed in their own matching colour",
    "Remembering complex sequences of dot positions in a grid",
    "No tablet task at all, with full attention on the ideas"
   ],
   "a": 0,
   "spot": "Which second task forces you to suppress a dominant response?",
   "why": "Naming the ink of a clashing colour word (the incongruent Stroop task) requires suppressing the automatic reading of the word, so it loads <b>inhibitory control</b>. In Camarda et al. this lowered both the number of ideas and the ideas outside the fixation categories. Matching colour words need no inhibition and had no effect, and a demanding <b>working-memory</b> task (complex dot sequences) had no effect either."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "Markman, Taylor and Gentner (2007) presented proverbs either spoken or written, and later gave cue proverbs that were similar either on the surface or in structure. What did they find?",
   "o": [
    "With structurally similar cues, listeners recalled the original proverb better than readers; with surface cues there was no difference",
    "With surface cues, listeners recalled the original better than readers; with structural cues there was no difference",
    "Readers recalled more than listeners with both kinds of cue, because reading allows going back in the text",
    "Thinking aloud during recall made people retrieve the proverbs mainly through surface similarity"
   ],
   "a": 0,
   "spot": "Spoken versus written material: for which kind of similarity did listening make a difference?",
   "why": "When the cue shared <b>structural</b> features with the original proverb, people remembered the original better after <b>listening</b> than after reading. With <b>surface</b> cues there was no difference. Because analogical transfer depends on remembering the analogous problem, studies with only written problems may <b>underestimate</b> analogy use. Thinking aloud was Lane and Schooler's manipulation."
  },
  {
   "s": "comp",
   "t": "ps",
   "q": "Many people fail to use an analogous story they read earlier, yet succeed as soon as they are told it is relevant. Which explanation fits the three-stage account of analogical problem solving (noticing, mapping, schema development)?",
   "o": [
    "Noticing failed: the new problem did not cue the memory of the old one, and the hint acted as a retrieval cue",
    "Mapping failed: people could not link the elements of the two problems until the hint showed them how",
    "Schema development failed: people needed the hint to state the general principle behind both problems",
    "Noticing failed: people recalled the story but judged it irrelevant because its structure looked different from the new problem"
   ],
   "a": 0,
   "spot": "The hint only says 'this story is relevant'. Which stage can such a hint repair?",
   "why": "A hint does not explain the mapping or the principle; it only points to the old story. Because that is enough, the problem was <b>noticing</b>: the current problem failed to trigger the memory of the helpful one, so it is basically a <b>memory failure</b>. The hint works as a <b>retrieval cue</b>. The last option is wrong because the stories share their structure; they differ on the surface."
  },
  {
   "s": "comp",
   "t": "ps",
   "q": "Sternberg et al. treat stereotypes as a kind of mental set, like the habit formed in Luchins' water-jar problems. What do the two have in common?",
   "o": [
    "Both overgeneralise a pattern seen in a few cases, and both limit the holder's own thinking",
    "Both concern the usual function of an object, which blocks seeing that object used in a new way",
    "Both arise only in adulthood, after many years of experience with the same type of problem",
    "Both involve seeing an analogy between two problems because their content looks similar"
   ],
   "a": 0,
   "spot": "Why would a social belief be filed next to a problem-solving habit?",
   "why": "Stereotypes develop like other <b>mental sets</b>: we observe a pattern in a few instances and then <b>overgeneralise</b> it to all future cases, just as a formula that worked six times is applied to every next problem. Like other mental sets, stereotypes also <b>hinder the problem solving</b> of the people who use them. Stereotype awareness already develops between ages 6 and 10, and the object option describes functional fixedness."
  },
  {
   "s": "fig",
   "t": "ps",
   "q": "The table gives the minimum number of moves needed for the disk-moving puzzle with three rods (move one disk at a time, never a larger disk on a smaller one).<br><table class=\"qt\"><tr><th>Number of disks</th><th>Minimum moves</th></tr><tr><td>1</td><td>1</td></tr><tr><td>2</td><td>3</td></tr><tr><td>3</td><td>7</td></tr><tr><td>4</td><td>15</td></tr></table>The same puzzle is played with 5 disks. What is the minimum number of moves? (whole number)",
   "o": [
    "31",
    "19",
    "30",
    "32"
   ],
   "a": 0,
   "spot": "Find the rule in the table: each step roughly doubles. Or think in subgoals.",
   "why": "The minimum is 2<sup>n</sup> − 1 moves, so 2<sup>5</sup> − 1 = 31. The subgoal logic of <b>means-ends analysis</b> gives the same answer: move the top 4 disks to the helper rod (15), the largest disk to the goal (1), and the 4 disks back on top (15). Because this is a <b>well-structured</b> problem, a fixed algorithm reaches exactly this minimum without any search."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "Which of these is the clearest example of an ill-structured problem?",
   "o": [
    "Deciding how to make a struggling neighbourhood feel safer",
    "Moving a stack of four disks to another rod under fixed rules",
    "Rearranging the letters of an anagram into an English word",
    "Getting three elves and three goblins safely across a river"
   ],
   "a": 0,
   "spot": "Which problem has no clear start-to-goal route and no fixed set of allowed moves?",
   "why": "An <b>ill-structured problem</b> has no clear, readily available path to the solution and no well-defined problem space. Making a neighbourhood feel safer has no fixed moves, many possible solutions, and even the goal must be defined. The disk puzzle, the anagram and the river crossing all have a clear start, goal and set of legal moves: they are <b>well-structured</b>."
  },
  {
   "s": "find",
   "t": "cre",
   "q": "Earlier studies had found positive correlations between inhibitory control and creativity. What do Camarda et al. claim their dual-task results add?",
   "o": [
    "Stronger evidence for a causal link, because inhibitory resources were directly manipulated",
    "Evidence that inhibition and creativity are unrelated once working memory is controlled",
    "Evidence that creativity improves inhibitory control, the reverse of the earlier direction",
    "A replication of the earlier correlations in a much larger sample of adults and children"
   ],
   "a": 0,
   "spot": "Correlation versus experiment: what does manipulating a resource buy you?",
   "why": "A correlation cannot show what causes what. By <b>manipulating</b> the inhibitory resources available (incongruent versus congruent Stroop load) and showing that creativity dropped, Camarda et al. claim a <b>more causal link</b> between inhibitory control and creative ability. They also describe theirs as the first study to show a cost of inhibitory load on creative idea generation with a <b>dual-task paradigm</b>."
  },
  {
   "s": "comp",
   "t": "ps",
   "q": "When their new printer jammed, Robinson-Riegler and colleagues quickly solved it by remembering how jams were cleared on their old printer. Yet most people fail to use the military story when solving the radiation problem. Why the difference?",
   "o": [
    "The printers share surface features, which makes the link easy to notice; the military and radiation problems share only structure",
    "The printers share only structure, which is easy to notice; the military and radiation problems share surface features",
    "The printer problem is ill-structured and needs insight, whereas the radiation problem is well-structured",
    "The printer problem allowed an exhaustive search, whereas the radiation problem needs a heuristic"
   ],
   "a": 0,
   "spot": "Easy analogy versus missed analogy: what kind of similarity does each pair have?",
   "why": "Two printers look alike: they share <b>surface features</b>, so the old solution is easily remembered. The military and radiation problems look completely different (an army versus a tumour) but share their <b>structural features</b>: several weak forces converging at once. Structural similarity alone is often not enough to cue memory, so people fail at the <b>noticing</b> stage."
  }
 ]
});
EXAMS.push({
 "id": "t7s3",
 "group": "t7",
 "shuffle": true,
 "title": "Theme 7 · Set 3",
 "blurb": "25 questions on Theme 7 (Problem solving and creativity), covering all its readings and the five exam skills: key concepts, main findings, figures and tables, comparing theories and applying them. Your results show your score per topic and per skill.",
 "questions": [
  {
   "s": "def",
   "t": "ps",
   "q": "Cues in the environment that influence how you represent and solve a problem are studied under the heading of",
   "o": [
    "situated cognition",
    "embodied cognition",
    "functional fixedness",
    "the problem space"
   ],
   "a": 0,
   "spot": "Environment versus own body: which term belongs to cues around you?",
   "why": "<b>Situated cognition</b> is about cues from the environment; <b>embodied cognition</b> is about cues from your own body, such as hand movements improving mental rotation (Chu & Kita, 2011). Both can shape how you represent a problem and so how accurately you solve it."
  },
  {
   "s": "app",
   "t": "cre",
   "q": "A participant in the egg task proposes four ideas. Which one would count toward her expansivity score?",
   "o": [
    "Train a bird to catch the egg during the fall",
    "Attach a small parachute to slow the fall",
    "Pack the egg in a box filled with foam",
    "Place a thick mattress on the spot where the egg lands"
   ],
   "a": 0,
   "spot": "Expansivity counts ideas OUTSIDE the three obvious categories. Which idea is not damping, protecting or slowing?",
   "why": "<b>Expansivity</b> counts solutions outside the fixation effect. Slowing the fall (parachute), protecting the egg (foam box) and damping the shock (mattress) are the three <b>fixation</b> metacategories. Using a <b>living object</b>, such as a trained bird, is one of the original categories that people rarely propose."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "Catrambone, Craig and Nersessian (2006) asked some participants to recall the military story while moving blocks to act it out. Why did they expect this to help with the later radiation problem?",
   "o": [
    "Information from body movement could help encode the story's structure for later retrieval",
    "Acting it out would tire participants, so a short break would then let the problem incubate",
    "Moving blocks would draw attention to concrete surface details that are easy to put into words",
    "Acting it out would hand participants the general principle in a written, explicit form"
   ],
   "a": 0,
   "spot": "The study's rationale: what can movement add to the way a story is stored?",
   "why": "The researchers proposed that <b>kinesthetic</b> information, which arises from body movement, could help <b>encode the structural features</b> of a problem and so set the stage for later analogical retrieval. It worked: without a hint, .52 of the enactment group found the convergence solution, against .27 after sketching and .19 after verbal recall. This fits <b>embodied cognition</b>."
  },
  {
   "s": "fig",
   "t": "cre",
   "q": "Planned comparisons of fluidity (number of egg-task ideas) in Experiment 1 of Camarda et al. (2018):<br><table class=\"qt\"><tr><th>Comparison</th><th>Mean number of ideas</th><th>Cohen's d</th></tr><tr><td>Incongruent Stroop vs egg task alone</td><td>7.04 vs 10.69</td><td>.72</td></tr><tr><td>Incongruent vs congruent Stroop</td><td>7.04 vs 10.43</td><td>.58</td></tr><tr><td>Congruent Stroop vs egg task alone</td><td>10.43 vs 10.69</td><td>.05</td></tr></table>Judge these statements. I. Doing a second task as such cost hardly any ideas. II. The drop under the incongruent Stroop task was a negligible effect.",
   "o": [
    "I is true, and II is false.",
    "I is false, and II is true.",
    "Both I and II are true.",
    "Both statements I and II are false."
   ],
   "a": 0,
   "spot": "Read the effect sizes: d near 0 is no effect; around .5 to .8 is medium to large.",
   "why": "I is <b>true</b>: the congruent Stroop task, which needs attention but no inhibition, gave almost the same number of ideas as the egg task alone (d = .05). II is <b>false</b>: the incongruent task lowered fluidity by more than three ideas, d = .72, a medium-to-large effect. So the cost comes from loading <b>inhibitory control</b>, not from doing two tasks at once."
  },
  {
   "s": "comp",
   "t": "ps",
   "q": "Which example is matched with the correct strategy?",
   "o": [
    "Rutgers modelling its applicant tracking on Federal Express's package tracking: the analogy approach",
    "Always taking the fork with the steepest upward slope when hiking to a hilltop: the means-ends heuristic",
    "Splitting a loose-hem emergency into finding a usable object and locating it: hill climbing",
    "Trying every possible order of the letters of a 14-letter anagram: a heuristic search"
   ],
   "a": 0,
   "spot": "For each example, ask: borrowing an old solution, subgoals, next step only, or trying everything?",
   "why": "Rutgers used the solution of a structurally similar problem (tracking packages), which is the <b>analogy approach</b>. The steepest fork is <b>hill climbing</b>. Splitting the hem problem into two subproblems is the <b>means-ends heuristic</b>, and trying every letter order is an <b>exhaustive search</b>, which is an algorithm."
  },
  {
   "s": "def",
   "t": "cre",
   "q": "Camarda et al. used a dual-task paradigm. What is the logic of this method?",
   "o": [
    "If a second task that occupies one resource harms the main task, the main task needs that resource",
    "If two tasks are done one after the other, the second task shows what was learned during the first",
    "If participants switch back and forth between two tasks, the switch cost shows how flexible their thinking is",
    "If two groups do different tasks, comparing their scores shows which of the tasks is the more creative"
   ],
   "a": 0,
   "spot": "Two tasks at the same time: what can you conclude when the main task suffers?",
   "why": "In a <b>dual-task paradigm</b>, participants do the main task while a secondary task occupies a particular resource. If the main task suffers, it depends on that resource. Camarda et al. occupied <b>inhibitory control</b> with the incongruent Stroop task (Experiment 1) and <b>working memory</b> with a dot task (Experiment 2), and only the first lowered creativity."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "Sami wants an original name for her new bakery. She has spent a whole evening listing ideas, and all of them are dull. Based on Sio and Ormerod's (2009) meta-analysis, which plan gives an incubation period the best chance of helping?",
   "o": [
    "Take a break now, after the long preparation, and fill it with something undemanding like a walk",
    "Take a break straight away next time, before spending much time preparing on the problem",
    "Fill the break with a demanding task, such as working through her tax return",
    "Skip the break, because incubation has never found any experimental support"
   ],
   "a": 0,
   "spot": "Three factors from the meta-analysis: preparation time, how demanding the break is, and the type of task.",
   "why": "Sio and Ormerod (2009) found incubation more fruitful after <b>longer preparation</b>, harmed by <b>highly demanding</b> tasks during the break, and most useful for <b>divergent-thinking</b> tasks where something has to be produced, such as inventing a name. Some researchers found no support (Baron, 1988), but the meta-analysis shows the effect depends on these conditions."
  },
  {
   "s": "fig",
   "t": "ps",
   "q": "After six practice problems, a participant writes these solutions (capacities in cups).<br><table class=\"qt\"><tr><th>Problem</th><th>Jar A</th><th>Jar B</th><th>Jar C</th><th>Required</th><th>Solution written</th></tr><tr><td>7</td><td>23</td><td>49</td><td>3</td><td>20</td><td>49 − 23 − 3 − 3</td></tr><tr><td>8</td><td>15</td><td>39</td><td>3</td><td>18</td><td>39 − 15 − 3 − 3</td></tr></table>What does this show, and how did most participants who skipped the practice problems solve problem 7?",
   "o": [
    "A mental set: the participant keeps the long formula, while most controls simply used 23 − 3",
    "Functional fixedness: the participant cannot see a new use for jar C, while controls used 49 − 23",
    "Positive transfer: the formula made the problems easier, while controls needed more steps",
    "Hill climbing: each pour brings the amount closer to the goal, while controls used 23 − 3"
   ],
   "a": 0,
   "spot": "Correct answers, but done the long way: what has the practice done to the participant?",
   "why": "Both answers are correct, but they reuse the practised B − A − 2C formula where two jars would do (23 − 3 = 20; 15 + 3 = 18). This is an entrenched <b>mental set</b>. In Luchins (1942), 64% to 83% of practised participants kept the long formula, whereas only 1% to 5% of controls failed to use the simple solution. Here the old habit is <b>negative</b>, not positive, transfer."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "Luo and Niki (2003) found that the right hippocampus is critical in forming an insightful solution. Why do Sternberg et al. find this plausible?",
   "o": [
    "The hippocampus forms new memories, and insight combines relevant information stored in memory",
    "The hippocampus controls inhibition, and insight requires suppressing the first, obvious idea",
    "The hippocampus processes visual input, and most insight problems are visual puzzles",
    "The hippocampus is active during rest, and insight occurs only when the problem has been set aside"
   ],
   "a": 0,
   "spot": "What is the hippocampus known for, and what does insight have to do with that?",
   "why": "The <b>hippocampus</b> is integral to forming new memories, and insight involves <b>combining relevant information stored in memory</b> into a new view of the problem, so its involvement makes sense. Inhibition is linked to frontal regions such as the inferior frontal gyrus, and visual processing to the occipital lobes."
  },
  {
   "s": "comp",
   "t": "cre",
   "q": "A critic argues that working-memory load had no effect in Experiment 2 only because the dot task was much easier than the incongruent Stroop task. Which reply do Camarda et al. give?",
   "o": [
    "The task has cut working-memory resources in reasoning and decision studies and correlates with executive tasks",
    "The dot task was made easy on purpose, because only an easy second task leaves enough room for creative thinking",
    "The dot task also loaded inhibitory control, so the two experiments in fact tested the same resource",
    "The dot task was in fact harder than the Stroop task, as shown by its lower accuracy compared with Experiment 1"
   ],
   "a": 0,
   "spot": "An alternative explanation for a null result: how do the authors defend their manipulation?",
   "why": "The authors call the “too easy” explanation less likely: the dot memory task has proved effective in <b>reducing working-memory resources</b> in dual-task studies of reasoning and decision making, and it correlates with executive tasks such as the <b>Tower of Hanoi</b> and random number generation (Miyake et al., 2001). They admit it mainly requires storing rather than manipulating information, and suggest a backward-recall version for future studies."
  },
  {
   "s": "def",
   "t": "ps",
   "q": "Which statement about transfer is correct?",
   "o": [
    "Negative transfer: an earlier problem makes a later one harder, as when police struggle with an unusual type of crime",
    "Positive transfer: an earlier problem makes a later one harder, because it sets you on a fixed, wrong track",
    "Negative transfer: earlier addition skills make later algebra and physics problems easier",
    "Transfer: processing a problem unconsciously while you are not working on it"
   ],
   "a": 0,
   "spot": "Positive = helps, negative = hurts. Then check that the example fits the label.",
   "why": "<b>Transfer</b> is any carry-over of knowledge or skills from one problem to another. <b>Negative transfer</b> makes a later problem harder: police may struggle with a political crime because it differs so much from the crimes they usually handle. Addition helping algebra is <b>positive</b> transfer. Unconscious processing while the problem is set aside is <b>incubation</b>."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "A jar holds red and green sweets, four red for every green one. Blindfolded, how many sweets must you take out to be sure of having two of the same colour? (whole number)",
   "o": [
    "3",
    "2",
    "5",
    "6"
   ],
   "a": 0,
   "spot": "Two colours only. The ratio is there to tempt you.",
   "why": "With two colours, the first two sweets either match or not; if not, the third must match one of them. So <b>3</b> is always enough. The ratio is <b>irrelevant information</b>, just as in the black-and-brown socks problem. Problems like this are insight problems: you have to <b>restructure</b> the problem and see which information matters."
  },
  {
   "s": "find",
   "t": "cre",
   "q": "Radel et al. (2015), discussed by Camarda et al., first exhausted participants' inhibitory control and then asked them for unusual uses of common objects such as a brick. What did they find?",
   "o": [
    "Fluency and originality of ideas increased, which was taken as support for disinhibition",
    "Fluency and originality both decreased, which was taken as support for the dual-process model",
    "Fluency decreased but originality increased, so the evidence was taken to be mixed",
    "Neither fluency nor originality changed, so inhibition was taken to be irrelevant"
   ],
   "a": 0,
   "spot": "Depleting inhibition before an unusual-uses task: which direction did it go in this earlier study?",
   "why": "In Radel et al. (2015), depleting inhibitory control <b>enhanced</b> both the fluency and the originality of ideas, which suggested that “<b>disinhibition</b>” stimulates creativity. Camarda et al. (2018) found the reverse when inhibition was loaded <b>during</b> the creative task: fewer ideas and fewer ideas outside the fixation categories."
  },
  {
   "s": "fig",
   "t": "cre",
   "q": "A new (hypothetical) study has participants do the egg task alone, together with a task that requires inhibition, or together with a matched task that requires the same attention but no inhibition. Which conclusion would these results support?",
   "chart": {
    "type": "bar",
    "title": "Number of egg-task ideas (hypothetical)",
    "x": [
     "Egg task only",
     "+ task needing inhibition",
     "+ matched task, no inhibition"
    ],
    "y": "Mean number of ideas",
    "series": [
     {
      "name": "Fluidity",
      "v": [
       10.5,
       7.5,
       7.5
      ]
     }
    ],
    "note": "Hypothetical data for a new study",
    "min": 0,
    "max": 12
   },
   "o": [
    "The cost comes from doing any second task, not from loading inhibition",
    "Creative idea generation depends specifically on the inhibitory-control resource",
    "Weakening inhibition frees loose associations and boosts creativity",
    "Creativity does not depend on any executive resource of any kind"
   ],
   "a": 0,
   "spot": "Compare the two dual-task bars with each other, not only with the single task.",
   "why": "Both second tasks lower the number of ideas by the same amount, so the drop cannot be pinned on <b>inhibition</b>: it looks like a general cost of doing two things at once. This is exactly why Camarda et al. included a <b>congruent Stroop</b> control condition. In their real data the control task cost almost nothing, which is why they could conclude that inhibition matters specifically. No condition raises creativity, so disinhibition gets no support here."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "A statistics teacher notices that students fail exam problems whose cover story differs from the textbook examples. According to the readings, which teaching approach is most likely to help?",
   "o": [
    "Let students sort problems into groups by their underlying structure rather than by their cover story",
    "Let students practise many problems that all use the same cover story as the textbook",
    "Give students a written statement of the general principle behind each type of problem",
    "Ask students to think aloud while they work through each problem on their own"
   ],
   "a": 0,
   "spot": "Students get stuck on surface features: which approach directs attention to structure?",
   "why": "Students solve statistics problems more accurately after being trained to <b>sort problems by structural similarity</b> rather than surface features (Quilici & Mayer, 2002), and trying several structurally similar problems first also helps. In Gick and Holyoak (1983) a statement of the <b>general principle</b> barely helped, and thinking aloud draws attention to <b>surface</b> details (Lane & Schooler, 2004)."
  },
  {
   "s": "def",
   "t": "ps",
   "q": "Gick and Holyoak use a specific term for the process in which comparing two analogous problems yields a mental representation of the principle they share, which can then be used for new problems. What is this process called?",
   "o": [
    "Schema induction",
    "Transfer-appropriate processing",
    "Verbal overshadowing",
    "Entrenchment"
   ],
   "a": 0,
   "spot": "Comparing two problems → a general representation of their shared principle.",
   "why": "<b>Schema induction</b> is the mapping process by which people form a schema, a mental representation of the principles that several problems share (here the convergence schema). Robinson-Riegler link it to <b>transfer-appropriate processing</b>, but that term describes why relating two stories transfers well, not the forming of the schema. <b>Entrenchment</b> is another word for mental set."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "Which statement about Newell and Simon's General Problem Solver (1972) is correct?",
   "o": [
    "It used means-ends analysis and was eventually discarded because its generality was smaller than hoped",
    "It used the hill-climbing heuristic and was discarded because it solved problems far better than humans",
    "It used exhaustive search and was later developed into the cognitive tutors used in schools",
    "It was built from brain-imaging data and is still the standard model of insight today"
   ],
   "a": 0,
   "spot": "GPS: which heuristic, built from what, and why abandoned?",
   "why": "The <b>General Problem Solver</b> was built from participants' think-aloud protocols and used <b>means-ends analysis</b> to mimic how people solve well-defined problems. Newell and Simon discarded it because its <b>generality</b> was not as great as they had wished: real-life problems are not so clear-cut. The cognitive tutors came from John Anderson's later simulations linked to ACT-R."
  },
  {
   "s": "comp",
   "t": "ps",
   "q": "Why did Pretz (2008) expect analytic thinking to help experienced students more than first-year students?",
   "o": [
    "With more knowledge, problems are seen as better defined, so deliberate analysis has more to work with",
    "With more knowledge, intuition becomes unreliable, because experienced students overthink their gut feelings",
    "First-year students cannot follow analytic instructions, because they have not yet learned the four steps",
    "Ill-defined problems are always solved best by analysis, and juniors meet more ill-defined problems"
   ],
   "a": 0,
   "spot": "The hypothesis links knowledge, how well-defined a problem feels, and which thinking mode pays off.",
   "why": "Pretz reasoned that the more <b>knowledge</b> you have in a domain, the more information you have to work with, and problems then tend to be perceived as <b>well-defined</b>: conscious <b>analysis</b> can use that. With little knowledge, problems stay ill-defined and hard to break down, and trying to reason them out ties you in knots, so <b>intuition</b> serves you better."
  },
  {
   "s": "fig",
   "t": "ps",
   "q": "In Pretz's tacit-knowledge test, a scenario reads: you want a letter of recommendation from a professor who barely knows you, and you meet him in a coffee shop with what seem to be his children. Students rate possible actions from 1 (extremely bad) to 7 (extremely good). The score is the distance from the consensus ratings, so lower is better.<br><table class=\"qt\"><tr><th>Action</th><th>Consensus rating</th></tr><tr><td>Greet him and remind him of your name and class</td><td>5.51</td></tr><tr><td>Greet him and ask for an appointment the next day</td><td>5.12</td></tr><tr><td>Decide this is a good time to ask for the letter</td><td>3.20</td></tr><tr><td>Offer to buy him and his kids coffee or sodas</td><td>2.44</td></tr></table>Which student would get the best score?",
   "o": [
    "A student who rates the four actions 6, 5, 3 and 2",
    "A student who rates the four actions 2, 3, 5 and 6",
    "A student who rates all four actions 4, the scale's middle",
    "A student who rates the four actions 7, 7, 7 and 1"
   ],
   "a": 0,
   "spot": "Best = closest to the consensus column, row by row.",
   "why": "Ratings of 6, 5, 3 and 2 lie within about half a point of every consensus value (5.51, 5.12, 3.20, 2.44), so this student has the smallest <b>distance from the consensus solution</b>. Rating everything 4 is safe but off by more than a point on three actions, and the reversed ratings are furthest away. In Pretz's Figure 12.6 a lower bar therefore means better problem solving."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "Yara wants to start a job in Canada in six months. She splits the goal into smaller goals (a work visa, a place to live, a bank account) and for each one works out how to close the gap. For the visa she must first travel back to her home town to collect documents, which feels like moving away from her goal. Which strategy is she using?",
   "o": [
    "The means-ends heuristic",
    "The hill-climbing heuristic",
    "The analogy approach",
    "Incubation"
   ],
   "a": 0,
   "spot": "Subgoals + reduce the gap for each + a temporary step back.",
   "why": "Splitting the goal into <b>subproblems</b> and reducing the difference for each one is the <b>means-ends heuristic</b>. The trip home shows that the correct route sometimes requires a temporary step <b>away</b> from the goal, like step 6 in the elves-and-goblins problem. A hill climber would refuse that step, because it does not look like progress."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "According to Sternberg et al., where do people who never solve the two-string problem typically go wrong?",
   "o": [
    "In defining it: they assume they must move toward one string while holding the other",
    "In carrying out the solution: they swing the pliers too weakly to reach the other string",
    "In evaluating the solution: they doubt that a swinging string can be caught in time",
    "In choosing materials: they expect the matches to be more useful than the pliers"
   ],
   "a": 0,
   "spot": "Which step of the problem-solving cycle adds a rule that makes the problem impossible?",
   "why": "People who find the problem insoluble usually err at <b>step 2</b> of the problem-solving cycle, <b>defining the problem</b>: they define it as one in which they must move toward one string while holding the other. That self-imposed <b>constraint</b> makes the problem virtually insoluble. The solution requires restructuring: let the string come to you by turning the pliers into a pendulum weight."
  },
  {
   "s": "def",
   "t": "ps",
   "q": "In Newell and Simon's terms, what does the problem space consist of?",
   "o": [
    "The initial state, the goal state, all intermediate states and the operators that move you between them",
    "The set of earlier problems that share the same underlying structure as the problem to be solved",
    "The mental set and fixed procedures that a person brings along to a new problem",
    "The part of a problem that working memory can hold at any one moment"
   ],
   "a": 0,
   "spot": "Problem space = a maze: where you start, where you end, and the paths in between.",
   "why": "A <b>problem space</b> contains the <b>initial state</b>, the <b>goal state</b>, all intermediate states and the <b>operators</b> (legal moves) between them. Solving then means finding a path from start to goal, as in a maze. Problems with the same structure are problem isomorphs, and fixed procedures are a mental set."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "In follow-up research on the military and radiation problems, which factor made people more likely to see and apply an analogy?",
   "o": [
    "The two problems coming from more similar domains or contexts",
    "Studying the source story under the guise of a memory test",
    "Receiving a single analogous story beforehand instead of two of them",
    "Thinking aloud while reading the analogous source story"
   ],
   "a": 0,
   "spot": "Which condition makes the old problem easier to bring to mind when the new one appears?",
   "why": "When the <b>domains or contexts</b> of the two problems were more similar, people were more likely to see and apply the analogy (Holyoak, 1990). Memorising the story for a supposed recall test gave only 30% convergence solutions, and <b>two</b> analogous problems worked better than one. Thinking aloud draws attention to surface details."
  },
  {
   "s": "comp",
   "t": "ps",
   "q": "Someone argues that, because Metcalfe's warmth ratings jump only at the last moment, insight comes “out of nowhere”. Which finding argues most directly against this?",
   "o": [
    "Activity in the right hemisphere can be observed before an insight becomes conscious",
    "People predict their own success on insight problems poorly, unlike on routine problems",
    "Warmth ratings for algebra problems rise gradually as the solution comes closer",
    "Wertheimer described insight as productive thinking that breaks with old associations"
   ],
   "a": 0,
   "spot": "Find the evidence that something is already happening BEFORE the person feels the aha.",
   "why": "Metcalfe's data show how insight <b>feels</b>: cold, then suddenly hot. But brain activity in the <b>right hemisphere</b> is visible before the insight becomes conscious, so processing is going on before the aha. This fits Sternberg's point that insights are often the result of much prior thought. Poor prediction and gradual algebra ratings are part of Metcalfe's own evidence for suddenness, and Wertheimer's view also treats insight as special."
  },
  {
   "s": "comp",
   "t": "cre",
   "q": "Early support for the disinhibition view came from patients with ADHD or bipolar disorder, who gave more original ideas than healthy participants in several studies. Why do Camarda et al. regard this as weak evidence?",
   "o": [
    "They rarely had specific inhibitory deficits, and other patient studies disagreed",
    "These patients were tested with the Stroop task only, which does not measure creativity at all",
    "These patients gave more ideas, but none of their ideas fell outside the fixation categories",
    "These patients were tested in a dual-task paradigm, which cannot detect any correlations"
   ],
   "a": 0,
   "spot": "The argument needs 'these patients have weak inhibition'. Does the evidence actually show that?",
   "why": "The argument assumes that these patients have poor <b>inhibitory control</b>. Camarda et al. note that they <b>rarely showed specific inhibitory deficits</b>, so their creativity cannot simply be credited to disinhibition, and other clinical studies gave <b>discrepant</b> results (de Souza et al., 2014). The stronger evidence on both sides comes from correlational, neuroimaging and experimental studies."
  }
 ]
});
