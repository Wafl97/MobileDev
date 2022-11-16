import { NextFunction, Request, Response } from 'express';
import fs from 'fs';

export class Logger {

    private static intance: Logger = null;
    private date: Date;

    private constructor(){
        this.date = new Date();
    }

    public static getInstance(): Logger {
        return (this.intance === null) ? this.intance = new Logger() : this.intance;
    }

    public log(message: string): void {
        fs.appendFile("./logs/server.log", `${this.now()} ::\t${message}\n`, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }

    private now = ():string => {
        return `${this.date.getDate()}-${this.date.getMonth() + 1}-${this.date.getFullYear()} @ ${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`
    }

}

export const logReqest = (req: Request, res: Response, next: NextFunction) => {
    logger().log(`${req.method} ${req.originalUrl}`);
    next();
}

const logger = () => {
    return Logger.getInstance();
}

export default logger;