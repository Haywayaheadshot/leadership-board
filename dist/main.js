"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkleadership_board"] = self["webpackChunkleadership_board"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/my-font.woff2 */ \"./src/font/my-font.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/my-font.woff */ \"./src/font/my-font.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\r\\n  font-family: \\\"fontAwesome\\\";\\r\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\"), url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff\\\");\\r\\n  font-weight: 900;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(24%, rgb(254, 133, 107)), color-stop(62%, rgb(35, 171, 17)));\\r\\n}\\r\\n\\r\\n.success-message-p {\\r\\n  background-color: #0291f7;\\r\\n  padding: 10px 15px;\\r\\n  color: #fff;\\r\\n  -webkit-box-shadow: 0 0 5px #fff;\\r\\n  box-shadow: 0 0 5px #fff;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.spinner-section {\\r\\n  display: none;\\r\\n  -webkit-box-pack: center;\\r\\n  -ms-flex-pack: center;\\r\\n  justify-content: center;\\r\\n  padding-top: 10px;\\r\\n}\\r\\n\\r\\n.spinner-section-view {\\r\\n  display: -webkit-box;\\r\\n  display: flex;\\r\\n  -webkit-box-pack: center;\\r\\n  -ms-flex-pack: center;\\r\\n  justify-content: center;\\r\\n  padding-top: 10px;\\r\\n}\\r\\n\\r\\n.loading-circle {\\r\\n  border: 5px solid #0291f7;\\r\\n  border-radius: 50%;\\r\\n  height: 30px;\\r\\n  width: 30px;\\r\\n  border-top: 5px solid #fff;\\r\\n  -webkit-animation: spin 0.5s linear infinite;\\r\\n  animation: spin 0.5s linear infinite;\\r\\n}\\r\\n\\r\\n.score-board-name,\\r\\n.score-board-score {\\r\\n  width: inherit;\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n@-webkit-keyframes spin {\\r\\n  0% {\\r\\n    -webkit-transform: rotate(0deg);\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    -webkit-transform: rotate(360deg);\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes spin {\\r\\n  0% {\\r\\n    -webkit-transform: rotate(0deg);\\r\\n    transform: rotate(0deg);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    -webkit-transform: rotate(360deg);\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n.loading-text {\\r\\n  margin: 0;\\r\\n  padding-right: 20px;\\r\\n  color: #000;\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.font {\\r\\n  font-family: arial, helvetica, sans-serif;\\r\\n  font-style: normal;\\r\\n}\\r\\n\\r\\n.app-header {\\r\\n  font-size: 4rem;\\r\\n  margin-top: 5vh;\\r\\n  text-align: center;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.add-score-text,\\r\\n.recent-scores-text {\\r\\n  color: #fff;\\r\\n  font-weight: 200;\\r\\n}\\r\\n\\r\\n.add-score-text {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.recent-scores-text {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.main-content {\\r\\n  display: -webkit-box;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-box-direction: normal;\\r\\n  -ms-flex-direction: column;\\r\\n  flex-direction: column;\\r\\n  padding: 0 3vw;\\r\\n}\\r\\n\\r\\n.add-score {\\r\\n  display: -webkit-box;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: vertical;\\r\\n  -webkit-box-direction: normal;\\r\\n  -ms-flex-direction: column;\\r\\n  flex-direction: column;\\r\\n  -webkit-box-align: center;\\r\\n  -ms-flex-align: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: grid;\\r\\n  gap: 8px;\\r\\n}\\r\\n\\r\\n.add-button-div {\\r\\n  display: -webkit-box;\\r\\n  display: flex;\\r\\n  -webkit-box-pack: end;\\r\\n  -ms-flex-pack: end;\\r\\n  justify-content: flex-end;\\r\\n}\\r\\n\\r\\n.add-button-div .submit-score {\\r\\n  border: 1px solid #0291f7;\\r\\n  -webkit-box-shadow: 5px 5px 5px #000;\\r\\n  box-shadow: 5px 5px 5px #000;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.add-button-div .submit-score:hover {\\r\\n  background-color: #ea3836;\\r\\n  border: 2px solid #000;\\r\\n  -webkit-box-shadow: 5px 5px 5px #fff;\\r\\n  box-shadow: 5px 5px 5px #fff;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.add-button-div .submit-score:active {\\r\\n  background-color: #ea3836;\\r\\n  border: 2px solid #000;\\r\\n  -webkit-box-shadow: 5px 5px 5px #000;\\r\\n  box-shadow: 5px 5px 5px #000;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.score-keeper {\\r\\n  display: grid;\\r\\n\\r\\n  /* max-width: 60vw; */\\r\\n}\\r\\n\\r\\n.score-keeper-header {\\r\\n  display: -webkit-box;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: horizontal;\\r\\n  -webkit-box-direction: normal;\\r\\n  -ms-flex-direction: row;\\r\\n  flex-direction: row;\\r\\n  -webkit-box-pack: justify;\\r\\n  -ms-flex-pack: justify;\\r\\n  justify-content: space-between;\\r\\n  padding: 0 3vw;\\r\\n}\\r\\n\\r\\n.refresh-button {\\r\\n  margin: 20px 0;\\r\\n  border: 2px solid #000;\\r\\n  -webkit-box-shadow: 5px 5px 5px #000;\\r\\n  box-shadow: 5px 5px 5px #000;\\r\\n  border-radius: 20px;\\r\\n}\\r\\n\\r\\n.refresh-button:hover {\\r\\n  background-color: #ea3836;\\r\\n  border: 2px solid #000;\\r\\n  -webkit-box-shadow: 5px 5px 5px #fff;\\r\\n  box-shadow: 5px 5px 5px #fff;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.refresh-button:active {\\r\\n  background-color: #ea3836;\\r\\n  border: 2px solid #000;\\r\\n  -webkit-box-shadow: 5px 5px 5px #000;\\r\\n  box-shadow: 5px 5px 5px #000;\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.score-board-ul {\\r\\n  list-style: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  border: 3px solid #fff;\\r\\n  -webkit-box-shadow: 0 0 30px #000;\\r\\n  box-shadow: 0 0 30px #000;\\r\\n  max-width: 90vw;\\r\\n}\\r\\n\\r\\n.score-board-li {\\r\\n  display: -webkit-box;\\r\\n  display: flex;\\r\\n  -webkit-box-orient: horizontal;\\r\\n  -webkit-box-direction: normal;\\r\\n  -ms-flex-direction: column;\\r\\n  flex-direction: column;\\r\\n  -webkit-box-pack: start;\\r\\n  -ms-flex-pack: start;\\r\\n  justify-content: flex-start;\\r\\n  padding: 0 3vw;\\r\\n  font-weight: 200;\\r\\n  font-size: 1.5rem;\\r\\n  color: #000;\\r\\n  width: inherit;\\r\\n}\\r\\n\\r\\n.score-board-li:nth-child(odd) {\\r\\n  background-color: #f5f5f5;\\r\\n  color: #ea3836;\\r\\n}\\r\\n\\r\\n.score-board-li:nth-child(even) {\\r\\n  color: #fff;\\r\\n}\\r\\n\\r\\n.score-board-score {\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.error-message {\\r\\n  display: none;\\r\\n  background-color: red;\\r\\n  font-size: 18px;\\r\\n  padding: 0 10px;\\r\\n  text-align: center;\\r\\n  color: #f5f5f5;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.value-inputs::-webkit-input-placeholder {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.value-inputs::-moz-placeholder {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.value-inputs::-ms-input-placeholder {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.value-inputs:-ms-input-placeholder {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.value-inputs::placeholder {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n@media screen and (min-width: 768px) {\\r\\n  .app-header {\\r\\n    font-size: 6rem;\\r\\n    text-align: left;\\r\\n    padding-left: 4vw;\\r\\n  }\\r\\n\\r\\n  .main-content {\\r\\n    -webkit-box-orient: horizontal;\\r\\n    -webkit-box-direction: reverse;\\r\\n    -ms-flex-direction: row-reverse;\\r\\n    flex-direction: row-reverse;\\r\\n    -webkit-box-pack: end;\\r\\n    -ms-flex-pack: end;\\r\\n    justify-content: flex-end;\\r\\n    gap: 10vw;\\r\\n    padding-left: 10vw;\\r\\n  }\\r\\n\\r\\n  .score-keeper {\\r\\n    min-width: 35vw;\\r\\n  }\\r\\n\\r\\n  .refresh-button {\\r\\n    height: 30px;\\r\\n    margin: 40px 0;\\r\\n    border: 2px solid #000;\\r\\n    -webkit-box-shadow: 5px 5px 5px #000;\\r\\n    box-shadow: 5px 5px 5px #000;\\r\\n  }\\r\\n\\r\\n  .form {\\r\\n    min-width: 15vw;\\r\\n  }\\r\\n\\r\\n  .add-score-text {\\r\\n    font-size: 5rem;\\r\\n  }\\r\\n\\r\\n  .recent-scores-text {\\r\\n    font-size: 2rem;\\r\\n  }\\r\\n\\r\\n  .value-inputs {\\r\\n    min-width: 30vw;\\r\\n    min-height: 5vh;\\r\\n    font-size: 1rem;\\r\\n    font-weight: 700;\\r\\n    padding-left: 2vw;\\r\\n  }\\r\\n\\r\\n  .value-inputs::-webkit-input-placeholder {\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  .value-inputs::-moz-placeholder {\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  .value-inputs::-ms-input-placeholder {\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  .value-inputs:-ms-input-placeholder {\\r\\n    text-align: center;\\r\\n  }\\r\\n\\r\\n  .value-inputs::placeholder {\\r\\n    text-align: center;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://leadership-board/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://leadership-board/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://leadership-board/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://leadership-board/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://leadership-board/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://leadership-board/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://leadership-board/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://leadership-board/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://leadership-board/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://leadership-board/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://leadership-board/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_Functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Functions.js */ \"./src/modules/Functions.js\");\n\r\n\r\n\r\n\r\nconst submitScore = document.querySelector('.submit-score');\r\nconst refreshButton = document.querySelector('.refresh-button');\r\nconst errorMessage = document.querySelector('.error-message');\r\n\r\nsubmitScore.addEventListener('click', (event) => {\r\n  event.preventDefault();\r\n  if (document.getElementById('name').value === '' || document.getElementById('score').value === '') {\r\n    errorMessage.style.display = 'block';\r\n  } else {\r\n    errorMessage.style.display = 'none';\r\n    (0,_modules_Functions_js__WEBPACK_IMPORTED_MODULE_1__.createScore)();\r\n  }\r\n});\r\n\r\ndocument.addEventListener('keypress', (event) => {\r\n  if (event.keyCode === 13 || event.which === 13) {\r\n    event.preventDefault();\r\n    if (document.getElementById('name').value === '' || document.getElementById('score').value === '') {\r\n      errorMessage.style.display = 'block';\r\n    } else {\r\n      errorMessage.style.display = 'none';\r\n      (0,_modules_Functions_js__WEBPACK_IMPORTED_MODULE_1__.createScore)();\r\n    }\r\n  }\r\n});\r\n\r\nwindow.onload = () => {\r\n  (0,_modules_Functions_js__WEBPACK_IMPORTED_MODULE_1__.displayScores)();\r\n};\r\n\r\nrefreshButton.addEventListener('click', (event) => {\r\n  event.preventDefault();\r\n  (0,_modules_Functions_js__WEBPACK_IMPORTED_MODULE_1__.refreshPage)();\r\n});\n\n//# sourceURL=webpack://leadership-board/./src/index.js?");

