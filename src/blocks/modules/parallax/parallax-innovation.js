//custom 


function parallaxInnovationInit() {

    let innovationPageAnimation_1 = document.querySelector(".innovation-page__animation_1");

    new simpleParallax(innovationPageAnimation_1, {
        orientation: 'up',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(.39,.94,.47,.57)'
    });

    let innovationPageAnimation_2 = document.querySelector(".innovation-page__animation_2");

    new simpleParallax(innovationPageAnimation_2, {
        orientation: 'top right',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(.39,.94,.47,.57)'
    });

    let innovationPageAnimation_3 = document.querySelector(".innovation-page__animation_3");

    new simpleParallax(innovationPageAnimation_3, {
        orientation: 'down left',
        overflow: true,
        delay: .9,
        scale: 1.25,
        transition: 'cubic-bezier(.39,.94,.47,.57)'
    });

    let innovationPageAnimation_4 = document.querySelector(".innovation-page__animation_4");

    new simpleParallax(innovationPageAnimation_4, {
        orientation: 'down',
        overflow: true,
        delay: .9,
        scale: 1.8,
        transition: 'cubic-bezier(.39,.94,.47,.57)'
    });

}


parallaxInnovationInit();



