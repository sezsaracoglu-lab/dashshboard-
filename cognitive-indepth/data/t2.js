IDQ[2] = {
  n: 2,
  title: "Working memory",
  readings: ["Matlin & Farmer, Ch. 4 (short-term and working memory)", "Eysenck & Keane, Ch. 6 (working memory)", "McGonnell et al. (2024), working memory and children's arithmetic"],
  intro: "These questions move from the old idea of a short-term store (capacity, chunking, forgetting, the serial-position curve) to Baddeley and Hitch's working-memory model with its separate components. The last block applies the model to children: how the components are measured with the AWMA and how they relate to math.",
  questions: [
    {
      id: "A1",
      block: "Block A · Matlin & Farmer",
      title: "Why CIAIBMAEG is hard, and the fix",
      canvas: "Why is the set of letters C, I, A, I, B, M, A, E, and G difficult to remember and how would you go about overcoming this difficulty?",
      asks: "Why is this string of nine letters too much for short-term memory, and what trick turns it into something easy to hold?",
      triage: { symptom: "A letter string plus 'why hard, how to fix?'", diagnosis: "STM capacity (7 ± 2, or about 4), chunking (Miller) and phonological similarity", treatment: "Count the items against capacity, explain why they are hard, regroup them into known chunks, then add rehearsal." },
      visual: { type: "versus", title: "9 letters or 3 chunks?",
        cols: [ { head: "C I A I B M A E G", sub: "as presented", tone: "bad", points: ["9 unrelated letters, at or above 7 ± 2", "no meaning", "C, E, G sound alike"] },
                { head: "CIA · IBM · AEG", sub: "chunked", tone: "good", points: ["3 familiar acronyms", "well within capacity", "rehearse with a rhythm"] } ],
        verdict: "Chunking only works if the acronyms are already in LTM." },
      answer: [
        "The string is hard because it consists of <b>nine unrelated letters</b>, which is at or above the limit of short-term memory: about seven plus or minus two items (Miller, 1956), or about four when chunking is not possible (Cowan, 2005).",
        "Presented letter by letter, the items have no meaning, so there are no chunks. Several letters also sound alike (C, E, G), which adds <b>phonological similarity</b> and makes them easier to confuse.",
        "The fix is <b>chunking</b>: regroup the letters into CIA, IBM and AEG, three familiar acronyms already stored in <b>long-term memory</b>. Now only three chunks need to be held, and they can be rehearsed in the phonological loop, for example with a rhythm. Chunking works only if the person recognises the acronyms."
      ],
      takeaway: "Nine random letters overflow STM; three known acronyms fit easily.",
      trap: { wrong: "It is hard simply because it is more than seven items.", right: "You must also explain chunking and that it relies on knowledge in long-term memory." },
      note: null
    },
    {
      id: "A2",
      block: "Block A · Matlin & Farmer",
      title: "List position and the forgotten shopping",
      canvas: "Your mum left you a shopping list with 14 items on the fridge door. You head to the store, confident that you remember what is on the list. When you return home, it appears you have forgotten to buy half the items on the list. Would you expect there to be a relationship between what you remembered to buy and where the items were positioned on the list?",
      asks: "Does where an item was on the list predict whether you remembered it? Think of the serial-position curve, and what the walk to the shop does to it.",
      triage: { symptom: "A real-life list plus 'relationship with position?'", diagnosis: "Serial-position effect: primacy and recency, plus the effect of a delay", treatment: "Predict a U-shape, explain primacy and recency, then note that the walk to the store weakens recency." },
      visual: { type: "grid", title: "Which items survive the walk to the shop?",
        cols: ["Recalled at once", "After the walk"],
        rows: [ { head: "First items", cells: ["yes", "yes"] }, { head: "Middle items", cells: ["no", "no"] }, { head: "Last items", cells: ["yes", "no"] } ] },
      answer: [
        "Yes. A <b>serial-position effect</b> is expected: the chance of remembering an item depends on where it was on the list (Rundus, 1971), and the middle items are the most likely to be forgotten.",
        "The first items should be remembered best (<b>primacy</b>): they were read and rehearsed most often and did not compete with earlier items, so they are likely to be in long-term memory. The last items benefit from <b>recency</b> when you recall immediately, because they are still in short-term memory.",
        "However, the walk to the store is a <b>delay filled with other activity</b>, and short-term memory content is lost without rehearsal (Brown/Peterson findings). This should remove much of the recency advantage, while primacy stays.",
        "So the forgotten half would mostly be the middle and later items, unless items were grouped by meaning (all dairy together) or were especially distinctive."
      ],
      takeaway: "Start remembered, middle lost, and the end only survives if you recall quickly.",
      trap: { wrong: "Just say 'yes, a U-shape'.", right: "The delay before shopping matters: it wipes out much of the recency effect." },
      note: "Applying the delay to the shopping trip and the semantic-grouping point are reasoning from the readings, not a study of shopping lists."
    },
    {
      id: "A3",
      block: "Block A · Matlin & Farmer",
      title: "Holding 7, yet losing 3 in 5 s",
      canvas: "Miller established that we can hold 7 (give or take 2) items in short term memory. Yet, participants that partake in the Brown/Peterson and Peterson technique in which they only have to remember three words or letters, forget half after a mere 5 second delay (see Figure 4.1). How do you explain this?",
      asks: "Two findings seem to clash: STM holds about 7 items, yet people lose half of just 3 items in 5 seconds. Explain why both can be true.",
      triage: { symptom: "Two findings that seem to contradict each other", diagnosis: "Capacity vs duration; rehearsal prevention; proactive interference", treatment: "Show that the tasks measure different things, name rehearsal prevention and PI, then resolve the paradox." },
      visual: { type: "versus", title: "Capacity vs duration",
        cols: [ { head: "Miller span", sub: "how much at once", tone: "good", points: ["immediate recall", "rehearsal allowed", "fresh items", "about 7 items held"] },
                { head: "Brown/Peterson", sub: "how long without rehearsal", tone: "bad", points: ["count backward by 3s", "no rehearsal", "many similar trials: PI", "about 50% lost after 5 s"] } ],
        verdict: "STM is big enough, but leaky without rehearsal." },
      answer: [
        "The two findings measure <b>different things</b> under different conditions. Miller's 7 ± 2 describes <b>capacity</b> in an immediate span task where people can rehearse. The Brown/Peterson and Peterson technique measures how long information survives when rehearsal is prevented.",
        "Counting backward by threes <b>blocks rehearsal</b> and also occupies working memory, so information in short-term memory is quickly lost. Matlin also notes that recall was good on the first few trials and only became poor after several trials, because letters from earlier trials produced <b>proactive interference</b>.",
        "So the rapid forgetting reflects interference and lack of rehearsal, not a capacity of only one or two items. Short-term memory can hold several items, but only briefly and only when protected from interference."
      ],
      takeaway: "Miller measured how much; Brown/Peterson measured how long without rehearsal.",
      trap: { wrong: "Brown/Peterson shows Miller was wrong.", right: "They measure different things, and the forgetting appears only after several trials (PI)." },
      note: null
    },
    {
      id: "A4",
      block: "Block A · Matlin & Farmer",
      title: "Atkinson–Shiffrin and the primacy effect",
      canvas: "In the first lecture, the Atkinson-Shiffrin model was introduced. How can it explain the primacy effect?",
      asks: "Use the multi-store model (sensory memory, STM, LTM) to explain why the first items on a list are remembered best.",
      triage: { symptom: "'How does model X explain effect Y?'", diagnosis: "Atkinson–Shiffrin: rehearsal transfers items from STM to LTM", treatment: "Describe the model briefly, show early items get the most rehearsal, link rehearsal to LTM transfer, contrast with recency." },
      visual: { type: "flow", title: "Why first in line gets the most practice",
        steps: [ { h: "Item 1 arrives", t: "rehearsed alone" }, { h: "Items 2, 3, 4", t: "item 1 rehearsed again with them" }, { h: "Most rehearsals", t: "early items practised most" }, { h: "Transfer to LTM", t: "recalled from LTM: primacy" } ],
        verdict: "Recency has another source: last items still in STM." },
      answer: [
        "In the Atkinson–Shiffrin (1968) multi-store model, information passes from sensory memory into a limited <b>short-term store</b>, where <b>rehearsal</b> keeps it active and transfers it to the <b>long-term store</b>. The more an item is rehearsed, the more likely it is to be transferred.",
        "When a list is presented, the first item can be rehearsed on its own and then together with the next few items, so the earliest items receive the most rehearsals overall. Later items must share the limited rehearsal capacity with many others, and Matlin adds that early items do not compete with any earlier items.",
        "As a result, the first items are more likely to be stored in long-term memory and recalled from there: the <b>primacy effect</b>. The recency effect has a different source: the last items are still in short-term memory at the moment of recall."
      ],
      takeaway: "Primacy = most rehearsal = most transfer to LTM.",
      trap: { wrong: "Primacy happens because the first items are still in STM.", right: "That is recency. Primacy comes from extra rehearsal moving items into LTM." },
      note: null
    },
    {
      id: "A5",
      block: "Block A · Matlin & Farmer",
      title: "Interference explains the U-shaped curve",
      canvas: "In proactive interference, earlier items interfere with your ability to properly process later items. The opposite can also occur, in that later items will interfere with your ability to properly process the first few items. This is called retroactive interference. How can proactive and retroactive interference explain the serial position curve? HINT: Consider the first, middle, and last items separately.",
      asks: "For the first, middle and last items, say which kind of interference hits them, and show that this produces the U-shaped curve.",
      triage: { symptom: "'Explain the curve with PI and RI, position by position'", diagnosis: "Proactive vs retroactive interference", treatment: "Take first, middle and last items in turn, decide which interference applies to each, then derive the U-shape." },
      visual: { type: "grid", title: "Interference by list position",
        cols: ["PI (from earlier)", "RI (from later)", "Recall"],
        rows: [ { head: "First items", cells: ["no", "yes", "good"] }, { head: "Middle items", cells: ["yes", "yes", "worst"] }, { head: "Last items", cells: ["yes", "no", "good"] } ] },
      answer: [
        "Interference offers an alternative account of the serial-position curve. <b>Proactive interference</b> means earlier items disrupt memory for later ones; <b>retroactive interference</b> means later items disrupt memory for earlier ones.",
        "The first items have nothing before them, so they suffer no proactive interference, only retroactive interference, and are recalled relatively well: the primacy effect. The last items have nothing after them, so they suffer no retroactive interference, only proactive interference: the recency effect.",
        "The <b>middle items</b> suffer both, proactive interference from the items before and retroactive interference from the items after, so they are recalled worst. That gives the U-shape. Because interference grows with similarity (Wickens et al., 1976), lists of similar items should show especially poor middle recall."
      ],
      takeaway: "The middle is squeezed from both sides.",
      trap: { wrong: "Proactive means later items disrupt earlier ones.", right: "That is retroactive. Proactive works forward: earlier items disrupt later ones." },
      note: null
    },
    {
      id: "B1",
      block: "Block B · Eysenck & Keane",
      title: "Two functions of dual-task studies (chess)",
      canvas: "Dual-task studies are used (i) to determine which components of the working memory model are involved in a particular task and (ii) to establish the independence of working memory components. Explain both functions of dual-task studies using Figure 6.4.",
      asks: "Use the chess study in Figure 6.4 to show how adding a second task tells you (i) which WM parts chess uses and (ii) that the WM parts are separate.",
      triage: { symptom: "'Explain two functions using a figure'", diagnosis: "Dual-task logic plus the Robbins et al. (1996) chess data", treatment: "State the two assumptions, read Figure 6.4 for which components chess uses, then explain independence from selective interference." },
      visual: { type: "grid", title: "Did chess move quality drop? (Robbins et al., 1996)",
        cols: ["Component loaded", "Chess hurt?"],
        rows: [ { head: "Tapping (control)", cells: ["none", "no"] }, { head: "Articulatory suppression", cells: ["phonological loop", "no"] }, { head: "Clockwise key pressing", cells: ["sketchpad", "yes"] }, { head: "Random numbers", cells: ["central executive", "yes"] } ] },
      answer: [
        "Dual-task studies rest on two assumptions: tasks that use the <b>same component</b> interfere with each other, while tasks that use <b>different components</b> can be done together as well as separately. In Robbins et al. (1996), Figure 6.4, weaker and stronger chess players chose moves while tapping (control), doing articulatory suppression, clockwise key pressing or random number generation.",
        "(i) <b>Which components?</b> Move quality dropped clearly with the visuo-spatial and central-executive tasks but not with articulatory suppression, so chess relies on the sketchpad and the central executive, not the loop.",
        "(ii) <b>Independence:</b> because the phonological task left chess intact while the other two impaired it, the loop works independently of the systems chess uses. This selective, not general, interference shows the components are separable, and the control condition rules out a general cost of doing two things. Stronger and weaker players showed the same pattern, so both use working memory the same way."
      ],
      takeaway: "Interference shows who shares a desk; no interference shows separate desks.",
      trap: { wrong: "Explain only which components chess uses.", right: "The question asks for both functions, and the control condition should be mentioned." },
      note: null
    },
    {
      id: "B2",
      block: "Block B · Eysenck & Keane",
      title: "Word length shows rehearsal for seen words",
      canvas: "Explain how the word-length effect supports the involvement of verbal rehearsal through the phonological loop, even though the words are presented to participants in a visual format.",
      asks: "Words were shown, not spoken. Explain why the fact that short words are remembered better still proves people are rehearsing them with their inner voice.",
      triage: { symptom: "A visual task plus 'how does this show verbal rehearsal?'", diagnosis: "Word-length effect, articulatory control process, articulatory suppression", treatment: "Define the effect, explain visual words must be articulated to enter the loop, show suppression removes the effect, conclude rehearsal." },
      visual: { type: "flow", title: "From seen word to inner voice",
        steps: [ { h: "Word seen", t: "visual input" }, { h: "Articulatory control", t: "recoded into sound" }, { h: "Rehearsal", t: "long words take longer to say" }, { h: "Smaller span", t: "for long words" } ],
        verdict: "Block the inner voice (suppression) and the effect vanishes." },
      answer: [
        "The <b>word-length effect</b> is the finding that immediate serial recall is better for short than for long words. In the phonological loop, items stay active through articulatory rehearsal; long words take longer to rehearse, so fewer can be refreshed before they decay.",
        "Visually presented words do not enter the phonological store directly, but they can be recoded by the <b>articulatory control process</b>, which turns them into sound and rehearses them. The key evidence is that the effect for visual words disappears under <b>articulatory suppression</b> (repeating '1 to 8'), which blocks this process. A patient unable to rehearse verbally also showed no word-length effect (Jacquemot et al., 2011).",
        "So the effect depends on verbal rehearsal through the loop, even for visual words. One caveat: Jalbert et al. (2011) attribute part of the effect to orthographic neighbourhood size, because short words have more neighbours."
      ],
      takeaway: "Even when you only see words, you say them in your head to keep them.",
      trap: { wrong: "Visual words go straight into the phonological store.", right: "They must first be recoded by the articulatory control process, and suppression blocks that." },
      note: null
    },
    {
      id: "B3",
      block: "Block B · Eysenck & Keane",
      title: "Klauer & Zhao: separate visual and spatial",
      canvas: "Klauer and Zhao (2004) had participants perform two main tasks. One was a spatial task (memory for dot locations) and the other a visual task (memory for Chinese characters). Sometimes the main task was performed with a colour discrimination task to provide visual interference. At other times, the main task was performed with a movement discrimination task to provide spatial interference. How do their results provide evidence for separate visual and spatial systems in the visuo-spatial sketchpad?",
      asks: "In a 2 × 2 design, which interference task hurt which main task, and why does that pattern prove there are two separate systems?",
      triage: { symptom: "A 2 × 2 design plus 'how does this show separate systems?'", diagnosis: "Selective interference / double dissociation", treatment: "Predict the pattern if the systems are separate, compare it with Figure 6.6, name it a double dissociation." },
      visual: { type: "grid", title: "Who was hurt most? (Figure 6.6)",
        cols: ["Dots (spatial)", "Characters (visual)"],
        rows: [ { head: "Movement (spatial)", cells: ["large", "small"] }, { head: "Colour (visual)", cells: ["little or none", "large"] } ] },
      answer: [
        "Klauer and Zhao (2004) crossed two main tasks with two interference tasks. If the sketchpad has separate parts, <b>spatial interference</b> (movement) should hurt the dot-location task more, and <b>visual interference</b> (colour) should hurt the Chinese-character task more.",
        "Both predictions were supported (Figure 6.6): movement interference disrupted dots much more than ideographs, while colour interference disrupted ideographs more and dots little. This crossover is a <b>double dissociation</b>, which rules out the explanation that one task is simply harder.",
        "The results therefore support separate components: a <b>visual cache</b> for form and colour and an <b>inner scribe</b> for location and movement (Logie, 1995)."
      ],
      takeaway: "Each distractor hit its own target: two separate systems.",
      trap: { wrong: "Describe the design and stop there.", right: "State the predicted pattern, show it was found and call it a double dissociation." },
      note: null
    },
    {
      id: "B4",
      block: "Block B · Eysenck & Keane",
      title: "Do Vergauwe et al. overturn Klauer & Zhao?",
      canvas: "Vergauwe et al. (2009) used more attentional demanding versions of the interference tasks used by Klauer and Zhao (2004). In the study by Vergauwe et al. both the spatial and the visual interference task affected performance on both the spatial and visual main task negatively. How can you explain the discrepancy between both studies? Do the results by Vergauwe et al. invalidate the conclusion by Klauer and Zhao that the visuo-spatial sketchpad has two distinct components for visual and spatial information?",
      asks: "Why did harder distractor tasks hurt everything, and does that mean the visual and spatial parts are not separate after all?",
      triage: { symptom: "Conflicting results plus 'explain' plus 'does it invalidate?'", diagnosis: "General (attention, central executive) vs specific (domain) interference", treatment: "Explain the difference in task demands, separate general from specific interference, conclude: not invalidated, but qualified." },
      visual: { type: "versus", title: "Easy vs demanding interference tasks",
        cols: [ { head: "Klauer & Zhao (2004)", sub: "low-attention tasks", tone: "good", points: ["load their own domain", "specific interference", "separate parts visible"] },
                { head: "Vergauwe et al. (2009)", sub: "demanding tasks", tone: "accent", points: ["also draw on the central executive", "general interference", "hurt both main tasks"] } ],
        verdict: "Separate parts exist; heavy attention load hides them." },
      answer: [
        "The discrepancy is explained by <b>attentional demands</b>. Klauer and Zhao used fairly simple interference tasks that mainly loaded their own domain, giving specific interference. Vergauwe et al. (2009) used more demanding versions, which also draw on the <b>central executive</b>'s general attention that both visual and spatial processing need.",
        "The result was <b>general interference</b>: each task impaired both main tasks. As Eysenck and Keane conclude, interference is general and attention-based when tasks are demanding, but specific when they are relatively undemanding.",
        "So Vergauwe et al. do <b>not invalidate</b> separate visual and spatial components, because specific interference still appears when general attention is not overloaded. They do show that the apparent separateness depends on how much general attention is required, and that visual and spatial processing share executive resources."
      ],
      takeaway: "Not overturned, but qualified: separation shows only when attention is not overloaded.",
      trap: { wrong: "The sketchpad must be one single system.", right: "Demanding tasks add general (CE) interference on top of specific interference; the parts can still be separate." },
      note: null
    },
    {
      id: "B5",
      block: "Block B · Eysenck & Keane",
      title: "Four executive processes in studying",
      canvas: "How are the four executive processes that are supposedly affected in the dysexecutive syndrome involved in studying? [Task setting, Monitoring, Energisation, Metacognition/integration]",
      asks: "Take each of the four executive processes, say what it is, and give a concrete example of how you use it when you study.",
      triage: { symptom: "Four named processes plus an everyday activity: apply them", diagnosis: "Stuss & Alexander (2007); Stuss (2011): task setting, monitoring, energisation, metacognition/integration", treatment: "Define each process, give a concrete study example, say what goes wrong if it is impaired." },
      visual: { type: "map", title: "The dysexecutive syndrome goes to university", center: "Studying needs all four",
        branches: [ { h: "Task setting", t: "plan the week, work out what the exam asks" }, { h: "Monitoring", t: "check answers, notice errors" }, { h: "Energisation", t: "keep focus through a 2-hour session" }, { h: "Metacognition / integration", t: "know what you know, combine sources" } ] },
      answer: [
        "Stuss and Alexander (2007) identified three executive processes and Stuss (2011) added a fourth; studying well needs all four, and different patients may lose different ones.",
        "<b>Task setting</b> is planning and setting up stimulus–response relationships: deciding what to study, making a schedule and working out what an exam question requires. <b>Monitoring</b> is checking your own performance: verifying answers, noticing errors and checking comprehension; poor monitoring gives variable performance and more errors.",
        "<b>Energisation</b> is sustained attention: staying focused through a long study session or exam; poor energisation slows anything that needs speed. <b>Metacognition/integration</b> is coordinating information and telling apart what you know from what you believe: judging whether you truly understand the material, avoiding the illusion of knowing, and integrating different readings."
      ],
      takeaway: "Plan, check, keep going, and know what you really know.",
      trap: { wrong: "Defining the four processes is enough.", right: "Each needs a concrete study example, and metacognition/integration must not be left out." },
      note: null
    },
    {
      id: "B6",
      block: "Block B · Eysenck & Keane",
      title: "The episodic buffer and a rude remark",
      canvas: "One of your friends makes a rude remark. Think about how the episodic buffer may be involved in coming up with an appropriate response to this remark.",
      asks: "Which kinds of information do you combine to answer a rude remark well, and what role does the episodic buffer play in bringing them together?",
      triage: { symptom: "A social scene plus 'how is the buffer involved?'", diagnosis: "Episodic buffer: binds loop, sketchpad and LTM into multimodal chunks; link to the CE", treatment: "List the information sources, show the buffer binds them into one episode, then the CE uses it to choose and inhibit." },
      visual: { type: "flow", title: "Responding to a rude remark",
        steps: [ { h: "Three sources", t: "words and tone, face, past episodes" }, { h: "Episodic buffer", t: "one integrated scene, about 4 chunks" }, { h: "Central executive", t: "joke or insult? inhibit the retort" }, { h: "Response", t: "appropriate reply; episode stored in LTM" } ] },
      answer: [
        "An appropriate response requires <b>integrating</b> several kinds of information at once. The phonological loop holds the words and tone of voice; the visuo-spatial sketchpad holds the friend's facial expression, gestures and who else is present; and <b>long-term memory</b> supplies what you know about this friend, earlier similar episodes and social norms.",
        "The <b>episodic buffer</b> binds these into one integrated, multidimensional representation of the episode, in a limited number of chunks (about four). It is the interface between working memory, perception and long-term memory.",
        "The <b>central executive</b> then uses this integrated picture to interpret the remark (joke or insult?), inhibit an impulsive retort, weigh possible responses and choose a fitting one. Afterwards, the integrated episode can be stored in long-term memory."
      ],
      takeaway: "The buffer is the stage where words, faces and memories meet.",
      trap: { wrong: "Describe only the central executive deciding what to say.", right: "The buffer's job is binding loop, sketchpad and LTM information; LTM is a key source." },
      note: null
    },
    {
      id: "B7",
      block: "Block B · Eysenck & Keane",
      title: "WM capacity: more or less noticing?",
      canvas: "In problem 1, we saw that the relation between inattentional blindness and working memory capacity is not straightforward, with some studies suggesting that those who have greater working memory capacity are more likely to notice unexpected objects, and other studies showing the opposite. How can you explain these contradicting findings?",
      asks: "Explain why high working-memory capacity could make people notice unexpected objects more in some studies and less in others.",
      triage: { symptom: "Contradicting findings from Problem 1 plus 'how to explain?'", diagnosis: "WMC = storage plus executive attentional control; general vs specific load", treatment: "Give a mechanism for each direction, name the moderators (task demands, relevance, measure), then reconcile." },
      visual: { type: "versus", title: "High WM capacity: two effects",
        cols: [ { head: "More noticing", sub: "spare capacity", tone: "good", points: ["leftover resources process the object", "most likely when main task is easy"] },
                { head: "Less noticing", sub: "better attentional control", tone: "bad", points: ["focus tightly, inhibit irrelevant objects", "most likely when task is demanding"] } ],
        verdict: "Which wins depends on task demands, relevance and the WMC measure." },
      answer: [
        "Working-memory capacity reflects not only storage but also <b>executive attentional control</b> (Eysenck & Keane), and this can push in two directions.",
        "On the one hand, high-capacity people may have <b>spare resources</b> left over from the main task (counting passes), which they can use to process an unexpected object, so they notice it more, especially when the main task is easy. On the other hand, high capacity means better attentional control and <b>inhibition</b> (Miyake's inhibition function): these people focus more efficiently and suppress irrelevant stimuli, so they notice unexpected objects less, especially when the task is demanding.",
        "Which effect wins depends on <b>task demands</b>, whether the unexpected object shares features with attended items, and the capacity measure (simple span vs complex span tasks that tap the CE). Differences in paradigms and small samples add to the inconsistency."
      ],
      takeaway: "More capacity can mean more to spare or better blinkers.",
      trap: { wrong: "Pick the side with the better studies.", right: "Explain both directions; WMC is storage plus executive control." },
      note: "Partly own reasoning applied to Problem 1: check the specific studies against your Problem 1 notes."
    },
    {
      id: "C1",
      block: "Block C · McGonnell et al. (2024)",
      title: "How AWMA subtests isolate the components",
      canvas: "How do the specific task mechanics of the AWMA subtests isolate the different subcomponents of Baddeley and Hitch’s WM-Model?",
      asks: "What is it about how each AWMA task works (what children hold, what they must also do) that lets it measure one specific part of working memory?",
      triage: { symptom: "'How do the task mechanics isolate components?'", diagnosis: "Storage only (simple span) vs processing plus storage (complex span); verbal vs visuospatial material", treatment: "Explain the two dimensions, give subtest examples for each cell, note the limits (overlap, task impurity)." },
      visual: { type: "grid", title: "The AWMA: material × demand",
        cols: ["Storage only", "Processing + storage"],
        rows: [ { head: "Verbal", cells: ["Loop: Digit, Word, Nonword Recall", "Verbal CE: Listening, Counting, Backwards Digit"] },
                { head: "Visuospatial", cells: ["Sketchpad: Dot Matrix, Mazes, Block Recall", "VS CE: Odd-One-Out, Mister X, Spatial Span"] } ] },
      answer: [
        "The AWMA isolates components by varying two task features: the <b>type of material</b> (verbal vs visuospatial) and the <b>processing demand</b> (storage only in simple span tasks vs processing plus storage in complex span tasks).",
        "Simple verbal span tasks (Digit, Word, Nonword Recall: hear and repeat in order) tap the <b>phonological loop</b>; nonwords minimise help from long-term memory. Simple visuospatial span tasks (Dot Matrix, Mazes Memory, Block Recall) tap the <b>visuospatial sketchpad</b>.",
        "Complex span tasks add a concurrent processing step, which needs the <b>central executive</b>: Listening Recall, Counting Recall and Backwards Digit Recall for the verbal CE; Odd-One-Out, Mister X and Spatial Span (judge while remembering locations) for the visuospatial CE. Three subtests per component increase reliability.",
        "Still, the tasks are not process-pure, and the two visuospatial composites overlap strongly (r = .70)."
      ],
      takeaway: "Hold only = a slave system; do and hold = the executive.",
      trap: { wrong: "List the twelve subtests.", right: "Explain the two-dimension logic and mention task impurity and overlap." },
      note: null
    },
    {
      id: "C2",
      block: "Block C · McGonnell et al. (2024)",
      title: "All correlate, only one predicts uniquely",
      canvas: "McGonnell et al. (2024) found that all four WM components correlated with math calculation, but only the visuospatial sketchpad explained unique variance. How can both of these findings be true?",
      asks: "This is a statistics reasoning question: how can every WM part go together with math, yet only one add something in the regression?",
      triage: { symptom: "'How can both be true?': a statistics reasoning question", diagnosis: "Zero-order correlation vs unique variance in hierarchical regression; multicollinearity", treatment: "Define both, show the predictors overlap, explain that regression credits only non-shared variance, apply it to the sketchpad." },
      visual: { type: "bars", title: "The predictors overlap with each other (McGonnell et al., 2024)", unit: "r", max: 1,
        groups: [ { label: "Between WM components", bars: [ { label: "verbal CE – VS CE", value: 0.76, tone: "accent" }, { label: "sketchpad – VS CE", value: 0.70, tone: "accent" } ] },
                  { label: "With phonological processing", bars: [ { label: "loop", value: 0.62, tone: "neutral" }, { label: "verbal CE", value: 0.59, tone: "neutral" } ] } ],
        note: "Each component correlated with math at r = .42 to .53; only the sketchpad added unique variance (10.2%, β = .25)." },
      answer: [
        "Both findings are compatible because they answer <b>different questions</b>. The correlations (r = .42 to .53) show that each WM component, on its own, is associated with calculation.",
        "But the predictors are <b>strongly intercorrelated</b>: verbal and visuospatial CE correlate .76, the sketchpad and VS CE .70, and the loop and verbal CE overlap with phonological processing (.62 and .59). In <b>hierarchical regression</b>, a predictor is credited only with variance it explains over and above the predictors already entered and the others in the same step.",
        "Much of the math-related variance of the loop and verbal CE had already been captured by phonological processing in step 2, and the VS CE shared its variance with the sketchpad. The sketchpad was the only component that still explained <b>unique variance</b> (10.2%, β = .25). So all components relate to math, but only the sketchpad adds information not already in the other variables."
      ],
      takeaway: "Correlation counts total overlap; regression counts only what nobody else brought.",
      trap: { wrong: "The correlations must have been wrong.", right: "They are correct; the overlap between predictors is why only one stays unique in regression." },
      note: null
    },
    {
      id: "C3",
      block: "Block C · McGonnell et al. (2024)",
      title: "Why math's WM demands change with age",
      canvas: "The article suggests that the relationship between different working-memory components and mathematics may change with age. Why might the WM demands of mathematics change as children become older?",
      asks: "As school math changes from counting to columns to multi-step problems, which part of working memory does each stage lean on, and why?",
      triage: { symptom: "'Why might X change with age?': reasoning from development and curriculum", diagnosis: "Which component supports which math skill; automatisation; Alloway & Passolunghi (2011)", treatment: "Describe early, middle and later math, link each to a component, add automatisation and the evidence." },
      visual: { type: "flow", title: "Say it, see it, manage it",
        steps: [ { h: "Age ~7: loop", t: "counting aloud, number words, verbal facts" }, { h: "Age ~8: sketchpad", t: "place value, columns, number lines" }, { h: "Older: CE", t: "multi-step procedures, word problems" }, { h: "Automatisation", t: "facts from LTM free up WM" } ] },
      answer: [
        "The WM demands of math probably change because the <b>content and teaching</b> of math change and because skills become <b>automatised</b>.",
        "Early math is learned largely through language: counting, number words, verbal instructions and feedback, and verbal repetition of facts, which loads the <b>phonological loop</b> (Alloway & Passolunghi, 2011: the loop predicted math at age 7). Later, calculation uses visuospatial layouts such as columns, place value, carrying and number lines, which load the <b>sketchpad</b> (sketchpad predicted math at age 8; David, 2012: stronger sketchpad link in younger children).",
        "As math becomes more complex (multi-step procedures, word problems), the <b>central executive</b> matters more for coordinating steps, updating intermediate results and choosing strategies. Meanwhile, practice makes basic facts automatic and retrievable from long-term memory, reducing WM load. McGonnell et al. could not test this directly because there were too few children per grade."
      ],
      takeaway: "Say it, then see it, then manage it.",
      trap: { wrong: "Older children simply have more working memory.", right: "Link each component to the math content of that age, and include automatisation." },
      note: null
    },
    {
      id: "C4",
      block: "Block C · McGonnell et al. (2024)",
      title: "Manipulatives with caution: what instead?",
      canvas: "Why should we use caution against simply using visuospatial math activities (like manipulatives) in the classroom, and what would you recommend that a teacher does instead?",
      asks: "Why is 'just hand out blocks' not justified by the study, and what should a teacher actually do?",
      triage: { symptom: "'Why caution, and what instead?': an applied recommendation", diagnosis: "Correlation is not causation; transfer; explicit connections; assessment-based intervention", treatment: "Give the reasons for caution, then concrete recommendations backed by the paper." },
      visual: { type: "versus", title: "Manipulatives are not magic",
        cols: [ { head: "Why caution", sub: "limits of the evidence", tone: "bad", points: ["correlational, cross-sectional: no cause", "exposure is not transfer", "WM training alone fails (Cunningham & Sood, 2018)"] },
                { head: "What to do", sub: "teacher's plan", tone: "good", points: ["assess visuospatial and verbal skills", "explicit links: blocks, words, numerals", "combine WM and math practice (Fuchs et al., 2022)"] } ],
        verdict: "Use manipulatives, but connect them to the sum on purpose." },
      answer: [
        "Teachers should be cautious because the study is <b>correlational and cross-sectional</b>, so it cannot show that the sketchpad causes math skill or that visuospatial activities improve it. Simple exposure to diagrams, number lines or base-ten blocks also does not guarantee <b>transfer</b>: children with weak visuospatial skills, exactly the ones who struggle, may not connect them to paper-and-pencil calculation. And training working memory alone has not been shown to improve math (Cunningham & Sood, 2018).",
        "Instead, a teacher should first <b>assess</b> both visuospatial and verbal skills to find the source of a child's difficulty (Robinson et al., 2002). Then make deliberate, <b>explicit connections</b> between visual representations, number words and written numerals and procedures, adapted to each child.",
        "Finally, use interventions that combine WM demands with real math practice (Fuchs et al., 2022), knowing they do not help every student (Schulze et al., 2020), and help children strengthen weak areas and use compensatory strategies."
      ],
      takeaway: "Blocks, words and symbols, connected on purpose.",
      trap: { wrong: "So teachers should not use manipulatives.", right: "Use them, but with explicit links and after assessing the child; and remember the study is correlational." },
      note: null
    }
  ]
};
