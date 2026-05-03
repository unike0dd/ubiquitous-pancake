function getLearningKey(title) {
  const lower = String(title).toLowerCase();
  if (lower.includes("logistics") || lower.includes("logística"))
    return "logistics";
  if (lower.includes("admin") || lower.includes("back office")) return "admin";
  if (lower.includes("customer") || lower.includes("cliente"))
    return "customer";
  return "it";
}

export function renderService(page, text) {
  const covers = page.covers
    .map(
      (item, index) =>
        `<article class="sample-card"><div class="number">${String(index + 1).padStart(2, "0")}</div><h3>${text(item)}</h3><p>Structured support applied to recurring operational execution.</p></article>`,
    )
    .join("");
  const outcomes = page.outcomes
    .map((item) => `<span class="pill">${text(item)}</span>`)
    .join("");
  return `<section class="hero reveal"><div><p class="eyebrow">${text(page.eyebrow)}</p><h1>${text(page.title)}</h1><p class="lead">${text(page.lead)}</p><p class="intro">${text(page.overview)}</p><div class="actions"><button class="btn primary" type="button" data-page="contact">Request support</button><button class="btn ghost" type="button" data-page="learning-${getLearningKey(page.title)}">Open learning track</button></div></div><aside class="command-panel"><div class="panel-kicker">Business outcomes</div><div class="panel-title">Execution with fewer gaps and clearer ownership.</div><div class="pill-row">${outcomes}</div></aside></section><section class="section reveal"><div class="section-head"><h2>What this covers</h2><p class="section-intro">A service sample built from the combined Gabriel Services content direction.</p></div><div class="sample-grid">${covers}</div></section><section class="section reveal"><div class="content-panel"><p class="eyebrow">How engagement works</p><p class="lead">${text(page.engagement)}</p></div></section>`;
}
