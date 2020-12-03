//custom 

function parallaxsectorsInit() {

    let sectorsAnimation_1 = document.querySelector(".sectors-animation_1");

    new simpleParallax(sectorsAnimation_1, {
        orientation: 'down',
        overflow: true,
        delay: .6,
        scale: 1.5,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let sectorsAnimation_2 = document.querySelector(".sectors-animation_2");

    new simpleParallax(sectorsAnimation_2, {
        orientation: 'left',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let sectorsAnimation_3 = document.querySelector(".sectors-animation_3");

    new simpleParallax(sectorsAnimation_3, {
        orientation: 'right',
        overflow: true,
        delay: .6,
        scale: 1.6,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });


    let sectorsAnimation_4 = document.querySelector(".sectors-animation_4");

    new simpleParallax(sectorsAnimation_4, {
        orientation: 'down left',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });




    let sectorsAnimation_5 = document.querySelector(".sectors-animation_5");

    new simpleParallax(sectorsAnimation_5, {
        orientation: 'down left',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });


    let sectorsAnimation_6 = document.querySelector(".sectors-animation_6");

    new simpleParallax(sectorsAnimation_6, {
        orientation: 'down left',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });


    let sectorsAnimation_7 = document.querySelector(".sectors-animation_7");

    new simpleParallax(sectorsAnimation_7, {
        orientation: 'down right',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let sectorsAnimation_8 = document.querySelector(".sectors-animation_8");

    new simpleParallax(sectorsAnimation_8, {
        orientation: 'down',
        overflow: true,
        delay: .6,
        scale: 3.4,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });


    let sectorsAnimation_9 = document.querySelector(".sectors-animation-tr_2");

    new simpleParallax(sectorsAnimation_9, {
        orientation: 'down',
        overflow: true,
        delay: .6,
        scale: 3.4,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let sectorsAnimation_10 = document.querySelector(".sectors-animation-tr_1");

    new simpleParallax(sectorsAnimation_10, {
        orientation: 'down',
        overflow: true,
        delay: .6,
        scale: 3.4,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });
}

parallaxsectorsInit();



setTimeout(parallaxsectorsInit(), 1000)