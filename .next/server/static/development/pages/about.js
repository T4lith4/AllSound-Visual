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
var _jsxFileName = "C:\\Users\\Talitha\\Documents\\Francois\\components\\Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

//Footer componenet with active links
//import Link from "next/link";
const Footer = () => __jsx("div", {
  className: "jsx-3697555366" + " " + "nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("p", {
  id: "comp",
  className: "jsx-3697555366",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "AllSound Visual"), __jsx("div", {
  id: "icon-box",
  className: "jsx-3697555366",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, " ", __jsx("a", {
  href: "mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual",
  target: "_top",
  className: "jsx-3697555366" + " " + "icon-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("i", {
  class: "fas fa-envelope-square icon",
  className: "jsx-3697555366",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), " ", __jsx("a", {
  href: "mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual",
  target: "_top",
  className: "jsx-3697555366" + " " + "icon-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("i", {
  class: "fab fa-facebook-square icon",
  className: "jsx-3697555366",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
})), " ", __jsx("a", {
  href: "mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual",
  target: "_top",
  className: "jsx-3697555366" + " " + "icon-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("i", {
  class: "fas fa-phone-square icon",
  className: "jsx-3697555366",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3697555366",
  __self: undefined
}, ".nav.jsx-3697555366{background:darkgrey;font-family:calibri;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:10px;width:100%;position:absolute;bottom:0;font-size:25px;}#comp.jsx-3697555366{font-size:15px;padding:10px;margin-bottom:-20px;}#icon-box.jsx-3697555366{width:100%;height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#icon-box.jsx-3697555366 a.jsx-3697555366{color:grey;padding:10px;}#icon-box.jsx-3697555366 a.jsx-3697555366:hover{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFsaXRoYVxcRG9jdW1lbnRzXFxGcmFuY29pc1xcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDZ0IsQUFHNkIsQUFZTCxBQU1KLEFBTUEsQUFJSCxVQUNWLENBVmMsQUFNQyxJQVpBLEtBWk8sR0FtQlAsQ0FNZixJQVpzQixZQVpQLFFBYWYsaURBTXlCLGlCQWxCQSxrRkFtQnpCLGlCQWxCZSxhQUNGLFdBQ08sa0JBQ1QsU0FDTSxlQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXFRhbGl0aGFcXERvY3VtZW50c1xcRnJhbmNvaXNcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRm9vdGVyIGNvbXBvbmVuZXQgd2l0aCBhY3RpdmUgbGlua3NcclxuLy9pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgPHAgaWQ9XCJjb21wXCI+QWxsU291bmQgVmlzdWFsPC9wPlxyXG4gIFxyXG4gICAgPGRpdiBpZD1cImljb24tYm94XCI+XHJcbiAgICAgIHtcIiBcIn1cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwibWFpbHRvOmZyYW5jb2lzY29ldHplZUByb2NrZXRtYWlsLmNvbT9TdWJqZWN0PURlYXIlMjBBbGxTb3VuZFZpc3VhbFwiXHJcbiAgICAgICAgdGFyZ2V0PVwiX3RvcFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1saW5rXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVudmVsb3BlLXNxdWFyZSBpY29uXCI+PC9pPlxyXG4gICAgICA8L2E+XHJcbiAgICAgXHJcbiAgICAgICAge1wiIFwifVxyXG4gICAgICAgPGFcclxuICAgICAgIGhyZWY9XCJtYWlsdG86ZnJhbmNvaXNjb2V0emVlQHJvY2tldG1haWwuY29tP1N1YmplY3Q9RGVhciUyMEFsbFNvdW5kVmlzdWFsXCJcclxuICAgICAgICB0YXJnZXQ9XCJfdG9wXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJpY29uLWxpbmtcIj5cclxuICAgICAgICAgPGkgY2xhc3M9XCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlIGljb25cIj48L2k+PC9hPlxyXG4gICAgIFxyXG4gICAgIFxyXG4gICAgICAgIHtcIiBcIn1cclxuICAgICAgIDxhXHJcbiAgICAgICAgIGhyZWY9XCJtYWlsdG86ZnJhbmNvaXNjb2V0emVlQHJvY2tldG1haWwuY29tP1N1YmplY3Q9RGVhciUyMEFsbFNvdW5kVmlzdWFsXCJcclxuICAgICAgICAgdGFyZ2V0PVwiX3RvcFwiXHJcbiAgICAgICAgIGNsYXNzTmFtZT1cImljb24tbGlua1wiPlxyXG4gICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGhvbmUtc3F1YXJlIGljb25cIj48L2k+PC9hPlxyXG4gICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubmF2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZ3JleTtcclxuICAgICAgICBmb250LWZhbWlseTogY2FsaWJyaTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIH1cclxuICAgICBcclxuICAgICAgI2NvbXAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0yMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjaWNvbi1ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgICNpY29uLWJveCBhIHtcclxuICAgICAgICBjb2xvcjogZ3JleTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4OyBcclxuICAgICAgfVxyXG4gICAgICAjaWNvbi1ib3ggYTpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIl19 */\n/*@ sourceURL=C:\\Users\\Talitha\\Documents\\Francois\\components\\Footer.js */"));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Navbar.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\Talitha\\Documents\\Francois\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("meta", {
  charset: "utf-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("meta", {
  "http-equiv": "X-UA-Compatible",
  content: "IE=edge",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("meta", {
  name: "description",
  content: "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("title", {
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
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}), `Bootstrap JS Popper Links`, __jsx("script", {
  src: "https://code.jquery.com/jquery-3.4.1.slim.min.js",
  integrity: "sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("script", {
  src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
  integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("script", {
  src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
  integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
})), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}));

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
var _jsxFileName = "C:\\Users\\Talitha\\Documents\\Francois\\components\\Navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Navbar = () => __jsx("div", {
  className: "jsx-2496891311",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("nav", {
  className: "jsx-2496891311" + " " + "navbar navbar-expand-lg navbar-dark bg-dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("a", {
  href: "/",
  className: "jsx-2496891311" + " " + "navbar-brand",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "Insert Company Name"), __jsx("button", {
  type: "button",
  "data-toggle": "collapse",
  "data-target": "#navbarText",
  "aria-controls": "navbarText",
  "aria-expanded": "false",
  "aria-label": "Toggle navigation",
  className: "jsx-2496891311" + " " + "navbar-toggler",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2496891311" + " " + "navbar-toggler-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
})), __jsx("div", {
  id: "navbarText",
  className: "jsx-2496891311" + " " + "collapse navbar-collapse",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-2496891311" + " " + "navbar-nav mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-2496891311" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("a", {
  href: "/",
  className: "jsx-2496891311" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Home")), __jsx("li", {
  className: "jsx-2496891311" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("a", {
  href: "/about",
  className: "jsx-2496891311" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "About")), __jsx("li", {
  className: "jsx-2496891311" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("a", {
  href: "/installations",
  className: "jsx-2496891311" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Installations")), __jsx("li", {
  className: "jsx-2496891311" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("a", {
  href: "/products",
  className: "jsx-2496891311" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Products")), __jsx("li", {
  className: "jsx-2496891311" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("a", {
  href: "/specials",
  className: "jsx-2496891311" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Specials")), __jsx("li", {
  className: "jsx-2496891311" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("a", {
  href: "/gallery",
  className: "jsx-2496891311" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Gallery"))), __jsx("span", {
  className: "jsx-2496891311" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("i", {
  class: "fab fa-facebook-square",
  className: "jsx-2496891311",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
})), __jsx("span", {
  className: "jsx-2496891311" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("i", {
  class: "fas fa-phone-square",
  className: "jsx-2496891311",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})), __jsx("span", {
  className: "jsx-2496891311" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("i", {
  class: "fas fa-envelope-square",
  className: "jsx-2496891311",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
})))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2496891311",
  __self: undefined
}, ".navbar-text.jsx-2496891311{color:red;font-size:28px;}.navbar-text.jsx-2496891311:hover{color:blue;}a.jsx-2496891311:active{color:blue;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFsaXRoYVxcRG9jdW1lbnRzXFxGcmFuY29pc1xcY29tcG9uZW50c1xcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DWSxBQUdjLEFBSUMsQUFHRixVQU5PLENBSWpCLEFBR0YsY0FORSIsImZpbGUiOiJDOlxcVXNlcnNcXFRhbGl0aGFcXERvY3VtZW50c1xcRnJhbmNvaXNcXGNvbXBvbmVudHNcXE5hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IE5hdmJhciA9ICgpID0+IChcclxuICA8ZGl2PlxyXG48bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cclxuICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPkluc2VydCBDb21wYW55IE5hbWU8L2E+XHJcbiAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyVGV4dFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJUZXh0XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gIDwvYnV0dG9uPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJUZXh0XCI+XHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9cIj5Ib21lPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvYWJvdXRcIj5BYm91dDwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2luc3RhbGxhdGlvbnNcIj5JbnN0YWxsYXRpb25zPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvcHJvZHVjdHNcIj5Qcm9kdWN0czwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3NwZWNpYWxzXCI+U3BlY2lhbHM8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9nYWxsZXJ5XCI+R2FsbGVyeTwvYT5cclxuICAgICAgPC9saT5cclxuICAgIDwvdWw+XHJcbiAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dCBuYXYtbGlua1wiPlxyXG4gICAgPGkgY2xhc3M9XCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRleHQgbmF2LWxpbmtcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGhvbmUtc3F1YXJlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRleHQgbmF2LWxpbmtcIj5cclxuICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZW52ZWxvcGUtc3F1YXJlXCI+PC9pPjwvc3Bhbj5cclxuICA8L2Rpdj5cclxuPC9uYXY+XHJcbjxzdHlsZSBqc3g+e2BcclxuICAubmF2YmFyLXRleHQge1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuLm5hdmJhci10ZXh0OmhvdmVyIHtcclxuICAgIGNvbG9yOmJsdWU7XHJcbiAgfVxyXG5hOmFjdGl2ZSB7XHJcbiAgY29sb3I6Ymx1ZTtcclxufVxyXG4gXHJcbiAgXHJcbmB9PC9zdHlsZT5cclxuPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcblxyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Talitha\\Documents\\Francois\\components\\Navbar.js */"));

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\Talitha\\Documents\\Francois\\pages\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const About = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "About Company Name")));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Talitha\Documents\Francois\pages\about.js */"./pages/about.js");


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