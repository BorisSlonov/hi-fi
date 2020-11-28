



//custom 

function parallaxFooterInit() {

    let footerAnimation_1 = document.querySelector(".footer-animate__img_1");

    new simpleParallax(footerAnimation_1, {
        orientation: 'down',
        overflow: true,
        delay: .6,
        scale: 1.5,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let footerAnimation_2 = document.querySelector(".footer-animate__img_2");

    new simpleParallax(footerAnimation_2, {
        orientation: 'left',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let footerAnimation_3 = document.querySelector(".footer-animate__img_3");

    new simpleParallax(footerAnimation_3, {
        orientation: 'down left',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let footerAnimation_4 = document.querySelector(".footer-animate__img_4");

    new simpleParallax(footerAnimation_4, {
        orientation: 'down right',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let footerAnimation_5 = document.querySelector(".footer-animate__img_5");

    new simpleParallax(footerAnimation_5, {
        orientation: 'left',
        overflow: true,
        delay: .6,
        scale: 1.6,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

}

parallaxFooterInit();



setTimeout(parallaxFooterInit(), 1000)