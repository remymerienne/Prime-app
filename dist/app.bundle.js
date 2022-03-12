/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _containers_Structure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../containers/Structure */ \"./src/containers/Structure.js\");\n/* harmony import */ var _containers_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../containers/Login */ \"./src/containers/Login.js\");\n/* harmony import */ var _containers_PrimeNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/PrimeNumber */ \"./src/containers/PrimeNumber.js\");\n\n\n\nnew _containers_Structure__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nnew _containers_Login__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar inputUser = document.getElementById('username');\ninputUser.addEventListener('keydown', function (e) {\n  if (e.key === 'Enter') {\n    if (e.target.value === 'remy') {\n      new _containers_PrimeNumber__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n    }\n  }\n});\n\n//# sourceURL=webpack://prime-app/./src/app/app.js?");

/***/ }),

/***/ "./src/containers/Login.js":
/*!*********************************!*\
  !*** ./src/containers/Login.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var _views_LoginUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/LoginUI */ \"./src/views/LoginUI.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    _classCallCheck(this, _default);\n\n    this.displayLoginForm();\n  }\n\n  _createClass(_default, [{\n    key: \"displayLoginForm\",\n    value: function displayLoginForm() {\n      var main = document.querySelector('main.js-main');\n      main.innerHTML = (0,_views_LoginUI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://prime-app/./src/containers/Login.js?");

/***/ }),

/***/ "./src/containers/PrimeNumber.js":
/*!***************************************!*\
  !*** ./src/containers/PrimeNumber.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var _views_PrimeNumberUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/PrimeNumberUI */ \"./src/views/PrimeNumberUI.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    var _this = this;\n\n    _classCallCheck(this, _default);\n\n    var main = document.querySelector('main.js-main');\n    main.innerHTML = (0,_views_PrimeNumberUI__WEBPACK_IMPORTED_MODULE_0__.primeNumberBlockUI)();\n    var elementListened = document.getElementById('prime-up-to');\n    elementListened.addEventListener('keyup', function (e) {\n      _this.numberUpTo = e.target.value;\n\n      _this.displayPrimeNumberList();\n    });\n  }\n\n  _createClass(_default, [{\n    key: \"getPrimeNumberArray\",\n    value: function getPrimeNumberArray() {\n      var isPrimeNumber = function isPrimeNumber(number) {\n        for (var i = 2; i <= Math.sqrt(number); i++) {\n          if (number % i === 0) return false;\n        }\n\n        return true;\n      };\n\n      var primeNumberArray = [];\n\n      for (var i = 2; i <= this.numberUpTo; i++) {\n        if (isPrimeNumber(i)) primeNumberArray.push(i);\n      }\n\n      return primeNumberArray;\n    }\n  }, {\n    key: \"displayPrimeNumberList\",\n    value: function displayPrimeNumberList() {\n      var view = (0,_views_PrimeNumberUI__WEBPACK_IMPORTED_MODULE_0__.primeNumberListUI)(this.getPrimeNumberArray());\n      document.querySelector('div.js-prime').innerHTML = view;\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://prime-app/./src/containers/PrimeNumber.js?");

/***/ }),

/***/ "./src/containers/Structure.js":
/*!*************************************!*\
  !*** ./src/containers/Structure.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _default)\n/* harmony export */ });\n/* harmony import */ var _views_StructureUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/StructureUI */ \"./src/views/StructureUI.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar _default = /*#__PURE__*/function () {\n  function _default() {\n    _classCallCheck(this, _default);\n\n    this.displayDom();\n  }\n\n  _createClass(_default, [{\n    key: \"displayDom\",\n    value: function displayDom() {\n      document.body.innerHTML = (0,_views_StructureUI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    }\n  }]);\n\n  return _default;\n}();\n\n\n\n//# sourceURL=webpack://prime-app/./src/containers/Structure.js?");

/***/ }),

