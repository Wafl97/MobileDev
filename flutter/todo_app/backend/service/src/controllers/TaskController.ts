import ReturnObj from "../types/ReturnObj";
import { Request, Response } from "express";
import { TaskModel, Task } from "../models/TaskModel";

export default class TaskController {

    constructor() {
    }

    async getTasks(req: Request, res: Response): Promise<Response> {
        if (!req.params.user_id) return res.status(404).json(new ReturnObj("this user has no tasks"));        
        const tasks: Task[] = await TaskModel.find({ user_id: req.params.user_id }).exec();       
        if (!tasks) return res.status(404).json(new ReturnObj("no tasks found"));
        return res.status(200).json(new ReturnObj("success").setValue({ "tasks": tasks }));
    }

    async postTask(req: Request, res: Response): Promise<Response> {      
        try {
            const task: Task = await TaskModel.create(req.body);
            return res.status(201).json(new ReturnObj("success").setValue({ "task": task }));
        }
        catch(err) {
            return res.status(400).json(new ReturnObj(err.mesaage));
        }
    }

    async patchTask(req: Request, res: Response): Promise<Response> {
        if (!req.body._id) return res.status(404).json(new ReturnObj("req.body._id is undefined"));
        const task: Task = await TaskModel.findByIdAndUpdate(
            { _id : req.body._id },
            { 
                title: req.body.title,
                description: req.body.description,
                state: req.body.state,
            },
            { returnOriginal: false }
        );

        if(!task) return res.status(404).json(new ReturnObj(`task with id [${req.body._id}] not found`));
        return res.json(new ReturnObj("success").setValue({ "task": task }));
    }

    async deleteTask(req: Request, res: Response): Promise<Response> {       
        const task: Task = await TaskModel.findOneAndDelete({ _id : req.params.task_id });
        if(!task) return res.status(404).json(new ReturnObj(`task with id [${req.params.task_id}] not found`));
        return res.status(200).json(new ReturnObj("success").setValue({ "task": task }));
    }
}