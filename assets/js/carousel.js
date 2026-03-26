var intID = null;
var defaultChangeMS = 5000;

function changeSlide(carouselId, forwardBy, setNumber) {
    var selector = "#" + carouselId + " > li";
    var count = $(selector).length;
    var currentNumber = -1;

    $(selector).each(function () {
      currentNumber += 1;

      if (!$(this).hasClass("hidden")) {
        if (intID != null) {
          clearInterval(intID);
          intID = setInterval(function () { changeSlide(1) }, defaultChangeMS);
        }

        return false;
      }
    });
    currentNumber += forwardBy;
    if (currentNumber >= count) currentNumber = 0;
    if (currentNumber < 0) currentNumber = count - 1;

    if (setNumber > -1) {
      currentNumber = setNumber;
    }

    $(selector).addClass("hidden").attr("aria-hidden", "TRUE");
    $("#" + carouselId + " > li:nth-child(" + (currentNumber + 1) + "), .bannerSlides > li:nth-child(" + (currentNumber + 1) + ")").removeClass("hidden").attr("aria-hidden", "FALSE");

    $(".carousel .activeSlide, .bannerButtons .activeSlide").removeClass("activeSlide");

    $(".carousel #hc_" + currentNumber + ", .bannerButtons #hc_" + currentNumber).addClass("activeSlide");

    if (intID != null) {
      clearInterval(intID);
      intID = setInterval(function () {
        if (window["vidPlaying"] !== true) {
          changeSlide(carouselId,1);
        }
      }, defaultChangeMS);
    }


  return false;
}

