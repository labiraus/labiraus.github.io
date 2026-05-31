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
    const drawerBreakpoint = 1080;

    if (!header || !toggle || !panel || !nav) return;

    function isDrawerMode() {
      return header.classList.contains("site-header--drawer");
    }

    function setGroupOpen(group, shouldOpen) {
      const summary = group.querySelector("summary");
      group.open = shouldOpen;
      group.classList.toggle("is-open", shouldOpen);
      if (summary) {
        summary.setAttribute("aria-expanded", String(shouldOpen));
      }
    }

    function closeAllGroups() {
      navGroups.forEach(function (group) {
        setGroupOpen(group, false);
      });
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

      if (!isOpen) {
        closeAllGroups();
      } else if (closeButton) {
        window.requestAnimationFrame(function () {
          closeButton.focus();
        });
      }
    }

    function setDrawerMode(shouldUseDrawer) {
      const isChangingMode = isDrawerMode() !== shouldUseDrawer;

      header.classList.toggle("site-header--drawer", shouldUseDrawer);

      if (!shouldUseDrawer || isChangingMode) {
        setMenuState(false);
      }
    }

    function measureNeedsDrawer() {
      if (window.innerWidth <= drawerBreakpoint) return true;

      const wasDrawer = isDrawerMode();
      const wasMenuOpen = panel.classList.contains("is-open");
      const wasOverlayOpen = overlay ? overlay.classList.contains("is-open") : false;
      const wasToggleActive = toggle.classList.contains("is-active");
      const wasBodyOpen = document.body.classList.contains("nav-open");

      header.classList.remove("site-header--drawer");
      panel.classList.remove("is-open");
      toggle.classList.remove("is-active");
      document.body.classList.remove("nav-open");

      if (overlay) {
        overlay.classList.remove("is-open");
      }

      closeAllGroups();

      const main = header.querySelector(".site-header__main");
      const firstGroup = navGroups[0];
      const firstGroupTop = firstGroup ? firstGroup.getBoundingClientRect().top : 0;
      const navWrapped = Array.from(navGroups).some(function (group) {
        return Math.abs(group.getBoundingClientRect().top - firstGroupTop) > 4;
      });
      const mainOverflow = main ? main.scrollWidth > main.clientWidth + 2 : false;
      const panelOverflow = panel.scrollWidth > panel.clientWidth + 2;
      const navOverflow = nav.scrollWidth > nav.clientWidth + 2;
      const actionsWrapped = actions ? actions.getBoundingClientRect().height > 54 : false;
      const panelWrapped = panel.getBoundingClientRect().height > 90;

      header.classList.toggle("site-header--drawer", wasDrawer);
      panel.classList.toggle("is-open", wasMenuOpen);
      toggle.classList.toggle("is-active", wasToggleActive);
      document.body.classList.toggle("nav-open", wasBodyOpen);

      if (overlay) {
        overlay.classList.toggle("is-open", wasOverlayOpen);
      }

      return navWrapped || mainOverflow || panelOverflow || navOverflow || actionsWrapped || panelWrapped;
    }

    function updateNavigationMode() {
      setDrawerMode(measureNeedsDrawer());
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
        if (isDrawerMode()) {
          toggle.focus();
        }
      });
    }

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") return;

      if (toggle.getAttribute("aria-expanded") === "true") {
        setMenuState(false);
        toggle.focus();
        return;
      }

      closeAllGroups();
    });

    document.addEventListener("click", function (event) {
      if (isDrawerMode()) return;
      if (nav.contains(event.target)) return;

      closeAllGroups();
    });

    panel.addEventListener("click", function (event) {
      if (!isDrawerMode()) return;

      if (event.target.closest("[data-nav-close]")) {
        setMenuState(false);
        toggle.focus();
        return;
      }
      if (!event.target.closest("a")) return;

      setMenuState(false);
    });

    navGroups.forEach(function (group) {
      const summary = group.querySelector("summary");
      if (!summary) return;

      summary.setAttribute("aria-expanded", String(group.open));

      summary.addEventListener("click", function (event) {
        if (!isDrawerMode()) {
          event.preventDefault();
          closeAllGroups();
          setGroupOpen(group, true);
          return;
        }

        window.requestAnimationFrame(function () {
          setGroupOpen(group, group.open);
          if (!group.open) return;

          navGroups.forEach(function (otherGroup) {
            if (otherGroup === group) return;
            setGroupOpen(otherGroup, false);
          });
        });
      });

      group.addEventListener("mouseenter", function () {
        if (isDrawerMode()) return;
        closeAllGroups();
        setGroupOpen(group, true);
      });

      group.addEventListener("mouseleave", function () {
        if (isDrawerMode()) return;
        setGroupOpen(group, false);
      });

      group.addEventListener("focusin", function () {
        if (isDrawerMode()) return;
        closeAllGroups();
        setGroupOpen(group, true);
      });

      group.addEventListener("focusout", function () {
        if (isDrawerMode()) return;

        window.requestAnimationFrame(function () {
          if (!group.contains(document.activeElement)) {
            setGroupOpen(group, false);
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
          const card = otherToggle.closest(".donation-card");
          const shouldOpen = otherToggle === toggle ? !isOpen : false;

          otherToggle.setAttribute("aria-expanded", String(shouldOpen));
          if (card) card.classList.toggle("donation-card--open", shouldOpen);
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
