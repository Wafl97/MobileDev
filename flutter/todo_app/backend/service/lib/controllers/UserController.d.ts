import { Request, Response } from "express";
export default class UserController {
    login(req: Request, res: Response): Promise<Response>;
    postUser(req: Request, res: Response): Promise<Response>;
    patchUser(req: Request, res: Response): Promise<Response>;
    deleteUser(req: Request, res: Response): Promise<Response>;
}
