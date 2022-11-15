"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importStar(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const logger_1 = tslib_1.__importDefault(require("./log/logger"));
const Routes_1 = tslib_1.__importDefault(require("./routes/Routes"));
const TestDB_1 = tslib_1.__importDefault(require("./database/TestDB"));
const MongoDB_1 = tslib_1.__importDefault(require("./database/MongoDB"));
const Env = tslib_1.__importStar(require("./env/Env"));
Env.init();
//dotenv.config();
//const PORT = process.env.PORT;
//const URL = process.env.URL;
const { PORT, URL } = Env.default();
const Logger = (0, logger_1.default)();
// Not a real db
const Mongo = new MongoDB_1.default();
Mongo.connect();
const DB = (0, TestDB_1.default)();
const App = (0, express_1.default)();
Logger.log("Starting server...");
Logger.log("Attempting to connect to DB...");
if (!DB.connect()) {
    console.log("No DB connection!");
    process.exit(1);
}
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