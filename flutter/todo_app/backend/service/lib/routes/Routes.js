"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const UserController_1 = tslib_1.__importDefault(require("../controllers/UserController"));
const TaskController_1 = tslib_1.__importDefault(require("../controllers/TaskController"));
const APIDoc_json_1 = tslib_1.__importDefault(require("./APIDoc.json"));
const Authentication_1 = require("../middleware/Authentication");
const uc = new UserController_1.default();
const tc = new TaskController_1.default();
const Routes = [
    //API Doc
    (0, express_1.Router)().get('/', (req, res) => { return res.status(200).json(APIDoc_json_1.default); }),
    //User Controller
    (0, express_1.Router)().post('/user/login', Authentication_1.authenticate, uc.login),
    (0, express_1.Router)().post('/user', Authentication_1.authenticate, uc.postUser),
    (0, express_1.Router)().patch('/user', Authentication_1.authenticate, uc.patchUser),
    (0, express_1.Router)().delete('/user', Authentication_1.authenticate, uc.deleteUser),
    //Task Controller
    (0, express_1.Router)().get('/task/:user_id', Authentication_1.authenticate, tc.getTasks),
    (0, express_1.Router)().post('/task', Authentication_1.authenticate, tc.postTask),
    (0, express_1.Router)().patch('/task', Authentication_1.authenticate, tc.patchTask),
    (0, express_1.Router)().delete('/task/:task_id', Authentication_1.authenticate, tc.deleteTask),
];
exports.default = Routes;
//# sourceMappingURL=Routes.js.map