/***/ "./src/views/LoginUI.js":
/*!******************************!*\
  !*** ./src/views/LoginUI.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return \"\\n    <div class=\\\"modal\\\">\\n      <div class=\\\"left-side\\\">\\n        <img class=\\\"left-side-img\\\" src=\\\"../src/images/sky.svg\\\" alt=\\\"\\\">\\n      </div>\\n      <div class=\\\"right-side\\\">\\n        <i class=\\\"right-side-img fa-solid fa-house-user\\\"></i>\\n        <div class=\\\"layout-html-only\\\">\\n          <form class=\\\"form\\\" novalidate>\\n            <div class=\\\"form-email\\\">\\n              <i class=\\\"form-email-logo fa-solid fa-envelope\\\"></i>\\n              <label for=\\\"mail\\\">Username or Email Address</label>\\n              <input class=\\\"form-email-input\\\" id=\\\"username\\\">\\n            </div>\\n            <div class=\\\"form-password\\\">\\n              <i class=\\\"form-password-logo-open fa-solid fa-eye\\\"></i>\\n              <i class=\\\"form-password-logo-close fa-solid fa-eye-slash\\\"></i>\\n              <label for=\\\"pass\\\">Password</label>\\n              <input class=\\\"form-password-input\\\" id=\\\"pass\\\">\\n            </div>\\n            <div class=\\\"form-low-bloc\\\">\\n              <div class=\\\"form-remember\\\">\\n                <input class=\\\"form-remember-input\\\" type=\\\"checkbox\\\" id=\\\"scale\\\">\\n                <label class=\\\"form-remember-label\\\" for=\\\"scale\\\">Remember Me</label>\\n              </div>\\n              <button class=\\\"button-login\\\" type=\\\"button\\\">Log in</button>\\n            </div>\\n          </form>\\n          <p class=\\\"lost-password\\\">Lost your password?</p>\\n        </div>\\n      </div>\\n    </div>\\n  \";\n});\n\n//# sourceURL=webpack://prime-app/./src/views/LoginUI.js?");

/***/ }),

/***/ "./src/views/PrimeNumberUI.js":
/*!************************************!*\
  !*** ./src/views/PrimeNumberUI.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"primeNumberBlockUI\": () => (/* binding */ primeNumberBlockUI),\n/* harmony export */   \"primeNumberListUI\": () => (/* binding */ primeNumberListUI)\n/* harmony export */ });\nvar primeNumberBlockUI = function primeNumberBlockUI() {\n  return \"\\n    <section class=\\\"prime\\\">\\n      <header class=\\\"prime-header\\\">\\n        <h2>G\\xE9n\\xE9rateur de Nombres Premiers</h2>\\n      </header>\\n      <form class=\\\"prime-form\\\" novalidate>\\n        <label for=\\\"prime-up-to\\\">Calculer les nombres premiers jusqu'\\xE0 </label>\\n        <input class=\\\"prime-form-input\\\" id=\\\"prime-up-to\\\" data-testid=\\\"js-input\\\" type=\\\"number\\\">\\n      </form>\\n      <div class=\\\"js-prime\\\"></div>\\n    </section>\\n  \";\n};\nvar primeNumberListUI = function primeNumberListUI(numberArray) {\n  var getPrimeNumberRow = function getPrimeNumberRow() {\n    return numberArray.map(function (e) {\n      return e;\n    }).join(' - ');\n  };\n\n  var getHowMany = function getHowMany() {\n    return numberArray.length.toLocaleString();\n  };\n\n  if (numberArray.length >= 1) {\n    return \"\\n      <div class=\\\"prime-info\\\">\\n        <p>\".concat(getHowMany(), \" nombres trouv\\xE9es</p>\\n        <a href=\\\"../coverage/lcov-report/index.html\\\" target=\\\"_blank\\\">Test coverage</a>\\n      </div>\\n      <p class=\\\"prime-list\\\" data-testid=\\\"input-valid\\\">\").concat(getPrimeNumberRow(), \"</p>\\n    \");\n  } else {\n    return \"\\n      <div data-testid=\\\"input-null\\\"></div>\\n    \";\n  }\n};\n\n//# sourceURL=webpack://prime-app/./src/views/PrimeNumberUI.js?");

/***/ }),

/***/ "./src/views/StructureUI.js":
/*!**********************************!*\
  !*** ./src/views/StructureUI.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return \"\\n    <div class=\\\"container\\\">\\n      <div class=\\\"page\\\">\\n        <header class=\\\"header\\\">\\n          <h1>Hello world</h1>\\n          <i class=\\\"header-logo fas fa-seedling\\\"></i>\\n        </header>\\n        <main class=\\\"js-main\\\"></main>\\n      </div>\\n    </div>\\n  \";\n});\n\n//# sourceURL=webpack://prime-app/./src/views/StructureUI.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/app.js");
/******/ 	
/******/ })()
;