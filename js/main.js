(function($) {
  "use strict"; // Start of use strict





  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Slick slider
  $(".advantages-wrapper").slick({
 infinite:true,
 arrows: false,
 autoplay: true,
 slidesToShow: 4,
 slidesToScroll: 1,
 speed: 1000,
 autoplaySpeed: 2000,
 pauseOnHover: false,
 responsive: [
   {
     breakpoint: 1000,
     settings: {
       slidesToShow: 5,
       slidesToScroll: 1,
       infinite: true,

     }
   },
   {
     breakpoint: 800,
     settings: {
       slidesToShow: 4,
       slidesToScroll: 1
     }
   },
   {
     breakpoint: 650,
     settings: {
       slidesToShow: 3,
       slidesToScroll: 1
     }
   },
   {
     breakpoint: 450,
     settings: {
       slidesToShow: 2,
       slidesToScroll: 1,
       infinite: true,

     }
   },
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]

});





})(jQuery); // End of use strict
