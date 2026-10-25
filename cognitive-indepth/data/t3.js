IDQ[3] = {
  n: 3,
  title: "Autobiographical memory and amnesia",
  readings: [
    "Robinson-Riegler, Autobiographical memory",
    "Eysenck & Keane, the self-memory system",
    "Baddeley et al., Amnesia",
    "Soares & Storm (2018), Forget in a flash"
  ],
  intro: "This theme is about long-term memory for our own lives and what happens when it breaks. Block A asks how autobiographical memory is retrieved, shaped over the life span and steered by the self; Block B uses amnesia to show which parts of long-term memory can fail separately; Block C reviews one experiment on how taking photos affects memory.",
  questions: [

    {
      id: "A1",
      block: "Block A · Autobiographical memory",
      title: "Cue words: searching or popping up?",
      canvas: "Does the Galton-Crovitz cue-word technique involve direct and/or generative retrieval?",
      asks: "Describe the cue-word technique, explain the two ways a memory can be retrieved in the self-memory system, and decide which way(s) a cue word triggers, with evidence.",
      triage: {
        symptom: "A named method plus 'which retrieval route?'",
        diagnosis: "Self-memory system: generative versus direct retrieval.",
        treatment: "Describe the method, define both routes, then argue 'both' with Uzer et al. (2012)."
      },
      visual: {
        type: "versus",
        title: "Two routes from cue word to memory",
        cols: [
          { head: "Generative", sub: "effortful search", tone: "accent", points: ["instruction to search sets it up", "cue → lifetime period → general event → detail", "dating and describing need it too"] },
          { head: "Direct", sub: "memory pops up", tone: "good", points: ["cue activates event-specific knowledge", "about 3× faster (Uzer et al., 2012)", "little thinking aloud needed"] }
        ],
        verdict: "The task is generative, but retrieval can take either route."
      },
      answer: [
        "The answer is <b>both</b>. In the Galton-Crovitz technique (Crovitz & Schiffman, 1974) people get a word such as 'river' or 'frustrated', retrieve a personal memory linked to it, describe it briefly and date it.",
        "Conway and Pleydell-Pearce (2000) describe two routes. <b>Generative retrieval</b> is a deliberate search guided by the working self: cue, then lifetime period, then general event, then event-specific knowledge, checking each candidate against the goal. <b>Direct retrieval</b> happens when the cue activates event-specific knowledge at once, so a memory comes to mind spontaneously.",
        "Because people are told to find a memory, the task is set up as a search, so much of it is generative ('When did I feel frustrated? Maybe at university...'). This search takes noticeable time, and researchers use that reaction time as evidence that a search is going on. But a cue, especially a highly personal one, can also call up a memory straight away. <b>Uzer, Lee and Brown (2012)</b> showed this with emotion words and thinking aloud: some memories came directly, others generatively, and direct retrieval was about three times faster with much less talking.",
        "Even a memory that pops up directly needs generative elaboration to be dated and described. And because the working self steers the search, the technique samples memories relevant to current goals, not a random sample of life."
      ],
      takeaway: "A generative task does not guarantee a generative process: cue words trigger both routes.",
      trap: { wrong: "The cue-word task is a search task, so retrieval is only generative.", right: "Uzer et al. (2012) found that some memories were retrieved directly, about three times faster." },
      note: null
    },

    {
      id: "A2",
      block: "Block A · Autobiographical memory",
      title: "Why 'a standard forgetting curve'?",
      canvas: "The last part of the autobiographical retention function is referred to as ‘a standard forgetting curve’. Why do you think it is called that?",
      asks: "Say what the most recent part of the retention function shows, and explain why its shape is the same as the ordinary forgetting curve known from memory research.",
      triage: {
        symptom: "'Why is it called...?' about the name of a curve.",
        diagnosis: "The classic (Ebbinghaus) forgetting curve applied to the retention function.",
        treatment: "Say what the last segment shows, match its shape to the classic curve, then give the causes (decay, interference, no rehearsal)."
      },
      visual: {
        type: "flow",
        title: "Reading the last 20 years backwards",
        steps: [
          { h: "Present", t: "many recent memories" },
          { h: "Going back", t: "steep drop first" },
          { h: "Further back", t: "slower decline" },
          { h: "Same shape", t: "as Ebbinghaus's curve" }
        ],
        verdict: "Ordinary forgetting is the baseline; bump and childhood amnesia are the deviations."
      },
      answer: [
        "It is called a standard forgetting curve because it shows <b>ordinary forgetting</b>: the longer ago an event happened, the fewer memories of it are recalled. This is the same pattern found in laboratory research since <b>Ebbinghaus</b>.",
        "The retention function (Rubin, Wetzler & Nebes, 1986; Figure 7.1) shows how many memories older adults retrieve from each period of their life. It has three parts: childhood amnesia, the reminiscence bump (ages 10 to 30), and, for the most recent 20 years or so, the forgetting curve, visible only in older participants. If you read that last part from right to left, from the present back into the past, the number of memories first drops steeply and then more slowly: the typical forgetting-curve shape.",
        "Nothing special happens in these years. Recent events are remembered best because they are recent, and older ones are lost through <b>decay, interference</b> from newer similar events and lack of rehearsal. Wagenaar (1986) found that recall of diary events fell from about 75% to under a third over four years.",
        "That is exactly why the other two parts are interesting: childhood amnesia (too few memories) and the reminiscence bump (too many) are departures from what a standard forgetting curve predicts."
      ],
      takeaway: "The last part is 'standard' because it is the baseline: plain forgetting with time since the event.",
      trap: { wrong: "Reading the x-axis as time since the event.", right: "The x-axis is age at encoding, so read the last part backwards from the present." },
      note: null
    },

    {
      id: "A3",
      block: "Block A · Autobiographical memory",
      title: "Are boys in the repetition group?",
      canvas: "Jack et al. (2009) found that adolescents with the earliest memories had enjoyed the most elaboration (relative to repetition) from their mother 10 years earlier. Do you think boys are more prominent among the elaboration or the repetition group?",
      asks: "Make a reasoned prediction: use what the reading says about how parents talk with sons versus daughters to predict which group boys mostly fall into.",
      triage: {
        symptom: "'Do you think...?' asks for a reasoned prediction.",
        diagnosis: "Parental narrative style linked to the child's sex (Robinson-Riegler; Davis, 1999).",
        treatment: "State the chain sex → talk style → earliest memory, make the prediction, then add a caveat."
      },
      visual: {
        type: "flow",
        title: "The predicted route",
        steps: [
          { h: "Child's sex", t: "daughter or son" },
          { h: "Mother's style", t: "elaborative vs repetitive talk" },
          { h: "Elaboration ratio", t: "Jack et al. (2009)" },
          { h: "Earliest memory", t: "earlier with more elaboration" }
        ],
        verdict: "Prediction: boys more often in the repetition group."
      },
      answer: [
        "I would expect <b>boys</b> to be more prominent in the <b>repetition group</b> (low elaboration relative to repetition).",
        "Research on narrative style (Fivush, 1991; Reese & Fivush, 1993) shows that with daughters, parents tend to use an <b>elaborative style</b>: long, detailed conversations that add new information and ask open questions. With sons, they more often use a <b>repetitive</b> or pragmatic style: short, with the same simple questions repeated and little detail added. Children of elaborative parents give better accounts of past events, and Davis (1999) found female superiority in autobiographical recall. This partly explains why women, on average, report earlier and more detailed childhood memories than men.",
        "Jack et al. (2009) found that the higher the ratio of elaborations to repetitions in mothers' talk at age 2 to 4, the earlier the adolescents' first memories 10 years later. If mothers elaborate more with daughters, girls should be overrepresented in the elaboration group and boys in the repetition group.",
        "Two caveats matter. This is a prediction, because the sex split in Jack et al. is not reported. And the cause is the <b>style of talk</b>, not the child's sex: a boy whose mother elaborates a lot should also have early memories."
      ],
      takeaway: "How parents talk with a child, not the child's sex itself, shapes how early their memories reach back.",
      trap: { wrong: "Being a boy causes later first memories.", right: "Sex only predicts the parent's talk style; the style is the causal factor." },
      note: "The reader gives the same prediction, but neither the reader nor the readings report the actual sex split in Jack et al. (2009)."
    },

    {
      id: "A4",
      block: "Block A · Autobiographical memory",
      title: "Same factors at both ends of life",
      canvas: "Which of the factors invoked to explain childhood amnesia and the reminiscence bump are similar?",
      asks: "Put the explanations of childhood amnesia and the reminiscence bump side by side and show which factors appear in both, working in opposite directions.",
      triage: {
        symptom: "Two phenomena plus 'which factors are similar?'",
        diagnosis: "Explanations of childhood amnesia versus the reminiscence bump.",
        treatment: "Line up both lists, pick the shared factors (brain, self, language, culture), then show the opposite direction."
      },
      visual: {
        type: "grid",
        title: "One factor, two opposite effects",
        cols: ["Childhood amnesia", "Reminiscence bump"],
        rows: [
          { head: "Self (clearest overlap)", cells: ["no cognitive self yet", "identity being formed"] },
          { head: "Brain", cells: ["immature hippocampus/PFC", "peak functioning"] },
          { head: "Language / narrative", cells: ["language, memory talk developing", "life story, retelling"] },
          { head: "Culture", cells: ["offset differs (Wang, 2006)", "cultural life script"] }
        ]
      },
      answer: [
        "Four factors appear in both explanations, but they work in <b>opposite directions</b>: missing in infancy, so few memories; at their peak in early adulthood, so many memories. The clearest overlap is the <b>self</b>: both explanations hinge on whether a coherent self exists to anchor memories to.",
        "<b>Self.</b> Childhood amnesia ends when a cognitive self develops that organises experiences as happening to 'me' (Howe & Courage, 1997); the bump reflects identity formation, as events in these years define who we become (Erikson; Habermas & Bluck, 2000; Conway, 2005). <b>Brain.</b> In childhood amnesia the hippocampus and prefrontal cortex are still immature (Nadel & Zola-Morgan, 1984); for the bump, the peak-functioning account says the brain encodes best in adolescence and early adulthood (Janssen & Murre, 2008).",
        "<b>Language and narrative.</b> Childhood amnesia is linked to language development and memory talk with parents (Nelson, 1993; Reese & Fivush, 1993); the bump is linked to retelling events as part of the life story and to the novelty of 'firsts'. <b>Culture.</b> The offset of childhood amnesia varies with culture (Wang, 2006), and the bump reflects the life script: expected events such as graduation and marriage cluster in early adulthood.",
        "So the same ingredients explain why early life is missing and why young adulthood is over-represented."
      ],
      takeaway: "Both phenomena depend on when the tools for storing a personal past are available: missing early, at their peak in young adulthood.",
      trap: { wrong: "Listing the explanations of each phenomenon separately.", right: "The question asks you to pair them and show the same factor working in opposite directions." },
      note: null
    },

    {
      id: "A5",
      block: "Block A · Autobiographical memory",
      title: "Coherence versus correspondence",
      canvas: "How do the notions of coherence and correspondence relate to the self-memory system model?",
      asks: "Define both notions, show where each sits in the self-memory system, and explain Conway's claim about which one wins over time, with an example.",
      triage: {
        symptom: "Two concepts plus a model: 'how do they relate?'",
        diagnosis: "Conway's coherence versus correspondence within the self-memory system.",
        treatment: "Define both, place them in the model (working self versus knowledge base), then say which wins and give an example."
      },
      visual: {
        type: "versus",
        title: "Two demands on autobiographical memory",
        cols: [
          { head: "Correspondence", sub: "accuracy", tone: "neutral", points: ["memory matches what happened", "episodic, event-specific detail"] },
          { head: "Coherence", sub: "fit with the self", tone: "accent", points: ["fits goals and self-image", "working self, life story", "wins over time (Conway, 2005)"] }
        ],
        verdict: "Memory serves the self first, accuracy second."
      },
      answer: [
        "Coherence and correspondence are the two competing demands on memories in the self-memory system (Conway & Pleydell-Pearce, 2000; Conway, 2005), where the <b>working self</b> (current goals and self-images) controls encoding and retrieval from the autobiographical knowledge base.",
        "<b>Correspondence</b> means memories are accurate: they match what actually happened. It is served by episodic memories and event-specific knowledge, which hold sensory detail close to the original experience. <b>Coherence</b> means memories are consistent with our current goals, beliefs and self-image. It is served by the working self and the conceptual self (life story, themes, lifetime periods), which organise memories into a story that makes sense.",
        "According to Conway (2005), we want both, but over time <b>coherence wins</b>. The working self shapes what is encoded, which memories are accessible and how they are reconstructed, so memories drift toward what fits the current self. For example, people claim their lives are better now than in the past, but this 'improvement' often comes from remembering past selves in a negatively biased way (Newman & Lindsay, 2009).",
        "So the two notions describe the trade-off at the heart of the model: autobiographical memory is organised for the self first and for accuracy second."
      ],
      takeaway: "Your memory is an autobiography, not a CCTV recording: coherence with the self beats accuracy.",
      trap: { wrong: "Coherence means accuracy.", right: "Correspondence is accuracy; coherence is fit with the working self." },
      note: null
    },

    {
      id: "A6",
      block: "Block A · Autobiographical memory",
      title: "Woike et al. and the working self",
      canvas: "Explain how the finding by Woike et al. (1999) that agentic individuals have predominantly agentic memories and communal individuals predominantly communal memories supports the existence of the working self.",
      asks: "Describe the study and its numbers, say what the working self is supposed to do, and show that the result is exactly what the working self predicts.",
      triage: {
        symptom: "A study result plus 'how does it support X?'",
        diagnosis: "Woike et al. (1999) as evidence for the working self.",
        treatment: "Describe the study with numbers, state the working self's function, then show the match and add a critical note."
      },
      visual: {
        type: "bars",
        title: "Memories matching the person's motive (Woike et al., 1999)",
        unit: "%",
        max: 100,
        groups: [
          { label: "Positive experience", bars: [ { label: "agentic", value: 65, tone: "accent" }, { label: "communal", value: 90, tone: "good" } ] },
          { label: "Negative experience", bars: [ { label: "agentic", value: 47, tone: "accent" }, { label: "communal", value: 90, tone: "good" } ] }
        ],
        note: "Values as reported by Eysenck & Keane."
      },
      answer: [
        "The finding supports the working self because the same open instruction brought up <b>goal-congruent memories</b>, which is what a goal-based filter on retrieval predicts.",
        "Woike et al. (1999) compared <b>agentic</b> people (independence, achievement, power) with <b>communal</b> people (interdependence, closeness to others). They wrote about a positive or negative experience. For positive experiences, 65% of agentic participants recalled agentic memories (e.g., success) and 90% of communal participants recalled communal ones (e.g., friendship). For negative experiences the figures were 47% (e.g., failure) and 90% (e.g., betrayal of trust).",
        "In the self-memory system, the <b>working self</b> is a set of current goals and self-images that controls what is encoded and retrieved; memories are largely 'records of success or failure in goal attainment'. Agentic and communal people have different central goals, so the working self predicts achievement memories for one group and relationship memories for the other. That is what was found: retrieval is steered by goals, not random.",
        "The design is <b>correlational</b> (personality was measured, not manipulated), and agentic people may simply live more agentic events. Still, the strong match is what the working self predicts, and it links to coherence (A5)."
      ],
      takeaway: "Same question, different memories: what we retrieve depends on who we are and what we want.",
      trap: { wrong: "The study proves the working self causes these memories.", right: "Personality was measured, not manipulated, so it supports but does not prove it." },
      note: null
    },

    {
      id: "B1",
      block: "Block B · Amnesia",
      title: "Spotting anterograde amnesia in the clip",
      canvas: "Watch the video clip. Which symptoms qualify this man as suffering from anterograde amnesia?",
      asks: "Use the definition of anterograde amnesia as a checklist: point to what in the clip shows he cannot form new lasting memories after a brain injury, and what shows that other abilities are spared.",
      triage: {
        symptom: "A video plus 'which symptoms qualify...?'",
        diagnosis: "The definition of anterograde amnesia used as a checklist.",
        treatment: "Name the brain cause, tick what is lost (new episodes: diary, greeting his wife) and what is spared (short-term memory, music, emotion)."
      },
      visual: {
        type: "grid",
        title: "Checklist while watching",
        cols: ["Present in him?"],
        rows: [
          { head: "Forms new episodic memories", cells: ["no"] },
          { head: "Short-term memory, conversation", cells: ["yes"] },
          { head: "Playing and conducting music", cells: ["yes"] },
          { head: "Emotional bond with his wife", cells: ["yes"] }
        ]
      },
      answer: [
        "He qualifies because he <b>cannot store new information in long-term memory</b> after brain damage, often to the hippocampus (for example from herpes encephalitis), while other abilities are spared. The classic amnesic syndrome is severely impaired episodic memory with intact working memory, semantic memory, implicit memory and intelligence (Baddeley et al.).",
        "The lost side is striking in the clip. He feels as though he has <b>just regained consciousness every few seconds</b>. He keeps a diary full of crossed-out entries saying 'finally awake now', with no memory of writing the earlier ones. And he greets his wife with the same joyful surprise every time, even if she only stepped out briefly.",
        "The spared side matters just as much. His <b>short-term memory</b> lets him follow a conversation in the moment. His <b>implicit memory</b> is intact: procedural memory, because he can still play and conduct music, and emotional memory, because he clearly still loves his wife.",
        "It is this contrast, new episodes lost but skills, feelings and memory in the moment still present, that marks anterograde amnesia rather than general confusion or dementia."
      ],
      takeaway: "The 'record' button is broken, but the live microphone and his musical hands still work.",
      trap: { wrong: "Listing only 'he forgets things'.", right: "The diagnosis also needs the spared abilities (music, emotion, short-term memory) and the brain cause." },
      note: null
    },

    {
      id: "B2",
      block: "Block B · Amnesia",
      title: "Where we met dissociations before",
      canvas: "Warrington and Weiskrantz (1970) showed a dissociation between explicit and implicit memory. We encountered dissociations before in Problem 2. In which context?",
      asks: "Recall where Problem 2 (short-term and working memory) used the same logic: a factor affects one task but not another, taken as evidence for separate memory systems.",
      triage: {
        symptom: "'We met X before: where?' A link-back question.",
        diagnosis: "Dissociation logic in Problem 2 (STM versus LTM, working memory).",
        treatment: "Define a dissociation, recall HM versus KF (double dissociation), then link to Warrington and Weiskrantz."
      },
      visual: {
        type: "grid",
        title: "The double dissociation from Problem 2",
        cols: ["STM (digit span)", "New LTM"],
        rows: [
          { head: "HM", cells: ["yes", "no"] },
          { head: "KF", cells: ["no", "yes"] }
        ]
      },
      answer: [
        "In Problem 2, dissociations were used to argue that <b>short-term and long-term memory are separate stores</b>, and that working memory has separate subsystems. A dissociation means one factor affects one task but not another, so the two must rely on different systems.",
        "The strongest example is the <b>double dissociation</b> between HM and KF. HM, after medial temporal lobe removal, had a normal digit span but could not form new long-term memories. KF (Shallice & Warrington, 1970) had a very poor digit span but could still learn new long-term information. Opposite patterns in two patients are strong evidence for two systems.",
        "Two other contexts used the same logic. In the <b>serial-position curve</b>, a filled delay removes recency but leaves primacy intact, while slower presentation improves primacy but not recency (Glanzer & Cunitz, 1966). In <b>working memory</b> dual-task studies, a verbal task disrupts the phonological loop but not the visuospatial sketchpad, and a spatial task does the reverse.",
        "Warrington and Weiskrantz extend this to long-term memory: their amnesic patients had poor recall and recognition but normal fragmented-word completion (about 45% in both groups), so explicit and implicit memory can also come apart."
      ],
      takeaway: "If two abilities can break separately, they rely on different systems: the same argument in every chapter.",
      trap: { wrong: "Calling a single dissociation a double dissociation.", right: "A double dissociation needs two opposite patterns, like HM and KF." },
      note: null
    },

    {
      id: "B3",
      block: "Block B · Amnesia",
      title: "Which day? Familiarity versus context",
      canvas: "Huppert and Piercy (1978a, 1978b) found that amnesic patients were more likely to say that items presented twice on day 1 had been presented on day 2; controls showed the opposite. How do these results show that binding item to context is a focal deficit in amnesia?",
      asks: "Explain the task, the two cues people can use to answer 'which day?' (familiarity or context), and why the patients' reversed pattern means they keep the item but lose its context.",
      triage: {
        symptom: "A reversed pattern plus 'how does this show...?'",
        diagnosis: "Familiarity versus context in judging when something happened.",
        treatment: "Explain the task, name the two cues, show patients rely on familiarity, conclude the item is kept but the context is lost."
      },
      visual: {
        type: "versus",
        title: "Same repetition, opposite effect",
        cols: [
          { head: "Controls", sub: "use context", tone: "good", points: ["recognise the picture", "twice-shown = stronger day-1 link", "answer 'day 1'"] },
          { head: "Amnesic patients", sub: "use familiarity only", tone: "bad", points: ["still recognise the picture", "twice-shown feels strong, so recent", "answer 'day 2'"] }
        ],
        verdict: "Item memory present, item-context binding lost."
      },
      answer: [
        "The results show that the patients still have the <b>item</b> but cannot link it to its <b>context</b>. People saw pictures on day 1 (some twice) and day 2 (once), then judged on which day each was shown. You can answer by recollecting the context ('I saw that on the first day') or by relying on <b>familiarity</b>, a feeling of memory strength that is high for recent items but also for items seen twice.",
        "Controls could link each picture to its day, so seeing it twice gave a stronger item-context trace and more correct 'day 1' answers. Patients still recognised the pictures, but could not bind them to the day, so they fell back on familiarity. A picture seen twice on day 1 felt as strong as one seen once on day 2, and strong feels recent, so they said 'day 2'.",
        "The same manipulation helped controls and misled patients, so the problem is not weak item memory but a failure to link items to time and place. The same pattern appears in <b>source amnesia</b> (Schacter et al., 1984), in hippocampal lesions in rats (Winocur & Mills, 1970) and in Horner et al. (2012), where hippocampal volume predicted memory for context but not items. The <b>hippocampus</b> is the 'mnemonic glue'."
      ],
      takeaway: "Familiarity has no time stamp; context does, and amnesia removes the context.",
      trap: { wrong: "The patients forgot the pictures.", right: "They recognised them; they only lost which day they came from." },
      note: null
    },

    {
      id: "B4",
      block: "Block B · Amnesia",
      title: "Remembering and knowing: where before?",
      canvas: "In developmental amnesia, ‘remembering’ and ‘knowing’ are discussed. We encountered both notions in the readings for Problem 3A. In which context?",
      asks: "Show you understand the remember/know distinction and how it was used with Jon, then name where Problem 3A used the same idea: Tulving's episodic versus semantic memory, and remember/know judgements in the study of childhood amnesia.",
      triage: {
        symptom: "Two terms plus 'where in Problem 3A?'",
        diagnosis: "Remember/know = episodic versus semantic (Tulving); used for Jon (3B) and childhood amnesia (3A).",
        treatment: "Define both via Tulving, say how Jon used them, then name Multhaup et al. (2005) in 3A."
      },
      visual: {
        type: "grid",
        title: "Remember/know in two readings",
        cols: ["Remember (re-live)", "Know (familiar)"],
        rows: [
          { head: "Tulving (3A)", cells: ["episodic, autonoetic", "semantic, noetic"] },
          { head: "Jon (3B)", cells: ["lacks recollection signature", "preserved"] },
          { head: "Earliest childhood (3A)", cells: ["mostly absent", "mostly 'known'"] },
          { head: "After ~4.7 years (3A)", cells: ["rises with age", "present"] }
        ]
      },
      answer: [
        "In Problem 3A, the two notions matched <b>Tulving's distinction</b> between episodic and semantic memory, and they were used to study <b>childhood amnesia</b>. <b>Remembering</b> is episodic and autonoetic: re-experiencing an event, mentally travelling back in time. <b>Knowing</b> is semantic and noetic: knowing that something happened, without re-living it.",
        "In 3A, <b>Multhaup, Johnson and Tetrick (2005)</b> asked adults to judge early childhood memories as truly remembered or only known, for example from family stories or photos. Memories from the earliest years were mostly 'known'; the share of 'remembered' memories rose with age, with childhood amnesia waning at about 4.7 years. The same split separates an autobiographical memory (re-lived) from an autobiographical fact (known).",
        "In developmental amnesia, Jon (hippocampal damage at birth) still built up semantic knowledge, but his episodic memory was severely impaired. He used 'remember' and 'know' about as often as controls, but his 'remember' responses lacked the brain signature of recollection (Düzel et al., 2001). This fits the idea that recollection depends on the hippocampus and familiarity on the perirhinal cortex (Aggleton & Brown, 1999)."
      ],
      takeaway: "Re-living needs a system that is not yet working in early childhood and no longer fully working in Jon.",
      trap: { wrong: "Familiarity depends on the hippocampus.", right: "Recollection depends on the hippocampus; familiarity on the perirhinal cortex." },
      note: null
    },

    {
      id: "B5",
      block: "Block B · Amnesia",
      title: "How testing hides what patients recall",
      canvas: "People with memory problems undergo a variety of tests during neuropsychological screening. How might this lead to an underestimate of the recall abilities of anterograde amnesiacs?",
      asks: "Explain why a long row of tests creates interference, and why amnesic patients cannot protect themselves against it: they cannot bind each test to its own context, and their new memories are most fragile early in consolidation.",
      triage: {
        symptom: "A practical setting plus 'how could this underestimate...?'",
        diagnosis: "Interference: proactive build-up without context binding (B3) plus disrupted early consolidation (Dewar et al.).",
        treatment: "Tests back to back create interference, patients lack context binding and are most vulnerable early, so recall is underestimated."
      },
      visual: {
        type: "flow",
        title: "The battery causes the forgetting",
        steps: [
          { h: "Tests back to back", t: "interference builds up" },
          { h: "No context binding", t: "tests blur together (B3)" },
          { h: "Fragile new trace", t: "disrupted early in consolidation" },
          { h: "Low recall score", t: "underestimates true ability" }
        ],
        verdict: "After quiet rest, patients recalled almost like controls (Dewar et al., 2010)."
      },
      answer: [
        "Screening can underestimate recall because a battery of tests run back to back creates <b>interference</b>, and amnesic patients are much less able to protect themselves against it.",
        "First, <b>proactive interference</b>: material from earlier tests carries into later ones. Healthy people can keep the tests apart by binding each one to its own context, the same ability tested in B3. Amnesic patients lack that binding, so similar tests blur together and their scores keep falling over the session.",
        "Second, <b>consolidation</b>. New memories are fragile, depend on the hippocampus and are most vulnerable early (Müller & Pilzecker, 1900). In <b>Dewar, Cowan and Della Sala (2010)</b>, four densely amnesic patients and six controls recalled a story after one hour. After an hour resting in a quiet, dark room, the patients performed almost as well as controls; after an hour of the kind of tasks used in patient assessment, they remembered virtually nothing.",
        "So the low score reflects the testing situation as much as true capacity. A short <b>interference-free rest</b> after learning could already help these patients."
      ],
      takeaway: "The measurement changes what is measured: the test battery causes forgetting in the patients it assesses.",
      trap: { wrong: "Patients just get tired during long testing.", right: "The key is interference: build-up across tests they cannot keep apart, and disruption of early consolidation." },
      note: null
    },

    {
      id: "C1",
      block: "Block C · Soares & Storm (2018)",
      title: "Reviewing the photo-taking study",
      canvas: "Use the reading instructions to review the Soares and Storm (2018) article: IVs, manipulation, DV, results, effect sizes, significance, causation and generalisation.",
      asks: "Read the article like a researcher and answer each part of the methods checklist briefly, with the numbers from the paper.",
      triage: {
        symptom: "'Review the article': a research-methods checklist.",
        diagnosis: "Design of Soares & Storm (2018): IV, DV, statistics, causality, generalisation.",
        treatment: "Answer each sub-question in order, using the numbers from the paper."
      },
      visual: {
        type: "bars",
        title: "Proportion correct (Soares & Storm, 2018)",
        unit: "",
        max: 1,
        groups: [
          { label: "Exp 1 (n = 42)", bars: [ { label: "Observe", value: 0.58, tone: "good" }, { label: "Camera", value: 0.45, tone: "neutral" }, { label: "Snapchat", value: 0.36, tone: "bad" } ] },
          { label: "Exp 2 (n = 51)", bars: [ { label: "Observe", value: 0.56, tone: "good" }, { label: "Camera", value: 0.49, tone: "neutral" }, { label: "Delete", value: 0.48, tone: "bad" } ] }
        ],
        note: "Means read from Figure 1 (the paper reports no exact means); chance = .25."
      },
      answer: [
        "Each experiment had one <b>IV</b>, condition, with three levels that combine whether a photo is taken and whether it is kept: Observe, Camera (photo saved) and Snapchat (photo sent, not saved) in Experiment 1; Observe, Camera and Delete in Experiment 2. It was manipulated <b>within participants</b>, with a Latin square counterbalancing paintings and order. The <b>DV</b> was proportion correct on a 30-item multiple-choice test of visual details (chance .25), after a 10-minute Tetris filler, scored blind.",
        "Observe was highest in both experiments (about .58 and .56, read from Figure 1). In Experiment 1 Snapchat was lowest (about .36), significantly below even Camera (about .45): t(41) = 2.23, p = .031, d = .48. In Experiment 2 Camera and Delete were about equal (.49 and .48; p = .80). Both overall tests were significant: F(2, 82) = 15.35, p < .001, ηp² = .27 and F(2, 100) = 4.26, p = .017, ηp² = .08. Versus Observe: Camera d = 0.70 and Snapchat d = 1.21 (Exp 1); Camera d = 0.58 and Delete d = 0.61 (Exp 2).",
        "<b>Causation</b> is plausible: conditions covary with memory, the manipulation came first, and the design controls individual differences, painting difficulty and order. Which part of the procedure causes it is not settled, and Exp 1 had a viewing-time confound that Exp 2 fixed. <b>Generalisation</b> to daily life is only partly convincing: it replicates Henkel (2014), but used small student samples, lab paintings, instructed photos and a short delay."
      ],
      takeaway: "The study shows photo-taking impairs memory under controlled conditions, not yet why or how widely.",
      trap: { wrong: "The design was between-subjects.", right: "Every participant did all three conditions: within-subjects, Latin square." },
      note: null
    },

    {
      id: "C2",
      block: "Block C · Soares & Storm (2018)",
      title: "Everyday transactive memory",
      canvas: "Provide alternative examples of transactive memories between people, and between people and devices.",
      asks: "Give your own examples, beyond Wegner's couples, where you remember who or what holds the information and rely on it.",
      triage: {
        symptom: "'Give examples of...'",
        diagnosis: "Transactive memory between people and with devices.",
        treatment: "Give own examples where the information is stored elsewhere and you know where, then add a benefit and a cost."
      },
      visual: {
        type: "map",
        title: "Remember who or what knows",
        center: "Store the location, not the content",
        branches: [
          { h: "Family", t: "one parent knows school dates" },
          { h: "Work team", t: "payroll goes to Anna, IT to Tom" },
          { h: "Phone", t: "contacts and calendar hold the details" },
          { h: "Search engine", t: "remember where, not the fact" },
          { h: "Trade-off", t: "frees capacity, but creates dependence" }
        ]
      },
      answer: [
        "<b>Transactive memory</b> (Wegner, 1987) is a shared memory system in which we store information in other people or in objects and remember <b>who or what knows what</b>. A good example has two parts: the information is held elsewhere, and you know where.",
        "Between people: in a family, one parent tracks school dates and the other dentist appointments, and each knows to ask the other. In a work team, you don't learn the payroll rules because Anna knows them, and IT questions go to Tom. On holiday one friend remembers the restaurant's name, the other the way back to the hotel, and siblings each hold parts of family history and reconstruct a story together.",
        "Between people and devices: you no longer know phone numbers, but you know your contacts app has them. Appointments live in a calendar app, so you stop rehearsing them. For facts you remember where to find them, a search engine, rather than the fact itself: the 'Google effect' (<b>Sparrow, Liu & Wegner, 2011</b>). Navigation apps hold the route, so you learn less of the city.",
        "The benefit is freed-up capacity (Storm & Stone, 2015); the cost is that the information is hard to recall when the partner or device is unavailable."
      ],
      takeaway: "Your brain keeps the index; the partner or phone keeps the book.",
      trap: { wrong: "Any example of simply forgetting something.", right: "It is only transactive memory if you rely on a partner or device that you know holds it." },
      note: "The reader gives the same kinds of examples (partners splitting tasks, team experts, phone contacts and calendar, the Google effect); the specific scenarios are own examples, as the question asks."
    },

    {
      id: "C3",
      block: "Block C · Soares & Storm (2018)",
      title: "Figure 1 if offloading were true",
      canvas: "What would Figure 1 of Soares and Storm (2018) look like if the offloading account of the photo-taking-impairment effect were correct?",
      asks: "Derive what the offloading account predicts for each bar, describe that figure, and compare it with the real results.",
      triage: {
        symptom: "'What would the figure look like if...?'",
        diagnosis: "Deriving a prediction from the offloading account.",
        treatment: "State the account, predict the no-save bar back at Observe level, then contrast with the actual data."
      },
      visual: {
        type: "grid",
        title: "Prediction versus actual result",
        cols: ["Offloading predicts", "Actual (≈)"],
        rows: [
          { head: "Observe", cells: ["high", "high (.58 / .56)"] },
          { head: "Camera (saved)", cells: ["low", "low (.45 / .49)"] },
          { head: "Snapchat / Delete", cells: ["high, near Observe", "low (.36 / .48)"] }
        ]
      },
      answer: [
        "If offloading were correct, the third bar in each experiment (Snapchat, Delete) would rise back to about the <b>Observe level</b>, leaving Camera as the only low bar.",
        "The <b>offloading hypothesis</b> (Henkel, 2014) says people remember photographed objects less because they count on the camera to remember for them. So it predicts impairment only when people expect to use the photo later. Observe should be highest. Camera, where the photo is saved, should be lower, because people offload onto it. In the <b>Snapchat and Delete</b> conditions the photo cannot be used later, so there is nothing to offload to: memory should be about as good as Observe, and clearly better than Camera.",
        "The real figure showed the opposite. The Snapchat bar was significantly lower than Camera (about .36 vs .45, p = .031), and Delete equalled Camera (about .48 vs .49, p = .80). This pattern contradicts the offloading account and supports <b>attentional disengagement</b>: taking the photo itself disrupts encoding, whether or not it can be used later."
      ],
      takeaway: "The decisive bar is the condition where offloading is impossible, and it stayed low.",
      trap: { wrong: "Under offloading, Camera would be as good as Observe.", right: "Camera is the one condition where offloading predicts lower memory." },
      note: null
    },

    {
      id: "C4",
      block: "Block C · Soares & Storm (2018)",
      title: "Which experiment is stronger?",
      canvas: "Which of the two experiments has the strongest design? Why?",
      asks: "Compare the two experiments on internal validity: which one rules out more alternative explanations? Name the confounds that Experiment 2 fixed.",
      triage: {
        symptom: "'Which design is strongest? Why?'",
        diagnosis: "Internal validity and confounds (viewing time, belief in the manipulation).",
        treatment: "Name the confounds in Experiment 1, show how Experiment 2 fixes them, then note what remains."
      },
      visual: {
        type: "grid",
        title: "Design scorecard",
        cols: ["Exp 1", "Exp 2"],
        rows: [
          { head: "Within-subjects, Latin square", cells: ["yes", "yes"] },
          { head: "Viewing time equal", cells: ["no", "yes"] },
          { head: "'No access' certain", cells: ["no", "yes"] },
          { head: "Same app in photo conditions", cells: ["no", "yes"] },
          { head: "Power analysis", cells: ["no", "yes"] },
          { head: "Effect size (ηp²)", cells: [".27", ".08"] }
        ]
      },
      answer: [
        "<b>Experiment 2</b> has the stronger design. Both are within-subjects with a Latin square, but Experiment 2 varies only whether the photo is kept, while the act of photographing stays the same.",
        "In Experiment 1, accessibility was confounded with <b>app type</b>: Snapchat and Camera differ in interface, and Snapchat probably took longer. Because the photo had to be taken within the 15 s, photo conditions also had less <b>viewing time</b>. In Experiment 2 both photo conditions used the Camera app, and the 15 s started only after the photo was taken, so exposure was equal or longer; the impairment still appeared. <b>Believability</b> also improved: participants may have doubted Snapchat photos were gone, but in Delete they deleted the photo themselves. A power analysis set n ≥ 49 for 90% power (n = 51).",
        "Experiment 1 had the larger effect (ηp² = .27 vs .08), but a large effect in a design with confounds is less convincing than a smaller one in a cleaner design. A remaining limitation is that only 31 of 51 participants completed the survey, which does not affect the main result."
      ],
      takeaway: "The strongest design leaves the fewest alternative explanations, not the biggest effect.",
      trap: { wrong: "Experiment 1 is stronger because its effect was bigger.", right: "Design strength is about ruled-out confounds; Experiment 1 had a viewing-time confound." },
      note: null
    },

    {
      id: "C5",
      block: "Block C · Soares & Storm (2018)",
      title: "Delete effect: illusion or task switching?",
      canvas: "Participants who took and deleted a photo, then observed the painting for as long as Observe participants, still remembered it less. How do the authors explain this? Could it also be a task-switching effect?",
      asks: "Give the authors' explanation of why memory was still worse after the photo was gone, then judge whether task switching could explain it and how you would test that.",
      triage: {
        symptom: "'How do the authors explain...? Could it also be...?'",
        diagnosis: "Metacognitive illusion or implicit offloading versus task switching.",
        treatment: "Give the authors' accounts, evaluate task switching, then propose a test."
      },
      visual: {
        type: "versus",
        title: "Why memory stayed worse after Delete",
        cols: [
          { head: "Authors", sub: "continued disengagement", tone: "accent", points: ["metacognitive illusion: 'already encoded'", "automatic offloading from habit"] },
          { head: "Alternative", sub: "task switching", tone: "neutral", points: ["switch cost after using phone", "attention residue on the phone", "authors: any secondary task might"] }
        ],
        verdict: "Test: add a non-photo phone task of equal duration."
      },
      answer: [
        "The authors explain it as <b>attentional disengagement</b> that continues after the camera is put down, so photo-taking impairs encoding prospectively. They offer two speculative mechanisms: a <b>metacognitive illusion</b>, where taking the photo feels like fluent encoding so people invest less effort in the next 15 s (Bjork, Dunlosky & Kornell, 2013; Koriat, 1993), and <b>automatic offloading</b>, where years of experience link photographing with 'this is stored elsewhere', even when people know the photo is deleted.",
        "Task switching is a plausible alternative. Participants switched from operating the phone to studying the painting, and switches carry <b>switch costs</b> and attention residue, which could reduce encoding early in the 15 s. Classic switch costs are short, but residue may last longer, and the authors admit that any secondary task might produce the effect.",
        "To test it, add a condition with a phone task of the same duration but no photo, such as typing the painting's title. If memory is impaired as much as after Delete, a general task-switching account is supported; if photo-taking impairs memory more, something specific about photographing is at work."
      ],
      takeaway: "The Delete finding rules out viewing time, but not the task itself.",
      trap: { wrong: "Delete participants looked at the painting for less time.", right: "Viewing time was equal or longer, so time cannot explain the impairment." },
      note: "The reader also judges task switching a good fit (switch costs disrupt deep processing). The proposed test is own reasoning; the authors only note that any secondary task might cause disengagement."
    },

    {
      id: "C6",
      block: "Block C · Soares & Storm (2018)",
      title: "Less memorable experiences? Not so fast",
      canvas: "Why would it be incorrect to conclude on the basis of this study that taking pictures creates less memorable experiences?",
      asks: "Show the gap between what the study measured and the broad claim, naming concrete limits of the measure, the task, the sample and the photo situation.",
      triage: {
        symptom: "'Why would it be incorrect to conclude...?'",
        diagnosis: "Generalisation and construct validity limits.",
        treatment: "Contrast the measured DV with the broad claim, then list limits of the DV, delay, photo situation and sample."
      },
      visual: {
        type: "map",
        title: "Measured versus claimed",
        center: "Visual details after 10 min ≠ memorable experience",
        branches: [
          { h: "Narrow DV", t: "no gist, emotion or meaning" },
          { h: "Short delay", t: "photos never reviewed as cues" },
          { h: "Instructed photos", t: "volitional photos can help" },
          { h: "Lab setting", t: "screen paintings, student sample" },
          { h: "Relative effect", t: "less than Observe, not unmemorable" }
        ]
      },
      answer: [
        "The conclusion goes far beyond the data. The study measured <b>recognition of visual details</b> of paintings on a multiple-choice test, while a memorable experience also includes gist, emotions, enjoyment, meaning and social context, none of which were measured.",
        "Memory was tested after only <b>10 minutes</b>, without the photos. In real life photos can be strong retrieval cues later (SenseCam: Berry et al., 2007; Loveday & Conway, 2011), so photographed experiences may be remembered better in the long run, if people look at them. Participants were also told what to photograph; when people <b>choose</b> what to photograph, engagement and visual memory can increase (Diehl, Zauberman & Barasch, 2016; Barasch et al., 2017), and automatic wearable cameras had no effect (Niforatos et al., 2017).",
        "Paintings on a lab screen are not a holiday or a wedding, and the samples were small groups of UCSC undergraduates. The finding is also <b>relative</b>: photographed paintings were remembered less than observed ones, not forgotten. The correct, narrower conclusion is that, under these lab conditions, being instructed to take a photo reduces short-term memory for visual details of the photographed object."
      ],
      takeaway: "Match the claim to the measure: less memory for visual details after 10 minutes is not a less memorable experience.",
      trap: { wrong: "The only problem is the small sample.", right: "The bigger issues are the narrow DV, short delay and instructed photos." },
      note: null
    }
  ]
};
