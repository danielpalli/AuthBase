const Usuario = require("../models/Usuario");

const existeCorreo = async (correo = '') => {
    const existeUsuario = await Usuario.findOne({ correo });
    if (existeUsuario) throw new Error(`El correo ${correo} ya esta registrado.`)
}

const existeUsuario = async (nombreDeUsuario = '') => {
    const existeUsuario = await Usuario.findOne({ nombreDeUsuario });
    if (existeUsuario) throw new Error(`El nombre de usuario ${nombreDeUsuario} ya esta registrado.`)
}

module.exports = {
    existeCorreo,
    existeUsuario
}
