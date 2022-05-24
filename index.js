// INITIALIZING WOW
const wow = new WOW();
wow.init();

var typed = new Typed(".type", {
  strings: [
    "Python Developer",
    "Web Developer",
    "Cyber Enthusiast",
    "Freelancer",
  ],
  typeSpeed: 70,
  backSpeed: 60,
  loop: true,
});

// OWL CAROUSEL
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  speed: 900,
  margin: 10,
  items: 2,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});

// PRELOADER FADEOUT
$(window).on("load", function () {
  $(".preloader").delay("700").fadeOut("slow");
});
