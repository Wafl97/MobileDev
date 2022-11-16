import { Router } from "express";
import logger, { logReqest } from "../log/logger";
import UserController from "../controllers/UserController";
import TaskController from "../controllers/TaskController";

const Logger = logger();

const uc = new UserController();
const tc = new TaskController();

const Routes: Router[] = [
    //User Controller
    Router().get('/login',logReqest,uc.login),
    Router().post('/user',logReqest,uc.storeUser),
    Router().patch('/user',logReqest,uc.updateUser),
    Router().delete('/user',logReqest,uc.removeUser),

    //Task Controller
    Router().get('/task',logReqest,tc.findAllTasks),
    Router().get('/task/:task_id',logReqest,tc.findTask),
    Router().post('/task',logReqest,tc.storeTask),
    Router().patch('/task',logReqest,tc.updateTask),
    Router().delete('/task/:task_id',logReqest,tc.removeTask),
];

export default Routes;