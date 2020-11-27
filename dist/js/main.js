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
    speed: 1000,
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

  if (scrolled > position + 50) {
    content.classList.add('header-bgc');
  } else {
    content.classList.remove('header-bgc');
    content.classList.add('header-none-bgc');
  }
});

/***/ }),

/***/ "./src/blocks/modules/header/scroll-out.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/header/scroll-out.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ScrollOut = function () {
  "use strict";

  function S(e, t, n) {
    return e < t ? t : n < e ? n : e;
  }

  function T(e) {
    return +(0 < e) - +(e < 0);
  }

  var q,
      t = {};

  function n(e) {
    return "-" + e[0].toLowerCase();
  }

  function d(e) {
    return t[e] || (t[e] = e.replace(/([A-Z])/g, n));
  }

  function v(e, t) {
    return e && 0 !== e.length ? e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (t || document.documentElement).querySelectorAll(e)) : [];
  }

  function h(e, t) {
    for (var n in t) {
      n.indexOf("_") && e.setAttribute("data-" + d(n), t[n]);
    }
  }

  var z = [];

  function e() {
    q = 0, z.slice().forEach(function (e) {
      return e();
    }), F();
  }

  function F() {
    !q && z.length && (q = requestAnimationFrame(e));
  }

  function N(e, t, n, r) {
    return "function" == typeof e ? e(t, n, r) : e;
  }

  function m() {}

  return function (L) {
    var i,
        P,
        _,
        H,
        o = (L = L || {}).onChange || m,
        l = L.onHidden || m,
        c = L.onShown || m,
        s = L.onScroll || m,
        f = L.cssProps ? (i = L.cssProps, function (e, t) {
      for (var n in t) {
        n.indexOf("_") && (!0 === i || i[n]) && e.style.setProperty("--" + d(n), (r = t[n], Math.round(1e4 * r) / 1e4));
      }

      var r;
    }) : m,
        e = L.scrollingElement,
        A = e ? v(e)[0] : window,
        W = e ? v(e)[0] : document.documentElement,
        x = !1,
        O = {},
        y = [];

    function t() {
      y = v(L.targets || "[data-scroll]", v(L.scope || W)[0]).map(function (e) {
        return {
          element: e
        };
      });
    }

    function n() {
      var e = W.clientWidth,
          t = W.clientHeight,
          n = T(-P + (P = W.scrollLeft || window.pageXOffset)),
          r = T(-_ + (_ = W.scrollTop || window.pageYOffset)),
          i = W.scrollLeft / (W.scrollWidth - e || 1),
          o = W.scrollTop / (W.scrollHeight - t || 1);
      x = x || O.scrollDirX !== n || O.scrollDirY !== r || O.scrollPercentX !== i || O.scrollPercentY !== o, O.scrollDirX = n, O.scrollDirY = r, O.scrollPercentX = i, O.scrollPercentY = o;

      for (var l, c = !1, s = 0; s < y.length; s++) {
        for (var f = y[s], u = f.element, a = u, d = 0, v = 0; d += a.offsetLeft, v += a.offsetTop, (a = a.offsetParent) && a !== A;) {
          ;
        }

        var h = u.clientHeight || u.offsetHeight || 0,
            m = u.clientWidth || u.offsetWidth || 0,
            g = (S(d + m, P, P + e) - S(d, P, P + e)) / m,
            p = (S(v + h, _, _ + t) - S(v, _, _ + t)) / h,
            w = 1 === g ? 0 : T(d - P),
            X = 1 === p ? 0 : T(v - _),
            Y = S((P - (m / 2 + d - e / 2)) / (e / 2), -1, 1),
            b = S((_ - (h / 2 + v - t / 2)) / (t / 2), -1, 1),
            D = void 0;
        D = L.offset ? N(L.offset, u, f, W) > _ ? 0 : 1 : (N(L.threshold, u, f, W) || 0) < g * p ? 1 : 0;
        var E = f.visible !== D;
        (f._changed || E || f.visibleX !== g || f.visibleY !== p || f.index !== s || f.elementHeight !== h || f.elementWidth !== m || f.offsetX !== d || f.offsetY !== v || f.intersectX != f.intersectX || f.intersectY != f.intersectY || f.viewportX !== Y || f.viewportY !== b) && (c = !0, f._changed = !0, f._visibleChanged = E, f.visible = D, f.elementHeight = h, f.elementWidth = m, f.index = s, f.offsetX = d, f.offsetY = v, f.visibleX = g, f.visibleY = p, f.intersectX = w, f.intersectY = X, f.viewportX = Y, f.viewportY = b, f.visible = D);
      }

      H || !x && !c || (l = C, z.push(l), F(), H = function H() {
        !(z = z.filter(function (e) {
          return e !== l;
        })).length && q && (cancelAnimationFrame(q), q = 0);
      });
    }

    function C() {
      u(), x && (x = !1, h(W, {
        scrollDirX: O.scrollDirX,
        scrollDirY: O.scrollDirY
      }), f(W, O), s(W, O, y));

      for (var e = y.length - 1; -1 < e; e--) {
        var t = y[e],
            n = t.element,
            r = t.visible,
            i = n.hasAttribute("scrollout-once") || !1;
        t._changed && (t._changed = !1, f(n, t)), t._visibleChanged && (h(n, {
          scroll: r ? "in" : "out"
        }), o(n, t, W), (r ? c : l)(n, t, W)), r && (L.once || i) && y.splice(e, 1);
      }
    }

    function u() {
      H && (H(), H = void 0);
    }

    t(), n(), C();

    var r = 0,
        a = function a() {
      r = r || setTimeout(function () {
        r = 0, n();
      }, 0);
    };

    return window.addEventListener("resize", a), A.addEventListener("scroll", a), {
      index: t,
      update: n,
      teardown: function teardown() {
        u(), window.removeEventListener("resize", a), A.removeEventListener("scroll", a);
      }
    };
  };
}();

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

