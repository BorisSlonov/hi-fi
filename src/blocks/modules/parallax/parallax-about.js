



//custom 

function parallaxAboutInit() {

    let aboutAnimation_1 = document.querySelector(".about-animation_1");

    new simpleParallax(aboutAnimation_1, {
        orientation: 'down',
        overflow: true,
        delay: .6,
        scale: 1.5,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let aboutAnimation_2 = document.querySelector(".about-animation_2");

    new simpleParallax(aboutAnimation_2, {
        orientation: 'down left',
        overflow: true,
        delay: .6,
        scale: 2,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let aboutAnimation_3 = document.querySelector(".about-animation_3");

    new simpleParallax(aboutAnimation_3, {
        orientation: 'down right',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });


    let aboutAnimation_4 = document.querySelector(".about-animation_4");

    new simpleParallax(aboutAnimation_4, {
        orientation: 'down right',
        overflow: true,
        delay: .6,
        scale: 1.6,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let aboutAnimation_5 = document.querySelector(".about-animation_5");

    new simpleParallax(aboutAnimation_5, {
        orientation: 'down right',
        overflow: true,
        delay: .6,
        scale: 1.6,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let aboutAnimation_6 = document.querySelector(".about-animation_6");

    new simpleParallax(aboutAnimation_6, {
        orientation: 'down',
        overflow: true,
        delay: 2.6,
        scale: 2,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });


}

parallaxAboutInit();



setTimeout(parallaxAboutInit(), 1000)