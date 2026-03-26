(function ($) {
  var mobileMenuQuery = window.matchMedia('(max-width: 670px)');

  function closeSubmenus(exceptItem) {
    var itemsToClose = $('.hasSubmenu');

    if (exceptItem && exceptItem.length) {
      itemsToClose = itemsToClose.not(exceptItem);
    }

    itemsToClose.removeClass('is-open');
    itemsToClose.find('.submenuToggle').attr('aria-expanded', 'false');
  }

  function syncNavigationState() {
    if (mobileMenuQuery.matches) {
      if (!$('.menuMainAlt').hasClass('active')) {
        $('.headerNavigationContainer').addClass('hideNav');
      }
      return;
    }

    $('.headerNavigationContainer').removeClass('hideNav');
    $('.menuMainAlt').removeClass('active').attr('aria-expanded', 'false');
    closeSubmenus();
  }

  $(function () {
    $('.menuMainAlt').on('click', function () {
      if (!mobileMenuQuery.matches) {
        return;
      }

      var isOpen = $(this).hasClass('active');
      $(this).toggleClass('active', !isOpen);
      $(this).attr('aria-expanded', String(!isOpen));
      $('.headerNavigationContainer').toggleClass('hideNav', isOpen);

      if (isOpen) {
        closeSubmenus();
      }
    });

    $('.submenuToggle').on('click', function () {
      if (!mobileMenuQuery.matches) {
        return;
      }

      var menuItem = $(this).closest('.hasSubmenu');
      var isOpen = menuItem.hasClass('is-open');

      closeSubmenus(menuItem);
      menuItem.toggleClass('is-open', !isOpen);
      $(this).attr('aria-expanded', String(!isOpen));
    });

    if (typeof mobileMenuQuery.addEventListener === 'function') {
      mobileMenuQuery.addEventListener('change', syncNavigationState);
    } else if (typeof mobileMenuQuery.addListener === 'function') {
      mobileMenuQuery.addListener(syncNavigationState);
    }

    syncNavigationState();
  });
})(jQuery);
