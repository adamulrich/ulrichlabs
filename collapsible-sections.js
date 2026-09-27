document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".detail-layout > .content-stack");

  sections.forEach((section) => {
    const heading = section.querySelector(":scope > .section-heading");
    const title = heading?.querySelector("h2")?.textContent.trim();

    if (!heading || !title) {
      return;
    }

    const eyebrow = heading.querySelector(".eyebrow")?.textContent.trim() || "Section";
    const toggle = document.createElement("button");
    toggle.className = "section-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "true");
    toggle.innerHTML = `
      <span class="section-toggle-icon" aria-hidden="true">&minus;</span>
      <span class="section-toggle-label">
        <span class="section-toggle-eyebrow">${eyebrow}</span>
        <span class="section-toggle-title">${title}</span>
      </span>
    `;

    heading.replaceWith(toggle);
    section.classList.add("collapsible-section");

    toggle.addEventListener("click", () => {
      const isCollapsed = section.classList.toggle("is-collapsed");
      toggle.setAttribute("aria-expanded", String(!isCollapsed));
      toggle.querySelector(".section-toggle-icon").textContent = isCollapsed ? "+" : "\u2212";
    });
  });
});
