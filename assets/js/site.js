(function () {
  function initNavigation() {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".site-header__toggle");
    const toggleLabel = document.querySelector("[data-nav-toggle-label]");
    const closeButton = document.querySelector("[data-nav-close]");
    const panel = document.querySelector("[data-nav-panel]");
    const overlay = document.querySelector("[data-nav-overlay]");
    const nav = document.querySelector(".site-nav");
    const actions = document.querySelector(".site-header__actions");
    const navGroups = document.querySelectorAll("[data-nav-group]");

    if (!header || !toggle || !panel || !nav) return;

    function isDrawerMode() {
      return header.classList.contains("site-header--drawer");
    }

    function setMenuState(shouldOpen) {
      const isOpen = Boolean(shouldOpen && isDrawerMode());

      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      toggle.classList.toggle("is-active", isOpen);
      panel.classList.toggle("is-open", isOpen);
      document.body.classList.toggle("nav-open", isOpen);

      if (overlay) {
        overlay.classList.toggle("is-open", isOpen);
      }

      if (toggleLabel) {
        toggleLabel.textContent = isOpen ? "Close" : "Menu";
      }
    }

    function measureNeedsDrawer() {
      if (window.innerWidth <= 1080) return true;

      header.classList.remove("site-header--drawer");
      panel.classList.remove("is-open");
      document.body.classList.remove("nav-open");
      toggle.classList.remove("is-active");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");

      if (overlay) {
        overlay.classList.remove("is-open");
      }

      if (toggleLabel) {
        toggleLabel.textContent = "Menu";
      }

      const groups = Array.from(navGroups);
      const firstTop = groups[0] ? groups[0].getBoundingClientRect().top : 0;
      const navWrapped = groups.some(function (group) {
        return Math.abs(group.getBoundingClientRect().top - firstTop) > 4;
      });
      const actionsWrapped = actions ? actions.getBoundingClientRect().height > 54 : false;
      const panelTall = panel.getBoundingClientRect().height > 76;

      return navWrapped || actionsWrapped || panelTall;
    }

    function updateNavigationMode() {
      const shouldUseDrawer = measureNeedsDrawer();

      header.classList.toggle("site-header--drawer", shouldUseDrawer);

      if (!shouldUseDrawer) {
        setMenuState(false);
      }
    }

    toggle.addEventListener("click", function () {
      if (!isDrawerMode()) return;

      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setMenuState(!isOpen);
    });

    if (closeButton) {
      closeButton.addEventListener("click", function () {
        setMenuState(false);
        toggle.focus();
      });
    }

    if (overlay) {
      overlay.addEventListener("click", function () {
        setMenuState(false);
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;
      if (toggle.getAttribute("aria-expanded") !== "true") return;

      setMenuState(false);
      toggle.focus();
    });

    panel.addEventListener("click", function (event) {
      if (!isDrawerMode()) return;
      if (!event.target.closest("a")) return;

      setMenuState(false);
    });

    function isDesktop() {
      return !isDrawerMode();
    }

    function closeDesktopGroups(exceptGroup) {
      navGroups.forEach(function (group) {
        if (group === exceptGroup) return;
        group.classList.remove("is-open");
        group.open = false;
      });
    }

    navGroups.forEach(function (group) {
      const summary = group.querySelector("summary");
      if (!summary) return;

      summary.addEventListener("click", function (event) {
        if (isDesktop()) {
          event.preventDefault();
          return;
        }

        window.requestAnimationFrame(function () {
          if (!group.open) return;

          navGroups.forEach(function (otherGroup) {
            if (otherGroup === group) return;
            otherGroup.classList.remove("is-open");
            otherGroup.open = false;
          });
        });
      });

      group.addEventListener("mouseenter", function () {
        if (!isDesktop()) return;
        closeDesktopGroups(group);
        group.open = true;
        group.classList.add("is-open");
      });

      group.addEventListener("mouseleave", function () {
        if (!isDesktop()) return;
        group.classList.remove("is-open");
        group.open = false;
      });

      group.addEventListener("focusin", function () {
        if (!isDesktop()) return;
        closeDesktopGroups(group);
        group.open = true;
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

    let resizeFrame = null;

    function scheduleNavigationUpdate() {
      if (resizeFrame) {
        window.cancelAnimationFrame(resizeFrame);
      }

      resizeFrame = window.requestAnimationFrame(function () {
        updateNavigationMode();
        resizeFrame = null;
      });
    }

    setMenuState(false);
    updateNavigationMode();
    window.addEventListener("resize", scheduleNavigationUpdate);
    window.addEventListener("load", scheduleNavigationUpdate);

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(scheduleNavigationUpdate);
    }
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
