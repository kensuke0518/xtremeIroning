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

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/***/ (function() {

eval("\n/*anime({\n    targets: '.rect',\n    translateX: 800,\n    rotate: 360,\n    duration: 3000,\n    loop: true,\n});*/\n\n/*anime({\n    targets: '.rect',\n    translateX: [\n        { value: 250, duration: 1000, delay: 500 },\n        { value: 0, duration: 1000, delay: 500 }\n    ],\n    translateY: [\n        { value: -40, duration: 500 },\n        { value: 40, duration: 500, delay: 1000 },\n        { value: 0, duration: 500, delay: 1000 }\n    ],\n    scaleX: [\n        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },\n        { value: 1, duration: 900 },\n        { value: 4, duration: 100, delay: 500, easing: 'easeOutExpo' },\n        { value: 1, duration: 900 }\n    ],\n    scaleY: [\n        { value: [1.75, 1], duration: 500 },\n        { value: 2, duration: 50, delay: 1000, easing: 'easeOutExpo' },\n        { value: 1, duration: 450 },\n        { value: 1.75, duration: 50, delay: 1000, easing: 'easeOutExpo' },\n        { value: 1, duration: 450 }\n    ],\n    easing: 'easeOutElastic(1, .8)',\n    loop: true\n});*/\n\n/*const moveXBall = document.getElementById('rect').animate([\n    //{ 'transform': 'translate(0vw)', 'offset': 0, easing: 'ease-in-out' },\n    //{ 'transform': 'translate(40vw)', 'offset': 0.2, easing: 'ease-out' },\n    //{ 'transform': 'translate(35vw)', 'offset': 0.6, easing: 'ease-in' },\n    { 'transform': 'translate(100vw)', 'offset': 1, easing: 'ease-in-out' }\n], {\n    duration: 3000,\n    easing: 'ease',\n}\n);\nmoveXBall.play();*/\n\nvar tl = anime.timeline({\n  easing: 'easeOutExpo',\n  duration: 750,\n  loop: true\n}); // Add children\n\ntl.add({\n  targets: '.rect.square',\n  translateX: 250\n}).add({\n  targets: '.rect.circle',\n  translateX: 250\n}).add({\n  targets: '.rect.triangle',\n  translateX: 250\n});\n\n//# sourceURL=webpack://aaa/./src/js/animation.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/animation.js"]();
/******/ 	
/******/ })()
;