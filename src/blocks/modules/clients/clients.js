


if (window.innerWidth <= 425) {
    var mySwiper = new Swiper('.swiper-container', {
        speed: 1000,
        slidesPerView: 2

    })
} else {
    var mySwiper = new Swiper('.swiper-container', {
        speed: 300,
        autoplay: {
            delay: 2000,
        },
        loop: true,
        slidesPerView: 6

    })
}