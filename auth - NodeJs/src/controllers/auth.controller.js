const bcrypt = require('bcrypt');

const { handleHttpError } = require("../utils/handleError");
const Usuario = require('../models/Usuario');

const registro = async (req, res) => {
    try {   
        const { body } = req;
        const { password } = body;
        const nuevoUsuario = new Usuario(body);
        const salt = bcrypt.genSaltSync();

        nuevoUsuario.password = await bcrypt.hash(password, salt);
        await nuevoUsuario.save();
        
        const { password:_, __v, ...data } = nuevoUsuario.toJSON();

        res.json({
            data,
        });
    } catch (error) {
        handleHttpError(res, 'Error internal server', 500); 
    }
}

const login = async (req, res) => {
   try {
        const { correo, password } = req.body;
        const usuario = await Usuario.findOne({ correo });

        if (!usuario) return handleHttpError(res, 'El usuario no existe', 401);
        if (!bcrypt.compareSync(password, usuario.password)) return handleHttpError(res, 'La contraseña es incorrecta', 401);

        res.json({
            ok: true,
            usuario: usuario
        });
   } catch (error) {
        handleHttpError(res, 'Error internal server', 500); 
   }
}

module.exports = {
    registro,
    login
}
