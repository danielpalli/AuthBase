const { check } = require('express-validator');
const { login, registro } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validarCampos');
const { existeUsuario, existeCorreo } = require('../utils/handleValidators');

const router = require('express').Router();

router.post('/registro',[
    check('nombreDeUsuario', 'El nombre de usuario es obligatorio y debe tener al menos 5 caracteres.').isLength({ min: 5 }),
    check('nombreDeUsuario').custom(existeUsuario),
    check('correo', 'El correo tiene que tener un formato valido.').isEmail(),
    check('correo').custom(existeCorreo),
    check('password', 'La contraseña es obligatoria y debe tener al menos 6 caracteres.').isLength({ min: 6 }),
    validarCampos
], registro);
router.post('/login', login);

module.exports = router;