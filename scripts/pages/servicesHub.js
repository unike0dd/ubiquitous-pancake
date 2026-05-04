export function renderServicesHub(page, text) {
  return `
    <section class="panel reveal">
      <p class="eyebrow">${text(page.eyebrow)}</p>
      <h1>${text(page.title)}</h1>
      <p>${text(page.lead)}</p>
      <div class="chip-row">
        ${(page.links || [])
          .map(
            (link) =>
              `<button class="chip" type="button" data-page="${link.page}">${text(link.label)}</button>`,
          )
          .join("")}
      </div>
    </section>
  `;
}
