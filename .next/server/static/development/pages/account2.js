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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ActiveLink.js":
/*!**********************************!*\
  !*** ./components/ActiveLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/oliverw/giffgaff/ui-prototypes-next/components/ActiveLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

function ActiveLink({
  children,
  router,
  href,
  id
}) {
  const style = {
    boxShadow: router.pathname === href ? 'inset 0 -9px 0px white' : '',
    color: router.pathname === href ? 'white' : '#D0D0D0'
  };

  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  return __jsx("a", {
    id: id,
    className: "nav__link gg-u-text-whisper",
    href: href,
    onClick: handleClick,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, children);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/LayoutForNav2.js":
/*!*************************************!*\
  !*** ./components/LayoutForNav2.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav2 */ "./components/Nav2.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/oliverw/giffgaff/ui-prototypes-next/components/LayoutForNav2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Layout1(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("link", {
    rel: "stylesheet",
    href: "https://static.giffgaff.com/design-system/style-guide/49.1.6/style-guide.css",
    type: "text/css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("link", {
    href: "https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx("link", {
    href: "/styles.css",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), __jsx("img", {
    src: "main-nav.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_Nav2__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("main", {
    className: "gg-o-page-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, props.children));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout1);

/***/ }),

/***/ "./components/Nav2.js":
/*!****************************!*\
  !*** ./components/Nav2.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActiveLink */ "./components/ActiveLink.js");
var _jsxFileName = "/Users/oliverw/giffgaff/ui-prototypes-next/components/Nav2.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Nav2() {
  const {
    0: leftHighlighted,
    1: setLeftHighlighted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: rightHighlighted,
    1: setRightHighlighted
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  function scrollLeft() {
    const account = document.getElementById('account');
    account.scrollIntoView({
      behavior: "smooth"
    });
    setLeftHighlighted(false);
    setRightHighlighted(true);
  }

  function scrollRight() {
    const loan = document.getElementById('loan');
    loan.scrollIntoView({
      behavior: "smooth"
    });
    setRightHighlighted(false);
    setLeftHighlighted(true);
  }

  const ul = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const account = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  console.log(ul.current);
  console.log(account.current);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {// let options = {
    //     root: ul.current,
    //     rootMargin: '0px',
    //     treshold: .5
    // }
    // function logger(entries) {
    //     entries.forEach(entry => {
    //         if (entry.isIntersection) {
    //             console.log(entry.intersectionRatio)
    //         }
    //     })
    // }
    // let observer = new IntersectionObserver(logger, options);
    // observer.observe(account.current);
  });
  return __jsx("nav", {
    className: "nav2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("button", {
    onClick: scrollLeft,
    className: "gg-u-pr-fine gg-u-pl-fine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, " ", __jsx("svg", {
    style: {
      fill: leftHighlighted && "white"
    },
    className: "gg-u-icon gg-u-icon--small",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("path", {
    d: "M17.34,19.47c-1.2-1.3-2.3-2.1-3.5-3.4a3.64,3.64,0,0,0-.6-.7c-.7-.7-1.1-1.2-1.8-1.8L9.84,12l.6-.6c2.4-2.1,4.4-4.7,6.7-7a.49.49,0,0,0,0-.68l0,0a7.69,7.69,0,0,0-1.8-1.8c-.2-.1-.3,0-.5.1h-.1c-.6.2-1.1,1-1.6,1.5-1.3,1.3-2.6,2.7-4,4.1s-2.7,2.5-3.9,3.9l-.1.1a.49.49,0,0,0,0,.68l0,0c1.6,1.6,3.1,3.4,4.7,5s3.3,3.1,4.9,4.7a.49.49,0,0,0,.68,0l0,0,1.9-1.9C17.54,20,17.54,19.67,17.34,19.47Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }))), __jsx("ul", {
    ref: ul,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "account",
    href: "/account2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Account")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/profile2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Profile and settings")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/payments2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Payments")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: "loan",
    href: "/loan2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Loan"))), __jsx("button", {
    onClick: scrollRight,
    className: "gg-u-pr-fine gg-u-pl-fine",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("svg", {
    style: {
      fill: rightHighlighted && "white"
    },
    className: "gg-u-icon gg-u-icon--small",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("path", {
    d: "M5.2 19.5c1.2-1.3 2.3-2.1 3.5-3.4.2-.3.4-.5.6-.7.7-.7 1.1-1.2 1.8-1.8l1.6-1.6-.6-.6c-2.4-2.1-4.4-4.7-6.7-7-.2-.2-.2-.5 0-.7.4-.7 1.1-1.3 1.8-1.8.2-.1.3 0 .5.1h.1c.6.2 1.1 1 1.6 1.5 1.3 1.3 2.6 2.7 4 4.1s2.7 2.5 3.9 3.9l.1.1c.2.2.2.5 0 .7-1.6 1.6-3.1 3.4-4.7 5S9.4 20.4 7.8 22c-.2.2-.5.2-.7 0l-1.9-1.9c-.2-.1-.2-.4 0-.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Nav2);

/***/ }),

/***/ "./pages/account2.js":
/*!***************************!*\
  !*** ./pages/account2.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LayoutForNav2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LayoutForNav2 */ "./components/LayoutForNav2.js");
var _jsxFileName = "/Users/oliverw/giffgaff/ui-prototypes-next/pages/account2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Account() {
  return __jsx(_components_LayoutForNav2__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    className: "gg-u-text-megaphone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Account"));
}

/***/ }),

/***/ 5:
/*!*********************************!*\
  !*** multi ./pages/account2.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oliverw/giffgaff/ui-prototypes-next/pages/account2.js */"./pages/account2.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=account2.js.map