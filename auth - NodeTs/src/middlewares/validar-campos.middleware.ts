import { NextFunction, Request, Response } from "express";
import { Result, ValidationError, validationResult } from "express-validator";
import { handleError } from "../utils/error.handle";

export const validarCampos = (req: Request, res: Response, next: NextFunction) => {
    const errors:Result<ValidationError> = validationResult(req);
    if (!errors.isEmpty()) {
        return handleError(res, errors.array()[0].msg, 400);
    }
    next();
}
