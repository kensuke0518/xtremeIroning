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

/***/ "./src/js/dark.js":
/*!************************!*\
  !*** ./src/js/dark.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"darkFunction\": function() { return /* binding */ darkFunction; }\n/* harmony export */ });\n //ダークモード切り替え\n\n/**\n * https://developer.mozilla.org/ja/docs/Web/API/MediaQueryList\n * mediaQueryListを取得\n */\n\nvar darkFunction = function darkFunction() {\n  var darkCheck = document.querySelector('[data-dark=\"dark\"]');\n\n  var darkOn = function darkOn() {\n    document.body.classList.remove('light-mode');\n    document.body.classList.add('dark-mode');\n    darkCheck.checked = true;\n  };\n\n  var darkOff = function darkOff() {\n    document.body.classList.remove('dark-mode');\n    document.body.classList.add('light-mode');\n    darkCheck.checked = false;\n  }; //ダークモード自動切り替え\n\n\n  var darkMode = matchMedia('(prefers-color-scheme:dark)').matches;\n  darkMode ? darkOn() : darkOff(); //ダークモード手動切り替え\n\n  darkCheck.addEventListener('change', function () {\n    return darkCheck.checked ? darkOn() : darkOff();\n  });\n};\n\n//# sourceURL=webpack://aaa/./src/js/dark.js?");

/***/ }),

/***/ "./src/js/hsla.js":
/*!************************!*\
  !*** ./src/js/hsla.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"hslaFunction\": function() { return /* binding */ hslaFunction; }\n/* harmony export */ });\n\n/**\n * hslと色相の考え方\n * https://qiita.com/clockmaker/items/66cd8c88dade24c3fb8f\n * https://www.colorzilla.com/gradient-editor/\n * https://cssgradient.io/\n */\n\nvar hslaFunction = function hslaFunction() {\n  var header = document.querySelector('#header');\n  var num = 64;\n\n  var hsl = function hsl() {\n    return \"linear-gradient(135deg, hsla(\".concat(num, \",100%,75%,1) 0%,hsla(\").concat(num + 164, \" ,83%,70%,1) 50%,hsla(\").concat(num + 239, \",40%,47%,1) 100%)\");\n  }; //スクロールで変化\n\n\n  addEventListener('scroll', function (e) {\n    num += Math.floor(scrollY % 10);\n    header.style.backgroundImage = hsl();\n  }); //時間で変化\n\n  var timeColor = function timeColor() {\n    requestAnimationFrame(timeColor);\n    num += .3;\n    header.style.backgroundImage = hsl();\n  };\n\n  timeColor();\n};\n\n//# sourceURL=webpack://aaa/./src/js/hsla.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dark_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark.js */ \"./src/js/dark.js\");\n/* harmony import */ var _startload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startload.js */ \"./src/js/startload.js\");\n/* harmony import */ var _triangle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triangle.js */ \"./src/js/triangle.js\");\n/* harmony import */ var _hsla_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hsla.js */ \"./src/js/hsla.js\");\n/* harmony import */ var _skill_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skill.js */ \"./src/js/skill.js\");\n/* harmony import */ var _scrollsection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollsection.js */ \"./src/js/scrollsection.js\");\n\n\n\n\n\n\n\n\n(0,_dark_js__WEBPACK_IMPORTED_MODULE_0__.darkFunction)();\n(0,_startload_js__WEBPACK_IMPORTED_MODULE_1__.startloadFunction)();\n(0,_triangle_js__WEBPACK_IMPORTED_MODULE_2__.triangleFunction)();\n(0,_hsla_js__WEBPACK_IMPORTED_MODULE_3__.hslaFunction)();\n(0,_skill_js__WEBPACK_IMPORTED_MODULE_4__.skillFunction)();\n(0,_scrollsection_js__WEBPACK_IMPORTED_MODULE_5__.scrollsectionFunction)();\n\n//# sourceURL=webpack://aaa/./src/js/index.js?");

/***/ }),

