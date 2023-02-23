/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --body-background: #dcdcdc;\n  --sidebar-background: #fffafa;\n  --name-container-color: #cffafe;\n}\n\nhtml,\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: var(--body-background);\n}\n\n.src {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.sidebar {\n  display: grid;\n  grid-template-rows: repeat(4, 1fr) 5fr;\n  background-color: var(--sidebar-background);\n}\n\n.sidebar > * {\n  align-self: center;\n  justify-self: center;\n}\n\n.side-name-container {\n  width: 100%;\n  align-self: normal;\n  background-color: var(--name-container-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.side-name-container:hover {\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n}\n\n.side-name {\n  cursor: pointer;\n}\n\n.side-name:hover {\n  font-size: 20px;\n}\n\n.main-container {\n  display: grid;\n  grid-template: 1fr 10fr / 1fr 4fr 1fr;\n}\n\n.main-middle {\n  grid-area: 2 / 2 / 3 / 3;\n}\n\n.control-folder {\n  align-self: normal;\n  width: 100%;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: var(--body-background);\n}\n\n.add-folder {\n  transition: 0.2s;\n  cursor: pointer;\n  border: 2px solid black;\n  background-color: greenyellow;\n  width: 60%;\n  height: 50%;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-folder:hover {\n  border: 3px solid black;\n  font-size: 18px;\n  font-weight: 600;\n  width: 65%;\n  height: 55%;\n}\n\n.bar-add {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.bar-add * {\n  align-self: center;\n  justify-self: center;\n}\n\n.container-name {\n  width: 50%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.container-name > * {\n  cursor: pointer;\n}\n\n.menu-folder {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.warn-folder {\n  font-size: 10px;\n  justify-self: center;\n  color: #900;\n  font-weight: bold;\n  border-radius: 0 0 5px 5px;\n  box-sizing: border-box;\n}\n\n.input-menu {\n  justify-self: center;\n  align-self: center;\n  width: 100%;\n}\n\n.input-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n}\n\n.control-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.add-menu {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  background-color: greenyellow;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50px;\n  border: 2px solid black;\n}\n\n.cancel-menu {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  background-color: red;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50px;\n  border: 2px solid black;\n}\n\n.cancel-menu > svg,\n.add-menu > svg {\n  width: 50%;\n  height: 50%;\n}\n\n.container-name {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.delete-name {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.delete-name > svg {\n  filter: invert(12%) sepia(97%) saturate(6040%) hue-rotate(1deg)\n    brightness(93%) contrast(119%);\n  width: 20px;\n  height: 20px;\n}\n\n.main-middle {\n  display: grid;\n  resize: both;\n  grid-template-rows: 20% repeat(10, 10%);\n}\n\n.main-name {\n  border-bottom: 2px solid black;\n  display: flex;\n  justify-content: space-around;\n}\n\n.top-adding {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.add-todo {\n  display: grid;\n}\n\n.add-todo > svg {\n  align-self: center;\n  justify-self: center;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n\n.input-search {\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n\n.input-date {\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,0BAA0B;EAC1B,6BAA6B;EAC7B,+BAA+B;AACjC;;AAEA;;EAEE;wEACsE;EACtE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wCAAwC;AAC1C;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,6CAA6C;EAC7C,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,8BAA8B;EAC9B,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qCAAqC;AACvC;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,2BAA2B;EAC3B,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,uBAAuB;EACvB,6BAA6B;EAC7B,UAAU;EACV,WAAW;EACX,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,uBAAuB;EACvB,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,oBAAoB;EACpB,WAAW;EACX,iBAAiB;EACjB,0BAA0B;EAC1B,sBAAsB;AACxB;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,6BAA6B;EAC7B,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,eAAe;EACf,qBAAqB;EACrB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;EAEE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE;kCACgC;EAChC,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,uCAAuC;AACzC;;AAEA;EACE,8BAA8B;EAC9B,aAAa;EACb,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;EACpB,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,aAAa;AACf","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --body-background: #dcdcdc;\n  --sidebar-background: #fffafa;\n  --name-container-color: #cffafe;\n}\n\nhtml,\nbody {\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: var(--body-background);\n}\n\n.src {\n  width: 100%;\n  height: 100%;\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n}\n\n.sidebar {\n  display: grid;\n  grid-template-rows: repeat(4, 1fr) 5fr;\n  background-color: var(--sidebar-background);\n}\n\n.sidebar > * {\n  align-self: center;\n  justify-self: center;\n}\n\n.side-name-container {\n  width: 100%;\n  align-self: normal;\n  background-color: var(--name-container-color);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.side-name-container:hover {\n  border-bottom: 3px solid black;\n  border-right: 3px solid black;\n}\n\n.side-name {\n  cursor: pointer;\n}\n\n.side-name:hover {\n  font-size: 20px;\n}\n\n.main-container {\n  display: grid;\n  grid-template: 1fr 10fr / 1fr 4fr 1fr;\n}\n\n.main-middle {\n  grid-area: 2 / 2 / 3 / 3;\n}\n\n.control-folder {\n  align-self: normal;\n  width: 100%;\n  border-top: 2px solid black;\n  border-bottom: 2px solid black;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: var(--body-background);\n}\n\n.add-folder {\n  transition: 0.2s;\n  cursor: pointer;\n  border: 2px solid black;\n  background-color: greenyellow;\n  width: 60%;\n  height: 50%;\n  font-size: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.add-folder:hover {\n  border: 3px solid black;\n  font-size: 18px;\n  font-weight: 600;\n  width: 65%;\n  height: 55%;\n}\n\n.bar-add {\n  display: grid;\n  width: 100%;\n  height: 100%;\n  grid-template-rows: repeat(10, 1fr);\n}\n\n.bar-add * {\n  align-self: center;\n  justify-self: center;\n}\n\n.container-name {\n  width: 50%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.container-name > * {\n  cursor: pointer;\n}\n\n.menu-folder {\n  display: grid;\n  grid-template-rows: 1fr 1fr;\n}\n\n.warn-folder {\n  font-size: 10px;\n  justify-self: center;\n  color: #900;\n  font-weight: bold;\n  border-radius: 0 0 5px 5px;\n  box-sizing: border-box;\n}\n\n.input-menu {\n  justify-self: center;\n  align-self: center;\n  width: 100%;\n}\n\n.input-container {\n  width: 100%;\n  height: 100%;\n  display: grid;\n}\n\n.control-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n}\n\n.add-menu {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  background-color: greenyellow;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50px;\n  border: 2px solid black;\n}\n\n.cancel-menu {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  background-color: red;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50px;\n  border: 2px solid black;\n}\n\n.cancel-menu > svg,\n.add-menu > svg {\n  width: 50%;\n  height: 50%;\n}\n\n.container-name {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.delete-name {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.delete-name > svg {\n  filter: invert(12%) sepia(97%) saturate(6040%) hue-rotate(1deg)\n    brightness(93%) contrast(119%);\n  width: 20px;\n  height: 20px;\n}\n\n.main-middle {\n  display: grid;\n  resize: both;\n  grid-template-rows: 20% repeat(10, 10%);\n}\n\n.main-name {\n  border-bottom: 2px solid black;\n  display: flex;\n  justify-content: space-around;\n}\n\n.top-adding {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.add-todo {\n  display: grid;\n}\n\n.add-todo > svg {\n  align-self: center;\n  justify-self: center;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n}\n\n.input-search {\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n\n.input-date {\n  background-color: transparent;\n  border: none;\n  outline: none;\n}\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
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
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/methods.js":
/*!***********************************!*\
  !*** ./src/components/methods.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImgCreate": () => (/* binding */ ImgCreate),
