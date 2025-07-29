function mobileClickFunction() {
  if($('.menuMainAlt').hasClass('active')) {
    // we have clicked the menu to hide the navigation and return button to menu display icon state
    $('.menuMainAlt').removeClass('active');
    $('.headerNavigationContainer').addClass('hideNav');
    // also close any open submenu items
    $('#menuNS').removeClass('isActiveNS');
    $('#menuVOL').removeClass('isActiveVOL');
    $('#menuFund').removeClass('isActiveFund');
    $('#menuNews').removeClass('isActiveNews');
    $('#menuAbout').removeClass('isActiveAbout');


  } else {
    // we have closed the menu bar , hide the navigation and return button to menu display icon state
    $('.menuMainAlt').addClass('active');
    $('.headerNavigationContainer').removeClass('hideNav');
  }
}

function menuClickFunction(parm) {
  console.log('xxxxxxxxxxxxxxxxxx ' , parm);
  var level2idName = '#menu' + parm;
  var level2ParmName = 'isActive' + parm;
  //if it is a mobile menu click , expand / contract the level 2 elements
   if($(level2idName).hasClass(level2ParmName)) {
     $(level2idName).removeClass(level2ParmName);
     $(level2idName).addClass('closed');
     $('#menuNS').removeClass('isActiveNS');
     $('#menuVOL').removeClass('isActiveVOL');
     $('#menuFund').removeClass('isActiveFund');
     $('#menuNews').removeClass('isActiveNews');
     $('#menuAbout').removeClass('isActiveAbout');
   } else {
     $(level2idName).removeClass('closed');
     $('#menuNS').removeClass('isActiveNS');
     $('#menuVOL').removeClass('isActiveVOL');
     $('#menuFund').removeClass('isActiveFund');
     $('#menuNews').removeClass('isActiveNews');
     $('#menuAbout').removeClass('isActiveAbout');
     $(level2idName).addClass(level2ParmName);
   }
}
