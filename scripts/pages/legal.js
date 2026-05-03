export function renderLegal(page, text) {
  const sections = page.sections
    .map(
      ([heading, copy]) =>
        `<article class="legal-item"><h3>${text(heading)}</h3><p>${text(copy)}</p></article>`,
    )
    .join("");
  return `<section class="hero reveal"><div><p class="eyebrow">${text(page.eyebrow)}</p><h1>${text(page.title)}</h1><p class="lead">${text(page.effective)}</p><p class="intro">${text(page.intro)}</p></div><aside class="command-panel"><div class="panel-kicker">Legal clarity</div><div class="panel-title">Simple, readable, and consistent with visitor trust.</div></aside></section><section class="section reveal"><div class="legal-panel"><div class="legal-list">${sections}</div></div></section>`;
}
