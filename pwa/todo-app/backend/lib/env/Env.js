"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const ProcessEnv = {
    PORT: "",
    URL: "",
    DB_USER: "",
    DB_PASSWORD: "",
    DB_HOST: "",
    DB_PORT: "",
    DB_DATABASE: ""
};
const init = () => {
    dotenv_1.default.config();
    ProcessEnv.PORT = process.env.PORT;
    ProcessEnv.URL = process.env.URL;
    ProcessEnv.DB_USER = process.env.DB_USER;
    ProcessEnv.DB_PASSWORD = process.env.DB_PASSWORD;
    ProcessEnv.DB_HOST = process.env.DB_HOST;
    ProcessEnv.DB_PORT = process.env.DB_PORT;
    ProcessEnv.DB_DATABASE = process.env.DB_DATABASE;
};
exports.init = init;
const Env = () => {
    return ProcessEnv;
};
exports.default = Env;
//# sourceMappingURL=Env.js.map