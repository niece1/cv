$( document ).ready( function() {





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

var $grid = $('.portfolio_container').isotope({
  itemSelector: '.portfolio_item',
  stagger: 30
});

$('.filter_button_group').on( 'click', '.button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

});

// Modal images
var modal = document.getElementById('portfolioModal');
var span = $(".close");

span.on("click", function() {
    modal.style.display = "none";
});

var images = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
  };
}
