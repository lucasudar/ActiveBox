$(function () {
    let header = $("#header")
    let intro = $("#intro")
    let scrollPos = $(window).scrollTop()
    let introH = intro.innerHeight()
    let nav = $("#nav")
    let navToggle = $("#navToggle")

    checkScroll(scrollPos, introH)

    $(window).on("scroll resize", function () {
        introH = intro.innerHeight()
        scrollPos = $(this).scrollTop()

        checkScroll(scrollPos, introH)
    });
    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault()

        let elementId = $(this).data("scroll")
        let elementOffset = $(elementId).offset().top

        nav.removeClass("show")

        $("html, body").animate({
            scrollTop: elementOffset - 60
        }, 700)
    })


    navToggle.on("click", function (event) {
        event.preventDefault()

        nav.toggleClass("show")
    })

    let slider = $("#reviewsSlider")

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
    });
})