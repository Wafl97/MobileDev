import { User, UserModel } from "../models/UserModel";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import ReturnObj from "../types/ReturnObj";

export default class UserController {

    async login(req: Request, res: Response): Promise<Response> {       
        const user: User = await UserModel.findOne({"username": req.body.username});
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(401).json(new ReturnObj("unauthorized"));
        }
        return res.status(202).json(new ReturnObj("success").setValue({ "user": user }));
    }

    async postUser(req: Request, res: Response): Promise<Response> {
        try {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password,salt)
            const user: User = await UserModel.create(req.body);
            return res.status(201).json(new ReturnObj("success").setValue({ "user": user }));
        }
        catch(err) {
            return res.status(400).json(new ReturnObj("user already exists"));
        }
    }

    async patchUser(req: Request, res: Response): Promise<Response> {
        return res.status(501).send();
    }

    async deleteUser(req: Request, res: Response): Promise<Response> {
        return res.status(501).send();
    }
}