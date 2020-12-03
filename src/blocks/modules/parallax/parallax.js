
//custom 




function parallaxInit() {

  let FirstPageAnimation_1 = document.querySelector(".first-page__animation_1");

  new simpleParallax(FirstPageAnimation_1, {
    orientation: 'up',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.94,.47,.57)'
  });



  let FirstPageAnimation_3 = document.querySelector(".first-page__animation_3");

  new simpleParallax(FirstPageAnimation_3, {
    orientation: 'down left',
    overflow: true,
    delay: .9,
    scale: 1.5,
    transition: 'cubic-bezier(.39,.94,.47,.57)'
  });

  let FirstPageAnimation_4 = document.querySelector(".first-page__animation_4");

  new simpleParallax(FirstPageAnimation_4, {
    orientation: 'up',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.94,.47,.57)'
  });

  let FirstPageAnimation_5 = document.querySelector(".first-page__animation_5");

  new simpleParallax(FirstPageAnimation_5, {
    orientation: 'down left',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.94,.47,.57)'
  });

  let FirstPageAnimation_6 = document.querySelector(".first-page__animation_6");

  new simpleParallax(FirstPageAnimation_6, {
    orientation: 'right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.94,.47,.57)'
  });

  let FirstPageAnimation_7 = document.querySelector(".first-page__animation_7");

  new simpleParallax(FirstPageAnimation_7, {
    orientation: 'up right',
    overflow: true,
    delay: .9,
    scale: .9,
    transition: 'cubic-bezier(.39,.94,.47,.57)'
  });

  let FirstPageAnimation_8 = document.querySelector(".first-page__animation_8");

  new simpleParallax(FirstPageAnimation_8, {
    orientation: 'right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.94,.47,.57)'
  });

  let FirstPageAnimation_9 = document.querySelector(".first-page__animation_9");

  new simpleParallax(FirstPageAnimation_9, {
    orientation: 'down right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.94,.47,.57)'
  });

  let FirstPageAnimation_10 = document.querySelector(".first-page__animation_10");

  new simpleParallax(FirstPageAnimation_10, {
    orientation: 'right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.94,.47,.57)'
  });

  let FirstPageAnimation_11 = document.querySelector(".first-page__animation_11");

  new simpleParallax(FirstPageAnimation_11, {
    orientation: 'down right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.94,.47,.57)'
  });



  let FirstPageAnimation_expertise = document.querySelector(".first-page__animation_expertise");

  new simpleParallax(FirstPageAnimation_expertise, {
    orientation: 'down',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.94,.47,.57)'
  });


  let FirstPageAnimation_expertise_1 = document.querySelector(".first-page__animation_expertise-1");

  new simpleParallax(FirstPageAnimation_expertise_1, {
    orientation: 'down right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.94,.47,.57)'
  });


}


parallaxInit();


setTimeout(dispatch, 1000)

function dispatch() {
  console.log(window.dispatchEvent(new CustomEvent('resize')))
}