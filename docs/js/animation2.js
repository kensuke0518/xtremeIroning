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

/***/ "./src/js/animation2.js":
/*!******************************!*\
  !*** ./src/js/animation2.js ***!
  \******************************/
/***/ (function() {

eval("function init() {\n  var slider = document.querySelector(\".slider\");\n  var nextBtn = slider.querySelector(\".slider .nav .next\");\n  var prevBtn = slider.querySelector(\".slider .nav .prev\");\n  var items = slider.querySelectorAll(\".slider .item\");\n  var current = 0;\n  items.forEach(function (item) {\n    var textWrapper = item.querySelector(\".wrap\");\n    textWrapper.innerHTML = textWrapper.textContent.replace(/\\S/g, \"<span class='letter'>$&</span>\");\n  });\n\n  function anim(current, next, callback) {\n    var currentImgs = current.querySelectorAll(\".img\");\n    var currentText = current.querySelectorAll(\".content .letter\");\n    var nextImgs = next.querySelectorAll(\".img\");\n    var nextText = next.querySelectorAll(\".content .letter\");\n    var duration = 400;\n    var offset = \"-=\" + 300;\n    var imgOffset = duration * .8;\n    var tl = anime.timeline({\n      easing: \"easeInOutQuint\",\n      duration: duration,\n      complete: callback\n    }); // Add children\n\n    tl.add({\n      targets: currentText,\n      translateY: [0, '-.75em'],\n\n      /*clipPath: ['polygon(0 0, 100% 0, 100% 100%, 0% 100%)', 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'],*/\n      opacity: [1, 0],\n      easing: \"easeInQuint\",\n      duration: 600,\n      delay: function delay(el, i) {\n        return 10 * (i + 1);\n      }\n    }).add({\n      targets: currentImgs[0],\n      translateY: -600,\n      //rotate: [0, '-15deg'],\n      opacity: [1, 0],\n      easing: \"easeInCubic\"\n    }, offset).add({\n      targets: currentImgs[1],\n      translateY: -600,\n      //rotate: [0, '15deg'],\n      opacity: [1, 0],\n      easing: \"easeInCubic\"\n    }, \"-=\" + imgOffset).add({\n      targets: currentImgs[2],\n      translateY: -600,\n      //rotate: [0, '-15deg'],\n      opacity: [1, 0],\n      easing: \"easeInCubic\"\n    }, \"-=\" + imgOffset).add({\n      targets: currentImgs[3],\n      translateY: -600,\n      //rotate: [0, '15deg'],\n      opacity: [1, 0],\n      easing: \"easeInCubic\"\n    }, \"-=\" + imgOffset).add({\n      targets: current,\n      opacity: 0,\n      duration: 10,\n      easing: \"easeInCubic\"\n    }).add({\n      targets: next,\n      opacity: 1,\n      duration: 10\n    }, offset).add({\n      targets: nextImgs[0],\n      translateY: [600, 0],\n      rotate: ['15deg', 0],\n      opacity: [0, 1],\n      easing: \"easeOutCubic\"\n    }, offset).add({\n      targets: nextImgs[1],\n      translateY: [600, 0],\n      rotate: ['-15deg', 0],\n      opacity: [0, 1],\n      easing: \"easeOutCubic\"\n    }, \"-=\" + imgOffset).add({\n      targets: nextImgs[2],\n      translateY: [600, 0],\n      rotate: ['15deg', 0],\n      opacity: [0, 1],\n      easing: \"easeOutCubic\"\n    }, \"-=\" + imgOffset).add({\n      targets: nextImgs[3],\n      translateY: [600, 0],\n      rotate: ['-15deg', 0],\n      opacity: [0, 1],\n      easing: \"easeOutCubic\"\n    }, \"-=\" + imgOffset).add({\n      targets: nextText,\n      translateY: ['.75em', 0],\n\n      /*clipPath: ['polygon(0 0, 100% 0, 100% 0, 0 0)','polygon(0 0, 100% 0, 100% 100%, 0% 100%)'],*/\n      opacity: [0, 1],\n      easing: \"easeOutQuint\",\n      duration: 600,\n      delay: function delay(el, i) {\n        return 10 * (i + 1);\n      }\n    }, offset);\n  }\n\n  var isPlaying = false; //動作中の操作を受付拒否か可能？trueな拒否\n\n  function updateSlider(newIndex) {\n    var currentItem = items[current]; //現在表示中の要素\n\n    var newItem = items[newIndex]; //nextボタンを押した際の\n\n    function callback() {\n      currentItem.classList.remove(\"is-active\");\n      newItem.classList.add(\"is-active\");\n      current = newIndex;\n      isPlaying = false;\n    }\n\n    anim(currentItem, newItem, callback);\n  }\n\n  function next() {\n    if (isPlaying) return;\n    isPlaying = true;\n    var newIndex = current === items.length - 1 ? 0 : current + 1;\n    updateSlider(newIndex);\n  }\n\n  function prev() {\n    if (isPlaying) return;\n    isPlaying = true;\n    var newIndex = current === 0 ? items.length - 1 : current - 1;\n    updateSlider(newIndex);\n  }\n\n  nextBtn.onclick = next;\n  prevBtn.onclick = prev;\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", init);\n\n//# sourceURL=webpack://aaa/./src/js/animation2.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/animation2.js"]();
/******/ 	
/******/ })()
;