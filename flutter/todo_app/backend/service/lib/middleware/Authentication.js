"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const tslib_1 = require("tslib");
const ReturnObj_1 = tslib_1.__importDefault(require("../types/ReturnObj"));
const Env_1 = tslib_1.__importDefault(require("../env/Env"));
const authenticate = async (req, res, next) => {
    console.log(req.method, req.url);
    console.log(req.body);
    if (!req.header("api_key"))
        return res.status(200).json(new ReturnObj_1.default("missing api key"));
    if (req.header("api_key") !== Env_1.default.KEY)
        return res.status(200).json(new ReturnObj_1.default("invalid api key"));
    next();
};
exports.authenticate = authenticate;
//# sourceMappingURL=Authentication.js.map