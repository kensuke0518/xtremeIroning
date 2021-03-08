/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/animation3.js":
/*!******************************!*\
  !*** ./src/js/animation3.js ***!
  \******************************/
/***/ (function() {

eval("var logo = document.getElementById('logo');\n\nfunction eee() {\n  // timelineデフォルトのパラメーターを設定\n  var timeline = anime.timeline({\n    targets: '.el',\n    direction: 'normal',\n    loop: false\n  }); // 線画部分のアニメーションを設定\n\n  timeline.add({\n    strokeDashoffset: [anime.setDashoffset, 0],\n    easing: 'easeInOutSine',\n    fill: ['transparent', 'transparent'],\n    // 塗りつぶしを透明のままにする\n    duration: 3000,\n    delay: function delay(el, i) {\n      return i * 150;\n    }\n  }); // 塗りつぶしのアニメーションを設定\n\n  /*timeline.add({\n      easing: 'easeInOutSine',\n      fill: ['transparent', '#000000'],\n      duration: 500\n  }, '-=200')*/\n  // ひとつ前のアニメーションが終わる200ミリ秒前に開始する\n}\n\n;\neee();\n\n//# sourceURL=webpack://aaa/./src/js/animation3.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/animation3.js"]();
/******/ 	
/******/ })()
;