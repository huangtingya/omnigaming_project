$(function(){
	$(window).load(function(){
		$(window).bind('scroll resize',function(){
		var $this = $(this);
		var $this_Top = $this.scrollTop();
		// console.log($this_Top);
		if ($this_Top < 1400) {
			$('.bf_effect_main').removeClass('activeshow');
			$('.bf_effect_bg').removeClass('activebgshow');
		}if ($this_Top >= 1590){
			$('.bf_effect_main').addClass('activeshow');
			$('.bf_effect_bg').addClass('activebgshow');
		}if ($this_Top >= 2200) {
			$('.bf_effect_main').removeClass('activeshow');
			$('.bf_effect_bg').removeClass('activebgshow');
		}if ($this_Top >= 2300) {
			$('.bf_effect_main').addClass('activeshow');
			$('.bf_effect_bg').addClass('activebgshow');
		}
		}).scroll();
	});
})