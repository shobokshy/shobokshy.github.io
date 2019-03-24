webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/button.tsx":
/*!*******************************!*\
  !*** ./components/button.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");

var _jsxFileName = "/Users/shobokshy/Git/shobokshy.github.io/components/button.tsx";


/** @jsx jsx */


var Button = function Button(props) {
  var type = props.type || 'primary';
  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    css: {
      fontSize: '14px',
      color: "".concat(type === 'primary' ? 'white' : '#e64c4c'),
      background: "".concat(type === 'primary' ? '#e64c4c' : 'transparent'),
      transition: 'all .2s ease-in',
      boxShadow: "0 4px 14px 0 ".concat(type === 'primary' ? '#00000014' : 'transparent'),
      padding: '0 2rem',
      height: '2.5rem',
      borderWidth: 0,
      borderRadius: '7px',
      cursor: 'pointer',
      '&:hover': {
        background: "".concat(type === 'primary' ? '#c4001d' : '#ff616f4d')
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ })

})
//# sourceMappingURL=index.js.ad02885895cb7a717f3d.hot-update.js.map