export default

$( document ).ready( function() {
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
});
