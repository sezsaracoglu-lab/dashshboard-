// Topic map: every question carries one topic id. Links point to the study material for that topic.
const B = "https://sezsaracoglu-lab.github.io/";
const TOPICS = {
  att:   { name: "Selective attention and filter models", where: "Theme 1 · Attention", links: [["Theme 1 visual notes", B + "cognitive_theme_1/#visual"], ["Lecture 1 · Attention", B + "dashshboard-/cognitive-lectures/#l1"]] },
  ts:    { name: "Types of attention and task switching", where: "Lecture 1 · Attention", links: [["Lecture 1 · Attention", B + "dashshboard-/cognitive-lectures/#l1"], ["Theme 1 in-depth", B + "dashshboard-/cognitive-indepth/#t1-1"]] },
  stm:   { name: "Short-term memory: chunking, serial position, Atkinson–Shiffrin", where: "Theme 2 · Block A", links: [["Theme 2 visual notes", B + "cognitive_theme2_version_5/#visual"]] },
  wm:    { name: "Working memory model (loop, sketchpad, executive, buffer)", where: "Theme 2 · Block B", links: [["Theme 2 visual notes", B + "cognitive_theme2_version_5/#visual"], ["Block B video (18 min)", B + "cognitive_theme2_version_5/videos/theme2_b_slow.mp4"]] },
  mal:   { name: "Malleable memory: encoding, storage, misinformation", where: "Lecture 2 · Memory", links: [["Lecture 2 · Malleability of memory", B + "dashshboard-/cognitive-lectures/#l2"]] },
  abm:   { name: "Autobiographical memory and amnesia", where: "Theme 3", links: [["Theme 3 visual notes", B + "cognitive_theme2_version2/#visual"], ["Theme 3 in-depth", B + "dashshboard-/cognitive-indepth/#t3-1"]] },
  photo: { name: "Photo-taking impairment and offloading (Soares & Storm, 2018)", where: "Theme 3 · Article C", links: [["Theme 3 in-depth (C)", B + "dashshboard-/cognitive-indepth/#t3-12"]] },
  auto:  { name: "The retention function and the reminiscence bump", where: "Theme 3 · Block A", links: [["Theme 3 visual notes", B + "cognitive_theme2_version2/#visual"], ["Theme 3 in-depth (A)", B + "dashshboard-/cognitive-indepth/#t3-1"]] },
  ca:    { name: "Childhood amnesia and how life memories emerge", where: "Theme 3 · Block A", links: [["Theme 3 visual notes", B + "cognitive_theme2_version2/#visual"], ["Theme 3 in-depth (A)", B + "dashshboard-/cognitive-indepth/#t3-1"]] },
  sms:   { name: "Conway's self-memory system, retrieval and depression", where: "Theme 3 · Block A", links: [["Theme 3 visual notes", B + "cognitive_theme2_version2/#visual"], ["Theme 3 in-depth (A6)", B + "dashshboard-/cognitive-indepth/#t3-6"]] },
  amn:   { name: "Amnesia: types, binding, Jon and consolidation", where: "Theme 3 · Block B", links: [["Theme 3 visual notes", B + "cognitive_theme2_version2/#visual"], ["Theme 3 in-depth (B)", B + "dashshboard-/cognitive-indepth/#t3-7"]] },
  cat:   { name: "Concepts and categories", where: "Theme 4", links: [["Theme 4 visual notes", B + "cognitive_theme4_version2/#visual"], ["Theme 4 in-depth", B + "dashshboard-/cognitive-indepth/#t4-1"]] },
  img:   { name: "Mental imagery and representation codes", where: "Theme 5", links: [["Theme 5 visual notes", B + "theme5_cognitive_version2/#visual"], ["Theme 5 in-depth", B + "dashshboard-/cognitive-indepth/#t5-1"]] },
  heur:  { name: "Heuristics and biases", where: "Theme 6 · Judgement", links: [["Theme 6 visual notes", B + "cognitive_theme6_version2/#visual"], ["Theme 6 in-depth", B + "dashshboard-/cognitive-indepth/#t6-1"]] },
  dec:   { name: "Decision making: expected utility and prospect theory", where: "Theme 6 · Decisions", links: [["Theme 6 visual notes", B + "cognitive_theme6_version2/#visual"], ["Theme 6 in-depth (DE)", B + "dashshboard-/cognitive-indepth/#t6-11"]] },
  ps:    { name: "Problem solving and creativity", where: "Theme 7", links: [["Theme 7 visual notes", B + "theme-7_teaching/#visual"], ["Theme 7 in-depth", B + "dashshboard-/cognitive-indepth/#t7-1"]] },
  dual:  { name: "Dual process theory", where: "Lecture 5", links: [["Lecture 5 · Dual process theory", B + "dashshboard-/cognitive-lectures/#l5"]] },
  emo:   { name: "Cognition and emotion", where: "Lecture 3", links: [["Lecture 3 · Cognition and emotion", B + "dashshboard-/cognitive-lectures/#l3"]] },
  lang:  { name: "Language and thought", where: "Lecture 4", links: [["Lecture 4 · Language and thought", B + "dashshboard-/cognitive-lectures/#l4"]] },
  ai:    { name: "AI and large language models", where: "Theme 8", links: [["Theme 8 visual notes", B + "dashshboard-/cognitive-theme8/"], ["Theme 8 in-depth", B + "dashshboard-/cognitive-indepth/#t8-1"]] },
};
const SKILLS = { def: "Key concepts and definitions", find: "Main findings", fig: "Reading figures and tables", comp: "Comparing theories", app: "Applying to new situations" };
window.EXAMS = window.EXAMS || [];
