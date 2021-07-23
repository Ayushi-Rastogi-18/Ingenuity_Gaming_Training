/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./initial/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./initial/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\r\n    margin:0;\r\n    padding: 0;\r\n}\r\n#container {\r\n    background: linear-gradient(100deg, black, aqua, blue, aqua, black);\r\n    display:flex;\r\n    height: 100vh;\r\n}\r\n#audio_controls > button {\r\n    border: 3px solid aqua;\r\n    /* background-color: rgb(187, 15, 164); */\r\n    cursor: pointer;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n}\r\n#audio_controls > button:hover{\r\n    border: 3px solid rgb(187, 15, 164);\r\n    background-color: aqua;\r\n}\r\n#playpauseBtn{\r\n    /* background: url(\"./images/pause.png\") no-repeat; */\r\n    margin-left:15px;\r\n}\r\n/* #shuffleBtn{\r\n    background: url(\"./images/shuffleoff.png\") no-repeat;\r\n}\r\n#muteBtn{\r\n    background: url(\"./images/speakeron.png\") no-repeat;\r\n} */\r\n#audio_controls > input{\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n#seekSlider{\r\n    width: 100px;\r\n}\r\n#volumeSlider{\r\n    width: 200px;\r\n}\r\n#timeBox{\r\n    display: inline-block;\r\n    width: 120px;\r\n    background: black;\r\n    border: aqua 3px solid;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    color: aqua;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 1.2em;\r\n}\r\n#audio_player{\r\n    width:908px;\r\n    height: 340px;\r\n    /* background: url(\"./images/skin2.png\") no-repeat; */\r\n} \r\n#audio_controls{\r\n    margin-left: 130px; \r\n    border: 4px solid rgb(187, 15, 164);\r\n    height: 50px;\r\n    width: 620px;\r\n    margin-top: 340px;\r\n    background-color: white;\r\n    border-radius: 25px;\r\n} \r\n#trackBox{\r\n    border: 8px solid rgb(187, 15, 164); \r\n    height: 345px;\r\n    border-radius:16px;\r\n}\r\n.trackBar{\r\n    height: 65px;\r\n    width: 350px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    background-color: aqua;\r\n    border: 2px solid aqua;    \r\n}\r\n.trackName{\r\n    color: black;\r\n    float: left; \r\n    margin: 12px 0px 0px 14px;\r\n    font-size: 1.5em;\r\n    font-family: cursive;\r\n}\r\n.trackBar:nth-child(even){\r\n    background-color: blue;\r\n}\r\n.playButton{\r\n    opacity: 0.8;\r\n    display:block;\r\n    float: right;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 5px 30px 0px 5px;\r\n    /* background: url(\"images/play.png\") no-repeat; */\r\n    border: 3px solid black;\r\n    border-radius: 25px;\r\n    background-color: rgb(187, 15, 164);\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n.playButton:hover{\r\n    opacity: 1.5;\r\n}\r\n\r\n/* Animation */\r\ndiv#mp3_player{ \r\n    width:500px;\r\n    height:60px;\r\n    padding:5px;\r\n    margin:10px 40px;\r\n    \r\n}\r\ndiv#mp3_player > div > audio{\r\n    width:500px;\r\n    float:left;\r\n    display: none; \r\n}\r\ndiv#mp3_player > canvas{\r\n    width: 92vw; \r\n    height:120px; \r\n    background:#002D3C;\r\n    float:left;\r\n    border: 8px solid rgb(187, 15, 164);\r\n    border-radius: 20px;\r\n}\r\n#playingTrack{\r\n    display:none;\r\n}\r\n#status{\r\n    font-size: 2em;\r\n    font-family: cursive;\r\n    color: rgb(8, 8, 95); \r\n    -webkit-text-stroke-color: rgb(187, 15, 164);\r\n    -webkit-text-stroke-width: 2px; \r\n    margin-left: 330px;\r\n}", "",{"version":3,"sources":["webpack://./initial/style.css"],"names":[],"mappings":"AAAA;IACI,QAAQ;IACR,UAAU;AACd;AACA;IACI,mEAAmE;IACnE,YAAY;IACZ,aAAa;AACjB;AACA;IACI,sBAAsB;IACtB,yCAAyC;IACzC,eAAe;IACf,WAAW;IACX,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,mCAAmC;IACnC,sBAAsB;AAC1B;AACA;IACI,qDAAqD;IACrD,gBAAgB;AACpB;AACA;;;;;GAKG;AACH;IACI,aAAa;IACb,eAAe;AACnB;AACA;IACI,YAAY;AAChB;AACA;IACI,YAAY;AAChB;AACA;IACI,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,mBAAmB;IACnB,kBAAkB;IAClB,WAAW;IACX,sEAAsE;IACtE,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,aAAa;IACb,qDAAqD;AACzD;AACA;IACI,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,mCAAmC;IACnC,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,sEAAsE;IACtE,sBAAsB;IACtB,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,gBAAgB;IAChB,oBAAoB;AACxB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,kDAAkD;IAClD,uBAAuB;IACvB,mBAAmB;IACnB,mCAAmC;IACnC,eAAe;IACf,aAAa;AACjB;AACA;IACI,YAAY;AAChB;;AAEA,cAAc;AACd;IACI,WAAW;IACX,WAAW;IACX,WAAW;IACX,gBAAgB;;AAEpB;AACA;IACI,WAAW;IACX,UAAU;IACV,aAAa;AACjB;AACA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,mCAAmC;IACnC,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,oBAAoB;IACpB,oBAAoB;IACpB,4CAA4C;IAC5C,8BAA8B;IAC9B,kBAAkB;AACtB","sourcesContent":["*{\r\n    margin:0;\r\n    padding: 0;\r\n}\r\n#container {\r\n    background: linear-gradient(100deg, black, aqua, blue, aqua, black);\r\n    display:flex;\r\n    height: 100vh;\r\n}\r\n#audio_controls > button {\r\n    border: 3px solid aqua;\r\n    /* background-color: rgb(187, 15, 164); */\r\n    cursor: pointer;\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n}\r\n#audio_controls > button:hover{\r\n    border: 3px solid rgb(187, 15, 164);\r\n    background-color: aqua;\r\n}\r\n#playpauseBtn{\r\n    /* background: url(\"./images/pause.png\") no-repeat; */\r\n    margin-left:15px;\r\n}\r\n/* #shuffleBtn{\r\n    background: url(\"./images/shuffleoff.png\") no-repeat;\r\n}\r\n#muteBtn{\r\n    background: url(\"./images/speakeron.png\") no-repeat;\r\n} */\r\n#audio_controls > input{\r\n    outline: none;\r\n    cursor: pointer;\r\n}\r\n#seekSlider{\r\n    width: 100px;\r\n}\r\n#volumeSlider{\r\n    width: 200px;\r\n}\r\n#timeBox{\r\n    display: inline-block;\r\n    width: 120px;\r\n    background: black;\r\n    border: aqua 3px solid;\r\n    border-radius: 15px;\r\n    text-align: center;\r\n    color: aqua;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    font-size: 1.2em;\r\n}\r\n#audio_player{\r\n    width:908px;\r\n    height: 340px;\r\n    /* background: url(\"./images/skin2.png\") no-repeat; */\r\n} \r\n#audio_controls{\r\n    margin-left: 130px; \r\n    border: 4px solid rgb(187, 15, 164);\r\n    height: 50px;\r\n    width: 620px;\r\n    margin-top: 340px;\r\n    background-color: white;\r\n    border-radius: 25px;\r\n} \r\n#trackBox{\r\n    border: 8px solid rgb(187, 15, 164); \r\n    height: 345px;\r\n    border-radius:16px;\r\n}\r\n.trackBar{\r\n    height: 65px;\r\n    width: 350px;\r\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\r\n    background-color: aqua;\r\n    border: 2px solid aqua;    \r\n}\r\n.trackName{\r\n    color: black;\r\n    float: left; \r\n    margin: 12px 0px 0px 14px;\r\n    font-size: 1.5em;\r\n    font-family: cursive;\r\n}\r\n.trackBar:nth-child(even){\r\n    background-color: blue;\r\n}\r\n.playButton{\r\n    opacity: 0.8;\r\n    display:block;\r\n    float: right;\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 5px 30px 0px 5px;\r\n    /* background: url(\"images/play.png\") no-repeat; */\r\n    border: 3px solid black;\r\n    border-radius: 25px;\r\n    background-color: rgb(187, 15, 164);\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n.playButton:hover{\r\n    opacity: 1.5;\r\n}\r\n\r\n/* Animation */\r\ndiv#mp3_player{ \r\n    width:500px;\r\n    height:60px;\r\n    padding:5px;\r\n    margin:10px 40px;\r\n    \r\n}\r\ndiv#mp3_player > div > audio{\r\n    width:500px;\r\n    float:left;\r\n    display: none; \r\n}\r\ndiv#mp3_player > canvas{\r\n    width: 92vw; \r\n    height:120px; \r\n    background:#002D3C;\r\n    float:left;\r\n    border: 8px solid rgb(187, 15, 164);\r\n    border-radius: 20px;\r\n}\r\n#playingTrack{\r\n    display:none;\r\n}\r\n#status{\r\n    font-size: 2em;\r\n    font-family: cursive;\r\n    color: rgb(8, 8, 95); \r\n    -webkit-text-stroke-color: rgb(187, 15, 164);\r\n    -webkit-text-stroke-width: 2px; \r\n    margin-left: 330px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./initial/images/pause.png":
/*!**********************************!*\
  !*** ./initial/images/pause.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/pause.png");

/***/ }),

