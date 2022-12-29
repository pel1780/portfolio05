$(function () {
    $('.scroll_down down').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500);
    })

    // $('#toTop').on('click', function () {
    //     $('html, body').animate({ scrollTop: 0 }, 1000)
    // })


    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 0) {
            $('.scroll_down').fadeOut();
        } else {
            $('.scroll_down').fadeIn();
        }
    })

    $('.product_slide').on('init afterChange', function (event, slick, currentSlide) {
        var current = $('.product_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    $('.product_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
    });

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        var conH = $('.mainContent').outerHeight(true);
        var bgH = $('.con').height();
        var osT = $('.con').eq(0).offset().top
        console.log(sct, conH, bgH, $('.con').size(), osT);

        var idx = 0;
        for (i = 0; i < $('.con').size(); i++) {
            if (sct > bgH * i + osT - 530) { idx = i }
        }

        $('.mainContent .tit>li').eq(idx).addClass('on').siblings().removeClass('on');
        $('.mainContent .rib').stop().fadeOut();
        $('.mainContent .rib').eq(idx).stop().fadeIn();
    });

})