/***/ }),

/***/ "./src/modules/Constructor.js":
/*!************************************!*\
  !*** ./src/modules/Constructor.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddScores)\n/* harmony export */ });\nclass AddScores {\r\n  constructor(name, score) {\r\n    this.name = name;\r\n    this.score = score;\r\n  }\r\n\r\n  getScores = () => {\r\n    let dataStored = [];\r\n    let scores = [];\r\n    if (localStorage.getItem('scores')) {\r\n      dataStored = localStorage.getItem('scores');\r\n      scores = JSON.parse(dataStored);\r\n    }\r\n    return scores;\r\n  }\r\n\r\n  addScore = () => {\r\n    const scores = this.getScores();\r\n    scores.push(this);\r\n    localStorage.setItem('scores', JSON.stringify(scores));\r\n  }\r\n}\n\n//# sourceURL=webpack://leadership-board/./src/modules/Constructor.js?");

/***/ }),

/***/ "./src/modules/Functions.js":
/*!**********************************!*\
  !*** ./src/modules/Functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createScore\": () => (/* binding */ createScore),\n/* harmony export */   \"displayScores\": () => (/* binding */ displayScores),\n/* harmony export */   \"refreshPage\": () => (/* binding */ refreshPage)\n/* harmony export */ });\n/* harmony import */ var _Constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Constructor.js */ \"./src/modules/Constructor.js\");\n\r\n\r\nconst scoreBoard = document.querySelector('.score-board-ul');\r\nconst nameInput = document.querySelector('#name');\r\nconst scoreInput = document.querySelector('#score');\r\n\r\nconst createScore = async () => {\r\n  const name = nameInput.value;\r\n  const score = scoreInput.value;\r\n  const newScoresInput = new _Constructor_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](name, score);\r\n  newScoresInput.addScore();\r\n\r\n  const newScoreLi = document.createElement('li');\r\n\r\n  newScoreLi.className = 'score-board-li';\r\n  scoreBoard.appendChild(newScoreLi);\r\n  newScoreLi.innerHTML = `\r\n    <p class=\"score-board-name font\">${newScoresInput.name}:</p>\r\n    <p class=\"score-board-score font\">${newScoresInput.score}</p>\r\n    `;\r\n  // post new name and score to fetch API?\r\n  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1000/scores/', {\r\n    method: 'post',\r\n    headers: {\r\n      Accept: 'application/json',\r\n      'Content-Type': 'application/json',\r\n    },\r\n    // make sure to serialize your JSON body\r\n    body: JSON.stringify({\r\n      user: nameInput.value,\r\n      score: scoreInput.value,\r\n    }),\r\n  })\r\n    .then((response) => response.json())\r\n    .then(() => {\r\n      const createdSuccessfully = document.getElementById('success-message');\r\n      createdSuccessfully.style.display = 'block';\r\n\r\n      setTimeout(() => {\r\n        createdSuccessfully.style.display = 'none';\r\n      }, 1500);\r\n    });\r\n  nameInput.value = '';\r\n  scoreInput.value = '';\r\n  localStorage.getItem('scores');\r\n};\r\n\r\nconst displayScores = async () => {\r\n  const spinner = document.getElementById('spinner');\r\n  spinner.classList.replace('spinner-section', 'spinner-section-view');\r\n\r\n  await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/1000/scores/').then((response) => response.json()).then((completeResponse) => {\r\n    const createdApiScores = completeResponse.result;\r\n    localStorage.setItem('scores', JSON.stringify(createdApiScores));\r\n\r\n    const scores = new _Constructor_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]().getScores();\r\n\r\n    spinner.classList.replace('spinner-section-view', 'spinner-section');\r\n\r\n    scores.forEach((completeResponse) => {\r\n      const newScoreLi = document.createElement('li');\r\n\r\n      newScoreLi.className = 'score-board-li';\r\n      scoreBoard.appendChild(newScoreLi);\r\n      newScoreLi.innerHTML = `\r\n              <p class=\"score-board-name font\">${completeResponse.user}:</p>\r\n              <p class=\"score-board-score font\">${completeResponse.score}</p>\r\n          `;\r\n    });\r\n  });\r\n};\r\n\r\nconst refreshPage = () => {\r\n  window.location.reload();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://leadership-board/./src/modules/Functions.js?");

/***/ }),

/***/ "./src/font/my-font.woff":
/*!*******************************!*\
  !*** ./src/font/my-font.woff ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31d6cfe0d16ae931b73c.woff\";\n\n//# sourceURL=webpack://leadership-board/./src/font/my-font.woff?");

/***/ }),

/***/ "./src/font/my-font.woff2":
/*!********************************!*\
  !*** ./src/font/my-font.woff2 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"31d6cfe0d16ae931b73c.woff2\";\n\n//# sourceURL=webpack://leadership-board/./src/font/my-font.woff2?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);