/***/ "./initial/images/play.png":
/*!*********************************!*\
  !*** ./initial/images/play.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/play.png");

/***/ }),

/***/ "./initial/images/shuffleoff.png":
/*!***************************************!*\
  !*** ./initial/images/shuffleoff.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/shuffleoff.png");

/***/ }),

/***/ "./initial/images/shuffleon.png":
/*!**************************************!*\
  !*** ./initial/images/shuffleon.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/shuffleon.png");

/***/ }),

/***/ "./initial/images/skin1.png":
/*!**********************************!*\
  !*** ./initial/images/skin1.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/skin1.png");

/***/ }),

/***/ "./initial/images/skin2.png":
/*!**********************************!*\
  !*** ./initial/images/skin2.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/skin2.png");

/***/ }),

/***/ "./initial/images/speakeroff.png":
/*!***************************************!*\
  !*** ./initial/images/speakeroff.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/speakeroff.png");

/***/ }),

/***/ "./initial/images/speakeron.png":
/*!**************************************!*\
  !*** ./initial/images/speakeron.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/speakeron.png");

/***/ }),

/***/ "./initial/audios/Baby.mp3":
/*!*********************************!*\
  !*** ./initial/audios/Baby.mp3 ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("audios/Baby.mp3");

/***/ }),

/***/ "./initial/audios/Beatback.mp3":
/*!*************************************!*\
  !*** ./initial/audios/Beatback.mp3 ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("audios/Beatback.mp3");

/***/ }),

/***/ "./initial/audios/Beautiful.mp3":
/*!**************************************!*\
  !*** ./initial/audios/Beautiful.mp3 ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("audios/Beautiful.mp3");

/***/ }),

/***/ "./initial/audios/BrownMunde.mp3":
/*!***************************************!*\
  !*** ./initial/audios/BrownMunde.mp3 ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("audios/BrownMunde.mp3");

/***/ }),

/***/ "./initial/audios/ElBano.mp3":
/*!***********************************!*\
  !*** ./initial/audios/ElBano.mp3 ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("audios/ElBano.mp3");

/***/ }),

/***/ "./initial/style.css":
/*!***************************!*\
  !*** ./initial/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./initial/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./initial/final.ts ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_pause_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/pause.png */ "./initial/images/pause.png");
/* harmony import */ var _images_play_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/play.png */ "./initial/images/play.png");
/* harmony import */ var _images_shuffleoff_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/shuffleoff.png */ "./initial/images/shuffleoff.png");
/* harmony import */ var _images_shuffleon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/shuffleon.png */ "./initial/images/shuffleon.png");
/* harmony import */ var _images_skin1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/skin1.png */ "./initial/images/skin1.png");
/* harmony import */ var _images_skin2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/skin2.png */ "./initial/images/skin2.png");
/* harmony import */ var _images_speakeroff_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/speakeroff.png */ "./initial/images/speakeroff.png");
/* harmony import */ var _images_speakeron_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/speakeron.png */ "./initial/images/speakeron.png");
/* harmony import */ var _audios_Baby_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audios/Baby.mp3 */ "./initial/audios/Baby.mp3");
/* harmony import */ var _audios_Beatback_mp3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./audios/Beatback.mp3 */ "./initial/audios/Beatback.mp3");
/* harmony import */ var _audios_Beautiful_mp3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./audios/Beautiful.mp3 */ "./initial/audios/Beautiful.mp3");
/* harmony import */ var _audios_BrownMunde_mp3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audios/BrownMunde.mp3 */ "./initial/audios/BrownMunde.mp3");
/* harmony import */ var _audios_ElBano_mp3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./audios/ElBano.mp3 */ "./initial/audios/ElBano.mp3");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style.css */ "./initial/style.css");













// import "./audios/**/*.mp3";

