require('dotenv').config()
const Server = require('./models/Server');

const serverApp = new Server();

serverApp.listen();