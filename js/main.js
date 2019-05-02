$(document).ready(function () {
    $("[data-slider]").slick({
		dots: true
	});

	$( "#price-range" ).slider({
		range: true,
		min: 0,
		max: 500,
		values: [ 75, 300 ],
		slide: function( event, ui ) {
			$( "#price-amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		}
	});
	$( "#price-amount" ).val( "$" + $( "#price-range" ).slider( "values", 0 ) +
		" - $" + $( "#price-range" ).slider( "values", 1 ) );

	$( "#price-range2" ).slider({
		range: true,
		min: 0,
		max: 20,
		values: [ 2, 15 ],
		slide: function( event, ui ) {
			$( "#price-amount2" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		}
	});
	$( "#price-amount2" ).val( $( "#price-range2" ).slider( "values", 0 ) +
		" - " + $( "#price-range2" ).slider( "values", 1 ) );
});