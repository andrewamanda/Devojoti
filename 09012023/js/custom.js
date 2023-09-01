jQuery(window).scroll(function(){
  if (jQuery(window).scrollTop() >= 1) {
    jQuery('header').addClass('fixed');
   }
   else {
    jQuery('header').removeClass('fixed');
   }
});

jQuery(document).ready(function(){
    jQuery('.nav_btn').click(function(){
        jQuery(this).toggleClass('open');
    });
        jQuery(".nav_btn").click(function(){
        jQuery(".main-menu").slideToggle();
    });

    jQuery('.home-banr-sl').slick({
        //centerMode: true,
        //centerPadding: '0',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                arrows: false,
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    });
    jQuery('.product-card-sl').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
              breakpoint: 520,
              settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              }
          }
        ]
    });
    jQuery('.brand-logo-sl').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                arrows: false,
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                }
            },
            {
              breakpoint: 520,
              settings: {
              arrows: false,
              dots: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              }
          }
        ]
    });
    jQuery('.deals-prod-sl').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                arrows: false,
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                }
            },
            {
              breakpoint: 992,
              settings: {
              arrows: false,
              dots: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              }
          },
            {
                breakpoint: 767,
                settings: {
                arrows: false,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    });

    jQuery('.prod-img-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.prod-img-slider-side'
      });
      jQuery('.prod-img-slider-side').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.prod-img-slider-main',
        dots: false,
        centerMode: false,
        variableWidth: true,
        focusOnSelect: true
      });

      jQuery('.main-slider').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.nav-slider',
        vertical: true,
        autoplay: true,
        verticalSwiping: true,
        centerMode: true
      });

      jQuery('.nav-slider').slick({
        slidesToShow: 4,
        asNavFor: '.main-slider',
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        centerMode: true
      });

      jQuery(".toggle-button-1").click(function(){
        jQuery(".toggle-arrow-1 img").toggleClass("icon-rotate");
      });
      jQuery(".toggle-button-2").click(function(){
        jQuery(".toggle-arrow-2 img").toggleClass("icon-rotate");
      });
      jQuery(".toggle-button-3").click(function(){
        jQuery(".toggle-arrow-3 img").toggleClass("icon-rotate");
      });
      jQuery(".toggle-button-4").click(function(){
        jQuery(".toggle-arrow-4 img").toggleClass("icon-rotate");
      });
      jQuery(".prod-toggle-main").click(function(){
        jQuery(".prod-toggle-arrow-main img").toggleClass("icon-rotate");
      });
      jQuery(".prod-toggle-btn-1").click(function(){
        jQuery(".prod-toggle-arrow-1 img").toggleClass("icon-rotate");
      });
      jQuery(".prod-toggle-btn-2").click(function(){
        jQuery(".prod-toggle-arrow-2 img").toggleClass("icon-rotate");
      });
      jQuery(".prod-toggle-btn-3").click(function(){
        jQuery(".prod-toggle-arrow-3 img").toggleClass("icon-rotate");
      });
      jQuery(".prod-toggle-btn-4").click(function(){
        jQuery(".prod-toggle-arrow-4 img").toggleClass("icon-rotate");
      });



      jQuery('.slider-main').slick({
        slidesToShow: 1,
        arrows: true,
        asNavFor: '.slider-nav',
        vertical: true,
        autoplay: true,
        infinite: true,
        autoplay: false,
        verticalSwiping: true,
        centerMode: false, 
          responsive: [
			{
				breakpoint: 767,
				settings: {
                    vertical: false,
				}
			},
		]
      });
      
      jQuery('.slider-nav').slick({
        slidesToShow: 4,
        arrows: false,
        asNavFor: '.slider-main',
        vertical: true,
        focusOnSelect: true,
        infinite: true,
        autoplay: false,
          responsive: [
			{
				breakpoint: 767,
				settings: {
                    vertical: false,
					slidesToShow: 1,
                    autoplay: true,
                    arrows: true,
                    draggable: true,
				}
			},
		]
      });
       





	jQuery('.slider-thumb').slick({
		autoplay: true,
		vertical: true,
		infinite: true,
		verticalSwiping: true,
		slidesPerRow: 4,
		slidesToShow: 4,
		asNavFor: '.slider-preview',
		focusOnSelect: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-up"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-down"></i></button>',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					vertical: false,
                    //arrows: false,
				}
			}
		]
	});
	jQuery('.slider-preview').slick({
		autoplay: true,
		vertical: true,
		infinite: true,
		slidesPerRow: 1,
		slidesToShow: 1,
		asNavFor: '.slider-thumb',
		arrows: true,
		draggable: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					vertical: false,
                    
				}
			},
		]
	});



});


    

