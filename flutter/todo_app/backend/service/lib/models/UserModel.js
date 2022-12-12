"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserModel = void 0;
const tslib_1 = require("tslib");
const typegoose_1 = require("@typegoose/typegoose");
let User = class User {
    constructor(_id, username, password) {
        this._id = _id;
        this.username = username;
        this.password = password;
    }
};
tslib_1.__decorate([
    (0, typegoose_1.prop)({ required: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "_id", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)({ unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    (0, typegoose_1.prop)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
User = tslib_1.__decorate([
    (0, typegoose_1.modelOptions)({ schemaOptions: { collection: "users", timestamps: true } }),
    tslib_1.__metadata("design:paramtypes", [String, String, String])
], User);
exports.User = User;
const UserModel = (0, typegoose_1.getModelForClass)(User);
exports.UserModel = UserModel;
//# sourceMappingURL=UserModel.js.map