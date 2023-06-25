import { Router } from "express";
import { login, registro } from "../controllers/auth.controller";
import {check} from "express-validator";
import {existeCorreo, existeUsuario} from "../utils/validators.handle";
import {validarCampos} from "../middlewares/validar-campos.middleware";

const router: Router  = Router();

router.post('/registro',[
    check('nombreDeUsuario', 'El nombre de usuario es obligatorio y debe tener al menos 5 caracteres.').isLength({ min: 5 }),
    check('nombreDeUsuario').custom(existeUsuario),
    check('correo', 'El correo tiene que tener un formato valido.').isEmail(),
    check('correo').custom(existeCorreo),
    check('password', 'La contraseña es obligatoria y debe tener al menos 6 caracteres.').isLength({ min: 6 }),
    validarCampos
], registro);
router.post('/login',[
    check('correo', 'El correo tiene que tener un formato valido.').isEmail(),
    check('password', 'La contraseña es obligatoria y debe tener al menos 6 caracteres.').isLength({ min: 6 }),
    validarCampos
], login);

export default router;
