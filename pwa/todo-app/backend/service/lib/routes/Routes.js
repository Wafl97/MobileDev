"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const logger_1 = tslib_1.__importStar(require("../log/logger"));
const UserController_1 = tslib_1.__importDefault(require("../controllers/UserController"));
const TaskController_1 = tslib_1.__importDefault(require("../controllers/TaskController"));
const Logger = (0, logger_1.default)();
const uc = new UserController_1.default();
const tc = new TaskController_1.default();
const Routes = [
    //User Controller
    (0, express_1.Router)().get('/login', logger_1.logReqest, uc.login),
    (0, express_1.Router)().post('/user', logger_1.logReqest, uc.storeUser),
    (0, express_1.Router)().patch('/user', logger_1.logReqest, uc.updateUser),
    (0, express_1.Router)().delete('/user', logger_1.logReqest, uc.removeUser),
    //Task Controller
    (0, express_1.Router)().get('/task', logger_1.logReqest, tc.findAllTasks),
    (0, express_1.Router)().get('/task/:task_id', logger_1.logReqest, tc.findTask),
    (0, express_1.Router)().post('/task', logger_1.logReqest, tc.storeTask),
    (0, express_1.Router)().patch('/task', logger_1.logReqest, tc.updateTask),
    (0, express_1.Router)().delete('/task/:task_id', logger_1.logReqest, tc.removeTask),
];
exports.default = Routes;
//# sourceMappingURL=Routes.js.map