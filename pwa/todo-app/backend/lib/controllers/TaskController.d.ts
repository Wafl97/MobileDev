import { Request, Response } from "express";
export default class TaskController {
    constructor();
    findAllTasks(req: Request, res: Response): Promise<Response>;
    findTask(req: Request, res: Response): Promise<Response>;
    storeTask(req: Request, res: Response): Promise<Response>;
    updateTask(req: Request, res: Response): Promise<Response>;
    removeTask(req: Request, res: Response): Promise<Response>;
}
