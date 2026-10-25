IDQ[1] = {
  n: 1,
  title: "Attention",
  readings: ["Simons, Failures of awareness (source A)", "Sternberg et al., pp. 148–152 (source B)"],
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
        diagnosis: "Inattentional blindness is a failure of awareness; the rival account is a memory failure ('inattentional amnesia').",
        treatment: "Say what forgetting would require, show why the gorilla case does not fit, then conclude that attention, not memory, is the bottleneck."
      },
      visual: {
        type: "versus",
        title: "Two explanations for missing the gorilla",
        cols: [
          { head: "Never seen", sub: "inattentional blindness", tone: "good", points: ["attention elsewhere, no awareness at the time", "misses rise with task effort", "noticers report it right away"] },
          { head: "Seen, then forgotten", sub: "inattentional amnesia", tone: "bad", points: ["gorilla is bizarre and visible 9 s", "asked only seconds later", "distinctive events are remembered better"] }
        ],
        verdict: "You cannot forget what never got in."
      },
      answer: [
        "The forgetting account is unlikely because the gorilla is exactly the kind of event memory keeps. In Simons and Chabris (1999) a person in a <b>gorilla suit</b> walks into the middle of the scene, thumps its chest and stays visible for about <b>9 seconds</b>. Participants are asked only seconds after the video, so there is hardly time to forget something so <b>distinctive</b> and surprising.",
        "The pattern of results also points to attention, not memory. Missing the event becomes more likely when the primary task is harder (separate counts of bounce and aerial passes, faster tracking: Simons & Jensen, 2009), and less likely when the object is similar to the attended items (Most et al., 2001). These are <b>attention manipulations</b>. People who do notice usually report it immediately and with surprise.",
        "Finally, the theory says awareness itself requires attention: without attention to the unexpected event you are unlikely to become aware of it (Mack & Rock, 1998). If the gorilla never reached <b>awareness</b>, there is nothing to forget. So the failure lies in seeing, not in storing."
      ],
      takeaway: "A bizarre event asked about seconds later would be remembered, so people who miss it truly never saw it.",
      trap: { wrong: "It is unlikely simply because the gorilla is too obvious to miss.", right: "You need the memory argument: very short delay plus a highly distinctive event, and misses that follow attention manipulations." },
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
        treatment: "Say what IB is a side-effect of, describe a world without filtering, then add Simons' evolutionary argument."
      },
      visual: {
        type: "map",
        title: "Why inattentional blindness is useful",
        center: "IB is the flip side of focus",
        branches: [
          { h: "Limited capacity", t: "noticing everything means overload" },
          { h: "No filter, no focus", t: "reading, driving, talking would suffer" },
          { h: "Unexpected events are rare", t: "most need no immediate response" },
          { h: "Short delays cost little", t: "others in the group can alert you" }
        ]
      },
      answer: [
        "Inattentional blindness is the flip side of <b>focused, selective attention</b>. Because attention has <b>limited capacity</b>, the same mechanism that lets us zero in on what we want while filtering out distractions also makes us miss unexpected things outside that focus (Simons).",
        "Without it, every object and sound around us would compete for awareness. We would be overwhelmed by information, constantly distracted, and unable to finish goal-directed tasks such as reading, holding a conversation or driving.",
        "Simons adds an <b>evolutionary argument</b>: the ability to focus intently was probably more useful than the ability to notice the unexpected. Unexpected events are by definition rare, most need no immediate response, a short delay in noticing usually costs little, and in a group others may notice and alert us. Today high speeds and phones make even short delays costly, but the fix is to reduce distraction, not to eliminate IB.",
        "So removing IB would trade a rare cost for a <b>constant loss of focus</b>: it is a feature, not a bug."
      ],
      takeaway: "Missing the gorilla is the price we pay for being able to concentrate.",
      trap: { wrong: "We would just see too much.", right: "Link it to limited capacity and loss of focus, and do not forget Simons' evolutionary argument." },
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
          { head: "Visual limit", sub: "eyes are 'full'", tone: "bad", points: ["IB only with visual tasks", "ruled out by a memory task"] },
          { head: "Central limit", sub: "shared attention budget", tone: "good", points: ["memory task alone causes IB", "thinking or phoning can blind us"] }
        ],
        verdict: "The limits are not purely visual."
      },
      answer: [
        "The finding matters because it shows <b>where the limit lies</b>. In the classic studies the primary task was visual (tracking shapes, counting passes), so inattentional blindness could have been a limit of the <b>visual system</b>: the eyes or visual attention are simply full.",
        "Fougnie and Marois (2007) showed that people also miss unexpected visual objects when their resources go to a <b>memory task</b>. As Simons concludes, the limits are not purely visual but reflect limits on the capacity of attention. IB therefore reflects a <b>central, general-purpose attentional resource</b> shared across tasks.",
        "This has practical consequences. Any demanding mental activity, such as rehearsing something, solving a problem or holding a phone conversation, can blind us to what is in front of us. It explains why phone users miss a unicycling clown (Hyman et al., 2011) and why phoning while driving is risky even hands-free (Strayer & Johnston, 2001). It also links IB to <b>working memory</b>, which motivates the research on working-memory capacity and noticing."
      ],
      takeaway: "A busy mind makes blind eyes: the bottleneck is attention, not vision.",
      trap: { wrong: "Just restate that a memory task causes IB.", right: "The point is the contrast: a visual limit is ruled out, a central attentional limit is supported, with real-world examples (phones, driving)." },
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
        treatment: "Define both, contrast what is missed and the role of memory and comparison, then use the video as the example."
      },
      visual: {
        type: "grid",
        title: "Two failures, two different questions",
        cols: ["Inattentional blindness", "Change blindness"],
        rows: [
          { head: "What is missed", cells: ["an unexpected object", "a change in the scene"] },
          { head: "Example", cells: ["the gorilla", "curtain colour, player leaving"] },
          { head: "Object present now", cells: ["yes", "no"] },
          { head: "Needs before vs after comparison", cells: ["no", "yes"] }
        ]
      },
      answer: [
        "Both are failures of awareness caused by limited attention, but they differ in <b>what is missed</b>. Inattentional blindness is failing to notice an <b>unexpected object</b> that is fully visible while attention is on another task, like the gorilla. The observer only has to detect something present at that moment.",
        "Change blindness is failing to notice that something in a scene has <b>changed</b>, like the curtain colour or a player leaving in the Monkey Business video. To detect a change, the earlier state must be stored and compared with the current one, so change blindness also involves <b>memory for the scene</b>. Changes can also happen gradually or during an interruption.",
        "The Monkey Business Illusion combines both. Viewers who already know about the gorilla look for it and see it, yet most still miss the curtain change and the departing player. So expecting one unexpected event does not help you notice others, and we represent far less of a scene than we think (cf. Levin & Angelone, 2008)."
      ],
      takeaway: "Inattentional blindness misses what is there; change blindness misses what changed.",
      trap: { wrong: "They are two names for the same thing.", right: "Change blindness needs a comparison between two moments (memory); inattentional blindness concerns an object present now." },
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
          { head: "Part of the task", cells: ["no", "yes"] },
          { head: "How often", cells: ["one critical trial", "many trials"] },
          { head: "Main cause", cells: ["outside attentional set", "engagement uses up capacity"] }
        ]
      },
      answer: [
        "Inattentional blindness, as Simons describes it, concerns <b>unexpected objects</b>: the participant is not told about the object, it is not part of the task, and it usually appears on a <b>single critical trial</b>. Part of the reason it is missed is that it does not match the current attentional set (e.g. 'white shirts'), so it is filtered out.",
        "In these newer studies participants were <b>explicitly instructed</b> to look for the target, and it appears on <b>many trials</b>, so it is neither surprising nor outside their goals. When they still miss it, the miss cannot be explained by the object being unexpected.",
        "Instead, it shows that <b>attentional engagement</b> in a demanding primary task can, by itself, use up the limited capacity needed for awareness. This looks more like a divided-attention or dual-task cost than a failure to expect, and it is a stronger demonstration of the limits of attention, for example a driver told to watch for cyclists while in a conversation."
      ],
      takeaway: "Even knowing what to look for does not guarantee you will see it when the main task fills your attention.",
      trap: { wrong: "It is just inattentional blindness again.", right: "Name the difference: the target is expected, instructed and repeated, so surprise cannot explain the miss." },
      note: null
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
        treatment: "Describe each set-up, contrast expected versus unexpected, channel versus event, task demand and what is measured, then give the shared conclusion."
      },
      visual: {
        type: "grid",
        title: "Two listening paradigms",
        cols: ["Dichotic listening", "Inattentional deafness"],
        rows: [
          { head: "Set-up", cells: ["one message per ear", "several spatial conversations"] },
          { head: "Task", cells: ["shadow one ear aloud", "follow one conversation"] },
          { head: "Ignored input", cells: ["known, continuous channel", "surprise 'I am a gorilla' voice"] },
          { head: "Question asked", cells: ["what was in the other ear?", "anything unusual?"] }
        ]
      },
      answer: [
        "In <b>dichotic listening</b> (Cherry, 1953; Moray, 1959; Treisman, 1960) participants hear a different message in each ear and must <b>shadow</b> one while ignoring the other. The ignored message is a known, continuous channel, and researchers test which of its features get through: physical changes (male to female voice) are noticed, semantic changes (switch to German) are not, and one's own name is noticed about one-third of the time.",
        "In the <b>inattentional deafness</b> experiment (Dalton & Fraenkel, 2012), participants attend to one of several spatially placed conversations, without shadowing. An <b>unexpected voice</b> walks through repeatedly saying 'I am a gorilla', and many listeners do not notice it. It is the auditory version of the gorilla study.",
        "So the key differences are an unexpected event versus an expected competing channel, a single critical event in a natural scene versus a continuous message, no shadowing demand, and the question asked. Both show the same thing: unattended sound is processed far less than we expect, a <b>cognitive, not sensory, deafness</b>."
      ],
      takeaway: "Dichotic listening ignores a known second message; inattentional deafness misses a surprise voice.",
      trap: { wrong: "They are the same because both use headphones.", right: "Name the expected channel versus unexpected event distinction, plus shadowing and what is measured." },
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
        treatment: "Define both, show they reflect the same filtering (benefit versus cost), then add the own-name exception."
      },
      visual: {
        type: "flow",
        title: "Same coin, two sides",
        steps: [
          { h: "Many voices", t: "noisy party" },
          { h: "Select one", t: "pitch, loudness, location" },
          { h: "Benefit", t: "follow your friend" },
          { h: "Cost", t: "deaf to the rest" },
          { h: "Exception", t: "own name breaks through (~1/3)" }
        ],
        verdict: "Cocktail party = benefit of selection; IB/deafness = its cost."
      },
      answer: [
        "The <b>cocktail party problem</b> is our ability to follow one conversation in a noisy room full of speakers (Cherry, 1953). We do this using the speaker's distinctive sensory features (pitch, pacing, rhythm), sound intensity and <b>location</b> (Sternberg). Selection works because the other conversations are filtered out or attenuated.",
        "Inattentional blindness and deafness are the other side of the same coin. Because attention selects one source and has <b>limited capacity</b>, unattended information, even something as odd as a voice saying 'I am a gorilla', often never reaches awareness (Dalton & Fraenkel, 2012). The cocktail party problem stresses the <b>benefit</b> of selection, IB and deafness its <b>cost</b>.",
        "Selection is not absolute, though. Highly relevant stimuli such as your own name can break through for about one-third of people (Moray, 1959; Conway et al., 2001), which is what the filter theories try to explain."
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
        diagnosis: "Broadbent, Moray, Treisman, Deutsch & Deutsch / Norman, Neisser.",
        treatment: "Name the requirement (meaning of unattended input must be analysed), check each theory against it, then conclude."
      },
      visual: {
        type: "grid",
        title: "Can the theory explain your own name?",
        cols: ["Explains it?", "Why"],
        rows: [
          { head: "Broadbent (1958) early filter", cells: ["no", "blocked before meaning"] },
          { head: "Moray selective filter", cells: ["yes", "salient info bursts through"] },
          { head: "Treisman attenuation", cells: ["yes", "low threshold for own name"] },
          { head: "Deutsch & Deutsch (1963) late", cells: ["yes", "meaning analysed before filter"] },
          { head: "Neisser synthesis", cells: ["yes", "preattentive triggers attentive"] }
        ]
      },
      answer: [
        "Hearing your own name in the unattended ear (Moray, 1959; about one-third of people, Conway et al., 2001) shows that some <b>meaning</b> of the unattended message is analysed. So a theory can only explain it if unattended input is processed up to the level of meaning.",
        "<b>Broadbent's (1958) early filter</b> cannot explain it. The filter selects one channel right after the sensory register on physical features, so the unattended message is blocked before meaning and a name should never be recognised.",
        "The others can. <b>Moray's selective filter</b> blocks most information but lets very salient messages, like your name, burst through. <b>Treisman's attenuation model</b> weakens rather than blocks the unattended message, and words with a low threshold, like your name, are still activated. The <b>late filter</b> of Deutsch and Deutsch (1963; Norman, 1968) analyses all input for meaning before selection. Neisser's synthesis lets preattentive processing trigger attention to relevant items.",
        "One nuance: people with lower working-memory capacity notice their name more often, suggesting attention lapses toward the unattended ear also play a role (Conway et al., 2001)."
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
        diagnosis: "Sternberg's definitions of filter and bottleneck; early and late models.",
        treatment: "Define both, note that the classic models are both, then conclude 'yes in principle, overlapping in practice'."
      },
      visual: {
        type: "versus",
        title: "Blocking versus slowing (Sternberg)",
        cols: [
          { head: "Filter", sub: "a door with a bouncer", tone: "accent", points: ["blocks some information", "passes only part to next stage"] },
          { head: "Bottleneck", sub: "a narrow bottle neck", tone: "neutral", points: ["slows information down", "one source at a time, rest waits"] }
        ],
        verdict: "Early and late models have both; they differ only in where it sits."
      },
      answer: [
        "In principle, yes. Sternberg defines a <b>filter</b> as a mechanism that blocks some information, so that only part of it passes to the next stage. A <b>bottleneck</b> slows information down: it is a point of limited capacity where only one source can pass at a time, so other information is delayed rather than necessarily removed.",
        "In practice they overlap. Sternberg groups the theories together as filter and bottleneck theories. Both the <b>early filter</b> (Broadbent, 1958) and the <b>late filter</b> models (Deutsch & Deutsch, 1963; Norman, 1968) propose a bottleneck through which only one source can pass. They differ only in <b>where</b> it sits: before or after semantic analysis.",
        "Treisman's attenuation model blurs the line further, because its filter weakens rather than blocks. So the difference is mainly one of emphasis: blocking (what gets through) versus limited throughput (how much and how fast)."
      ],
      takeaway: "A filter blocks, a bottleneck slows, but the classic theories use both and argue only about where the narrow point is.",
      trap: { wrong: "Answer just 'yes' or 'no'.", right: "Give both definitions and Sternberg's point that early and late models both posit a bottleneck." },
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
        treatment: "Define what 1A/1B study, define task switching, then contrast what is selected, the timing and the measurement."
      },
      visual: {
        type: "grid",
        title: "Which input? versus which task?",
        cols: ["Problems 1A & 1B", "Task switching"],
        rows: [
          { head: "What is selected", cells: ["an input stream", "a task set (rules, goal)"] },
          { head: "Timing", cells: ["simultaneous inputs", "sequential tasks"] },
          { head: "Measure", cells: ["awareness: did you notice?", "switch cost: RT, errors"] }
        ]
      },
      answer: [
        "Problems 1A and 1B are about <b>selective attention</b>: how we choose which input (a voice, an ear, the white team's passes) is processed while other input present at the same time is filtered or attenuated. The measure is <b>awareness</b> of the unattended information: did you notice the gorilla, the language change, your name?",
        "<b>Task switching</b> is about executive control over which task set (goal and rules) is active. Participants alternate between tasks, for example judging digits as odd or even and then as high or low. The key finding is a <b>switch cost</b>: slower and less accurate responses after a switch, because the system must reconfigure the task set and overcome interference from the previous one.",
        "So selective attention selects among stimuli at the same moment, while task switching selects among tasks over time, measured by performance costs rather than awareness. They are related: everyday multitasking, like phoning while driving, is often rapid switching, and the same attentional limits behind inattentional blindness make switching costly."
      ],
      takeaway: "1A/1B ask which input gets in; task switching asks what it costs to change the task.",
      trap: { wrong: "Task switching means dividing attention between two simultaneous inputs.", right: "Task switching is alternating task sets over time, measured by switch costs, not awareness." },
      note: "Task switching comes from the first lecture, not from the readings of problems 1A and 1B."
    }
  ]
};
