"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const tslib_1 = require("tslib");
const UserModel_1 = require("../models/UserModel");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const ReturnObj_1 = tslib_1.__importDefault(require("../types/ReturnObj"));
const authenticate = async (req, res, next) => {
    if (!req.body.password) {
        return res.status(400).json(new ReturnObj_1.default("unauthorized"));
    }
    const user = await UserModel_1.UserModel.findOne({ "username": req.body.username });
    if (!user || !(await bcrypt_1.default.compare(req.body.password, user.password))) {
        return res.status(401).json(new ReturnObj_1.default("unauthorized"));
    }
    req["user"] = user;
    next();
};
exports.authenticate = authenticate;
//# sourceMappingURL=UserAuthentication.js.map