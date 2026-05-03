export function renderLearning(page, text) {
  const modules = page.modules
    .map(
      (module, index) =>
        `<article class="sample-card"><div class="number">Track ${String(index + 1).padStart(2, "0")}</div><h3>${text(module)}</h3><p>Visitor-friendly explanation designed to help the user compare fit before requesting service coverage.</p></article>`,
    )
    .join("");
  return `<section class="hero reveal"><div><p class="eyebrow">${text(page.eyebrow)}</p><h1>${text(page.title)}</h1><p class="lead">${text(page.lead)}</p><div class="actions"><button class="btn primary" type="button" data-page="contact">Ask about onboarding</button><button class="btn ghost" type="button" data-page="home">Compare services</button></div></div><aside class="command-panel"><div class="panel-kicker">Learning purpose</div><div class="panel-title">Help visitors understand scope before they request support.</div></aside></section><section class="section reveal"><div class="section-head"><h2>Education modules</h2><p class="section-intro">Each learning page should explain scope, outcomes, fit, and preparation.</p></div><div class="sample-grid">${modules}</div></section>`;
}
