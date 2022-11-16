"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importStar(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const logger_1 = tslib_1.__importDefault(require("./log/logger"));
const Routes_1 = tslib_1.__importDefault(require("./routes/Routes"));
const MongoDB_1 = tslib_1.__importDefault(require("./database/MongoDB"));
const Env_1 = tslib_1.__importDefault(require("./env/Env"));
//dotenv.config();
const PORT = Env_1.default.PORT;
const URL = Env_1.default.URL;
const Logger = (0, logger_1.default)();
// Not a real db
const Mongo = new MongoDB_1.default();
//const DB = testDB();
const App = (0, express_1.default)();
Logger.log("Starting server...");
Logger.log("Attempting to connect to DB...");
Mongo.connect();
Logger.log("DB connection established");
App
    .use(express_1.default.json())
    .use((0, express_1.urlencoded)({ extended: true }))
    .use((0, cors_1.default)());
Routes_1.default.forEach(route => {
    App.use('/v1/', route);
});
App.listen(PORT, () => {
    Logger.log(`Express listening at: ${URL}:${PORT}`);
    console.log(`Express listening at: ${URL}:${PORT}`);
});
//# sourceMappingURL=index.js.map