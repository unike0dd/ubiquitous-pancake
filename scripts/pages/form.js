export function renderForm(page, text, services) {
  const serviceOptions = services
    .map(
      (service) =>
        `<label class="check"><input type="checkbox" name="service" /><span>${text(service)}</span></label>`,
    )
    .join("");
  const fields = page.fields
    .map(([label, help]) => {
      const isLong =
        label.includes("Message") ||
        label.includes("Summary") ||
        label.includes("Experience");
      const tag = isLong
        ? `<textarea aria-label="${text(label)}"></textarea>`
        : `<input type="text" aria-label="${text(label)}" />`;
      return `<div class="field ${isLong ? "full" : ""}"><label>${text(label)}</label>${tag}<span class="help">${text(help)}</span></div>`;
    })
    .join("");
  return `<section class="hero reveal"><div><p class="eyebrow">${text(page.eyebrow)}</p><h1>${text(page.title)}</h1><p class="lead">${text(page.lead)}</p></div><aside class="command-panel"><div class="panel-kicker">Intake clarity</div><div class="panel-title">Better routing starts with better context.</div><div class="metric-grid"><div class="metric"><strong>01</strong><span>Contact identity</span></div><div class="metric"><strong>02</strong><span>Service or career fit</span></div><div class="metric"><strong>03</strong><span>Clear next-step visibility</span></div></div></aside></section><section class="section reveal"><form class="form-panel" data-sample-form="${text(page.formKind)}"><fieldset><legend>${text(page.servicesLegend)}</legend><p class="help">${text(page.servicesHelp)}</p><div class="check-grid">${serviceOptions}</div></fieldset><div class="form-grid">${fields}</div><div class="actions"><button class="btn primary" type="submit">${text(page.primaryCta)}</button><button class="btn ghost" type="reset">${text(page.secondaryCta)}</button></div><p class="status" data-status>${text(page.status)}</p></form></section>`;
}
