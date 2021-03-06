



//custom 

function parallaxFooterInit() {

    let footerAnimation_1 = document.querySelector(".footer-animate__img_1");

    new simpleParallax(footerAnimation_1, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let footerAnimation_2 = document.querySelector(".footer-animate__img_2");

    new simpleParallax(footerAnimation_2, {
        orientation: 'left',
        overflow: true,
        delay: 1.2,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let footerAnimation_3 = document.querySelector(".footer-animate__img_3");

    new simpleParallax(footerAnimation_3, {
        orientation: 'down left',
        overflow: true,
        delay: .7,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let footerAnimation_4 = document.querySelector(".footer-animate__img_4");

    new simpleParallax(footerAnimation_4, {
        orientation: 'down right',
        overflow: true,
        delay: 1,
        scale: 1.3,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

    let footerAnimation_5 = document.querySelector(".footer-animate__img_5");

    new simpleParallax(footerAnimation_5, {
        orientation: 'left',
        overflow: true,
        delay: 1.2,
        scale: 1.9,
        transition: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
    });

}

parallaxFooterInit();



setTimeout(parallaxFooterInit(), 1000)