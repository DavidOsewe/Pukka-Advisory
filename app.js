const tabs = document.querySelectorAll(".toggle-tab");
const panels = document.querySelectorAll(".resource-panel");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const panelId = tab.dataset.panel;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.id === panelId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  });
});