// onload = function(){
var seeking, seekTo, shuffling = false, dir = "audios/", playList = ["Baby.mp3", "Beatback.mp3", "Beautiful.mp3", "BrownMunde.mp3", "ElBano.mp3"], index = 0, 
//Set object references
playBtn = document.querySelector("#playpauseBtn"), muteBtn = document.getElementById("muteBtn"), seekSlider = document.getElementById("seekSlider"), volumeSlider = document.getElementById("volumeSlider"), shuffleBtn = document.getElementById("shuffleBtn"), curTime = document.getElementById("curTime"), durTime = document.getElementById("durTime"), status = document.getElementById("status"), trackBox = document.getElementById("trackBox"), playingTrack = document.getElementById("playingTrack");
var ap = document.getElementById("audio_player");
ap.style.background = "url(./images/skin2.png) no-repeat";
playBtn.style.background = "url(./images/pause.png) no-repeat";
shuffleBtn.style.background = "url(./images/shuffleoff.png) no-repeat";
muteBtn.style.background = "url(./images/speakeron.png) no-repeat";
audioTrack();
function setup() {
    var pb = document.querySelectorAll(".playButton");
    Array.from(pb).forEach(function (element) {
        element['style'].background = "url(images/play.png) no-repeat";
        // element['style'].backgroundColor = `rgb(187, 15, 164)`;
    });
}
setup();
setInterval(function () {
    var pb = document.querySelectorAll(".playButton");
    Array.from(pb).forEach(function (element) {
        // element['style'].background = "url(images/play.png) no-repeat";
        element['style'].backgroundColor = "rgb(187, 15, 164)";
    });
    var bb = document.querySelectorAll("#audio_controls>button");
    Array.from(bb).forEach(function (element) {
        element['style'].backgroundColor = "rgb(187, 15, 164)";
    });
}, 1);
var audio = new Audio();
audio.src = dir + playList[0];
audio.loop = false;
playingTrack.innerText = "" + playList[0];
testPlayer();
status.innerHTML = "Track " + " - " + ("" + playList[index]) + " is playing";
//Add event handling
playBtn.addEventListener("click", playPause);
muteBtn.addEventListener("click", mute);
shuffleBtn.addEventListener("click", shuffle);
seekSlider.addEventListener("mousedown", function (event) { seeking = true; seek(event); });
seekSlider.addEventListener("mousemove", function (event) { seek(event); });
seekSlider.addEventListener("mouseup", function () { seeking = false; });
volumeSlider.addEventListener("mousemove", setVolume);
audio.addEventListener("timeupdate", function () { seekTimeUpdate(); });
audio.addEventListener("ended", function () { switchTrack(); });
function shuffle() {
    if (!shuffling) {
        shuffling = true;
        shuffleBtn.style.background = "url(images/shuffleon.png)";
        playList.sort(function () { return .5 - Math.random(); });
        trackBox.innerHTML = '';
        playingTrack.innerText = "" + playList[0];
        audioTrack();
        audio.src = dir + playList[0];
        audio.play();
    }
    else {
        shuffling = false;
        shuffleBtn.style.background = "url(images/shuffleoff.png)";
        audio.pause();
    }
    setup();
}
function audioTrack() {
    var audio_index = 1;
    var isPlaying = false;
    var tracks = {
        "track1": ["" + playList[0], "" + playList[0]],
        "track2": ["" + playList[1], "" + playList[1]],
        "track3": ["" + playList[2], "" + playList[2]],
        "track4": ["" + playList[3], "" + playList[3]],
        "track5": ["" + playList[4], "" + playList[4]]
    };
    for (var tr in tracks) {
        var tb = document.createElement("div");
        var pb = document.createElement("button");
        var tn = document.createElement("div");
        tb.className = "trackBar";
        pb.className = "playButton";
        tn.className = "trackName";
        tn.innerHTML = "" + (audio_index + ". " + tracks[tr][0]);
        pb.id = "" + tracks[tr][1];
        pb.addEventListener("click", alterTrack);
        tb.appendChild(pb);
        tb.appendChild(tn);
        trackBox.append(tb);
        audio_index++;
    }
    function alterTrack(event) {
        if (isPlaying) {
            if (playingTrack.innerText != event.target.id) {
                isPlaying = true;
                document.getElementById("" + playingTrack.innerText).style.background = "url(images/play.png)";
                playBtn.style.background = "url(/images/play.png) no-repeat";
                event.target.style.background = "url(/images/pause.png)";
                audio.src = dir + event.target.id;
                audio.play();
            }
            else {
                audio.pause();
                isPlaying = false;
                event.target.style.background = "url(images/play.png)";
                playBtn.style.background = "url(images/play.png) no-repeat";
            }
        }
        else {
            isPlaying = true;
            event.target.style.background = "url(images/pause.png)";
            playBtn.style.background = "url(images/pause.png) no-repeat";
            if (playingTrack.innerText != event.target.id) {
                audio.src = dir + event.target.id;
            }
            audio.play();
        }
        playingTrack.innerText = event.target.id;
    }
}
function switchTrack() {
    if (index == (playList.length - 1)) {
        index = 0;
    }
    else {
        index++;
    }
    audio.src = dir + playList[index];
    playingTrack.innerText = playList[index];
    status.innerHTML = "Track " + " - " + ("" + playingTrack.innerText) + " is playing";
    audio.play();
}
setInterval(state, 1);
function state() {
    status.innerHTML = "Track " + " - " + ("" + playingTrack.innerText) + " is playing";
}
function playPause() {
    if (audio.paused) {
        audio.play();
        playBtn.style.background = "url(images/pause.png) no-repeat";
        // playBtn.style.color = '#e5e5e5';
    }
    else {
        audio.pause();
        playBtn.style.background = "url(images/play.png) no-repeat";
        //playBtn.style.color = '#e5e5e5';
    }
}
function mute() {
    if (audio.muted) {
        audio.muted = false;
        muteBtn.style.background = "url(images/speakeron.png) no-repeat";
    }
    else {
        audio.muted = true;
        muteBtn.style.background = "url(images/speakeroff.png) no-repeat";
    }
}
function seek(event) {
    if (seeking) {
        seekSlider['value'] = String(event.clientX - seekSlider.offsetLeft);
        seekTo = audio.duration * (Number(seekSlider['value']) / 100);
        audio.currentTime = seekTo;
    }
}
function setVolume() {
    audio.volume = Number(volumeSlider['value']) / 100;
}
function seekTimeUpdate() {
    var nt = audio.currentTime * (100 / audio.duration);
    seekSlider['value'] = String(nt);
    var curMins = Math.floor(audio.currentTime / 60);
    var curSecs = Math.floor(audio.currentTime - curMins * 60);
    var durMins = Math.floor(audio.duration / 60);
    var durSecs = Math.floor(audio.duration - durMins * 60);
    if (curSecs < 10) {
        curSecs = "0" + curSecs;
    }
    if (durSecs < 10) {
        durSecs = "0" + durSecs;
    }
    if (curMins < 10) {
        curMins = "0" + curMins;
    }
    if (durMins < 10) {
        durMins = "0" + durMins;
    }
    curTime.innerHTML = curMins + ":" + curSecs;
    durTime.innerHTML = durMins + ":" + durSecs;
}
// Animation Visuals
// Create a new instance of an audio object and adjust some of its properties
audio.controls = true;
//audio.loop = true;
audio.autoplay = true;
// Establish all variables that your Analyser will use
var canvas, ctx, source, context, analyser, fbc_array, bars, bar_x, bar_width, bar_height;
// Initialize the MP3 player after the page loads all of its HTML into the window
function testPlayer() {
    document.getElementById('audioBox').appendChild(audio);
    var AudioContext = window.AudioContext;
    context = new AudioContext(); // AudioContext object instance
    analyser = context.createAnalyser(); // AnalyserNode method
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    // Re-route audio playback into the processing graph of the AudioContext
    source = context.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(context.destination);
    frameLooper();
}
// frameLooper() animates any style of graphics you wish to the audio frequency
// Looping at the default frame rate that the browser provides(approx. 60 FPS)
function frameLooper() {
    window.requestAnimationFrame(frameLooper);
    fbc_array = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(fbc_array);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    ctx.fillStyle = '#00CCFF'; // Color of the bars
    bars = 100;
    for (var i = 0; i < bars; i++) {
        bar_x = i * 3;
        bar_width = 2;
        bar_height = -(fbc_array[i] / 2);
        //  fillRect( x, y, width, height ) // Explanation of the parameters below
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height);
    }
}
// }

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdWRpb19wcm9qZWN0Ly4vaW5pdGlhbC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYXVkaW9fcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYXVkaW9fcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2F1ZGlvX3Byb2plY3QvLi9pbml0aWFsL2ltYWdlcy9wYXVzZS5wbmciLCJ3ZWJwYWNrOi8vYXVkaW9fcHJvamVjdC8uL2luaXRpYWwvaW1hZ2VzL3BsYXkucG5nIiwid2VicGFjazovL2F1ZGlvX3Byb2plY3QvLi9pbml0aWFsL2ltYWdlcy9zaHVmZmxlb2ZmLnBuZyIsIndlYnBhY2s6Ly9hdWRpb19wcm9qZWN0Ly4vaW5pdGlhbC9pbWFnZXMvc2h1ZmZsZW9uLnBuZyIsIndlYnBhY2s6Ly9hdWRpb19wcm9qZWN0Ly4vaW5pdGlhbC9pbWFnZXMvc2tpbjEucG5nIiwid2VicGFjazovL2F1ZGlvX3Byb2plY3QvLi9pbml0aWFsL2ltYWdlcy9za2luMi5wbmciLCJ3ZWJwYWNrOi8vYXVkaW9fcHJvamVjdC8uL2luaXRpYWwvaW1hZ2VzL3NwZWFrZXJvZmYucG5nIiwid2VicGFjazovL2F1ZGlvX3Byb2plY3QvLi9pbml0aWFsL2ltYWdlcy9zcGVha2Vyb24ucG5nIiwid2VicGFjazovL2F1ZGlvX3Byb2plY3QvLi9pbml0aWFsL2F1ZGlvcy9CYWJ5Lm1wMyIsIndlYnBhY2s6Ly9hdWRpb19wcm9qZWN0Ly4vaW5pdGlhbC9hdWRpb3MvQmVhdGJhY2subXAzIiwid2VicGFjazovL2F1ZGlvX3Byb2plY3QvLi9pbml0aWFsL2F1ZGlvcy9CZWF1dGlmdWwubXAzIiwid2VicGFjazovL2F1ZGlvX3Byb2plY3QvLi9pbml0aWFsL2F1ZGlvcy9Ccm93bk11bmRlLm1wMyIsIndlYnBhY2s6Ly9hdWRpb19wcm9qZWN0Ly4vaW5pdGlhbC9hdWRpb3MvRWxCYW5vLm1wMyIsIndlYnBhY2s6Ly9hdWRpb19wcm9qZWN0Ly4vaW5pdGlhbC9zdHlsZS5jc3M/ZWIxNyIsIndlYnBhY2s6Ly9hdWRpb19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2F1ZGlvX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2F1ZGlvX3Byb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXVkaW9fcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hdWRpb19wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXVkaW9fcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2F1ZGlvX3Byb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXVkaW9fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9hdWRpb19wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hdWRpb19wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXVkaW9fcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2F1ZGlvX3Byb2plY3QvLi9pbml0aWFsL2ZpbmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ3NIO0FBQzdCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0Y7QUFDQSw0Q0FBNEMsaUJBQWlCLG1CQUFtQixLQUFLLGdCQUFnQiw0RUFBNEUscUJBQXFCLHNCQUFzQixLQUFLLDhCQUE4QiwrQkFBK0IsK0NBQStDLDJCQUEyQixvQkFBb0IscUJBQXFCLDRCQUE0QixLQUFLLG1DQUFtQyw0Q0FBNEMsK0JBQStCLEtBQUssa0JBQWtCLDZEQUE2RCw0QkFBNEIsS0FBSyxtQkFBbUIsK0RBQStELEtBQUssYUFBYSw4REFBOEQsS0FBSywrQkFBK0Isc0JBQXNCLHdCQUF3QixLQUFLLGdCQUFnQixxQkFBcUIsS0FBSyxrQkFBa0IscUJBQXFCLEtBQUssYUFBYSw4QkFBOEIscUJBQXFCLDBCQUEwQiwrQkFBK0IsNEJBQTRCLDJCQUEyQixvQkFBb0IsK0VBQStFLHlCQUF5QixLQUFLLGtCQUFrQixvQkFBb0Isc0JBQXNCLDZEQUE2RCxRQUFRLHFCQUFxQiwyQkFBMkIsNkNBQTZDLHFCQUFxQixxQkFBcUIsMEJBQTBCLGdDQUFnQyw0QkFBNEIsS0FBSyxlQUFlLDRDQUE0Qyx1QkFBdUIsMkJBQTJCLEtBQUssY0FBYyxxQkFBcUIscUJBQXFCLCtFQUErRSwrQkFBK0IsK0JBQStCLFNBQVMsZUFBZSxxQkFBcUIsb0JBQW9CLG1DQUFtQyx5QkFBeUIsNkJBQTZCLEtBQUssOEJBQThCLCtCQUErQixLQUFLLGdCQUFnQixxQkFBcUIsc0JBQXNCLHFCQUFxQixvQkFBb0IscUJBQXFCLGlDQUFpQywwREFBMEQsbUNBQW1DLDRCQUE0Qiw0Q0FBNEMsd0JBQXdCLHNCQUFzQixLQUFLLHNCQUFzQixxQkFBcUIsS0FBSywwQ0FBMEMscUJBQXFC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RVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMDBkZWcsIGJsYWNrLCBhcXVhLCBibHVlLCBhcXVhLCBibGFjayk7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuI2F1ZGlvX2NvbnRyb2xzID4gYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYXF1YTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTUsIDE2NCk7ICovXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG59XFxyXFxuI2F1ZGlvX2NvbnRyb2xzID4gYnV0dG9uOmhvdmVye1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTg3LCAxNSwgMTY0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXHJcXG59XFxyXFxuI3BsYXlwYXVzZUJ0bntcXHJcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKFxcXCIuL2ltYWdlcy9wYXVzZS5wbmdcXFwiKSBuby1yZXBlYXQ7ICovXFxyXFxuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XFxyXFxufVxcclxcbi8qICNzaHVmZmxlQnRue1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1hZ2VzL3NodWZmbGVvZmYucG5nXFxcIikgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG4jbXV0ZUJ0bntcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2ltYWdlcy9zcGVha2Vyb24ucG5nXFxcIikgbm8tcmVwZWF0O1xcclxcbn0gKi9cXHJcXG4jYXVkaW9fY29udHJvbHMgPiBpbnB1dHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jc2Vla1NsaWRlcntcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG4jdm9sdW1lU2xpZGVye1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcbiN0aW1lQm94e1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAgIGJvcmRlcjogYXF1YSAzcHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IGFxdWE7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcbiNhdWRpb19wbGF5ZXJ7XFxyXFxuICAgIHdpZHRoOjkwOHB4O1xcclxcbiAgICBoZWlnaHQ6IDM0MHB4O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1hZ2VzL3NraW4yLnBuZ1xcXCIpIG5vLXJlcGVhdDsgKi9cXHJcXG59IFxcclxcbiNhdWRpb19jb250cm9sc3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEzMHB4OyBcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDE4NywgMTUsIDE2NCk7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDYyMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufSBcXHJcXG4jdHJhY2tCb3h7XFxyXFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHJnYigxODcsIDE1LCAxNjQpOyBcXHJcXG4gICAgaGVpZ2h0OiAzNDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoxNnB4O1xcclxcbn1cXHJcXG4udHJhY2tCYXJ7XFxyXFxuICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBhcXVhOyAgICBcXHJcXG59XFxyXFxuLnRyYWNrTmFtZXtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmbG9hdDogbGVmdDsgXFxyXFxuICAgIG1hcmdpbjogMTJweCAwcHggMHB4IDE0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbn1cXHJcXG4udHJhY2tCYXI6bnRoLWNoaWxkKGV2ZW4pe1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG4ucGxheUJ1dHRvbntcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4IDMwcHggMHB4IDVweDtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKFxcXCJpbWFnZXMvcGxheS5wbmdcXFwiKSBuby1yZXBlYXQ7ICovXFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxNSwgMTY0KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ucGxheUJ1dHRvbjpob3ZlcntcXHJcXG4gICAgb3BhY2l0eTogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBbmltYXRpb24gKi9cXHJcXG5kaXYjbXAzX3BsYXllcnsgXFxyXFxuICAgIHdpZHRoOjUwMHB4O1xcclxcbiAgICBoZWlnaHQ6NjBweDtcXHJcXG4gICAgcGFkZGluZzo1cHg7XFxyXFxuICAgIG1hcmdpbjoxMHB4IDQwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5kaXYjbXAzX3BsYXllciA+IGRpdiA+IGF1ZGlve1xcclxcbiAgICB3aWR0aDo1MDBweDtcXHJcXG4gICAgZmxvYXQ6bGVmdDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTsgXFxyXFxufVxcclxcbmRpdiNtcDNfcGxheWVyID4gY2FudmFze1xcclxcbiAgICB3aWR0aDogOTJ2dzsgXFxyXFxuICAgIGhlaWdodDoxMjBweDsgXFxyXFxuICAgIGJhY2tncm91bmQ6IzAwMkQzQztcXHJcXG4gICAgZmxvYXQ6bGVmdDtcXHJcXG4gICAgYm9yZGVyOiA4cHggc29saWQgcmdiKDE4NywgMTUsIDE2NCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbiNwbGF5aW5nVHJhY2t7XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG59XFxyXFxuI3N0YXR1c3tcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbiAgICBjb2xvcjogcmdiKDgsIDgsIDk1KTsgXFxyXFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHJnYigxODcsIDE1LCAxNjQpO1xcclxcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAycHg7IFxcclxcbiAgICBtYXJnaW4tbGVmdDogMzMwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2luaXRpYWwvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7QUFDZDtBQUNBO0lBQ0ksbUVBQW1FO0lBQ25FLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIseUNBQXlDO0lBQ3pDLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kscURBQXFEO0lBQ3JELGdCQUFnQjtBQUNwQjtBQUNBOzs7OztHQUtHO0FBQ0g7SUFDSSxhQUFhO0lBQ2IsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHNFQUFzRTtJQUN0RSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IscURBQXFEO0FBQ3pEO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHNFQUFzRTtJQUN0RSxzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtEQUFrRDtJQUNsRCx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQSxjQUFjO0FBQ2Q7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQ0FBbUM7SUFDbkMsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQiw0Q0FBNEM7SUFDNUMsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuI2NvbnRhaW5lciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMDBkZWcsIGJsYWNrLCBhcXVhLCBibHVlLCBhcXVhLCBibGFjayk7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuI2F1ZGlvX2NvbnRyb2xzID4gYnV0dG9uIHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYXF1YTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE4NywgMTUsIDE2NCk7ICovXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG59XFxyXFxuI2F1ZGlvX2NvbnRyb2xzID4gYnV0dG9uOmhvdmVye1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2IoMTg3LCAxNSwgMTY0KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXHJcXG59XFxyXFxuI3BsYXlwYXVzZUJ0bntcXHJcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKFxcXCIuL2ltYWdlcy9wYXVzZS5wbmdcXFwiKSBuby1yZXBlYXQ7ICovXFxyXFxuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XFxyXFxufVxcclxcbi8qICNzaHVmZmxlQnRue1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1hZ2VzL3NodWZmbGVvZmYucG5nXFxcIikgbm8tcmVwZWF0O1xcclxcbn1cXHJcXG4jbXV0ZUJ0bntcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKFxcXCIuL2ltYWdlcy9zcGVha2Vyb24ucG5nXFxcIikgbm8tcmVwZWF0O1xcclxcbn0gKi9cXHJcXG4jYXVkaW9fY29udHJvbHMgPiBpbnB1dHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4jc2Vla1NsaWRlcntcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbn1cXHJcXG4jdm9sdW1lU2xpZGVye1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcbiN0aW1lQm94e1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxyXFxuICAgIGJvcmRlcjogYXF1YSAzcHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY29sb3I6IGFxdWE7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBDb2NoaW4sIEdlb3JnaWEsIFRpbWVzLCAnVGltZXMgTmV3IFJvbWFuJywgc2VyaWY7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxyXFxufVxcclxcbiNhdWRpb19wbGF5ZXJ7XFxyXFxuICAgIHdpZHRoOjkwOHB4O1xcclxcbiAgICBoZWlnaHQ6IDM0MHB4O1xcclxcbiAgICAvKiBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vaW1hZ2VzL3NraW4yLnBuZ1xcXCIpIG5vLXJlcGVhdDsgKi9cXHJcXG59IFxcclxcbiNhdWRpb19jb250cm9sc3tcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEzMHB4OyBcXHJcXG4gICAgYm9yZGVyOiA0cHggc29saWQgcmdiKDE4NywgMTUsIDE2NCk7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgd2lkdGg6IDYyMHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAzNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxufSBcXHJcXG4jdHJhY2tCb3h7XFxyXFxuICAgIGJvcmRlcjogOHB4IHNvbGlkIHJnYigxODcsIDE1LCAxNjQpOyBcXHJcXG4gICAgaGVpZ2h0OiAzNDVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoxNnB4O1xcclxcbn1cXHJcXG4udHJhY2tCYXJ7XFxyXFxuICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICBmb250LWZhbWlseTogQ2FtYnJpYSwgQ29jaGluLCBHZW9yZ2lhLCBUaW1lcywgJ1RpbWVzIE5ldyBSb21hbicsIHNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBhcXVhOyAgICBcXHJcXG59XFxyXFxuLnRyYWNrTmFtZXtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmbG9hdDogbGVmdDsgXFxyXFxuICAgIG1hcmdpbjogMTJweCAwcHggMHB4IDE0cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbn1cXHJcXG4udHJhY2tCYXI6bnRoLWNoaWxkKGV2ZW4pe1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcclxcbn1cXHJcXG4ucGxheUJ1dHRvbntcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgICBkaXNwbGF5OmJsb2NrO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbjogNXB4IDMwcHggMHB4IDVweDtcXHJcXG4gICAgLyogYmFja2dyb3VuZDogdXJsKFxcXCJpbWFnZXMvcGxheS5wbmdcXFwiKSBuby1yZXBlYXQ7ICovXFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg3LCAxNSwgMTY0KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG4ucGxheUJ1dHRvbjpob3ZlcntcXHJcXG4gICAgb3BhY2l0eTogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBbmltYXRpb24gKi9cXHJcXG5kaXYjbXAzX3BsYXllcnsgXFxyXFxuICAgIHdpZHRoOjUwMHB4O1xcclxcbiAgICBoZWlnaHQ6NjBweDtcXHJcXG4gICAgcGFkZGluZzo1cHg7XFxyXFxuICAgIG1hcmdpbjoxMHB4IDQwcHg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG5kaXYjbXAzX3BsYXllciA+IGRpdiA+IGF1ZGlve1xcclxcbiAgICB3aWR0aDo1MDBweDtcXHJcXG4gICAgZmxvYXQ6bGVmdDtcXHJcXG4gICAgZGlzcGxheTogbm9uZTsgXFxyXFxufVxcclxcbmRpdiNtcDNfcGxheWVyID4gY2FudmFze1xcclxcbiAgICB3aWR0aDogOTJ2dzsgXFxyXFxuICAgIGhlaWdodDoxMjBweDsgXFxyXFxuICAgIGJhY2tncm91bmQ6IzAwMkQzQztcXHJcXG4gICAgZmxvYXQ6bGVmdDtcXHJcXG4gICAgYm9yZGVyOiA4cHggc29saWQgcmdiKDE4NywgMTUsIDE2NCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxufVxcclxcbiNwbGF5aW5nVHJhY2t7XFxyXFxuICAgIGRpc3BsYXk6bm9uZTtcXHJcXG59XFxyXFxuI3N0YXR1c3tcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xcclxcbiAgICBjb2xvcjogcmdiKDgsIDgsIDk1KTsgXFxyXFxuICAgIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHJnYigxODcsIDE1LCAxNjQpO1xcclxcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAycHg7IFxcclxcbiAgICBtYXJnaW4tbGVmdDogMzMwcHg7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcGF1c2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvcGxheS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zaHVmZmxlb2ZmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NodWZmbGVvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9za2luMS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9za2luMi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zcGVha2Vyb2ZmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3NwZWFrZXJvbi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImF1ZGlvcy9CYWJ5Lm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiYXVkaW9zL0JlYXRiYWNrLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiYXVkaW9zL0JlYXV0aWZ1bC5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBcImF1ZGlvcy9Ccm93bk11bmRlLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiYXVkaW9zL0VsQmFuby5tcDNcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL2ltYWdlcy9wYXVzZS5wbmdcIjtcclxuaW1wb3J0IFwiLi9pbWFnZXMvcGxheS5wbmdcIjtcclxuaW1wb3J0IFwiLi9pbWFnZXMvc2h1ZmZsZW9mZi5wbmdcIjtcclxuaW1wb3J0IFwiLi9pbWFnZXMvc2h1ZmZsZW9uLnBuZ1wiO1xyXG5pbXBvcnQgXCIuL2ltYWdlcy9za2luMS5wbmdcIjtcclxuaW1wb3J0IFwiLi9pbWFnZXMvc2tpbjIucG5nXCI7XHJcbmltcG9ydCBcIi4vaW1hZ2VzL3NwZWFrZXJvZmYucG5nXCI7XHJcbmltcG9ydCBcIi4vaW1hZ2VzL3NwZWFrZXJvbi5wbmdcIjtcclxuaW1wb3J0IFwiLi9hdWRpb3MvQmFieS5tcDNcIjtcclxuaW1wb3J0IFwiLi9hdWRpb3MvQmVhdGJhY2subXAzXCI7XHJcbmltcG9ydCBcIi4vYXVkaW9zL0JlYXV0aWZ1bC5tcDNcIjtcclxuaW1wb3J0IFwiLi9hdWRpb3MvQnJvd25NdW5kZS5tcDNcIjtcclxuaW1wb3J0IFwiLi9hdWRpb3MvRWxCYW5vLm1wM1wiO1xyXG4vLyBpbXBvcnQgXCIuL2F1ZGlvcy8qKi8qLm1wM1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG4vLyBvbmxvYWQgPSBmdW5jdGlvbigpe1xyXG52YXIgc2Vla2luZywgc2Vla1RvLCBzaHVmZmxpbmcgPSBmYWxzZSwgZGlyID0gXCJhdWRpb3MvXCIsIHBsYXlMaXN0ID0gW1wiQmFieS5tcDNcIiwgXCJCZWF0YmFjay5tcDNcIiwgXCJCZWF1dGlmdWwubXAzXCIsIFwiQnJvd25NdW5kZS5tcDNcIiwgXCJFbEJhbm8ubXAzXCJdLCBpbmRleCA9IDAsIFxyXG4vL1NldCBvYmplY3QgcmVmZXJlbmNlc1xyXG5wbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwbGF5cGF1c2VCdG5cIiksIG11dGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm11dGVCdG5cIiksIHNlZWtTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlZWtTbGlkZXJcIiksIHZvbHVtZVNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidm9sdW1lU2xpZGVyXCIpLCBzaHVmZmxlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaHVmZmxlQnRuXCIpLCBjdXJUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJUaW1lXCIpLCBkdXJUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdXJUaW1lXCIpLCBzdGF0dXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXR1c1wiKSwgdHJhY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRyYWNrQm94XCIpLCBwbGF5aW5nVHJhY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBsYXlpbmdUcmFja1wiKTtcclxudmFyIGFwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdWRpb19wbGF5ZXJcIik7XHJcbmFwLnN0eWxlLmJhY2tncm91bmQgPSBcInVybCguL2ltYWdlcy9za2luMi5wbmcpIG5vLXJlcGVhdFwiO1xyXG5wbGF5QnRuLnN0eWxlLmJhY2tncm91bmQgPSBcInVybCguL2ltYWdlcy9wYXVzZS5wbmcpIG5vLXJlcGVhdFwiO1xyXG5zaHVmZmxlQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcInVybCguL2ltYWdlcy9zaHVmZmxlb2ZmLnBuZykgbm8tcmVwZWF0XCI7XHJcbm11dGVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKC4vaW1hZ2VzL3NwZWFrZXJvbi5wbmcpIG5vLXJlcGVhdFwiO1xyXG5hdWRpb1RyYWNrKCk7XHJcbmZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgdmFyIHBiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5QnV0dG9uXCIpO1xyXG4gICAgQXJyYXkuZnJvbShwYikuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnRbJ3N0eWxlJ10uYmFja2dyb3VuZCA9IFwidXJsKGltYWdlcy9wbGF5LnBuZykgbm8tcmVwZWF0XCI7XHJcbiAgICAgICAgLy8gZWxlbWVudFsnc3R5bGUnXS5iYWNrZ3JvdW5kQ29sb3IgPSBgcmdiKDE4NywgMTUsIDE2NClgO1xyXG4gICAgfSk7XHJcbn1cclxuc2V0dXAoKTtcclxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wbGF5QnV0dG9uXCIpO1xyXG4gICAgQXJyYXkuZnJvbShwYikuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIC8vIGVsZW1lbnRbJ3N0eWxlJ10uYmFja2dyb3VuZCA9IFwidXJsKGltYWdlcy9wbGF5LnBuZykgbm8tcmVwZWF0XCI7XHJcbiAgICAgICAgZWxlbWVudFsnc3R5bGUnXS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYigxODcsIDE1LCAxNjQpXCI7XHJcbiAgICB9KTtcclxuICAgIHZhciBiYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjYXVkaW9fY29udHJvbHM+YnV0dG9uXCIpO1xyXG4gICAgQXJyYXkuZnJvbShiYikuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgIGVsZW1lbnRbJ3N0eWxlJ10uYmFja2dyb3VuZENvbG9yID0gXCJyZ2IoMTg3LCAxNSwgMTY0KVwiO1xyXG4gICAgfSk7XHJcbn0sIDEpO1xyXG52YXIgYXVkaW8gPSBuZXcgQXVkaW8oKTtcclxuYXVkaW8uc3JjID0gZGlyICsgcGxheUxpc3RbMF07XHJcbmF1ZGlvLmxvb3AgPSBmYWxzZTtcclxucGxheWluZ1RyYWNrLmlubmVyVGV4dCA9IFwiXCIgKyBwbGF5TGlzdFswXTtcclxudGVzdFBsYXllcigpO1xyXG5zdGF0dXMuaW5uZXJIVE1MID0gXCJUcmFjayBcIiArIFwiIC0gXCIgKyAoXCJcIiArIHBsYXlMaXN0W2luZGV4XSkgKyBcIiBpcyBwbGF5aW5nXCI7XHJcbi8vQWRkIGV2ZW50IGhhbmRsaW5nXHJcbnBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXlQYXVzZSk7XHJcbm11dGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG11dGUpO1xyXG5zaHVmZmxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaHVmZmxlKTtcclxuc2Vla1NsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkgeyBzZWVraW5nID0gdHJ1ZTsgc2VlayhldmVudCk7IH0pO1xyXG5zZWVrU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7IHNlZWsoZXZlbnQpOyB9KTtcclxuc2Vla1NsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoKSB7IHNlZWtpbmcgPSBmYWxzZTsgfSk7XHJcbnZvbHVtZVNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHNldFZvbHVtZSk7XHJcbmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIGZ1bmN0aW9uICgpIHsgc2Vla1RpbWVVcGRhdGUoKTsgfSk7XHJcbmF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBmdW5jdGlvbiAoKSB7IHN3aXRjaFRyYWNrKCk7IH0pO1xyXG5mdW5jdGlvbiBzaHVmZmxlKCkge1xyXG4gICAgaWYgKCFzaHVmZmxpbmcpIHtcclxuICAgICAgICBzaHVmZmxpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNodWZmbGVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKGltYWdlcy9zaHVmZmxlb24ucG5nKVwiO1xyXG4gICAgICAgIHBsYXlMaXN0LnNvcnQoZnVuY3Rpb24gKCkgeyByZXR1cm4gLjUgLSBNYXRoLnJhbmRvbSgpOyB9KTtcclxuICAgICAgICB0cmFja0JveC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBwbGF5aW5nVHJhY2suaW5uZXJUZXh0ID0gXCJcIiArIHBsYXlMaXN0WzBdO1xyXG4gICAgICAgIGF1ZGlvVHJhY2soKTtcclxuICAgICAgICBhdWRpby5zcmMgPSBkaXIgKyBwbGF5TGlzdFswXTtcclxuICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzaHVmZmxpbmcgPSBmYWxzZTtcclxuICAgICAgICBzaHVmZmxlQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcInVybChpbWFnZXMvc2h1ZmZsZW9mZi5wbmcpXCI7XHJcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcclxuICAgIH1cclxuICAgIHNldHVwKCk7XHJcbn1cclxuZnVuY3Rpb24gYXVkaW9UcmFjaygpIHtcclxuICAgIHZhciBhdWRpb19pbmRleCA9IDE7XHJcbiAgICB2YXIgaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICB2YXIgdHJhY2tzID0ge1xyXG4gICAgICAgIFwidHJhY2sxXCI6IFtcIlwiICsgcGxheUxpc3RbMF0sIFwiXCIgKyBwbGF5TGlzdFswXV0sXHJcbiAgICAgICAgXCJ0cmFjazJcIjogW1wiXCIgKyBwbGF5TGlzdFsxXSwgXCJcIiArIHBsYXlMaXN0WzFdXSxcclxuICAgICAgICBcInRyYWNrM1wiOiBbXCJcIiArIHBsYXlMaXN0WzJdLCBcIlwiICsgcGxheUxpc3RbMl1dLFxyXG4gICAgICAgIFwidHJhY2s0XCI6IFtcIlwiICsgcGxheUxpc3RbM10sIFwiXCIgKyBwbGF5TGlzdFszXV0sXHJcbiAgICAgICAgXCJ0cmFjazVcIjogW1wiXCIgKyBwbGF5TGlzdFs0XSwgXCJcIiArIHBsYXlMaXN0WzRdXVxyXG4gICAgfTtcclxuICAgIGZvciAodmFyIHRyIGluIHRyYWNrcykge1xyXG4gICAgICAgIHZhciB0YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIHBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB2YXIgdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRiLmNsYXNzTmFtZSA9IFwidHJhY2tCYXJcIjtcclxuICAgICAgICBwYi5jbGFzc05hbWUgPSBcInBsYXlCdXR0b25cIjtcclxuICAgICAgICB0bi5jbGFzc05hbWUgPSBcInRyYWNrTmFtZVwiO1xyXG4gICAgICAgIHRuLmlubmVySFRNTCA9IFwiXCIgKyAoYXVkaW9faW5kZXggKyBcIi4gXCIgKyB0cmFja3NbdHJdWzBdKTtcclxuICAgICAgICBwYi5pZCA9IFwiXCIgKyB0cmFja3NbdHJdWzFdO1xyXG4gICAgICAgIHBiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhbHRlclRyYWNrKTtcclxuICAgICAgICB0Yi5hcHBlbmRDaGlsZChwYik7XHJcbiAgICAgICAgdGIuYXBwZW5kQ2hpbGQodG4pO1xyXG4gICAgICAgIHRyYWNrQm94LmFwcGVuZCh0Yik7XHJcbiAgICAgICAgYXVkaW9faW5kZXgrKztcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFsdGVyVHJhY2soZXZlbnQpIHtcclxuICAgICAgICBpZiAoaXNQbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChwbGF5aW5nVHJhY2suaW5uZXJUZXh0ICE9IGV2ZW50LnRhcmdldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiXCIgKyBwbGF5aW5nVHJhY2suaW5uZXJUZXh0KS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ1cmwoaW1hZ2VzL3BsYXkucG5nKVwiO1xyXG4gICAgICAgICAgICAgICAgcGxheUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ1cmwoL2ltYWdlcy9wbGF5LnBuZykgbm8tcmVwZWF0XCI7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKC9pbWFnZXMvcGF1c2UucG5nKVwiO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8uc3JjID0gZGlyICsgZXZlbnQudGFyZ2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIGlzUGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcInVybChpbWFnZXMvcGxheS5wbmcpXCI7XHJcbiAgICAgICAgICAgICAgICBwbGF5QnRuLnN0eWxlLmJhY2tncm91bmQgPSBcInVybChpbWFnZXMvcGxheS5wbmcpIG5vLXJlcGVhdFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpc1BsYXlpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKGltYWdlcy9wYXVzZS5wbmcpXCI7XHJcbiAgICAgICAgICAgIHBsYXlCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKGltYWdlcy9wYXVzZS5wbmcpIG5vLXJlcGVhdFwiO1xyXG4gICAgICAgICAgICBpZiAocGxheWluZ1RyYWNrLmlubmVyVGV4dCAhPSBldmVudC50YXJnZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgIGF1ZGlvLnNyYyA9IGRpciArIGV2ZW50LnRhcmdldC5pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBsYXlpbmdUcmFjay5pbm5lclRleHQgPSBldmVudC50YXJnZXQuaWQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc3dpdGNoVHJhY2soKSB7XHJcbiAgICBpZiAoaW5kZXggPT0gKHBsYXlMaXN0Lmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgaW5kZXggPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuICAgIGF1ZGlvLnNyYyA9IGRpciArIHBsYXlMaXN0W2luZGV4XTtcclxuICAgIHBsYXlpbmdUcmFjay5pbm5lclRleHQgPSBwbGF5TGlzdFtpbmRleF07XHJcbiAgICBzdGF0dXMuaW5uZXJIVE1MID0gXCJUcmFjayBcIiArIFwiIC0gXCIgKyAoXCJcIiArIHBsYXlpbmdUcmFjay5pbm5lclRleHQpICsgXCIgaXMgcGxheWluZ1wiO1xyXG4gICAgYXVkaW8ucGxheSgpO1xyXG59XHJcbnNldEludGVydmFsKHN0YXRlLCAxKTtcclxuZnVuY3Rpb24gc3RhdGUoKSB7XHJcbiAgICBzdGF0dXMuaW5uZXJIVE1MID0gXCJUcmFjayBcIiArIFwiIC0gXCIgKyAoXCJcIiArIHBsYXlpbmdUcmFjay5pbm5lclRleHQpICsgXCIgaXMgcGxheWluZ1wiO1xyXG59XHJcbmZ1bmN0aW9uIHBsYXlQYXVzZSgpIHtcclxuICAgIGlmIChhdWRpby5wYXVzZWQpIHtcclxuICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgcGxheUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ1cmwoaW1hZ2VzL3BhdXNlLnBuZykgbm8tcmVwZWF0XCI7XHJcbiAgICAgICAgLy8gcGxheUJ0bi5zdHlsZS5jb2xvciA9ICcjZTVlNWU1JztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGF1ZGlvLnBhdXNlKCk7XHJcbiAgICAgICAgcGxheUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ1cmwoaW1hZ2VzL3BsYXkucG5nKSBuby1yZXBlYXRcIjtcclxuICAgICAgICAvL3BsYXlCdG4uc3R5bGUuY29sb3IgPSAnI2U1ZTVlNSc7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gbXV0ZSgpIHtcclxuICAgIGlmIChhdWRpby5tdXRlZCkge1xyXG4gICAgICAgIGF1ZGlvLm11dGVkID0gZmFsc2U7XHJcbiAgICAgICAgbXV0ZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ1cmwoaW1hZ2VzL3NwZWFrZXJvbi5wbmcpIG5vLXJlcGVhdFwiO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgYXVkaW8ubXV0ZWQgPSB0cnVlO1xyXG4gICAgICAgIG11dGVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKGltYWdlcy9zcGVha2Vyb2ZmLnBuZykgbm8tcmVwZWF0XCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2VlayhldmVudCkge1xyXG4gICAgaWYgKHNlZWtpbmcpIHtcclxuICAgICAgICBzZWVrU2xpZGVyWyd2YWx1ZSddID0gU3RyaW5nKGV2ZW50LmNsaWVudFggLSBzZWVrU2xpZGVyLm9mZnNldExlZnQpO1xyXG4gICAgICAgIHNlZWtUbyA9IGF1ZGlvLmR1cmF0aW9uICogKE51bWJlcihzZWVrU2xpZGVyWyd2YWx1ZSddKSAvIDEwMCk7XHJcbiAgICAgICAgYXVkaW8uY3VycmVudFRpbWUgPSBzZWVrVG87XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2V0Vm9sdW1lKCkge1xyXG4gICAgYXVkaW8udm9sdW1lID0gTnVtYmVyKHZvbHVtZVNsaWRlclsndmFsdWUnXSkgLyAxMDA7XHJcbn1cclxuZnVuY3Rpb24gc2Vla1RpbWVVcGRhdGUoKSB7XHJcbiAgICB2YXIgbnQgPSBhdWRpby5jdXJyZW50VGltZSAqICgxMDAgLyBhdWRpby5kdXJhdGlvbik7XHJcbiAgICBzZWVrU2xpZGVyWyd2YWx1ZSddID0gU3RyaW5nKG50KTtcclxuICAgIHZhciBjdXJNaW5zID0gTWF0aC5mbG9vcihhdWRpby5jdXJyZW50VGltZSAvIDYwKTtcclxuICAgIHZhciBjdXJTZWNzID0gTWF0aC5mbG9vcihhdWRpby5jdXJyZW50VGltZSAtIGN1ck1pbnMgKiA2MCk7XHJcbiAgICB2YXIgZHVyTWlucyA9IE1hdGguZmxvb3IoYXVkaW8uZHVyYXRpb24gLyA2MCk7XHJcbiAgICB2YXIgZHVyU2VjcyA9IE1hdGguZmxvb3IoYXVkaW8uZHVyYXRpb24gLSBkdXJNaW5zICogNjApO1xyXG4gICAgaWYgKGN1clNlY3MgPCAxMCkge1xyXG4gICAgICAgIGN1clNlY3MgPSBcIjBcIiArIGN1clNlY3M7XHJcbiAgICB9XHJcbiAgICBpZiAoZHVyU2VjcyA8IDEwKSB7XHJcbiAgICAgICAgZHVyU2VjcyA9IFwiMFwiICsgZHVyU2VjcztcclxuICAgIH1cclxuICAgIGlmIChjdXJNaW5zIDwgMTApIHtcclxuICAgICAgICBjdXJNaW5zID0gXCIwXCIgKyBjdXJNaW5zO1xyXG4gICAgfVxyXG4gICAgaWYgKGR1ck1pbnMgPCAxMCkge1xyXG4gICAgICAgIGR1ck1pbnMgPSBcIjBcIiArIGR1ck1pbnM7XHJcbiAgICB9XHJcbiAgICBjdXJUaW1lLmlubmVySFRNTCA9IGN1ck1pbnMgKyBcIjpcIiArIGN1clNlY3M7XHJcbiAgICBkdXJUaW1lLmlubmVySFRNTCA9IGR1ck1pbnMgKyBcIjpcIiArIGR1clNlY3M7XHJcbn1cclxuLy8gQW5pbWF0aW9uIFZpc3VhbHNcclxuLy8gQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIGFuIGF1ZGlvIG9iamVjdCBhbmQgYWRqdXN0IHNvbWUgb2YgaXRzIHByb3BlcnRpZXNcclxuYXVkaW8uY29udHJvbHMgPSB0cnVlO1xyXG4vL2F1ZGlvLmxvb3AgPSB0cnVlO1xyXG5hdWRpby5hdXRvcGxheSA9IHRydWU7XHJcbi8vIEVzdGFibGlzaCBhbGwgdmFyaWFibGVzIHRoYXQgeW91ciBBbmFseXNlciB3aWxsIHVzZVxyXG52YXIgY2FudmFzLCBjdHgsIHNvdXJjZSwgY29udGV4dCwgYW5hbHlzZXIsIGZiY19hcnJheSwgYmFycywgYmFyX3gsIGJhcl93aWR0aCwgYmFyX2hlaWdodDtcclxuLy8gSW5pdGlhbGl6ZSB0aGUgTVAzIHBsYXllciBhZnRlciB0aGUgcGFnZSBsb2FkcyBhbGwgb2YgaXRzIEhUTUwgaW50byB0aGUgd2luZG93XHJcbmZ1bmN0aW9uIHRlc3RQbGF5ZXIoKSB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXVkaW9Cb3gnKS5hcHBlbmRDaGlsZChhdWRpbyk7XHJcbiAgICB2YXIgQXVkaW9Db250ZXh0ID0gd2luZG93LkF1ZGlvQ29udGV4dDtcclxuICAgIGNvbnRleHQgPSBuZXcgQXVkaW9Db250ZXh0KCk7IC8vIEF1ZGlvQ29udGV4dCBvYmplY3QgaW5zdGFuY2VcclxuICAgIGFuYWx5c2VyID0gY29udGV4dC5jcmVhdGVBbmFseXNlcigpOyAvLyBBbmFseXNlck5vZGUgbWV0aG9kXHJcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XHJcbiAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIC8vIFJlLXJvdXRlIGF1ZGlvIHBsYXliYWNrIGludG8gdGhlIHByb2Nlc3NpbmcgZ3JhcGggb2YgdGhlIEF1ZGlvQ29udGV4dFxyXG4gICAgc291cmNlID0gY29udGV4dC5jcmVhdGVNZWRpYUVsZW1lbnRTb3VyY2UoYXVkaW8pO1xyXG4gICAgc291cmNlLmNvbm5lY3QoYW5hbHlzZXIpO1xyXG4gICAgYW5hbHlzZXIuY29ubmVjdChjb250ZXh0LmRlc3RpbmF0aW9uKTtcclxuICAgIGZyYW1lTG9vcGVyKCk7XHJcbn1cclxuLy8gZnJhbWVMb29wZXIoKSBhbmltYXRlcyBhbnkgc3R5bGUgb2YgZ3JhcGhpY3MgeW91IHdpc2ggdG8gdGhlIGF1ZGlvIGZyZXF1ZW5jeVxyXG4vLyBMb29waW5nIGF0IHRoZSBkZWZhdWx0IGZyYW1lIHJhdGUgdGhhdCB0aGUgYnJvd3NlciBwcm92aWRlcyhhcHByb3guIDYwIEZQUylcclxuZnVuY3Rpb24gZnJhbWVMb29wZXIoKSB7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZyYW1lTG9vcGVyKTtcclxuICAgIGZiY19hcnJheSA9IG5ldyBVaW50OEFycmF5KGFuYWx5c2VyLmZyZXF1ZW5jeUJpbkNvdW50KTtcclxuICAgIGFuYWx5c2VyLmdldEJ5dGVGcmVxdWVuY3lEYXRhKGZiY19hcnJheSk7XHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7IC8vIENsZWFyIHRoZSBjYW52YXNcclxuICAgIGN0eC5maWxsU3R5bGUgPSAnIzAwQ0NGRic7IC8vIENvbG9yIG9mIHRoZSBiYXJzXHJcbiAgICBiYXJzID0gMTAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBiYXJzOyBpKyspIHtcclxuICAgICAgICBiYXJfeCA9IGkgKiAzO1xyXG4gICAgICAgIGJhcl93aWR0aCA9IDI7XHJcbiAgICAgICAgYmFyX2hlaWdodCA9IC0oZmJjX2FycmF5W2ldIC8gMik7XHJcbiAgICAgICAgLy8gIGZpbGxSZWN0KCB4LCB5LCB3aWR0aCwgaGVpZ2h0ICkgLy8gRXhwbGFuYXRpb24gb2YgdGhlIHBhcmFtZXRlcnMgYmVsb3dcclxuICAgICAgICBjdHguZmlsbFJlY3QoYmFyX3gsIGNhbnZhcy5oZWlnaHQsIGJhcl93aWR0aCwgYmFyX2hlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuLy8gfVxyXG4iXSwic291cmNlUm9vdCI6IiJ9