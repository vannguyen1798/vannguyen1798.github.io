(function($){
    var slickNews = {
        init: function () {
            slickNews.events();
        },
        events: function () {
            $('.nt9-cd3').countdown('2018/08/09 22:00', function(event) {
                var totalHours = event.offset.totalDays * 24 + event.offset.hours;
                $(this).html(event.strftime('Còn <strong>'+totalHours+'</strong> giờ <strong>%M</strong> phút <strong>%S</strong>'));
            });
        }
    };

	$(document).ready(function (){
        if ($(".nt9-cd3").length > 0) {
            slickNews.init();
        }

		$('.of-iconmntop').click(function(){
			$('.of-menutop').toggleClass('of-mnshow');
		});

		$('.of-search').click(function(){
			$('.of-searchbox').show(200);
		});

		$('.of-closesearch').click(function(){
			$('.of-searchbox').hide(200);
		});


        wow = new WOW({
            animateClass: 'animated',
            offset: 5
        });
        wow.init();

        $(document).on('click','[toscroll]',function(e){
            e.preventDefault();
            var link = $(this).attr('toscroll');
            if($(link).length > 0){
                var posi = $(link).offset().top - 40;
                $('body,html').animate({scrollTop:posi},1000);
            }
        });

        $(window).bind('scroll', function () {
            if ($(window).scrollTop() > 500) {
                $('.nt9-s2').addClass('nt9-mnfix');
            } else {
                $('.nt9-s2').removeClass('nt9-mnfix');
            }
        });


        $(document).on('click','.nt9-s11cl1', function () {
            $(".nt9-s11n1").hide();
            $(".nt9-s11img1").show();
        });
        $(document).on('click','.nt9-s11cl2', function () {
            $(".nt9-s11n1").hide();
            $(".nt9-s11img2").show();
        });
        $(document).on('click','.nt9-s11cl3', function () {
            $(".nt9-s11n1").hide();
            $(".nt9-s11img3").show();
        });
        $(document).on('click','.nt9-s11dl1', function () {
            $(".nt9-s11cl,.nt9-s11lc,.nt9-s11pri1").hide();
            $(".nt9-s11clb1,.nt9-s11lc1,.nt9-s11pri1b1").show();
        });
        $(document).on('click','.nt9-s11dl2', function () {
            $(".nt9-s11cl,.nt9-s11lc,.nt9-s11pri1").hide();
            $(".nt9-s11clb2,.nt9-s11lc2,.nt9-s11pri1b2").show();
        });


          var owl = $('.owl-carousel');
          owl.owlCarousel({
            margin: 10,
            nav: false,
            loop: true,
            responsive: {
              0: {
                items: 3
              },
              600: {
                items: 4
              },
              1000: {
                items: 7
              }
            }
          })
        



	});
})(window.jQuery);