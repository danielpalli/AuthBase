const express = require('express');
const config = require('config');

class Server{
    constructor(){
        this.app = express();
        this.port = eval(config.get('global.port'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Conectado al puerto ${this.port}`);
        });
    }
}


module.exports = Server;