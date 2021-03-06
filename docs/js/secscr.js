/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/scrollsection.js":
/*!*****************************************!*\
  !*** ./src/js/modules/scrollsection.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollsectionFunction\": function() { return /* binding */ scrollsectionFunction; }\n/* harmony export */ });\n\n\nvar scrollsectionFunction = function scrollsectionFunction() {\n  var secHeight = function secHeight() {\n    var sec = document.querySelectorAll('[data-scrlsec]');\n    sec.forEach(function (data) {\n      data.style.minHeight = window.innerHeight + 'px';\n    });\n  };\n\n  var options = {\n    root: null,\n    rootMargin: '10% 0px',\n    threshold: 0\n  };\n\n  var intersect = function intersect(elms) {\n    elms.forEach(function (elm) {\n      if (elm.isIntersecting) {\n        window.scroll({\n          top: elm.target.offsetTop,\n          behavior: 'smooth'\n        });\n      }\n    });\n  };\n\n  var observer = new IntersectionObserver(intersect, options);\n  var boxes = document.querySelectorAll('[data-scrlsec]');\n  boxes.forEach(function (box) {\n    observer.observe(box); //引数boxと関数intersectのコールバック引数elmsは同じもの\n  });\n  window.addEventListener('load', secHeight);\n  window.addEventListener('resize', secHeight);\n};\n\n//# sourceURL=webpack://aaa/./src/js/modules/scrollsection.js?");

/***/ }),

/***/ "./src/js/secscr.js":
/*!**************************!*\
  !*** ./src/js/secscr.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scrollsection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrollsection.js */ \"./src/js/modules/scrollsection.js\");\n\n(0,_modules_scrollsection_js__WEBPACK_IMPORTED_MODULE_0__.scrollsectionFunction)();\n\n//# sourceURL=webpack://aaa/./src/js/secscr.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/secscr.js");
/******/ 	
/******/ })()
;