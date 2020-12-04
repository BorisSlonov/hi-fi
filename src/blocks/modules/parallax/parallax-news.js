
//custom 


function parallaxNewsInit() {

    let newsPageAnimation_1 = document.querySelector(".news-page__animation_1");

    new simpleParallax(newsPageAnimation_1, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let newsPageAnimation_2 = document.querySelector(".news-page__animation_2");

    new simpleParallax(newsPageAnimation_2, {
        orientation: 'down right',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let newsPageAnimation_3 = document.querySelector(".news-page__animation_3");

    new simpleParallax(newsPageAnimation_3, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let newsPageAnimation_4 = document.querySelector(".news-page__animation_4");

    new simpleParallax(newsPageAnimation_4, {
        orientation: 'down left',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let newsPageAnimation_5 = document.querySelector(".news-page__animation_5");

    new simpleParallax(newsPageAnimation_5, {
        orientation: 'down right',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let newsPageAnimation_6 = document.querySelector(".news-page__animation_6");

    new simpleParallax(newsPageAnimation_6, {
        orientation: 'down left',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let newsPageAnimation_7 = document.querySelector(".news-page__animation_7");

    new simpleParallax(newsPageAnimation_7, {
        orientation: 'down left',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


    let newsPageAnimation_8 = document.querySelector(".news-page__animation_8");

    new simpleParallax(newsPageAnimation_8, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


    let newsPageAnimation_9 = document.querySelector(".news-page__animation_9");

    new simpleParallax(newsPageAnimation_9, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let newsPageAnimation_10 = document.querySelector(".news-page__animation_10");

    new simpleParallax(newsPageAnimation_10, {
        orientation: 'down right',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


}

parallaxNewsInit();



//del animate

let newsPageAnimation_1 = document.querySelector(".news-page__animation_1");
if (newsPageAnimation_1) {
    newsPageAnimation_1.addEventListener('animationend', function () {
        newsPageAnimation_1.classList.remove('animate__animated', 'animate__zoomInDown')
    })
}

let newsPageAnimation_2 = document.querySelector(".news-page__animation_2");
if (newsPageAnimation_2) {
    newsPageAnimation_2.addEventListener('animationend', function () {
        newsPageAnimation_2.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__delay-2s')
    })
}



let newsPageAnimation_3 = document.querySelector(".news-page__animation_3");
if (newsPageAnimation_3) {
    newsPageAnimation_3.addEventListener('animationend', function () {
        newsPageAnimation_3.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__delay-2s')
    })
}

let newsPageAnimation_4 = document.querySelector(".news-page__animation_4");
if (newsPageAnimation_4) {
    newsPageAnimation_4.addEventListener('animationend', function () {
        newsPageAnimation_4.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__delay-2s')
    })
}

let newsPageAnimation_5 = document.querySelector(".news-page__animation_5");
if (newsPageAnimation_5) {
    newsPageAnimation_5.addEventListener('animationend', function () {
        newsPageAnimation_5.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__delay-2s')
    })
}

let newsPageAnimation_6 = document.querySelector(".news-page__animation_6");
if (newsPageAnimation_6) {
    newsPageAnimation_6.addEventListener('animationend', function () {
        newsPageAnimation_6.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__delay-2s')
    })
}

let newsPageAnimation_7 = document.querySelector(".news-page__animation_7");
if (newsPageAnimation_7) {
    newsPageAnimation_7.addEventListener('animationend', function () {
        newsPageAnimation_7.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__delay-2s')
    })
}


let newsPageAnimation_8 = document.querySelector(".news-page__animation_8");
if (newsPageAnimation_8) {
    newsPageAnimation_8.addEventListener('animationend', function () {
        newsPageAnimation_8.classList.remove('animate__animated', 'animate__zoomInLeft', 'animate__delay-2s')
    })
}

let newsPageAnimation_9 = document.querySelector(".news-page__animation_9");
if (newsPageAnimation_9) {
    newsPageAnimation_9.addEventListener('animationend', function () {
        newsPageAnimation_9.classList.remove('animate__animated', 'animate__zoomInRight', 'animate__delay-2s')
    })
}

let newsPageAnimation_10 = document.querySelector(".news-page__animation_10");
if (newsPageAnimation_10) {
    newsPageAnimation_10.addEventListener('animationend', function () {
        newsPageAnimation_10.classList.remove('animate__animated', 'animate__zoomInLeft', 'animate__delay-2s')
    })
}

let newsPageAnimation_11 = document.querySelector(".news-page__animation_11");
if (newsPageAnimation_11) {
    newsPageAnimation_11.addEventListener('animationend', function () {
        newsPageAnimation_11.classList.remove('animate__animated', 'animate__zoomInRight', 'animate__delay-2s')
    })
}