$(document).ready(function () {
    $("[data-slider]").slick({
		dots: true
	});

	$('input[type="range"]').each(function () {
		$(this).rangeslider();
	})
});