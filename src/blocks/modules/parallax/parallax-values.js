//custom 


function parallaxValuesInit() {

    let valuesPageAnimation_1 = document.querySelector(".value-page__animation_1");

    new simpleParallax(valuesPageAnimation_1, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 2,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let valuesPageAnimation_2 = document.querySelector(".value-page__animation_2");

    new simpleParallax(valuesPageAnimation_2, {
        orientation: 'top right',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let valuesPageAnimation_3 = document.querySelector(".value-page__animation_3");

    new simpleParallax(valuesPageAnimation_3, {
        orientation: 'down left',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let valuesPageAnimation_4 = document.querySelector(".value-page__animation_4");

    new simpleParallax(valuesPageAnimation_4, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let valuesPageAnimation_5 = document.querySelector(".value-page__animation_5");

    new simpleParallax(valuesPageAnimation_5, {
        orientation: 'down right',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


    let valuesPageAnimation_6 = document.querySelector(".value-page__animation_6");

    new simpleParallax(valuesPageAnimation_6, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.9,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

}

setTimeout(parallaxValuesInit, 3200)




let valuesPageAnimation_1 = document.querySelector(".value-page__animation_1");
if (valuesPageAnimation_1) {
    valuesPageAnimation_1.addEventListener('animationend', function () {
        valuesPageAnimation_1.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s')


    })
}

let valuesPageAnimation_2 = document.querySelector(".value-page__animation_2");
if (valuesPageAnimation_2) {
    valuesPageAnimation_2.addEventListener('animationend', function () {
        valuesPageAnimation_2.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s')
    })
}

let valuesPageAnimation_3 = document.querySelector(".value-page__animation_3");
if (valuesPageAnimation_3) {
    valuesPageAnimation_3.addEventListener('animationend', function () {
        valuesPageAnimation_3.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s')
    })
}

let valuesPageAnimation_4 = document.querySelector(".value-page__animation_4");
if (valuesPageAnimation_4) {
    valuesPageAnimation_4.addEventListener('animationend', function () {
        valuesPageAnimation_4.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s')
    })
}

let valuesPageAnimation_5 = document.querySelector(".value-page__animation_5");
if (valuesPageAnimation_5) {
    valuesPageAnimation_5.addEventListener('animationend', function () {
        valuesPageAnimation_5.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s')
    })
}

let valuesPageAnimation_6 = document.querySelector(".value-page__animation_6");
if (valuesPageAnimation_6) {
    valuesPageAnimation_6.addEventListener('animationend', function () {
        valuesPageAnimation_6.classList.remove('animate__animated', 'animate__fadeIn', 'animate__delay-2s')
    })
}