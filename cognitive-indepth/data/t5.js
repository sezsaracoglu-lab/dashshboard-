IDQ[5] = {
  n: 5,
  title: "Mental imagery",
  readings: ["Resources A, B & C: Sternberg et al. (Table 7.1) and the imagery debate", "Besken & Mulligan (2021), the bizarreness effect"],
  intro: "This theme asks one big question: in what format does the mind store knowledge, as pictures, as words, or as abstract meaning? Questions AB1 to AB8 test the theories (dual code, propositional, analog, functional equivalence) against the classic experiments. Questions D1 to D5 use Besken and Mulligan (2021) to test whether the bizarreness effect in memory really runs on images.",
  questions: [
    {
      id: "AB1",
      block: "Resources A, B & C · Representation theories",
      title: "Two codes or one code?",
      canvas: "How are the dual code theory and the propositional theory illustrated in Table 7.1? Explain the difference between the dual code theory and the propositional theory.",
      asks: "Look at the three columns of Table 7.1 and say which columns belong to which theory. Then explain how the two theories disagree about how knowledge is stored.",
      triage: { symptom: "'How illustrated in Table 7.1' plus 'explain the difference'", diagnosis: "Compare two theories using a table", treatment: "Map each column onto a theory, then contrast the number of codes, what images are, and how retrieval works." },
      visual: { type: "versus", title: "Table 7.1 through two theories",
        cols: [
          { head: "Dual code (Paivio)", sub: "words + image columns", tone: "good", points: ["two codes: verbal and analog", "same fact stored twice", "images are a real code"] },
          { head: "Propositional (Pylyshyn)", sub: "proposition column", tone: "accent", points: ["one abstract meaning code", "Bite (mouse, cat)", "images are epiphenomena"] } ],
        verdict: "Two modality-specific codes versus one amodal code." },
      answer: [
        "Table 7.1 shows each relationship (action, attribute, spatial position, class membership) in three ways: in <b>words</b>, as a <b>proposition</b> and as an <b>image</b>. The words column plus the image column illustrate dual-code theory; the middle proposition column illustrates propositional theory.",
        "<b>Dual-code theory</b> (Paivio) says we have two separate codes: a verbal (symbolic) code and an imaginal (analog) code, each storing information in its own format. Images are a real code, supported by evidence such as concrete words and Brooks' selective interference.",
        "<b>Propositional theory</b> (Pylyshyn; Anderson & Bower) says a relationship is stored only once, as abstract meaning, for example Bite (mouse, cat). Both pictures and sentences are stored as propositions and re-created at retrieval (Clark & Chase, 1972), so images are <b>epiphenomena</b>, by-products.",
        "So the key difference is two modality-specific codes versus one amodal code. Note that the predicate calculus is only shorthand, not the literal form in the mind, and people may use both kinds of representation (Talasli, 1990)."
      ],
      takeaway: "Dual coding stores the same fact twice, as a picture and a word; propositional theory stores it once, as meaning.",
      trap: { wrong: "Propositions are just words in the head.", right: "Propositions are abstract meaning, not tied to any language; words only express them." },
      note: null
    },
    {
      id: "AB2",
      block: "Resources A, B & C · Representation theories",
      title: "Sorting the terms for representations",
      canvas: "The resources present an abundance of terminology to describe representations. Draw a schematic in which the following terms are organized in a meaningful way: analog, depictive, mental image, proposition, symbol, verbal, word.",
      asks: "Put seven terms in a tree that makes sense. You need one organising rule that splits them, and then place each term in the right branch.",
      triage: { symptom: "'Draw a schematic ... organise the terms'", diagnosis: "Classification: the analog family versus the symbolic family of codes", treatment: "Split by resemblance (analog/depictive vs symbolic), then place the examples and levels under each branch." },
      visual: { type: "grid", title: "The dividing line: does it resemble?",
        cols: ["Resembles its object?", "Branch"],
        rows: [
          { head: "Analog = depictive", cells: ["yes", "analog"] },
          { head: "Mental image", cells: ["yes", "analog example"] },
          { head: "Symbol", cells: ["no", "symbolic"] },
          { head: "Verbal code", cells: ["no", "symbolic, language-specific"] },
          { head: "Word", cells: ["no", "unit of verbal code"] },
          { head: "Proposition", cells: ["no", "symbolic, amodal meaning"] } ] },
      answer: [
        "The organising principle is <b>resemblance</b>: does the representation look like what it stands for? This splits the terms into an analog branch and a symbolic branch.",
        "<b>Analog</b> and <b>depictive</b> are synonyms: the representation resembles its object and keeps its physical and spatial relations, like an analog clock. The typical example is a <b>mental image</b>. A <b>symbol</b> is the opposite: it is chosen arbitrarily and does not resemble what it stands for, like '9' or a digital clock.",
        "Inside the symbolic branch, the <b>verbal</b> code is language-specific and its units are words. A <b>proposition</b> is also symbolic but amodal: the abstract meaning behind a relationship, such as Bite (mouse, cat), which is neither a word nor an image. Words (and images) can express propositions.",
        "This links to the theories: dual-code theory uses the mental image and the word branches, propositional theory says everything is ultimately stored as propositions, and the imagery debate is analog versus propositional."
      ],
      takeaway: "Picture = looks like it; word = stands for it; proposition = what it means.",
      trap: { wrong: "Analog and depictive are two separate branches.", right: "They are synonyms, so they belong in one box." },
      note: null
    },
    {
      id: "AB3",
      block: "Resources A, B & C · Representation theories",
      title: "Why 'buzz' is an unusual word",
      canvas: "Explain why 'onomatopea' are atypical words.",
      asks: "Normal words have nothing to do with what they mean. Explain what is different about sound words like 'buzz', using the analog versus symbolic distinction.",
      triage: { symptom: "'Why atypical words?'", diagnosis: "Apply the analog vs symbolic distinction to a special case", treatment: "State what a typical word is (an arbitrary symbol), then show that onomatopoeia resemble their referent." },
      visual: { type: "scale", title: "From arbitrary to resembling", left: "Arbitrary symbol", right: "Resembles (analog)",
        points: [ { label: "'dog'", pos: 8, note: "sounds nothing like a dog" }, { label: "'buzz', 'woof'", pos: 60, note: "sounds like it, partly conventional" }, { label: "Mental image", pos: 94, note: "resembles the object" } ] },
      answer: [
        "Onomatopoeia are atypical because their form <b>resembles</b> what they represent: the word sounds like the sound it names. Normal words do not do this.",
        "Typical words are <b>symbolic codes</b>: a symbol is chosen arbitrarily to stand for something it does not perceptually resemble (Sternberg et al.). Nothing about the sound of 'dog' resembles a dog. Words like buzz, cuckoo, splash and meow break this rule, and resemblance is the defining property of an <b>analog code</b>.",
        "So onomatopoeia are a <b>hybrid</b>: they are verbal units of a language with an analog element, which blurs the clean dual-code split between symbolic words and analog images. They are still partly conventional (an English dog says 'woof', a Dutch dog 'waf'), so the resemblance is approximate, not a copy."
      ],
      takeaway: "Onomatopoeia are words that partly work like analog codes.",
      trap: { wrong: "Onomatopoeia are fully analog.", right: "They differ between languages, so they are still partly conventional symbols." },
      note: null
    },
    {
      id: "AB4",
      block: "Resources A, B & C · Representation theories",
      title: "The flying eagle (Zwaan et al., 2002)",
      canvas: "In a study by Zwaan et al. (2002) the sentence “The ranger saw an eagle in the sky.” was presented to participants, followed by one of the pictures below. The participants’ task was to indicate whether the item depicted in the picture was mentioned in the preceding sentence. Participants took longer to respond to the picture on the left than to the picture on the right. Which type of representation does this finding support and why?",
      asks: "Both pictures show an eagle, so the answer is 'yes' both times, but one picture was slower. Say which theory predicts that slowdown and why.",
      triage: { symptom: "'Which type of representation does this finding support?'", diagnosis: "Theory testing: what each theory predicts for a reaction-time difference", treatment: "State the prediction of the analog view and of the propositional view, then match the result to one of them." },
      visual: { type: "versus", title: "What each theory predicts",
        cols: [
          { head: "Propositional", sub: "SEE(ranger, eagle)", tone: "bad", points: ["wing shape is not coded", "both pictures equally fast", "does not fit the result"] },
          { head: "Analog simulation", sub: "picture-like scene", tone: "good", points: ["implied shape: wings spread", "folded wings mismatch", "mismatch is slower: fits"] } ],
        verdict: "Supports analog representation and functional equivalence." },
      answer: [
        "The finding supports an <b>analog</b> (picture-like) representation and functional equivalence. Both pictures show an eagle, so the correct answer is 'yes' both times; the only difference is the <b>shape</b>. The sentence implies a flying eagle with spread wings, and the slower picture showed an eagle with folded wings (perched).",
        "The <b>propositional</b> prediction: the sentence is stored as abstract meaning, for example SEE(ranger, eagle), LOCATION(eagle, sky). Wing shape is not part of that meaning, so both pictures should be verified equally fast.",
        "The <b>analog</b> prediction: readers build a picture-like simulation of the scene, including the eagle's implied shape. A picture that mismatches this simulation conflicts with it, so verification is slower.",
        "The mismatching picture was indeed slower, so readers built a simulation. This fits analog imagery, functional equivalence and also dual coding, but it is hard to explain with a purely propositional code."
      ],
      takeaway: "Understanding a sentence seems to create a picture-like simulation with details that were never stated.",
      trap: { wrong: "It supports propositions because the task was verbal.", right: "Propositions do not code shape, so they predict no difference; the difference points to an analog simulation." },
      note: null
    },
    {
      id: "AB5",
      block: "Resources A, B & C · Representation theories",
      title: "Which code fits the computer metaphor?",
      canvas: "Which type of representation fits best with the computer metaphor that guided a lot of theorizing about cognitive psychology in the last century?",
      asks: "Last century, psychologists saw the mind as a computer. Say which type of representation works most like data in a computer, and explain why.",
      triage: { symptom: "'Which type fits the computer metaphor?'", diagnosis: "Match a theory to a metaphor", treatment: "Name what computers do (manipulate symbols by rules), then find the representation with those same properties." },
      visual: { type: "map", title: "Why propositions fit the computer", center: "Propositions = the mind's machine code",
        branches: [ { h: "Discrete symbols", t: "syntax like program code" }, { h: "One data format", t: "stores pictures and sentences alike" }, { h: "No mind's eye", t: "meaning stored without modality" }, { h: "Images fit less", t: "rotating, scanning suit analog devices" } ] },
      answer: [
        "The <b>propositional</b> representation fits best. The 20th-century <b>computer metaphor</b> sees the mind as an information processor that manipulates discrete symbols according to formal rules (compare Newell & Simon's simulations).",
        "Propositions are abstract, amodal, language-like symbol structures (<b>'mentalese'</b>) with a clear syntax, [relation](subject, object), exactly like statements in a program. Pylyshyn, the main propositionalist, explicitly argued for this computational view. One format can store both pictures and sentences, just as a computer stores any data as code, and images are only by-products of the computation (epiphenomena).",
        "<b>Analog images</b>, which are rotated and scanned through intermediate states, fit an analog device better than a digital computer. That mismatch is partly why the imagery debate was so heated."
      ],
      takeaway: "Computers store BITE(mouse, cat), not pictures of mice.",
      trap: { wrong: "The verbal code fits best, because computers use words.", right: "Words are language-specific; propositions are abstract symbols, which is what a computer manipulates." },
      note: null
    },
    {
      id: "AB6",
      block: "Resources A, B & C · Representation theories",
      title: "Fly-sized elephant, rabbit-sized ant",
      canvas: "Imagine a fly-sized elephant standing next to a rabbit-sized ant. Which animal does your mind’s eye see in more detail and what does this tell you about the functional equivalence hypothesis?",
      asks: "Say which animal looks sharper in your mental picture, and explain what that shows about whether we use images the way we use real seeing.",
      triage: { symptom: "'Which do you see in more detail ... what does it tell you about FE?'", diagnosis: "Image scaling (Kosslyn, 1975)", treatment: "Answer with image size, cite Kosslyn's animal pairs, then explain what functional equivalence predicts." },
      visual: { type: "versus", title: "Size on the mental screen decides detail",
        cols: [
          { head: "Fly-sized elephant", sub: "small in the image", tone: "neutral", points: ["few details visible", "you need to zoom in"] },
          { head: "Rabbit-sized ant", sub: "large in the image", tone: "good", points: ["lots of detail", "imagined size counts, not real size"] } ],
        verdict: "Images are inspected like percepts: functional equivalence." },
      answer: [
        "You see the <b>ant</b> in more detail. It takes up a larger part of the image than the fly-sized elephant, even though real ants are tiny and real elephants are huge.",
        "This mirrors <b>Kosslyn (1975)</b>: questions about a rabbit were answered more slowly when it was imagined next to an elephant or an elephant-sized fly (small in the image) than next to a fly or a fly-sized elephant (large in the image).",
        "The <b>functional equivalence</b> hypothesis says we use mental images the same way we use percepts. In perception, details of large (near) objects are easier to see because resolution is limited. The same holds for the 'mental screen': image size, not knowledge about the object, determines access to detail.",
        "A purely propositional code ('ANT has antennae') would make the fact equally available whatever the imagined size, so the effect supports analog, perception-like images."
      ],
      takeaway: "Big on the mental screen = sharp; small = blurry, exactly as in vision.",
      trap: { wrong: "The elephant, because elephants are bigger.", right: "Only the size in the image matters, and here the ant is the big one." },
      note: null
    },
    {
      id: "AB7",
      block: "Resources A, B & C · Representation theories",
      title: "Your own mental rotation experiment",
      canvas: "Conduct an experiment on mental rotation yourself using this web application (settings: 3 rotation angles; 5 trials/condition). In the experiment, you will see the letter R show up to the left and right of the fixation cross (+) and you must determine as quickly and as accurately as possible whether these two Rs are the same or whether they are mirrored (Z = same, M = mirrored; no practice trials). Inspect the results. Are they in line with the results of earlier mental rotation studies? Why (not)?",
      asks: "Compare your own reaction times at 0°, 90° and 180° with the classic result, and explain why your small experiment may or may not match it.",
      triage: { symptom: "'Inspect the results ... in line with earlier studies? Why (not)?'", diagnosis: "Replication of Shepard & Metzler (1971)", treatment: "State the expected pattern (RT rises with angle), compare your own data, then explain deviations with design features." },
      visual: { type: "flow", title: "The expected rotation pattern",
        steps: [ { h: "0°", t: "fastest: no rotation needed" }, { h: "90°", t: "slower: rotate a quarter turn" }, { h: "180°", t: "slowest: rotate half a turn" }, { h: "Deviations?", t: "5 trials, no practice, strategies" } ],
        verdict: "More turn, more time: RT rises roughly linearly." },
      answer: [
        "Earlier studies (<b>Shepard & Metzler, 1971</b>; replicated with letters, e.g. Cooper & Shepard) found that reaction time rises roughly <b>linearly</b> with the angle between the two figures, so 0° is fastest and 180° slowest. If your data show this, they are in line with earlier research and support the analog view: you rotate the image through intermediate positions.",
        "Your data might deviate because of the design. There were only <b>5 trials per condition</b>, so one slow trial distorts a mean. There was no practice, so early trials are slow; only three angles make linearity hard to judge; and letters can be solved with feature strategies ('where is the tail?') instead of rotation. Mixing 'same' and 'mirror' trials, fatigue, distraction or pressing the wrong key add noise.",
        "To judge fairly, look at correct 'same' trials, use medians, and compare with your group's pooled data. A small, noisy experiment can still show the rotation effect, but these limits explain any deviation."
      ],
      takeaway: "More turn, more time: a linear rise in RT supports an analog image being rotated.",
      trap: { wrong: "Just describe your own numbers.", right: "You must compare them to the expected pattern and explain why linear RTs support the analog code." },
      note: "Your own results come from your personal experiment, not from the readings."
    },
    {
      id: "AB8",
      block: "Resources A, B & C · Representation theories",
      title: "20 miles or 80 miles?",
      canvas: "In one experiment, participants studied a map that depicted (among other things) a sandy bay and a telephone mast. On the map of half of the participants, the distance between the bay and the mast was indicated as 20 miles. On the map of the other half of the participants, it was indicated as 80 miles. Except for the number that indicated the distance between the two landmarks, the maps were identical (that is, the physical distance on the map between the bay and the mast was identical). When they were later invited to mentally travel from the telephone mast to the bay, participants in the 80 mile condition took longer than participants in the 20 mile condition. Is this evidence that maps are visually represented or not?",
      asks: "The two maps looked exactly the same; only the number differed. Decide whether a longer mental trip for '80 miles' shows that people store a visual picture of the map.",
      triage: { symptom: "'Is this evidence that maps are visually represented?'", diagnosis: "Evaluate a variant of image scanning (Kosslyn et al., 1978)", treatment: "Recall the original scanning logic, ask what differs between the maps (only the number), and say what that implies." },
      visual: { type: "versus", title: "Three readings of the result",
        cols: [
          { head: "Visual copy", sub: "photo of the map", tone: "bad", points: ["maps identical", "predicts equal times", "does not fit"] },
          { head: "Tacit knowledge", sub: "Pylyshyn", tone: "accent", points: ["people simulate what they know", "80 miles should take longer"] },
          { head: "Constructed image", sub: "analog reply", tone: "neutral", points: ["image built from knowledge", "not a photocopy"] } ],
        verdict: "Knowledge, not appearance, set the travel time." },
      answer: [
        "No, this is not evidence for a purely <b>visual</b> representation. In Kosslyn et al. (1978), longer physical distances on the studied map gave longer scan times, which was taken as evidence for a picture-like image.",
        "Here the maps were <b>visually identical</b>; only the number (20 vs 80 miles) differed. If people simply scanned a visual copy of the map, scan times should have been equal. They were not, so conceptual knowledge of the distance shaped the scan. That fits the propositional critique, Pylyshyn's <b>tacit knowledge</b> (people simulate what they know travel should take), and worries about task demands.",
        "An analog theorist can reply that images are <b>constructed</b> from all available knowledge, so the image may encode the represented distance spatially. Either way, the image is not a photocopy of what was seen. The balanced conclusion: knowledge, not just visual appearance, determines mental travel time, which weakens a purely visual reading of scanning studies."
      ],
      takeaway: "Same picture, different number, different travel time: knowledge drives the trip.",
      trap: { wrong: "Yes, it is visual, because scanning time increased.", right: "The maps were identical, so the extra time must come from knowledge, not from the picture." },
      note: null
    },
    {
      id: "D1",
      block: "Resource D · Besken & Mulligan (2021)",
      title: "Why switch from DVN to tapping?",
      canvas: "In Experiment 1 of the article, dynamical visual noise was used as a distraction task. In Experiment 2 this was changed to the spatial tapping task. What was the reason for this change?",
      asks: "Explain what was wrong or limited with dynamic visual noise in Experiment 1, and how spatial tapping in Experiment 2 fixed it.",
      triage: { symptom: "'What was the reason for this change?'", diagnosis: "Methods question: a design choice between experiments", treatment: "Describe the problem with Experiment 1, then show how tapping solves it." },
      visual: { type: "grid", title: "Exp 1 versus Exp 2",
        cols: ["Exp 1: DVN", "Exp 2: tapping"],
        rows: [
          { head: "Sentences can be read", cells: ["no", "yes"] },
          { head: "Control shows the effect", cells: ["no", "yes"] },
          { head: "Active task", cells: ["no", "yes"] },
          { head: "Sample", cells: ["smaller", "N = 60"] } ] },
      answer: [
        "The first reason is <b>modality</b>. DVN is a visual display, so in Experiment 1 the sentences had to be heard by the distraction group. The matched auditory control then showed <b>no bizarreness effect</b>, while almost all earlier research used visual presentation. You cannot test whether distraction reduces an effect that is absent in the control.",
        "Spatial tapping uses the <b>hands</b>, not the eyes, so the sentences can be read on screen in both groups, which guarantees a robust effect in the control condition.",
        "The second reason is <b>passivity</b>. DVN only requires looking at flickering squares, with no response. Spatial tapping is an active visuospatial task with repeated responses that may reduce visual working memory more than DVN (Andrade et al., 2002), so it is a more rigorous test of the imagery hypothesis. The authors also increased the sample to N = 60 for more power."
      ],
      takeaway: "The switch made the control condition work and made the distraction harder to ignore.",
      trap: { wrong: "DVN simply did not work.", right: "The real problem was that the auditory control showed no bizarreness effect to reduce." },
      note: null
    },
    {
      id: "D2",
      block: "Resource D · Besken & Mulligan (2021)",
      title: "What carries the bizarreness effect?",
      canvas: "The results of the experiments indicate a very limited role of visual imagery in the bizarreness effect. What does this tell you about the involvement of the different types of mental representation discussed in the first resources of this problem?",
      asks: "Blocking visual imagery did not change the bizarreness effect. Say which kinds of representation (imaginal, verbal, propositional) can and cannot explain the effect now.",
      triage: { symptom: "'What does this tell you about the different types of representation?'", diagnosis: "Link a study to the theories (dual code, propositional, analog)", treatment: "Rule out the imaginal code, show which codes remain, then say what that means for the theories." },
      visual: { type: "versus", title: "Which code survives the distractors?",
        cols: [
          { head: "Imaginal / analog", sub: "sketchpad loaded", tone: "bad", points: ["effect unchanged", "little role"] },
          { head: "Verbal (dual code)", sub: "left intact", tone: "good", points: ["could carry the effect"] },
          { head: "Propositional", sub: "meaning, amodal", tone: "good", points: ["odd relations need semantic analysis", "likely basis"] } ],
        verdict: "The effect lives in meaning, not pictures." },
      answer: [
        "The distractors selectively loaded visual and visuospatial working memory, yet the bizarreness effect was unchanged. So the <b>imaginal (analog) code</b> contributes little to this effect.",
        "What remains are non-imaginal representations: the <b>verbal code</b> of dual-code theory, or abstract <b>propositional</b>/semantic representations of meaning. The authors suggest that bizarre sentences get more verbal or semantic processing, to understand the odd relations among the nouns. In imagery-debate terms this fits the propositional side: the meaning, for example FLOAT(banker, newspaper, puddle), not a picture, makes the sentence memorable.",
        "This does not show that images do not exist: DVN does eliminate the <b>concreteness effect</b>, which is an imagery effect. Different memory effects rely on different representations, and selective interference (Brooks, 1968; Segal & Fusella) is the tool to find out which."
      ],
      takeaway: "Block the pictures, keep the meaning: the effect survives, so it lives in the meaning.",
      trap: { wrong: "So imagery does not exist at all.", right: "The concreteness effect is disrupted by DVN, so images matter for other effects, just not this one." },
      note: null
    },
    {
      id: "D3",
      block: "Resource D · Besken & Mulligan (2021)",
      title: "Which part of working memory?",
      canvas: "The authors use a visual and a spatial distractor task in Experiment 1 and Experiment 2, respectively. Based on this choice of distractor tasks, which component of Baddeley’s working memory model do you think they PRESUME is involved in the bizarreness effect?",
      asks: "Look at what the distractor tasks were built to block, and name the part of Baddeley's working-memory model the authors assume does the imagery work.",
      triage: { symptom: "'Which component ... do they PRESUME?'", diagnosis: "Link methods to Baddeley & Hitch's working-memory model", treatment: "Identify what DVN and tapping load, and what they deliberately leave free." },
      visual: { type: "map", title: "What each task loads", center: "Presumed: visuo-spatial sketchpad",
        branches: [ { h: "DVN", t: "visual part (visual cache)" }, { h: "Spatial tapping", t: "spatial part (inner scribe)" }, { h: "Visual span task", t: "visual storage (Exp 3-4)" }, { h: "Phonological loop", t: "deliberately left free" } ] },
      answer: [
        "They presume the <b>visuo-spatial sketchpad</b> is involved. Baddeley & Hitch's model has a central executive, a phonological loop and a visuo-spatial sketchpad (later also an episodic buffer).",
        "DVN loads the visual part of the sketchpad (<b>visual cache</b>), spatial tapping loads its spatial part (<b>inner scribe</b>), and the visual span task (Exp 3-4) loads visual storage. None of them should affect the <b>phonological loop</b> or verbal processing, which is why the sentences can still be read and understood.",
        "So the logic is: if the bizarreness effect were imagery-based, loading the sketchpad should reduce it. Footnote 1 says the tasks come from this model; the authors add that newer work doubts a separate visual store (Morey, 2018), but their test only needs tasks that selectively impair visuospatial processing."
      ],
      takeaway: "Jam the sketchpad, leave the loop: the design tests the picture route only.",
      trap: { wrong: "The phonological loop.", right: "The loop was deliberately spared so the sentences could still be processed." },
      note: null
    },
    {
      id: "D4",
      block: "Resource D · Besken & Mulligan (2021)",
      title: "Why bizarre scenes feel less vivid",
      canvas: "Why are the vividness ratings of the bizarre sentences lower compared to those of the common sentences? [Hint: Your knowledge of the previous problem on semantic memory might come in handy here.]",
      asks: "Bizarre sentences were rated as less vivid images. Use what you know about semantic memory to explain why odd scenes are harder to picture.",
      triage: { symptom: "'Why lower vividness?' plus the hint 'semantic memory'", diagnosis: "Apply semantic-memory concepts (networks, schemas, typicality) to a result", treatment: "Explain how common scenes are supported by stored knowledge and bizarre ones are not, then link to the imagery account." },
      visual: { type: "versus", title: "Stored scene or built from scratch?",
        cols: [
          { head: "Common", sub: "'dog chased bicycle'", tone: "good", points: ["matches schemas and prototypes", "strong network links", "fluent, rich, vivid image"] },
          { head: "Bizarre", sub: "'dog rode bicycle'", tone: "bad", points: ["no stored links", "built from parts, slower", "less complete, less vivid"] } ],
        verdict: "Weaker image, yet better memory: against the imagery account." },
      answer: [
        "In all experiments bizarre sentences got <b>lower vividness ratings</b> (e.g. 2.99 vs 3.58) and slower rating times than common sentences. The reason lies in semantic memory.",
        "Common scenes ('the dog chased the bicycle') match existing <b>schemas</b> and scripts, prototypes and strongly associated concepts in the semantic network, with <b>spreading activation</b> from dog to chase. Retrieving and assembling such an image is fluent and draws on many stored details, so it feels vivid.",
        "Bizarre scenes ('the dog rode the bicycle') combine concepts with no stored links that violate world knowledge. There is no ready-made representation, so the image must be <b>constructed</b> from parts. That takes longer and is less complete, so it feels less vivid.",
        "This matters: bizarre items are the weaker imagery condition, yet they are remembered better. That argues against the account that bizarre sentences are remembered better because they produce stronger images."
      ],
      takeaway: "Familiar scenes are easy to picture because semantic memory already holds them; bizarre ones must be built.",
      trap: { wrong: "Bizarre images are more distinctive, so more vivid.", right: "The data show the opposite: bizarre sentences were rated less vivid." },
      note: null
    },
    {
      id: "D5",
      block: "Resource D · Besken & Mulligan (2021)",
      title: "Did the distractors really block imagery?",
      canvas: "Have you noticed that the experiments contain a contradictory element? While the distractor tasks are meant to disrupt and perhaps prevent the formation of visual imagery, participants are still expected to rate the vividness of their mental images. Inspect the absolute vividness ratings in Table 1 and decide whether the distractor tasks had the intended effects. Do you agree with the authors’ conclusion about the limited role of visual imagery in the bizarreness effect?",
      asks: "Check in Table 1 whether vividness went down under distraction, as it should if imagery was blocked. Then give your own reasoned verdict on the authors' conclusion.",
      triage: { symptom: "'Inspect Table 1 ... intended effects? Do you agree?'", diagnosis: "Evaluate a manipulation check and a conclusion", treatment: "Read the numbers, judge the manipulation, weigh the authors' counter-arguments, then give a reasoned verdict." },
      visual: { type: "bars", title: "Bizarre-sentence vividness, Table 1", unit: "", max: 5,
        groups: [
          { label: "Exp 2", bars: [ { label: "control", value: 2.82, tone: "neutral" }, { label: "tapping", value: 3.36, tone: "bad" } ] },
          { label: "Exp 3", bars: [ { label: "control", value: 2.92, tone: "neutral" }, { label: "span task", value: 3.10, tone: "bad" } ] } ],
        note: "Ratings did not drop under distraction (common sentences: Exp 2 4.06 vs 4.17, Exp 3 4.03 vs 3.96)." },
      answer: [
        "Judged by the ratings, the distractors did <b>not clearly work</b>. Vividness was not lower under distraction: Exp 1 DVN 3.01/3.84 vs controls 2.99/3.58 and 2.91/4.01; Exp 2 tapping 3.36/4.17 vs control 2.82/4.06 (even higher); Exp 3 span 3.10/3.96 vs 2.92/4.03. This is a problem, because the conclusion 'imagery plays little role' assumes imagery was disrupted.",
        "The authors defend themselves: the tasks are <b>validated</b> selective disruptors (DVN eliminates the concreteness effect); vividness <b>RTs were slower</b> under distraction (e.g. 1,106 vs 839 ms); in a between-subjects design people cannot compare their image with an undistracted one, so ratings may not shift; and in Exp 3-4 the distractor did lower overall recall, but not the bizarreness effect.",
        "One defensible verdict is to <b>partly agree</b>. The convergent nulls across four tasks plus Bayes factors (BF01 ≈ 11-14) make a large imagery role unlikely, but imagery may have been only partly disrupted. A within-subject manipulation check, an objective imagery measure, or a stronger visual task would make the conclusion firmer."
      ],
      takeaway: "Unchanged vividness ratings weaken, but do not overturn, the conclusion that imagery plays a limited role.",
      trap: { wrong: "Simply agree or disagree.", right: "You must quote Table 1 and weigh the authors' counter-arguments before giving a verdict." },
      note: "The verdict ('partly agree') is reasoned evaluation, one defensible answer, not a fixed fact from the article."
    }
  ]
};
