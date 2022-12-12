import { NextFunction, Request, Response } from "express"
import ReturnObj from "../types/ReturnObj";
import Env from "../env/Env";

export const authenticate = async (req: Request, res: Response, next: NextFunction) => { 
        console.log(req.method, req.url);    
        console.log(req.body);
        if (!req.header("api_key")) return res.status(200).json(new ReturnObj("missing api key"));
        if (req.header("api_key") !== Env.KEY) return res.status(200).json(new ReturnObj("invalid api key"));
        next();
}
