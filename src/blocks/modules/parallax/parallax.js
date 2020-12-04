
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




function dispatch() {
  console.log(window.dispatchEvent(new CustomEvent('resize')))
}
dispatch()


//del animate class
let parallaxFirst = document.querySelector('.first-page__animation_1');

if (parallaxFirst) {
  parallaxFirst.addEventListener('animationend', function () {
    parallaxFirst.classList.remove('animate__rotateInDownLeft', 'animate__delay-2s')

    setTimeout(parallaxInit, 2000);
  })
}


//del animate class
let parallaxFirst1 = document.querySelector('.first-page__animation_2');

if (parallaxFirst1) {
  parallaxFirst1.addEventListener('animationend', function () {
    parallaxFirst1.classList.remove('animate__zoomIn', 'animate__delay-3s')
  })
}


//del animate class
let parallaxFirst2 = document.querySelector('.first-page__animation_3');
if (parallaxFirst2) {
  parallaxFirst2.addEventListener('animationend', function () {
    parallaxFirst2.classList.remove('animate__zoomIn', 'animate__delay-3s')
  })
}


//del animate class
let parallaxFirst3 = document.querySelector('.first-page__animation_4');
if (parallaxFirst3) {
  parallaxFirst3.addEventListener('animationend', function () {
    parallaxFirst3.classList.remove('animate__zoomIn', 'animate__delay-3s')
  })

}

//del animate class
let parallaxFirst4 = document.querySelector('.first-page__animation_5');
if (parallaxFirst4) {
  parallaxFirst4.addEventListener('animationend', function () {
    parallaxFirst4.classList.remove('animate__zoomIn', 'animate__delay-3s')
  })
}

//del animate class
let parallaxFirst10 = document.querySelector('.first-page__animation_6');
if (parallaxFirst10) {
  parallaxFirst10.addEventListener('animationend', function () {
    parallaxFirst10.classList.remove('animate__lightSpeedInRight', 'animate__delay-2s')
  })
}


//del animate class
let parallaxFirst5 = document.querySelector('.first-page__animation_7');
if (parallaxFirst5) {
  parallaxFirst5.addEventListener('animationend', function () {
    parallaxFirst5.classList.remove('animate__zoomIn', 'animate__delay-3s')
  })
}

//del animate class
let parallaxFirst11 = document.querySelector('.first-page__animation_8');
if (parallaxFirst11) {
  parallaxFirst11.addEventListener('animationend', function () {
    parallaxFirst11.classList.remove('animate__lightSpeedInRight', 'animate__delay-2s')
  })
}

//del animate class
let parallaxFirst6 = document.querySelector('.first-page__animation_9');
if (parallaxFirst6) {
  parallaxFirst6.addEventListener('animationend', function () {
    parallaxFirst6.classList.remove('animate__zoomIn', 'animate__delay-3s')
  })
}


//del animate class
let parallaxFirst7 = document.querySelector('.first-page__animation_10');
if (parallaxFirst7) {
  parallaxFirst7.addEventListener('animationend', function () {
    parallaxFirst7.classList.remove('animate__zoomIn', 'animate__delay-3s')
  })
}


//del animate class
let parallaxFirst8 = document.querySelector('.first-page__animation_11');
if (parallaxFirst8) {
  parallaxFirst8.addEventListener('animationend', function () {
    parallaxFirst8.classList.remove('animate__zoomIn', 'animate__delay-3s')
  })
}


//del animate class
let parallaxFirst9 = document.querySelector('.first-page__animation_12');
if (parallaxFirst9) {
  parallaxFirst9.addEventListener('animationend', function () {
    parallaxFirst9.classList.remove('animate__zoomIn', 'animate__delay-3s')
  })
}




//del animate class
let parallaxImg1 = document.querySelector('.first-page__animation_expertise-2');
if (parallaxImg1) {
  parallaxImg1.addEventListener('animationend', function () {
    parallaxImg1.classList.remove('animate__zoomInRight', 'animate__delay-2s')
  })
}


//del animate class
let parallaxImg2 = document.querySelector('.first-page__animation_expertise');
if (parallaxImg2) {
  parallaxImg2.addEventListener('animationend', function () {
    parallaxImg2.classList.remove('animate__fadeInLeft')
  })
}







