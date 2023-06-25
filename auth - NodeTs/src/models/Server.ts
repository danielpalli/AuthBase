import express, { Application } from 'express';
import cors from 'cors';

import { environment } from "../../config/Environments";
import authRouter from "../routes/auth.router";
import db from "../db/connection";

class Server {
    private app: Application;
    private readonly port: string ;

    constructor() {
        this.app = express();
        this.port = environment().global.port;

        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {
        try {
             await db.authenticate();
             console.log('Database online');
        } catch (error) {
            console.log(error);
        }
    }
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/api/auth', authRouter  );
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}

export default Server;
