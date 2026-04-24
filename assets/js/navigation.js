function closeAllSubmenus() {
  $('.hasSubmenu').removeClass('is-open');
  $('.submenuToggle').attr('aria-expanded', 'false');
}

function mobileClickFunction() {
  var $menuButton = $('.menuMainAlt');
  var isOpen = $menuButton.hasClass('active');

  if (isOpen) {
    $menuButton.removeClass('active').attr('aria-expanded', 'false');
    $('.headerNavigationContainer').addClass('hideNav');
    closeAllSubmenus();
  } else {
    $menuButton.addClass('active').attr('aria-expanded', 'true');
    $('.headerNavigationContainer').removeClass('hideNav');
  }
}

function menuClickFunction(buttonElement) {
  if (window.innerWidth > 670) {
    return;
  }

  var $button = $(buttonElement);
  var $menuItem = $button.closest('.hasSubmenu');
  var willOpen = !$menuItem.hasClass('is-open');

  closeAllSubmenus();

  if (willOpen) {
    $menuItem.addClass('is-open');
    $button.attr('aria-expanded', 'true');
  }
}

$(function () {
  $('.menuMainAlt').on('click', function () {
    mobileClickFunction();
  });

  $('.submenuToggle').on('click', function () {
    menuClickFunction(this);
  });
});
