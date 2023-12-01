$(document).scroll(function () {
  "use strict";

  var y = $(this).scrollTop();
  if (y > 300) {
    $(".floatbutton").fadeIn();
  } else {
    $(".floatbutton").fadeOut();
  }
});

$(".clickbutton").click(function () {
  $(".floatbutton").toggleClass("active");
});

$(".floating_strip .rotatekaro a").on("click", function (e) {
  $(".floating_form").toggleClass("open");
});
