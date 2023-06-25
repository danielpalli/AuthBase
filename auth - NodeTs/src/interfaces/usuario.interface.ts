import { AuthInterface } from "./auth.interface";

export interface UsuarioInterface extends AuthInterface {
    nombreDeUsuario: string;
    roles: string[];
    cuentaActiva: boolean;
}
