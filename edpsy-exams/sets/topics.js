// Topic map for Educational Psychology. Every question carries one topic id; links point to the study pages.
const B = "https://sezsaracoglu-lab.github.io/dashshboard-/";
const T1 = B + "edpsy-theme1/";
const T2 = B + "edpsy-theme2/";
const TOPICS = {
  icap:    { name: "ICAP: the four modes and the I > C > A > P hypothesis (Chi & Wylie, 2014)", where: "Theme 1 · Article 1", links: [["ICAP key concepts", T1 + "#icap-3"], ["ICAP findings", T1 + "#icap-7"]] },
  icapuse: { name: "Using ICAP to design activities and choose control conditions", where: "Theme 1 · Article 1", links: [["ICAP as a tool", T1 + "#icap-9"], ["Assumptions", T1 + "#icap-5"]] },
  icaplim: { name: "Limitations and caveats of ICAP", where: "Theme 1 · Article 1", links: [["ICAP limits", T1 + "#icap-8"]] },
  gls:     { name: "Generative learning strategies: definition and evidence (Brod, 2021)", where: "Theme 1 · Article 2", links: [["GLS key concepts", T1 + "#gls-3"], ["Table 1 and strategy cards", T1 + "#gls-7"]] },
  glsage:  { name: "Age, development and adapting generative strategies", where: "Theme 1 · Article 2", links: [["The developing learner", T1 + "#gls-5"], ["Why the differences", T1 + "#gls-8"], ["Support dial", T1 + "#gls-9"]] },
  dp:      { name: "Distributed practice, lag and retention interval (Gerbier & Toppino, 2015)", where: "Theme 1 · Article 3", links: [["Spacing key concepts", T1 + "#dp-3"], ["Interactive Figure 2", T1 + "#dp-7"]] },
  dpmech:  { name: "Why spacing works: deficient processing, retrieval, consolidation", where: "Theme 1 · Article 3", links: [["The brain", T1 + "#dp-6"], ["Retrieval accounts", T1 + "#dp-8"]] },
  dpedu:   { name: "Applying distributed practice and testing in education", where: "Theme 1 · Article 3", links: [["Classroom and learners", T1 + "#dp-9"], ["Design the app", T1 + "#case"]] },
  mdef:  { name: "What motivation is, and the six theories at a glance", where: "Theme 2 · Reading 1", links: [["What it is", T2 + "#r-mot-1"], ["The map", T2 + "#r-mot-2"]] },
  se:    { name: "Self-efficacy: sources, outcome expectations, calibration", where: "Theme 2 · Reading 1", links: [["Can I do it?", T2 + "#r-mot-3"]] },
  evt:   { name: "Expectancy-value theory: expectancy, task values, cost", where: "Theme 2 · Reading 1", links: [["Can I do it?", T2 + "#r-mot-3"]] },
  int:   { name: "Interest: situational and individual", where: "Theme 2 · Reading 1", links: [["Do I want to?", T2 + "#r-mot-4"]] },
  ag:    { name: "Achievement goals", where: "Theme 2 · Reading 1", links: [["Aims and explanations", T2 + "#r-mot-5"]] },
  attr:  { name: "Attributions: causes and their three dimensions", where: "Theme 2 · Reading 1", links: [["Aims and explanations", T2 + "#r-mot-5"]] },
  integ: { name: "Other perspectives and combining the theories", where: "Theme 2 · Reading 1", links: [["Together, and still open", T2 + "#r-mot-6"]] },
  tax:   { name: "The taxonomy of motivation in self-determination theory", where: "Theme 2 · Reading 2", links: [["Key concepts", T2 + "#r-sdt-3"]] },
  needs: { name: "Autonomous motivation and need support: the evidence", where: "Theme 2 · Reading 2", links: [["The evidence", T2 + "#r-sdt-4"]] },
  nst:   { name: "Need-supportive teaching: autonomy support and structure", where: "Theme 2 · Reading 2", links: [["Need-supportive teaching", T2 + "#r-sdt-5"]] },
  crit:  { name: "Grades, feedback and high-stakes tests", where: "Theme 2 · Reading 2", links: [["The critique", T2 + "#r-sdt-7"]] },
  teach: { name: "Teachers' own needs and pressure from above", where: "Theme 2 · Reading 2", links: [["Teachers' needs", T2 + "#r-sdt-8"]] },
  comp:  { name: "Practices that support perceived competence", where: "Theme 2 · Reading 3", links: [["Competence", T2 + "#r-prac-3"]] },
  aut:   { name: "Practices that support autonomy", where: "Theme 2 · Reading 3", links: [["Autonomy", T2 + "#r-prac-4"]] },
  val:   { name: "Practices that support value and interest", where: "Theme 2 · Reading 3", links: [["Value and interest", T2 + "#r-prac-5"]] },
  grow:  { name: "Growth mindset, attributions and mastery goals in class", where: "Theme 2 · Reading 3", links: [["Growth and mastery", T2 + "#r-prac-6"]] },
  bel:   { name: "Relatedness and belonging", where: "Theme 2 · Reading 3", links: [["Belonging", T2 + "#r-prac-7"]] },
  use:   { name: "Combining and tailoring practices; strength of evidence", where: "Theme 2 · Reading 3", links: [["Use it, and its limits", T2 + "#r-prac-8"]] },
  cmp:   { name: "Comparing the theories and applying them to a case", where: "Theme 2 · Compare and apply", links: [["Compare and apply", T2 + "#apply"]] }
};
const SKILLS = { def: "Key concepts and definitions", find: "Main findings", fig: "Reading figures and tables", comp: "Comparing theories", app: "Applying to new situations" };
window.EXAMS = window.EXAMS || [];
const GROUPS = [
  { id: "hy", name: "★ High-yield", sub: "Most likely exam questions" },
  { id: "t1", name: "Theme 1", sub: "Learning strategies" },
  { id: "t2", name: "Theme 2", sub: "Motivation" }
];
