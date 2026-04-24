(function () {
  function initNavigation() {
    const toggle = document.querySelector(".site-header__toggle");
    const panel = document.querySelector("[data-nav-panel]");
    const navGroups = document.querySelectorAll("[data-nav-group]");

    if (!toggle || !panel) return;

    toggle.addEventListener("click", function () {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      panel.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("nav-open", !isOpen);
    });

    function isDesktop() {
      return window.matchMedia("(min-width: 1081px)").matches;
    }

    navGroups.forEach(function (group) {
      const summary = group.querySelector("summary");
      if (!summary) return;

      summary.addEventListener("click", function (event) {
        if (isDesktop()) {
          event.preventDefault();
        }
      });

      group.addEventListener("mouseenter", function () {
        if (!isDesktop()) return;
        group.classList.add("is-open");
      });

      group.addEventListener("mouseleave", function () {
        if (!isDesktop()) return;
        group.classList.remove("is-open");
        group.open = false;
      });

      group.addEventListener("focusin", function () {
        if (!isDesktop()) return;
        group.classList.add("is-open");
      });

      group.addEventListener("focusout", function () {
        if (!isDesktop()) return;
        window.requestAnimationFrame(function () {
          if (!group.contains(document.activeElement)) {
            group.classList.remove("is-open");
            group.open = false;
          }
        });
      });
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
