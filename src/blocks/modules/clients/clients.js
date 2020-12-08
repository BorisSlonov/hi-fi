
if (window.innerWidth <= 425) {
    var mySwiper = new Swiper('.swiper-container', {
        speed: 300,
        autoplay: {
            delay: 2000,
        },
        loop: true,
        slidesPerView: 2,
        observer: true,
        observeParents: true

    })
} else if (window.innerWidth <= 550) {
    var mySwiper = new Swiper('.swiper-container', {
        speed: 300,
        autoplay: {
            delay: 2000,
        },
        loop: true,
        slidesPerView: 4,
        observer: true,
        observeParents: true

    })
} else {
    var mySwiper = new Swiper('.swiper-container', {
        speed: 300,
        autoplay: {
            delay: 2000,
        },
        loop: true,
        slidesPerView: 6,
        observer: true,
        observeParents: true

    })
}




if (window.innerWidth <= 425) {
    var mySwiper = new Swiper('.swiper-container-popup', {
        init: false,
        speed: 300,
        autoplay: {
            delay: 2000,
        },
        loop: true,
        slidesPerView: 2,
        observeParents: true

    })
} else if (window.innerWidth <= 550) {
    var mySwiper = new Swiper('.swiper-container-popup', {
        init: false,
        speed: 300,
        autoplay: {
            delay: 2000,
        },
        loop: true,
        slidesPerView: 4,
        observeParents: true

    })
} else {
    var mySwiper = new Swiper('.swiper-container-popup', {
        speed: 300,
        autoplay: {
            delay: 2000,
        },
        loop: true,
        slidesPerView: 6,
        observeParents: true

    })
}

