/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/clients/clients.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/clients/clients.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (window.innerWidth <= 425) {
  var mySwiper = new Swiper('.swiper-container', {
    speed: 300,
    autoplay: {
      delay: 2000
    },
    loop: true,
    slidesPerView: 2
  });
} else {
  var mySwiper = new Swiper('.swiper-container', {
    speed: 300,
    autoplay: {
      delay: 2000
    },
    loop: true,
    slidesPerView: 6
  });
}

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //burger

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

window.addEventListener('DOMContentLoaded', function () {
  var menu = document.querySelector('.header__list'),
      menuItem = document.querySelectorAll('.header__link'),
      hamburger = document.querySelector('.header__burger');
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('burger_active');
    menu.classList.toggle('menu_active');
  });
  menuItem.forEach(function (item) {
    item.addEventListener('click', function () {
      hamburger.classList.toggle('burger_active');
      menu.classList.toggle('menu_active');
    });
  });
}); // slowScroll

var anchors = document.querySelectorAll('a[href*="#"]');

var _iterator = _createForOfIteratorHelper(anchors),
    _step;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href').substr(1);
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  } //add class on scroll

} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}

document.addEventListener("scroll", function (e) {
  var content = document.querySelector("body");
  var scrolled = document.scrollingElement.scrollTop;
  var position = content.offsetTop;
  var header = document.querySelector("header");
  var leftTextWow = document.querySelector(".js-offsetTopLeft");
  var rightTextWow = document.querySelector(".js-offsetTopRight");

  if (scrolled > position + 350) {
    content.classList.add('header-bgc');
  } else {
    content.classList.remove('header-bgc');
    content.classList.add('header-none-bgc');
  } //delay animation in 1 screen


  if (scrolled > position + 350) {
    leftTextWow.classList.add('visible', 'wow', 'animate__animated', 'animate__fadeInLeft');
    rightTextWow.classList.add('visible', 'wow', 'animate__animated', 'animate__fadeIn', 'animate__delay-1s');
  }
});

/***/ }),

