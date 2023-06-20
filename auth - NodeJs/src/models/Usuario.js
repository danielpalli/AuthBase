const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    nombreDeUsuario: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    correo: {
        type: String,
        unique: true,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],
        enum: ['ADMIN_ROL', 'USUARIO_ROL'],
        default: ['USUARIO_ROL']
    },
    cuentaActiva: {
        type: Boolean,
        default: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('Usuarios', UsuarioSchema);