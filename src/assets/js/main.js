//main.js file

//main.js file
const app = (() => {
	// var here

	// let name = '..'

	// -----------------

	// Auto Run Type Here

	function runItHere() {
		$(function () {
			sal();
		});

		$(".wrapMobileMenu, .wrapMobileMenuWithMegaMenu").on("click", function (e) {
			e.stopPropagation();
		});

		$("li.mobileMnuHasSub").on("click", function (e) {
			// e.preventDefault();
			e.stopPropagation();
			$(".wrapMobileMenu").find("li.mobileMnuHasSub").children("ul").slideUp(300);

			$(this).find("ul").is(":hidden") ? $(this).find("ul").slideDown(300) : $(this).find("ul").slideUp(300);
		});

		$("li.mobileMnuHasSubWithMegaMenu").on("click", function (e) {
			// e.preventDefault();
			e.stopPropagation();
			$(".wrapMobileMenuWithMegaMenu").find("li.mobileMnuHasSubWithMegaMenu").children(".childMenuWrap").slideUp(300);

			$(this).find(".childMenuWrap").is(":hidden") ? $(this).find(".childMenuWrap").slideDown(300) : $(this).find(".childMenuWrap").slideUp(300);
		});

		$(".humburger-btn").on("click", function () {
			$(".mobileTopmenu").toggleClass("menuMobileOpen");
			$(".mobileTopmenuWithMegaMenu").toggleClass("menuMobileOpenWithMegaMenu");
		});

		$("a[title=closeBtn]").on("click", function (e) {
			e.preventDefault();
			$(".mobileTopmenu").removeClass("menuMobileOpen");
		});

		$("a[title=closeBtn]").on("click", function (e) {
			e.preventDefault();
			$(".mobileTopmenuWithMegaMenu").removeClass("menuMobileOpenWithMegaMenu");
		});

		$(".mobileTopmenu").on("click", function () {
			$(this).removeClass("menuMobileOpen");
		});
		$(".mobileTopmenuWithMegaMenu").on("click", function () {
			$(this).removeClass("menuMobileOpenWithMegaMenu");
		});

		//BEGIN
		$(".accordion__title").on("click", function (e) {
			e.preventDefault();
			var $this = $(this);

			if (!$this.hasClass("accordion-active")) {
				$(".accordion__content").slideUp(400);
				$(".accordion__title").removeClass("accordion-active");
				$(".accordion__arrow").removeClass("accordion__rotate");
			}

			$this.toggleClass("accordion-active");
			$this.next().slideToggle();
			$(".accordion__arrow", this).toggleClass("accordion__rotate");
		});
		//END

		// closeModal();
		flexSlide("bodSlider", "prevBod", "nextBod");
		// flexSlide('showcasePorto2', 'prevShowcase2', 'nextShowcase2');
		// flexSlide('showcasePorto3', 'prevShowcase3', 'nextShowcase3');
		// flexSlide('showcasePorto4', 'prevShowcase4', 'nextShowcase4');
		// flexSlide('showcasePorto5', 'prevShowcase5', 'nextShowcase5');
		// flexSlide('showcasePorto6', 'prevShowcase6', 'nextShowcase6');
		// flexSlide('showcasePorto7', 'prevShowcase7', 'nextShowcase7');
		// flexSlide('showcasePorto8', 'prevShowcase8', 'nextShowcase8');
		// flexSlide('showcasePorto9', 'prevShowcase9', 'nextShowcase9');
		// flexSlide('showcasePorto10', 'prevShowcase10', 'nextShowcase10');

		$(document).scroll(function () {
			var $navH = $(".headNav");
			$navH.toggleClass("gulung", $(this).scrollTop() > $navH.height());
		});

		// $('.topmenu ul li, .mobileTopmenu ul li').on('click', 'a[href^="#"]', function(e){
		// 	e.preventDefault();
		// 	let anchor = this.hash;
		// 	$anchor = $(anchor);
		// 	$('html, body').stop().animate({
		// 		'scrollTop': parseInt($anchor.offset().top - 90, 10)
		// 	}, 700, 'swing', function(){
		// 		window.location.hash = target;
		// 	})
		// })

		$(".hero-carousel").slick({
			dots: false,
			infinite: true,
			fade: false,
			arrows: true,
			autoplay: true,
			// asNavFor: '.textTitleSlide',
			autoplaySpeed: 3000,
			speed: 700,
			prevArrow: "#prevMainBanner",
			nextArrow: "#nextMainBanner",
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true,
		});

		$(".testimonial-slide").slick({
			dots: false,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 700,
			arrows: true,
			prevArrow: "#prevTestimon",
			nextArrow: "#nextTestimon",
			responsive: [
				{
					breakpoint: 960,
					settings: {
						// dots: true,
						variableWidth: false,
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
			// adaptiveHeight: true
		});
		$(".ingredient-slider").slick({
			dots: false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 700,
			arrows: true,
			prevArrow: "#prevIngredient",
			nextArrow: "#nextIngredient",
			adaptiveHeight: true,
		});
		$(".ingredient-slider2").slick({
			dots: false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 700,
			arrows: true,
			prevArrow: "#prevIngredient2",
			nextArrow: "#nextIngredient2",
			adaptiveHeight: true,
		});
		$(".prod-detail-slide").slick({
			dots: false,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 700,
			arrows: true,
			prevArrow: "#prevProdRVPro",
			nextArrow: "#nextProdRVPro",
		});

		$(".slide-product").slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			speed: 700,
			arrows: true,
			prevArrow: "#prevProduct",
			nextArrow: "#nextProduct",
			responsive: [
				{
					breakpoint: 960,
					settings: {
						dots: true,
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 576,
					settings: {
						dots: true,
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
			// adaptiveHeight: true
		});
	}

	// -----------------

	// All Function Here

	function myModal(id) {
		$(`#${id}`).toggleClass("is-visible");
	}

	function flexSlide(nameSlide, prevNameArrow, nextNameArrow, toShow, toScroll) {
		$(`#${nameSlide}`).slick({
			dots: false,
			infinite: false,
			slidesToShow: toShow || 3,
			slidesToScroll: toScroll || 1,
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 700,
			arrows: true,
			prevArrow: `#${prevNameArrow}`,
			nextArrow: `#${nextNameArrow}`,
			responsive: [
				{
					breakpoint: 960,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
			],
			// adaptiveHeight: true
		});
	}

	function tes() {
		console.log("Done!");
	}

	function printLog() {
		console.log("Call this function inline directly");
	}

	function closeModal() {
		$(".modal-toggle").on("click", function (e) {
			e.preventDefault();
			$(this).closest(".custom-modal").toggleClass("is-visible");
		});
	}

	// -----------------

	// Auto Run Call Here

	runItHere();

	// -----------------

	// Callback Function Here Ex: app.printLog()

	return {
		printLog,
		myModal,
	};

	// -----------------
})();
