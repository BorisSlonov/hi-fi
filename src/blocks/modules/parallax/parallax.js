
//custom 

function parallaxInit() {

  let FirstPageAnimation_1 = document.querySelector(".first-page__animation_1");

  new simpleParallax(FirstPageAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });

  let FirstPageAnimation_2 = document.querySelector(".first-page__animation_2");

  new simpleParallax(FirstPageAnimation_2, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });

  let FirstPageAnimation_3 = document.querySelector(".first-page__animation_3");

  new simpleParallax(FirstPageAnimation_3, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });

  let FirstPageAnimation_4 = document.querySelector(".first-page__animation_4");

  new simpleParallax(FirstPageAnimation_4, {
    orientation: 'up',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });

  let FirstPageAnimation_5 = document.querySelector(".first-page__animation_5");

  new simpleParallax(FirstPageAnimation_5, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });

  let FirstPageAnimation_6 = document.querySelector(".first-page__animation_6");

  new simpleParallax(FirstPageAnimation_6, {
    orientation: 'right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });

  let FirstPageAnimation_7 = document.querySelector(".first-page__animation_7");

  new simpleParallax(FirstPageAnimation_7, {
    orientation: 'up right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });

  let FirstPageAnimation_8 = document.querySelector(".first-page__animation_8");

  new simpleParallax(FirstPageAnimation_8, {
    orientation: 'right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });

  let FirstPageAnimation_9 = document.querySelector(".first-page__animation_9");

  new simpleParallax(FirstPageAnimation_9, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });

  let FirstPageAnimation_10 = document.querySelector(".first-page__animation_10");

  new simpleParallax(FirstPageAnimation_10, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });

  let FirstPageAnimation_11 = document.querySelector(".first-page__animation_11");

  new simpleParallax(FirstPageAnimation_11, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });

  let FirstPageAnimation_12 = document.querySelector(".first-page__animation_12");

  new simpleParallax(FirstPageAnimation_12, {
    orientation: 'down left',
    overflow: true,
    delay: 2.6,
    scale: 1.6,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });

  let FirstPageAnimation_expertise = document.querySelector(".first-page__animation_expertise");

  new simpleParallax(FirstPageAnimation_expertise, {
    orientation: 'down',
    overflow: true,
    delay: 2.6,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
}


setTimeout(parallaxInit(), 500)