/***/ "./src/blocks/modules/our-commitment/our-commitment.js":
/*!*************************************************************!*\
  !*** ./src/blocks/modules/our-commitment/our-commitment.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  function equalHeight(group) {
    var tallest = 0;
    group.each(function () {
      thisHeight = $(this).height();

      if (thisHeight > tallest) {
        tallest = thisHeight;
      }
    });
    group.height(tallest);
  }

  equalHeight($(".column-one-height"));
});
window.addEventListener('resize', addRemoveOnResize);

function addRemoveOnResize() {
  var hiddenCard = document.querySelectorAll(".commitment-hidden");

  if (window.innerWidth <= 768) {
    hiddenCard.classList.remove('column-one-height');
  } else {
    hiddenCard.classList.add('column-one-height');
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax-about.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax-about.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxAboutInit() {
  var aboutAnimation_1 = document.querySelector(".about-animation_1");
  new simpleParallax(aboutAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.5,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var aboutAnimation_2 = document.querySelector(".about-animation_2");
  new simpleParallax(aboutAnimation_2, {
    orientation: 'left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var aboutAnimation_3 = document.querySelector(".about-animation_3");
  new simpleParallax(aboutAnimation_3, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
}

parallaxAboutInit();
setTimeout(parallaxAboutInit(), 1000);

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax-carriers.js":
/*!**********************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax-carriers.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxInitCarriers() {
  var carriersPageAnimation_1 = document.querySelector(".carriers-page__animation_1");
  new simpleParallax(carriersPageAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var carriersPageAnimation_2 = document.querySelector(".carriers-page__animation_2");
  new simpleParallax(carriersPageAnimation_2, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.2,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var carriersPageAnimation_3 = document.querySelector(".carriers-page__animation_3");
  new simpleParallax(carriersPageAnimation_3, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var carriersPageAnimation_4 = document.querySelector(".carriers-page__animation_4");
  new simpleParallax(carriersPageAnimation_4, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var carriersPageAnimation_5 = document.querySelector(".carriers-page__animation_5");
  new simpleParallax(carriersPageAnimation_5, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.5,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var carriersPageAnimation_6 = document.querySelector(".carriers-page__animation_6");
  new simpleParallax(carriersPageAnimation_6, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var carriersPageAnimation_7 = document.querySelector(".carriers-page__animation_7");
  new simpleParallax(carriersPageAnimation_7, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
}

parallaxInitCarriers();
setTimeout(dispatch, 1000);

function dispatch() {
  console.log(window.dispatchEvent(new CustomEvent('resize')));
}

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax-footer.js":
/*!********************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax-footer.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxFooterInit() {
  var footerAnimation_1 = document.querySelector(".footer-animate__img_1");
  new simpleParallax(footerAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.5,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var footerAnimation_2 = document.querySelector(".footer-animate__img_2");
  new simpleParallax(footerAnimation_2, {
    orientation: 'left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var footerAnimation_3 = document.querySelector(".footer-animate__img_3");
  new simpleParallax(footerAnimation_3, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var footerAnimation_4 = document.querySelector(".footer-animate__img_4");
  new simpleParallax(footerAnimation_4, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var footerAnimation_5 = document.querySelector(".footer-animate__img_5");
  new simpleParallax(footerAnimation_5, {
    orientation: 'left',
    overflow: true,
    delay: .6,
    scale: 1.6,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
}

parallaxFooterInit();
setTimeout(parallaxFooterInit(), 1000);

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax-news.js":
/*!******************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax-news.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxNewsInit() {
  var newsPageAnimation_1 = document.querySelector(".news-page__animation_1");
  new simpleParallax(newsPageAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var newsPageAnimation_2 = document.querySelector(".news-page__animation_2");
  new simpleParallax(newsPageAnimation_2, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var newsPageAnimation_3 = document.querySelector(".news-page__animation_3");
  new simpleParallax(newsPageAnimation_3, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var newsPageAnimation_4 = document.querySelector(".news-page__animation_4");
  new simpleParallax(newsPageAnimation_4, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var newsPageAnimation_5 = document.querySelector(".news-page__animation_5");
  new simpleParallax(newsPageAnimation_5, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var newsPageAnimation_6 = document.querySelector(".news-page__animation_6");
  new simpleParallax(newsPageAnimation_6, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var newsPageAnimation_7 = document.querySelector(".news-page__animation_7");
  new simpleParallax(newsPageAnimation_7, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var newsPageAnimation_8 = document.querySelector(".news-page__animation_8");
  new simpleParallax(newsPageAnimation_8, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var newsPageAnimation_9 = document.querySelector(".news-page__animation_9");
  new simpleParallax(newsPageAnimation_9, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var newsPageAnimation_10 = document.querySelector(".news-page__animation_10");
  new simpleParallax(newsPageAnimation_10, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
}

parallaxNewsInit();
setTimeout(dispatch, 1000);

function dispatch() {
  console.log(window.dispatchEvent(new CustomEvent('resize')));
}

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax-sectors.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax-sectors.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxsectorsInit() {
  var sectorsAnimation_1 = document.querySelector(".sectors-animation_1");
  new simpleParallax(sectorsAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.5,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var sectorsAnimation_2 = document.querySelector(".sectors-animation_2");
  new simpleParallax(sectorsAnimation_2, {
    orientation: 'left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var sectorsAnimation_3 = document.querySelector(".sectors-animation_3");
  new simpleParallax(sectorsAnimation_3, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var sectorsAnimation_4 = document.querySelector(".sectors-animation_4");
  new simpleParallax(sectorsAnimation_4, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var sectorsAnimation_5 = document.querySelector(".sectors-animation_5");
  new simpleParallax(sectorsAnimation_5, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var sectorsAnimation_6 = document.querySelector(".sectors-animation_6");
  new simpleParallax(sectorsAnimation_6, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var sectorsAnimation_7 = document.querySelector(".sectors-animation_7");
  new simpleParallax(sectorsAnimation_7, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var sectorsAnimation_8 = document.querySelector(".sectors-animation_8");
  new simpleParallax(sectorsAnimation_8, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
}

parallaxsectorsInit();
setTimeout(parallaxsectorsInit(), 1000);

/***/ }),

