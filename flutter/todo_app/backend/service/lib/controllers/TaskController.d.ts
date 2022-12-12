import { Request, Response } from "express";
export default class TaskController {
    constructor();
    getTasks(req: Request, res: Response): Promise<Response>;
    postTask(req: Request, res: Response): Promise<Response>;
    patchTask(req: Request, res: Response): Promise<Response>;
    deleteTask(req: Request, res: Response): Promise<Response>;
}
