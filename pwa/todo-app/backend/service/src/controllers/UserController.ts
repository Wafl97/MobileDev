import { Request, Response } from "express";

export default class UserController {

    async login(req: Request, res: Response): Promise<Response> {
        return res.status(501).send();
    }

    async storeUser(req: Request, res: Response): Promise<Response> {
        return res.status(501).send();
    }

    async updateUser(req: Request, res: Response): Promise<Response> {
        return res.status(501).send();
    }

    async removeUser(req: Request, res: Response): Promise<Response> {
        return res.status(501).send();
    }
}