/***/ "./src/blocks/modules/parallax/parallax.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//custom 
function parallaxInit() {
  var FirstPageAnimation_1 = document.querySelector(".first-page__animation_1");
  new simpleParallax(FirstPageAnimation_1, {
    orientation: 'down',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var FirstPageAnimation_2 = document.querySelector(".first-page__animation_2");
  new simpleParallax(FirstPageAnimation_2, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var FirstPageAnimation_3 = document.querySelector(".first-page__animation_3");
  new simpleParallax(FirstPageAnimation_3, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var FirstPageAnimation_4 = document.querySelector(".first-page__animation_4");
  new simpleParallax(FirstPageAnimation_4, {
    orientation: 'up',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var FirstPageAnimation_5 = document.querySelector(".first-page__animation_5");
  new simpleParallax(FirstPageAnimation_5, {
    orientation: 'down left',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var FirstPageAnimation_6 = document.querySelector(".first-page__animation_6");
  new simpleParallax(FirstPageAnimation_6, {
    orientation: 'right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var FirstPageAnimation_7 = document.querySelector(".first-page__animation_7");
  new simpleParallax(FirstPageAnimation_7, {
    orientation: 'up right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var FirstPageAnimation_8 = document.querySelector(".first-page__animation_8");
  new simpleParallax(FirstPageAnimation_8, {
    orientation: 'right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var FirstPageAnimation_9 = document.querySelector(".first-page__animation_9");
  new simpleParallax(FirstPageAnimation_9, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var FirstPageAnimation_10 = document.querySelector(".first-page__animation_10");
  new simpleParallax(FirstPageAnimation_10, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var FirstPageAnimation_11 = document.querySelector(".first-page__animation_11");
  new simpleParallax(FirstPageAnimation_11, {
    orientation: 'down right',
    overflow: true,
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var FirstPageAnimation_12 = document.querySelector(".first-page__animation_12");
  new simpleParallax(FirstPageAnimation_12, {
    orientation: 'down left',
    overflow: true,
    delay: 2.6,
    scale: 1.6,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
  var FirstPageAnimation_expertise = document.querySelector(".first-page__animation_expertise");
  new simpleParallax(FirstPageAnimation_expertise, {
    orientation: 'down',
    overflow: true,
    delay: 2.6,
    scale: 1.8,
    transition: 'cubic-bezier(.39,.64,.47,.57)'
  });
}

parallaxInit();
setTimeout(dispatch, 1000);

function dispatch() {
  console.log(window.dispatchEvent(new CustomEvent('resize')));
}

/***/ }),

/***/ "./src/blocks/modules/run-num/run-num.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/run-num/run-num.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {(function ($) {
  // Custom easing function
  $.extend($.easing, {
    // This is ripped directly from the jQuery easing plugin (easeOutExpo), from: http://gsgd.co.uk/sandbox/jquery/easing/
    spincrementEasing: function spincrementEasing(x, t, b, c, d) {
      return t === d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
  }); // Spincrement function

  $.fn.spincrement = function (opts) {
    // Default values
    var defaults = {
      from: 0,
      to: null,
      decimalPlaces: null,
      decimalPoint: '.',
      thousandSeparator: ',',
      duration: 1000,
      // ms; TOTAL length animation
      leeway: 50,
      // percent of duraion
      easing: 'spincrementEasing',
      fade: true,
      complete: null
    };
    var options = $.extend(defaults, opts); // Function for formatting number

    var re_thouSep = new RegExp(/^(-?[0-9]+)([0-9]{3})/);

    function format(num, dp) {
      num = num.toFixed(dp); // converts to string!
      // Non "." decimal point

      if (dp > 0 && options.decimalPoint !== '.') {
        num = num.replace('.', options.decimalPoint);
      } // Thousands separator


      if (options.thousandSeparator) {
        while (re_thouSep.test(num)) {
          num = num.replace(re_thouSep, '$1' + options.thousandSeparator + '$2');
        }
      }

      return num;
    } // Apply to each matching item


    return this.each(function () {
      // Get handle on current obj
      var obj = $(this); // Set params FOR THIS ELEM

      var from = options.from;

      if (obj.attr('data-from')) {
        from = parseFloat(obj.attr('data-from'));
      }

      var to;

      if (obj.attr('data-to')) {
        to = parseFloat(obj.attr('data-to'));
      } else if (options.to !== null) {
        to = options.to;
      } else {
        var ts = $.inArray(options.thousandSeparator, ['\\', '^', '$', '*', '+', '?', '.']) > -1 ? '\\' + options.thousandSeparator : options.thousandSeparator;
        var re = new RegExp(ts, 'g');
        to = parseFloat(obj.text().replace(re, ''));
      }

      var duration = options.duration;

      if (options.leeway) {
        // If leeway is set, randomise duration a little
        duration += Math.round(options.duration * (Math.random() * 2 - 1) * options.leeway / 100);
      }

      var dp;

      if (obj.attr('data-dp')) {
        dp = parseInt(obj.attr('data-dp'), 10);
      } else if (options.decimalPlaces !== null) {
        dp = options.decimalPlaces;
      } else {
        var ix = obj.text().indexOf(options.decimalPoint);
        dp = ix > -1 ? obj.text().length - (ix + 1) : 0;
      } // Start


      obj.css('counter', from);
      if (options.fade) obj.css('opacity', 0);
      obj.animate({
        counter: to,
        opacity: 1
      }, {
        easing: options.easing,
        duration: duration,
        // Invoke the callback for each step.
        step: function step(progress) {
          obj.html(format(progress * to, dp));
        },
        complete: function complete() {
          // Cleanup
          obj.css('counter', null);
          obj.html(format(to, dp)); // user's callback

          if (options.complete) {
            options.complete(obj);
          }
        }
      });
    });
  };
})(jQuery);

$(document).ready(function () {
  var show = true;
  var countbox = ".run-num__item";
  $(window).on("scroll load resize", function () {
    if (!show) return false; // Отменяем показ анимации, если она уже была выполнена

    var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница

    var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа

    var w_height = $(window).height(); // Высота окна браузера

    var d_height = $(document).height(); // Высота всего документа

    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками

    if (w_top + 600 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
      $('.run-num__text_num').css('opacity', '1');
      $('.run-num__text_num').spincrement({
        thousandSeparator: "",
        duration: 4200
      });
      show = false;
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_parallax_parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/parallax/parallax */ "./src/blocks/modules/parallax/parallax.js");
/* harmony import */ var _modules_parallax_parallax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_parallax_parallax_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/parallax/parallax-footer */ "./src/blocks/modules/parallax/parallax-footer.js");
/* harmony import */ var _modules_parallax_parallax_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_parallax_parallax_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/parallax/parallax-about */ "./src/blocks/modules/parallax/parallax-about.js");
/* harmony import */ var _modules_parallax_parallax_about__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_about__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_parallax_parallax_sectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/parallax/parallax-sectors */ "./src/blocks/modules/parallax/parallax-sectors.js");
/* harmony import */ var _modules_parallax_parallax_sectors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_sectors__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_parallax_parallax_news__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/parallax/parallax-news */ "./src/blocks/modules/parallax/parallax-news.js");
/* harmony import */ var _modules_parallax_parallax_news__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_news__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_parallax_parallax_carriers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/parallax/parallax-carriers */ "./src/blocks/modules/parallax/parallax-carriers.js");
/* harmony import */ var _modules_parallax_parallax_carriers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_carriers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_clients_clients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/clients/clients */ "./src/blocks/modules/clients/clients.js");
/* harmony import */ var _modules_clients_clients__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_clients_clients__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_our_commitment_our_commitment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/our-commitment/our-commitment */ "./src/blocks/modules/our-commitment/our-commitment.js");
/* harmony import */ var _modules_our_commitment_our_commitment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_our_commitment_our_commitment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_run_num_run_num__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/run-num/run-num */ "./src/blocks/modules/run-num/run-num.js");
/* harmony import */ var _modules_run_num_run_num__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_run_num_run_num__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_10__);
//parallax





 //blocks







/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map