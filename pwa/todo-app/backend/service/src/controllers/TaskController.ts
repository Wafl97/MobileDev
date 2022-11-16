import { Request, Response } from "express";
import { TaskModel, Task } from "../models/TaskModel";

export default class TaskController {

    constructor() {
    }

    async findAllTasks(req: Request, res: Response): Promise<Response> {
        const tasks: Task[] = await TaskModel.find();
        if (!tasks) return res.status(404).json({ "empty": "no tasks found" });
        return res.status(200).json(tasks);
    }

    async findTask(req: Request, res: Response): Promise<Response> {
        const task: Task = await TaskModel.findOne({ _id : req.params.task_id });
        if(!task) return res.status(404).json({"bad id": `task with id [${req.params.task_id}] not found`});
        return res.json(task);
    }

    async storeTask(req: Request, res: Response): Promise<Response> {      
        try {
            const task: Task = await TaskModel.create(req.body);
            return res.status(201).json(task);
        }
        catch(err) {
            return res.status(400).json(err.message);
        }
    }

    async updateTask(req: Request, res: Response): Promise<Response> {
        if (!req.body._id) return res.status(404).json({"missing _id": "req.body._id is undefined"});
        const task: Task = await TaskModel.findByIdAndUpdate(
            { _id : req.body._id },
            { 
                title: req.body.title,
                description: req.body.description,
                state: req.body.state,
            },
            { returnOriginal: false }
        );

        if(!task) return res.status(404).json({"bad id": `task with id [${req.body._id}] not found`});
        return res.json(task);
    }

    async removeTask(req: Request, res: Response): Promise<Response> {       
        const task: Task = await TaskModel.findOneAndDelete({ _id : req.params.task_id });
        if(!task) return res.status(404).json({"bad id": `task with id [${req.params.task_id}] not found`});
        return res.status(200).json(task);
    }
}