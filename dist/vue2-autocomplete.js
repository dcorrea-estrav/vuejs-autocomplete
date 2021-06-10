/*!
 * Copyright (c) 2021 Daniel H. (http://github.com/dcorrea-estrav),
 * ,Licensed Under MIT (http://opensource.org/licenses/MIT),
 * ,
 * ,Vue 2 Autocomplete @ Version 2.1.7,
 *
 */
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vue2Autocomplete"] = factory();
	else
		root["Vue2Autocomplete"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/vue-autocomplete.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/vue-autocomplete.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/*! Copyright (c) 2021 Daniel H (http://github.com/dcorrea-estrav)\r\n * Licensed Under MIT (http://opensource.org/licenses/MIT)\r\n *\r\n * Vue 2 Autocomplete @ Version 2.0.x\r\n *\r\n */\nvar ajax = void 0;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  props: {\n    id: String,\n    name: String,\n    className: String,\n    classes: {\n      type: Object,\n      default: function _default() {\n        return {\n          wrapper: false,\n          input: false,\n          list: false,\n          item: false\n        };\n      }\n    },\n    placeholder: String,\n    required: Boolean,\n\n    // Intial Value\n    initValue: {\n      type: String,\n      default: \"\"\n    },\n\n    // Manual List\n    options: Array,\n\n    // Filter After Get the data\n    filterByAnchor: {\n      type: Boolean,\n      default: true\n    },\n\n    // Anchor of list\n    anchor: {\n      type: String,\n      required: true\n    },\n\n    // Label of list\n    label: String,\n\n    // Debounce time\n    debounce: Number,\n\n    // ajax URL will be fetched\n    url: {\n      type: String,\n      required: true\n    },\n\n    // query param\n    param: {\n      type: String,\n      default: \"q\"\n    },\n\n    encodeParams: {\n      type: Boolean,\n      default: true\n    },\n\n    // Custom Params\n    customParams: Object,\n\n    // Custom Headers\n    customHeaders: Object,\n\n    // minimum length\n    min: {\n      type: Number,\n      default: 0\n    },\n\n    // Create a custom template from data.\n    onShouldRenderChild: Function,\n\n    // Process the result before retrieveng the result array.\n    process: Function,\n\n    // Callback\n    onInput: Function,\n    onShow: Function,\n    onBlur: Function,\n    onHide: Function,\n    onFocus: Function,\n    onSelect: Function,\n    onBeforeAjax: Function,\n    onAjaxProgress: Function,\n    onAjaxLoaded: Function,\n    onShouldGetData: Function\n  },\n\n  data: function data() {\n    return {\n      showList: false,\n      type: \"\",\n      json: [],\n      focusList: \"\",\n      debounceTask: undefined\n    };\n  },\n\n\n  watch: {\n    options: function options(newVal, oldVal) {\n      if (this.filterByAnchor) {\n        var type = this.type,\n            anchor = this.anchor;\n\n        var regex = new RegExp(\"\" + type, \"i\");\n        var filtered = newVal.filter(function (item) {\n          var found = item[anchor].search(regex) !== -1;\n          return found;\n        });\n        this.json = filtered;\n      } else {\n        this.json = newVal;\n      }\n    }\n  },\n\n  methods: {\n    getClassName: function getClassName(part) {\n      var classes = this.classes,\n          className = this.className;\n\n      if (classes[part]) return \"\" + classes[part];\n      return className ? className + \"-\" + part : \"\";\n    },\n\n\n    // Netralize Autocomplete\n    clearInput: function clearInput() {\n      this.showList = false;\n      this.type = \"\";\n      this.json = [];\n      this.focusList = \"\";\n    },\n\n\n    // Get the original data\n    cleanUp: function cleanUp(data) {\n      return JSON.parse(JSON.stringify(data));\n    },\n\n\n    /*==============================\r\n            INPUT EVENTS\r\n        =============================*/\n    handleInput: function handleInput(e) {\n      var _this = this;\n\n      var value = e.target.value;\n\n      this.showList = true;\n      // Callback Event\n      if (this.onInput) this.onInput(value);\n      // If Debounce\n      if (this.debounce) {\n        if (this.debounceTask !== undefined) clearTimeout(this.debounceTask);\n        this.debounceTask = setTimeout(function () {\n          return _this.getData(value);\n        }, this.debounce);\n      } else {\n        return this.getData(value);\n      }\n    },\n    handleKeyDown: function handleKeyDown(e) {\n      var key = e.keyCode;\n\n      // Disable when list isn't showing up\n      if (!this.showList) return;\n\n      // Key List\n      var DOWN = 40;\n      var UP = 38;\n      var ENTER = 13;\n      var ESC = 27;\n\n      // Prevent Default for Prevent Cursor Move & Form Submit\n      switch (key) {\n        case DOWN:\n          e.preventDefault();\n          this.focusList++;\n          break;\n        case UP:\n          e.preventDefault();\n          this.focusList--;\n          break;\n        case ENTER:\n          e.preventDefault();\n          this.selectList(this.json[this.focusList]);\n          this.showList = false;\n          break;\n        case ESC:\n          this.showList = false;\n          break;\n      }\n\n      var listLength = this.json.length - 1;\n      var outOfRangeBottom = this.focusList > listLength;\n      var outOfRangeTop = this.focusList < 0;\n      var topItemIndex = 0;\n      var bottomItemIndex = listLength;\n\n      var nextFocusList = this.focusList;\n      if (outOfRangeBottom) nextFocusList = topItemIndex;\n      if (outOfRangeTop) nextFocusList = bottomItemIndex;\n      this.focusList = nextFocusList;\n    },\n    setValue: function setValue(val) {\n      this.type = val;\n    },\n\n\n    /*==============================\r\n            LIST EVENTS\r\n        =============================*/\n\n    handleDoubleClick: function handleDoubleClick() {\n      this.json = [];\n      this.getData(\"\");\n      // Callback Event\n      this.onShow ? this.onShow() : null;\n      this.showList = true;\n    },\n    handleBlur: function handleBlur(e) {\n      var _this2 = this;\n\n      // Callback Event\n      this.onBlur ? this.onBlur(e) : null;\n      setTimeout(function () {\n        // Callback Event\n        _this2.onHide ? _this2.onHide() : null;\n        _this2.showList = false;\n      }, 250);\n    },\n    handleFocus: function handleFocus(e) {\n      this.focusList = 0;\n      // Callback Event\n      this.onFocus ? this.onFocus(e) : null;\n    },\n    mousemove: function mousemove(i) {\n      this.focusList = i;\n    },\n    activeClass: function activeClass(i) {\n      var focusClass = i === this.focusList ? \"focus-list\" : \"\";\n      return \"\" + focusClass;\n    },\n    selectList: function selectList(data) {\n      // Deep clone of the original object\n      var clean = this.cleanUp(data);\n      // Put the selected data to type (model)\n      this.type = clean[this.anchor];\n      // Hide List\n      this.showList = false;\n      // Callback Event\n      this.onSelect ? this.onSelect(clean) : null;\n    },\n    deepValue: function deepValue(obj, path) {\n      var arrayPath = path.split(\".\");\n      for (var i = 0; i < arrayPath.length; i++) {\n        obj = obj[arrayPath[i]];\n      }\n      return obj;\n    },\n\n\n    /*==============================\r\n            AJAX EVENTS\r\n        =============================*/\n\n    composeParams: function composeParams(val) {\n      var _this3 = this;\n\n      var encode = function encode(val) {\n        return _this3.encodeParams ? encodeURIComponent(val) : val;\n      };\n      var params = this.param + \"=\" + encode(val);\n      if (this.customParams) {\n        Object.keys(this.customParams).forEach(function (key) {\n          params += \"&\" + key + \"=\" + encode(_this3.customParams[key]);\n        });\n      }\n      return params;\n    },\n    composeHeader: function composeHeader(ajax) {\n      var _this4 = this;\n\n      if (this.customHeaders) {\n        Object.keys(this.customHeaders).forEach(function (key) {\n          ajax.setRequestHeader(key, _this4.customHeaders[key]);\n        });\n      }\n    },\n    doAjax: function doAjax(val) {\n      var _this5 = this;\n\n      if (ajax) {\n        ajax.abort();\n      }\n      // Callback Event\n      this.onBeforeAjax ? this.onBeforeAjax(val) : null;\n      // Compose Params\n      var params = this.composeParams(val);\n      // Init Ajax\n\n      ajax = new XMLHttpRequest();\n      ajax.open(\"GET\", this.url + \"?\" + params, true);\n      this.composeHeader(ajax);\n      // Callback Event\n      ajax.addEventListener(\"progress\", function (data) {\n        if (data.lengthComputable && _this5.onAjaxProgress) _this5.onAjaxProgress(data);\n      });\n      // On Done\n      ajax.addEventListener(\"loadend\", function (e) {\n        var responseText = e.target.responseText;\n\n        var json = JSON.parse(responseText.length > 0 ? responseText : \"[]\");\n        // Callback Event\n        _this5.onAjaxLoaded ? _this5.onAjaxLoaded(json) : null;\n        _this5.json = _this5.process ? _this5.process(json) : json;\n      });\n      // Send Ajax\n\n      ajax.send();\n    },\n    getData: function getData(value) {\n      if (value.length < this.min || !this.url) return;\n      if (this.onShouldGetData) this.manualGetData(value);else this.doAjax(value);\n    },\n\n\n    // Do Ajax Manually, so user can do whatever he want\n    manualGetData: function manualGetData(val) {\n      var _this6 = this;\n\n      var task = this.onShouldGetData(val);\n      if (task && task.then) {\n        return task.then(function (options) {\n          _this6.json = options;\n        });\n      }\n    }\n  },\n\n  created: function created() {\n    // Sync parent model with initValue Props\n    this.type = this.initValue ? this.initValue : null;\n  },\n  mounted: function mounted() {\n    if (this.required) this.$refs.input.setAttribute(\"required\", this.required);\n  }\n});\n\n//# sourceURL=webpack://Vue2Autocomplete/./src/js/components/vue-autocomplete.vue?./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./src/js/plugin.js":
/*!**************************!*\
  !*** ./src/js/plugin.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_vue_autocomplete_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/vue-autocomplete.vue */ \"./src/js/components/vue-autocomplete.vue\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_components_vue_autocomplete_vue__WEBPACK_IMPORTED_MODULE_0__.default);\n\n//# sourceURL=webpack://Vue2Autocomplete/./src/js/plugin.js?");

/***/ }),

