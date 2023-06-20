const express = require('express');
const config = require('config');
const cors = require('cors');
const authRouter = require('../routes/auth.router');
const db = require('../db/connection');

class Server{
    #apiPaths = {
        autenticacion: '/api/auth',
    }
    
    constructor(){
        this.app = express();
        this.port = eval(config.get('global.port'));
        this.dbConnection();
        this.middlewares();
        this.routes(); 
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    async dbConnection(){
        try {
            await db();
            console.log('Base de datos conectada');
        } catch (error) {
            console.log(error);
            throw new Error('Error al iniciar la base de datos');
        }
    }

    routes(){
        this.app.use(this.#apiPaths.autenticacion, authRouter);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Conectado al puerto ${this.port}`);
        });
    }
}

module.exports = Server;