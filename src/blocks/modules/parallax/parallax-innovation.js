//custom 


function parallaxInnovationInit() {

    let innovationPageAnimation_1 = document.querySelector(".innovation-page__animation_1");

    new simpleParallax(innovationPageAnimation_1, {
        orientation: 'up',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let innovationPageAnimation_2 = document.querySelector(".innovation-page__animation_2");

    new simpleParallax(innovationPageAnimation_2, {
        orientation: 'top right',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let innovationPageAnimation_3 = document.querySelector(".innovation-page__animation_3");

    new simpleParallax(innovationPageAnimation_3, {
        orientation: 'down left',
        overflow: true,
        delay: .9,
        scale: 1.25,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let innovationPageAnimation_4 = document.querySelector(".innovation-page__animation_4");

    new simpleParallax(innovationPageAnimation_4, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

}


parallaxInnovationInit();



//del animate
let innovationPageAnimation_1 = document.querySelector(".innovation-page__animation_1");
if (innovationPageAnimation_1) {
    innovationPageAnimation_1.addEventListener('animationend', function () {
        innovationPageAnimation_1.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__delay-3s')
    })
}

//del animate
let innovationPageAnimation_2 = document.querySelector(".innovation-page__animation_2");
if (innovationPageAnimation_2) {
    innovationPageAnimation_2.addEventListener('animationend', function () {
        innovationPageAnimation_2.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s')
    })
}

//del animate
let innovationPageAnimation_3 = document.querySelector(".innovation-page__animation_4");
if (innovationPageAnimation_3) {
    innovationPageAnimation_3.addEventListener('animationend', function () {
        innovationPageAnimation_3.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s')
    })
}

//del animate
let innovationPageAnimation_4 = document.querySelector(".innovation-page__animation_4");
if (innovationPageAnimation_4) {
    innovationPageAnimation_4.addEventListener('animationend', function () {
        innovationPageAnimation_4.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-3s')
    })
}
