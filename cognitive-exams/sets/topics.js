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
  blind: { name: "Failures of awareness: inattentional and change blindness (Simons)", where: "Theme 1 · Part A", links: [["Theme 1 visual notes", B + "cognitive_theme_1/#visual"], ["Theme 1 in-depth", B + "dashshboard-/cognitive-indepth/#t1-1"]] },
  math:  { name: "Working memory and children's arithmetic (McGonnell et al., 2024)", where: "Theme 2 · Part C", links: [["Theme 2 visual notes", B + "cognitive_theme2_version_5/#visual"], ["Theme 2 in-depth", B + "dashshboard-/cognitive-indepth/#t2-1"]] },
  net:   { name: "Semantic networks, spreading activation and similarity approaches", where: "Theme 4 · Part B", links: [["Theme 4 visual notes", B + "cognitive_theme4_version2/#visual"], ["Theme 4 in-depth", B + "dashshboard-/cognitive-indepth/#t4-1"]] },
  sd:    { name: "Semantic dementia and drawing (Bozeat et al., 2003)", where: "Theme 4 · Part C", links: [["Theme 4 visual notes", B + "cognitive_theme4_version2/#visual"], ["Theme 4 videos", B + "cognitive_theme4_version2/#videos"]] },
  rot:   { name: "Mental rotation, image scanning and imagery in the brain", where: "Theme 5", links: [["Theme 5 visual notes", B + "theme5_cognitive_version2/#visual"], ["Theme 5 in-depth", B + "dashshboard-/cognitive-indepth/#t5-1"]] },
  biz:   { name: "The bizarreness effect (Besken & Mulligan, 2021)", where: "Theme 5 · Resource D", links: [["Theme 5 visual notes", B + "theme5_cognitive_version2/#visual"], ["Theme 5 in-depth", B + "dashshboard-/cognitive-indepth/#t5-1"]] },
  cre:   { name: "Creativity and inhibitory control (Camarda et al., 2018)", where: "Theme 7 · Part C", links: [["Theme 7 visual notes", B + "theme-7_teaching/#visual"], ["Theme 7 in-depth", B + "dashshboard-/cognitive-indepth/#t7-1"]] },
  llm:   { name: "Using LLMs in psychology (Demszky et al., 2023)", where: "Theme 8 · Part A", links: [["Theme 8 visual notes", B + "dashshboard-/cognitive-theme8/"], ["Theme 8 in-depth", B + "dashshboard-/cognitive-indepth/#t8-1"]] },
  llmt:  { name: "LLM access timing and time availability (Zhi et al., 2026)", where: "Theme 8 · Part B", links: [["Theme 8 visual notes", B + "dashshboard-/cognitive-theme8/"], ["Theme 8 in-depth", B + "dashshboard-/cognitive-indepth/#t8-1"]] },
  aic:   { name: "AI use and creativity (Huang, 2025)", where: "Theme 8 · Part C", links: [["Theme 8 visual notes", B + "dashshboard-/cognitive-theme8/"], ["Theme 8 in-depth", B + "dashshboard-/cognitive-indepth/#t8-1"]] },
};
const SKILLS = { def: "Key concepts and definitions", find: "Main findings", fig: "Reading figures and tables", comp: "Comparing theories", app: "Applying to new situations" };
window.EXAMS = window.EXAMS || [];
const GROUPS = [
  { id: "hy", name: "★ High-yield", sub: "Most likely exam questions" },
  { id: "t1", name: "Theme 1", sub: "Attention" }, { id: "t2", name: "Theme 2", sub: "Working memory" },
  { id: "t3", name: "Theme 3", sub: "Autobiographical memory" }, { id: "t4", name: "Theme 4", sub: "Concepts and categories" },
  { id: "t5", name: "Theme 5", sub: "Mental imagery" }, { id: "t6", name: "Theme 6", sub: "Judgement and decisions" },
  { id: "t7", name: "Theme 7", sub: "Problem solving" }, { id: "t8", name: "Theme 8", sub: "LLMs" },
  { id: "mock", name: "Mock exams", sub: "Full mock papers" } ];
