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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_scroll_out__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/scroll-out */ "./src/blocks/modules/header/scroll-out.js");
/* harmony import */ var _modules_header_scroll_out__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_scroll_out__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_clients_clients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/clients/clients */ "./src/blocks/modules/clients/clients.js");
/* harmony import */ var _modules_clients_clients__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_clients_clients__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_our_commitment_our_commitment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/our-commitment/our-commitment */ "./src/blocks/modules/our-commitment/our-commitment.js");
/* harmony import */ var _modules_our_commitment_our_commitment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_our_commitment_our_commitment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_4__);






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