



//custom 

function parallaxAboutInit() {

    let aboutAnimation_1 = document.querySelector(".about-animation_1");

    new simpleParallax(aboutAnimation_1, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let aboutAnimation_2 = document.querySelector(".about-animation_2");

    new simpleParallax(aboutAnimation_2, {
        orientation: 'down left',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let aboutAnimation_3 = document.querySelector(".about-animation_3");

    new simpleParallax(aboutAnimation_3, {
        orientation: 'down right',
        overflow: true,
        delay: .9,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


    let aboutAnimation_4 = document.querySelector(".about-animation_4");

    new simpleParallax(aboutAnimation_4, {
        orientation: 'down right',
        overflow: true,
        delay: .9,
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
        delay: 2.9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });


}

parallaxAboutInit();



setTimeout(parallaxAboutInit(), 1000)