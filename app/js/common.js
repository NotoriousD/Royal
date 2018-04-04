$(function() {

	var slider = $('.slider').lightSlider({
		item: 3,
		vertical: true,
		pager: false,
		verticalHeight: 490,
		controls: false
	});
	$('.sl-prev').click(function(e){
		e.preventDefault();
		slider.goToPrevSlide();
	});

	$('.sl-next').click(function(e){
		e.preventDefault();
		slider.goToNextSlide();
	});


});
