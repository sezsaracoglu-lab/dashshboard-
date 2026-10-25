IDQ[6] = {
  n: 6,
  title: "Judgement and decision making",
  readings: ["Matlin, Ch. 12 (Decision making)", "Sternberg et al. (heuristics and biases)", "Robinson-Riegler, Ch. 11 (Decision making)", "Eysenck & Keane (judgment and decision making)"],
  intro: "Block ABC is about judgment: how heuristics such as availability, representativeness and anchoring make our estimates of frequency and probability go wrong in predictable ways. Block DE is about decision making: prospect theory explains why the same choice gets different answers depending on the reference point, the context and the wording. The thread through both: people use shortcuts, and the shortcuts break the rules of probability and rational choice.",
  questions: [
    {
      id: "ABC1",
      block: "Block ABC · Heuristics and biases",
      title: "Why both spouses claim most chores",
      canvas: "Two spouses each estimate which proportion of the household chores they do. The sum exceeds 100%. Why?",
      asks: "Each partner says they do most of the housework, which is impossible. Explain which thinking shortcut makes each person overestimate their own share.",
      triage: { symptom: "People estimate how often or how much something happens.", diagnosis: "A frequency judgment, so the availability heuristic.", treatment: "Name availability, ask which examples come to mind more easily and why, then give the Ross and Sicoly (1979) numbers." },
      visual: { type: "bars", title: "Claimed share of the chores (Ross & Sicoly, 1979)", unit: "%", max: 160,
        groups: [ { label: "Each partner claims", bars: [ { label: "partner 1", value: 80, tone: "accent" }, { label: "partner 2", value: 80, tone: "accent" } ] },
                  { label: "Total", bars: [ { label: "claimed sum", value: 160, tone: "bad" }, { label: "real maximum", value: 100, tone: "good" } ] } ],
        note: "Each partner said they did more of about 16 of 20 chores, so 80% each." },
      answer: [
        "This is the <b>availability heuristic</b>: we estimate how often something happens by how easily examples come to mind. Ross and Sicoly (1979) asked married partners separately who did more of each of 20 chores, and each partner said they did more of about 16 of the 20. That would mean 80% each, and 80% + 80% is far more than 100%.",
        "Your own contributions are simply <b>more available</b> in memory. You were present and actively involved when you did a chore, so it was encoded more richly. You are often not there when your partner does theirs, and you think more about your own effort. So when you search memory for ‘who does the dishes?’, your own instances come back first and feel more frequent.",
        "Self-serving motives can add to this, but Sternberg et al. stress that availability also causes errors when no self-image is at stake (the -ing vs -n- words). The same pattern appeared in college basketball teams and joint lab tasks. Conclusion: each person is judging their memory, not the household."
      ],
      takeaway: "The total exceeds 100% because each partner retrieves their own chores more easily than the other's.",
      trap: { wrong: "People are just selfish and want credit.", right: "Motives can add a little, but the core mechanism is availability, which works even when nothing is at stake." },
      note: null
    },
    {
      id: "ABC2",
      block: "Block ABC · Heuristics and biases",
      title: "Why one birth order looks likelier",
      canvas: "People judge ♀♂♀♂♂♀ a more likely birth order in a family of six than ♂♀♂♂♂♂. Why?",
      asks: "Show with a quick calculation that both exact birth orders are equally likely, and explain why one still feels more likely.",
      triage: { symptom: "One specific sequence ‘looks’ more likely than another.", diagnosis: "Judgment by similarity, so the representativeness heuristic.", treatment: "Compute the real probability of each sequence, show they are equal, then name the two features that make one look representative." },
      visual: { type: "versus", title: "Two birth orders, same probability",
        cols: [ { head: "G B G B B G", sub: "feels likely", tone: "accent", points: ["3 girls, 3 boys like population", "irregular, so looks random", "probability (1/2)^6 = 1/64"] },
                { head: "B G B B B B", sub: "feels unlikely", tone: "neutral", points: ["5 boys, unlike population", "run of four looks non-random", "probability (1/2)^6 = 1/64"] } ],
        verdict: "Looking random is not the same as being more probable." },
      answer: [
        "Both orders are <b>equally likely</b>. Each birth is independent with a 1/2 chance of a girl or a boy, so any exact sequence of six has probability (1/2)⁶ = <b>1/64</b>. In Kahneman and Tversky's (1972) study, people told that 72 families had G B G B B G estimated fewer than 72 for B G B B B B, although the best estimate is also 72.",
        "People use the <b>representativeness heuristic</b>: they judge probability by (1) how similar an outcome is to its population and (2) how well it reflects the process that produced it (Sternberg et al.). G B G B B G has three girls and three boys, matching the roughly 50:50 population, and it alternates irregularly, so it looks random. B G B B B B has five boys and a run of four, so it looks neither representative nor random.",
        "The error is confusing a <b>class of outcomes</b> (‘three girls and three boys’, which really is more common) with one <b>specific sequence</b>. It also reflects the belief that small samples resemble the population (Tversky & Kahneman, 1971) and our underestimation of runs in random data."
      ],
      takeaway: "Every exact sequence of six births is 1/64; only the category ‘3 and 3’ is more common.",
      trap: { wrong: "Three girls and three boys is more likely, so that order is more likely.", right: "That is true for the class of outcomes, but each specific order within any class is exactly 1/64." },
      note: null
    },
    {
      id: "ABC3",
      block: "Block ABC · Heuristics and biases",
      title: "Confirmation bias via two heuristics",
      canvas: "Confirmation bias can be explained in terms of both the availability heuristic and the anchoring-and-adjustment heuristic. How?",
      asks: "Define confirmation bias, then show two separate routes to it: one through what comes to mind (availability) and one through how little we move from our starting belief (anchoring).",
      triage: { symptom: "‘Explain bias X with heuristic Y and heuristic Z.’", diagnosis: "A linking question: bias plus two mechanisms.", treatment: "Define the bias, then walk through each heuristic's mechanism step by step and link it back to the bias." },
      visual: { type: "versus", title: "Two routes to confirmation bias",
        cols: [ { head: "Availability", sub: "what comes to mind", tone: "accent", points: ["confirming cases noticed and rehearsed", "belief is the memory cue", "counterexamples not sought (illusory correlation)"] },
                { head: "Anchoring", sub: "how far we move", tone: "neutral", points: ["prior belief is the anchor", "adjustment from anchor too small", "anchor narrows the memory search"] } ],
        verdict: "Availability decides what evidence you see; anchoring decides how much it moves you." },
      answer: [
        "<b>Confirmation bias</b> is the tendency to search for, interpret, favour and recall information that confirms what we already believe. Both heuristics push us in that direction, but in different ways.",
        "Via <b>availability</b>: we judge how often something is true by how easily examples come to mind. Confirming cases fitted our expectation, so we noticed, encoded and rehearsed them, and when we search memory our belief is the cue, so they come back first. Disconfirming cases were often missed or dismissed. Matlin shows this in <b>illusory correlations</b>: people attend to the one cell that confirms the stereotype and ignore the other three, and resist searching for counterexamples.",
        "Via <b>anchoring and adjustment</b>: our prior belief acts as the anchor. New evidence should move us, but adjustments from an anchor are typically insufficient, so contradicting evidence shifts the belief only slightly. The anchor also restricts the memory search to information close to it. Matlin groups confirmation bias with anchoring as examples of endorsing current hypotheses instead of questioning them (top-down processing)."
      ],
      takeaway: "Your belief is both the search cue (availability) and the starting point you barely leave (anchoring).",
      trap: { wrong: "Explaining only availability, or only defining both heuristics.", right: "You must link each heuristic's mechanism to the bias; one route alone loses half the marks." },
      note: null
    },
    {
      id: "ABC4",
      block: "Block ABC · Heuristics and biases",
      title: "Why everyone thinks they'd see the gorilla",
      canvas: "Nearly 90% of people believe they would spot the gorilla in the inattentional-blindness video. Explain this using this problem’s literature.",
      asks: "Most people are sure they would notice the gorilla, but many viewers actually miss it. Explain this gap between belief and reality with the biases from this theme.",
      triage: { symptom: "People are too sure about their own ability.", diagnosis: "Overconfidence, fed by availability and hindsight.", treatment: "Name overconfidence, give its causes from the readings, explain the availability mechanism, and contrast belief with actual performance." },
      visual: { type: "map", title: "Why people expect to notice", center: "Overconfidence: belief higher than performance",
        branches: [ { h: "Availability", t: "misses are never stored in memory" }, { h: "No counterexamples", t: "people don't search for misses" }, { h: "Hindsight", t: "knowing the gorilla is there makes it obvious" }, { h: "Vivid description", t: "the question makes the gorilla salient" } ] },
      answer: [
        "In the studies about half of viewers miss the gorilla (Problem 1), yet nearly 90% think they would see it. This is <b>overconfidence</b>: confidence higher than performance justifies (Matlin). People overestimate their skills and judgment in many areas, for example being 100% confident but only 80% right (Fischhoff et al., 1977).",
        "The main mechanism is <b>availability</b>. To judge ‘would I notice something unusual?’, people search memory. Times they did notice unexpected things are available, but times they missed something are, by definition, not in memory, because they never noticed them. So the evidence is one-sided and missing seems rare. Matlin's other causes also fit: people don't realise their knowledge rests on shaky assumptions, they don't seek counterexamples, and they ignore alternatives.",
        "<b>Hindsight</b> adds to it. People asked the question already know there is a gorilla, so it seems impossible to miss: the known outcome becomes the anchor and the adjustment is too small. The vivid description also makes the gorilla salient in a way it is not while you are counting passes."
      ],
      takeaway: "You can't remember what you never noticed, so your memory tells you that you always notice.",
      trap: { wrong: "Just saying ‘people are overconfident’.", right: "You need the mechanism: availability (misses leave no memory trace) plus hindsight from already knowing about the gorilla." },
      note: "The ‘about half miss it’ figure comes from Problem 1 (attention theme); the source asks you to check the exact figures in your notes."
    },
    {
      id: "ABC5",
      block: "Block ABC · Heuristics and biases",
      title: "The skeptic and the lucky candle",
      canvas: "People burn a candle for a positive outcome and justify it by recalling times it worked. How would a skeptic counter this using the research on heuristics?",
      asks: "Someone believes candles work because they remember the times it worked. Explain what is wrong with that evidence and what a skeptic would ask for instead.",
      triage: { symptom: "‘I remember times X went together with Y.’", diagnosis: "Illusory correlation through availability, plus confirmation bias.", treatment: "Draw the 2 × 2 table, show the believer only uses one cell, and explain why the other cells are missing." },
      visual: { type: "grid", title: "The candle 2 × 2 table",
        cols: ["Good outcome", "No good outcome"],
        rows: [ { head: "Candle lit", cells: ["remembered", "forgotten"] }, { head: "No candle", cells: ["never linked", "never linked"] } ] },
      answer: [
        "The skeptic would point to an <b>illusory correlation</b>: a perceived link between two variables (candles and good outcomes) without statistical evidence. To know whether candles work you need all four cells of a <b>2 × 2 table</b>: candle + good outcome, candle + no good outcome, no candle + good outcome, no candle + no good outcome. The believer only cites the first cell.",
        "Why only that cell? The <b>availability heuristic</b>: hits are memorable and get retold, so they come to mind easily, while misses are forgotten or explained away (‘I didn't pray hard enough’), and good outcomes without a candle are never connected to candles at all. It is also <b>confirmation bias</b>: people look for confirming evidence and don't try to disconfirm the belief (Matlin). Hindsight can add to it, because after a good outcome it feels as if it was bound to happen.",
        "The skeptic's counter: ‘How often did you light a candle and nothing happened, and how often did good things happen without one?’ If good outcomes are just as common without the candle, there is no relationship. As in Matlin's welfare example, the number of hits means nothing without the other cells."
      ],
      takeaway: "A correlation needs a comparison: what happens without the candle?",
      trap: { wrong: "Answering only ‘it's coincidence’.", right: "Name illusory correlation, draw the four cells, and explain availability as the reason only one cell is remembered." },
      note: null
    },
    {
      id: "ABC6",
      block: "Block ABC · Heuristics and biases",
      title: "Single vs double conjunction fallacy",
      canvas: "What is the difference between the conjunction fallacy and the double conjunction fallacy?",
      asks: "Explain the probability rule for ‘A and B’, then show that the single fallacy breaks it once and the double fallacy breaks it twice, with an example of each.",
      triage: { symptom: "The question compares ‘A and B’ with ‘A’ alone.", diagnosis: "The conjunction rule of probability.", treatment: "Write P(A&B) ≤ P(A) and P(A&B) ≤ P(B), count how many are violated, give a classic study for each, then the explanation." },
      visual: { type: "grid", title: "Which part of the rule is respected?",
        cols: ["P(A&B) ≤ P(A)", "P(A&B) ≤ P(B)"],
        rows: [ { head: "Correct reasoning", cells: ["yes", "yes"] }, { head: "Conjunction fallacy", cells: ["no", "yes"] }, { head: "Double conjunction fallacy", cells: ["no", "no"] } ] },
      answer: [
        "The <b>conjunction rule</b> says two events together can never be more probable than either one alone: P(A & B) ≤ P(A) and P(A & B) ≤ P(B). The two fallacies differ in how many of these inequalities people break.",
        "The <b>conjunction fallacy</b> is judging the conjunction more probable than one of its parts. Linda is judged more likely to be a ‘feminist bank teller’ than a ‘bank teller’ (Tversky & Kahneman, 1983), although every feminist bank teller is a bank teller. Similarly, ‘over 55 and had a heart attack’ (30%) was rated above ‘had a heart attack’ (18%).",
        "The <b>double conjunction fallacy</b> is stronger: the conjunction is judged more probable than <b>each</b> part separately. Crupi et al. (2018) found that 49% of medical experts judged a man with chronic anaemia more likely to have alcoholism and thalassemia trait than to have alcoholism, or to have thalassemia trait.",
        "The standard explanation is representativeness: the added detail makes the description more typical. Tentori et al. (2013) argue instead that people pick the hypothesis best supported by the evidence, and the double fallacy fits this, because the clinical evidence strongly supported the combined diagnosis."
      ],
      takeaway: "The single fallacy breaks the conjunction rule once; the double fallacy breaks it twice.",
      trap: { wrong: "The double fallacy means making two conjunction fallacies in a row.", right: "It is one judgment where the conjunction beats both of its own constituents." },
      note: null
    },
    {
      id: "ABC7",
      block: "Block ABC · Heuristics and biases",
      title: "Probability matching loses points",
      canvas: "In Tversky and Edwards’ experiment, red lit on 70% of trials and green on 30%. Participants said ‘red’ on 70% and ‘green’ on 30% of trials. Why is this suboptimal, and how is it representativeness?",
      asks: "Calculate how often people are right when they copy the 70/30 pattern versus always saying red, and explain why people still copy the pattern.",
      triage: { symptom: "‘Which strategy gives the most hits?’", diagnosis: "Compare the expected accuracy of probability matching vs maximising.", treatment: "Compute P(hit) for each strategy, compare, then explain matching with representativeness." },
      visual: { type: "bars", title: "Expected hits per 100 trials", unit: "", max: 100,
        groups: [ { label: "Strategy", bars: [ { label: "matching 70/30", value: 58, tone: "bad" }, { label: "always red", value: 70, tone: "good" } ] } ],
        note: "Matching: .70 × .70 + .30 × .30 = .58. Maximising: 1 × .70 = .70." },
      answer: [
        "With <b>probability matching</b> (say red 70%, green 30%, independent of the random lights): P(hit) = .70 × .70 + .30 × .30 = .49 + .09 = <b>.58</b>. With <b>maximising</b> (always say red): P(hit) = 1 × .70 = <b>.70</b>. Always predicting the more frequent colour gives 12 more hits per 100 trials.",
        "The reason is simple: any green guess has only a .30 chance of being right, worse than a red guess at .70. So every switch to green lowers the expected score.",
        "People match because of the <b>representativeness heuristic</b>: they want their predictions to resemble the outcomes, a mix of about 70% red and 30% green that looks random and representative of the process. Always saying red looks unrepresentative (‘green will surely come up’), much like the <b>gambler's fallacy</b>, where green feels ‘due’ after several reds. But the outcomes are independent, so the best strategy is to ignore patterns and always pick the most likely option."
      ],
      takeaway: "When outcomes are random, copying the pattern is worse than betting on the favourite every time.",
      trap: { wrong: "People are right because their proportions match the lights.", right: "Matching proportions gives .58 hits; always choosing red gives .70." },
      note: null
    },
    {
      id: "ABC8",
      block: "Block ABC · Heuristics and biases",
      title: "The ‘man-who’ argument",
      canvas: "Explain how ‘man-who’ arguments (‘I know a man who smoked his whole life and lived to 106’) are the representativeness heuristic gone wrong.",
      asks: "Explain why one personal story is treated as stronger evidence than statistics, and which heuristic causes this.",
      triage: { symptom: "One vivid case is set against statistics.", diagnosis: "Small-sample representativeness (the ‘man-who’ argument).", treatment: "Name representativeness, point out the ignored sample size and base rates, and explain probability vs certainty." },
      visual: { type: "versus", title: "Anecdote vs statistics",
        cols: [ { head: "‘I know a man who…’", sub: "sample of one", tone: "bad", points: ["treated as representing all smokers", "vivid, so feels important", "ignores sample size and base rates"] },
                { head: "Statistics", sub: "thousands of cases", tone: "good", points: ["most smokers have shorter lives", "a claim about probabilities", "exceptions expected by chance"] } ],
        verdict: "One exception does not refute a probability." },
      answer: [
        "A <b>‘man-who’ argument</b> tries to refute statistics with a personal anecdote: ‘I know a man who…’ (Nisbett & Ross, 1980; Sternberg et al.).",
        "It is the <b>representativeness heuristic</b> gone wrong because people mistakenly believe that small samples resemble the population they come from (Tversky & Kahneman, 1971). A sample of one is treated as if it represents everyone who smokes. People ignore <b>sample size</b> (one case vs thousands in the statistics) and <b>base rates</b> (most smokers have shorter lives). Matlin notes that representativeness is so appealing that we ignore both.",
        "The anecdote is also vivid and available, which makes it feel important. But a probabilistic claim (‘smoking raises the risk of early death’) is about probabilities, not certainties, so it is not refuted by an exception. Some smokers will live long by chance, just as some non-smokers die young."
      ],
      takeaway: "An anecdote is a sample of one; statistics are a sample of thousands.",
      trap: { wrong: "It is only the availability heuristic.", right: "Vividness helps, but the question asks for representativeness: treating one case as representative of the population." },
      note: null
    },
    {
      id: "ABC9",
      block: "Block ABC · Heuristics and biases",
      title: "Positive test, rare disease",
      canvas: "A rare disease affects 1%. Test sensitivity 95%, specificity 90%. What is the probability that a patient who tests positive has the disease? Does it match your intuition?",
      asks: "Work out how many positive tests are true positives, and explain why your gut says the answer is much higher.",
      triage: { symptom: "A base rate, a hit rate and a false-alarm rate, asking P(disease | positive).", diagnosis: "A Bayes or base-rate problem.", treatment: "Turn the percentages into natural frequencies for 10,000 people, fill in a tree, divide true positives by all positives, then explain base-rate neglect." },
      visual: { type: "flow", title: "Natural frequencies for 10,000 people",
        steps: [ { h: "10,000 people", t: "1% base rate" }, { h: "100 sick", t: "95 test positive" }, { h: "9,900 healthy", t: "10% = 990 test positive" }, { h: "All positives", t: "95 + 990 = 1,085" }, { h: "Answer", t: "95 / 1,085 ≈ 9%" } ],
        verdict: "With a rare disease, most positives are false positives." },
      answer: [
        "Imagine <b>10,000 people</b> (natural frequencies; Gigerenzer & Hoffrage, 1995). With a 1% base rate, 100 have the disease and 9,900 do not. Sensitivity 95% means 95 of the 100 sick people test positive. Specificity 90% means 90% of the 9,900 healthy people test negative, so 10%, or 990, test positive.",
        "All positives = 95 + 990 = 1,085. So P(disease | positive) = 95 / 1,085 ≈ .088, about <b>9%</b>. With Bayes' theorem: (.01 × .95) / [(.01 × .95) + (.99 × .10)] = .0095 / .1085 ≈ .088.",
        "This does not match intuition: most people guess around 90 to 95%. That is <b>base-rate neglect</b>: we focus on the test's accuracy and ignore that the disease is rare, so the many healthy people produce far more false positives (990) than the few sick people produce true positives (95). The same happens in the mammogram problem (Krynski & Tenenbaum, 2007). <b>Natural frequencies</b> make the answer much easier to see (16% vs 46% correct; Gigerenzer & Hoffrage, 1995)."
      ],
      takeaway: "Only about 9% of positives are sick, because 990 false positives swamp 95 true ones.",
      trap: { wrong: "The answer is 95%, the sensitivity of the test.", right: "Sensitivity is P(positive | disease); the question asks P(disease | positive), which needs the base rate." },
      note: null
    },
    {
      id: "ABC10",
      block: "Block ABC · Heuristics and biases",
      title: "HARKing as hindsight bias",
      canvas: "How can you explain HARKing (Hypothesizing After Results are Known) using this problem’s literature?",
      asks: "Researchers sometimes write their hypothesis after seeing the results and present it as if it came first. Explain with this theme's biases why this can feel honest to them.",
      triage: { symptom: "After knowing an outcome, people think they predicted it.", diagnosis: "Hindsight bias, plus confirmation bias, illusory correlation and overconfidence.", treatment: "Define hindsight bias, give its mechanism (anchoring, memory reconstruction), then map the other biases onto the researcher's behaviour." },
      visual: { type: "flow", title: "How HARKing happens",
        steps: [ { h: "Hypothesis A", t: "original expectation" }, { h: "Results come in", t: "chance pattern looks real" }, { h: "Hindsight", t: "result feels obvious, memory rewritten" }, { h: "Hypothesis B", t: "presented as if first" } ],
        verdict: "Shooting the arrow first, painting the target afterwards." },
      answer: [
        "The key concept is <b>hindsight bias</b>: once we know an outcome, we believe it was predictable and that we ‘knew it all along’ (Matlin; Sternberg et al.). People cannot predict experimental results above chance in advance, but after hearing them they find them obvious. So after seeing their data, researchers find the new hypothesis obvious and may sincerely feel they could have predicted it.",
        "The mechanism is <b>anchoring</b>: the known result acts as an anchor of 100% certainty, and people do not adjust their sense of predictability down enough (Matlin). Memory is also <b>reconstructed</b> to fit the outcome (Carli, 1999), so researchers may misremember what they originally expected.",
        "Other biases add to it. Through <b>confirmation bias</b>, researchers search data and literature for support and pick the hypothesis that fits. Through illusory correlation, a chance pattern is seen as a real relationship, and overconfidence in one's own theory adds more (Trout, 2002). Sternberg et al. note hindsight bias hinders learning, and in science HARKing turns chance findings into apparently confirmed predictions."
      ],
      takeaway: "HARKing is hindsight bias with a publication deadline.",
      trap: { wrong: "HARKing is simply dishonest.", right: "The question wants a cognitive explanation: hindsight bias makes the post-hoc hypothesis feel genuinely predicted." },
      note: null
    },
    {
      id: "DE1",
      block: "Block DE · Decision making",
      title: "Judgment vs decision making",
      canvas: "This problem is about judgment and decision making. What is the difference between the two?",
      asks: "Define judgment and decision making, show how one feeds into the other, and say how each is evaluated.",
      triage: { symptom: "‘What is the difference between X and Y?’", diagnosis: "A definition plus contrast question.", treatment: "Define both, give an example of each, show how they connect, and say how each is judged good or bad." },
      visual: { type: "flow", title: "Judgment feeds decision",
        steps: [ { h: "Judgment", t: "how likely? judged on accuracy" }, { h: "Decision", t: "choose one option; involves risk" }, { h: "Outcome", t: "good decision ≠ good outcome" } ],
        verdict: "Forecast = judgment; taking an umbrella = decision." },
      answer: [
        "<b>Judgment</b> is assessing the likelihood of events on the basis of incomplete information, such as the chance you will pass the next exam; what matters is accuracy. <b>Decision making</b> is selecting one option from several, such as which university to attend; when full information is missing, judgment is needed (Eysenck & Keane). It differs from problem solving, where you generate the solutions yourself.",
        "Judgment is usually the first step of a decision. A car buyer judges running costs, reliability and enjoyment, then chooses. In Robinson-Riegler's example, ‘What are the chances Tom will be at the party?’ is a judgment and ‘let's go’ is the decision. Deciding adds a choice between alternatives, and therefore <b>risk</b>: the choice can be wrong.",
        "They are also evaluated differently. Judgments are evaluated by <b>accuracy</b> against reality. Decisions are often judged by their consequences, but a decision can be good given the information at the time even if the outcome is poor (‘the operation was a success, unfortunately the patient died’)."
      ],
      takeaway: "Judgment asks ‘how likely?’; decision asks ‘what will I do?’",
      trap: { wrong: "A decision was bad because the outcome was bad.", right: "A decision can be good given the information at the time even when the outcome turns out poorly." },
      note: null
    },
    {
      id: "DE2",
      block: "Block DE · Decision making",
      title: "Why it's called prospect theory",
      canvas: "Explain the name ‘prospect theory’.",
      asks: "Say what a ‘prospect’ is in decision research and why a theory of choosing between them carries that name.",
      triage: { symptom: "‘Why is it called…?’", diagnosis: "Unpack the key term.", treatment: "Define a prospect, say what the theory does with prospects, and link the name to its core idea of gains and losses from a reference point." },
      visual: { type: "flow", title: "What a prospect is and what the theory does",
        steps: [ { h: "Prospect", t: "outcomes + probabilities" }, { h: "Reference point", t: "where you are now" }, { h: "Coded as change", t: "gain or loss" }, { h: "Evaluated and chosen", t: "describes real choices" } ],
        verdict: "A theory of how people view what they might gain or lose." },
      answer: [
        "In decision research a <b>prospect</b> is a risky option: a gamble with possible outcomes and their probabilities, such as ‘1/3 chance that 600 people will be saved, 2/3 chance that nobody will be saved’, or ‘80% chance to win $4’. Kahneman and Tversky (1979) developed a theory of how people evaluate such prospects and choose between them under risk, hence ‘prospect theory’.",
        "The name also fits the theory's core idea. People evaluate the prospect of a <b>change</b>, what they stand to gain or lose from where they are now (the <b>reference point</b>), rather than final states of wealth as expected utility theory assumes (Robinson-Riegler). It is a <b>descriptive</b> theory: it describes how people actually value prospects and why their choices violate expected utility."
      ],
      takeaway: "Prospect theory is a theory of how people evaluate risky options as gains or losses from where they stand.",
      trap: { wrong: "It is a normative theory about how people should choose.", right: "It is descriptive: it explains how people actually choose, including where they break expected utility." },
      note: "The readings do not explain the name; the meaning of ‘prospect’ here is the standard one from Kahneman and Tversky's 1979 paper, Prospect theory: An analysis of decision under risk."
    },
    {
      id: "DE3",
      block: "Block DE · Decision making",
      title: "The shape of the value function",
      canvas: "Prospect theory proposes a function that expresses subjective value as a function of actual value. Explain its main characteristics.",
      asks: "Describe the prospect-theory curve: where it starts, how it bends for gains and for losses, and why the loss side is steeper.",
      triage: { symptom: "A graph of subjective value against actual value.", diagnosis: "The prospect-theory value function.", treatment: "Describe the origin, the shape on the gain side, the shape on the loss side, the steepness, and the consequence for framing." },
      visual: { type: "map", title: "Main features of the value function", center: "S-shaped curve around a reference point",
        branches: [ { h: "Reference point", t: "origin = current state" }, { h: "Gains: concave", t: "each extra gain adds less" }, { h: "Losses: convex", t: "extra losses also hurt less and less" }, { h: "Loss aversion", t: "steeper on the loss side" }, { h: "Shifting reference", t: "same outcome valued differently: framing" } ] },
      answer: [
        "The origin of the graph is the <b>reference point</b>: the current state, ‘what we have right now’. Outcomes are coded as gains (right) or losses (left) relative to it, not as absolute amounts.",
        "For gains the curve is <b>concave</b>: subjective value rises, but ever more slowly (diminishing sensitivity), so going from €0 to €100 feels bigger than going from €1,000 to €1,100. For losses the curve is <b>convex</b>: negative value also grows less and less steeply as losses get bigger.",
        "The curve is steeper on the loss side, which is <b>loss aversion</b>: ‘the psychological pain associated with losing $50 is greater than the psychological pleasure of gaining $50’ (Robinson-Riegler, Figure 11.4). Because the reference point can shift, the same outcome can be valued differently depending on how it is presented, so preferences change with the frame."
      ],
      takeaway: "An S-shaped curve, kinked at the reference point and steeper on the loss side.",
      trap: { wrong: "Drawing the curve symmetric around the origin.", right: "The loss side is steeper (loss aversion), so the curve is not symmetric." },
      note: null
    },
    {
      id: "DE4",
      block: "Block DE · Decision making",
      title: "Reading risk attitudes off the curve",
      canvas: "Explain how this function shows why people are risk averse for gains and risk prone for losses.",
      asks: "Use the bend of the value curve to show why people take the sure option when gaining but gamble when losing, even when both options have the same expected value.",
      triage: { symptom: "‘Use the curve to explain risk attitudes.’", diagnosis: "Compare v(sure) with p × v(gamble) on a concave vs a convex curve.", treatment: "Pick one equal-expected-value example (the Asian disease problem), read the values off the curve on each side, then add loss aversion." },
      visual: { type: "versus", title: "Same expected value, different feeling",
        cols: [ { head: "Gain side", sub: "concave", tone: "good", points: ["v(600) less than 3 × v(200)", "sure 200 saved beats the gamble", "risk averse: 72% chose A"] },
                { head: "Loss side", sub: "convex", tone: "bad", points: ["600 deaths not three times as bad", "sure loss of 400 feels worse", "risk prone: 78% chose D"] } ],
        verdict: "Concave means play safe; convex means gamble." },
      answer: [
        "Take the Asian disease problem: the sure and risky options have the <b>same expected value</b> (200 saved = 1/3 × 600 saved). The curve's shape decides which one feels better.",
        "On the <b>gain side</b> the curve is concave, so it flattens: v(600) is less than 3 × v(200), because saving 600 does not feel three times as good as saving 200. The sure gain v(200) is therefore worth more than the gamble, 1/3 × v(600). People take the sure thing and are <b>risk averse</b> (72% chose Program A).",
        "On the <b>loss side</b> the curve is convex and also flattens: 600 deaths do not feel three times as bad as 200, so −v(600) × 2/3 is less negative than −v(400). The sure loss of 400 feels worse than a 2/3 chance of losing 600, and people gamble: <b>risk prone</b> (78% chose Program D).",
        "Loss aversion strengthens this, because people are especially motivated to avoid a sure loss. Porcelli and Delgado (2009) showed acute stress makes both tendencies stronger: risky choices were .42 for gains vs .61 for losses without stress, and .33 vs .66 under stress."
      ],
      takeaway: "The bend of the curve is the risk attitude: concave for gains means play safe, convex for losses means gamble.",
      trap: { wrong: "Only quoting 72% and 78% as the explanation.", right: "The question asks you to use the curve: compare v(sure) with p × v(gamble) on each side." },
      note: null
    },
    {
      id: "DE5",
      block: "Block DE · Decision making",
      title: "Context framing vs wording framing",
      canvas: "Use (i) background context and (ii) wording/framing to explain the difference between demonstrations 12.7 and 12.8 in Matlin.",
      asks: "Both demos give different answers to problems with identical maths. Show that 12.7 changes the situation (what was lost) and 12.8 changes only the words.",
      triage: { symptom: "Two demos with identical maths but different choices.", diagnosis: "Framing: identify which factor changes in each demo.", treatment: "For each demo say what is identical, what differs, the result, and the mechanism." },
      visual: { type: "grid", title: "Demo 12.7 vs demo 12.8",
        cols: ["Demo 12.7", "Demo 12.8"],
        rows: [ { head: "Factor", cells: ["background context", "wording"] }, { head: "Identical", cells: ["€20 lost, €20 ticket", "outcomes and probabilities"] }, { head: "Differs", cells: ["lost ticket vs lost note", "lives saved vs lives lost"] }, { head: "Result", cells: ["46% vs 88% buy", "72% sure vs 78% risky"] }, { head: "Mechanism", cells: ["mental accounting", "reference point shifts"] } ] },
      answer: [
        "Matlin's <b>framing effect</b> shows that decisions depend on (1) the <b>background context</b> of the choice and (2) the <b>wording</b> of the question. Demo 12.7 shows the first, demo 12.8 the second.",
        "In demo 12.7 you lose €20 either way and must decide whether to pay €20 for a concert ticket, so the problems are financially identical. Only the background differs: you lost the ticket or a €20 note. We keep <b>mental accounts</b> by topic, so a lost ticket is charged to the ‘concert account’ and a new one makes the concert cost €40 (only 46% would buy). The lost note comes from general cash, so it seems irrelevant (88% would buy; Kahneman & Tversky, 1984).",
        "In demo 12.8 the context (600 people, two programmes) and outcomes are identical; only the words change from lives saved to lives lost. With gain wording 72% chose the sure option A, and with loss wording 78% chose the risky option D (Tversky & Kahneman, 1981). The words move the reference point, so the same outcome is coded as a gain or a loss. In short, 12.7 changes what happened, 12.8 changes how it is said."
      ],
      takeaway: "12.7 changes the situation around the choice; 12.8 changes only the description.",
      trap: { wrong: "Treating both demos as wording effects.", right: "In 12.7 the event itself differs (ticket vs cash), which works through mental accounting, not wording." },
      note: null
    },
    {
      id: "DE6",
      block: "Block DE · Decision making",
      title: "Demo 12.8 breaks invariance",
      canvas: "Explain how demonstration 12.8 is an example of a violation of invariance (an assumption of expected utility theory).",
      asks: "Define invariance, show that the two versions of the problem describe exactly the same options, and show that people's choices still flip.",
      triage: { symptom: "‘Violation of an assumption.’", diagnosis: "State the principle, then show the data contradict it.", treatment: "Define invariance, show A ≡ C and B ≡ D, show the majority preference reverses, and link to expected utility as normative." },
      visual: { type: "versus", title: "Same options, opposite choices",
        cols: [ { head: "Gain wording", sub: "lives saved", tone: "good", points: ["A: 200 saved for sure", "B: 1/3 chance 600 saved", "72% chose sure option A"] },
                { head: "Loss wording", sub: "lives lost", tone: "bad", points: ["C: 400 die (= A)", "D: 2/3 chance 600 die (= B)", "78% chose risky option D"] } ],
        verdict: "The frame decides the choice, not the options: invariance is violated." },
      answer: [
        "<b>Invariance</b> is a normative principle of expected utility theory: choices should not depend on how the options are presented. If you prefer A to B in one description, you should prefer the same option in any equivalent description (Robinson-Riegler).",
        "In demo 12.8, out of 600 people, Program A (‘200 will be saved’) is the same outcome as Program C (‘400 will die’). Program B (‘1/3 chance 600 saved, 2/3 chance none saved’) is the same prospect as Program D (‘1/3 chance nobody dies, 2/3 chance 600 die’). All four have the same expected value of 200 survivors.",
        "If preferences were invariant, people choosing A should choose C. Instead 72% chose A over B, but 78% chose D over C: the majority <b>preference reverses</b> between two descriptions of the same choice (Tversky & Kahneman, 1981). This shows expected utility is a poor descriptive model and why <b>prospect theory</b> was proposed. Preference reversals between choosing and pricing gambles (Lichtenstein & Slovic, 1971, 1973) are another violation."
      ],
      takeaway: "Invariance says the label can't change the choice; demo 12.8 shows it does.",
      trap: { wrong: "Saying people are inconsistent without showing A = C and B = D.", right: "The violation only counts once you show the options are identical, so the flip must come from the wording." },
      note: null
    }
  ]
};
