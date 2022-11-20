"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const UserModel_1 = require("../models/UserModel");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const ReturnObj_1 = tslib_1.__importDefault(require("../types/ReturnObj"));
class UserController {
    async login(req, res) {
        const user = await UserModel_1.UserModel.findOne({ "username": req.body.username });
        if (!user || !(await bcrypt_1.default.compare(req.body.password, user.password))) {
            return res.status(401).json(new ReturnObj_1.default("unauthorized"));
        }
        return res.status(202).json(new ReturnObj_1.default("success").setValue({ "user": user }));
    }
    async postUser(req, res) {
        try {
            const salt = await bcrypt_1.default.genSalt(10);
            req.body.password = await bcrypt_1.default.hash(req.body.password, salt);
            const user = await UserModel_1.UserModel.create(req.body);
            return res.status(201).json(new ReturnObj_1.default("success").setValue({ "user": user }));
        }
        catch (err) {
            return res.status(400).json(new ReturnObj_1.default("user already exists"));
        }
    }
    async patchUser(req, res) {
        return res.status(501).send();
    }
    async deleteUser(req, res) {
        return res.status(501).send();
    }
}
exports.default = UserController;
//# sourceMappingURL=UserController.js.map