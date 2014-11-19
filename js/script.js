$(function(){
	
	// work with menu

	$('.menu-open, .menu-close').on('click', function(){
		$('.main-menu').toggleClass('active');
		$('body,html').toggleClass('hidden')
	})


	// tab control

	var tabs = $('.tab-control').find('a');

	tabs.on('click',function(){
		tabs.removeClass('active');
		$(this).addClass('active');

		$('.tab').removeClass('active');
		$('.' + $(this).attr('data-tab') ).addClass('active');

	})


	// promo slider

	$('.promo-slider').bxSlider({
		pager: true,
		auto: true
	});

	// search
	$("#target").keyup(function() {

		var a = $(this);

		if( a.val() != '' ){
			$('.find-combo').addClass('active');
		} else {
			$('.find-combo').removeClass('active');
		}

	});

	$('.lang-toogle').on('click', function(){

		var s = $(this);

		if ( s.hasClass('rus') ){
			s.removeClass('rus').addClass('eng');
		} else if ( s.hasClass('eng') ){
			s.removeClass('eng').addClass('rus');
		}
	})

	$(window).scroll(function(){
		
		if( $(this).scrollTop() > 0){
			$('.main-menu').addClass('top');	
		} else {
			$('.main-menu').removeClass('top');	
		}
		
	})

});