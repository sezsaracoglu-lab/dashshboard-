IDQ[1] = {
  n: 1,
  title: "Attention",
  readings: ["Simons, Failures of awareness (source A)", "Sternberg, Sternberg & Mio (2012), pp. 148–152 (source B)"],
  intro: "This theme is about what happens to everything we do not attend to. Source A (Simons) shows that we can miss unexpected objects right in front of us, and asks why. Source B (Sternberg) explains selective listening and the filter theories that try to say where in the flow of information the unattended input gets lost.",
  questions: [
    {
      id: "A1",
      block: "Block A · Simons, Failures of awareness",
      title: "Failure to see, or failure to remember?",
      canvas: "It is assumed that inattentional blindness results from a failure to SEE the unexpected stimulus. However, people might fail to report the unexpected stimulus even if they did see it – they could simply FORGET that they saw it by the time they are asked about it. Why is this an unlikely explanation of inattentional blindness?",
      asks: "Some people say observers did see the gorilla and simply forgot it before being asked. Explain why that memory story does not fit the evidence.",
      triage: {
        symptom: "'Why is X an unlikely explanation?': you must argue against a rival account.",
        diagnosis: "Inattentional blindness is a failure of awareness; the rival account is a memory failure ('inattentional amnesia', Wolfe, 1999).",
        treatment: "Name the rival account, give the arguments against it (short delay, online detection, attention-driven pattern, reactions afterwards), then conclude that attention, not memory, is the bottleneck."
      },
      visual: {
        type: "versus",
        title: "Two explanations for missing the gorilla",
        cols: [
          { head: "Never seen", sub: "inattentional blindness", tone: "good", points: ["still missed with a button press during the task", "misses follow attention: load, attentional set", "on re-watching, seen at once, with disbelief"] },
          { head: "Seen, then forgotten", sub: "inattentional amnesia (Wolfe, 1999)", tone: "bad", points: ["bizarre event, visible 9 s", "asked only seconds later", "cannot explain the white versus black effect"] }
        ],
        verdict: "You cannot forget what never got in."
      },
      answer: [
        "The rival idea is <b>inattentional amnesia</b> (Wolfe, 1999): you saw the gorilla but forgot it. It is unlikely, first, because the delay is far too short. In Simons and Chabris (1999) a person in a gorilla suit stays visible for about 9 seconds and thumps its chest, and the question follows within seconds. Such a <b>distinctive</b> event is exactly what memory keeps.",
        "The strongest argument is <b>online detection</b>: when people must press a button the moment they see something unexpected, they still miss it. There is no delay left in which anything could be forgotten, so memory is taken out of the equation.",
        "The pattern also tracks <b>attention</b>, not memory. Misses rise with a harder primary task (Simons & Jensen, 2009) and fall when the object matches the <b>attentional set</b>: counting the white team, a white object is noticed far more often than a black one (Most et al., 2001). Forgetting cannot explain that. And non-noticers who re-watch the video see the gorilla at once, often in disbelief.",
        "So the failure lies in seeing, not in storing, although implicit measures suggest non-noticers may pick up something, so the memory account cannot be ruled out completely."
      ],
      takeaway: "People miss the gorilla even when they could report it on the spot, so they never saw it.",
      trap: { wrong: "It is unlikely simply because the gorilla is too obvious to miss.", right: "Name inattentional amnesia and give the evidence: seconds-short delay, online detection still fails, and misses follow attention manipulations such as the attentional set." },
      note: null
    },
    {
      id: "A2",
      block: "Block A · Simons, Failures of awareness",
      title: "Why losing inattentional blindness would hurt",
      canvas: "Many people, upon learning about inattentional blindness, try to think of ways to eliminate it, allowing themselves complete situation awareness. Why might we be far worse off if we were NOT subject to inattentional blindness?",
      asks: "Inattentional blindness looks like a flaw. Explain why it is actually useful, and what would go wrong if everything around us reached awareness.",
      triage: {
        symptom: "'Why might we be worse off without X?': argue for the function of a limitation.",
        diagnosis: "IB is the cost of selective, focused attention, which has limited capacity.",
        treatment: "Say what IB is a side-effect of, describe a world without filtering, add Simons' evolutionary argument, then admit the real dangers and reframe the goal."
      },
      visual: {
        type: "map",
        title: "Why inattentional blindness is useful",
        center: "IB is the flip side of focus",
        branches: [
          { h: "Huge input, small capacity", t: "processing everything would seize up" },
          { h: "Full awareness = total distraction", t: "no reading, driving or talking" },
          { h: "Failing filters are disabling", t: "e.g. some ADHD, frontal damage" },
          { h: "Evolution favoured focus", t: "unexpected events rare, others alert you" },
          { h: "Real goal", t: "let the right things through" }
        ]
      },
      answer: [
        "Inattentional blindness is the flip side of <b>focused, selective attention</b>. Our senses take in far more than our <b>limited capacity</b> can process, so the same mechanism that lets us zero in on a goal also makes us miss unexpected things outside that focus (Simons).",
        "Complete situation awareness would mean <b>total distractibility</b>: every movement and sound would compete for awareness, and we could not read, talk or drive. People whose filtering works poorly, for example in some forms of ADHD or after frontal damage, describe this as exhausting, not as a superpower.",
        "Simons adds an <b>evolutionary argument</b>: focusing intently was probably more useful than noticing the unexpected. Unexpected events are rare, most need no immediate response, a short delay usually costs little, and in a group others may alert us.",
        "IB can still be dangerous: radiologists miss a gorilla in a CT scan (Drew, Võ & Wolfe, 2013). But the filter cannot be switched off without losing what it buys us. The question becomes <b>how to make the right things get through</b>, and the own-name effect shows relevant information can."
      ],
      takeaway: "Missing the gorilla is the price we pay for being able to concentrate.",
      trap: { wrong: "So inattentional blindness is simply good.", right: "It is the unavoidable cost of focus; it can be dangerous (radiologists, drivers), so the aim is to reduce distraction and let the right things through, not to abolish it." },
      note: null
    },
    {
      id: "A3",
      block: "Block A · Simons, Failures of awareness",
      title: "A memory task also causes blindness",
      canvas: "Fougnie and Marois (2007) found that people miss unexpected visual objects when they devote their limited cognitive resources to a memory task. Why is this an important finding?",
      asks: "Earlier blindness studies all used visual tasks. Explain what it tells us that a non-visual memory task causes the same blindness, and why that matters in daily life.",
      triage: {
        symptom: "'Why is this finding important?': give the theoretical implication plus real-world relevance.",
        diagnosis: "Visual limit versus central (shared) attentional capacity.",
        treatment: "State the finding, say which alternative it rules out, say what it implies about attention, then give a real-world example."
      },
      visual: {
        type: "versus",
        title: "Where is the limit?",
        cols: [
          { head: "Visual limit", sub: "eyes are 'full'", tone: "bad", points: ["IB only with visual tasks", "ruled out: object appeared while eyes had nothing to do"] },
          { head: "Central limit", sub: "shared attention budget", tone: "good", points: ["holding items in memory causes IB", "thinking or phoning can blind us"] }
        ],
        verdict: "The limits are not purely visual."
      },
      answer: [
        "The finding matters because it shows <b>where the limit lies</b>. In the classic studies the primary task was visual (tracking shapes, counting passes), so inattentional blindness could have been a limit of the <b>visual system</b>: the eyes are simply full.",
        "Fougnie and Marois (2007) used a <b>working memory task</b> instead, and the unexpected object appeared while participants were only holding information in mind, with nothing to see or encode. They still missed it. As Simons concludes, the limits are not purely visual but reflect limits on the capacity of attention: a <b>central, partly domain-general resource</b> shared by attention and working memory.",
        "This has practical consequences. Any demanding mental activity, such as remembering an address or holding a phone conversation, can blind us. It explains why phone users miss a unicycling clown (Hyman et al., 2011) and why <b>hands-free</b> phoning while driving is still risky (Strayer & Johnston, 2001): the hands are free, the central resource is not. It also links Theme 1 to <b>working memory</b> in Theme 2."
      ],
      takeaway: "A busy mind makes blind eyes: the bottleneck is attention, not vision.",
      trap: { wrong: "Just restate that a memory task causes IB.", right: "The point is the contrast: a visual limit is ruled out, a central attentional limit is supported, with real-world examples (phones, hands-free driving)." },
      note: null
    },
    {
      id: "A4",
      block: "Block A · Simons, Failures of awareness",
      title: "Change blindness versus inattentional blindness",
      canvas: "Watch the following video and discuss what you saw before reading on: The Monkey Business Illusion. During the video, the curtains in the background changed color; something that goes unnoticed by most viewers. This phenomenon is known as change blindness. How is it different from inattentional blindness?",
      asks: "Both are ways of missing things. Explain precisely what is missed in each, and why one of them needs memory and the other does not.",
      triage: {
        symptom: "'How is X different from Y?': a precise comparison.",
        diagnosis: "Change blindness (missing a change) versus inattentional blindness (missing an unexpected object).",
        treatment: "Define both, contrast what is missed, the role of memory and the role of expectation, then use the video as the example."
      },
      visual: {
        type: "grid",
        title: "Two failures, two different questions",
        cols: ["Inattentional blindness", "Change blindness"],
        rows: [
          { head: "What is missed", cells: ["an unexpected object", "a change between two states"] },
          { head: "Example", cells: ["the gorilla", "curtain colour, player leaving"] },
          { head: "Needs memory and comparison", cells: ["no", "yes"] },
          { head: "Can it be expected?", cells: ["no", "yes"] },
          { head: "Type of failure", cells: ["detection, now", "comparison, across time"] }
        ]
      },
      answer: [
        "Both are failures of awareness, but inattentional blindness is a <b>detection failure in the present</b> and change blindness a <b>comparison failure across time</b>. In inattentional blindness you miss an <b>unexpected object</b> that is fully visible while attention is elsewhere, like the gorilla.",
        "In change blindness you miss that something has <b>changed</b>, like the curtain colour or a player leaving in the Monkey Business video. To detect it, the old state must be stored and compared with the new one, so <b>memory</b> is necessary. It can fail at three points: encoding the old state, holding it, or comparing.",
        "Change blindness also occurs for <b>expected changes</b>: in the flicker paradigm people search actively and still need a long time. Inattentional blindness requires surprise, so it can be measured only once per person.",
        "The Monkey Business Illusion combines both: viewers who know about the gorilla see it, yet most still miss the curtain change and the departing player. Both show that we represent far less of a scene than we feel we do."
      ],
      takeaway: "Inattentional blindness misses what is there; change blindness misses what changed.",
      trap: { wrong: "They are two names for the same thing.", right: "Change blindness needs a comparison between two moments (memory) and can happen even when you expect a change; inattentional blindness concerns an unexpected object present now." },
      note: null
    },
    {
      id: "A5",
      block: "Block A · Simons, Failures of awareness",
      title: "Missing a target you were told to find",
      canvas: "Some recent studies have demonstrated that due to attentional engagement on a primary task, participants fail to notice target objects they have been explicitly instructed to look out for and that occur on many trials. How is this different from inattentional blindness?",
      asks: "Inattentional blindness is about unexpected things. Here people know what to look for and it keeps appearing, yet they still miss it. Explain what is different and what that tells us.",
      triage: {
        symptom: "'How is this different?': compare a new phenomenon with the textbook one.",
        diagnosis: "Expectation and attentional set; the definition of IB as missing an UNEXPECTED object.",
        treatment: "Name the defining features of IB, show which ones differ (expected, instructed, repeated), then explain the implication."
      },
      visual: {
        type: "grid",
        title: "Unexpected versus expected but missed",
        cols: ["Inattentional blindness", "Missed instructed target"],
        rows: [
          { head: "Object expected", cells: ["no", "yes"] },
          { head: "In the attentional set", cells: ["no", "yes"] },
          { head: "How often measured", cells: ["once per person", "many trials"] },
          { head: "Main cause", cells: ["outside attentional set", "engagement uses up capacity"] }
        ]
      },
      answer: [
        "Inattentional blindness, as Simons describes it, concerns <b>unexpected objects</b>: the participant is not told about the object, it is not part of the task, and it appears on a <b>single critical trial</b>. Part of the reason it is missed is that it does not match the current attentional set (e.g. 'white shirts').",
        "In these newer studies the target is <b>explicitly instructed</b>, so it belongs to the attentional set, and it appears on <b>many trials</b>. The unexpectedness is gone, so surprise cannot explain the miss. The repeated trials also make it a far more reliable measure than the one-shot IB test.",
        "This makes it a <b>stronger argument for a real capacity limit</b>. IB can always be explained away with 'you did not know to look'; here people know, search, and still miss it, because attentional engagement in the primary task uses up the capacity needed for awareness. This is also what goes wrong in practice for baggage screeners, radiologists, or a driver told to watch for cyclists while in a conversation."
      ],
      takeaway: "Even knowing what to look for does not guarantee you will see it when the main task fills your attention.",
      trap: { wrong: "It is just inattentional blindness again.", right: "Name the difference: the target is expected, instructed and repeated, so surprise cannot explain the miss." },
      note: "The precise design and results of these recent studies are not worked out in the course material, so do not attach a specific theory, author or percentage to them on the exam."
    },
    {
      id: "B1",
      block: "Block B · Sternberg et al. (pp. 148–152)",
      title: "Inattentional deafness versus dichotic listening",
      canvas: "What is the difference between the inattentional deafness experiment described in the literature of problem 1A and the dichotic listening experiments described in the literature of problems 1A and 1B?",
      asks: "Both studies use headphones and both show we miss sounds. Explain how the set-ups differ and what each one measures.",
      triage: {
        symptom: "'What is the difference?': compare two paradigms.",
        diagnosis: "Dichotic listening and shadowing (Cherry; Moray; Treisman) versus inattentional deafness (Dalton & Fraenkel, 2012).",
        treatment: "Describe each set-up, contrast expected versus unexpected, what is measured and the theoretical aim, then give the shared conclusion."
      },
      visual: {
        type: "grid",
        title: "Two listening paradigms",
        cols: ["Dichotic listening", "Inattentional deafness"],
        rows: [
          { head: "Set-up", cells: ["one message per ear", "several spatial conversations"] },
          { head: "Instruction", cells: ["shadow one ear, ignore other", "follow one conversation"] },
          { head: "Ignored input", cells: ["known, continuous channel", "surprise 'I am a gorilla' voice"] },
          { head: "Measures", cells: ["how deeply ignored input is processed", "is it noticed at all?"] },
          { head: "Aim", cells: ["where is the filter?", "is attention needed for awareness?"] }
        ]
      },
      answer: [
        "In <b>dichotic listening</b> (Cherry, 1953; Moray, 1959; Treisman, 1960) participants hear a different message in each ear and must <b>shadow</b> one while ignoring the other. They know the second message is there. Researchers measure <b>how deeply</b> it is processed: physical changes (male to female voice) are noticed, changes in meaning (switch to German) are not, and one's own name is noticed by about one-third of people.",
        "In the <b>inattentional deafness</b> experiment (Dalton & Fraenkel, 2012), participants follow one of several spatially placed conversations, without shadowing. An <b>unexpected voice</b> walks through repeatedly saying 'I am a gorilla', and many listeners do not notice it. It is the auditory gorilla: it measures <b>whether</b> a sound reaches awareness at all, once, yes or no.",
        "So dichotic listening asks where the filter sits and what gets through a known channel; inattentional deafness asks whether attention is needed for awareness. Inattentional deafness also occurs under a demanding visual task (Macdonald & Lavie, 2011), which points to a resource shared across senses. Both show a <b>cognitive, not sensory, deafness</b>."
      ],
      takeaway: "Dichotic listening measures how much of a known ignored message gets through; inattentional deafness asks whether a surprise voice is noticed at all.",
      trap: { wrong: "They are the same because both use headphones.", right: "Name the expected channel versus unexpected event distinction, and depth of processing versus awareness as the measure." },
      note: null
    },
    {
      id: "B2",
      block: "Block B · Sternberg et al. (pp. 148–152)",
      title: "The cocktail party and the gorilla",
      canvas: "How is the cocktail party problem related to inattentional blindness/deafness?",
      asks: "Explain what the cocktail party problem is and show that it rests on the same mechanism as missing the gorilla, seen from the other side.",
      triage: {
        symptom: "'How is X related to Y?': find the shared mechanism and the difference in emphasis.",
        diagnosis: "Cocktail party problem = selective attention in noise; IB/deafness = failure to notice unattended unexpected events.",
        treatment: "Define both, show they reflect the same filtering (benefit versus cost), add the own-name exception, then name the difference."
      },
      visual: {
        type: "flow",
        title: "Same coin, two sides",
        steps: [
          { h: "Many voices", t: "all reach the eardrum" },
          { h: "Select one", t: "pitch, loudness, location" },
          { h: "Benefit", t: "follow your friend" },
          { h: "Cost", t: "deaf to the rest" },
          { h: "Exception", t: "own name breaks through (~1/3)" }
        ],
        verdict: "Cocktail party = benefit of selection; IB/deafness = its cost."
      },
      answer: [
        "The <b>cocktail party problem</b> is our ability to follow one conversation in a noisy room (Cherry, 1953), using the speaker's distinctive voice (pitch, pacing, rhythm), loudness and <b>location</b> (Sternberg). Inattentional blindness and deafness show what that ability costs. The same <b>selective attention</b> makes the cocktail party possible and inattentional blindness unavoidable: two observations about one mechanism.",
        "In both, the limit is attentional, not sensory. Every conversation reaches your eardrum, just as the gorilla lands on your retina, but unattended input often never reaches <b>awareness</b> (Dalton & Fraenkel, 2012).",
        "The filter is also graded and sensitive to meaning in both. About one-third of people hear their <b>own name</b> in the ignored message (Moray, 1959), just as an unexpected object matching the <b>attentional set</b> is noticed far more often (Most et al., 2001).",
        "They are not identical, though: the cocktail party effect is a selection success among known voices, inattentional blindness a detection failure for an unexpected stimulus."
      ],
      takeaway: "Focusing on your friend at a party and missing the gorilla are the same filtering, seen as benefit and cost.",
      trap: { wrong: "The cocktail party effect is just hearing your own name.", right: "It is about selecting one voice among many; the own-name finding is an exception to that selection. State the benefit/cost relation." },
      note: null
    },
    {
      id: "B3",
      block: "Block B · Sternberg et al. (pp. 148–152)",
      title: "Which theories explain hearing your name?",
      canvas: "Which theories of attention can explain the observation that you hear your name in an unattended message, and which ones cannot?",
      asks: "Hearing your name means your brain understood a word you were ignoring. Sort the attention theories by whether they allow that, and say why.",
      triage: {
        symptom: "'Which can and which cannot?': sort theories by one test.",
        diagnosis: "Broadbent, Moray, Treisman, Deutsch & Deutsch / Norman, Neisser, plus Lavie's load theory.",
        treatment: "Name the requirement (meaning of unattended input must be analysed), check each theory against it, then conclude."
      },
      visual: {
        type: "grid",
        title: "Can the theory explain your own name?",
        cols: ["Explains it?", "Why"],
        rows: [
          { head: "Broadbent (1958) early filter", cells: ["no", "blocked before meaning"] },
          { head: "Moray (1959)", cells: ["yes", "exception for relevant info"] },
          { head: "Treisman attenuation", cells: ["yes", "low threshold; explains only ~1/3"] },
          { head: "Deutsch & Deutsch (1963) late", cells: ["yes", "but predicts it too often"] },
          { head: "Neisser synthesis", cells: ["yes", "preattentive triggers attentive"] },
          { head: "Lavie perceptual load", cells: ["yes", "only under low load"] }
        ]
      },
      answer: [
        "Hearing your own name in the ignored ear (about one-third of people, Moray, 1959) shows that some <b>meaning</b> of unattended input is analysed. <b>Broadbent's (1958) early filter</b> cannot explain it: it selects on physical features before meaning, so a name should never be recognised.",
        "<b>Moray</b> can, by making personally relevant information an exception that breaks through, though that describes rather than explains it. <b>Treisman's attenuation model</b> explains it most neatly: the ignored message is weakened, not blocked, and your name has a permanently low threshold. This also explains why only about a third hear it. The <b>late filter</b> of Deutsch and Deutsch (1963; Norman, 1968) can too, but predicts you would hear your name almost always. Neisser's synthesis lets preattentive processing pull attention toward the name.",
        "<b>Lavie's perceptual load theory</b> reconciles them: under low load spare capacity spills into the ignored stream, under high load it does not. Finally, Conway, Cowan and Bunting (2001) found that about 65% of low working-memory spans heard their name against 20% of high spans, so breaking through is partly a failure of attentional control."
      ],
      takeaway: "Only a model that blocks all meaning early (Broadbent) fails; any model that weakens or filters late can explain your name.",
      trap: { wrong: "Treisman's filter blocks the unattended message.", right: "Treisman's filter attenuates (weakens) it, which is exactly why a low-threshold word like your name still gets through." },
      note: null
    },
    {
      id: "B4",
      block: "Block B · Sternberg et al. (pp. 148–152)",
      title: "Filter versus bottleneck theories",
      canvas: "Is there a difference between filter theories and bottleneck theories of attention?",
      asks: "Give Sternberg's definitions of a filter and a bottleneck, then explain why in the actual theories the two ideas largely overlap.",
      triage: {
        symptom: "'Is there a difference?': give the definitional difference AND the nuance.",
        diagnosis: "Sternberg's definitions of filter and bottleneck; early and late models; structural versus capacity models.",
        treatment: "Define both, show that every filter theory is also a bottleneck theory, then name the contrast that really matters."
      },
      visual: {
        type: "versus",
        title: "Two questions, not two camps",
        cols: [
          { head: "Filter", sub: "which information gets through?", tone: "accent", points: ["blocks some information", "Broadbent blocks, Treisman attenuates"] },
          { head: "Bottleneck", sub: "where does processing run out?", tone: "neutral", points: ["limited throughput, one at a time", "Broadbent, Treisman, Deutsch & Deutsch"] }
        ],
        verdict: "Every filter theory is also a bottleneck theory."
      },
      answer: [
        "In principle, yes. Sternberg defines a <b>filter</b> as a mechanism that blocks some information, so only part of it passes to the next stage. A <b>bottleneck</b> slows information down: a point of limited capacity where only one source passes at a time, so other information is delayed rather than necessarily removed.",
        "In practice they overlap, and the terms are often used interchangeably. Broadbent (1958), Treisman and Deutsch and Deutsch (1963) all propose a bottleneck and differ only in <b>where</b> it sits: before, partly before, or after semantic analysis. The filter is the mechanism that selects at that point. So <b>every filter theory is also a bottleneck theory</b>, but not every bottleneck model describes the selection as a filter: Treisman's attenuator is a volume knob rather than a tap.",
        "The contrast that really matters is between these <b>structural</b> models and <b>capacity models</b> (Kahneman, 1973; Lavie), which assume a flexibly divisible resource instead of a fixed narrow point. Capacity models explain gradations and why the locus of selection seems to shift with task difficulty."
      ],
      takeaway: "A filter decides what gets through at the bottleneck; the real debate is fixed bottleneck versus flexible capacity.",
      trap: { wrong: "Answer just 'yes' or 'no'.", right: "Give both definitions, say every filter theory is also a bottleneck theory, and that early and late models differ only in where the bottleneck sits." },
      note: null
    },
    {
      id: "B5",
      block: "Block B · Sternberg et al. (pp. 148–152)",
      title: "Selective attention versus task switching",
      canvas: "How are the phenomena studied in problems 1A and 1B different from task switching, which was introduced in the first lecture?",
      asks: "Explain what the gorilla and dichotic listening studies are really about, what task switching is about, and how the two differ in what is selected and how it is measured.",
      triage: {
        symptom: "'How are they different?': contrast phenomena from the readings with a lecture concept.",
        diagnosis: "Selective attention (IB, dichotic listening) versus task switching (executive control, switch costs).",
        treatment: "Define what 1A/1B study, define task switching and where its cost comes from, then contrast what is selected, the timing and the measurement."
      },
      visual: {
        type: "grid",
        title: "Which input? versus which task?",
        cols: ["Problems 1A & 1B", "Task switching"],
        rows: [
          { head: "What competes", cells: ["simultaneous input streams", "task sets (rules, goals)"] },
          { head: "Timing", cells: ["at the same moment", "successive tasks"] },
          { head: "Mechanism", cells: ["perceptual selection", "executive control"] },
          { head: "Measure", cells: ["awareness: did you notice?", "switch cost: RT, errors"] }
        ]
      },
      answer: [
        "Problems 1A and 1B are about <b>selective attention</b>: choosing which input (a voice, an ear, the white team's passes) is processed while other input present at the same moment is filtered or attenuated. The measure is <b>awareness</b> of the ignored information: did you notice the gorilla, the language change, your name?",
        "<b>Task switching</b> is about executive control over which task set (goal and rules) drives behaviour. People alternate between tasks, for example judging digits as odd or even, then as high or low. The key finding is a <b>switch cost</b>: slower responses and more errors on switch trials than on repeat trials. It comes from <b>task-set reconfiguration</b> (Rogers & Monsell, 1995) and <b>task-set inertia</b>, the old task set still interfering (Allport, Styles & Hsieh, 1994).",
        "So selective attention selects among stimuli at the same moment, while task switching selects among tasks over time, measured by performance costs rather than awareness. Task switching is Miyake's 'shifting', an executive function that returns in Theme 2. Both show that cognitive capacity is scarce, exposed at the input versus at the transition between tasks."
      ],
      takeaway: "1A/1B ask which input gets in; task switching asks what it costs to change the task.",
      trap: { wrong: "Task switching means dividing attention between two simultaneous inputs.", right: "Task switching is alternating task sets over time, measured by switch costs, not awareness." },
      note: "Task switching comes from the first lecture, not from the readings of problems 1A and 1B; the switch-cost mechanisms are taken from the course summary (Pass the Year reader)."
    }
  ]
};
