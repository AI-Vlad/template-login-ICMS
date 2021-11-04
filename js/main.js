jQuery(document).ready(function ($) {

	var swiper = new Swiper('.slide', {
		slidesPerView: 1,
		pagination: {
			el: '.slide-controle',
			clickable: true,
		},

		autoplay: {
			delay: 5000,
		},


	});

	$('.bt-down')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
					// Only prevent default if animation is actually gonna happen
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top - 60
					}, 1000);
				}
			}
		});

	const html = document.querySelector('html');
	const btnMenu = document.getElementById('js-open-menu');

	btnMenu.addEventListener('click', function (e) {
		e.preventDefault();
		html.classList.toggle('menu-opened');
	});

});