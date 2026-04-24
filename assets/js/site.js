(function () {
  function initNavigation() {
    const toggle = document.querySelector(".site-header__toggle");
    const panel = document.querySelector("[data-nav-panel]");

    if (!toggle || !panel) return;

    toggle.addEventListener("click", function () {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      panel.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("nav-open", !isOpen);
    });
  }

  function initDonationCards() {
    const toggles = document.querySelectorAll(".donation-card__toggle");
    if (!toggles.length) return;

    toggles.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        const isOpen = toggle.getAttribute("aria-expanded") === "true";

        toggles.forEach(function (otherToggle) {
          const panelId = otherToggle.getAttribute("aria-controls");
          const panel = panelId ? document.getElementById(panelId) : null;
          const shouldOpen = otherToggle === toggle ? !isOpen : false;

          otherToggle.setAttribute("aria-expanded", String(shouldOpen));
          if (panel) panel.hidden = !shouldOpen;
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavigation();
    initDonationCards();
  });
})();
