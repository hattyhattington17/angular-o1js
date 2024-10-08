import {
  GB,
  Nc,
  Xr,
  b,
  uu
} from "./chunk-IQHSJEEW.js";
import {
  __async
} from "./chunk-5K356HEJ.js";

// node_modules/@hattyhattington17/add/build/src/Add.js
var __decorate = function(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = function(k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Add = class extends Xr {
  constructor() {
    super(...arguments);
    this.num = GB();
  }
  init() {
    super.init();
    this.num.set(b(1));
  }
  update() {
    return __async(this, null, function* () {
      const currentState = this.num.getAndRequireEquals();
      const newState = currentState.add(2);
      this.num.set(newState);
    });
  }
};
__decorate([uu(b), __metadata("design:type", Object)], Add.prototype, "num", void 0);
__decorate([Nc, __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Promise)], Add.prototype, "update", null);
export {
  Add
};
//# sourceMappingURL=src-IIUH2CHO.js.map
