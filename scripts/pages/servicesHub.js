export function renderServicesHub(page) {
  return `
    <section class="panel reveal">
      <p class="eyebrow">${page.eyebrow}</p>
      <h1>${page.title}</h1>
      <p>${page.lead}</p>
      <div class="chip-row">
        ${page.links
          .map(
            (link) =>
              `<button class="chip" type="button" data-page="${link.page}">${link.label}</button>`,
          )
          .join("")}
      </div>
    </section>
  `;
}
