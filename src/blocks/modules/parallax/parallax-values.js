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


parallaxValuesInit();



