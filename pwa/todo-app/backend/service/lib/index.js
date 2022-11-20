"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Env_1 = tslib_1.__importDefault(require("./env/Env"));
const express_1 = tslib_1.__importStar(require("express"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const Routes_1 = tslib_1.__importDefault(require("./routes/Routes"));
const MongoDB_1 = tslib_1.__importDefault(require("./database/MongoDB"));
const { URL, PORT, BASE_URL } = Env_1.default;
const Mongo = new MongoDB_1.default();
const App = (0, express_1.default)();
Mongo.connect();
App
    .use(express_1.default.json())
    .use((0, express_1.urlencoded)({ extended: true }))
    .use((0, cors_1.default)());
Routes_1.default.forEach(route => {
    App.use(BASE_URL, route);
});
App.listen(PORT, () => {
    console.log(`Express listening at: ${URL}:${PORT}`);
    console.log(`View the API doc @ ${URL}:${PORT}${BASE_URL}`);
});
//# sourceMappingURL=index.js.map