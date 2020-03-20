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
var _jsxFileName = "C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\components\\Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

//Footer componenet with active links
const Footer = () => __jsx("div", {
  className: "jsx-2098396145" + " " + "nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("div", {
  id: "icon-box",
  className: "jsx-2098396145",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  id: "comp",
  className: "jsx-2098396145",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, "AllSound Visual is registered as FC AV and Security Pty Ltd 2017"), " ", __jsx("a", {
  href: "mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual",
  target: "_top",
  className: "jsx-2098396145" + " " + "icon-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-2098396145" + " " + "fas fa-envelope-square icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), " ", __jsx("a", {
  href: "mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual",
  target: "_top",
  className: "jsx-2098396145" + " " + "icon-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-2098396145" + " " + "fab fa-facebook-square icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
})), " ", __jsx("a", {
  href: "mailto:francoiscoetzee@rocketmail.com?Subject=Dear%20AllSoundVisual",
  target: "_top",
  className: "jsx-2098396145" + " " + "icon-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-2098396145" + " " + "fas fa-phone-square icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2098396145",
  __self: undefined
}, ".nav.jsx-2098396145{background:darkgrey;font-family:calibri;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:10px;width:100%;position:absolute;bottom:0;font-size:25px;}#comp.jsx-2098396145{font-size:15px;padding:10px;margin-top:7px;color:grey;font-weight:bold;}#comp.jsx-2098396145:hover{color:black;}#icon-box.jsx-2098396145{width:100%;height:50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#icon-box.jsx-2098396145 a.jsx-2098396145{color:grey;padding:10px;}#icon-box.jsx-2098396145 a.jsx-2098396145:hover{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFsaXRoYVxcRGVza3RvcFxcQWxsU291bmQtVmlzdWFsXFxjb21wb25lbnRzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JnQixBQUc2QixBQVdMLEFBT0gsQUFHRCxBQU1BLEFBSUMsV0FUQSxBQU1DLENBVGYsQUFhQSxHQXBCZSxLQVhPLEdBc0JQLENBTWYsSUFoQmlCLFlBWEYsR0FZRixXQUNNLGlCQUNuQiwwQkFReUIsaUJBckJBLGtGQXNCekIsaUJBckJlLGFBQ0YsV0FDTyxrQkFDVCxTQUNNLGVBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcVGFsaXRoYVxcRGVza3RvcFxcQWxsU291bmQtVmlzdWFsXFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL0Zvb3RlciBjb21wb25lbmV0IHdpdGggYWN0aXZlIGxpbmtzXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgIDxkaXYgaWQ9XCJpY29uLWJveFwiPlxyXG4gICAgICA8ZGl2IGlkPVwiY29tcFwiPlxyXG4gICAgICAgIEFsbFNvdW5kIFZpc3VhbCBpcyByZWdpc3RlcmVkIGFzIEZDIEFWIGFuZCBTZWN1cml0eSBQdHkgTHRkIDIwMTdcclxuICAgICAgPC9kaXY+e1wiIFwifVxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJtYWlsdG86ZnJhbmNvaXNjb2V0emVlQHJvY2tldG1haWwuY29tP1N1YmplY3Q9RGVhciUyMEFsbFNvdW5kVmlzdWFsXCJcclxuICAgICAgICB0YXJnZXQ9XCJfdG9wXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJpY29uLWxpbmtcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWVudmVsb3BlLXNxdWFyZSBpY29uXCI+PC9pPlxyXG4gICAgICA8L2E+e1wiIFwifVxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJtYWlsdG86ZnJhbmNvaXNjb2V0emVlQHJvY2tldG1haWwuY29tP1N1YmplY3Q9RGVhciUyMEFsbFNvdW5kVmlzdWFsXCJcclxuICAgICAgICB0YXJnZXQ9XCJfdG9wXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJpY29uLWxpbmtcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLWZhY2Vib29rLXNxdWFyZSBpY29uXCI+PC9pPlxyXG4gICAgICA8L2E+e1wiIFwifVxyXG4gICAgICA8YVxyXG4gICAgICAgIGhyZWY9XCJtYWlsdG86ZnJhbmNvaXNjb2V0emVlQHJvY2tldG1haWwuY29tP1N1YmplY3Q9RGVhciUyMEFsbFNvdW5kVmlzdWFsXCJcclxuICAgICAgICB0YXJnZXQ9XCJfdG9wXCJcclxuICAgICAgICBjbGFzc05hbWU9XCJpY29uLWxpbmtcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lLXNxdWFyZSBpY29uXCI+PC9pPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5uYXYge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtncmV5O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBjYWxpYnJpO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgfVxyXG4gICAgICAjY29tcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgIGNvbG9yOiBncmV5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICAgICNjb21wOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgIH1cclxuICAgICAgI2ljb24tYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAjaWNvbi1ib3ggYSB7XHJcbiAgICAgICAgY29sb3I6IGdyZXk7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgICAjaWNvbi1ib3ggYTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\components\\Footer.js */"));

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
var _jsxFileName = "C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\components\\Layout.js";

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
  charSet: "utf-8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx("meta", {
  httpEquiv: "X-UA-Compatible",
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
  crossOrigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}), __jsx("script", {
  src: "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",
  integrity: "sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",
  crossOrigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("script", {
  src: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js",
  integrity: "sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6",
  crossOrigin: "anonymous",
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
var _jsxFileName = "C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\components\\Navbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Navbar = () => __jsx("div", {
  className: "jsx-328996265",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("nav", {
  className: "jsx-328996265" + " " + "navbar navbar-expand-lg  bg-dark",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("a", {
  href: "/",
  className: "jsx-328996265" + " " + "navbar-brand",
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
  className: "jsx-328996265" + " " + "navbar-toggler",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-328996265" + " " + "navbar-toggler-icon",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
})), __jsx("div", {
  id: "navbarText",
  className: "jsx-328996265" + " " + "collapse navbar-collapse",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("ul", {
  className: "jsx-328996265" + " " + "navbar-nav mr-auto",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-328996265" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, __jsx("a", {
  href: "/",
  className: "jsx-328996265" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Home")), __jsx("li", {
  className: "jsx-328996265" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx("a", {
  href: "/about",
  className: "jsx-328996265" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "About")), __jsx("li", {
  className: "jsx-328996265" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx("a", {
  href: "/services",
  className: "jsx-328996265" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, "Services")), __jsx("li", {
  className: "jsx-328996265" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, __jsx("a", {
  href: "/products",
  className: "jsx-328996265" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, "Products")), __jsx("li", {
  className: "jsx-328996265" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("a", {
  href: "/specials",
  className: "jsx-328996265" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, "Specials")), __jsx("li", {
  className: "jsx-328996265" + " " + "nav-item",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("a", {
  href: "/gallery",
  className: "jsx-328996265" + " " + "nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "Gallery"))), __jsx("span", {
  className: "jsx-328996265" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-328996265" + " " + "fab fa-facebook-square",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
})), __jsx("span", {
  className: "jsx-328996265" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-328996265" + " " + "fas fa-phone-square",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
})), __jsx("span", {
  className: "jsx-328996265" + " " + "navbar-text nav-link",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("i", {
  className: "jsx-328996265" + " " + "fas fa-envelope-square",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
})))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "328996265",
  __self: undefined
}, ".navbar-brand.jsx-328996265{color:red;}.navbar-brand.jsx-328996265:hover{color:blue;}.navbar-text.jsx-328996265{color:darkgrey;font-size:22px;}.navbar-text.jsx-328996265:hover{color:red;}a.jsx-328996265{color:darkgrey;font-size:14px;}a.jsx-328996265:hover{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVGFsaXRoYVxcRGVza3RvcFxcQWxsU291bmQtVmlzdWFsXFxjb21wb25lbnRzXFxOYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRnQixBQUdtQixBQUdDLEFBSUksQUFLTCxBQUlLLEFBSUwsVUFuQlosQUFZQSxBQVFBLENBakJBLElBSWlCLEFBU0EsZUFSakIsQUFTQSIsImZpbGUiOiJDOlxcVXNlcnNcXFRhbGl0aGFcXERlc2t0b3BcXEFsbFNvdW5kLVZpc3VhbFxcY29tcG9uZW50c1xcTmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTmF2YmFyID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnICBiZy1kYXJrXCI+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgQWxsU291bmQgVmlzdWFsXHJcbiAgICAgIDwvYT5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcclxuICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJUZXh0XCJcclxuICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyVGV4dFwiXHJcbiAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcclxuICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJUZXh0XCI+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICBIb21lXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgQWJvdXRcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvc2VydmljZXNcIj5cclxuICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9wcm9kdWN0c1wiPlxyXG4gICAgICAgICAgICAgIFByb2R1Y3RzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3NwZWNpYWxzXCI+XHJcbiAgICAgICAgICAgICAgU3BlY2lhbHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvZ2FsbGVyeVwiPlxyXG4gICAgICAgICAgICAgIEdhbGxlcnlcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10ZXh0IG5hdi1saW5rXCI+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stc3F1YXJlXCI+PC9pPlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dCBuYXYtbGlua1wiPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBob25lLXNxdWFyZVwiPjwvaT5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRleHQgbmF2LWxpbmtcIj5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1lbnZlbG9wZS1zcXVhcmVcIj48L2k+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXZiYXItYnJhbmQ6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2YmFyLXRleHQge1xyXG4gICAgICAgIGNvbG9yOiBkYXJrZ3JleTtcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5uYXZiYXItdGV4dDpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6IGRhcmtncmV5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgfVxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\components\\Navbar.js */"));

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
var _jsxFileName = "C:\\Users\\Talitha\\Desktop\\AllSound-Visual\\pages\\index.js";

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
}, "Welcome to AllSound Visual")));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Talitha\Desktop\AllSound-Visual\pages\index.js */"./pages/index.js");


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