/***/ "./src/blocks/modules/parallax/parallax.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/parallax/parallax.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * simpleParallax - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images or videos, 
 * @date: 20-08-2020 14:0:14, 
 * @version: 5.6.2,
 * @link: https://simpleparallax.com/
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(window, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && _typeof(value) === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        }
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, __webpack_exports__, __webpack_require__) {
      "use strict"; // ESM COMPAT FLAG

      __webpack_require__.r(__webpack_exports__); // EXPORTS


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return (
          /* binding */
          simpleParallax_SimpleParallax
        );
      }); // CONCATENATED MODULE: ./src/helpers/isSupportedBrowser.js
      // need closest support
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
      // need Intersection Observer support
      // https://github.com/w3c/IntersectionObserver/tree/master/polyfill


      var isSupportedBrowser = function isSupportedBrowser() {
        return Element.prototype.closest && 'IntersectionObserver' in window;
      };
      /* harmony default export */


      var helpers_isSupportedBrowser = isSupportedBrowser; // CONCATENATED MODULE: ./src/helpers/viewport.js

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var Viewport = /*#__PURE__*/function () {
        function Viewport() {
          _classCallCheck(this, Viewport);

          this.positions = {
            top: 0,
            bottom: 0,
            height: 0
          };
        }

        _createClass(Viewport, [{
          key: "setViewportTop",
          value: function setViewportTop(container) {
            // if this is a custom container, user the scrollTop
            this.positions.top = container ? container.scrollTop : window.pageYOffset;
            return this.positions;
          }
        }, {
          key: "setViewportBottom",
          value: function setViewportBottom() {
            this.positions.bottom = this.positions.top + this.positions.height;
            return this.positions;
          }
        }, {
          key: "setViewportAll",
          value: function setViewportAll(container) {
            // if this is a custom container, user the scrollTop
            this.positions.top = container ? container.scrollTop : window.pageYOffset; // if this is a custom container, get the height from the custom container itself

            this.positions.height = container ? container.clientHeight : document.documentElement.clientHeight;
            this.positions.bottom = this.positions.top + this.positions.height;
            return this.positions;
          }
        }]);

        return Viewport;
      }();

      var viewport = new Viewport(); // CONCATENATED MODULE: ./src/helpers/convertToArray.js
      // check whether the element is a Node List, a HTML Collection or an array
      // return an array of nodes

      var convertToArray = function convertToArray(elements) {
        if (NodeList.prototype.isPrototypeOf(elements) || HTMLCollection.prototype.isPrototypeOf(elements)) return Array.from(elements);
        if (typeof elements === 'string' || elements instanceof String) return document.querySelectorAll(elements);
        return [elements];
      };
      /* harmony default export */


      var helpers_convertToArray = convertToArray; // CONCATENATED MODULE: ./src/helpers/cssTransform.js
      // Detect css transform

      var cssTransform = function cssTransform() {
        var prefixes = 'transform webkitTransform mozTransform oTransform msTransform'.split(' ');
        var transform;
        var i = 0;

        while (transform === undefined) {
          transform = document.createElement('div').style[prefixes[i]] !== undefined ? prefixes[i] : undefined;
          i += 1;
        }

        return transform;
      };
      /* harmony default export */


      var helpers_cssTransform = cssTransform(); // CONCATENATED MODULE: ./src/helpers/isImageLoaded.js
      // check if media is fully loaded

      var isImageLoaded = function isImageLoaded(media) {
        // if the media is a video, return true
        if (media.tagName.toLowerCase() !== 'img' && media.tagName.toLowerCase() !== 'picture') {
          return true;
        } // check if media is set as the parameter


        if (!media) {
          return false;
        } // check if media has been 100% loaded


        if (!media.complete) {
          return false;
        } // check if the media is displayed


        if (typeof media.naturalWidth !== 'undefined' && media.naturalWidth === 0) {
          return false;
        }

        return true;
      };
      /* harmony default export */


      var helpers_isImageLoaded = isImageLoaded; // CONCATENATED MODULE: ./src/instances/parallax.js

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }

      function parallax_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function parallax_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function parallax_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) parallax_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) parallax_defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var parallax_ParallaxInstance = /*#__PURE__*/function () {
        function ParallaxInstance(element, options) {
          var _this = this;

          parallax_classCallCheck(this, ParallaxInstance); // set the element & settings

          this.element = element;
          this.elementContainer = element;
          this.settings = options;
          this.isVisible = true;
          this.isInit = false;
          this.oldTranslateValue = -1;
          this.init = this.init.bind(this);
          this.customWrapper = this.settings.customWrapper && this.element.closest(this.settings.customWrapper) ? this.element.closest(this.settings.customWrapper) : null; // check if images has not been loaded yet

          if (helpers_isImageLoaded(element)) {
            this.init();
          } else {
            this.element.addEventListener('load', function () {
              // timeout to ensure the image is fully loaded into the DOM
              setTimeout(function () {
                _this.init(true);
              }, 50);
            });
          }
        }

        parallax_createClass(ParallaxInstance, [{
          key: "init",
          value: function init(asyncInit) {
            var _this2 = this; // for some reason, <picture> are init an infinite time on windows OS


            if (this.isInit) return;

            if (asyncInit) {
              // in case the image is lazy loaded, the rangemax should be cleared
              // so it will be updated in the next getTranslateValue()
              this.rangeMax = null;
            } // check if element has not been already initialized with simpleParallax


            if (this.element.closest('.simpleParallax')) return;

            if (this.settings.overflow === false) {
              // if overflow option is set to false
              // wrap the element into a div to apply overflow
              this.wrapElement(this.element);
            } // apply the transform style on the image


            this.setTransformCSS(); // get the current element offset

            this.getElementOffset(); // init the Intesection Observer

            this.intersectionObserver(); // get its translated value

            this.getTranslateValue(); // apply its translation even if not visible for the first init

            this.animate(); // if a delay has been set

            if (this.settings.delay > 0) {
              // apply a timeout to avoid buggy effect
              setTimeout(function () {
                // apply the transition style on the image
                _this2.setTransitionCSS(); //add isInit class


                _this2.elementContainer.classList.add('simple-parallax-initialized');
              }, 10);
            } else {
              //add isInit class
              this.elementContainer.classList.add('simple-parallax-initialized');
            } // for some reason, <picture> are init an infinite time on windows OS


            this.isInit = true;
          } // if overflow option is set to false
          // wrap the element into a .simpleParallax div and apply overflow hidden to hide the image excedant (result of the scale)

        }, {
          key: "wrapElement",
          value: function wrapElement() {
            // check is current image is in a <picture> tag
            var elementToWrap = this.element.closest('picture') || this.element; // create a .simpleParallax wrapper container
            // if there is a custom wrapper
            // override the wrapper with it

            var wrapper = this.customWrapper || document.createElement('div');
            wrapper.classList.add('simpleParallax');
            wrapper.style.overflow = 'hidden'; // append the image inside the new wrapper

            if (!this.customWrapper) {
              elementToWrap.parentNode.insertBefore(wrapper, elementToWrap);
              wrapper.appendChild(elementToWrap);
            }

            this.elementContainer = wrapper;
          } // unwrap the element from .simpleParallax wrapper container

        }, {
          key: "unWrapElement",
          value: function unWrapElement() {
            var wrapper = this.elementContainer; // if there is a custom wrapper, we jusy need to remove the class and style

            if (this.customWrapper) {
              wrapper.classList.remove('simpleParallax');
              wrapper.style.overflow = '';
            } else {
              wrapper.replaceWith.apply(wrapper, _toConsumableArray(wrapper.childNodes));
            }
          } // apply default style on element

        }, {
          key: "setTransformCSS",
          value: function setTransformCSS() {
            if (this.settings.overflow === false) {
              // if overflow option is set to false
              // add scale style so the image can be translated without getting out of its container
              this.element.style[helpers_cssTransform] = "scale(".concat(this.settings.scale, ")");
            } // add will-change CSS property to improve perfomance


            this.element.style.willChange = 'transform';
          } // apply the transition effet

        }, {
          key: "setTransitionCSS",
          value: function setTransitionCSS() {
            // add transition option
            this.element.style.transition = "transform ".concat(this.settings.delay, "s ").concat(this.settings.transition);
          } // remove style of the element

        }, {
          key: "unSetStyle",
          value: function unSetStyle() {
            // remove will change inline style
            this.element.style.willChange = '';
            this.element.style[helpers_cssTransform] = '';
            this.element.style.transition = '';
          } // get the current element offset

        }, {
          key: "getElementOffset",
          value: function getElementOffset() {
            // get position of the element
            var positions = this.elementContainer.getBoundingClientRect(); // get height

            this.elementHeight = positions.height; // get offset top

            this.elementTop = positions.top + viewport.positions.top; // if there is a custom container

            if (this.settings.customContainer) {
              // we need to do some calculation to get the position from the parent rather than the viewport
              var parentPositions = this.settings.customContainer.getBoundingClientRect();
              this.elementTop = positions.top - parentPositions.top + viewport.positions.top;
            } // get offset bottom


            this.elementBottom = this.elementHeight + this.elementTop;
          } // build the Threshold array to cater change for every pixel scrolled

        }, {
          key: "buildThresholdList",
          value: function buildThresholdList() {
            var thresholds = [];

            for (var i = 1.0; i <= this.elementHeight; i++) {
              var ratio = i / this.elementHeight;
              thresholds.push(ratio);
            }

            return thresholds;
          } // create the Intersection Observer

        }, {
          key: "intersectionObserver",
          value: function intersectionObserver() {
            var options = {
              root: null,
              threshold: this.buildThresholdList()
            };
            this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), options);
            this.observer.observe(this.element);
          } // Intersection Observer Callback to set the element at visible state or not

        }, {
          key: "intersectionObserverCallback",
          value: function intersectionObserverCallback(entries) {
            var _this3 = this;

            entries.forEach(function (entry) {
              if (entry.isIntersecting) {
                _this3.isVisible = true;
              } else {
                _this3.isVisible = false;
              }
            });
          } // check if the current element is visible in the Viewport
          // for browser that not support Intersection Observer API

        }, {
          key: "checkIfVisible",
          value: function checkIfVisible() {
            return this.elementBottom > viewport.positions.top && this.elementTop < viewport.positions.bottom;
          } // calculate the range between image will be translated

        }, {
          key: "getRangeMax",
          value: function getRangeMax() {
            // get the real height of the image without scale
            var elementImageHeight = this.element.clientHeight; // range is calculate with the image height by the scale

            this.rangeMax = elementImageHeight * this.settings.scale - elementImageHeight;
          } // get the percentage and the translate value to apply on the element

        }, {
          key: "getTranslateValue",
          value: function getTranslateValue() {
            // calculate the % position of the element comparing to the viewport
            // rounding percentage to a 1 number float to avoid unn unnecessary calculation
            var percentage = ((viewport.positions.bottom - this.elementTop) / ((viewport.positions.height + this.elementHeight) / 100)).toFixed(1); // sometime the percentage exceeds 100 or goes below 0

            percentage = Math.min(100, Math.max(0, percentage)); // if a maxTransition has been set, we round the percentage to that number

            if (this.settings.maxTransition !== 0 && percentage > this.settings.maxTransition) {
              percentage = this.settings.maxTransition;
            } // sometime the same percentage is returned
            // if so we don't do aything


            if (this.oldPercentage === percentage) {
              return false;
            } // if not range max is set, recalculate it


            if (!this.rangeMax) {
              this.getRangeMax();
            } // transform this % into the max range of the element
            // rounding translateValue to a non float int - as minimum pixel for browser to render is 1 (no 0.5)


            this.translateValue = (percentage / 100 * this.rangeMax - this.rangeMax / 2).toFixed(0); // sometime the same translate value is returned
            // if so we don't do aything

            if (this.oldTranslateValue === this.translateValue) {
              return false;
            } // store the current percentage


            this.oldPercentage = percentage;
            this.oldTranslateValue = this.translateValue;
            return true;
          } // animate the image

        }, {
          key: "animate",
          value: function animate() {
            var translateValueY = 0;
            var translateValueX = 0;
            var inlineCss;

            if (this.settings.orientation.includes('left') || this.settings.orientation.includes('right')) {
              // if orientation option is left or right
              // use horizontal axe - X axe
              translateValueX = "".concat(this.settings.orientation.includes('left') ? this.translateValue * -1 : this.translateValue, "px");
            }

            if (this.settings.orientation.includes('up') || this.settings.orientation.includes('down')) {
              // if orientation option is up or down
              // use vertical axe - Y axe
              translateValueY = "".concat(this.settings.orientation.includes('up') ? this.translateValue * -1 : this.translateValue, "px");
            } // set style to apply to the element


            if (this.settings.overflow === false) {
              // if overflow option is set to false
              // add the scale style
              inlineCss = "translate3d(".concat(translateValueX, ", ").concat(translateValueY, ", 0) scale(").concat(this.settings.scale, ")");
            } else {
              inlineCss = "translate3d(".concat(translateValueX, ", ").concat(translateValueY, ", 0)");
            } // add style on the element using the adequate CSS transform


            this.element.style[helpers_cssTransform] = inlineCss;
          }
        }]);
        return ParallaxInstance;
      }();
      /* harmony default export */


      var parallax = parallax_ParallaxInstance; // CONCATENATED MODULE: ./src/simpleParallax.js

      function simpleParallax_toConsumableArray(arr) {
        return simpleParallax_arrayWithoutHoles(arr) || simpleParallax_iterableToArray(arr) || simpleParallax_unsupportedIterableToArray(arr) || simpleParallax_nonIterableSpread();
      }

      function simpleParallax_nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function simpleParallax_iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
      }

      function simpleParallax_arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return simpleParallax_arrayLikeToArray(arr);
      }

      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || simpleParallax_unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function simpleParallax_unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return simpleParallax_arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return simpleParallax_arrayLikeToArray(o, minLen);
      }

      function simpleParallax_arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) {
          arr2[i] = arr[i];
        }

        return arr2;
      }

      function _iterableToArrayLimit(arr, i) {
        if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;

        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      function simpleParallax_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function simpleParallax_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function simpleParallax_createClass(Constructor, protoProps, staticProps) {
        if (protoProps) simpleParallax_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) simpleParallax_defineProperties(Constructor, staticProps);
        return Constructor;
      }

      var isInit = false;
      var instances = [];
      var frameID;
      var resizeID;

      var simpleParallax_SimpleParallax = /*#__PURE__*/function () {
        function SimpleParallax(elements, options) {
          simpleParallax_classCallCheck(this, SimpleParallax);
          if (!elements) return; // check if the browser support simpleParallax

          if (!helpers_isSupportedBrowser()) return;
          this.elements = helpers_convertToArray(elements);
          this.defaults = {
            delay: 0,
            orientation: 'up',
            scale: 1.3,
            overflow: false,
            transition: 'cubic-bezier(0,0,0,1)',
            customContainer: '',
            customWrapper: '',
            maxTransition: 0
          };
          this.settings = Object.assign(this.defaults, options);

          if (this.settings.customContainer) {
            var _convertToArray = helpers_convertToArray(this.settings.customContainer);

            var _convertToArray2 = _slicedToArray(_convertToArray, 1);

            this.customContainer = _convertToArray2[0];
          }

          this.lastPosition = -1;
          this.resizeIsDone = this.resizeIsDone.bind(this);
          this.refresh = this.refresh.bind(this);
          this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this);
          this.init();
        }

        simpleParallax_createClass(SimpleParallax, [{
          key: "init",
          value: function init() {
            var _this = this;

            viewport.setViewportAll(this.customContainer);
            instances = [].concat(simpleParallax_toConsumableArray(this.elements.map(function (element) {
              return new parallax(element, _this.settings);
            })), simpleParallax_toConsumableArray(instances)); // update the instance length
            // instancesLength = instances.length;
            // only if this is the first simpleParallax init

            if (!isInit) {
              // init the frame
              this.proceedRequestAnimationFrame();
              window.addEventListener('resize', this.resizeIsDone);
              isInit = true;
            }
          } // wait for resize to be completely done

        }, {
          key: "resizeIsDone",
          value: function resizeIsDone() {
            clearTimeout(resizeID);
            resizeID = setTimeout(this.refresh, 200);
          } // animation frame

        }, {
          key: "proceedRequestAnimationFrame",
          value: function proceedRequestAnimationFrame() {
            var _this2 = this; // get the offset top of the viewport


            viewport.setViewportTop(this.customContainer);

            if (this.lastPosition === viewport.positions.top) {
              // if last position if the same than the curent one
              // callback the animationFrame and exit the current loop
              frameID = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
              return;
            } // get the offset bottom of the viewport


            viewport.setViewportBottom(); // proceed with the current element

            instances.forEach(function (instance) {
              _this2.proceedElement(instance);
            }); // callback the animationFrame

            frameID = window.requestAnimationFrame(this.proceedRequestAnimationFrame); // store the last position

            this.lastPosition = viewport.positions.top;
          } // proceed the element

        }, {
          key: "proceedElement",
          value: function proceedElement(instance) {
            var isVisible = false; // if this is a custom container
            // use old function to check if element visible

            if (this.customContainer) {
              isVisible = instance.checkIfVisible(); // else, use response from Intersection Observer API Callback
            } else {
              isVisible = instance.isVisible;
            } // if element not visible, stop it


            if (!isVisible) return; // if percentage is equal to the last one, no need to continue

            if (!instance.getTranslateValue()) {
              return;
            } // animate the image


            instance.animate();
          }
        }, {
          key: "refresh",
          value: function refresh() {
            // re-get all the viewport positions
            viewport.setViewportAll(this.customContainer);
            instances.forEach(function (instance) {
              // re-get the current element offset
              instance.getElementOffset(); // re-get the range if the current element

              instance.getRangeMax();
            }); // force the request animation frame to fired

            this.lastPosition = -1;
          }
        }, {
          key: "destroy",
          value: function destroy() {
            var _this3 = this;

            var instancesToDestroy = []; // remove all instances that need to be destroyed from the instances array

            instances = instances.filter(function (instance) {
              if (_this3.elements.includes(instance.element)) {
                // push instance that need to be destroyed into instancesToDestroy
                instancesToDestroy.push(instance);
                return false;
              }

              return instance;
            });
            instancesToDestroy.forEach(function (instance) {
              // unset style
              instance.unSetStyle();

              if (_this3.settings.overflow === false) {
                // if overflow option is set to false
                // unwrap the element from .simpleParallax wrapper container
                instance.unWrapElement();
              }
            }); // if no instances left, remove the raf and resize event = simpleParallax fully destroyed

            if (!instances.length) {
              // cancel the animation frame
              window.cancelAnimationFrame(frameID); // detach the resize event

              window.removeEventListener('resize', this.refresh); // Reset isInit

              isInit = false;
            }
          }
        }]);
        return SimpleParallax;
      }();
      /***/

    }
    /******/
    ])["default"]
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

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
/* harmony import */ var _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/parallax/parallax.js */ "./src/blocks/modules/parallax/parallax.js");
/* harmony import */ var _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_header_scroll_out__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/header/scroll-out */ "./src/blocks/modules/header/scroll-out.js");
/* harmony import */ var _modules_header_scroll_out__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_header_scroll_out__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_clients_clients__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/clients/clients */ "./src/blocks/modules/clients/clients.js");
/* harmony import */ var _modules_clients_clients__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_clients_clients__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_our_commitment_our_commitment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/our-commitment/our-commitment */ "./src/blocks/modules/our-commitment/our-commitment.js");
/* harmony import */ var _modules_our_commitment_our_commitment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_our_commitment_our_commitment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_run_num_run_num__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/run-num/run-num */ "./src/blocks/modules/run-num/run-num.js");
/* harmony import */ var _modules_run_num_run_num__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_run_num_run_num__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_6__);








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