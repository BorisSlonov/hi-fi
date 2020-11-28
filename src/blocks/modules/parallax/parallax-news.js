
//custom 


function parallaxNewsInit() {

    let newsPageAnimation_1 = document.querySelector(".news-page__animation_1");

    new simpleParallax(newsPageAnimation_1, {
        orientation: 'down',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let newsPageAnimation_2 = document.querySelector(".news-page__animation_2");

    new simpleParallax(newsPageAnimation_2, {
        orientation: 'down right',
        overflow: true,
        delay: .6,
        scale: 1.8,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let newsPageAnimation_3 = document.querySelector(".news-page__animation_3");

    new simpleParallax(newsPageAnimation_3, {
        orientation: 'down',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let newsPageAnimation_4 = document.querySelector(".news-page__animation_4");

    new simpleParallax(newsPageAnimation_4, {
        orientation: 'down left',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let newsPageAnimation_5 = document.querySelector(".news-page__animation_5");

    new simpleParallax(newsPageAnimation_5, {
        orientation: 'down right',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let newsPageAnimation_6 = document.querySelector(".news-page__animation_6");

    new simpleParallax(newsPageAnimation_6, {
        orientation: 'down left',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });

    let newsPageAnimation_7 = document.querySelector(".news-page__animation_7");

    new simpleParallax(newsPageAnimation_7, {
        orientation: 'left',
        overflow: true,
        delay: .6,
        scale: 1.3,
        transition: 'cubic-bezier(.39,.64,.47,.57)'
    });




}

parallaxNewsInit();

setTimeout(dispatch, 1000)

function dispatch() {
    console.log(window.dispatchEvent(new CustomEvent('resize')))
}