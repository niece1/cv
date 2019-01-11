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
       slidesToShow: 2,
       slidesToScroll: 1,
       infinite: true,

     }
   },
   {
     breakpoint: 650,
     settings: {
       slidesToShow: 1,
       slidesToScroll: 1
     }
   }

   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
 ]

});

// Skillbar animation
$(document).on('scroll', function(){
    if($('html,body').scrollTop() > $('#skills').height()){
  $(".skillbar").each(function(){
			$(this).find(".skillbar-bar").animate({
				width:$(this).attr("data-percent")
			},3000);
		});
  }
});



})(jQuery); // End of use strict
