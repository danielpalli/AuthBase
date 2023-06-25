import db from "../db/connection";
import { DataTypes } from "sequelize";
import {ERoles} from "../interfaces/roles.enum";

export const Usuario = db.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombreDeUsuario: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    roles:{
        type: DataTypes.ARRAY(DataTypes.ENUM(...Object.values(ERoles))),
        allowNull: true,
        defaultValue: ['USUARIO_ROL'],
    },
    cuentaActiva: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
});
