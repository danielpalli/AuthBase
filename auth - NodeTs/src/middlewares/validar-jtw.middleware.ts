import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { environment } from "../../config/Environments";
import { handleError } from "../utils/error.handle";

export const validarJwt = (req: Request, res: Response, next: NextFunction): void => {
    const bearerHeader = req.get('Authorization');
    const { body } = req;

    if (!bearerHeader) return handleError(res, 'No se ha enviado el token', 401);

    const token = bearerHeader.split(' ')[1];

    try {
        const payload: any = jwt.verify(token, environment().global.jwtSecret);
        body.id = payload.id;
        next();
    } catch (error) {
        handleError(res, 'Error internal server', 500);
    }
};
