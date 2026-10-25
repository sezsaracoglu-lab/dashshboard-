IDQ[8] = {
  n: 8,
  title: "Large language models in psychology",
  readings: ["Demszky et al. (2023), Using large language models in psychology", "Zhi, Kumar & Lee (2026), LLM access timing and time availability", "Huang (2025), AI use and creativity"],
  intro: "Block A asks how language models work (bag-of-words, neural networks, back-propagation), how they link to theories of semantic memory, and how they can carry bias. Blocks B and C turn to experiments on people using LLMs: Zhi et al. show that the timing of AI help decides whether essays and memory improve, and Huang shows that a moderate amount of AI use gives the most creative ideas.",
  questions: [
    {
      id: "A.1",
      block: "Block A · Demszky et al. (2023)",
      title: "Bag-of-words: knowing a word by its company",
      canvas: "There is an English expression that says: “You shall know a word by the company it keeps.” Use this expression to explain the bag-of-words (BoW) method.",
      asks: "What does a bag-of-words method do with a word’s “company” (the other words around it), and where does it fall short?",
      triage: { symptom: "An expression to apply to a method", diagnosis: "Explain-a-method question: how BoW uses word co-occurrence", treatment: "Say what the expression means, show how BoW counts words per text, name its limit, contrast with LLMs." },
      visual: { type: "versus", title: "What “company” each method sees",
        cols: [
          { head: "Bag-of-words", sub: "counts words per text", tone: "neutral", points: ["only which words share a text", "order and grammar ignored", "one fixed meaning per word"] },
          { head: "LLM", sub: "reads words in context", tone: "good", points: ["exact neighbours and order", "meaning changes with company", "“sick” can mean great"] } ],
        verdict: "BoW knows only the rough company: the whole text." },
      answer: [
        "The expression means that you understand a word through the <b>other words it appears with</b>. A <b>bag-of-words</b> method throws all the words of a text into a “bag”: it counts which words occur and how often, but ignores their <b>order</b> and grammar. So the only company it sees is which words share the same text.",
        "Methods such as <b>topic modelling</b> use exactly that company: words that keep appearing in the same texts (“exam”, “grade”, “worried”) are grouped into one theme. In that sense BoW does know a word by its company, but only the rough company of the whole text, not the words right next to it.",
        "The limit is that each word gets <b>one fixed meaning</b>, whatever its company in a particular sentence. “That exam was sick” is counted as negative, and LIWC simply counts dictionary words. <b>LLMs</b> take the expression much further: they read each word in its exact context and order, so the same word gets a different meaning in different company."
      ],
      takeaway: "BoW sees which words share a text; LLMs see which words sit next to each other, in order.",
      trap: { wrong: "BoW understands word meaning in each sentence.", right: "It ignores order and gives every word one fixed meaning, so sarcasm or slang is missed." },
      note: null
    },
    {
      id: "A.2",
      block: "Block A · Demszky et al. (2023)",
      title: "How a perceptron learns by back-propagation",
      canvas: "The picture below shows a simple neural network, called a perceptron, comprised of an input layer, several hidden layers, and an output layer. Use the picture to explain how this model can learn to classify pictures as animate or inanimate using back-propagation.",
      asks: "Walk through the network from left to right (a guess), then right to left (learning from the error), and say that this repeats over many labelled pictures.",
      triage: { symptom: "“Use the picture to explain how this model can learn”", diagnosis: "Mechanism question: forward pass, error, backward weight update", treatment: "Describe each layer, explain the guess, explain sending the error back to adjust weights, then say it repeats over many examples." },
      visual: { type: "flow", title: "One learning cycle",
        steps: [ { h: "Input layer", t: "one pixel per unit" }, { h: "Hidden layers", t: "weights build features" }, { h: "Output guess", t: "animate or inanimate" }, { h: "Compare with label", t: "compute the error" }, { h: "Back-propagate", t: "nudge every weight" } ],
        verdict: "Repeat over thousands of labelled pictures." },
      answer: [
        "The network learns by making a guess, checking it against the right answer, and slightly correcting itself, thousands of times. Each <b>input unit</b> receives one small piece of the picture, such as the brightness of one pixel. In the <b>hidden layers</b>, every connection has a <b>weight</b>, a number saying how strongly one unit passes its signal on, and the units combine inputs into ever more useful features (edges, shapes, “has eyes and legs”).",
        "The <b>output layer</b> has two units, “animate” and “inanimate”, and the stronger one is the network’s guess. In <b>back-propagation</b>, the guess is compared with the correct label (the picture really shows a dog, so animate). The <b>error</b> is sent backwards from the output to the input, and every weight is nudged a little in the direction that would have made the error smaller.",
        "Repeated over thousands of labelled pictures, the weights slowly settle so the network classifies <b>new</b> pictures correctly. Nobody programs the rules; the network learns them from examples. An LLM is fitted the same way, only much bigger: the input is a sentence, the output is the hidden (masked) word, and back-propagation adjusts millions of weights."
      ],
      takeaway: "Guess forward, send the error backward, nudge the weights, repeat.",
      trap: { wrong: "Someone programs the rules for “animate” into the network.", right: "The rules are learned from labelled examples through repeated weight adjustment." },
      note: null
    },
    {
      id: "A.3",
      block: "Block A · Demszky et al. (2023)",
      title: "BoW and LLMs as prototype vs exemplar",
      canvas: "How do the bag-of-words (BoW) method and Large Language Models (LLMs) relate to the prototype and the exemplar approach?",
      asks: "Link two ways of analysing language to two theories of how we store categories in semantic memory: one abstract summary (prototype) versus many stored examples (exemplar).",
      triage: { symptom: "“How do X and Y relate to theory A and theory B?”", diagnosis: "Mapping question: match each method to a categorisation theory", treatment: "Define both theories, map BoW to prototype, map LLMs to exemplar, add the nuance." },
      visual: { type: "grid", title: "Matching methods to category theories",
        cols: ["Bag-of-words", "LLM"],
        rows: [
          { head: "One fixed summary", cells: ["yes", "no"] },
          { head: "Sensitive to context", cells: ["no", "yes"] },
          { head: "Handles unusual uses", cells: ["no", "yes"] },
          { head: "Closest theory", cells: ["Prototype", "Exemplar (partly)"] } ] },
      answer: [
        "BoW behaves like the <b>prototype</b> view and LLMs behave more like the <b>exemplar</b> view. In the prototype approach, a category is stored as one abstract summary, the “average” or best example. In the exemplar approach, a category is the collection of all the specific examples you have met, and a new item is compared with many of them.",
        "BoW is prototype-like because a word or category (a LIWC dictionary, a topic) is one <b>fixed summary</b>, the same in every context. Like a prototype, it captures the typical case but loses the details of each specific use. LLMs learn from <b>billions of specific sentences</b> and stay sensitive to context, so they handle unusual uses (sarcasm, “sick” meaning great), just as the exemplar view handles atypical members better.",
        "There is a nuance: an LLM does not literally store every sentence. It compresses them into its weights, so it sits somewhere between the two views."
      ],
      takeaway: "BoW is one fixed summary (prototype); an LLM draws on many specific uses (exemplar-like).",
      trap: { wrong: "An LLM stores every sentence it has read, so it is a pure exemplar model.", right: "It compresses examples into weights, so it sits between the two views." },
      note: "This links to the semantic-memory theme; the answer is reasoning, not a statement from the article."
    },
    {
      id: "A.4",
      block: "Block A · Demszky et al. (2023)",
      title: "Can stress actually help?",
      canvas: "The article by Demszky et al. (2023) discusses an example of an LLM that seems to have acquired a stress-is-debilitating mindset. Do you remember seeing evidence to the contrary in the lecture on emotion and cognition?",
      asks: "Give evidence that stress or arousal can help thinking and performance, against the LLM’s “stress is always bad” advice.",
      triage: { symptom: "“Evidence to the contrary” from another lecture", diagnosis: "Counter-evidence question: stress-is-enhancing findings", treatment: "State the LLM’s view, give the article’s own counter-evidence, add lecture evidence, conclude plausible is not correct." },
      visual: { type: "versus", title: "Two views of stress",
        cols: [
          { head: "LLM’s mindset", sub: "stress is debilitating", tone: "bad", points: ["always harms performance", "advice: reduce stress, self-care"] },
          { head: "The evidence", sub: "stress can enhance", tone: "good", points: ["mobilises energy, oxygenated blood", "moderate arousal helps (inverted U)", "arousal strengthens memory"] } ],
        verdict: "The LLM repeats a cultural belief, not the science." },
      answer: [
        "Yes: there is evidence that stress can also <b>help</b>, so the LLM’s view is one-sided. The LLM says stress always harms performance and health, so its advice is “reduce stress, take breaks, self-care”.",
        "The article itself mentions research on the <b>enhancing role of stress</b>: the stress response mobilises energy, for example by sending more oxygenated blood to the brain and muscles, which can help performance. Typical examples from emotion and cognition are that <b>moderate arousal</b> improves performance compared with very low or very high arousal (an inverted U), and that emotional arousal <b>strengthens memory</b> for important events.",
        "The point to make is that the LLM repeats the popular <b>cultural belief</b>, not the scientific evidence. Its answer is plausible, but not correct."
      ],
      takeaway: "LLMs reproduce popular beliefs: plausible, not necessarily correct.",
      trap: { wrong: "If an LLM says it, it reflects the research.", right: "It reflects what is common in its training text, which here is a cultural belief about stress." },
      note: "The lecture examples (inverted U, arousal and memory) are typical examples, not taken from the readings; check which evidence your emotion and cognition lecture actually showed."
    },
    {
      id: "A.5",
      block: "Block A · Demszky et al. (2023)",
      title: "Probing an LLM is like an experiment",
      canvas: "The practice of probing to investigate the linguistic features that influence an LLM’s outputs shares many commonalities with the procedures of experimental psychology. Explain.",
      asks: "Map each step of probing onto the logic of an experiment: manipulate, keep everything else the same, measure, repeat, conclude about a cause.",
      triage: { symptom: "“Shares commonalities with… Explain.”", diagnosis: "Analogy question: map probing onto experimental design", treatment: "Name the IV, the control, the DV, the repetitions, and the causal conclusion, then the black-box link." },
      visual: { type: "grid", title: "Probing in experiment terms",
        cols: ["Experiment", "Probing an LLM"],
        rows: [
          { head: "Independent variable", cells: ["manipulated factor", "one linguistic feature"] },
          { head: "Control", cells: ["constant variables", "minimal sentence pairs"] },
          { head: "Dependent variable", cells: ["behaviour measured", "the model’s output"] },
          { head: "Replication", cells: ["many participants", "many pairs, repeated runs"] },
          { head: "Hidden process", cells: ["the mind", "the black box"] } ] },
      answer: [
        "Probing follows the same logic as an experiment: change one thing, keep the rest the same, and measure what happens. The researcher manipulates one linguistic feature as the <b>independent variable</b> (for example negation: “I care” vs “I don’t care”), while everything else in the sentence stays identical (<b>minimal pairs</b>), so any difference must come from that feature.",
        "The LLM’s output, such as its anxiety score, is the <b>dependent variable</b> measured in each condition. Probing uses many sentence pairs and repeated runs, because outputs are stochastic, just as an experiment uses many participants and stimuli and compares conditions statistically. If the output changes systematically, that feature <b>causes</b> part of the model’s judgement.",
        "The deeper link is that psychologists cannot look inside the mind either: they infer hidden processes from input-output experiments. Probing treats the LLM’s <b>black box</b> in the same way."
      ],
      takeaway: "Probing is an experiment on a machine: manipulate one feature, hold the rest constant, measure the output.",
      trap: null,
      note: null
    },
    {
      id: "A.6",
      block: "Block A · Demszky et al. (2023)",
      title: "How face recognition learns representational harm",
      canvas: "LLMs tend to show representational harm. Please describe how a neural network trained to recognize faces might learn to show representational harm.",
      asks: "Explain how biased training examples plus learning from error produce a model that shows some groups badly or not at all.",
      triage: { symptom: "“How might it learn to show harm?”", diagnosis: "Mechanism question: biased data plus back-propagation", treatment: "Define representational harm, show how unbalanced training data shapes the weights, give the result, add biased labels." },
      visual: { type: "flow", title: "From biased data to biased model",
        steps: [ { h: "Unbalanced pictures", t: "mostly lighter-skinned men" }, { h: "Back-propagation", t: "tunes weights to them" }, { h: "Rare groups", t: "errors barely corrected" }, { h: "Harm", t: "misclassified or not detected" } ],
        verdict: "The network reproduces the gaps in its data." },
      answer: [
        "<b>Representational harm</b> means a group is shown unfavourably, stereotyped or ignored, and a face network can learn this simply from its training data. It learns only from its <b>training pictures</b>. If most pictures show, for example, lighter-skinned men, back-propagation tunes the weights mainly to their features: errors on rare groups contribute little, so they are barely corrected.",
        "As a result, faces from <b>under-represented groups</b> are recognised worse, misclassified (wrong gender or identity) or not detected at all, so the group becomes less visible to the system. <b>Biased labels</b> make it worse: if annotators labelled some groups’ faces as “angry” more often, the network learns that stereotype and repeats it.",
        "The network has no intention. It simply reproduces the patterns, and the gaps, in its data, just as LLMs reproduce the biases in their text."
      ],
      takeaway: "Biased data in, biased model out: no intention needed.",
      trap: { wrong: "Bias means the system was designed to discriminate.", right: "It arises because learning from error mostly corrects the groups that dominate the data." },
      note: null
    },
    {
      id: "A.7",
      block: "Block A · Demszky et al. (2023)",
      title: "Fine-tuning to reduce bias",
      canvas: "How can fine-tuning be used to reduce representational harm in an AI face recognition model?",
      asks: "Describe retraining the model on new, better data and checking afterwards that it worked for every group.",
      triage: { symptom: "“How can fine-tuning be used to reduce…”", diagnosis: "Procedure question: fine-tuning as a fix", treatment: "Define fine-tuning, describe balanced data and diverse annotators, retrain, audit per group, add the caution." },
      visual: { type: "flow", title: "Fine-tuning as a fix",
        steps: [ { h: "Balanced new data", t: "under-represented groups" }, { h: "Diverse annotators", t: "avoid stereotyped labels" }, { h: "Retrain", t: "errors on these faces corrected" }, { h: "Audit per group", t: "similar accuracy for all?" } ],
        verdict: "It can also keep or amplify bias if done badly." },
      answer: [
        "<b>Fine-tuning</b> means training the already-trained model further on new, specific data, so its weights change, and it can reduce harm if that new data fills the gaps. You collect a <b>balanced, high-quality</b> set of faces from the under-represented groups, labelled by diverse, representative annotators to avoid new stereotyped labels.",
        "The model is then fine-tuned on this set, so back-propagation now corrects its errors on these faces. Afterwards you <b>evaluate per group</b>, as an audit: is accuracy similar for every group? Ideally you also check the impact on real users.",
        "Demszky et al. add a <b>caution</b>: fine-tuning can also keep or even amplify bias, depending on the data and on who fine-tunes it. It needs enough good data and computing power."
      ],
      takeaway: "Better data, retrain, then check every group separately.",
      trap: { wrong: "Fine-tuning automatically removes bias.", right: "It can keep or amplify bias depending on the data and who does it, so an audit is needed." },
      note: null
    },
    {
      id: "A.8",
      block: "Block A · Demszky et al. (2023)",
      title: "Writing prompts to test for bias",
      canvas: "Bias in LLMs can be tested through controlled experiments where the model is given prompts that reference different social groups. … Please modify the provided prompt to detect biases in A. Gender, and B. Race/Ethnicity. Original input (neutral): “Alex is applying for a software engineering job. They have five years of experience in coding and have led several successful projects. Would they be a good fit for this role?”",
      asks: "Write versions of the prompt that differ only in a gender or ethnicity cue, and say how you would compare the answers.",
      triage: { symptom: "“Modify the provided prompt to detect biases”", diagnosis: "Design question: a controlled audit experiment", treatment: "Change only the group cue, keep a neutral baseline, ask for a rating, run many times, compare, name the limits." },
      visual: { type: "grid", title: "Prompt versions: only the cue changes",
        cols: ["Name", "Pronoun / cue"],
        rows: [
          { head: "Baseline", cells: ["Alex", "they"] },
          { head: "Gender 1", cells: ["Emily", "she"] },
          { head: "Gender 2", cells: ["James", "he"] },
          { head: "Ethnicity (names)", cells: ["DeShawn Washington, Wei Zhang…", "they"] },
          { head: "Ethnicity (explicit)", cells: ["Alex", "“a Black man”"] } ] },
      answer: [
        "The rule is to change <b>only the group cue</b> and keep every other word identical. For <b>gender</b>: “Emily is applying for a software engineering job. She has five years of experience in coding and has led several successful projects. Would she be a good fit for this role?”, and the same with “James… He… he”. Keep the original “Alex… they” as the <b>neutral baseline</b>.",
        "For <b>race/ethnicity</b>, swap only names that signal ethnicity, such as “DeShawn Washington”, “Connor Miller”, “Wei Zhang”, “Mohammed Al-Sayed” or “José Hernández”, or state it explicitly (“Alex, a Black man, is applying…”). To make it measurable, ask for a rating (“Rate the fit from 1 to 10”), run each version many times because outputs are random, and compare the average scores, the tone and how often negative remarks appear.",
        "Demszky et al. point to <b>limits</b>: names also signal class or age, audits miss intersectional bias unless you combine cues (for example a Black woman), and guardrails may hide explicit bias without removing it."
      ],
      takeaway: "A bias audit is a controlled experiment: one cue changes, everything else stays the same.",
      trap: { wrong: "Change the name and also tweak the experience to make it realistic.", right: "Any second change confounds the comparison; only the group cue may differ." },
      note: null
    },
    {
      id: "B.0",
      block: "Block B · Zhi, Kumar & Lee (2026)",
      title: "Reading Figure 4: variables and effects",
      canvas: "Use the infographic with reading instructions for articles with interaction effects to remind yourself of the Zhi et al. (2026) article. Answer at least the following questions about Figure 4: What were the independent variables and their levels? On which axis were they plotted? Were they manipulated, and if so, within or between participants? What were the dependent variables, how were they measured and on which axis? Where can we see the condition means? What were the main effects in Figure 4a and 4b? What was the interaction effect in Figure 4a? Was it significant?",
      asks: "Read the graph like a detective: what was changed, what was measured, where the averages are, and what the overall and combined effects are.",
      triage: { symptom: "A list of questions about one figure", diagnosis: "Graph-reading question: factorial design, main effects, interaction", treatment: "Name IVs and levels, axes, design, DVs, where the means are, then main effects and the interaction with its statistic." },
      visual: { type: "bars", title: "Essay score, Figure 4a (Zhi et al., 2026)", unit: "", max: 7,
        groups: [
          { label: "10 min (insufficient)", bars: [ { label: "Early", value: 3.80, tone: "good" }, { label: "Continuous", value: 3.49, tone: "good" }, { label: "Late", value: 1.86, tone: "bad" } ] },
          { label: "30 min (sufficient)", bars: [ { label: "Early", value: 4.51, tone: "bad" }, { label: "Continuous", value: 4.71, tone: "bad" }, { label: "Late", value: 5.77, tone: "good" }, { label: "No LLM", value: 5.76, tone: "neutral" } ] } ],
        note: "The ranking flips between time conditions: the interaction (temporal reversal)." },
      answer: [
        "There were two <b>independent variables</b>, both manipulated <b>between participants</b> by random assignment, so each person was in one of 8 conditions. LLM access timing had 4 levels (Early, Continuous, Late, No LLM) and is on the x-axis; time availability had 2 levels (Insufficient, 10 min; Sufficient, 30 min) and is shown by colour and marker: orange circles for 10 min, green diamonds for 30 min.",
        "The <b>dependent variables</b> are on the y-axis. The essay score (4a) gave +1 for each valid argument, document reference and source evaluation, and −1 for each fabrication, writing error or repeated argument. The recall score (4b) came from summarising each document’s main idea from memory (1, 0.5 or 0 points per document, pasting disabled). The <b>markers</b> are the condition means, with standard-error bars; dashed lines show the No LLM mean.",
        "For essays, only time availability had a significant main effect (F(1, 381) = 54.78, p < .001). For recall, both access timing (F(3, 380) = 2.79, p < .05) and time availability (F(1, 380) = 9.07, p < .01) were significant, with no reported interaction. In 4a the <b>interaction</b> was significant, F(3, 381) = 6.39, p < .001: with 10 min Early (3.80) and Continuous (3.49) beat Late (1.86), but with 30 min Late (5.77) and No LLM (5.76) beat Continuous (4.71) and Early (4.51). The lines cross: the temporal reversal."
      ],
      takeaway: "Two between-subject factors; in essays, whether early AI helps depends on how much time you have.",
      trap: { wrong: "No main effect of timing means timing does not matter.", right: "Its effect reverses across time conditions, so it averages out; the interaction is the real story." },
      note: null
    },
    {
      id: "B.1",
      block: "Block B · Zhi, Kumar & Lee (2026)",
      title: "When should a student use an LLM?",
      canvas: "Based on Figure 4a (green diamonds = enough time; orange circles = not enough time): If you were advising a student, when would you tell them not to use an LLM because it will hurt their grade? When would you tell them it is beneficial to use one? Walk through your reasoning step-by-step using the evidence in the chart.",
      asks: "Use the chart to give two pieces of advice, one for when time is tight and one for when there is enough time, and show the numbers behind each.",
      triage: { symptom: "“When would you advise… Walk through your reasoning”", diagnosis: "Interaction-to-advice question: compare each condition with the No LLM baseline", treatment: "Find the baseline, compare the 10-min conditions, compare the 30-min conditions, give the advice and a caveat." },
      visual: { type: "versus", title: "Advice depends on your time",
        cols: [
          { head: "Rushed (10 min)", sub: "baseline about 2.75", tone: "accent", points: ["Early 3.80, Continuous 3.49: above", "Late 1.86: below", "use AI from the start"] },
          { head: "Enough time (30 min)", sub: "baseline 5.76", tone: "good", points: ["Late 5.77: level with No LLM", "Early 4.51, Continuous 4.71: lower", "think first, AI at the end"] } ],
        verdict: "Early AI helps only when time is short." },
      answer: [
        "The advice depends on time: when rushed, use AI <b>early</b>; when you have time, think first and use AI only <b>at the end</b>. The first step is the baseline: the dashed lines show working without an LLM, about 2.75 with 10 minutes and 5.76 with 30 minutes.",
        "With a <b>tight deadline</b>, Early (3.80) and Continuous (3.49) are above the baseline, while Late (1.86) is below it, because AI arriving at the end comes too late to use. With <b>enough time</b>, Late (5.77) is level with No LLM (5.76), while Early (4.51) and Continuous (4.71) are about a point lower, so starting with AI lowers the grade.",
        "Comparing the gain from extra time makes this clearer: Late and No LLM gain about 3 to 4 points from the extra 20 minutes, while Early and Continuous gain little. The early AI output <b>anchors</b> you, so extra time is wasted. A caveat: this was one civic writing task with crowdworkers, and the 30-minute differences were trends rather than significant pairwise differences."
      ],
      takeaway: "Rushed: AI early. Time to think: think first, AI as a final check.",
      trap: { wrong: "Using AI throughout always gives the best essay.", right: "With enough time, Continuous (4.71) scored about a point below No LLM (5.76)." },
      note: null
    },
    {
      id: "B.2",
      block: "Block B · Zhi, Kumar & Lee (2026)",
      title: "What early AI does to memory",
      canvas: "Look at the summary test results (Figure 4b), where participants recalled the main ideas of the documents. Overall impact: what can we conclude about how LLM use affects memory performance? Comparing groups: how do participants with Early/Continuous LLM access compare to those with Late/No access? Takeaway: what does this difference imply about learning with LLMs?",
      asks: "Describe what happens to memory, compare the AI-from-the-start groups with the think-first groups, and draw a lesson for learning.",
      triage: { symptom: "“Overall impact… comparing groups… takeaway”", diagnosis: "Three-part graph question on recall and cognitive offloading", treatment: "State the overall effect, compare groups at 10 and 30 minutes with numbers, conclude about learning." },
      visual: { type: "bars", title: "Recall with 30 minutes, Figure 4b (Zhi et al., 2026)", unit: "", max: 3.5,
        groups: [
          { label: "AI from the start", bars: [ { label: "Early", value: 2.23, tone: "bad" }, { label: "Continuous", value: 2.03, tone: "bad" } ] },
          { label: "Think first", bars: [ { label: "Late", value: 2.56, tone: "good" }, { label: "No LLM", value: 2.99, tone: "good" } ] } ],
        note: "With 10 minutes all groups recalled about equally poorly (around 1.8 to 2.1)." },
      answer: [
        "Having the LLM <b>from the start</b> lowered recall of the documents, and extra time only improved memory for people who worked on their own first. With 10 minutes, everyone recalled the documents about equally poorly (around 1.8 to 2.1).",
        "With 30 minutes, Early (2.23) and Continuous (2.03) stayed low, while Late (2.56) and especially <b>No LLM</b> (2.99) recalled much more. No LLM improved by 42% and Late by 32% from 10 to 30 minutes, while Early and Continuous barely improved. Continuous vs No LLM was significant; Early vs No LLM was only marginal.",
        "The takeaway is <b>cognitive offloading</b>: when the AI reads and summarises for you, you do not process the material yourself, so it does not stick. For <b>learning</b>, do your own reading and thinking first, and use the AI afterwards."
      ],
      takeaway: "If the AI does the processing, the memory does not form in you.",
      trap: { wrong: "More time always improves memory.", right: "Extra time helped Late (+32%) and No LLM (+42%), but barely helped Early and Continuous." },
      note: null
    },
    {
      id: "B.3",
      block: "Block B · Zhi, Kumar & Lee (2026)",
      title: "Best moment for AI: myside bias",
      canvas: "Good essays consider multiple perspectives and use several strong arguments. Assuming you have enough time to complete the essay, when is the best moment to start using an LLM to get this done? Explain your choice based on the data. Note: do you know what the myside bias is?",
      asks: "Use the two graphs together: you want both many arguments and balance (low myside bias), and only one condition gives both.",
      triage: { symptom: "“Best moment… multiple perspectives and several arguments”", diagnosis: "Two-outcome question: number of arguments plus myside bias", treatment: "Define myside bias, look only at the enough-time condition, find the one condition good on both outcomes, explain why." },
      visual: { type: "grid", title: "Enough time: which condition wins on both?",
        cols: ["Many arguments", "Low myside bias"],
        rows: [
          { head: "Early", cells: ["no", "yes"] },
          { head: "Continuous", cells: ["no", "yes"] },
          { head: "Late", cells: ["yes", "yes"] },
          { head: "No LLM", cells: ["yes", "no"] } ] },
      answer: [
        "The best moment is <b>late</b>, in the final third, after working on your own first. <b>Myside bias</b> means arguing mainly for one side; it is scored as the gap between pro and con arguments (|pro − con|), where 0 means perfectly balanced.",
        "With enough time, Late (5.25) and No LLM (5.12) wrote the <b>most arguments</b>. On myside bias, Late (3.42) was clearly lower than No LLM (4.41, p < .05). So Late gave many arguments and more balance. Early (3.79) and Continuous (3.34) also had fairly low myside bias, but they wrote the fewest arguments: their small gap reflects <b>little arguing</b>, not balanced reasoning.",
        "Late works because working alone first builds your own picture, and asking the AI at the end (“what are the pros and cons?”) adds the side you missed. Eight people with only con arguments added on average 2.22 pro arguments this way."
      ],
      takeaway: "Think first, then ask the AI for the other side: many arguments and balance.",
      trap: { wrong: "Early AI is best because its myside bias is low.", right: "That low gap comes from writing few arguments, not from balanced reasoning." },
      note: null
    },
    {
      id: "B.4",
      block: "Block B · Zhi, Kumar & Lee (2026)",
      title: "Should universities keep take-home essays?",
      canvas: "You are an educational policy consultant advising the university executive board on how to adapt practical assessments in response to LLMs. Should universities maintain take-home essays, or transition to alternative assessment methods? State whether take-home essays should be retained, modified, or replaced, and support your position with arguments derived from the paper.",
      asks: "Take a clear position and support it with the paper’s findings: timing, performance versus self-report, and design implications.",
      triage: { symptom: "“State whether… retained, modified, or replaced”", diagnosis: "Position question: apply the findings to policy", treatment: "Pick a position, give three arguments from the data, propose a concrete design, name the limits." },
      visual: { type: "map", title: "Modify, don’t abolish", center: "Take-home essays, redesigned",
        branches: [ { h: "Early AI hurts", t: "worse essays, fewer arguments, worse recall" }, { h: "Late AI helps", t: "less one-sided, same arguments" }, { h: "Self-report misleads", t: "felt thinking barely changed" }, { h: "Design", t: "think first, AI after, grade reasoning" } ] },
      answer: [
        "My position is to <b>modify</b> take-home essays, not abolish them. Essays still train reasoning, but the paper shows that <b>when</b> AI is used decides whether they still do. With enough time, as with take-home essays, AI from the start gave worse essays, fewer own arguments and worse recall of the sources.",
        "AI can also help: <b>late AI use</b> reduced one-sidedness without fewer arguments, so a total ban throws away a benefit. Students’ own impressions are not a good guide either: self-rated critical thinking <b>barely changed</b> while performance did, so surveys saying “AI doesn’t affect my thinking” are no basis for policy.",
        "A concrete design: a <b>think-first phase</b> without AI (an in-class outline or graded notes), AI allowed afterwards as a check for missing perspectives with the prompts handed in, grading of the reasoning and use of sources, and regular practice without AI. The limits are one civic task, crowdworkers and a single session, so the university should test its new format with performance measures."
      ],
      takeaway: "Keep the essay, control the timing: think first, AI after.",
      trap: { wrong: "If students say AI doesn’t affect their thinking, essays are safe.", right: "Self-rated critical thinking barely changed while actual performance did." },
      note: "The concrete design steps are the authors’ design suggestions applied to a university setting."
    },
    {
      id: "C.1",
      block: "Block C · Huang (2025)",
      title: "What does r = .23 really mean?",
      canvas: "The article uses both human-rated and AI-rated measures of creativity. They are shown to be positively correlated (r = .23). Inspect what a correlation of .23 looks like. What does this tell you about the extent to which the two measures relate?",
      asks: "Picture r = .23 and say what it means: is the AI rating a good stand-in for the human rating?",
      triage: { symptom: "A correlation value to interpret", diagnosis: "Effect-size question: strength and shared variance of r", treatment: "Classify the strength, square r, separate significance from size, conclude what the two measures capture." },
      visual: { type: "bars", title: "Shared variance between human and AI ratings", unit: "%", max: 100,
        groups: [ { label: "r = .23 (Study 1)", bars: [ { label: "shared", value: 5, tone: "accent" }, { label: "not shared", value: 95, tone: "neutral" } ] } ],
        note: "r² = .23² ≈ .05. In Study 2, AI and crowd ratings correlated r = .31." },
      answer: [
        "An r of .23 is a <b>weak positive correlation</b>: the cloud of points tilts only slightly upwards, so ideas the judges liked were only a little more likely to be liked by the AI too. The <b>shared variance</b> is r² = .23² ≈ .05, so the two ratings share only about 5% of their variation and about 95% is different.",
        "It is <b>statistically significant</b> (p = .006), so the link is probably real, but weak: knowing one rating tells you little about the other. The two measures capture partly different things. Huang suggests LLM raters weigh <b>novelty</b> more than usefulness, whereas humans balance both. In Study 2, AI and crowd ratings correlated a bit higher, r = .31.",
        "So an AI rating is <b>not a substitute</b> for human judgement. That is why it helps that the Goldilocks pattern appeared on several different measures, and why Demszky et al. insist LLM raters must be evaluated against human experts."
      ],
      takeaway: "Significant does not mean strong: r = .23 shares only about 5% of the variance.",
      trap: { wrong: "p = .006, so the AI rating measures the same thing as human judges.", right: "Significance shows the link is real, not that it is strong; 95% of the variation differs." },
      note: "The Canvas picture of r = .23 next to r = .80 used simulated data."
    },
    {
      id: "C.2",
      block: "Block C · Huang (2025)",
      title: "Demand effects and the field study",
      canvas: "One of the reasons why Experiment 3 is conducted is to address potential demand effects in Experiments 1 and 2. Do you think this was a valid concern? How was it addressed in Experiment 3?",
      asks: "Explain what a demand effect is and whether it could plausibly have happened here, then explain how the field study gets around it and what new weakness it brings.",
      triage: { symptom: "“Was this a valid concern? How was it addressed?”", diagnosis: "Validity question: demand effects and design trade-offs", treatment: "Define demand effect, weigh the concern (yes, but limited), describe Study 3’s design, name its new weakness." },
      visual: { type: "versus", title: "Experiments vs field study",
        cols: [
          { head: "Studies 1 and 2", sub: "experiments", tone: "neutral", points: ["told how often to use ChatGPT", "may reveal the hypothesis", "but judges were blind"] },
          { head: "Study 3", sub: "field study, 188 professionals", tone: "accent", points: ["chose own AI use", "supervisors rated a week later", "preregistered, same inverted U", "but correlational, self-reported"] } ],
        verdict: "Demand removed, but causality weaker." },
      answer: [
        "A <b>demand effect</b> means participants behave the way they think the researcher wants. The concern was <b>partly valid</b>: people were told to use ChatGPT once, 4 to 6 times or 9+ times, and such an instruction can reveal the hypothesis or change motivation (the 9+ group may feel the task is not really theirs, or rush).",
        "But the concern is limited, because the creativity of the final ideas was rated by <b>blind judges</b> (and crowds and AI) who did not know the condition. A demand effect would have to change the actual ideas, not just the ratings.",
        "Study 3 was a <b>field study</b> of 188 creative professionals who chose their own amount of AI use at work, so nobody was told what to do. Their supervisors rated their creativity about a week later (two sources, two moments, which also reduces common-method bias), the study was preregistered, and the same inverted U appeared. The new weakness is that Study 3 is <b>correlational</b>: AI use was self-reported, the curve only appeared with control variables, and few people used AI very heavily."
      ],
      takeaway: "The field study removes the instruction, but trades causal control for realism.",
      trap: { wrong: "Study 3 proves that moderate AI use causes creativity.", right: "It is correlational with self-reported AI use; only the experiments allow causal claims." },
      note: null
    },
    {
      id: "C.3",
      block: "Block C · Huang (2025)",
      title: "How big are the differences really?",
      canvas: "Inspect the tables and figures in the article for the condition differences in the dependent variables. What do you conclude about the practical implications of this work?",
      asks: "Look at how big the differences are, not only whether they are significant, and translate that into practical advice.",
      triage: { symptom: "“Inspect the tables… practical implications”", diagnosis: "Effect-size question: practical vs statistical significance", treatment: "Read the means and effect sizes, check variance explained and axes, note consistency, give modest advice." },
      visual: { type: "bars", title: "Creativity, Study 1 (Huang, 2025, Table 1)", unit: "", max: 7,
        groups: [ { label: "Study 1 (scale 1–7)", bars: [ { label: "Moderate", value: 4.02, tone: "good" }, { label: "other condition", value: 3.49, tone: "neutral" }, { label: "other condition", value: 3.39, tone: "neutral" } ] },
                  { label: "Study 2", bars: [ { label: "Moderate", value: 4.33, tone: "good" }, { label: "other condition", value: 4.04, tone: "neutral" }, { label: "other condition", value: 4.11, tone: "neutral" } ] } ],
        note: "Drawn from 0: the gaps are about half a point (Study 1) and 0.2 to 0.3 points (Study 2)." },
      answer: [
        "The gain from moderate AI use is <b>modest but reliable</b>. In Study 1, creativity was 4.02 for the moderate group vs 3.49 and 3.39 on a 1 to 7 scale, about half a point (d ≈ .4 to .5); business value was 5.67 vs 4.60 and 4.69 on a 1 to 10 scale, about one point. In Study 2 it was 4.33 vs 4.04 and 4.11, only about 0.2 to 0.3 points (d ≈ .3 to .4).",
        "The <b>variance explained</b> is η² ≈ .05 to .06, so the amount of AI use explains only about 5 to 6% of the differences in creativity; most comes from the person and the idea. <b>Watch the axes</b>: graphs that start at 3.5 instead of 1 make the bars look more different than they are. Still, the moderate group came out best across studies and on most measures, and in the field study.",
        "Organisations should encourage <b>balanced, mindful</b> AI use rather than maximising it, and expect moderate improvement, not a revolution. Note that “moderate” here means about 4 to 6 interactions in a 15-minute task, which does not translate directly into a rule for every job."
      ],
      takeaway: "Consistent but small: about 5–6% of creativity differences come from the amount of AI use.",
      trap: { wrong: "The bars look very different, so the effect is huge.", right: "The y-axes start at 3.5; on the full scale the gaps are half a point or less." },
      note: "The source does not label which non-moderate condition (low or high AI use) each of the other two means belongs to."
    },
    {
      id: "C.4",
      block: "Block C · Huang (2025)",
      title: "When the common answer is the goal",
      canvas: "The article is specifically concerned with creativity and original solutions. Imagine your task is not to come up with an original solution, but a very common or recognizable solution. How much AI-interaction would then be warranted?",
      asks: "Turn the mechanism around: what hurts originality (standard, typical AI answers) is exactly what you want when you need the common answer.",
      triage: { symptom: "“Imagine your task is not… but…”", diagnosis: "Transfer question: reverse the mechanism behind the inverted U", treatment: "Recall why heavy AI use hurt creativity, flip it for a common-answer task, say what the curve becomes, add a human check." },
      visual: { type: "versus", title: "Same AI, different goal",
        cols: [
          { head: "Original solution", sub: "Huang’s task", tone: "neutral", points: ["typical AI ideas anchor you", "ideas become alike", "inverted U: moderate best"] },
          { head: "Common solution", sub: "imagined task", tone: "good", points: ["typical answer is the goal", "more AI: more and faster", "still verify correctness"] } ],
        verdict: "More AI interaction is warranted." },
      answer: [
        "For a common, recognisable solution, <b>more AI interaction</b> is warranted, possibly a lot. Heavy AI use hurt creativity because the AI gives <b>standardised, typical</b> ideas and people anchor on them, so ideas become alike.",
        "If you want the common answer, that is no longer a problem but the goal: an LLM is built to produce the <b>most plausible, typical</b> answer (Block A). The pattern then looks more like <b>productivity</b>, where more AI help means more and faster output (“more is better”), rather than an inverted U.",
        "You should still keep a <b>human check</b>, because typical is not always correct (plausible, not correct), so verify the result."
      ],
      takeaway: "What makes AI bad for originality makes it good for the typical answer.",
      trap: { wrong: "The inverted U applies to every task.", right: "It comes from AI’s typical answers hurting originality; for a typical-answer task that cost disappears." },
      note: "This is reasoning beyond the paper: Huang did not test this kind of task."
    }
  ]
};
