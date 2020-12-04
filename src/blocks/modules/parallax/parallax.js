
//custom 




function parallaxInit() {

  let FirstPageAnimation_1 = document.querySelector(".first-page__animation_1");

  new simpleParallax(FirstPageAnimation_1, {
    orientation: 'up',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });



  let FirstPageAnimation_3 = document.querySelector(".first-page__animation_3");

  new simpleParallax(FirstPageAnimation_3, {
    orientation: 'down left',
    overflow: true,
    delay: .9,
    scale: 1.5,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });

  let FirstPageAnimation_4 = document.querySelector(".first-page__animation_4");

  new simpleParallax(FirstPageAnimation_4, {
    orientation: 'up',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });

  let FirstPageAnimation_5 = document.querySelector(".first-page__animation_5");

  new simpleParallax(FirstPageAnimation_5, {
    orientation: 'down left',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });

  let FirstPageAnimation_6 = document.querySelector(".first-page__animation_6");

  new simpleParallax(FirstPageAnimation_6, {
    orientation: 'right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });

  let FirstPageAnimation_7 = document.querySelector(".first-page__animation_7");

  new simpleParallax(FirstPageAnimation_7, {
    orientation: 'up right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });

  let FirstPageAnimation_8 = document.querySelector(".first-page__animation_8");

  new simpleParallax(FirstPageAnimation_8, {
    orientation: 'right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });

  let FirstPageAnimation_9 = document.querySelector(".first-page__animation_9");

  new simpleParallax(FirstPageAnimation_9, {
    orientation: 'down right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });

  let FirstPageAnimation_10 = document.querySelector(".first-page__animation_10");

  new simpleParallax(FirstPageAnimation_10, {
    orientation: 'right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });

  let FirstPageAnimation_11 = document.querySelector(".first-page__animation_11");

  new simpleParallax(FirstPageAnimation_11, {
    orientation: 'down right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });


  let FirstPageAnimation_12 = document.querySelector(".first-page__animation_12");

  new simpleParallax(FirstPageAnimation_12, {
    orientation: 'down right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });


  let FirstPageAnimation_expertise = document.querySelector(".first-page__animation_expertise");

  new simpleParallax(FirstPageAnimation_expertise, {
    orientation: 'down',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });


  let FirstPageAnimation_expertise_1 = document.querySelector(".first-page__animation_expertise-1");

  new simpleParallax(FirstPageAnimation_expertise_1, {
    orientation: 'down right',
    overflow: true,
    delay: .9,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });

  let FirstPageAnimation_expertise_2 = document.querySelector(".first-page__animation_expertise-2");

  new simpleParallax(FirstPageAnimation_expertise_2, {
    orientation: 'down right',
    overflow: true,
    delay: 1.2,
    scale: 1.8,
    transition: 'cubic-bezier(.51,.52,.51,.52)'
  });


}
parallaxInit();


setTimeout(dispatch, 1000)

function dispatch() {
  console.log(window.dispatchEvent(new CustomEvent('resize')))
}

//del animate class
let parallaxFirst = document.querySelector('.first-page__animation_1');

parallaxFirst.addEventListener('animationend', function () {
  parallaxFirst.classList.remove('animate__animated', 'animate__rotateInDownLeft', 'animate__delay-2s')
})

//del animate class
let parallaxFirst1 = document.querySelector('.first-page__animation_2');

parallaxFirst1.addEventListener('animationend', function () {
  parallaxFirst1.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-3s')
})

//del animate class
let parallaxFirst2 = document.querySelector('.first-page__animation_3');

parallaxFirst2.addEventListener('animationend', function () {
  parallaxFirst2.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-3s')
})

//del animate class
let parallaxFirs3 = document.querySelector('.first-page__animation_4');

parallaxFirst3.addEventListener('animationend', function () {
  parallaxFirst3.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-3s')
})

//del animate class
let parallaxFirst4 = document.querySelector('.first-page__animation_5');

parallaxFirst4.addEventListener('animationend', function () {
  parallaxFirst4.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-3s')
})

//del animate class
let parallaxFirst5 = document.querySelector('.first-page__animation_7');

parallaxFirst5.addEventListener('animationend', function () {
  parallaxFirst5.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-3s')
})

//del animate class
let parallaxFirst6 = document.querySelector('.first-page__animation_9');

parallaxFirst6.addEventListener('animationend', function () {
  parallaxFirst6.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-3s')
})

//del animate class
let parallaxFirst7 = document.querySelector('.first-page__animation_10');

parallaxFirst7.addEventListener('animationend', function () {
  parallaxFirst7.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-3s')
})

//del animate class
let parallaxFirst8 = document.querySelector('.first-page__animation_11');

parallaxFirst8.addEventListener('animationend', function () {
  parallaxFirst8.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-3s')
})

//del animate class
let parallaxFirst9 = document.querySelector('.first-page__animation_12');

parallaxFirst9.addEventListener('animationend', function () {
  parallaxFirst9.classList.remove('animate__animated', 'animate__zoomIn', 'animate__delay-3s')
})












//del animate class
let parallaxImg1 = document.querySelector('.first-page__animation_expertise-2');

parallaxImg1.addEventListener('animationend', function () {
  parallaxImg1.classList.remove('animate__animated', 'animate__zoomInRight', 'animate__delay-2s')
})

//del animate class
let parallaxImg2 = document.querySelector('.first-page__animation_expertise');

parallaxImg2.addEventListener('animationend', function () {
  parallaxImg2.classList.remove('animate__animated', 'animate__fadeInLeft')
})






