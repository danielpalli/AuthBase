import express, { Application } from 'express';
import cors from 'cors';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = '8080';

        this.middlewares();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}

export default Server;
