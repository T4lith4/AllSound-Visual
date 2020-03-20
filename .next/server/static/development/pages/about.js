module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\components\\Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

//Footer componenet with active links
const Footer = () => __jsx("div", {
  className: "jsx-1509336105" + " " + "nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  id: "icon-box",
  className: "jsx-1509336105",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  id: "comp",
  className: "jsx-1509336105",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "AllSound Visual is registered as FC AV and Security Pty Ltd 2017"), " ", __jsx("a", {
  href: "mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual",
  target: "_top",
  className: "jsx-1509336105" + " " + "icon-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("i", {
  class: "fas fa-envelope-square icon",
  className: "jsx-1509336105",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), " ", __jsx("a", {
  href: "mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual",
  target: "_top",
  className: "jsx-1509336105" + " " + "icon-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("i", {
  class: "fab fa-facebook-square icon",
  className: "jsx-1509336105",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
})), " ", __jsx("a", {
  href: "mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual",
  target: "_top",
  className: "jsx-1509336105" + " " + "icon-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("i", {
  class: "fas fa-phone-square icon",
  className: "jsx-1509336105",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1509336105",
  __self: undefined
}, ".nav.jsx-1509336105{background:darkgrey;font-family:calibri;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:10px;width:100%;position:absolute;margin-bottom:0;font-size:25px;}#comp.jsx-1509336105{font-size:15px;padding:10px;margin-top:7px;color:#1b171f;font-weight:lighter;}#comp.jsx-1509336105:hover{color:black;}#icon-box.jsx-1509336105{width:100%;height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#icon-box.jsx-1509336105 a.jsx-1509336105{color:#1b171f;padding:10px;}#icon-box.jsx-1509336105 a.jsx-1509336105:hover{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFsaXRoYVxcRGVza3RvcFxcQWxsU291bmQtVmlzdWFsXFxjb21wb25lbnRzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JnQixBQUc2QixBQVlMLEFBUUgsQUFJRCxBQU1HLEFBSUYsV0FUQSxDQUpkLEFBY0EsRUFKZSxDQWxCQSxLQVpPLEdBeUJQLElBTWYsQ0FsQmlCLFlBWkYsR0FhQyxjQUNNLG9CQUN0QixvQkFVeUIsaUJBeEJBLGtGQXlCekIsaUJBeEJlLGFBQ0YsV0FDTyxrQkFDRixnQkFDRCxlQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXFRhbGl0aGFcXERlc2t0b3BcXEFsbFNvdW5kLVZpc3VhbFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9Gb290ZXIgY29tcG9uZW5ldCB3aXRoIGFjdGl2ZSBsaW5rc1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICA8ZGl2IGlkPVwiaWNvbi1ib3hcIj5cclxuICAgICAgPGRpdiBpZD1cImNvbXBcIj5cclxuICAgICAgICBBbGxTb3VuZCBWaXN1YWwgaXMgcmVnaXN0ZXJlZCBhcyBGQyBBViBhbmQgU2VjdXJpdHkgUHR5IEx0ZCAyMDE3XHJcbiAgICAgIDwvZGl2PntcIiBcIn1cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwibWFpbHRvOmZyYW5jb2lzY29ldHplZUByb2NrZXRtYWlsLmNvbT9TdWJqZWN0PURlYXIlMjBBbGxTb3VuZFZpc3VhbFwiXHJcbiAgICAgICAgdGFyZ2V0PVwiX3RvcFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1saW5rXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVudmVsb3BlLXNxdWFyZSBpY29uXCI+PC9pPlxyXG4gICAgICA8L2E+e1wiIFwifVxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJtYWlsdG86ZnJhbmNvaXNjb2V0emVlQHJvY2tldG1haWwuY29tP1N1YmplY3Q9RGVhciUyMEFsbFNvdW5kVmlzdWFsXCJcclxuICAgICAgICB0YXJnZXQ9XCJfdG9wXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJpY29uLWxpbmtcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlIGljb25cIj48L2k+XHJcbiAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cIm1haWx0bzpmcmFuY29pc2NvZXR6ZWVAcm9ja2V0bWFpbC5jb20/U3ViamVjdD1EZWFyJTIwQWxsU291bmRWaXN1YWxcIlxyXG4gICAgICAgIHRhcmdldD1cIl90b3BcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImljb24tbGlua1wiXHJcbiAgICAgID5cclxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1waG9uZS1zcXVhcmUgaWNvblwiPjwvaT5cclxuICAgICAgPC9hPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubmF2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JleTtcclxuICAgICAgICBmb250LWZhbWlseTogY2FsaWJyaTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjY29tcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgIGNvbG9yOiAjMWIxNzFmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjY29tcDpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjaWNvbi1ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICNpY29uLWJveCBhIHtcclxuICAgICAgICBjb2xvcjogIzFiMTcxZjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgICNpY29uLWJveCBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\components\\Footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Layout = props => __jsx("div", {
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("meta", {
  charset: "utf-8",
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("meta", {
  "http-equiv": "X-UA-Compatible",
  content: "IE=edge",
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("title", {
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("meta", {
  name: "description",
  content: "",
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("title", {
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "AllSound Visual"), "Bootstrap Link", __jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
  crossOrigin: "anonymous",
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), "FontAwesome Link", __jsx("link", {
  rel: "stylesheet",
  href: "https://use.fontawesome.com/releases/v5.11.2/css/all.css",
  integrity: "sha384-KA6wR/X5RY4zFAHpv/CnoG2UW1uogYfdnP67Uv7eULvTveboZJg0qUpmJZb5VqzN",
  crossOrigin: "anonymous",
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), `Bootstrap JS Popper Links`, __jsx("script", {
  src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
  integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
  crossorigin: "anonymous",
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("script", {
  src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
  integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
  crossorigin: "anonymous",
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("script", {
  src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
  integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
  crossorigin: "anonymous",
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
})), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), __jsx("div", {
  id: "spacer",
  className: "jsx-2474546795",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, props.children), __jsx(_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2474546795",
  __self: undefined
}, "#spacer.jsx-2474546795{height:800px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFsaXRoYVxcRGVza3RvcFxcQWxsU291bmQtVmlzdWFsXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RnQixBQUdzQixhQUNmIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVGFsaXRoYVxcRGVza3RvcFxcQWxsU291bmQtVmlzdWFsXFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSBwcm9wcyA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxyXG4gICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxyXG4gICAgICA8dGl0bGU+PC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgIDx0aXRsZT5BbGxTb3VuZCBWaXN1YWw8L3RpdGxlPlxyXG4gICAgICB7XCJCb290c3RyYXAgTGlua1wifVxyXG4gICAgICA8bGlua1xyXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgIGhyZWY9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjMuMS9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxyXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcclxuICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIHtcIkZvbnRBd2Vzb21lIExpbmtcIn1cclxuICAgICAgPGxpbmtcclxuICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjExLjIvY3NzL2FsbC5jc3NcIlxyXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1LQTZ3Ui9YNVJZNHpGQUhwdi9Dbm9HMlVXMXVvZ1lmZG5QNjdVdjdlVUx2VHZlYm9aSmcwcVVwbUpaYjVWcXpOXCJcclxuICAgICAgICBjcm9zc09yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgID48L2xpbms+XHJcbiAgICAgIHtgQm9vdHN0cmFwIEpTIFBvcHBlciBMaW5rc2B9XHJcbiAgICAgIDxzY3JpcHRcclxuICAgICAgICBzcmM9XCJodHRwczovL2NvZGUuanF1ZXJ5LmNvbS9qcXVlcnktMy40LjEuc2xpbS5taW4uanNcIlxyXG4gICAgICAgIGludGVncml0eT1cInNoYTM4NC1KNnFhNDg0OWJsRTIrcG9UNFdueUtodjV2WkY1U3JQbzBpRWp3QnZLVTdpbUdGQVYwd3dqMXlZZm9SU0pvWituXCJcclxuICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXHJcbiAgICAgID48L3NjcmlwdD5cclxuICAgICAgPHNjcmlwdFxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vcG9wcGVyLmpzQDEuMTYuMC9kaXN0L3VtZC9wb3BwZXIubWluLmpzXCJcclxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtUTZFOVJIdmJJeVpGSm9mdCsybUpiSGFFV2xkbHZJOUlPWXk1bjN6Vjl6elR0bUkzVWtzZFFSVnZveE1mb29Bb1wiXHJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgIDxzY3JpcHRcclxuICAgICAgICBzcmM9XCJodHRwczovL3N0YWNrcGF0aC5ib290c3RyYXBjZG4uY29tL2Jvb3RzdHJhcC80LjQuMS9qcy9ib290c3RyYXAubWluLmpzXCJcclxuICAgICAgICBpbnRlZ3JpdHk9XCJzaGEzODQtd2ZTREYyRTUwWTJEMXVVZGowTzN1TUJKbmp1VUQ0SWg3WXdhWWQxaXFma3RqMFVvZDhHQ0V4bDNPZzhpZndCNlwiXHJcbiAgICAgICAgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIlxyXG4gICAgICA+PC9zY3JpcHQ+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8TmF2YmFyIC8+XHJcbiAgICA8ZGl2IGlkPVwic3BhY2VyXCI+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxyXG5cclxuICAgIDxGb290ZXIgLz5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgI3NwYWNlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MDBweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\components\\Layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\components\\Navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Navbar = () => __jsx("div", {
  className: "jsx-2835451586",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("nav", {
  className: "jsx-2835451586" + " " + "navbar navbar-expand-lg  bg-dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("a", {
  href: "/",
  className: "jsx-2835451586" + " " + "navbar-brand",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "AllSound Visual"), __jsx("button", {
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarText",
  "aria-controls": "navbarText",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation",
  className: "jsx-2835451586" + " " + "navbar-toggler",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2835451586" + " " + "navbar-toggler-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})), __jsx("div", {
  id: "navbarText",
  className: "jsx-2835451586" + " " + "collapse navbar-collapse",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-2835451586" + " " + "navbar-nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-2835451586" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("a", {
  href: "/",
  className: "jsx-2835451586" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Home")), __jsx("li", {
  className: "jsx-2835451586" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("a", {
  href: "/about",
  className: "jsx-2835451586" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "About")), __jsx("li", {
  className: "jsx-2835451586" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("a", {
  href: "/services",
  className: "jsx-2835451586" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Services")), __jsx("li", {
  className: "jsx-2835451586" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("a", {
  href: "/products",
  className: "jsx-2835451586" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "Products")), __jsx("li", {
  className: "jsx-2835451586" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("a", {
  href: "/specials",
  className: "jsx-2835451586" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "Specials")), __jsx("li", {
  className: "jsx-2835451586" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("a", {
  href: "/gallery",
  className: "jsx-2835451586" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "Gallery ", __jsx("i", {
  class: "fab fa-instagram-square",
  className: "jsx-2835451586",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
})))), __jsx("span", {
  className: "jsx-2835451586" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-2835451586" + " " + "fas fa-phone",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
})), __jsx("span", {
  className: "jsx-2835451586" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-2835451586" + " " + "far fa-envelope",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
})), __jsx("span", {
  className: "jsx-2835451586" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-2835451586" + " " + "fab fa-facebook-f",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
})), __jsx("span", {
  className: "jsx-2835451586" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-2835451586" + " " + "fab fa-instagram",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
})))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2835451586",
  __self: undefined
}, "nav.jsx-2835451586{height:190px;}.navbar-brand.jsx-2835451586{color:red;font-size:30px;margin-top:-40px;margin-right:45%;margin-left:45%;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000, 1px 1px 0 #000;}.navbar-brand.jsx-2835451586:hover{color:white;}.nav-item.jsx-2835451586{margin-top:80px;}.navbar-nav.jsx-2835451586{margin-left:-1040px;}.navbar-text.jsx-2835451586{color:darkgrey;font-size:14px;margin-top:80px;}.navbar-text.jsx-2835451586:hover{color:red;}a.jsx-2835451586{color:darkgrey;font-size:14px;}a.jsx-2835451586:hover{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFsaXRoYVxcRGVza3RvcFxcQWxsU291bmQtVmlzdWFsXFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUVnQixBQUdzQixBQUlILEFBVUUsQUFHSSxBQUlJLEFBSUwsQUFNTCxBQUlLLEFBSUwsVUFsQ0ssQUEyQmpCLEFBUUEsRUF6QkEsQ0FkQSxFQXlCaUIsQUFVQSxDQWxCakIsSUFJQSxLQWhCbUIsS0FxQkQsQUFVbEIsWUE5Qm1CLElBcUJuQixhQXBCa0IsZ0JBRUEsNkVBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVGFsaXRoYVxcRGVza3RvcFxcQWxsU291bmQtVmlzdWFsXFxjb21wb25lbnRzXFxOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOYXZiYXIgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgIGJnLWRhcmtcIj5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICBBbGxTb3VuZCBWaXN1YWxcclxuICAgICAgPC9hPlxyXG4gICAgICA8YnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxyXG4gICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclRleHRcIlxyXG4gICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJUZXh0XCJcclxuICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRleHRcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdlwiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvc2VydmljZXNcIj5cclxuICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3NwZWNpYWxzXCI+XHJcbiAgICAgICAgICAgICAgU3BlY2lhbHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvZ2FsbGVyeVwiPlxyXG4gICAgICAgICAgICAgIEdhbGxlcnkgPGkgY2xhc3M9XCJmYWIgZmEtaW5zdGFncmFtLXNxdWFyZVwiPjwvaT5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dCBuYXYtbGlua1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lXCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dCBuYXYtbGlua1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFyIGZhLWVudmVsb3BlXCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dCBuYXYtbGlua1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLWZcIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10ZXh0IG5hdi1saW5rXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgbmF2IHtcclxuICAgICAgICBoZWlnaHQ6IDE5MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQ1JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDUlO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCxcclxuICAgICAgICAgIDFweCAxcHggMCAjMDAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuICAgICAgLm5hdi1pdGVtIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMDQwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXZiYXItdGV4dCB7XHJcbiAgICAgICAgY29sb3I6IGRhcmtncmV5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2YmFyLXRleHQ6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGNvbG9yOiBkYXJrZ3JleTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\components\\Navbar.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\pages\\about.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const About = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  id: "about-box",
  className: "jsx-2600228281",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-2600228281",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "So what is AllSound Visual and what does it stand for?"), __jsx("p", {
  className: "jsx-2600228281",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "AllSound Visual was officilly launched in 2019 by Francios Coetzee, an Audio Visual industry professional who has acquired invaluable experience in the Audio Visual game since the 2011.", __jsx("i", {
  class: "fab fa-instagram-square",
  className: "jsx-2600228281",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2600228281",
  __self: undefined
}, "#about-box.jsx-2600228281{height:800px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFsaXRoYVxcRGVza3RvcFxcQWxsU291bmQtVmlzdWFsXFxwYWdlc1xcYWJvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY2dCLEFBR3NCLGFBQ2YiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYWxpdGhhXFxEZXNrdG9wXFxBbGxTb3VuZC1WaXN1YWxcXHBhZ2VzXFxhYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcblxyXG5jb25zdCBBYm91dCA9ICgpID0+IChcclxuICA8TGF5b3V0PlxyXG4gICAgPGRpdiBpZD1cImFib3V0LWJveFwiPlxyXG4gICAgICA8aDE+U28gd2hhdCBpcyBBbGxTb3VuZCBWaXN1YWwgYW5kIHdoYXQgZG9lcyBpdCBzdGFuZCBmb3I/PC9oMT5cclxuXHJcbiAgICAgIDxwPlxyXG4gICAgICAgIEFsbFNvdW5kIFZpc3VhbCB3YXMgb2ZmaWNpbGx5IGxhdW5jaGVkIGluIDIwMTkgYnkgRnJhbmNpb3MgQ29ldHplZSwgYW5cclxuICAgICAgICBBdWRpbyBWaXN1YWwgaW5kdXN0cnkgcHJvZmVzc2lvbmFsIHdobyBoYXMgYWNxdWlyZWQgaW52YWx1YWJsZVxyXG4gICAgICAgIGV4cGVyaWVuY2UgaW4gdGhlIEF1ZGlvIFZpc3VhbCBnYW1lIHNpbmNlIHRoZSAyMDExLlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmFiIGZhLWluc3RhZ3JhbS1zcXVhcmVcIj48L2k+XHJcbiAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAjYWJvdXQtYm94IHtcclxuICAgICAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\pages\\about.js */"));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Talitha\Desktop\AllSound-Visual\pages\about.js */"./pages/about.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=about.js.map