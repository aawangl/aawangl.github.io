jQuery(document).ready(function() {
	var pageHeight = $(window).height();

	function parallax(target, amount) {
		var scrolled = $(window).scrollTop();
		$(target).css('top', -(scrolled * amount) + 'px');
	}

	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		if ($(window).scrollTop() + 200 >= pageHeight) {
			$('#top-bar').css('background-color', 'black');
		} else {
			$('#top-bar').css('background-color', '');
		}
		parallax('#background-img', 0.3);
		parallax('.overlay', 0.3);
		if ($(window).scrollTop() >= 1200) {
			var scrolled = $(window).scrollTop() - 750;
			$('#haas-container').css('top', -(scrolled * 0.35) + 'px');
		}
		else {
			parallax('#map-container', 0);
		}
	});

	$('#top-logo').click(function () {
		$('html, body').animate({ scrollTop: "0px"}, 600);
	});

	// $('#contact').click(function(event) {
	// 	/* Act on the event */
	// });
	// $('#teams').click(function(event) {
	// 	/* Act on the event */
	// });
	// $('#board').click(function(event) {
	// 	/* Act on the event */
	// });
	$('#comp').click(function() {
		var offset = 100;
		var top = $("#comp-wrapper").position().top + offset + "px"

		$('html, body').animate({ scrollTop: top}, 600);
	});
	$('#mission').click(function() {
		/* Act on the event */
    	$("html, body").animate({ scrollTop: "989px" }, 600);
	});
	

	$(".center-pillars").each(function(index, el) {
		if(index == 0){
			$(this).fadeIn(2000, function() {
			});	
		}else if(index == 1){
			$(this).fadeIn(3000, function() {
			});	
		}else{
			$(this).fadeIn(4000, function() {
			});	
		}
	});

	$('#comp-right img').hover(function() {
		$(this).attr("src", "assets/img/daniel.jpg")
	}, function() {
		$(this).attr("src", "assets/img/main4.jpg")
	});

});