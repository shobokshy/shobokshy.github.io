webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/project.tsx":
/*!********************************!*\
  !*** ./components/project.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/shobokshy/Git/shobokshy.github.io/components/project.tsx";

/** @jsx jsx */


//@ts-ignore



var Project =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Project, _React$Component);

  function Project(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Project);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Project).call(this, props));
    _this.state = {
      data: _this.props.doc.data
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Project, [{
    key: "formatDate",
    value: function formatDate(date) {
      var d = Object(prismic_reactjs__WEBPACK_IMPORTED_MODULE_7__["Date"])(date);
      return Intl.DateTimeFormat('en-AU', {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
      }).format(d);
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        css: {
          display: 'block',
          height: '98vh',
          width: '100%',
          backgroundColor: this.state.data.background_color
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        css: {
          padding: 65,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          boxSizing: 'border-box'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        css: {
          fontWeight: 100,
          color: 'white'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.formatDate(this.state.data.created_date)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        css: {
          marginTop: 'auto',
          color: 'white',
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        css: {
          flex: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h4", {
        css: {
          marginBottom: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_7__["RichText"].asText(this.state.data.title)), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        css: {
          fontWeight: 200
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, prismic_reactjs__WEBPACK_IMPORTED_MODULE_7__["RichText"].asText(this.state.data.subtitle))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        css: {
          flex: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.state.data.github_link.target && Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_feather__WEBPACK_IMPORTED_MODULE_6__["GitHub"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }))))));
    }
  }]);

  return Project;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ })

})
//# sourceMappingURL=index.js.f1ec1469ceb054e90ff6.hot-update.js.map