/* harmony export */   "divCreate": () => (/* binding */ divCreate),
/* harmony export */   "fieldsetCreate": () => (/* binding */ fieldsetCreate),
/* harmony export */   "h1Create": () => (/* binding */ h1Create),
/* harmony export */   "h2Create": () => (/* binding */ h2Create),
/* harmony export */   "h3Create": () => (/* binding */ h3Create),
/* harmony export */   "h4Create": () => (/* binding */ h4Create),
/* harmony export */   "h5Create": () => (/* binding */ h5Create),
/* harmony export */   "inputCreate": () => (/* binding */ inputCreate),
/* harmony export */   "methodCreate": () => (/* binding */ methodCreate),
/* harmony export */   "navCreate": () => (/* binding */ navCreate),
/* harmony export */   "pCreate": () => (/* binding */ pCreate)
/* harmony export */ });
// Made by MrEpoch

// This file was made to be exported for use in other files, it holds methods for creating html elements in easier way

// divCreate function expression takes like first what is inside and then class and returns div at end

const methodCreate = (htmlName, inside, classAdd, idAdd, innerHtml) => {
  const element = document.createElement(htmlName);
  element.append(inside);
  element.classList.add(classAdd);
  if (idAdd) {
    element.id = idAdd;
  }
  if (innerHtml) {
    element.innerHTML = innerHtml;
  }
  return element;
};

const divCreate = (InsideDiv, classAdd, idAdd, innerHtml) => {
  const div = document.createElement("div");
  div.append(InsideDiv);
  div.classList.add(classAdd);
  if (idAdd) {
    div.id = idAdd;
  }
  if (innerHtml) {
    div.innerHTML = innerHtml;
  }
  return div;
};

const navCreate = (InsideNav, classAdd, idAdd) => {
  const nav = document.createElement("nav");
  nav.append(InsideNav);
  nav.classList.add(classAdd);
  if (idAdd) {
    nav.id = idAdd;
  }
  return nav;
};

// ImgCreate is returns takes Imported img and returns it ready for use to append to the div or other use

const ImgCreate = (image) => {
  const img = new Image();
  img.src = image;
  return img;
};

// h2Create creates h2 element which takes textContent and class and returns h2

const h1Create = (TextInside, classAdd, idAdd) => {
  const h1 = document.createElement("h1");
  h1.textContent = TextInside;
  h1.classList.add(classAdd);
  if (idAdd) {
    h1.id = idAdd;
  }
  return h1;
};

const h2Create = (TextInside, classAdd, idAdd) => {
  const h2 = document.createElement("h2");
  h2.textContent = TextInside;
  h2.classList.add(classAdd);
  if (idAdd) {
    h2.id = idAdd;
  }
  return h2;
};

const h3Create = (TextInside, classAdd, idAdd) => {
  const h3 = document.createElement("h3");
  h3.textContent = TextInside;
  h3.classList.add(classAdd);
  if (idAdd) {
    h3.id = idAdd;
  }
  return h3;
};

// h4Create creates h4 element which takes textContent and class and returns h4

const h4Create = (TextInside, classAdd, idAdd) => {
  const h4 = document.createElement("h4");
  h4.textContent = TextInside;
  h4.classList.add(classAdd);
  if (idAdd) {
    h4.id = idAdd;
  }
  return h4;
};

const h5Create = (TextInside, classAdd, idAdd) => {
  const h5 = document.createElement("h5");
  h5.textContent = TextInside;
  h5.classList.add(classAdd);
  if (idAdd) {
    h5.id = idAdd;
  }
  return h5;
};

// pCreate creates paragrahp with first parameter text and second class and returns paragraph

const pCreate = (TextInside, classAdd, idAdd) => {
  const p = document.createElement("p");
  p.textContent = TextInside;
  p.classList.add(classAdd);
  if (idAdd) {
    p.id = idAdd;
  }
  return p;
};

const inputCreate = (placeHolder, classAdd, type) => {
  const input = document.createElement("input");
  input.placeholder = placeHolder;
  input.classList.add(classAdd);
  input.type = type;

  return input;
};

const fieldsetCreate = (InsideField, classAdd, idAdd) => {
  const field = document.createElement("fieldset");
  field.append(InsideField);
  field.classList.add(classAdd);
  if (idAdd) {
    field.id = idAdd;
  }
  return field;
};

// exporting all function expressions




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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/methods.js */ "./src/components/methods.js");



const src = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "src");
const allName = "Todo-List-2";
let allFolder = {};
let displayFolder = "main";

function loadFolderCheck() {
  if (JSON.parse(localStorage.getItem(allName)) === null) {
    allFolder.main = [];
    localStorage.setItem(allName, JSON.stringify(allFolder));
  } else {
    allFolder = JSON.parse(localStorage.getItem(allName));
  }
}

loadFolderCheck();

function loadNewFolder(folder) {
  allFolder[folder] = [];
  localStorage.setItem(allName, JSON.stringify(allFolder));
}

function nameLoad(AppendHere) {
  AppendHere.innerHTML = "";
  let nameArr = [];
  for (const name in allFolder) {
    if (name !== "main") {
      const deleteSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete folder</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z" /></svg>`;
      const contName = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "container-name");
      const delName = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", `delete-name`, "", deleteSymbol);
      const nameH4 = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.h4Create(name, `name-bar`);
      contName.append(nameH4, delName);
      AppendHere.append(contName);
      nameArr.push(name);
    }
  }
  let count = 0;
  const delLogic = AppendHere.querySelectorAll(`.delete-name`);
  delLogic.forEach((folder) => {
    folder.addEventListener("click", () => {
      delete allFolder[nameArr[count]];
      count += 1;
      localStorage.setItem(allName, JSON.stringify(allFolder));
      nameLoad(AppendHere);
    });
  });
}

