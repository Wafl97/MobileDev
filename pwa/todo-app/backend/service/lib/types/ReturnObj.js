"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReturnObj {
    constructor(message) {
        this.message = message;
        this.value = {};
    }
    setValue(value) {
        this.value = value;
        return this;
    }
}
exports.default = ReturnObj;
//# sourceMappingURL=ReturnObj.js.map