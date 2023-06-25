import { Response } from "express";

export const handleError = (res: Response, error: string, code: number) => {
    res.status(code);
    res.json({
        ok: false,
        error,
    });
}
