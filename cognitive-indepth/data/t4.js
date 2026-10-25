IDQ[4] = {
  n: 4,
  title: "Concepts and categories",
  readings: ["Murphy, Concepts and categories (Bron A)", "Robinson-Riegler, Semantic memory and categorisation (Bron B)", "Bozeat et al. (2003), Semantic dementia and drawing (Bron C)"],
  intro: "These questions are about how we store meaning: what a category is (definitions, prototypes, exemplars, essences), how a semantic network explains speed differences, and what semantic dementia shows when meaning breaks down. The thread through all of them is that categories are built from overlapping, weighted features, not from strict definitions.",
  questions: [

  {
    id: "A1",
    block: "Bron A · Murphy",
    title: "Where did meaning matter before?",
    canvas: "Deze bron gaat over semantiek: de betekenis van woorden en zinnen. We kwamen semantiek al eerder tegen. Weet je nog waar en hoe semantiek een invloed uitoefende? (English: This source is about semantics: the meaning of words and sentences. We met semantics earlier. Do you remember where and how semantics had an influence?)",
    asks: "Look back at Problems 1 to 3 and name places where the meaning of information changed what happened: what we noticed, stored or remembered. For each one, say how meaning had that effect.",
    triage: { symptom: "'Where did meaning matter before?': a link-back question to Problems 1 to 3.", diagnosis: "Top-down influence of meaning in attention, short-term/working memory and autobiographical memory/amnesia.", treatment: "Name at least two earlier problems, say HOW meaning acted in each, then link to thresholds and activation." },
    visual: { type: "map", title: "Meaning in earlier problems", center: "Meaning acts top-down",
      branches: [
        { h: "Attention", t: "own name breaks through the filter" },
        { h: "Treisman", t: "dictionary units with lowered thresholds" },
        { h: "STM / working memory", t: "release from PI when category changes" },
        { h: "Autobiographical / amnesia", t: "semantic facts spared, episodic lost" }
      ] },
    answer: [
      "Semantics has already appeared in at least three places, and each time <b>meaning acts top-down</b>: what something means shapes what we attend to, store and retrieve.",
      "In <b>attention</b>, the meaning of an unattended message can break through the filter, for example your own name (cocktail-party effect) or a story that switches ears. Treisman explained this with dictionary units whose thresholds are lowered for meaningful or expected words.",
      "In <b>short-term and working memory</b>, meaning influences coding and forgetting, for example release from proactive interference when the semantic category changes. In <b>autobiographical memory and amnesia</b>, semantic knowledge about ourselves is distinguished from episodic memories of events, and semantic memory can be preserved when episodic memory is impaired.",
      "So meaning keeps sneaking into processes that look mechanical. Treisman's thresholds also foreshadow this week's threshold-based activation in semantic network models (Collins & Loftus, 1975)."
    ],
    takeaway: "Meaning has been the hidden hand in every earlier problem: it decides what we notice, keep and recall.",
    trap: { wrong: "Semantics simply means semantic memory.", right: "Semantics is meaning itself; semantic memory is only one store of it. Meaning also acted in attention and STM." },
    note: "The examples come from earlier problems (1 to 3), not from this theme's readings. Check the STM example (release from proactive interference) against your own Problem 2 notes."
  },

  {
    id: "A2",
    block: "Bron A · Murphy",
    title: "Does typicality change how far facts spread?",
    canvas: "Concepten laten je toe om dingen die je leerde over een beperkt aantal items te generaliseren naar een veel grotere set van items. Als je bijvoorbeeld leert dat mussen en roodborstjes een bepaalde eigenschap hebben, dan ben je geneigd om te veronderstellen dat alle vogels die eigenschap delen. Denk je dat typicaliteit het generalisatiepatroon beïnvloedt? (English: Concepts let you generalise what you learned about a limited number of items to a much larger set. If you learn that sparrows and robins have a certain property, you tend to assume all birds share it. Do you think typicality influences the pattern of generalisation?)",
    asks: "If you learn a new fact about some birds, do you extend it to all birds more readily when those birds are typical (robin) than when they are odd (penguin)? Say yes or no, and explain why.",
    triage: { symptom: "'Does typicality change how far a fact spreads?'", diagnosis: "Concepts support generalisation (Murphy); typicality = family resemblance; prototype and exemplar views.", treatment: "Predict that typical premises generalise further, explain WHY via feature overlap, add the atypical contrast, then a caution." },
    visual: { type: "versus", title: "Learn a fact about...",
      cols: [
        { head: "Robin, sparrow", sub: "typical members", tone: "good", points: ["share many features with most birds", "fact probably true of birds", "generalise strongly"] },
        { head: "Penguin, ostrich", sub: "atypical members", tone: "bad", points: ["unusual features", "fact may be a penguin quirk", "generalise weakly"] }
      ],
      verdict: "Robin facts fly far; penguin facts stay home." },
    answer: [
      "Yes: <b>typicality strengthens generalisation</b>. Generalising from a few members to the whole category is a core function of concepts (Murphy), and facts about typical members travel further.",
      "The reason is feature overlap. Typical members such as sparrows and robins share many features with other birds (<b>family resemblance</b>; Rosch & Mervis, 1975), so a property they have probably reflects what birds in general are like. A property learned about atypical members such as penguins may be tied to their unusual features, so we generalise it less confidently.",
      "Both views explain this. In <b>prototype</b> terms, typical members are close to the category summary and represent the category well; in <b>exemplar</b> terms, they resemble many stored exemplars, so the property spreads widely. This mirrors Murphy's Text Box 1, where typicality influences learning, categorisation and reasoning.",
      "A caution: generalising from salient or 'typical' members can lead to over-generalisation, as in stereotypes."
    ],
    takeaway: "Typical members stand for the category, so what is true of them is assumed to be true of all.",
    trap: { wrong: "Just saying 'typical means more generalisation'.", right: "You must give the why: typical members share many features with the category, so they are representative." },
    note: "The labels 'premise typicality' and 'diversity effects' (Rips, 1975; Osherson et al., 1990) are background, not from the readings. Do not present them as reading content."
  },

  {
    id: "A3",
    block: "Bron A · Murphy",
    title: "Why the name 'family resemblance'?",
    canvas: "Verklaar de family resemblance in de naam family resemblance theory. (English: Explain the 'family resemblance' in the name family resemblance theory.)",
    asks: "Explain the metaphor: how do members of a real family look alike, and how is a category built the same way?",
    triage: { symptom: "'Why that name?': an explain-the-metaphor question.", diagnosis: "Rosch & Mervis (1975); the classical view it replaces; Wittgenstein's games (background).", treatment: "Describe a real family (overlapping features, none shared by all), map it onto categories, then link to typicality." },
    visual: { type: "grid", title: "A family: overlap, but no common feature",
      cols: ["Dad's nose", "Mum's eyes", "Curly hair"],
      rows: [
        { head: "Anna", cells: ["yes", "yes", "no"] },
        { head: "Ben", cells: ["no", "yes", "yes"] },
        { head: "Cas", cells: ["yes", "no", "yes"] }
      ] },
    answer: [
      "The theory is named after the way <b>members of a family resemble each other</b>: relatives look alike because they share overlapping features (one has the father's nose, another the mother's eyes), yet no single feature is shared by all of them.",
      "Rosch and Mervis (1975) proposed that categories are structured in the same way. Members are held together by a <b>network of overlapping features</b> rather than by a defining set that all members possess, so there is no definition. The term goes back to Wittgenstein's analysis of 'games'.",
      "This also explains typicality. An item's <b>typicality is its degree of family resemblance</b>: how many features it shares with other members and how few with other categories. So a robin is a better 'family member' of the birds than a penguin, which shares few bird features and some fish features."
    ],
    takeaway: "Everyone in the family looks related, but nobody has everything: categories hang together the same way.",
    trap: { wrong: "Family members (and category members) share one common feature.", right: "The whole point is that no feature is shared by all; the overlap criss-crosses." },
    note: "The Wittgenstein (1953) 'games' origin is background, though Robinson-Riegler uses the same example."
  },

  {
    id: "A4",
    block: "Bron A · Murphy",
    title: "Where else did we see a hierarchy?",
    canvas: "De tekst van Murphy stelt dat veel categorieën hiërarchisch zijn georganiseerd. We zijn eerder zo'n hiërarchische organisatie van informatie tegengekomen. Weet je nog waar? (English: Murphy's text states that many categories are hierarchically organised. We came across such a hierarchical organisation of information earlier. Do you remember where?)",
    asks: "Name an earlier model where information was stored from general to specific, and show how its levels line up with Murphy's category levels.",
    triage: { symptom: "'Where have we seen general to specific levels before?'", diagnosis: "Murphy's superordinate, basic, subordinate levels; Conway's autobiographical knowledge base (Problem 3a).", treatment: "Name the earlier model, map its levels onto Murphy's, and note the preferred middle level in both." },
    visual: { type: "grid", title: "Two hierarchies, level by level",
      cols: ["Murphy (categories)", "Conway (life memory)"],
      rows: [
        { head: "General", cells: ["superordinate: animal", "lifetime period"] },
        { head: "Middle (preferred)", cells: ["basic: bird", "general event"] },
        { head: "Specific", cells: ["subordinate: robin", "event-specific knowledge"] }
      ] },
    answer: [
      "We met a hierarchical organisation in <b>autobiographical memory</b> (Problem 3a). Conway's autobiographical knowledge base is organised from general to specific.",
      "<b>Lifetime periods</b> ('when I lived in Rotterdam') contain <b>general events</b> ('evenings at the library'), which contain event-specific knowledge (sensory details of one evening). This parallels Murphy's category hierarchy: superordinate matches lifetime period, basic matches general event, and subordinate matches event-specific knowledge.",
      "In both hierarchies a <b>middle level is the preferred entry point</b>: general events in Conway's model and the basic level in Murphy's. Within this week's readings, hierarchies also appear in network models of semantic memory and in the specific-to-general loss in semantic dementia (duck, swan, bird, animal; Warrington, 1975; Hodges et al., 1995)."
    ],
    takeaway: "Life story and categories are both Russian dolls, general to specific, with a favourite middle doll.",
    trap: { wrong: "Naming Conway's model is enough.", right: "You must map its levels onto Murphy's and point out the preferred middle level in both." },
    note: "Conway's model comes from Problem 3a, not this theme's readings. Collins & Quillian's hierarchical network is background; hierarchical chunking in STM is another possible answer depending on your notes."
  },

  {
    id: "A5",
    block: "Bron A · Murphy",
    title: "Prototypes versus definitions",
    canvas: "Waarin verschillen prototypes en definities? (English: How do prototypes and definitions differ?)",
    asks: "Compare the two ways a category could be stored in your head: as a strict checklist (definition) or as a best example (prototype). Show how they differ point by point.",
    triage: { symptom: "'Compare two representations.'", diagnosis: "Classical view (necessary and sufficient features) vs prototype view (weighted features, graded similarity).", treatment: "Build a comparison: what is stored, membership, typicality, boundaries, origin, scope." },
    visual: { type: "grid", title: "Definition vs prototype",
      cols: ["Definition", "Prototype"],
      rows: [
        { head: "Stored", cells: ["necessary + sufficient features", "weighted characteristic features"] },
        { head: "Every feature needed?", cells: ["yes", "no"] },
        { head: "Membership", cells: ["all-or-none", "graded similarity"] },
        { head: "Explains typicality?", cells: ["no", "yes"] },
        { head: "Boundaries", cells: ["sharp", "fuzzy (bowling)"] },
        { head: "Best for", cells: ["triangle, prime number", "bird, furniture, game"] }
      ] },
    answer: [
      "A <b>definition</b> is a checklist and a <b>prototype</b> is a best example. They differ in what is stored, how membership works and which concepts they suit.",
      "A definition specifies necessary and jointly sufficient features: anything that has them all is a member, and anything that lacks one is not. So membership is <b>all-or-none</b>, all members are equally good and boundaries are sharp.",
      "A prototype is a summary of the features members tend to have, weighted by how common they are, and no single feature is required (a penguin does not fly but is still a bird). Membership is <b>graded by similarity</b> to the prototype, which explains typicality (robins match better than penguins) and fuzzy boundaries (bowling between sport and game).",
      "Definitions suit formal concepts such as 'triangle', whereas most natural categories cannot be defined but do have prototypes, abstracted from experience; a prototype can even be a never-seen average (Posner et al., 1967)."
    ],
    takeaway: "Definition = checklist with a 100% pass mark; prototype = bullseye with a blurry edge.",
    trap: { wrong: "A prototype is one real, best member of the category.", right: "It is a summary and can be an abstract average that was never seen (Posner et al., 1967)." },
    note: null
  },

  {
    id: "A6",
    block: "Bron A · Murphy",
    title: "Essentialism and the classical view",
    canvas: "In welke zin zijn psychologisch essentialisme en de klassieke visie op concepten en categorieën gerelateerd? (English: In what sense are psychological essentialism and the classical view of concepts and categories related?)",
    asks: "Explain how these two ideas are alike and how they differ. Both say a category has a core; the question is where that core sits and what it does.",
    triage: { symptom: "'How are two ideas related?': needs similarities AND differences.", diagnosis: "Classical view (defining features) vs essentialism (hidden causal essence; Keil, 1989).", treatment: "Give two similarities (defining core, all-or-none) and three differences (hidden vs visible, causal, natural kinds only), then add Keil." },
    visual: { type: "versus", title: "Same core idea, different location",
      cols: [
        { head: "Classical view", sub: "the label on the box", tone: "neutral", points: ["core = visible defining features", "features ARE the category", "any category (triangle, bachelor)"] },
        { head: "Essentialism", sub: "the DNA inside", tone: "accent", points: ["core = hidden, often unknown essence", "essence CAUSES the features", "surface can mislead: Keil's raccoon", "mainly natural kinds"] }
      ],
      verdict: "Both: a core all and only members have, all-or-none membership." },
    answer: [
      "Psychological essentialism can be seen as a <b>psychological descendant of the classical view</b>. Both hold that a category has a core that all and only its members possess, and both imply <b>all-or-none membership</b> with no in-between.",
      "The difference lies in where that core is located. The classical view places it in observable defining features used to classify items, whereas essentialism places it in a <b>hidden essence</b>, often unknown to the person, that is believed to cause the observable features.",
      "As a result, surface features can vary or mislead without changing membership: <b>Keil's (1989) raccoon</b> made to look like a skunk is still judged a raccoon. Essentialism applies mainly to natural kinds, not to artifacts (a coffeepot turned into a bird feeder is now a bird feeder).",
      "So essentialism explains why people believe categories are well defined (the outrage over Pluto) even though they cannot give definitions, while everyday identification relies on typical, graded features."
    ],
    takeaway: "Both say there is one thing that makes a dog a dog; the classical view thinks you can see it, essentialism thinks it is hidden inside.",
    trap: { wrong: "Essentialism is just the classical view again.", right: "The essence is hidden and causal, not a list of visible features, and it applies mainly to natural kinds." },
    note: null
  },

  {
    id: "B1",
    block: "Bron B · Robinson-Riegler",
    title: "Typicality effect in a semantic network",
    canvas: "Categorieverificatietaken worden gebruikt om na te gaan hoe we categorielidmaatschap bepalen. In deze taak verifiëren deelnemers zo snel mogelijk eenvoudige stellingen zoals “Een zwaluw (swallow) is een vogel” of “Een kraanvogel (crane) is een vogel”. Hieronder vind je een voorbeeld van een klein semantisch netwerk. Gebruik het om het typicaliteitseffect uit te leggen. (English: Category verification tasks are used to examine how we determine category membership. Participants verify simple statements as fast as possible, such as 'A swallow is a bird' or 'A crane is a bird'. Below is an example of a small semantic network. Use it to explain the typicality effect.)",
    asks: "People say 'true' faster to 'a swallow is a bird' than to 'a crane is a bird'. Use the network (nodes, links, spreading activation) to explain step by step why.",
    triage: { symptom: "A network picture plus a speed difference: 'explain with the model'.", diagnosis: "Spreading activation (Collins & Loftus, 1975): link length = strength; summation; threshold.", treatment: "Walk through the mechanism step by step for swallow vs crane, then contrast with a strict hierarchy." },
    visual: { type: "flow", title: "Why 'a swallow is a bird' is faster",
      steps: [
        { h: "Read sentence", t: "SWALLOW and BIRD nodes activate" },
        { h: "Activation spreads", t: "weakens with distance" },
        { h: "Short link + shared features", t: "flies, small, sings: paths sum" },
        { h: "Threshold reached sooner", t: "fast 'true'; crane's long link is slower" }
      ],
      verdict: "Variable link strengths produce the typicality effect." },
    answer: [
      "In a <b>spreading-activation network</b> (Collins & Loftus, 1975), verifying 'A swallow is a bird' activates the SWALLOW and BIRD nodes. Activation spreads along their links, weakens with distance, and the statement is verified once enough activation accumulates past a <b>threshold</b>.",
      "Typical members like the swallow are connected to BIRD by <b>short, strong links</b> and share many feature nodes with it (flies, small, sings), so activation arrives quickly and along several routes that sum. Atypical members like the crane have longer, weaker links and fewer shared typical features (long legs, wading), so the threshold is reached later.",
      "The result is faster verification for typical members: the <b>typicality effect</b>. Robinson-Riegler puts it as a short distance between category prototypes and the category label. A strictly hierarchical network with equal links could not explain this, because swallow and crane would both be one link from BIRD."
    ],
    takeaway: "Swallow lives next door to BIRD, crane lives across town, so the swallow sentence clicks faster.",
    trap: { wrong: "Describing the network picture without the process.", right: "Name the mechanism (spread, decay, summation, threshold) and say which link is shorter and why (feature overlap)." },
    note: "Collins & Quillian's strict hierarchy is background. The network in the Canvas handout is not shown here; apply the same reasoning to its link lengths."
  },

  {
    id: "B2",
    block: "Bron B · Robinson-Riegler",
    title: "A typicality effect for features?",
    canvas: "Eigenschapverificatietaken worden gebruikt om na te gaan hoe eigenschappen van categorieën worden opgeslagen en opgehaald. In deze taak verifiëren deelnemers eenvoudige stellingen zoals “Een kanarie is geel” of “Een kanarie zingt”. Bekijk het semantische netwerk hieronder. Op basis hiervan, denk je dat er zoiets bestaat als een typicaliteitseffect voor eigenschappen? (English: Feature verification tasks examine how properties of categories are stored and retrieved: 'A canary is yellow', 'A canary sings'. Look at the semantic network below. Based on it, do you think there is something like a typicality effect for properties?)",
    asks: "Are some properties of a concept checked faster than others, just as some members of a category are? Predict this from the network and explain the mechanism.",
    triage: { symptom: "'Is there a typicality effect for features?': a prediction from the network.", diagnosis: "Feature verification; links to features differ in strength (pointy ears vs skin).", treatment: "Say yes, give the mechanism (link strength / proximity), cite the cat example, then apply to yellow vs sings and contrast with a hierarchy." },
    visual: { type: "scale", title: "Distance of a feature from its concept", left: "Close: verified fast", right: "Far: verified slowly",
      points: [
        { label: "cat: pointy ears", pos: 15 },
        { label: "canary: yellow, sings", pos: 25, note: "compare link lengths" },
        { label: "canary: breathes", pos: 75 },
        { label: "cat: has skin", pos: 88 }
      ] },
    answer: [
      "Yes. In a spreading-activation network, <b>features are nodes too</b>, linked to concepts with varying strengths, so their verification times should differ just as exemplars do.",
      "Features that are <b>characteristic and strongly associated</b> with a concept (for a canary, being yellow or singing) sit close to the CANARY node and are verified quickly. General or less associated features such as 'has skin' are distant and verified slowly. Robinson-Riegler reports exactly this: 'A cat has pointy ears' is verified faster than 'A cat has skin', which shows the proximity of features to the concept.",
      "Which of 'yellow' and 'sings' is faster depends on their <b>relative link strengths</b> in the network shown: the shorter link predicts the faster response. A strict hierarchical model would predict no difference between them, because both are stored at the canary level; only 'has skin', stored at ANIMAL, would be slow."
    ],
    takeaway: "Features have favourites too: 'pointy ears' is the robin of cat features.",
    trap: { wrong: "Answering only 'yes'.", right: "Give the mechanism (link strength / proximity) and show that hierarchical and spreading-activation networks predict different things." },
    note: "The network in the Canvas handout is not shown here; compare the link lengths of 'yellow' and 'sings' in it yourself."
  },

  {
    id: "B3",
    block: "Bron B · Robinson-Riegler",
    title: "Why correlated features hurt prototypes",
    canvas: "Er is onderzoek dat aangeeft dat mensen beseffen dat sommige eigenschappen van categorieleden samenhangen: kleine vogels produceren bijvoorbeeld andere geluiden dan grote vogels. Leg uit waarom dit onderzoek problematisch is voor de prototypebenadering. (English: Research shows people realise that some properties of category members go together: small birds make different sounds than large birds. Explain why this research is problematic for the prototype approach.)",
    asks: "People know which features come together (small birds sing). Explain why a single 'average bird' cannot hold that knowledge, and which theory can.",
    triage: { symptom: "'Why is X a problem for theory Y?'", diagnosis: "Prototype = single summary of independently weighted features; correlated features (Mervis & Rosch, 1981; Malt & Smith, 1984).", treatment: "Explain what an average stores and what it loses, give the failed prediction, name exemplars as the fix." },
    visual: { type: "versus", title: "Small birds sing, large birds squawk",
      cols: [
        { head: "Prototype", sub: "one average", tone: "bad", points: ["stores 'small .5', 'sings .5'", "loses which features go together", "small squawker = small singer"] },
        { head: "Exemplars", sub: "each bird stored", tone: "good", points: ["each bird keeps size and song", "correlations read off examples", "Malt & Smith, 1984"] }
      ],
      verdict: "An average is a smoothie: you lose which fruits came together." },
    answer: [
      "The prototype approach represents a category as a <b>single summary of independently weighted features</b>. Such an average records how common each feature is (some birds are small, some sing) but not which features occur together.",
      "So the information that small birds tend to sing while large birds squawk is lost. The approach would therefore predict that a small squawking bird matches the prototype as well as a small singing bird, whereas people are sensitive to these <b>correlated features</b> and use them in classification (Mervis & Rosch, 1981). As Robinson-Riegler puts it, it is not clear how an average representation could allow for this.",
      "<b>Exemplar theory</b> handles this naturally, because each stored exemplar keeps its features together, so correlations can be read off the stored examples (Malt & Smith, 1984). This is one reason Robinson-Riegler concludes that prototypes work better as a description than as an explanation."
    ],
    takeaway: "An average keeps how often each feature occurs, but throws away which features occur together.",
    trap: { wrong: "Prototypes cannot handle variation.", right: "The specific problem is co-occurrence between features, and you should name exemplars as the solution." },
    note: null
  },

  {
    id: "B4",
    block: "Bron B · Robinson-Riegler",
    title: "Spreading activation in your feed",
    canvas: "De nummers die je aanbevolen krijgt op Spotify worden bepaald door een algoritme dat erg lijkt op spreading activation in semantische netwerken. Kun je andere zulke voorbeelden bedenken die jou persoonlijk beïnvloeden? Op wat voor soort data en mechanismen denk je dat deze algoritmes bouwen? (English: The songs Spotify recommends are chosen by an algorithm much like spreading activation in semantic networks. Can you think of other such examples that influence you personally? What kinds of data and mechanisms do you think these algorithms build on?)",
    asks: "Give some other recommender systems from your own life, then explain how they work in network terms: what the nodes, links, activation and threshold are.",
    triage: { symptom: "An application question: 'find it in your life, then explain the machinery'.", diagnosis: "Nodes, links, link strength, spreading activation, threshold, context (priming).", treatment: "Give 3 to 4 personal examples, map recommender parts onto network parts, then add a critical note." },
    visual: { type: "grid", title: "Semantic network vs recommender",
      cols: ["Recommender equivalent"],
      rows: [
        { head: "Nodes", cells: ["songs, videos, products, people, you"] },
        { head: "Link strength", cells: ["co-occurrence and content similarity"] },
        { head: "Prime", cells: ["plays, likes, skips, searches"] },
        { head: "Spread with decay", cells: ["closer items score higher"] },
        { head: "Threshold", cells: ["top-scoring items shown"] },
        { head: "Priming context", cells: ["time, device, current playlist"] }
      ] },
    answer: [
      "Many systems I use work like spreading activation: <b>YouTube and Netflix</b> recommendations, TikTok's For You page, Amazon's 'frequently bought together', search autocomplete and LinkedIn's job and contact suggestions.",
      "Broadly, they represent items (and users) as <b>nodes</b> and derive link strengths from behavioural data across millions of users, so items consumed by the same people become strongly connected (collaborative filtering). They also use content features such as genre or keywords to link similar items.",
      "My recent activity acts like a <b>prime</b>: its activation spreads to connected items, weakening with distance, and the highest-scoring items pass the <b>threshold</b> and are recommended. Context such as time of day, device or current playlist works like priming.",
      "Unlike human semantic memory, these networks are optimised for engagement and can create feedback loops such as filter bubbles, or in hiring tools reproduce past biases."
    ],
    takeaway: "Your feed is a semantic network that never sleeps: what you play lights up what similar listeners played.",
    trap: { wrong: "Listing apps is the answer.", right: "Map them onto the mechanism (nodes, links from co-occurrence, spread, threshold), and do not claim to know a company's exact algorithm." },
    note: "This is an application question: the examples and the mapping are own reasoning, not reading content. Describe mechanisms in general terms, because the real algorithms are proprietary."
  },

  {
    id: "C1",
    block: "Bron C · Bozeat et al. (2003)",
    title: "Spotting semantic dementia in the video",
    canvas: "Semantische dementie is een progressieve ziekte, gekenmerkt door een geleidelijk en selectief verlies van conceptuele kennis, wat resulteert in een beperkte woordenschat tijdens het spreken, moeilijkheden met het begrijpen van wat er gezegd wordt, en problemen met het identificeren van objecten en personen in verschillende modaliteiten. Het algemene intellectuele vermogen, het dagelijkse geheugen en de visueel-perceptuele vaardigheden blijven relatief gespaard. De taal blijft vloeiend en goed gestructureerd. Hoe is deze beschrijving van toepassing op de vrouw in deze video? (English: Semantic dementia is a progressive disease with a gradual, selective loss of conceptual knowledge: limited vocabulary in speech, difficulty understanding what is said, and problems identifying objects and people across modalities. General intellect, everyday memory and visuo-perceptual skills stay relatively spared; language stays fluent and well structured. How does this description apply to the woman in the video?)",
    asks: "Go through the clinical description piece by piece and find evidence in the video for each part: what she has lost and what still works.",
    triage: { symptom: "'Apply a clinical description to a case.'", diagnosis: "The SD profile: lost (concepts, vocabulary, comprehension, identification) vs spared (intellect, everyday memory, perception, fluency).", treatment: "Tick off each element with evidence from the video, then stress the contrast lost vs spared." },
    visual: { type: "versus", title: "What to look and listen for",
      cols: [
        { head: "Lost", sub: "meaning", tone: "bad", points: ["vague words: 'thing', 'stuff'", "'What is a ...?'", "fails to recognise objects, sounds, people"] },
        { head: "Spared", sub: "everything else", tone: "good", points: ["fluent speech, normal grammar", "recalls today, appointments", "can see, copy, match objects"] }
      ],
      verdict: "Fluent words, missing meaning: a selective dissociation." },
    answer: [
      "(Complete with your own observations.) The woman shows the core picture of semantic dementia: her speech is <b>fluent and grammatically well formed</b>, yet empty of specific content: she uses general terms such as [example] and struggles to name [example].",
      "She also seems not to understand some common words, for example [example], which reflects a <b>loss of conceptual knowledge</b> rather than a pure word-finding problem.",
      "By contrast, [example of intact day-to-day memory / reasoning / perception] shows that her general intellect, everyday memory and perception are <b>relatively spared</b>. This dissociation (meaning lost, other cognition intact) is what makes the disorder selective, and it matches Bozeat et al.'s patients, who could copy complex figures but could not name or draw objects from their names."
    ],
    takeaway: "Semantic dementia is smooth talk and good everyday memory, but ordinary words and objects have lost their meaning.",
    trap: { wrong: "She is just generally forgetful.", right: "SD is a loss of meaning, not of everyday memory; the spared abilities are the point of the contrast." },
    note: "The video could not be opened, so the model answer is a template: fill in the [example] slots with your own observations from the video."
  },

  {
    id: "C2",
    block: "Bron C · Bozeat et al. (2003)",
    title: "Feature listing: birds vs furniture",
    canvas: "Probeer zelf eens om eigenschappen voor een categorie te genereren. Schrijf elk vijf eigenschappen op van vogels en vijf eigenschappen van meubels. Vergelijk de eigenschappen onderling. Stemmen jullie bevindingen overeen met die van Bozeat et al. (2003)? (English: Try generating properties for a category yourself. Each write down five properties of birds and five of furniture. Compare the properties. Do your findings match those of Bozeat et al. (2003)?)",
    asks: "List features for birds and for furniture, notice how much the lists agree and how widely the features apply, then compare that pattern with Bozeat et al.'s finding about shared features.",
    triage: { symptom: "A do-it-yourself feature listing, then 'compare with the paper'.", diagnosis: "Shared vs distinctive features; living things have more shared features (0.59 vs 0.29).", treatment: "Report your lists, state the pattern (agreement, shared vs scattered, perceptual vs functional), link to intrusions and box-like drawings, add the level caveat." },
    visual: { type: "bars", title: "Shared features per item (Bozeat et al., 2003)", unit: "", max: 0.7,
      groups: [
        { label: "Shared features", bars: [ { label: "living things", value: 0.59, tone: "good" }, { label: "artefacts", value: 0.29, tone: "neutral" } ] }
      ],
      note: "Birds: wings, feathers, beak apply to almost all. Furniture: legs, wood apply to only some." },
    answer: [
      "Our <b>bird lists overlapped strongly</b> (wings, feathers, beak, lays eggs, flies), and these features apply to almost all birds. Our furniture lists varied more and consisted of features that apply only to some items (legs, made of wood, used to sit on): a lamp or a rug has no legs.",
      "This mirrors Bozeat et al.'s finding that living things have <b>more shared features</b> than artefacts (0.59 vs 0.29 per item). Bird features are mostly perceptual parts, while furniture features are mostly functional.",
      "Because shared features are the most robust in semantic dementia and the most likely to intrude, patients' animal drawings became <b>prototypical</b> (a duck with four legs), while artefact drawings mainly lost distinctive details and became box-like.",
      "One caveat: furniture is a superordinate category, which shares few features by nature, while 'bird' often acts as a basic level, so the comparison partly reflects category level."
    ],
    takeaway: "Bird lists are clones, furniture lists are a garage sale: exactly Bozeat's shared-feature difference.",
    trap: { wrong: "Listing the features is the answer.", right: "Draw the conclusion (shared vs distinctive), link it to intrusions and box-like drawings, and note that furniture is superordinate." },
    note: "The bird and furniture lists are illustrative examples of what a group typically writes; your own group's lists may differ."
  },

  {
    id: "C3",
    block: "Bron C · Bozeat et al. (2003)",
    title: "Which theory explains the drawings?",
    canvas: "Welke benadering van concept-representaties kan de tekenresultaten van de patiënten in Bozeat et al. (2003) het best verklaren? (English: Which approach to concept representation can best explain the drawing results of the patients in Bozeat et al. (2003)?)",
    asks: "Test each theory of concepts (classical, prototype, exemplar, knowledge) against what the patients' drawings looked like, and choose the one that predicts those results best.",
    triage: { symptom: "'Which theory fits the data best?': an evaluation question.", diagnosis: "Classical, prototype, exemplar, knowledge views vs the findings: distinctive lost first, shared survive and intrude, prototypical animals, within-category errors.", treatment: "List the findings, test each theory against them, pick prototype/feature-based, and name the authors' distributed network." },
    visual: { type: "grid", title: "Does the theory predict the drawings?",
      cols: ["Graded loss", "Shared features intrude", "Verdict"],
      rows: [
        { head: "Classical", cells: ["no", "no", "poor"] },
        { head: "Prototype", cells: ["yes", "yes", "best"] },
        { head: "Exemplar", cells: ["partly", "no", "partial"] },
        { head: "Knowledge", cells: ["no prediction", "no prediction", "not informative"] }
      ] },
    answer: [
      "The results fit a <b>feature-based, prototype (family-resemblance) view</b> best, implemented as a distributed feature network.",
      "Patients <b>lost distinctive features first</b> and kept features shared across a domain; their animal drawings became 'prototypical' and gained intruding shared features, such as four legs on a duck. This is what we expect if concepts are sets of weighted, overlapping features: the shared, high-weight features that make up the prototype are the most robust, so as distinctive information fades the representation collapses toward the prototype.",
      "The <b>classical view</b> cannot explain gradual, graded loss or intrusions. The <b>exemplar view</b> accounts for within-category substitutions but not for domain-level features that no specific exemplar possesses (no duck has four legs), and the knowledge view makes no prediction about which visual features are lost.",
      "Bozeat et al. themselves interpret the data as a unitary but highly distributed conceptual network, in which domain differences arise from how features are distributed (Rogers et al., 2002a)."
    ],
    takeaway: "Erosion reveals the skeleton: as details fade, what remains of a concept is its prototype.",
    trap: { wrong: "Picking a theory without testing it against the findings.", right: "Check each theory against specific results, and mention the distributed-network view the authors actually favour." },
    note: null
  },

  {
    id: "C4",
    block: "Bron C · Bozeat et al. (2003)",
    title: "Why the pattern of correlations matters",
    canvas: "De auteurs van het artikel benadrukken dat de prestatie op de tekentaak correleert met de prestatie op semantische taken, maar niet met de prestatie op bijvoorbeeld het kopiëren van een figuur of intelligentietaken zoals Raven’s matrices. Waarom vinden ze dit zo belangrijk? (English: The authors stress that performance on the drawing task correlates with performance on semantic tasks, but not with, for example, copying a figure or intelligence tasks such as Raven's matrices. Why do they find this so important?)",
    asks: "Explain the logic: what does it prove that bad drawing goes together with bad naming and understanding, but not with bad copying or bad reasoning?",
    triage: { symptom: "'Why does this pattern matter?': a logic-of-evidence question.", diagnosis: "Convergent (r = .96 to .99) and discriminant evidence; dissociation logic; selective, amodal deficit.", treatment: "Say what the correlation rules IN, what the spared tasks rule OUT, then give the three conclusions." },
    visual: { type: "versus", title: "Convergent and discriminant evidence",
      cols: [
        { head: "Goes with drawing", sub: "rules IN", tone: "good", points: ["naming, word-picture matching", "Pyramids & Palm Trees", "r = .96 to .99: same cause"] },
        { head: "Spared", sub: "rules OUT", tone: "neutral", points: ["Rey copy, immediate copy", "delayed copy of geometric shapes", "Raven's matrices"] }
      ],
      verdict: "Drawing is a valid semantic test; SD is selective; one amodal system." },
    answer: [
      "The pattern <b>pins the drawing impairment on semantic memory</b> specifically, by ruling one cause in and the alternatives out.",
      "The very high correlations with naming and word-picture matching (<b>r = .96 to .99</b>) show that drawing, naming and comprehension share a common cause: the degradation of central conceptual knowledge. The relatively preserved performance on copying the Rey figure, immediate copying and delayed copying of meaningless geometric shapes, and on Raven's matrices <b>rules out alternative explanations</b> such as visual, visuospatial or motor impairment, a visual episodic memory problem and general intellectual decline.",
      "Together this dissociation gives three conclusions: poor drawing reflects impoverished concepts, so drawing is a <b>valid non-verbal test</b> of semantic knowledge; semantic dementia is a selective disorder; and because verbal and non-verbal semantic tasks decline together, it supports a <b>unitary, amodal</b> semantic system."
    ],
    takeaway: "Correlates with meaning, not with skill, so the drawing problem is about meaning.",
    trap: { wrong: "The paper reports zero correlations with copying and Raven's.", right: "It reports correlations for the semantic tasks, but for copying and Raven's it reports preserved performance, not correlations." },
    note: null
  },

  {
    id: "C5",
    block: "Bron C · Bozeat et al. (2003)",
    title: "Why letter fluency is an executive test",
    canvas: "De patiënten worden onderworpen aan een uitgebreide testbatterij, waarin ze onder meer een verbal fluency test met de letters F, A, en S afleggen. In deze test dienen deelnemers binnen 1 minuut zoveel mogelijk woorden te bedenken die beginnen met de doelletter. Leg uit waarom deze test wordt omschreven als een test voor executief functioneren. (Hint: probleem 2B) (English: The patients take an extensive test battery, including a verbal fluency test with the letters F, A and S: produce as many words as possible starting with the target letter within one minute. Explain why this test is described as a test of executive functioning. (Hint: problem 2B))",
    asks: "Producing F-words looks like a vocabulary test. Explain why it actually needs your brain's 'manager' (the central executive), and which control processes it uses.",
    triage: { symptom: "'Why does a word test measure executive control?': link back to Problem 2B.", diagnosis: "Central executive; inhibition, updating, shifting; the lexicon is organised by meaning.", treatment: "Explain why letter retrieval cannot run on automatic spreading activation, list the executive steps, then add Bozeat's anomia caveat." },
    visual: { type: "flow", title: "Finding F-words in a meaning-sorted store",
      steps: [
        { h: "Hold the rule", t: "F-words, no names, one minute" },
        { h: "Plan sub-cues", t: "fa-, fe-, fl-, fr-" },
        { h: "Monitor and inhibit", t: "no repeats, no wrong letters" },
        { h: "Shift", t: "new sub-cluster when one runs dry" }
      ],
      verdict: "Inhibition, updating, shifting: the central executive at work." },
    answer: [
      "Letter fluency is an executive task because the <b>lexicon is organised by meaning</b> rather than by initial letter, so words starting with F cannot be retrieved through automatic spreading activation.",
      "Instead, the person must use <b>controlled, strategic retrieval</b> under the central executive: keep the rule active in working memory, generate search strategies (e.g. 'fl-', 'fr-'), monitor and update which words have already been produced, inhibit rule-breaking or repeated responses, and shift to a new subcategory when one is exhausted. This covers the executive functions of <b>inhibition, updating and shifting</b>, and such tasks are sensitive to frontal-lobe function.",
      "However, the task also depends on an intact vocabulary. In Bozeat et al.'s patients, poor letter fluency was attributed to <b>anomia</b> rather than executive dysfunction, showing that fluency scores must be interpreted alongside semantic ability: no test is process-pure."
    ],
    takeaway: "Your word store is sorted by topic, so finding words by first letter needs a search plan run by the central executive.",
    trap: { wrong: "It just measures how many words you know.", right: "It measures control processes (inhibition, updating, shifting); and in SD, low scores reflect anomia, not executive failure." },
    note: "The executive-function framework (central executive, inhibition, updating, shifting) comes from Problem 2B, not from this theme's readings."
  }

  ]
};
