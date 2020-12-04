
//custom 


function parallaxInitCarriers() {

    let carriersPageAnimation_1 = document.querySelector(".carriers-page__animation_1");

    new simpleParallax(carriersPageAnimation_1, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let carriersPageAnimation_2 = document.querySelector(".carriers-page__animation_2");

    new simpleParallax(carriersPageAnimation_2, {
        orientation: 'down left',
        overflow: true,
        delay: .9,
        scale: 1.2,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let carriersPageAnimation_3 = document.querySelector(".carriers-page__animation_3");

    new simpleParallax(carriersPageAnimation_3, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let carriersPageAnimation_4 = document.querySelector(".carriers-page__animation_4");

    new simpleParallax(carriersPageAnimation_4, {
        orientation: 'down right',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let carriersPageAnimation_5 = document.querySelector(".carriers-page__animation_5");

    new simpleParallax(carriersPageAnimation_5, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.5,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let carriersPageAnimation_6 = document.querySelector(".carriers-page__animation_6");

    new simpleParallax(carriersPageAnimation_6, {
        orientation: 'down left',
        overflow: true,
        delay: .9,
        scale: 1.2,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let carriersPageAnimation_7 = document.querySelector(".carriers-page__animation_7");

    new simpleParallax(carriersPageAnimation_7, {
        orientation: 'down right',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


    let carriersPageAnimation_carriers = document.querySelector(".carriers-page__animation_carriers");

    new simpleParallax(carriersPageAnimation_carriers, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


}


parallaxInitCarriers();
let carriersPageAnimation_carriers = document.querySelector(".carriers-page__animation_carriers");
if (carriersPageAnimation_carriers) {
    carriersPageAnimation_carriers.addEventListener('animationend', function () {
        carriersPageAnimation_carriers.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-2s')
    })
}


let carriersPageAnimation_1 = document.querySelector(".carriers-page__animation_1");
if (carriersPageAnimation_1) {
    carriersPageAnimation_1.addEventListener('animationend', function () {
        carriersPageAnimation_1.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-2s')
    })
}

let carriersPageAnimation_2 = document.querySelector(".carriers-page__animation_2");
if (carriersPageAnimation_2) {
    carriersPageAnimation_2.addEventListener('animationend', function () {
        carriersPageAnimation_2.classList.remove('animate__animated', 'animate__backInRight', 'animate__delay-3s')
    })
}

let carriersPageAnimation_3 = document.querySelector(".carriers-page__animation_3-carriers");
if (carriersPageAnimation_3) {
    carriersPageAnimation_3.addEventListener('animationend', function () {
        carriersPageAnimation_3.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-2s')
    })
}

let carriersPageAnimation_4 = document.querySelector(".carriers-page__animation_4");
if (carriersPageAnimation_4) {
    carriersPageAnimation_4.addEventListener('animationend', function () {
        carriersPageAnimation_4.classList.remove('animate__animated', 'animate__backInLeft', 'animate__delay-3s')
    })
}

let carriersPageAnimation_5 = document.querySelector(".carriers-page__animation_5");
if (carriersPageAnimation_5) {
    carriersPageAnimation_5.addEventListener('animationend', function () {
        carriersPageAnimation_5.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-2s')
    })
}

let carriersPageAnimation_6 = document.querySelector(".carriers-page__animation_6");
if (carriersPageAnimation_6) {
    carriersPageAnimation_6.addEventListener('animationend', function () {
        carriersPageAnimation_6.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__delay-2s')
    })
}

let carriersPageAnimation_7 = document.querySelector(".carriers-page__animation_7");
if (carriersPageAnimation_7) {
    carriersPageAnimation_7.addEventListener('animationend', function () {
        carriersPageAnimation_7.classList.remove('animate__animated', 'animate__zoomInDown', 'animate__delay-2s')
    })
}


let carriersPageAnimation_8 = document.querySelector(".about-animation_6");
if (carriersPageAnimation_8) {
    carriersPageAnimation_8.addEventListener('animationend', function () {
        carriersPageAnimation_8.classList.remove('animate__animated', 'animate__zoomInUp', 'animate__delay-1s')
    })
}