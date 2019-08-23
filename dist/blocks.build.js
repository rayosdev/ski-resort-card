/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n/**\n * BLOCK: ski-resort-card\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar Component = wp.element.Component;\nvar useEffect = wp.element.useEffect;\n\n\nregisterBlockType('cgb/block-ski-resort-card', {\n\ttitle: __('Ski Resort Card'),\n\ticon: 'location-alt',\n\tcategory: 'widgets',\n\tkeywords: [__('ski-resort-card — CGB Block'), __('Ski')],\n\n\tattributes: {\n\t\tresortNames: {\n\t\t\ttype: 'string'\n\t\t},\n\t\tresortList: {\n\t\t\ttype: 'array'\n\t\t}\n\t},\n\tcomponentDidMount: function componentDidMount() {\n\t\tconsole.log(\"test\");\n\t},\n\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes;\n\n\n\t\tuseEffect(function () {\n\n\t\t\t// fetch('https://api.chucknorris.io/jokes/random')\n\t\t\tfetch('https://api.fnugg.no/search?').then(function (res) {\n\n\t\t\t\treturn res.json();\n\t\t\t}).then(function (json) {\n\n\t\t\t\tvar resortList = json.hits.hits.map(function (resorts) {\n\t\t\t\t\treturn resorts._source;\n\t\t\t\t});\n\t\t\t}).then(function (resortList) {\n\n\t\t\t\tsetAttributes({\n\t\t\t\t\tresortList: resortList\n\t\t\t\t});\n\t\t\t\tconsole.log(attributes);\n\t\t\t});\n\t\t\tsetAttributes({\n\t\t\t\tresortList: \"dette er en test\"\n\t\t\t});\n\t\t\tconsole.log(attributes.resortList);\n\t\t}, []);\n\n\t\t// fetch('https://api.fnugg.no/search?').then(res => {\n\t\t// \treturn res.json()\n\t\t// }).then(json => {\n\n\t\t// \tlet resortList = json.hits.hits.map(resorts => {\n\t\t// \t\treturn resorts._source\n\t\t// \t})\n\t\t// \tprops.setAttributes({\n\t\t// \t\t// resortList: resortList \n\t\t// \t})\n\t\t// \tconsole.log(props.attributes)\n\t\t// })\n\t\t// Creates a <p class='wp-block-cgb-block-ski-resort-card'></p>.\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ className: '' },\n\t\t\twp.element.createElement(\n\t\t\t\t'h4',\n\t\t\t\tnull,\n\t\t\t\t'Chose ski resort'\n\t\t\t),\n\t\t\twp.element.createElement('input', { type: 'text', list: 'data' }),\n\t\t\twp.element.createElement(\n\t\t\t\t'datalist',\n\t\t\t\t{ id: 'data' },\n\t\t\t\twp.element.createElement('option', { value: 'abc' }),\n\t\t\t\twp.element.createElement('option', { value: 'cde' }),\n\t\t\t\twp.element.createElement('option', { value: 'def' }),\n\t\t\t\twp.element.createElement('option', { value: 'fedcba' })\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save() {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IHNraS1yZXNvcnQtY2FyZFxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBDb21wb25lbnQgPSB3cC5lbGVtZW50LkNvbXBvbmVudDtcbnZhciB1c2VFZmZlY3QgPSB3cC5lbGVtZW50LnVzZUVmZmVjdDtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2diL2Jsb2NrLXNraS1yZXNvcnQtY2FyZCcsIHtcblx0dGl0bGU6IF9fKCdTa2kgUmVzb3J0IENhcmQnKSxcblx0aWNvbjogJ2xvY2F0aW9uLWFsdCcsXG5cdGNhdGVnb3J5OiAnd2lkZ2V0cycsXG5cdGtleXdvcmRzOiBbX18oJ3NraS1yZXNvcnQtY2FyZCDigJQgQ0dCIEJsb2NrJyksIF9fKCdTa2knKV0sXG5cblx0YXR0cmlidXRlczoge1xuXHRcdHJlc29ydE5hbWVzOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJ1xuXHRcdH0sXG5cdFx0cmVzb3J0TGlzdDoge1xuXHRcdFx0dHlwZTogJ2FycmF5J1xuXHRcdH1cblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnNvbGUubG9nKFwidGVzdFwiKTtcblx0fSxcblxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gX3JlZi5zZXRBdHRyaWJ1dGVzO1xuXG5cblx0XHR1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuXG5cdFx0XHQvLyBmZXRjaCgnaHR0cHM6Ly9hcGkuY2h1Y2tub3JyaXMuaW8vam9rZXMvcmFuZG9tJylcblx0XHRcdGZldGNoKCdodHRwczovL2FwaS5mbnVnZy5uby9zZWFyY2g/JykudGhlbihmdW5jdGlvbiAocmVzKSB7XG5cblx0XHRcdFx0cmV0dXJuIHJlcy5qc29uKCk7XG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG5cblx0XHRcdFx0dmFyIHJlc29ydExpc3QgPSBqc29uLmhpdHMuaGl0cy5tYXAoZnVuY3Rpb24gKHJlc29ydHMpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzb3J0cy5fc291cmNlO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pLnRoZW4oZnVuY3Rpb24gKHJlc29ydExpc3QpIHtcblxuXHRcdFx0XHRzZXRBdHRyaWJ1dGVzKHtcblx0XHRcdFx0XHRyZXNvcnRMaXN0OiByZXNvcnRMaXN0XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhhdHRyaWJ1dGVzKTtcblx0XHRcdH0pO1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7XG5cdFx0XHRcdHJlc29ydExpc3Q6IFwiZGV0dGUgZXIgZW4gdGVzdFwiXG5cdFx0XHR9KTtcblx0XHRcdGNvbnNvbGUubG9nKGF0dHJpYnV0ZXMucmVzb3J0TGlzdCk7XG5cdFx0fSwgW10pO1xuXG5cdFx0Ly8gZmV0Y2goJ2h0dHBzOi8vYXBpLmZudWdnLm5vL3NlYXJjaD8nKS50aGVuKHJlcyA9PiB7XG5cdFx0Ly8gXHRyZXR1cm4gcmVzLmpzb24oKVxuXHRcdC8vIH0pLnRoZW4oanNvbiA9PiB7XG5cblx0XHQvLyBcdGxldCByZXNvcnRMaXN0ID0ganNvbi5oaXRzLmhpdHMubWFwKHJlc29ydHMgPT4ge1xuXHRcdC8vIFx0XHRyZXR1cm4gcmVzb3J0cy5fc291cmNlXG5cdFx0Ly8gXHR9KVxuXHRcdC8vIFx0cHJvcHMuc2V0QXR0cmlidXRlcyh7XG5cdFx0Ly8gXHRcdC8vIHJlc29ydExpc3Q6IHJlc29ydExpc3QgXG5cdFx0Ly8gXHR9KVxuXHRcdC8vIFx0Y29uc29sZS5sb2cocHJvcHMuYXR0cmlidXRlcylcblx0XHQvLyB9KVxuXHRcdC8vIENyZWF0ZXMgYSA8cCBjbGFzcz0nd3AtYmxvY2stY2diLWJsb2NrLXNraS1yZXNvcnQtY2FyZCc+PC9wPi5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGNsYXNzTmFtZTogJycgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2g0Jyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J0Nob3NlIHNraSByZXNvcnQnXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcsIHsgdHlwZTogJ3RleHQnLCBsaXN0OiAnZGF0YScgfSksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkYXRhbGlzdCcsXG5cdFx0XHRcdHsgaWQ6ICdkYXRhJyB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgdmFsdWU6ICdhYmMnIH0pLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgdmFsdWU6ICdjZGUnIH0pLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgdmFsdWU6ICdkZWYnIH0pLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicsIHsgdmFsdWU6ICdmZWRjYmEnIH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);