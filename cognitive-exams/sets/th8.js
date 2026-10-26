// Theme 8 · Large language models in psychology: practice sets written from the theme readings. Options are shuffled.
EXAMS.push({
 "id": "t8s1",
 "group": "t8",
 "shuffle": true,
 "title": "Theme 8 · Set 1",
 "blurb": "25 questions on Theme 8 (Large language models in psychology), covering all its readings and the five exam skills: key concepts, main findings, figures and tables, comparing theories and applying them. Your results show your score per topic and per skill.",
 "questions": [
  {
   "s": "def",
   "t": "llm",
   "q": "Researchers have long analysed text with programs such as LIWC, which count how often words from fixed categories occur. According to Demszky et al. (2023), what is the main advantage of large language models over this approach?",
   "o": [
    "They approximate the meaning of a word in its context, instead of giving each word one fixed meaning",
    "They count word categories more precisely, because their dictionaries contain far more words",
    "They uncover the themes of a document from patterns of words that occur together",
    "They only analyse text that experts have first labelled by hand, which makes their scores far more valid"
   ],
   "a": 0,
   "spot": "‘Main advantage over word counting’ → the bag-of-words contrast: static meaning vs meaning in context.",
   "why": "LIWC is a <b>bag-of-words</b> method: each word has the same meaning wherever it appears. LLMs <b>approximate meaning in context</b>, so topic, sarcasm or a negation can change what a word means. Finding themes from word co-occurrence is <b>topic modelling</b>, another traditional method, not the LLM advantage."
  },
  {
   "s": "find",
   "t": "llmt",
   "q": "In Zhi, Kumar and Lee (2026), some participants with only 10 minutes could use the chatbot just in the final third of the task. How did their essay score compare with the other groups that had 10 minutes?",
   "o": [
    "It was the lowest of all four groups, even lower than the group without any chatbot",
    "It was the highest, because they could use the chatbot to check an essay they had already planned",
    "It was about equal to the group without a chatbot, because the access came too late to matter",
    "It was lower than the Early group but higher than the Continuous and No-access groups"
   ],
   "a": 0,
   "spot": "‘10 minutes’ + ‘only at the end’ → the insufficient-time half of the temporal reversal.",
   "why": "Under time pressure the order was Early (3.80) > Continuous (3.49) > No access (2.75) > <b>Late</b> (1.86). Late access was not just useless but the <b>worst</b> cell: participants reported that the chatbot came too late to use well. ‘About equal to no access’ is tempting, but 1.86 is clearly below 2.75; Early and Continuous both scored significantly above Late."
  },
  {
   "s": "fig",
   "t": "aic",
   "q": "The figure shows human-rated creativity of the final proposals in Huang's (2025) Study 1, by condition. Which conclusion is best supported?",
   "chart": {
    "type": "bar",
    "title": "Human-rated creativity by degree of human-AI collaboration (Study 1)",
    "x": [
     "Low (1 use)",
     "Moderate (4 to 6 uses)",
     "High (9+ uses)"
    ],
    "y": "Mean creativity (1 to 7)",
    "series": [
     {
      "name": "Human raters",
      "v": [
       3.49,
       4.02,
       3.39
      ]
     }
    ],
    "note": "Huang (2025), Study 1, condition means",
    "min": 1,
    "max": 7
   },
   "o": [
    "Moderate use gave the most creative proposals, and low and high use did not differ significantly",
    "Creativity rose steadily with more ChatGPT interactions, as in research on AI and productivity",
    "High collaboration was significantly worse than low collaboration, so any extra AI use lowers creativity",
    "The three conditions did not differ, so the number of ChatGPT interactions has no effect on creativity"
   ],
   "a": 0,
   "spot": "Three bars with the middle one highest → read the shape (inverted U) and compare the two outer bars.",
   "why": "The middle bar (4.02) is clearly above both low (3.49) and high (3.39): a <b>Goldilocks</b> or <b>inverted-U</b> pattern, and the one-way ANOVA was significant. The two outer bars are close, and Huang found <b>no significant difference</b> between low and high: too little and too much were equally harmful. So ‘high is significantly worse than low’ over-reads a 0.10 difference."
  },
  {
   "s": "comp",
   "t": "llm",
   "q": "Judge these statements about expert evaluation and impact evaluation of LLMs (Demszky et al., 2023).<br>I. The problems of expert evaluation become larger when coders judge texts about groups they do not belong to, especially across differences in power.<br>II. If an impact evaluation shows that LLM-written texts do not change readers' behaviour, this shows that the LLM failed to express the intended construct.",
   "o": [
    "I is true, II is false",
    "I is false, II is true",
    "Both are true",
    "Both are false"
   ],
   "a": 0,
   "spot": "Two evaluation types + one claim about a null result → recall each method's specific weakness.",
   "why": "Expert evaluation suffers from the <b>intersubjectivity problem</b>, and this is amplified in <b>cross-group judgements</b> across power differences, so I is true. A null result in <b>impact evaluation</b> is theoretically ambiguous: perhaps the text failed to convey the construct, or perhaps the construct itself has no effect on the outcome. So II claims more than the data can show."
  },
  {
   "s": "app",
   "t": "llm",
   "q": "A job platform wants to know whether its LLM-based career coach gives different advice to applicants of different ethnic backgrounds. When asked directly, the model refuses to discuss ethnicity. Which approach do Demszky et al. (2023) describe for this situation?",
   "o": [
    "Send otherwise identical requests that differ only in the applicant's name and compare the advice",
    "Ask the model to explain step by step whether its own advice depends on ethnicity",
    "Add a few examples of unbiased advice to the prompt and check whether the answers improve",
    "Set the temperature to 0 so that every request gets exactly the same advice and the differences disappear"
   ],
   "a": 0,
   "spot": "‘Guardrails block the direct question’ + ‘detect bias’ → the indirect audit method.",
   "why": "Because of <b>guardrails</b>, a direct question about a group gets no useful answer. The indirect method used in real-world <b>audit studies</b> keeps the input identical and varies only names or pronouns linked to a group, then looks for systematic differences in the output. Asking the model to explain itself is <b>circular</b>: you check one black box with another."
  },
  {
   "s": "def",
   "t": "llmt",
   "q": "In Zhi et al. (2026), an essay arguing for the council decision contains 6 valid arguments in favour of the chosen position and 2 valid counter-arguments. What is this essay's myside bias score?",
   "o": [
    "4",
    "8",
    "3",
    "0.33"
   ],
   "a": 0,
   "spot": "‘Myside bias score’ + counts of pro and con arguments → it is the absolute difference.",
   "why": "<b>Myside bias</b> is scored as the absolute difference between the number of valid pro- and counter-arguments: |6 − 2| = 4. A <b>lower</b> score means more balanced reasoning. Adding the arguments (8) gives the number of arguments, not the bias, and the ratios (3 or 0.33) are not how the score is defined."
  },
  {
   "s": "find",
   "t": "aic",
   "q": "In Huang's Study 1, two blind coders scored each brainstorm on problem restructuring and on knowledge diversity. Which result was found?",
   "o": [
    "Knowledge diversity was highest with moderate collaboration, while problem restructuring did not differ between the conditions",
    "Problem restructuring was highest with moderate collaboration, while knowledge diversity did not differ between the three conditions",
    "Both measures increased steadily from low to high collaboration with ChatGPT",
    "Both measures followed an inverted U, but only problem restructuring explained the effect on creativity"
   ],
   "a": 0,
   "spot": "Two process measures, one mediator → which one moved, and which one stayed flat?",
   "why": "Moderate collaboration gave the most diverse ideas (5.10 vs 4.30 low and 4.57 high), and mediation analysis showed <b>knowledge diversity</b> explains the inverted U. <b>Problem restructuring</b>, going beyond the initial problem such as not literally using the $10, showed no differences at all. So AI dose changes the range of ideas, not ‘thinking outside the box’."
  },
  {
   "s": "app",
   "t": "llmt",
   "q": "A policy adviser has two full working days to write a recommendation based on a stack of reports that partly contradict each other. She wants a strong, balanced argument. Based on Zhi et al. (2026), what is the best advice?",
   "o": [
    "Work through the reports herself first and use the chatbot near the end to look for counter-arguments she missed",
    "Ask the chatbot to summarise all reports at the start, so she has more time left to write",
    "Avoid the chatbot altogether, because working without it gave the best essays and also the most balanced reasoning",
    "Keep the chatbot open throughout, so every claim can be checked against the reports immediately"
   ],
   "a": 0,
   "spot": "Plenty of time + wants balance → the sufficient-time half: Late access.",
   "why": "With <b>sufficient time</b>, Late access matched No access on essay score (5.77 vs 5.76) and produced significantly <b>less myside bias</b> (3.42 vs 4.41) with a similar number of arguments. Early or continuous access <b>anchored</b> people and lowered recall. Avoiding the chatbot is the tempting option, but working alone gave the most one-sided essays."
  },
  {
   "s": "def",
   "t": "llm",
   "q": "During training, a model repeatedly receives sentences such as ‘I am ___ that I will fail the exam’. It predicts the missing word, the difference with the original word (‘worried’) is computed, and its parameters are adjusted to make that difference smaller. What is this process called?",
   "o": [
    "Pre-training with masked language modelling, using backpropagation",
    "Fine-tuning with an extra classification layer on labelled sentences",
    "Prompt-tuning, in which a few examples are placed in the input",
    "Reinforcement learning from human feedback on the model's answers"
   ],
   "a": 0,
   "spot": "‘Hidden word’ + ‘error used to adjust parameters’ → the first phase of fitting an LLM.",
   "why": "In <b>pre-training</b> the model reconstructs original text, here an omitted word (<b>masked language modelling</b>); the prediction error is sent back through the network (<b>backpropagation</b>) to update the parameters. Fine-tuning comes later and uses a smaller labelled dataset for a specific task. Prompt-tuning changes no parameters at all."
  },
  {
   "s": "fig",
   "t": "llmt",
   "q": "The figure shows how well participants with <b>30 minutes</b> recalled the main idea of each document in Zhi et al. (2026). Which statement is correct?",
   "chart": {
    "type": "bar",
    "title": "Recall score with sufficient time (30 minutes)",
    "x": [
     "Early",
     "Continuous",
     "Late",
     "No LLM"
    ],
    "y": "Recall score (estimated mean)",
    "series": [
     {
      "name": "Sufficient time",
      "v": [
       2.23,
       2.03,
       2.56,
       2.99
      ]
     }
    ],
    "note": "Zhi, Kumar & Lee (2026), Table 4",
    "min": 0,
    "max": 4
   },
   "o": [
    "Continuous access led to significantly worse recall than no access, while the drop for Early access was only marginal",
    "Late access led to the worst recall, because these participants met the chatbot only at the end",
    "Early access led to significantly worse recall than no access, while the drop for Continuous access was only a marginal one",
    "All three chatbot groups recalled more than the no-access group, because the chatbot summarised the documents"
   ],
   "a": 0,
   "spot": "Recall bars with one reference group → which bar is furthest below ‘No LLM’, and which difference was only p < .10?",
   "why": "No access recalled most (2.99). <b>Continuous</b> access was lowest (2.03, p < .05) and <b>Early</b> was 2.23, a <b>marginal</b> difference (p < .10); Late (2.56) fell in between. The authors read this as early access hindering <b>internalisation</b> of the sources. Swapping which difference was significant is the trap here."
  },
  {
   "s": "comp",
   "t": "llm",
   "q": "Which statement about fine-tuning and prompt-tuning is <b>NOT</b> correct according to Demszky et al. (2023)?",
   "o": [
    "Prompt-tuning captures the subtleties of a psychological construct better than fine-tuning",
    "Prompt-tuning can work with fewer examples than fine-tuning, sometimes with only 1 to 10 of them",
    "Fine-tuning needs far less data than training a specialised model from scratch",
    "Both approaches depend on high-quality data, which can be hard to obtain"
   ],
   "a": 0,
   "spot": "‘NOT correct’ + two tuning methods → find the statement that reverses a trade-off.",
   "why": "Prompt-tuning leaves the parameters unchanged, so it is <b>less</b> effective than fine-tuning at capturing the subtleties of a construct. The other three are true: prompt-tuning needs about <b>1 to 10</b> examples, fine-tuning sometimes only <b>5 to 100</b> instead of hundreds of thousands for a new model, and both share the problem of finding high-quality annotations."
  },
  {
   "s": "app",
   "t": "aic",
   "q": "A marketing agency buys unlimited ChatGPT licences for all staff and tells them to use it as much as possible in every brainstorm, expecting more creative campaigns. Based on Huang (2025), what is the most likely outcome?",
   "o": [
    "Creativity rises at first but falls beyond moderate use, as ideas become standardised and anchored",
    "Creativity rises steadily with more use, in the same way as research has shown for productivity",
    "Creativity does not change, because AI use does not affect how people restructure a problem",
    "Creativity falls at any level of use, because the staff stop thinking about the problem for themselves"
   ],
   "a": 0,
   "spot": "‘As much as possible’ + creativity → the Goldilocks curve, not the linear productivity story.",
   "why": "Huang found an <b>inverted U</b>: from low to moderate use creativity rises, but heavy use gives <b>standardised</b> AI ideas and <b>anchoring</b>, which lowers knowledge diversity and creativity. So access alone is not enough; balanced use matters. ‘No change because restructuring is unaffected’ is half true: restructuring was flat, but creativity still changed via knowledge diversity."
  },
  {
   "s": "find",
   "t": "llm",
   "q": "Demszky and colleagues fine-tuned a language model to recognise belonging-related themes in essays written by first-year students in a large social-belonging study. What did they find?",
   "o": [
    "Students whose essays contained more belonging themes did better over the year, especially students from minoritised groups",
    "Students whose essays contained more belonging themes did better over the year, especially students from majority-group backgrounds",
    "The fine-tuned model could only score the essays that had already been coded by hand",
    "Belonging themes in the essays were unrelated to how well students did during the year"
   ],
   "a": 0,
   "spot": "‘Fine-tuned’ + ‘belonging essays’ → Box 2, and the group for whom the link was stronger.",
   "why": "About 650 hand-coded essays were used to fine-tune <b>RoBERTa</b>, which then scored all roughly 11,000 essays. More belonging themes went with better performance, and the effect was <b>stronger for minoritised students</b>, consistent with <b>identity threat</b> theories. Scoring the uncoded essays was the whole point of fine-tuning."
  },
  {
   "s": "def",
   "t": "llmt",
   "q": "How was the experiment of Zhi et al. (2026) set up?",
   "o": [
    "Eight conditions (four access timings × two time limits), and each participant took part in only one of them",
    "Eight conditions (four access timings × two time limits), and each participant completed all of them in random order",
    "Four access timings tested between participants, and both time limits tested within each participant",
    "Six conditions (three access timings × two time limits), and each participant took part in only one of them"
   ],
   "a": 0,
   "spot": "‘How was it set up’ → count the cells and decide between or within participants.",
   "why": "LLM access timing had four levels (<b>Early, Continuous, Late, No LLM</b>) and time availability two (<b>10 or 30 minutes</b>), giving a 4 × 2 design. It was <b>between-subjects</b>: 393 Prolific participants were each assigned to one cell. Forgetting the No-LLM control gives the wrong count of six."
  },
  {
   "s": "comp",
   "t": "aic",
   "q": "How does Huang's Study 3 compare with Studies 1 and 2?",
   "o": [
    "It makes demand effects unlikely and shows the pattern in real jobs, but it cannot show cause and effect",
    "It randomly assigned AI use at work, which makes its causal evidence stronger than that of the experiments",
    "It used crowd raters instead of supervisors, which reduced common-method bias compared with the two experiments",
    "It found a straight positive line between AI use and creativity, which contradicts the experiments"
   ],
   "a": 0,
   "spot": "Experiment vs field study → weigh what each design gains and what it gives up.",
   "why": "In Studies 1 and 2 the number of ChatGPT uses was imposed, which could cause <b>demand effects</b>. Study 3 measured self-reported AI use among 188 creative professionals and had <b>supervisors</b> rate creativity a week later, so the result generalises to real work. But it is <b>correlational</b>, and the curve was only consistently significant with control variables."
  },
  {
   "s": "fig",
   "t": "llm",
   "q": "Clapper and colleagues compared growth-mindset speeches by an algebra teacher from three sources. Adolescents rated each speech on growth mindset. Suppose the ratings came out as below (<b>hypothetical</b> numbers). Which rating for the prompt-tuned speeches would match the result reported by Demszky et al. (2023)?<br><table class=\"qt\"><tr><th>Source of the speech</th><th>Mean rating</th></tr><tr><td>Untuned LLM</td><td>3.0</td></tr><tr><td>LLM prompt-tuned with expert examples</td><td>?</td></tr><tr><td>Human growth-mindset experts</td><td>5.0</td></tr></table>",
   "o": [
    "4.5",
    "3.5",
    "4.0",
    "5.5"
   ],
   "a": 0,
   "spot": "A gap between two anchors + ‘what fits the reported result’ → apply the share of the gap that was closed.",
   "why": "The prompt-tuned speeches closed <b>75% of the gap</b> between the untuned LLM and the human experts: 3.0 + 0.75 × 2.0 = 4.5. Their ratings did not differ significantly from the experts', even though they took seconds instead of three days. 4.0 would be only half the gap, and 5.5 would mean the LLM beat the experts."
  },
  {
   "s": "app",
   "t": "llm",
   "q": "A psychologist uses an LLM to rate anxiety in patients' diary entries. The ratings look sensible, but she wants to know which features of the language drive them. Which approach fits the advice of Demszky et al. (2023)?",
   "o": [
    "Vary one feature in otherwise identical entries, such as ‘I can cope’ vs ‘I can't cope’, and compare",
    "Ask the LLM to explain in its own words why it gave each entry its anxiety rating",
    "Raise the temperature so that the model shows a wider range of possible anxiety ratings for each entry",
    "Fine-tune the LLM on more diary entries so that its ratings agree better with clinicians"
   ],
   "a": 0,
   "spot": "‘Wants to know WHY / which features’ → the black-box concern and its remedy.",
   "why": "LLM outputs are easy to read but the process is a <b>black box</b>. <b>Probing</b> manipulates the input along one linguistic feature, such as negation, and compares the output, like an experiment with the model as participant. Asking the model to explain itself is <b>circular</b>, because it cannot truly reason about its own output. Demszky et al. also advise adding traditional lexical analysis."
  },
  {
   "s": "fig",
   "t": "llmt",
   "q": "The table shows the share of correct document judgements by participants with <b>30 minutes</b> in Zhi et al. (2026). Only one difference between access timings was significant. Which one?<br><table class=\"qt\"><tr><th>Judgement</th><th>Early</th><th>Continuous</th><th>Late</th><th>No LLM</th></tr><tr><td>Relevance</td><td>53.6%</td><td>45.3%</td><td>52.7%</td><td>50.8%</td></tr><tr><td>Trustworthiness</td><td>37.7%</td><td>34.0%</td><td>39.0%</td><td>44.3%</td></tr><tr><td>Stance</td><td>36.7%</td><td>39.3%</td><td>45.1%</td><td>44.4%</td></tr></table>",
   "o": [
    "Continuous access gave worse trustworthiness judgements than no access",
    "Continuous access gave worse relevance judgements than early access",
    "Early access gave worse stance judgements than late access",
    "Late access gave better trustworthiness judgements of the documents than early access"
   ],
   "a": 0,
   "spot": "A table of three judgements → find the measure that access timing affected, and its biggest gap against the reference.",
   "why": "Access timing affected only the <b>trustworthiness</b> component, and the pairwise difference was Continuous (34.0%) versus No LLM (44.3%). A plausible reason: with the chatbot always at hand, people assessed <b>source credibility</b> less themselves. The relevance gap of 8 points looks large, but timing had no significant effect on relevance."
  },
  {
   "s": "def",
   "t": "aic",
   "q": "In Huang's task, one participant proposes that Mike rent a stage and pay famous artists to perform, an idea no one else had, but it would cost far more than $10. How does this idea score on creativity as Huang defines it?",
   "o": [
    "Not highly creative, because creativity requires an idea to be both novel and useful",
    "Highly creative, because creativity is defined as how original or unusual an idea is to others",
    "Highly creative, because it shows problem restructuring by ignoring the $10 limit",
    "Not creative, because only ideas suggested by ChatGPT were counted as novel"
   ],
   "a": 0,
   "spot": "An idea that is original but unworkable → check both parts of the definition.",
   "why": "Huang uses the psychological definition: creativity is generating ideas that are <b>novel and useful</b>. An idea that is original but loses money fails on usefulness. Going beyond the problem formulation is <b>problem restructuring</b>, a separate process measure, not the definition of creativity."
  },
  {
   "s": "comp",
   "t": "llmt",
   "q": "Both Zhi et al. (2026) and Huang (2025) explain why more AI support is not always better. Which mechanism do both articles name?",
   "o": [
    "Anchoring: people's own thinking stays close to what the AI has already produced",
    "Problem restructuring: AI makes people reframe a task until they lose sight of the goal",
    "Stochasticity: the AI gives different answers each time, which confuses users",
    "Representational harm: the AI presents some viewpoints less favourably than others"
   ],
   "a": 0,
   "spot": "‘Both articles’ + ‘why more AI hurts’ → the shared mechanism, not a concern from Demszky.",
   "why": "Zhi et al. found that early users saw more valid arguments from the chatbot yet added few of their own, which they explain as <b>anchoring</b> on the LLM's output. Huang argues that heavy AI use anchors people on expected, less distinctive AI ideas. <b>Problem restructuring</b> did not differ in Huang's studies, and stochasticity and representational harm are Demszky's concerns about LLMs as instruments."
  },
  {
   "s": "app",
   "t": "llm",
   "q": "A translation app turns the gender-neutral sentence ‘They are a doctor and their partner is a nurse’ into ‘He is a doctor and his wife is a nurse’ in almost every case. In the terms of Demszky et al. (2023), this is an example of",
   "o": [
    "representational harm",
    "allocative harm",
    "the intersubjectivity problem",
    "myside bias"
   ],
   "a": 0,
   "spot": "How a group is portrayed, not what it receives → which kind of harm?",
   "why": "<b>Representational harm</b> occurs when an LLM portrays social groups in a stereotyped or less favourable way, or ignores them, because it reproduces patterns in its training data. <b>Allocative harm</b> is about distributing resources or opportunities, such as loans or therapy, unequally. Nothing is being handed out here; a group is being depicted."
  },
  {
   "s": "fig",
   "t": "aic",
   "q": "The table shows how the 139 final proposals in Huang's Study 1 were classified. The task instructions mentioned a lemonade stand as an example. What does this distribution suggest?<br><table class=\"qt\"><tr><th>Category</th><th>% of proposals</th></tr><tr><td>Services and workshops</td><td>28.8</td></tr><tr><td>Food</td><td>25.2</td></tr><tr><td>General sales and resale</td><td>20.9</td></tr><tr><td>Craft creations</td><td>11.5</td></tr><tr><td>Gambling</td><td>5.8</td></tr><tr><td>Donation and busking</td><td>5.0</td></tr></table>",
   "o": [
    "Many participants fell back on obvious ideas close to the example, and only a minority came up with more unusual ones",
    "Most participants produced unusual ideas, because craft, gambling and busking together make up the majority of all proposals",
    "Participants mostly ignored the lemonade example, since food was not the largest category",
    "The categories show that ChatGPT steered every condition towards the same kind of service idea"
   ],
   "a": 0,
   "spot": "A frequency table + a cue in the instructions → are the big categories the obvious or the original ones?",
   "why": "The three largest categories, services (28.8%), food (25.2%, which includes lemonade stands) and sales (20.9%), cover three quarters of the proposals. Striking categories such as craft, gambling and busking are rare. So many people stayed close to <b>obvious variants</b> of the example, while a minority produced original ideas such as a mini treasure hunt. The table is not split by condition, so it cannot show what ChatGPT did per group."
  },
  {
   "s": "app",
   "t": "llm",
   "q": "A sociologist asks an LLM 300 times to describe ‘a successful man’ and ‘a successful woman’ and analyses which traits appear. She is not interested in the model itself but in what the texts it learned from assume about success and gender. Demszky et al. (2023) would call this use of LLMs",
   "o": [
    "a kind of digital ethnography",
    "an impact evaluation",
    "probing the black box",
    "building a keystone dataset"
   ],
   "a": 0,
   "spot": "Using the model's biases as a window on the culture behind the training data → which term?",
   "why": "Because LLMs are trained on vast amounts of human language, querying them shows how ideas hang together in the culture that produced that text: a <b>digital ethnography</b>, as in the <b>stress-is-debilitating</b> example. <b>Probing</b> also manipulates inputs, but its goal is to learn which linguistic features drive the model's output, not what a culture believes."
  },
  {
   "s": "find",
   "t": "aic",
   "q": "Huang's Study 2 was a preregistered direct replication of Study 1. What changed, and what was found for problem restructuring?",
   "o": [
    "A larger sample of US working adults with crowd raters; problem restructuring again did not differ between conditions",
    "A larger sample of US working adults with crowd raters; problem restructuring now also showed an inverted U pattern",
    "A different design task with expert raters; problem restructuring rose steadily with more ChatGPT use",
    "The same sample tested again a week later; problem restructuring was highest in the low condition"
   ],
   "a": 0,
   "spot": "‘Direct replication’ → same task and conditions; what was new, and did the null result for restructuring hold?",
   "why": "Study 2 used the same task and three conditions with <b>319 US working adults</b> and a <b>consensual assessment technique</b>: 161 crowd raters, more than 10 per proposal. Again <b>problem restructuring</b> did not differ, while knowledge diversity again followed the inverted U and explained the effect on creativity."
  },
  {
   "s": "find",
   "t": "llm",
   "q": "Asked to advise a nervous pupil about her university application, an LLM suggested making a timeline, taking online courses and reducing stress. Why do Demszky et al. (2023) use this as a warning?",
   "o": [
    "The advice sounded fitting but had no proven effect, and treated stress as purely harmful, against stress research",
    "The advice was grammatically poor and off-topic, which shows that LLMs do not yet master natural language",
    "The model refused to give any advice about stress, because its developers have built guardrails around health topics",
    "The advice matched the scientific literature, but the pupil was unlikely to trust advice from a machine"
   ],
   "a": 0,
   "spot": "Plausible-sounding advice that is still a warning → the ‘plausible, not correct’ lesson.",
   "why": "A large randomised study found this kind of advice had <b>no effect</b> on degree completion, and the stress tips reflect a <b>stress-is-debilitating mindset</b>, whereas research stresses that a stress response can enhance performance. LLMs predict what text <b>typically</b> follows, not what is true or helpful. The advice was fluent and on topic, which is exactly why it is misleading."
  }
 ]
});
EXAMS.push({
 "id": "t8s2",
 "group": "t8",
 "shuffle": true,
 "title": "Theme 8 · Set 2",
 "blurb": "25 questions on Theme 8 (Large language models in psychology), covering all its readings and the five exam skills: key concepts, main findings, figures and tables, comparing theories and applying them. Your results show your score per topic and per skill.",
 "questions": [
  {
   "s": "def",
   "t": "llm",
   "q": "A pre-trained LLM gets an extra classification layer and is then trained on a few hundred sentences labelled ‘concern’ or ‘no concern’; during this training its parameters are updated. Afterwards it labels new sentences, for example 70% of them as ‘concern’. Which step is this?",
   "o": [
    "Fine-tuning",
    "Prompt-tuning",
    "Pre-training",
    "Probing"
   ],
   "a": 0,
   "spot": "Labelled task data + parameters updated + a model that was already trained → which adaptation step?",
   "why": "<b>Fine-tuning</b> takes a <b>pre-trained</b> model and trains it further on a smaller, task-specific labelled dataset, updating the parameters, often with an added classification layer. In <b>prompt-tuning</b> only the examples in the input change and the parameters stay fixed. Pre-training is the first, general phase on huge amounts of unlabelled text."
  },
  {
   "s": "fig",
   "t": "llmt",
   "q": "The figure shows essay scores in Zhi et al. (2026) for each LLM access timing, with 10 or 30 minutes for the task. Which statement best describes the figure?",
   "chart": {
    "type": "line",
    "title": "Essay score by LLM access timing and time availability",
    "x": [
     "Early",
     "Continuous",
     "Late",
     "No LLM"
    ],
    "y": "Essay score (estimated mean)",
    "series": [
     {
      "name": "Insufficient time (10 min)",
      "v": [
       3.8,
       3.49,
       1.86,
       2.75
      ]
     },
     {
      "name": "Sufficient time (30 min)",
      "v": [
       4.51,
       4.71,
       5.77,
       5.76
      ]
     }
    ],
    "note": "Zhi, Kumar & Lee (2026), Tables 3 and 4",
    "min": 0,
    "max": 7
   },
   "o": [
    "Groups that started without the chatbot gained far more from extra time than groups with it from the start",
    "Having the chatbot always raised essay scores compared with having no chatbot at all, whatever the time limit was",
    "Early access gave the highest essay score both with 10 minutes and with 30 minutes",
    "Extra time raised the essay score by about the same amount in all four access groups"
   ],
   "a": 0,
   "spot": "Two lines that cross → describe how the effect of one factor depends on the other.",
   "why": "With 10 minutes Early (3.80) and Continuous (3.49) were best; with 30 minutes Late (5.77) and No LLM (5.76) were best. So the gain from extra time was large for Late (+3.91) and No access (+3.01) but small for Continuous and minimal for Early. That is an <b>interaction</b>, the <b>temporal reversal</b>; a uniform time gain would give parallel lines."
  },
  {
   "s": "def",
   "t": "aic",
   "q": "While brainstorming how Mike can earn money in three hours with $10, a participant writes: ‘He does not need the $10 at all: he could book tables at busy restaurants and sell the reservations.’ Which of Huang's coded dimensions does this idea reflect most clearly?",
   "o": [
    "Problem restructuring",
    "Knowledge diversity",
    "Anchoring",
    "Functional fixedness"
   ],
   "a": 0,
   "spot": "An idea that drops a constraint in the problem statement → which process code?",
   "why": "<b>Problem restructuring</b> is the share of ideas that go beyond the initial problem formulation, such as no longer treating the $10 as something that must be used. <b>Knowledge diversity</b> is about how varied a set of ideas is in categories and perspectives, which you cannot judge from one idea. Functional fixedness would be the opposite: staying stuck in the usual framing."
  },
  {
   "s": "comp",
   "t": "llm",
   "q": "Judge these statements comparing LLMs with traditional text-analysis methods such as word counts and topic models (Demszky et al., 2023).<br>I. LLM output is easier to interpret in psychological terms, because the model can say in plain language which emotion a sentence expresses.<br>II. It is easier to trace how an LLM arrived at its output than how a word count was produced.",
   "o": [
    "I is true, II is false",
    "I is false, II is true",
    "Both are true",
    "Both are false"
   ],
   "a": 0,
   "spot": "Output vs process → the black-box concern separates the two.",
   "why": "With word counts or topic models a researcher still has to translate the numbers into a construct, whereas an LLM answers in plain language, so I is true. But the <b>process</b> behind an LLM's answer is a <b>black box</b>, while a word count is fully transparent, so II is false. That is why Demszky et al. recommend <b>probing</b> and adding traditional lexical analysis."
  },
  {
   "s": "app",
   "t": "llmt",
   "q": "A student must write a reasoned answer from five source texts within 15 minutes and is allowed to use a chatbot. Following the design recommendations of Zhi et al. (2026), what is the best way to use it?",
   "o": [
    "Use it from the start, but ask for several candidate answers based on different sources to limit anchoring",
    "Wait until the last few minutes, so that the chatbot can check an answer that is already written",
    "Use it only to check that its summaries are factually correct, since accuracy is the main risk",
    "Do not use it at all, because under time pressure the students without a chatbot wrote the best answers of all"
   ],
   "a": 0,
   "spot": "Time pressure + a chatbot → early help pays off, but what is its known risk and fix?",
   "why": "Under <b>insufficient time</b>, early access gave the best essays and late access the worst, because it came too late. Early help carries a risk of <b>anchoring</b>, so the authors advise designs that support <b>source diversity</b> and balanced reasoning, for example several candidate answers from different sources, rather than only checking output quality."
  },
  {
   "s": "find",
   "t": "aic",
   "q": "Judge these statements about Study 1 of Huang (2025).<br>I. Business value as judged by two entrepreneurship experts showed the same inverted-U pattern as creativity rated by human raters.<br>II. Creativity as rated by GPT showed a clearly significant inverted U, with the moderate condition rated higher than both other conditions.",
   "o": [
    "I is true, II is false",
    "I is false, II is true",
    "Both are true",
    "Both are false"
   ],
   "a": 0,
   "spot": "Three kinds of raters in one study → which ones reached significance?",
   "why": "Experts' <b>business value</b> ratings were highest for moderate collaboration (5.67 vs 4.60 and 4.69), so I is true. The <b>AI-rated</b> creativity pointed the same way, but the overall effect fell just short of significance, and moderate (3.91) was only higher than low (3.33), not than high (3.66). So II overstates it."
  },
  {
   "s": "app",
   "t": "llm",
   "q": "Trained coders rate a manager's feedback message (‘Great job, as always!’) as highly supportive. The employee, who has low self-esteem, reads it as insincere and feels worse. For evaluating an LLM that writes such messages, this example shows",
   "o": [
    "the intersubjectivity problem of expert evaluation",
    "the theoretical ambiguity of null results in impact evaluation",
    "the stochastic nature of LLM output",
    "allocative harm caused by the LLM"
   ],
   "a": 0,
   "spot": "Coders and the receiver disagree on what a text means → a weakness of matching experts' judgements.",
   "why": "<b>Expert evaluation</b> checks whether LLM output matches what human coders judge, but a third party can never fully know how someone else construes a message: the <b>intersubjectivity problem</b>. For subtle constructs there may be no single right answer, as with compliments and <b>low self-esteem</b>. Impact evaluation would measure the effect on the reader instead."
  },
  {
   "s": "fig",
   "t": "aic",
   "q": "The figure shows the knowledge diversity of brainstormed ideas in Huang's Studies 1 and 2. Problem restructuring did not differ between the conditions in either study. What do these results imply about the indirect effect of AI collaboration on creativity via knowledge diversity?",
   "chart": {
    "type": "bar",
    "title": "Knowledge diversity of brainstormed ideas",
    "x": [
     "Low",
     "Moderate",
     "High"
    ],
    "y": "Knowledge diversity (mean rating)",
    "series": [
     {
      "name": "Study 1",
      "v": [
       4.3,
       5.1,
       4.57
      ]
     },
     {
      "name": "Study 2",
      "v": [
       4.45,
       4.81,
       4.6
      ]
     }
    ],
    "note": "Huang (2025), Studies 1 and 2, condition means",
    "min": 1,
    "max": 7
   },
   "o": [
    "It is positive when moving from low to moderate collaboration and negative when moving from moderate to high",
    "It is positive at every level, so more collaboration always adds to creativity via diversity",
    "It runs through problem restructuring at low levels and through knowledge diversity at the high levels of collaboration",
    "It is negative from low to moderate and positive from moderate to high collaboration"
   ],
   "a": 0,
   "spot": "A mediator that peaks in the middle → the indirect effect changes sign along the curve.",
   "why": "In both studies <b>knowledge diversity</b> was highest with moderate collaboration (5.10 and 4.81). Mediation analysis for curvilinear effects showed that from low to moderate, more AI raised creativity by <b>raising</b> diversity, while from moderate to high, more AI lowered creativity by <b>lowering</b> diversity. <b>Problem restructuring</b> stayed flat, so it cannot be the route at any level."
  },
  {
   "s": "app",
   "t": "llm",
   "q": "A group of universities records 5,000 therapy sessions, has experts annotate them for constructs such as empathy and reappraisal, and links them to how clients are doing a year later. In the terms of Demszky et al. (2023), they are investing in",
   "o": [
    "a keystone dataset",
    "a psychologically defined benchmark",
    "equitable access to LLMs",
    "a prompt-tuning library"
   ],
   "a": 0,
   "spot": "Large, expert-annotated language data linked to real outcomes → which of the three investments?",
   "why": "<b>Keystone datasets</b> are large natural-language databases that meet the standards for expert and impact evaluation, represent the populations and constructs of interest, and are linked to important outcomes, like the <b>Texas Mindset Initiative</b> with 1,000 teachers. A <b>benchmark</b> is a standard task for comparing models, and equitable access is about affordable models and shared infrastructure."
  },
  {
   "s": "find",
   "t": "llmt",
   "q": "With only 10 minutes, participants in Zhi et al. (2026) who got the chatbot in the final third had the lowest myside bias score of all groups. Why did the authors not interpret this as more balanced reasoning?",
   "o": [
    "This group also wrote the fewest arguments, and a difference score is small when arguments are few",
    "This group copied most of its arguments directly from the chatbot, so the arguments were not really its own",
    "The myside bias score was only valid for participants who had 30 minutes",
    "This group rated its own critical thinking lower than the other groups did"
   ],
   "a": 0,
   "spot": "A low difference score + ‘not balanced’ → check the number of arguments behind it.",
   "why": "<b>Myside bias</b> is |pro − con|, so few arguments automatically give a small score. Under time pressure, Late access had fewer arguments (2.58) than Early access (3.72), which mirrors its lower myside score (2.03 vs 3.13). Only <b>with enough time</b> did Late access reduce myside bias while keeping the number of arguments. Copying was rare in all conditions."
  },
  {
   "s": "comp",
   "t": "aic",
   "q": "A researcher compares one group that may use ChatGPT freely with a group that may not use it at all, and finds no difference in creativity. Why does this not rule out Huang's (2025) hypothesis?",
   "o": [
    "With only two conditions you can only find a straight line, so a rise followed by a fall stays hidden",
    "With only two conditions you cannot measure knowledge diversity, which is needed to show any effect at all",
    "Huang's hypothesis is about problem restructuring, which this design does not measure",
    "Huang's hypothesis only applies to creative professionals, not to participants in experiments"
   ],
   "a": 0,
   "spot": "Access vs no access, and a curved hypothesis → how many points do you need to see a curve?",
   "why": "The <b>Goldilocks</b> hypothesis predicts a <b>curvilinear</b> relationship with the <i>degree</i> of collaboration. Two conditions give two points and so only a straight line; a group that uses AI a lot might score no better than a group that uses none, while a moderate group would score higher. That is why Huang used three levels and, in Study 3, a continuous measure with a quadratic term."
  },
  {
   "s": "def",
   "t": "llmt",
   "q": "Zhi et al. (2026) measured critical thinking with a task from the iPAL framework. What makes this a performance assessment rather than a self-report measure?",
   "o": [
    "Participants decide a realistic case from documents of varying reliability and stance, scored with a fixed scheme",
    "Participants rate how well they analyse, evaluate, interpret and explain information on a standardised self-assessment questionnaire",
    "Participants solve short logic puzzles with one correct answer, which are scored by computer",
    "Participants discuss the case with the chatbot, and the chatbot rates the quality of their questions"
   ],
   "a": 0,
   "spot": "‘Performance assessment’ → what people actually do on a realistic task, not what they say about themselves.",
   "why": "In the <b>water pollution</b> scenario participants act as a council member and justify a decision based on seven documents differing in relevance, <b>reliability</b> and stance. Arguments, references and reliability judgements earn points, fabrications and repeats lose points. The questionnaire option describes the <b>Critical Thinking Self-Assessment Scale</b>, which they also used, and which barely differed between conditions."
  },
  {
   "s": "app",
   "t": "llm",
   "q": "A clinic lets an LLM rank patients for scarce therapy places, based on their intake forms. An audit shows that patients who write in less fluent English are ranked lower. Which harm is this, and which safeguard do Demszky et al. (2023) recommend?",
   "o": [
    "Allocative harm; let clinicians stay in charge and accept or reject the LLM's suggestions",
    "Representational harm; set the temperature to 0 so that all patients are ranked in the same way",
    "Allocative harm; ask the LLM to explain each ranking so that biased cases can be removed",
    "Representational harm; replace the LLM with a word-count method that ignores context"
   ],
   "a": 0,
   "spot": "A resource (therapy places) divided unequally → name the harm, then the human-control remedy.",
   "why": "Unequal distribution of resources or opportunities across groups is <b>allocative harm</b>. Demszky et al. recommend <b>AI-in-the-loop, humans at the helm</b>: experts keep control and can accept or reject suggestions, instead of the LLM acting directly on vulnerable people. Asking the model to explain itself is circular, and temperature 0 only removes randomness, not bias."
  },
  {
   "s": "fig",
   "t": "llm",
   "q": "A student summarises the three phases of adapting an LLM in a table. Which row contains an error?<br><table class=\"qt\"><tr><th>Phase</th><th>Input</th><th>Parameters</th></tr><tr><td>Pre-training</td><td>Huge amounts of text with hidden words or sentence pairs</td><td>Adjusted via backpropagation</td></tr><tr><td>Fine-tuning</td><td>Smaller labelled dataset for one task</td><td>Adjusted</td></tr><tr><td>Prompt-tuning</td><td>A few examples placed in the prompt</td><td>Adjusted</td></tr></table>",
   "o": [
    "The prompt-tuning row, because the parameters stay unchanged",
    "The fine-tuning row, because the parameters stay unchanged",
    "The pre-training row, because it uses labelled data instead of raw text",
    "None of the rows, because all three phases change the parameters"
   ],
   "a": 0,
   "spot": "A table of phases × ‘parameters’ → which phase is defined by NOT touching the model?",
   "why": "In <b>prompt-tuning</b> (in-context learning) only the input is optimised and the <b>parameters remain unchanged</b>, which is why it is fast but weaker on subtle constructs and bias. <b>Pre-training</b> uses unlabelled text in which the model reconstructs hidden words, and <b>fine-tuning</b> updates the parameters on a smaller labelled set."
  },
  {
   "s": "find",
   "t": "llmt",
   "q": "Zhi et al. (2026) also logged how many documents participants opened while writing their essay. What did they find?",
   "o": [
    "With more time, those who started on their own returned to the documents far more than those with the chatbot from the start",
    "Participants with the chatbot from the start consulted the most documents, because the chatbot kept pointing them to useful files",
    "The number of documents consulted was the same in all conditions, so document use cannot explain the essay results",
    "With more time, all groups consulted fewer documents, because they relied more on what they remembered"
   ],
   "a": 0,
   "spot": "Behaviour measure (document viewing) → who returned to the sources when time allowed?",
   "why": "With sufficient time, people generally consulted more documents, especially while writing. The increase was strongest for <b>Late</b> and <b>No access</b>, who went back to verify and strengthen their arguments. With <b>Early</b> or <b>Continuous</b> access the increase stayed modest, perhaps because they already felt informed by the chatbot. This fits the anchoring account of the reversal."
  },
  {
   "s": "comp",
   "t": "aic",
   "q": "Which statement correctly compares the designs and findings of Zhi et al. (2026) and Huang (2025)?",
   "o": [
    "Zhi varied access timing and time limit, Huang the number of uses; in both, the benefit depended on conditions",
    "Both varied how often people could use the LLM; Zhi found a steady linear benefit and Huang found an inverted U",
    "Huang varied the time available and found an inverted U; Zhi varied the number of prompts and found a reversal",
    "Both studied creativity, but Zhi relied on self-report while Huang relied on objective performance measures"
   ],
   "a": 0,
   "spot": "Two AI studies side by side → name each one's manipulation, then the shared lesson.",
   "why": "Zhi et al. crossed <b>access timing</b> (Early, Continuous, Late, None) with <b>time availability</b> (10 or 30 minutes) on a critical-thinking task. Huang manipulated the <b>degree</b> of collaboration (1, 4 to 6, or 9+ ChatGPT uses) on a creativity task. Neither found a simple ‘more AI is better’: what helps depends on timing, time and dose. Zhi measured performance and showed that self-report missed the effects."
  },
  {
   "s": "app",
   "t": "aic",
   "q": "A researcher asks illustrators in one online survey how much they use AI and how creative their work is, and finds a strong correlation. A reviewer says the correlation may be inflated. What did Huang's field study do to avoid this problem?",
   "o": [
    "It had supervisors rate creativity about a week after the professionals reported their AI use",
    "It randomly assigned the professionals to low, moderate or high levels of AI use in their daily work",
    "It let GPT rate the creativity of the professionals' work instead of humans",
    "It only counted AI use that was logged automatically by the software"
   ],
   "a": 0,
   "spot": "Same people, same moment, two self-reports → common-method bias, and Huang's multi-source, multi-wave fix.",
   "why": "When one person reports both variables at the same time, shared response style or mood can inflate the correlation: <b>common-method bias</b>. In Study 3, 188 professionals reported their AI use at Time 1 and their <b>supervisors</b> rated their creativity about a week later. This <b>multi-source, multi-wave</b> design reduces the bias, though the study is still correlational."
  },
  {
   "s": "def",
   "t": "llm",
   "q": "Which of these is <b>NOT</b> part of the pre-training of an LLM as described by Demszky et al. (2023)?",
   "o": [
    "Reinforcement learning from human feedback",
    "Predicting an omitted word in a sentence",
    "Judging whether two sentences follow each other",
    "Updating the parameters via backpropagation"
   ],
   "a": 0,
   "spot": "‘NOT part of pre-training’ → the extra step added later in newer models.",
   "why": "Pre-training is <b>masked language modelling</b> (predict the omitted word) and <b>next sentence classification</b>, with prediction errors used to update the parameters by <b>backpropagation</b>. Newer models such as ChatGPT and GPT-4 add further steps on top, including instruction tuning and <b>reinforcement learning from human feedback</b>, to make output more coherent and relevant."
  },
  {
   "s": "find",
   "t": "llm",
   "q": "After ChatGPT's launch, lay users showed that it could be led into problematic statements, while its developers reported that the newest model passed the US bar exam. How do Demszky et al. (2023) explain these seemingly contradictory findings?",
   "o": [
    "Computer scientists judge LLMs by fluent, coherent output; psychologists by the effects on people's thinking and behaviour",
    "The lay tests used an older version, whereas the bar exam was passed by a newer model that was specially fine-tuned on legal texts",
    "LLMs are stochastic, so the very same model can pass an exam on one day and fail it on the next",
    "The bar exam measures reasoning ability, whereas lay users only tested the model's knowledge of facts"
   ],
   "a": 0,
   "spot": "Two conflicting verdicts on the same model → different yardsticks for ‘good’.",
   "why": "The contradiction comes from <b>different yardsticks</b>. For computer scientists an LLM is good if its output is grammatical, coherent and natural; psychologists want to know what that output <b>does</b> to human thought and behaviour. This motivates Demszky's first concern, how to <b>evaluate</b> an LLM. Stochasticity is real, but it is a separate concern about reproducibility."
  },
  {
   "s": "fig",
   "t": "llmt",
   "q": "Zhi et al. (2026) counted, per condition, how many of the arguments in participants' essays were unique, that is not found in the chatbot's responses. The figure shows how much the number of unique arguments increased from 10 to 30 minutes. Early and Continuous users had also seen more valid arguments in the chatbot's answers than Late users. Which interpretation fits best?",
   "chart": {
    "type": "bar",
    "title": "Increase in unique arguments from 10 to 30 minutes",
    "x": [
     "Early",
     "Continuous",
     "Late",
     "No LLM"
    ],
    "y": "Extra unique arguments",
    "series": [
     {
      "name": "Increase",
      "v": [
       0.28,
       0.07,
       1.8,
       2.1
      ]
     }
    ],
    "note": "Zhi, Kumar & Lee (2026), Figure 7 / section 5.2.1",
    "min": 0,
    "max": 3
   },
   "o": [
    "Early access anchored people to the chatbot's arguments, so extra time hardly led to new arguments of their own",
    "Early users copied the chatbot's text word for word, so they had no reason left to write any arguments of their own",
    "Late users had more time with the chatbot, which explains why they added more unique arguments",
    "Extra time was useless for everyone, because all groups added roughly the same number of arguments"
   ],
   "a": 0,
   "spot": "Small bars for ‘LLM from the start’, big bars for ‘on your own first’ → what keeps people from going beyond the AI?",
   "why": "Early (+0.28) and Continuous (+0.07) users barely added unique arguments with extra time, while Late (+1.80) and No access (+2.10) clearly did. More exposure to the chatbot's valid arguments did not turn into more of their own: they were <b>anchored</b>. Copying was rare, so this is not plain copy-pasting; and Late users actually had the chatbot only in the final third."
  },
  {
   "s": "def",
   "t": "aic",
   "q": "Huang (2025) predicts a Goldilocks effect. Which pattern of mean creativity scores (low, moderate, high AI collaboration) would match this prediction? (hypothetical numbers)",
   "o": [
    "3.5, 4.1, 3.4",
    "3.4, 3.9, 4.4",
    "4.1, 3.5, 4.0",
    "3.8, 3.8, 3.9"
   ],
   "a": 0,
   "spot": "‘Goldilocks’ → the shape: middle highest, both ends lower.",
   "why": "A <b>Goldilocks effect</b> is an <b>inverted U</b>: a moderate amount of collaboration is best, and both too little and too much are worse. Only the first pattern has the middle value on top. A steady rise is the linear pattern found for productivity, a dip in the middle is a U shape, the opposite of the hypothesis, and flat scores mean no effect."
  },
  {
   "s": "app",
   "t": "llmt",
   "q": "At a language school, students who let a chatbot process every reading assignment hand in good homework but remember little of the texts in class. Which finding and recommendation from Zhi et al. (2026) fit best?",
   "o": [
    "LLM access from the start hindered memory for the sources; students should regularly practise without the chatbot",
    "LLM access at the end increased myside bias; students should only use the chatbot at the start",
    "Time pressure was the only cause of poor memory; students should simply get more time",
    "Self-reports showed lower critical thinking with a chatbot; students should rate their own learning progress more often"
   ],
   "a": 0,
   "spot": "Good output, poor memory → the recall finding and the ‘preserve cognitive skills’ advice.",
   "why": "With sufficient time, continuous (and marginally early) access led to worse <b>recall</b>, suggesting the chatbot prevented <b>internalisation</b> of the material. The authors therefore advise designing for both performance and skill preservation: <b>practise without LLM support</b> now and then, because <b>cognitive offloading</b> could disrupt natural learning. Late access lowered myside bias rather than raising it."
  },
  {
   "s": "comp",
   "t": "llm",
   "q": "Probing an LLM and auditing an LLM for bias both change the input and compare the output. How do they differ?",
   "o": [
    "Probing varies linguistic features to see what drives the output; an audit varies group-linked names or pronouns to detect bias",
    "Probing asks the model to explain its own output in detail; an audit compares the model's output with the ratings of human experts",
    "Probing is used to make outputs reproducible; an audit is used to tune the model's parameters",
    "Probing varies names or pronouns linked to groups; an audit varies linguistic features such as negation"
   ],
   "a": 0,
   "spot": "Same experimental logic, different goal → which feature is manipulated, and why?",
   "why": "<b>Probing</b> addresses the black-box concern: you vary a feature such as negation (‘I care’ vs ‘I don't care’) to see whether and how the model uses it. An <b>audit</b> addresses bias: you keep the prompt identical and vary only <b>names or pronouns</b> tied to gender or ethnicity. Its limit is that you only find the biases you chose to vary, so intersectional biases are easily missed."
  },
  {
   "s": "find",
   "t": "aic",
   "q": "In Huang's Study 1, why was moderate collaboration set at four to six ChatGPT interactions?",
   "o": [
    "A pilot study estimated that the ideal number of interactions for this task was about 4",
    "Surveys showed that employees use ChatGPT about five times per working day",
    "Participants produced on average about five ideas during the brainstorming phase",
    "Four to six interactions fitted exactly into the 15 minutes that were available for the whole task"
   ],
   "a": 0,
   "spot": "‘Why these numbers?’ → where did the design's cut-offs come from?",
   "why": "The limits were based on a <b>pilot study</b> that estimated the ideal number of interactions for this task at an average of <b>4.04</b>. Low collaboration was then one use and high collaboration at least nine. On average participants brainstormed about eight ideas, so the number of ideas was not the basis."
  },
  {
   "s": "find",
   "t": "llmt",
   "q": "Why did Zhi et al. (2026) choose 10 and 30 minutes as their two time limits?",
   "o": [
    "Unlimited, people took about 20 minutes; pilots showed 10 minutes felt rushed and 30 minutes more than enough",
    "Without a limit people needed about 30 minutes, so 10 minutes was a third of the normal time",
    "They followed the time limits of standard critical-thinking tests, which usually allow either 10 or 30 minutes",
    "Prolific workers are paid per 10 minutes, so these limits kept the payment simple"
   ],
   "a": 0,
   "spot": "‘Why these levels?’ → how the manipulation was calibrated.",
   "why": "Four <b>pilot studies</b> showed that participants without a time limit took about <b>20 minutes</b> on average. Pilots confirmed that <b>10 minutes</b> was experienced as time pressure and <b>30 minutes</b> as more than sufficient. So the two levels sit clearly below and above the natural working time."
  }
 ]
});
EXAMS.push({
 "id": "t8s3",
 "group": "t8",
 "shuffle": true,
 "title": "Theme 8 · Set 3",
 "blurb": "25 questions on Theme 8 (Large language models in psychology), covering all its readings and the five exam skills: key concepts, main findings, figures and tables, comparing theories and applying them. Your results show your score per topic and per skill.",
 "questions": [
  {
   "s": "def",
   "t": "llm",
   "q": "Which description of a large language model matches Demszky et al. (2023)?",
   "o": [
    "A huge statistical model that predicts the next word or sentence from patterns in its training text",
    "A database that looks up the correct answer to a question in a very large collection of checked facts",
    "A system of grammar rules written by linguists that builds sentences from their parts",
    "A model that reasons from psychological theory about which answer will help the user most"
   ],
   "a": 0,
   "spot": "‘What is an LLM’ → prediction of typical text, not truth or theory.",
   "why": "LLMs are massive statistical models that <b>predict the next word</b>, sentence or paragraph; technically a huge system of non-linear regressions (the <b>transformer</b>) fitted on word co-occurrence patterns. They do not look up facts or reason from theory, which is why they produce <b>plausible, not necessarily correct</b> language."
  },
  {
   "s": "fig",
   "t": "aic",
   "q": "The table summarises the hierarchical regression in Huang's Study 3, predicting supervisor-rated creativity from self-reported AI collaboration (scale 1 to 7). What can be concluded?<br><table class=\"qt\"><tr><th>Predictor</th><th>b</th><th>p</th></tr><tr><td>AI collaboration (linear), with controls</td><td>.13</td><td>&lt; .001</td></tr><tr><td>AI collaboration (quadratic), with controls</td><td>−.04</td><td>.030</td></tr><tr><td>AI collaboration (quadratic), without controls</td><td>−.03</td><td>.14</td></tr></table>",
   "o": [
    "Creativity rises with AI use up to a turning point, then declines; the curve was only significant with the controls included",
    "Creativity falls with AI use up to a low point and then rises again, because the quadratic term is negative",
    "Creativity rises steadily with AI use, because only the linear term is significant in both models",
    "The curve is clearest without the control variables, which shows that individual differences are what really create the whole effect"
   ],
   "a": 0,
   "spot": "A positive linear term + a negative quadratic term → read the shape, then check when it was significant.",
   "why": "A positive linear and a <b>negative quadratic</b> term together give a (non-symmetric) <b>inverted U</b>: creativity rises from low to moderate use, with a turning point around 5, and then declines. Without the controls the quadratic term was not significant (p = .14), suggesting <b>individual differences</b> can mask the curve. A negative quadratic means a hill, not a valley."
  },
  {
   "s": "find",
   "t": "llmt",
   "q": "In open answers, participants in Zhi et al. (2026) described how they had approached the task. Which combination of condition and most common approach is correct?",
   "o": [
    "Late access with 30 minutes: using the chatbot for confidence and reassurance about reasoning already formed",
    "Early access with 30 minutes: using the chatbot for confidence and reassurance about reasoning already formed",
    "Late access with 10 minutes: using the chatbot mainly to summarise the documents",
    "No access with 10 minutes: a systematic review of all documents with an explicit time plan"
   ],
   "a": 0,
   "spot": "Condition × self-described strategy → who had a finished line of reasoning to check?",
   "why": "Under sufficient time, Late users mostly used the chatbot for <b>confidence and reassurance</b>, confirming what they had already worked out. Under insufficient time, <b>Early</b> users mainly used it to <b>summarise documents</b>, and Late users often said access came too late. An explicit time-management strategy and systematic document review were typical of <b>No access with sufficient time</b>."
  },
  {
   "s": "app",
   "t": "llm",
   "q": "A small university lab cannot afford the paid, closed models used by large tech companies. A national research council sets up discounted licences, tutorials and a shared cloud server for LLM research. Which of the three investments named by Demszky et al. (2023) is this?",
   "o": [
    "Equitable access",
    "Keystone datasets",
    "Psychologically defined benchmarks",
    "Human-at-the-helm oversight"
   ],
   "a": 0,
   "spot": "Money and infrastructure so that funding does not decide who can do the research → which investment?",
   "why": "Only a few LLMs exist because fitting one costs enormous resources, with ChatGPT estimated at about <b>3 billion dollars</b>. <b>Equitable access</b> means cost-effective models close to the paid ones, discounted licences, tutorials and <b>shared infrastructure</b>, so a researcher's funding does not decide whether AI research is possible. Keystone datasets and benchmarks are about data and evaluation standards."
  },
  {
   "s": "comp",
   "t": "aic",
   "q": "Huang distinguishes a production-focused creative process (generating and pushing ideas forward by trial and error) from a preparation-focused process (laying the groundwork for breakthrough ideas, such as reframing the problem). What do her results imply?",
   "o": [
    "The degree of AI collaboration mainly affects the production-focused process, because it changed knowledge diversity but not problem restructuring",
    "The degree of AI collaboration mainly affects the preparation-focused process, because it changed problem restructuring but not knowledge diversity",
    "AI collaboration affects both processes equally, because both measures followed an inverted U",
    "AI collaboration affects neither process, because creativity differed only in the experts' business value ratings"
   ],
   "a": 0,
   "spot": "Two process types mapped onto two coded measures → which measure moved?",
   "why": "Only <b>knowledge diversity</b>, the range of different ideas to choose from and refine, showed the inverted U; <b>problem restructuring</b>, ‘thinking outside the box’, did not differ. Huang therefore concludes that the right dose of AI supports the <b>production-focused</b> process, not the preparation-focused one. Reversing the two measures gives the tempting wrong option."
  },
  {
   "s": "def",
   "t": "llmt",
   "q": "A participant in Zhi et al. (2026) is in the Late condition with sufficient time. When could this participant use the chatbot?",
   "o": [
    "From minute 20 to minute 30",
    "From minute 0 to minute 10",
    "During the whole 30 minutes",
    "Only after the essay had been submitted"
   ],
   "a": 0,
   "spot": "‘Late’ + ‘sufficient time’ → the final third of 30 minutes.",
   "why": "Sufficient time was <b>30 minutes</b>, and <b>Late</b> access meant the chatbot was available only in the <b>last third</b> of the task time, so minutes 20 to 30. Early meant the first third (0 to 10), and Continuous the whole time. With 10 minutes, the last third would have been barely three minutes, which helps explain why Late access did so badly then."
  },
  {
   "s": "find",
   "t": "llm",
   "q": "Clapper and colleagues had LLMs write an algebra teacher's speech meant to support a growth mindset. What was missing from the speech written by the untuned LLM?",
   "o": [
    "It was positive and praised effort, but did not address students' fear that struggling means they are ‘bad at maths’",
    "It addressed students' fixed-mindset fears, but used language that was too difficult for adolescent listeners to follow",
    "It explained how to improve step by step, but was rated as less positive than the expert speeches",
    "It contained factual errors about algebra, which made adolescent raters distrust the whole speech"
   ],
   "a": 0,
   "spot": "Untuned vs expert-informed speech → what does the internet's ‘average’ growth-mindset talk leave out?",
   "why": "The untuned speech was upbeat and encouraged effort, the typical internet version of the concept, but ignored the <b>fixed-mindset fear</b> that struggling shows a lack of ability. Prompt-tuning with <b>expert examples</b> added an explanation of the path to improvement and raised the ratings to a level not significantly different from the experts."
  },
  {
   "s": "fig",
   "t": "llmt",
   "q": "The figure shows comprehension scores (correct judgements of factual and counterfactual statements) in Zhi et al. (2026). Which conclusion fits the results?",
   "chart": {
    "type": "bar",
    "title": "Comprehension by LLM access timing and time availability",
    "x": [
     "Early",
     "Continuous",
     "Late",
     "No LLM"
    ],
    "y": "% correct (estimated mean)",
    "series": [
     {
      "name": "Insufficient time (10 min)",
      "v": [
       51.1,
       50.3,
       52.7,
       50.0
      ]
     },
     {
      "name": "Sufficient time (30 min)",
      "v": [
       54.6,
       59.4,
       55.4,
       57.9
      ]
     }
    ],
    "note": "Zhi, Kumar & Lee (2026), Tables 3 and 4",
    "min": 0,
    "max": 100
   },
   "o": [
    "Comprehension mainly depended on the time available, hardly on when the chatbot was available",
    "Comprehension was clearly worse with continuous access, in the same way as recall",
    "Comprehension was best with early access under time pressure, matching the pattern of the essay results",
    "Comprehension showed the same temporal reversal as the essay score"
   ],
   "a": 0,
   "spot": "Small differences between bars within a time level, a shift between levels → main effect of time only.",
   "why": "Within each time limit the access groups lie close together (about 50% to 53% with 10 minutes), while scores are higher with 30 minutes. The authors report mainly an effect of <b>time availability</b>, significant for Continuous and No access, and minimal sensitivity to <b>access timing</b>. Continuous access even scored highest with 30 minutes (59.4%), so the recall pattern does not carry over."
  },
  {
   "s": "app",
   "t": "aic",
   "q": "A start-up wants to save money by letting GPT score the creativity of employees' pitches instead of a panel of colleagues. Based on Huang (2025), what is the main concern?",
   "o": [
    "AI and human ratings correlated only modestly, so they may weigh different aspects, such as novelty over usefulness",
    "AI ratings showed no relation at all with human ratings, so they must measure something entirely unrelated to creativity",
    "AI ratings were always higher than human ratings, so all pitches would look more creative than they are",
    "AI ratings rewarded only pitches that had themselves been written with heavy AI use"
   ],
   "a": 0,
   "spot": "Swap one rater for another → how well do the rating sources agree?",
   "why": "Across Huang's studies the different creativity measures correlated <b>significantly but modestly</b> (for example r = .23 between human and AI ratings). Different raters may stress different aspects: experts profitability, the crowd writing quality, AI possibly <b>novelty over usefulness</b>. So AI scores are related to, but not interchangeable with, human judgements."
  },
  {
   "s": "def",
   "t": "llm",
   "q": "An analyst pastes three job adverts labelled ‘inclusive’ and three labelled ‘not inclusive’ into a chat with an LLM and then asks it to label a new advert. The model itself is not retrained. What is this called?",
   "o": [
    "Prompt-tuning, also called in-context learning",
    "Fine-tuning with a small labelled dataset",
    "Pre-training with next sentence classification",
    "Probing of the model's linguistic features"
   ],
   "a": 0,
   "spot": "Examples in the input + no retraining → which adaptation method?",
   "why": "In <b>prompt-tuning</b> or <b>in-context learning</b> a few user-supplied examples steer the output, and the <b>parameters stay unchanged</b>. It needs very few examples (sometimes 1 to 10) and adapts quickly. Fine-tuning would actually update the parameters on the labelled set, and probing is a way to study what drives the output, not to adapt it."
  },
  {
   "s": "find",
   "t": "aic",
   "q": "Beyond creativity itself, what additional effects of moderate AI collaboration does Huang (2025) report?",
   "o": [
    "A stronger sense of competence in one's own creativity and a sense of shared ownership of the ideas with the AI",
    "A stronger sense of competence, but a weaker feeling that the ideas really belonged to the participant personally",
    "More ideas in total during brainstorming, and faster completion of the written proposal",
    "Lower trust in ChatGPT, and a preference to work alone on the next task"
   ],
   "a": 0,
   "spot": "‘Additional findings’ → the two feelings linked to creative performance in organisations.",
   "why": "Moderate AI use also raised the <b>sense of competence</b> in one's creative abilities and fostered <b>collective psychological ownership</b>, as if human and AI were on the same team. Both have been linked to better creative performance. The total number of brainstormed ideas did not differ between conditions."
  },
  {
   "s": "comp",
   "t": "llmt",
   "q": "Earlier user research concluded that AI tools reduce the cognitive effort people put into tasks that require critical thinking. How does the approach of Zhi et al. (2026) differ?",
   "o": [
    "A randomised experiment with performance measures, expecting effects to depend on timing rather than be uniformly good or bad",
    "A larger survey of users' own experiences with AI tools, expecting the effect of AI on their effort to be uniformly negative",
    "Recordings of brain activity during the task, expecting the effect of AI to be uniformly positive",
    "Interviews with experts about AI use, expecting effects to depend on the users' prior knowledge"
   ],
   "a": 0,
   "spot": "Old evidence vs new study → what kind of data, and what kind of hypothesis?",
   "why": "Earlier work relied on <b>self-reported</b> experiences and could not establish cause and effect. Zhi et al. ran a <b>preregistered, between-subjects experiment</b> with objective performance measures. Their key idea is that the effect of LLMs is not uniformly positive or negative but depends on the <b>temporal context</b>: when access is given and how much time there is."
  },
  {
   "s": "app",
   "t": "llmt",
   "q": "A hospital board reads Zhi et al. (2026) and wants to tell doctors to consult a chatbot only at the end of each diagnosis. Which caution do the authors themselves raise?",
   "o": [
    "It used one civic task with crowdworkers; domains where prior knowledge matters more, like diagnosis, need more research",
    "The results only hold for people who rate their own critical thinking skills as high on a self-report scale",
    "The results were found only under time pressure, so they do not apply when doctors have enough time",
    "The results came from a chatbot with full internet access, so they may not apply to tools limited to a hospital's patient files"
   ],
   "a": 0,
   "spot": "Transfer to a new field → what do the limitations say about generalisation?",
   "why": "The authors note that the task was one validated scenario (<b>water pollution</b>) and that generalising to domains like <b>medical diagnosis</b>, where prior knowledge plays a bigger role, needs further research. The study used <b>crowdworkers</b> in a lab-like, time-bound setting, which limits ecological validity. The chatbot was actually restricted to the seven documents, without internet access."
  },
  {
   "s": "fig",
   "t": "aic",
   "q": "The figure shows the results of Huang's Study 2, in which crowd raters and GPT each rated creativity on a 1 to 7 scale. Which conclusion is best supported?",
   "chart": {
    "type": "bar",
    "title": "Rated creativity in Study 2",
    "x": [
     "Low",
     "Moderate",
     "High"
    ],
    "y": "Mean creativity (1 to 7)",
    "series": [
     {
      "name": "Crowd raters",
      "v": [
       4.04,
       4.33,
       4.11
      ]
     },
     {
      "name": "GPT rating",
      "v": [
       4.39,
       4.72,
       4.31
      ]
     }
    ],
    "note": "Huang (2025), Study 2, condition means",
    "min": 1,
    "max": 7
   },
   "o": [
    "Both rating sources again favoured moderate collaboration, although the differences between conditions were small",
    "The crowd favoured moderate collaboration, but GPT's ratings rose steadily all the way from low to high collaboration",
    "GPT favoured high collaboration, which suggests it rewards ideas produced with heavy AI use",
    "The differences were large, so moderate collaboration roughly doubled the creativity of the proposals"
   ],
   "a": 0,
   "spot": "Two series, three conditions → is the middle highest in both, and how big are the gaps on a 7-point scale?",
   "why": "Crowd ratings were 4.04, <b>4.33</b> and 4.11, and GPT ratings 4.39, <b>4.72</b> and 4.31: the <b>Goldilocks</b> pattern replicated for both sources. The gaps are only a few tenths of a point on a 1 to 7 scale, so the effect is real but <b>modest</b>. GPT rated high collaboration lowest, not highest."
  },
  {
   "s": "def",
   "t": "aic",
   "q": "Two participants each brainstorm six ideas for Mike. Anna: lemonade stand, iced-tea stand, juice stand, cookie stand, smoothie stand, coffee stand. Ben: lemonade stand, dog walking, busking, a mini treasure hunt, reselling second-hand books, a face-painting stall. On which of Huang's measures does Ben clearly score higher?",
   "o": [
    "Knowledge diversity",
    "Problem restructuring",
    "Number of ideas",
    "Myside bias"
   ],
   "a": 0,
   "spot": "Same number of ideas, very different spread of categories → which coded dimension?",
   "why": "<b>Knowledge diversity</b> is how varied the ideas are in underlying categories, perspectives and concepts, arising from <b>divergent thinking</b> and cognitive flexibility. Anna's ideas are all drink or food stands; Ben's span services, entertainment and resale. Neither goes beyond the problem's constraints, so <b>problem restructuring</b> does not separate them, and both have six ideas."
  },
  {
   "s": "find",
   "t": "llm",
   "q": "According to Demszky et al. (2023), why might biases in LLMs become more entrenched and harder to detect over time?",
   "o": [
    "Web text is shaped by engagement-driven algorithms, and unlabelled LLM-written text will train future LLMs",
    "Developers' guardrails slowly remove the model's ability to answer questions about social groups",
    "Each time an LLM is fine-tuned, the original training data are deleted and can no longer be checked by anyone",
    "Setting the temperature above 0 makes biased words more likely to be chosen with every new answer"
   ],
   "a": 0,
   "spot": "‘More entrenched over time’ → a feedback loop in the data that trains LLMs.",
   "why": "Text on social media and news platforms is selected by algorithms that predict <b>engagement</b>, so the ‘average’ web sentence is not a random sample of language. LLMs are also used to write online text without <b>transparency</b>, and that text will train future models. Without correction, biases feed back into the next generation and become harder to see."
  },
  {
   "s": "app",
   "t": "llm",
   "q": "A researcher wants 200 short descriptions of a job interview that differ systematically in the applicant's age, accent and confidence, for a factorial experiment. She uses an LLM to write them in an hour. Which of the three application areas named by Demszky et al. (2023) is this?",
   "o": [
    "Experimentation",
    "Measurement",
    "Practice",
    "Digital ethnography"
   ],
   "a": 0,
   "spot": "LLM writes the stimuli for a study design → which application area?",
   "why": "Demszky et al. name three areas: <b>measurement</b> (gauging psychological patterns in large amounts of text), <b>experimentation</b> (rapidly generating stimuli and responses, for example to refine factorial designs) and <b>practice</b> (simulating conversations to train therapists, teachers or managers). Writing vignettes for a factorial design is experimentation. Each use still needs validation."
  },
  {
   "s": "comp",
   "t": "llm",
   "q": "Demszky et al. (2023) recommend combining expert evaluation and impact evaluation. Which description of how they fit together is correct?",
   "o": [
    "Expert evaluation first, as a check of construct validity; then impact evaluation, as a check of predictive validity, repeated in a loop",
    "Impact evaluation first, as a check of construct validity; then expert evaluation, as a check of predictive validity, done once",
    "Expert evaluation only for subtle constructs and impact evaluation only for simple ones, so they never need to be combined",
    "Expert and impact evaluation measure the same thing, so combining them mainly increases reliability"
   ],
   "a": 0,
   "spot": "Two methods with complementary weaknesses → which comes first, and what does each validate?",
   "why": "<b>Expert evaluation</b> works like a manipulation check: does the output express the construct as experts see it (<b>construct validity</b>)? <b>Impact evaluation</b> then tests the effect on third-party participants (<b>predictive or external validity</b>). The process is iterative, with each round informing the next, because each method covers the other's weakness."
  },
  {
   "s": "find",
   "t": "llmt",
   "q": "In Zhi et al. (2026), what happened to the myside bias of participants <b>without</b> chatbot access when they had 30 instead of 10 minutes?",
   "o": [
    "It increased clearly, suggesting that long independent thinking can make reasoning more one-sided",
    "It decreased clearly, suggesting that extra time lets people think of the other side by themselves",
    "It stayed the same, suggesting that myside bias is a stable trait that time does not change",
    "It dropped to the level of the Late group, suggesting that a chatbot adds nothing when time is ample"
   ],
   "a": 0,
   "spot": "No-LLM group, more time, one-sidedness → did solo thinking balance or entrench the argument?",
   "why": "Without a chatbot, myside bias rose by 1.92 points from 10 to 30 minutes (to 4.41, the highest of all groups). Working alone for longer can <b>entrench one-sided reasoning</b>. Late access also rose with time but stayed significantly lower (3.42), so a late chatbot acted as a <b>balancing check</b>."
  },
  {
   "s": "app",
   "t": "aic",
   "q": "A primary school wants to adopt the rule ‘four to six chatbot prompts per task’ for 10-year-olds writing stories, based on Huang (2025). Which caution follows from the article?",
   "o": [
    "The optimum came from adults on a 15-minute business task, and boundary conditions such as skill level are untested",
    "The rule is too strict, because Huang found that creativity keeps rising for as long as people use AI more and more",
    "The rule is fine, because Huang showed the same optimum for every age group and culture",
    "The rule should be lowered to one prompt, because Huang found low use best for beginners"
   ],
   "a": 0,
   "spot": "Applying a lab optimum to a new group and task → what did the article say it has not yet tested?",
   "why": "‘Moderate’ meant <b>four to six interactions</b> in a <b>15-minute</b> entrepreneurship task with adult, mostly <b>WEIRD</b> samples. Huang lists untested <b>boundary conditions</b>, such as skill level, that could shift or weaken the effect. So the shape may transfer, but the exact number cannot simply be copied to children's story writing."
  },
  {
   "s": "def",
   "t": "llmt",
   "q": "Zhi et al. (2026) warn that relying on an external aid to do mental work, such as remembering or processing source documents, could disrupt the brain's natural learning systems. What is this reliance called?",
   "o": [
    "Cognitive offloading",
    "Anchoring",
    "Myside bias",
    "Demand characteristics"
   ],
   "a": 0,
   "spot": "Handing mental work to a tool → the term for that, not for its side effects.",
   "why": "<b>Cognitive offloading</b> means using external aids to take over cognitive work. Because early LLM access harmed memory for the documents, the authors recommend periodic practice <b>without</b> LLM support to preserve skills. <b>Anchoring</b> is a different mechanism: staying close to the first information you received, here the chatbot's first answers."
  },
  {
   "s": "fig",
   "t": "llm",
   "q": "A researcher gives an LLM four sentences and records the anxiety score it gives each one (<b>hypothetical</b> data). What does this procedure show?<br><table class=\"qt\"><tr><th>Input sentence</th><th>Anxiety score (0 to 1)</th></tr><tr><td>I care about the exam</td><td>.62</td></tr><tr><td>I don't care about the exam</td><td>.18</td></tr><tr><td>We care about the exam</td><td>.41</td></tr><tr><td>We don't care about the exam</td><td>.12</td></tr></table>",
   "o": [
    "Through probing, that the model's output is sensitive to negation and to first person singular versus plural",
    "Through an audit, that the model is biased against people who write in the first person",
    "Through impact evaluation, that readers of these sentences become more anxious",
    "Through the model's own explanation, why it links caring to anxiety"
   ],
   "a": 0,
   "spot": "Inputs that differ in one feature at a time + outputs compared → which method, and which features?",
   "why": "This is <b>probing</b>: identify linguistic features (<b>negation</b>, <b>first person</b>), vary the input along them, and compare the output. Here adding ‘don't’ lowers the score sharply, and ‘we’ instead of ‘I’ lowers it as well. It shows which features matter, not readers' reactions (impact evaluation) and not group bias (an audit varies names or pronouns tied to social groups)."
  },
  {
   "s": "comp",
   "t": "aic",
   "q": "Huang (2025) gives different reasons why too little and too much AI collaboration hurt creativity. Which pairing is correct?",
   "o": [
    "Too little: own perspective only, and time spent generating ideas; too much: standardised AI ideas that anchor the user",
    "Too little: people anchor on their first idea; too much: people restructure the problem until it loses all of its original meaning",
    "Too little: AI ideas are standardised and similar; too much: people spend all their time generating ideas alone",
    "Too little: people do not restructure the problem; too much: people restructure it too often"
   ],
   "a": 0,
   "spot": "Two ends of the curve, two different reasons → match each end to its own mechanism.",
   "why": "With <b>minimal AI</b>, people rely on their own perspective, which limits cognitive flexibility, and generating a varied set of ideas alone takes so much time that little is left to select and refine. With <b>heavy AI</b>, the model's <b>standardised responses</b> make ideas similar and <b>anchor</b> users on expected, less distinctive ideas. Problem restructuring did not differ, so it explains neither end."
  },
  {
   "s": "find",
   "t": "llmt",
   "q": "Zhi et al. (2026) checked whether participants with chatbot access copied the chatbot's answers into their essays. What did they find?",
   "o": [
    "Direct copying was rare, but textual overlap with the chatbot's answers was common",
    "Most participants copied large parts of the chatbot's answers, which explains the lower essay scores",
    "Nobody's essay showed any overlap with the chatbot's answers, so the chatbot did not influence them",
    "Copying was common only in the Late group, which explains its low score under time pressure"
   ],
   "a": 0,
   "spot": "Copy-paste vs similarity in wording → separate the two behaviour measures.",
   "why": "Logged copy-paste events showed that <b>direct copying was rare</b> in all conditions, but <b>textual overlap</b> was common (64 to 94% of participants with access). So early users were not simply pasting answers; the chatbot's wording and arguments still shaped their essays, which fits the <b>anchoring</b> account rather than plain copying."
  },
  {
   "s": "def",
   "t": "llm",
   "q": "Which arrangement fits the principle ‘AI-in-the-loop, humans at the helm’ described by Demszky et al. (2023)?",
   "o": [
    "An LLM drafts feedback on pupils' essays, and the teacher decides per draft whether to send, edit or discard it",
    "An LLM sends feedback straight to pupils, and teachers read a monthly report of what it has sent",
    "An LLM keeps training itself on teachers' feedback, so that teachers are no longer needed at all after a few weeks",
    "Pupils choose whether they want feedback from the LLM or from the teacher for each essay"
   ],
   "a": 0,
   "spot": "‘Humans at the helm’ → who has the final say before output reaches vulnerable users?",
   "why": "In <b>AI-in-the-loop, humans at the helm</b>, the LLM does not interact directly with vulnerable groups; human experts keep control and <b>accept or reject</b> its suggestions. This limits the harm of biased or unhelpful output. A report after the fact leaves the LLM in charge, and letting pupils choose does not put an expert between the model and the pupil."
  }
 ]
});