function createSideBar() {
  const sideBar = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "sidebar");
  const nameCont = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "side-name-container");
  const name = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.h3Create("Todo App", "side-name");
  const folderName = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.h3Create("main", "folder-name");
  const thisWeek = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.h3Create("This week", "this-week");

  function createFolderControl() {
    const controlBar = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "control-folder");
    const addFolder = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("add", "add-folder");
    controlBar.append(addFolder);
    return controlBar;
  }

  function createAddBar() {
    const bar = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "bar-add");

    bar.append();
    return bar;
  }

  const addBar = createAddBar();
  const folderControl = createFolderControl();
  nameCont.append(name);

  sideBar.append(nameCont, folderName, thisWeek, folderControl, addBar);
  return sideBar;
}

function createMainBody() {
  const main = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "main-container");
  const folderName = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "main-name");
  const inputEleSearch = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.inputCreate("main", "input-search", "text");
  const inputDateSearch = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.inputCreate("", "input-date", "date");

  folderName.append(inputEleSearch, inputDateSearch);
  const workMiddle = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "main-middle");
  const topAdd = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "top-adding");
  const addTodoSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Add Todo</title><path d="M20.7,7C21.1,6.6 21.1,6 20.7,5.6L18.4,3.3C18,2.9 17.4,2.9 17,3.3L15.2,5.1L19,8.9M3,17.2V21H6.8L17.8,9.9L14.1,6.1L3,17.2M7,2V5H10V7H7V10H5V7H2V5H5V2H7Z" /></svg>`;
  const addTodo = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "add-todo", "", addTodoSymbol);
  topAdd.append(folderName, addTodo);
  workMiddle.append(topAdd);
  main.append(workMiddle);
  return main;
}

// temporary
src.append(createSideBar(), createMainBody());

function contentLoad(folder) {
  const barToAppend = src.querySelector(".main-middle");

  const mainFold = allFolder[folder];
  const mainFoldEle = src.querySelector(".folder-name");
  const weekFold = allFolder["weekFolder"];
  const weekFoldEle = src.querySelector(".this-week");

  mainFoldEle.addEventListener("click", () => {
    barToAppend.append();
  });

  weekFoldEle.addEventListener("click", () => {});
}

function addToFolder() {
  const addTodoEle = src.querySelector(".add-todo");
  const todoThing = src.querySelector(".input-search");
  const todoDate = src.querySelector(".input-date");
  addTodoEle.addEventListener("click", () => {
    let dateVal = todoDate.value;
    if (todoDate.value.length === 0) {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDay();
      dateVal = `${day}.${month}.${year}`;
    }
    const objectMix = {
      text: todoThing.value,
      date: dateVal,
    };
    allFolder[displayFolder].push(objectMix);
    localStorage.setItem(allName, JSON.stringify(allFolder));
  });
}

addToFolder();

const FolderBar = src.querySelector(".bar-add");
nameLoad(FolderBar);

function folderControlLogic() {
  const addBtn = src.querySelector(".add-folder");
  const contFolder = src.querySelector(".control-folder");
  function addMenu() {
    const addSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>file-document-plus</title><path d="M14 2H6C4.89 2 4 2.89 4 4V20C4 21.11 4.89 22 6 22H13.81C13.28 21.09 13 20.05 13 19C13 18.67 13.03 18.33 13.08 18H6V16H13.81C14.27 15.2 14.91 14.5 15.68 14H6V12H18V13.08C18.33 13.03 18.67 13 19 13S19.67 13.03 20 13.08V8L14 2M13 9V3.5L18.5 9H13M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z" /></svg>`;
    const cancelSymbol = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>`;
    const menu = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "menu-folder");
    const contContainer = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "control-container");
    const add = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("add", "add-menu", "", addSymbol);
    const cancel = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "cancel-menu", "", cancelSymbol);
    const inputContainer = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.divCreate("", "input-container");
    const input = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.inputCreate("", "input-menu");
    input.setAttribute("maxlength", "16");
    const warning = _components_methods_js__WEBPACK_IMPORTED_MODULE_1__.methodCreate("span", "", "warn-folder");
    inputContainer.append(input, warning);
    contContainer.append(add, cancel);
    menu.append(inputContainer, contContainer);
    return menu;
  }
  addBtn.addEventListener("click", () => {
    const after = contFolder.innerHTML;
    contFolder.innerHTML = "";
    contFolder.append(addMenu());
    const newAdd = contFolder.querySelector(".add-menu");
    const decline = contFolder.querySelector(".cancel-menu");
    const inputVal = contFolder.querySelector(".input-menu");
    const warnInput = contFolder.querySelector(".warn-folder");
    newAdd.addEventListener("click", () => {
      if (
        inputVal.value.trim().length !== 0 &&
        Object.keys(allFolder).length <= 5
      ) {
        loadNewFolder(inputVal.value);
        nameLoad(FolderBar);
        contFolder.innerHTML = after;
        folderControlLogic();
      } else if (
        inputVal.value.trim().length === 0 &&
        Object.keys(allFolder).length <= 5
      ) {
        warnInput.textContent = "Nameless folder";
      } else {
        warnInput.textContent = "max 5 folders";
      }
    });
    decline.addEventListener("click", () => {
      contFolder.innerHTML = after;
      folderControlLogic();
    });
  });
  const folderDel = src.querySelector(".delete-name");
}

folderControlLogic();

src.querySelector(".side-name").addEventListener("click", () => {
  window.location.reload();
});

//
document.body.append(src);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw2REFBZ0I7QUFDakMsMEJBQTBCLDZEQUFnQjtBQUMxQyxnQkFBZ0IsNkRBQWdCO0FBQ2hDLG1CQUFtQiw2REFBZ0I7QUFDbkMsMkJBQTJCLDZEQUFnQjtBQUMzQyxrQkFBa0IsK0RBQWtCO0FBQ3BDO0FBQ0Esb0JBQW9CLGdFQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvLi9zcmMvY29tcG9uZW50cy9tZXRob2RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3QtMi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC0yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0LTIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC0yLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1ib2R5LWJhY2tncm91bmQ6ICNkY2RjZGM7XFxuICAtLXNpZGViYXItYmFja2dyb3VuZDogI2ZmZmFmYTtcXG4gIC0tbmFtZS1jb250YWluZXItY29sb3I6ICNjZmZhZmU7XFxufVxcblxcbmh0bWwsXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZCk7XFxufVxcblxcbi5zcmMge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKSA1ZnI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWJhY2tncm91bmQpO1xcbn1cXG5cXG4uc2lkZWJhciA+ICoge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlLW5hbWUtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24tc2VsZjogbm9ybWFsO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmFtZS1jb250YWluZXItY29sb3IpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGUtbmFtZS1jb250YWluZXI6aG92ZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5zaWRlLW5hbWUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZS1uYW1lOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOiAxZnIgMTBmciAvIDFmciA0ZnIgMWZyO1xcbn1cXG5cXG4ubWFpbi1taWRkbGUge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyAzO1xcbn1cXG5cXG4uY29udHJvbC1mb2xkZXIge1xcbiAgYWxpZ24tc2VsZjogbm9ybWFsO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9keS1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLmFkZC1mb2xkZXIge1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYWRkLWZvbGRlcjpob3ZlciB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB3aWR0aDogNjUlO1xcbiAgaGVpZ2h0OiA1NSU7XFxufVxcblxcbi5iYXItYWRkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG5cXG4uYmFyLWFkZCAqIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyLW5hbWUge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmNvbnRhaW5lci1uYW1lID4gKiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZW51LWZvbGRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbn1cXG5cXG4ud2Fybi1mb2xkZXIge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBjb2xvcjogIzkwMDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaW5wdXQtbWVudSB7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmNvbnRyb2wtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uYWRkLW1lbnUge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jYW5jZWwtbWVudSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jYW5jZWwtbWVudSA+IHN2ZyxcXG4uYWRkLW1lbnUgPiBzdmcge1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG5cXG4uY29udGFpbmVyLW5hbWUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmRlbGV0ZS1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtbmFtZSA+IHN2ZyB7XFxuICBmaWx0ZXI6IGludmVydCgxMiUpIHNlcGlhKDk3JSkgc2F0dXJhdGUoNjA0MCUpIGh1ZS1yb3RhdGUoMWRlZylcXG4gICAgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDExOSUpO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5tYWluLW1pZGRsZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcmVzaXplOiBib3RoO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMCUgcmVwZWF0KDEwLCAxMCUpO1xcbn1cXG5cXG4ubWFpbi1uYW1lIHtcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnRvcC1hZGRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmFkZC10b2RvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5hZGQtdG9kbyA+IHN2ZyB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW5wdXQtc2VhcmNoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLmlucHV0LWRhdGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLCtCQUErQjtBQUNqQzs7QUFFQTs7RUFFRTt3RUFDc0U7RUFDdEUsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNDQUFzQztFQUN0QywyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw2Q0FBNkM7RUFDN0MsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLDBCQUEwQjtFQUMxQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO2tDQUNnQztFQUNoQyxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbjpyb290IHtcXG4gIC0tYm9keS1iYWNrZ3JvdW5kOiAjZGNkY2RjO1xcbiAgLS1zaWRlYmFyLWJhY2tncm91bmQ6ICNmZmZhZmE7XFxuICAtLW5hbWUtY29udGFpbmVyLWNvbG9yOiAjY2ZmYWZlO1xcbn1cXG5cXG5odG1sLFxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sXFxuICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFxcXCJPcGVuIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib2R5LWJhY2tncm91bmQpO1xcbn1cXG5cXG4uc3JjIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcikgNWZyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1iYWNrZ3JvdW5kKTtcXG59XFxuXFxuLnNpZGViYXIgPiAqIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc2lkZS1uYW1lLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLXNlbGY6IG5vcm1hbDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hbWUtY29udGFpbmVyLWNvbG9yKTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaWRlLW5hbWUtY29udGFpbmVyOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yaWdodDogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uc2lkZS1uYW1lIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGUtbmFtZTpob3ZlciB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTogMWZyIDEwZnIgLyAxZnIgNGZyIDFmcjtcXG59XFxuXFxuLm1haW4tbWlkZGxlIHtcXG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG59XFxuXFxuLmNvbnRyb2wtZm9sZGVyIHtcXG4gIGFsaWduLXNlbGY6IG5vcm1hbDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHktYmFja2dyb3VuZCk7XFxufVxcblxcbi5hZGQtZm9sZGVyIHtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbiAgd2lkdGg6IDYwJTtcXG4gIGhlaWdodDogNTAlO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmFkZC1mb2xkZXI6aG92ZXIge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgd2lkdGg6IDY1JTtcXG4gIGhlaWdodDogNTUlO1xcbn1cXG5cXG4uYmFyLWFkZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuXFxuLmJhci1hZGQgKiB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRhaW5lci1uYW1lIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5jb250YWluZXItbmFtZSA+ICoge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVudS1mb2xkZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG59XFxuXFxuLndhcm4tZm9sZGVyIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgY29sb3I6ICM5MDA7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmlucHV0LW1lbnUge1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5jb250cm9sLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmFkZC1tZW51IHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW55ZWxsb3c7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2FuY2VsLW1lbnUge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2FuY2VsLW1lbnUgPiBzdmcsXFxuLmFkZC1tZW51ID4gc3ZnIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDUwJTtcXG59XFxuXFxuLmNvbnRhaW5lci1uYW1lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5kZWxldGUtbmFtZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGVsZXRlLW5hbWUgPiBzdmcge1xcbiAgZmlsdGVyOiBpbnZlcnQoMTIlKSBzZXBpYSg5NyUpIHNhdHVyYXRlKDYwNDAlKSBodWUtcm90YXRlKDFkZWcpXFxuICAgIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCgxMTklKTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG4ubWFpbi1taWRkbGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHJlc2l6ZTogYm90aDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMjAlIHJlcGVhdCgxMCwgMTAlKTtcXG59XFxuXFxuLm1haW4tbmFtZSB7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi50b3AtYWRkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5hZGQtdG9kbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYWRkLXRvZG8gPiBzdmcge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmlucHV0LXNlYXJjaCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5pbnB1dC1kYXRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gTWFkZSBieSBNckVwb2NoXG5cbi8vIFRoaXMgZmlsZSB3YXMgbWFkZSB0byBiZSBleHBvcnRlZCBmb3IgdXNlIGluIG90aGVyIGZpbGVzLCBpdCBob2xkcyBtZXRob2RzIGZvciBjcmVhdGluZyBodG1sIGVsZW1lbnRzIGluIGVhc2llciB3YXlcblxuLy8gZGl2Q3JlYXRlIGZ1bmN0aW9uIGV4cHJlc3Npb24gdGFrZXMgbGlrZSBmaXJzdCB3aGF0IGlzIGluc2lkZSBhbmQgdGhlbiBjbGFzcyBhbmQgcmV0dXJucyBkaXYgYXQgZW5kXG5cbmNvbnN0IG1ldGhvZENyZWF0ZSA9IChodG1sTmFtZSwgaW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQsIGlubmVySHRtbCkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChodG1sTmFtZSk7XG4gIGVsZW1lbnQuYXBwZW5kKGluc2lkZSk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGVsZW1lbnQuaWQgPSBpZEFkZDtcbiAgfVxuICBpZiAoaW5uZXJIdG1sKSB7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gIH1cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5jb25zdCBkaXZDcmVhdGUgPSAoSW5zaWRlRGl2LCBjbGFzc0FkZCwgaWRBZGQsIGlubmVySHRtbCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuYXBwZW5kKEluc2lkZURpdik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgZGl2LmlkID0gaWRBZGQ7XG4gIH1cbiAgaWYgKGlubmVySHRtbCkge1xuICAgIGRpdi5pbm5lckhUTUwgPSBpbm5lckh0bWw7XG4gIH1cbiAgcmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IG5hdkNyZWF0ZSA9IChJbnNpZGVOYXYsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBuYXYuYXBwZW5kKEluc2lkZU5hdik7XG4gIG5hdi5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgbmF2LmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIG5hdjtcbn07XG5cbi8vIEltZ0NyZWF0ZSBpcyByZXR1cm5zIHRha2VzIEltcG9ydGVkIGltZyBhbmQgcmV0dXJucyBpdCByZWFkeSBmb3IgdXNlIHRvIGFwcGVuZCB0byB0aGUgZGl2IG9yIG90aGVyIHVzZVxuXG5jb25zdCBJbWdDcmVhdGUgPSAoaW1hZ2UpID0+IHtcbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gIGltZy5zcmMgPSBpbWFnZTtcbiAgcmV0dXJuIGltZztcbn07XG5cbi8vIGgyQ3JlYXRlIGNyZWF0ZXMgaDIgZWxlbWVudCB3aGljaCB0YWtlcyB0ZXh0Q29udGVudCBhbmQgY2xhc3MgYW5kIHJldHVybnMgaDJcblxuY29uc3QgaDFDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoMS50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIGgxLmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBoMS5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBoMTtcbn07XG5cbmNvbnN0IGgyQ3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgaDIudGV4dENvbnRlbnQgPSBUZXh0SW5zaWRlO1xuICBoMi5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgaDIuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gaDI7XG59O1xuXG5jb25zdCBoM0NyZWF0ZSA9IChUZXh0SW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGgzLnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgaDMuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGgzLmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIGgzO1xufTtcblxuLy8gaDRDcmVhdGUgY3JlYXRlcyBoNCBlbGVtZW50IHdoaWNoIHRha2VzIHRleHRDb250ZW50IGFuZCBjbGFzcyBhbmQgcmV0dXJucyBoNFxuXG5jb25zdCBoNENyZWF0ZSA9IChUZXh0SW5zaWRlLCBjbGFzc0FkZCwgaWRBZGQpID0+IHtcbiAgY29uc3QgaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGg0LnRleHRDb250ZW50ID0gVGV4dEluc2lkZTtcbiAgaDQuY2xhc3NMaXN0LmFkZChjbGFzc0FkZCk7XG4gIGlmIChpZEFkZCkge1xuICAgIGg0LmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIGg0O1xufTtcblxuY29uc3QgaDVDcmVhdGUgPSAoVGV4dEluc2lkZSwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg1XCIpO1xuICBoNS50ZXh0Q29udGVudCA9IFRleHRJbnNpZGU7XG4gIGg1LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBoNS5pZCA9IGlkQWRkO1xuICB9XG4gIHJldHVybiBoNTtcbn07XG5cbi8vIHBDcmVhdGUgY3JlYXRlcyBwYXJhZ3JhaHAgd2l0aCBmaXJzdCBwYXJhbWV0ZXIgdGV4dCBhbmQgc2Vjb25kIGNsYXNzIGFuZCByZXR1cm5zIHBhcmFncmFwaFxuXG5jb25zdCBwQ3JlYXRlID0gKFRleHRJbnNpZGUsIGNsYXNzQWRkLCBpZEFkZCkgPT4ge1xuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHAudGV4dENvbnRlbnQgPSBUZXh0SW5zaWRlO1xuICBwLmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpZiAoaWRBZGQpIHtcbiAgICBwLmlkID0gaWRBZGQ7XG4gIH1cbiAgcmV0dXJuIHA7XG59O1xuXG5jb25zdCBpbnB1dENyZWF0ZSA9IChwbGFjZUhvbGRlciwgY2xhc3NBZGQsIHR5cGUpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnBsYWNlaG9sZGVyID0gcGxhY2VIb2xkZXI7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoY2xhc3NBZGQpO1xuICBpbnB1dC50eXBlID0gdHlwZTtcblxuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5jb25zdCBmaWVsZHNldENyZWF0ZSA9IChJbnNpZGVGaWVsZCwgY2xhc3NBZGQsIGlkQWRkKSA9PiB7XG4gIGNvbnN0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuICBmaWVsZC5hcHBlbmQoSW5zaWRlRmllbGQpO1xuICBmaWVsZC5jbGFzc0xpc3QuYWRkKGNsYXNzQWRkKTtcbiAgaWYgKGlkQWRkKSB7XG4gICAgZmllbGQuaWQgPSBpZEFkZDtcbiAgfVxuICByZXR1cm4gZmllbGQ7XG59O1xuXG4vLyBleHBvcnRpbmcgYWxsIGZ1bmN0aW9uIGV4cHJlc3Npb25zXG5cbmV4cG9ydCB7XG4gIG1ldGhvZENyZWF0ZSxcbiAgZGl2Q3JlYXRlLFxuICBuYXZDcmVhdGUsXG4gIEltZ0NyZWF0ZSxcbiAgaDFDcmVhdGUsXG4gIGgyQ3JlYXRlLFxuICBoM0NyZWF0ZSxcbiAgaDRDcmVhdGUsXG4gIGg1Q3JlYXRlLFxuICBwQ3JlYXRlLFxuICBpbnB1dENyZWF0ZSxcbiAgZmllbGRzZXRDcmVhdGUsXG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCAqIGFzIGNyZWF0ZSBmcm9tIFwiLi9jb21wb25lbnRzL21ldGhvZHMuanNcIjtcblxuY29uc3Qgc3JjID0gY3JlYXRlLmRpdkNyZWF0ZShcIlwiLCBcInNyY1wiKTtcbmNvbnN0IGFsbE5hbWUgPSBcIlRvZG8tTGlzdC0yXCI7XG5sZXQgYWxsRm9sZGVyID0ge307XG5sZXQgZGlzcGxheUZvbGRlciA9IFwibWFpblwiO1xuXG5mdW5jdGlvbiBsb2FkRm9sZGVyQ2hlY2soKSB7XG4gIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFsbE5hbWUpKSA9PT0gbnVsbCkge1xuICAgIGFsbEZvbGRlci5tYWluID0gW107XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYWxsTmFtZSwgSlNPTi5zdHJpbmdpZnkoYWxsRm9sZGVyKSk7XG4gIH0gZWxzZSB7XG4gICAgYWxsRm9sZGVyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhbGxOYW1lKSk7XG4gIH1cbn1cblxubG9hZEZvbGRlckNoZWNrKCk7XG5cbmZ1bmN0aW9uIGxvYWROZXdGb2xkZXIoZm9sZGVyKSB7XG4gIGFsbEZvbGRlcltmb2xkZXJdID0gW107XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGFsbE5hbWUsIEpTT04uc3RyaW5naWZ5KGFsbEZvbGRlcikpO1xufVxuXG5mdW5jdGlvbiBuYW1lTG9hZChBcHBlbmRIZXJlKSB7XG4gIEFwcGVuZEhlcmUuaW5uZXJIVE1MID0gXCJcIjtcbiAgbGV0IG5hbWVBcnIgPSBbXTtcbiAgZm9yIChjb25zdCBuYW1lIGluIGFsbEZvbGRlcikge1xuICAgIGlmIChuYW1lICE9PSBcIm1haW5cIikge1xuICAgICAgY29uc3QgZGVsZXRlU3ltYm9sID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZGVsZXRlIGZvbGRlcjwvdGl0bGU+PHBhdGggZD1cIk0xMiwyQzE3LjUzLDIgMjIsNi40NyAyMiwxMkMyMiwxNy41MyAxNy41MywyMiAxMiwyMkM2LjQ3LDIyIDIsMTcuNTMgMiwxMkMyLDYuNDcgNi40NywyIDEyLDJNMTcsN0gxNC41TDEzLjUsNkgxMC41TDkuNSw3SDdWOUgxN1Y3TTksMThIMTVBMSwxIDAgMCwwIDE2LDE3VjEwSDhWMTdBMSwxIDAgMCwwIDksMThaXCIgLz48L3N2Zz5gO1xuICAgICAgY29uc3QgY29udE5hbWUgPSBjcmVhdGUuZGl2Q3JlYXRlKFwiXCIsIFwiY29udGFpbmVyLW5hbWVcIik7XG4gICAgICBjb25zdCBkZWxOYW1lID0gY3JlYXRlLmRpdkNyZWF0ZShcIlwiLCBgZGVsZXRlLW5hbWVgLCBcIlwiLCBkZWxldGVTeW1ib2wpO1xuICAgICAgY29uc3QgbmFtZUg0ID0gY3JlYXRlLmg0Q3JlYXRlKG5hbWUsIGBuYW1lLWJhcmApO1xuICAgICAgY29udE5hbWUuYXBwZW5kKG5hbWVINCwgZGVsTmFtZSk7XG4gICAgICBBcHBlbmRIZXJlLmFwcGVuZChjb250TmFtZSk7XG4gICAgICBuYW1lQXJyLnB1c2gobmFtZSk7XG4gICAgfVxuICB9XG4gIGxldCBjb3VudCA9IDA7XG4gIGNvbnN0IGRlbExvZ2ljID0gQXBwZW5kSGVyZS5xdWVyeVNlbGVjdG9yQWxsKGAuZGVsZXRlLW5hbWVgKTtcbiAgZGVsTG9naWMuZm9yRWFjaCgoZm9sZGVyKSA9PiB7XG4gICAgZm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkZWxldGUgYWxsRm9sZGVyW25hbWVBcnJbY291bnRdXTtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhbGxOYW1lLCBKU09OLnN0cmluZ2lmeShhbGxGb2xkZXIpKTtcbiAgICAgIG5hbWVMb2FkKEFwcGVuZEhlcmUpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2lkZUJhcigpIHtcbiAgY29uc3Qgc2lkZUJhciA9IGNyZWF0ZS5kaXZDcmVhdGUoXCJcIiwgXCJzaWRlYmFyXCIpO1xuICBjb25zdCBuYW1lQ29udCA9IGNyZWF0ZS5kaXZDcmVhdGUoXCJcIiwgXCJzaWRlLW5hbWUtY29udGFpbmVyXCIpO1xuICBjb25zdCBuYW1lID0gY3JlYXRlLmgzQ3JlYXRlKFwiVG9kbyBBcHBcIiwgXCJzaWRlLW5hbWVcIik7XG4gIGNvbnN0IGZvbGRlck5hbWUgPSBjcmVhdGUuaDNDcmVhdGUoXCJtYWluXCIsIFwiZm9sZGVyLW5hbWVcIik7XG4gIGNvbnN0IHRoaXNXZWVrID0gY3JlYXRlLmgzQ3JlYXRlKFwiVGhpcyB3ZWVrXCIsIFwidGhpcy13ZWVrXCIpO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUZvbGRlckNvbnRyb2woKSB7XG4gICAgY29uc3QgY29udHJvbEJhciA9IGNyZWF0ZS5kaXZDcmVhdGUoXCJcIiwgXCJjb250cm9sLWZvbGRlclwiKTtcbiAgICBjb25zdCBhZGRGb2xkZXIgPSBjcmVhdGUuZGl2Q3JlYXRlKFwiYWRkXCIsIFwiYWRkLWZvbGRlclwiKTtcbiAgICBjb250cm9sQmFyLmFwcGVuZChhZGRGb2xkZXIpO1xuICAgIHJldHVybiBjb250cm9sQmFyO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQWRkQmFyKCkge1xuICAgIGNvbnN0IGJhciA9IGNyZWF0ZS5kaXZDcmVhdGUoXCJcIiwgXCJiYXItYWRkXCIpO1xuXG4gICAgYmFyLmFwcGVuZCgpO1xuICAgIHJldHVybiBiYXI7XG4gIH1cblxuICBjb25zdCBhZGRCYXIgPSBjcmVhdGVBZGRCYXIoKTtcbiAgY29uc3QgZm9sZGVyQ29udHJvbCA9IGNyZWF0ZUZvbGRlckNvbnRyb2woKTtcbiAgbmFtZUNvbnQuYXBwZW5kKG5hbWUpO1xuXG4gIHNpZGVCYXIuYXBwZW5kKG5hbWVDb250LCBmb2xkZXJOYW1lLCB0aGlzV2VlaywgZm9sZGVyQ29udHJvbCwgYWRkQmFyKTtcbiAgcmV0dXJuIHNpZGVCYXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW5Cb2R5KCkge1xuICBjb25zdCBtYWluID0gY3JlYXRlLmRpdkNyZWF0ZShcIlwiLCBcIm1haW4tY29udGFpbmVyXCIpO1xuICBjb25zdCBmb2xkZXJOYW1lID0gY3JlYXRlLmRpdkNyZWF0ZShcIlwiLCBcIm1haW4tbmFtZVwiKTtcbiAgY29uc3QgaW5wdXRFbGVTZWFyY2ggPSBjcmVhdGUuaW5wdXRDcmVhdGUoXCJtYWluXCIsIFwiaW5wdXQtc2VhcmNoXCIsIFwidGV4dFwiKTtcbiAgY29uc3QgaW5wdXREYXRlU2VhcmNoID0gY3JlYXRlLmlucHV0Q3JlYXRlKFwiXCIsIFwiaW5wdXQtZGF0ZVwiLCBcImRhdGVcIik7XG5cbiAgZm9sZGVyTmFtZS5hcHBlbmQoaW5wdXRFbGVTZWFyY2gsIGlucHV0RGF0ZVNlYXJjaCk7XG4gIGNvbnN0IHdvcmtNaWRkbGUgPSBjcmVhdGUuZGl2Q3JlYXRlKFwiXCIsIFwibWFpbi1taWRkbGVcIik7XG4gIGNvbnN0IHRvcEFkZCA9IGNyZWF0ZS5kaXZDcmVhdGUoXCJcIiwgXCJ0b3AtYWRkaW5nXCIpO1xuICBjb25zdCBhZGRUb2RvU3ltYm9sID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+QWRkIFRvZG88L3RpdGxlPjxwYXRoIGQ9XCJNMjAuNyw3QzIxLjEsNi42IDIxLjEsNiAyMC43LDUuNkwxOC40LDMuM0MxOCwyLjkgMTcuNCwyLjkgMTcsMy4zTDE1LjIsNS4xTDE5LDguOU0zLDE3LjJWMjFINi44TDE3LjgsOS45TDE0LjEsNi4xTDMsMTcuMk03LDJWNUgxMFY3SDdWMTBINVY3SDJWNUg1VjJIN1pcIiAvPjwvc3ZnPmA7XG4gIGNvbnN0IGFkZFRvZG8gPSBjcmVhdGUuZGl2Q3JlYXRlKFwiXCIsIFwiYWRkLXRvZG9cIiwgXCJcIiwgYWRkVG9kb1N5bWJvbCk7XG4gIHRvcEFkZC5hcHBlbmQoZm9sZGVyTmFtZSwgYWRkVG9kbyk7XG4gIHdvcmtNaWRkbGUuYXBwZW5kKHRvcEFkZCk7XG4gIG1haW4uYXBwZW5kKHdvcmtNaWRkbGUpO1xuICByZXR1cm4gbWFpbjtcbn1cblxuLy8gdGVtcG9yYXJ5XG5zcmMuYXBwZW5kKGNyZWF0ZVNpZGVCYXIoKSwgY3JlYXRlTWFpbkJvZHkoKSk7XG5cbmZ1bmN0aW9uIGNvbnRlbnRMb2FkKGZvbGRlcikge1xuICBjb25zdCBiYXJUb0FwcGVuZCA9IHNyYy5xdWVyeVNlbGVjdG9yKFwiLm1haW4tbWlkZGxlXCIpO1xuXG4gIGNvbnN0IG1haW5Gb2xkID0gYWxsRm9sZGVyW2ZvbGRlcl07XG4gIGNvbnN0IG1haW5Gb2xkRWxlID0gc3JjLnF1ZXJ5U2VsZWN0b3IoXCIuZm9sZGVyLW5hbWVcIik7XG4gIGNvbnN0IHdlZWtGb2xkID0gYWxsRm9sZGVyW1wid2Vla0ZvbGRlclwiXTtcbiAgY29uc3Qgd2Vla0ZvbGRFbGUgPSBzcmMucXVlcnlTZWxlY3RvcihcIi50aGlzLXdlZWtcIik7XG5cbiAgbWFpbkZvbGRFbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBiYXJUb0FwcGVuZC5hcHBlbmQoKTtcbiAgfSk7XG5cbiAgd2Vla0ZvbGRFbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHt9KTtcbn1cblxuZnVuY3Rpb24gYWRkVG9Gb2xkZXIoKSB7XG4gIGNvbnN0IGFkZFRvZG9FbGUgPSBzcmMucXVlcnlTZWxlY3RvcihcIi5hZGQtdG9kb1wiKTtcbiAgY29uc3QgdG9kb1RoaW5nID0gc3JjLnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtc2VhcmNoXCIpO1xuICBjb25zdCB0b2RvRGF0ZSA9IHNyYy5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LWRhdGVcIik7XG4gIGFkZFRvZG9FbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgZGF0ZVZhbCA9IHRvZG9EYXRlLnZhbHVlO1xuICAgIGlmICh0b2RvRGF0ZS52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgY29uc3QgZGF5ID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgIGRhdGVWYWwgPSBgJHtkYXl9LiR7bW9udGh9LiR7eWVhcn1gO1xuICAgIH1cbiAgICBjb25zdCBvYmplY3RNaXggPSB7XG4gICAgICB0ZXh0OiB0b2RvVGhpbmcudmFsdWUsXG4gICAgICBkYXRlOiBkYXRlVmFsLFxuICAgIH07XG4gICAgYWxsRm9sZGVyW2Rpc3BsYXlGb2xkZXJdLnB1c2gob2JqZWN0TWl4KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhbGxOYW1lLCBKU09OLnN0cmluZ2lmeShhbGxGb2xkZXIpKTtcbiAgfSk7XG59XG5cbmFkZFRvRm9sZGVyKCk7XG5cbmNvbnN0IEZvbGRlckJhciA9IHNyYy5xdWVyeVNlbGVjdG9yKFwiLmJhci1hZGRcIik7XG5uYW1lTG9hZChGb2xkZXJCYXIpO1xuXG5mdW5jdGlvbiBmb2xkZXJDb250cm9sTG9naWMoKSB7XG4gIGNvbnN0IGFkZEJ0biA9IHNyYy5xdWVyeVNlbGVjdG9yKFwiLmFkZC1mb2xkZXJcIik7XG4gIGNvbnN0IGNvbnRGb2xkZXIgPSBzcmMucXVlcnlTZWxlY3RvcihcIi5jb250cm9sLWZvbGRlclwiKTtcbiAgZnVuY3Rpb24gYWRkTWVudSgpIHtcbiAgICBjb25zdCBhZGRTeW1ib2wgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5maWxlLWRvY3VtZW50LXBsdXM8L3RpdGxlPjxwYXRoIGQ9XCJNMTQgMkg2QzQuODkgMiA0IDIuODkgNCA0VjIwQzQgMjEuMTEgNC44OSAyMiA2IDIySDEzLjgxQzEzLjI4IDIxLjA5IDEzIDIwLjA1IDEzIDE5QzEzIDE4LjY3IDEzLjAzIDE4LjMzIDEzLjA4IDE4SDZWMTZIMTMuODFDMTQuMjcgMTUuMiAxNC45MSAxNC41IDE1LjY4IDE0SDZWMTJIMThWMTMuMDhDMTguMzMgMTMuMDMgMTguNjcgMTMgMTkgMTNTMTkuNjcgMTMuMDMgMjAgMTMuMDhWOEwxNCAyTTEzIDlWMy41TDE4LjUgOUgxM00xOCAxNVYxOEgxNVYyMEgxOFYyM0gyMFYyMEgyM1YxOEgyMFYxNUgxOFpcIiAvPjwvc3ZnPmA7XG4gICAgY29uc3QgY2FuY2VsU3ltYm9sID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2xvc2U8L3RpdGxlPjxwYXRoIGQ9XCJNMTksNi40MUwxNy41OSw1TDEyLDEwLjU5TDYuNDEsNUw1LDYuNDFMMTAuNTksMTJMNSwxNy41OUw2LjQxLDE5TDEyLDEzLjQxTDE3LjU5LDE5TDE5LDE3LjU5TDEzLjQxLDEyTDE5LDYuNDFaXCIgLz48L3N2Zz5gO1xuICAgIGNvbnN0IG1lbnUgPSBjcmVhdGUuZGl2Q3JlYXRlKFwiXCIsIFwibWVudS1mb2xkZXJcIik7XG4gICAgY29uc3QgY29udENvbnRhaW5lciA9IGNyZWF0ZS5kaXZDcmVhdGUoXCJcIiwgXCJjb250cm9sLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBhZGQgPSBjcmVhdGUuZGl2Q3JlYXRlKFwiYWRkXCIsIFwiYWRkLW1lbnVcIiwgXCJcIiwgYWRkU3ltYm9sKTtcbiAgICBjb25zdCBjYW5jZWwgPSBjcmVhdGUuZGl2Q3JlYXRlKFwiXCIsIFwiY2FuY2VsLW1lbnVcIiwgXCJcIiwgY2FuY2VsU3ltYm9sKTtcbiAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGNyZWF0ZS5kaXZDcmVhdGUoXCJcIiwgXCJpbnB1dC1jb250YWluZXJcIik7XG4gICAgY29uc3QgaW5wdXQgPSBjcmVhdGUuaW5wdXRDcmVhdGUoXCJcIiwgXCJpbnB1dC1tZW51XCIpO1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm1heGxlbmd0aFwiLCBcIjE2XCIpO1xuICAgIGNvbnN0IHdhcm5pbmcgPSBjcmVhdGUubWV0aG9kQ3JlYXRlKFwic3BhblwiLCBcIlwiLCBcIndhcm4tZm9sZGVyXCIpO1xuICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChpbnB1dCwgd2FybmluZyk7XG4gICAgY29udENvbnRhaW5lci5hcHBlbmQoYWRkLCBjYW5jZWwpO1xuICAgIG1lbnUuYXBwZW5kKGlucHV0Q29udGFpbmVyLCBjb250Q29udGFpbmVyKTtcbiAgICByZXR1cm4gbWVudTtcbiAgfVxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zdCBhZnRlciA9IGNvbnRGb2xkZXIuaW5uZXJIVE1MO1xuICAgIGNvbnRGb2xkZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjb250Rm9sZGVyLmFwcGVuZChhZGRNZW51KCkpO1xuICAgIGNvbnN0IG5ld0FkZCA9IGNvbnRGb2xkZXIucXVlcnlTZWxlY3RvcihcIi5hZGQtbWVudVwiKTtcbiAgICBjb25zdCBkZWNsaW5lID0gY29udEZvbGRlci5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1tZW51XCIpO1xuICAgIGNvbnN0IGlucHV0VmFsID0gY29udEZvbGRlci5xdWVyeVNlbGVjdG9yKFwiLmlucHV0LW1lbnVcIik7XG4gICAgY29uc3Qgd2FybklucHV0ID0gY29udEZvbGRlci5xdWVyeVNlbGVjdG9yKFwiLndhcm4tZm9sZGVyXCIpO1xuICAgIG5ld0FkZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBpbnB1dFZhbC52YWx1ZS50cmltKCkubGVuZ3RoICE9PSAwICYmXG4gICAgICAgIE9iamVjdC5rZXlzKGFsbEZvbGRlcikubGVuZ3RoIDw9IDVcbiAgICAgICkge1xuICAgICAgICBsb2FkTmV3Rm9sZGVyKGlucHV0VmFsLnZhbHVlKTtcbiAgICAgICAgbmFtZUxvYWQoRm9sZGVyQmFyKTtcbiAgICAgICAgY29udEZvbGRlci5pbm5lckhUTUwgPSBhZnRlcjtcbiAgICAgICAgZm9sZGVyQ29udHJvbExvZ2ljKCk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBpbnB1dFZhbC52YWx1ZS50cmltKCkubGVuZ3RoID09PSAwICYmXG4gICAgICAgIE9iamVjdC5rZXlzKGFsbEZvbGRlcikubGVuZ3RoIDw9IDVcbiAgICAgICkge1xuICAgICAgICB3YXJuSW5wdXQudGV4dENvbnRlbnQgPSBcIk5hbWVsZXNzIGZvbGRlclwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FybklucHV0LnRleHRDb250ZW50ID0gXCJtYXggNSBmb2xkZXJzXCI7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZGVjbGluZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29udEZvbGRlci5pbm5lckhUTUwgPSBhZnRlcjtcbiAgICAgIGZvbGRlckNvbnRyb2xMb2dpYygpO1xuICAgIH0pO1xuICB9KTtcbiAgY29uc3QgZm9sZGVyRGVsID0gc3JjLnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLW5hbWVcIik7XG59XG5cbmZvbGRlckNvbnRyb2xMb2dpYygpO1xuXG5zcmMucXVlcnlTZWxlY3RvcihcIi5zaWRlLW5hbWVcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufSk7XG5cbi8vXG5kb2N1bWVudC5ib2R5LmFwcGVuZChzcmMpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9