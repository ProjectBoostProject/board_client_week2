"use strict";
self["webpackHotUpdate_N_E"]("pages/boards/[boardId]",{

/***/ "./src/feature/reply/component/ReplyItem.jsx":
/*!***************************************************!*\
  !*** ./src/feature/reply/component/ReplyItem.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\qht6\\Desktop\\PBP\\board_project_week1\\src\\feature\\reply\\component\\ReplyItem.jsx";



const Container = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "ReplyItem__Container",
  componentId: "sc-1h95ewt-0"
})(["width:100%;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;padding:5px;border-bottom:1px solid #cdcdcd;"]);
_c = Container;
const Writer = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "ReplyItem__Writer",
  componentId: "sc-1h95ewt-1"
})(["flex:0 0 100px;"]);
_c2 = Writer;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "ReplyItem__Content",
  componentId: "sc-1h95ewt-2"
})(["flex:1 1 100px;"]);
_c3 = Content;
const Time = styled_components__WEBPACK_IMPORTED_MODULE_2__.default.div.withConfig({
  displayName: "ReplyItem__Time",
  componentId: "sc-1h95ewt-3"
})(["flex:0 0 150px;"]);
_c4 = Time;

const ReplyItem = ({
  writer,
  content,
  time
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Writer, {
      children: writer
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Content, {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Time, {
      children: time
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

_c5 = ReplyItem;
/* harmony default export */ __webpack_exports__["default"] = (ReplyItem);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Container");
$RefreshReg$(_c2, "Writer");
$RefreshReg$(_c3, "Content");
$RefreshReg$(_c4, "Time");
$RefreshReg$(_c5, "ReplyItem");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYm9hcmRzL1tib2FyZElkXS4zYmVjOTczYWZiMGFjNjBiODdiOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNRSxTQUFTLEdBQUdELHFFQUFIO0FBQUE7QUFBQTtBQUFBLGlKQUFmO0tBQU1DO0FBYU4sTUFBTUUsTUFBTSxHQUFHSCxxRUFBSDtBQUFBO0FBQUE7QUFBQSx1QkFBWjtNQUFNRztBQUdOLE1BQU1DLE9BQU8sR0FBR0oscUVBQUg7QUFBQTtBQUFBO0FBQUEsdUJBQWI7TUFBTUk7QUFHTixNQUFNQyxJQUFJLEdBQUdMLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHVCQUFWO01BQU1LOztBQUlOLE1BQU1DLFNBQVMsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLE1BQUY7QUFBVUMsRUFBQUEsT0FBVjtBQUFtQkMsRUFBQUE7QUFBbkIsQ0FBRCxLQUErQjtBQUMvQyxzQkFDRSw4REFBQyxTQUFEO0FBQUEsNEJBQ0UsOERBQUMsTUFBRDtBQUFBLGdCQUFTRjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSw4REFBQyxPQUFEO0FBQUEsZ0JBQVVDO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFLDhEQUFDLElBQUQ7QUFBQSxnQkFBT0M7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FSRDs7TUFBTUg7QUFVTiwrREFBZUEsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZS9yZXBseS9jb21wb25lbnQvUmVwbHlJdGVtLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICBwYWRkaW5nOiA1cHg7XHJcblxyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2RjZGNkO1xyXG5gO1xyXG5cclxuY29uc3QgV3JpdGVyID0gc3R5bGVkLmRpdmBcclxuICBmbGV4OiAwIDAgMTAwcHg7XHJcbmA7XHJcbmNvbnN0IENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGZsZXg6IDEgMSAxMDBweDtcclxuYDtcclxuY29uc3QgVGltZSA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleDogMCAwIDE1MHB4O1xyXG5gO1xyXG5cclxuY29uc3QgUmVwbHlJdGVtID0gKHsgd3JpdGVyLCBjb250ZW50LCB0aW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFdyaXRlcj57d3JpdGVyfTwvV3JpdGVyPlxyXG4gICAgICA8Q29udGVudD57Y29udGVudH08L0NvbnRlbnQ+XHJcbiAgICAgIDxUaW1lPnt0aW1lfTwvVGltZT5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXBseUl0ZW07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlZCIsIkNvbnRhaW5lciIsImRpdiIsIldyaXRlciIsIkNvbnRlbnQiLCJUaW1lIiwiUmVwbHlJdGVtIiwid3JpdGVyIiwiY29udGVudCIsInRpbWUiXSwic291cmNlUm9vdCI6IiJ9