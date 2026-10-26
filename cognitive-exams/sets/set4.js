// Mock exam built from the course readings, in-depth answers and lectures. Options are shuffled.
EXAMS.push({
 "id": "set4", "group": "mock",
 "shuffle": true,
 "title": "Mock exam A",
 "blurb": "A full 25-question mock exam covering Themes 1 to 8 and the extra lectures, with all five exam skills: key concepts, main findings, figures and tables, comparing theories and applying them. Your results show your score per topic and per skill.",
 "questions": [
  {
   "s": "comp",
   "t": "att",
   "q": "In dichotic listening studies, only about one third of participants notice their own name in the unattended ear. Why does this finding fit Treisman's attenuation model better than Deutsch and Deutsch's late-selection model?",
   "o": [
    "Late selection analyses the meaning of all input, so it predicts that people would notice their name almost always; attenuation lets a weakened signal through that only sometimes crosses the low threshold of one's name.",
    "Late selection blocks the unattended ear completely, so it predicts that nobody would ever notice their own name.",
    "Attenuation assumes that selection is based only on physical features, which explains why the name is usually missed.",
    "Late selection assumes that personally relevant words break through an early filter, so it predicts that only a few people notice their name."
   ],
   "a": 0,
   "spot": "“Only one third” + two models that both CAN explain the name: which one also predicts how often?",
   "why": "In <b>late selection</b> (Deutsch & Deutsch) everything is processed up to meaning, so your name should be recognised nearly every time. In <b>attenuation</b> (Treisman) the ignored message is turned down, not off; your name has a permanently <b>lowered threshold</b>, so the weakened signal sometimes, but not always, reaches awareness. Blocking the unattended ear completely is Broadbent, and an exception for personally relevant input is Moray, not Deutsch and Deutsch."
  },
  {
   "s": "fig",
   "t": "att",
   "chart": {
    "type": "bar",
    "title": "Joggers who missed a staged fight (Chabris et al., 2011)",
    "x": [
     "At night",
     "During the day"
    ],
    "y": "% who did not notice the fight",
    "series": [
     {
      "name": "Missed the fight",
      "v": [
       65,
       44
      ]
     }
    ],
    "note": "Simons, Failures of awareness",
    "min": 0,
    "max": 100
   },
   "q": "Participants jogged behind an experimenter who ran right past a staged fight. The figure shows how many of them did not notice the fight. Which conclusion is best supported?",
   "o": [
    "Inattentional blindness also occurs in a natural setting: even in daylight, almost half of the joggers missed a clearly visible event.",
    "Missing the fight was mainly a visual problem, because the effect disappeared in daylight.",
    "Joggers saw the fight but forgot it before they were asked, which is inattentional amnesia.",
    "The joggers missed the fight because it did not resemble the experimenter they were following, which is change blindness."
   ],
   "a": 0,
   "spot": "Two bars, one is lower but still high: is the effect gone, or still there under good conditions?",
   "why": "Better light lowered the miss rate from <b>65%</b> to <b>44%</b>, but nearly half still ran past the fight. So the limit is <b>attention</b> (they were busy following the runner), not the eyes, and <b>inattentional blindness</b> happens outside the lab too. The effect did not disappear in daylight, so it is not mainly a visual problem. Change blindness is about missing a change between two versions of a scene, which is not what happened here."
  },
  {
   "s": "app",
   "t": "ts",
   "q": "In a study, all students keep their phone on the desk while reading a text. In one group the phones regularly receive notifications, which the students have been told to ignore; in the other group no notifications arrive. The notification group later remembers less of the text. Which finding from the lecture does this illustrate?",
   "o": [
    "Merely receiving and ignoring a notification already costs attention (Stothart et al., 2015).",
    "The mere presence effect: a phone lying nearby costs capacity (Ward et al., 2017).",
    "Taking notes without a phone leads to better test scores (Kuznekoff & Titsworth, 2013).",
    "Divided attention lowers recall but keeps high-value items intact (Middlebrooks et al., 2017)."
   ],
   "a": 0,
   "spot": "Both groups have the phone nearby; the only difference is the notification.",
   "why": "Because <b>both</b> groups have a phone on the desk, the mere presence of the phone cannot explain the difference. What differs is that one group receives <b>notifications</b> and has to ignore them, and Stothart et al. (2015) showed that this alone already hurts attention. The mere presence effect (Ward) would compare a phone nearby with a phone in another room."
  },
  {
   "s": "find",
   "t": "stm",
   "q": "Keppel and Underwood (1962) re-analysed the Brown/Peterson task trial by trial. On the very first trial, participants forgot almost nothing, even after an 18-second delay; forgetting built up over the following trials. What does this suggest about the forgetting in the Brown/Peterson task?",
   "o": [
    "It is largely due to proactive interference from items of earlier trials, not to decay over time.",
    "It is largely due to decay, because the delay of 18 seconds was the same on every trial.",
    "It is largely due to retroactive interference from the items of the following trials.",
    "It shows that the capacity of short-term memory is only about three items."
   ],
   "a": 0,
   "spot": "Same delay, but trial 1 is fine and later trials are not: what changed is how many items came before.",
   "why": "If <b>decay</b> caused the forgetting, an 18-second delay should hurt trial 1 as much as trial 5. It does not: forgetting only appears once earlier lists have been learned, so the old lists disrupt the new one: <b>proactive interference</b>. Retroactive interference would come from later material, but recall of trial 1 happens before any later trial exists. Release from PI (Wickens) supports the same interference story."
  },
  {
   "s": "fig",
   "t": "wm",
   "chart": {
    "type": "bar",
    "title": "Quality of chess-move selection with a secondary task (Robbins et al., 1996)",
    "x": [
     "Tapping (control)",
     "Articulatory suppression",
     "Sketchpad suppression",
     "Central executive suppression"
    ],
    "y": "Quality of move selection",
    "series": [
     {
      "name": "Weaker players",
      "v": [
       16,
       17.5,
       13.5,
       13
      ]
     },
     {
      "name": "Stronger players",
      "v": [
       30,
       29,
       19,
       19
      ]
     }
    ],
    "note": "Approximate values read from Figure 6.4, Eysenck & Keane (2015)",
    "min": 10,
    "max": 30
   },
   "q": "Weaker and stronger chess players chose moves while doing one of four secondary tasks. Which conclusion does the figure support?",
   "o": [
    "Choosing chess moves draws on the central executive and the visuo-spatial sketchpad, but not on the phonological loop.",
    "Choosing chess moves draws on the phonological loop and the central executive, but not on the visuo-spatial sketchpad.",
    "Choosing chess moves draws on all three components, because every secondary task lowered the quality of moves.",
    "Only stronger players use working memory to choose moves; weaker players rely on long-term memory."
   ],
   "a": 0,
   "spot": "Which secondary tasks pull the bars down compared with the control bar?",
   "why": "Compare each bar with <b>tapping</b> (the control). Repeating “see-saw” (<b>articulatory suppression</b>, the loop) leaves move quality about the same, while the keypad pattern (<b>sketchpad</b>) and random number generation (<b>central executive</b>) clearly lower it. A component is involved only if loading it hurts the main task, so the loop is not needed. The same pattern appears in both groups, so weaker players use working memory too."
  },
  {
   "s": "def",
   "t": "wm",
   "q": "In the working memory test battery used by McGonnell et al. (2024), a child hears a list of digits, for example 4 – 9 – 2, and must say them in reverse order (2 – 9 – 4). Which working memory component does this subtest assess?",
   "o": [
    "The verbal central executive",
    "The phonological loop",
    "The visuo-spatial sketchpad",
    "The episodic buffer"
   ],
   "a": 0,
   "spot": "Verbal material + you must DO something with it (reverse it), not just store it.",
   "why": "The battery crosses <b>verbal versus visuospatial</b> with <b>storage only versus storage plus processing</b>. Simply repeating digits in the same order is storage only: the <b>phonological loop</b>. Reversing the list adds a processing demand, so Backwards Digit Recall measures the <b>verbal central executive</b>. The episodic buffer was not measured in this study."
  },
  {
   "s": "app",
   "t": "mal",
   "q": "Two weeks after a robbery in a bakery, a detective brings the shop assistant back into the bakery, at the same time of day, before asking her to describe what happened. She now remembers more details than at the police station. Which process does the detective use?",
   "o": [
    "Context-dependent memory at retrieval: matching the recall setting to the learning setting gives better cues.",
    "Consolidation during storage: returning to the bakery strengthens the memory trace while it is being stored.",
    "Better encoding: the second visit lets her take in the details of the robbery again.",
    "The misinformation effect: the bakery suggests new details that she adds to her memory."
   ],
   "a": 0,
   "spot": "The event is over; what changes is WHERE she tries to remember it.",
   "why": "The robbery itself (encoding) is long past; only the <b>setting at the moment of remembering</b> changes. When the place of recall matches the place of learning, the environment acts as a <b>retrieval cue</b>, as Godden and Baddeley (1975) showed with divers who learned and recalled words underwater or on land. Re-encoding is impossible because the robbery is not happening again, and nobody gives her misleading information."
  },
  {
   "s": "def",
   "t": "auto",
   "q": "For a project on memory across the lifespan, a researcher reads out single words such as <i>bicycle</i>, <i>rain</i> and <i>proud</i> to a group of 60-year-olds. For each word, participants briefly describe the first personal event that comes to mind and say how old they were when it happened. Which method is the researcher using?",
   "o": [
    "The Galton-Crovitz cue-word technique",
    "The diary technique",
    "Targeted event recall",
    "The Autobiographical Memory Interview"
   ],
   "a": 0,
   "spot": "Single word as a prompt → any memory from any period → date it: that is the cue-word method.",
   "why": "In the <b>cue-word technique</b> (Galton, revived by Crovitz and Schiffman) a single word cues any personal memory, which the participant describes and dates. Because memories can come from any age, it is the method used to draw the <b>autobiographical retention function</b>. Targeted event recall is tempting, but it asks about one specific event chosen by the researcher (such as the birth of a sibling); the diary technique has people record events every day and tests them later."
  },
  {
   "s": "find",
   "t": "amn",
   "q": "In a study by Della Sala's group in Edinburgh, four densely amnesic patients and six control participants heard a story and had to retell it one hour later. The hour was spent either resting in a darkened, quiet room or doing the kind of cognitive tests used in a patient assessment. What was found?",
   "o": [
    "After the quiet hour the patients recalled almost as much as the controls; after the hour filled with tests they recalled virtually nothing",
    "The patients recalled very little in both conditions, because their damage prevents any new story from being stored",
    "The quiet room helped the controls much more than the patients, because the patients cannot consolidate new memories at all",
    "The patients recalled more after the hour filled with tests, because the tasks kept them alert"
   ],
   "a": 0,
   "spot": "Learning → quiet rest or busy tasks → test later: this is about protecting consolidation from interference.",
   "why": "<b>Consolidation</b> theory says new traces are fragile at first. When nothing <b>interferes</b> after learning (a dark, quiet room), even densely amnesic patients kept most of the story; filling the hour with tasks wiped it out. The tempting idea that patients store nothing is wrong: their problem is that fragile traces are easily disrupted, which is why a short rest after learning could help patients in practice."
  },
  {
   "s": "fig",
   "t": "photo",
   "q": "The figure shows Experiment 1 of Soares and Storm (2018): 42 students looked at paintings (Observe), photographed them with the phone camera (Camera) or photographed them with Snapchat, which does not save the photo (Snapchat). Chance level was .25. Camera vs Observe: p = .003; Snapchat vs Observe: p &lt; .001; Snapchat vs Camera: p = .031. Which conclusion is best supported?",
   "chart": {
    "type": "bar",
    "title": "Memory for painting details, Experiment 1",
    "x": [
     "Observe",
     "Camera",
     "Snapchat"
    ],
    "y": "Mean proportion correct",
    "series": [
     {
      "name": "Proportion correct",
      "v": [
       0.58,
       0.45,
       0.36
      ]
     }
    ],
    "note": "Soares & Storm (2018), Experiment 1; values approximate, read from the figure",
    "min": 0,
    "max": 0.7
   },
   "o": [
    "Taking a photo impaired memory even when participants knew the photo would not be saved, which is hard to explain with the offloading hypothesis",
    "Snapchat scored lowest, so this experiment cleanly shows that the act of photographing, and not reduced viewing time, causes the impairment",
    "Camera and Snapchat did not differ, so it makes no difference to memory whether the photo is saved",
    "Memory for photographed paintings fell to chance level, so nothing was encoded while taking a photo"
   ],
   "a": 0,
   "spot": "A figure with three conditions and p-values → read which bars differ, then ask which hypothesis the pattern hurts.",
   "why": "Both photo conditions were worse than Observe, and Snapchat photos could not be relied on later. If <b>offloading</b> to the camera caused the effect, an unsaved photo should not hurt memory, yet it did. The tempting option overclaims: Snapchat took longer to use within the 15 seconds, so <b>viewing time</b> was a confound in Experiment 1, which is exactly why Experiment 2 was run. Camera and Snapchat did differ (p = .031), and all scores were well above .25."
  },
  {
   "s": "find",
   "t": "cat",
   "q": "In Study 1 of Bozeat et al. (2003), semantic dementia patients drew objects from their spoken names. How did their drawings of living things differ from their drawings of artefacts?",
   "o": [
    "In both domains distinctive features were lost, but living things also gained wrong features typical of their domain (a duck with four legs), whereas artefacts mostly became simpler and box-like",
    "Artefacts gained wrong features typical of their domain (a kettle with a plug and buttons), whereas living things mostly became simpler outlines",
    "Living things kept their distinctive features much longer than artefacts did, because animals are more familiar and more often seen than household objects",
    "In both domains patients often added features from the other domain, such as handles on animals"
   ],
   "a": 0,
   "spot": "‘Living vs artefact drawings’ → think omissions in both domains, intrusions mainly for living things.",
   "why": "Patients lost <b>distinctive features</b> in both domains. For living things they also added <b>intrusions</b>: wrong features that are common in the domain, which made drawings more ‘prototypical’, such as four legs on a duck. Artefact drawings just lost detail and became box-like, with few added features. Cross-domain errors (handles on animals) were extremely rare."
  },
  {
   "s": "app",
   "t": "cat",
   "q": "A running app asks users how good an example each drink is of the category <i>drinks to take during a marathon</i>. Water with added salts, which replaces what you lose by sweating, gets the highest rating, even though plain water is much closer to the average drink on the list. According to Barsalou (1985), which determinant of typicality explains this rating best?",
   "o": [
    "Ideals",
    "Central tendency",
    "Frequency of instantiation",
    "Family resemblance"
   ],
   "a": 0,
   "spot": "A goal-derived category (things for a purpose) where the ‘best’ member is the one that serves the goal best → ideals.",
   "why": "For <b>goal-derived categories</b>, Barsalou found that typicality follows <b>ideals</b>: how well an item serves the goal the category exists for (like the diet food with the fewest calories). Central tendency is tempting, but the stem says plain water is closer to the average member, so resemblance to the average cannot explain why salted water wins. Frequency of instantiation is how often you have met the item as a member of the category, which the stem does not mention."
  },
  {
   "s": "comp",
   "t": "cat",
   "q": "Participants study many dot patterns, all made by randomly distorting one prototype pattern that is never shown. At test they ‘recognise’ the never-shown prototype as confidently as patterns they really saw several times. What does this finding mean for the theories of concept representation?",
   "o": [
    "It is hard for exemplar theory, because the prototype was never seen and so could not be stored as an exemplar, but it fits prototype theory",
    "It is hard for prototype theory, because people should only recognise patterns they have actually stored",
    "It supports the classical view, because the prototype contains all the necessary and sufficient features of the category",
    "It supports the knowledge approach, because the dot patterns fit what people already know about the world"
   ],
   "a": 0,
   "spot": "‘Recognised something never shown’ → something was abstracted → which theory stores only what was seen?",
   "why": "Posner, Goldsmith and Welton (1967) showed that people <b>abstract a summary</b> from the examples they see, which is exactly what <b>prototype theory</b> claims. <b>Exemplar theory</b> says a concept is just the stored examples, and a pattern that was never shown cannot be among them. The prototype-theory option reverses the logic, and dot patterns have no definition or link to world knowledge."
  },
  {
   "s": "fig",
   "t": "emo",
   "q": "In an emotional Stroop experiment (Ben-Haim et al., 2016), participants named the ink colour of words in three blocks: neutral words, then emotional words (such as <i>murder</i>, <i>shame</i>), then neutral words again. Which conclusion is best supported by the figure?",
   "chart": {
    "type": "bar",
    "title": "Colour-naming time per block",
    "x": [
     "Block 1: neutral",
     "Block 2: emotional",
     "Block 3: neutral"
    ],
    "y": "Mean reaction time (ms)",
    "series": [
     {
      "name": "Reaction time",
      "v": [
       760,
       790,
       780
      ]
     }
    ],
    "note": "Ben-Haim et al. (2016), approximate values read from the lecture slide",
    "min": 700,
    "max": 800
   },
   "o": [
    "Emotional words slowed colour naming, and part of the slowing carried over into the following neutral block",
    "Emotional words slowed colour naming because their meaning conflicted with the ink colour",
    "The slowing stopped at once: block 3 was as fast as block 1",
    "Emotional words sped up colour naming, because emotional arousal makes people more alert"
   ],
   "a": 0,
   "spot": "Compare each bar with block 1: the tallest bar is the slowest, and check whether the last bar returns to baseline.",
   "why": "Block 2 is the slowest (about 790 ms against 760 ms): emotional content <b>captures attention</b> and makes it harder to stay on the colour task, so <b>inhibitory control</b> suffers. Block 3 (about 780 ms) does not return to the level of block 1, so the effect lingers. The tempting ‘conflict’ option confuses this with the classic Stroop: an emotional word like <i>murder</i> does not name a colour, so there is no word-colour conflict."
  },
  {
   "s": "fig",
   "t": "img",
   "q": "In Experiment 1 of Besken and Mulligan (2021), participants formed an image for bizarre and common sentences. In the visual distraction group the sentences were read aloud while participants watched dynamic visual noise; the auditory control group heard the sentences without noise; the visual control group read them on screen. The figure shows the proportion of sentences accessed in free recall. Which conclusion fits these data best?",
   "chart": {
    "type": "bar",
    "title": "Experiment 1: sentence access",
    "x": [
     "Visual control",
     "Visual distraction (DVN)",
     "Auditory control"
    ],
    "y": "Proportion of sentences accessed",
    "series": [
     {
      "name": "Bizarre",
      "v": [
       0.54,
       0.59,
       0.45
      ]
     },
     {
      "name": "Common",
      "v": [
       0.32,
       0.3,
       0.39
      ]
     }
    ],
    "note": "Besken & Mulligan (2021), Table 2",
    "min": 0,
    "max": 0.7
   },
   "o": [
    "Visual noise did not shrink the bizarreness effect: the effect was larger under visual noise than in the matching auditory control",
    "Visual noise shrank the bizarreness effect compared with the auditory control, as the imagery hypothesis predicts",
    "The auditory control showed the largest bizarreness effect of the three groups",
    "Visual noise lowered recall of the bizarre sentences but left recall of the common sentences unchanged"
   ],
   "a": 0,
   "spot": "Figure with two bars per group → compare the GAP between bizarre and common across groups, not the bar heights.",
   "why": "The <b>bizarreness effect</b> is the gap between bizarre and common. Under dynamic visual noise the gap is .59 − .30 = .29, while in the auditory control (same auditory presentation, no noise) it is only .45 − .39 = .06. If imagery carried the effect, <b>DVN</b> should have made the gap smaller, but it is bigger. The tempting option (noise shrank the effect) is exactly what the <b>imagery hypothesis</b> predicted and what was not found."
  },
  {
   "s": "comp",
   "t": "img",
   "q": "Which of the following findings is the best support for the propositional view of mental images rather than the analogue view?",
   "o": [
    "After seeing a Star of David, people rarely detected that a parallelogram had been part of the figure",
    "Scanning time across an imagined map of an island increased with the distance between the landmarks",
    "Imagining a tree made it harder to detect a faint visual stimulus than imagining the sound of an oboe",
    "People judged the shapes of imagined American states much like the shapes of states on a real sketch"
   ],
   "a": 0,
   "spot": "“Best support for the propositional view” → look for the one study where the image did NOT behave like a picture.",
   "why": "Reed (1974) found that people were correct only 14% of the time for the star/parallelogram item. If they had a real picture in mind, the hidden <b>parallelogram</b> should be easy to find; if they stored a <b>description</b> (“two triangles on top of each other”), the search only finds triangles. The other three (scanning, Segal and Fusella interference, Shepard and Chipman state shapes) all show images behaving like percepts, which supports the <b>analogue code</b>."
  },
  {
   "s": "app",
   "t": "img",
   "q": "A lifeguard has to watch a pool screen and press a button as soon as a small light flashes. During quiet moments she likes to daydream. On which kind of daydream is she most likely to miss the flash?",
   "o": [
    "Picturing the face of her best friend in detail",
    "Imagining the chorus of her favourite song",
    "Mentally rehearsing a list of words for a vocabulary test",
    "Imagining the smell of freshly baked bread"
   ],
   "a": 0,
   "spot": "Imagining something while detecting something → interference happens within the SAME sense.",
   "why": "Segal and Fusella (1970) showed that a mental image makes it harder to detect a real stimulus in the <b>same sensory modality</b>: imagining a tree hindered seeing a small blue arrow, imagining an oboe did not. The flash is visual, so a <b>visual image</b> (the friend's face) competes with it. A song or a smell is a different modality; rehearsing words is verbal, which also leaves the visual channel free."
  },
  {
   "s": "def",
   "t": "heur",
   "q": "Which description fits the recognition heuristic?",
   "o": [
    "When you recognise one of two options but not the other, you infer that the recognised option scores higher on the criterion being judged",
    "You judge how often something happens by how easily examples of it come to mind",
    "You judge how likely something is by how much it resembles a typical member of a category",
    "You start from a familiar value and adjust away from it, usually too little"
   ],
   "a": 0,
   "spot": "Two options, you know only one of them → recognition.",
   "why": "The <b>recognition heuristic</b> says: if you recognise one of two options and not the other, assume the recognised one is bigger or more frequent (Milan rather than Modena has the larger population). It is a special case of <b>availability</b> that often gives a correct answer. The other options describe availability itself, representativeness and anchoring-and-adjustment."
  },
  {
   "s": "app",
   "t": "heur",
   "q": "Before a pub quiz round, half of the teams are asked: “Is the Eiffel Tower taller or shorter than 150 metres?” The other half are asked: “Is it taller or shorter than 500 metres?” Afterwards, every team writes down its best estimate of the height. What is the most likely result?",
   "o": [
    "Teams that heard 500 metres give higher estimates, because they adjust too little from the number they were given",
    "Both groups give about the same estimate, because the numbers were clearly arbitrary",
    "Teams that heard 150 metres give higher estimates, because they correct for the low number",
    "Teams that heard 500 metres give lower estimates, because the extreme number makes them suspicious"
   ],
   "a": 0,
   "spot": "A number is given first, then people estimate → the first number is an anchor.",
   "why": "With <b>anchoring and adjustment</b>, people start from the first number and adjust away from it, but not far enough. So the 500 m group ends up higher than the 150 m group. The effect even works with obviously <b>arbitrary anchors</b>, such as a random number from a roulette wheel before estimating African countries in the UN, so “the numbers were arbitrary” does not protect against it."
  },
  {
   "s": "find",
   "t": "dec",
   "q": "Porcelli and Delgado (2009) had participants choose between gambles in a gain frame and a loss frame. Half of them first held a hand in ice-cold water for two minutes; the others used water at room temperature. What did they find?",
   "o": [
    "Stress strengthened the usual pattern: even fewer risky choices in the gain frame and even more in the loss frame",
    "Stress removed the framing effect: risky choices were the same in both frames",
    "Stress made people more risk seeking in both frames",
    "Stress reversed the pattern: more risky choices in the gain frame than in the loss frame"
   ],
   "a": 0,
   "spot": "Stress manipulation added to a framing study → does stress shrink, remove or enlarge the gain/loss difference?",
   "why": "Without stress, 42% of choices were risky in the gain frame and 61% in the loss frame. Under stress this became 33% versus 66%, so the <b>framing effect</b> became larger. The authors link this to greater reliance on the fast, automatic <b>System 1</b> when stress hampers effortful System 2. “Stress removed the effect” is the opposite of what happened."
  },
  {
   "s": "fig",
   "t": "ps",
   "q": "Students had five minutes to think of ways to stop a hen's egg from breaking when dropped from 10 metres. They worked either on this task alone or while also doing a Stroop task. The figure shows the mean number of solutions. What is the best conclusion?",
   "chart": {
    "type": "bar",
    "title": "Number of solutions to the egg task",
    "x": [
     "Egg task only",
     "+ Stroop, congruent words",
     "+ Stroop, incongruent words"
    ],
    "y": "Mean number of solutions",
    "series": [
     {
      "name": "Fluidity",
      "v": [
       10.69,
       10.43,
       7.04
      ]
     }
    ],
    "note": "Camarda et al. (2018), Experiment 1, condition means",
    "min": 0,
    "max": 12
   },
   "o": [
    "Generating ideas needs inhibitory control: tying it up lowers creative output",
    "Any second task lowers creative output, because attention is divided between tasks",
    "Creativity benefits from disinhibition: weaker control frees loose associations",
    "Creative output depends on general working-memory load rather than on inhibition"
   ],
   "a": 0,
   "spot": "Two second tasks, one drop: find what only the dropping condition demands.",
   "why": "The congruent Stroop task is also a second task, yet it gives about as many solutions (10.43) as the egg task alone (10.69). Only the <b>incongruent</b> version, which needs <b>inhibitory control</b> to ignore the word, lowers output (7.04). So the cost is not dual-tasking in general, which fits the <b>dual-process model of creativity</b> and contradicts the disinhibition view. Working memory was not loaded here; in Experiment 2 a working-memory load had no effect at all."
  },
  {
   "s": "app",
   "t": "ps",
   "q": "For ten tickets in a row, a helpdesk worker fixes a laptop fault with a long five-step reset routine. The eleventh fault could be solved by simply plugging in the charger, but she runs the full routine again without noticing the easy fix. Her behaviour is best described as",
   "o": [
    "a mental set (entrenchment)",
    "functional fixedness",
    "the hill-climbing heuristic",
    "incubation"
   ],
   "a": 0,
   "spot": "A procedure that worked before is reused when a far simpler one is available.",
   "why": "This is Luchins' water-jar effect at an office desk: once a <b>mental set</b> has formed, people keep applying the procedure that worked, even when a much simpler solution exists. In Luchins (1942), 64% to 83% kept using the long formula, against only 1% to 5% of controls. <b>Functional fixedness</b> is a related trap, but it is about seeing an <b>object</b> only in its usual function, not about reusing a procedure."
  },
  {
   "s": "find",
   "t": "lang",
   "q": "Judge these statements. I. A language that has a basic colour term for blue also has basic colour terms for black, white, red, green and yellow. II. The Dani of New Guinea, whose language has only two colour words, had great difficulty learning the English colour categories.",
   "o": [
    "I is true, and II is false.",
    "I is false, and II is true.",
    "Both I and II are true.",
    "Both I and II are false."
   ],
   "a": 0,
   "spot": "One statement is the fixed order of colour terms; the other reverses the finding that sank the strong version.",
   "why": "I is <b>true</b>: Berlin and Kay (1969) found that basic colour terms are added in a fixed order (black/white, red, green/yellow, then blue), so a word for blue implies the earlier ones. II is <b>false</b>: Heider (1972) found that the Dani learned the English categories with little trouble. That is why <b>strong linguistic determinism</b> was abandoned: having no word for a colour did not stop people from thinking in that category."
  },
  {
   "s": "comp",
   "t": "ai",
   "q": "Which statement about fine-tuning and prompt-tuning a large language model is correct?",
   "o": [
    "Fine-tuning updates the model's parameters and copes better with subtle constructs and bias; prompt-tuning leaves the parameters unchanged and needs fewer examples",
    "Prompt-tuning updates the model's parameters with new labelled data; fine-tuning only changes the examples written in the input",
    "Both methods train a new model from scratch, but prompt-tuning needs less data and less computing power",
    "Prompt-tuning is better than fine-tuning at overcoming bias in the training data, because the parameters stay fixed"
   ],
   "a": 0,
   "spot": "For each method ask: does the model itself change, or only what you feed it?",
   "why": "In <b>fine-tuning</b> the pre-trained model is trained further on new, labelled data, so its <b>parameters change</b>; it handles the subtleties of a construct and bias better, but costs more data and computation. In <b>prompt-tuning</b> (in-context learning) you only put examples in the prompt, sometimes 1 to 10, and the parameters stay the same. Exactly because nothing is updated, prompt-tuning is <b>less</b> able to overcome bias, so the last option turns the argument around."
  },
  {
   "s": "def",
   "t": "ai",
   "q": "A research team lets an LLM write short persuasive texts about a new city parking policy. They measure readers' attitudes towards the policy before and after reading a text. According to Demszky et al. (2023), this way of assessing the LLM is called",
   "o": [
    "impact evaluation",
    "expert evaluation",
    "probing",
    "prompt-tuning"
   ],
   "a": 0,
   "spot": "The quality of the output is measured in the reader, not judged by a coder.",
   "why": "<b>Impact evaluation</b> measures what the LLM output does to the people it is meant for, such as a change in attitude. <b>Expert evaluation</b> checks whether the LLM's scores or texts match those of trained human coders, and runs into the <b>intersubjectivity problem</b>. Demszky et al. advise combining the two: expert evaluation first, impact evaluation after."
  }
 ]
});
