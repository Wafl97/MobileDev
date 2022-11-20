import { NextFunction, Request, Response } from 'express';
export declare const log: (log: string) => void;
export declare const logReqest: (req: Request, res: Response, next: NextFunction) => void;
