// Topic map for World of Work. Every question carries one topic id; links point to the study pages.
const B = "https://sezsaracoglu-lab.github.io/dashshboard-/";
const T1 = B + "wow-theme1/";
const TOPICS = {
  dr:     { name: "Job demands and job resources: definitions and boundaries", where: "Theme 1 · Readings 1 and 2", links: [["FAQ: seven propositions", T1 + "#r-faq-3"], ["FAQ: drawing the lines", T1 + "#r-faq-8"]] },
  proc:   { name: "Two processes, buffer and boost", where: "Theme 1 · Readings 1 and 2", links: [["FAQ: buffer and boost", T1 + "#r-faq-5"], ["FAQ: hidden interaction (Figure 1)", T1 + "#r-faq-6"]] },
  be:     { name: "Burnout and work engagement: definitions, causes, consequences", where: "Theme 1 · Reading 2", links: [["Ten Years Later: concepts", T1 + "#r-ten-3"], ["Causes", T1 + "#r-ten-4"], ["Consequences", T1 + "#r-ten-5"]] },
  cor:    { name: "COR theory versus JD-R theory", where: "Theme 1 · Readings 1 and 3", links: [["COR principles", T1 + "#r-cor-3"], ["Table 1: differences", T1 + "#r-cor-5"], ["Spirals compared", T1 + "#r-cor-6"]] },
  ml:     { name: "Multilevel JD-R and the person × situation approach", where: "Theme 1 · Reading 2", links: [["Levels", T1 + "#r-ten-7"]] },
  spiral: { name: "Loss and gain spirals", where: "Theme 1 · Readings 1, 2 and 3", links: [["FAQ: spirals", T1 + "#r-faq-9"], ["Nine propositions", T1 + "#r-ten-6"]] },
  team:   { name: "Team resource mobilization and agile work practices", where: "Theme 1 · Reading 4", links: [["The question", T1 + "#r-team-2"], ["Challenges and hindrances", T1 + "#r-team-7"], ["The model", T1 + "#r-team-8"]] },
  craft:  { name: "Job crafting: forms, predictors, outcomes, interventions", where: "Theme 1 · Reading 5", links: [["JD-R version", T1 + "#r-craft-4"], ["Outcomes", T1 + "#r-craft-6"], ["Interventions", T1 + "#r-craft-8"]] },
  pwd:    { name: "Playful work design", where: "Theme 1 · Reading 6", links: [["Fun and competition", T1 + "#r-play-3"], ["When it helps", T1 + "#r-play-6"], ["Why it works", T1 + "#r-play-7"]] }
};
const SKILLS = { def: "Key concepts and definitions", find: "Main findings", fig: "Reading figures and tables", comp: "Comparing theories", app: "Applying to new situations" };
window.EXAMS = window.EXAMS || [];
const GROUPS = [
  { id: "hy", name: "★ High-yield", sub: "Most likely exam questions" },
  { id: "t1", name: "Theme 1", sub: "Job demands and resources" }
];
