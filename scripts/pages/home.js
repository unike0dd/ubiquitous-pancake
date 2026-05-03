export function renderHome(page, text) {
  const services = page.services
    .map(
      (service, index) => `
    <button class="service-card reveal" type="button" data-page="${text(service.key)}">
      <span class="service-index">${String(index + 1).padStart(2, "0")}</span>
      <span><span class="service-title">${text(service.title)}</span><span class="service-copy">${text(service.copy)}</span></span>
      <span class="service-action">Explore</span>
    </button>`,
    )
    .join("");
  const metrics = page.metrics
    .map(
      ([label, copy]) =>
        `<div class="metric"><strong>${text(label)}</strong><span>${text(copy)}</span></div>`,
    )
    .join("");
  return `<section class="hero reveal"><div><p class="eyebrow">${text(page.eyebrow)}</p><h1>${text(page.title)}</h1><p class="lead">${text(page.lead)}</p><p class="intro">${text(page.intro)}</p><div class="actions"><button class="btn primary" type="button" data-page="contact">${text(page.primaryCta)}</button><button class="btn ghost" type="button" data-page="services-it">${text(page.secondaryCta)}</button></div></div><aside class="command-panel"><div class="panel-kicker">Command snapshot</div><div class="panel-title">${text(page.panelTitle)}</div><div class="metric-grid">${metrics}</div></aside></section><section class="section reveal"><div class="section-head"><h2>${text(page.sectionTitle)}</h2><p class="section-intro">${text(page.sectionIntro)}</p></div><div class="services">${services}</div></section><section class="section reveal"><div class="content-panel"><p class="eyebrow">Why it works</p><h2>${text(page.whyTitle)}</h2><p class="lead">${text(page.whyCopy)}</p></div></section>`;
}
