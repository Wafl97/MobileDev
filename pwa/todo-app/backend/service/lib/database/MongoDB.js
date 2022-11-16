"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const Env_1 = tslib_1.__importDefault(require("../env/Env"));
class MongoDB {
    connect() {
        //console.log(`mongodb://${this.DB_USER}:${this.DB_PASSWORD}@${this.DB_HOST}:${this.DB_PORT}/${this.DB_DATABASE}`);
        mongoose_1.default
            .connect(`mongodb://${Env_1.default.DB_HOST}:${Env_1.default.DB_PORT}/${Env_1.default.DB_DATABASE}`)
            .then(() => console.log(`Connected to MongoDB / ${Env_1.default.DB_DATABASE}`), (err) => console.log(err));
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