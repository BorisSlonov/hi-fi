//custom 

function parallaxsectorsInit() {

    let sectorsAnimation_1 = document.querySelector(".sectors-animation_1");

    new simpleParallax(sectorsAnimation_1, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let sectorsAnimation_2 = document.querySelector(".sectors-animation_2");

    new simpleParallax(sectorsAnimation_2, {
        orientation: 'left',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let sectorsAnimation_3 = document.querySelector(".sectors-animation_3");

    new simpleParallax(sectorsAnimation_3, {
        orientation: 'right',
        overflow: true,
        delay: 1.2,
        scale: 1.6,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


    let sectorsAnimation_4 = document.querySelector(".sectors-animation_4");

    new simpleParallax(sectorsAnimation_4, {
        orientation: 'down left',
        overflow: true,
        delay: 1.2,
        scale: 1.4,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });




    let sectorsAnimation_5 = document.querySelector(".sectors-animation_5");

    new simpleParallax(sectorsAnimation_5, {
        orientation: 'down left',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


    let sectorsAnimation_6 = document.querySelector(".sectors-animation_6");

    new simpleParallax(sectorsAnimation_6, {
        orientation: 'down left',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


    let sectorsAnimation_7 = document.querySelector(".sectors-animation_7");

    new simpleParallax(sectorsAnimation_7, {
        orientation: 'down right',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let sectorsAnimation_8 = document.querySelector(".sectors-animation_8");

    new simpleParallax(sectorsAnimation_8, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


    let sectorsAnimation_9 = document.querySelector(".sectors-animation-tr_2");

    new simpleParallax(sectorsAnimation_9, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.9,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let sectorsAnimation_10 = document.querySelector(".sectors-animation-tr_1");

    new simpleParallax(sectorsAnimation_10, {
        orientation: 'down',
        overflow: true,
        delay: 1.9,
        scale: 2,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });
}

parallaxsectorsInit();

//del animate
let sectorsAnimation_1 = document.querySelector(".sectors-animation_1");
if (sectorsAnimation_1) {
    sectorsAnimation_1.addEventListener('animationend', function () {
        sectorsAnimation_1.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__delay-3s')
    })
}

let sectorsAnimation_2 = document.querySelector(".sectors-animation_2");
if (sectorsAnimation_2) {
    sectorsAnimation_2.addEventListener('animationend', function () {
        sectorsAnimation_2.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__delay-2s')
    })
}

let sectorsAnimation_3 = document.querySelector(".sectors-animation_3");
if (sectorsAnimation_3) {
    sectorsAnimation_3.addEventListener('animationend', function () {
        sectorsAnimation_3.classList.remove('animate__animated', 'animate__fadeInLeft', 'animate__delay-2s')
    })
}

let sectorsAnimation_4 = document.querySelector(".sectors-animation_4");
if (sectorsAnimation_4) {
    sectorsAnimation_4.addEventListener('animationend', function () {
        sectorsAnimation_4.classList.remove('animate__animated', 'animate__fadeInRight', 'animate__delay-2s')
    })
}

let sectorsAnimation_5 = document.querySelector(".sectors-animation_5");
if (sectorsAnimation_5) {
    sectorsAnimation_5.addEventListener('animationend', function () {
        sectorsAnimation_5.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__delay-2s')
    })
}

let sectorsAnimation_6 = document.querySelector(".sectors-animation_6");
if (sectorsAnimation_6) {
    sectorsAnimation_6.addEventListener('animationend', function () {
        sectorsAnimation_6.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__delay-2s')
    })
}

let sectorsAnimation_7 = document.querySelector(".sectors-animation_7");
if (sectorsAnimation_7) {
    sectorsAnimation_7.addEventListener('animationend', function () {
        sectorsAnimation_7.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__delay-2s')
    })
}




let sectorsAnimation_9 = document.querySelector(".sectors-animation-tr_2");
if (sectorsAnimation_9) {
    sectorsAnimation_9.addEventListener('animationend', function () {
        sectorsAnimation_9.classList.remove('animate__animated', 'animate__zoomInUp', 'animate__delay-1s')
    })
}


let sectorsAnimation_10 = document.querySelector(".sectors-animation-tr_1");