import easing from './jquery.easing';
$( document ).ready( function() {

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  		var target = $(this.hash);
  		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  		if (target.length) {
  			$('html, body').animate({
  				scrollTop: (target.offset().top - 70)
  			}, 1000, "easeInOutExpo");
  			return false;
  		}
  	}
  });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
    	$('.navbar-collapse').collapse('hide');
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

//Isotope
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

(function ($) {
    'use strict';
   
 var form = $('.contact_form'),
        message = $('.contact_msg'),
       form_data;
    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('alert-danger').addClass('alert-success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
        form.find('input:not([type="submit"]), textarea').val('');
    }
    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('alert-success').addClass('alert-success');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 2000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);
