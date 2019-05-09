$(document).ready(function () {
	const slider = $("[data-slider]");
	const productSlider = $("[data-product-slider]");
	const productSliderNav = $("[data-product-slider-nav]");
	const priceRange = $("#price-range");
	const priceAmount = $("#price-amount");
	const priceRange2 = $("#price-range2");
	const priceAmount2 = $("#price-amount2");
	const productTabs = $("[data-product-tabs]");
	const quiz = $("[data-quiz]");
	const quizOpen = $("[data-quiz-open]");
	const quizClose = $("[data-quiz-close]");
	const quizOverlay = $("[data-quiz-overlay]");

	quizOpen.on('click', function (e) {
		e.preventDefault();

		quiz.addClass('quiz--opened');
		quizOverlay.addClass('quiz__overlay--opened');
		$('html').css('overflow', 'hidden');
		$('body').css('overflow-y', 'scroll');
	});

	quizClose.on('click', function () {
		quiz.removeClass('quiz--opened');
		quizOverlay.removeClass('quiz__overlay--opened');
		$('html').css('overflow', '');
		$('body').css('overflow-y', '');
	});

    slider.slick({
		dots: true
	});

    productSlider.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		asNavFor: productSliderNav
	});

    productSliderNav.slick({
		slidesToShow: 7,
		slidesToScroll: 1,
		asNavFor: productSlider,
		focusOnSelect: true
	});

    productTabs.tabs({
		disabled: [1, 1]
	});

    function initRange(range, amount, values, min, max, currency) {
		range.slider({
			range: true,
			min: min,
			max: max,
			values: values,
			slide: function( event, ui ) {
				amount.val( (currency ? "$" : ' ') + ui.values[ 0 ] + (currency ? " - $" : ' - ') + ui.values[ 1 ] );
			}
		});
		amount.val( (currency ? "$" : ' ') + range.slider( "values", 0 ) +
			(currency ? " - $" : ' - ') + range.slider( "values", 1 ) );
	}


	initRange(priceRange, priceAmount, [ 75, 300 ], 0, 500, true);
	initRange(priceRange2, priceAmount2, [ 0, 12 ], 1, 15, false);
});