jQuery(document).ready(function() {
	var pageHeight = $(window).height();
	var index = 1

	$('#pillars-container li:nth-child(1)').fadeIn(1500);
	setTimeout(function() {
		$('#main-background .background-img:nth-child(3)').animate({
			opacity: '0'
		}, 450)

		$('#pillars-container li:nth-child(2)').fadeIn(1500);

		setTimeout(function() {
			$('#main-background .background-img:nth-child(2)').animate({
				opacity: '0'
			}, 450)

			$('#pillars-container li:nth-child(3)').fadeIn(1000);
		}, 1500);
	}, 1500);

	setTimeout(function() {
		$('#center-line').animate({
			width: '600px'
		}, 800);
		$('#top-bar').fadeIn(500);
	}, 3600);
	





	function parallax(target, amount) {
		var scrolled = $(window).scrollTop();
		$(target).css('top', -(scrolled * amount) + 'px');
	}

	$(window).scroll(function() {
		// console.log($(window).scrollTop());
		if ($(window).scrollTop() >= $('#mission-wrapper').offset().top - 300) {
			$('#top-bar').css('background-color', 'black');
		} else {
			$('#top-bar').css('background-color', '');
		}
	});

	$('#top-logo').click(function () {
		$('html, body').animate({ scrollTop: "0px"}, 600);
	});

	$('#comp').click(function() {
		
	});
	$('#mission').click(function() {
		var missionTop = $('#mission-text').offset().top - 160 + 'px';
		$('html, body').animate({ scrollTop: missionTop }, 600);
	});
	$('.back-top').click(function() {
		$('html, body').animate({ scrollTop: "0px"}, 600);
	});
	

	$('#comp-right img').hover(function() {
		$(this).attr("src", "assets/img/daniel.jpg")
	}, function() {
		$(this).attr("src", "assets/img/main4.jpg")
	});



});