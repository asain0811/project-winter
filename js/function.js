$(function() {
	const $slides = $('#slides > .slides_container > li');
	const $indicator = $('#slides > .slides-indicator > li > a');
	let nowIdx = 0;

	$indicator.on('click', function(evt) {
		nowIdx = $indicator.index(this);
		$indicator.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
		$slides.find('.on').stop().fadeOut(1000).removeClass('on');
		$slides.eq(nowIdx).stop().fadeIn(1000).addClass('on');

		evt.preventDefault();
	});
});