/***/ "./src/js/scrollsection.js":
/*!*********************************!*\
  !*** ./src/js/scrollsection.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollsectionFunction\": function() { return /* binding */ scrollsectionFunction; }\n/* harmony export */ });\n\n\nvar scrollsectionFunction = function scrollsectionFunction() {\n  var secHeight = function secHeight() {\n    var sec = document.querySelectorAll('[data-scrlsec]');\n    sec.forEach(function (data) {\n      data.style.minHeight = window.innerHeight + 'px';\n    });\n  };\n\n  var options = {\n    root: null,\n    rootMargin: '0% 0px',\n    threshold: 0\n  };\n\n  var intersect = function intersect(elms) {\n    elms.forEach(function (elm) {\n      if (elm.isIntersecting) {\n        window.scroll({\n          top: elm.target.offsetTop,\n          behavior: 'smooth'\n        });\n      }\n    });\n  };\n\n  var observer = new IntersectionObserver(intersect, options);\n  var boxes = document.querySelectorAll('[data-scrlsec]');\n  boxes.forEach(function (box) {\n    observer.observe(box); //引数boxと関数intersectのコールバック引数elmsは同じもの\n  });\n  window.addEventListener('load', secHeight);\n  window.addEventListener('resize', secHeight);\n};\n\n//# sourceURL=webpack://aaa/./src/js/scrollsection.js?");

/***/ }),

/***/ "./src/js/skill.js":
/*!*************************!*\
  !*** ./src/js/skill.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"skillFunction\": function() { return /* binding */ skillFunction; }\n/* harmony export */ });\n\n/**\n * スキルセットのグラフをアニメーション化\n */\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar skillFunction = function skillFunction() {\n  var datas = document.querySelectorAll('[data-skill]');\n\n  var _iterator = _createForOfIteratorHelper(datas),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var data = _step.value;\n      var val = data.getAttribute('data-skillval');\n      var i = 0;\n      var ccc = setInterval(function () {\n        data.style.width = \"\".concat(i, \"%\");\n        data.innerHTML = \"\".concat(i, \"%\");\n        i < val ? i++ : clearInterval(ccc);\n      }, 20);\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n//# sourceURL=webpack://aaa/./src/js/skill.js?");

/***/ }),

/***/ "./src/js/startload.js":
/*!*****************************!*\
  !*** ./src/js/startload.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startloadFunction\": function() { return /* binding */ startloadFunction; }\n/* harmony export */ });\n\n/**\n * サイトを開くとローディングが開始される。\n */\n\nvar startloadFunction = function startloadFunction() {\n  var loader = document.querySelector('[data-loader=\"loader\"]');\n  addEventListener('load', function (e) {\n    var loadFn = function loadFn() {\n      loader.classList.add('is-out');\n      loader.classList.remove('is-show');\n    };\n\n    setTimeout(loadFn, 2000);\n  });\n};\n\n//# sourceURL=webpack://aaa/./src/js/startload.js?");

/***/ }),

/***/ "./src/js/triangle.js":
/*!****************************!*\
  !*** ./src/js/triangle.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"triangleFunction\": function() { return /* binding */ triangleFunction; }\n/* harmony export */ });\n\n/**\n * Three.jsを学ぶのに良いサイト\n * https://threejs.org/\n * https://developer.mozilla.org/ja/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js\n * https://ics.media/tutorial-three/\n * http://www.mwsoft.jp/programming/webgl/geometry.html\n */\n\nvar triangleFunction = function triangleFunction() {\n  var canvasWidth = innerWidth;\n  var canvasHeight = innerHeight; //レンダラーの設定\n\n  var renderer = new THREE.WebGLRenderer({\n    antialias: true,\n    alpha: true\n  });\n  renderer.setSize(canvasWidth, canvasHeight);\n  renderer.setClearColor(0xffffff, 0);\n  document.querySelector('#triangleLoad').appendChild(renderer.domElement); //シーンの設定\n\n  var scene = new THREE.Scene(); //カメラの設定\n\n  var camera = new THREE.PerspectiveCamera(70, canvasWidth / canvasHeight);\n  camera.position.z = 50;\n  scene.add(camera); //三角錐\n  //ジオメトリの作成（シェイプの作成）\n\n  var geometry = new THREE.ConeGeometry(8, 16, 3); //ジオメトリの作成：マテリアル（表面を覆うもの）\n\n  var material = new THREE.MeshBasicMaterial({\n    color: 0xffff00,\n    wireframe: true\n  }); //ジオメトリの作成：メッシュ（マテリアルをシェイプに適用する）\n\n  var cone = new THREE.Mesh(geometry, material); //ジオメトリの作成：シーンに適用\n\n  scene.add(cone); //テキスト\n\n  /*const loader = new THREE.FontLoader();\n  loader.load('fonts/helvetiker_regular.typeface.json', function (font) {\n      const geometry2 = new THREE.TextGeometry('Now Loading...', {\n          size: 100,\n          font\n      })\n  });\n  const material2 = new THREE.MeshLambertMaterial({ color: 0x00886, wireframe: false })\n  const mesh2 = new THREE.Mesh(geometry2, material2);\n  scene.add(mesh2);*/\n  //レンダリング\n\n  var render = function render() {\n    requestAnimationFrame(render);\n    cone.rotation.x += 0.003;\n    cone.rotation.y += 0.01;\n    renderer.render(scene, camera);\n  };\n\n  render();\n};\n\n//# sourceURL=webpack://aaa/./src/js/triangle.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;