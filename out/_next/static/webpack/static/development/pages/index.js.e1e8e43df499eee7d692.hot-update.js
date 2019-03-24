webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/global-wrapper.tsx":
/*!***************************************!*\
  !*** ./components/global-wrapper.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var _static_fonts_inter_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/fonts/inter.css */ "./static/fonts/inter.css");
/* harmony import */ var _static_fonts_inter_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_fonts_inter_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./meta */ "./components/meta.tsx");
var _jsxFileName = "/Users/shobokshy/Git/shobokshy.github.io/components/global-wrapper.tsx";

/** @jsx jsx */





var GlobalWrapper = function GlobalWrapper(props) {
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), props.children, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_0__["Global"], {
    styles: {
      'html': {
        fontFamily: 'Inter, sans-serif'
      },
      'body': {
        fontSize: '14px',
        letterSpacing: '-0.006em',
        lineHeight: '20px',
        color: '#333',
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      },
      '::selection': {
        background: '#6772e5',
        color: 'white'
      },
      'button:focus': {
        outline: 'none'
      },
      '.icon': {
        stroke: 'white',
        transition: 'all .2s ease-in'
      },
      '.icon: hover': {
        stroke: 'black'
      },
      'a': {
        color: '#6772e5',
        textDecoration: 'none'
      },
      'ul': {
        paddingLeft: 0,
        listStylePosition: 'outside'
      },
      'li': {
        margin: '10px 0px'
      },
      'h1': {
        fontSize: '30px',
        letterSpacing: '-0.021em',
        lineHeight: '42px',
        fontWeight: 800
      },
      'h2': {
        fontSize: '24px',
        letterSpacing: '-0.019em',
        lineHeight: '34px',
        fontWeight: 700
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GlobalWrapper);

/***/ }),

/***/ "./components/meta.tsx":
/*!*****************************!*\
  !*** ./components/meta.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/shobokshy/Git/shobokshy.github.io/components/meta.tsx";



var Meta = function Meta() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./components/layout.tsx");
/* harmony import */ var _components_intro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/intro */ "./components/intro.tsx");
/* harmony import */ var _components_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/projects */ "./components/projects.tsx");
/* harmony import */ var _components_tracks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tracks */ "./components/tracks.tsx");
/* harmony import */ var _components_global_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/global-wrapper */ "./components/global-wrapper.tsx");
var _jsxFileName = "/Users/shobokshy/Git/shobokshy.github.io/pages/index.tsx";







var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_global_wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_intro__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["Column"], {
    gridColumnStart: 2,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_projects__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_tracks__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e1e8e43df499eee7d692.hot-update.js.map