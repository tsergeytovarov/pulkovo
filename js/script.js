$(function(){
	
	// work with menu

	$('.menu-open, .menu-close').on('click', function(){
		$('.main-menu').toggleClass('active');
		$('body').toggleClass('hidden')
	})


	// tab control

	var tabs = $('.tab-control').find('a');

	tabs.on('click',function(){
		tabs.removeClass('active');
		$(this).addClass('active');

		$('.tab').removeClass('active');
		$('.' + $(this).attr('data-tab') ).addClass('active');

	})

});