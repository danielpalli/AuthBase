require('dotenv').config()
const server = require('./models/server');
const serverApp = new server();

serverApp.listen();