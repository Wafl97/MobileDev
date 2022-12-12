import { Router } from "express";
import UserController from "../controllers/UserController";
import TaskController from "../controllers/TaskController";
import APIDoc from "./APIDoc.json";
import { authenticate } from "../middleware/Authentication";

const uc = new UserController();
const tc = new TaskController();

const Routes: Router[] = [
    //API Doc
    Router().get('/',(req,res) => {return res.status(200).json(APIDoc)}),

    //User Controller
    Router().post('/user/login',authenticate,uc.login),
    Router().post('/user',authenticate,uc.postUser),
    Router().patch('/user',authenticate,uc.patchUser),
    Router().delete('/user',authenticate,uc.deleteUser),

    //Task Controller
    Router().get('/task/:user_id',authenticate,tc.getTasks),
    Router().post('/task',authenticate,tc.postTask),
    Router().patch('/task',authenticate,tc.patchTask),
    Router().delete('/task/:task_id',authenticate,tc.deleteTask),
];

export default Routes;