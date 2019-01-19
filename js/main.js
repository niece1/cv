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

$('.filter_button_group').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });

  $('.filter_button_group li').removeClass('active');
  $(this).addClass('active');
});





//Parallax
    var $window = $(window);
    if($('section[data-type="background"]').length){
        $('section[data-type="background"]').each(function(){

            var $obj = $(this);
            var offset = $obj.offset().top;

            $(window).scroll(function()
            {
                offset = $obj.offset().top;

                if ($window.scrollTop() > (offset - window.innerHeight))
                {
                    var yPos = -(($window.scrollTop() - offset) / 2 );
                    var coords = '50% ' + ( yPos ) + 'px';
                    $obj.css({ backgroundPosition:  coords });
                }
            });
            $(window).resize(function()
            {
                offset = $obj.offset().top;
            });
        });
    }

    // Button Up
     var $btnUp = $(".btn-up")

     $btnUp.on("click", function(){
       $("html,body").animate({scrollTop:0}, 900)
     });

});

// Modal images
var modal = document.getElementById('portfolioModal');
var span = $(".close");

span.on("click", function() {
    modal.style.display = "none";
});

var images = document.getElementsByClassName("modal_image");
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
