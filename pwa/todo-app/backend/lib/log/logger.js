"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logReqest = exports.Logger = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
class Logger {
    constructor() {
        this.now = () => {
            return `${this.date.getDate()}-${this.date.getMonth() + 1}-${this.date.getFullYear()} @ ${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`;
        };
        this.date = new Date();
    }
    static getInstance() {
        return (this.intance === null) ? this.intance = new Logger() : this.intance;
    }
    log(message) {
        fs_1.default.appendFile("./logs/13-11-2022.log", `${this.now()} ::\t${message}\n`, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
}
exports.Logger = Logger;
Logger.intance = null;
const logReqest = (req, res, next) => {
    logger().log(`${req.method} ${req.originalUrl}`);
    next();
};
exports.logReqest = logReqest;
const logger = () => {
    return Logger.getInstance();
};
exports.default = logger;
//# sourceMappingURL=logger.js.map