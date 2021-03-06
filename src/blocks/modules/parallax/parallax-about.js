



//custom 

function parallaxAboutInit() {


    let aboutAnimation_1 = document.querySelector(".about-animation_1");

    new simpleParallax(aboutAnimation_1, {
        orientation: 'down',
        overflow: true,
        delay: 1.2,
        scale: 1.4,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let aboutAnimation_2 = document.querySelector(".about-animation_2");

    new simpleParallax(aboutAnimation_2, {
        orientation: 'down left',
        overflow: true,
        delay: .7,
        scale: 1.4,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let aboutAnimation_3 = document.querySelector(".about-animation_3");

    new simpleParallax(aboutAnimation_3, {
        orientation: 'down right',
        overflow: true,
        delay: .9,
        scale: 1.6,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


    let aboutAnimation_4 = document.querySelector(".about-animation_4");

    new simpleParallax(aboutAnimation_4, {
        orientation: 'down right',
        overflow: true,
        delay: 1.2,
        scale: 1.9,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let aboutAnimation_5 = document.querySelector(".about-animation_5");

    new simpleParallax(aboutAnimation_5, {
        orientation: 'down right',
        overflow: true,
        delay: .9,
        scale: 1.9,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let aboutAnimation_6 = document.querySelector(".about-animation_6");

    new simpleParallax(aboutAnimation_6, {
        orientation: 'down',
        overflow: true,
        delay: 1.6,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


}


//del animate class


let aboutAnimation_1 = document.querySelector(".about-animation_1");
if (aboutAnimation_1) {
    aboutAnimation_1.addEventListener('animationend', function () {
        aboutAnimation_1.classList.remove('animate__animated', 'animate__zoomInRight', 'animate__delay-2s')

        setTimeout(parallaxAboutInit, 1500);
    })
}


let aboutAnimation_2 = document.querySelector(".about-animation_2");
if (aboutAnimation_2) {
    aboutAnimation_2.addEventListener('animationend', function () {
        aboutAnimation_2.classList.remove('animate__animated', 'animate__zoomInLeft', 'animate__delay-2s')
    })
}


let aboutAnimation_3 = document.querySelector(".about-animation_3");
if (aboutAnimation_3) {
    aboutAnimation_3.addEventListener('animationend', function () {
        aboutAnimation_3.classList.remove('animate__animated', 'animate__zoomInUp', 'animate__delay-3s')
    })
}


let aboutAnimation_4 = document.querySelector(".about-animation_4");
if (aboutAnimation_4) {
    aboutAnimation_4.addEventListener('animationend', function () {
        aboutAnimation_4.classList.remove('animate__animated', 'animate__zoomInUp')
    })
}


let aboutAnimation_5 = document.querySelector(".about-animation_5");
if (aboutAnimation_5) {
    aboutAnimation_5.addEventListener('animationend', function () {
        aboutAnimation_5.classList.remove('animate__animated', 'animate__zoomInUp')
    })
}