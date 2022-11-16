import { NextFunction, Request, Response } from 'express';
export declare class Logger {
    private static intance;
    private date;
    private constructor();
    static getInstance(): Logger;
    log(message: string): void;
    private now;
}
export declare const logReqest: (req: Request, res: Response, next: NextFunction) => void;
declare const logger: () => Logger;
export default logger;
