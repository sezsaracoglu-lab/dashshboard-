IDQ[7] = {
  n: 7,
  title: "Problem solving and creativity",
  readings: ["Matlin, Problem solving and creativity", "Robinson-Riegler, Problem solving", "Sternberg, Problem solving and creativity", "Camarda et al. (2018), inhibitory control and creative idea generation"],
  intro: "This theme's in-depth questions move from well-structured problems, solved with algorithms and heuristics such as means-ends analysis and hill climbing, to analogies, insight and ill-structured problems, and finally to creativity in Camarda et al. (2018). The common thread: you have to get past the first representation your mind offers, and inhibition helps System 2 do that.",
  questions: [
    {
      id: "AB1",
      block: "Resources A & B · Strategies and analogies",
      title: "Means-end analysis on the Tower of Hanoi",
      canvas: "The Tower of Hanoi (three rods, n disks; move one disk at a time; only the top disk; never a larger disk on a smaller one). Who can solve the 4-disk version in the fewest moves? Using the Tower of Hanoi as an example, discuss the various steps in solving a problem through a means-end analysis.",
      asks: "Explain what means-end analysis is, then walk through its steps using the Tower of Hanoi, and give the minimum number of moves for 4 disks.",
      triage: { symptom: "‘discuss the steps … through means-end analysis’", diagnosis: "A strategy walk-through: the means-ends heuristic (Matlin; Robinson-Riegler; Newell & Simon)", treatment: "State the goal, find the biggest difference, set a sub-goal that removes it, repeat for each sub-goal, and mention the backward moves." },
      visual: { type: "flow", title: "Hanoi as a chain of sub-goals",
        steps: [ { h: "Goal", t: "all 4 disks on rod C" }, { h: "Biggest difference", t: "largest disk not on C" }, { h: "Sub-goal", t: "move 3 small disks to B" }, { h: "Same again", t: "each sub-goal splits into smaller ones" }, { h: "Finish", t: "3-disk tower from B onto C" } ],
        verdict: "Minimum for 4 disks: 2⁴ − 1 = 15 moves." },
      answer: [
        "<b>Means-end analysis</b> means you (1) divide the problem into sub-problems and (2) reduce the <b>difference</b> between the current state and the goal state for each one (Matlin). Robinson-Riegler adds that each <b>sub-goal</b> you reach moves you closer to the goal.",
        "On the Tower of Hanoi, you first define the states: all 4 disks start on rod A, and the goal is all 4 on rod C in the same order. The biggest difference is that the largest disk is not on C, so the sub-goal becomes ‘move the largest disk to C’. That move is blocked by the three smaller disks, which creates a new sub-goal: ‘move the 3-disk tower to B’.",
        "You then apply the same analysis to every sub-goal: to move 3 disks to B, first move 2 disks to C, and so on. Once the largest disk is on C, the next goal is moving the 3-disk tower from B onto C. Means-ends sometimes needs moves that seem to go away from the goal, such as putting disks on B, and people resist such detours (Matlin). Greeno (1974) showed people pause when they start a new sub-problem.",
        "So the procedure is: define the states, find the biggest difference, set a sub-goal, repeat. The fewest possible moves for 4 disks is <b>2⁴ − 1 = 15</b>."
      ],
      takeaway: "Means-end analysis on Hanoi: to move the big disk, first move the small ones out of the way, again and again.",
      trap: { wrong: "Means-end analysis never moves you away from the goal.", right: "Reaching a sub-goal, like freeing the largest disk, can need a temporary step that increases the distance to the final goal." },
      note: null
    },
    {
      id: "AB2",
      block: "Resources A & B · Strategies and analogies",
      title: "Why the Hanoi algorithm is fast",
      canvas: "A video shows an algorithm that solves the Tower of Hanoi in the minimum number of steps. Algorithms need not be inefficient. Why is an algorithm particularly efficient in this case?",
      asks: "Algorithms are usually slow. Explain what is special about the Tower of Hanoi that makes an algorithm the quickest way to solve it.",
      triage: { symptom: "‘why is an algorithm efficient here?’", diagnosis: "Algorithm vs heuristic trade-off (Matlin)", treatment: "Define an algorithm, explain why it is usually slow (exhaustive search), then show what is special about this problem's structure." },
      visual: { type: "versus", title: "Searching everything vs knowing the structure",
        cols: [ { head: "Exhaustive search", sub: "checks every possible state", tone: "bad", points: ["SIMULTANEOUSLY: 87 billion+ arrangements", "guaranteed, but slow"] },
                { head: "Recursive Hanoi rule", sub: "uses the known structure", tone: "good", points: ["move n − 1 aside, move largest, move n − 1 back", "never a wrong move", "minimum 2ⁿ − 1 moves: 15 for 4 disks"] } ],
        verdict: "When the structure is known, the algorithm is the shortcut." },
      answer: [
        "An <b>algorithm</b> always produces a solution, but it is often inefficient because it may involve an <b>exhaustive search</b> of every possibility. Matlin's example: the word SIMULTANEOUSLY has 87 billion+ possible arrangements.",
        "The Tower of Hanoi is different because it is a <b>well-structured</b> problem: the start state, goal state and allowed moves are completely defined. It also has a regular, <b>recursive</b> structure: move n − 1 disks aside, move the largest, move n − 1 back. So one fixed procedure tells you the right move at every step, instead of searching the problem space.",
        "That algorithm reaches the goal in the minimum <b>2ⁿ − 1</b> moves (15 for 4 disks) without a single wrong move, while a heuristic solver often makes detours or dead-end moves.",
        "The general point: algorithms are slow only when they must check every possibility. When the structure is known, an algorithm can be the most efficient strategy, and a well-practised algorithm can even become fast and automatic (System 1; Robinson-Riegler)."
      ],
      takeaway: "An exhaustive search tries every road; the Hanoi algorithm already has the map.",
      trap: { wrong: "Algorithms are always slower than heuristics.", right: "They are slow only when they must search every possibility; with a known recursive structure, an algorithm gives the correct move directly." },
      note: null
    },
    {
      id: "AB3",
      block: "Resources A & B · Strategies and analogies",
      title: "Which heuristic fits the maze?",
      canvas: "Researchers often use the metaphor of the problem space: problem solving is a search through a maze from the start (problem) to the exit (solution). Some paths lead to the exit, others lead you astray or back to the start. To which problem-solving heuristic does this metaphor correspond best?",
      asks: "Match the ‘maze’ picture of problem solving to one heuristic, and argue why it fits better than the other one.",
      triage: { symptom: "‘to which heuristic does this metaphor correspond?’", diagnosis: "Match a description to a strategy: means-ends vs hill climbing", treatment: "List what the metaphor assumes (states, moves, goal, distance, dead ends), then check which heuristic uses all of them." },
      visual: { type: "versus", title: "Two ways to walk the maze",
        cols: [ { head: "Means-ends analysis", sub: "best match", tone: "good", points: ["compares current state with exit", "sets sub-goals, allows detours", "used by Newell & Simon's GPS"] },
                { head: "Hill climbing", sub: "also searches the maze", tone: "neutral", points: ["looks only at the next step", "no sub-goals, never backs up", "gets caught in dead ends"] } ],
        verdict: "The maze is the problem space; means-ends reads the map." },
      answer: [
        "The problem-space metaphor comes from <b>Newell and Simon</b>, who described problem solving as moving from an initial state to a goal state through intermediate states. Their General Problem Solver searched that space with <b>means-ends analysis</b>, so that is the best fit: you compare where you are with the exit and choose moves and sub-goals that reduce the distance, accepting temporary detours when needed.",
        "The metaphor also shows the weakness of <b>hill climbing</b>. It searches the same space but only takes the step that looks closest to the goal right now. In a maze, the path pointing towards the exit often leads to a dead end: exactly the ‘paths that lead you astray’.",
        "To argue it, name the features of the metaphor (states, moves, goal, distance, dead ends) and show that means-ends uses all of them (difference reduction plus sub-goals), while hill climbing uses only distance reduction. One limit: the maze fits <b>well-structured</b> problems; in ill-structured or insight problems the maze itself is unclear and must be restructured (Sternberg)."
      ],
      takeaway: "The maze metaphor was built around means-ends analysis: difference reduction plus sub-goals.",
      trap: { wrong: "Hill climbing is the best fit because you walk towards the exit.", right: "Hill climbing ignores sub-goals and detours, so it gets stuck in the dead ends the metaphor describes. It can still be accepted if argued well." },
      note: "The remark that a tutor may also accept hill climbing is exam guidance from the study page, not from the readings."
    },
    {
      id: "AB4",
      block: "Resources A & B · Strategies and analogies",
      title: "Why hill climbing is a heuristic",
      canvas: "Why is the hill-climbing heuristic termed a heuristic?",
      asks: "Give the definition of a heuristic and show that hill climbing has every feature of it, and is therefore not an algorithm.",
      triage: { symptom: "‘why is X termed a heuristic?’", diagnosis: "Definition question: heuristic vs algorithm", treatment: "Define a heuristic (rule of thumb, usually correct, no guarantee), then tick off each feature in hill climbing." },
      visual: { type: "grid", title: "Features of a heuristic, found in hill climbing",
        cols: ["Hill climbing?", "How"],
        rows: [ { head: "Rule of thumb", cells: ["yes", "take the step closest to goal"] },
                { head: "Explores few options", cells: ["yes", "ignores every other path"] },
                { head: "Fast, usually works", cells: ["yes", "handy when you see one step"] },
                { head: "Guarantees a solution", cells: ["no", "can end on a local top"] } ] },
      answer: [
        "A <b>heuristic</b> is a general rule of thumb that is usually correct. It explores only the most promising alternatives, so it is fast but does <b>not guarantee</b> a solution (Matlin).",
        "Hill climbing fits exactly. At every choice point you pick the step that seems to lead most directly to the goal and ignore the others, which makes it quick and useful when you can only see the next step. But it can lead you to a dead end or a <b>local top</b>: an indirect path that first goes down might have been the only way up. Examples are the hillside path that ends abruptly, or taking a job straight away instead of doing a graduate degree.",
        "So hill climbing is a heuristic, not an <b>algorithm</b>: it saves effort by ignoring part of the problem space, at the price of no guarantee."
      ],
      takeaway: "Hill climbing is ‘always go uphill’: fast and usually right, until you are on the wrong hill.",
      trap: { wrong: "Hill climbing is a heuristic because it is a step-by-step procedure.", right: "Algorithms are step-by-step too. It is a heuristic because it only explores the most promising option and gives no guarantee." },
      note: null
    },
    {
      id: "AB5",
      block: "Resources A & B · Strategies and analogies",
      title: "Passing this course: two strategies",
      canvas: "What would it look like if you were to apply means-end analysis vs the hill-climbing heuristic to the ‘problem’ of passing this course?",
      asks: "Treat passing the course as a problem. Describe how you would study using means-end analysis and using hill climbing, and say which works better.",
      triage: { symptom: "‘apply strategy X vs Y to situation Z’", diagnosis: "Application question: means-ends vs hill climbing", treatment: "Name the goal and start state, describe each strategy step by step in this situation, then compare the outcomes." },
      visual: { type: "versus", title: "Two ways to ‘solve’ passing this course",
        cols: [ { head: "Means-ends", sub: "sub-goals", tone: "good", points: ["objectives per problem", "prepare tutorial questions", "practise MCQs, revise weak themes", "sometimes step back a theme"] },
                { head: "Hill climbing", sub: "quickest feeling of progress", tone: "bad", points: ["re-read easiest summary", "highlight a bit more", "skip the hard theme", "gap: hard theme is on the exam"] } ],
        verdict: "Means-ends for a big goal; hill climbing for small daily choices." },
      answer: [
        "The <b>goal state</b> is passing the exam (multiple choice, based on tutorials and lectures); the initial state is what you know now.",
        "With <b>means-end analysis</b>, you find the biggest gaps between what you know and what the exam requires and turn them into sub-goals: one per problem and its learning objectives, preparing the tutorial questions, practising MCQs, and revising weak themes. For each sub-goal you reduce the difference by studying, testing yourself and checking. Sometimes you step back and re-read an earlier theme you misunderstood, because it helps later.",
        "With <b>hill climbing</b>, you always choose what gives the most immediate feeling of progress: re-reading the easiest summary, highlighting, doing the next item on the list, skipping the hard topic. It feels efficient, but it can leave <b>gaps</b> (the hard theme is exactly what the exam asks) and gives short-term rather than long-term solutions (Matlin).",
        "Conclusion: means-end analysis is the better plan for a large, multi-part goal like a course; hill climbing is fine for small, day-to-day choices."
      ],
      takeaway: "Means-ends is a study plan with milestones; hill climbing is doing whatever feels productive tonight.",
      trap: { wrong: "Hill climbing is fine because every study session makes some progress.", right: "It picks the quickest gain, so it skips hard themes and leaves gaps for the exam." },
      note: "The study scenario is an application built from own reasoning; only the definitions and the short-term vs long-term point come from Matlin."
    },
    {
      id: "AB6",
      block: "Resources A & B · Strategies and analogies",
      title: "Two meanings of ‘verbal’",
      canvas: "Lane & Schooler (2004): participants who thought aloud tended to find superficial but not structural similarities. Markman, Taylor & Gentner (2007): participants recalled structurally similar items better when these were presented verbally. These seem at odds, but they are not. Why not?",
      asks: "Both studies are about ‘verbal’ conditions but find opposite effects on structure. Show that ‘verbal’ means a different thing in each, so they do not contradict each other.",
      triage: { symptom: "‘seem at odds but are not; explain’", diagnosis: "Compare two studies: look for a difference in the manipulation", treatment: "For each study, say who is verbal, when it happens and which process it affects, then conclude." },
      visual: { type: "grid", title: "Same word, different manipulation",
        cols: ["Lane & Schooler (2004)", "Markman et al. (2007)"],
        rows: [ { head: "Who is verbal?", cells: ["participant talks", "material is spoken"] },
                { head: "When?", cells: ["at retrieval", "at encoding"] },
                { head: "Effect", cells: ["pulled to surface features", "structure encoded better"] },
                { head: "Surface analogies", cells: ["3.8 aloud vs 1.9 silent", "not given"] },
                { head: "Structural analogies", cells: ["1.0 aloud vs 2.3 silent", "better recall"] } ] },
      answer: [
        "In <b>Lane & Schooler</b>, ‘verbal’ means the participant produces speech: they think aloud during <b>retrieval</b>. Talking pushes attention to what is easy to put into words, which is surface features. Verbalisation ‘biases people toward verbalizable processes’: surface analogies 3.8 vs 1.9, structural 1.0 vs 2.3 (think aloud vs silent).",
        "In <b>Markman et al.</b>, ‘verbal’ means the material is presented in spoken form: participants listened rather than read. Listening improves comprehension of relations, so the structure of the proverbs is encoded better at <b>encoding</b> and later cued by structurally similar proverbs.",
        "So the two manipulations differ in who is verbal (speaker vs listener), when (retrieval vs encoding) and which process is affected (biasing the search vs improving the encoding of relations). There is <b>no contradiction</b>: speaking your thoughts can distract from structure, while hearing a problem can help you grasp it. One implication is that lab studies with written problems may underestimate analogy use (Robinson-Riegler)."
      ],
      takeaway: "Talking while searching grabs the shiny surface; listening while learning helps you hear the structure.",
      trap: { wrong: "One of the two studies must be wrong, since verbal helps in one and hurts in the other.", right: "‘Verbal’ is a different manipulation in each: speaking at retrieval vs hearing at encoding." },
      note: null
    },
    {
      id: "AB7",
      block: "Resources A & B · Strategies and analogies",
      title: "Analogy transfer: noticing is the bottleneck",
      canvas: "Explain how the second-phase sketch results of Catrambone, Craig & Nersessian (2006) (Table 12.4) replicate the diagram results of Gick & Holyoak (1983) (Figure 12.5). Explain how the third-phase results of Catrambone et al. replicate the ‘another analogous problem’ results of Gick & Holyoak. What do the latter results indicate about the difficulties people experience when applying analogies?",
      asks: "Line up two pairs of results from the two studies and show they follow the same pattern. Then say what that pattern tells you about where analogy use goes wrong.",
      triage: { symptom: "‘explain how result X replicates result Y’", diagnosis: "Compare two data sets: match conditions and patterns", treatment: "Line up the matching conditions, compare the numbers, then say what the shared pattern means." },
      visual: { type: "bars", title: "Spontaneous solving (%), both studies", unit: "%", max: 100,
        groups: [ { label: "Gick & Holyoak: visual aid", bars: [ { label: "analogy alone", value: 40, tone: "neutral" }, { label: "plus diagram", value: 22, tone: "bad" } ] },
                  { label: "Catrambone: phase 2", bars: [ { label: "verbal recall", value: 19, tone: "neutral" }, { label: "sketch", value: 27, tone: "bad" }, { label: "enactment", value: 52, tone: "good" } ] },
                  { label: "Gick & Holyoak: 2 analogues", bars: [ { label: "plus another analogue", value: 52, tone: "good" } ] } ],
        note: "Catrambone phase 3, told to use the story: 91 / 85 / 86% solved." },
      answer: [
        "<b>Sketch ↔ diagram.</b> In Gick & Holyoak (1983), adding a diagram of converging arrows did not help spontaneous transfer (22% vs 40% for the analogy alone). In Catrambone et al., people who sketched while recalling the General story solved the radiation problem spontaneously only 27% of the time, hardly better than verbal recall (19%) and far below enactment (52%). Both show that a <b>visual depiction</b> of the source does not make people notice the analogy.",
        "<b>Third phase ↔ another analogue.</b> In Catrambone's third phase people were told to use the story, and almost everyone solved it (91 / 85 / 86%), whatever the encoding condition. In Gick & Holyoak, transfer rose to 52% only when people got two analogous stories and had to relate them. In both, transfer works once people are made to <b>connect</b> source and target.",
        "So the bottleneck is <b>noticing / retrieving</b> the analogy, not mapping or applying it. Structural similarity alone is a poor memory cue when surface features differ (Robinson-Riegler: ‘basically a failure of memory’). Enactment and schema induction help because they encode the structure."
      ],
      takeaway: "People can use the key once told it is in their pocket; the hard part is remembering they have it.",
      trap: { wrong: "People fail at analogies because they cannot map one problem onto the other.", right: "Once told to use the source, nearly everyone succeeds (85 to 91%); the failure is in noticing it." },
      note: null
    },
    {
      id: "C1",
      block: "Resource C · Insight and ill-structured problems",
      title: "The Aha! feeling and warmth ratings",
      canvas: "The Aha-Erlebnis (eureka effect) is the experience of suddenly understanding a previously incomprehensible problem. Explain how this phenomenon is related to Metcalfe’s research on feelings of warmth.",
      asks: "Describe Metcalfe's warmth study and show that its result for insight problems is the Aha! experience measured in the lab.",
      triage: { symptom: "‘relate phenomenon X to study Y’", diagnosis: "Insight (Sternberg: Gestalt / neo-Gestalt view)", treatment: "Describe the study, give its result for insight vs routine problems, then map the Aha! onto that result." },
      visual: { type: "versus", title: "Warmth ratings: oven or light switch?",
        cols: [ { head: "Routine problems", sub: "algebra, Tower of Hanoi", tone: "neutral", points: ["warmth rises gradually", "people predict their success"] },
                { head: "Insight problems", sub: "the Aha! case", tone: "accent", points: ["warmth flat, then jumps", "success not predicted, even pessimistic", "needs restructuring, not small steps"] } ],
        verdict: "The sudden warmth jump is the Aha-Erlebnis caught in the lab." },
      answer: [
        "<b>Metcalfe</b> (1986; Metcalfe & Wiebe, 1987) gave participants routine problems (algebra, Tower of Hanoi) and insight problems, and every 15 seconds they rated how ‘warm’, or close to the solution, they felt.",
        "For <b>routine problems</b>, warmth rose gradually as people approached the solution, and they could predict their own success. For <b>insight problems</b>, warmth stayed flat until moments before the solution and then jumped. People could not predict success, and successful solvers were even pessimistic.",
        "That sudden jump is the <b>Aha-Erlebnis</b> measured in the lab: the solution arrives all at once, without a felt approach, because it requires <b>restructuring</b> the representation rather than step-by-step progress. This supports the Gestalt idea that insight is a special process.",
        "A nuance: insights need not be sudden; they can build up gradually and often follow a lot of prior work (Smith, 1995a). The brain also shows a burst of right-temporal activity at the moment of insight (Jung-Beeman et al., 2004)."
      ],
      takeaway: "Routine problems are a warming oven; insight is a light switch.",
      trap: { wrong: "Insight problems feel warmer and warmer as you get close.", right: "Warmth stays flat until just before the answer and then jumps; a gradual rise is the routine-problem pattern." },
      note: null
    },
    {
      id: "C2",
      block: "Resource C · Insight and ill-structured problems",
      title: "The two-string problem",
      canvas: "In the two-string problem two strings hang from the ceiling, too far apart to reach both. On the floor: matches, pliers, some cotton. Solution: tie the pliers to one string, swing it like a pendulum, then grab it while holding the other. What kind of problem is this and how can participants arrive at the solution?",
      asks: "Name the type of problem, explain what makes it hard, and list the ways people can still find the pendulum solution.",
      triage: { symptom: "‘what kind of problem and how can people solve it?’", diagnosis: "Classify (ill-structured, insight) plus its obstacles (functional fixedness, mental set)", treatment: "Name the type, explain why it is hard, then list the routes to the solution from the readings." },
      visual: { type: "map", title: "Getting to the pendulum idea", center: "Ill-structured insight problem: bring the string to you",
        branches: [ { h: "Functional fixedness", t: "pliers seen only as gripping tool" }, { h: "Self-imposed constraint", t: "‘I must walk to the string’" }, { h: "Restructure", t: "bring the string to you" }, { h: "Other uses", t: "pliers become a pendulum weight" }, { h: "Body and breaks", t: "arm-swinging, incubation, hints" } ] },
      answer: [
        "This is an <b>ill-structured insight problem</b> (Sternberg): there is no clear path to the solution, and you must see the problem in a new way.",
        "It is hard for three reasons. People build a <b>self-imposed constraint</b> into their representation (‘I must walk to the string while holding the other’) and get stuck at Step 2 of the problem-solving cycle. <b>Functional fixedness</b> makes them see the pliers as a gripping tool, not as a weight for a pendulum. And a mental set from everyday experience keeps them in the familiar frame.",
        "People can reach the solution by restructuring the representation: instead of moving yourself to the string, bring the string to you. Asking what else each object could be breaks functional fixedness (pliers → weight). The body helps too: people who did arm-swinging ‘exercise breaks’ were more likely to find the swinging solution (<b>embodied cognition</b>; Matlin). Incubation and hints can break the fixation, and an analogy with a pendulum or swing could cue the answer.",
        "The solution then often arrives as a sudden <b>insight</b>."
      ],
      takeaway: "Stop trying to reach the string; make the string come to you.",
      trap: { wrong: "The problem is hard because people lack the right objects or knowledge.", right: "Everything needed is on the floor; the block is the representation: functional fixedness and a self-imposed constraint." },
      note: null
    },
    {
      id: "C3",
      block: "Resource C · Insight and ill-structured problems",
      title: "Why COVID is not like car accidents",
      canvas: "During COVID lockdowns were very effective but costly. Some argued: car accidents and swimming pools also cause deaths and we don’t shut down society for those, so we shouldn’t for COVID either. What is wrong with this argumentation?",
      asks: "The argument is an analogy. Show that it rests only on a surface similarity and misses the structural differences that decide which measures make sense.",
      triage: { symptom: "‘what is wrong with this argument?’", diagnosis: "Faulty analogy: surface vs structural similarity, transparency (Sternberg; Robinson-Riegler)", treatment: "State the analogy, show the shared surface feature, then show the structural differences that matter." },
      visual: { type: "versus", title: "Same outcome, different structure",
        cols: [ { head: "COVID", sub: "contagious, new", tone: "bad", points: ["one case infects others", "cases grow exponentially", "waves overload hospitals", "no vaccine yet"] },
                { head: "Car accidents, pools", sub: "not contagious, known", tone: "neutral", points: ["stable risk", "no hospital overload", "seat belts, speed limits, lifeguards, fences"] } ],
        verdict: "Shared surface only: all cause deaths. Measures must match structure." },
      answer: [
        "The argument is an <b>analogy</b>: ‘COVID is like car accidents and pools, so treat it the same’. It rests on a <b>surface feature</b>, since all three cause deaths. But analogies should be judged on <b>structural features</b>, the underlying relations (Gentner; Robinson-Riegler). Sternberg calls seeing an analogy because of similar content <b>transparency</b>, which leads to negative transfer.",
        "The structures differ in ways that matter. Car accidents and drownings are not contagious, while one COVID case infects others, so cases grow exponentially and each infection prevented also prevents future ones. A sudden wave of patients can overwhelm hospitals and raise deaths from other causes too, which car accidents do not do. And COVID was a new virus without vaccines, while the others are stable, known risks.",
        "We also do act on those other risks, with seat belts, speed limits, driving licences, lifeguards and fences, each matched to that risk's structure. So the conclusion does not follow: the problems differ in exactly the relations that decide which solution works."
      ],
      takeaway: "Same headline (‘people die’), different story underneath.",
      trap: { wrong: "The analogy fails because COVID killed more people.", right: "The key flaw is structural: contagion makes cases multiply, so the right measures differ." },
      note: "The structural differences (contagion, hospital overload, new vs known risk) and the cases-over-time picture are own reasoning applying the readings' surface vs structure concepts; the graph on the study page was illustrative."
    },
    {
      id: "C4",
      block: "Resource C · Insight and ill-structured problems",
      title: "More ill-structured problems in education?",
      canvas: "A common criticism of higher education is that it focuses too much on well-structured problems with one correct answer, while real-life problems are ill-structured. Do you agree? If so, how would you counter it, and what are the (dis)advantages of your proposal?",
      asks: "Give your opinion on the criticism, propose a concrete change, and weigh its pros and cons using concepts from the readings.",
      triage: { symptom: "‘do you agree? propose … (dis)advantages’", diagnosis: "Opinion question: argue with concepts (well- vs ill-structured, transfer, justification skills)", treatment: "Take a position, propose a concrete change, then give advantages and disadvantages, each linked to the readings." },
      visual: { type: "flow", title: "A balanced proposal: build up step by step",
        steps: [ { h: "Well-structured exercises", t: "build knowledge and schemas" }, { h: "Guided cases", t: "open problems with rubrics, feedback" }, { h: "Open projects", t: "choose a representation, defend it" } ],
        verdict: "Pros: justification, representing, transfer. Cons: grading, time, lost novices." },
      answer: [
        "One defensible position is to <b>partly agree</b>. Well-structured problems build the domain knowledge and schemas needed later, but real problems are mostly ill-structured, so students also need practice with problems that have no single answer.",
        "The proposal: add ill-structured tasks such as open cases and projects (for example, designing a recruitment process that reduces bias), problem-based tutorials like this course's, and assessment of <b>justification</b>, where students must choose a representation and defend their solution.",
        "The advantages are that this trains the skills ill-structured problems require, domain knowledge and justification skills (Shin, Jonassen & McGee, 2003); it practises representing problems, their main difficulty; it gives practice with insight, intuition and analysis (Pretz, 2008); and it improves transfer and motivation. The disadvantages are that grading is harder and less reliable, it takes more time, novices may feel lost (Pretz: first-years tie themselves in knots with analysis), and there is a risk of <b>negative transfer</b> if foundations are missing.",
        "So the balanced solution is to start with well-structured problems, then move gradually to ill-structured ones with clear rubrics."
      ],
      takeaway: "First learn the scales, then improvise.",
      trap: { wrong: "Agreeing means replacing well-structured problems altogether.", right: "Novices need the knowledge and schemas from well-structured problems first; build up gradually." },
      note: "This is an opinion question: the position, the proposal and the recruitment example are one defensible answer based on own reasoning; the cited advantages and disadvantages come from the readings."
    },
    {
      id: "D1",
      block: "Resource D · Camarda et al. (2018)",
      title: "Two hypotheses, two versions of Figure 2",
      canvas: "Which two hypotheses are pitted against each other in this paper? How would Figure 2 have looked under the alternative hypothesis?",
      asks: "Name the two theories Camarda et al. test, say what each predicts for the Stroop conditions, and describe how the graph would look if the losing theory had been right.",
      triage: { symptom: "‘which hypotheses … how would the figure look under the alternative?’", diagnosis: "Competing predictions about a dual-task manipulation", treatment: "Name each hypothesis and its prediction for each condition, then redraw the figure for the alternative." },
      visual: { type: "bars", title: "Fluidity in Exp 1 (actual Figure 2A)", unit: "ideas", max: 12,
        groups: [ { label: "Actual result", bars: [ { label: "single task", value: 10.69, tone: "neutral" }, { label: "congruent", value: 10.43, tone: "neutral" }, { label: "incongruent", value: 7.04, tone: "bad" } ] } ],
        note: "Under the disinhibition view, the incongruent bar would be the tallest." },
      answer: [
        "<b>Hypothesis 1</b> is the disinhibition or automatic-creativity view (Eysenck; Martindale; <b>Radel et al., 2015</b>). Creative ideas come from loose, automatic associations, so inhibitory control hinders creativity. Prediction: loading inhibition with the incongruent Stroop should increase creativity.",
        "<b>Hypothesis 2</b> is the <b>dual-process model</b> (Cassotti et al., 2016a). Creativity needs inhibitory control to suppress dominant, fixated System 1 ideas so that System 2 can expand. Prediction: the incongruent Stroop should decrease creativity, while the congruent Stroop should not differ from the single task.",
        "The result supported Hypothesis 2: fluidity was 7.04 in the incongruent condition vs 10.69 and 10.43. Under the alternative, Figure 2A would show the <b>incongruent bar as the highest</b>, above the single-task and congruent bars, which would be about equal. For Experiment 2 (Figure 2B), the alternative ‘WM load helps’ view (Lin & Lien, 2013b) predicts a higher bar for the high-demanding WM condition."
      ],
      takeaway: "Same experiment, opposite predictions: does taking the brakes away help or hurt creativity?",
      trap: { wrong: "The critical comparison is single task vs any dual task.", right: "The critical test is the incongruent Stroop (inhibition load); the congruent condition is the control." },
      note: "The redrawn Figure 2 under the alternative hypothesis is a hypothetical illustration, not data from the paper."
    },
    {
      id: "D2",
      block: "Resource D · Camarda et al. (2018)",
      title: "Flexibility vs expansivity",
      canvas: "What is the difference between flexibility and expansivity? Why does the article include multiple dependent variables?",
      asks: "Define the two creativity scores precisely with an example, and explain why one measure of creativity would not be enough.",
      triage: { symptom: "‘difference between X and Y; why multiple DVs?’", diagnosis: "Measurement question: creativity scoring", treatment: "Define both precisely, give an example, then explain what each DV captures and why one is not enough." },
      visual: { type: "grid", title: "One set of egg ideas, three scores",
        cols: ["Counts", "Example score"],
        rows: [ { head: "Fluidity", cells: ["how many ideas", "4"] },
                { head: "Flexibility", cells: ["categories used (of 54)", "4"] },
                { head: "Expansivity", cells: ["ideas outside 3 fixation metacategories", "1"] } ] },
      answer: [
        "<b>Flexibility</b> is the number of different categories of solutions a participant uses, with each idea assigned to 1 of 54 categories. <b>Expansivity</b> is the number of solutions outside the fixation effect: ideas outside the 3 fixation metacategories (reduce the shock, protect the egg, slow the fall) of the 10 metacategories.",
        "For example, parachute, balloons and a glider are 3 categories, so flexibility is 3, but expansivity is 0 because all three slow the fall. Freezing the egg is 1 idea with expansivity 1.",
        "The article uses several DVs because creativity is <b>multidimensional</b>: quantity (fluidity), variety (flexibility) and originality (expansivity). A manipulation may affect one but not another, and the theory predicts something specific about originality: inhibition is needed to escape fixation, so expansivity is the most direct test. Expansivity also correlates with expert judgments (consensual assessment), which supports its validity.",
        "Fluidity and flexibility correlated <b>.82</b>, so flexibility was dropped from the analyses to avoid redundancy."
      ],
      takeaway: "Flexibility counts the baskets; expansivity counts the eggs outside the usual baskets.",
      trap: { wrong: "Many different categories means high expansivity.", right: "Categories can all sit inside the fixation metacategories: parachute, balloons, glider give flexibility 3 but expansivity 0." },
      note: null
    },
    {
      id: "D3",
      block: "Resource D · Camarda et al. (2018)",
      title: "Did Experiment 2 do its job?",
      canvas: "Why was Experiment 2 conducted? Do you think the goal of Experiment 2 has been fully achieved?",
      asks: "Say which rival explanation of Experiment 1 the second experiment had to rule out, how it tested this, and judge whether it fully succeeded.",
      triage: { symptom: "‘why conducted? fully achieved?’", diagnosis: "Evaluate a control experiment (alternative explanation)", treatment: "State the alternative explanation of Exp 1, show how Exp 2 tests it, then weigh strengths and limitations." },
      visual: { type: "flow", title: "Experiment 2 tests a rival explanation",
        steps: [ { h: "Exp 1", t: "incongruent Stroop lowers creativity" }, { h: "Open question", t: "inhibition, or any executive load?" }, { h: "Exp 2", t: "WM load: dot task, high vs low" }, { h: "Result", t: "no difference: 11.08 vs 10.45" } ],
        verdict: "Partly achieved: WM task may be too easy, and a null result proves little." },
      answer: [
        "Experiment 1 showed that the incongruent Stroop reduced creativity, but it could not tell whether this was due to <b>inhibitory control</b> specifically or to a general <b>executive / dual-task cost</b>. Experiment 2 replaced the Stroop with a working-memory load (dot memory task, high vs low demand). If only inhibition matters, WM load should not reduce creativity; if general executive resources matter, it should.",
        "There was no effect of WM load on fluidity (11.08 vs 10.45) or expansivity (5.24 vs 5), so the authors conclude that inhibitory control is specifically involved. In favour, a pilot study (n = 21) showed the high-demand task was harder (82% vs 93% accuracy).",
        "Still, the goal is only <b>partly</b> achieved. The WM task may have been too easy, since it only requires storing dot positions; the authors suggest a harder backward-recall version. The claim rests on a <b>null result</b>, which cannot prove an effect is absent with ~25 per group. And the two tasks differ in more than ‘inhibition vs WM’ and were tested in different samples.",
        "So Experiment 2 makes the inhibition-specific explanation more plausible, but does not fully rule out a general executive account."
      ],
      takeaway: "A control experiment that finds nothing only convinces if the control task really had teeth.",
      trap: { wrong: "No effect of WM load proves working memory plays no role in creativity.", right: "A null result cannot prove absence: the task may have been too easy or the sample too small." },
      note: null
    },
    {
      id: "D4",
      block: "Resource D · Camarda et al. (2018)",
      title: "Dual-process theory and Experiment 1",
      canvas: "How does dual-process theory relate to creative idea generation in general, and specifically to the results of Experiment 1 by Camarda et al.?",
      asks: "Explain what System 1, System 2 and inhibition do when you generate ideas, then use that to explain the three conditions of Experiment 1.",
      triage: { symptom: "‘relate theory X to idea generation and to result Y’", diagnosis: "Dual-process model of creativity (Cassotti et al., 2016a)", treatment: "Describe S1 and S2 in creativity and the role of inhibition, then map each condition of Exp 1 onto it." },
      visual: { type: "bars", title: "Expansivity in Exp 1 (Camarda et al., 2018)", unit: "ideas", max: 4,
        groups: [ { label: "Single task", bars: [ { label: "inhibition free", value: 3.12, tone: "good" } ] },
                  { label: "Congruent Stroop", bars: [ { label: "inhibition still free", value: 2.82, tone: "good" } ] },
                  { label: "Incongruent Stroop", bars: [ { label: "inhibition used up", value: 1.73, tone: "bad" } ] } ],
        note: "Fluidity: 10.69, 10.43, 7.04. Only draining inhibition lowers creativity." },
      answer: [
        "In general, <b>System 1</b> is fast and intuitive and automatically produces the most accessible, common ideas (the ‘path of least resistance’), which causes fixation: slow the fall, protect the egg. <b>System 2</b> is slow and deliberate and enables conceptual expansion and analogical thinking. To be original you must first <b>inhibit</b> System 1's dominant ideas, then explore with System 2 (Cassotti et al., 2016a).",
        "In Experiment 1, the incongruent Stroop uses up inhibitory control, because you must suppress reading the word. With less inhibition left, participants could not push away the dominant ideas, so they produced fewer ideas (fluidity 7.04 vs 10.69) and fewer ideas outside the fixation categories (expansivity 1.73 vs 3.12).",
        "The <b>congruent Stroop</b> also demanded attention and a second task but no inhibition, and did not reduce creativity (10.43; 2.82). So it is the inhibition component, not doing two things at once, that matters.",
        "The results support the dual-process model and contradict the disinhibition view (Radel et al., 2015). Robinson-Riegler warns that the System 1/System 2 mapping is not always neat."
      ],
      takeaway: "System 1 serves the obvious, inhibition says ‘not that’, System 2 creates something new: block the ‘not that’ and you are stuck with the obvious.",
      trap: { wrong: "Creativity dropped because doing two tasks at once is hard.", right: "The congruent Stroop was also a second task and did not hurt; only the inhibition load did." },
      note: null
    }
  ]
};
