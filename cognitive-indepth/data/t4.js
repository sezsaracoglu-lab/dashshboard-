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
    asks: "Look back at earlier themes, especially short-term memory (Theme 2), and name a place where the meaning of words changed how well we remembered them. Explain how meaning had that effect.",
    triage: { symptom: "'Where did meaning matter before?': a link-back question to earlier themes.", diagnosis: "Theme 2: release from proactive interference (Wickens et al., 1976); also attention and amnesia from earlier problems.", treatment: "Name the Wickens study, give its design and numbers, say what it shows about meaning, then link to semantic networks." },
    visual: { type: "grid", title: "Release from PI (Wickens et al., 1976)",
      cols: ["Overlap with fruit", "Trial 4 recall"],
      rows: [
        { head: "Fruit (control)", cells: ["complete", "low, stayed stuck"] },
        { head: "Vegetables", cells: ["large", "relatively low"] },
        { head: "Flowers / meat", cells: ["one shared feature", "better"] },
        { head: "Occupations", cells: ["none", "best, almost 70%"] }
      ] },
    answer: [
      "Semantics already appeared in <b>short-term memory</b> (Theme 2): chunking is not the only thing that decides how much fits into STM, because the meaning of the words plays a role too. The clearest example is <b>release from proactive interference</b> (Wickens et al., 1976).",
      "Participants did three Brown/Peterson trials, each a list of three words from one category (for example occupations) followed by 18 seconds of counting backwards. Across the three trials, recall dropped from about 90% to about 30% correct, because earlier words interfered with new ones. On trial 4 everyone got three fruits, and the less the earlier category resembled fruit in meaning, the better they did: occupations gave almost 70% correct.",
      "So words already stored hinder new words that are <b>similar in meaning</b>, and the bigger the overlap, the stronger the interference. Meaning also acted in attention (your own name breaking through the filter) and in amnesia, where semantic knowledge can be spared while episodic memory is lost.",
      "The same idea returns this week in <b>semantic networks</b>: concepts that are close in meaning influence each other."
    ],
    takeaway: "Similar meanings get in each other's way in STM; a new meaning gives memory a fresh start.",
    trap: { wrong: "Semantics simply means semantic memory.", right: "Semantics is meaning itself; semantic memory is only one store of it. Meaning already acted in STM (Wickens et al., 1976)." },
    note: "The reader's model answer uses only Wickens et al. (1976) from Theme 2. The attention and amnesia examples come from your own notes on earlier problems."
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
    triage: { symptom: "'Where have we seen general to specific levels before?'", diagnosis: "Murphy's superordinate, basic, subordinate levels; Conway's (2005) autobiographical knowledge base (Theme 3).", treatment: "Name the earlier model, map its levels onto Murphy's, note the accessible middle level, then add the two hierarchies inside Theme 4." },
    visual: { type: "grid", title: "Two hierarchies, level by level",
      cols: ["Murphy (categories)", "Conway (life memory)"],
      rows: [
        { head: "General", cells: ["superordinate: animal", "lifetime period"] },
        { head: "Middle (preferred)", cells: ["basic: bird", "general event"] },
        { head: "Specific", cells: ["subordinate: robin", "event-specific knowledge"] }
      ] },
    answer: [
      "We met a hierarchy in <b>autobiographical memory</b> (Theme 3): Conway's (2005) model of the knowledge structures in autobiographical memory. At the top sits the life story, divided into themes such as work and relationships; below it, the autobiographical knowledge base runs from general to specific (Conway & Pleydell-Pearce, 2000).",
      "<b>Lifetime periods</b> ('my student years in Rotterdam') contain <b>general events</b> ('the weekly drinks with classmates'), which contain event-specific knowledge (the sensory details of one moment). This parallels Murphy's levels: superordinate matches lifetime period, basic matches general event, and subordinate matches event-specific knowledge.",
      "In both, the <b>middle level is especially accessible</b>: people often start free recall with general events (Barsalou, 1988), and the basic level is the preferred level for naming. Within Theme 4 itself, hierarchy appears twice: category hierarchies such as brown bear, bear, mammal, animal, and <b>Warrington's (1975)</b> view that semantic memory is hierarchical, shown by the specific-to-general loss in semantic dementia (duck, swan, bird, animal)."
    ],
    takeaway: "Life story and categories are both Russian dolls, general to specific, with a favourite middle doll.",
    trap: { wrong: "Naming Conway's model is enough.", right: "You must map its levels onto Murphy's and point out the preferred middle level in both." },
    note: "Conway's model comes from Theme 3, not this theme's readings. The level-by-level mapping onto Murphy's levels is own reasoning; the reader names the model and the two Theme 4 hierarchies."
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
    trap: { wrong: "A prototype is simply one real member you have seen.", right: "In the theory it is a summary of weighted features (the most typical member is also called the category prototype), and it can be an average that was never seen (Posner et al., 1967)." },
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
        { head: "Essentialism", sub: "the DNA inside", tone: "accent", points: ["core = hidden, often unknown essence", "essence CAUSES the features", "surface can mislead: Keil's raccoon", "mainly natural kinds", "a belief; most categories have none"] }
      ],
      verdict: "Both: a core all and only members have, all-or-none membership." },
    answer: [
      "Psychological essentialism can be seen as a <b>psychological descendant of the classical view</b>. Both hold that a category has a core that all and only its members possess, both imply <b>all-or-none membership</b> with no middle ground, and both resist changes in category membership.",
      "The difference lies in what decides membership. In the classical view it is the necessary and sufficient features of the object itself; in essentialism it is a <b>hidden essence</b>, often unknown to the person, that is believed to cause the visible features.",
      "So surface features can mislead without changing membership: in <b>Keil (1989)</b>, a raccoon painted black and white and given a stink sac looks like a skunk, yet adults and children over four still call it a raccoon. This does not happen with artefacts: a converted coffeepot is a bird feeder.",
      "They also differ in status. The classical view is a theory of how concepts are built, while essentialism is a <b>belief people hold</b>: most categories have no essence in reality. That belief explains why people think categories are well defined (the outrage over Pluto) even though they cannot give definitions."
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
    triage: { symptom: "A network picture plus a speed difference: 'explain with the model'.", diagnosis: "Spreading activation (Collins & Loftus, 1975): distance in the network, summation, threshold.", treatment: "Walk through the mechanism step by step, read off where swallow and crane sit relative to BIRD, then name the typicality effect." },
    visual: { type: "flow", title: "Why 'a swallow is a bird' is faster",
      steps: [
        { h: "Read 'swallow'", t: "SWALLOW node activates" },
        { h: "Activation spreads", t: "fades with time, distance, crowding" },
        { h: "Summed at BIRD", t: "past threshold: answer 'yes'" },
        { h: "Swallow vs crane", t: "next to BIRD vs at the edge" }
      ],
      verdict: "Shorter distance to BIRD, faster 'yes': the typicality effect." },
    answer: [
      "In a category verification task, <b>reaction time</b> is the informative measure, because the statements are easy and people make almost no errors. In a semantic network, concepts are nodes, and related concepts lie figuratively close together.",
      "According to the <b>spreading-activation model</b> (Collins & Loftus, 1975), reading 'swallow' activates the SWALLOW node. The activation spreads along the links and weakens with time, with distance and with the number of concepts activated at once. The activation arriving at BIRD is summed, and when it passes a <b>threshold</b> you answer 'yes'.",
      "In the network, SWALLOW sits directly next to BIRD, so activation arrives fast and strong. CRANE sits at the edge, mainly near other birds such as stork and heron, so its route to BIRD is long and activation arrives later and weaker. That is the <b>typicality effect</b>: 'a swallow is a bird' is verified faster than 'a crane is a bird'. In Robinson-Riegler's words, the distance between category prototypes and category labels is relatively short."
    ],
    takeaway: "Swallow lives next door to BIRD, crane lives at the edge of town, so the swallow sentence clicks faster.",
    trap: { wrong: "Describing the network picture without the process.", right: "Name the mechanism (spread, weakening, summation, threshold) and say which bird sits closer to BIRD in the network." },
    note: null
  },

  {
    id: "B2",
    block: "Bron B · Robinson-Riegler",
    title: "A typicality effect for features?",
    canvas: "Eigenschapverificatietaken worden gebruikt om na te gaan hoe eigenschappen van categorieën worden opgeslagen en opgehaald. In deze taak verifiëren deelnemers eenvoudige stellingen zoals “Een kanarie is geel” of “Een kanarie zingt”. Bekijk het semantische netwerk hieronder. Op basis hiervan, denk je dat er zoiets bestaat als een typicaliteitseffect voor eigenschappen? (English: Feature verification tasks examine how properties of categories are stored and retrieved: 'A canary is yellow', 'A canary sings'. Look at the semantic network below. Based on it, do you think there is something like a typicality effect for properties?)",
    asks: "Are some properties of a concept checked faster than others, just as some members of a category are? Predict this from the network and explain the mechanism.",
    triage: { symptom: "'Is there a typicality effect for features?': a prediction from the network.", diagnosis: "Feature verification; features differ in how close they lie to the concept (pointy ears vs skin).", treatment: "Say yes, give the mechanism (proximity), cite the cat example, then apply it to yellow (direct link) vs sings (longer route)." },
    visual: { type: "scale", title: "Distance of a feature from its concept", left: "Close: verified fast", right: "Far: verified slowly",
      points: [
        { label: "cat: pointy ears", pos: 12 },
        { label: "canary: yellow", pos: 22, note: "direct, strong link" },
        { label: "canary: sings", pos: 62, note: "via BIRD and SINGING" },
        { label: "cat: has skin", pos: 88 }
      ] },
    answer: [
      "Yes. In a feature verification task the <b>same mechanism</b> works as in category verification: features are nodes too, and the closer a feature lies to the concept, the faster it is verified. Robinson-Riegler's example is that 'A cat has pointy ears' is verified faster than 'A cat has skin', which shows that pointy ears lie closer to the concept 'cat'.",
      "In the network, <b>'yellow' is linked directly and strongly</b> to CANARY, so activation arrives quickly and 'a canary is yellow' is verified fast. 'Sings' belongs to a separate cluster (sing, singing, song) that is connected to CANARY mainly via BIRD and SINGING, so activation has to travel a <b>longer route</b> and 'a canary sings' is verified more slowly.",
      "So features, just like exemplars, differ in how central they are to a concept: a kind of <b>typicality effect for features</b>."
    ],
    takeaway: "Features have favourites too: 'yellow' is the swallow of canary features, 'sings' is the crane.",
    trap: { wrong: "Answering only 'yes'.", right: "Give the mechanism (distance along the links) and apply it to the network: yellow is a direct link, sings is a longer route." },
    note: null
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
    triage: { symptom: "'Apply a clinical description to a case.'", diagnosis: "The SD profile: lost (concepts, vocabulary, comprehension, identification) vs spared (everyday memory, perception, fluency); the mirror image of amnesia.", treatment: "Tick off each element with what she shows, then stress the contrast lost vs spared and name the double dissociation." },
    visual: { type: "versus", title: "What she shows",
      cols: [
        { head: "Lost", sub: "meaning", tone: "bad", points: ["names will not come (anomia)", "general words: bird instead of duck", "typical names stretched to other items", "meaning gone, even seeing the object"] },
        { head: "Spared", sub: "everything else", tone: "good", points: ["talks about her own life", "fluent sentences, few content words"] }
      ],
      verdict: "Meaning lost, life events kept: the mirror image of amnesia." },
    answer: [
      "The description fits her well. Semantic dementia is a <b>highly selective loss of conceptual knowledge</b>, caused by localised temporal-lobe atrophy, while the rest of cognition stays relatively spared, and you can see both sides in the woman.",
      "On the lost side, she <b>cannot retrieve the names</b> of things (anomia, the most striking early symptom) and sometimes no longer knows what a word or object means, even when she sees the object. She uses general words instead of specific ones (bird instead of duck) and <b>overextends</b> the names of familiar, typical items to less familiar items from the same category.",
      "On the spared side, she can still talk about events from her own life, so <b>day-to-day (episodic) memory</b> works, and she speaks in proper, fluent sentences, only with few content words.",
      "This is the <b>mirror image of amnesia</b>: in amnesia episodic memory declines and concepts stay intact, in semantic dementia it is the other way round, a double dissociation. It matches Bozeat et al.'s patients, who could copy complex figures but could not name or draw objects from their names."
    ],
    takeaway: "Semantic dementia is smooth talk and good everyday memory, but ordinary words and objects have lost their meaning.",
    trap: { wrong: "She is just generally forgetful.", right: "SD is a loss of meaning, not of everyday memory; the spared abilities are the point of the contrast." },
    note: "The video could not be opened. The signs above come from the Pass the Year model answer, which describes what to recognise in her but not specific moments; check each one against the video and add a concrete moment if you can."
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
      "Because widely shared features intrude most easily, patients made more intrusions for living things (a duck with four legs), while artefact drawings mainly became simpler and <b>box-like</b>.",
      "Two caveats. Feature listing mainly measures <b>verbalisable knowledge</b>: nameable facts are over-reported and self-evident ones ('a bird has a front and a back') are left out, and in patients with anomia you cannot tell whether the concept or only the word is gone, which is why Bozeat et al. had patients draw. Also, furniture is a superordinate category, while 'bird' often acts as a basic level."
    ],
    takeaway: "Bird lists are clones, furniture lists are a garage sale: exactly Bozeat's shared-feature difference.",
    trap: { wrong: "Listing the features is the answer.", right: "Draw the conclusion (shared vs distinctive), link it to intrusions and box-like drawings, and say why Bozeat et al. used drawing instead of feature listing." },
    note: "The bird and furniture lists are illustrative examples of what a group typically writes; your own group's lists may differ. The category-level caveat is own reasoning."
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
        { head: "Hierarchy (Warrington)", cells: ["specific first only", "no", "not enough"] }
      ] },
    answer: [
      "The results fit a <b>feature-based approach</b> best, in which concepts consist of features running from highly distinctive to widely shared. This comes closest to the prototype view with weighted features and the family resemblance behind it.",
      "Patients <b>lost distinctive features first</b> (the horn of a rhinoceros) and kept widely shared ones longest. Shared features also intruded, so drawings became more 'prototypical' for the domain, such as a duck with four legs: as distinctive information fades, the concept collapses toward its prototype.",
      "Other views fit worse. The <b>classical view</b> cannot explain graded loss or intrusions, and the exemplar view cannot explain domain features that no exemplar has (no duck has four legs). A purely <b>hierarchical model</b> (Warrington, 1975) explains the specific-to-general decline (duck, swan, bird, animal), but not typicality, vague membership, or why some categories (vehicles) are more coherent than others (household items).",
      "Bozeat et al. conclude that semantic dementia is the breakdown of <b>one central, amodal semantic system</b>. The domain effect disappears once distinctiveness is taken into account: living things simply have more shared features (Rogers et al., 2002a)."
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
    triage: { symptom: "'Why does a word test measure executive control?': link back to Problem 2B.", diagnosis: "Problem 2B: Stuss (task setting, monitoring, energisation) and Miyake et al., 2000 (inhibition, shifting, updating); the lexicon is organised by meaning.", treatment: "Say it tests how you search, not what you know; map the task onto Stuss's and Miyake's processes; then add Bozeat's anomia caveat." },
    visual: { type: "flow", title: "Finding F-words in a meaning-sorted store",
      steps: [
        { h: "Task setting", t: "hold the rule, plan fa-, fe-, fi-" },
        { h: "Inhibition", t: "hold back 'water' after 'fish'" },
        { h: "Monitoring and updating", t: "right letter? said already?" },
        { h: "Shifting and energisation", t: "new strategy, keep going a minute" }
      ],
      verdict: "Planning, checking and sustaining the search: executive control." },
    answer: [
      "Letter fluency is an executive task because it is not about <b>what</b> you know but about <b>how</b> you plan, monitor and sustain the search through memory. The lexicon is organised by meaning, not by first letter, so F-words do not come up automatically.",
      "In <b>Stuss's</b> terms the task needs task setting (choose a strategy such as 'fa-, fe-, fi-' and hold on to the rule), monitoring (check the letter and repeats, switch strategy when words dry up) and energisation (keep searching for the full minute). In <b>Miyake et al.'s (2000)</b> terms it needs inhibition (words related in meaning push forward, after 'fish' comes 'water', and must be held back), shifting between strategies, and updating which words you already said. All three rest on the shared ability to keep the task goal active: 'words with this letter'.",
      "However, the task also depends on an intact vocabulary. In Bozeat et al.'s patients, poor letter fluency was attributed to <b>anomia</b> rather than executive dysfunction, so no test is process-pure."
    ],
    takeaway: "Your word store is sorted by meaning, so finding words by first letter needs a search plan that the executive sets, checks and keeps going.",
    trap: { wrong: "It just measures how many words you know.", right: "It measures control processes (task setting, monitoring, inhibition, shifting, updating); and in SD, low scores reflect anomia, not executive failure." },
    note: "Both executive frameworks (Stuss; Miyake et al., 2000) come from Problem 2B, not from this theme's readings. The anomia caveat comes from your notes on Bozeat et al."
  }

  ]
};
