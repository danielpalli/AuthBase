import { Usuario } from '../models/Usuario';

const existeCorreo = async (correo: string = ''): Promise<void> => {
    const existeUsuario: any = await Usuario.findOne({ where: { correo } });
    if (existeUsuario) throw new Error(`El correo ${correo} ya está registrado.`);
};

const existeUsuario = async (nombreDeUsuario: string = ''): Promise<void> => {
    const existeUsuario: any = await Usuario.findOne({ where: { nombreDeUsuario } });
    if (existeUsuario) throw new Error(`El nombre de usuario ${nombreDeUsuario} ya está registrado.`);
};

export { existeCorreo, existeUsuario };
