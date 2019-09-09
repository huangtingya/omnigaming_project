$(function(){
	var $headerLogoHide = $('.newgame_logo, .news_logo, .suppliers_logo, .products_logo, .about_logo, .contact_logo');
	$(window).load(function(){
		$('#loading').fadeOut(1000);
		$headerLogoHide.show();
		$('.prom_focus_cn, .prom_focus_en').addClass('active');
		$('.promobtn').addClass('active');
	});
	$(window).load(function(){
		$(window).bind('scroll resize',function(){
		var $this = $(this);
		var $this_Top = $this.scrollTop();
		var $HeaderLogeAnimate = $('.newgame_logo, .news_logo, .suppliers_logo, .products_logo, .about_logo, .contact_logo');
		// console.log($this_Top);
		if ($this_Top < 50) {
			$('#topbar').stop().animate({top:'0px'});
			$('#topbar').css({
				'background-color':'rgba(10,10,10, .2)',
				"box-shadow":""
			});
			$('#topbar .fl_right').css({
				"color":"#fff",
			});
			
			$('.home-content > h1').addClass('active_effect01');
			$('.home-content > span').addClass('active_effect02');
			$('.home-content > p').addClass('active_effect03');
			$('.main_bg, .about_main_bg, .product_main_bg, .suppliers_main_bg, .newgame_main_bg, .news_main_bg').css({
				'transform' : 'translate3d(0,0,0)',
			});

			$('#omni_animation').addClass('activedraw');
			$('.draw_fill').addClass('activefill');
		
			// Abouts frist content translate
			$('.gaming_rect_1').removeClass('rect_active');

			// 2018-11-09 Header Logo animate
			$HeaderLogeAnimate.addClass('logoflickerActive');


			// New Game Released
			$('.feature_article figcaption img').removeClass('activeimg');

		}if ($this_Top >= 50){
			$('#topbar').stop().animate({top:'0px'});
			$('#topbar').css({
				"background-color":"rgba(10,10,10, .9)",
				"box-shadow":"0 2px 3px rgba(0,0,0,.5)"
			});
			$('#topbar .fl_right').css({
				"color":"#fff",
			});
			
			$('.main_bg, .about_main_bg, .product_main_bg, .suppliers_main_bg, .newgame_main_bg, .news_main_bg').css({
				'transform' : 'translate3d(0,30px,-1px)',
			});

			$('#omni_animation').removeClass('activedraw');
			$('.draw_fill').removeClass('activefill');

		}if ($this_Top >= 60) {
			// Omni background
			$('.main_bg, .about_main_bg, .product_main_bg, .suppliers_main_bg, .newgame_main_bg, .news_main_bg').css({
				'transform' : 'translate3d(0,50px,1px)',
			});
			// Abouts second content translate
			$('.gaming_info_manage').css({
				'transform' : 'translate3d(1000px, -10px,1px)',
			});
			// Abouts three & four content translate
			$('.gaming_info_consul, .gaming_info_support').css({
				'transform' : 'translate3d(-1500px, 0px,1px)',
			});


		}if ($this_Top >= 258) {
			// Abouts first content / rect / number translate
			$('.gaming_rect_1').addClass('rect_active');
			$('.gaming_info_integ').css({
				'transform' : 'translate3d(0, 1px,1px)',
			});
			$('.gaming_number_1').css({
				'transform' : 'translate3d(10px, 0px, 1px)',
			});
			// Abouts content second #B8B8B8
			$('.gaming_info_integ > p').css({
				'color' : '#B8B8B8',
			});
			// Abouts comment content translate
			$('.gaming_acc_comment').css({
				'transform' : 'translate3d(0, 10px, 1px)',
			});

		}if ($this_Top >= 400) {
			// Abouts first content translate
			$('.gaming_number_1').css({
				'transform' : 'translate3d(10px, 0px, 1px)',
			});
			$('.gaming_number_1').css({
				'transform' : 'translate3d(-10px, 0px, 1px)',
			});
			$('.gaming_info_integ').css({
				'transform' : 'translate3d(0, -10px,1px)',
			});
			// Abouts first font color #0a0a0a
			$('.gaming_info_integ > p').css({
				'color' : '#0a0a0a',
			});
			$('.gaming_acc_comment').css({
				'transform' : 'translate3d(0, -10px, 1px)',
			});
			// Abouts second rect & Number translate
			$('.gaming_rect_2').css({
				'background-color' : '#0a0a0a',
			});
			$('.gaming_number_2').css({
				'color' : 'rgba(239,239,239,1)',
			});
			$('.gaming_number_2').css({
				'visibility' : 'hidden',
			});
			// Abouts second font color #B8B8B8
			$('.gaming_info_manage > p').css({
				'color' : '#B8B8B8',
			});
			// Abouts second acc img 
			$('.gaming_acc_img').css({
				'transform' : 'translate3d(0px, -50px, 1px)',
			});

			// Abouts second rect & Number translate
			$('.gaming_rect_2').css({
				'width' : '0px',
			});
			$('.gaming_number_2').css({
				'transform' : 'translate3d(-10px, 0px, 1px)',
				'font-size' : '80px',
			});
			// Abouts acc img 
			$('.gaming_acc_img').css({
				'transform' : 'translate3d(0px, 5px, 1px)',
			});

			// 2018-11-09 Header Logo animate
			$HeaderLogeAnimate.removeClass('logoflickerActive');
			
		}if ($this_Top >= 700) {
			// Abouts first content translate
			$('.gaming_info_integ').css({
				'transform' : 'translate3d(0, 1px,2px)',
			});
			// Abouts comment content translate
			$('.gaming_acc_comment').css({
				'transform' : 'translate3d(0, -10px, 1px)',
			});

			// New Game Released
			$('.feature_article figcaption img').addClass('activeimg');

			// Abouts second content translate
			$('.gaming_info_manage').css({
				'transform' : 'translate3d(0px, 0px, 1px)',
			});
			$('.gaming_rect_2').css({
				'width' : '665px',
			});
			$('.gaming_number_2').css({
				'visibility' : 'visible',
				'transform' : 'translate3d(45px, -65px, 1px)',
				'font-size' : '100px',
			});

		}if ($this_Top >= 790) {

			// Abouts second content translate
			$('.gaming_info_manage').css({
				'transform' : 'translate3d(0, -10px, 5px)',
			});
			$('.gaming_info_manage > p').css({
				'color' : '#0a0a0a',
			});
			// Abouts acc img 
			$('.gaming_acc_img').css({
				'transform' : 'translate3d(5px, 10px, 1px)',
			});

		}if ($this_Top > 980) {
			
			// Abouts three & four content translate
			$('.gaming_info_consul, .gaming_info_support').css({
				'transform' : 'translate3d(0px, 0px,1px)',
			});
			// Abouts Number 3,4 translate
			$('.gaming_number_3, .gaming_number_4').css({
				'transform' : 'translate3d(0, 10px, 5px)',
			});
			// Abouts acc img 
			$('.gaming_acc_img').css({
				'transform' : 'translate3d(10px, 15px, 1px)',
			});
			$('.about_mission_info, .about_mission_title').css({
				'opacity' : '0',
			});

		}if ($this_Top >= 1000) {
			// Abouts three & four content translate
			$('.gaming_info_consul, .gaming_info_support').css({
				'transform' : 'translate3d(0px, -10px,1px)',
			});
			// Abouts Number 3,4 translate
			$('.gaming_number_3, .gaming_number_4').css({
				'transform' : 'translate3d(0, 0px, 5px)',
			});
			// Abouts acc img 
			$('.gaming_acc_img').css({
				'transform' : 'translate3d(15px, 20px, 1px)',
			});

			// Abouts three & four font color #B8B8B8
			$('.gaming_info_consul > p, .gaming_info_support > p').css({
				'color' : '#B8B8B8',
			});

		}if ($this_Top >= 1100) {
			// Abouts second content translate
			$('.gaming_info_manage').css({
				'transform' : 'translate3d(0, 10px, 5px)',
			});
			// Abouts three & four content translate
			$('.gaming_info_consul, .gaming_info_support').css({
				'transform' : 'translate3d(0px, -20px,1px)',
			});
			// Abouts our mission content translate
			$('.about_mission_title, .about_mission_info').css({
				'transform' : 'translate3d(0, 10px, 5px)',
			});
			// Index New suppliers animation
			$('.introducehidden').addClass('activeSupplier');

			// Abouts three & four font color #0a0a0a
			$('.gaming_info_consul > p, .gaming_info_support > p').css({
				'color' : '#0a0a0a',
			});

		}if ($this_Top >= 1300) {
			// Abouts Number 3,4 translate
			$('.gaming_number_3, .gaming_number_4').css({
				'transform' : 'translate3d(0, -30px, 5px)',
			});
			// Abouts acc img 
			$('.gaming_acc_img').css({
				'transform' : 'translate3d(0px, 0px, 1px)',
			});
			// Abouts team content
			$('.team_content span').removeClass('imgeffect');

			// Abouts our mission content translate
			$('.about_mission_title').css({
				'transform' : 'translate3d(0, -10px, 5px)',
			});
			// Abouts our mission content translate
			$('.about_mission_title').css({
				'opacity' : '1',
				'transform' : 'translate3d(0, -5px, 5px)',
			});
			// Abouts team content
			$('.team_content span').addClass('imgeffect');
			
		}if ($this_Top > 1500) {
			// Abouts our mission content
			$('.about_mission_info').css({
				'opacity' : '.8',
				'transform' : 'translate3d(0, -5px, 5px)',
			});
			// Abouts team content mobile height
			$('.team_content span').removeClass('imgeffect');

			// Abouts our mission content mobile height
			$('.about_mission_info, .about_mission_title').css({
				'opacity' : '1',
			});
		}if ($this_Top > 1600) {
			// Abouts team content mobile height
			$('.team_content span').addClass('imgeffect');
		}
		}).scroll();
	});
	
	$('#accordion').find('.accordion-toggle').click(function(){
		$(this).next().slideDown(5000);
		// $('.accordion-content').not($(this).next()).slideUp(),5000;
		$(this).addClass("toggle_click")
	});
	$('.close_up').click(function(){
		$('.accordion-content').slideUp(5000);
		$('.accordion-toggle').removeClass("toggle_click")
	});

	// whats_news______slideDown&Up
	var $thisNews = $('.whats_news_info');
		$thisClose_m = $('.news_clickhide_m');
	$('.whats_news_info').hide();
	$('.whats_news_content').find('.whats_news_ctrl').click(function(){
		$(this).next().slideDown(3000);
		$(this).addClass('news_click');
	});
	$('.whats_news_close').click(function(){
		$('.whats_news_info').slideUp(2000);
		$(this).removeClass('news_click')
	});
	
	// 18-05-09-new_suppliers___
	var $newsuppInfo = $('.specs_wrap .specs_info');
		$newsuppInfo.hide();
		$('.specs_wrap .specs_btn').on('click', function(){
			$newsuppInfo.eq($(this).index()).fadeIn().siblings().hide();
		}).eq(0).click();
	 
	// hanburgmenu
    $('.hanburgmenu').click(function(){
      $('.hanburgmenu').toggleClass('active');
      $('.overlay').toggleClass('open');
      $('body').toggleClass('active');
    });

	// mobile_scrollup
	var $mobile_scrollUp = $('.mobile_scrollup');
	$mobile_scrollUp.hide();
	$(window).on('scroll resize',function(){
		if($(this).scrollTop() >= 400){
			$('.mobile_scrollup').fadeIn();
		}else if($(this).scrollTop() < 800){
			$('.mobile_scrollup').fadeOut();
		}
	});
	// pc & mobile scrollup
	$('.mobile_scrollup, .loadendscrollup').click(function(){
		$('html,body').animate({scrollTop:0},800);
		return false;
	});

	var $articleLoadClick = $('a.artice_load'),
		$articeContentlist = $('.articeLoadMore'),
		$attContent = $('.page_load_status')
		$articeContentlist.hide();
		$attContent.hide();

	$articleLoadClick.on('click', function(){
		$articeContentlist.fadeIn(800);
		$('.stringEndOfCN').text('无更多内容').css({ 
			'font-style' : 'italic',
			'border-left' : 'none',
			'border-right' : 'none',
		});
		$('.stringEndOfEN').text('End of content').css({ 
			'font-style' : 'italic',
			'border-left' : 'none',
			'border-right' : 'none',
		});
	});

	$articleLoadClick.dblclick(function(){
		$articleLoadClick.hide();
		$attContent.fadeIn(300);
	});

});