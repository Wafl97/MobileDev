"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logReqest = exports.log = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const date = new Date();
const now = () => {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} @ ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};
const log = (log) => {
    fs_1.default.appendFile("./logs/server.log", `${now()} \t::\t${log}\n`, (err) => {
        if (err) {
            console.log(err);
        }
    });
};
exports.log = log;
const logReqest = (req, res, next) => {
    next();
    (0, exports.log)(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
};
exports.logReqest = logReqest;
//# sourceMappingURL=Logger.js.map