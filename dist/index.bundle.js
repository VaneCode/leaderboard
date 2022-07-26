"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhellomicroverse"] = self["webpackChunkhellomicroverse"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_createScoresUl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createScoresUl */ \"./src/modules/createScoresUl.js\");\n\r\n\r\n\r\nwindow.addEventListener('load', () => {\r\n  (0,_modules_createScoresUl__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://hellomicroverse/./src/index.js?");

/***/ }),

/***/ "./src/modules/createScoreLi.js":
/*!**************************************!*\
  !*** ./src/modules/createScoreLi.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Function to generate an li element\r\n  const createScoreLi = (score) => {\r\n    // Create elements\r\n    const scoreLi = document.createElement('li');\r\n    const pScore = document.createElement('p');\r\n   \r\n    // Add text to elements\r\n    pScore.textContent = `\"${score.name}\":${score.score}`;\r\n\r\n    // Build li\r\n    scoreLi.appendChild(pScore);\r\n    \r\n    return scoreLi;\r\n  }\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createScoreLi);\n\n//# sourceURL=webpack://hellomicroverse/./src/modules/createScoreLi.js?");

/***/ }),

/***/ "./src/modules/createScoresUl.js":
/*!***************************************!*\
  !*** ./src/modules/createScoresUl.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ \"./src/modules/domElements.js\");\n/* harmony import */ var _createScoreLi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createScoreLi */ \"./src/modules/createScoreLi.js\");\n/* harmony import */ var _dataClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataClass */ \"./src/modules/dataClass.js\");\n\r\n\r\n\r\n\r\nconst createScoresUl = () =>{\r\n    _dataClass__WEBPACK_IMPORTED_MODULE_2__.scores.forEach(score => {\r\n        _domElements__WEBPACK_IMPORTED_MODULE_0__.ulRecentScores.appendChild((0,_createScoreLi__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(score));\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createScoresUl);\n\n//# sourceURL=webpack://hellomicroverse/./src/modules/createScoresUl.js?");

/***/ }),

/***/ "./src/modules/dataClass.js":
/*!**********************************!*\
  !*** ./src/modules/dataClass.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scores\": () => (/* binding */ scores)\n/* harmony export */ });\nconst scores =\r\n[\r\n    {name: 'Name', score:100},\r\n    {name: 'Name', score:20},\r\n    {name: 'Name', score:50},\r\n    {name: 'Name', score:78},\r\n    {name: 'Name', score:125},\r\n    {name: 'Name', score:77},\r\n    {name: 'Name', score:42},\r\n];\r\n\n\n//# sourceURL=webpack://hellomicroverse/./src/modules/dataClass.js?");

/***/ }),

/***/ "./src/modules/domElements.js":
/*!************************************!*\
  !*** ./src/modules/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ulRecentScores\": () => (/* binding */ ulRecentScores)\n/* harmony export */ });\n// -------------------GET DOM ELEMENTS-----------------//\r\nconst ulRecentScores = document.querySelector('.ulRecentScores');\n\n//# sourceURL=webpack://hellomicroverse/./src/modules/domElements.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);