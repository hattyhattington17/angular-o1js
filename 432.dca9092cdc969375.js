"use strict";
(self["webpackChunkangular_o1js"] = self["webpackChunkangular_o1js"] || []).push([[432],{

/***/ 7411:
/*!**************************************************************!*\
  !*** ./node_modules/@hattyhattington17/add/build/src/Add.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Add: () => (/* binding */ Add)
/* harmony export */ });
/* harmony import */ var _Users_essentialbreads_code_o1labs_ssr_angular_o1js_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var o1js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! o1js */ 3068);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Basic Example
 * See https://docs.minaprotocol.com/zkapps for more info.
 *
 * The Add contract initializes the state variable 'num' to be a Field(1) value by default when deployed.
 * When the 'update' method is called, the Add contract adds Field(2) to its 'num' contract state.
 *
 * This file is safe to delete and replace with your own contract.
 */
class Add extends o1js__WEBPACK_IMPORTED_MODULE_1__.SmartContract {
  constructor() {
    super(...arguments);
    this.num = (0,o1js__WEBPACK_IMPORTED_MODULE_1__.State)();
  }
  init() {
    super.init();
    this.num.set((0,o1js__WEBPACK_IMPORTED_MODULE_1__.Field)(1));
  }
  update() {
    var _this = this;
    return (0,_Users_essentialbreads_code_o1labs_ssr_angular_o1js_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const currentState = _this.num.getAndRequireEquals();
      const newState = currentState.add(2);
      _this.num.set(newState);
    })();
  }
}
__decorate([(0,o1js__WEBPACK_IMPORTED_MODULE_1__.state)(o1js__WEBPACK_IMPORTED_MODULE_1__.Field), __metadata("design:type", Object)], Add.prototype, "num", void 0);
__decorate([o1js__WEBPACK_IMPORTED_MODULE_1__.method, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Promise)], Add.prototype, "update", null);

/***/ }),

/***/ 6432:
/*!****************************************************************!*\
  !*** ./node_modules/@hattyhattington17/add/build/src/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Add: () => (/* reexport safe */ _Add_js__WEBPACK_IMPORTED_MODULE_0__.Add)
/* harmony export */ });
/* harmony import */ var _Add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.js */ 7411);



/***/ })

}]);
//# sourceMappingURL=432.dca9092cdc969375.js.map