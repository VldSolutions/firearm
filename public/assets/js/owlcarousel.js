initSlider();
function initSlider() {
  $(".owl-carousel-home").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    dots: false,
    nav: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    onInitialized: startProgressBar,
    onTranslate: resetProgressBar,
    onTranslated: startProgressBar,
  });
}
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

$(".owl-custom-testimonial").owlCarousel({
  items: 3,
  loop: true,
  autoplay: true,
  dots: false,
  nav: false,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsiveBaseElement: "body",
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    550: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

$(".owl-carousel-home-logo").owlCarousel({
  items: 3,
  loop: true,
  autoplay: true,
  dots: true,
  nav: false,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsiveBaseElement: "body",
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    550: {
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

function startProgressBar() {
  // apply keyframe animation
  $(".slide-progress").css({
    width: "100%",
    transition: "width 5000ms",
  });
}

function resetProgressBar() {
  $(".slide-progress").css({
    width: 0,
    transition: "width 0s",
  });
}

$(document).ready(function () {
  $(".slider").slick({
    slidesToShow: 2,
    arrows: false,
    autoplay: true,
    speed: 300,
  });
});

$(document).ready(function () {
  $(".sliderhome").slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    speed: 100,
  });
});

$(document).ready(function () {
  $(".slidertestimonials").slick({
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    speed: 100,
  });
});