/***/ "./src/js/components/vue-autocomplete.vue":
/*!************************************************!*\
  !*** ./src/js/components/vue-autocomplete.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _vue_autocomplete_vue_vue_type_template_id_1bd173fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue-autocomplete.vue?vue&type=template&id=1bd173fb& */ \"./src/js/components/vue-autocomplete.vue?vue&type=template&id=1bd173fb&\");\n/* harmony import */ var _vue_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vue-autocomplete.vue?vue&type=script&lang=js& */ \"./src/js/components/vue-autocomplete.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _vue_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _vue_autocomplete_vue_vue_type_template_id_1bd173fb___WEBPACK_IMPORTED_MODULE_0__.render,\n  _vue_autocomplete_vue_vue_type_template_id_1bd173fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/js/components/vue-autocomplete.vue\"\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);\n\n//# sourceURL=webpack://Vue2Autocomplete/./src/js/components/vue-autocomplete.vue?");

/***/ }),

/***/ "./src/js/components/vue-autocomplete.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/js/components/vue-autocomplete.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vue-autocomplete.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/vue-autocomplete.vue?vue&type=script&lang=js&\");\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack://Vue2Autocomplete/./src/js/components/vue-autocomplete.vue?");

/***/ }),

/***/ "./src/js/components/vue-autocomplete.vue?vue&type=template&id=1bd173fb&":
/*!*******************************************************************************!*\
  !*** ./src/js/components/vue-autocomplete.vue?vue&type=template&id=1bd173fb& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_autocomplete_vue_vue_type_template_id_1bd173fb___WEBPACK_IMPORTED_MODULE_0__.render),\n/* harmony export */   \"staticRenderFns\": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_autocomplete_vue_vue_type_template_id_1bd173fb___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vue_autocomplete_vue_vue_type_template_id_1bd173fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./vue-autocomplete.vue?vue&type=template&id=1bd173fb& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/vue-autocomplete.vue?vue&type=template&id=1bd173fb&\");\n\n\n//# sourceURL=webpack://Vue2Autocomplete/./src/js/components/vue-autocomplete.vue?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/vue-autocomplete.vue?vue&type=template&id=1bd173fb&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/vue-autocomplete.vue?vue&type=template&id=1bd173fb& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render),\n/* harmony export */   \"staticRenderFns\": () => (/* binding */ staticRenderFns)\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { class: _vm.getClassName(\"wrapper\") + \" autocomplete-wrapper\" },\n    [\n      _c(\"input\", {\n        directives: [\n          {\n            name: \"model\",\n            rawName: \"v-model\",\n            value: _vm.type,\n            expression: \"type\"\n          }\n        ],\n        ref: \"input\",\n        class: _vm.getClassName(\"input\") + \" autocomplete-input\",\n        attrs: {\n          type: \"text\",\n          id: _vm.id,\n          placeholder: _vm.placeholder,\n          name: _vm.name,\n          autocomplete: \"off\"\n        },\n        domProps: { value: _vm.type },\n        on: {\n          input: [\n            function($event) {\n              if ($event.target.composing) {\n                return\n              }\n              _vm.type = $event.target.value\n            },\n            _vm.handleInput\n          ],\n          dblclick: _vm.handleDoubleClick,\n          blur: _vm.handleBlur,\n          keydown: _vm.handleKeyDown,\n          focus: _vm.handleFocus\n        }\n      }),\n      _vm._v(\" \"),\n      _c(\n        \"div\",\n        {\n          directives: [\n            {\n              name: \"show\",\n              rawName: \"v-show\",\n              value: _vm.showList && _vm.json.length,\n              expression: \"showList && json.length\"\n            }\n          ],\n          class: _vm.getClassName(\"list\") + \" autocomplete autocomplete-list\"\n        },\n        [\n          _c(\n            \"ul\",\n            { class: \"\" + _vm.getClassName(\"ulist\") },\n            _vm._l(_vm.json, function(data, i) {\n              return _c(\"li\", { class: _vm.activeClass(i) }, [\n                _c(\n                  \"a\",\n                  {\n                    attrs: { href: \"#\" },\n                    on: {\n                      click: function($event) {\n                        $event.preventDefault()\n                        return _vm.selectList(data)\n                      },\n                      mousemove: function($event) {\n                        return _vm.mousemove(i)\n                      }\n                    }\n                  },\n                  [\n                    _vm.onShouldRenderChild\n                      ? _c(\"div\", {\n                          domProps: {\n                            innerHTML: _vm._s(_vm.onShouldRenderChild(data))\n                          }\n                        })\n                      : _vm._e(),\n                    _vm._v(\" \"),\n                    !_vm.onShouldRenderChild\n                      ? _c(\"div\", [\n                          _c(\"b\", { staticClass: \"autocomplete-anchor-text\" }, [\n                            _vm._v(_vm._s(_vm.deepValue(data, _vm.anchor)))\n                          ]),\n                          _vm._v(\" \"),\n                          _c(\n                            \"span\",\n                            { staticClass: \"autocomplete-anchor-label\" },\n                            [_vm._v(_vm._s(_vm.deepValue(data, _vm.label)))]\n                          )\n                        ])\n                      : _vm._e()\n                  ]\n                )\n              ])\n            }),\n            0\n          )\n        ]\n      )\n    ]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://Vue2Autocomplete/./src/js/components/vue-autocomplete.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ normalizeComponent)\n/* harmony export */ });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://Vue2Autocomplete/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/plugin.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});