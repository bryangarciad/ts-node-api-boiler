import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "../models/enum/status-code.enum";

export class ExceptionMiddleware {
    handleExceptions() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return async (error: Error, req: Request, res: Response, next: NextFunction): Promise<void> => {
            try {
                console.error(error);
                res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
                return;
            } catch (e) {
                next(e);
            }
        };
    }
}
