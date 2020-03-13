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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
const Footer = () => __jsx("div", {
  className: "jsx-3007401511" + " " + "nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  id: "icon-box",
  className: "jsx-3007401511",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  id: "comp",
  className: "jsx-3007401511",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "AllSound Visual is registered as FC AV and Security Pty Ltd 2017"), " ", __jsx("a", {
  href: "mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual",
  target: "_top",
  className: "jsx-3007401511" + " " + "icon-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("i", {
  class: "fas fa-envelope-square icon",
  className: "jsx-3007401511",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), " ", __jsx("a", {
  href: "mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual",
  target: "_top",
  className: "jsx-3007401511" + " " + "icon-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("i", {
  class: "fab fa-facebook-square icon",
  className: "jsx-3007401511",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
})), " ", __jsx("a", {
  href: "mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual",
  target: "_top",
  className: "jsx-3007401511" + " " + "icon-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("i", {
  class: "fas fa-phone-square icon",
  className: "jsx-3007401511",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3007401511",
  __self: undefined
}, ".nav.jsx-3007401511{background:darkgrey;font-family:calibri;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:10px;width:100%;position:absolute;bottom:0;font-size:25px;}#comp.jsx-3007401511{font-size:15px;padding:10px;margin-top:7px;color:grey;font-weight:bold;}#comp.jsx-3007401511:hover{color:black;}#icon-box.jsx-3007401511{width:100%;height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#icon-box.jsx-3007401511 a.jsx-3007401511{color:grey;padding:10px;}#icon-box.jsx-3007401511 a.jsx-3007401511:hover{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFsaXRoYVxcRG9jdW1lbnRzXFxGcmFuY29pc1xcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDZ0IsQUFHNkIsQUFXTCxBQU9ILEFBR0QsQUFNQSxBQUlDLFdBVEEsQUFNQyxDQVRmLEFBYUEsR0FwQmUsS0FYTyxHQXNCUCxDQU1mLElBaEJpQixZQVhGLEdBWUgsV0FDTSxpQkFDbEIsMEJBUXlCLGlCQXJCQSxrRkFzQnpCLGlCQXJCZSxhQUNGLFdBQ08sa0JBQ1QsU0FDTSxlQUNqQiIsImZpbGUiOiJDOlxcVXNlcnNcXFRhbGl0aGFcXERvY3VtZW50c1xcRnJhbmNvaXNcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vRm9vdGVyIGNvbXBvbmVuZXQgd2l0aCBhY3RpdmUgbGlua3NcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICBcclxuXHJcbiAgICA8ZGl2IGlkPVwiaWNvbi1ib3hcIj5cclxuICAgIDxkaXYgaWQ9XCJjb21wXCI+QWxsU291bmQgVmlzdWFsIGlzIHJlZ2lzdGVyZWQgYXMgRkMgQVYgYW5kIFNlY3VyaXR5IFB0eSBMdGQgMjAxNzwvZGl2PlxyXG4gICAgICB7XCIgXCJ9XHJcbiAgICAgIDxhXHJcbiAgICAgICAgaHJlZj1cIm1haWx0bzpmcmFuY29pc2NvZXR6ZWVAcm9ja2V0bWFpbC5jb20/U3ViamVjdD1EZWFyJTIwQWxsU291bmRWaXN1YWxcIlxyXG4gICAgICAgIHRhcmdldD1cIl90b3BcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImljb24tbGlua1wiXHJcbiAgICAgID5cclxuICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1lbnZlbG9wZS1zcXVhcmUgaWNvblwiPjwvaT5cclxuICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgPGFcclxuICAgICAgICBocmVmPVwibWFpbHRvOmZyYW5jb2lzY29ldHplZUByb2NrZXRtYWlsLmNvbT9TdWJqZWN0PURlYXIlMjBBbGxTb3VuZFZpc3VhbFwiXHJcbiAgICAgICAgdGFyZ2V0PVwiX3RvcFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaWNvbi1saW5rXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZSBpY29uXCI+PC9pPlxyXG4gICAgICA8L2E+e1wiIFwifVxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJtYWlsdG86ZnJhbmNvaXNjb2V0emVlQHJvY2tldG1haWwuY29tP1N1YmplY3Q9RGVhciUyMEFsbFNvdW5kVmlzdWFsXCJcclxuICAgICAgICB0YXJnZXQ9XCJfdG9wXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJpY29uLWxpbmtcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGhvbmUtc3F1YXJlIGljb25cIj48L2k+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLm5hdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogZGFya2dyZXk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGNhbGlicmk7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB9XHJcbiAgICAgICNjb21wIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcbiAgICAgICAgY29sb3I6Z3JleTtcclxuICAgICAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgICB9XHJcbiAgICAgICNjb21wOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgICAgI2ljb24tYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAjaWNvbi1ib3ggYSB7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAjaWNvbi1ib3ggYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Talitha\\Documents\\Francois\\components\\Footer.js */"));

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
    lineNumber: 34
  },
  __self: undefined
}), __jsx("script", {
  src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
  integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
})), __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}), props.children, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
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
  className: "jsx-2463648712",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("nav", {
  className: "jsx-2463648712" + " " + "navbar navbar-expand-lg  bg-dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("a", {
  href: "/",
  className: "jsx-2463648712" + " " + "navbar-brand",
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
  className: "jsx-2463648712" + " " + "navbar-toggler",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2463648712" + " " + "navbar-toggler-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
})), __jsx("div", {
  id: "navbarText",
  className: "jsx-2463648712" + " " + "collapse navbar-collapse",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-2463648712" + " " + "navbar-nav mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-2463648712" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, __jsx("a", {
  href: "/",
  className: "jsx-2463648712" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "Home")), __jsx("li", {
  className: "jsx-2463648712" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("a", {
  href: "/about",
  className: "jsx-2463648712" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, "About")), __jsx("li", {
  className: "jsx-2463648712" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("a", {
  href: "/installations",
  className: "jsx-2463648712" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Installations")), __jsx("li", {
  className: "jsx-2463648712" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("a", {
  href: "/products",
  className: "jsx-2463648712" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "Products")), __jsx("li", {
  className: "jsx-2463648712" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, __jsx("a", {
  href: "/specials",
  className: "jsx-2463648712" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, "Specials")), __jsx("li", {
  className: "jsx-2463648712" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("a", {
  href: "/gallery",
  className: "jsx-2463648712" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Gallery"))), __jsx("span", {
  className: "jsx-2463648712" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, __jsx("i", {
  class: "fab fa-facebook-square",
  className: "jsx-2463648712",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
})), __jsx("span", {
  className: "jsx-2463648712" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("i", {
  class: "fas fa-phone-square",
  className: "jsx-2463648712",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
})), __jsx("span", {
  className: "jsx-2463648712" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx("i", {
  class: "fas fa-envelope-square",
  className: "jsx-2463648712",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
})))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2463648712",
  __self: undefined
}, ".navbar-text.jsx-2463648712{color:darkgrey;font-size:22px;}.navbar-text.jsx-2463648712:hover{color:red;}a.jsx-2463648712{color:darkgrey;font-size:14px;}a.jsx-2463648712:hover{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFsaXRoYVxcRG9jdW1lbnRzXFxGcmFuY29pc1xcY29tcG9uZW50c1xcTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DWSxBQUlvQixBQUtMLEFBSUcsQUFJTCxVQVBWLEFBUUYsS0FibUIsQUFTRixlQVJmLEFBU0YiLCJmaWxlIjoiQzpcXFVzZXJzXFxUYWxpdGhhXFxEb2N1bWVudHNcXEZyYW5jb2lzXFxjb21wb25lbnRzXFxOYXZiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBOYXZiYXIgPSAoKSA9PiAoXHJcbiAgPGRpdj5cclxuPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyAgYmctZGFya1wiPlxyXG4gIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+QWxsU291bmQgVmlzdWFsPC9hPlxyXG4gIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclRleHRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyVGV4dFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICA8L2J1dHRvbj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyVGV4dFwiPlxyXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvXCI+SG9tZTwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2Fib3V0XCI+QWJvdXQ8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9pbnN0YWxsYXRpb25zXCI+SW5zdGFsbGF0aW9uczwvYT5cclxuICAgICAgPC9saT5cclxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3Byb2R1Y3RzXCI+UHJvZHVjdHM8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9zcGVjaWFsc1wiPlNwZWNpYWxzPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvZ2FsbGVyeVwiPkdhbGxlcnk8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRleHQgbmF2LWxpbmtcIj5cclxuICAgIDxpIGNsYXNzPVwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10ZXh0IG5hdi1saW5rXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXBob25lLXNxdWFyZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10ZXh0IG5hdi1saW5rXCI+XHJcbiAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWVudmVsb3BlLXNxdWFyZVwiPjwvaT48L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvbmF2PlxyXG48c3R5bGUganN4PntgXHJcbiAgXHJcbiAgLm5hdmJhci10ZXh0IHtcclxuICAgIGNvbG9yOiBkYXJrZ3JleTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiBcclxuICAubmF2YmFyLXRleHQ6aG92ZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG5hIHtcclxuICBjb2xvcjogZGFya2dyZXk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbmE6aG92ZXIge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIFxyXG4gIFxyXG5gfTwvc3R5bGU+XHJcbjwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG5cclxuIl19 */\n/*@ sourceURL=C:\\Users\\Talitha\\Documents\\Francois\\components\\Navbar.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\Talitha\\Documents\\Francois\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
}, "Welcome to Company Name")));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Talitha\Documents\Francois\pages\index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map