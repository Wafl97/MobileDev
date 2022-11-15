import { Request, Response } from "express";
export default class UserController {
    login(req: Request, res: Response): Promise<Response>;
    storeUser(req: Request, res: Response): Promise<Response>;
    updateUser(req: Request, res: Response): Promise<Response>;
    removeUser(req: Request, res: Response): Promise<Response>;
}
