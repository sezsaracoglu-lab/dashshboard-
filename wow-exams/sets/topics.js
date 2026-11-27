// Topic map for World of Work. Every question carries one topic id; links point to the study pages.
const B = "https://sezsaracoglu-lab.github.io/dashshboard-/";
const T1 = B + "wow-theme1/";
const T2 = B + "wow-theme2/";
const TOPICS = {
  dr:     { name: "Job demands and job resources: definitions and boundaries", where: "Theme 1 · Readings 1 and 2", links: [["FAQ: seven propositions", T1 + "#r-faq-3"], ["FAQ: drawing the lines", T1 + "#r-faq-8"]] },
  proc:   { name: "Two processes, buffer and boost", where: "Theme 1 · Readings 1 and 2", links: [["FAQ: buffer and boost", T1 + "#r-faq-5"], ["FAQ: hidden interaction (Figure 1)", T1 + "#r-faq-6"]] },
  be:     { name: "Burnout and work engagement: definitions, causes, consequences", where: "Theme 1 · Reading 2", links: [["Ten Years Later: concepts", T1 + "#r-ten-3"], ["Causes", T1 + "#r-ten-4"], ["Consequences", T1 + "#r-ten-5"]] },
  cor:    { name: "COR theory versus JD-R theory", where: "Theme 1 · Readings 1 and 3", links: [["COR principles", T1 + "#r-cor-3"], ["Table 1: differences", T1 + "#r-cor-5"], ["Spirals compared", T1 + "#r-cor-6"]] },
  ml:     { name: "Multilevel JD-R and the person × situation approach", where: "Theme 1 · Reading 2", links: [["Levels", T1 + "#r-ten-7"]] },
  spiral: { name: "Loss and gain spirals", where: "Theme 1 · Readings 1, 2 and 3", links: [["FAQ: spirals", T1 + "#r-faq-9"], ["Nine propositions", T1 + "#r-ten-6"]] },
  team:   { name: "Team resource mobilization and agile work practices", where: "Theme 1 · Reading 4", links: [["The question", T1 + "#r-team-2"], ["Challenges and hindrances", T1 + "#r-team-7"], ["The model", T1 + "#r-team-8"]] },
  craft:  { name: "Job crafting: forms, predictors, outcomes, interventions", where: "Theme 1 · Reading 5", links: [["JD-R version", T1 + "#r-craft-4"], ["Causes and results", T1 + "#r-craft-5"], ["Training and limits", T1 + "#r-craft-6"]] },
  ev:     { name: "Evidence and limits of JD-R: methods, falsifiability, measurement, culture", where: "Theme 1 · Reading 1", links: [["FAQ: how they test it", T1 + "#r-faq-6"], ["FAQ: limits and reach", T1 + "#r-faq-10"]] },
  pro:    { name: "Proactive behaviours, work and home, and what organizations can do", where: "Theme 1 · Reading 2", links: [["Ten Years Later: proactive and home", T1 + "#r-ten-8"], ["Misuse and practice", T1 + "#r-ten-9"]] },
  pwd:    { name: "Playful work design", where: "Theme 1 · Reading 6", links: [["Fun and competition", T1 + "#r-play-3"], ["Who, when and why", T1 + "#r-play-5"], ["Training and limits", T1 + "#r-play-6"]] },
  egb:    { name: "Employee green behavior: definition, Green Five, theories, antecedents", where: "Theme 2 · Reading 1", links: [["What it is", T2 + "#r-egb-1"], ["The kinds", T2 + "#r-egb-3"], ["The theories", T2 + "#r-egb-4"], ["Causes and results", T2 + "#r-egb-5"]] },
  lead:   { name: "Leader green behavior and its routes to followers", where: "Theme 2 · Reading 2", links: [["Leadership and sustainability", T2 + "#r-lead-1"]] },
  age:    { name: "Engaging aging: proactive behavior and age-focused HR", where: "Theme 2 · Reading 3", links: [["Engaging aging", T2 + "#r-age-1"]] },
  aging:  { name: "Supporting the aging workforce: changes, theories, interventions", where: "Theme 2 · Reading 4", links: [["What changes with age", T2 + "#r-aging-2"], ["How people adapt", T2 + "#r-aging-3"], ["The social context", T2 + "#r-aging-4"], ["Interventions", T2 + "#r-aging-5"], ["Research needs", T2 + "#r-aging-6"]] },
  ghrm:   { name: "Green HR practices, OCBE, collective green crafting, green servant leadership", where: "Theme 2 · Reading 5", links: [["Concepts", T2 + "#r-ghrm-2"], ["Theory", T2 + "#r-ghrm-3"], ["Results", T2 + "#r-ghrm-5"]] },
  champ:  { name: "Sustainability champions: demands and resources across organizations", where: "Theme 2 · Reading 6", links: [["Demands and resources", T2 + "#r-champ-2"], ["Inside the partner", T2 + "#r-champ-3"], ["What champions do", T2 + "#r-champ-4"], ["Figure 1", T2 + "#r-champ-6"]] },
  fb:     { name: "Comparative feedback and energy-wasting behavior", where: "Theme 2 · Reading 7", links: [["The programme", T2 + "#r-fb-2"], ["The method", T2 + "#r-fb-3"], ["The results", T2 + "#r-fb-4"], ["Why it worked", T2 + "#r-fb-5"]] },
  self:   { name: "Self-concordance and pro-environmental behavior", where: "Theme 2 · Reading 8", links: [["The theory", T2 + "#r-self-2"], ["Study 1", T2 + "#r-self-3"], ["Study 2", T2 + "#r-self-4"], ["Study 3", T2 + "#r-self-5"]] },
  apply:  { name: "Comparing the routes to pro-environmental behavior", where: "Theme 2 · Compare and apply", links: [["Compare and apply", T2 + "#apply"]] },
};
const SKILLS = { def: "Key concepts and definitions", find: "Main findings", fig: "Reading figures and tables", comp: "Comparing theories", app: "Applying to new situations" };
window.EXAMS = window.EXAMS || [];
const GROUPS = [
  { id: "hy", name: "★ High-yield", sub: "Most likely exam questions" },
  { id: "t1", name: "Theme 1", sub: "Job demands and resources" },
  { id: "t2", name: "Theme 2", sub: "Sustainability in organizations" },
  { id: "m1", name: "Meeting 1", sub: "Readings 1 and 2" },
  { id: "m2", name: "Meeting 2", sub: "Readings 3 to 6" }
];
