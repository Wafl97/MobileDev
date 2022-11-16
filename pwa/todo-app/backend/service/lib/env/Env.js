"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv_1 = tslib_1.__importDefault(require("dotenv"));
const path_1 = tslib_1.__importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.resolve(__dirname, process.env.NODE_ENV ? `../../.env.${process.env.NODE_ENV}` : "../../.env.develop") });
exports.default = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    URL: process.env.URL,
    BASE_URL: process.env.BASE_URL,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_DATABASE: process.env.DB_DATABASE,
};
//# sourceMappingURL=Env.js.map