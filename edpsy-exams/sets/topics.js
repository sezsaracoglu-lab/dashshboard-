// Topic map for Educational Psychology. Every question carries one topic id; links point to the study pages.
const B = "https://sezsaracoglu-lab.github.io/dashshboard-/";
const T1 = B + "edpsy-theme1/";
const TOPICS = {
  icap:    { name: "ICAP: the four modes and the I > C > A > P hypothesis (Chi & Wylie, 2014)", where: "Theme 1 · Article 1", links: [["ICAP key concepts", T1 + "#icap-3"], ["ICAP findings", T1 + "#icap-7"]] },
  icapuse: { name: "Using ICAP to design activities and choose control conditions", where: "Theme 1 · Article 1", links: [["ICAP as a tool", T1 + "#icap-9"], ["Assumptions", T1 + "#icap-5"]] },
  icaplim: { name: "Limitations and caveats of ICAP", where: "Theme 1 · Article 1", links: [["ICAP limits", T1 + "#icap-8"]] },
  gls:     { name: "Generative learning strategies: definition and evidence (Brod, 2021)", where: "Theme 1 · Article 2", links: [["GLS key concepts", T1 + "#gls-3"], ["Table 1 and strategy cards", T1 + "#gls-7"]] },
  glsage:  { name: "Age, development and adapting generative strategies", where: "Theme 1 · Article 2", links: [["The developing learner", T1 + "#gls-5"], ["Why the differences", T1 + "#gls-8"], ["Support dial", T1 + "#gls-9"]] },
  dp:      { name: "Distributed practice, lag and retention interval (Gerbier & Toppino, 2015)", where: "Theme 1 · Article 3", links: [["Spacing key concepts", T1 + "#dp-3"], ["Interactive Figure 2", T1 + "#dp-7"]] },
  dpmech:  { name: "Why spacing works: deficient processing, retrieval, consolidation", where: "Theme 1 · Article 3", links: [["The brain", T1 + "#dp-6"], ["Retrieval accounts", T1 + "#dp-8"]] },
  dpedu:   { name: "Applying distributed practice and testing in education", where: "Theme 1 · Article 3", links: [["Classroom and learners", T1 + "#dp-9"], ["Design the app", T1 + "#case"]] }
};
const SKILLS = { def: "Key concepts and definitions", find: "Main findings", fig: "Reading figures and tables", comp: "Comparing theories", app: "Applying to new situations" };
window.EXAMS = window.EXAMS || [];
const GROUPS = [
  { id: "t1", name: "Theme 1", sub: "Learning strategies" }
];
