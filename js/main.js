
$(function () {
    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 200) {
            $('.header .to_top').fadeIn();
        } else {
            $('.header .to_top').fadeOut();
        }
    });
    $('.header .to_top').on('click', function () {
        $('html ,body').animate({ scrollTop: 0 }, 1000);
    });
    // to top 버튼작동


    $('.scroll_down down').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    })

    $(window).on('scroll', function () {
        var sct = $(window).scrollTop();
        if (sct > 0) {
            $('.scroll_down').fadeOut();
        } else {
            $('.scroll_down').fadeIn();
        }
    })
    // scroll down 버튼 작동 & 사라졌다 생겼다 하게


    $('.product_slide').on('init afterChange', function (event, slick, currentSlide) {
        var current = $('.product_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    });

    var productSlide = $('.product_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    // slide 작동

    $('.controller .play button:first-child').on('click', function () {
        $('.product_slide').slick('slickPlay');
    })
    $('.controller .play button:last-child').on('click', function () {
        $('.product_slide').slick('slickPause');
    })

    $('.mainProduct .slide_bar').addClass('on');

    productSlide.on("afterChange", function (e, s, current) {
        $('.mainProduct .slide_bar').addClass('on');
    });
    productSlide.on("beforeChange", function (e, s, current) {
        $(".slide_bar").removeClass("on");
    })
    // slide item event


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
    // main content scroll event

})