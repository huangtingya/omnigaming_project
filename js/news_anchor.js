$(function(){
	// News info ContentAnchor
	$(window).load(function(){
		var $newsContentAnchor = $('#newsContentBlock').offset().top;
		$('html,body').animate({scrollTop: $newsContentAnchor - $('#tobar').innerHeight() - 120},1000);
	});
});