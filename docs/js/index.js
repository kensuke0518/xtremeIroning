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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dark_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark.js */ \"./src/js/dark.js\");\n/* harmony import */ var _startload_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startload.js */ \"./src/js/startload.js\");\n/* harmony import */ var _triangle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triangle.js */ \"./src/js/triangle.js\");\n/* harmony import */ var _hsla_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hsla.js */ \"./src/js/hsla.js\");\n/* harmony import */ var _skill_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skill.js */ \"./src/js/skill.js\");\n/* harmony import */ var _scrollsection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrollsection.js */ \"./src/js/scrollsection.js\");\n/* harmony import */ var _youtubeAPI_youtubeAPI_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./youtubeAPI/youtubeAPI.js */ \"./src/js/youtubeAPI/youtubeAPI.js\");\n\n\n\n\n\n\n\n\n\n(0,_dark_js__WEBPACK_IMPORTED_MODULE_0__.darkFunction)();\n(0,_startload_js__WEBPACK_IMPORTED_MODULE_1__.startloadFunction)();\n(0,_triangle_js__WEBPACK_IMPORTED_MODULE_2__.triangleFunction)();\n(0,_hsla_js__WEBPACK_IMPORTED_MODULE_3__.hslaFunction)();\n(0,_skill_js__WEBPACK_IMPORTED_MODULE_4__.skillFunction)();\n(0,_scrollsection_js__WEBPACK_IMPORTED_MODULE_5__.scrollsectionFunction)();\n(0,_youtubeAPI_youtubeAPI_js__WEBPACK_IMPORTED_MODULE_6__.youtubeAPIFunction)();\n\n//# sourceURL=webpack://aaa/./src/js/index.js?");

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

/***/ }),

/***/ "./src/js/youtubeAPI/youtubeAPI.js":
/*!*****************************************!*\
  !*** ./src/js/youtubeAPI/youtubeAPI.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"youtubeAPIFunction\": function() { return /* binding */ youtubeAPIFunction; }\n/* harmony export */ });\n\n/**\n * APIについて\n * https://developers.google.com/youtube/v3/docs?hl=ja\n */\n\n/**\n * Githubの環境変数を利用してAPIキーを隠したい\n * https://qiita.com/sayama0402/items/f019cac4bcb7d420505a\n * https://qiita.com/inouet/items/c7d39ac4641c05eec4a0\n * https://knowledge.sakura.ad.jp/23478/\n * https://qiita.com/HeRo/items/e2d5e3bc3dbe810f0482\n * https://rcmdnk.com/blog/2020/04/23/computer-git-github/\n * .env関係\n * https://h-piiice16.hatenablog.com/entry/2018/09/08/131055\n * https://qiita.com/HorikawaTokiya/items/c1a476ceeab0bf644311\n */\n//require('dotenv').config();\n//const { MY_API_KEY } = process.env;\n\nfunction _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar API_KEY = \"AIzaSyD8ETI4HMaR5X1YvR2BMkPTgHjePpL9uHs\"; //console.log(API_KEY);\n//ヒカキンの動画を検索する\n//const url = 'https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&q=HIKAKIN&key=' + API_KEY;\n//はなおでんがんの登録者数を取得する\n//const url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=UCPyNsNSTUtywkekbDdCA_8Q&key=' + API_KEY;\n//急上昇の動画を50件取得する\n//const url = 'https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&maxResults=50&chart=mostPopular&regionCode=JP&key=' + API_KEY;\n\nvar url = 'http://kwordpress.php.xdomain.jp/test.json';\nvar youtubeAPIFunction = function youtubeAPIFunction() {\n  fetch(url, {\n    mode: 'cors'\n  }).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    var youtube_api = document.querySelector('#youtube_api');\n    var jsonStr = JSON.stringify(json, null, ' '); //console.log(jsonStr);\n\n    var YoutubeBox = /*#__PURE__*/function () {\n      function YoutubeBox(id, snippet, statistics) {\n        _classCallCheck(this, YoutubeBox);\n\n        this.id = id;\n        this.title = snippet.title;\n        this.thumb = snippet.thumbnails;\n        this.channnelTitle = snippet.channelTitle;\n        this.url = 'https://www.youtube.com/watch?v=';\n      }\n\n      _createClass(YoutubeBox, [{\n        key: \"doCreate\",\n        value: function doCreate() {\n          var elmArr = ['p', 'a', 'img'];\n          var arr = [];\n          elmArr.forEach(function (cv, i) {\n            arr.push(document.createElement(elmArr[i]));\n          });\n          return arr;\n        }\n      }, {\n        key: \"idMethod\",\n        value: function idMethod() {\n          var _ref = _toConsumableArray(this.doCreate()),\n              p = _ref[0],\n              a = _ref[1];\n\n          a.setAttribute('href', this.url + this.id);\n          a.innerHTML = this.title;\n          p.appendChild(a);\n          return p;\n        }\n      }, {\n        key: \"idThumb\",\n        value: function idThumb() {\n          var _ref2 = _toConsumableArray(this.doCreate()),\n              p = _ref2[0],\n              a = _ref2[1],\n              img = _ref2[2];\n\n          img.setAttribute('src', this.thumb.high.url);\n          a.appendChild(img);\n          a.setAttribute('href', this.url + this.id);\n          p.appendChild(a);\n          return p;\n        }\n      }, {\n        key: \"idWrap\",\n        value: function idWrap(arrs) {\n          var div = document.createElement('div');\n          arrs.forEach(function (arr) {\n            return div.appendChild(arr);\n          });\n          return div;\n        }\n      }]);\n\n      return YoutubeBox;\n    }();\n\n    var items = json['items'];\n\n    var _loop = function _loop() {\n      //for (let item = 0; item < items.length;item++){\n      var data = ['id', 'snippet', 'statistics'];\n      var dataArr = []; //for (d of data) {\n\n      data.forEach(function (d) {\n        dataArr.push(items[item][d]);\n      });\n\n      var youtubeBox = _construct(YoutubeBox, dataArr);\n\n      var wrapItem = [youtubeBox.idMethod(), youtubeBox.idThumb()];\n      youtube_api.appendChild(youtubeBox.idWrap(wrapItem));\n    };\n\n    for (item in items) {\n      _loop();\n    }\n  });\n};\n\n//# sourceURL=webpack://aaa/./src/js/youtubeAPI/youtubeAPI.js?");

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