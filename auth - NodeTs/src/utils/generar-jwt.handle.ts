import jwt from 'jsonwebtoken';
import { environment } from "../../config/Environments";

export const generarJwt = (uid: string = ''): Promise<string> => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, environment().global.jwtSecret, {
            expiresIn: '4h',
        }, (err: Error | null, token: string | undefined) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                resolve(token!);
            }
        });
    });
};
