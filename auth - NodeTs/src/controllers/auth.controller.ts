import { Request, Response } from "express";
import bcrypt from "bcrypt";

import { handleError } from "../utils/error.handle";
import { Usuario } from "../models/Usuario";
import { generarJwt } from "../utils/generar-jwt.handle";
import {UsuarioInterface} from "../interfaces/usuario.interface";
import {AuthInterface} from "../interfaces/auth.interface";

export const registro = async (req: Request, res: Response) => {
    try {
        const { body } = req;
        const { password } = body as UsuarioInterface;
        const salt: string = bcrypt.genSaltSync();

        body.password = await bcrypt.hash(password, salt);

        const nuevoUsuario = await Usuario.create(body);
        const { password:_ , ...data} = nuevoUsuario.toJSON();
        const token = await generarJwt(data.id);

        res.json({
            ok: true,
            data,
            token
        } );
    } catch (err: any) {
        handleError(res, err,500);
    }
}
export const login = async (req: Request, res: Response) => {
    try {
        const { correo, password } = req.body as AuthInterface;
        const usuario: any = await Usuario.findOne({ where: { correo } });

        if (!usuario) return handleError(res, 'El correo no existe', 400);
        if (!usuario.cuentaActiva) return handleError(res, 'La cuenta no esta activa', 400);
        if (!bcrypt.compareSync(password, usuario.password)) return handleError(res, 'La contraseña es incorrecta', 400);

        const token = await generarJwt(usuario.id);

        res.json({
            ok: true,
            usuario,
            token
        } );
    } catch (err: any) {
        handleError(res, err,500);
    }
}
