/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests",{

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_Sebastian_Code_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_Sebastian_Code_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_Sebastian_Code_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_Sebastian_Code_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_Sebastian_Code_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/Sebastian/Code/kickstarter/components/RequestRow.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_Users_Sebastian_Code_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_Users_Sebastian_Code_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_Users_Sebastian_Code_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar RequestRow = /*#__PURE__*/function (_Component) {\n  (0,_Users_Sebastian_Code_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(RequestRow, _Component);\n\n  var _super = _createSuper(RequestRow);\n\n  function RequestRow() {\n    (0,_Users_Sebastian_Code_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, RequestRow);\n\n    return _super.apply(this, arguments);\n  }\n\n  (0,_Users_Sebastian_Code_kickstarter_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(RequestRow, [{\n    key: \"render\",\n    value: function render() {\n      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Row,\n          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Table.Cell;\n      var _this$props = this.props,\n          id = _this$props.id,\n          request = _this$props.request,\n          approversCount = _this$props.approversCount;\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n          children: id\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n          children: request.description\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n          children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__.default.utils.fromWei(request.value)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n          children: request.recipient\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n          children: [request.approvalCount, \" / \", approversCount]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n            color: \"green\",\n            basic: true,\n            onClick: this.onApprove,\n            children: \"Approve\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 21\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return RequestRow;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzP2M0MGUiXSwibmFtZXMiOlsiUmVxdWVzdFJvdyIsIlJvdyIsIlRhYmxlIiwiQ2VsbCIsInByb3BzIiwiaWQiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJkZXNjcmlwdGlvbiIsIndlYjMiLCJ2YWx1ZSIsInJlY2lwaWVudCIsImFwcHJvdmFsQ291bnQiLCJvbkFwcHJvdmUiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRU1BLFU7Ozs7Ozs7Ozs7Ozs7NkJBR087QUFBQSxVQUNHQyxHQURILEdBQ2lCQyx3REFEakI7QUFBQSxVQUNRQyxJQURSLEdBQ2lCRCx5REFEakI7QUFBQSx3QkFFbUMsS0FBS0UsS0FGeEM7QUFBQSxVQUVHQyxFQUZILGVBRUdBLEVBRkg7QUFBQSxVQUVPQyxPQUZQLGVBRU9BLE9BRlA7QUFBQSxVQUVnQkMsY0FGaEIsZUFFZ0JBLGNBRmhCO0FBSUwsMEJBQ0ksOERBQUMsR0FBRDtBQUFBLGdDQUNJLDhEQUFDLElBQUQ7QUFBQSxvQkFBT0Y7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUksOERBQUMsSUFBRDtBQUFBLG9CQUFPQyxPQUFPLENBQUNFO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLDhEQUFDLElBQUQ7QUFBQSxvQkFBT0MsaUVBQUEsQ0FBbUJILE9BQU8sQ0FBQ0ksS0FBM0I7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUksOERBQUMsSUFBRDtBQUFBLG9CQUFPSixPQUFPLENBQUNLO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJLDhEQUFDLElBQUQ7QUFBQSxxQkFBT0wsT0FBTyxDQUFDTSxhQUFmLFNBQWlDTCxjQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFNSSw4REFBQyxJQUFEO0FBQUEsaUNBQ0ksOERBQUMscURBQUQ7QUFBUSxpQkFBSyxFQUFDLE9BQWQ7QUFBc0IsaUJBQUssTUFBM0I7QUFDQSxtQkFBTyxFQUFFLEtBQUtNLFNBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBY0g7Ozs7RUFyQm9CQyw0Qzs7QUF3QnpCLCtEQUFlZCxVQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRhYmxlLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi9ldGhlcmV1bS93ZWIzJztcblxuY2xhc3MgUmVxdWVzdFJvdyBleHRlbmRzIENvbXBvbmVudCB7XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xuICAgICAgICBjb25zdCB7IGlkLCByZXF1ZXN0LCBhcHByb3ZlcnNDb3VudCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q2VsbD57aWR9PC9DZWxsPlxuICAgICAgICAgICAgICAgIDxDZWxsPntyZXF1ZXN0LmRlc2NyaXB0aW9ufTwvQ2VsbD5cbiAgICAgICAgICAgICAgICA8Q2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHJlcXVlc3QudmFsdWUpfTwvQ2VsbD5cbiAgICAgICAgICAgICAgICA8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxuICAgICAgICAgICAgICAgIDxDZWxsPntyZXF1ZXN0LmFwcHJvdmFsQ291bnR9IC8ge2FwcHJvdmVyc0NvdW50fTwvQ2VsbD5cbiAgICAgICAgICAgICAgICA8Q2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImdyZWVuXCIgYmFzaWMgXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub25BcHByb3ZlfT5BcHByb3ZlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DZWxsPlxuXG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n");

/***/ })

});