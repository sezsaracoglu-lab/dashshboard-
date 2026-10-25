// Mock exam built from the course readings, in-depth answers and lectures. Options are shuffled.
EXAMS.push({
 "id": "set5",
 "shuffle": true,
 "title": "Set 5 · Mock exam B",
 "blurb": "A full 25-question mock exam covering Themes 1 to 8 and the extra lectures, with all five exam skills: key concepts, main findings, figures and tables, comparing theories and applying them. Your results show your score per topic and per skill.",
 "questions": [
  {
   "s": "def",
   "t": "att",
   "q": "Neisser (1967) combined early and late filter models by proposing two kinds of processes. Which description fits his attentive, controlled processes?",
   "o": [
    "They run serially, cost time and resources such as working memory, and combine features into a meaningful representation of an object.",
    "They are automatic, fast and run in parallel, and register only the physical features of the unattended message.",
    "They weaken the unattended message so that only words with a low threshold still reach awareness.",
    "They block all unattended input at the sensory level, before any meaning is assigned."
   ],
   "a": 0,
   "spot": "Neisser = two phases. Which phase is slow, one at a time, and meaningful?",
   "why": "Neisser split attention into <b>preattentive</b> processes (automatic, fast, parallel, physical features only) and <b>attentive, controlled</b> processes (later, <b>serial</b>, costing time and resources, and able to see relations and build a meaningful object). The tempting second option is the preattentive phase. Weakening the message is Treisman's attenuation, and blocking at the sensory level is Broadbent."
  },
  {
   "s": "comp",
   "t": "att",
   "q": "One explanation of inattentional blindness says that people do see the unexpected object but forget it before they are asked about it (inattentional amnesia). Which finding speaks most strongly against this explanation?",
   "o": [
    "People still miss the unexpected object when they must press a button the moment they see anything unusual during the task.",
    "About half of the viewers do not report the gorilla when they are asked right after the video.",
    "Almost 90% of people believe that they would notice the gorilla.",
    "People who see the video a second time without the counting task do not notice the gorilla either."
   ],
   "a": 0,
   "spot": "To rule out forgetting, remove the time in which anything could be forgotten.",
   "why": "If the problem were <b>forgetting</b>, people should catch the object when they can report it <b>immediately</b>, with no retention interval. They still miss it during <b>online detection</b>, so the failure lies in attention, not memory. The 50% miss rate itself fits both explanations, and the 90% belief is about our intuitions. In fact, non-noticers who watch again without the task see the gorilla straight away, which also argues against a faded memory trace."
  },
  {
   "s": "fig",
   "t": "ts",
   "q": "The table summarises approximate reaction times from an alternating runs experiment (Monsell, 2003), as shown in the lecture.<br><table class=\"qt\"><tr><th>Measure</th><th>Approx. value</th></tr><tr><td>Single-task block (only one task)</td><td>400 ms</td></tr><tr><td>Switch trial minus repetition trial, cue 50 ms before the digit</td><td>260 ms</td></tr><tr><td>Switch trial minus repetition trial, cue 1250 ms before the digit</td><td>125 ms</td></tr></table>What are the preparation effect and the residual cost in this table?",
   "o": [
    "Preparation effect about 135 ms; residual cost about 125 ms",
    "Preparation effect about 125 ms; residual cost about 135 ms",
    "Preparation effect about 260 ms; residual cost about 125 ms",
    "Preparation effect about 135 ms; residual cost about 400 ms"
   ],
   "a": 0,
   "spot": "Preparation effect = how much the switch cost SHRINKS; residual cost = what is LEFT after long preparation.",
   "why": "The switch cost is about 260 ms with a short cue and about 125 ms with a long cue. The <b>preparation effect</b> is the reduction: 260 minus 125 is about <b>135 ms</b>. The <b>residual cost</b> is the switch cost that remains despite long preparation: about <b>125 ms</b>. The 400 ms of the single-task block is needed for the mixing cost, not for these two."
  },
  {
   "s": "app",
   "t": "stm",
   "q": "A memory app gives users four rounds. Each round shows three words from one category, followed by 18 seconds of counting backwards and then recall. In round 4, every user sees three kinds of fruit. In rounds 1 to 3, group A saw fruit, group B saw vegetables, group C saw flowers and group D saw occupations. Which order of performance in round 4, from best to worst, is expected?",
   "o": [
    "D (occupations) > C (flowers) > B (vegetables) > A (fruit)",
    "A (fruit) > B (vegetables) > C (flowers) > D (occupations)",
    "C (flowers) > D (occupations) > A (fruit) > B (vegetables)",
    "All four groups perform equally, because the delay is the same in every group."
   ],
   "a": 0,
   "spot": "Rounds of the same kind pile up interference; the less the old category resembles fruit, the bigger the recovery.",
   "why": "Repeated rounds from one category build up <b>proactive interference</b>. Switching to a category with a different meaning gives <b>release from PI</b>, and the less overlap in meaning, the bigger the release. Occupations share nothing with fruit (best), flowers share being plants, vegetables are plants and edible, and fruit itself gives no release at all (worst), as Wickens et al. (1976) found. The equal-delay option assumes decay, which cannot explain why the groups differ."
  },
  {
   "s": "find",
   "t": "wm",
   "q": "People can immediately recall about five unrelated words, but about fifteen words when the words form sentences. Why did this finding help motivate the addition of the episodic buffer to the working memory model?",
   "o": [
    "Sentence recall goes far beyond the capacity of the phonological loop, which fits a store of about four chunks that combines information with knowledge from long-term memory.",
    "It showed that the central executive stores the words of a sentence, so a separate store was not needed.",
    "It showed that sentences are stored in the visuo-spatial sketchpad, because meaning is visual.",
    "It showed that the phonological loop can hold about fifteen items when rehearsal is allowed."
   ],
   "a": 0,
   "spot": "A number that is too big for the loop: which component was added to explain it?",
   "why": "The <b>phonological loop</b> alone holds about five unrelated words, so fifteen words in sentences cannot fit there. The <b>episodic buffer</b> holds about <b>four chunks</b> of integrated information and links working memory to long-term memory, so a sentence can be stored as a few meaningful chunks. The central executive does not store anything, and the loop's capacity does not grow to fifteen."
  },
  {
   "s": "fig",
   "t": "wm",
   "chart": {
    "type": "bar",
    "title": "Step 3 of the regression predicting math calculation (McGonnell et al., 2024)",
    "x": [
     "Phonological loop",
     "Verbal central executive",
     "Visuo-spatial sketchpad *",
     "Visuo-spatial central executive"
    ],
    "y": "Standardised β",
    "series": [
     {
      "name": "β (controlling for age, phonological processing, attention)",
      "v": [
       0.17,
       -0.03,
       0.25,
       0.1
      ]
     }
    ],
    "note": "Table 3, McGonnell et al. (2024); * = p < .05. Step 3 added ΔR² = .102",
    "min": -0.1,
    "max": 0.3
   },
   "q": "The figure shows the last step of a regression in which age, phonological processing and attention problems were entered before the four working memory components. In the same sample, all four components correlated with math calculation (r = .42 to .53). Which statement is correct?",
   "o": [
    "Only the visuo-spatial sketchpad predicts math calculation over and above the other predictors, although all four components are related to it.",
    "The phonological loop is unrelated to math calculation, because its β is not significant.",
    "The visuo-spatial central executive is the strongest unique predictor, as the authors had predicted.",
    "The four working memory components together explain 10.2% of the variance, so each component explains about 2.5%."
   ],
   "a": 0,
   "spot": "Correlation (shared + unique) versus β in a regression (unique only): which bar is significant?",
   "why": "Only the <b>sketchpad</b> bar is significant (β = .25), so it is the only component with <b>unique</b> predictive value after age, phonological processing, attention and the other components are taken into account. A non-significant β does not mean “unrelated”: the loop still <b>correlates</b> with maths, but what it shares with the other predictors is not credited to it. The authors expected both visuospatial components to contribute, but the visuospatial central executive did not."
  },
  {
   "s": "comp",
   "t": "mal",
   "q": "Judge these statements about explanations of the misinformation effect.<br>I. The social-pressure explanation is weakened by the finding that rewards for accuracy do not make the effect disappear.<br>II. The memory-replacement explanation is weakened by the finding that the original memory can still be retrieved when participants are probed specifically.",
   "o": [
    "Both I and II are true.",
    "I is true, and II is false.",
    "I is false, and II is true.",
    "Both I and II are false."
   ],
   "a": 0,
   "spot": "Match each finding to the explanation it rules out.",
   "why": "If people only gave the suggested answer to please the researcher (<b>social pressure</b>), paying them for accuracy should remove the effect; it does not, so I is true. If the suggestion had <b>overwritten</b> the original, the original could not come back; it can, so II is true. What remains is <b>coexistence</b>: both versions are stored and people confuse their sources (faulty source monitoring)."
  },
  {
   "s": "find",
   "t": "ca",
   "q": "Wang (2006) asked Taiwanese and American adults for their earliest memory in response to five cue words: <i>self</i>, <i>mother</i>, <i>family</i>, <i>friend</i> and <i>surroundings</i>. She measured the age at the event and how much each memory was about independence (autonomy). What did she find?",
   "o": [
    "American participants had earlier memories for every cue word and more autonomy in them; memories cued by ‘mother’ were especially early in both cultures",
    "Taiwanese participants had earlier memories, because a self that is connected to the family gives more early memory material",
    "The two cultures differed only for the cue ‘self’; for mother, family, friend and surroundings the earliest memories came from the same age",
    "American participants had earlier memories, but autonomy did not differ between the cultures"
   ],
   "a": 0,
   "spot": "Two cultures + earliest memory + several cue words → Wang (2006): who remembers earlier, and what are the memories about?",
   "why": "The self account predicts that cultures valuing an <b>independent self</b> (the U.S.) should have earlier, more self-focused memories than cultures valuing <b>interconnectedness</b> (Taiwan). That is what Wang found, for all five cues. The ‘mother’ cue gave especially early memories in both groups, which shows that the mother-child relationship matters everywhere. The difference was not limited to the cue ‘self’."
  },
  {
   "s": "comp",
   "t": "amn",
   "q": "Baddeley's modal model of amnesia assumes that semantic memory is the residue of many episodes. Judge these statements.<br>I. Jon, whose hippocampus was damaged at birth, developed good semantic memory and above-average intelligence despite poor episodic memory, which is a problem for this assumption.<br>II. Squire and Zola (1998) accept cases like Jon as proof that episodic and semantic memory are separate systems with separate brain bases.",
   "o": [
    "I is true, II is false",
    "I is false, II is true",
    "I and II are both true",
    "I and II are both false"
   ],
   "a": 0,
   "spot": "A model assumption + a patient + a critic → does the patient go against the assumption, and does the critic agree?",
   "why": "If semantic memory were simply built from many episodes, a child with badly impaired <b>episodic memory</b> should not build rich <b>semantic memory</b>, so Jon is a real problem for the modal model (statement I). Statement II is false: <b>Squire and Zola</b> rejected the dissociation. They argued that good recognition and years of repeated school exposure could slowly build knowledge, so developmental amnesia shows a difference of degree, not two separate systems."
  },
  {
   "s": "fig",
   "t": "photo",
   "q": "After Experiment 2 of Soares and Storm (2018), 31 participants were asked what they thought taking photos does to memory (see figure). In addition, of the participants who said photos help, 62.5% still remembered the photographed paintings worse than the paintings they only observed. Which conclusion fits these data best?",
   "chart": {
    "type": "bar",
    "title": "Beliefs about photo-taking and memory",
    "x": [
     "Photos help",
     "No effect",
     "Photos impair",
     "No guess"
    ],
    "y": "% of respondents (n = 31)",
    "series": [
     {
      "name": "Respondents",
      "v": [
       52,
       26,
       19,
       3
      ]
     }
    ],
    "note": "Soares & Storm (2018), Experiment 2 survey",
    "min": 0,
    "max": 60
   },
   "o": [
    "Most people are unaware of the effect: only about a fifth expected an impairment, and most of those who expected a benefit still showed the impairment",
    "Only the participants who believed photos impair memory showed the photo-taking-impairment effect",
    "Because most participants believed photos help, the effect must be caused by consciously trusting the camera to remember",
    "The effect disappears in people who know about it, so warning people would be enough to prevent it"
   ],
   "a": 0,
   "spot": "A survey of beliefs next to actual memory scores → compare what people think with what happened.",
   "why": "Only 19% predicted an impairment and 52% expected photos to <b>help</b>, while 62.5% of that optimistic group still remembered photographed paintings worse. So people's <b>intuition</b> about this effect is wrong. Conscious trust in the camera cannot be the cause: in Experiment 2 the photos were deleted at once, and the effect remained. The data say nothing about warning people."
  },
  {
   "s": "def",
   "t": "cat",
   "q": "Ratings show that, for the category <i>vegetables</i>, carrots are rated excellent members, cucumbers good members, and seaweed only just a member, with people disagreeing about it. A category whose members differ systematically in how good an example they are, so that membership is a matter of degree, is said to have",
   "o": [
    "graded structure",
    "family resemblance",
    "a basic level",
    "necessary and sufficient features"
   ],
   "a": 0,
   "spot": "‘Members differ in how good they are, membership by degree’ → the name of the property, not its cause.",
   "why": "<b>Graded structure</b> is the property itself: membership runs from the prototype, through less typical members, down to <b>borderline cases</b> like seaweed. Family resemblance is tempting, but it is the explanation of where the gradient comes from (features shared within the category and not with other categories), not the name of the gradient. Necessary and sufficient features belong to the classical view, which says membership is all or nothing."
  },
  {
   "s": "app",
   "t": "cat",
   "q": "A shop trains new staff on two invented product types. A <i>floatcase</i> is waterproof, has a buoyant foam lining, is bright orange and is sold to sailors. A <i>glimmer</i> is made of paper, is sold to deep-sea divers, is kept in a freezer and is charged by sunlight. Staff learn which items are floatcases much faster than which are glimmers, and they remember ‘waterproof’ and ‘buoyant’ better than ‘orange’. Which approach explains this best?",
   "o": [
    "The knowledge approach",
    "The prototype approach",
    "The exemplar approach",
    "The classical view"
   ],
   "a": 0,
   "spot": "One concept ‘makes sense’ and one does not, and the sensible one is learned faster → world knowledge is shaping learning.",
   "why": "The <b>knowledge approach</b> says we learn concepts by linking them to what we already know about the world. Features that fit together (waterproof, buoyant, for sailors) form a coherent concept and are learned fast, just like the ‘donker’ in <b>Murphy and Allopenna (1994)</b>; unrelated features (orange) are remembered worse. Prototype and exemplar theory are tempting, but they only say that you store descriptions or examples, with no constraint on whether the content makes sense."
  },
  {
   "s": "find",
   "t": "cat",
   "q": "Bozeat et al. (2003) found that semantic dementia patients added wrong features (intrusions) more often when drawing living things than when drawing artefacts. What happened when the distinctiveness of each feature was added to the analysis?",
   "o": [
    "The separate effect of domain disappeared: living things simply have more widely shared features that can intrude",
    "The domain effect became stronger, showing that living things and artefacts are stored in separate semantic systems",
    "Distinctive features turned out to intrude most often, because they are the most memorable parts of a concept",
    "Distinctiveness affected omissions only, so the domain effect on intrusions remained unexplained"
   ],
   "a": 0,
   "spot": "‘Domain effect’ + ‘add distinctiveness’ → does the domain still matter once you control for how shared features are?",
   "why": "Features shared across a whole domain (eyes, four legs) intruded most often, distinctive features almost never. Animals and birds share many more features than artefacts do, so there is simply more material to <b>intrude</b>. Once <b>distinctiveness</b> was included as a predictor, the domain effect was eliminated: living things and artefacts are not stored differently. The mirror image holds for omissions: distinctive features are lost first, shared features last."
  },
  {
   "s": "app",
   "t": "emo",
   "q": "During a fire drill, an experienced receptionist follows a simple, well-practised routine (press the alarm, open the doors) and does it faster the more stressed she gets. A new colleague, who has to work out a complicated evacuation route for the first time, performs worst when she is very stressed. Which explanation fits both observations?",
   "o": [
    "The Yerkes-Dodson law: performance follows an inverted U, and the optimal level of arousal is lower for difficult tasks",
    "Mood-state-dependent memory: the route was learned in a calm state, so it cannot be retrieved in a stressed state",
    "The motivational dimensional model: low motivational intensity broadens attention for the receptionist",
    "Myopic misery: stressed people choose the quickest option instead of the best one"
   ],
   "a": 0,
   "spot": "Same stress, different effect for an easy and a hard task → arousal and performance depend on task difficulty.",
   "why": "The <b>Yerkes-Dodson law</b> says some arousal helps and too much hurts. For a simple, practised task performance keeps rising with arousal, while for a difficult task the peak lies at a <b>moderate</b> level, because high arousal eats the attention and working memory the hard task needs (as in Diamond et al., 2007, with mice learning simple and difficult discriminations). Mood-state-dependent memory is tempting, but it cannot explain why the receptionist gets better under stress."
  },
  {
   "s": "fig",
   "t": "img",
   "q": "In Experiment 2 of Besken and Mulligan (2021), sentences were shown on screen. Half of the participants tapped four pegs in a fixed pattern without looking at the board (spatial tapping); the control group only heard the metronome. The table shows the proportion of sentences accessed.<br><table class=\"qt\"><tr><th>Group</th><th>Bizarre</th><th>Common</th></tr><tr><td>Spatial tapping</td><td>.43</td><td>.26</td></tr><tr><td>Control</td><td>.48</td><td>.32</td></tr></table>Judge these statements. I. The difference between bizarre and common sentences is about the same in both groups. II. Spatial tapping removed the memory advantage of bizarre sentences.",
   "o": [
    "I is true, and II is false.",
    "I is false, and II is true.",
    "Both I and II are true.",
    "Both I and II are false."
   ],
   "a": 0,
   "spot": "Table with a distractor and a control group → subtract within each row, then compare the two differences.",
   "why": "The gap is .43 − .26 = .17 with tapping and .48 − .32 = .16 without, so the <b>bizarreness effect</b> is about equally large (I true). Bizarre sentences are still clearly better remembered under tapping, so the advantage was not removed (II false). In ANOVA terms: a main effect of sentence type, but <b>no interaction</b> with distraction."
  },
  {
   "s": "def",
   "t": "img",
   "q": "According to the propositional theory of Anderson and Bower and of Pylyshyn, the experience of “seeing” a picture in your mind is",
   "o": [
    "an epiphenomenon: a by-product reconstructed from an abstract, language-like representation",
    "an analogue code that preserves the spatial proportions of the original object",
    "a symbolic code that is arbitrarily linked to what it represents",
    "a depictive representation stored next to a separate verbal code"
   ],
   "a": 0,
   "spot": "Propositional theory + “the experience of an image” → what status does the image get?",
   "why": "Propositional theory says everything is stored as abstract <b>propositions</b> (“mentalese”). We may experience images, but they are an <b>epiphenomenon</b>: a secondary result reconstructed from the proposition at retrieval. “Analogue code” and “depictive representation stored next to a verbal code” describe Paivio's dual-code view, which propositional theory rejects."
  },
  {
   "s": "find",
   "t": "img",
   "q": "Kosslyn, Thompson and colleagues (2001) let one group rotate a Shepard-and-Metzler block figure with their own hands, while a second group watched an electric motor rotate the same figure. Both groups then did a mental rotation task in a PET scanner. What was found in the primary motor cortex?",
   "o": [
    "It was active only in the group that had rotated the figure by hand",
    "It was active in both groups, because mental rotation always uses the motor cortex",
    "It was active only in the group that had watched the motor",
    "It was inactive in both groups; only visual areas were active"
   ],
   "a": 0,
   "spot": "Two learning groups (hands vs motor) → which group's brain “replays” the movement?",
   "why": "Participants who had turned the figure with their <b>own hands</b> showed activity in the <b>primary motor cortex</b> during mental rotation, the same area used for the real movement. Those who only watched the motor showed no motor cortex activity at all. So whether mental rotation recruits motor areas depends on prior hands-on experience, not on the task alone."
  },
  {
   "s": "fig",
   "t": "heur",
   "q": "Krynski and Tenenbaum (2007) gave participants the taxicab problem (85% of taxis are Green, 15% Blue; a witness who is right 80% of the time says the taxi was Blue). In a second version they added that, because of faded paint, 20% of Blue taxis look green and 20% of Green taxis look blue.<br><table class=\"qt\"><tr><th>Version</th><th>Correct answer</th><th>Base-rate neglect</th></tr><tr><td>Standard</td><td>8%</td><td>43%</td></tr><tr><td>Faded paint</td><td>46%</td><td>8%</td></tr></table>What do these results show?",
   "o": [
    "People can use base rates once the problem makes the cause of the witness's errors explicit",
    "People only use base rates when the numbers are given as natural frequencies",
    "Base-rate neglect is caused by the availability of vivid eyewitness reports",
    "Even with a causal explanation, most people still ignore the base rate"
   ],
   "a": 0,
   "spot": "Same numbers, but one version explains WHY errors happen → the change is about causal understanding.",
   "why": "The probabilities are identical in both versions; only a <b>causal explanation</b> for misidentification was added. Correct answers rose from 8% to 46% and <b>base-rate neglect</b> fell from 43% to 8%. The natural-frequency option is tempting, because frequencies also help (Gigerenzer and Hoffrage), but no frequencies were used here, so it cannot explain this table."
  },
  {
   "s": "comp",
   "t": "dec",
   "q": "Which statement about expected utility theory and prospect theory is NOT correct?",
   "o": [
    "Prospect theory, like expected utility theory, evaluates options by the final state of wealth they lead to",
    "Expected utility theory describes how a fully rational decision maker should choose",
    "Prospect theory evaluates outcomes as gains or losses relative to a reference point",
    "Prospect theory was developed to explain why real choices deviate from expected utility theory"
   ],
   "a": 0,
   "spot": "“NOT correct” + two theories → find the statement that gives prospect theory a feature of the other theory.",
   "why": "Expected utility theory is a <b>normative</b> model: how a rational person should choose, based on final outcomes. Prospect theory is a <b>descriptive</b> model: people judge outcomes as gains or losses relative to a <b>reference point</b> (what they have now), not as absolute final wealth. So the first statement mixes up the two theories; the other three are correct."
  },
  {
   "s": "app",
   "t": "dec",
   "q": "Noor paid €250 for a non-refundable cooking workshop on Saturday. Later she wins a free ticket for a concert on the same Saturday, which she expects to enjoy much more. She goes to the workshop, saying “otherwise I will have thrown away €250.” Which concept best explains her choice?",
   "o": [
    "The sunk-cost effect",
    "The certainty effect",
    "Anchoring and adjustment",
    "The availability heuristic"
   ],
   "a": 0,
   "spot": "Money already spent and not recoverable is driving the choice → sunk cost.",
   "why": "The €250 is gone whatever she chooses, so a rational choice would compare only the future: the concert is more enjoyable and free. Continuing because you have already invested is the <b>sunk-cost effect</b>, as in Arkes and Blumer's ski-trip study, where people chose the more expensive but less enjoyable trip. It is linked to <b>psychological accounting</b>: skipping the workshop feels like “wasting” the money. The certainty effect concerns overweighting sure outcomes, which plays no role here."
  },
  {
   "s": "def",
   "t": "ps",
   "q": "Gestalt psychologist Max Wertheimer contrasted two kinds of thinking. Which description matches what he called <i>productive thinking</i>?",
   "o": [
    "Thinking that breaks with existing associations and produces a new insight into the problem",
    "Thinking that relies on existing associations and on knowledge that is already available",
    "Thinking that splits a problem into subgoals and reduces the distance to the goal for each",
    "Thinking that generates as many different solutions as possible within a short time"
   ],
   "a": 0,
   "spot": "Productive produces something new; reproductive reproduces the old.",
   "why": "<b>Productive thinking</b> goes beyond existing associations and yields insight; <b>reproductive thinking</b> reuses associations and knowledge you already have. For Wertheimer, insight problems demand the productive kind: you must see the problem in a completely new light. Splitting a problem into subgoals is the <b>means-ends heuristic</b>, and many solutions in little time is fluidity in creativity research."
  },
  {
   "s": "find",
   "t": "ps",
   "q": "Gick and Holyoak (1983) tried to help people transfer the convergence idea of a military story to the radiation problem. Each type of help was compared with receiving just one analogous story. Which help produced a clear improvement?",
   "o": [
    "Reading two analogous stories and describing how they are related",
    "Adding a passage that stated the general principle behind the solution",
    "Adding a diagram of several arrows converging on one point",
    "Thinking aloud while reading the analogous story"
   ],
   "a": 0,
   "spot": "Which help makes people actively compare, rather than telling or showing them the answer?",
   "why": "Only comparing <b>two analogous stories</b> made a real difference: from 21% to 52% solving the radiation problem. Stating the principle or adding a diagram did not help people notice and use the analogy by themselves. Comparing two problems lets people map one onto the other and form a general <b>convergence schema</b>: Gick and Holyoak call this <b>schema induction</b>. Thinking aloud, if anything, pulls attention to surface details (verbal overshadowing)."
  },
  {
   "s": "comp",
   "t": "dual",
   "q": "Asked the bat-and-ball question, Noor answers “5 cents” immediately and without any effort, without first thinking of 10 cents. Which account explains this best?",
   "o": [
    "The hybrid model: within System 1, her logical intuition was stronger than her heuristic intuition",
    "The serial model: System 2 corrected her default System 1 answer afterwards",
    "The parallel model: slow System 2 reasoning ran from the start and won",
    "Belief bias: the more believable answer won over the logical one"
   ],
   "a": 0,
   "spot": "Correct, fast and effortless at the same time: where must the logic sit?",
   "why": "In the <b>hybrid model</b> System 1 contains both a heuristic and a <b>logical intuition</b>, which can differ in strength. When the logical intuition is stronger (case B, intuitive correct), the right answer pops up quickly and effortlessly. In the <b>serial</b> and <b>parallel</b> models the correct answer can only come from slow, effortful System 2, which does not fit an instant, effortless response."
  },
  {
   "s": "fig",
   "t": "ai",
   "q": "Zhi, Kumar and Lee (2026) scored participants' essays for <i>myside bias</i>: the absolute difference between the number of valid arguments for and against the chosen position. A higher score means a more one-sided essay. Which conclusion fits the figure?",
   "chart": {
    "type": "bar",
    "title": "Myside bias by LLM access timing and time availability",
    "x": [
     "Early",
     "Continuous",
     "Late",
     "No LLM"
    ],
    "y": "Myside bias score",
    "series": [
     {
      "name": "Insufficient time (10 min)",
      "v": [
       3.13,
       2.63,
       2.03,
       2.49
      ]
     },
     {
      "name": "Sufficient time (30 min)",
      "v": [
       3.79,
       3.34,
       3.42,
       4.41
      ]
     }
    ],
    "note": "Zhi, Kumar & Lee (2026), condition means (Tables 3 and 4)",
    "min": 0,
    "max": 5
   },
   "o": [
    "With sufficient time, having the LLM late or throughout the task gave less one-sided essays than working without it",
    "With sufficient time, working without an LLM gave the most balanced essays of all four conditions",
    "Under time pressure, LLM access right at the start gave the most balanced essays",
    "LLM access timing made no difference to myside bias; only the available time did"
   ],
   "a": 0,
   "spot": "Check which direction of the scale is good before comparing the bars.",
   "why": "Here <b>lower is better</b> (more balanced). With 30 minutes, Continuous (3.34) and Late (3.42) access scored clearly below No LLM (4.41): people used the LLM to add <b>counter-arguments</b> they had overlooked. Under time pressure the picture differs: Early access gave the <b>most</b> one-sided essays (3.13, significantly above Late at 2.03). Reading high bars as good leads straight to the wrong options."
  },
  {
   "s": "app",
   "t": "ai",
   "q": "A design agency splits its staff into three groups for a one-hour idea challenge. Group A may ask ChatGPT one question, group B four to six questions, and group C at least nine. Based on Huang (2025), which outcome and explanation are most likely?",
   "o": [
    "Group B is most creative, because a moderate amount of AI input widens the range of ideas (knowledge diversity)",
    "Group B is most creative, because moderate AI use helps people restructure the problem in a new way",
    "Group C is most creative, because every extra AI interaction adds new ideas to choose from",
    "Group A is most creative, because working mostly alone avoids anchoring on the AI's ideas"
   ],
   "a": 0,
   "spot": "Inverted U, plus the mechanism that actually explained it.",
   "why": "Huang found a <b>Goldilocks</b> (inverted-U) effect: moderate collaboration was rated more creative than both low and high, and low and high did not differ. The mechanism was <b>knowledge diversity</b>, not <b>problem restructuring</b>, which did not differ between the conditions. Too little AI limits the perspectives you meet; too much gives standardised ideas and anchoring."
  }
 ]
});
