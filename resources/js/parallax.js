export default

$( document ).ready( function() {
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
