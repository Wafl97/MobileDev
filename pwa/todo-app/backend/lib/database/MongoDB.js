"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const Env_1 = tslib_1.__importDefault(require("../env/Env"));
class MongoDB {
    constructor() {
        const env = (0, Env_1.default)();
        this.DB_USER = env.DB_USER;
        this.DB_PASSWORD = env.DB_PASSWORD;
        this.DB_HOST = env.DB_HOST;
        this.DB_PORT = env.DB_PORT;
        this.DB_DATABASE = env.DB_DATABASE;
    }
    connect() {
        //console.log(`mongodb://${this.DB_USER}:${this.DB_PASSWORD}@${this.DB_HOST}:${this.DB_PORT}/${this.DB_DATABASE}`);
        mongoose_1.default
            .connect(`mongodb://${this.DB_HOST}:${this.DB_PORT}/${this.DB_DATABASE}`)
            .then(() => console.log(`Connected to MongoDB / ${this.DB_DATABASE}`), (err) => console.log(err));
        return true;
    }
    disconnect() {
        mongoose_1.default.disconnect();
        return true;
    }
    query(query) {
        throw new Error("Method not implemented.");
    }
}
exports.default = MongoDB;
//# sourceMappingURL=MongoDB.js.map