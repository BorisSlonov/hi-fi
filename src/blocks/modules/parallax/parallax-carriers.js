
//custom 


function parallaxInitCarriers() {

    let carriersPageAnimation_1 = document.querySelector(".carriers-page__animation_1");

    new simpleParallax(carriersPageAnimation_1, {
        orientation: 'down',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let carriersPageAnimation_2 = document.querySelector(".carriers-page__animation_2");

    new simpleParallax(carriersPageAnimation_2, {
        orientation: 'down left',
        overflow: true,
        delay: .6,
        scale: 1.2,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let carriersPageAnimation_3 = document.querySelector(".carriers-page__animation_3");

    new simpleParallax(carriersPageAnimation_3, {
        orientation: 'down',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let carriersPageAnimation_4 = document.querySelector(".carriers-page__animation_4");

    new simpleParallax(carriersPageAnimation_4, {
        orientation: 'down right',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let carriersPageAnimation_5 = document.querySelector(".carriers-page__animation_5");

    new simpleParallax(carriersPageAnimation_5, {
        orientation: 'down',
        overflow: true,
        delay: .6,
        scale: 1.5,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let carriersPageAnimation_6 = document.querySelector(".carriers-page__animation_6");

    new simpleParallax(carriersPageAnimation_6, {
        orientation: 'down left',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let carriersPageAnimation_7 = document.querySelector(".carriers-page__animation_7");

    new simpleParallax(carriersPageAnimation_7, {
        orientation: 'down right',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

   
}


parallaxInitCarriers();

