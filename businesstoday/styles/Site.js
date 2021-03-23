//Scroll totop
//-----------------------------------------------
$(window).scroll(function () {
    if ($(this).scrollTop() != 0) {
        $(".scrollToTop").fadeIn();
    } else {
        $(".scrollToTop").fadeOut();
    }
});

$(".scrollToTop").click(function () {
    $("body,html").animate({
        scrollTop: 0
    }, 500);
});

if ($('.owl-carousel.content-slider-with-controls').length > 0) {
    var isTouch = Modernizr.mq('only all and (max-width: 767px)');
    initBanner(isTouch);
    $(".owl-carousel.content-slider-with-controls").owlCarousel({
        singleItem: true,
        autoPlay: true,
        pagination: true
    });
    $(window).resize(function () {
        var istarch = Modernizr.mq('only all and (max-width: 767px)');
        var ok = $(".owl-carousel.content-slider-with-controls img").filter(function () {
            return $(this).attr('touch') !== istarch.toString();
        });
        if (ok.length > 0) {
            initBanner(istarch)
        }
    });
}

function initBanner(isTouch) {
    $(".owl-carousel.content-slider-with-controls img").each(function (el) {
        var target = $(this);
        var src = isTouch ? target.data('src-retina') : target.data('src');
        target.attr('src', src).attr('data-touch', isTouch);
    });
}

if ($(".owl-carousel.carousel-autoplay").length > 0) {
    $(".owl-carousel.carousel-autoplay").owlCarousel({
        items: 4,
        autoPlay: 5000,
        pagination: false,
        navigation: true,
        navigationText: false
    });
}
if ($(".case-carousel.carousel-autoplay").length > 0) {
    $(".case-carousel.carousel-autoplay").owlCarousel({
        items: 3,
        autoPlay: 5000,
        pagination: false,
        navigation: true,
        navigationText: false
    });
}
if ($(".owl-carousel.content-slider-with-large-controls-autoplay").length > 0) {
    $(".owl-carousel.content-slider-with-large-controls-autoplay").owlCarousel({
        singleItem: true,
        autoPlay: 5000,
        navigation: false,
        pagination: true
    });
}
// 菜单浮动
headerTopHeight = $(".header-top").outerHeight(),
    headerHeight = $("header.header.fixed").outerHeight();
$(window).resize(function () {
    if (($(this).scrollTop() < headerTopHeight + headerHeight - 5) && ($(window).width() > 767)) {
        headerTopHeight = $(".header-top").outerHeight(),
            headerHeight = $("header.header.fixed").outerHeight();
    }
});

$(window).scroll(function () {
    if ($(".header.fixed").length > 0) {
        if (($(this).scrollTop() > headerTopHeight + headerHeight) && ($(window).width() > 767)) {
            $("body").addClass("fixed-header-on");
            $(".header.fixed").addClass('animated object-visible fadeInDown');
        } else {
            $("body").removeClass("fixed-header-on");
            $(".header.fixed").removeClass('animated object-visible fadeInDown');
        }
    };
});